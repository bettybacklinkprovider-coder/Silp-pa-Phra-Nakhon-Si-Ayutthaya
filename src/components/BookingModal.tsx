import React, { useState, useEffect } from 'react';
import { HOTEL_INFO, ROOMS_DATA, SPECIAL_OFFERS, Room, SpecialOffer } from '../data/hotelData';
import { X, Calendar, Users, MessageCircle, Check, ShieldCheck, ArrowRight, BedDouble, Tag } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRoomId?: string;
  initialOfferId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialRoomId,
  initialOfferId,
}) => {
  const [selectedType, setSelectedType] = useState<'room' | 'package'>('room');
  const [selectedRoomId, setSelectedRoomId] = useState<string>(initialRoomId || ROOMS_DATA[0].id);
  const [selectedOfferId, setSelectedOfferId] = useState<string>(initialOfferId || SPECIAL_OFFERS[0].id);
  
  const [checkIn, setCheckIn] = useState<string>('2026-11-12');
  const [checkOut, setCheckOut] = useState<string>('2026-11-14');
  const [guests, setGuests] = useState<number>(2);
  const [guestName, setGuestName] = useState<string>('');
  const [guestEmail, setGuestEmail] = useState<string>('');
  const [guestPhone, setGuestPhone] = useState<string>('');
  const [specialRequest, setSpecialRequest] = useState<string>('');
  const [includeBreakfast, setIncludeBreakfast] = useState<boolean>(true);
  
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [bookingRef, setBookingRef] = useState<string>('');

  useEffect(() => {
    if (initialOfferId) {
      setSelectedType('package');
      setSelectedOfferId(initialOfferId);
    } else if (initialRoomId) {
      setSelectedType('room');
      setSelectedRoomId(initialRoomId);
    }
  }, [initialRoomId, initialOfferId]);

  if (!isOpen) return null;

  // Calculate nights
  const d1 = new Date(checkIn);
  const d2 = new Date(checkOut);
  const diffTime = Math.max(d2.getTime() - d1.getTime(), 86400000);
  const nights = Math.max(1, Math.round(diffTime / (1000 * 3600 * 24)));

  const currentRoom: Room | undefined = ROOMS_DATA.find(r => r.id === selectedRoomId);
  const currentOffer: SpecialOffer | undefined = SPECIAL_OFFERS.find(o => o.id === selectedOfferId);

  let basePrice = 0;
  let title = '';

  if (selectedType === 'room' && currentRoom) {
    basePrice = currentRoom.priceTHB * nights;
    title = currentRoom.name;
  } else if (selectedType === 'package' && currentOffer) {
    basePrice = currentOffer.discountedPriceTHB;
    title = currentOffer.title;
  }

  const breakfastCost = (selectedType === 'room' && includeBreakfast) ? 450 * guests * nights : 0;
  const totalPrice = basePrice + breakfastCost;

  const generateWhatsAppUrl = () => {
    const text = `Hello Silp-pa Phra Nakhon Si Ayutthaya,

I would like to inquire/book:
- Selection: ${title} (${selectedType.toUpperCase()})
- Check-in: ${checkIn}
- Check-out: ${checkOut} (${nights} night${nights > 1 ? 's' : ''})
- Guests: ${guests}
- Guest Name: ${guestName || 'Guest'}
- Contact Phone: ${guestPhone || 'Direct Inquiry'}
- Breakfast: ${includeBreakfast || selectedType === 'package' ? 'Included' : 'Room only'}
- Special Note: ${specialRequest || 'None'}
- Estimated Total: THB ${totalPrice.toLocaleString()}

Please confirm availability and booking details. Thank you!`;

    return `https://wa.me/66860055005?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `SLP-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(ref);
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#FAF8F5] w-full max-w-2xl rounded-2xl shadow-2xl border border-[#E8E2D8] max-h-[92vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-[#1C1917] text-white px-6 py-4 flex items-center justify-between z-10">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#C5A059] font-medium">
              Direct Reservation & Concierge
            </div>
            <h3 className="text-xl font-serif-luxury tracking-wide">
              Silp-pa Phra Nakhon Si Ayutthaya
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-white transition-colors rounded-full hover:bg-white/10 cursor-pointer"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-sm">
              <Check className="w-8 h-8 stroke-[2.5]" />
            </div>

            <div>
              <span className="text-xs uppercase tracking-wider text-emerald-700 font-semibold">
                Reservation Request Received
              </span>
              <h4 className="text-2xl font-serif-luxury text-[#1C1917] mt-1">
                Thank You, {guestName || 'Valued Guest'}
              </h4>
              <p className="text-xs text-stone-600 mt-2 max-w-md mx-auto">
                Your reservation inquiry for <span className="font-semibold text-stone-900">{title}</span> has been logged under reference <span className="font-mono font-bold text-stone-900">{bookingRef}</span>.
              </p>
            </div>

            <div className="p-4 bg-white rounded-xl border border-stone-200 text-left text-xs space-y-2 max-w-md mx-auto">
              <div className="flex justify-between">
                <span className="text-stone-500">Dates:</span>
                <span className="font-semibold">{checkIn} to {checkOut} ({nights} nights)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Guests:</span>
                <span className="font-semibold">{guests} Guests</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-stone-100 text-sm">
                <span className="font-medium text-stone-800">Total Price:</span>
                <span className="font-bold text-[#C5A059] tabular-nums">THB {totalPrice.toLocaleString()}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirm Instantly via WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-stone-700 bg-stone-200 hover:bg-stone-300 rounded-lg transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
            {/* Toggle: Rooms vs Packages */}
            <div className="flex p-1 bg-stone-200/80 rounded-lg">
              <button
                type="button"
                onClick={() => setSelectedType('room')}
                className={`flex-1 py-2 text-xs font-medium rounded-md transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  selectedType === 'room'
                    ? 'bg-white text-stone-900 shadow-sm font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <BedDouble className="w-3.5 h-3.5" />
                <span>Boutique Rooms</span>
              </button>
              <button
                type="button"
                onClick={() => setSelectedType('package')}
                className={`flex-1 py-2 text-xs font-medium rounded-md transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  selectedType === 'package'
                    ? 'bg-white text-stone-900 shadow-sm font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <Tag className="w-3.5 h-3.5" />
                <span>Exclusive Packages</span>
              </button>
            </div>

            {/* Selection Dropdown */}
            {selectedType === 'room' ? (
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                  Choose Accommodation
                </label>
                <select
                  value={selectedRoomId}
                  onChange={(e) => setSelectedRoomId(e.target.value)}
                  className="w-full bg-white border border-stone-300 rounded-lg px-3.5 py-2.5 text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                >
                  {ROOMS_DATA.map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.name} — THB {r.priceTHB.toLocaleString()} / night ({r.sizeSqm}m², {r.bedType})
                    </option>
                  ))}
                </select>
              </div>
            ) : (
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                  Choose Special Package
                </label>
                <select
                  value={selectedOfferId}
                  onChange={(e) => setSelectedOfferId(e.target.value)}
                  className="w-full bg-white border border-stone-300 rounded-lg px-3.5 py-2.5 text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                >
                  {SPECIAL_OFFERS.map((o) => (
                    <option key={o.id} value={o.id}>
                      {o.title} — THB {o.discountedPriceTHB.toLocaleString()} ({o.minStay}, {o.discountPercent}% Off)
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Dates & Guests */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-medium text-stone-600 mb-1 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-stone-400" />
                  <span>Check-in Date</span>
                </label>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full bg-white border border-stone-300 rounded-lg px-3 py-2 text-xs text-stone-900 focus:outline-none focus:ring-1 focus:ring-[#C5A059]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-600 mb-1 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-stone-400" />
                  <span>Check-out Date</span>
                </label>
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full bg-white border border-stone-300 rounded-lg px-3 py-2 text-xs text-stone-900 focus:outline-none focus:ring-1 focus:ring-[#C5A059]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-600 mb-1 flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-stone-400" />
                  <span>Number of Guests</span>
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full bg-white border border-stone-300 rounded-lg px-3 py-2 text-xs text-stone-900 focus:outline-none focus:ring-1 focus:ring-[#C5A059]"
                >
                  <option value={1}>1 Guest</option>
                  <option value={2}>2 Guests</option>
                  <option value={3}>3 Guests</option>
                  <option value={4}>4 Guests</option>
                </select>
              </div>
            </div>

            {/* Guest Details */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-medium text-stone-600 mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Somchai Prasert"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  className="w-full bg-white border border-stone-300 rounded-lg px-3 py-2 text-xs text-stone-900 focus:outline-none focus:ring-1 focus:ring-[#C5A059]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-600 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={guestEmail}
                  onChange={(e) => setGuestEmail(e.target.value)}
                  className="w-full bg-white border border-stone-300 rounded-lg px-3 py-2 text-xs text-stone-900 focus:outline-none focus:ring-1 focus:ring-[#C5A059]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-600 mb-1">
                  Phone / WhatsApp
                </label>
                <input
                  type="tel"
                  placeholder="+66..."
                  value={guestPhone}
                  onChange={(e) => setGuestPhone(e.target.value)}
                  className="w-full bg-white border border-stone-300 rounded-lg px-3 py-2 text-xs text-stone-900 focus:outline-none focus:ring-1 focus:ring-[#C5A059]"
                />
              </div>
            </div>

            {/* Inclusions & Breakfast */}
            {selectedType === 'room' && (
              <div className="flex items-center gap-3 p-3 bg-stone-100 rounded-lg">
                <input
                  type="checkbox"
                  id="bf-check"
                  checked={includeBreakfast}
                  onChange={(e) => setIncludeBreakfast(e.target.checked)}
                  className="w-4 h-4 accent-[#C5A059] rounded"
                />
                <label htmlFor="bf-check" className="text-xs text-stone-700 cursor-pointer">
                  Include Daily Artisanal Breakfast at Silp-pa Cafe (+THB 450 per guest / night)
                </label>
              </div>
            )}

            {/* Special Request */}
            <div>
              <label className="block text-xs font-medium text-stone-600 mb-1">
                Special Requests or Arrival Notes
              </label>
              <textarea
                rows={2}
                placeholder="Late arrival, bicycle tour inquiry, dietary preferences..."
                value={specialRequest}
                onChange={(e) => setSpecialRequest(e.target.value)}
                className="w-full bg-white border border-stone-300 rounded-lg px-3 py-2 text-xs text-stone-900 focus:outline-none focus:ring-1 focus:ring-[#C5A059]"
              />
            </div>

            {/* Price Summary Bar */}
            <div className="p-4 bg-stone-100 rounded-xl flex items-center justify-between border border-stone-200">
              <div>
                <div className="text-[11px] text-stone-500 uppercase tracking-wider">
                  Total for {nights} Night{nights > 1 ? 's' : ''} ({guests} Guest{guests > 1 ? 's' : ''})
                </div>
                <div className="text-xl font-bold font-serif-luxury text-stone-900 tabular-nums">
                  THB {totalPrice.toLocaleString()}
                  <span className="text-xs font-normal text-stone-500 ml-2">
                    (~${Math.round(totalPrice / 35)} USD)
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-[11px] text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Best Rate Guarantee</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 py-3 px-4 text-xs font-semibold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm text-center"
              >
                <MessageCircle className="w-4 h-4 text-emerald-900" />
                <span>Instant WhatsApp Booking (+66860055005)</span>
              </a>

              <button
                type="submit"
                className="w-full sm:w-auto py-3 px-6 text-xs font-semibold uppercase tracking-wider text-white bg-[#1C1917] hover:bg-[#C5A059] rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Submit Request</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
