'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Database,
  ArrowLeft,
  Copy,
  Check,
  CheckCircle2,
  Terminal,
  ChevronRight,
  Camera,
  Video,
  Code,
  FolderGit2,
  Layers,
  Sparkles,
  AlertCircle,
  HelpCircle,
  ExternalLink,
  Table,
  Cpu
} from 'lucide-react';

export default function LaravelEloquentLabManualPage() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'sqlite' | 'mysql'>('sqlite');

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
              <Database className="w-4 h-4" />
            </span>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-sm text-slate-900 tracking-tight">
                Web Dev 3: Laboratory Manual
              </span>
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-rose-50 text-rose-600 border border-rose-200">
                Part 3 • Eloquent ORM
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/laravel"
              className="text-xs font-semibold text-slate-600 hover:text-slate-900 px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition hidden sm:flex items-center gap-1.5 shadow-2xs"
            >
              <span>Part 2: Blade Layouts</span>
            </Link>
            <Link
              href="/"
              className="text-xs font-semibold text-slate-600 hover:text-slate-900 px-3.5 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition flex items-center gap-1.5 shadow-2xs"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Portal</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Reading Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-10 space-y-12">
        {/* Header Section */}
        <header className="border-b border-slate-200 pb-8">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-600 font-mono bg-rose-50 border border-rose-200/80 px-2.5 py-0.5 rounded-full">
              Laboratory Manual: Web Development 3 (Part 3)
            </span>
            <span className="text-xs font-mono text-slate-400">
              Week 6 - 7 Practical Lab
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
            Eloquent ORM: Fresh Project, Table Schemas, Models &amp; Dynamic Blade Queries
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
            In this third laboratory phase of Web Development 3, you will build a persistent, dynamic database application in a <strong>brand-new Laravel 11 project</strong>. Rather than writing repetitive and error-prone raw SQL strings (<code className="font-mono text-xs bg-slate-100 text-rose-600 px-1 py-0.5 rounded border border-slate-200">SELECT * FROM products</code>), you will master Laravel&apos;s <strong>Eloquent Object-Relational Mapper (ORM)</strong>, table schema design with Artisan, mass-assignment protection, and database seeders.
          </p>

          {/* Fresh Project Setup Banner */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3 text-sm text-amber-900 shadow-2xs">
            <Sparkles className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong className="font-bold text-amber-950">Important Notice — Fresh Project Setup:</strong>
              <p className="mt-1 text-xs sm:text-sm text-amber-800 leading-relaxed">
                For this activity, you are <strong>creating a brand-new Laravel 11 project from scratch</strong> (<code className="font-mono text-xs bg-amber-100 text-amber-950 px-1.5 py-0.5 rounded border border-amber-300">campus-gear</code>). You do <strong>not</strong> need to migrate or carry over code from your previous laboratory tasks.
              </p>
            </div>
          </div>
        </header>

        {/* Module Overview & Learning Objectives */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 tracking-tight">
            <span className="w-2 h-2 rounded-full bg-rose-600" />
            Module Overview &amp; Learning Objectives
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-start gap-3 text-sm shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 font-semibold">Fresh Project Setup:</strong> Scaffold a brand-new Laravel 11 application (<code className="font-mono text-xs text-rose-600 bg-slate-50 px-1 py-0.5 rounded">composer create-project</code>) dedicated solely to database operations.
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-start gap-3 text-sm shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 font-semibold">Table Schemas:</strong> Design structured database tables using Artisan schema files with typed columns (<code className="font-mono text-xs text-rose-600 bg-slate-50 px-1 py-0.5 rounded">string</code>, <code className="font-mono text-xs text-rose-600 bg-slate-50 px-1 py-0.5 rounded">decimal</code>, <code className="font-mono text-xs text-rose-600 bg-slate-50 px-1 py-0.5 rounded">boolean</code>).
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-start gap-3 text-sm shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 font-semibold">Eloquent Models:</strong> Generate model classes and configure security attributes like <code className="font-mono text-xs text-rose-600 bg-slate-50 px-1 py-0.5 rounded">$fillable</code> mass-assignment protection and attribute casts.
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-start gap-3 text-sm shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 font-semibold">Database Seeders:</strong> Populate realistic mock data with Seeders and verify queries interactively inside the <code className="font-mono text-xs text-rose-600 bg-slate-50 px-1 py-0.5 rounded">php artisan tinker</code> REPL.
              </div>
            </div>
          </div>
        </section>

        {/* Conceptual Foundation: Native PHP vs Eloquent ORM */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 tracking-tight">
            <span className="w-2 h-2 rounded-full bg-rose-600" />
            Conceptual Foundation: Native SQL vs. Laravel Eloquent
          </h2>

          <p className="text-sm text-slate-600 leading-relaxed">
            In native PHP development, database interaction requires manual PDO queries, manual error-handling loops, and risky string concatenations that expose applications to SQL Injection vulnerabilities. Eloquent bridges your relational database with clean Object-Oriented PHP:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white border border-slate-200 border-t-2 border-t-amber-500 rounded-xl p-5 shadow-2xs">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-bold text-slate-900">Native PHP (Legacy PDO)</h4>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-amber-50 text-amber-700 border border-amber-200 rounded">
                  Manual SQL
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Requires typing raw SQL strings, manually executing statements, checking rows, and fetching assoc arrays:
              </p>
              <div className="bg-[#0f172a] rounded-lg p-3 font-mono text-[11px] text-slate-200 overflow-x-auto">
                <span className="text-rose-400">$stmt</span> = <span className="text-sky-300">$pdo</span>-&gt;prepare(<span className="text-amber-300">&apos;SELECT * FROM products WHERE is_active = 1&apos;</span>);<br />
                <span className="text-rose-400">$stmt</span>-&gt;execute();<br />
                <span className="text-rose-400">$products</span> = <span className="text-rose-400">$stmt</span>-&gt;fetchAll(PDO::FETCH_ASSOC);
              </div>
            </div>

            <div className="bg-white border border-slate-200 border-t-2 border-t-emerald-600 rounded-xl p-5 shadow-2xs">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-bold text-slate-900">Laravel Eloquent ORM</h4>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded">
                  ActiveRecord
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Models represent database tables. Queries are expressive, chainable, and automatically prepared with PDO parameter binding:
              </p>
              <div className="bg-[#0f172a] rounded-lg p-3 font-mono text-[11px] text-slate-200 overflow-x-auto">
                <span className="text-rose-400">$products</span> = Product::where(<span className="text-amber-300">&apos;is_active&apos;</span>, <span className="text-emerald-400">true</span>)<br />
                &nbsp;&nbsp;&nbsp;&nbsp;-&gt;latest()<br />
                &nbsp;&nbsp;&nbsp;&nbsp;-&gt;get();
              </div>
            </div>
          </div>
        </section>

        {/* Step-by-Step Practical Lab Implementation */}
        <section className="space-y-8">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 tracking-tight">
              <span className="w-2 h-2 rounded-full bg-rose-600" />
              Step-by-Step Lab Guide: The Campus Gear Catalog
            </h2>
            <span className="text-xs font-mono font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
              10 Milestones
            </span>
          </div>

          {/* STEP 1 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-full bg-rose-600 text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
                1
              </span>
              <h3 className="text-base font-bold text-slate-900">
                Scaffold a Brand-New Laravel 11 Project (composer create-project)
              </h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Open your terminal or command prompt in your projects folder (e.g., <code className="font-mono text-xs text-rose-600">Documents/Programming</code>) and generate a fresh Laravel 11 project named <code className="font-mono text-xs text-rose-600 font-bold">campus-gear</code>:
            </p>

            <div className="bg-[#0f172a] border border-slate-800 rounded-xl overflow-hidden shadow-md">
              <div className="bg-[#1e293b] px-4 py-2 border-b border-slate-700/60 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5"><Terminal className="w-3.5 h-3.5 text-rose-400" /> Terminal</span>
                <button
                  onClick={() => copyCode('composer create-project laravel/laravel campus-gear\ncd campus-gear', 'scaffold_proj')}
                  className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-white font-sans text-xs flex items-center gap-1 transition"
                >
                  {copiedKey === 'scaffold_proj' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedKey === 'scaffold_proj' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <pre className="p-4 font-mono text-xs sm:text-sm text-emerald-400 overflow-x-auto leading-relaxed">
{`composer create-project laravel/laravel campus-gear
cd campus-gear`}
              </pre>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-xs text-slate-700 flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                <strong>Fresh Directory:</strong> Open the newly created <code className="font-mono font-bold text-slate-900">campus-gear</code> folder in Visual Studio Code (<code className="font-mono bg-white px-1.5 py-0.5 rounded border border-slate-300">code .</code>). All subsequent commands in this guide will be run inside this folder.
              </span>
            </div>
          </div>

          {/* STEP 2 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-full bg-rose-600 text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
                2
              </span>
              <h3 className="text-base font-bold text-slate-900">
                Database Environment Configuration (.env &amp; SQLite / MySQL)
              </h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Inside your new <code className="font-mono text-xs text-rose-600">campus-gear</code> project, Laravel 11 defaults to zero-configuration <strong>SQLite</strong>, which stores your database in a lightweight local file inside <code className="font-mono text-xs text-rose-600">database/database.sqlite</code>. You can also connect to MySQL (e.g., via XAMPP).
            </p>

            {/* DB Tabs */}
            <div className="flex items-center gap-2 pt-1">
              <button
                onClick={() => setActiveTab('sqlite')}
                className={`px-3 py-1 rounded-lg text-xs font-bold font-mono transition cursor-pointer ${
                  activeTab === 'sqlite'
                    ? 'bg-rose-600 text-white shadow-2xs'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                Option A: SQLite (Recommended Default)
              </button>
              <button
                onClick={() => setActiveTab('mysql')}
                className={`px-3 py-1 rounded-lg text-xs font-bold font-mono transition cursor-pointer ${
                  activeTab === 'mysql'
                    ? 'bg-rose-600 text-white shadow-2xs'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                Option B: MySQL (XAMPP)
              </button>
            </div>

            {activeTab === 'sqlite' ? (
              <div className="bg-[#0f172a] border border-slate-800 rounded-xl overflow-hidden shadow-md">
                <div className="bg-[#1e293b] px-4 py-2 border-b border-slate-700/60 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>.env (SQLite Configuration)</span>
                  <button
                    onClick={() => copyCode(`DB_CONNECTION=sqlite
# When using sqlite, Laravel automatically uses database/database.sqlite`, 'env_sqlite')}
                    className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-white font-sans text-xs flex items-center gap-1 transition"
                  >
                    {copiedKey === 'env_sqlite' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedKey === 'env_sqlite' ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <pre className="p-4 font-mono text-xs sm:text-sm text-slate-200 overflow-x-auto leading-relaxed">
{`DB_CONNECTION=sqlite
# In Laravel 11, SQLite is the default and auto-creates the database file!`}
                </pre>
              </div>
            ) : (
              <div className="bg-[#0f172a] border border-slate-800 rounded-xl overflow-hidden shadow-md">
                <div className="bg-[#1e293b] px-4 py-2 border-b border-slate-700/60 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>.env (MySQL / XAMPP Configuration)</span>
                  <button
                    onClick={() => copyCode(`DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel_lab
DB_USERNAME=root
DB_PASSWORD=`, 'env_mysql')}
                    className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-white font-sans text-xs flex items-center gap-1 transition"
                  >
                    {copiedKey === 'env_mysql' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedKey === 'env_mysql' ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <pre className="p-4 font-mono text-xs sm:text-sm text-slate-200 overflow-x-auto leading-relaxed">
{`DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel_lab
DB_USERNAME=root
DB_PASSWORD=`}
                </pre>
              </div>
            )}
          </div>

          {/* STEP 3 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-full bg-rose-600 text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
                3
              </span>
              <h3 className="text-base font-bold text-slate-900">
                Generating the Table Schema with Artisan
              </h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Migrations serve as version control for your database schema. Use the Artisan CLI to scaffold a migration for a new <code className="font-mono text-xs text-rose-600">products</code> table:
            </p>

            <div className="bg-[#0f172a] border border-slate-800 rounded-xl overflow-hidden shadow-md">
              <div className="bg-[#1e293b] px-4 py-2 border-b border-slate-700/60 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5"><Terminal className="w-3.5 h-3.5 text-rose-400" /> Terminal</span>
                <button
                  onClick={() => copyCode('php artisan make:migration create_products_table --create=products', 'artisan_mig')}
                  className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-white font-sans text-xs flex items-center gap-1 transition"
                >
                  {copiedKey === 'artisan_mig' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedKey === 'artisan_mig' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <pre className="p-4 font-mono text-xs sm:text-sm text-emerald-400 overflow-x-auto">
{`php artisan make:migration create_products_table --create=products`}
              </pre>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed pt-1">
              Now open the generated file inside <code className="font-mono text-xs text-rose-600">database/migrations/xxxx_xx_xx_create_products_table.php</code> and define the columns in the <code className="font-mono text-xs text-rose-600">up()</code> method:
            </p>

            {/* Migration Schema Code */}
            <div className="bg-[#0f172a] border border-slate-800 rounded-xl overflow-hidden shadow-md">
              <div className="bg-[#1e293b] px-4 py-2 border-b border-slate-700/60 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>database/migrations/xxxx_xx_xx_create_products_table.php</span>
                <button
                  onClick={() => copyCode(`<?php

use Illuminate\\Database\\Migrations\\Migration;
use Illuminate\\Database\\Schema\\Blueprint;
use Illuminate\\Support\\Facades\\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('sku')->unique();
            $table->string('category');
            $table->decimal('price', 8, 2);
            $table->integer('stock')->default(0);
            $table->text('description')->nullable();
            $table->boolean('is_available')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};`, 'migration_code')}
                  className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-white font-sans text-xs flex items-center gap-1 transition"
                >
                  {copiedKey === 'migration_code' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedKey === 'migration_code' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <pre className="p-4 font-mono text-xs sm:text-sm text-slate-200 overflow-x-auto leading-relaxed">
{`<?php

use Illuminate\\Database\\Migrations\\Migration;
use Illuminate\\Database\\Schema\\Blueprint;
use Illuminate\\Support\\Facades\\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('sku')->unique();
            $table->string('category');
            $table->decimal('price', 8, 2);
            $table->integer('stock')->default(0);
            $table->text('description')->nullable();
            $table->boolean('is_available')->default(true);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};`}
              </pre>
            </div>
          </div>

          {/* STEP 4 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-full bg-rose-600 text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
                4
              </span>
              <h3 className="text-base font-bold text-slate-900">
                Running Table Schemas with Artisan
              </h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Execute your migrations to build the physical database tables:
            </p>

            <div className="bg-[#0f172a] border border-slate-800 rounded-xl overflow-hidden shadow-md">
              <div className="bg-[#1e293b] px-4 py-2 border-b border-slate-700/60 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5"><Terminal className="w-3.5 h-3.5 text-rose-400" /> Terminal</span>
                <button
                  onClick={() => copyCode('php artisan migrate', 'artisan_run')}
                  className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-white font-sans text-xs flex items-center gap-1 transition"
                >
                  {copiedKey === 'artisan_run' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedKey === 'artisan_run' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <pre className="p-4 font-mono text-xs sm:text-sm text-emerald-400 overflow-x-auto">
{`php artisan migrate`}
              </pre>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3.5 text-xs text-emerald-900 flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                <strong>Verification Tip:</strong> Run <code className="font-mono bg-white px-1.5 py-0.5 rounded border border-emerald-300">php artisan migrate:status</code> to verify that all batch runs report <strong>[Ran]</strong>.
              </span>
            </div>
          </div>

          {/* STEP 5 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-full bg-rose-600 text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
                5
              </span>
              <h3 className="text-base font-bold text-slate-900">
                Creating the Eloquent Model &amp; Mass-Assignment Protection
              </h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Generate the Model class representing the <code className="font-mono text-xs text-rose-600">products</code> table:
            </p>

            <div className="bg-[#0f172a] border border-slate-800 rounded-xl overflow-hidden shadow-md">
              <div className="bg-[#1e293b] px-4 py-2 border-b border-slate-700/60 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5"><Terminal className="w-3.5 h-3.5 text-rose-400" /> Terminal</span>
                <button
                  onClick={() => copyCode('php artisan make:model Product', 'make_model')}
                  className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-white font-sans text-xs flex items-center gap-1 transition"
                >
                  {copiedKey === 'make_model' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedKey === 'make_model' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <pre className="p-4 font-mono text-xs sm:text-sm text-emerald-400 overflow-x-auto">
{`php artisan make:model Product`}
              </pre>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed pt-1">
              Open <code className="font-mono text-xs text-rose-600">app/Models/Product.php</code>. Add the <code className="font-mono text-xs text-rose-600">$fillable</code> array to whitelist attributes allowed during <code className="font-mono text-xs text-rose-600">Product::create()</code>:
            </p>

            {/* Model Code */}
            <div className="bg-[#0f172a] border border-slate-800 rounded-xl overflow-hidden shadow-md">
              <div className="bg-[#1e293b] px-4 py-2 border-b border-slate-700/60 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>app/Models/Product.php</span>
                <button
                  onClick={() => copyCode(`<?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Factories\\HasFactory;
use Illuminate\\Database\\Eloquent\\Model;

class Product extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     * Whitelisting attributes protects against malicious HTTP injections.
     */
    protected $fillable = [
        'name',
        'sku',
        'category',
        'price',
        'stock',
        'description',
        'is_available'
    ];

    /**
     * Get the attributes that should be cast.
     */
    protected function casts(): array
    {
        return [
            'price' => 'decimal:2',
            'stock' => 'integer',
            'is_available' => 'boolean',
        ];
    }
}`, 'model_code')}
                  className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-white font-sans text-xs flex items-center gap-1 transition"
                >
                  {copiedKey === 'model_code' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedKey === 'model_code' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <pre className="p-4 font-mono text-xs sm:text-sm text-slate-200 overflow-x-auto leading-relaxed">
{`<?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Factories\\HasFactory;
use Illuminate\\Database\\Eloquent\\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'sku',
        'category',
        'price',
        'stock',
        'description',
        'is_available'
    ];

    protected function casts(): array
    {
        return [
            'price' => 'decimal:2',
            'stock' => 'integer',
            'is_available' => 'boolean',
        ];
    }
}`}
              </pre>
            </div>
          </div>

          {/* STEP 6 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-full bg-rose-600 text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
                6
              </span>
              <h3 className="text-base font-bold text-slate-900">
                Database Seeding &amp; Interactive Tinker CLI Playground
              </h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Create a dedicated Seeder to populate initial mock records:
            </p>

            <div className="bg-[#0f172a] border border-slate-800 rounded-xl overflow-hidden shadow-md">
              <div className="bg-[#1e293b] px-4 py-2 border-b border-slate-700/60 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5"><Terminal className="w-3.5 h-3.5 text-rose-400" /> Terminal</span>
                <button
                  onClick={() => copyCode('php artisan make:seeder ProductSeeder', 'make_seeder')}
                  className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-white font-sans text-xs flex items-center gap-1 transition"
                >
                  {copiedKey === 'make_seeder' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedKey === 'make_seeder' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <pre className="p-4 font-mono text-xs sm:text-sm text-emerald-400 overflow-x-auto">
{`php artisan make:seeder ProductSeeder`}
              </pre>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed pt-1">
              Add mock items in <code className="font-mono text-xs text-rose-600">database/seeders/ProductSeeder.php</code>:
            </p>

            {/* Seeder Code */}
            <div className="bg-[#0f172a] border border-slate-800 rounded-xl overflow-hidden shadow-md">
              <div className="bg-[#1e293b] px-4 py-2 border-b border-slate-700/60 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>database/seeders/ProductSeeder.php</span>
                <button
                  onClick={() => copyCode(`<?php

namespace Database\\Seeders;

use Illuminate\\Database\\Seeder;
use App\\Models\\Product;

class ProductSeeder extends Seeder
{
    public function run(): void
    {
        Product::create([
            'name' => 'Mechanical Keyboard (RGB Blue Switches)',
            'sku' => 'TECH-KB-001',
            'category' => 'Peripherals',
            'price' => 2499.00,
            'stock' => 15,
            'description' => 'Tactile clicky mechanical keyboard ideal for lab coding sessions.',
            'is_available' => true,
        ]);

        Product::create([
            'name' => 'Ergonomic Vertical Mouse',
            'sku' => 'TECH-MS-002',
            'category' => 'Peripherals',
            'price' => 1250.50,
            'stock' => 28,
            'description' => 'Reduces wrist strain during long programming hours.',
            'is_available' => true,
        ]);

        Product::create([
            'name' => 'Full HD 1080p Web Camera',
            'sku' => 'TECH-CAM-003',
            'category' => 'Hardware',
            'price' => 1890.00,
            'stock' => 8,
            'description' => 'Crisp video capture with dual stereo noise-cancelling microphones.',
            'is_available' => true,
        ]);

        Product::create([
            'name' => 'USB-C Multiport Docking Station',
            'sku' => 'TECH-HUB-004',
            'category' => 'Accessories',
            'price' => 3100.00,
            'stock' => 0,
            'description' => 'HDMI 4K, Gigabit Ethernet, 100W PD passthrough, and 3x USB 3.0 ports.',
            'is_available' => false,
        ]);
    }
}`, 'seeder_code')}
                  className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-white font-sans text-xs flex items-center gap-1 transition"
                >
                  {copiedKey === 'seeder_code' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedKey === 'seeder_code' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <pre className="p-4 font-mono text-xs sm:text-sm text-slate-200 overflow-x-auto leading-relaxed">
{`<?php

namespace Database\\Seeders;

use Illuminate\\Database\\Seeder;
use App\\Models\\Product;

class ProductSeeder extends Seeder
{
    public function run(): void
    {
        Product::create([
            'name' => 'Mechanical Keyboard (RGB Blue Switches)',
            'sku' => 'TECH-KB-001',
            'category' => 'Peripherals',
            'price' => 2499.00,
            'stock' => 15,
            'description' => 'Tactile clicky mechanical keyboard ideal for lab coding sessions.',
            'is_available' => true,
        ]);

        Product::create([
            'name' => 'Ergonomic Vertical Mouse',
            'sku' => 'TECH-MS-002',
            'category' => 'Peripherals',
            'price' => 1250.50,
            'stock' => 28,
            'description' => 'Reduces wrist strain during long programming hours.',
            'is_available' => true,
        ]);

        Product::create([
            'name' => 'USB-C Multiport Docking Station',
            'sku' => 'TECH-HUB-004',
            'category' => 'Accessories',
            'price' => 3100.00,
            'stock' => 0,
            'description' => 'HDMI 4K, Gigabit Ethernet, 100W PD passthrough.',
            'is_available' => false,
        ]);
    }
}`}
              </pre>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed pt-1">
              Now run the seeder command and test your queries inside <code className="font-mono text-xs text-rose-600">tinker</code>:
            </p>

            <div className="bg-[#0f172a] border border-slate-800 rounded-xl overflow-hidden shadow-md">
              <div className="bg-[#1e293b] px-4 py-2 border-b border-slate-700/60 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5"><Terminal className="w-3.5 h-3.5 text-rose-400" /> Terminal: Seeding &amp; Tinker</span>
                <button
                  onClick={() => copyCode(`php artisan db:seed --class=ProductSeeder
php artisan tinker`, 'seed_and_tinker')}
                  className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-white font-sans text-xs flex items-center gap-1 transition"
                >
                  {copiedKey === 'seed_and_tinker' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedKey === 'seed_and_tinker' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <pre className="p-4 font-mono text-xs sm:text-sm text-emerald-400 overflow-x-auto leading-relaxed">
{`php artisan db:seed --class=ProductSeeder

# Open the interactive interactive PHP REPL:
php artisan tinker

# Inside tinker, run these test Eloquent queries:
> App\\Models\\Product::count();
=> 3

> App\\Models\\Product::where('is_available', true)->pluck('name');
=> ["Mechanical Keyboard (RGB Blue Switches)", "Ergonomic Vertical Mouse"]`}
              </pre>
            </div>
          </div>

          {/* STEP 7 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-full bg-rose-600 text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
                7
              </span>
              <h3 className="text-base font-bold text-slate-900">
                Creating the Controller with Eloquent Queries
              </h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Scaffold the HTTP Controller using Artisan:
            </p>

            <div className="bg-[#0f172a] border border-slate-800 rounded-xl overflow-hidden shadow-md">
              <div className="bg-[#1e293b] px-4 py-2 border-b border-slate-700/60 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5"><Terminal className="w-3.5 h-3.5 text-rose-400" /> Terminal</span>
                <button
                  onClick={() => copyCode('php artisan make:controller ProductController', 'make_ctrl')}
                  className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-white font-sans text-xs flex items-center gap-1 transition"
                >
                  {copiedKey === 'make_ctrl' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedKey === 'make_ctrl' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <pre className="p-4 font-mono text-xs sm:text-sm text-emerald-400 overflow-x-auto">
{`php artisan make:controller ProductController`}
              </pre>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed pt-1">
              Open <code className="font-mono text-xs text-rose-600">app/Http/Controllers/ProductController.php</code> and write the methods to query Eloquent models:
            </p>

            {/* Controller Code */}
            <div className="bg-[#0f172a] border border-slate-800 rounded-xl overflow-hidden shadow-md">
              <div className="bg-[#1e293b] px-4 py-2 border-b border-slate-700/60 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>app/Http/Controllers/ProductController.php</span>
                <button
                  onClick={() => copyCode(`<?php

namespace App\\Http\\Controllers;

use App\\Models\\Product;
use Illuminate\\Http\\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of products from Eloquent.
     */
    public function index()
    {
        $products = Product::latest()->get();

        return view('products.index', [
            'products' => $products,
            'totalCount' => Product::count(),
            'inStockCount' => Product::where('is_available', true)->count()
        ]);
    }

    /**
     * Store a newly created product via Eloquent mass assignment.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'sku' => 'required|string|unique:products,sku',
            'category' => 'required|string',
            'price' => 'required|numeric|min:0',
            'stock' => 'required|integer|min:0',
            'description' => 'nullable|string',
        ]);

        $validated['is_available'] = $request->has('is_available');

        Product::create($validated);

        return redirect()->route('products.index')->with('success', 'Product registered in database successfully!');
    }
}`, 'ctrl_code')}
                  className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-white font-sans text-xs flex items-center gap-1 transition"
                >
                  {copiedKey === 'ctrl_code' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedKey === 'ctrl_code' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <pre className="p-4 font-mono text-xs sm:text-sm text-slate-200 overflow-x-auto leading-relaxed">
{`<?php

namespace App\\Http\\Controllers;

use App\\Models\\Product;
use Illuminate\\Http\\Request;

class ProductController extends Controller
{
    public function index()
    {
        // Eloquent query fetching newest records
        $products = Product::latest()->get();

        return view('products.index', [
            'products' => $products,
            'totalCount' => Product::count(),
            'inStockCount' => Product::where('is_available', true)->count()
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'sku' => 'required|string|unique:products,sku',
            'category' => 'required|string',
            'price' => 'required|numeric|min:0',
            'stock' => 'required|integer|min:0',
            'description' => 'nullable|string',
        ]);

        $validated['is_available'] = $request->has('is_available');

        // Safe Mass Assignment via Eloquent
        Product::create($validated);

        return redirect()->route('products.index')
            ->with('success', 'Product created successfully!');
    }
}`}
              </pre>
            </div>
          </div>

          {/* STEP 8 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-full bg-rose-600 text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
                8
              </span>
              <h3 className="text-base font-bold text-slate-900">
                Configuring Routes in routes/web.php
              </h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Open <code className="font-mono text-xs text-rose-600">routes/web.php</code> and wire the controller methods to URL endpoints:
            </p>

            <div className="bg-[#0f172a] border border-slate-800 rounded-xl overflow-hidden shadow-md">
              <div className="bg-[#1e293b] px-4 py-2 border-b border-slate-700/60 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>routes/web.php</span>
                <button
                  onClick={() => copyCode(`use App\\Http\\Controllers\\ProductController;

Route::get('/', function () {
    return redirect()->route('products.index');
});

Route::get('/products', [ProductController::class, 'index'])->name('products.index');
Route::post('/products', [ProductController::class, 'store'])->name('products.store');`, 'routes_code')}
                  className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-white font-sans text-xs flex items-center gap-1 transition"
                >
                  {copiedKey === 'routes_code' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedKey === 'routes_code' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <pre className="p-4 font-mono text-xs sm:text-sm text-slate-200 overflow-x-auto leading-relaxed">
{`use App\\Http\\Controllers\\ProductController;

Route::get('/', function () {
    return redirect()->route('products.index');
});

Route::get('/products', [ProductController::class, 'index'])->name('products.index');
Route::post('/products', [ProductController::class, 'store'])->name('products.store');`}
              </pre>
            </div>
          </div>

          {/* STEP 9 */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-full bg-rose-600 text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
                9
              </span>
              <h3 className="text-base font-bold text-slate-900">
                Designing the Master Layout &amp; Dynamic Blade View
              </h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              First, establish a clean master layout shell inside your new project at <code className="font-mono text-xs text-rose-600">resources/views/layouts/app.blade.php</code>:
            </p>

            {/* Master Layout Code */}
            <div className="bg-[#0f172a] border border-slate-800 rounded-xl overflow-hidden shadow-md">
              <div className="bg-[#1e293b] px-4 py-2 border-b border-slate-700/60 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>resources/views/layouts/app.blade.php</span>
                <button
                  onClick={() => copyCode(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'Campus Gear')</title>
    <style>
        body { font-family: system-ui, -apple-system, sans-serif; background: #f8fafc; color: #1e293b; margin: 0; padding: 30px 16px; }
        .container { max-width: 920px; margin: 0 auto; }
        .badge-success { color: #16a34a; font-weight: bold; font-size: 12px; background: #f0fdf4; padding: 4px 8px; border-radius: 4px; }
        .badge-danger { color: #dc2626; font-weight: bold; font-size: 12px; background: #fef2f2; padding: 4px 8px; border-radius: 4px; }
    </style>
</head>
<body>
    <div class="container">
        @yield('content')
    </div>
</body>
</html>`, 'layout_code')}
                  className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-white font-sans text-xs flex items-center gap-1 transition"
                >
                  {copiedKey === 'layout_code' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedKey === 'layout_code' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <pre className="p-4 font-mono text-xs sm:text-sm text-slate-200 overflow-x-auto leading-relaxed">
{`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'Campus Gear')</title>
    <style>
        body { font-family: system-ui, -apple-system, sans-serif; background: #f8fafc; color: #1e293b; margin: 0; padding: 30px 16px; }
        .container { max-width: 920px; margin: 0 auto; }
    </style>
</head>
<body>
    <div class="container">
        @yield('content')
    </div>
</body>
</html>`}
              </pre>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed pt-2">
              Next, create the folder <code className="font-mono text-xs text-rose-600">resources/views/products/</code> and save <code className="font-mono text-xs text-rose-600">index.blade.php</code>. It extends <code className="font-mono text-xs text-rose-600">layouts.app</code> and loops over the Eloquent records using <code className="font-mono text-xs text-rose-600">@forelse</code>:
            </p>

            <div className="bg-[#0f172a] border border-slate-800 rounded-xl overflow-hidden shadow-md">
              <div className="bg-[#1e293b] px-4 py-2 border-b border-slate-700/60 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>resources/views/products/index.blade.php</span>
                <button
                  onClick={() => copyCode(`@extends('layouts.app')

@section('title', 'Campus Inventory - Eloquent ORM')

@section('content')
<div class="product-catalog" style="max-width: 900px; margin: 0 auto; font-family: sans-serif;">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
        <div>
            <h1 style="margin: 0; color: #0f172a; font-size: 24px;">Campus Gear Inventory</h1>
            <p style="margin: 4px 0 0 0; color: #64748b; font-size: 14px;">Powered by Laravel 11 Eloquent ORM</p>
        </div>
        <div style="display: flex; gap: 10px;">
            <span style="background: #e2e8f0; color: #334155; padding: 6px 12px; border-radius: 20px; font-size: 12px; font-weight: bold;">
                Total Items: {{ $totalCount }}
            </span>
            <span style="background: #dcfce7; color: #166534; padding: 6px 12px; border-radius: 20px; font-size: 12px; font-weight: bold;">
                In Stock: {{ $inStockCount }}
            </span>
        </div>
    </div>

    @if(session('success'))
        <div style="background: #ecfdf5; border: 1px solid #6ee7b7; color: #065f46; padding: 12px; border-radius: 8px; margin-bottom: 20px; font-size: 14px;">
            ✓ {{ session('success') }}
        </div>
    @endif

    <!-- Dynamic Eloquent Items Table -->
    <table style="width: 100%; border-collapse: collapse; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
        <thead>
            <tr style="background: #f8fafc; border-bottom: 2px solid #e2e8f0; text-align: left; font-size: 12px; text-transform: uppercase; color: #475569;">
                <th style="padding: 12px 16px;">SKU</th>
                <th style="padding: 12px 16px;">Product Name</th>
                <th style="padding: 12px 16px;">Category</th>
                <th style="padding: 12px 16px;">Price</th>
                <th style="padding: 12px 16px;">Stock Status</th>
            </tr>
        </thead>
        <tbody>
            @forelse($products as $product)
                <tr style="border-bottom: 1px solid #f1f5f9; font-size: 14px;">
                    <td style="padding: 12px 16px; font-family: monospace; color: #64748b;">
                        {{ $product->sku }}
                    </td>
                    <td style="padding: 12px 16px; font-weight: bold; color: #0f172a;">
                        {{ $product->name }}
                        @if($product->description)
                            <div style="font-size: 12px; color: #94a3b8; font-weight: normal; margin-top: 2px;">
                                {{ $product->description }}
                            </div>
                        @endif
                    </td>
                    <td style="padding: 12px 16px;">
                        <span style="background: #f1f5f9; padding: 4px 8px; border-radius: 4px; font-size: 12px;">
                            {{ $product->category }}
                        </span>
                    </td>
                    <td style="padding: 12px 16px; font-weight: bold; color: #0f172a;">
                        ₱{{ number_format($product->price, 2) }}
                    </td>
                    <td style="padding: 12px 16px;">
                        @if($product->is_available && $product->stock > 0)
                            <span style="color: #16a34a; font-weight: bold; font-size: 12px; background: #f0fdf4; padding: 4px 8px; border-radius: 4px;">
                                ● {{ $product->stock }} in stock
                            </span>
                        @else
                            <span style="color: #dc2626; font-weight: bold; font-size: 12px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;">
                                ✕ Unavailable
                            </span>
                        @endif
                    </td>
                </tr>
            @empty
                <tr>
                    <td colspan="5" style="padding: 32px; text-align: center; color: #94a3b8;">
                        No product records found in database. Run <code style="color: #e11d48;">php artisan db:seed</code>!
                    </td>
                </tr>
            @endforelse
        </tbody>
    </table>
</div>
@endsection`, 'blade_code')}
                  className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-white font-sans text-xs flex items-center gap-1 transition"
                >
                  {copiedKey === 'blade_code' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedKey === 'blade_code' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <pre className="p-4 font-mono text-xs sm:text-sm text-slate-200 overflow-x-auto leading-relaxed">
{`@extends('layouts.app')

@section('title', 'Campus Inventory - Eloquent ORM')

@section('content')
<div class="product-catalog">
    <h1>Campus Gear Inventory</h1>
    <p>Total Items: {{ $totalCount }} | In Stock: {{ $inStockCount }}</p>

    <!-- Dynamic Eloquent Loop -->
    <table>
        @forelse($products as $product)
            <tr>
                <td>{{ $product->sku }}</td>
                <td>{{ $product->name }}</td>
                <td>₱{{ number_format($product->price, 2) }}</td>
                <td>
                    @if($product->is_available)
                        <span class="badge-success">● {{ $product->stock }} in stock</span>
                    @else
                        <span class="badge-danger">✕ Unavailable</span>
                    @endif
                </td>
            </tr>
        @empty
            <tr><td colspan="4">No records found.</td></tr>
        @endforelse
    </table>
</div>
@endsection`}
              </pre>
            </div>
          </div>

          {/* STEP 10 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-full bg-rose-600 text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
                10
              </span>
              <h3 className="text-base font-bold text-slate-900">
                Launch Local Dev Server &amp; Live Browser Verification
              </h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Start your local Laravel development server and open the live product catalog in your browser:
            </p>

            <div className="bg-[#0f172a] border border-slate-800 rounded-xl overflow-hidden shadow-md">
              <div className="bg-[#1e293b] px-4 py-2 border-b border-slate-700/60 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5"><Terminal className="w-3.5 h-3.5 text-rose-400" /> Terminal: Dev Server</span>
                <button
                  onClick={() => copyCode('php artisan serve', 'artisan_serve')}
                  className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-white font-sans text-xs flex items-center gap-1 transition"
                >
                  {copiedKey === 'artisan_serve' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedKey === 'artisan_serve' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <pre className="p-4 font-mono text-xs sm:text-sm text-emerald-400 overflow-x-auto leading-relaxed">
{`php artisan serve`}
              </pre>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3.5 text-xs text-emerald-900 flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                <strong>Live Check:</strong> Open <a href="http://127.0.0.1:8000/products" target="_blank" rel="noreferrer" className="font-bold underline text-emerald-800">http://127.0.0.1:8000/products</a> in Chrome or Edge to confirm that your seeded items are rendering dynamically from the database!
              </span>
            </div>
          </div>
        </section>

        {/* Common Pitfalls & Debugging Section */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 tracking-tight">
            <span className="w-2 h-2 rounded-full bg-rose-600" />
            Troubleshooting Common Student Errors
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white border border-rose-200 rounded-xl p-4 space-y-2 shadow-2xs">
              <div className="flex items-center gap-2 text-rose-700 font-bold text-xs">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>MassAssignmentException</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                <strong>Cause:</strong> Attempting to save form input with <code className="font-mono text-rose-600">Product::create()</code> without adding the columns to <code className="font-mono text-rose-600">$fillable</code> in <code className="font-mono text-slate-700">app/Models/Product.php</code>.
              </p>
            </div>

            <div className="bg-white border border-amber-200 rounded-xl p-4 space-y-2 shadow-2xs">
              <div className="flex items-center gap-2 text-amber-700 font-bold text-xs">
                <HelpCircle className="w-4 h-4 shrink-0" />
                <span>Base table or view not found</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                <strong>Cause:</strong> You created the migration file but forgot to run <code className="font-mono text-rose-600">php artisan migrate</code>. Make sure all migration batches show &apos;[Ran]&apos;.
              </p>
            </div>
          </div>
        </section>

        {/* Student Submission Deliverables */}
        <section className="border-t border-slate-200 pt-8 space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-rose-600 font-mono block mb-1">
              Final Deliverables &amp; Evaluation Rubric
            </span>
            <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">
              Required Laboratory Submission Items
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Submit the following 4 deliverables to the course LMS or submit directly to your instructor:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Deliverable 1 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-2xs flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600 shrink-0">
                <Camera className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-slate-900">1. Migration &amp; Model Screenshots</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Capture terminal output showing <code className="font-mono text-rose-600">php artisan migrate:status</code> alongside your <code className="font-mono text-slate-700">app/Models/Product.php</code> file.
                </p>
              </div>
            </div>

            {/* Deliverable 2 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-2xs flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600 shrink-0">
                <Terminal className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-slate-900">2. Artisan Tinker Query Proof</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Terminal screenshot demonstrating interactive queries inside Tinker: <code className="font-mono text-rose-600">Product::all()</code> and <code className="font-mono text-rose-600">Product::count()</code>.
                </p>
              </div>
            </div>

            {/* Deliverable 3 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-2xs flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600 shrink-0">
                <Video className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-slate-900">3. Live Browser Demonstration</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Short video or animated screen capture navigating to <code className="font-mono text-rose-600">http://127.0.0.1:8000/products</code> displaying dynamic records loaded from the database.
                </p>
              </div>
            </div>

            {/* Deliverable 4 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-2xs flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600 shrink-0">
                <FolderGit2 className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-slate-900">4. GitHub Repository Link</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Public repository containing your migration files, Product model, controller, and Blade views with clean git commit messages.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-200 pt-6 text-center text-xs text-slate-500">
          <p>&copy; 2026 Web Development 3 Class &bull; IT Curriculum Portal &bull; All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}
