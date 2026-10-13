import React from 'react';
import { BookOpen } from 'lucide-react';

export const metadata = {
  title: 'Digital Library Card & Attendance',
  description: 'Mobile attendance logging, book verification, and touch e-signature.',
};

export default function LibraryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-indigo-600 selection:text-white antialiased">
      {/* Mobile-Friendly White Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-md mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-xs">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <h1 className="text-sm font-bold text-slate-900 leading-tight">
                Library Card Pass
              </h1>
              <p className="text-[10px] text-slate-500 leading-none">
                Campus Attendance &amp; Verification
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
              Mobile Portal
            </span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 flex flex-col">{children}</main>
    </div>
  );
}
