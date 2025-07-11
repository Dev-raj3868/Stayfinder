
export interface Property {
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
  description: string;
  amenities: string[];
  host: {
    name: string;
    avatar: string;
    joinedYear: number;
  };
}

export const mockProperties: Property[] = [
  {
    id: '1',
    title: 'Stunning Modern Apartment with City Views',
    location: 'Downtown Seattle, WA',
    price: 180,
    rating: 4.9,
    reviews: 127,
    images: [
      'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop&crop=center',
    ],
    type: 'Apartment',
    beds: 2,
    baths: 2,
    description: 'Experience luxury in this beautifully designed apartment featuring floor-to-ceiling windows with breathtaking city views. Perfect for business travelers or couples looking for a romantic getaway.',
    amenities: ['WiFi', 'Kitchen', 'Parking', 'TV', 'Air conditioning', 'Gym'],
    host: {
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      joinedYear: 2019,
    },
  },
  {
    id: '2',
    title: 'Cozy Mountain Cabin Retreat',
    location: 'Aspen, CO',
    price: 250,
    rating: 4.8,
    reviews: 89,
    images: [
      'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop&crop=center',
    ],
    type: 'Cabin',
    beds: 3,
    baths: 2,
    description: 'Escape to this charming mountain cabin surrounded by pristine wilderness. Features a stone fireplace, hot tub, and stunning mountain views. Perfect for families or groups seeking adventure.',
    amenities: ['WiFi', 'Kitchen', 'Fireplace', 'Hot tub', 'Parking', 'Mountain view'],
    host: {
      name: 'Mike Chen',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      joinedYear: 2020,
    },
  },
  {
    id: '3',
    title: 'Beachfront Villa with Private Pool',
    location: 'Malibu, CA',
    price: 450,
    rating: 5.0,
    reviews: 203,
    images: [
      'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop&crop=center',
    ],
    type: 'Villa',
    beds: 4,
    baths: 3,
    description: 'Luxury beachfront villa with direct beach access and a private infinity pool. This stunning property offers the ultimate in comfort and elegance for an unforgettable vacation.',
    amenities: ['WiFi', 'Kitchen', 'Pool', 'Beach access', 'Parking', 'Ocean view', 'BBQ'],
    host: {
      name: 'Emma Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      joinedYear: 2018,
    },
  },
  {
    id: '4',
    title: 'Historic Brownstone in Brooklyn',
    location: 'Brooklyn Heights, NY',
    price: 220,
    rating: 4.7,
    reviews: 156,
    images: [
      'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop&crop=center',
    ],
    type: 'Townhouse',
    beds: 3,
    baths: 2,
    description: 'Step into history with this beautifully restored brownstone featuring original hardwood floors, exposed brick, and modern amenities. Walking distance to the Brooklyn Bridge and Manhattan.',
    amenities: ['WiFi', 'Kitchen', 'Parking', 'TV', 'Washer/Dryer', 'Garden'],
    host: {
      name: 'David Park',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      joinedYear: 2021,
    },
  },
  {
    id: '5',
    title: 'Modern Loft in Arts District',
    location: 'Los Angeles, CA',
    price: 195,
    rating: 4.6,
    reviews: 94,
    images: [
      'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop&crop=center',
    ],
    type: 'Loft',
    beds: 1,
    baths: 1,
    description: 'Industrial chic loft in the heart of the Arts District. High ceilings, exposed brick, and large windows create a unique urban retreat. Perfect for creative professionals and city explorers.',
    amenities: ['WiFi', 'Kitchen', 'TV', 'Air conditioning', 'Elevator', 'Rooftop access'],
    host: {
      name: 'Lisa Thompson',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
      joinedYear: 2022,
    },
  },
  {
    id: '6',
    title: 'Lakefront Lodge with Dock',
    location: 'Lake Tahoe, CA',
    price: 320,
    rating: 4.9,
    reviews: 178,
    images: [
      'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop&crop=center',
    ],
    type: 'Lodge',
    beds: 4,
    baths: 3,
    description: 'Spectacular lakefront lodge with private dock and kayaks. Enjoy crystal-clear waters and mountain views from every room. Perfect for family reunions and outdoor enthusiasts.',
    amenities: ['WiFi', 'Kitchen', 'Fireplace', 'Dock', 'Kayaks', 'BBQ', 'Lake view'],
    host: {
      name: 'Robert Wilson',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
      joinedYear: 2017,
    },
  },
];
