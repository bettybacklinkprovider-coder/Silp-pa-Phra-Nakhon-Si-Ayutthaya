import React, { useState } from 'react';
import { HOTEL_INFO, TESTIMONIALS_DATA, ReviewItem } from '../data/hotelData';
import { ReviewRatingsSection } from '../components/ReviewRatingsSection';
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  Mail, 
  Send, 
  CheckCircle2, 
  Sparkles,
  ExternalLink,
  Clock
} from 'lucide-react';

interface ReviewsPageProps {
  onOpenReviewModal: () => void;
  onOpenBooking: () => void;
  testimonials: ReviewItem[];
}

export const ReviewsPage: React.FC<ReviewsPageProps> = ({
  onOpenReviewModal,
  onOpenBooking,
}) => {
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [contactSent, setContactSent] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSent(true);
    setTimeout(() => {
      setContactSent(false);
      setContactName('');
      setContactEmail('');
      setContactPhone('');
      setContactMessage('');
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Page Header */}
      <div className="py-14 md:py-20 bg-[#F3EFE8] border-b border-[#E2DBD0] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-semibold mb-2">
            Hospitality Excellence
          </div>
          <h1 className="text-4xl md:text-6xl font-serif-luxury text-[#1C1917] tracking-tight">
            Guest Testimonials & Historic Sanctuary
          </h1>
          <p className="mt-3 text-sm md:text-base text-[#6E6457] leading-relaxed max-w-2xl mx-auto">
            Discover why global travelers and discerning guests award Silp-pa Phra Nakhon Si Ayutthaya a 4.9/5.0 aggregate rating across Google and Trustpilot.
          </p>
        </div>
      </div>

      {/* Main Customer Reviews & Ratings Section (with QR Code, Breakdown, Google/Trustpilot cards, full testimonials) */}
      <ReviewRatingsSection onWriteReview={onOpenReviewModal} showAllTestimonials={true} />

      {/* Location, Contact & Google Maps Section */}
      <section className="py-20 bg-[#FAF8F5] border-t border-[#E8E2D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-semibold">
              Find Us In Ayutthaya
            </span>
            <h2 className="text-3xl md:text-4xl font-serif-luxury text-[#1C1917] mt-1">
              Location & Concierge Inquiry
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-2">
              Located peacefully in Pratu Chai Sub-district on the historic island of Ayutthaya.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Contact Details & Inquiry Form: 6 cols */}
            <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-[#E8E2D8] shadow-sm space-y-6">
              <div>
                <h3 className="text-xl font-serif-luxury font-bold text-stone-900 mb-1">
                  Send a Message to Front Desk
                </h3>
                <p className="text-xs text-stone-500">
                  We reply within 15 minutes during operating hours.
                </p>
              </div>

              {contactSent ? (
                <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                  <h4 className="font-serif-luxury text-base font-bold text-emerald-900">
                    Message Sent Successfully
                  </h4>
                  <p className="text-xs text-emerald-700">
                    Thank you, {contactName || 'Guest'}. Our front desk team will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-stone-700 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Liam Smith"
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        className="w-full bg-[#FAF8F5] border border-stone-300 rounded-lg px-3 py-2 text-xs text-stone-900 focus:outline-none focus:ring-1 focus:ring-[#C5A059]"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-stone-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="you@domain.com"
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        className="w-full bg-[#FAF8F5] border border-stone-300 rounded-lg px-3 py-2 text-xs text-stone-900 focus:outline-none focus:ring-1 focus:ring-[#C5A059]"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      Phone Number / WhatsApp
                    </label>
                    <input
                      type="tel"
                      placeholder="+66..."
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                      className="w-full bg-[#FAF8F5] border border-stone-300 rounded-lg px-3 py-2 text-xs text-stone-900 focus:outline-none focus:ring-1 focus:ring-[#C5A059]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      Your Message or Inquiry *
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Ask about dates, private boat tours, airport transfer, special dietary requests..."
                      value={contactMessage}
                      onChange={(e) => setContactMessage(e.target.value)}
                      className="w-full bg-[#FAF8F5] border border-stone-300 rounded-lg px-3 py-2 text-xs text-stone-900 focus:outline-none focus:ring-1 focus:ring-[#C5A059]"
                      required
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                    <button
                      type="submit"
                      className="w-full sm:flex-1 py-2.5 px-5 text-xs font-semibold uppercase tracking-wider text-white bg-[#1C1917] hover:bg-[#C5A059] hover:text-stone-950 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Direct Inquiry</span>
                    </button>

                    <a
                      href={HOTEL_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto py-2.5 px-4 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-600" />
                      <span>Chat WhatsApp</span>
                    </a>
                  </div>
                </form>
              )}

              {/* Direct Info List */}
              <div className="pt-4 border-t border-stone-100 space-y-2.5 text-xs text-stone-600">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <span>{HOTEL_INFO.address}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <a href={`tel:${HOTEL_INFO.phone}`} className="font-semibold text-stone-900 hover:text-[#C5A059]">
                    {HOTEL_INFO.formattedPhone}
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span>{HOTEL_INFO.email}</span>
                </div>
              </div>
            </div>

            {/* Google Maps & Navigation: 6 cols */}
            <div className="lg:col-span-6 bg-white rounded-2xl overflow-hidden border border-[#E8E2D8] shadow-sm">
              <div className="h-96 w-full relative">
                <iframe
                  title="Silp-pa Ayutthaya Google Maps Embed"
                  src="https://maps.google.com/maps?q=Pratu+Chai+Phra+Nakhon+Si+Ayutthaya+Thailand&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="p-5 flex flex-col sm:flex-row items-center justify-between gap-3 bg-stone-50 border-t border-stone-200">
                <div>
                  <div className="text-xs font-bold text-stone-900">
                    Silp-pa Phra Nakhon Si Ayutthaya
                  </div>
                  <div className="text-[11px] text-stone-500">
                    Pratu Chai Sub-district · 13000 Thailand
                  </div>
                </div>

                <a
                  href={HOTEL_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
