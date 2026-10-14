import React from 'react';

export const metadata = {
  title: 'Library Attendance System',
  description: 'Campus Library Attendance, Book Verification, and Digital Pass System.',
};

export default function LibraryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-emerald-50/25 to-blue-50/40 text-slate-900 flex flex-col font-sans selection:bg-emerald-600 selection:text-white antialiased">
      {/* Top Colorful Gradient Accent Line */}
      <div className="h-1 w-full bg-gradient-to-r from-emerald-500 via-teal-400 via-sky-400 to-blue-600" />

      {/* Fresh Frosted Glass Header (Removed Live Attendance on top) */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-emerald-100 shadow-xs">
        <div className="max-w-md sm:max-w-xl mx-auto px-4 h-14 flex items-center justify-between">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            {/* Modern Fresh Icon Logo */}
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-600 via-teal-600 to-blue-600 flex items-center justify-center text-white shadow-md shadow-emerald-500/20 ring-2 ring-white">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 drop-shadow-xs"
              >
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
                <path d="M6 6h10" />
                <path d="M6 10h10" />
                <path d="M6 14h6" />
                <circle cx="17" cy="15" r="2" fill="currentColor" />
              </svg>
            </div>

            <div>
              <h1 className="text-sm font-extrabold bg-gradient-to-r from-emerald-700 via-teal-700 to-blue-700 bg-clip-text text-transparent leading-tight tracking-tight">
                Library System
              </h1>
              <p className="text-[10px] text-slate-500 leading-none font-medium">
                Campus Attendance &amp; Digital Pass
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 flex flex-col">{children}</main>
    </div>
  );
}
