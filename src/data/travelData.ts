import { Destination, TravelService, Testimonial } from '../types';

export const HERO_SLIDES = [
  {
    id: 'hero-1',
    title: 'Explore the World with Iman Travel',
    subtitle: '“Your trusted travel partner for easy bookings, exciting destinations and unforgettable journeys.”',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=2000&q=85', // Airplane flying over clouds
    badge: 'Worldwide Flights & Packages'
  },
  {
    id: 'hero-2',
    title: 'Luxury Dubai & Middle East Escapes',
    subtitle: 'Experience world-class hospitality, majestic desert safaris, and pristine beaches.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2000&q=85', // Dubai skyline
    badge: 'Premium Travel Deals'
  },
  {
    id: 'hero-3',
    title: 'Sacred Umrah & Hajj Pilgrimages',
    subtitle: 'Tailored spiritual packages for individuals and families with luxury hotel accommodations near the Haramain.',
    image: 'https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=2000&q=85', // Saudi landmarks
    badge: 'Trusted Umrah Partner'
  }
];

export const DESTINATIONS: Destination[] = [
  {
    id: 'dubai-luxury',
    title: 'Dubai Golden Horizons & Desert Safari',
    country: 'United Arab Emirates',
    category: 'dubai',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1546412414-8035e1786b22?auto=format&fit=crop&w=1200&q=80'
    ],
    price: '£649',
    numericPrice: 649,
    duration: '5 Days / 4 Nights',
    rating: 4.9,
    reviewsCount: 142,
    badge: 'Bestseller',
    highlights: ['Burj Khalifa Observation Deck', 'VIP Desert Safari & BBQ Dinner', 'Dubai Marina Cruise with Dinner', 'Luxury 5★ Hotel Stay'],
    description: 'Immerse yourself in futuristic architecture, gold souks, luxury shopping malls, and thrilling desert dunes with Iman Travel’s curated Dubai package.',
    includedServices: ['Return International Flights', '5-Star Hotel Stay with Breakfast', 'Private Airport Transfers', 'Guided City Tour & Desert Safari'],
    itinerarySummary: [
      'Day 1: Arrival in Dubai & Private Hotel Transfer',
      'Day 2: Old Dubai Tour, Spice Souk & Burj Khalifa Visit',
      'Day 3: Desert Safari with Dune Bashing & Arabian Dinner',
      'Day 4: Luxury Marina Yacht Cruise & Free Shopping Time',
      'Day 5: Breakfast & Transfer to Airport for Return Flight'
    ]
  },
  {
    id: 'turkey-scenic',
    title: 'Enchanting Turkey & Hot Air Balloons',
    country: 'Turkey',
    category: 'turkey',
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1527838832700-5059252407fa?auto=format&fit=crop&w=1200&q=80'
    ],
    price: '£799',
    numericPrice: 799,
    duration: '7 Days / 6 Nights',
    rating: 4.95,
    reviewsCount: 188,
    badge: 'Popular Choice',
    highlights: ['Cappadocia Hot Air Balloon Ride', 'Istanbul Hagia Sophia & Blue Mosque', 'Bosphorus Cruise', 'Cave Hotel Experience'],
    description: 'Explore the mystical bridge between East and West. From historical Istanbul minarets to magical Cappadocia fairytale chimneys.',
    includedServices: ['Flights + Internal Travel', 'Cave Hotel & Boutique Accommodation', 'Daily Breakfast & 3 Dinners', 'All Guided Entry Tickets'],
    itinerarySummary: [
      'Day 1-3: Historical Istanbul Exploration & Bosphorus Dinner Cruise',
      'Day 4: Domestic Flight to Cappadocia & Cave Hotel Check-in',
      'Day 5: Sunrise Hot Air Balloon & Goreme Open Air Museum',
      'Day 6: Underground City Exploration & Traditional Turkish Night',
      'Day 7: Transfer to Kayseri/Istanbul Airport'
    ]
  },
  {
    id: 'saudi-umrah',
    title: 'VIP Executive Umrah Experience',
    country: 'Saudi Arabia',
    category: 'saudi',
    image: 'https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=1200&q=80'
    ],
    price: '£1,150',
    numericPrice: 1150,
    duration: '10 Days / 9 Nights',
    rating: 5.0,
    reviewsCount: 310,
    badge: 'Spiritual Package',
    highlights: ['5★ Clock Tower Makkah Hotel (Haram View)', '5★ Front-line Madinah Hotel', 'Haramain High Speed Bullet Train', 'Guided Ziyarat Historical Sites'],
    description: 'Embark on a soul-enriching spiritual journey to Makkah Al-Mukarramah and Al-Madinah Al-Munawwarah with seamless VIP service and 24/7 guidance.',
    includedServices: ['Umrah Visa Processing', 'Direct International Flights', '5★ Hotels Adjacent to Mosques', 'Bullet Train Transfers', 'Experienced Tour Scholar'],
    itinerarySummary: [
      'Day 1: Flight Arrival in Jeddah, Transfer to Makkah, Perform Umrah',
      'Day 2-5: Worship in Makkah & Guided Historical Ziyarat (Ghar Hira, Jabal Thawr)',
      'Day 6: Haramain High Speed Bullet Train to Al-Madinah',
      'Day 7-9: Prayers at Masjid An-Nabawi & Uhud Battlefield Visit',
      'Day 10: Final Prayers & Return Flight Transfer'
    ]
  },
  {
    id: 'malaysia-paradise',
    title: 'Tropical Malaysia & Langkawi Island',
    country: 'Malaysia',
    category: 'malaysia',
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=80'
    ],
    price: '£899',
    numericPrice: 899,
    duration: '8 Days / 7 Nights',
    rating: 4.85,
    reviewsCount: 115,
    badge: 'Family Favorite',
    highlights: ['Petronas Twin Towers Skybridge', 'Batu Caves Golden Statue', 'Langkawi Cable Car & Sky Bridge', 'Private Beachfront Resort'],
    description: 'Discover lush rainforests, vibrant cityscapes, world-famous street culinary delights, and serene beach sanctuaries across Kuala Lumpur and Langkawi.',
    includedServices: ['Return Flights & Island Hopper Transfers', 'Resort Accommodations', 'Daily Buffet Breakfast', 'Half-Day City & Island Tours'],
    itinerarySummary: [
      'Day 1-3: Kuala Lumpur City Discovery & Shopping District',
      'Day 4: Batu Caves & Genting Highlands Excursion',
      'Day 5: Flight to Langkawi & Beach Resort Check-in',
      'Day 6-7: Langkawi Island Hopping & Sky Cab Tour',
      'Day 8: Departure from Kuala Lumpur'
    ]
  },
  {
    id: 'uk-london-heritage',
    title: 'Historic UK & London Landmarks Tour',
    country: 'United Kingdom',
    category: 'uk',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1486299267070-83823f5448dd?auto=format&fit=crop&w=1200&q=80'
    ],
    price: '£720',
    numericPrice: 720,
    duration: '6 Days / 5 Nights',
    rating: 4.9,
    reviewsCount: 96,
    badge: 'Heritage Classic',
    highlights: ['Private Thames River Sightseeing Cruise', 'Big Ben & Houses of Parliament', 'Tower Bridge & Tower of London', 'Day Trip to Oxford & Windsor Castle'],
    description: 'Experience the regal elegance, rich heritage, world-class theater, and historic landmarks of London and surrounding royal countryside.',
    includedServices: ['4-Star Central London Hotel', 'Daily English Breakfast', 'London Eye & Cruise Fast-Track Tickets', 'Private Chauffeur Airport Pick-up'],
    itinerarySummary: [
      'Day 1: Arrival in London, Private Chauffeur Pick-up, Hotel Check-in',
      'Day 2: Royal Palaces, Westminster Abbey & London Eye Ride',
      'Day 3: Tower Bridge, British Museum & Covent Garden Afternoon Tea',
      'Day 4: Excursion to Windsor Castle & Oxford University City',
      'Day 5: West End Theater Show & Oxford Street Shopping',
      'Day 6: Transfer to Heathrow / Gatwick Airport'
    ]
  },
  {
    id: 'maldives-luxury-resort',
    title: 'Overwater Villa Maldives Luxury Escape',
    country: 'Maldives',
    category: 'luxury',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80'
    ],
    price: '£1,499',
    numericPrice: 1499,
    duration: '6 Days / 5 Nights',
    rating: 5.0,
    reviewsCount: 74,
    badge: 'Honeymoon Special',
    highlights: ['Private Overwater Villa with Ocean Access', 'Seaplane Scenic Flight Transfers', 'All-Inclusive Gourmet Dining & Spa Credit', 'Sunset Dolphin Watching Cruise'],
    description: 'Unwind in pure paradise surrounded by crystal-clear turquoise lagoons, coral reefs, and unmatched 5-star island luxury.',
    includedServices: ['Return Flights & Seaplane Transfer', '5★ Resort Overwater Bungalow', 'All-Inclusive Meals & Premium Beverages', 'Water Sports Equipment Rental'],
    itinerarySummary: [
      'Day 1: Male Airport Arrival & Scenic Seaplane Transfer to Resort Island',
      'Day 2-4: Relaxing Reef Snorkeling, Spa Treatments & Sunset Dolphin Cruise',
      'Day 5: Private Candlelight Dinner on Beachfront',
      'Day 6: Morning Villa Breakfast & Seaplane Return'
    ]
  }
];

