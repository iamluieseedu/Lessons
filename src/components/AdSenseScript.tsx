'use client';

import React, { useEffect } from 'react';
import Script from 'next/script';

export const AdSenseScript: React.FC = () => {
  useEffect(() => {
    // Early event-capturing guard to prevent ad blockers or aborted scripts from bubbling unhandled Event objects to the Next.js dev error overlay
    const handleScriptError = (event: ErrorEvent) => {
      if (event && event.target) {
        const target = event.target as HTMLElement;
        if (target.tagName === 'SCRIPT' || target.tagName === 'LINK') {
          const src = (target as any).src || (target as any).href || '';
          if (
            src.includes('googlesyndication') ||
            src.includes('accounts.google.com') ||
            src.includes('pagead2') ||
            src.includes('doubleclick')
          ) {
            event.preventDefault();
            event.stopImmediatePropagation();
            return true;
          }
        }
      }
      const msg = event?.message || (event?.error && event.error.message) || '';
      if (
        typeof msg === 'string' &&
        (msg.includes('adsbygoogle') ||
          msg.includes("All 'ins' elements in the DOM with class=adsbygoogle already have ads in them") ||
          msg.includes('TagError'))
      ) {
        event.preventDefault();
        event.stopImmediatePropagation();
        return true;
      }
    };

    window.addEventListener('error', handleScriptError, true);
    return () => {
      window.removeEventListener('error', handleScriptError, true);
    };
  }, []);

  return (
    <Script
      id="global-adsense-script"
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2240658622468632"
      strategy="lazyOnload"
      crossOrigin="anonymous"
      onError={() => {
        // Silently swallow adblocker network block errors
      }}
    />
  );
};
