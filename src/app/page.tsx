import Button from '@/components/Button';
import InputGroup from '@/components/InputGroup';
import Card from '@/components/Card';
import { MapPin, Search, Clock, Star, Shield, Users } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Blue Gradient */}
      <section className="bg-hero-gradient min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Content */}
            <div className="max-w-2xl">
              {/* Two-line Heading - Exact typography from spec */}
              <h1 className="text-hero-mobile md:text-hero-desktop font-black leading-tight text-text-base mb-6">
                Discover<br />
                <span className="text-yellow-accent">Homemade</span> Delights
              </h1>
              
              {/* Sub-headline */}
              <p className="text-primary-100 text-xl mb-8 leading-relaxed">
                Connect with local artisans and discover unique homemade treats, crafts, and more. 
                Support your community while enjoying authentic, handcrafted products.
              </p>
              
              {/* Address Search Input Group */}
              <div className="mb-8">
                <InputGroup
                  variant="search"
                  placeholder="Enter your address to find vendors nearby"
                  icon={<MapPin className="w-5 h-5" />}
                  suffix={
                    <button className="bg-primary-600 text-white p-2 rounded-lg hover:bg-primary-700 transition-colors">
                      <Search className="w-5 h-5" />
                    </button>
                  }
                />
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
            <div className="max-w-md space-y-6">
              {/* Feature Card 1 - Fast Delivery */}
              <Card variant="feature" className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-11 h-11 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-text-base font-semibold text-lg mb-1">Fast Delivery</h3>
                    <p className="text-primary-100 text-sm">Get your orders delivered within hours, not days</p>
                  </div>
                </div>
              </Card>
              
              {/* Feature Card 2 - Quality Assured */}
              <Card variant="feature" className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-11 h-11 bg-yellow-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-blue-start" />
                  </div>
                  <div>
                    <h3 className="text-text-base font-semibold text-lg mb-1">Quality Assured</h3>
                    <p className="text-primary-100 text-sm">Every vendor is verified and quality-checked</p>
                  </div>
                </div>
              </Card>
              
              {/* Feature Card 3 - Local Community */}
              <Card variant="feature" className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-11 h-11 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-text-base font-semibold text-lg mb-1">Local Community</h3>
                    <p className="text-primary-100 text-sm">Support local artisans and small businesses</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          
          {/* Bottom Stats Row - Exact from spec */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <div className="flex justify-center space-x-12 text-text-base">
              <div className="text-center">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-primary-100 text-sm">Active Vendors</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">10K+</div>
                <div className="text-primary-100 text-sm">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1">
                  <div className="text-2xl font-bold">4.8</div>
                  <Star className="w-5 h-5 text-yellow-accent fill-current" />
                </div>
                <div className="text-primary-100 text-sm">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
