
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SearchModal from '@/components/SearchModal';
import LoginModal from '@/components/LoginModal';
import { Users, Heart, Shield, Globe, Award, TrendingUp } from 'lucide-react';

interface SearchFilters {
  location: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  priceRange: [number, number];
}

const About = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleSearch = (filters: SearchFilters) => {
    console.log('Search filters:', filters);
  };

  const stats = [
    { icon: Users, value: '2M+', label: 'Happy Travelers', color: 'text-primary' },
    { icon: Heart, value: '100K+', label: 'Properties Listed', color: 'text-accent' },
    { icon: Globe, value: '190+', label: 'Countries Covered', color: 'text-primary' },
    { icon: Award, value: '4.9', label: 'Average Rating', color: 'text-accent' },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Passion for Travel',
      description: 'We believe travel enriches lives and creates unforgettable memories.',
      color: 'bg-accent/10 text-accent'
    },
    {
      icon: Shield,
      title: 'Trust & Safety',
      description: 'Your security and peace of mind are our top priorities.',
      color: 'bg-primary/10 text-primary'
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'Building connections between hosts and guests worldwide.',
      color: 'bg-accent/10 text-accent'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header 
        onSearchClick={() => setIsSearchOpen(true)}
        onLoginClick={() => setIsLoginOpen(true)}
      />
      
      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground py-20 overflow-hidden">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 hover:scale-105 transition-transform duration-300">Our Story</h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed hover:opacity-100 transition-opacity duration-300">
              Connecting travelers with extraordinary places and creating memories that last a lifetime
            </p>
          </div>
        </div>
        <div className="absolute -bottom-1 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 -mt-10 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="bg-card rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 animate-fade-in animated-card group cursor-pointer"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <stat.icon className={`h-12 w-12 mx-auto mb-4 ${stat.color} group-hover:scale-110 transition-transform duration-300`} />
                <div className="text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{stat.value}</div>
                <div className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl font-bold mb-6 hover:text-primary transition-colors duration-300">Our Mission</h2>
              <p className="text-xl text-muted-foreground leading-relaxed hover:text-foreground transition-colors duration-300">
                To make travel accessible, authentic, and unforgettable by connecting people 
                with unique accommodations and local experiences around the world.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in hover-lift" style={{ animationDelay: '200ms' }}>
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop" 
                  alt="Team collaboration"
                  className="rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
                />
              </div>
              <div className="animate-fade-in" style={{ animationDelay: '400ms' }}>
                <h3 className="text-2xl font-bold mb-6 hover:text-primary transition-colors duration-300">Founded on Adventure</h3>
                <p className="text-muted-foreground leading-relaxed mb-6 hover:text-foreground transition-colors duration-300">
                  StayFinder was born from a simple idea: everyone deserves to experience the world 
                  in comfort and style. Our founders, passionate travelers themselves, recognized 
                  the need for a platform that goes beyond ordinary accommodations.
                </p>
                <p className="text-muted-foreground leading-relaxed hover:text-foreground transition-colors duration-300">
                  Today, we're proud to connect millions of travelers with hosts who share 
                  their passion for hospitality and authentic experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-6 hover:text-primary transition-colors duration-300">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto hover:text-foreground transition-colors duration-300">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="text-center group animate-fade-in hover-lift cursor-pointer"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`w-20 h-20 rounded-full ${value.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-125 transition-all duration-500 shadow-lg group-hover:shadow-2xl`}>
                  <value.icon className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-4xl font-bold mb-6 hover:scale-105 transition-transform duration-300">Join Our Community</h2>
            <p className="text-xl mb-8 opacity-90 hover:opacity-100 transition-opacity duration-300">
              Whether you're looking to explore new destinations or share your space with fellow travelers, 
              StayFinder is here to make your journey extraordinary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-accent-foreground text-accent px-8 py-4 rounded-lg font-semibold hover:bg-accent-foreground/90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                Start Exploring
              </button>
              <button className="border-2 border-accent-foreground text-accent-foreground px-8 py-4 rounded-lg font-semibold hover:bg-accent-foreground hover:text-accent transition-all duration-300 transform hover:scale-105">
                Become a Host
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

export default About;
