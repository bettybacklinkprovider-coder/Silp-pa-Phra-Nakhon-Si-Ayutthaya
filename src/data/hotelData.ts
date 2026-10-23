/**
 * Silp-pa Phra Nakhon Si Ayutthaya
 * Hotel Information, Accommodations, Special Offers, Reviews and Location Data
 */

export interface Room {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  priceTHB: number;
  originalPriceTHB?: number;
  sizeSqm: number;
  bedType: string;
  occupancy: string;
  view: string;
  category: 'deluxe' | 'suite' | 'villa' | 'loft';
  image: string;
  gallery: string[];
  features: string[];
  highlights: string[];
}

export interface SpecialOffer {
  id: string;
  title: string;
  subtitle: string;
  category: 'weekend' | 'extended' | 'romantic' | 'family' | 'business' | 'seasonal';
  description: string;
  originalPriceTHB: number;
  discountedPriceTHB: number;
  discountPercent: number;
  minStay: string;
  validity: string;
  image: string;
  includedAmenities: string[];
  bookingConditions: string;
  badge?: string;
}

export interface ReviewItem {
  id: string;
  guestName: string;
  country: string;
  roleOrTripType: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  stayedRoom: string;
  verified: boolean;
  helpfulCount: number;
  avatar: string;
  category: 'couples' | 'culture' | 'family' | 'cafe' | 'solo';
}

export const HOTEL_INFO = {
  name: "Silp-pa Phra Nakhon Si Ayutthaya",
  shortName: "Silp-pa Ayutthaya",
  thaiName: "ศิลป์ พระนครศรีอยุธยา",
  phone: "+66860055005",
  formattedPhone: "+66 86 005 5005",
  whatsappUrl: "https://wa.me/66860055005?text=Hello%20Silp-pa%20Phra%20Nakhon%20Si%20Ayutthaya,%20I%20would%20like%20to%20inquire%20about%20a%20booking.",
  email: "reservations@silppa-ayutthaya.com",
  address: "Pratu Chai Sub-district, Phra Nakhon Si Ayutthaya District, Phra Nakhon Si Ayutthaya 13000, Thailand",
  locationShort: "Pratu Chai, Phra Nakhon Si Ayutthaya 13000, Thailand",
  coordinates: {
    lat: 14.3532,
    lng: 100.5684
  },
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Pratu+Chai+Sub-district+Phra+Nakhon+Si+Ayutthaya+Thailand",
  googleReviewsUrl: "https://www.google.com/maps/search/?api=1&query=Silp-pa+Phra+Nakhon+Si+Ayutthaya",
  trustpilotUrl: "https://www.trustpilot.com/review/silppa-ayutthaya.com",
  ratingStats: {
    overall: 4.9,
    totalReviews: 482,
    googleRating: 4.9,
    googleReviewCount: 318,
    trustpilotRating: 4.8,
    trustpilotReviewCount: 164,
    breakdown: [
      { stars: 5, count: 429, percent: 89 },
      { stars: 4, count: 43, percent: 9 },
      { stars: 3, count: 8, percent: 2 },
      { stars: 2, count: 2, percent: 0 },
      { stars: 1, count: 0, percent: 0 },
    ]
  }
};

