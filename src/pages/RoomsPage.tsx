import React, { useState } from 'react';
import { HOTEL_INFO, ROOMS_DATA, Room } from '../data/hotelData';
import { 
  Users, 
  Maximize2, 
  CheckCircle2, 
  MessageCircle, 
  Calendar, 
  Eye, 
  Sparkles, 
  Wifi, 
  Coffee, 
  Bath, 
  Wind,
  X
} from 'lucide-react';

interface RoomsPageProps {
  onOpenBooking: (roomId?: string) => void;
}

export const RoomsPage: React.FC<RoomsPageProps> = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'deluxe' | 'suite' | 'villa' | 'loft'>('all');
  const [currency, setCurrency] = useState<'THB' | 'USD' | 'EUR'>('THB');
  const [activeGalleryRoom, setActiveGalleryRoom] = useState<Room | null>(null);
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<string>('');

  const currencyRates = {
    THB: 1,
    USD: 0.028,
    EUR: 0.026,
  };

  const formatPrice = (thbPrice: number) => {
    if (currency === 'THB') {
      return `THB ${thbPrice.toLocaleString()}`;
    }
    const converted = Math.round(thbPrice * currencyRates[currency]);
    return currency === 'USD' ? `$${converted}` : `€${converted}`;
  };

  const filteredRooms = selectedCategory === 'all'
    ? ROOMS_DATA
    : ROOMS_DATA.filter((r) => r.category === selectedCategory);

  const openGallery = (room: Room) => {
    setActiveGalleryRoom(room);
    setSelectedGalleryImage(room.image);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-semibold mb-2">
            Boutique Accommodations
          </div>
          <h1 className="text-4xl md:text-6xl font-serif-luxury text-[#1C1917] tracking-tight">
            Sanctuaries of Wood, Light & Art
          </h1>
          <p className="mt-3 text-sm md:text-base text-[#6E6457] leading-relaxed">
            Every room at Silp-pa is individually curated with authentic Siamese timber, hand-woven textiles, and peaceful views across ancient frangipani courtyards and historic stupas.
          </p>

          {/* Interactive Filter Bar & Currency Controls */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-2 bg-white rounded-xl border border-[#E8E2D8] shadow-sm">
            {/* Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-1 sm:pb-0">
              {(
                [
                  { id: 'all', label: 'All Rooms' },
                  { id: 'deluxe', label: 'Deluxe Rooms' },
                  { id: 'suite', label: 'Artisan Suites' },
                  { id: 'villa', label: 'Heritage Villas' },
                  { id: 'loft', label: 'Art Lofts' },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                    selectedCategory === tab.id
                      ? 'bg-[#1C1917] text-white shadow-sm'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Currency Selector */}
            <div className="flex items-center gap-2 text-xs text-stone-500 shrink-0">
              <span className="font-medium">Currency:</span>
              <div className="flex border border-stone-200 rounded-lg p-0.5 bg-stone-50">
                {(['THB', 'USD', 'EUR'] as const).map((curr) => (
                  <button
                    key={curr}
                    onClick={() => setCurrency(curr)}
                    className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                      currency === curr
                        ? 'bg-white text-stone-900 shadow-xs'
                        : 'text-stone-500 hover:text-stone-900'
                    }`}
                  >
                    {curr}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Room Catalog List / Grid */}
        <div className="space-y-12">
          {filteredRooms.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#E8E2D8] shadow-sm hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12"
            >
              {/* Image & Gallery trigger: 5 cols */}
              <div className="lg:col-span-5 relative group overflow-hidden bg-stone-100">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-72 lg:h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute top-4 left-4 bg-[#1C1917]/85 backdrop-blur-md px-3 py-1 rounded text-white text-[11px] font-semibold">
                  {room.category.toUpperCase()}
                </div>

                <button
                  onClick={() => openGallery(room)}
                  className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md hover:bg-white text-stone-900 text-xs font-medium px-3 py-1.5 rounded-lg shadow-md flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>View Photos ({room.gallery.length})</span>
                </button>
              </div>

              {/* Details & Specs: 7 cols */}
              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs uppercase tracking-wider text-[#946E28] font-semibold">
                      {room.view}
                    </span>
                    <div className="flex items-center gap-3 text-xs text-stone-500">
                      <span>{room.sizeSqm} m²</span>
                      <span>·</span>
                      <span>{room.bedType}</span>
                      <span>·</span>
                      <span>{room.occupancy}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-stone-900 mb-1">
                    {room.name}
                  </h3>
                  <div className="text-xs text-[#8C7D6B] font-medium mb-3">
                    {room.subtitle}
                  </div>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6">
                    {room.description}
                  </p>

                  {/* Highlights Bar */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {room.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 text-[11px] text-stone-700 bg-stone-100 px-2.5 py-1 rounded-md"
                      >
                        <Sparkles className="w-3 h-3 text-[#C5A059]" />
                        <span>{h}</span>
                      </span>
                    ))}
                  </div>

                  {/* Feature Checklist */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-600 pt-4 border-t border-stone-100">
                    {room.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price & Booking Actions */}
                <div className="pt-6 mt-6 border-t border-stone-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    {room.originalPriceTHB && (
                      <span className="text-xs text-stone-400 line-through mr-2">
                        {formatPrice(room.originalPriceTHB)}
                      </span>
                    )}
                    <div className="text-2xl font-bold font-serif-luxury text-stone-900 tabular-nums">
                      {formatPrice(room.priceTHB)}
                      <span className="text-xs font-normal text-stone-500 ml-1">/ night</span>
                    </div>
                    <span className="text-[11px] text-emerald-700 font-medium">
                      Best Direct Rate · Taxes & Wi-Fi Included
                    </span>
                  </div>

                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <button
                      onClick={() => onOpenBooking(room.id)}
                      className="flex-1 sm:flex-none px-6 py-2.5 bg-[#1C1917] hover:bg-[#C5A059] hover:text-stone-950 text-white font-semibold text-xs tracking-wider uppercase rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Reserve Room</span>
                    </button>

                    <a
                      href={`https://wa.me/66860055005?text=Hello%20Silp-pa%20Ayutthaya,%20I%20would%20like%20to%20inquire%20about%20booking%20the%20${encodeURIComponent(room.name)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors"
                      title="Book via WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-600" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Inclusions Banner */}
        <div className="mt-16 p-8 bg-white rounded-2xl border border-[#E8E2D8] shadow-sm text-center">
          <h3 className="text-2xl font-serif-luxury text-stone-900 mb-2">
            Every Silp-pa Stay Includes
          </h3>
          <p className="text-xs text-stone-500 max-w-xl mx-auto mb-6">
            We attend to every subtle detail of your stay in the historic kingdom of Ayutthaya.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-xs text-stone-700">
            <div className="flex flex-col items-center">
              <Wifi className="w-6 h-6 text-[#C5A059] mb-2" />
              <span className="font-semibold">300 Mbps Fiber Wi-Fi</span>
              <span className="text-[11px] text-stone-500">Fast & unlimited throughout</span>
            </div>
            <div className="flex flex-col items-center">
              <Coffee className="w-6 h-6 text-[#C5A059] mb-2" />
              <span className="font-semibold">Artisan Coffee Bar</span>
              <span className="text-[11px] text-stone-500">In-room pour-over & herbal teas</span>
            </div>
            <div className="flex flex-col items-center">
              <Bath className="w-6 h-6 text-[#C5A059] mb-2" />
              <span className="font-semibold">Organic Thai Toiletries</span>
              <span className="text-[11px] text-stone-500">Lemongrass & frangipani botanicals</span>
            </div>
            <div className="flex flex-col items-center">
              <Wind className="w-6 h-6 text-[#C5A059] mb-2" />
              <span className="font-semibold">Vintage Bicycles</span>
              <span className="text-[11px] text-stone-500">Complimentary temple cycling</span>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Photo Gallery Modal */}
      {activeGalleryRoom && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#1C1917] text-white w-full max-w-4xl rounded-2xl overflow-hidden border border-stone-800 shadow-2xl">
            <div className="p-4 flex items-center justify-between border-b border-stone-800">
              <div>
                <h4 className="text-lg font-serif-luxury text-[#C5A059]">
                  {activeGalleryRoom.name}
                </h4>
                <div className="text-xs text-stone-400">
                  {activeGalleryRoom.subtitle}
                </div>
              </div>
              <button
                onClick={() => setActiveGalleryRoom(null)}
                className="p-1.5 text-stone-400 hover:text-white rounded-full hover:bg-white/10 cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-4">
              <div className="h-80 md:h-[460px] overflow-hidden rounded-xl bg-black flex items-center justify-center mb-4">
                <img
                  src={selectedGalleryImage}
                  alt={activeGalleryRoom.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Thumbnails */}
              <div className="flex items-center gap-3 overflow-x-auto pb-2">
                {activeGalleryRoom.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedGalleryImage(img)}
                    className={`w-20 h-16 rounded-lg overflow-hidden border-2 shrink-0 transition-all cursor-pointer ${
                      selectedGalleryImage === img
                        ? 'border-[#C5A059] scale-105'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            <div className="p-4 bg-stone-900 border-t border-stone-800 flex items-center justify-between">
              <span className="text-xs text-stone-400">
                Direct WhatsApp Concierge: +66 86 005 5005
              </span>
              <button
                onClick={() => {
                  const id = activeGalleryRoom.id;
                  setActiveGalleryRoom(null);
                  onOpenBooking(id);
                }}
                className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-stone-950 bg-[#C5A059] hover:bg-[#D4B06A] rounded-lg transition-colors cursor-pointer"
              >
                Reserve This Room
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
