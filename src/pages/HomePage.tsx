import React, { useState } from 'react';
import { HOTEL_INFO, ROOMS_DATA, SPECIAL_OFFERS, Room } from '../data/hotelData';
import { ReviewRatingsSection } from '../components/ReviewRatingsSection';
import { 
  Calendar, 
  Users, 
  MapPin, 
  Phone, 
  MessageCircle, 
  ArrowRight, 
  Star, 
  Wifi, 
  Coffee, 
  Bath, 
  Sparkles, 
  Compass, 
  Clock, 
  ShieldCheck,
  ChevronRight,
  Maximize2,
  CheckCircle2
} from 'lucide-react';

interface HomePageProps {
  setCurrentPage: (page: 'home' | 'rooms' | 'offers' | 'reviews') => void;
  onOpenBooking: (prefillRoomId?: string, prefillOfferId?: string) => void;
  onOpenReviewModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  setCurrentPage,
  onOpenBooking,
  onOpenReviewModal,
}) => {
  const [quickCheckIn, setQuickCheckIn] = useState('2026-11-15');
  const [quickCheckOut, setQuickCheckOut] = useState('2026-11-17');
  const [quickGuests, setQuickGuests] = useState('2');
  const [quickRoom, setQuickRoom] = useState(ROOMS_DATA[0].id);

  const handleQuickSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenBooking(quickRoom);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* =========================================================================
          SECTION 1: HERO & QUICK BOOKING BAR
          ========================================================================= */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-between">
        {/* Hero Background Image with Measured Scrim */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/src/assets/images/silppa_hotel_hero_1792750553330.jpg"
            alt="Silp-pa Phra Nakhon Si Ayutthaya Boutique Hotel"
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />
          {/* Measured multi-stop scrim for AAA contrast and warmth */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#14110E] via-[#14110E]/60 to-black/35" />
        </div>

        {/* Hero Top Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 pt-20 md:pt-32 pb-12 w-full">
          <div className="max-w-3xl">
            {/* Heritage Kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-xs tracking-wider uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
              <span>Phra Nakhon Si Ayutthaya · UNESCO World Heritage Enclave</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif-luxury font-medium text-white tracking-tight leading-[1.08] mb-6 text-balance">
              Where Siamese Heritage Meets Artisanal Serenity
            </h1>

            <p className="text-base sm:text-lg text-stone-200/90 leading-relaxed font-light max-w-2xl mb-8">
              Experience the soul of ancient Ayutthaya in an intimate boutique haven of teak timber architecture, reflection courtyards, and specialty cafe culture.
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenBooking()}
                className="px-7 py-3.5 bg-[#C5A059] hover:bg-[#D4B06A] text-stone-950 font-semibold text-xs tracking-widest uppercase rounded-sm transition-all shadow-lg hover:shadow-xl cursor-pointer"
              >
                Reserve Your Stay
              </button>

              <a
                href={HOTEL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/15 hover:bg-white/25 text-white font-medium text-xs tracking-wider uppercase backdrop-blur-sm border border-white/30 rounded-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#4ADE80]" />
                <span>WhatsApp: +66 86 005 5005</span>
              </a>
            </div>
          </div>
        </div>

        {/* Quick Booking Bar Floating Strip */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 pb-8 w-full">
          <form
            onSubmit={handleQuickSearch}
            className="bg-[#FAF8F5] p-4 md:p-6 rounded-xl shadow-2xl border border-[#E8E2D8] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end"
          >
            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-600 mb-1.5 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Check-in</span>
              </label>
              <input
                type="date"
                value={quickCheckIn}
                onChange={(e) => setQuickCheckIn(e.target.value)}
                className="w-full bg-white border border-stone-300 rounded-lg px-3 py-2 text-xs text-stone-900 focus:outline-none focus:ring-1 focus:ring-[#C5A059]"
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-600 mb-1.5 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Check-out</span>
              </label>
              <input
                type="date"
                value={quickCheckOut}
                onChange={(e) => setQuickCheckOut(e.target.value)}
                className="w-full bg-white border border-stone-300 rounded-lg px-3 py-2 text-xs text-stone-900 focus:outline-none focus:ring-1 focus:ring-[#C5A059]"
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-600 mb-1.5 flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Guests</span>
              </label>
              <select
                value={quickGuests}
                onChange={(e) => setQuickGuests(e.target.value)}
                className="w-full bg-white border border-stone-300 rounded-lg px-3 py-2 text-xs text-stone-900 focus:outline-none focus:ring-1 focus:ring-[#C5A059]"
              >
                <option value="1">1 Adult (Solo)</option>
                <option value="2">2 Adults (Couple)</option>
                <option value="3">3 Adults</option>
                <option value="4">4 Guests (Family)</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-600 mb-1.5 flex items-center gap-1">
                <Bath className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Room Style</span>
              </label>
              <select
                value={quickRoom}
                onChange={(e) => setQuickRoom(e.target.value)}
                className="w-full bg-white border border-stone-300 rounded-lg px-3 py-2 text-xs text-stone-900 focus:outline-none focus:ring-1 focus:ring-[#C5A059]"
              >
                {ROOMS_DATA.map((r) => (
                  <option key={r.id} value={r.id}>
                    {r.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-2.5 px-4 bg-[#1C1917] hover:bg-[#C5A059] hover:text-stone-950 text-white font-semibold text-xs tracking-wider uppercase rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
              >
                <span>Check Rates</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: HERITAGE & ART STORY ("SILP-PA")
          ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Story Text: 6 cols */}
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-semibold">
                Our Heritage & Art Philosophy
              </div>

              <h2 className="text-3xl md:text-5xl font-serif-luxury text-[#1C1917] tracking-tight leading-tight">
                "Silp-pa" Means Art — Born from the Golden Age of Ayutthaya
              </h2>

              <p className="text-sm md:text-base text-[#5C5346] leading-relaxed">
                Tucked inside the ancient river-encircled island of Pratu Chai Sub-district, Silp-pa was conceived as a living gallery. We celebrate the timeless dialogue between historic Siamese carpentry and understated modern tranquility.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-[#EAE3D6] flex items-center justify-center text-[#946E28] shrink-0 mt-0.5">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-stone-900">Reclaimed Teakwood Architecture</h4>
                    <p className="text-xs text-stone-600 mt-0.5">
                      Handcrafted using reclaimed Thai timbers, natural limestone, and artisanal louvered screens that capture soft tropical breezes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-[#EAE3D6] flex items-center justify-center text-[#946E28] shrink-0 mt-0.5">
                    <Coffee className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-stone-900">Silp-pa Specialty Cafe & Bakery</h4>
                    <p className="text-xs text-stone-600 mt-0.5">
                      Single-origin Thai coffees from Chiang Rai mountains roasted to perfection, accompanied by our renowned artisanal mango sticky rice creations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-[#EAE3D6] flex items-center justify-center text-[#946E28] shrink-0 mt-0.5">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-stone-900">Steps to UNESCO Ancient Temples</h4>
                    <p className="text-xs text-stone-600 mt-0.5">
                      Situated mere minutes by complimentary vintage bicycle from Wat Phra Si Sanphet, Wat Mahathat, and the tranquil Chao Phraya waterways.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={() => setCurrentPage('rooms')}
                  className="px-6 py-3 bg-[#1C1917] hover:bg-[#C5A059] text-white hover:text-stone-950 font-semibold text-xs tracking-wider uppercase rounded-sm transition-colors cursor-pointer"
                >
                  Explore Accommodations
                </button>
                <a
                  href={`tel:${HOTEL_INFO.phone}`}
                  className="text-xs font-semibold text-stone-700 hover:text-stone-950 flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Call Reception ({HOTEL_INFO.formattedPhone})</span>
                </a>
              </div>
            </div>

            {/* Split Visual Showcase: 6 cols */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#E8E2D8]">
                <img
                  src="/src/assets/images/silppa_cafe_dining_1792750554774.jpg"
                  alt="Silp-pa Cafe and Dining in Ayutthaya"
                  className="w-full h-[440px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[11px] uppercase tracking-widest text-[#C5A059] font-medium">
                    Silp-pa Artisan Cafe
                  </span>
                  <h3 className="text-xl font-serif-luxury font-medium mt-1">
                    Specialty Pour-Over & Pastries with Historic Stupa Vistas
                  </h3>
                </div>
              </div>

              {/* Offset Decorative Floater */}
              <div className="hidden sm:block absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-[#E8E2D8] max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FAF5EC] flex items-center justify-center text-[#C5A059]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-stone-900">Cafe Hours Daily</div>
                    <div className="text-[11px] text-stone-500">07:00 – 19:00 · Open to Guests & Visitors</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: FEATURED ROOMS & SUITES PREVIEW
          ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#F3EFE8] border-y border-[#E2DBD0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-semibold mb-2">
                Boutique Accommodations
              </div>
              <h2 className="text-3xl md:text-5xl font-serif-luxury text-[#1C1917] tracking-tight">
                Rooms Designed for Quiet Reverie
              </h2>
            </div>

            <button
              onClick={() => setCurrentPage('rooms')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-stone-900 hover:text-[#C5A059] transition-colors cursor-pointer group"
            >
              <span>View All Rooms & Suites</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* 3 Featured Room Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ROOMS_DATA.slice(0, 3).map((room) => (
              <div
                key={room.id}
                className="bg-white rounded-xl overflow-hidden border border-[#E8E2D8] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-semibold text-stone-900">
                      {room.sizeSqm} m² · {room.bedType}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    <div className="text-[11px] uppercase tracking-wider text-[#946E28] font-semibold mb-1">
                      {room.view}
                    </div>
                    <h3 className="text-xl font-serif-luxury font-bold text-stone-900 mb-2">
                      {room.name}
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed mb-4 line-clamp-2">
                      {room.description}
                    </p>

                    <div className="space-y-1.5 pt-2 border-t border-stone-100">
                      {room.features.slice(0, 3).map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-stone-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Price & Action Footer */}
                <div className="px-6 py-4 bg-stone-50 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-stone-500">From</span>
                    <div className="text-lg font-bold font-serif-luxury text-stone-900 tabular-nums">
                      THB {room.priceTHB.toLocaleString()}
                      <span className="text-xs font-normal text-stone-500"> / night</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onOpenBooking(room.id)}
                      className="px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#1C1917] hover:bg-[#C5A059] rounded transition-colors cursor-pointer"
                    >
                      Book
                    </button>
                    <a
                      href={`https://wa.me/66860055005?text=Hello%20Silp-pa%20Ayutthaya,%20I%20am%20interested%20in%20reserving%20the%20${encodeURIComponent(room.name)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded transition-colors"
                      title="Book via WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: SPECIAL OFFERS & PACKAGES SPOTLIGHT
          ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          {/* Featured Top Banner */}
          <div className="mb-14 p-6 md:p-8 bg-gradient-to-r from-[#1C1917] via-[#2A231C] to-[#1C1917] text-white rounded-2xl shadow-xl border border-[#3E342B] flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center lg:text-left">
              <span className="inline-block px-3 py-1 bg-[#C5A059] text-stone-950 font-bold text-[10px] uppercase tracking-widest rounded">
                Exclusive Direct Booking Privilege
              </span>
              <h3 className="text-2xl md:text-3xl font-serif-luxury">
                Monsoon & Temple Twilight Retreat — Up to 25% Off
              </h3>
              <p className="text-xs md:text-sm text-stone-300 max-w-xl">
                Reserve 2 nights or more directly with reception to receive daily artisan breakfast, free bicycles, and afternoon Thai high tea for two.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => onOpenBooking(undefined, SPECIAL_OFFERS[0].id)}
                className="px-6 py-3 bg-[#C5A059] hover:bg-[#D4B06A] text-stone-950 font-semibold text-xs tracking-wider uppercase rounded-sm transition-colors cursor-pointer"
              >
                Claim Package
              </button>
              <button
                onClick={() => setCurrentPage('offers')}
                className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-medium text-xs tracking-wider uppercase rounded-sm transition-colors cursor-pointer"
              >
                Explore All 6 Offers
              </button>
            </div>
          </div>

          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-semibold mb-2">
              Curated Escapes
            </div>
            <h2 className="text-3xl md:text-5xl font-serif-luxury text-[#1C1917] tracking-tight">
              Exclusive Offers & Packages
            </h2>
            <p className="mt-3 text-sm text-[#6E6457]">
              Discover exceptional stays and exclusive offers designed to make your experience unforgettable.
            </p>
          </div>

          {/* 3 Marquee Package Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SPECIAL_OFFERS.slice(0, 3).map((offer) => (
              <div
                key={offer.id}
                className="bg-white rounded-xl overflow-hidden border border-[#E8E2D8] shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-[#1C1917]/90 text-[#C5A059] text-[10px] uppercase font-bold px-2.5 py-1 rounded">
                    {offer.badge || 'Special Rate'}
                  </div>
                  <div className="absolute top-3 right-3 bg-red-600 text-white text-[11px] font-bold px-2 py-0.5 rounded">
                    Save {offer.discountPercent}%
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-serif-luxury font-bold text-stone-900 mb-2">
                    {offer.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed mb-4 line-clamp-3">
                    {offer.description}
                  </p>

                  <div className="space-y-1.5 text-xs text-stone-600">
                    {offer.includedAmenities.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 bg-stone-50 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-stone-400 line-through">
                      THB {offer.originalPriceTHB.toLocaleString()}
                    </span>
                    <div className="text-lg font-bold font-serif-luxury text-stone-900 tabular-nums">
                      THB {offer.discountedPriceTHB.toLocaleString()}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onOpenBooking(undefined, offer.id)}
                      className="px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#1C1917] hover:bg-[#C5A059] rounded transition-colors cursor-pointer"
                    >
                      Explore Offer
                    </button>
                    <a
                      href={`https://wa.me/66860055005?text=Hello%20Silp-pa%20Ayutthaya,%20I%20would%20like%20to%20inquire%20about%20the%20${encodeURIComponent(offer.title)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded transition-colors"
                      title="WhatsApp Inquiry"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => setCurrentPage('offers')}
              className="inline-flex items-center gap-2 px-8 py-3 bg-stone-900 hover:bg-[#C5A059] text-white hover:text-stone-950 font-semibold text-xs tracking-wider uppercase rounded-sm transition-colors cursor-pointer"
            >
              <span>View All 6 Luxury Packages</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: CUSTOMER REVIEWS & RATINGS (THE REQUESTED SECTION)
          ========================================================================= */}
      <ReviewRatingsSection onWriteReview={onOpenReviewModal} showAllTestimonials={false} />

      {/* =========================================================================
          SECTION 6: LOCATION, AYUTTHAYA HERITAGE & CONTACT
          ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Location Details: 5 cols */}
            <div className="lg:col-span-5 space-y-6">
              <div className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-semibold">
                UNESCO Historic Enclave
              </div>

              <h2 className="text-3xl md:text-5xl font-serif-luxury text-[#1C1917] tracking-tight">
                In the Heart of Pratu Chai Sub-district
              </h2>

              <p className="text-sm text-[#5C5346] leading-relaxed">
                Silp-pa Phra Nakhon Si Ayutthaya is perfectly secluded on the historic island, surrounded by ancient canals, Buddhist monasteries, and tranquil waterways.
              </p>

              {/* Exact Address Highlight */}
              <div className="p-4 bg-white rounded-xl border border-[#E8E2D8] space-y-2">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-stone-900">Hotel Address</div>
                    <div className="text-xs text-stone-600 mt-0.5 leading-relaxed">
                      Pratu Chai Sub-district, Phra Nakhon Si Ayutthaya District, Phra Nakhon Si Ayutthaya 13000, Thailand
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs">
                  <span className="text-stone-500">Direct Phone:</span>
                  <a
                    href={`tel:${HOTEL_INFO.phone}`}
                    className="font-bold text-stone-900 hover:text-[#C5A059]"
                  >
                    {HOTEL_INFO.formattedPhone}
                  </a>
                </div>
              </div>

              {/* Nearby Distances */}
              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-1.5 border-b border-stone-200">
                  <span className="text-stone-600">Wat Phra Si Sanphet</span>
                  <span className="font-semibold text-stone-900">800 m (3 mins cycle)</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-stone-200">
                  <span className="text-stone-600">Wat Mahathat (Buddha Head in Tree)</span>
                  <span className="font-semibold text-stone-900">1.2 km (5 mins cycle)</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-stone-200">
                  <span className="text-stone-600">Chao Phraya Riverfront & Pier</span>
                  <span className="font-semibold text-stone-900">300 m (4 mins walk)</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-stone-200">
                  <span className="text-stone-600">Ayutthaya Railway Station</span>
                  <span className="font-semibold text-stone-900">3.5 km (8 mins drive)</span>
                </div>
                <div className="flex justify-between py-1.5 text-stone-500">
                  <span>Bangkok Central (Don Mueang / Krung Thep Aphiwat)</span>
                  <span className="font-semibold text-stone-900">75 mins by car/train</span>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href={HOTEL_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-[#1C1917] hover:bg-[#C5A059] text-white hover:text-stone-950 font-semibold text-xs tracking-wider uppercase rounded transition-colors inline-flex items-center gap-2"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Open in Google Maps</span>
                </a>

                <a
                  href={HOTEL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded transition-colors inline-flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Ask Directions</span>
                </a>
              </div>
            </div>

            {/* Interactive Map Visualizer: 7 cols */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl overflow-hidden border border-[#E8E2D8] shadow-xl relative">
                {/* Embedded Map Visualizer */}
                <div className="h-[420px] md:h-[480px] w-full relative bg-stone-100">
                  <iframe
                    title="Silp-pa Phra Nakhon Si Ayutthaya Location Map"
                    src="https://maps.google.com/maps?q=Pratu+Chai+Phra+Nakhon+Si+Ayutthaya+Thailand&t=&z=14&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  
                  {/* Floating Map Marker Card */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md p-3.5 rounded-lg shadow-lg border border-stone-200 text-xs max-w-xs">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#C5A059]" />
                      <span className="font-bold text-stone-900">Silp-pa Ayutthaya</span>
                    </div>
                    <p className="text-[11px] text-stone-600">
                      Pratu Chai Sub-district, Phra Nakhon Si Ayutthaya 13000
                    </p>
                    <a
                      href={HOTEL_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] text-blue-600 hover:underline font-semibold mt-1 inline-block"
                    >
                      Get Driving Directions →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