export const ROOMS_DATA: Room[] = [
  {
    id: "heritage-deluxe",
    name: "Heritage Teak Deluxe Room",
    subtitle: "Artisanal Siamese Teakwood with Garden View",
    description: "Nestled amidst lush frangipani courtyards, featuring authentic hand-carved teak accents, plush king-size bedding with organic Egyptian cotton, and custom brass fixtures.",
    priceTHB: 2850,
    originalPriceTHB: 3400,
    sizeSqm: 38,
    bedType: "King Bed",
    occupancy: "2 Guests",
    view: "Tropical Zen Courtyard",
    category: "deluxe",
    image: "/images/silppa_deluxe_room_1792750552939.jpg",
    gallery: [
      "/images/silppa_deluxe_room_1792750552939.jpg",
      "/images/silppa_heritage_suite_1792750554910.jpg",
      "/images/silppa_hotel_hero_1792750553330.jpg"
    ],
    features: [
      "Signature King Bed",
      "Rainfall Shower & Organic Herbal Amenities",
      "Private Teak Garden Balcony",
      "Artisan Drip Coffee & Thai Herb Tea Set",
      "High-speed Wi-Fi (300 Mbps)",
      "Smart 4K TV & Soundbar"
    ],
    highlights: ["Handcrafted Teak Headboard", "Quiet Inner Courtyard", "Complimentary Welcome Drink"]
  },
  {
    id: "siam-suite-bath",
    name: "Silp-pa Artisan Grand Suite",
    subtitle: "Freestanding Stone Soaking Tub & Ancient Stupa View",
    description: "Our signature luxury retreat. Boasting an expansive lounge, bespoke stone soaking tub adorned with seasonal frangipani blossoms, sliding teak louvers, and panoramic vistas of Ayutthaya's historic landscape.",
    priceTHB: 4600,
    originalPriceTHB: 5500,
    sizeSqm: 62,
    bedType: "California King",
    occupancy: "2-3 Guests",
    view: "UNESCO Heritage Horizon & Stupas",
    category: "suite",
    image: "/images/silppa_heritage_suite_1792750554910.jpg",
    gallery: [
      "/images/silppa_heritage_suite_1792750554910.jpg",
      "/images/silppa_hotel_hero_1792750553330.jpg",
      "/images/silppa_cafe_dining_1792750554774.jpg"
    ],
    features: [
      "Freestanding Natural Stone Soaking Tub",
      "Separate Living Salon & Hand-loomed Thai Silk Loungers",
      "Dual Vanity Bath with Rain Shower",
      "Bespoke Silp-pa In-Room Pour-Over Coffee Station",
      "Complimentary Mini-Bar Replenished Daily",
      "Afternoon Tea Service for Two"
    ],
    highlights: ["Panoramic Sunset Views", "Stone Bathtub with Jasmine Bath Salts", "Turn-down Service"]
  },
  {
    id: "riverside-art-villa",
    name: "Pratu Chai Heritage Villa",
    subtitle: "Private 2-Story Teak House with Reflection Pool Access",
    description: "A private sanctuary designed for discerning travelers seeking complete privacy. Features authentic Ayutthaya architectural gables, direct water terrace access, and dedicated butler concierge.",
    priceTHB: 6800,
    originalPriceTHB: 8200,
    sizeSqm: 85,
    bedType: "King Bed + Daybed",
    occupancy: "3-4 Guests",
    view: "Water Terrace & Ancient Canal",
    category: "villa",
    image: "/images/silppa_hotel_hero_1792750553330.jpg",
    gallery: [
      "/images/silppa_hotel_hero_1792750553330.jpg",
      "/images/silppa_deluxe_room_1792750552939.jpg",
      "/images/silppa_heritage_suite_1792750554910.jpg"
    ],
    features: [
      "Direct Sunken Terrace over Water Pond",
      "Expansive Master Suite with Dressing Room",
      "Sunlit Dining Area & Wine Cooler",
      "In-Villa Traditional Thai Massage Setup",
      "Bespoke Heritage Bicycle Set",
      "Priority Table at Silp-pa Cafe"
    ],
    highlights: ["Exclusive Villa Wing", "Private Terrace Dining", "Personal Ayutthaya Concierge"]
  },
  {
    id: "courtyard-loft",
    name: "Ayutthaya Art Loft",
    subtitle: "High-Ceiling Minimalist Studio with Local Gallery Art",
    description: "Modern Siamese minimalism meets traditional craft. High exposed teak rafters, curated rotating exhibitions by local Ayutthaya painters, and generous workspace for creative nomads.",
    priceTHB: 3200,
    originalPriceTHB: 3800,
    sizeSqm: 45,
    bedType: "King or Twin Beds",
    occupancy: "2 Guests",
    view: "Sculpture Garden & Lotus Pond",
    category: "loft",
    image: "/images/silppa_cafe_dining_1792750554774.jpg",
    gallery: [
      "/images/silppa_cafe_dining_1792750554774.jpg",
      "/images/silppa_deluxe_room_1792750552939.jpg",
      "/images/silppa_hotel_hero_1792750553330.jpg"
    ],
    features: [
      "Curated Thai Artwork & Exhibition Notes",
      "Ergonomic Teak Work Desk with Fast Wi-Fi",
      "Walk-in Wardrobe & Digital Safe",
      "En-suite Bathroom with Skylight",
      "Silp-pa Artisan Cold Brew On Tap Voucher"
    ],
    highlights: ["Vaulted Teak Ceiling", "Ideal for Creative Stays", "Peaceful Working Nook"]
  }
];

