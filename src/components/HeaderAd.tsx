'use client';

import React, { useEffect, useRef, useState } from 'react';

export const HeaderAd: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const insRef = useRef<HTMLModElement | null>(null);
  const clientId = 'ca-pub-2240658622468632';
  const slotId = '4368956542';

  useEffect(() => {
    if (typeof window === 'undefined' || !insRef.current) return;

    const ins = insRef.current;
    // Guard against pushing if element already has an ad or is marked done
    const alreadyFilled =
      ins.getAttribute('data-adsbygoogle-status') ||
      ins.childElementCount > 0 ||
      ins.dataset.pushed === 'true';

    if (alreadyFilled) return;

    try {
      ins.dataset.pushed = 'true';
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      setIsLoaded(true);
    } catch (err) {
      console.warn('AdSense header push handled:', err);
    }
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto my-3 overflow-hidden text-center flex justify-center items-center">
      <div className="w-full min-h-[90px]">
        <ins
          ref={insRef}
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

