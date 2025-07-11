
import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock
} from 'lucide-react';

const ContactInfoCards = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      info: 'support@stayfinder.com',
      description: 'Send us an email anytime',
      color: 'bg-primary/10 text-primary'
    },
    {
      icon: Phone,
      title: 'Call Us',
      info: '+1 (555) 123-4567',
      description: 'Mon-Fri 9AM-6PM EST',
      color: 'bg-accent/10 text-accent'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      info: '123 Travel Street, NYC',
      description: 'Our headquarters',
      color: 'bg-primary/10 text-primary'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      info: 'Always Available',
      description: 'Emergency assistance',
      color: 'bg-accent/10 text-accent'
    }
  ];

  return (
    <section className="py-20 -mt-10 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <div 
              key={info.title}
              className={`p-6 rounded-2xl ${info.color} bg-card border-2 border-border hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 animate-fade-in animated-card group cursor-pointer`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <info.icon className="h-12 w-12 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold mb-2 group-hover:scale-105 transition-transform duration-300">{info.title}</h3>
              <p className="font-semibold mb-1 group-hover:text-foreground transition-colors duration-300">{info.info}</p>
              <p className="text-sm opacity-80 group-hover:opacity-100 transition-opacity duration-300">{info.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfoCards;
