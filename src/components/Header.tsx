"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChefHat, User, ShoppingCart, LogOut, Bell } from 'lucide-react';
import Image from 'next/image';

// Mock data for demonstration
const mockUser = {
  id: '1',
  email: 'test@example.com',
};
const mockProfile = {
  id: '1',
  full_name: 'Test User',
  first_name: 'Test',
  role: 'customer', // or 'vendor'
  avatar_url: '',
};
const mockCartItems = [
  { id: 1, name: 'Dish 1', quantity: 2 },
  { id: 2, name: 'Dish 2', quantity: 1 },
];

const Header: React.FC = () => {
  // In a real app, replace these with your auth/cart hooks
  const user = mockUser;
  const profile = mockProfile;
  const items = mockCartItems;
  const cartItemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  // Removed unused variable 'pathname'
  // const pathname = usePathname();

  const handleSignOut = async () => {
    // Add your sign out logic here
    window.location.href = '/';
  };

  return (
    <header className="bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <ChefHat className="h-8 w-8 text-blue-600" />
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-gray-900">Homemade Hub</span>
              {/* Demo Mode badge (optional) */}
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/vendors"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Browse Vendors
            </Link>
            <Link
              href="/how-it-works"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              How It Works
            </Link>
            {profile?.role === 'vendor' && (
              <Link
                href="/vendor/dashboard"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Vendor Dashboard
              </Link>
            )}
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            {user && profile ? (
              <>
                {/* Notifications */}
                <button className="p-2 text-gray-500 hover:text-gray-700 relative">
                  <Bell className="h-5 w-5" />
                </button>

                {/* Cart (for customers) */}
                {profile?.role === 'customer' && (
                  <Link
                    href="/cart"
                    className="p-2 text-gray-500 hover:text-gray-700 relative"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    {cartItemCount > 0 && (
                      <span className="absolute -top-1 -right-1 h-4 w-4 bg-blue-600 rounded-full text-xs text-white flex items-center justify-center">
                        {cartItemCount}
                      </span>
                    )}
                  </Link>
                )}

                {/* Profile dropdown */}
                <div className="relative group">
                  <button className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100">
                    {profile.avatar_url ? (
                      <Image
                        src={profile.avatar_url}
                        alt={profile.full_name}
                        width={32}
                        height={32}
                        className="h-8 w-8 rounded-full object-cover"
                      />
                    ) : (
                      <User className="h-5 w-5 text-gray-500" />
                    )}
                    <span className="text-sm font-medium text-gray-700 hidden sm:inline">
                      {profile.first_name || profile.full_name?.split(' ')[0] || 'User'}
                    </span>
                  </button>

                  {/* Dropdown menu */}
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-1">
                      <Link
                        href="/profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Profile Settings
                      </Link>
                      <Link
                        href="/orders"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Order History
                      </Link>
                      {profile.role === 'customer' && (
                        <Link
                          href="/become-vendor"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Become a Vendor
                        </Link>
                      )}
                      <hr className="my-1" />
                      <button
                        onClick={handleSignOut}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <LogOut className="inline h-4 w-4 mr-2" />
                        Sign Out
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              /* Sign In/Sign Up buttons when not authenticated */
              <div className="flex items-center space-x-3">
                <Link
                  href="/login"
                  className="text-gray-700 hover:text-blue-600 font-medium"
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 