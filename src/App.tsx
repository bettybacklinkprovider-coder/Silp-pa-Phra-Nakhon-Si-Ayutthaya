import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { BookingModal } from './components/BookingModal';
import { ReviewModal } from './components/ReviewModal';
import { HomePage } from './pages/HomePage';
import { RoomsPage } from './pages/RoomsPage';
import { OffersPage } from './pages/OffersPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { TESTIMONIALS_DATA, ReviewItem } from './data/hotelData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'rooms' | 'offers' | 'reviews'>('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingRoomId, setBookingRoomId] = useState<string | undefined>(undefined);
  const [bookingOfferId, setBookingOfferId] = useState<string | undefined>(undefined);
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [testimonials, setTestimonials] = useState<ReviewItem[]>(TESTIMONIALS_DATA);

  const handleOpenBooking = (roomId?: string, offerId?: string) => {
    setBookingRoomId(roomId);
    setBookingOfferId(offerId);
    setIsBookingOpen(true);
  };

  const handleAddReview = (newReview: ReviewItem) => {
    setTestimonials([newReview, ...testimonials]);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F5] text-stone-900 selection:bg-[#C5A059]/30">
      {/* Navigation */}
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main Page Content (4 Distinct Separate Pages) */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            setCurrentPage={setCurrentPage}
            onOpenBooking={handleOpenBooking}
            onOpenReviewModal={() => setIsReviewOpen(true)}
          />
        )}

        {currentPage === 'rooms' && (
          <RoomsPage
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentPage === 'offers' && (
          <OffersPage
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentPage === 'reviews' && (
          <ReviewsPage
            onOpenReviewModal={() => setIsReviewOpen(true)}
            onOpenBooking={() => handleOpenBooking()}
            testimonials={testimonials}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        setCurrentPage={setCurrentPage}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Floating WhatsApp Concierge Button (+66860055005) */}
      <WhatsAppFloatingButton />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialRoomId={bookingRoomId}
        initialOfferId={bookingOfferId}
      />

      {/* Interactive Review Modal */}
      <ReviewModal
        isOpen={isReviewOpen}
        onClose={() => setIsReviewOpen(false)}
        onSubmitReview={handleAddReview}
      />
    </div>
  );
}
