
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SearchModal from '@/components/SearchModal';
import LoginModal from '@/components/LoginModal';
import ContactInfoCards from '@/components/ContactInfoCards';
import ContactForm from '@/components/ContactForm';
import SupportOptions from '@/components/SupportOptions';

interface SearchFilters {
  location: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  priceRange: [number, number];
}

const Contact = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleSearch = (filters: SearchFilters) => {
    console.log('Search filters:', filters);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        onSearchClick={() => setIsSearchOpen(true)}
        onLoginClick={() => setIsLoginOpen(true)}
      />
      
      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground py-20 overflow-hidden">
        <div className="absolute inset-0 bg-primary/10"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 hover:scale-105 transition-transform duration-300">Get in Touch</h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed hover:opacity-100 transition-opacity duration-300">
              We're here to help make your travel experience extraordinary
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <ContactInfoCards />

      {/* Contact Form & Support Options */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <ContactForm />
            <SupportOptions />
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

export default Contact;
