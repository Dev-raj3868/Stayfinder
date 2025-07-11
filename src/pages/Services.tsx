
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SearchModal from '@/components/SearchModal';
import LoginModal from '@/components/LoginModal';
import { 
  Home, 
  Shield, 
  CreditCard, 
  Headphones, 
  MapPin, 
  Star,
  Wifi,
  Car,
  Coffee,
  Utensils,
  Camera,
  Calendar
} from 'lucide-react';

interface SearchFilters {
  location: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  priceRange: [number, number];
}

const Services = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleSearch = (filters: SearchFilters) => {
    console.log('Search filters:', filters);
  };

  const mainServices = [
    {
      icon: Home,
      title: 'Unique Accommodations',
      description: 'From cozy apartments to luxury villas, find the perfect place for your stay.',
      features: ['Verified listings', 'High-quality photos', 'Detailed descriptions', 'Instant booking'],
      color: 'bg-ocean-50 text-ocean-600 border-ocean-200'
    },
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'Travel with confidence knowing your safety and security are our priorities.',
      features: ['Identity verification', 'Secure payments', '24/7 monitoring', 'Insurance coverage'],
      color: 'bg-coral-50 text-coral-600 border-coral-200'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Our dedicated support team is always here to help you.',
      features: ['Live chat support', 'Multi-language help', 'Emergency assistance', 'Travel guidance'],
      color: 'bg-sage-50 text-sage-600 border-sage-200'
    }
  ];

  const amenities = [
    { icon: Wifi, name: 'Free WiFi', description: 'High-speed internet' },
    { icon: Car, name: 'Parking', description: 'Free parking available' },
    { icon: Coffee, name: 'Kitchen', description: 'Fully equipped kitchen' },
    { icon: Utensils, name: 'Dining', description: 'Restaurant on-site' },
    { icon: Camera, name: 'Photo Tours', description: 'Professional photography' },
    { icon: Calendar, name: 'Event Planning', description: 'Special occasions' }
  ];

  const hostServices = [
    {
      title: 'Professional Photography',
      description: 'High-quality photos that showcase your property beautifully',
      price: 'Starting at $199'
    },
    {
      title: 'Property Management',
      description: 'Full-service management including cleaning and maintenance',
      price: 'Starting at 15%'
    },
    {
      title: 'Dynamic Pricing',
      description: 'AI-powered pricing optimization to maximize your earnings',
      price: 'Included free'
    },
    {
      title: 'Guest Communication',
      description: '24/7 guest support and communication management',
      price: 'Starting at $99/month'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        onSearchClick={() => setIsSearchOpen(true)}
        onLoginClick={() => setIsLoginOpen(true)}
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-ocean-600 via-coral-500 to-sage-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Everything you need for the perfect travel experience, all in one place
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">Why Choose StayFinder?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive services to make your travel experience seamless and memorable
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {mainServices.map((service, index) => (
              <div 
                key={service.title}
                className={`p-8 rounded-2xl border-2 ${service.color} hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-center mb-6">
                  <service.icon className="h-16 w-16 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
                
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <Star className="h-4 w-4 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">Premium Amenities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enjoy world-class amenities and services at our featured properties
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {amenities.map((amenity, index) => (
              <div 
                key={amenity.name}
                className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fade-in group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <amenity.icon className="h-12 w-12 mx-auto mb-4 text-ocean-600 group-hover:text-coral-500 transition-colors duration-300" />
                <h3 className="font-semibold mb-2">{amenity.name}</h3>
                <p className="text-sm text-gray-600">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Host Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">Services for Hosts</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional services to help you maximize your property's potential
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {hostServices.map((service, index) => (
              <div 
                key={service.title}
                className="p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  <span className="text-ocean-600 font-semibold bg-ocean-50 px-3 py-1 rounded-full text-sm">
                    {service.price}
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-ocean text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of satisfied travelers and hosts who trust StayFinder for their accommodation needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-white text-ocean-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                onClick={() => setIsSearchOpen(true)}
              >
                Book Your Stay
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-ocean-700 transition-all duration-300 transform hover:scale-105">
                List Your Property
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Modals */}
      <SearchModal 
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSearch={handleSearch}
      />
      
      <LoginModal 
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
      />
    </div>
  );
};

export default Services;
