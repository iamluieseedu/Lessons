'use client';

import React, { useEffect, useState } from 'react';
import Script from 'next/script';
import { CONFIG } from '@/config';
import { Sparkles, HelpCircle, DollarSign } from 'lucide-react';

interface AdSidebarProps {
  className?: string;
  slotName?: string;
}

export const AdSidebar: React.FC<AdSidebarProps> = ({ className = '', slotName = 'Sidebar Ad' }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const clientId = CONFIG.adsenseClientId || '';
  const slotId = CONFIG.adsenseSlotId || '';

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
  }, [hasCredentials]);

  return (
    <aside 
      className={`w-full bg-white/70 backdrop-blur-md border border-slate-200/80 rounded-2xl p-5 shadow-sm flex flex-col items-center justify-start text-center overflow-hidden transition-all duration-300 hover:shadow-md hover:border-slate-300/80 ${className}`}
    >
      <div className="w-full flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
        <div className="flex items-center gap-1.5 text-slate-500">
          <Sparkles className="w-4 h-4 text-sky-500" />
          <span className="text-[10px] font-bold uppercase tracking-wider font-lexend">Sponsored Content</span>
        </div>
        <div className="group relative cursor-pointer">
          <HelpCircle className="w-3.5 h-3.5 text-slate-400 hover:text-slate-600 transition" />
          <div className="absolute right-0 bottom-full mb-2 hidden group-hover:block w-48 bg-slate-900 text-white text-[10px] leading-relaxed p-2.5 rounded-lg shadow-xl z-20 font-medium">
            Google AdSense ads help support the upkeep and hosting of this lesson portal.
          </div>
        </div>
      </div>

      {!hasCredentials ? (
        // Beautiful premium placeholder for empty configurations
        <div className="w-full flex flex-col items-center justify-center py-6 px-2">
          <div className="w-12 h-12 rounded-full bg-sky-50 flex items-center justify-center text-sky-600 mb-4 border border-sky-100 animate-pulse">
            <DollarSign className="w-6 h-6" />
          </div>
          
          <h4 className="font-lexend text-xs font-bold text-slate-800 mb-1">
            Google AdSense Placeholder
          </h4>
          <span className="text-[10px] text-slate-400 font-semibold mb-4 bg-slate-100 px-2 py-0.5 rounded">
            {slotName}
          </span>
          
          <p className="text-[11px] text-slate-500 leading-relaxed mb-6 max-w-[220px]">
            Ready to monetize? Open <code className="bg-slate-100 text-rose-600 px-1 py-0.5 rounded font-mono text-[10px]">src/config.ts</code> and add your Google AdSense Publisher ID and Slot ID.
          </p>

          {/* Dummy visual ad box mimicking Google ads layout */}
          <div className="w-full h-64 border border-dashed border-slate-300 rounded-xl bg-slate-50/50 flex flex-col items-center justify-center p-4 relative group/box overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/5 to-indigo-500/5 opacity-0 group-hover/box:opacity-100 transition-opacity duration-500" />
            <div className="w-8 h-8 rounded-lg bg-slate-200 flex items-center justify-center text-slate-400 text-xs font-bold mb-2 font-mono">
              AD
            </div>
            <div className="h-2 w-24 bg-slate-200 rounded mb-1.5" />
            <div className="h-1.5 w-32 bg-slate-150 rounded mb-4" />
            <div className="h-8 w-24 bg-sky-600/90 text-white text-[10px] font-bold rounded-lg flex items-center justify-center shadow-sm">
              Learn More
            </div>
            <div className="absolute bottom-2 text-[9px] text-slate-400 font-medium uppercase tracking-widest">
              Responsive Ad Unit
            </div>
          </div>
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
