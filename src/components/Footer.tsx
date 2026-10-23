import React from 'react';
import { HOTEL_INFO } from '../data/hotelData';
import { MapPin, Phone, Mail, MessageCircle, Star, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: 'home' | 'rooms' | 'offers' | 'reviews') => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentPage, onOpenBooking }) => {
  const handleNav = (page: 'home' | 'rooms' | 'offers' | 'reviews') => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#171412] text-[#E8E2D8] border-t border-[#2D2721] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-[#2C2621]">
          {/* Brand & Story: 4 cols */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <div className="text-2xl font-serif-luxury text-[#FAF8F5] tracking-wide">
                Silp-pa Phra Nakhon Si Ayutthaya
              </div>
              <div className="text-xs uppercase tracking-[0.2em] text-[#C5A059] mt-1 font-medium">
                ศิลป์ พระนครศรีอยุธยา · Boutique Hotel & Cafe
              </div>
            </div>

            <p className="text-xs leading-relaxed text-[#A89E92] max-w-sm">
              An intimate sanctuary celebrating traditional Siamese craftsmanship, natural teak timber architecture, and specialty artisanal coffee on the UNESCO World Heritage island.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-[#D8CEBF]">
              <div className="flex text-[#C5A059]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#C5A059]" />
                ))}
              </div>
              <span className="font-semibold text-white">4.9 / 5.0</span>
              <span className="text-stone-500">·</span>
              <span className="text-stone-400">480+ Verified Guest Reviews</span>
            </div>
          </div>

          {/* Quick Pages: 2 cols */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#C5A059]">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-[#C2B7A8]">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home & Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('rooms')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Rooms & Suites
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('offers')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Exclusive Offers & Packages
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('reviews')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Reviews & Ratings
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenBooking}
                  className="hover:text-[#C5A059] transition-colors cursor-pointer text-left"
                >
                  Book Your Stay
                </button>
              </li>
            </ul>
          </div>

          {/* Special Packages: 3 cols */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#C5A059]">
              Curated Packages
            </h4>
            <ul className="space-y-2 text-xs text-[#C2B7A8]">
              <li>
                <button
                  onClick={() => handleNav('offers')}
                  className="hover:text-white transition-colors text-left flex items-center justify-between w-full group"
                >
                  <span>Weekend Getaway Package</span>
                  <ArrowUpRight className="w-3 h-3 text-stone-500 group-hover:text-[#C5A059]" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('offers')}
                  className="hover:text-white transition-colors text-left flex items-center justify-between w-full group"
                >
                  <span>Extended Stay Retreat (25% off)</span>
                  <ArrowUpRight className="w-3 h-3 text-stone-500 group-hover:text-[#C5A059]" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('offers')}
                  className="hover:text-white transition-colors text-left flex items-center justify-between w-full group"
                >
                  <span>Romantic Haven & Stone Bath</span>
                  <ArrowUpRight className="w-3 h-3 text-stone-500 group-hover:text-[#C5A059]" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('offers')}
                  className="hover:text-white transition-colors text-left flex items-center justify-between w-full group"
                >
                  <span>Family Cultural Stay</span>
                  <ArrowUpRight className="w-3 h-3 text-stone-500 group-hover:text-[#C5A059]" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('offers')}
                  className="hover:text-white transition-colors text-left flex items-center justify-between w-full group"
                >
                  <span>Executive & Creative Workation</span>
                  <ArrowUpRight className="w-3 h-3 text-stone-500 group-hover:text-[#C5A059]" />
                </button>
              </li>
            </ul>
          </div>

          {/* Location & Direct Contact: 3 cols */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#C5A059]">
              Address & Contact
            </h4>
            <div className="space-y-2.5 text-xs text-[#C2B7A8]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Pratu Chai Sub-district, Phra Nakhon Si Ayutthaya District, Phra Nakhon Si Ayutthaya 13000, Thailand
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a
                  href={`tel:${HOTEL_INFO.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {HOTEL_INFO.formattedPhone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#4ADE80] shrink-0" />
                <a
                  href={HOTEL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4ADE80] hover:text-green-300 font-medium transition-colors"
                >
                  WhatsApp: +66 86 005 5005
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>{HOTEL_INFO.email}</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={HOTEL_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[11px] text-[#C5A059] hover:underline"
              >
                <span>Open in Google Maps</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} Silp-pa Phra Nakhon Si Ayutthaya. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Check-in: 14:00</span>
            <span>·</span>
            <span>Check-out: 12:00</span>
            <span>·</span>
            <span>UNESCO Heritage Zone</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
