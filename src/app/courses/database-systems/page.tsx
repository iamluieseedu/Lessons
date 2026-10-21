'use client';

import React from 'react';
import Link from 'next/link';
import {
  Database,
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  Layers,
  ShieldCheck,
  Server,
  Play
} from 'lucide-react';

export default function DatabaseSystemsPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-700 font-sans pb-24 antialiased selection:bg-emerald-500 selection:text-white">
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 sm:px-6 py-3.5 shadow-sm">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
          <Link href="/courses/" className="flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-slate-900 transition">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Courses</span>
          </Link>

          <Link
            href="/lesson/?id=database1"
            className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 transition flex items-center gap-1.5"
          >
            <Play className="w-3 h-3 fill-current" />
            <span>Database Slides</span>
          </Link>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-12 space-y-10">
        <header className="border-b border-slate-200 pb-8">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="font-mono text-xs font-extrabold px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-800 border border-emerald-200">
              IT-DB1
            </span>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              18 Weeks &bull; 3 Credit Units &bull; Relational Theory &amp; Enterprise SQL
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Database Management Systems &amp; Relational Architecture
          </h1>
          <p className="text-base text-slate-600 leading-relaxed max-w-3xl">
            A comprehensive study of relational database theory, entity-relationship modeling, relational algebra, primary/foreign key constraints, ACID transaction guarantees, and parameterized SQL query security.
          </p>
        </header>

        {/* Overview Section */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-5">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <Database className="w-5 h-5 text-emerald-600" />
            <span>Relational Data Integrity &amp; SQL Engineering</span>
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Data is the foundational core of every modern application. In <strong>IT-DB1</strong>, students master the principles of relational database management systems (RDBMS). They study why relational integrity constraints are mandatory to prevent orphan records, why Three-Valued Logic in SQL treats <code>NULL</code> differently from zero or false, and how the ACID transaction model guarantees financial-grade reliability.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            Security is paramount: students learn the anatomy of SQL Injection attacks and why Parameterized Queries (Prepared Statements) represent the gold standard defense by strictly compiling query blueprints and incoming user input parameters in separate execution passes.
          </p>
        </section>

        {/* Hands-On Laboratory Manuals */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 font-mono">
                Practical Coursework
              </span>
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 mt-0.5">
                <Server className="w-5 h-5 text-emerald-600" />
                <span>Hands-On Laboratory Activities</span>
              </h2>
            </div>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 self-start sm:self-auto">
              2 Active Lab Tasks
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {/* Part 2: Active continuation */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-50/60 to-white border border-emerald-200/90 hover:border-emerald-300 transition shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-600 text-white">
                    LAB PART 2
                  </span>
                  <span className="text-xs font-bold text-emerald-700">
                    Week 8 &ndash; 9 Practical Lab
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  Database Transactions, ACID Integrity &amp; Automated Triggers
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed max-w-2xl">
                  Continuation from the retail inventory schema: atomic multi-table sales with <code className="font-mono text-[11px] bg-slate-100 px-1 py-0.5 rounded">BEGIN/COMMIT/ROLLBACK</code>, granular savepoints, and automated triggers with <code className="font-mono text-[11px] bg-slate-100 px-1 py-0.5 rounded">RAISE(ABORT)</code>.
                </p>
              </div>

              <Link
                href="/courses/database-systems/transactions"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-sm transition shrink-0"
              >
                <span>Launch Lab Manual</span>
                <Play className="w-3.5 h-3.5 fill-current" />
              </Link>
            </div>

            {/* Part 1: Previous Activity */}
            <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200 hover:border-slate-300 transition shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-200 text-slate-700">
                    LAB PART 1
                  </span>
                  <span className="text-xs font-bold text-slate-500">
                    Week 4 &ndash; 5 Practical Lab
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  Advanced SQL Queries: Subqueries, Views &amp; Filtering
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed max-w-2xl">
                  Aggregate filtering with <code className="font-mono text-[11px] bg-white px-1 py-0.5 rounded border border-slate-200">HAVING</code>, single and multi-row subqueries, virtual <code className="font-mono text-[11px] bg-white px-1 py-0.5 rounded border border-slate-200">CREATE VIEW</code> tables, and index performance analysis with <code className="font-mono text-[11px] bg-white px-1 py-0.5 rounded border border-slate-200">EXPLAIN QUERY PLAN</code>.
                </p>
              </div>

              <Link
                href="/courses/database-systems/transactions"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 text-xs font-bold transition shrink-0"
              >
                <span>Review Manual</span>
              </Link>
            </div>
          </div>
        </section>

        {/* 18-Week Syllabus Outline */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-4">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <Layers className="w-5 h-5 text-indigo-600" />
            <span>Syllabus &amp; Curriculum Milestones</span>
          </h2>

          <div className="space-y-3 text-xs sm:text-sm">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 font-mono">Weeks 1 &ndash; 3</span>
              <h4 className="font-bold text-slate-900 text-sm mt-0.5 mb-1">Entity-Relationship Modeling &amp; Normalization</h4>
              <p className="text-slate-600">ER diagrams, primary key entity integrity, foreign key referential constraints, and 1NF through 3NF decomposition.</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-700 font-mono">Weeks 4 &ndash; 7</span>
              <h4 className="font-bold text-slate-900 text-sm mt-0.5 mb-1">Advanced Structured Query Language (SQL)</h4>
              <p className="text-slate-600">Multi-table INNER and OUTER joins, aggregate functions, GROUP BY, subqueries, and three-valued boolean logic with NULLs.</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-[10px] font-bold uppercase tracking-wider text-purple-700 font-mono">Weeks 8 &ndash; 11</span>
              <h4 className="font-bold text-slate-900 text-sm mt-0.5 mb-1">ACID Transactions &amp; Concurrency Control</h4>
              <p className="text-slate-600">Atomicity, Consistency, Isolation levels (Dirty Reads, Phantom Reads), Durability, and write-ahead transaction logging.</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-[10px] font-bold uppercase tracking-wider text-rose-700 font-mono">Weeks 12 &ndash; 14</span>
              <h4 className="font-bold text-slate-900 text-sm mt-0.5 mb-1">Database Security &amp; SQL Injection Defenses</h4>
              <p className="text-slate-600">Vulnerability exploitation analysis, parameterized prepared statements, stored procedures, and least-privilege role assignment.</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-[10px] font-bold uppercase tracking-wider text-sky-700 font-mono">Weeks 15 &ndash; 18</span>
              <h4 className="font-bold text-slate-900 text-sm mt-0.5 mb-1">Indexing, Query Optimization, &amp; Final Project</h4>
              <p className="text-slate-600">B-Tree indexing mechanics, EXPLAIN query plan analysis, table partitioning, and complete enterprise schema deployment.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
