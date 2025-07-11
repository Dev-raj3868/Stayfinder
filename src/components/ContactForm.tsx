
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="animate-fade-in">
      <h2 className="text-3xl font-bold mb-8 hover:text-primary transition-colors duration-300">Send us a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="group">
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-300 hover:border-primary/50 hover:shadow-md"
              required
            />
          </div>
          <div className="group">
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-300 hover:border-primary/50 hover:shadow-md"
              required
            />
          </div>
        </div>
        
        <div className="group">
          <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
            Subject
          </label>
          <select
            name="subject"
            id="subject"
            value={formData.subject}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-300 hover:border-primary/50 hover:shadow-md"
            required
          >
            <option value="">Select a subject</option>
            <option value="booking">Booking Inquiry</option>
            <option value="support">Technical Support</option>
            <option value="hosting">Hosting Question</option>
            <option value="partnership">Partnership</option>
            <option value="other">Other</option>
          </select>
        </div>
        
        <div className="group">
          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows={6}
            value={formData.message}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-300 resize-none hover:border-primary/50 hover:shadow-md"
            placeholder="Tell us how we can help you..."
            required
          ></textarea>
        </div>
        
        <Button 
          type="submit"
          className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          <Send className="h-5 w-5 mr-2" />
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
