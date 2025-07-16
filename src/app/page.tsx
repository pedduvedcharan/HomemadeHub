import Link from 'next/link';
import { MapPin, Clock, Star, Search, Heart, ArrowLeft, ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Location */}
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-green-600">
                Homemade Hub
              </h1>
              <div className="flex items-center space-x-2 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Set your location</span>
              </div>
            </div>

            {/* Delivery Time and Search */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-gray-600">
                <Clock className="w-4 h-4" />
                <span className="text-sm">Deliver now</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Search className="w-4 h-4" />
                <span className="text-sm">Search</span>
              </div>
              <Link href="/sign-in" className="text-sm font-medium text-gray-900 hover:text-green-600">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Special Offers Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Special Offers</h2>
              <p className="text-gray-600">Provided by local vendors</p>
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Vendor Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <div className="h-48 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                  <span className="text-gray-500">Vendor Image</span>
                </div>
                <div className="absolute top-3 right-3 bg-purple-600 text-white px-2 py-1 rounded text-xs font-medium">
                  Spend $15, Save $3
                </div>
                <button className="absolute bottom-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
                  <Heart className="w-4 h-4 text-gray-400" />
                </button>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">Sarah's Coffee Corner</h3>
                <p className="text-sm text-gray-600 mb-2">$$ • Coffee & Tea • Breakfast • Pastries</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">20-30 Min</span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="font-medium">4.8</span>
                    <span className="text-gray-500">(26)</span>
                  </div>
                  <span className="text-gray-600">$6.99 Fee</span>
                </div>
              </div>
            </div>

            {/* Vendor Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                  <span className="text-gray-500">Vendor Image</span>
                </div>
                <div className="absolute top-3 right-3 bg-purple-600 text-white px-2 py-1 rounded text-xs font-medium">
                  Spend $20, Save $5
                </div>
                <button className="absolute bottom-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
                  <Heart className="w-4 h-4 text-gray-400" />
                </button>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">Fresh Juice Bar</h3>
                <p className="text-sm text-gray-600 mb-2">$$ • Healthy • Juice & Smoothies • Vegan</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">30-40 Min</span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="font-medium">4.6</span>
                    <span className="text-gray-500">(42)</span>
                  </div>
                  <span className="text-gray-600">$7.99 Fee</span>
                </div>
              </div>
            </div>

            {/* Vendor Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <span className="text-gray-500">Vendor Image</span>
                </div>
                <div className="absolute top-3 right-3 bg-purple-600 text-white px-2 py-1 rounded text-xs font-medium">
                  Spend $15, Save $3
                </div>
                <button className="absolute bottom-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
                  <Heart className="w-4 h-4 text-gray-400" />
                </button>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">Healthy Bites</h3>
                <p className="text-sm text-gray-600 mb-2">$ • Healthy • Gluten Free • Organic</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">25-35 Min</span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="font-medium">4.6</span>
                    <span className="text-gray-500">(191)</span>
                  </div>
                  <span className="text-gray-600">$7.99 Fee</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Near You Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Popular Near You</h2>
            <div className="flex items-center space-x-2">
              <Link href="/browse" className="text-sm font-medium text-green-600 hover:text-green-700">
                View all
              </Link>
              <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Popular Vendor Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <div className="h-48 bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center">
                  <span className="text-gray-500">Vendor Image</span>
                </div>
                <button className="absolute bottom-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
                  <Heart className="w-4 h-4 text-gray-400" />
                </button>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">Taco Truck Delights</h3>
                <p className="text-sm text-gray-600 mb-2">$$ • Mexican • Street Food • Quick Bites</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">15-25 Min</span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="font-medium">4.7</span>
                    <span className="text-gray-500">(89)</span>
                  </div>
                  <span className="text-gray-600">$5.99 Fee</span>
                </div>
              </div>
            </div>

            {/* Popular Vendor Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <div className="h-48 bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center">
                  <span className="text-gray-500">Vendor Image</span>
                </div>
                <button className="absolute bottom-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
                  <Heart className="w-4 h-4 text-gray-400" />
                </button>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">Bella's Bakery</h3>
                <p className="text-sm text-gray-600 mb-2">$$ • Bakery • Desserts • Coffee</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">25-35 Min</span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="font-medium">4.9</span>
                    <span className="text-gray-500">(203)</span>
                  </div>
                  <span className="text-gray-600">$8.99 Fee</span>
                </div>
              </div>
            </div>

            {/* Popular Vendor Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <div className="h-48 bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                  <span className="text-gray-500">Vendor Image</span>
                </div>
                <button className="absolute bottom-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
                  <Heart className="w-4 h-4 text-gray-400" />
                </button>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">Pizza Palace</h3>
                <p className="text-sm text-gray-600 mb-2">$$ • Italian • Pizza • Pasta</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">30-45 Min</span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="font-medium">4.5</span>
                    <span className="text-gray-500">(156)</span>
                  </div>
                  <span className="text-gray-600">$9.99 Fee</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
