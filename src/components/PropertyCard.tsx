
import React from 'react';
import { Star, MapPin } from 'lucide-react';

interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  reviews: number;
  images: string[];
  type: string;
  beds: number;
  baths: number;
}

interface PropertyCardProps {
  property: Property;
  onClick: (property: Property) => void;
}

const PropertyCard = ({ property, onClick }: PropertyCardProps) => {
  return (
    <div 
      className="property-card cursor-pointer animate-fade-in group"
      onClick={() => onClick(property)}
    >
      <div className="relative overflow-hidden">
        <img
          src={property.images[0]}
          alt={property.title}
          className="property-image"
          loading="lazy"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <Star className="h-3 w-3 text-yellow-500 fill-current" />
          <span className="text-xs font-medium">{property.rating}</span>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-ocean-600 transition-colors duration-200">
            {property.title}
          </h3>
        </div>
        
        <div className="flex items-center text-gray-500 text-sm mb-2">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{property.location}</span>
        </div>
        
        <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
          <span>{property.type} • {property.beds} bed{property.beds > 1 ? 's' : ''} • {property.baths} bath{property.baths > 1 ? 's' : ''}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-500 fill-current" />
              <span className="ml-1 text-sm font-medium">{property.rating}</span>
              <span className="ml-1 text-sm text-gray-500">({property.reviews})</span>
            </div>
          </div>
          <div className="text-right">
            <span className="text-lg font-bold text-gray-900">${property.price}</span>
            <span className="text-sm text-gray-500"> /night</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