export const SPECIAL_OFFERS: SpecialOffer[] = [
  {
    id: "weekend-getaway",
    title: "Weekend Getaway & Temple Explorer",
    subtitle: "Escape to ancient tranquility with guided historic cycling and artisan breakfast",
    category: "weekend",
    description: "Unwind over the weekend in the heart of Ayutthaya's historic island. Includes complimentary vintage bicycles, bespoke sunset temple route map, and daily gourmet artisan breakfast at Silp-pa Cafe.",
    originalPriceTHB: 6800,
    discountedPriceTHB: 5440,
    discountPercent: 20,
    minStay: "2 Nights (Fri–Sun)",
    validity: "Valid through December 2026",
    image: "/images/silppa_hotel_hero_1792750553330.jpg",
    includedAmenities: [
      "2-Night stay in Deluxe Room or Grand Suite",
      "Daily Chef's Artisan Breakfast for Two",
      "Complimentary Vintage Bicycles & Map",
      "Late Check-out until 14:00 (subject to availability)",
      "10% Savings at Silp-pa Cafe & Bakery"
    ],
    bookingConditions: "Advance reservation required. Free cancellation up to 48 hours prior to arrival.",
    badge: "Most Popular"
  },
  {
    id: "extended-stay",
    title: "Extended Stay Heritage Retreat",
    subtitle: "Immerse in Ayutthaya's serene culture with exclusive long-stay rates",
    category: "extended",
    description: "Designed for travelers wishing to slow down, write, create, or work remotely in a peaceful artistic enclave. Generous discounts for stays of 5 nights or longer with complete housekeeping.",
    originalPriceTHB: 19950,
    discountedPriceTHB: 14960,
    discountPercent: 25,
    minStay: "Min. 5 Nights",
    validity: "Year-Round 2026",
    image: "/images/silppa_deluxe_room_1792750552939.jpg",
    includedAmenities: [
      "5+ Nights in any Room or Art Loft",
      "Daily Morning Breakfast Buffet & Specialty Pour-over",
      "Complimentary Weekly Laundry (up to 15 garments)",
      "THB 1,000 Cafe & Dining Credit per stay",
      "Dedicated High-Speed Fiber Workstation"
    ],
    bookingConditions: "Requires minimum 5 consecutive nights. Flexible date amendment allowed.",
    badge: "Save 25%"
  },
  {
    id: "romantic-stay",
    title: "Siamese Romantic Haven Package",
    subtitle: "An intimate romantic rendezvous with floral stone bath and sunset dinner",
    category: "romantic",
    description: "Celebrate love in an authentic Siamese sanctuary. Includes custom floral petal bath in our freestanding stone tub, chilled sparkling beverage upon arrival, and a candlelit dinner overlooking the illuminated stupas.",
    originalPriceTHB: 11200,
    discountedPriceTHB: 8960,
    discountPercent: 20,
    minStay: "2 Nights",
    validity: "Valid for couples year-round",
    image: "/images/silppa_heritage_suite_1792750554910.jpg",
    includedAmenities: [
      "2 Nights in the Silp-pa Grand Suite",
      "Aromatic Frangipani Stone Bath Setup",
      "Welcome Sparkling Wine & Thai Mango Tartlets",
      "Private 3-Course Twilight Dinner for Two",
      "Complimentary Guaranteed 15:00 Late Check-out"
    ],
    bookingConditions: "Requires 72 hours advance booking for romantic floral & culinary prep.",
    badge: "Couples Choice"
  },
  {
    id: "family-stay",
    title: "Family Cultural Discovery Stay",
    subtitle: "Connecting family rooms, ceramic workshop, and heritage boat ride",
    category: "family",
    description: "Introduce your family to the rich history of the Ayutthaya Kingdom. Spacious adjoining suites, child-friendly artisan breakfasts, and an enriching traditional clay craft workshop for all ages.",
    originalPriceTHB: 13500,
    discountedPriceTHB: 10800,
    discountPercent: 20,
    minStay: "2 Nights",
    validity: "School holidays & weekend dates",
    image: "/images/silppa_cafe_dining_1792750554774.jpg",
    includedAmenities: [
      "Adjoining Deluxe Rooms or 2-Story Heritage Villa",
      "Breakfast for up to 2 Adults & 2 Children",
      "Private 1-Hour Longtail Heritage Boat Cruise",
      "Interactive Ayutthaya Ceramic Workshop for Kids",
      "Complimentary Baby Cot & Children's Activity Kit"
    ],
    bookingConditions: "Maximum 2 adults and 2 children under 12 years.",
    badge: "Family Friendly"
  },
  {
    id: "business-stay",
    title: "Executive & Creative Workation Package",
    subtitle: "High-speed fiber connectivity, quiet garden meeting salon, and express service",
    category: "business",
    description: "Seamless blend of focus and restorative calm. Located just 75 minutes from central Bangkok, ideal for executive retreats, strategic off-sites, and undisturbed creative work sessions.",
    originalPriceTHB: 5800,
    discountedPriceTHB: 4640,
    discountPercent: 20,
    minStay: "1 Night or more",
    validity: "Sunday – Thursday stays",
    image: "/images/silppa_deluxe_room_1792750552939.jpg",
    includedAmenities: [
      "Accommodations in Art Loft or Deluxe Suite",
      "Ultra-Fast Dedicated 500Mbps Fiber Wi-Fi",
      "Complimentary Express Same-Day Ironing (2 pieces)",
      "Access to Teak Garden Meeting Pavilion (2 hrs)",
      "Unlimited Specialty Espresso at Silp-pa Cafe"
    ],
    bookingConditions: "Corporate tax invoice provided upon request.",
    badge: "Business Comfort"
  },
  {
    id: "seasonal-offer",
    title: "Loy Krathong & Festival Heritage Special",
    subtitle: "Celebrate Thailand's magical river of lights from our private reflection terrace",
    category: "seasonal",
    description: "Experience the timeless enchantment of Ayutthaya's river festivals. Handcraft your eco-friendly banana leaf Krathong with our artisans and release it under the starlit ancient sky.",
    originalPriceTHB: 9500,
    discountedPriceTHB: 7600,
    discountPercent: 20,
    minStay: "2 Nights",
    validity: "Seasonal festival dates",
    image: "/images/silppa_hotel_hero_1792750553330.jpg",
    includedAmenities: [
      "2-Night stay with festive festival welcome gift",
      "Handmade Krathong crafting workshop with Thai master",
      "Traditional Thai sweet delicacy tasting",
      "Riverfront vantage point for festival ceremonies",
      "Full daily artisanal breakfast"
    ],
    bookingConditions: "Non-refundable during peak festival dates.",
    badge: "Limited Season"
  }
];

