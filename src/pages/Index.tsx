
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SearchModal from '@/components/SearchModal';
import PropertyCard from '@/components/PropertyCard';
import LoginModal from '@/components/LoginModal';
import { mockProperties, Property } from '@/data/mockProperties';
import { MapPin, Star, TrendingUp } from 'lucide-react';

interface SearchFilters {
  location: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  priceRange: [number, number];
}

const Index = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(mockProperties);

  const handleSearch = (filters: SearchFilters) => {
    console.log('Search filters:', filters);
    
    let filtered = mockProperties;
    
    // Filter by location
    if (filters.location) {
      filtered = filtered.filter(property => 
        property.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }
    
    // Filter by price range
    filtered = filtered.filter(property => 
      property.price >= filters.priceRange[0] && property.price <= filters.priceRange[1]
    );
    
    setFilteredProperties(filtered);
  };

  const handlePropertyClick = (property: Property) => {
    console.log('Property clicked:', property);
    // This would navigate to property detail page in a real app
  };

  const popularDestinations = [
    { name: 'New York', image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=300&h=200&fit=crop', properties: 1250 },
    { name: 'Los Angeles', image: 'https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=300&h=200&fit=crop', properties: 890 },
    { name: 'Miami', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop', properties: 750 },
    { name: 'San Francisco', image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=300&h=200&fit=crop', properties: 620 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header 
        onSearchClick={() => setIsSearchOpen(true)}
        onLoginClick={() => setIsLoginOpen(true)}
      />
      
      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=1200&h=800&fit=crop)',
          }}
        ></div>
        <div className="absolute inset-0 bg-primary/80"></div>
        <div className="relative container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in hover:scale-105 transition-transform duration-300">
            Find Your Perfect Stay
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90 animate-fade-in hover:opacity-100 transition-opacity duration-300" style={{ animationDelay: '0.2s' }}>
            Discover unique accommodations around the world, from cozy apartments to luxury villas
          </p>
          <button 
            className="btn-primary text-lg px-8 py-4 animate-scale-in hover:shadow-2xl transform hover:scale-110 transition-all duration-300"
            onClick={() => setIsSearchOpen(true)}
            style={{ animationDelay: '0.4s' }}
          >
            Start Your Search
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in hover-lift group cursor-pointer">
              <div className="text-3xl font-bold text-primary mb-2 group-hover:text-primary/80 transition-colors duration-300">2M+</div>
              <div className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">Happy Guests</div>
            </div>
            <div className="animate-fade-in hover-lift group cursor-pointer" style={{ animationDelay: '0.1s' }}>
              <div className="text-3xl font-bold text-accent mb-2 group-hover:text-accent/80 transition-colors duration-300">100K+</div>
              <div className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">Properties Listed</div>
            </div>
            <div className="animate-fade-in hover-lift group cursor-pointer" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl font-bold text-primary mb-2 group-hover:text-primary/80 transition-colors duration-300">190+</div>
              <div className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 hover:text-primary transition-colors duration-300">Popular Destinations</h2>
            <p className="text-muted-foreground text-lg hover:text-foreground transition-colors duration-300">Explore trending locations loved by travelers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularDestinations.map((dest, index) => (
              <div 
                key={dest.name} 
                className="relative rounded-xl overflow-hidden cursor-pointer group animate-fade-in hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img 
                  src={dest.image} 
                  alt={dest.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/80 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white transform group-hover:translate-y-[-4px] transition-transform duration-300">
                  <h3 className="font-semibold text-lg group-hover:text-yellow-200 transition-colors duration-300">{dest.name}</h3>
                  <p className="text-sm opacity-90 group-hover:opacity-100 transition-opacity duration-300">{dest.properties} properties</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12 animate-fade-in">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 hover:text-primary transition-colors duration-300">Featured Properties</h2>
              <p className="text-muted-foreground text-lg hover:text-foreground transition-colors duration-300">Handpicked stays for your next adventure</p>
            </div>
            <div className="flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors duration-300 hover:scale-105 transform cursor-pointer">
              <TrendingUp className="h-5 w-5" />
              <span className="font-medium">Trending Now</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.slice(0, 6).map((property, index) => (
              <div 
                key={property.id} 
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <PropertyCard 
                  property={property} 
                  onClick={handlePropertyClick}
                />
              </div>
            ))}
          </div>
          
          {filteredProperties.length === 0 && (
            <div className="text-center py-12 animate-fade-in">
              <MapPin className="h-16 w-16 text-muted-foreground mx-auto mb-4 hover:text-primary transition-colors duration-300" />
              <h3 className="text-xl font-semibold text-foreground mb-2">No properties found</h3>
              <p className="text-muted-foreground">Try adjusting your search filters</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in hover:scale-105 transition-transform duration-300">Ready to Host?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 animate-fade-in hover:opacity-100 transition-opacity duration-300" style={{ animationDelay: '0.2s' }}>
            Share your space and earn extra income by hosting travelers from around the world
          </p>
          <button className="bg-accent-foreground text-accent px-8 py-4 rounded-lg font-semibold hover:bg-accent-foreground/90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Become a Host
          </button>
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

export default Index;
