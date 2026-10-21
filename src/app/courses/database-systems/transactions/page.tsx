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
  ShieldAlert,
  ShieldCheck,
  Layers,
  Sparkles,
  AlertCircle,
  HelpCircle,
  ExternalLink,
  Table,
  Cpu,
  RefreshCw,
  GitCommit,
  Flame,
  ArrowRight
} from 'lucide-react';

export default function DatabaseTransactionsLabPage() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyCode = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-700 font-sans pb-24 antialiased selection:bg-emerald-500 selection:text-white">
      {/* Sticky Top Navbar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 sm:px-6 py-3.5 shadow-sm">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
              <Database className="w-4 h-4" />
            </span>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-sm text-slate-900 tracking-tight">
                Database Systems: Laboratory Manual
              </span>
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                Part 2 • Transactions &amp; Triggers
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/courses/database-systems"
              className="text-xs font-semibold text-slate-600 hover:text-slate-900 px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition hidden sm:flex items-center gap-1.5 shadow-2xs"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Course</span>
            </Link>
            <Link
              href="/lesson/?id=database1"
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm transition flex items-center gap-1.5"
            >
              <span>Database Slides</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Reading Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-10 space-y-12">
        {/* Header Section */}
        <header className="border-b border-slate-200 pb-8">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 font-mono bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 rounded-full">
              Activity Continuation • IT-DB1
            </span>
            <span className="text-xs font-mono text-slate-400">
              Week 8 - 9 Practical Lab
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
            Database Transactions, ACID Integrity &amp; Automated Triggers
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
            In this laboratory session, you will build directly upon your existing retail inventory database schema (<code className="font-mono text-xs bg-slate-100 text-emerald-700 px-1 py-0.5 rounded border border-slate-200">categories</code>, <code className="font-mono text-xs bg-slate-100 text-emerald-700 px-1 py-0.5 rounded border border-slate-200">suppliers</code>, and <code className="font-mono text-xs bg-slate-100 text-emerald-700 px-1 py-0.5 rounded border border-slate-200">products</code>) established in the previous activity. You will transition from read-only analytical queries to high-concurrency data modification workflows, mastering transaction boundaries (<code className="font-mono text-xs bg-slate-100 text-emerald-700 px-1 py-0.5 rounded border border-slate-200">BEGIN TRANSACTION</code>, <code className="font-mono text-xs bg-slate-100 text-emerald-700 px-1 py-0.5 rounded border border-slate-200">COMMIT</code>, <code className="font-mono text-xs bg-slate-100 text-emerald-700 px-1 py-0.5 rounded border border-slate-200">ROLLBACK</code>, <code className="font-mono text-xs bg-slate-100 text-emerald-700 px-1 py-0.5 rounded border border-slate-200">SAVEPOINT</code>) and autonomous database triggers (<code className="font-mono text-xs bg-slate-100 text-emerald-700 px-1 py-0.5 rounded border border-slate-200">CREATE TRIGGER</code>).
          </p>

          {/* Context Notice Banner */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-start gap-3 text-sm text-emerald-900 shadow-2xs">
            <Sparkles className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong className="font-bold text-emerald-950">Prerequisite &amp; Workspace Continuity:</strong>
              <p className="mt-1 text-xs sm:text-sm text-emerald-800 leading-relaxed">
                Continue using your existing <strong>SQLiteOnline</strong> workspace from the previous activity (<em className="italic">Advanced SQL Queries – Subqueries, Views, and Filtering</em>). All existing tables, views, and product records will be retained.
              </p>
            </div>
          </div>
        </header>

        {/* Objectives Section */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 tracking-tight">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
            Learning Objectives
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-start gap-3 text-sm shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 font-semibold">ACID Guarantees:</strong> Execute atomic multi-statement sales transactions using <code className="font-mono text-xs text-emerald-700 bg-slate-50 px-1 py-0.5 rounded">BEGIN TRANSACTION</code>, <code className="font-mono text-xs text-emerald-700 bg-slate-50 px-1 py-0.5 rounded">COMMIT</code>, and <code className="font-mono text-xs text-emerald-700 bg-slate-50 px-1 py-0.5 rounded">ROLLBACK</code>.
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-start gap-3 text-sm shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 font-semibold">Granular Savepoints:</strong> Establish intermediate recovery checkpoints with <code className="font-mono text-xs text-emerald-700 bg-slate-50 px-1 py-0.5 rounded">SAVEPOINT</code> and roll back partial batches without aborting the entire sequence.
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-start gap-3 text-sm shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 font-semibold">Automated Triggers:</strong> Implement <code className="font-mono text-xs text-emerald-700 bg-slate-50 px-1 py-0.5 rounded">AFTER INSERT</code> triggers to automatically deduct physical stock inventory whenever customer orders are logged.
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-start gap-3 text-sm shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 font-semibold">Business Rule Enforcement:</strong> Construct proactive <code className="font-mono text-xs text-emerald-700 bg-slate-50 px-1 py-0.5 rounded">BEFORE INSERT</code> triggers with <code className="font-mono text-xs text-emerald-700 bg-slate-50 px-1 py-0.5 rounded">RAISE(ABORT)</code> to prevent overselling and negative inventory balances.
              </div>
            </div>
          </div>
        </section>

        {/* 1. Schema Recap & Preparation */}
        <section className="space-y-4">
          <div className="border-b border-slate-200 pb-3">
            <span className="text-xs font-mono font-bold text-emerald-600 uppercase tracking-wider">Step 1</span>
            <h2 className="text-xl font-bold text-slate-900">Schema Extension &amp; Preparation</h2>
          </div>

          <p className="text-sm text-slate-600 leading-relaxed">
            Ensure foreign keys are active. To support enterprise sales and transaction tracking, we will extend the existing retail inventory schema by creating two new related tables: <code className="font-mono text-xs bg-slate-100 text-slate-800 px-1 py-0.5 rounded">orders</code> and <code className="font-mono text-xs bg-slate-100 text-slate-800 px-1 py-0.5 rounded">order_items</code>, as well as an <code className="font-mono text-xs bg-slate-100 text-slate-800 px-1 py-0.5 rounded">inventory_audit_log</code> table for automated change tracking.
          </p>

          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-4 shadow-sm relative group">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1.5 text-slate-300">
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                <span>Step 1.1: Enable Foreign Keys &amp; Extend Schema</span>
              </span>
              <button
                onClick={() =>
                  copyCode(
`-- Step 1: Ensure Foreign Key Enforcement is Enabled
PRAGMA foreign_keys = ON;

-- Step 1.2: Create Orders Table
CREATE TABLE IF NOT EXISTS orders (
    order_id INTEGER PRIMARY KEY AUTOINCREMENT,
    customer_name TEXT NOT NULL,
    order_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    total_amount DECIMAL(10, 2) DEFAULT 0.00,
    status TEXT CHECK(status IN ('PENDING', 'COMPLETED', 'CANCELLED')) DEFAULT 'PENDING'
);

-- Step 1.3: Create Order Items Line Table (Linked to Products)
CREATE TABLE IF NOT EXISTS order_items (
    item_id INTEGER PRIMARY KEY AUTOINCREMENT,
    order_id INTEGER NOT NULL,
    product_id INTEGER NOT NULL,
    quantity_ordered INTEGER NOT NULL CHECK(quantity_ordered > 0),
    unit_price DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(order_id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);

-- Step 1.4: Create Inventory Audit Log Table
CREATE TABLE IF NOT EXISTS inventory_audit_log (
    log_id INTEGER PRIMARY KEY AUTOINCREMENT,
    product_id INTEGER NOT NULL,
    action_type TEXT NOT NULL,
    old_quantity INTEGER,
    new_quantity INTEGER,
    logged_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);`,
                    'step1_schema'
                  )
                }
                className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs transition"
              >
                {copiedKey === 'step1_schema' ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy SQL</span>
                  </>
                )}
              </button>
            </div>
            <pre className="text-xs font-mono text-emerald-300 overflow-x-auto leading-relaxed">
{`-- Step 1: Ensure Foreign Key Enforcement is Enabled
PRAGMA foreign_keys = ON;

-- Step 1.2: Create Orders Table
CREATE TABLE IF NOT EXISTS orders (
    order_id INTEGER PRIMARY KEY AUTOINCREMENT,
    customer_name TEXT NOT NULL,
    order_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    total_amount DECIMAL(10, 2) DEFAULT 0.00,
    status TEXT CHECK(status IN ('PENDING', 'COMPLETED', 'CANCELLED')) DEFAULT 'PENDING'
);

-- Step 1.3: Create Order Items Line Table (Linked to Products)
CREATE TABLE IF NOT EXISTS order_items (
    item_id INTEGER PRIMARY KEY AUTOINCREMENT,
    order_id INTEGER NOT NULL,
    product_id INTEGER NOT NULL,
    quantity_ordered INTEGER NOT NULL CHECK(quantity_ordered > 0),
    unit_price DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(order_id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);

-- Step 1.4: Create Inventory Audit Log Table
CREATE TABLE IF NOT EXISTS inventory_audit_log (
    log_id INTEGER PRIMARY KEY AUTOINCREMENT,
    product_id INTEGER NOT NULL,
    action_type TEXT NOT NULL,
    old_quantity INTEGER,
    new_quantity INTEGER,
    logged_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);`}
            </pre>
          </div>
        </section>

        {/* 2. Student Hands-On Tasks */}
        <section className="space-y-8">
          <div className="border-b border-slate-200 pb-3">
            <span className="text-xs font-mono font-bold text-emerald-600 uppercase tracking-wider">Step 2</span>
            <h2 className="text-xl font-bold text-slate-900">Student Hands-On Tasks</h2>
          </div>

          {/* Task 1 */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-xs font-mono font-bold">
                  Task 1
                </span>
                <span>Atomic Transaction Processing (BEGIN, COMMIT &amp; ROLLBACK)</span>
              </h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              In enterprise systems, sales orders involve multiple interrelated operations: creating the order header, recording the line items, and deducting physical stock from the warehouse. If any step fails (e.g. invalid payment or server crash), <strong>Atomicity</strong> ensures that the entire batch is discarded via <code className="font-mono text-xs bg-slate-100 text-emerald-700 px-1 py-0.5 rounded">ROLLBACK</code>, leaving no partial records.
            </p>

            <div className="space-y-2">
              <h4 className="text-sm font-bold text-slate-800">
                Query 1.1: Successful Multi-Table Sale Execution (COMMIT)
              </h4>
              <p className="text-xs text-slate-600">
                Process an order for customer &apos;TechCorp Solutions&apos; purchasing 2 units of product ID 1. Group the order creation, item addition, and stock deduction into a single atomic transaction block.
              </p>

              <div className="bg-slate-900 rounded-xl p-4 relative group">
                <div className="flex justify-between items-center mb-2 text-xs font-mono text-slate-400 border-b border-slate-800 pb-2">
                  <span>SQL: Atomic Transaction with COMMIT</span>
                  <button
                    onClick={() =>
                      copyCode(
`-- Query 1.1: Atomic Multi-Table Sale Execution
BEGIN TRANSACTION;

-- 1. Create order header
INSERT INTO orders (customer_name, total_amount, status)
VALUES ('TechCorp Solutions', 1500.00, 'COMPLETED');

-- 2. Insert line item for Product ID 1 (2 units @ 750.00 each)
INSERT INTO order_items (order_id, product_id, quantity_ordered, unit_price)
VALUES (last_insert_rowid(), 1, 2, 750.00);

-- 3. Deduct 2 units from products inventory
UPDATE products
SET quantity = quantity - 2
WHERE product_id = 1;

-- 4. Persist all changes atomically
COMMIT;

-- Verify the consistent state across both tables
SELECT order_id, customer_name, total_amount, status FROM orders;
SELECT product_id, product_name, quantity FROM products WHERE product_id = 1;`,
                        'query_1_1'
                      )
                    }
                    className="flex items-center gap-1 px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs transition"
                  >
                    {copiedKey === 'query_1_1' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedKey === 'query_1_1' ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>
                <pre className="text-xs font-mono text-emerald-300 overflow-x-auto leading-relaxed">
{`BEGIN TRANSACTION;

-- 1. Create order header
INSERT INTO orders (customer_name, total_amount, status)
VALUES ('TechCorp Solutions', 1500.00, 'COMPLETED');

-- 2. Insert line item for Product ID 1 (2 units @ 750.00 each)
INSERT INTO order_items (order_id, product_id, quantity_ordered, unit_price)
VALUES (last_insert_rowid(), 1, 2, 750.00);

-- 3. Deduct 2 units from products inventory
UPDATE products
SET quantity = quantity - 2
WHERE product_id = 1;

-- 4. Persist all changes atomically
COMMIT;

-- Verification Queries:
SELECT order_id, customer_name, total_amount, status FROM orders;
SELECT product_id, product_name, quantity FROM products WHERE product_id = 1;`}
                </pre>
              </div>
            </div>

            <div className="space-y-2 pt-3 border-t border-slate-100">
              <h4 className="text-sm font-bold text-slate-800">
                Query 1.2: Simulated Payment Failure &amp; Atomicity Rollback (ROLLBACK)
              </h4>
              <p className="text-xs text-slate-600">
                Simulate a scenario where an order is placed and stock is decremented, but a simulated payment gateway timeout occurs. Issue a <code className="font-mono text-xs bg-slate-100 text-emerald-700 px-1 py-0.5 rounded">ROLLBACK</code> to verify that neither the order nor the inventory deduction persists.
              </p>

              <div className="bg-slate-900 rounded-xl p-4 relative group">
                <div className="flex justify-between items-center mb-2 text-xs font-mono text-slate-400 border-b border-slate-800 pb-2">
                  <span>SQL: Simulated Failure with ROLLBACK</span>
                  <button
                    onClick={() =>
                      copyCode(
`-- Query 1.2: Demonstrating ROLLBACK Atomicity
-- Check initial quantity before starting
SELECT product_id, product_name, quantity FROM products WHERE product_id = 2;

BEGIN TRANSACTION;

-- Step A: Insert a pending order
INSERT INTO orders (customer_name, total_amount, status)
VALUES ('Apex Dynamics', 4800.00, 'PENDING');

-- Step B: Insert order items
INSERT INTO order_items (order_id, product_id, quantity_ordered, unit_price)
VALUES (last_insert_rowid(), 2, 4, 1200.00);

-- Step C: Tentatively decrement inventory
UPDATE products
SET quantity = quantity - 4
WHERE product_id = 2;

-- SIMULATED FAILURE: Payment authorization was DECLINED by bank.
-- Abort all tentative changes:
ROLLBACK;

-- Verification: Verify that 'Apex Dynamics' order does NOT exist and quantity is untouched!
SELECT * FROM orders WHERE customer_name = 'Apex Dynamics';
SELECT product_id, product_name, quantity FROM products WHERE product_id = 2;`,
                        'query_1_2'
                      )
                    }
                    className="flex items-center gap-1 px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs transition"
                  >
                    {copiedKey === 'query_1_2' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedKey === 'query_1_2' ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>
                <pre className="text-xs font-mono text-emerald-300 overflow-x-auto leading-relaxed">
{`-- Check initial quantity before starting
SELECT product_id, product_name, quantity FROM products WHERE product_id = 2;

BEGIN TRANSACTION;

-- Step A: Insert a pending order
INSERT INTO orders (customer_name, total_amount, status)
VALUES ('Apex Dynamics', 4800.00, 'PENDING');

-- Step B: Insert order items
INSERT INTO order_items (order_id, product_id, quantity_ordered, unit_price)
VALUES (last_insert_rowid(), 2, 4, 1200.00);

-- Step C: Tentatively decrement inventory
UPDATE products
SET quantity = quantity - 4
WHERE product_id = 2;

-- SIMULATED FAILURE: Payment authorization was DECLINED by bank.
-- Abort all tentative changes:
ROLLBACK;

-- Verification Queries:
SELECT * FROM orders WHERE customer_name = 'Apex Dynamics';
SELECT product_id, product_name, quantity FROM products WHERE product_id = 2;`}
                </pre>
              </div>
            </div>
          </div>

          {/* Task 2 */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-xs font-mono font-bold">
                  Task 2
                </span>
                <span>Granular Transaction Control with SAVEPOINT</span>
              </h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              A <code className="font-mono text-xs bg-slate-100 text-emerald-700 px-1 py-0.5 rounded">SAVEPOINT</code> allows a transaction to be partially rolled back without canceling preceding valid operations. This is essential for long-running batch jobs or multi-item carts where one item is out of stock but the rest should still be preserved.
            </p>

            <div className="space-y-2">
              <h4 className="text-sm font-bold text-slate-800">
                Query 2.1: Partial Rollback Using Savepoints
              </h4>
              <p className="text-xs text-slate-600">
                Create a master transaction, process an initial order item, establish a savepoint, attempt an invalid experimental update, roll back to the savepoint, and finally commit the primary order.
              </p>

              <div className="bg-slate-900 rounded-xl p-4 relative group">
                <div className="flex justify-between items-center mb-2 text-xs font-mono text-slate-400 border-b border-slate-800 pb-2">
                  <span>SQL: SAVEPOINT &amp; Partial ROLLBACK</span>
                  <button
                    onClick={() =>
                      copyCode(
`-- Task 2.1: Granular Transaction Control with SAVEPOINT
SAVEPOINT sp_batch_order;

-- 1. Create order for Nexus Logistics
INSERT INTO orders (customer_name, total_amount, status)
VALUES ('Nexus Logistics', 600.00, 'COMPLETED');

-- 2. Mark an intermediate checkpoint
SAVEPOINT sp_line_item;

-- 3. Tentative invalid action: Updating non-existent product or accidental bad data
UPDATE products SET quantity = 9999 WHERE product_id = 999;

-- 4. Rollback only the invalid update, preserving the Nexus Logistics order!
ROLLBACK TO SAVEPOINT sp_line_item;

-- 5. Release and commit the outer transaction
RELEASE SAVEPOINT sp_batch_order;

-- Verification: Check that the order exists but product table was not corrupted
SELECT * FROM orders WHERE customer_name = 'Nexus Logistics';`,
                        'query_2_1'
                      )
                    }
                    className="flex items-center gap-1 px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs transition"
                  >
                    {copiedKey === 'query_2_1' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedKey === 'query_2_1' ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>
                <pre className="text-xs font-mono text-emerald-300 overflow-x-auto leading-relaxed">
{`SAVEPOINT sp_batch_order;

-- 1. Create order for Nexus Logistics
INSERT INTO orders (customer_name, total_amount, status)
VALUES ('Nexus Logistics', 600.00, 'COMPLETED');

-- 2. Mark an intermediate checkpoint
SAVEPOINT sp_line_item;

-- 3. Tentative invalid action: Updating non-existent product or accidental bad data
UPDATE products SET quantity = 9999 WHERE product_id = 999;

-- 4. Rollback only the invalid update, preserving the Nexus Logistics order!
ROLLBACK TO SAVEPOINT sp_line_item;

-- 5. Release and commit the outer transaction
RELEASE SAVEPOINT sp_batch_order;

-- Verification Query:
SELECT * FROM orders WHERE customer_name = 'Nexus Logistics';`}
                </pre>
              </div>
            </div>
          </div>

          {/* Task 3 */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-xs font-mono font-bold">
                  Task 3
                </span>
                <span>Automated Business Logic with Database Triggers (CREATE TRIGGER)</span>
              </h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Manually issuing <code className="font-mono text-xs bg-slate-100 text-emerald-700 px-1 py-0.5 rounded">UPDATE products SET quantity = quantity - X</code> with every purchase is vulnerable to developer error. A <strong>Database Trigger</strong> automatically fires server-side logic in response to <code className="font-mono text-xs bg-slate-100 text-emerald-700 px-1 py-0.5 rounded">INSERT</code>, <code className="font-mono text-xs bg-slate-100 text-emerald-700 px-1 py-0.5 rounded">UPDATE</code>, or <code className="font-mono text-xs bg-slate-100 text-emerald-700 px-1 py-0.5 rounded">DELETE</code> events.
            </p>

            <div className="space-y-2">
              <h4 className="text-sm font-bold text-slate-800">
                Task 3.1: Automatic Stock Deduction Trigger (AFTER INSERT)
              </h4>
              <p className="text-xs text-slate-600">
                Create a trigger named <code className="font-mono text-xs bg-slate-100 text-emerald-700 px-1 py-0.5 rounded">trg_deduct_inventory_after_sale</code> that automatically decrements the corresponding product&apos;s quantity whenever a new record is inserted into <code className="font-mono text-xs bg-slate-100 text-slate-800 px-1 py-0.5 rounded">order_items</code>.
              </p>

              <div className="bg-slate-900 rounded-xl p-4 relative group">
                <div className="flex justify-between items-center mb-2 text-xs font-mono text-slate-400 border-b border-slate-800 pb-2">
                  <span>SQL: CREATE TRIGGER for Auto Stock Deduction</span>
                  <button
                    onClick={() =>
                      copyCode(
`-- Task 3.1: Create Trigger to Automatically Decrement Stock
CREATE TRIGGER IF NOT EXISTS trg_deduct_inventory_after_sale
AFTER INSERT ON order_items
FOR EACH ROW
BEGIN
    UPDATE products
    SET quantity = quantity - NEW.quantity_ordered
    WHERE product_id = NEW.product_id;
END;`,
                        'task_3_1'
                      )
                    }
                    className="flex items-center gap-1 px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs transition"
                  >
                    {copiedKey === 'task_3_1' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedKey === 'task_3_1' ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>
                <pre className="text-xs font-mono text-emerald-300 overflow-x-auto leading-relaxed">
{`CREATE TRIGGER IF NOT EXISTS trg_deduct_inventory_after_sale
AFTER INSERT ON order_items
FOR EACH ROW
BEGIN
    UPDATE products
    SET quantity = quantity - NEW.quantity_ordered
    WHERE product_id = NEW.product_id;
END;`}
                </pre>
              </div>
            </div>

            <div className="space-y-2 pt-3 border-t border-slate-100">
              <h4 className="text-sm font-bold text-slate-800">
                Task 3.2: Automated Audit Logging Trigger (AFTER UPDATE)
              </h4>
              <p className="text-xs text-slate-600">
                Create a trigger named <code className="font-mono text-xs bg-slate-100 text-emerald-700 px-1 py-0.5 rounded">trg_audit_inventory_changes</code> that captures every inventory quantity modification on <code className="font-mono text-xs bg-slate-100 text-slate-800 px-1 py-0.5 rounded">products</code> and appends a row to <code className="font-mono text-xs bg-slate-100 text-slate-800 px-1 py-0.5 rounded">inventory_audit_log</code> recording <code className="font-mono text-xs bg-slate-100 text-emerald-700 px-1 py-0.5 rounded">OLD.quantity</code> and <code className="font-mono text-xs bg-slate-100 text-emerald-700 px-1 py-0.5 rounded">NEW.quantity</code>.
              </p>

              <div className="bg-slate-900 rounded-xl p-4 relative group">
                <div className="flex justify-between items-center mb-2 text-xs font-mono text-slate-400 border-b border-slate-800 pb-2">
                  <span>SQL: CREATE TRIGGER for Audit Logging</span>
                  <button
                    onClick={() =>
                      copyCode(
`-- Task 3.2: Create Trigger for Automated Inventory Audit Logging
CREATE TRIGGER IF NOT EXISTS trg_audit_inventory_changes
AFTER UPDATE OF quantity ON products
FOR EACH ROW
WHEN OLD.quantity != NEW.quantity
BEGIN
    INSERT INTO inventory_audit_log (product_id, action_type, old_quantity, new_quantity)
    VALUES (
        NEW.product_id,
        CASE 
            WHEN NEW.quantity < OLD.quantity THEN 'SALE_DEDUCTION'
            ELSE 'RESTOCK'
        END,
        OLD.quantity,
        NEW.quantity
    );
END;`,
                        'task_3_2'
                      )
                    }
                    className="flex items-center gap-1 px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs transition"
                  >
                    {copiedKey === 'task_3_2' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedKey === 'task_3_2' ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>
                <pre className="text-xs font-mono text-emerald-300 overflow-x-auto leading-relaxed">
{`CREATE TRIGGER IF NOT EXISTS trg_audit_inventory_changes
AFTER UPDATE OF quantity ON products
FOR EACH ROW
WHEN OLD.quantity != NEW.quantity
BEGIN
    INSERT INTO inventory_audit_log (product_id, action_type, old_quantity, new_quantity)
    VALUES (
        NEW.product_id,
        CASE 
            WHEN NEW.quantity < OLD.quantity THEN 'SALE_DEDUCTION'
            ELSE 'RESTOCK'
        END,
        OLD.quantity,
        NEW.quantity
    );
END;`}
                </pre>
              </div>
            </div>

            <div className="space-y-2 pt-3 border-t border-slate-100">
              <h4 className="text-sm font-bold text-slate-800">
                Task 3.3: Testing the Automated Trigger Pipeline
              </h4>
              <p className="text-xs text-slate-600">
                Insert a single line item into <code className="font-mono text-xs bg-slate-100 text-slate-800 px-1 py-0.5 rounded">order_items</code> without running any manual UPDATE statement. Observe how both triggers fire in sequence to deduct stock and log the audit trail.
              </p>

              <div className="bg-slate-900 rounded-xl p-4 relative group">
                <div className="flex justify-between items-center mb-2 text-xs font-mono text-slate-400 border-b border-slate-800 pb-2">
                  <span>SQL: Trigger Verification Test</span>
                  <button
                    onClick={() =>
                      copyCode(
`-- Step 1: Check existing stock for Product ID 3
SELECT product_id, product_name, quantity FROM products WHERE product_id = 3;

-- Step 2: Insert order and order_item (Notice: NO manual UPDATE on products!)
INSERT INTO orders (customer_name, total_amount, status) 
VALUES ('CyberLabs Inc.', 300.00, 'COMPLETED');

INSERT INTO order_items (order_id, product_id, quantity_ordered, unit_price)
VALUES (last_insert_rowid(), 3, 1, 300.00);

-- Step 3: Verify the triggers deducted stock and created an audit log entry automatically!
SELECT product_id, product_name, quantity FROM products WHERE product_id = 3;
SELECT * FROM inventory_audit_log WHERE product_id = 3;`,
                        'task_3_3'
                      )
                    }
                    className="flex items-center gap-1 px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs transition"
                  >
                    {copiedKey === 'task_3_3' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedKey === 'task_3_3' ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>
                <pre className="text-xs font-mono text-emerald-300 overflow-x-auto leading-relaxed">
{`-- Step 1: Check existing stock for Product ID 3
SELECT product_id, product_name, quantity FROM products WHERE product_id = 3;

-- Step 2: Insert order and order_item (Notice: NO manual UPDATE on products!)
INSERT INTO orders (customer_name, total_amount, status) 
VALUES ('CyberLabs Inc.', 300.00, 'COMPLETED');

INSERT INTO order_items (order_id, product_id, quantity_ordered, unit_price)
VALUES (last_insert_rowid(), 3, 1, 300.00);

-- Step 3: Verify the automated cascade
SELECT product_id, product_name, quantity FROM products WHERE product_id = 3;
SELECT * FROM inventory_audit_log WHERE product_id = 3;`}
                </pre>
              </div>
            </div>
          </div>

          {/* Task 4 */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-xs font-mono font-bold">
                  Task 4
                </span>
                <span>Enforcing Constraints &amp; Preventing Overselling (RAISE(ABORT))</span>
              </h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              What happens if a customer orders 50 units of a product when only 10 are in stock? Without defensive triggers, inventory quantities can drop into negative numbers. Using SQLite&apos;s <code className="font-mono text-xs bg-slate-100 text-emerald-700 px-1 py-0.5 rounded">RAISE(ABORT, &apos;message&apos;)</code>, we can actively intercept and cancel bad operations before they corrupt data.
            </p>

            <div className="space-y-2">
              <h4 className="text-sm font-bold text-slate-800">
                Task 4.1: Creating the Stock Underflow Prevention Trigger
              </h4>
              <p className="text-xs text-slate-600">
                Create a <code className="font-mono text-xs bg-slate-100 text-emerald-700 px-1 py-0.5 rounded">BEFORE INSERT ON order_items</code> trigger named <code className="font-mono text-xs bg-slate-100 text-emerald-700 px-1 py-0.5 rounded">trg_prevent_negative_stock</code> that checks if the ordered quantity exceeds available inventory and halts the query with an error.
              </p>

              <div className="bg-slate-900 rounded-xl p-4 relative group">
                <div className="flex justify-between items-center mb-2 text-xs font-mono text-slate-400 border-b border-slate-800 pb-2">
                  <span>SQL: CREATE TRIGGER with RAISE(ABORT)</span>
                  <button
                    onClick={() =>
                      copyCode(
`-- Task 4.1: Proactive Underflow Prevention Trigger
CREATE TRIGGER IF NOT EXISTS trg_prevent_negative_stock
BEFORE INSERT ON order_items
FOR EACH ROW
WHEN (SELECT quantity FROM products WHERE product_id = NEW.product_id) < NEW.quantity_ordered
BEGIN
    SELECT RAISE(ABORT, 'Transaction Aborted: Insufficient stock available for the requested product.');
END;`,
                        'task_4_1'
                      )
                    }
                    className="flex items-center gap-1 px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs transition"
                  >
                    {copiedKey === 'task_4_1' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedKey === 'task_4_1' ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>
                <pre className="text-xs font-mono text-emerald-300 overflow-x-auto leading-relaxed">
{`CREATE TRIGGER IF NOT EXISTS trg_prevent_negative_stock
BEFORE INSERT ON order_items
FOR EACH ROW
WHEN (SELECT quantity FROM products WHERE product_id = NEW.product_id) < NEW.quantity_ordered
BEGIN
    SELECT RAISE(ABORT, 'Transaction Aborted: Insufficient stock available for the requested product.');
END;`}
                </pre>
              </div>
            </div>

            <div className="space-y-2 pt-3 border-t border-slate-100">
              <h4 className="text-sm font-bold text-slate-800">
                Task 4.2: Testing the Abort Trigger Violation
              </h4>
              <p className="text-xs text-slate-600">
                Attempt to insert an order requesting 999 units for Product ID 1. Verify that SQLite blocks the transaction and displays your custom error message.
              </p>

              <div className="bg-slate-900 rounded-xl p-4 relative group">
                <div className="flex justify-between items-center mb-2 text-xs font-mono text-slate-400 border-b border-slate-800 pb-2">
                  <span>SQL: Trigger Violation Execution</span>
                  <button
                    onClick={() =>
                      copyCode(
`-- Task 4.2: Trigger Violation Test (Attempting to order 999 units)
INSERT INTO orders (customer_name, total_amount, status) 
VALUES ('Greedy Buyer LLC', 749250.00, 'PENDING');

-- This statement WILL FAIL and trigger RAISE(ABORT):
INSERT INTO order_items (order_id, product_id, quantity_ordered, unit_price)
VALUES (last_insert_rowid(), 1, 999, 750.00);`,
                        'task_4_2'
                      )
                    }
                    className="flex items-center gap-1 px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs transition"
                  >
                    {copiedKey === 'task_4_2' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedKey === 'task_4_2' ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>
                <pre className="text-xs font-mono text-emerald-300 overflow-x-auto leading-relaxed">
{`INSERT INTO orders (customer_name, total_amount, status) 
VALUES ('Greedy Buyer LLC', 749250.00, 'PENDING');

-- This statement WILL FAIL and trigger RAISE(ABORT):
INSERT INTO order_items (order_id, product_id, quantity_ordered, unit_price)
VALUES (last_insert_rowid(), 1, 999, 750.00);`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Submission Deliverables */}
        <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
          <div className="border-b border-slate-200 pb-3">
            <span className="text-xs font-mono font-bold text-emerald-600 uppercase tracking-wider">Step 3</span>
            <h2 className="text-xl font-bold text-slate-900">Submission Deliverables</h2>
          </div>

          <p className="text-sm text-slate-600 leading-relaxed">
            Compile your work into a PDF document named <code className="font-mono text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded border border-emerald-200">[LastName]_[FirstName]_Transactions_Triggers.pdf</code> containing screenshots of the following outputs executed in SQLiteOnline:
          </p>

          <div className="space-y-3 text-xs sm:text-sm">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                1
              </span>
              <div>
                <strong className="text-slate-900">Screenshot 1 &ndash; Atomic COMMIT Result (Query 1.1):</strong>
                <p className="text-slate-600 mt-0.5 text-xs">
                  Output showing the persisted record in <code className="font-mono bg-white px-1 py-0.5 rounded border border-slate-200">orders</code> and the corresponding deducted quantity in <code className="font-mono bg-white px-1 py-0.5 rounded border border-slate-200">products</code>.
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                2
              </span>
              <div>
                <strong className="text-slate-900">Screenshot 2 &ndash; ROLLBACK Atomicity Proof (Query 1.2):</strong>
                <p className="text-slate-600 mt-0.5 text-xs">
                  Query output confirming that the simulated failed transaction for &apos;Apex Dynamics&apos; left zero orphaned orders and no stock deduction.
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                3
              </span>
              <div>
                <strong className="text-slate-900">Screenshot 3 &ndash; SAVEPOINT Partial Recovery (Query 2.1):</strong>
                <p className="text-slate-600 mt-0.5 text-xs">
                  Demonstration of <code className="font-mono bg-white px-1 py-0.5 rounded border border-slate-200">ROLLBACK TO SAVEPOINT</code> preserving the legitimate order while cleanly neutralizing the erroneous operation.
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                4
              </span>
              <div>
                <strong className="text-slate-900">Screenshot 4 &ndash; Automated Trigger Execution (Task 3.3):</strong>
                <p className="text-slate-600 mt-0.5 text-xs">
                  Output showing <code className="font-mono bg-white px-1 py-0.5 rounded border border-slate-200">inventory_audit_log</code> populated automatically alongside the decremented <code className="font-mono bg-white px-1 py-0.5 rounded border border-slate-200">products.quantity</code> without any manual update statements.
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                5
              </span>
              <div>
                <strong className="text-slate-900">Screenshot 5 &ndash; RAISE(ABORT) Interception (Task 4.2):</strong>
                <p className="text-slate-600 mt-0.5 text-xs">
                  Output window showing SQLite halting the over-quantity insertion with the custom error message: <code className="font-mono text-rose-600 bg-white px-1 py-0.5 rounded border border-slate-200">Transaction Aborted: Insufficient stock available...</code>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
