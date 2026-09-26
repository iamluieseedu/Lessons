'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Shield, Lock, Eye, FileText, GraduationCap, Cookie, ExternalLink } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-700 font-sans pb-24 antialiased selection:bg-indigo-500 selection:text-white">
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 sm:px-6 py-3.5 shadow-sm">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2.5 group">
            <span className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 group-hover:scale-105 transition">
              <GraduationCap className="w-4 h-4" />
            </span>
            <span className="font-extrabold text-sm text-slate-900 tracking-tight">
              Lesson Library
            </span>
            <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
              iamlesson.space
            </span>
          </Link>

          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="text-xs font-semibold text-slate-600 hover:text-slate-900 px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition flex items-center gap-1.5 shadow-sm"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Library</span>
            </Link>
            <Link
              href="/terms/"
              className="text-xs font-semibold text-slate-600 hover:text-slate-900 px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition shadow-sm"
            >
              Terms
            </Link>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-12 space-y-10">
        <header className="border-b border-slate-200 pb-8 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider mb-4">
            <Shield className="w-3.5 h-3.5 text-indigo-600" />
            Privacy Disclosures &amp; Compliance Standards
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-500 font-mono">
            Effective Date: August 2026 &bull; Lesson Library (iamlesson.space)
          </p>
        </header>

        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs space-y-8 text-sm text-slate-600 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Eye className="w-4 h-4 text-indigo-600" />
              1. Information We Collect
            </h2>
            <p>
              <strong>Lesson Library</strong> is an open educational platform. We do not require visitors to register user accounts, provide physical billing addresses, or submit sensitive identification credentials to view slides, read laboratory manuals, or complete self-assessment quizzes.
            </p>
            <p>
              Local browser settings (such as completed checklist items, theme toggles, and customized slide positions) are stored strictly inside your client browser&apos;s local storage database (<code>localStorage</code>). This data remains on your physical device and is never transmitted to our backend servers.
            </p>
          </section>

          <section className="space-y-3 border-t border-slate-100 pt-6">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Cookie className="w-4 h-4 text-emerald-600" />
              2. Google AdSense &amp; Third-Party Advertising Cookies
            </h2>
            <p>
              We use third-party advertising companies, including <strong>Google AdSense</strong>, to serve advertisements when you visit our website. To comply with Google AdSense program policies, please note:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-xs sm:text-sm text-slate-700">
              <li>
                <strong>Third-Party Vendor Cookies:</strong> Third-party vendors, including Google, use cookies to serve ads based on a user&apos;s prior visits to this website or other websites across the Internet.
              </li>
              <li>
                <strong>Personalized Advertising:</strong> Google&apos;s use of advertising cookies enables it and its partners to serve ads to users based on their visits to our site and/or other sites on the Internet.
              </li>
              <li>
                <strong>Opt-Out Options:</strong> Users may opt out of personalized advertising by visiting the <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline font-bold inline-flex items-center gap-1">Google Ads Settings <ExternalLink className="w-3 h-3" /></a>.
              </li>
              <li>
                Alternatively, users can opt out of a third-party vendor&apos;s use of cookies for personalized advertising by visiting <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline font-bold inline-flex items-center gap-1">www.aboutads.info <ExternalLink className="w-3 h-3" /></a> or the <a href="https://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline font-bold inline-flex items-center gap-1">Network Advertising Initiative <ExternalLink className="w-3 h-3" /></a>.
              </li>
            </ul>
          </section>

          <section className="space-y-3 border-t border-slate-100 pt-6">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Lock className="w-4 h-4 text-purple-600" />
              3. GDPR &amp; CCPA Compliance
            </h2>
            <p>
              If you are browsing from the European Economic Area (EEA), the United Kingdom, or California, we honor your privacy rights under the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA). Where applicable, Google&apos;s certified Consent Management Platform (CMP) dialog enables you to grant, manage, or revoke consent for personalized advertising cookies at any time.
            </p>
          </section>

          <section className="space-y-3 border-t border-slate-100 pt-6">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <FileText className="w-4 h-4 text-sky-600" />
              4. External Links &amp; Academic Resources
            </h2>
            <p>
              Our lesson decks and laboratory manuals contain hyperlinks to external technical documentation, including the official Godot Engine documentation (<code>docs.godotengine.org</code>), Laravel framework documentation (<code>laravel.com/docs</code>), and W3C web standards. We are not responsible for the privacy practices or content of third-party domains.
            </p>
          </section>

          <section className="space-y-3 border-t border-slate-100 pt-6">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Shield className="w-4 h-4 text-indigo-600" />
              5. Privacy Questions &amp; Inquiries
            </h2>
            <p>
              If you have any questions regarding this Privacy Policy or data handling practices on Lesson Library, please contact us through our <Link href="/contact/" className="text-indigo-600 underline font-bold">Contact Page</Link> or email <a href="mailto:support@iamlesson.space" className="text-indigo-600 font-mono font-bold">support@iamlesson.space</a>.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
