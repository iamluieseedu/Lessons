'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  FileCode,
  ArrowLeft,
  Copy,
  Check,
  CheckCircle2,
  Terminal,
  ChevronRight
} from 'lucide-react';

export default function LaravelLabManualPage() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyCode = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-700 font-sans pb-24 antialiased selection:bg-rose-500 selection:text-white">
      {/* Sticky Top Navbar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 sm:px-6 py-3.5 shadow-sm">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600">
              <FileCode className="w-4 h-4" />
            </span>
            <span className="font-extrabold text-sm text-slate-900 tracking-tight">
              Web Dev 3: Laboratory Manual
            </span>
            <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-rose-50 text-rose-600 border border-rose-200">
              Part 2
            </span>
          </div>

          <Link
            href="/"
            className="text-xs font-semibold text-slate-600 hover:text-slate-900 px-3.5 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition flex items-center gap-1.5 shadow-sm"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Portal</span>
          </Link>
        </div>
      </header>

      {/* Main Reading Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-10 space-y-12">
        {/* Header Section */}
        <header className="border-b border-slate-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-rose-600 block mb-2 font-mono">
            Laboratory Manual: Web Development 3 (Part 2)
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
            Advanced Guide: Migrating a Full Multi-Page Native PHP Website to Laravel Framework
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            In this second phase of our Laravel transition, you will move from migrating a single standalone script to migrating an entire multi-page native PHP website (e.g., Home, About, Services, Contact pages). Instead of duplicating headers, footers, and navigation bars across every file, you will harness Laravel's powerful Blade Layout Inheritance system to write modular, maintainable code.
          </p>
        </header>

        {/* Module Overview & Learning Objectives */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 tracking-tight">
            <span className="w-2 h-2 rounded-full bg-rose-600" />
            Module Overview &amp; Learning Objectives
          </h2>

          <div className="grid grid-cols-1 gap-2.5">
            <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-start gap-3 text-sm shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 font-semibold">Structure &amp; Organize:</strong> Properly organize multi-page views within the <code className="font-mono text-xs text-rose-600 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">resources/views/</code> directory.
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-start gap-3 text-sm shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 font-semibold">Master Layouts:</strong> Create reusable layout templates using Laravel Blade directives (<code className="font-mono text-xs text-rose-600 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">@yield</code>, <code className="font-mono text-xs text-rose-600 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">@extends</code>, <code className="font-mono text-xs text-rose-600 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">@section</code>).
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-start gap-3 text-sm shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 font-semibold">Routing:</strong> Define multiple navigation routes inside <code className="font-mono text-xs text-rose-600 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">routes/web.php</code>.
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-start gap-3 text-sm shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 font-semibold">Asset Management:</strong> Properly link stylesheets, scripts, and internal page navigation across a multi-page app.
              </div>
            </div>
          </div>
        </section>

        {/* Part 1: Blade Layout Inheritance vs Native PHP Includes */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 tracking-tight">
            <span className="w-2 h-2 rounded-full bg-rose-600" />
            Part 1: Blade Layout Inheritance vs. Native PHP Includes
          </h2>

          <p className="text-sm text-slate-600 leading-relaxed">
            In native PHP, you likely used <code className="font-mono text-xs text-amber-700 bg-amber-50 border border-amber-200 px-1.5 py-0.5 rounded">include 'header.php';</code> and <code className="font-mono text-xs text-amber-700 bg-amber-50 border border-amber-200 px-1.5 py-0.5 rounded">include 'footer.php';</code> repeatedly across files like <code className="font-mono text-xs text-slate-700 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">index.php</code>, <code className="font-mono text-xs text-slate-700 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">about.php</code>, and <code className="font-mono text-xs text-slate-700 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">contact.php</code>. In Laravel, we invert this pattern using <strong>Layout Inheritance</strong>:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white border border-slate-200 border-t-2 border-t-emerald-600 rounded-xl p-5 shadow-sm">
              <h4 className="text-sm font-bold text-slate-900 mb-2">Master Layout (The Shell)</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                A single template (e.g., <code className="font-mono text-xs text-rose-600 bg-slate-50 px-1 py-0.5 rounded border border-slate-200">resources/views/layouts/app.blade.php</code>) that contains your HTML boilerplate, navigation bar, CSS links, and footer.
              </p>
            </div>

            <div className="bg-white border border-slate-200 border-t-2 border-t-emerald-600 rounded-xl p-5 shadow-sm">
              <h4 className="text-sm font-bold text-slate-900 mb-2">Child Views (The Content)</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Individual pages that &ldquo;extend&rdquo; the master layout and only inject their unique content into designated slots.
              </p>
            </div>
          </div>
        </section>

        {/* Part 2: Step-by-Step Guide — Migrating a Multi-Page Website */}
        <section className="space-y-8">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 tracking-tight">
            <span className="w-2 h-2 rounded-full bg-rose-600" />
            Part 2: Step-by-Step Guide — Migrating a Multi-Page Website
          </h2>

          {/* Step 2.1 */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-slate-900">
              Step 2.1: Creating the Master Layout File
            </h3>
            <p className="text-sm text-slate-600">
              First, we will create a dedicated folder inside views called <code className="font-mono text-xs text-rose-600 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">layouts</code> to house your master template.
            </p>

            <ol className="list-decimal pl-5 text-sm text-slate-600 space-y-1">
              <li>Navigate to your project directory: <code className="font-mono text-xs text-rose-600">resources/views/</code></li>
              <li>Create a new folder named <code className="font-mono text-xs text-rose-600">layouts</code>.</li>
              <li>Inside <code className="font-mono text-xs text-rose-600">resources/views/layouts/</code>, create a file named <strong className="text-slate-900 font-mono">app.blade.php</strong>.</li>
              <li>Paste the master layout code containing your shared navigation and structure:</li>
            </ol>

            {/* Code Block for app.blade.php */}
            <div className="bg-[#0f172a] border border-slate-800 rounded-xl overflow-hidden mt-3 shadow-md">
              <div className="bg-[#1e293b] px-4 py-2 border-b border-slate-700/60 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>resources/views/layouts/app.blade.php</span>
                <button
                  onClick={() => copyCode(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>@yield('title', 'My Laravel App')</title>
    <!-- Linking CSS using Laravel asset helper -->
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
</head>
<body>
    <!-- Shared Navigation Bar -->
    <nav style="background: #f4f4f4; padding: 10px; margin-bottom: 20px;">
        <a href="/">Home</a> | 
        <a href="/about">About Us</a> | 
        <a href="/services">Services</a> | 
        <a href="/contact">Contact</a>
    </nav>
    <hr>
    <!-- Dynamic Page Content Injection Point -->
    <div class="container">
        @yield('content')
    </div>
    <hr>
    <!-- Shared Footer -->
    <footer>
        <p>&copy; 2026 Web Development 3 Class. All rights reserved.</p>
    </footer>
</body>
</html>`, 'app_blade')}
                  className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-white font-sans text-xs flex items-center gap-1 transition"
                >
                  {copiedKey === 'app_blade' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedKey === 'app_blade' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <pre className="p-4 font-mono text-xs sm:text-sm text-slate-200 overflow-x-auto leading-relaxed">
{`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>@yield('title', 'My Laravel App')</title>
    <!-- Linking CSS using Laravel asset helper -->
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
</head>
<body>
    <!-- Shared Navigation Bar -->
    <nav style="background: #f4f4f4; padding: 10px; margin-bottom: 20px;">
        <a href="/">Home</a> | 
        <a href="/about">About Us</a> | 
        <a href="/services">Services</a> | 
        <a href="/contact">Contact</a>
    </nav>
    <hr>
    <!-- Dynamic Page Content Injection Point -->
    <div class="container">
        @yield('content')
    </div>
    <hr>
    <!-- Shared Footer -->
    <footer>
        <p>&copy; 2026 Web Development 3 Class. All rights reserved.</p>
    </footer>
</body>
</html>`}
              </pre>
            </div>
          </div>

          {/* Step 2.2 */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-slate-900">
              Step 2.2: Creating Child Page Views
            </h3>
            <p className="text-sm text-slate-600">
              Now, migrate your individual native PHP pages into clean Blade views that extend this master template.
            </p>

            <ol className="list-decimal pl-5 text-sm text-slate-600 space-y-1">
              <li>Go back to the main views folder: <code className="font-mono text-xs text-rose-600">resources/views/</code></li>
              <li>Create three new files: <code className="font-mono text-xs text-rose-600">home.blade.php</code>, <code className="font-mono text-xs text-rose-600">about.blade.php</code>, and <code className="font-mono text-xs text-rose-600">contact.blade.php</code>.</li>
            </ol>

            {/* A. home.blade.php */}
            <div className="space-y-2 pt-2">
              <h4 className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-rose-600" />
                A. Creating resources/views/home.blade.php
              </h4>

              <div className="bg-[#0f172a] border border-slate-800 rounded-xl overflow-hidden shadow-md">
                <div className="bg-[#1e293b] px-4 py-2 border-b border-slate-700/60 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>resources/views/home.blade.php</span>
                  <button
                    onClick={() => copyCode(`@extends('layouts.app')

@section('title', 'Home Page')

@section('content')
    <h1>Welcome to Our Homepage</h1>
    <p>This page was successfully migrated from native PHP to Laravel Blade templates!</p>
    <p>Explore our navigation bar above to view other pages seamlessly without duplicating HTML structure.</p>
@endsection`, 'home_blade')}
                    className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-white font-sans text-xs flex items-center gap-1 transition"
                  >
                    {copiedKey === 'home_blade' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedKey === 'home_blade' ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <pre className="p-4 font-mono text-xs sm:text-sm text-slate-200 overflow-x-auto leading-relaxed">
{`@extends('layouts.app')

@section('title', 'Home Page')

@section('content')
    <h1>Welcome to Our Homepage</h1>
    <p>This page was successfully migrated from native PHP to Laravel Blade templates!</p>
    <p>Explore our navigation bar above to view other pages seamlessly without duplicating HTML structure.</p>
@endsection`}
                </pre>
              </div>
            </div>

            {/* B. about.blade.php */}
            <div className="space-y-2 pt-2">
              <h4 className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-rose-600" />
                B. Creating resources/views/about.blade.php
              </h4>

              <div className="bg-[#0f172a] border border-slate-800 rounded-xl overflow-hidden shadow-md">
                <div className="bg-[#1e293b] px-4 py-2 border-b border-slate-700/60 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>resources/views/about.blade.php</span>
                  <button
                    onClick={() => copyCode(`@extends('layouts.app')

@section('title', 'About Us')

@section('content')
    <h1>About Our System</h1>
    <p>Learn more about our institutional mission, course objectives, and student web development projects.</p>
@endsection`, 'about_blade')}
                    className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-white font-sans text-xs flex items-center gap-1 transition"
                  >
                    {copiedKey === 'about_blade' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedKey === 'about_blade' ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <pre className="p-4 font-mono text-xs sm:text-sm text-slate-200 overflow-x-auto leading-relaxed">
{`@extends('layouts.app')

@section('title', 'About Us')

@section('content')
    <h1>About Our System</h1>
    <p>Learn more about our institutional mission, course objectives, and student web development projects.</p>
@endsection`}
                </pre>
              </div>
            </div>

            {/* C. contact.blade.php */}
            <div className="space-y-2 pt-2">
              <h4 className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-rose-600" />
                C. Creating resources/views/contact.blade.php
              </h4>

              <div className="bg-[#0f172a] border border-slate-800 rounded-xl overflow-hidden shadow-md">
                <div className="bg-[#1e293b] px-4 py-2 border-b border-slate-700/60 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>resources/views/contact.blade.php</span>
                  <button
                    onClick={() => copyCode(`@extends('layouts.app')

@section('title', 'Contact Us')

@section('content')
    <h1>Get in Touch</h1>
    <p>Reach out to our team via email or visit our university laboratory workstation.</p>
@endsection`, 'contact_blade')}
                    className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-white font-sans text-xs flex items-center gap-1 transition"
                  >
                    {copiedKey === 'contact_blade' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedKey === 'contact_blade' ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <pre className="p-4 font-mono text-xs sm:text-sm text-slate-200 overflow-x-auto leading-relaxed">
{`@extends('layouts.app')

@section('title', 'Contact Us')

@section('content')
    <h1>Get in Touch</h1>
    <p>Reach out to our team via email or visit our university laboratory workstation.</p>
@endsection`}
                </pre>
              </div>
            </div>
          </div>

          {/* Step 2.3 */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-slate-900">
              Step 2.3: Registering Multiple Routes in routes/web.php
            </h3>
            <p className="text-sm text-slate-600">
              To connect your browser URLs to each of these newly created views, open your routing configuration file.
            </p>

            <ol className="list-decimal pl-5 text-sm text-slate-600 space-y-1">
              <li>Locate and open: <code className="font-mono text-xs text-rose-600">routes/web.php</code></li>
              <li>Define routes for each page at the bottom of the file:</li>
            </ol>

            <div className="bg-[#0f172a] border border-slate-800 rounded-xl overflow-hidden mt-3 shadow-md">
              <div className="bg-[#1e293b] px-4 py-2 border-b border-slate-700/60 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>routes/web.php</span>
                <button
                  onClick={() => copyCode(`use Illuminate\\Support\\Facades\\Route;

/*
|--------------------------------------------------------------------------
| Multi-Page Migration Routes
|--------------------------------------------------------------------------
*/

// Home Route
Route::get('/', function () {
    return view('home');
});

// About Route
Route::get('/about', function () {
    return view('about');
});

// Services Route (Optional extension)
Route::get('/services', function () {
    return view('services');
});

// Contact Route
Route::get('/contact', function () {
    return view('contact');
});`, 'routes_web')}
                  className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-white font-sans text-xs flex items-center gap-1 transition"
                >
                  {copiedKey === 'routes_web' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedKey === 'routes_web' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <pre className="p-4 font-mono text-xs sm:text-sm text-slate-200 overflow-x-auto leading-relaxed">
{`use Illuminate\\Support\\Facades\\Route;

/*
|--------------------------------------------------------------------------
| Multi-Page Migration Routes
|--------------------------------------------------------------------------
*/

// Home Route
Route::get('/', function () {
    return view('home');
});

// About Route
Route::get('/about', function () {
    return view('about');
});

// Services Route (Optional extension)
Route::get('/services', function () {
    return view('services');
});

// Contact Route
Route::get('/contact', function () {
    return view('contact');
});`}
              </pre>
            </div>
          </div>
        </section>

        {/* Part 3: Testing Your Multi-Page Migration */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 tracking-tight">
            <span className="w-2 h-2 rounded-full bg-rose-600" />
            Part 3: Testing Your Multi-Page Migration
          </h2>

          <p className="text-sm text-slate-600">
            Ensure your local development server is running in your terminal:
          </p>

          <div className="bg-[#0f172a] border border-slate-800 rounded-xl p-3 flex items-center justify-between text-xs font-mono text-slate-200 shadow-sm">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-emerald-400" />
              <span>php artisan serve</span>
            </div>
            <button
              onClick={() => copyCode('php artisan serve', 'artisan_serve')}
              className="px-2 py-1 rounded bg-white/10 hover:bg-white/20 text-xs transition"
            >
              {copiedKey === 'artisan_serve' ? 'Copied' : 'Copy'}
            </button>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-2 text-sm shadow-sm">
            <p className="font-semibold text-slate-900">Open your web browser and test each navigation route path:</p>
            <ul className="list-disc pl-5 text-xs sm:text-sm font-mono text-sky-600 space-y-1">
              <li>Home: <span className="text-slate-800">/</span></li>
              <li>About: <span className="text-slate-800">/about</span></li>
              <li>Contact: <span className="text-slate-800">/contact</span></li>
            </ul>
            <p className="text-xs text-emerald-600 font-medium pt-2 border-t border-slate-100">
              Verify that the shared navbar and footer remain consistent across pages while the inner content updates dynamically.
            </p>
          </div>
        </section>

        {/* Part 4: Final Laboratory Task & Submission */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 tracking-tight">
            <span className="w-2 h-2 rounded-full bg-rose-600" />
            Part 4: Final Laboratory Task &amp; Submission
          </h2>

          <div className="bg-white border border-slate-200 border-l-4 border-l-rose-600 rounded-r-xl p-5 shadow-sm">
            <ol className="list-decimal pl-5 text-sm text-slate-700 space-y-2.5">
              <li>
                <strong className="text-slate-900">Audit Your Old Project:</strong> Take a complete multi-page native PHP website you created previously (minimum 3 connected pages).
              </li>
              <li>
                <strong className="text-slate-900">Build the Layout:</strong> Extract the common navigation and footer into a master Blade layout (<code className="font-mono text-xs text-rose-600 bg-slate-100 px-1 py-0.5 rounded border border-slate-200">resources/views/layouts/app.blade.php</code>).
              </li>
              <li>
                <strong className="text-slate-900">Convert Child Pages:</strong> Migrate each page content section into individual <code className="font-mono text-xs text-rose-600 bg-slate-100 px-1 py-0.5 rounded border border-slate-200">.blade.php</code> files using <code className="font-mono text-xs text-rose-600 bg-slate-100 px-1 py-0.5 rounded border border-slate-200">@extends</code> and <code className="font-mono text-xs text-rose-600 bg-slate-100 px-1 py-0.5 rounded border border-slate-200">@section</code>.
              </li>
              <li>
                <strong className="text-slate-900">Configure Routes &amp; Test:</strong> Map all pages inside <code className="font-mono text-xs text-rose-600 bg-slate-100 px-1 py-0.5 rounded border border-slate-200">routes/web.php</code> and demonstrate your fully functioning multi-page Laravel application to your instructor for grading.
              </li>
            </ol>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-200 pt-6 text-center text-xs text-slate-500">
          <p>&copy; 2026 Web Development 3 Class &bull; All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}
