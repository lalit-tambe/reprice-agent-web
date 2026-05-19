<?php

namespace App\Http\Controllers;

use App\Models\Store;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;

class ShopifyAuthController extends Controller
{
    /**
     * Redirect the user to the Shopify authentication page.
     * Note: Shopify usually requires a 'shop' parameter (e.g. mystore.myshopify.com)
     * To support this, we would pass it like `Socialite::driver('shopify')->with(['shop' => $request->shop])->redirect();`
     * For now, we'll try standard redirect.
     */
    public function redirect(Request $request)
    {
        // Shopify requires a store domain to redirect to.
        $shop = $request->input('shop');

        if ($shop) {
            // Clean up the shop URL (remove http://, https://, and trailing slashes)
            $shop = preg_replace('#^https?://#', '', $shop);
            $shop = rtrim($shop, '/');
            $request->merge(['shop' => $shop]);
        } else {
            // Fallback for testing
            $request->merge(['shop' => env('SHOPIFY_STORE_DOMAIN', 'test-store.myshopify.com')]);
        }

        return Socialite::driver('shopify')->redirect();
    }

    /**
     * Obtain the user information from Shopify.
     */
    public function callback(Request $request)
    {
        try {
            $shopifyUser = Socialite::driver('shopify')->user();
        } catch (\Exception $e) {
            return redirect()->route('dashboard')->with('error', 'Authentication failed: ' . $e->getMessage());
        }

        // Store or update the Shopify connection for the authenticated user
        $user = auth()->user();

        $storeDomain = $shopifyUser->nickname ?? 'store.myshopify.com';

        $user->stores()->updateOrCreate(
            ['platform' => 'shopify'],
            [
                'store_domain' => $storeDomain,
                'access_token' => $shopifyUser->token,
                // Assuming refresh_token and expires_in could be null, handling accordingly
                'refresh_token' => $shopifyUser->refreshToken ?? null,
                'token_expires_at' => property_exists($shopifyUser, 'expiresIn') && $shopifyUser->expiresIn 
                                      ? now()->addSeconds($shopifyUser->expiresIn) 
                                      : null,
                'is_active' => true,
            ]
        );

        return redirect()->route('dashboard')->with('success', 'Shopify store connected successfully.');
    }
}
