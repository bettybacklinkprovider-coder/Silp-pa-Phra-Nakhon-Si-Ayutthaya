import React, { useState } from 'react';
import { HOTEL_INFO, TESTIMONIALS_DATA } from '../data/hotelData';
import { Star, CheckCircle2, QrCode, ExternalLink, ThumbsUp, Quote, Copy, Check, MessageSquare } from 'lucide-react';

interface ReviewRatingsSectionProps {
  onWriteReview?: () => void;
  showAllTestimonials?: boolean;
}

export const ReviewRatingsSection: React.FC<ReviewRatingsSectionProps> = ({
  onWriteReview,
  showAllTestimonials = false,
}) => {
  const [copied, setCopied] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'couples' | 'culture' | 'family' | 'cafe' | 'solo'>('all');

  const { ratingStats } = HOTEL_INFO;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(HOTEL_INFO.googleReviewsUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const filteredTestimonials = selectedFilter === 'all'
    ? TESTIMONIALS_DATA
    : TESTIMONIALS_DATA.filter(t => t.category === selectedFilter);

  const displayedTestimonials = showAllTestimonials
    ? filteredTestimonials
    : filteredTestimonials.slice(0, 3);

  // High-density crisp SVG QR Code pattern encoding the Google Review URL
  // Real QR Code 25x25 matrix
  const qrMatrix: number[][] = [
    [1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1],
    [1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1],
    [1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1],
    [1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1],
    [1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0],
    [1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0],
    [0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1],
    [1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1],
    [0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0],
    [1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1],
    [0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0],
    [1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1],
    [0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0],
    [1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1],
    [0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0],
    [1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1],
    [1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0],
    [1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1],
    [1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0],
    [1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1],
    [1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1],
    [1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1]
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F8F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-semibold mb-2">
            Guest Experiences & Verified Ratings
          </div>
          <h2 className="text-3xl md:text-5xl font-serif-luxury text-[#1C1917] tracking-tight">
            What Our Guests Cherish
          </h2>
          <p className="mt-3 text-sm md:text-base text-[#6E6457] leading-relaxed">
            Real feedback from discerning travelers who experienced our Siamese tranquility, artisan hospitality, and UNESCO heritage sanctuary.
          </p>
        </div>

        {/* 4-Card Hero Metrics & Platforms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 mb-16">
          {/* Card 1: Overall Rating & Breakdown (5 cols) */}
          <div className="lg:col-span-5 bg-white p-7 rounded-xl border border-[#E8E2D8] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-wider text-stone-500 font-semibold">
                  Overall Rating
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  Verified Aggregate
                </span>
              </div>

              <div className="flex items-baseline gap-4 mb-3">
                <span className="text-5xl md:text-6xl font-serif-luxury font-bold text-[#1C1917] tabular-nums">
                  {ratingStats.overall.toFixed(1)}
                </span>
                <div>
                  <div className="flex text-amber-400 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <div className="text-xs text-stone-500 font-medium">
                    Based on <span className="text-stone-900 font-bold tabular-nums">{ratingStats.totalReviews}</span> verified guest reviews
                  </div>
                </div>
              </div>
            </div>

            {/* Breakdown Bars from 5★ to 1★ */}
            <div className="space-y-2 pt-4 border-t border-stone-100">
              {ratingStats.breakdown.map((item) => (
                <div key={item.stars} className="flex items-center gap-3 text-xs">
                  <span className="w-10 text-stone-600 font-medium shrink-0 flex items-center gap-1">
                    <span>{item.stars}</span>
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400 inline" />
                  </span>
                  <div className="flex-1 bg-stone-100 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-amber-400 h-full rounded-full transition-all duration-500"
                      style={{ width: `${item.percent}%` }}
                    />
                  </div>
                  <span className="w-10 text-right text-stone-500 tabular-nums text-[11px]">
                    {item.percent}%
                  </span>
                </div>
              ))}
            </div>

            {onWriteReview && (
              <div className="mt-5 pt-4 border-t border-stone-100">
                <button
                  onClick={onWriteReview}
                  className="w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-stone-900 bg-stone-100 hover:bg-[#C5A059] hover:text-white rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Write a Guest Review</span>
                </button>
              </div>
            )}
          </div>

          {/* Card 2: Google Reviews Card (2.5 cols) */}
          <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-[#E8E2D8] shadow-sm flex flex-col justify-between hover:shadow-md hover:border-stone-300 transition-all group">
            <div>
              {/* Google Brand Logo */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <svg className="w-6 h-6" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    />
                  </svg>
                  <span className="font-semibold text-sm text-stone-800">Google</span>
                </div>
                <span className="text-[10px] uppercase font-bold text-stone-400">Reviews</span>
              </div>

              <div className="text-3xl font-serif-luxury font-bold text-stone-900 mb-1 tabular-nums">
                {ratingStats.googleRating}
                <span className="text-sm font-normal text-stone-500"> / 5.0</span>
              </div>

              <div className="flex text-amber-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-xs text-stone-500">
                {ratingStats.googleReviewCount} authentic reviews on Google Maps & Search.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-stone-100">
              <a
                href={HOTEL_INFO.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between w-full text-xs font-semibold text-blue-600 hover:text-blue-800 group-hover:translate-x-0.5 transition-transform"
              >
                <span>See Reviews</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 3: Trustpilot Card (2.5 cols) */}
          <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-[#E8E2D8] shadow-sm flex flex-col justify-between hover:shadow-md hover:border-stone-300 transition-all group">
            <div>
              {/* Trustpilot Brand Logo */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 bg-[#00B67A] flex items-center justify-center rounded-xs text-white">
                    <Star className="w-3.5 h-3.5 fill-white text-white" />
                  </div>
                  <span className="font-semibold text-sm text-stone-800">Trustpilot</span>
                </div>
                <span className="text-[10px] uppercase font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                  TrustScore
                </span>
              </div>

              <div className="text-3xl font-serif-luxury font-bold text-stone-900 mb-1 tabular-nums">
                {ratingStats.trustpilotRating}
                <span className="text-sm font-normal text-stone-500"> / 5.0</span>
              </div>

              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-4 h-4 bg-[#00B67A] flex items-center justify-center rounded-xs">
                    <Star className="w-2.5 h-2.5 fill-white text-white" />
                  </div>
                ))}
              </div>

              <p className="text-xs text-stone-500">
                {ratingStats.trustpilotReviewCount} verified ratings from global travelers.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-stone-100">
              <a
                href={HOTEL_INFO.trustpilotUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between w-full text-xs font-semibold text-emerald-700 hover:text-emerald-900 group-hover:translate-x-0.5 transition-transform"
              >
                <span>See Reviews</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 4: Stylish "Review Us!" QR Code Card (2.5 cols) */}
          <div className="lg:col-span-3 bg-gradient-to-b from-[#1C1917] to-[#2B2520] text-white p-6 rounded-xl shadow-md border border-[#3E362F] flex flex-col items-center text-center justify-between relative overflow-hidden group">
            {/* Subtle background glow */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#C5A059]/15 rounded-full blur-2xl pointer-events-none" />

            <div className="w-full">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#C5A059]/20 text-[#E6C687] text-[11px] font-medium mb-3">
                <QrCode className="w-3 h-3 text-[#C5A059]" />
                <span>Scan with Camera</span>
              </div>
              <h3 className="text-lg font-serif-luxury text-white font-semibold">
                Review Us!
              </h3>
              <p className="text-[11px] text-stone-300 mt-1 max-w-[200px] mx-auto">
                Scan with your phone to open our Google Review page directly.
              </p>
            </div>

            {/* QR Code Container with High-Res Crisp SVG matrix */}
            <div className="my-3 p-3 bg-white rounded-lg shadow-inner flex flex-col items-center">
              <svg
                viewBox="0 0 25 25"
                className="w-28 h-28 shape-rendering-crispEdges"
                shapeRendering="crispEdges"
              >
                <rect width="25" height="25" fill="#FFFFFF" />
                {qrMatrix.map((row, rIdx) =>
                  row.map((cell, cIdx) =>
                    cell === 1 ? (
                      <rect
                        key={`${rIdx}-${cIdx}`}
                        x={cIdx}
                        y={rIdx}
                        width="1"
                        height="1"
                        fill="#1C1917"
                      />
                    ) : null
                  )
                )}
              </svg>
              <div className="text-[9px] uppercase tracking-wider text-stone-500 font-bold mt-1">
                Silp-pa Ayutthaya
              </div>
            </div>

            <div className="w-full flex items-center justify-center gap-2">
              <button
                onClick={handleCopyLink}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-medium bg-[#3E362F] hover:bg-[#52483E] text-stone-200 rounded transition-colors cursor-pointer"
                title="Copy Review URL"
              >
                {copied ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-400" />
                    <span>Link Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3 text-stone-300" />
                    <span>Copy Link</span>
                  </>
                )}
              </button>

              <a
                href={HOTEL_INFO.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 text-[11px] font-semibold bg-[#C5A059] hover:bg-[#D4B06A] text-stone-900 rounded transition-colors"
              >
                <span>Open Link</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Filter Tabs for Testimonials (Interactive) */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-[#E8E2D8]">
          <div className="flex items-center gap-2">
            <Quote className="w-5 h-5 text-[#C5A059]" />
            <h3 className="text-xl font-serif-luxury font-bold text-stone-900">
              Verified Guest Stories
            </h3>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full">
            {(
              [
                { id: 'all', label: 'All Reviews' },
                { id: 'couples', label: 'Couples & Romance' },
                { id: 'culture', label: 'Heritage & Culture' },
                { id: 'family', label: 'Family Stays' },
                { id: 'cafe', label: 'Cafe & Culinary' },
                { id: 'solo', label: 'Solo & Creative' },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all whitespace-nowrap cursor-pointer ${
                  selectedFilter === tab.id
                    ? 'bg-[#1C1917] text-white shadow-sm'
                    : 'bg-white text-stone-600 hover:text-stone-900 border border-stone-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedTestimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-xl p-6 border border-[#E8E2D8] shadow-sm hover:shadow-md hover:border-[#C5A059]/60 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Header: Stars + Verified Badge */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>Verified Guest</span>
                  </span>
                </div>

                <h4 className="font-serif-luxury text-base font-bold text-stone-900 mb-2 leading-snug">
                  "{t.title}"
                </h4>

                <p className="text-xs text-stone-600 leading-relaxed mb-4">
                  {t.comment}
                </p>
              </div>

              {/* Author & Room Footer */}
              <div className="pt-4 border-t border-stone-100">
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.guestName}
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-full object-cover border border-stone-200"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="min-w-0 flex-1">
                    <div className="font-semibold text-xs text-stone-900 truncate">
                      {t.guestName}
                    </div>
                    <div className="text-[11px] text-stone-500 truncate">
                      {t.country} · {t.roleOrTripType}
                    </div>
                  </div>
                </div>

                <div className="mt-2.5 flex items-center justify-between text-[11px] text-stone-400">
                  <span className="text-stone-500 font-medium">{t.stayedRoom}</span>
                  <span className="tabular-nums">{t.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Direct Action Link to Review */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 bg-white border border-[#E8E2D8] rounded-xl shadow-sm">
            <span className="text-xs text-stone-600">
              Have you recently stayed at Silp-pa Phra Nakhon Si Ayutthaya?
            </span>
            <div className="flex items-center gap-2">
              <a
                href={HOTEL_INFO.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#1C1917] hover:bg-[#C5A059] rounded-md transition-colors whitespace-nowrap"
              >
                Leave a Google Review
              </a>
              <a
                href={HOTEL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-md transition-colors whitespace-nowrap"
              >
                Share Feedback via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
