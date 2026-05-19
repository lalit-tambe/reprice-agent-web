import React, { useState } from 'react';
import { Store, ShoppingBag, Link as LinkIcon, HelpCircle } from 'lucide-react';

export default function EmptyStoreState() {
    const [shopDomain, setShopDomain] = useState('');

    const shopifyConnectUrl = shopDomain 
        ? `/auth/shopify/redirect?shop=${encodeURIComponent(shopDomain)}` 
        : '/auth/shopify/redirect';

    return (
        <div className="flex-1 flex flex-col items-center pt-20 px-canvas-padding pb-canvas-padding w-full max-w-5xl mx-auto">
            <div className="text-center mb-12 max-w-2xl">
                <h1 className="text-3xl font-display-bold text-text-primary mb-4">Welcome to RepriceAgent</h1>
                <p className="text-text-secondary font-body-base text-body-base">Connect your first e-commerce store to sync your inventory and activate AI repricing.</p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 w-full justify-center">
                {/* Shopify Card */}
                <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-border-subtle p-8 flex flex-col items-center text-center w-full max-w-md relative overflow-hidden group hover:border-primary transition-colors duration-300">
                    <div className="h-16 w-16 bg-surface-container-low rounded-full flex items-center justify-center mb-6 text-primary border border-border-subtle group-hover:scale-110 transition-transform duration-300">
                        <Store className="w-8 h-8" />
                    </div>
                    <h2 className="font-header-semibold text-header-semibold text-text-primary mb-3">Shopify</h2>
                    <p className="font-body-base text-body-base text-text-secondary mb-6 flex-1">Sync products and manage pricing via the Shopify Admin API.</p>
                    
                    <div className="w-full mb-4">
                        <input 
                            type="text" 
                            value={shopDomain}
                            onChange={(e) => setShopDomain(e.target.value)}
                            placeholder="your-store.myshopify.com" 
                            className="w-full bg-surface-container-low border border-border-subtle text-text-primary rounded-lg px-4 py-2 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                        />
                    </div>

                    <a href={shopifyConnectUrl} className="w-full bg-primary text-on-primary font-subtitle-medium text-subtitle-medium py-3 px-6 rounded-lg shadow-sm hover:bg-primary-container transition-colors duration-200 flex items-center justify-center gap-2">
                        <LinkIcon className="w-4 h-4" />
                        Connect Shopify
                    </a>
                </div>

                {/* Amazon Card */}
                <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-border-subtle p-8 flex flex-col items-center text-center w-full max-w-md relative overflow-hidden group hover:border-text-secondary transition-colors duration-300">
                    <div className="h-16 w-16 bg-surface-container-low rounded-full flex items-center justify-center mb-6 text-text-secondary border border-border-subtle group-hover:scale-110 transition-transform duration-300">
                        <ShoppingBag className="w-8 h-8" />
                    </div>
                    <h2 className="font-header-semibold text-header-semibold text-text-primary mb-3">Amazon</h2>
                    <p className="font-body-base text-body-base text-text-secondary mb-8 flex-1">Sync catalog and repricing via the Selling Partner API (SP-API).</p>
                    <button className="w-full bg-surface-container-high text-on-surface font-subtitle-medium text-subtitle-medium py-3 px-6 rounded-lg border border-border-subtle hover:bg-surface-variant transition-colors duration-200 flex items-center justify-center gap-2">
                        <LinkIcon className="w-4 h-4" />
                        Connect Amazon
                    </button>
                </div>
            </div>
            
            <div className="mt-12 text-center">
                <a className="text-text-secondary font-label-sm text-label-sm hover:text-primary transition-colors flex items-center justify-center gap-1" href="#">
                    <HelpCircle className="w-4 h-4" />
                    Need help connecting? View our integration guide.
                </a>
            </div>
        </div>
    );
}
