export type TravelCategory = 'all' | 'dubai' | 'turkey' | 'saudi' | 'malaysia' | 'uk' | 'luxury' | 'family' | 'umrah';

export interface Destination {
  id: string;
  title: string;
  country: string;
  category: TravelCategory;
  image: string;
  gallery: string[];
  price: string;
  numericPrice: number;
  duration: string;
  rating: number;
  reviewsCount: number;
  badge?: string;
  highlights: string[];
  description: string;
  includedServices: string[];
  itinerarySummary: string[];
}

export interface TravelService {
  id: string;
  title: string;
  iconName: string;
  description: string;
  badge?: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  comment: string;
  tripType: string;
  date: string;
}

export interface TripInquiry {
  destination: string;
  travelType: string;
  departureCity: string;
  travelDate: string;
  passengers: number;
  budgetRange: string;
  fullName: string;
  phone: string;
  email: string;
  specialNotes?: string;
}

export interface FlightSearch {
  from: string;
  to: string;
  departDate: string;
  returnDate: string;
  passengers: number;
  cabinClass: 'economy' | 'business' | 'first';
}
