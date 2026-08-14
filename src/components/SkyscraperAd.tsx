'use client';

import React, { useEffect, useRef } from 'react';

export const SkyscraperAd: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && containerRef.current) {
      // Set the global atOptions variable
      (window as any).atOptions = {
        'key' : '8a90541abfd6c3c3a613938e3de45969',
        'format' : 'iframe',
        'height' : 600,
        'width' : 160,
        'params' : {}
      };

      // Create and append the script tag dynamically inside this container
      const script = document.createElement('script');
      script.src = 'https://www.highperformanceformat.com/8a90541abfd6c3c3a613938e3de45969/invoke.js';
      script.async = true;
      
      // Clean up previous children to avoid double rendering in react dev mode
      containerRef.current.innerHTML = '';
      containerRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="w-[178px] min-h-[630px] flex flex-col items-center overflow-hidden bg-white/70 backdrop-blur-md border border-slate-200/80 rounded-2xl p-2.5 shadow-sm hover:shadow-md transition">
      <span className="text-[8px] font-bold uppercase tracking-wider text-slate-400 mb-2 block">
        Sponsored Link
      </span>
      <div ref={containerRef} className="w-[160px] h-[600px] flex justify-center items-center overflow-hidden" />
    </div>
  );
};
