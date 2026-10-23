import React, { useState } from 'react';
import { ReviewItem, ROOMS_DATA } from '../data/hotelData';
import { X, Star, CheckCircle2 } from 'lucide-react';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitReview: (newReview: ReviewItem) => void;
}

export const ReviewModal: React.FC<ReviewModalProps> = ({
  isOpen,
  onClose,
  onSubmitReview,
}) => {
  const [rating, setRating] = useState<number>(5);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [guestName, setGuestName] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [stayedRoom, setStayedRoom] = useState<string>(ROOMS_DATA[0].name);
  const [tripType, setTripType] = useState<string>('Couples Holiday');
  const [category, setCategory] = useState<'couples' | 'culture' | 'family' | 'cafe' | 'solo'>('couples');
  const [title, setTitle] = useState<string>('');
  const [comment, setComment] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newReview: ReviewItem = {
      id: `rev-${Date.now()}`,
      guestName: guestName || 'Anonymous Traveler',
      country: country || 'International Traveler',
      roleOrTripType: tripType,
      rating,
      date: 'Just now',
      title: title || 'A memorable stay in Ayutthaya',
      comment,
      stayedRoom,
      verified: true,
      helpfulCount: 1,
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
      category,
    };

    onSubmitReview(newReview);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#FAF8F5] w-full max-w-lg rounded-2xl shadow-2xl border border-[#E8E2D8] overflow-hidden">
        {/* Header */}
        <div className="bg-[#1C1917] text-white px-6 py-4 flex items-center justify-between">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#C5A059] font-medium">
              Share Your Experience
            </div>
            <h3 className="text-lg font-serif-luxury tracking-wide">
              Review Silp-pa Phra Nakhon Si Ayutthaya
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-white transition-colors rounded-full hover:bg-white/10 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-serif-luxury text-stone-900">
              Thank You for Your Feedback!
            </h4>
            <p className="text-xs text-stone-600">
              Your verified review has been published to our guest community.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[85vh] overflow-y-auto">
            {/* Star Rating Selector */}
            <div className="text-center py-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
                Your Overall Rating
              </label>
              <div className="flex justify-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    type="button"
                    key={star}
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="p-1 transition-transform hover:scale-110 focus:outline-none cursor-pointer"
                  >
                    <Star
                      className={`w-7 h-7 ${
                        (hoverRating || rating) >= star
                          ? 'fill-amber-400 text-amber-400'
                          : 'text-stone-300'
                      }`}
                    />
                  </button>
                ))}
              </div>
              <div className="text-xs text-stone-500 font-medium mt-1">
                {rating === 5 && 'Outstanding Siamese Stay'}
                {rating === 4 && 'Very Good Hospitality'}
                {rating === 3 && 'Average Experience'}
                {rating <= 2 && 'Needs Improvement'}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Maya Lin"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  className="w-full bg-white border border-stone-300 rounded-lg px-3 py-2 text-xs text-stone-900 focus:outline-none focus:ring-1 focus:ring-[#C5A059]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">
                  City & Country
                </label>
                <input
                  type="text"
                  placeholder="e.g. Singapore"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full bg-white border border-stone-300 rounded-lg px-3 py-2 text-xs text-stone-900 focus:outline-none focus:ring-1 focus:ring-[#C5A059]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">
                  Room Stayed
                </label>
                <select
                  value={stayedRoom}
                  onChange={(e) => setStayedRoom(e.target.value)}
                  className="w-full bg-white border border-stone-300 rounded-lg px-3 py-2 text-xs text-stone-900 focus:outline-none focus:ring-1 focus:ring-[#C5A059]"
                >
                  {ROOMS_DATA.map((r) => (
                    <option key={r.id} value={r.name}>
                      {r.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">
                  Trip Category
                </label>
                <select
                  value={category}
                  onChange={(e) => {
                    const cat = e.target.value as any;
                    setCategory(cat);
                    if (cat === 'couples') setTripType('Couples Getaway');
                    if (cat === 'culture') setTripType('Historic Temple Exploration');
                    if (cat === 'family') setTripType('Family Holiday');
                    if (cat === 'cafe') setTripType('Cafe & Coffee Visit');
                    if (cat === 'solo') setTripType('Solo Retreat');
                  }}
                  className="w-full bg-white border border-stone-300 rounded-lg px-3 py-2 text-xs text-stone-900 focus:outline-none focus:ring-1 focus:ring-[#C5A059]"
                >
                  <option value="couples">Couples & Romance</option>
                  <option value="culture">Heritage & Culture</option>
                  <option value="family">Family Stay</option>
                  <option value="cafe">Cafe & Dining</option>
                  <option value="solo">Solo & Creative</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-stone-700 mb-1">
                Headline / Title *
              </label>
              <input
                type="text"
                placeholder="e.g. The most peaceful boutique stay in Ayutthaya"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full bg-white border border-stone-300 rounded-lg px-3 py-2 text-xs text-stone-900 focus:outline-none focus:ring-1 focus:ring-[#C5A059]"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-stone-700 mb-1">
                Your Review *
              </label>
              <textarea
                rows={3}
                placeholder="Tell other travelers about the room, hospitality, cafe, location..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full bg-white border border-stone-300 rounded-lg px-3 py-2 text-xs text-stone-900 focus:outline-none focus:ring-1 focus:ring-[#C5A059]"
                required
              />
            </div>

            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs text-stone-600 hover:text-stone-900 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#1C1917] hover:bg-[#C5A059] rounded-lg transition-colors cursor-pointer"
              >
                Publish Review
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
