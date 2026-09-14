import { SlideData } from '../types/slide';

// 55 Comprehensive, College-Level Slide Objects for Fundamentals of Database
export const databaseSlidesData: SlideData[] = [
  // ==========================================================================
  // MODULE 1: INTRODUCTION TO DATABASES (SLIDES 1 - 5)
  // ==========================================================================
  {
    id: 'db-slide1',
    slideNum: 1,
    totalSlides: 55,
    type: 'cover',
    moduleTag: 'College Masterclass • Database Systems',
    title: 'Fundamentals of Database',
    subtitle: 'A modern, structured introduction to relational models, SQL query programming, schema design, normalization, transactions, and real-world architectures.',
    metadata: [
      { label: 'Level', val: 'Introductory to Intermediate' },
      { label: 'Prerequisites', val: 'Basic Computer Literacy' },
      { label: 'Includes', val: 'Interactive Simulators & SQL Console' },
      { label: 'Assessment', val: '10 Exercises & 10-Question Evaluation Quiz' }
    ]
  },
  {
    id: 'db-slide2',
    slideNum: 2,
    totalSlides: 55,
    type: 'single_topic',
    moduleTag: 'Module 1: Introduction to Databases',
    title: 'Course Learning Objectives',
    topicTitle: 'What You Will Master in This Subject',
    whatItDoes: "Equips students with foundational concepts, relational modeling techniques, SQL CRUD operations, and engineering discipline necessary to design robust production databases.",
    whatIsGoingOn: "Modern web, mobile, enterprise, and AI applications all rely on underlying database management systems to reliably persist, query, and secure transactional state.",
    discussionPrompt: {
      question: "Can an application exist without a database? What happens if your favorite messaging app forgets all your data when your phone restarts?",
      hint: "Distinguish between volatile RAM memory and durable non-volatile disk/SSD storage.",
      talkingPoints: [
        "In-memory data disappears when power is cut or an app closes.",
        "Databases provide ACID durability guarantees to ensure data survives server crashes.",
        "Databases scale to billions of records with indexed lookup times in milliseconds."
      ]
    },
    bullets: [
      '1. Distinguish between raw Data and processed Information in modern information systems.',
      '2. Understand the architecture of Database Management Systems (DBMS) vs Spreadsheets.',
      '3. Master the Relational Model: Entities, Attributes, Tables, Tuples, Domains, and Schema.',
      '4. Enforce Entity and Referential Integrity using Primary Keys, Foreign Keys, and Constraints.',
      '5. Construct Entity-Relationship Diagrams (ERD) and transform them into normalized schemas (1NF, 2NF, 3NF).',
      '6. Write production-ready SQL: DDL table definitions, DML data manipulation, DQL queries, and multi-table JOINs.',
      '7. Understand ACID transactions, SQL injection prevention, and parameterized queries.'
    ],
    layman: {
      title: 'Real-World Perspective',
      text: 'A computer without a database is like an office without a filing cabinet—everything you do on your desk vanishes into thin air the moment you turn off the lights at night.'
    },
    keyInsight: {
      title: 'Industry Baseline',
      text: 'Database proficiency is an essential requirement for software engineers, systems analysts, data scientists, and IT administrators.'
    }
  },
  {
    id: 'db-slide3',
    slideNum: 3,
    totalSlides: 55,
    type: 'comparison',
    moduleTag: 'Module 1: Introduction to Databases',
    title: 'Data vs. Information',
    topicTitle: 'The Transformation from Raw Facts to Actionable Knowledge',
    whatItDoes: "Differentiates raw unorganized facts (data) from structured, contextualized, and meaningful output (information) that drives human decisions.",
    whatIsGoingOn: "Databases store raw data points; database queries (SQL) filter, aggregate, calculate, and format this data into actionable information reports.",
    discussionPrompt: {
      question: "If a database contains the integer 39.5, is that data or information? How does adding context change it?",
      hint: "What if 39.5 is a student's fever in Celsius vs the price of a coffee in Pesos?",
      talkingPoints: [
        "Raw numbers lack semantic meaning without attributes and units.",
        "When labeled 'PatientBodyTemp = 39.5°C (High Fever Alert)', it becomes critical medical information.",
        "Databases supply the structure (schemas and types) that transforms data into meaning."
      ]
    },
    versusLeft: {
      title: 'Raw Data (The Input)',
      bullets: [
        'Unprocessed, unorganized, and isolated facts',
        'Lacks context and intentional meaning on its own',
        'Examples: 1001, 20, "BSIT", 1250.00, "2026-09-14"',
        'Cannot directly support decision-making without analysis'
      ]
    },
    versusRight: {
      title: 'Processed Information (The Output)',
      bullets: [
        'Data that has been filtered, grouped, and contextualized',
        'Provides answers to Who, What, Where, and How Many',
        'Example: "Student Juan Dela Cruz (ID 1001) enrolled in BSIT on September 14, 2026 with tuition paid ₱1,250.00"',
        'Empowers users and automated systems to take intelligent action'
      ]
    },
    keyInsight: {
      title: 'Core Equation',
      text: 'Data + Context + Processing (via SQL & DBMS) = Useful Information.'
    }
  },
  {
    id: 'db-slide4',
    slideNum: 4,
    totalSlides: 55,
    type: 'comparison',
    moduleTag: 'Module 1: Introduction to Databases',
    title: 'Database vs. Spreadsheet',
    topicTitle: 'Why Excel / Google Sheets Cannot Replace a Real RDBMS',
    whatItDoes: "Explains the technical differences between single-user spreadsheet software and multi-user transactional relational database management systems.",
    whatIsGoingOn: "Spreadsheets suffer from concurrency lockouts, file corruptions, lack of referential constraints, and inability to efficiently query millions of rows.",
    discussionPrompt: {
      question: "Why do startups often start tracking inventory on Google Sheets, but eventually crash into catastrophic bugs as orders scale?",
      hint: "What happens when 500 customers buy the last item at the exact same millisecond?",
      talkingPoints: [
        "Spreadsheets cannot enforce strict row-level transactional locks across simultaneous buyers.",
        "Spreadsheets allow someone to type 'Fifty' into a number column, breaking automated calculations.",
        "Relational databases enforce atomic transactions (ACID) and reject invalid data types."
      ]
    },
    versusLeft: {
      title: 'Spreadsheets (Excel / Sheets)',
      bullets: [
        'Designed for personal analysis, one-off calculations, and charts',
        'Weak data validation (text can accidentally be placed in number cells)',
        'Poor multi-user concurrency (conflicting edits cause file collisions)',
        'Performance slows down drastically past 100,000 rows',
        'No referential integrity (deleting a customer leaves orphan invoices)'
      ]
    },
    versusRight: {
      title: 'Relational DBMS (MySQL / PostgreSQL)',
      bullets: [
        'Built for millions of concurrent users writing data simultaneously',
        'Strict schema constraints (NOT NULL, CHECK, UNIQUE, FOREIGN KEY)',
        'Handles billions of rows with sub-millisecond B-Tree indexing',
        'Automated crash recovery, rollbacks, and transaction logs',
        'Robust role-based security and granular table access permissions'
      ]
    },
    keyInsight: {
      title: 'Engineering Rule',
      text: 'Use spreadsheets for ad-hoc human calculations and reporting; use databases for application backends and mission-critical transactions.'
    }
  },
  {
    id: 'db-slide5',
    slideNum: 5,
    totalSlides: 55,
    type: 'single_topic',
    moduleTag: 'Module 1: Introduction to Databases',
    title: 'The Database Ecosystem Architecture',
    topicTitle: 'How Users, Apps, DBMS, and Physical Storage Interact',
    whatItDoes: "Maps the complete request pipeline: User → Application UI → API Backend → DBMS Engine → Physical Database Disk Storage.",
    whatIsGoingOn: "End users never query raw database files directly. Web/mobile apps send parameterized queries through database drivers to the DBMS daemon.",
    discussionPrompt: {
      question: "Why should web browsers never connect directly to database servers without an API backend in between?",
      hint: "Think about database passwords, authentication, and malicious queries executed from browser DevTools.",
      talkingPoints: [
        "Exposing database credentials in client-side code gives attackers full administrative access.",
        "The application backend verifies session identity, business rules, and sanitizes input before talking to the DBMS.",
        "The DBMS daemon resides securely behind firewalls on private network subnets."
      ]
    },
    bullets: [
      '1. End User: Interacts with user-friendly web forms, mobile apps, or kiosks (e.g. typing a search query or clicking "Enroll").',
      '2. Application Layer: Node.js, PHP/Laravel, Python, or Java service that validates input, verifies user permissions, and prepares SQL statements.',
      '3. DBMS Software (Database Management System): The server process (e.g. MySQL, PostgreSQL, SQLite) that compiles SQL, plans query execution, and enforces constraints.',
      '4. Physical Database: Organized collection of structured data files, indexes, and write-ahead logs stored on non-volatile SSD or cloud disks.'
    ],
    layman: {
      title: 'Restaurant Kitchen Analogy',
      text: 'The Customer is the User, the Waiter taking orders is the Application Backend, the Kitchen Manager who enforces rules and organizes chefs is the DBMS, and the Ingredients in the Pantry are the Database files.'
    },
    keyInsight: {
      title: 'The Golden Architectural Rule',
      text: 'User → Application → DBMS → Database. Each layer has strict boundaries to maintain security, performance, and integrity.'
    }
  },

  // ==========================================================================
  // MODULE 2: DATABASE CONCEPTS & TERMINOLOGY (SLIDES 6 - 9)
  // ==========================================================================
  {
    id: 'db-slide6',
    slideNum: 6,
    totalSlides: 55,
    type: 'single_topic',
    moduleTag: 'Module 2: Concepts & Terminology',
    title: 'Core Terminology: Entities, Tables, Rows, & Columns',
    topicTitle: 'The Fundamental Building Blocks of Relational Storage',
    whatItDoes: "Breaks down relational terminology with definitions, real-world analogies, database examples, and table visuals.",
    whatIsGoingOn: "A relational database represents the real world as structured collections of related entities. Each entity becomes a physical table.",
    discussionPrompt: {
      question: "In a college campus, what are the distinct Entities? What attributes would describe an Instructor vs a Classroom?",
      hint: "Entities are nouns (people, places, things, events). Attributes are their characteristics.",
      talkingPoints: [
        "Entities: Student, Instructor, Course, Classroom, Department, Enrollment.",
        "Instructor attributes: InstructorID, Name, Email, DepartmentID, HireDate.",
        "Classroom attributes: RoomNumber, Building, SeatingCapacity, HasProjector."
      ]
    },
    bullets: [
      'Entity: A real-world person, place, object, or event about which data is stored (e.g. STUDENT, PRODUCT, ORDER).',
      'Table (Relation): The two-dimensional grid of rows and columns storing instances of an entity.',
      'Row (Record / Tuple): A single, specific instance of an entity (e.g. Juan Dela Cruz, Student ID 1001).',
      'Column (Field / Attribute): A named property or characteristic shared across all records (e.g. age, email, price).',
      'Domain: The valid set of allowable values for an attribute (e.g. age must be an integer between 0 and 150).'
    ],
    layman: {
      title: 'Filing Cabinet Analogy',
      text: 'The filing cabinet drawer is the Database. A folder labeled "Students" is the Table. Each paper form inside is a Row (Record). Each blank line on the form to fill out (Name, Date of Birth) is a Column (Attribute).'
    },
    keyInsight: {
      title: 'Formal vs Practical Terms',
      text: 'Relation = Table | Tuple = Row / Record | Attribute = Column / Field. Both vocabularies are standard in computer science exams and industry jobs.'
    }
  },
  {
    id: 'db-slide7',
    slideNum: 7,
    totalSlides: 55,
    type: 'single_topic',
    moduleTag: 'Module 2: Concepts & Terminology',
    title: 'Primary Keys, Foreign Keys, & Composite Keys',
    topicTitle: 'How Relational Databases Guarantee Uniqueness and Connect Tables',
    whatItDoes: "Defines and demonstrates Primary Keys, Candidate Keys, Composite Keys, and Foreign Keys with practical examples.",
    whatIsGoingOn: "Keys are special columns that enforce mathematical uniqueness and establish referential relationships between tables.",
    discussionPrompt: {
      question: "Why can't we use Student Name as a Primary Key? What happens when a university enrolls two students named 'Juan Dela Cruz'?",
      hint: "Names are not unique and people can legally change their names.",
      talkingPoints: [
        "Duplicate names cause fatal identity collisions (grades assigned to wrong student).",
        "Primary Keys must be immutable, unique, and non-null (e.g., student_id = 1001).",
        "Natural keys (SSN/email) change; synthetic surrogate keys (auto-increment integer/UUID) remain stable."
      ]
    },
    bullets: [
      'Primary Key (PK): A column (or group of columns) that uniquely identifies every single row in a table. It cannot be NULL and cannot have duplicates.',
      'Candidate Key: Any attribute (or combination of attributes) that qualifies to be a primary key (e.g. student_id, student_email).',
      'Composite Key: A primary key composed of two or more columns combined together to guarantee uniqueness (e.g. student_id + course_id in enrollments).',
      'Foreign Key (FK): A column in one table that references and points to the Primary Key of another table, creating a relational link.',
      'NULL: Represents the total absence of a value (unknown or not applicable), not zero or empty string.'
    ],
    layman: {
      title: 'National ID Analogy',
      text: 'Your National ID number is your Primary Key (it identifies you uniquely even if someone shares your name). When your ID is written on a bank account or hospital record, it serves as a Foreign Key linking that record back to you.'
    },
    keyInsight: {
      title: 'Integrity Rule',
      text: 'Every relational table MUST have a well-defined Primary Key. Without a primary key, you cannot reliably update or delete a specific record.'
    }
  },
  {
    id: 'db-slide8',
    slideNum: 8,
    totalSlides: 55,
    type: 'single_topic',
    moduleTag: 'Module 2: Concepts & Terminology',
    title: 'Schema vs. Database Instance',
    topicTitle: 'The Blueprint vs The Data Living Inside It',
    whatItDoes: "Contrasts the architectural schema definition (DDL structure) from the runtime state and row data (database instance).",
    whatIsGoingOn: "The schema is designed once and rarely changes; the instance changes constantly as users insert, edit, and delete records.",
    discussionPrompt: {
      question: "If an architect draws the blueprint of a building, and tenants move their furniture in, which is the schema and which is the instance?",
      hint: "The blueprint defines the walls and rooms. The furniture represents the transient data.",
      talkingPoints: [
        "Schema: Blueprint (Table names, column types, constraints, relationships).",
        "Instance: The actual data inside the tables at any exact given moment.",
        "Modifying a schema requires ALTER TABLE; modifying an instance uses INSERT/UPDATE/DELETE."
      ]
    },
    bullets: [
      'Database Schema: The structural blueprint and formal design of the database (table names, column data types, keys, and constraints).',
      'Database Instance: The actual collection of data residing in the database at a specific snapshot in time.',
      'Schema Invariance: Schemas are designed upfront and only changed through deliberate schema migration scripts.',
      'Instance Dynamism: Instances change thousands of times per second as customers make purchases, students enroll, and logs are written.'
    ],
    layman: {
      title: 'Empty Ice Cube Tray Analogy',
      text: 'The plastic ice cube tray with its shaped molds is the Schema. The frozen water cubes filling the slots are the Database Instance. You can melt and refill the ice (data) without altering the shape of the tray.'
    },
    keyInsight: {
      title: 'Database Lifecycle',
      text: 'Database designers focus on creating clean schemas. Applications and end users spend their time querying and modifying the database instance.'
    }
  },
  {
    id: 'db-slide9',
    slideNum: 9,
    totalSlides: 55,
    type: 'single_topic',
    moduleTag: 'Module 2: Concepts & Terminology',
    title: 'Visual Proof: Primary Key Duplicate Violation',
    topicTitle: 'Interactive Sandbox: What Happens When Integrity Fails?',
    whatItDoes: "Allows students to visually test what happens when duplicate Primary Keys or invalid Foreign Keys are inserted.",
    whatIsGoingOn: "The RDBMS storage engine maintains an indexed B-Tree of all primary keys and halts any query attempting to insert a duplicate key.",
    discussionPrompt: {
      question: "What would happen if a bank allowed two customers to open an account with the exact same account number 1001?",
      hint: "Where would deposited funds go?",
      talkingPoints: [
        "Money deposited by person A might show up in person B's balance.",
        "Primary key constraints exist at the database engine level so software bugs cannot corrupt data."
      ]
    },
    bullets: [
      'Interactive Laboratory: Test primary key collisions, foreign key rejections, NOT NULL checks, and CHECK constraints.',
      'Click the buttons in the interactive studio to inspect the exact SQL error messages returned by standard SQL engines.',
      'Observe how the DBMS protects database integrity automatically.'
    ],
    layman: {
      title: 'Security Gate',
      text: 'The DBMS is like a strict security guard checking passport numbers. If two people arrive with passport #1001, the second person is detained immediately.'
    }
  },

  // ==========================================================================
  // MODULE 3: TYPES OF DATABASES (SLIDES 10 - 13)
  // ==========================================================================
  {
    id: 'db-slide10',
    slideNum: 10,
    totalSlides: 55,
    type: 'single_topic',
    moduleTag: 'Module 3: Types of Databases',
    title: 'Relational vs. NoSQL Databases',
    topicTitle: 'Choosing the Right Tool for Modern Application Architecture',
    whatItDoes: "Compares structured relational databases with flexible NoSQL databases across data models, schema strictness, and scalability.",
    whatIsGoingOn: "Relational systems prioritize ACID consistency and relational joins; NoSQL systems prioritize flexible schema evolution and horizontal distribution.",
    discussionPrompt: {
      question: "Would you store bank financial balances in a schema-less NoSQL database or an ACID-compliant Relational database? Why?",
      hint: "Think about strict transaction guarantees and money disappearing during partial updates.",
      talkingPoints: [
        "Financial, school, hospital, and enterprise ledgers require strict relational ACID guarantees.",
        "Social media feeds, IoT telemetry, product catalog documents, and session caches often benefit from NoSQL databases."
      ]
    },
    bullets: [
      'Relational (RDBMS): Tables with rows and columns, strict predefined schemas, SQL querying, and relational JOIN operations.',
      'NoSQL (Not Only SQL): Non-tabular stores designed for unstructured, semi-structured, rapidly evolving, or massive horizontally partitioned data.',
      'Document Stores (MongoDB): Stores JSON/BSON documents with dynamic fields.',
      'Key-Value Stores (Redis): Blazing-fast in-memory lookup by key (caches, sessions, leaderboard rankings).',
      'Graph Stores (Neo4j): Optimized for traversing deep interconnected networks (social connections, fraud rings).',
      'Column-Family Stores (Cassandra): Designed for heavy continuous writes across distributed clusters (IoT sensor logs).'
    ],
    layman: {
      title: 'Toolbox Analogy',
      text: 'Relational databases are like precision mechanical blueprints; NoSQL document databases are like flexible digital notebooks where each page can have a slightly different format.'
    },
    keyInsight: {
      title: 'Modern Reality',
      text: 'Most enterprise architectures use both: PostgreSQL or MySQL for transactions and billing, paired with Redis for caching and Elasticsearch for text search.'
    }
  },
  {
    id: 'db-slide11',
    slideNum: 11,
    totalSlides: 55,
    type: 'single_topic',
    moduleTag: 'Module 3: Types of Databases',
    title: 'Popular Relational Database Engines',
    topicTitle: 'The Industry Giants: MySQL, PostgreSQL, SQLite, & SQL Server',
    whatItDoes: "Examines the most popular open-source and commercial RDBMS engines encountered by software engineers.",
    whatIsGoingOn: "While all support standard ANSI SQL, each engine provides distinct performance profiles, licensing models, and advanced features.",
    discussionPrompt: {
      question: "Why is SQLite installed on every single smartphone, browser, and smart TV in the world?",
      hint: "Does SQLite need a server running in the background?",
      talkingPoints: [
        "SQLite is serverless and self-contained; it reads and writes directly to a single disk file.",
        "PostgreSQL and MySQL run as dedicated background server daemons handling thousands of concurrent network connections."
      ]
    },
    bullets: [
      'MySQL & MariaDB: The world\'s most popular open-source web database, powering WordPress, Facebook, and standard web hosting.',
      'PostgreSQL: The "most advanced open-source relational database", renowned for strict SQL standards, JSONB support, and GIS spatial data.',
      'SQLite: Zero-configuration, serverless, single-file database engine embedded directly into mobile apps, local tools, and desktop software.',
      'Microsoft SQL Server & Oracle DB: High-performance enterprise corporate databases with extensive enterprise support, clustering, and BI tooling.'
    ],
    keyInsight: {
      title: 'Which should you learn first?',
      text: 'Learn ANSI SQL on MySQL or PostgreSQL. 90% of the SQL syntax you learn carries over identically to all relational databases!'
    }
  },
  {
    id: 'db-slide12',
    slideNum: 12,
    totalSlides: 55,
    type: 'single_topic',
    moduleTag: 'Module 3: Types of Databases',
    title: 'Comparison Matrix: Database Categories',
    topicTitle: 'Type, Structure, Examples, and Best Use Cases',
    whatItDoes: "Provides an easy-to-reference comparison matrix breaking down database categories for quick architectural decision making.",
    whatIsGoingOn: "Architects match data access patterns (read-heavy, write-heavy, deep relations, or caching) to the ideal database engine.",
    bullets: [
      'Relational (RDBMS): Tables (Rows/Columns) • MySQL, PostgreSQL, SQLite • E-commerce, School Portals, Banking, Inventory.',
      'Document Store: JSON / BSON Documents • MongoDB, CouchDB • Content Management, User Profiles, Catalogs with varied attributes.',
      'Key-Value: Key-Value Hash Pairs • Redis, Memcached • Session tokens, live user carts, leaderboard rankings, API rate limiting.',
      'Graph Database: Nodes and Edges (Relationships) • Neo4j, Amazon Neptune • Social graphs, recommendation engines, fraud detection networks.',
      'Wide-Column: Column Families • Apache Cassandra, ScyllaDB • Real-time sensor telemetry, time-series metrics, massive distributed messaging.'
    ],
    layman: {
      title: 'Polyglot Persistence',
      text: 'Modern companies do not choose one hammer for all nails. They store the invoice in PostgreSQL, cache the product page in Redis, and index search keywords in Elasticsearch.'
    },
    keyInsight: {
      title: 'Exam Key Point',
      text: 'Relational databases remain the default foundation for almost all business applications because relational schemas prevent data corruption.'
    }
  },

  // ==========================================================================
  // MODULE 4: DATABASE MANAGEMENT SYSTEM (DBMS) (SLIDES 13 - 15)
  // ==========================================================================
  {
    id: 'db-slide13',
    slideNum: 13,
    totalSlides: 55,
    type: 'single_topic',
    moduleTag: 'Module 4: The DBMS Engine',
    title: 'What Does a DBMS Actually Do?',
    topicTitle: 'The Engine Powering Modern Data Operations',
    whatItDoes: "Details the core responsibilities of a DBMS: storage, retrieval, concurrency control, security, backup, and transaction management.",
    whatIsGoingOn: "A DBMS is complex systems software that manages disk I/O, allocates buffer memory caches, parses SQL queries, and coordinates atomic operations.",
    discussionPrompt: {
      question: "If two airline passengers try to reserve seat 14A at the exact same second, how does the DBMS prevent both tickets from being sold?",
      hint: "Think about concurrency control and row-level locks.",
      talkingPoints: [
        "The DBMS uses row-level locking or optimistic concurrency checks.",
        "The first transaction secures the lock, confirms the seat, and commits.",
        "The second transaction detects the lock, waits, and receives an error that seat 14A is taken."
      ]
    },
    bullets: [
      'Data Storage & Management: Efficiently organizes bytes into fixed-size disk pages (typically 8KB-16KB) with B-Tree indexes for lightning-fast retrieval.',
      'Data Retrieval (Query Processing): Compiles declarative SQL statements into optimized low-level execution plans.',
      'Concurrency Control: Ensures multiple simultaneous users can read and write without corrupting data or causing race conditions.',
      'Data Security & Authorization: Authenticates users and enforces granular permissions (e.g. read-only access for staff, full access for admins).',
      'Backup & Automated Recovery: Maintains Write-Ahead Logs (WAL) to restore data to a consistent state following an unexpected power failure.'
    ],
    keyInsight: {
      title: 'Definition to Remember',
      text: 'A Database is the physical container of organized data. A DBMS is the software engine that controls access, manages storage, and executes queries.'
    }
  },
  {
    id: 'db-slide14',
    slideNum: 14,
    totalSlides: 55,
    type: 'single_topic',
    moduleTag: 'Module 4: The DBMS Engine',
    title: 'Step-by-Step Query Execution Pipeline',
    topicTitle: 'What Happens When You Execute a SQL Query?',
    whatItDoes: "Traces the complete lifecycle of a query from the moment a user clicks 'Search' to the rendered result table.",
    whatIsGoingOn: "SQL is declarative (you state WHAT data you want, not HOW to retrieve it). The DBMS optimizer determines the most efficient algorithm to get it.",
    bullets: [
      'Step 1 (Client Request): User searches for "BSIT Students" in the application UI. The web app sends: SELECT * FROM students WHERE program = \'BSIT\';',
      'Step 2 (Parsing & Syntax Check): DBMS Parser validates the SQL syntax and verifies that the table "students" and column "program" actually exist in the schema.',
      'Step 3 (Query Optimization): Query Optimizer analyzes table statistics, checks available indexes, and builds the fastest execution plan (Index Scan vs Full Table Scan).',
      'Step 4 (Execution & Buffer Cache): Storage Engine checks RAM buffer pool for pages; if not in memory, it reads the data blocks from disk/SSD.',
      'Step 5 (Result Delivery): DBMS formats matching records into tabular result sets and returns them over the network connection to the application.'
    ],
    layman: {
      title: 'GPS Navigation Analogy',
      text: 'You tell Google Maps "Take me to the National Museum" (declarative query). You do not manually program every turn. The GPS calculates traffic, road closures, and gives you the optimal route (Query Optimizer).'
    },
    keyInsight: {
      title: 'Why Indexes Matter',
      text: 'Without an index, the DBMS must perform a Full Table Scan—checking every single record from row 1 to row 10,000,000. With an index, it locates the record in 3-4 B-Tree jumps.'
    }
  },

  // ==========================================================================
  // MODULE 5: RELATIONAL DATABASE MODEL (SLIDES 15 - 18)
  // ==========================================================================
  {
    id: 'db-slide15',
    slideNum: 15,
    totalSlides: 55,
    type: 'single_topic',
    moduleTag: 'Module 5: Relational Model',
    title: 'The Relational Model: Inventory Management Case',
    topicTitle: 'Modeling Real-World Business Systems into Connected Tables',
    whatItDoes: "Introduces realistic relational modeling using a College Inventory Management System (Products, Categories, Suppliers).",
    whatIsGoingOn: "Instead of duplicating supplier phone numbers and category names in every product row, data is organized into three separate related tables.",
    discussionPrompt: {
      question: "If a supplier changes their contact phone number, how many rows must you update in a normalized relational model versus an unorganized spreadsheet?",
      hint: "Look at the SupplierID link.",
      talkingPoints: [
        "In a single flat spreadsheet, you might have to edit 10,000 product rows.",
        "In a relational model, you update exactly ONE row in the SUPPLIER table, and all products reflect it instantly."
      ]
    },
    bullets: [
      'PRODUCT Table: Stores ProductID (PK), ProductName, CategoryID (FK), SupplierID (FK), Price, and StockQuantity.',
      'CATEGORY Table: Stores CategoryID (PK) and CategoryName (e.g., Electronics, Stationery, Furniture).',
      'SUPPLIER Table: Stores SupplierID (PK), SupplierName, ContactEmail, and PhoneNumber.',
      'Relational Links: CategoryID and SupplierID in the PRODUCT table act as Foreign Keys pointing to the parent tables.'
    ],
    layman: {
      title: 'Single Source of Truth',
      text: 'A relational model ensures every fact is recorded in exactly one place. If a supplier relocates, you update their address once, and every product they supply automatically reflects the change.'
    }
  },
  {
    id: 'db-slide16',
    slideNum: 16,
    totalSlides: 55,
    type: 'single_topic',
    moduleTag: 'Module 5: Relational Model',
    title: 'Interactive ERD Schema Explorer',
    topicTitle: 'Visualizing Schema Entities, Attributes, and Relationships',
    whatItDoes: "Allows students to interactively switch between the College Enrollment System and College Inventory System schemas.",
    whatIsGoingOn: "Entity-Relationship models define the logical structure before physical database tables are created with SQL DDL.",
    bullets: [
      'Interactive Explorer: Click through entity cards to inspect Primary Keys (PK), Foreign Keys (FK), and attribute data types.',
      'Switch between the Enrollment System (Student, Course, Enrollment) and the Inventory System (Product, Category, Supplier).',
      'Examine how Foreign Keys form the connective tissue of relational databases.'
    ]
  },

  // ==========================================================================
  // MODULE 6: PRIMARY & FOREIGN KEYS (SLIDES 17 - 20)
  // ==========================================================================
  {
    id: 'db-slide17',
    slideNum: 17,
    totalSlides: 55,
    type: 'code',
    moduleTag: 'Module 6: Keys & Integrity',
    title: 'Defining Primary & Foreign Keys in SQL',
    topicTitle: 'Enforcing Referential Integrity at the Database Level',
    whatItDoes: "Demonstrates standard SQL syntax for creating parent and child tables with FOREIGN KEY constraints.",
    whatIsGoingOn: "The FOREIGN KEY REFERENCES clause instructs the database engine to validate incoming foreign values against the parent table.",
    code: `-- 1. Create Parent Table (Students)
CREATE TABLE students (
    student_id INT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    age INT CHECK (age >= 16)
);

-- 2. Create Child Table (Enrollments) referencing Students
CREATE TABLE enrollments (
    enrollment_id INT PRIMARY KEY,
    student_id INT NOT NULL,
    course_code VARCHAR(20) NOT NULL,
    enrollment_date DATE DEFAULT CURRENT_DATE,
    CONSTRAINT fk_student_enrollment
        FOREIGN KEY (student_id)
        REFERENCES students(student_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);`,
    bullets: [
      'PRIMARY KEY: Guarantees every student has a non-null, unique integer identifier.',
      'FOREIGN KEY (student_id) REFERENCES students(student_id): Enforces referential integrity.',
      'ON DELETE CASCADE: If a student record is deleted, all their associated enrollments are automatically cleaned up.',
      'ON DELETE RESTRICT (Default): Prevents deleting a student if they have existing enrollment records.'
    ],
    keyInsight: {
      title: 'Crucial Design Choice',
      text: 'Use ON DELETE RESTRICT for critical financial and academic records to prevent accidental deletion of historical data!'
    }
  },
  {
    id: 'db-slide18',
    slideNum: 18,
    totalSlides: 55,
    type: 'single_topic',
    moduleTag: 'Module 6: Keys & Integrity',
    title: 'What Happens During Key Violations?',
    topicTitle: 'Visualizing Valid vs Invalid Database Operations',
    whatItDoes: "Explains what the database does when valid records are inserted versus when foreign key or duplicate key violations occur.",
    whatIsGoingOn: "The database engine evaluates constraints before writing data to disk. If any constraint fails, the transaction is immediately aborted.",
    discussionPrompt: {
      question: "If an enrollment row has student_id = 9999, but no student with ID 9999 exists, what is this invalid row called?",
      hint: "It refers to an 'orphan' record.",
      talkingPoints: [
        "This is an 'Orphan Record' and represents a referential integrity breakdown.",
        "Foreign key constraints make it physically impossible to insert orphan records."
      ]
    },
    bullets: [
      'Valid Insert: INSERT INTO enrollments VALUES (1, 1001, \'DB101\'); -> Succeeds because Student 1001 exists in the parent students table.',
      'Invalid Insert (Orphan): INSERT INTO enrollments VALUES (2, 9999, \'DB101\'); -> Fails with ERROR 1452: Foreign key constraint fails.',
      'Duplicate PK: INSERT INTO students VALUES (1001, \'Carlos\', \'Cruz\', 20); -> Fails with ERROR 1062: Duplicate entry \'1001\' for key PRIMARY.',
      'Cascade Delete: Deleting Student 1001 automatically removes all enrollment rows where student_id = 1001.'
    ],
    keyInsight: {
      title: 'Database Rule #1',
      text: 'Never rely solely on frontend Javascript or backend code to validate relationships. Always enforce Foreign Keys inside the database engine itself!'
    }
  },

  // ==========================================================================
  // MODULE 7: DATABASE RELATIONSHIPS (SLIDES 19 - 22)
  // ==========================================================================
  {
    id: 'db-slide19',
    slideNum: 19,
    totalSlides: 55,
    type: 'single_topic',
    moduleTag: 'Module 7: Database Relationships',
    title: 'The Three Types of Database Relationships',
    topicTitle: 'One-to-One, One-to-Many, and Many-to-Many',
    whatItDoes: "Classifies and explains the cardinalities of relational database models with clear real-world examples.",
    whatIsGoingOn: "Cardinality expresses the numerical relationship between entity occurrences: 1:1, 1:N, or M:N.",
    bullets: [
      'One-to-One (1:1): Each record in Table A relates to exactly one record in Table B (e.g. Student <-> StudentProfile or Citizen <-> Passport).',
      'One-to-Many (1:N): The most common relationship. One record in Table A relates to multiple records in Table B (e.g. One Department has Many Students, One Category has Many Products).',
      'Many-to-Many (M:N): Multiple records in Table A relate to multiple records in Table B (e.g. One Student enrolls in Many Courses, and One Course contains Many Students).'
    ],
    layman: {
      title: 'Family Analogy',
      text: 'A Biological Mother and her Children is a One-to-Many relationship (one mother, multiple children). Siblings sharing books is Many-to-Many (each student reads multiple books; each book is read by multiple students).'
    },
    keyInsight: {
      title: 'The Relational Secret',
      text: 'Relational databases cannot directly link Many-to-Many relationships. They must always be decomposed into two One-to-Many relationships via a junction table!'
    }
  },
  {
    id: 'db-slide20',
    slideNum: 20,
    totalSlides: 55,
    type: 'single_topic',
    moduleTag: 'Module 7: Database Relationships',
    title: 'The Associative / Junction Table',
    topicTitle: 'How to Properly Implement Many-to-Many Relationships',
    whatItDoes: "Shows why Many-to-Many relationships require a middle junction table (also called an associative or bridge table).",
    whatIsGoingOn: "A junction table contains two foreign keys pointing to the primary keys of both participating entities, turning M:N into two 1:N relationships.",
    discussionPrompt: {
      question: "If we tried to store multiple CourseIDs directly inside the Student table, what problems would occur?",
      hint: "How would you search for students in DB101 if the cell contains 'DB101, WD101, NW101'?",
      talkingPoints: [
        "String matching with commas is slow and prone to formatting errors.",
        "Violates First Normal Form (1NF) requiring atomic values.",
        "Updating or dropping a course becomes a complex string manipulation nightmare."
      ]
    },
    bullets: [
      'Problem: Students can take many courses. Courses can have many students. Storing comma-separated lists breaks relational math.',
      'Solution: Create a third table called ENROLLMENT (the Junction Table).',
      'Structure: ENROLLMENT contains enrollment_id (PK), student_id (FK), course_id (FK), and relationship-specific attributes (semester, grade).',
      'Result: STUDENT (1) -> (N) ENROLLMENT (N) <- (1) COURSE.'
    ],
    layman: {
      title: 'College Registrar Class List',
      text: 'Instead of writing every course inside your student handbook, the registrar keeps a registration slip (the enrollment table) recording who is enrolled in which subject.'
    }
  },

  // ==========================================================================
  // MODULE 8: ENTITY-RELATIONSHIP DIAGRAMS (ERD) (SLIDES 21 - 24)
  // ==========================================================================
  {
    id: 'db-slide21',
    slideNum: 21,
    totalSlides: 55,
    type: 'single_topic',
    moduleTag: 'Module 8: ERD Modeling',
    title: 'Entity-Relationship Diagrams (ERD)',
    topicTitle: 'Translating Real-World Requirements into Visual Schemas',
    whatItDoes: "Introduces ERD visual modeling: Entities (rectangles), Attributes (ovals/lists), Relationships (diamonds/connectors), and Cardinalities.",
    whatIsGoingOn: "Before writing a single line of SQL, software architects create an ERD to gain consensus with stakeholders and prevent expensive structural rewrites.",
    bullets: [
      'Entity: An identifiable concept or physical noun (e.g. STUDENT, BOOK, INVOICE).',
      'Attribute: A piece of information describing the entity (e.g. title, publication_year, price).',
      'Cardinality: Defines the minimum and maximum relationships (0..1, 1..1, 0..*, 1..* using Crow\'s Foot notation).',
      'The 6-Step Workflow: Requirements -> Identify Entities -> Identify Attributes -> Determine Primary Keys -> Establish Relationships & Cardinality -> Draw ERD.'
    ],
    layman: {
      title: 'Architectural Blueprint',
      text: 'You would never start laying concrete and building walls for a house without a blueprint. An ERD is the architectural blueprint for your software data.'
    }
  },
  {
    id: 'db-slide22',
    slideNum: 22,
    totalSlides: 55,
    type: 'single_topic',
    moduleTag: 'Module 8: ERD Modeling',
    title: 'Three Real-World ERD Case Studies',
    topicTitle: 'Enrollment System, Library System, and Inventory System',
    whatItDoes: "Provides three complete conceptual ERD breakdowns that students will build and query throughout the course.",
    whatIsGoingOn: "Each scenario demonstrates how real-world business constraints translate directly into relational foreign key mappings.",
    bullets: [
      'Case 1: Student Enrollment System -> STUDENT (1:N) ENROLLMENT (N:1) COURSE.',
      'Case 2: University Library System -> MEMBER (1:N) LOAN (N:1) BOOK_COPY (N:1) BOOK_TITLE.',
      'Case 3: College Inventory System -> SUPPLIER (1:N) PRODUCT (N:1) CATEGORY, plus ORDER (1:N) ORDER_ITEM (N:1) PRODUCT.'
    ],
    keyInsight: {
      title: 'Pattern Recognition',
      text: 'Notice that every business domain uses the exact same pattern: Entities linked through associative junction tables to track events (enrollments, loans, orders).'
    }
  },

  // ==========================================================================
  // MODULE 9: DATABASE NORMALIZATION (SLIDES 23 - 27)
  // ==========================================================================
  {
    id: 'db-slide23',
    slideNum: 23,
    totalSlides: 55,
    type: 'single_topic',
    moduleTag: 'Module 9: Normalization',
    title: 'Why Normalization is Essential',
    topicTitle: 'Eliminating Redundancy and Dangerous Data Anomalies',
    whatItDoes: "Explains the purpose of normalization and introduces the three deadly data anomalies: Insertion, Update, and Deletion.",
    whatIsGoingOn: "Normalization organizes tables to reduce data redundancy and eliminate anomalies without losing any information.",
    discussionPrompt: {
      question: "What happens if a professor leaves the university, and their contact info is only recorded in their enrolled students' rows? If we delete those students, what happens?",
      hint: "Think about Deletion Anomaly.",
      talkingPoints: [
        "Deleting the students inadvertently deletes all records of the professor from the university system!",
        "In a normalized database, the professor lives in an INSTRUCTOR table and remains intact even if no students are currently enrolled."
      ]
    },
    bullets: [
      'Insertion Anomaly: Inability to record certain facts without artificially creating dummy records (e.g. cannot add a new course until a student enrolls in it).',
      'Update Anomaly: Redundant data stored in multiple places means editing a course name requires updating thousands of rows; missing one creates inconsistent data.',
      'Deletion Anomaly: Deleting one piece of data causes unintentional loss of completely unrelated critical facts.',
      'The Solution: Progressively normalize tables through First (1NF), Second (2NF), and Third (3NF) Normal Forms.'
    ],
    layman: {
      title: 'Organizing a Messy Closet',
      text: 'Unnormalized data is like throwing clothes, tools, and dishes into one giant drawer. Normalization is putting shirts in the wardrobe, tools in the shed, and dishes in the cupboard with neat labels.'
    }
  },
  {
    id: 'db-slide24',
    slideNum: 24,
    totalSlides: 55,
    type: 'single_topic',
    moduleTag: 'Module 9: Normalization',
    title: 'First Normal Form (1NF): Atomic Values',
    topicTitle: 'Every Cell Must Contain Exactly One Indivisible Value',
    whatItDoes: "Defines 1NF requirements and visually demonstrates splitting multi-valued repeating groups into single atomic rows.",
    whatIsGoingOn: "Relational algebra relies on atomic values. Storing multiple comma-separated items inside a single cell violates 1NF.",
    bullets: [
      '1NF Rule 1: Every column must contain atomic (indivisible) single values. No lists, arrays, or comma-separated values.',
      '1NF Rule 2: There must be no repeating groups or multiple columns storing the same data (e.g. Phone1, Phone2, Phone3).',
      '1NF Rule 3: Each row must be uniquely identifiable via a Primary Key or Composite Key.',
      'Example Transformation: A row with Courses = "DB101, WD101" is split into two distinct rows: (1001, DB101) and (1001, WD101).'
    ],
    keyInsight: {
      title: '1NF Memory Aid',
      text: '1NF = Atomicity! One cell = one single value. No comma-separated lists!'
    }
  },
  {
    id: 'db-slide25',
    slideNum: 25,
    totalSlides: 55,
    type: 'single_topic',
    moduleTag: 'Module 9: Normalization',
    title: 'Second Normal Form (2NF): No Partial Dependencies',
    topicTitle: 'Every Non-Key Column Must Depend on the Whole Primary Key',
    whatItDoes: "Explains partial functional dependencies and how 2NF splits composite-key tables to achieve clean isolation.",
    whatIsGoingOn: "2NF only applies to tables with composite primary keys. If an attribute depends on only PART of the composite key, it must be extracted into its own table.",
    bullets: [
      '2NF Requirement: Must already be in 1NF.',
      '2NF Rule: Remove Partial Functional Dependencies. Every non-key column must depend on the FULL composite primary key, not just a part of it.',
      'Example Violation: In Table (StudentID, CourseID, StudentName, CourseTitle, Grade), StudentName depends ONLY on StudentID, not CourseID!',
      'Solution: Extract STUDENT (StudentID, StudentName), COURSE (CourseID, CourseTitle), and leave ENROLLMENT (StudentID, CourseID, Grade).'
    ],
    keyInsight: {
      title: '2NF Memory Aid',
      text: '2NF = No Partial Dependencies! The attribute must depend on the WHOLE key, not just part of it.'
    }
  },
  {
    id: 'db-slide26',
    slideNum: 26,
    totalSlides: 55,
    type: 'single_topic',
    moduleTag: 'Module 9: Normalization',
    title: 'Third Normal Form (3NF): No Transitive Dependencies',
    topicTitle: 'Non-Key Columns Must Depend ONLY on the Primary Key',
    whatItDoes: "Defines transitive functional dependencies (A -> B -> C) and shows how 3NF isolates secondary lookups into parent tables.",
    whatIsGoingOn: "If Column C depends on Column B, and Column B depends on Primary Key A, then C has a transitive dependency on A.",
    bullets: [
      '3NF Requirement: Must already be in 2NF.',
      '3NF Rule: Remove Transitive Dependencies (non-key columns depending on other non-key columns).',
      'Example Violation: In Table (StudentID, StudentName, AdvisorID, AdvisorRoom), AdvisorRoom depends on AdvisorID, not directly on StudentID!',
      'Solution: Create a separate ADVISORS table (AdvisorID, AdvisorName, AdvisorRoom) and keep only AdvisorID as a Foreign Key in STUDENTS.'
    ],
    layman: {
      title: 'The Famous Normalization Oath',
      text: '"Every non-key attribute must depend on the key (1NF), the whole key (2NF), and nothing but the key (3NF), so help me Codd!"'
    },
    keyInsight: {
      title: 'Practical Industry Standard',
      text: 'Reaching 3NF is the gold standard for 95% of real-world transactional database design.'
    }
  },
  {
    id: 'db-slide27',
    slideNum: 27,
    totalSlides: 55,
    type: 'single_topic',
    moduleTag: 'Module 9: Normalization',
    title: 'Interactive Normalization Studio',
    topicTitle: 'Step-by-Step Interactive Transformation from UNF to 3NF',
    whatItDoes: "Gives students an interactive stepper to examine UNF, 1NF, 2NF, and 3NF tables with anomaly explanations.",
    whatIsGoingOn: "Provides hands-on visual validation of how database normalization breaks down messy data into pristine relational tables.",
    bullets: [
      'Step through the tabs in the interactive studio below.',
      'Inspect how multi-valued repeating cells in UNF are normalized into 1NF.',
      'Watch partial dependencies disappear in 2NF.',
      'See how transitive advisor dependencies are extracted into a clean 3NF schema.'
    ]
  },

  // ==========================================================================
  // MODULE 10: DATABASE CONSTRAINTS (SLIDES 28 - 30)
  // ==========================================================================
  {
    id: 'db-slide28',
    slideNum: 28,
    totalSlides: 55,
    type: 'code',
    moduleTag: 'Module 10: Database Constraints',
    title: 'The Six Standard SQL Constraints',
    topicTitle: 'Enforcing Data Integrity and Business Logic Directly in SQL',
    whatItDoes: "Examines the 6 primary constraints: PRIMARY KEY, FOREIGN KEY, NOT NULL, UNIQUE, CHECK, and DEFAULT.",
    whatIsGoingOn: "Constraints act as active database guards that guarantee every stored value complies with structural and business specifications.",
    code: `CREATE TABLE products (
    product_id INT PRIMARY KEY,                       -- 1. Unique, Non-Null ID
    sku_code VARCHAR(20) UNIQUE,                      -- 2. Must be globally unique
    product_name VARCHAR(100) NOT NULL,               -- 3. Cannot be left blank
    category_id INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL CHECK (price >= 0), -- 4. Rejects negative values
    stock_qty INT DEFAULT 0 CHECK (stock_qty >= 0),   -- 5. Defaults to 0 if omitted
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_product_category                    -- 6. Referential Integrity
        FOREIGN KEY (category_id)
        REFERENCES categories(category_id)
);`,
    bullets: [
      'PRIMARY KEY: Guarantees unique entity identification and non-null values.',
      'FOREIGN KEY: Enforces referential integrity with a parent table.',
      'NOT NULL: Mandates that a value must always be supplied.',
      'UNIQUE: Prevents duplicate values across all rows (e.g. email, SKU code, username).',
      'CHECK: Enforces custom boolean logic expressions (e.g. price >= 0, age >= 18).',
      'DEFAULT: Supplies a fallback value when the INSERT query omits the column.'
    ],
    keyInsight: {
      title: 'Defense in Depth',
      text: 'Frontends can be bypassed; API endpoints can be attacked. Database constraints are your last, impenetrable line of defense against corrupted data.'
    }
  },
  {
    id: 'db-slide29',
    slideNum: 29,
    totalSlides: 55,
    type: 'single_topic',
    moduleTag: 'Module 10: Database Constraints',
    title: 'Interactive Constraint Sandbox',
    topicTitle: 'Testing Rejections, SQL Error Codes, & Engine Responses',
    whatItDoes: "Interactive laboratory where students trigger duplicate PKs, invalid foreign keys, NULL violations, and negative price rejections.",
    whatIsGoingOn: "Demonstrates real MySQL/PostgreSQL error codes and explains why the database server aborted the transaction.",
    bullets: [
      'Click through the test cases in the interactive studio below.',
      'See the exact SQL query being attempted.',
      'Inspect the simulated DBMS error code and error message.',
      'Understand the specific integrity principle protecting the database.'
    ]
  },

  // ==========================================================================
  // MODULE 11: INTRODUCTION TO SQL (SLIDES 30 - 32)
  // ==========================================================================
  {
    id: 'db-slide30',
    slideNum: 30,
    totalSlides: 55,
    type: 'single_topic',
    moduleTag: 'Module 11: SQL Fundamentals',
    title: 'Introduction to Structured Query Language (SQL)',
    topicTitle: 'The Universal Language of Relational Databases',
    whatItDoes: "Introduces SQL syntax, keywords, clauses, expressions, and categorizes SQL commands into DDL, DML, DQL, DCL, and TCL.",
    whatIsGoingOn: "SQL was created in the 1970s at IBM based on Edgar F. Codd's relational model. It remains the most enduring language in software engineering.",
    discussionPrompt: {
      question: "Why has SQL survived for over 50 years while hundreds of programming languages have vanished?",
      hint: "Think about mathematical relational foundations and declarative simplicity.",
      talkingPoints: [
        "Declarative syntax: You state WHAT you want, not HOW to retrieve it.",
        "Based on first-order predicate logic and relational algebra.",
        "Standardized by ANSI and ISO, meaning your knowledge transfers across all database engines."
      ]
    },
    bullets: [
      'DDL (Data Definition Language): Defines and alters schema structures -> CREATE, ALTER, DROP, TRUNCATE.',
      'DML (Data Manipulation Language): Modifies data instances -> INSERT, UPDATE, DELETE.',
      'DQL (Data Query Language): Retrieves data -> SELECT.',
      'DCL (Data Control Language): Manages security permissions -> GRANT, REVOKE.',
      'TCL (Transaction Control Language): Manages transactional units of work -> COMMIT, ROLLBACK, SAVEPOINT.'
    ],
    keyInsight: {
      title: 'What to Master First',
      text: 'Beginners must master DQL (SELECT) and DML (INSERT, UPDATE, DELETE) first. These 4 statements represent 90% of a developer\'s daily database work!'
    }
  },

  // ==========================================================================
  // MODULE 12: DATABASE & TABLE CREATION (SLIDES 32 - 34)
  // ==========================================================================
  {
    id: 'db-slide31',
    slideNum: 31,
    totalSlides: 55,
    type: 'code',
    moduleTag: 'Module 12: Database & Table Creation',
    title: 'Creating Databases & Tables in SQL',
    topicTitle: 'Writing Clean DDL with Appropriate Column Data Types',
    whatItDoes: "Provides complete, syntax-highlighted SQL examples for creating a database and defining student tables with standard data types.",
    whatIsGoingOn: "DDL instructions allocate data dictionary entries and set up disk file segments for table structures and primary key indexes.",
    code: `-- 1. Create a dedicated database catalog
CREATE DATABASE school_db;

-- 2. Select the database for use (MySQL/MariaDB)
USE school_db;

-- 3. Create the students table with typed attributes
CREATE TABLE students (
    student_id INT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    age INT CHECK (age >= 16),
    program VARCHAR(20) DEFAULT 'BSIT',
    gpa DECIMAL(3, 2),
    enrolled_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`,
    bullets: [
      'CREATE DATABASE school_db;: Allocates a new relational namespace.',
      'INT: 32-bit whole number integer (-2.1B to +2.1B).',
      'VARCHAR(50): Variable-length character string up to 50 characters (saves space vs fixed CHAR).',
      'DECIMAL(3, 2): Exact fixed-point number with 3 total digits and 2 decimal places (e.g. 1.75 or 3.50). Never use FLOAT for money or grades!',
      'TIMESTAMP: Stores date and time with automatic time-zone tracking.'
    ],
    keyInsight: {
      title: 'Data Type Pitfall',
      text: 'Always use DECIMAL for currency and grades. FLOAT and DOUBLE use binary floating-point rounding which introduces microscopic rounding errors (e.g. 0.1 + 0.2 = 0.30000000000000004)!'
    }
  },

  // ==========================================================================
  // MODULE 13: INSERTING DATA (SLIDES 33 - 35)
  // ==========================================================================
  {
    id: 'db-slide32',
    slideNum: 32,
    totalSlides: 55,
    type: 'code',
    moduleTag: 'Module 13: Inserting Data',
    title: 'Inserting Records: Single & Multi-Row INSERT',
    topicTitle: 'Populating Tables with Realistic Datasets',
    whatItDoes: "Demonstrates single-row and batch multi-row INSERT queries using realistic Philippine college records.",
    whatIsGoingOn: "Batch INSERT statements execute significantly faster than multiple single INSERTs because they minimize network round-trips and transaction commit overhead.",
    code: `-- 1. Single-Row INSERT
INSERT INTO students (student_id, first_name, last_name, email, age, program, gpa)
VALUES (1001, 'Juan', 'Dela Cruz', 'juan.delacruz@school.edu.ph', 20, 'BSIT', 1.45);

-- 2. Multi-Row Batch INSERT (High-Performance)
INSERT INTO students (student_id, first_name, last_name, email, age, program, gpa)
VALUES 
    (1002, 'Maria', 'Santos', 'maria.santos@school.edu.ph', 19, 'BSCS', 1.25),
    (1003, 'Carlo', 'Reyes', 'carlo.reyes@school.edu.ph', 21, 'BSIT', 1.75),
    (1004, 'Angela', 'Cruz', 'angela.cruz@school.edu.ph', 20, 'BSIS', 1.50),
    (1005, 'Mark', 'Garcia', 'mark.garcia@school.edu.ph', 22, 'BSCS', 2.10),
    (1006, 'Bea', 'Flores', 'bea.flores@school.edu.ph', 19, 'BSIT', 1.30);`,
    bullets: [
      'Explicit Columns: Always specify column names in the INSERT statement to ensure code does not break if schema order changes later.',
      'Data Type Matching: Strings and dates must be wrapped in single quotes (\'Juan\', \'2026-09-14\'); numbers must NOT have quotes (20, 1.45).',
      'Batch Insertion: Inserting 1,000 rows in one multi-row statement is up to 50x faster than running 1,000 separate INSERT statements.'
    ]
  },

  // ==========================================================================
  // MODULE 14: QUERYING WITH SELECT (SLIDES 35 - 38)
  // ==========================================================================
  {
    id: 'db-slide33',
    slideNum: 33,
    totalSlides: 55,
    type: 'code',
    moduleTag: 'Module 14: Querying with SELECT',
    title: 'The SELECT Statement: Projection & Limiting',
    topicTitle: 'Retrieving Exactly the Data You Need',
    whatItDoes: "Teaches SELECT *, column projection, column aliases (AS), DISTINCT, and row limiting.",
    whatIsGoingOn: "SELECT queries read from memory buffer pages or disk and project the requested columns into a tabular result set.",
    code: `-- 1. Retrieve all columns and all rows (Development only!)
SELECT * FROM students;

-- 2. Column Projection: Retrieve specific columns only
SELECT first_name, last_name, program FROM students;

-- 3. Column Aliases: Rename output headers for presentation
SELECT 
    first_name AS "First Name", 
    last_name AS "Last Name", 
    gpa AS "Grade Point Average"
FROM students;

-- 4. DISTINCT: Eliminate duplicate rows in the result
SELECT DISTINCT program FROM students;

-- 5. LIMIT / OFFSET: Paginate output for web applications
SELECT * FROM students 
ORDER BY student_id ASC 
LIMIT 5 OFFSET 0;`,
    bullets: [
      'SELECT * Pitfall: Never use SELECT * in production backend code! It transfers unnecessary network bandwidth, prevents index-only scans, and degrades performance.',
      'Column Projection: Only request the specific columns needed by the user interface.',
      'DISTINCT: Evaluates the output and drops duplicate duplicate combinations.',
      'LIMIT & OFFSET: Powers web application pagination (Page 1: LIMIT 10 OFFSET 0; Page 2: LIMIT 10 OFFSET 10).'
    ]
  },

  // ==========================================================================
  // MODULE 15: FILTERING DATA (SLIDES 37 - 40)
  // ==========================================================================
  {
    id: 'db-slide34',
    slideNum: 34,
    totalSlides: 55,
    type: 'code',
    moduleTag: 'Module 15: Filtering Data',
    title: 'Filtering with the WHERE Clause & Operators',
    topicTitle: 'Comparison, Logical, Range, and Pattern Matching Operators',
    whatItDoes: "Covers comparison operators (=, <>, <, >, <=, >=), logical operators (AND, OR, NOT), BETWEEN, IN, LIKE, and IS NULL.",
    whatIsGoingOn: "The WHERE clause acts as a predicate filter evaluated for every row before records are projected or aggregated.",
    code: `-- 1. Exact equality and inequality
SELECT * FROM students WHERE program = 'BSIT';
SELECT * FROM students WHERE program <> 'BSCS';

-- 2. Range filtering (BETWEEN is inclusive)
SELECT * FROM students WHERE age BETWEEN 19 AND 21;

-- 3. Set membership (IN operator)
SELECT * FROM students WHERE program IN ('BSIT', 'BSCS');

-- 4. Pattern matching (LIKE with wildcards: % = any chars, _ = single char)
SELECT * FROM students WHERE last_name LIKE 'D%';  -- Starts with 'D' (Dela Cruz)
SELECT * FROM students WHERE email LIKE '%@school.edu.ph';

-- 5. Checking for NULL values (NEVER use = NULL!)
SELECT * FROM students WHERE gpa IS NULL;
SELECT * FROM students WHERE gpa IS NOT NULL;`,
    bullets: [
      'AND vs OR: AND requires both conditions to be true; OR requires at least one to be true. Use parentheses when combining them!',
      'LIKE \'%pattern%\': Powerful for search bars, but leading wildcards (\'%word\') cannot use standard B-Tree indexes and require full scans.',
      'Three-Valued Logic (NULL): In SQL, NULL = NULL evaluates to UNKNOWN, not TRUE. Always use IS NULL or IS NOT NULL.'
    ],
    keyInsight: {
      title: 'Top Beginner Trap',
      text: 'Writing "WHERE gpa = NULL" will return 0 rows every time without an error! Always write "WHERE gpa IS NULL"!'
    }
  },
  {
    id: 'db-slide35',
    slideNum: 35,
    totalSlides: 55,
    type: 'single_topic',
    moduleTag: 'Module 15: Filtering Data',
    title: 'Interactive WHERE & Sorting Sandbox',
    topicTitle: 'Live Knobs: Adjust Age Sliders, Programs, and Sort Orders',
    whatItDoes: "Hands-on interactive laboratory where students adjust live filter controls and watch matching table rows light up in real time.",
    whatIsGoingOn: "Generates live SQL based on the UI controls and updates the filtered table dynamically.",
    bullets: [
      'Use the Age slider above to test "age >= 20".',
      'Filter by BSIT or BSCS programs.',
      'Type letters into the LIKE input to test pattern matching.',
      'Toggle ORDER BY between ASC (ascending) and DESC (descending).'
    ]
  },

  // ==========================================================================
  // MODULE 16: UPDATE & DELETE (SLIDES 39 - 41)
  // ==========================================================================
  {
    id: 'db-slide36',
    slideNum: 36,
    totalSlides: 55,
    type: 'code',
    moduleTag: 'Module 16: Safe Data Modification',
    title: 'Modifying Data: UPDATE and DELETE',
    topicTitle: 'The Most Dangerous Statements in Software Engineering',
    whatItDoes: "Teaches safe UPDATE and DELETE syntax and issues stern warnings about catastrophic unconstrained queries.",
    whatIsGoingOn: "UPDATE modifies existing values in-place; DELETE marks rows as removed. Without a WHERE clause, they target EVERY row in the entire table.",
    code: `-- 1. Targeted, SAFE UPDATE (Always specifies Primary Key in WHERE!)
UPDATE students
SET age = 21, gpa = 1.35
WHERE student_id = 1001;

-- 2. Targeted, SAFE DELETE
DELETE FROM students
WHERE student_id = 1005;

-- ============================================================
-- ⚠️ CATASTROPHIC DISASTER ZONE (NEVER EXECUTE WITHOUT WHERE!)
-- ============================================================
-- OVERWRITES EVERY SINGLE STUDENT IN THE ENTIRE UNIVERSITY TO AGE 21:
UPDATE students SET age = 21; 

-- PERMANENTLY DELETES EVERY RECORD IN THE ENTIRE TABLE:
DELETE FROM students;`,
    bullets: [
      'Golden Rule: NEVER press Enter on an UPDATE or DELETE statement without double-checking the WHERE clause!',
      'Pre-Check Trick: Before running DELETE FROM students WHERE age > 25, run SELECT * FROM students WHERE age > 25 first to verify which rows will be affected.',
      'Soft Deletes: Modern applications often use a column `deleted_at TIMESTAMP NULL` instead of DELETE so accidental deletions can be restored.'
    ],
    keyInsight: {
      title: 'Career-Saving Advice',
      text: 'Always enable SQL Safe Updates in MySQL Workbench or database clients. It rejects UPDATE and DELETE statements that do not specify a key in the WHERE clause.'
    }
  },

  // ==========================================================================
  // MODULE 17: AGGREGATE FUNCTIONS & GROUP BY (SLIDES 41 - 44)
  // ==========================================================================
  {
    id: 'db-slide37',
    slideNum: 37,
    totalSlides: 55,
    type: 'code',
    moduleTag: 'Module 17: Aggregations & Grouping',
    title: 'Aggregate Functions: COUNT, SUM, AVG, MIN, MAX',
    topicTitle: 'Summarizing and Analyzing Data Sets',
    whatItDoes: "Explains standard aggregate functions and introduces GROUP BY and HAVING clauses for multi-row analytical calculations.",
    whatIsGoingOn: "Aggregate functions collapse multiple input rows into a single summary output value.",
    code: `-- 1. Basic Aggregations across all products
SELECT 
    COUNT(*) AS total_items,
    SUM(stock) AS total_inventory_units,
    AVG(price) AS average_price,
    MIN(price) AS lowest_price,
    MAX(price) AS highest_price
FROM products;

-- 2. GROUP BY: Compute metrics per category
SELECT 
    category,
    COUNT(*) AS total_products,
    AVG(price) AS avg_category_price
FROM products
GROUP BY category;

-- 3. HAVING: Filter GROUPED results (WHERE filters rows, HAVING filters groups!)
SELECT 
    category,
    AVG(price) AS avg_price
FROM products
GROUP BY category
HAVING AVG(price) > 2000;`,
    bullets: [
      'COUNT(*): Counts total rows including rows with NULLs; COUNT(column) counts only non-null values.',
      'GROUP BY: Groups rows sharing identical category values so aggregates compute per group.',
      'WHERE vs HAVING: WHERE filters individual rows BEFORE grouping; HAVING filters aggregated groups AFTER grouping.'
    ],
    keyInsight: {
      title: 'Common Interview Question',
      text: '"What is the difference between WHERE and HAVING?" Answer: WHERE filters individual rows before grouping; HAVING filters aggregated group results.'
    }
  },

  // ==========================================================================
  // MODULE 18: SQL JOINS (SLIDES 43 - 46)
  // ==========================================================================
  {
    id: 'db-slide38',
    slideNum: 38,
    totalSlides: 55,
    type: 'code',
    moduleTag: 'Module 18: SQL JOINs',
    title: 'Mastering SQL JOINs: Connecting Multiple Tables',
    topicTitle: 'INNER JOIN, LEFT JOIN, RIGHT JOIN, and Multi-Table Queries',
    whatItDoes: "Breaks down SQL JOIN syntax with line-by-line explanations and demonstrates a 3-table join linking Students to Courses.",
    whatIsGoingOn: "JOIN operations evaluate matching keys between tables and merge their columns side-by-side into a single result row.",
    code: `-- 1. INNER JOIN (Only returns students who have matching enrollments)
SELECT 
    students.first_name,
    students.last_name,
    enrollments.course_id,
    enrollments.grade
FROM students
INNER JOIN enrollments 
    ON students.student_id = enrollments.student_id;

-- 2. 3-Table Relational JOIN (Resolving Many-to-Many through Junction Table)
SELECT 
    students.first_name,
    students.last_name,
    courses.course_name,
    courses.credits,
    enrollments.grade
FROM students
INNER JOIN enrollments 
    ON students.student_id = enrollments.student_id
INNER JOIN courses 
    ON enrollments.course_id = courses.course_id
WHERE courses.course_id = 'DB101'
ORDER BY students.last_name ASC;`,
    bullets: [
      'INNER JOIN: Returns only records where the join condition matches in BOTH tables.',
      'LEFT JOIN: Preserves all records from the left table; unmatched right columns are filled with NULL.',
      'ON Clause: Specifies the key match condition (e.g. students.student_id = enrollments.student_id).',
      'Table Aliases: You can write `FROM students s JOIN enrollments e ON s.student_id = e.student_id` to keep queries concise.'
    ]
  },
  {
    id: 'db-slide39',
    slideNum: 39,
    totalSlides: 55,
    type: 'single_topic',
    moduleTag: 'Module 18: SQL JOINs',
    title: 'Interactive Visual SQL JOIN Simulator',
    topicTitle: 'Toggle INNER, LEFT, RIGHT, and FULL JOINs with Visual Venn Inspection',
    whatItDoes: "Interactive visual simulator where students switch join types and watch matched and NULL records appear dynamically.",
    whatIsGoingOn: "Shows the exact row-matching behavior and explains why unenrolled students appear in LEFT JOIN but disappear in INNER JOIN.",
    bullets: [
      'Click through the JOIN tabs: INNER, LEFT, RIGHT, and FULL.',
      'Inspect the Venn diagram highlighting the included intersections.',
      'Notice how Angela Cruz (who has no enrollments) appears with NULLs in LEFT JOIN.',
      'Notice how Enrollment 505 (Ghost Student) appears with NULLs in RIGHT JOIN.'
    ]
  },

  // ==========================================================================
  // MODULE 19: SUBQUERIES (SLIDES 46 - 48)
  // ==========================================================================
  {
    id: 'db-slide40',
    slideNum: 40,
    totalSlides: 55,
    type: 'code',
    moduleTag: 'Module 19: Subqueries',
    title: 'SQL Subqueries: Queries Inside Queries',
    topicTitle: 'Dynamic Filters and Nested Data Selection',
    whatItDoes: "Explains scalar subqueries, WHERE IN subqueries, and how inner queries execute before outer queries.",
    whatIsGoingOn: "A subquery (or inner query) is a SELECT statement nested inside another SQL statement to supply dynamic filter values.",
    code: `-- 1. Scalar Subquery in WHERE: Find all products priced ABOVE the average price
SELECT product_name, price
FROM products
WHERE price > (
    SELECT AVG(price) 
    FROM products
);

-- 2. Subquery with IN: Find all students who are enrolled in 'DB101'
SELECT student_id, first_name, last_name, program
FROM students
WHERE student_id IN (
    SELECT student_id 
    FROM enrollments 
    WHERE course_id = 'DB101'
);`,
    bullets: [
      'Execution Order: The inner query `(SELECT AVG(price) FROM products)` runs first, calculates ₱4,673.33, and passes that number to the outer query.',
      'Scalar Subquery: Returns exactly one value (one row, one column). Can be used anywhere a literal number or string is accepted.',
      'Subquery vs JOIN: Most subqueries can also be written as JOINs. JOINs are often faster on modern query optimizers, but subqueries are intuitive for nested filtering.'
    ]
  },

  // ==========================================================================
  // MODULE 20: TRANSACTIONS & ACID PROPERTIES (SLIDES 48 - 50)
  // ==========================================================================
  {
    id: 'db-slide41',
    slideNum: 41,
    totalSlides: 55,
    type: 'single_topic',
    moduleTag: 'Module 20: Transactions & ACID',
    title: 'Database Transactions & ACID Guarantees',
    topicTitle: 'The Four Pillars of Financial and Enterprise Integrity',
    whatItDoes: "Defines Transactions, COMMIT, ROLLBACK, and the four ACID properties: Atomicity, Consistency, Isolation, and Durability.",
    whatIsGoingOn: "A transaction bundles multiple SQL statements into a single, indivisible logical unit of work that either succeeds completely or leaves no trace.",
    discussionPrompt: {
      question: "In a bank transfer, you debit ₱1,500 from Account A, and before you can credit Account B, the power cuts out. What happens without ACID?",
      hint: "₱1,500 disappeared into thin air!",
      talkingPoints: [
        "Without Atomicity, money is deducted from Account A but never credited to Account B.",
        "With ACID, the database detects the crash during restart and automatically rolls back Account A."
      ]
    },
    bullets: [
      'Atomicity (All-or-Nothing): Either every statement in the transaction executes successfully, or the entire transaction is rolled back as if nothing happened.',
      'Consistency: Transactions always bring the database from one valid state to another valid state, never violating any constraints.',
      'Isolation: Concurrent transactions execute independently without interfering with each other\'s intermediate uncommitted data.',
      'Durability: Once a transaction commits, its changes are written to non-volatile disk/WAL storage and will survive power outages or server crashes.'
    ],
    layman: {
      title: 'Vending Machine Analogy',
      text: 'If you put your money into a vending machine and the snack gets stuck on the coil, the machine returns your coins. It never takes your money without giving you the snack. That is Atomicity.'
    }
  },
  {
    id: 'db-slide42',
    slideNum: 42,
    totalSlides: 55,
    type: 'single_topic',
    moduleTag: 'Module 20: Transactions & ACID',
    title: 'Interactive ACID Bank Transfer Simulator',
    topicTitle: 'Simulate Step-by-Step Transfers, Server Crashes, and Rollbacks',
    whatItDoes: "Hands-on ledger simulator where students step through BEGIN TRANSACTION, Debit Account A, simulate a server crash, and trigger ROLLBACK vs COMMIT.",
    whatIsGoingOn: "Demonstrates live balance updates, Write-Ahead Log (WAL) console output, and visual proof of transactional atomicity.",
    bullets: [
      'Click "1. BEGIN TRANSACTION" to initiate the session.',
      'Click "2. Debit Account 101" to subtract ₱1,500.',
      'Click "Simulate System Crash!" to simulate an unexpected outage.',
      'Click "ROLLBACK" and verify that all funds are restored to their pristine state!'
    ]
  },

  // ==========================================================================
  // MODULE 21: DATABASE SECURITY & INTEGRITY (SLIDES 50 - 52)
  // ==========================================================================
  {
    id: 'db-slide43',
    slideNum: 43,
    totalSlides: 55,
    type: 'code',
    moduleTag: 'Module 21: Database Security',
    title: 'Database Security & SQL Injection Prevention',
    topicTitle: 'Protecting Databases from Attackers and Malicious Inputs',
    whatItDoes: "Explains authentication, role-based authorization, demonstrates SQL Injection, and shows why parameterized queries are mandatory.",
    whatIsGoingOn: "SQL Injection occurs when user input is directly concatenated into a raw SQL query string, allowing attackers to hijack query logic.",
    code: `-- ❌ VULNERABLE CODE (String Concatenation in Backend):
-- Query: "SELECT * FROM users WHERE username = '" + userInput + "' AND password = '" + password + "'";
-- Attacker enters: admin' --
-- Resulting SQL executed by DBMS:
SELECT * FROM users WHERE username = 'admin' --' AND password = '...';
-- The '--' comments out the password check! Attacker logs in as admin without a password!

-- ✅ SECURE CODE: Parameterized Query / Prepared Statement:
-- In PDO / Node / Java:
-- db.query("SELECT * FROM users WHERE username = ? AND password = ?", [userInput, password]);
-- The database engine compiles the SQL structure FIRST, then binds the input as literal data.
-- Even if attacker enters "admin' --", it is treated as harmless literal characters!`,
    bullets: [
      'Authentication: Verifying the identity of connecting clients (database usernames, passwords, SSL certificates).',
      'Role-Based Access Control (RBAC): Principle of Least Privilege. Web applications should only have SELECT, INSERT, UPDATE, DELETE permissions—never DROP TABLE or ALTER!',
      'Parameterized Queries (Prepared Statements): The #1 defense against SQL Injection. Never concatenate user strings directly into SQL queries!',
      'Automated Backups: Daily database dumps and real-time point-in-time transaction log replication are required for disaster recovery.'
    ],
    keyInsight: {
      title: 'Crucial Security Law',
      text: 'Never trust client input! Always use parameterized queries (prepared statements) in your backend code.'
    }
  },

  // ==========================================================================
  // MODULE 22: DATABASE DESIGN PROCESS & MINI-PROJECT (SLIDES 52 - 53)
  // ==========================================================================
  {
    id: 'db-slide44',
    slideNum: 44,
    totalSlides: 55,
    type: 'single_topic',
    moduleTag: 'Module 22: Design Workflow & Mini-Project',
    title: 'The End-to-End Database Design Workflow',
    topicTitle: 'From Business Problem Description to Production Database',
    whatItDoes: "Summarizes the complete 11-step engineering lifecycle used by professional database engineers.",
    whatIsGoingOn: "Guides students step-by-step through requirements gathering, conceptual modeling, normalization, DDL schema generation, data seeding, and query optimization.",
    bullets: [
      '1. Requirement Gathering: Interview stakeholders to understand what business data must be collected and reported.',
      '2. Identify Entities & Attributes: Extract nouns (tables) and adjectives (columns).',
      '3. Determine Keys: Assign Primary Keys and identify Candidate Keys.',
      '4. Map Relationships: Determine 1:1, 1:N, and M:N connections.',
      '5. Construct ERD: Draw formal diagram with proper cardinalities and junction tables.',
      '6. Normalize: Test against 1NF, 2NF, and 3NF to eliminate anomalies.',
      '7. Create Tables: Write DDL CREATE TABLE statements with appropriate data types and constraints.',
      '8. Seed Sample Data: Populate tables with representative realistic records.',
      '9. Query & Validate: Write SELECT, JOIN, and aggregate queries to prove requirements are satisfied.',
      '10. Benchmark & Index: Add indexes on foreign keys and frequently searched columns to ensure sub-millisecond query speed.'
    ],
    keyInsight: {
      title: 'Capstone Challenge',
      text: 'You now have all the tools needed to design and query the College Inventory Management System from scratch!'
    }
  },

  // ==========================================================================
  // MODULE 23: COMMON BEGINNER MISTAKES & SQL CHEAT SHEET (SLIDE 54)
  // ==========================================================================
  {
    id: 'db-slide45',
    slideNum: 45,
    totalSlides: 55,
    type: 'single_topic',
    moduleTag: 'Module 23: Common Mistakes & Reference',
    title: 'Common Beginner Mistakes & Rapid SQL Cheat Sheet',
    topicTitle: 'Frequent Traps to Avoid and Quick Syntax Reference',
    whatItDoes: "Examines the 8 most common beginner database mistakes and provides a handy quick-reference cheat sheet.",
    whatIsGoingOn: "Helps students avoid common syntax errors, logic traps, and performance pitfalls.",
    bullets: [
      'Mistake 1: Forgetting the WHERE clause in UPDATE or DELETE (affects every single row in the table!).',
      'Mistake 2: Using = NULL instead of IS NULL (always returns 0 rows due to SQL three-valued logic).',
      'Mistake 3: Storing numbers as text (e.g. price as VARCHAR(20)), which breaks math and makes \'100\' sort before \'20\'.',
      'Mistake 4: Plural vs Singular table naming typos (querying FROM student when the table was created as students).',
      'Mistake 5: Comma-separated lists in a single cell (violates 1NF; use a junction table instead).',
      'Mistake 6: Forgetting quotes on strings or adding quotes to integers (e.g. age = \'20\').',
      'Mistake 7: Cartesian Products: Forgetting the ON condition in JOINs, resulting in every row multiplying against every other row.',
      'Mistake 8: Using FLOAT for currency instead of DECIMAL(10, 2).'
    ],
    layman: {
      title: 'Quick Reference Syntax',
      text: 'CREATE TABLE t (id INT PRIMARY KEY); | INSERT INTO t VALUES (...); | SELECT cols FROM t WHERE cond ORDER BY col; | UPDATE t SET col = val WHERE id = x; | DELETE FROM t WHERE id = x; | SELECT * FROM a JOIN b ON a.id = b.a_id;'
    }
  },

  // ==========================================================================
  // MODULE 24: PRACTICAL EXERCISES & EVALUATION (SLIDES 55)
  // ==========================================================================
  {
    id: 'db-slide46',
    slideNum: 46,
    totalSlides: 55,
    type: 'single_topic',
    moduleTag: 'Module 24: Practical Exercises & Evaluation',
    title: 'Self-Assessment: The 10 Practical Exercises',
    topicTitle: 'Test Your Database Skills Before Taking the Final Quiz',
    whatItDoes: "Outlines 10 practical exercises spanning table design, key identification, SQL query writing, normalization, and joins.",
    whatIsGoingOn: "Prepares students to pass the 10-question evaluation quiz hosted at `/quiz/?id=database1`.",
    discussionPrompt: {
      question: "Are you ready to test your knowledge on the evaluation quiz and earn your certificate badge?",
      hint: "Review your notes on Keys, Normalization (1NF-3NF), JOINs, Constraints, and ACID transactions.",
      talkingPoints: [
        "Head over to the Quiz tab when you finish reviewing the slides.",
        "Score 80% or higher to achieve database certification!"
      ]
    },
    bullets: [
      'Exercise 1: Identify Entity, Table, Row, Column, Primary Key, and Foreign Key in an Enrollment diagram.',
      'Exercise 2: Write a CREATE TABLE statement for a student library card with PK, NOT NULL, and UNIQUE constraints.',
      'Exercise 3: Identify Candidate Keys and choose the best Primary Key for a patient hospital record.',
      'Exercise 4: Predict the exact output table of a SELECT query with WHERE age >= 20 ORDER BY last_name ASC.',
      'Exercise 5: Write INSERT statements to add 3 new products to the inventory table.',
      'Exercise 6: Write a SELECT query using BETWEEN, LIKE, and AND operators.',
      'Exercise 7: Write an aggregation query computing total stock and average price per category using GROUP BY.',
      'Exercise 8: Write an INNER JOIN and a LEFT JOIN query linking students, enrollments, and courses.',
      'Exercise 9: Decompose an unnormalized student schedule table through 1NF, 2NF, and 3NF.',
      'Exercise 10: Complete the College Inventory System mini-project and run verification queries.'
    ],
    keyInsight: {
      title: 'Final Step: Evaluation Quiz',
      text: 'Congratulations on completing the Fundamentals of Database lecture! Now head to `/quiz/?id=database1` to test your mastery!'
    }
  },

  // ==========================================================================
  // INTERACTIVE SIMULATION DEDICATED SLIDES (SLIDES 47 - 55)
  // ==========================================================================
  {
    id: 'db-slide47',
    slideNum: 47,
    totalSlides: 55,
    type: 'single_topic',
    moduleTag: 'Hands-on Lab • SQL Runner',
    title: 'Interactive SQL Console Playground',
    topicTitle: 'Run Live SQL Queries Against the In-Memory Database',
    whatItDoes: "Provides an interactive terminal sandbox running live SQL queries with instant tabular results and query execution timing.",
    whatIsGoingOn: "Executes queries against preloaded relational tables: students, courses, enrollments, and products.",
    bullets: [
      'Click the query preset buttons to try common query patterns.',
      'Or edit the SQL query in the text area to practice writing your own SELECT, WHERE, and JOIN statements.',
      'Inspect the returned rows, column projections, and execution times.'
    ]
  },
  {
    id: 'db-slide48',
    slideNum: 48,
    totalSlides: 55,
    type: 'single_topic',
    moduleTag: 'Hands-on Lab • Filter Sandbox',
    title: 'Interactive WHERE Filter & Sort Sandbox',
    topicTitle: 'Explore Comparison Operators with Live Visual Feedback',
    whatItDoes: "Lets students interactively adjust filtering criteria and watch the SQL engine update and highlight matching rows.",
    whatIsGoingOn: "Demonstrates how WHERE conditions prune non-matching records before presenting results.",
    bullets: [
      'Adjust the age slider and program selector to change the active filter.',
      'Observe the live generated SQL statement updating in real time.',
      'Notice how non-matching rows are immediately grayed out and excluded.'
    ]
  },
  {
    id: 'db-slide49',
    slideNum: 49,
    totalSlides: 55,
    type: 'single_topic',
    moduleTag: 'Hands-on Lab • JOIN Visualizer',
    title: 'Interactive Relational JOIN Visualizer',
    topicTitle: 'Compare INNER, LEFT, RIGHT, and FULL JOINs Side-by-Side',
    whatItDoes: "Visualizes relational joins with interactive Venn diagrams and demonstrates where NULL values come from in outer joins.",
    whatIsGoingOn: "Illustrates the set-theoretic principles underlying relational database joins.",
    bullets: [
      'Switch between INNER, LEFT, RIGHT, and FULL JOIN.',
      'See which records match across the student_id foreign key.',
      'Observe how unmatched records receive NULL values in outer joins.'
    ]
  },
  {
    id: 'db-slide50',
    slideNum: 50,
    totalSlides: 55,
    type: 'single_topic',
    moduleTag: 'Hands-on Lab • Constraint Lab',
    title: 'Interactive Constraint Violation Laboratory',
    topicTitle: 'Witness How the DBMS Rejects Illegal Operations',
    whatItDoes: "Simulates database integrity violation attempts (duplicate PK, orphan FK, NOT NULL violation, CHECK violation).",
    whatIsGoingOn: "Shows real DBMS error codes and explains why the database server aborted the transaction to protect data integrity.",
    bullets: [
      'Test inserting a duplicate primary key (1001).',
      'Test inserting an enrollment with a non-existent student ID (9999).',
      'Test inserting a NULL value into a NOT NULL column.',
      'Test inserting a negative price (-₱450) that violates CHECK (price >= 0).'
    ]
  },
  {
    id: 'db-slide51',
    slideNum: 51,
    totalSlides: 55,
    type: 'single_topic',
    moduleTag: 'Hands-on Lab • Normalization',
    title: 'Interactive Normalization Transformation Studio',
    topicTitle: 'Step Through UNF -> 1NF -> 2NF -> 3NF Table Evolution',
    whatItDoes: "Interactive visual walkthrough showing how messy unnormalized tables are progressively refactored into pristine 3NF relations.",
    whatIsGoingOn: "Walks through removing multi-valued attributes, partial dependencies, and transitive dependencies.",
    bullets: [
      'Examine the anomalies in the unnormalized UNF table.',
      'Step into 1NF to see atomic values in place.',
      'Step into 2NF to see partial dependencies removed.',
      'Step into 3NF to see transitive dependencies cleanly isolated.'
    ]
  },
  {
    id: 'db-slide52',
    slideNum: 52,
    totalSlides: 55,
    type: 'single_topic',
    moduleTag: 'Hands-on Lab • ACID Simulator',
    title: 'Interactive ACID Bank Transfer Simulator',
    topicTitle: 'Simulate Transactions, Outages, and Rollbacks',
    whatItDoes: "Simulates a bank transfer with step-by-step balance meters, server crash triggers, and COMMIT vs ROLLBACK states.",
    whatIsGoingOn: "Provides practical, visual demonstration of the ACID Atomicity, Consistency, Isolation, and Durability guarantees.",
    bullets: [
      'Click BEGIN TRANSACTION to start.',
      'Debit ₱1,500 from Account 101.',
      'Trigger a system crash to simulate a sudden server outage.',
      'Click ROLLBACK to watch Atomicity restore the accounts to their initial state.'
    ]
  },
  {
    id: 'db-slide53',
    slideNum: 53,
    totalSlides: 55,
    type: 'single_topic',
    moduleTag: 'Hands-on Lab • ERD Explorer',
    title: 'Interactive ERD Schema Explorer',
    topicTitle: 'Inspect Entities, Attributes, Keys, and Relationships',
    whatItDoes: "Interactive schema explorer for the Student Enrollment System and the College Inventory System.",
    whatIsGoingOn: "Displays entities, primary keys, foreign keys, and cardinalities.",
    bullets: [
      'Switch between the Enrollment and Inventory system schemas.',
      'Inspect entity attributes, PK indicators, and FK relational links.',
      'Observe how junction tables bridge Many-to-Many relationships.'
    ]
  },
  {
    id: 'db-slide54',
    slideNum: 54,
    totalSlides: 55,
    type: 'single_topic',
    moduleTag: 'Final Review • SQL Reference',
    title: 'Final Course Review & Key Takeaways',
    topicTitle: 'Summary of Everything You Learned in Fundamentals of Database',
    whatItDoes: "Summarizes the major milestones of the subject: relational models, SQL CRUD, normal forms, transactions, and security.",
    whatIsGoingOn: "Consolidates course knowledge for student revision and retention.",
    bullets: [
      'Relational Core: Tables (relations), rows (records/tuples), columns (fields/attributes), and domains.',
      'Integrity: Primary Keys guarantee uniqueness; Foreign Keys guarantee referential integrity; Constraints enforce business rules.',
      'Normalization: 1NF = Atomic values; 2NF = No partial dependencies; 3NF = No transitive dependencies.',
      'SQL Programming: DDL (CREATE, ALTER), DML (INSERT, UPDATE, DELETE), DQL (SELECT, JOIN, GROUP BY).',
      'Transactions: ACID guarantees all-or-nothing atomicity and disaster durability.',
      'Security: Parameterized queries prevent SQL injection attacks.'
    ],
    keyInsight: {
      title: 'Next Step',
      text: 'Click Next to launch the final evaluation quiz and test your database mastery!'
    }
  },
  {
    id: 'db-slide55',
    slideNum: 55,
    totalSlides: 55,
    type: 'section_break',
    sectionNum: 'Assessment Certification',
    title: 'Course Completed! Take the Evaluation Quiz',
    description: 'You have completed all 55 slides of the Fundamentals of Database masterclass. Test your knowledge with the 10-question evaluation quiz hosted at /quiz/?id=database1'
  }
];
