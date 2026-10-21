# Activity: Database Transactions, ACID Integrity, and Automated Triggers

## Objectives
In this laboratory session, you will build directly upon your existing retail inventory database schema (`categories`, `suppliers`, and `products`) established in the previous activity (*Advanced SQL Queries – Subqueries, Views, and Filtering*). You will transition from read-only analytical queries to high-concurrency data modification workflows, mastering transaction boundaries (`BEGIN TRANSACTION`, `COMMIT`, `ROLLBACK`, `SAVEPOINT`) and autonomous database triggers (`CREATE TRIGGER`).

By the end of this activity, you should be able to:
1. Execute multi-table atomic sales operations with guaranteed consistency using `BEGIN TRANSACTION` and `COMMIT`.
2. Demonstrate transactional fault-tolerance by rolling back interrupted or failed database operations via `ROLLBACK`.
3. Establish granular intermediate checkpoints using `SAVEPOINT` and selectively recover from partial errors using `ROLLBACK TO SAVEPOINT`.
4. Create and test automated database triggers (`CREATE TRIGGER ... AFTER INSERT`) to automatically decrement physical product stock when orders are logged.
5. Implement proactive business constraints using `BEFORE INSERT` triggers coupled with `RAISE(ABORT)` to prevent overselling and negative inventory balances.

---

## 1. Schema Recap & Preparation
Ensure you are continuing from your existing SQLiteOnline workspace containing the `categories`, `suppliers`, and `products` tables, along with the `v_product_catalog` view and `idx_products_name` index from the previous lab.

Verify that your foreign key constraint engine is enabled, then extend your schema to support sales orders and automated audit logging:

```sql
-- Step 1.1: Enable Foreign Key Support
PRAGMA foreign_keys = ON;

-- Step 1.2: Create Orders Master Table
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
);
```

---

## 2. Student Hands-On Tasks

### Task 1: Atomic Transaction Processing (BEGIN, COMMIT & ROLLBACK)
In commercial database systems, processing an order involves inserting an order header, recording line items, and deducting physical stock. If any step fails, **Atomicity** ensures all changes are undone.

#### Query 1.1: Multi-Table Atomic Sale (COMMIT)
Execute an atomic transaction for customer `'TechCorp Solutions'` purchasing 2 units of product ID `1` at 750.00 each:

```sql
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

-- Verification Queries:
SELECT order_id, customer_name, total_amount, status FROM orders;
SELECT product_id, product_name, quantity FROM products WHERE product_id = 1;
```

#### Query 1.2: Simulated Payment Failure & Rollback (ROLLBACK)
Demonstrate how a `ROLLBACK` prevents orphaned records and incorrect inventory deductions when an external failure (such as a declined card) occurs:

```sql
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
SELECT product_id, product_name, quantity FROM products WHERE product_id = 2;
```

---

### Task 2: Granular Transaction Control with SAVEPOINT
A `SAVEPOINT` allows an application to roll back part of a transaction without canceling preceding valid operations.

#### Query 2.1: Partial Rollback Using Savepoints
Create a master transaction, process an initial order, establish a savepoint, attempt an invalid experimental update, roll back to the savepoint, and finally commit the primary order:

```sql
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
SELECT * FROM orders WHERE customer_name = 'Nexus Logistics';
```

---

### Task 3: Automated Business Logic with Database Triggers
A trigger automatically executes whenever an `INSERT`, `UPDATE`, or `DELETE` event occurs on a target table.

#### Task 3.1: Automatic Stock Deduction Trigger (AFTER INSERT)
Create a trigger named `trg_deduct_inventory_after_sale` that automatically decrements the corresponding product's quantity whenever an order item is inserted:

```sql
CREATE TRIGGER IF NOT EXISTS trg_deduct_inventory_after_sale
AFTER INSERT ON order_items
FOR EACH ROW
BEGIN
    UPDATE products
    SET quantity = quantity - NEW.quantity_ordered
    WHERE product_id = NEW.product_id;
END;
```

#### Task 3.2: Automated Audit Logging Trigger (AFTER UPDATE)
Create an audit trigger named `trg_audit_inventory_changes` that records any changes to `products.quantity` into `inventory_audit_log`:

```sql
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
END;
```

#### Task 3.3: Testing the Automated Trigger Pipeline
Execute a single purchase order without any manual `UPDATE` statements and verify that stock is decremented and audit logs are recorded automatically:

```sql
-- Step 1: Check existing stock for Product ID 3
SELECT product_id, product_name, quantity FROM products WHERE product_id = 3;

-- Step 2: Insert order and order_item (Notice: NO manual UPDATE on products!)
INSERT INTO orders (customer_name, total_amount, status) 
VALUES ('CyberLabs Inc.', 300.00, 'COMPLETED');

INSERT INTO order_items (order_id, product_id, quantity_ordered, unit_price)
VALUES (last_insert_rowid(), 3, 1, 300.00);

-- Step 3: Verify the triggers deducted stock and created an audit log entry automatically!
SELECT product_id, product_name, quantity FROM products WHERE product_id = 3;
SELECT * FROM inventory_audit_log WHERE product_id = 3;
```

---

### Task 4: Enforcing Constraints & Preventing Overselling (RAISE(ABORT))
Prevent inventory from going negative when an order exceeds available stock.

#### Task 4.1: Stock Underflow Prevention Trigger
Create a `BEFORE INSERT ON order_items` trigger named `trg_prevent_negative_stock` that aborts the transaction if the requested quantity exceeds the current stock:

```sql
CREATE TRIGGER IF NOT EXISTS trg_prevent_negative_stock
BEFORE INSERT ON order_items
FOR EACH ROW
WHEN (SELECT quantity FROM products WHERE product_id = NEW.product_id) < NEW.quantity_ordered
BEGIN
    SELECT RAISE(ABORT, 'Transaction Aborted: Insufficient stock available for the requested product.');
END;
```

#### Task 4.2: Testing the Abort Trigger Violation
Attempt to insert an order requesting 999 units for Product ID 1:

```sql
INSERT INTO orders (customer_name, total_amount, status) 
VALUES ('Greedy Buyer LLC', 749250.00, 'PENDING');

-- This statement WILL FAIL and trigger RAISE(ABORT):
INSERT INTO order_items (order_id, product_id, quantity_ordered, unit_price)
VALUES (last_insert_rowid(), 1, 999, 750.00);
```

---

## 3. Submission Deliverables
Compile your work into a PDF document named `[LastName]_[FirstName]_Transactions_Triggers.pdf` containing screenshots of the following outputs from SQLiteOnline:

- **Screenshot 1 - Query 1.1 Result:** Output showing successful execution of multi-table `COMMIT` with order placed and stock deducted.
- **Screenshot 2 - Query 1.2 Result:** Output showing successful `ROLLBACK` demonstrating that no orphaned orders or partial stock changes persist.
- **Screenshot 3 - Query 2.1 Result:** Output showing partial rollback using `SAVEPOINT` and `ROLLBACK TO SAVEPOINT`.
- **Screenshot 4 - Task 3.3 Result:** Output showing automatic inventory deduction and `inventory_audit_log` generation via database triggers.
- **Screenshot 5 - Task 4.2 Result:** Output showing SQLite halting the over-quantity insertion with the custom `RAISE(ABORT)` error message.
