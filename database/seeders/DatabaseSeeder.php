<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::factory()->create([
            'name' => 'Log Manager',
            'email' => 'logmanager@logmanager.com.br',
            'password' => Hash::make('12345678'),
        ]);
        $this->call([
            DriverOrderSeeder::class,
        ]);
    }
}
