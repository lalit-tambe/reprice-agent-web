<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Dedicated admin account
        User::factory()->create([
            'name' => 'Admin User',
            'email' => 'admin@repriceagent.local',
            'password' => Hash::make('password'),
        ]);

        // 5 Random test users
        User::factory(5)->create();
    }
}
