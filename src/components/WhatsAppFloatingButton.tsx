import React, { useState } from 'react';
import { HOTEL_INFO } from '../data/hotelData';
import { MessageCircle, X } from 'lucide-react';

export const WhatsAppFloatingButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2 pointer-events-auto">
      {/* Tooltip bubble on desktop */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-stone-900 text-white text-xs py-2 px-3.5 rounded-full shadow-lg border border-stone-800 animate-in fade-in slide-in-from-right-4 duration-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>Chat with Front Desk ({HOTEL_INFO.formattedPhone})</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-stone-400 hover:text-white ml-1 cursor-pointer"
            aria-label="Dismiss chat tooltip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating button */}
      <a
        href={HOTEL_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 bg-[#25D366] hover:bg-[#20BA5C] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 group focus:outline-none focus:ring-4 focus:ring-emerald-300"
        aria-label="Contact Silp-pa Ayutthaya via WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />
      </a>
    </div>
  );
};