export const SERVICES: TravelService[] = [
  {
    id: 'flight-booking',
    title: 'Instant Flight Bookings',
    iconName: 'Plane',
    description: 'Access exclusive airline tariffs for international & domestic flights with zero hidden fees and flexible date options.',
    badge: 'Best Fares Guaranteed',
    features: ['500+ Partner Airlines', '24/7 Rebooking Assistance', 'Flexible Cancellation', 'Extra Baggage Discounts']
  },
  {
    id: 'hotel-reservation',
    title: 'Luxury & Family Hotels',
    iconName: 'Hotel',
    description: 'Handpicked 3★ to 5★ luxury hotels, beachfront resorts, and family suites in prime city locations worldwide.',
    badge: 'Verified Properties',
    features: ['Best Rate Guarantee', 'Complimentary Breakfast', 'Early Check-in Priority', 'Free Room Upgrades (Subject to availability)']
  },
  {
    id: 'umrah-hajj',
    title: 'Umrah & Hajj Packages',
    iconName: 'MoonStar',
    description: 'Customized spiritual journeys with hotels close to Masjid al-Haram & Al-Masjid an-Nabawi, expert guides and group care.',
    badge: 'ATOL / Visa Approved',
    features: ['Visa Processing Included', 'Haramain Train Booking', 'Multilingual Tour Leaders', 'Custom Family & Group Packages']
  },
  {
    id: 'visa-assistance',
    title: 'Fast-Track Visa Assistance',
    iconName: 'FileCheck',
    description: 'Hassle-free document preparation and embassy submission for Schengen, UK, UAE, Saudi Arabia, USA, and Asian visas.',
    badge: 'High Success Rate',
    features: ['Document Pre-verification', 'Embassy Appointment Slots', 'Express E-Visa Issuance', 'Step-by-Step Guidance']
  },
  {
    id: 'holiday-packages',
    title: 'Tailor-Made Tour Packages',
    iconName: 'Compass',
    description: 'Custom itineraries created by experienced travel consultants tailored to your schedule, budget, and travel preferences.',
    badge: '100% Personalised',
    features: ['Private Chauffeur Tours', 'Family & Kids Activities', 'Honeymoon Upgrades', 'All-Inclusive Meal Plans']
  },
  {
    id: 'airport-transfers',
    title: 'Private Airport Transfers',
    iconName: 'Car',
    description: 'Smooth, punctual chauffeur pickups from airports directly to your hotel in premium air-conditioned vehicles.',
    badge: 'Punctual & Safe',
    features: ['Flight Delay Monitoring', 'Professional Drivers', 'Luggage Assistance', 'Child Safety Seats']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Tariq & Family',
    location: 'Birmingham, UK',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    comment: 'Iman Travel arranged our family holiday to Dubai and Saudi Arabia for Umrah. Everything from the clock tower hotel to desert safari was flawless. The team was reachable at 2am when our flight got rescheduled!',
    tripType: 'Family Vacation & Umrah',
    date: 'August 2026'
  },
  {
    id: 'test-2',
    name: 'Aisha & Bilal',
    location: 'Manchester, UK',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    comment: 'Our honeymoon in Turkey was magical. Hot air balloon tickets, cave hotel booking, and private airport transfers were pre-arranged. Special thanks to the Iman Travel team for the incredible service.',
    tripType: 'Turkey Honeymoon Package',
    date: 'July 2026'
  },
  {
    id: 'test-3',
    name: 'Dr. Farhan Siddiqui',
    location: 'London, UK',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    comment: 'I use Iman Travel for all my business travel to Malaysia and Dubai. Fast visa processing, flexible ticket upgrades, and immediate WhatsApp responses make them my go-to agency.',
    tripType: 'Business Travel',
    date: 'September 2026'
  }
];

