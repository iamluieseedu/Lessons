'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Shield, Lock, Eye, FileText } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 py-8 px-4 font-sans">
      <div className="w-full max-w-3xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden p-6 sm:p-10 relative">
        {/* Top border color strip */}
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-400 via-indigo-400 to-rose-400" />

        {/* Back Link */}
        <div className="mb-6 flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 hover:text-sky-700 text-xs font-bold shadow-sm transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Library
          </Link>
          <span className="text-[10px] text-slate-400 font-mono font-bold">Effective: August 14, 2026</span>
        </div>

        {/* Header */}
        <header className="border-b border-slate-100 pb-6 mb-8 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-600">
              <Shield className="w-5 h-5" />
            </div>
            <h1 className="font-lexend text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Privacy Policy
            </h1>
          </div>
          <p className="text-sm text-slate-500 leading-relaxed font-semibold">
            Privacy disclosures and compliance parameters for Lesson Library (iamlesson.space)
          </p>
        </header>

        {/* Policy Body */}
        <div className="space-y-6 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
          <section className="space-y-2">
            <h2 className="font-lexend text-sm sm:text-base font-bold text-slate-800 flex items-center gap-2">
              <Eye className="w-4 h-4 text-sky-600" />
              1. Information We Collect
            </h2>
            <p>
              We operate an educational slide catalog and assessment library. We do not require users to create accounts or input personal identification credentials. Some local preferences (such as Webhook endpoints or Google Ad ID overrides) are stored strictly inside your browser's local storage database (localStorage) and are never submitted to external servers.
            </p>
          </section>

          <section className="space-y-2 border-t border-slate-100 pt-4">
            <h2 className="font-lexend text-sm sm:text-base font-bold text-slate-800 flex items-center gap-2">
              <Lock className="w-4 h-4 text-indigo-650" />
              2. Google AdSense Cookie Disclosures
            </h2>
            <p>
              This website displays third-party advertisements served by Google AdSense to monetize traffic. To satisfy Google's policy rules:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-500 font-medium">
              <li>Third-party vendors, including Google, use cookies to serve ads based on your prior visits to this website or other websites.</li>
              <li>Google's use of advertising cookies enables it and its partners to serve ads to users based on their visit to your sites and/or other sites on the Internet.</li>
              <li>Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline font-bold">Google Ads Settings</a>.</li>
            </ul>
          </section>

          <section className="space-y-2 border-t border-slate-100 pt-4">
            <h2 className="font-lexend text-sm sm:text-base font-bold text-slate-800 flex items-center gap-2">
              <FileText className="w-4 h-4 text-rose-500" />
              3. Consent Regulations (GDPR & CCPA)
            </h2>
            <p>
              For users visiting from the European Economic Area (EEA), the UK, or California, we deploy Google's Consent Management Platform (CMP) to collect cookies consent. You can modify your cookie configurations or opt-out of ad personalization at any time by clicking the options button inside the consent pop-up banner.
            </p>
          </section>

          <section className="space-y-2 border-t border-slate-100 pt-4">
            <h2 className="font-lexend text-sm sm:text-base font-bold text-slate-800 flex items-center gap-2">
              <Shield className="w-4 h-4 text-sky-600" />
              4. Contact & Compliance
            </h2>
            <p>
              For inquiries regarding this privacy configuration or general site compliance, please contact your class instructor or administrators at the institutional email associated with your curriculum registry.
            </p>
          </section>
        </div>

        {/* Footer */}
        <footer className="border-t border-slate-100 pt-6 mt-10 text-center text-xs text-slate-400 font-semibold font-mono">
          Lesson Library Compliance Panel • All Rights Reserved
        </footer>
      </div>
    </main>
  );
}
