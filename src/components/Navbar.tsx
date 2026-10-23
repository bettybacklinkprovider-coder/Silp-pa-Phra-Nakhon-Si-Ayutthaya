import React, { useState } from 'react';
import { HOTEL_INFO } from '../data/hotelData';
import { Phone, MessageCircle, Menu, X, Calendar } from 'lucide-react';

interface NavbarProps {
  currentPage: 'home' | 'rooms' | 'offers' | 'reviews';
  setCurrentPage: (page: 'home' | 'rooms' | 'offers' | 'reviews') => void;
  onOpenBooking: (prefillRoomId?: string, prefillOfferId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage, onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: 'home' | 'rooms' | 'offers' | 'reviews'; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'rooms', label: 'Rooms & Suites' },
    { id: 'offers', label: 'Exclusive Offers' },
    { id: 'reviews', label: 'Reviews & Location' },
  ];

  const handleNavClick = (pageId: 'home' | 'rooms' | 'offers' | 'reviews') => {
    setCurrentPage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E8E2D8] transition-all">
      {/* Top micro bar for direct contact phone */}
      <div className="bg-[#1C1917] text-[#FAF8F5] text-xs py-1.5 px-4 sm:px-8 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <span className="text-[#C5A059] font-medium tracking-wider text-[11px] uppercase">
            Phra Nakhon Si Ayutthaya, Thailand
          </span>
          <span className="hidden md:inline text-stone-500">·</span>
          <span className="hidden md:inline text-stone-400 text-[11px]">
            UNESCO Historic Island
          </span>
        </div>
        <div className="flex items-center gap-4 text-[11px]">
          <a
            href={`tel:${HOTEL_INFO.phone}`}
            className="flex items-center gap-1.5 text-stone-300 hover:text-white transition-colors"
          >
            <Phone className="w-3 h-3 text-[#C5A059]" />
            <span>{HOTEL_INFO.formattedPhone}</span>
          </a>
          <span className="text-stone-600">|</span>
          <a
            href={HOTEL_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[#4ADE80] hover:text-green-300 transition-colors font-medium"
          >
            <MessageCircle className="w-3 h-3" />
            <span>WhatsApp Booking</span>
          </a>
        </div>
      </div>

      {/* Main 3-Zone Header Contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-left group cursor-pointer focus:outline-none"
        >
          <div className="text-xl md:text-2xl font-serif-luxury tracking-wide text-[#1C1917] group-hover:text-[#C5A059] transition-colors whitespace-nowrap">
            Silp-pa Ayutthaya
          </div>
          <div className="text-[10px] uppercase tracking-[0.25em] text-[#8C7D6B] font-medium -mt-0.5">
            Boutique Hotel & Cafe
          </div>
        </button>

        {/* Zone 2: Navigation Links (4-5 single line text links) */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`transition-colors whitespace-nowrap py-1 relative cursor-pointer ${
                  isActive
                    ? 'text-[#1C1917] font-semibold'
                    : 'text-[#5C5346] hover:text-[#1C1917]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C5A059] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action CTA */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => onOpenBooking()}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-medium tracking-wider uppercase text-white bg-[#1C1917] hover:bg-[#C5A059] rounded-sm transition-colors shadow-sm whitespace-nowrap cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 text-[#C5A059] group-hover:text-white" />
            <span>Reserve Stay</span>
          </button>

          <a
            href={HOTEL_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/80 rounded-sm transition-colors whitespace-nowrap"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span className="hidden sm:inline">WhatsApp</span>
            <span className="sm:hidden">Chat</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#1C1917] hover:text-[#C5A059] transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F5] border-t border-[#E8E2D8] px-6 py-5 space-y-4 shadow-lg animate-in fade-in duration-200">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left py-2 text-base font-serif-luxury tracking-wide transition-colors ${
                  currentPage === item.id
                    ? 'text-[#C5A059] font-bold pl-2 border-l-2 border-[#C5A059]'
                    : 'text-[#3E3830] hover:text-[#1C1917]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-[#E8E2D8] flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#1C1917] rounded-sm"
            >
              <Calendar className="w-4 h-4 text-[#C5A059]" />
              <span>Book Room or Package</span>
            </button>
            <a
              href={HOTEL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-emerald-800 bg-emerald-100/70 border border-emerald-300 rounded-sm"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Direct WhatsApp Concierge: +66 86 005 5005</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
