'use client';

import React, { useEffect, useState } from 'react';
import Script from 'next/script';
import { CONFIG } from '@/config';
import { Sparkles, HelpCircle, BookOpen, Quote } from 'lucide-react';

interface AdSidebarProps {
  className?: string;
  slotName?: string;
}

const EDUCATIONAL_QUOTES = [
  {
    text: "Education is the most powerful weapon which you can use to change the world.",
    author: "Nelson Mandela"
  },
  {
    text: "The beautiful thing about learning is that no one can take it away from you.",
    author: "B.B. King"
  },
  {
    text: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    author: "Mahatma Gandhi"
  },
  {
    text: "Do not wait for the perfect moment. Take the moment and make it perfect.",
    author: "Unknown"
  }
];

export const AdSidebar: React.FC<AdSidebarProps> = ({ className = '', slotName = 'Sidebar Ad' }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [clientId, setClientId] = useState('');
  const [slotId, setSlotId] = useState('');
  const [quote, setQuote] = useState({ text: '', author: '' });

  // Hydrate configurations
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedClientId = localStorage.getItem('vid_adsense_client_id') || CONFIG.adsenseClientId || '';
      const storedSlotId = localStorage.getItem('vid_adsense_slot_id') || CONFIG.adsenseSlotId || '';
      setClientId(storedClientId);
      setSlotId(storedSlotId);
      
      // Select a random quote for fallback display
      const randomIdx = Math.floor(Math.random() * EDUCATIONAL_QUOTES.length);
      setQuote(EDUCATIONAL_QUOTES[randomIdx]);
    }
  }, []);

  const hasCredentials = clientId.trim() !== '' && slotId.trim() !== '';

  useEffect(() => {
    if (hasCredentials && typeof window !== 'undefined') {
      try {
        // Try pushing the ad once the component is mounted
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
        setIsLoaded(true);
      } catch (err) {
        console.warn('AdSense push error:', err);
      }
    }
  }, [hasCredentials, clientId, slotId]);

  return (
    <aside 
      className={`w-full bg-white/70 backdrop-blur-md border border-slate-200/80 rounded-2xl p-5 shadow-sm flex flex-col items-center justify-start text-center overflow-hidden transition-all duration-300 hover:shadow-md hover:border-slate-300/80 ${className}`}
    >
      <div className="w-full flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
        <div className="flex items-center gap-1.5 text-slate-500">
          <Sparkles className="w-4 h-4 text-sky-500" />
          <span className="text-[10px] font-bold uppercase tracking-wider font-lexend">
            {hasCredentials ? 'Sponsored Content' : 'Daily Inspiration'}
          </span>
        </div>
        {hasCredentials && (
          <div className="group relative cursor-pointer">
            <HelpCircle className="w-3.5 h-3.5 text-slate-400 hover:text-slate-600 transition" />
            <div className="absolute right-0 bottom-full mb-2 hidden group-hover:block w-48 bg-slate-900 text-white text-[10px] leading-relaxed p-2.5 rounded-lg shadow-xl z-20 font-medium">
              Google AdSense ads help support the upkeep and hosting of this lesson portal.
            </div>
          </div>
        )}
      </div>

      {!hasCredentials ? (
        // Premium motivational fallback card for students when ads are not configured yet
        <div className="w-full flex flex-col items-center justify-center py-6 px-3">
          <div className="w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center text-sky-600 mb-4 border border-sky-100">
            <BookOpen className="w-5 h-5" />
          </div>
          
          <div className="relative p-4 bg-slate-50/80 border border-slate-150 rounded-xl max-w-xs text-left mb-2">
            <Quote className="w-5 h-5 text-sky-200 absolute -top-2 -left-1 transform -rotate-180" />
            <p className="text-[11px] text-slate-600 font-medium leading-relaxed italic pr-2 pl-3">
              "{quote.text}"
            </p>
            {quote.author && (
              <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider text-right mt-2.5">
                — {quote.author}
              </p>
            )}
          </div>
          <span className="text-[9px] text-slate-400 font-semibold tracking-wide uppercase mt-3">
            Lesson Library Portal
          </span>
        </div>
      ) : (
        // Live AdSense element
        <div className="w-full min-h-[250px] flex items-center justify-center">
          {/* AdSense Script Injection */}
          <Script
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${clientId}`}
            strategy="afterInteractive"
            crossOrigin="anonymous"
          />

          <ins
            className="adsbygoogle"
            style={{ display: 'block', width: '100%', minHeight: '250px' }}
            data-ad-client={clientId}
            data-ad-slot={slotId}
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
          
          {isLoaded && (
            <div className="sr-only">Ad slot initialized for {slotName}</div>
          )}
        </div>
      )}
    </aside>
  );
};
