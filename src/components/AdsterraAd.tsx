'use client';

import React from 'react';
import Script from 'next/script';

export const AdsterraAd: React.FC = () => {
  return (
    <div className="w-full flex justify-center items-center overflow-hidden bg-white/70 backdrop-blur-md border border-slate-200/80 rounded-2xl p-4 shadow-sm hover:shadow-md transition">
      <div className="w-full flex flex-col items-center">
        <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 mb-3 block">
          Sponsored Link
        </span>
        
        {/* Adsterra Container */}
        <div 
          id="container-b0f03bf282d4ca65768c2503ff691e85" 
          className="w-full flex items-center justify-center min-h-[250px]"
        />

        {/* Adsterra Script */}
        <Script
          src="https://pl30840080.effectivecpmnetwork.com/b0f03bf282d4ca65768c2503ff691e85/invoke.js"
          strategy="afterInteractive"
          data-cfasync="false"
        />
      </div>
    </div>
  );
};