export const TESTIMONIALS_DATA: ReviewItem[] = [
  {
    id: "rev-1",
    guestName: "Napasorn Kittipong",
    country: "Bangkok, Thailand",
    roleOrTripType: "Weekend Getaway with Partner",
    rating: 5,
    date: "October 2026",
    title: "An exquisite oasis of tranquility and Thai artistic craft",
    comment: "Silp-pa is unlike any hotel in Ayutthaya. The blend of rich teakwood with modern minimalist aesthetics is breathtaking. The stone tub in the grand suite with jasmine flowers made our anniversary unforgettable. The staff greeted us with warm smiles, and the cafe's drip coffee and mango sticky rice are top tier. We will definitely return!",
    stayedRoom: "Silp-pa Artisan Grand Suite",
    verified: true,
    helpfulCount: 34,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    category: "couples"
  },
  {
    id: "rev-2",
    guestName: "Julian & Claire Moreau",
    country: "Lyon, France",
    roleOrTripType: "Cultural Heritage Explorers",
    rating: 5,
    date: "September 2026",
    title: "Perfect location in Pratu Chai, serene and deeply authentic",
    comment: "Staying on the historic island allowed us to cycle to Wat Phra Si Sanphet and Wat Mahathat in under 5 minutes before tour crowds arrived. Coming back to Silp-pa's peaceful reflection pool and peaceful rooms was a dream. The beds are the most comfortable we encountered in Thailand.",
    stayedRoom: "Heritage Teak Deluxe Room",
    verified: true,
    helpfulCount: 28,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    category: "culture"
  },
  {
    id: "rev-3",
    guestName: "Kenji Takahashi",
    country: "Tokyo, Japan",
    roleOrTripType: "Solo Architect & Photographer",
    rating: 5,
    date: "August 2026",
    title: "Architectural perfection honoring Ayutthaya's spirit",
    comment: "As an architect, I was captivated by how the timber joinery and light apertures harmonize with the ancient stupa silhouettes in the horizon. The Art Loft gave me uninterrupted quiet to sketch and review photos. The WhatsApp concierge responded immediately to arrange a private longtail boat.",
    stayedRoom: "Ayutthaya Art Loft",
    verified: true,
    helpfulCount: 42,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    category: "solo"
  },
  {
    id: "rev-4",
    guestName: "Sarah & David Jenkins",
    country: "Melbourne, Australia",
    roleOrTripType: "Family Holiday with 2 Children",
    rating: 5,
    date: "July 2026",
    title: "Warm hospitality, impeccable cleanliness, delicious food",
    comment: "Our children loved the garden courtyard and the staff went above and beyond to prepare customized breakfast options for them. The hotel is peaceful, safe, and beautifully maintained. Booking directly via WhatsApp was smooth and quick with instant confirmation.",
    stayedRoom: "Pratu Chai Heritage Villa",
    verified: true,
    helpfulCount: 19,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
    category: "family"
  },
  {
    id: "rev-5",
    guestName: "Elena Rostova",
    country: "Zurich, Switzerland",
    roleOrTripType: "Extended Wellness Stay",
    rating: 5,
    date: "June 2026",
    title: "A hidden gem that honors Siamese heritage with 5-star standard",
    comment: "I booked the Extended Stay package for 6 nights to write my manuscript. The serene water reflection court, the aroma of lemongrass and frangipani, and the exceptional coffee each morning provided the ultimate sanctuary. The staff treat every guest like family.",
    stayedRoom: "Heritage Teak Deluxe Room",
    verified: true,
    helpfulCount: 31,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    category: "solo"
  },
  {
    id: "rev-6",
    guestName: "Thanawat S.",
    country: "Chiang Mai, Thailand",
    roleOrTripType: "Culinary & Coffee Enthusiast",
    rating: 5,
    date: "May 2026",
    title: "The best specialty coffee & boutique stay in Ayutthaya",
    comment: "Silp-pa Cafe alone is worth the trip from anywhere. Their single-origin Thai coffees and signature iced tamarind brew are phenomenal. Combined with the peaceful boutique rooms and historic location in Pratu Chai, this is the benchmark for Ayutthaya hospitality.",
    stayedRoom: "Silp-pa Artisan Grand Suite",
    verified: true,
    helpfulCount: 25,
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80",
    category: "cafe"
  }
];

