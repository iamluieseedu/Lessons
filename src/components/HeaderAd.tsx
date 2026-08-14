'use client';

import React, { useEffect, useState } from 'react';
import Script from 'next/script';

export const HeaderAd: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const clientId = 'ca-pub-2240658622468632';
  const slotId = '4368956542';

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
        setIsLoaded(true);
      } catch (err) {
        console.warn('AdSense header push error:', err);
      }
    }
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto my-3 overflow-hidden text-center flex justify-center items-center">
      <div className="w-full min-h-[90px]">
        {/* AdSense Script Injection */}
        <Script
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${clientId}`}
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />

        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client={clientId}
          data-ad-slot={slotId}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />

        {isLoaded && (
          <div className="sr-only">Header banner initialized</div>
        )}
      </div>
    </div>
  );
};