export const GALLERY_PHOTOS = [
  {
    url: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
    title: 'Airplane Over Clouds',
    caption: 'Seamless direct flights to top international destinations.'
  },
  {
    url: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&w=800&q=80',
    title: 'Modern Airport Terminal',
    caption: 'Express check-in and VIP lounge access.'
  },
  {
    url: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
    title: 'Dubai Skyline',
    caption: 'Experience high-end luxury, shopping, and desert adventures.'
  },
  {
    url: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=800&q=80',
    title: 'Turkey Cappadocia',
    caption: 'Unforgettable hot air balloon views over magical valleys.'
  },
  {
    url: 'https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=800&q=80',
    title: 'Saudi Arabia Sacred Sites',
    caption: 'Peaceful Umrah & Hajj packages with 5-star hotel options.'
  },
  {
    url: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=800&q=80',
    title: 'Malaysia Scenery',
    caption: 'Lush tropical island beaches and vibrant city life.'
  },
  {
    url: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80',
    title: 'London & UK Heritage',
    caption: 'Explore historic landmarks, castles, and river cruises.'
  },
  {
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    title: 'Family Vacation Beach',
    caption: 'Fun-filled family memories tailored for all age groups.'
  },
  {
    url: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80',
    title: 'Business Traveler',
    caption: 'Punctual corporate itineraries, priority transfers, and lounge seats.'
  }
];

export const COMPANY_STATS = [
  { label: 'Happy Travelers', value: '15,000+' },
  { label: 'Destinations Worldwide', value: '85+' },
  { label: 'Customer Satisfaction', value: '99.4%' },
  { label: 'Years of Trust', value: '12+' }
];
