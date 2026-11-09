import { SlideData } from '../types/slide';

export const databaseWeek2SlidesData: SlideData[] = [
  // ==========================================================================
  // SLIDE 1: COVER
  // ==========================================================================
  {
    id: 'db2-slide1',
    slideNum: 1,
    totalSlides: 24,
    type: 'cover',
    moduleTag: 'COLLEGE MASTERCLASS • DATABASE SYSTEMS',
    title: 'Relational Data Modeling & Advanced SQL Operations',
    subtitle: 'From Entity-Relationship Diagrams (ERD) to Production SQL: Crow\'s Foot Cardinality, Foreign Key Cascades, GROUP BY, Joins & Security',
    metadata: [
      { label: 'Subject', val: 'Fundamentals of Database (Week 2)' },
      { label: 'Prerequisites', val: 'Basic SQL CRUD & Relational Concepts' },
      { label: 'Simulators', val: '5 Live Interactive Studios & Visualizers' },
      { label: 'Outcome', val: 'Production-Ready Schema Design & Query Mastery' }
    ]
  },

  // ==========================================================================
  // SLIDE 2: ROADMAP
  // ==========================================================================
  {
    id: 'db2-slide2',
    slideNum: 2,
    totalSlides: 24,
    type: 'single_topic',
    moduleTag: 'Roadmap',
    title: 'Lecture Roadmap & Key Objectives',
    topicTitle: 'Mastering Relational Architecture and Advanced SQL',
    bullets: [
      '1. Entity-Relationship Modeling: Convert real-world business domains into formal ERDs with entities, attributes, and relationships.',
      '2. Cardinality & Crow\'s Foot Notation: Master 1:1, 1:N, and M:N relationship rules and bridge/junction table architectures.',
      '3. Referential Integrity & Cascades: Enforce foreign key rules (CASCADE, SET NULL, RESTRICT) to prevent orphan records.',
      '4. SQL Aggregations & Grouping: Group millions of records using GROUP BY and filter aggregate summaries with HAVING.',
      '5. Multi-Table JOIN Operations: Seamlessly link tables using INNER, LEFT, RIGHT, and FULL OUTER joins.',
      '6. Nested & Correlated Subqueries: Construct subqueries using IN, EXISTS, and scalar subqueries.',
      '7. Enterprise SQL Security: Understand SQL Injection vulnerability mechanics and neutralize attacks using Parameterized Queries.'
    ],
    layman: {
      title: 'Architectural Perspective:',
      text: 'Creating a single table is like putting everything into one giant cardboard box. Relational database design is like engineering a modular filing cabinet where every folder links precisely to related files without duplication.'
    },
    keyInsight: {
      title: 'Industry Baseline',
      text: 'Every enterprise system—from banking to e-commerce—depends on strict relational integrity and high-performance SQL aggregation pipelines.'
    }
  },

  // ==========================================================================
  // SLIDE 3: ERD FUNDAMENTALS
  // ==========================================================================
  {
    id: 'db2-slide3',
    slideNum: 3,
    totalSlides: 24,
    type: 'single_topic',
    moduleTag: 'Conceptual Design',
    title: 'Entity-Relationship (ER) Modeling',
    topicTitle: 'Translating Real-World Domains into Data Blueprints',
    bullets: [
      'Entities: Physical objects or conceptual notions with independent existence (e.g., Student, Course, Order). Represented as rectangles in ERDs.',
      'Attributes: Characteristic properties that describe an entity (e.g., student_id, first_name, email). Represented as ovals or listed inside entity boxes.',
      'Simple vs Composite Attributes: Simple attributes cannot be divided (age), whereas Composite attributes break down further (Full Name = first + last; Address = street + city + zip).',
      'Derived Attributes: Values calculated dynamically from other stored attributes (e.g., Age derived from Birthdate; Total Price derived from Quantity × Unit Price).',
      'Relationships: Associations between two or more entities (e.g., Student "enrolls in" Course; Customer "places" Order).'
    ],
    layman: {
      title: 'Blueprint Analogy:',
      text: 'Before builders pour concrete for a skyscraper, architects draft CAD blueprints. In database engineering, the ERD is your structural blueprint before writing a single CREATE TABLE statement.'
    },
    keyInsight: {
      title: 'Critical Engineering Rule',
      text: 'Never store derived attributes in tables if they can be calculated on the fly. Storing derived values leads to data desynchronization anomalies!'
    }
  },

  // ==========================================================================
  // SLIDE 4: INTERACTIVE ERD CARDINALITY TESTER
  // ==========================================================================
  {
    id: 'db2-slide4',
    slideNum: 4,
    totalSlides: 24,
    type: 'db_erd_cardinality_tester',
    moduleTag: 'Interactive Studio',
    title: 'ERD Cardinality & Crow\'s Foot Tester',
    topicTitle: 'Explore 1:1, 1:N, and M:N Relational Architectures',
    bullets: [
      'Select relationship ratios (1:1, 1:N, M:N) to visualize how real-world entities connect.',
      'Observe the Crow\'s Foot notation symbols: Mandatory One (||), Optional One (O|), Mandatory Many (|{), and Optional Many (O{).',
      'Review the generated production DDL statements to see where Foreign Keys must reside.'
    ]
  },

  // ==========================================================================
  // SLIDE 5: TRANSFORMING ERD TO RELATIONAL TABLES
  // ==========================================================================
  {
    id: 'db2-slide5',
    slideNum: 5,
    totalSlides: 24,
    type: 'single_topic',
    moduleTag: 'Schema Mapping',
    title: 'Transforming ERDs into Relational Tables',
    topicTitle: 'The 3 Golden Rules of Relational Schema Mapping',
    bullets: [
      'Rule 1 (One-to-One): Place the Primary Key of Table A as a Foreign Key in Table B (or vice versa), and enforce a UNIQUE constraint on that Foreign Key.',
      'Rule 2 (One-to-Many): The Primary Key of the "One" (parent) side ALWAYS becomes a Foreign Key on the "Many" (child) side. Never put the foreign key on the parent side!',
      'Rule 3 (Many-to-Many): Create a third Associative Table (Bridge / Junction Table). The junction table contains Foreign Keys pointing to both entities and forms a Composite Primary Key.',
      'Why Junction Tables are Mandatory: Relational databases cannot store multi-valued comma-separated lists in a single cell without violating First Normal Form (1NF).'
    ],
    layman: {
      title: 'Simple Analogy:',
      text: 'A mother can have multiple children, but each child has one biological mother. If you wrote all children\'s names in the mother\'s ID card, you would run out of space. Instead, each child\'s birth certificate carries the mother\'s name!'
    },
    keyInsight: {
      title: 'Golden Examination Principle',
      text: 'Foreign Keys ALWAYS migrate to the "Many" side. Never violate this rule in database schema exams.'
    }
  },

  // ==========================================================================
  // SLIDE 6: PRIMARY, CANDIDATE & COMPOSITE KEYS
  // ==========================================================================
  {
    id: 'db2-slide6',
    slideNum: 6,
    totalSlides: 24,
    type: 'single_topic',
    moduleTag: 'Keys & Identity',
    title: 'Primary Keys, Candidate Keys & Composite Keys',
    topicTitle: 'The Anchors of Relational Identity',
    bullets: [
      'Candidate Key: Any minimal attribute or set of attributes that can uniquely identify a tuple (row) in a table without duplicates.',
      'Primary Key (PK): The single candidate key selected by the database designer to enforce unique row identification. Must NEVER be NULL.',
      'Surrogate Key vs Natural Key: Natural keys are business data (e.g., Social Security Number, National ID). Surrogate keys are arbitrary auto-incrementing integers (e.g., student_id = 1001) or UUIDs.',
      'Composite Primary Key: A primary key constructed from two or more columns combined together (e.g., PRIMARY KEY (student_id, course_id)).',
      'Alternate Keys: The remaining candidate keys that were not chosen as the Primary Key (enforced using UNIQUE constraints).'
    ],
    layman: {
      title: 'Filing Cabinet Analogy:',
      text: 'Your student number is your Primary Key. Your university email and your Philippine National ID are Candidate Keys. All can identify you, but the university chooses one standardized number as the official anchor.'
    },
    keyInsight: {
      title: 'Entity Integrity Rule',
      text: 'The Primary Key must be unique and non-null (NOT NULL). If any primary key column accepts NULL, Entity Integrity is broken.'
    }
  },

  // ==========================================================================
  // SLIDE 7: FOREIGN KEYS & REFERENTIAL INTEGRITY
  // ==========================================================================
  {
    id: 'db2-slide7',
    slideNum: 7,
    totalSlides: 24,
    type: 'single_topic',
    moduleTag: 'Integrity',
    title: 'Foreign Keys & Referential Integrity',
    topicTitle: 'Preventing Orphan Records and Phantom Relationships',
    bullets: [
      'Foreign Key (FK): A column or set of columns in a child table whose values must match the Primary Key of a parent table, or else be NULL.',
      'Referential Integrity: The formal rule guaranteeing that a foreign key reference must point to an actual, existing row in the referenced table.',
      'Orphan Records: Catastrophic data corruption where child rows reference non-existent parent rows (e.g., an order assigned to customer_id = 999 when only customers 1 to 50 exist).',
      'The ON DELETE Action Matrix: What should happen to child rows when a user deletes a parent row? (CASCADE, SET NULL, RESTRICT / NO ACTION).'
    ],
    layman: {
      title: 'Real-World Perspective:',
      text: 'Without referential integrity, an employee could be assigned to a department that was shut down 5 years ago, and customer orders would get shipped into an empty void.'
    },
    keyInsight: {
      title: 'ACID Enforcement',
      text: 'Foreign Key constraints are verified at the database storage engine layer (InnoDB, PostgreSQL), blocking invalid writes even if the application code has bugs!'
    }
  },

  // ==========================================================================
  // SLIDE 8: INTERACTIVE FOREIGN KEY CASCADE SIMULATOR
  // ==========================================================================
  {
    id: 'db2-slide8',
    slideNum: 8,
    totalSlides: 24,
    type: 'db_cascade_simulator',
    moduleTag: 'Interactive Studio',
    title: 'Foreign Key Cascade & Deletion Simulator',
    topicTitle: 'Observe CASCADE, SET NULL, and RESTRICT in Real Time',
    bullets: [
      'Toggle between CASCADE, SET NULL, and RESTRICT rules.',
      'Delete parent department rows and watch the real-time effect on child employee records.',
      'Observe how RESTRICT blocks deletion with a simulated SQL Error 1451 to protect database integrity.'
    ]
  },

  // ==========================================================================
  // SLIDE 9: DOMAIN INTEGRITY & CONSTRAINTS
  // ==========================================================================
  {
    id: 'db2-slide9',
    slideNum: 9,
    totalSlides: 24,
    type: 'single_topic',
    moduleTag: 'Constraints',
    title: 'Domain Integrity & Table Constraints',
    topicTitle: 'Enforcing Business Logic Directly Inside the Storage Engine',
    bullets: [
      'NOT NULL: Prevents missing values. Enforces that a column must have a value on INSERT.',
      'UNIQUE: Guarantees that every value in the column is distinct across all rows (allows a single NULL in standard SQL).',
      'CHECK: Validates custom boolean conditions before accepting row insertion or modification (e.g., CHECK (age >= 18), CHECK (price > 0)).',
      'DEFAULT: Supplies a fallback value when the user does not specify one during an INSERT statement (e.g., status VARCHAR(20) DEFAULT "active").',
      'AUTO_INCREMENT / SERIAL: Automatically generates sequential primary key integers for each newly inserted record.'
    ],
    layman: {
      title: 'Airport Security Analogy:',
      text: 'Constraints are the metal detectors and passport scanners at the terminal gate. If passenger data does not meet strict rules, entry is instantly blocked before entering the database.'
    },
    keyInsight: {
      title: 'Defense in Depth',
      text: 'Never rely solely on frontend or backend form validation. Database constraints are your final, unbreakable line of defense against corrupted data.'
    }
  },

  // ==========================================================================
  // SLIDE 10: CHECK CONSTRAINT & VALIDATION
  // ==========================================================================
  {
    id: 'db2-slide10',
    slideNum: 10,
    totalSlides: 24,
    type: 'code',
    moduleTag: 'SQL DDL Code',
    title: 'The CHECK Constraint in Modern SQL',
    topicTitle: 'Preventing Invalid Domain Values at the Storage Layer',
    code: `-- Complete Production Table Schema with Rich Domain Constraints
CREATE TABLE accounts (
  account_id INT AUTO_INCREMENT PRIMARY KEY,
  account_number VARCHAR(16) NOT NULL UNIQUE,
  account_holder VARCHAR(100) NOT NULL,
  balance DECIMAL(12, 2) NOT NULL DEFAULT 0.00,
  account_type VARCHAR(20) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  
  -- Domain Check Constraints:
  CONSTRAINT chk_positive_balance CHECK (balance >= 0.00),
  CONSTRAINT chk_account_type CHECK (account_type IN ('SAVINGS', 'CHECKING', 'PAYROLL'))
);

-- Attempting an invalid transaction:
-- INSERT INTO accounts (account_number, account_holder, balance, account_type)
-- VALUES ('ACC-999', 'Juan Dela Cruz', -500.00, 'SAVINGS');
-- Result: [SQL Error 3819]: Check constraint 'chk_positive_balance' is violated!`,
    bullets: [
      'DECIMAL(12, 2) is used for financial calculations to prevent floating-point rounding errors.',
      'The chk_positive_balance constraint forbids accounts from going into negative balances unless an overdraft protocol is specified.',
      'The IN operator inside the CHECK constraint limits account types strictly to valid enum values.'
    ],
    keyInsight: {
      title: 'Float vs Decimal',
      text: 'Never use FLOAT or DOUBLE for monetary values in databases! Floating-point representation causes fractional penny rounding errors. Always use DECIMAL / NUMERIC.'
    }
  },

  // ==========================================================================
  // SLIDE 11: SQL AGGREGATION FUNCTIONS
  // ==========================================================================
  {
    id: 'db2-slide11',
    slideNum: 11,
    totalSlides: 24,
    type: 'single_topic',
    moduleTag: 'DQL Aggregations',
    title: 'SQL Aggregation Functions',
    topicTitle: 'Summarizing Thousands of Records into Single Metric Values',
    bullets: [
      'COUNT(*): Counts total rows returned, including rows with NULL values.',
      'COUNT(column_name): Counts only rows where the specified column contains non-NULL values.',
      'SUM(column_name): Calculates the mathematical sum of numeric values across matching rows (ignores NULLs).',
      'AVG(column_name): Calculates the mathematical mean average of numeric values (ignores NULLs).',
      'MAX(column_name) & MIN(column_name): Identifies the highest and lowest values across numbers, dates, or alphabetical strings.',
      'COUNT(DISTINCT column_name): Counts only unique, deduplicated occurrences.'
    ],
    layman: {
      title: 'Auditor Analogy:',
      text: 'Instead of handing a manager a printout of 500,000 cash register receipts, an aggregation function hands them a single summary: "Total Revenue: $2,450,000 | Transactions: 12,410 | Average Ticket: $197.42".'
    },
    keyInsight: {
      title: 'Crucial NULL Behavior',
      text: 'AVG(score) divides only by the count of rows that have a score! If 4 students scored 100, 100, 100, and NULL, AVG is 100, NOT 75!'
    }
  },

  // ==========================================================================
  // SLIDE 12: GROUP BY MECHANICS
  // ==========================================================================
  {
    id: 'db2-slide12',
    slideNum: 12,
    totalSlides: 24,
    type: 'single_topic',
    moduleTag: 'DQL Grouping',
    title: 'The GROUP BY Clause Architecture',
    topicTitle: 'Partitioning Datasets into Category Summary Buckets',
    bullets: [
      'Purpose of GROUP BY: Collapses all rows that share identical values in specified columns into summary rows.',
      'The Universal SQL Grouping Rule: Every non-aggregated column in your SELECT list MUST appear in the GROUP BY clause!',
      'Why the rule exists: If you SELECT student_name, program, AVG(gpa) GROUP BY program, the database engine cannot guess which student_name to display alongside the single average score of that program!',
      'Multi-Column Grouping: You can group by multiple columns simultaneously (e.g., GROUP BY department, job_title) to compute hierarchical summaries.'
    ],
    layman: {
      title: 'Sorting Post Office Analogy:',
      text: 'GROUP BY is like taking a giant mountain of incoming letters and placing them into separate mail sorting boxes labeled by postal zip code.'
    },
    keyInsight: {
      title: 'SQL Standard Strictness',
      text: 'Under MySQL ONLY_FULL_GROUP_BY mode and standard PostgreSQL, selecting unaggregated columns outside GROUP BY triggers an immediate fatal syntax error.'
    }
  },

  // ==========================================================================
  // SLIDE 13: HAVING VS WHERE
  // ==========================================================================
  {
    id: 'db2-slide13',
    slideNum: 13,
    totalSlides: 24,
    type: 'versus',
    moduleTag: 'SQL Precision',
    title: 'HAVING vs WHERE: When to Use Each',
    topicTitle: 'Pre-Aggregation Row Filtering vs Post-Aggregation Group Filtering',
    versusLeft: {
      title: 'The WHERE Clause (Row Filter)',
      bullets: [
        'Executes BEFORE the GROUP BY aggregation occurs.',
        'Filters individual individual rows from the source tables.',
        'CANNOT contain aggregate functions (e.g., WHERE AVG(salary) > 50000 is ILLEGAL).',
        'Reduces the volume of rows that the database has to sort and group.',
        'Syntax: SELECT dept, AVG(salary) FROM emp WHERE status = "active" GROUP BY dept'
      ]
    },
    versusRight: {
      title: 'The HAVING Clause (Group Filter)',
      bullets: [
        'Executes AFTER the GROUP BY aggregation occurs.',
        'Filters entire aggregated groups, not individual rows.',
        'Exclusively designed to filter by aggregate results (e.g., HAVING COUNT(*) >= 5).',
        'Discards grouped rows that do not meet the metric threshold.',
        'Syntax: ... GROUP BY dept HAVING AVG(salary) > 50000'
      ]
    },
    keyInsight: {
      title: 'Execution Pipeline Order',
      text: 'FROM &rarr; WHERE &rarr; GROUP BY &rarr; HAVING &rarr; SELECT &rarr; ORDER BY &rarr; LIMIT'
    }
  },

  // ==========================================================================
  // SLIDE 14: INTERACTIVE SQL AGGREGATION & GROUP BY STUDIO
  // ==========================================================================
  {
    id: 'db2-slide14',
    slideNum: 14,
    totalSlides: 24,
    type: 'db_group_by_studio',
    moduleTag: 'Interactive Studio',
    title: 'SQL Aggregations & GROUP BY Studio',
    topicTitle: 'Test COUNT, AVG, SUM, MIN, MAX and HAVING Live',
    bullets: [
      'Switch between Students and Employees datasets.',
      'Pick grouping columns and aggregation functions.',
      'Toggle HAVING filter thresholds to observe how groups are included or pruned in real time.',
      'Copy the generated production SQL statement with a single click.'
    ]
  },

  // ==========================================================================
  // SLIDE 15: MULTI-TABLE RELATIONSHIPS & JOIN MECHANICS
  // ==========================================================================
  {
    id: 'db2-slide15',
    slideNum: 15,
    totalSlides: 24,
    type: 'single_topic',
    moduleTag: 'Relational Joins',
    title: 'Multi-Table Relationships & JOIN Mechanics',
    topicTitle: 'Recombining Normalized Data at Query Time',
    bullets: [
      'Why Normalization Requires Joins: In Week 1, we split data into multiple tables (1NF-3NF) to eliminate update anomalies. JOINs allow us to stitch the data back together into unified reports.',
      'The JOIN Condition: Tables are connected using the ON clause, matching the Foreign Key of one table to the Primary Key of the other (e.g., ON c.customer_id = o.customer_id).',
      'Table Aliases: Shorthand labels (e.g., customers c, orders o) that make SQL statements cleaner and resolve ambiguity when column names overlap.',
      'Cartesian Product (CROSS JOIN): If you join two tables without an ON condition, every row of Table A multiplies with every row of Table B (e.g., 100 rows × 100 rows = 10,000 combinations!).'
    ],
    layman: {
      title: 'Puzzle Analogy:',
      text: 'Normalization breaks a high-resolution picture into separate jigsaw puzzle pieces for neat storage. A SQL JOIN is the process of fitting those pieces back together on your table.'
    },
    keyInsight: {
      title: 'Accidental Cross Joins',
      text: 'Forgetting the ON clause in an explicit JOIN or omitting the WHERE condition in an implicit join produces an accidental Cartesian Product that can freeze server CPU memory.'
    }
  },

  // ==========================================================================
  // SLIDE 16: INNER VS OUTER JOINS
  // ==========================================================================
  {
    id: 'db2-slide16',
    slideNum: 16,
    totalSlides: 24,
    type: 'single_topic',
    moduleTag: 'Join Types',
    title: 'INNER JOIN vs OUTER JOIN (LEFT, RIGHT, FULL)',
    topicTitle: 'Selecting Which Unmatched Rows Survive in the Result Set',
    bullets: [
      'INNER JOIN: Returns ONLY records that have matching values in both tables. Any unmatched parent or orphan child is excluded.',
      'LEFT (OUTER) JOIN: Returns ALL records from the Left table, plus matched records from the Right table. If no match exists, Right columns return NULL.',
      'RIGHT (OUTER) JOIN: Returns ALL records from the Right table, plus matched records from the Left table. Unmatched Left columns return NULL.',
      'FULL (OUTER) JOIN: Returns ALL records when there is a match in either Left or Right table. Unmatched values on either side return NULL.',
      'Finding Missing Records with LEFT JOIN: Use LEFT JOIN ... WHERE right_table.id IS NULL to find customers who have never placed an order!'
    ],
    layman: {
      title: 'Guest List Analogy:',
      text: 'INNER JOIN only seats guests who RSVP\'d AND showed up. LEFT JOIN lists everyone invited; if they did not show up, their seat is marked "NULL / Empty".'
    },
    keyInsight: {
      title: 'Most Common Industry Mistake',
      text: 'Using an INNER JOIN when generating customer reports will silently hide all new customers who have not made their first purchase yet! Use LEFT JOIN for customer directories.'
    }
  },

  // ==========================================================================
  // SLIDE 17: INTERACTIVE SQL JOIN MATRIX VISUALIZER
  // ==========================================================================
  {
    id: 'db2-slide17',
    slideNum: 17,
    totalSlides: 24,
    type: 'db_join_matrix_visualizer',
    moduleTag: 'Interactive Studio',
    title: 'Multi-Table SQL JOIN Visual Matrix',
    topicTitle: 'Interactive Comparison of INNER, LEFT, RIGHT, and FULL Joins',
    bullets: [
      'Toggle between INNER, LEFT, RIGHT, and FULL OUTER joins.',
      'Observe which customer and order rows are preserved and which columns fill with NULL.',
      'Watch how Diana (customer with 0 orders) and Order #104 (orphan order) behave under different join types.'
    ]
  },

  // ==========================================================================
  // SLIDE 18: SUBQUERIES & NESTED QUERIES
  // ==========================================================================
  {
    id: 'db2-slide18',
    slideNum: 18,
    totalSlides: 24,
    type: 'single_topic',
    moduleTag: 'Subqueries',
    title: 'Subqueries: Single-Row, Multi-Row & Correlated',
    topicTitle: 'Embedding Queries Inside Queries',
    bullets: [
      'What is a Subquery? A query nested inside another SQL statement (SELECT, INSERT, UPDATE, or DELETE). Also called an inner query.',
      'Single-Row Subquery: Returns exactly one value (1 row, 1 column). Used with scalar comparison operators (=, <, >, <=, >=). E.g., WHERE salary > (SELECT AVG(salary) FROM employees).',
      'Multi-Row Subquery: Returns a list of values (multiple rows, 1 column). Must be evaluated with multi-row operators: IN, NOT IN, ANY, ALL.',
      'Correlated Subquery: An inner query that references columns from the outer query. It re-evaluates once for every candidate row processed by the outer query.',
      'Subqueries in the FROM Clause (Derived Tables): Treat the inner query output as a temporary in-memory table that you can join and query.'
    ],
    layman: {
      title: 'Nested Math Analogy:',
      text: 'Just like solving parentheses first in algebra: x = 5 * (3 + 2). The database executes the inner subquery inside the parentheses first, then uses that result to resolve the outer query.'
    },
    keyInsight: {
      title: 'Performance Warning',
      text: 'Correlated subqueries can be slow on large tables because they run N times for N rows. Often, rewriting a correlated subquery into an explicit JOIN achieves 10x-100x faster execution!'
    }
  },

  // ==========================================================================
  // SLIDE 19: IN AND EXISTS OPERATORS
  // ==========================================================================
  {
    id: 'db2-slide19',
    slideNum: 19,
    totalSlides: 24,
    type: 'versus',
    moduleTag: 'Subquery Operators',
    title: 'The IN vs. EXISTS Operators',
    topicTitle: 'Value Matching Lists vs Existence Checking',
    versusLeft: {
      title: 'The IN Operator',
      bullets: [
        'Compares a scalar value against an explicit list or single-column subquery.',
        'Evaluates: value IN (101, 102, 103).',
        'Fetches all inner query values into memory before matching.',
        'Dangerous with NULLs: If the inner subquery contains a NULL, NOT IN returns 0 rows (evaluates to UNKNOWN)!',
        'Syntax: WHERE customer_id IN (SELECT customer_id FROM orders)'
      ]
    },
    versusRight: {
      title: 'The EXISTS Operator',
      bullets: [
        'Tests for the existence of rows returned by a correlated subquery.',
        'Evaluates boolean TRUE or FALSE only; stops searching as soon as the first matching row is found (Early Exit optimization).',
        'Safe with NULL values because it checks row presence, not value equality.',
        'Extremely fast when the subquery column is properly indexed.',
        'Syntax: WHERE EXISTS (SELECT 1 FROM orders o WHERE o.cust_id = c.id)'
      ]
    },
    keyInsight: {
      title: 'Pro Tip: SELECT 1',
      text: 'In EXISTS subqueries, convention is to write SELECT 1 instead of SELECT * to remind developers that the engine ignores returned column values and tests existence only.'
    }
  },

  // ==========================================================================
  // SLIDE 20: SQL INJECTION VULNERABILITY
  // ==========================================================================
  {
    id: 'db2-slide20',
    slideNum: 20,
    totalSlides: 24,
    type: 'single_topic',
    moduleTag: 'Database Security',
    title: 'Anatomy of a SQL Injection Attack',
    topicTitle: 'How String Concatenation Hijacks Application Logic',
    bullets: [
      'The Root Cause: Treating untrusted user input as executable SQL code by directly concatenating strings in application scripts.',
      'The Classic Payload: Entering \' OR \'1\'=\'1 into a login form forces the WHERE clause to evaluate to TRUE for every single row in the users table.',
      'Authentication Bypass: The database returns the very first user record (typically user_id = 1, the Administrator), logging the attacker into the system without a valid password.',
      'Data Exfiltration & Destruction: Attackers can append UNION SELECT statements to steal credit cards, or inject DROP TABLE users; -- to obliterate databases.',
      'The Universal Solution: Prepared Statements (Parameterized Queries). Separate code from incoming data parameters permanently!'
    ],
    layman: {
      title: 'Bank Teller Analogy:',
      text: 'String concatenation is like a bank teller who accepts a deposit slip that says: "Deposit $10, and also please transfer the bank vault contents to my truck." A parameterized query puts the deposit slip into a sealed plastic envelope where only the dollar figure can be read!'
    },
    keyInsight: {
      title: 'OWASP Top 10 Sovereign Rule',
      text: 'Never, under any circumstances, use string concatenation or template literals (`SELECT ... ${input}`) to build SQL statements in production software.'
    }
  },

  // ==========================================================================
  // SLIDE 21: INTERACTIVE SQL INJECTION SHIELD
  // ==========================================================================
  {
    id: 'db2-slide21',
    slideNum: 21,
    totalSlides: 24,
    type: 'db_injection_shield',
    moduleTag: 'Interactive Studio',
    title: 'SQL Injection vs Parameterized Query Shield',
    topicTitle: 'Test Malicious Payloads Against Concatenation and Prepared Statements',
    bullets: [
      'Type custom strings or click preset attack buttons (\' OR \'1\'=\'1 and admin\' --).',
      'Watch how vulnerable dynamic SQL gets rewritten into an authentication bypass.',
      'Verify how Parameterized Prepared Statements treat the attack string strictly as literal characters, rendering the exploit completely harmless.'
    ]
  },

  // ==========================================================================
  // SLIDE 22: SCHEMA INDEXING & PERFORMANCE
  // ==========================================================================
  {
    id: 'db2-slide22',
    slideNum: 22,
    totalSlides: 24,
    type: 'single_topic',
    moduleTag: 'Optimization',
    title: 'Relational Database Indexing & B-Trees',
    topicTitle: 'From Full Table Scans to Logarithmic O(log N) Lookups',
    bullets: [
      'What is an Index? A specialized data structure (typically a balanced B-Tree) that maintains pointers to rows in sorted order.',
      'Full Table Scan (Sequential Scan): Without an index, the database must read every single record from disk—scanning 10,000,000 rows takes seconds or minutes.',
      'Index Seek: With an index on email, the database navigates the B-Tree in O(log N) time—finding 1 row out of 10,000,000 in less than 3 disk reads (sub-millisecond)!',
      'Automatic Indexes: Primary Keys and UNIQUE constraints are automatically indexed by the database management system.',
      'The Trade-off: Indexes accelerate SELECT queries, but slightly slow down INSERT, UPDATE, and DELETE operations because the B-Tree must be rebalanced on every write.'
    ],
    layman: {
      title: 'Library Analogy:',
      text: 'Finding a book in a library without an index means walking down every single aisle looking at every book spine. An index is the computer catalog that tells you: "Go to Shelf 4, Row B, Book 12".'
    },
    keyInsight: {
      title: 'Index All Foreign Keys!',
      text: 'Always create indexes on your Foreign Key columns! This prevents full table locks and massively accelerates JOIN operations.'
    }
  },

  // ==========================================================================
  // SLIDE 23: KNOWLEDGE CHECK
  // ==========================================================================
  {
    id: 'db2-slide23',
    slideNum: 23,
    totalSlides: 24,
    type: 'single_topic',
    moduleTag: 'Self-Assessment',
    title: 'Weekly Relational Architecture Knowledge Check',
    topicTitle: 'Verify Your Understanding of Core Relational Engineering',
    bullets: [
      'Q1: In an ERD, if a Department employs many Professors, on which table must the Foreign Key reside? (Answer: The Professor table, the "Many" side).',
      'Q2: What is the main difference between WHERE and HAVING? (Answer: WHERE filters individual rows before grouping; HAVING filters aggregated groups after grouping).',
      'Q3: Which ON DELETE action will cause all child records to be automatically purged when a parent record is deleted? (Answer: ON DELETE CASCADE).',
      'Q4: How does a Prepared Statement prevent SQL injection? (Answer: By compiling the query template first and treating input parameters strictly as inert literal data values).',
      'Q5: What type of join returns all rows from the left table even if no match exists on the right? (Answer: LEFT OUTER JOIN).'
    ],
    layman: {
      title: 'Study Tip:',
      text: 'If you can answer these 5 questions without looking at your notes, you have mastered the core fundamentals required for enterprise database engineering.'
    },
    keyInsight: {
      title: 'Ready for Assessment',
      text: 'Take the comprehensive 10-question evaluation quiz to earn your verified score!'
    }
  },

  // ==========================================================================
  // SLIDE 24: SUMMARY & CAPSTONE REVIEW
  // ==========================================================================
  {
    id: 'db2-slide24',
    slideNum: 24,
    totalSlides: 24,
    type: 'section_break',
    sectionNum: 'Week 2 Complete',
    title: 'Relational Operations & SQL Mastery Achieved',
    description: 'You have mastered ERD cardinality, foreign key cascade actions, domain constraints, SQL aggregations with GROUP BY and HAVING, multi-table joins, subqueries, and enterprise database security. Navigate to the Quiz to test your mastery!'
  }
];
