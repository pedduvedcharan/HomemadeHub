import Button from '@/components/Button';
import Card from '@/components/Card';
import { MapPin, Search, Clock, Star } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Dark Blue Gradient */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column - Content */}
            <div className="max-w-2xl">
              {/* Two-line Heading - Exact typography from mockup */}
              <h1 className="text-6xl md:text-8xl font-black leading-tight text-white mb-8">
                Discover<br />
                <span className="text-yellow-400">Homemade</span> Delights
              </h1>
              
              {/* Sub-headline - Exact text from mockup */}
              <p className="text-blue-100 text-xl mb-10 leading-relaxed">
                Connect with local food vendors and enjoy authentic homemade meals delivered fresh to your door.
              </p>
              
              {/* Address Search Input Group */}
              <div className="mb-10">
                <div className="relative">
                  <div className="flex items-center bg-white rounded-xl p-2 shadow-lg">
                    <MapPin className="w-5 h-5 text-gray-400 ml-3" />
                    <input
                      type="text"
                      placeholder="Enter your address"
                      className="flex-1 px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none"
                    />
                    <button className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors">
                      <Search className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="accent" size="lg" className="w-full sm:w-auto">
                  Order Now
                </Button>
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  Become a Vendor
                </Button>
              </div>
            </div>
            
            {/* Right Column - Feature Cards */}
            <div className="max-w-md space-y-8">
              {/* Feature Card 1 - Fast Delivery */}
              <Card variant="feature" className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-yellow-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-7 h-7 text-blue-900" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-2">Fast Delivery</h3>
                    <p className="text-blue-100 text-base leading-relaxed">Fresh homemade meals delivered in 30-45 minutes</p>
                  </div>
                </div>
              </Card>
              
              {/* Feature Card 2 - Quality Assured */}
              <Card variant="feature" className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Star className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-2">Quality Assured</h3>
                    <p className="text-blue-100 text-base leading-relaxed">All vendors are verified with 4+ star ratings</p>
                  </div>
                </div>
              </Card>
              
              {/* Feature Card 3 - Local Community */}
              <Card variant="feature" className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-2">Local Community</h3>
                    <p className="text-blue-100 text-base leading-relaxed">Support local cooks and discover neighborhood flavors</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          
          {/* Bottom Stats Row - Exact from mockup */}
          <div className="mt-20 pt-10 border-t border-white/20">
            <div className="flex justify-center space-x-16 text-white">
              <div className="text-center">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-blue-100 text-base">Active Vendors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">10K+</div>
                <div className="text-blue-100 text-base">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2">
                  <div className="text-3xl font-bold">4.8</div>
                  <Star className="w-6 h-6 text-yellow-400 fill-current" />
                </div>
                <div className="text-blue-100 text-base">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
