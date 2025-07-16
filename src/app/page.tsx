import Link from 'next/link';
import { MapPin, Clock, Star, Truck } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-100 to-orange-200 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Fresh Food from
              <span className="text-orange-600"> Local Vendors</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover amazing homemade dishes from talented local chefs, bakers, and food artisans in your neighborhood.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/browse" className="bg-orange-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-orange-700 transition-colors text-lg">
                Browse Vendors
              </Link>
              <Link href="/sign-up" className="bg-gray-200 text-gray-900 px-8 py-4 rounded-lg font-medium hover:bg-gray-300 transition-colors text-lg">
                Join as Customer
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Homemade Hub?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We connect you with local food artisans who create delicious, fresh meals with love and care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Local Vendors
              </h3>
              <p className="text-gray-600">
                Discover talented chefs and bakers in your neighborhood
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Fresh & Fast
              </h3>
              <p className="text-gray-600">
                Fresh ingredients, made to order, delivered quickly
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Quality Assured
              </h3>
              <p className="text-gray-600">
                All vendors are verified and quality-checked
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Easy Delivery
              </h3>
              <p className="text-gray-600">
                Track your order and get real-time updates
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of customers who are already enjoying fresh, homemade food from local vendors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/browse" className="bg-orange-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-orange-700 transition-colors text-lg">
              Start Browsing
            </Link>
            <Link href="/vendor/signup" className="bg-gray-200 text-gray-900 px-8 py-4 rounded-lg font-medium hover:bg-gray-300 transition-colors text-lg">
              Become a Vendor
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