export const FAQ_DATA = [
  {
    question: "What are the check-in and check-out times at Silp-pa?",
    answer: "Standard check-in begins at 14:00 and check-out is until 12:00 noon. Early check-in or late check-out (up to 14:00–15:00) can be requested subject to availability, and is included complimentary in our Weekend and Romantic packages."
  },
  {
    question: "How do I reach the hotel from Bangkok or Suvarnabhumi Airport?",
    answer: "We are located approximately 75 minutes north of Bangkok by car or taxi in Pratu Chai Sub-district on the historic island of Ayutthaya. You can also take the scenic express train from Bangkok Krung Thep Aphiwat station to Ayutthaya Station (approx. 50 mins), where our private hotel tuk-tuk or transfer can meet you upon request."
  },
  {
    question: "Can I book directly via WhatsApp?",
    answer: "Yes! You can message our front desk concierge directly at +66 86 005 5005 via WhatsApp 24/7. We provide instant date verification, special custom rates, and personalized room selection."
  },
  {
    question: "Are ancient temples and UNESCO sites within walking distance?",
    answer: "Yes. Our boutique hotel is located right in the UNESCO historic zone of Pratu Chai. Wat Phra Si Sanphet, Wat Mahathat, and the Ayutthaya Historical Park are all within 800m to 1.5km. Complimentary vintage bicycles and hand-drawn maps are available for all hotel guests."
  },
  {
    question: "What is your cancellation policy for special offers?",
    answer: "For standard bookings and flexible packages, you can cancel or reschedule free of charge up to 48 hours prior to check-in. Peak seasonal dates or festive packages may require 7 days notice."
  }
];
