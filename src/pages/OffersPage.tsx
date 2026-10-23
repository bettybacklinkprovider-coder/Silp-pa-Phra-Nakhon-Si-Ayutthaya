import React, { useState } from 'react';
import { HOTEL_INFO, SPECIAL_OFFERS, FAQ_DATA, SpecialOffer } from '../data/hotelData';
import { 
  CheckCircle2, 
  MessageCircle, 
  Calendar, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp, 
  Tag, 
  Wifi, 
  Coffee, 
  Car, 
  Utensils,
  ArrowRight
} from 'lucide-react';

interface OffersPageProps {
  onOpenBooking: (roomId?: string, offerId?: string) => void;
}

export const OffersPage: React.FC<OffersPageProps> = ({ onOpenBooking }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [selectedOfferFilter, setSelectedOfferFilter] = useState<string>('all');

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const filteredOffers = selectedOfferFilter === 'all'
    ? SPECIAL_OFFERS
    : SPECIAL_OFFERS.filter(o => o.category === selectedOfferFilter);

  return (
    <div className="min-h-screen bg-[#FAF8F5] py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* 5. Additional Premium Element: Featured Offer Banner at the Top */}
        <div className="mb-14 p-6 sm:p-10 bg-gradient-to-r from-[#171412] via-[#2A231C] to-[#171412] text-white rounded-2xl shadow-xl border border-[#3E342B] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C5A059]/20 text-[#E6C687] text-xs font-semibold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Featured Stay Privilege</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif-luxury text-white">
                Monsoon & Temple Twilight Retreat — 25% Direct Savings
              </h2>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-2xl">
                Experience Ayutthaya when the ancient ruins glisten with historic grandeur. Includes gourmet artisan breakfast, daily pour-over coffee, vintage bicycle tour, and guaranteed late check-out.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-stone-300">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Valid through Dec 2026</span>
                </span>
                <span>·</span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Free Cancellation up to 48 Hours</span>
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-center gap-3">
              <button
                onClick={() => onOpenBooking(undefined, SPECIAL_OFFERS[1].id)}
                className="w-full sm:w-auto px-6 py-3 bg-[#C5A059] hover:bg-[#D4B06A] text-stone-950 font-semibold text-xs tracking-wider uppercase rounded-lg transition-colors shadow-lg cursor-pointer text-center"
              >
                Claim This Feature Offer
              </button>
              <a
                href={HOTEL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-emerald-400 bg-emerald-950/60 hover:bg-emerald-900 border border-emerald-800 rounded-lg transition-colors flex items-center justify-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#4ADE80]" />
                <span>Inquire on WhatsApp (+66860055005)</span>
              </a>
            </div>
          </div>
        </div>

        {/* 1. Section Design: Heading & Welcoming Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-semibold mb-2">
            Curated Hotel Packages
          </div>
          <h1 className="text-4xl md:text-5xl font-serif-luxury text-[#1C1917] tracking-tight">
            Exclusive Offers & Packages
          </h1>
          <p className="mt-3 text-sm md:text-base text-[#6E6457] leading-relaxed">
            Discover exceptional stays and exclusive offers designed to make your experience unforgettable.
          </p>

          {/* Offer Category Filter Tabs */}
          <div className="mt-8 flex items-center justify-center gap-2 overflow-x-auto pb-2">
            {[
              { id: 'all', label: 'All Packages (6)' },
              { id: 'weekend', label: 'Weekend' },
              { id: 'extended', label: 'Extended Stay' },
              { id: 'romantic', label: 'Romantic' },
              { id: 'family', label: 'Family' },
              { id: 'business', label: 'Business' },
              { id: 'seasonal', label: 'Seasonal' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedOfferFilter(tab.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all cursor-pointer whitespace-nowrap ${
                  selectedOfferFilter === tab.id
                    ? 'bg-[#1C1917] text-white shadow-sm'
                    : 'bg-white text-stone-600 hover:text-stone-900 border border-stone-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 2 & 3. The 6 Attractive Offer Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredOffers.map((offer) => (
            <div
              key={offer.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#E8E2D8] shadow-sm hover:shadow-xl hover:border-[#C5A059]/60 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image Container with Badges */}
                <div className="relative h-60 overflow-hidden bg-stone-100">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  {offer.badge && (
                    <div className="absolute top-4 left-4 bg-[#1C1917]/90 text-[#C5A059] text-[10px] uppercase font-bold px-2.5 py-1 rounded">
                      {offer.badge}
                    </div>
                  )}
                  {offer.discountPercent > 0 && (
                    <div className="absolute top-4 right-4 bg-red-600 text-white text-[11px] font-bold px-2.5 py-1 rounded shadow-sm">
                      Save {offer.discountPercent}%
                    </div>
                  )}

                  <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-0.5 rounded text-[10px] font-medium text-stone-800">
                    {offer.minStay}
                  </div>
                </div>

                {/* Offer Details */}
                <div className="p-6">
                  <div className="text-[11px] uppercase tracking-wider text-[#946E28] font-semibold mb-1">
                    {offer.validity}
                  </div>
                  <h3 className="text-xl font-serif-luxury font-bold text-stone-900 mb-1.5 leading-snug">
                    {offer.title}
                  </h3>
                  <div className="text-xs text-[#8C7D6B] font-medium mb-3">
                    {offer.subtitle}
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed mb-4">
                    {offer.description}
                  </p>

                  {/* Included Amenities Checklist */}
                  <div className="pt-3 border-t border-stone-100 space-y-2">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-500">
                      Package Inclusions:
                    </span>
                    {offer.includedAmenities.map((amenity, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-stone-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                        <span className="leading-tight">{amenity}</span>
                      </div>
                    ))}
                  </div>

                  {/* Booking Conditions */}
                  <div className="mt-4 p-2.5 bg-stone-50 rounded-lg border border-stone-100 text-[11px] text-stone-500">
                    <span className="font-semibold text-stone-700">Terms: </span>
                    {offer.bookingConditions}
                  </div>
                </div>
              </div>

              {/* Price & CTA Footer */}
              <div className="p-6 bg-stone-50 border-t border-stone-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-stone-400 line-through mr-2">
                    THB {offer.originalPriceTHB.toLocaleString()}
                  </span>
                  <div className="text-xl font-bold font-serif-luxury text-stone-900 tabular-nums">
                    THB {offer.discountedPriceTHB.toLocaleString()}
                  </div>
                  <span className="text-[10px] text-emerald-700 font-medium">
                    Verified Package Rate
                  </span>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    onClick={() => onOpenBooking(undefined, offer.id)}
                    className="flex-1 sm:flex-none px-4 py-2.5 bg-[#1C1917] hover:bg-[#C5A059] hover:text-stone-950 text-white font-semibold text-xs tracking-wider uppercase rounded-lg transition-colors cursor-pointer shadow-sm text-center"
                  >
                    Explore Offer
                  </button>

                  <a
                    href={`https://wa.me/66860055005?text=Hello%20Silp-pa%20Ayutthaya,%20I%20would%20like%20to%20inquire%20about%20the%20${encodeURIComponent(offer.title)}%20(THB%20${offer.discountedPriceTHB}).`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors"
                    title="Direct WhatsApp Inquiry"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 5. Additional Element: Find Your Perfect Stay Call to Action */}
        <div className="mt-16 p-8 md:p-12 bg-white rounded-2xl border border-[#E8E2D8] shadow-sm text-center max-w-4xl mx-auto">
          <div className="w-12 h-12 bg-[#FAF5EC] rounded-full flex items-center justify-center text-[#C5A059] mx-auto mb-4">
            <Sparkles className="w-6 h-6" />
          </div>
          <h2 className="text-3xl font-serif-luxury text-stone-900 mb-2">
            Find Your Perfect Ayutthaya Stay
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 max-w-lg mx-auto mb-6">
            Planning a private celebration, romantic proposal, or customized historic photography itinerary? Our front desk team is ready to craft a bespoke stay for you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto px-6 py-3 bg-[#1C1917] hover:bg-[#C5A059] text-white hover:text-stone-950 font-semibold text-xs tracking-wider uppercase rounded-lg transition-colors cursor-pointer"
            >
              Select Dates & Check Rates
            </button>
            <a
              href={HOTEL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 font-semibold text-xs rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp Concierge: +66 86 005 5005</span>
            </a>
          </div>
        </div>

        {/* 5. Additional Element: Package & Offer FAQ Accordion */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-widest text-[#C5A059] font-semibold">
              Frequently Asked Questions
            </span>
            <h3 className="text-2xl font-serif-luxury text-stone-900 mt-1">
              Package Conditions & Booking Policies
            </h3>
          </div>

          <div className="space-y-3">
            {FAQ_DATA.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-[#E8E2D8] overflow-hidden transition-all shadow-xs"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-semibold text-xs sm:text-sm text-stone-900 hover:text-[#C5A059] transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-stone-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-stone-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-4 text-xs text-stone-600 leading-relaxed border-t border-stone-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
