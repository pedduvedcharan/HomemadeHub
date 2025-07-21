import Button from '@/components/Button';
import { MapPin, Clock, Star, Shield, Users } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Blue Gradient */}
      <section className="bg-hero-gradient min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Content */}
            <div className="max-w-2xl">
              {/* Two-line Heading */}
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-white mb-6">
                Discover<br />
                <span className="text-accent-yellow">Homemade</span> Delights
              </h1>
              
              {/* Sub-headline */}
              <p className="text-primary-100 text-xl mb-8 leading-relaxed">
                Connect with local artisans and discover unique homemade treats, crafts, and more. 
                Support your community while enjoying authentic, handcrafted products.
              </p>
              
              {/* Address Search Input Group */}
              <div className="flex bg-white rounded-lg shadow-lg mb-8">
                <div className="flex items-center px-4">
                  <MapPin className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Enter your address to find vendors nearby"
                  className="flex-1 px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none"
                />
                <button className="bg-primary-600 text-white px-6 py-3 rounded-r-lg hover:bg-primary-700 transition-colors">
                  Search
                </button>
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
            
            {/* Right Column - Feature Boxes */}
            <div className="max-w-md space-y-6">
              {/* Feature Box 1 - Fast Delivery */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-11 h-11 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">Fast Delivery</h3>
                    <p className="text-primary-100 text-sm">Get your orders delivered within hours, not days</p>
                  </div>
                </div>
              </div>
              
              {/* Feature Box 2 - Quality Assured */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-11 h-11 bg-accent-yellow rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">Quality Assured</h3>
                    <p className="text-primary-100 text-sm">Every vendor is verified and quality-checked</p>
                  </div>
                </div>
              </div>
              
              {/* Feature Box 3 - Local Community */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-11 h-11 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">Local Community</h3>
                    <p className="text-primary-100 text-sm">Support local artisans and small businesses</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Stats Row */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <div className="flex justify-center space-x-12 text-white">
              <div className="text-center">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-primary-100 text-sm">Vendors</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">10k+</div>
                <div className="text-primary-100 text-sm">Customers</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1">
                  <div className="text-2xl font-bold">4.8</div>
                  <Star className="w-5 h-5 text-accent-yellow fill-current" />
                </div>
                <div className="text-primary-100 text-sm">Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
