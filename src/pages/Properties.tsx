
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PropertyCard from '@/components/PropertyCard';
import SearchModal from '@/components/SearchModal';
import LoginModal from '@/components/LoginModal';
import { mockProperties, Property } from '@/data/mockProperties';
import { Filter, Grid, List, SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SearchFilters {
  location: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  priceRange: [number, number];
}

const Properties = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(mockProperties);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const handleSearch = (filters: SearchFilters) => {
    console.log('Search filters:', filters);
    
    let filtered = mockProperties;
    
    if (filters.location) {
      filtered = filtered.filter(property => 
        property.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }
    
    filtered = filtered.filter(property => 
      property.price >= filters.priceRange[0] && property.price <= filters.priceRange[1]
    );
    
    setFilteredProperties(filtered);
  };

  const handlePropertyClick = (property: Property) => {
    console.log('Property clicked:', property);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        onSearchClick={() => setIsSearchOpen(true)}
        onLoginClick={() => setIsLoginOpen(true)}
      />
      
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl font-bold mb-4 hover:scale-105 transition-transform duration-300">Explore Properties</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto hover:opacity-100 transition-opacity duration-300">
              Discover amazing places to stay from our curated collection of unique properties
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                className="flex items-center gap-2 hover:shadow-lg transition-all duration-300 hover:scale-105 hover:border-primary"
              >
                <SlidersHorizontal className="h-4 w-4" />
                Filters
              </Button>
              <span className="text-muted-foreground hover:text-foreground transition-colors duration-300">{filteredProperties.length} properties found</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="transition-all duration-300 hover:scale-105"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('list')}
                className="transition-all duration-300 hover:scale-105"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className={`${
            viewMode === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' 
              : 'space-y-6'
          }`}>
            {filteredProperties.map((property, index) => (
              <div 
                key={property.id} 
                className="animate-fade-in hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
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
              <Filter className="h-16 w-16 text-muted-foreground mx-auto mb-4 hover:text-primary transition-colors duration-300" />
              <h3 className="text-xl font-semibold text-foreground mb-2">No properties found</h3>
              <p className="text-muted-foreground">Try adjusting your search filters</p>
            </div>
          )}
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

export default Properties;
