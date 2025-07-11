
import React from 'react';
import { 
  MessageCircle,
  Headphones,
  Globe
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const SupportOptions = () => {
  const supportOptions = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      action: 'Start Chat'
    },
    {
      icon: Headphones,
      title: 'Phone Support',
      description: 'Speak directly with our experts',
      action: 'Call Now'
    },
    {
      icon: Globe,
      title: 'Help Center',
      description: 'Browse our comprehensive FAQ section',
      action: 'Visit Help Center'
    }
  ];

  return (
    <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
      <h2 className="text-3xl font-bold mb-8 hover:text-primary transition-colors duration-300">Other Ways to Reach Us</h2>
      
      <div className="space-y-6">
        {supportOptions.map((option, index) => (
          <div 
            key={option.title}
            className="p-6 bg-card border border-border rounded-2xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 group cursor-pointer"
          >
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-primary/10 text-primary rounded-lg group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <option.icon className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">{option.title}</h3>
                <p className="text-muted-foreground mb-4 group-hover:text-foreground transition-colors duration-300">{option.description}</p>
                <Button 
                  variant="outline"
                  className="hover:bg-primary/10 hover:text-primary hover:border-primary transition-all duration-300 hover:scale-105"
                >
                  {option.action}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* FAQ Preview */}
      <div className="mt-12 p-8 bg-accent text-accent-foreground rounded-2xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 group cursor-pointer">
        <h3 className="text-2xl font-bold mb-4 group-hover:scale-105 transition-transform duration-300">Quick Questions?</h3>
        <p className="mb-6 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
          Check out our FAQ section for instant answers to common questions about bookings, payments, and more.
        </p>
        <Button className="bg-accent-foreground text-accent hover:bg-accent-foreground/90 transition-all duration-300 transform hover:scale-105">
          Browse FAQ
        </Button>
      </div>
    </div>
  );
};

export default SupportOptions;
