'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { QuizView } from '@/components/QuizView';
import { Film, ArrowLeft, Lock, BookOpen } from 'lucide-react';
import { AdSidebar } from '@/components/AdSidebar';
import { CONFIG } from '@/config';
import { HeaderAd } from '@/components/HeaderAd';

import { DEFAULT_LESSONS, Lesson } from '@/data/lessons';
import { getWebDev3QuizQuestions } from '@/data/webdev3QuizData';

function QuizPageContent() {
  const searchParams = useSearchParams();
  const lessonId = searchParams.get('id');

  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [customQuestions, setCustomQuestions] = useState<any[]>([]);
  const [showAds, setShowAds] = useState(false);

  // Load lesson dynamically
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const clientId = localStorage.getItem('vid_adsense_client_id') || CONFIG.adsenseClientId || '';
      const slotId = localStorage.getItem('vid_adsense_slot_id') || CONFIG.adsenseSlotId || '';
      setShowAds(clientId.trim() !== '' && slotId.trim() !== '');

      let lessonsList: Lesson[] = [];
      try {
        const stored = localStorage.getItem('vid_lessons');
        if (stored) {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed)) {
            lessonsList = parsed;
          }
        }
      } catch (err) {
        console.error("Failed to parse vid_lessons in quiz:", err);
      }
      let found = lessonsList.find((l) => l.id === lessonId);
      if (!found) {
        found = DEFAULT_LESSONS.find((l) => l.id === lessonId);
      }
      
      setLesson(found || null);

      if (found) {
        const webdev3Questions = getWebDev3QuizQuestions(found.id);
        if (webdev3Questions) {
          setCustomQuestions(webdev3Questions);
        } else if (found.id === 'mediadsn1') {
          setCustomQuestions([
            {
              question: "What is the primary factor that distinguishes interactive media from traditional static media?",
              options: [
                "The inclusion of high-resolution digital color photographs.",
                "The bidirectionality of information flow and user agency over system state.",
                "The speed at which the server renders stylesheet layouts.",
                "The capacity to print page layouts to paper."
              ],
              answer: 1,
              explanation: "Interactive media establishes a dynamic conversation loop between user and system, unlike static one-way broadcasting."
            },
            {
              question: "According to the human-computer interaction cycle, what is the correct sequence of stages in the Interaction Loop?",
              options: [
                "Action Execution → System Processing → Output Display → Feedback → Goal Formulation",
                "Goal Formulation → Action Execution → System Processing → Output Display → Evaluation & Feedback",
                "Evaluation & Feedback → System Processing → Goal Formulation → Action Execution → Output Display",
                "Input Action → Output Display → System Processing → Goal Formulation → Feedback Evaluation"
              ],
              answer: 1,
              explanation: "Users formulate a Goal, execute an Action Input, which the System processes, displaying Output, which provides Feedback for Evaluation."
            },
            {
              question: "Which component of an interactive media system is best defined as the digital or physical membrane where communication occurs?",
              options: [
                "The User",
                "The Interface",
                "The System",
                "The Output"
              ],
              answer: 1,
              explanation: "The Interface (screen, buttons, speakers) serves as the membrane connecting the human user with computational systems."
            },
            {
              question: "What was a major limitation of early text-based Command-Line Interfaces (CLIs) compared to Graphical User Interfaces (GUIs)?",
              options: [
                "CLIs had no keyboard input channels available.",
                "CLIs required users to memorize exact text commands (recall over recognition).",
                "CLIs processed requests slower than graphical grids.",
                "CLIs could not open document files."
              ],
              answer: 1,
              explanation: "CLIs forced users to recall exact command syntax, whereas GUIs leverage visual menus and recognition."
            },
            {
              question: "What visual design term describes the properties of a digital element that suggest how it can be operated?",
              options: [
                "Affordance",
                "Signifier",
                "Feedback",
                "Visual Hierarchy"
              ],
              answer: 0,
              explanation: "An affordance is the property of an object suggesting its utility (e.g., a button affords clicking)."
            },
            {
              question: "A blue highlighted focus border appearing around a text box during keyboard navigation represents which design principle?",
              options: [
                "Cognitive mapping",
                "Discoverability and signifiers for accessibility",
                "Action error validation",
                "Visual distraction reduction"
              ],
              answer: 1,
              explanation: "Focus borders act as signifiers showing which element is active, enabling keyboard accessibility and discoverability."
            },
            {
              question: "Why is immediate visual or haptic feedback critical on user action triggers?",
              options: [
                "It increases the CPU processing speed of servers.",
                "It acknowledges the action and reduces user uncertainty or double-submission actions.",
                "It disables screen transition overlays.",
                "It forces users to restart loops."
              ],
              answer: 1,
              explanation: "Feedback confirms the system recognized the input and is computing, preventing user anxiety and duplicate actions."
            },
            {
              question: "When a student clicks 'Submit Form' in an enrollment app, what is the most appropriate UI feedback design sequence?",
              options: [
                "Clear form immediately with no confirmation messages.",
                "Disable button → render loading spinner → display Success banner.",
                "Disable screen output channels.",
                "Open developer console logs."
              ],
              answer: 1,
              explanation: "This sequence acknowledges intent, shows active processing, and confirms successful resolution."
            },
            {
              question: "What is the primary objective of the User-Centered Design (UCD) process?",
              options: [
                "Optimizing server script compilation speed.",
                "Designing digital interfaces around the needs, limitations, and behaviors of end users.",
                "Enforcing strict security token rules.",
                "Maximizing the counts of visual icons on screen."
              ],
              answer: 1,
              explanation: "UCD focuses on studying, designing, and testing systems to align with human mental models and capabilities."
            },
            {
              question: "In a public campus maps kiosk, what represents the OUTPUT component of the interactive media framework?",
              options: [
                "Freshmen students tapping screens.",
                "The touchscreen glass detects tap coordinate variables.",
                "The screen renders path lines and highlights showing directions.",
                "A self-resetting idle timer checks inactivity."
              ],
              answer: 2,
              explanation: "Output is the visual display returned by the system (the maps drawing), closing the communication loop."
            }
          ]);
        } else if (found.id === 'mediadsn2') {
          setCustomQuestions([
            {
              question: "According to Donald Norman in 'The Design of Everyday Things', what distinguishes an 'Affordance' from a 'Signifier'?",
              options: [
                "An affordance is what a physical or digital object can actually do, whereas a signifier is the perceptible clue indicating where that action should take place.",
                "An affordance applies only to physical objects (like chairs), while signifiers apply only to mobile digital apps.",
                "An affordance defines the color contrast ratio, while a signifier defines the font size.",
                "Affordance and signifier are identical concepts with no operational distinction."
              ],
              answer: 0,
              explanation: "Affordances represent possible interactions; signifiers are signals (shadows, labels, button borders) communicating that possibility to human perception."
            },
            {
              question: "Which of the following is an example of 'Natural Mapping' in user interface design?",
              options: [
                "A vertical column of stove knobs arranged in random order relative to a 2x2 grid of burners.",
                "A stove control panel where four knobs are spatially laid out in the exact same 2x2 geometry as the four heating burners.",
                "A scrollbar where dragging down causes the page to jump to the very top.",
                "A volume slider where moving right decreases the audio loudness."
              ],
              answer: 1,
              explanation: "Natural mapping relies on spatial and cultural analogies where control placement matches the real-world geometry of the controlled elements."
            },
            {
              question: "How does interactivity primarily enhance user cognitive engagement and information retention compared to passive media?",
              options: [
                "By speeding up the CPU compilation clock rate.",
                "By inducing the 'Flow State' through active constructivist decision-making and instant feedback loops.",
                "By increasing screen brightness and video frame rates.",
                "By removing the need for user decision-making."
              ],
              answer: 1,
              explanation: "Active interactivity promotes constructivist learning: testing hypotheses, making decisions, and receiving immediate feedback dramatically boosts retention (up to 75%+)."
            },
            {
              question: "In UI layout design, what is the primary structural reason for utilizing the 8-Point Grid System?",
              options: [
                "It restricts all typography to exactly 8 words per line.",
                "Most modern screen resolutions are divisible by 8, preventing fractional sub-pixel rendering blur across @1x, @2x, and @3x displays.",
                "It was mandated by the original HTML 1.0 specification in 1993.",
                "It limits websites to a maximum of 8 colors."
              ],
              answer: 1,
              explanation: "Multiples of 8 scale cleanly across different retina pixel densities, preventing blurry fractional sub-pixel anti-aliasing artifacts."
            },
            {
              question: "According to the 60-30-10 color rule in UI design, what should the 10% accent color be strictly reserved for?",
              options: [
                "The entire full-screen page background.",
                "All body text paragraphs.",
                "High-impact Call-to-Action (CTA) buttons, active state indicators, and critical focal points.",
                "Decorative background borders and card containers."
              ],
              answer: 2,
              explanation: "The 10% accent color provides visual punch and directional hierarchy; overusing it dilutes its power to guide user attention."
            },
            {
              question: "Under the Web Content Accessibility Guidelines (WCAG 2.1 Level AA), what is the minimum required contrast ratio for standard body text?",
              options: [
                "2.0 : 1",
                "3.0 : 1",
                "4.5 : 1",
                "10.0 : 1"
              ],
              answer: 2,
              explanation: "WCAG Level AA requires at least 4.5:1 contrast for normal body text and 3:1 for large text (18pt+ or 14pt bold)."
            },
            {
              question: "What is the key conceptual difference between User Interface (UI) design and User Experience (UX) design?",
              options: [
                "UI is the sensory surface (visuals, colors, typography, buttons), while UX is the holistic journey, psychology, task efficiency, and problem-solving.",
                "UI is designed by engineers, while UX is written in JavaScript.",
                "UI only applies to websites, while UX only applies to physical machinery.",
                "There is no difference; UI and UX are marketing synonyms."
              ],
              answer: 0,
              explanation: "UI is the tangible presentation layer (the visible tip of the iceberg), whereas UX encompasses user research, information architecture, and emotional friction reduction."
            },
            {
              question: "Which Jakob Nielsen Usability Heuristic is best demonstrated by an interface providing an 'Undo' button after deleting a file?",
              options: [
                "Aesthetic and Minimalist Design",
                "User Control and Freedom (The Emergency Exit)",
                "Match between System and the Real World",
                "Flexibility and Efficiency of Use"
              ],
              answer: 1,
              explanation: "Users frequently make mistakes; providing an effortless 'emergency exit' (Undo/Cancel) without penalty ensures user freedom and control."
            },
            {
              question: "What is the primary difference between Qualitative and Quantitative user research?",
              options: [
                "Quantitative research tells you WHAT is happening at scale (analytics, drop-offs); Qualitative research tells you WHY it happens (user interviews, observational testing).",
                "Quantitative research is done in Figma, while qualitative research is done in Photoshop.",
                "Quantitative research only tests colors, while qualitative research only tests fonts.",
                "Qualitative research always involves at least 10,000 survey respondents."
              ],
              answer: 0,
              explanation: "Quantitative metrics measure frequency and scale, while qualitative research uncovers deep human motivations, hesitations, and root causes."
            },
            {
              question: "In User Journey Mapping, what is the 'Valley of Despair'?",
              options: [
                "The point where the design software crashes.",
                "The chronological dip in the emotional satisfaction curve where user friction and cognitive load are highest (often during checkout or onboarding).",
                "The bottom footer section of a webpage.",
                "The time spent waiting for a domain name to propagate."
              ],
              answer: 1,
              explanation: "The Valley of Despair represents the moment of peak friction along the customer journey where abandonment is most likely unless UX interventions are applied."
            }
          ]);
        } else if (found.id === 'webdev1') {
          setCustomQuestions([
            {
              question: "What is the primary purpose of HTML in a webpage?",
              options: [
                "To establish structure and document meaning",
                "To apply color layout and visual styles",
                "To compute mathematical algorithms and logic loop state",
                "To store files on the backend server database"
              ],
              answer: 0,
              explanation: "HTML (HyperText Markup Language) is a markup language used to structure page contents, defining headings, paragraph blocks, and lists."
            },
            {
              question: "Which of the following describes the difference between HTML and CSS?",
              options: [
                "HTML runs calculations; CSS links pages.",
                "HTML defines presentation; CSS defines structural hierarchy.",
                "HTML provides document structure; CSS provides presentation styles.",
                "There is no difference; they are the same language."
              ],
              answer: 2,
              explanation: "HTML is for document structure, whereas CSS is the styling sheet used to apply visual decorations and layout grids."
            },
            {
              question: "What is the role of index.html in web server configurations?",
              options: [
                "It is a required format for storing raw photo graphics files.",
                "It serves conventionally as the default entry point file when loading directories.",
                "It runs styling layouts to resize monitor text sizes.",
                "It blocks users from logging in on administrative pages."
              ],
              answer: 1,
              explanation: "Conventionally, web servers look for `index.html` as the default document to render when a directory is requested."
            },
            {
              question: "What happens when a browser encounters a missing closing HTML tag (e.g. <h1>Hello)?",
              options: [
                "The browser completely crashes and stops rendering.",
                "The browser attempts to auto-repair it, which might cause layout/style leakage.",
                "The server automatically deletes the file from the database.",
                "Nothing; closing tags are completely optional in HTML5 specs."
              ],
              answer: 1,
              explanation: "Browsers have robust error recovery for malformed markup, but missing closing tags can cause styles to leak to subsequent text elements."
            },
            {
              question: "Why is HTML not considered a standard programming language?",
              options: [
                "It cannot be read by browser engines.",
                "It lacks logic conditionals, loops, variables, and calculations.",
                "It is too complex for basic computer processors.",
                "It does not support text character markup."
              ],
              answer: 1,
              explanation: "HTML is a declarative markup language that describes structure. It does not perform computational loops or store variables."
            },
            {
              question: "What represents the correct order of simplified rendering steps inside browser engines?",
              options: [
                "Paint screen → Parse CSS → Measure layout → Parse HTML",
                "Parse HTML (DOM) → Parse CSS (CSSOM) → Calculate Layout → Paint Screen",
                "Measure layout → Paint screen → Parse HTML → Parse CSS",
                "Parse CSS → Measure layout → Paint screen → Parse HTML"
              ],
              answer: 1,
              explanation: "The browser parses HTML characters into DOM, compiles CSSOM rules, calculates positions (Layout), and draws pixels on the screen (Paint)."
            }
          ]);
        } else if (found.id === 'laravel11') {
          setCustomQuestions([
            {
              question: "What is the minimum PHP version required to run a Laravel 11 application?",
              options: [
                "PHP 7.4",
                "PHP 8.0",
                "PHP 8.1",
                "PHP 8.2"
              ],
              answer: 3,
              explanation: "Laravel 11 requires a minimum of PHP 8.2 (supporting PHP 8.3+), taking full advantage of modern PHP features such as typed constants, readonly classes, and improved type systems."
            },
            {
              question: "In Laravel 11, where are application routing, middleware, and exception handling now centrally configured?",
              options: [
                "app/Http/Kernel.php",
                "bootstrap/app.php",
                "config/app.php",
                "app/Providers/RouteServiceProvider.php"
              ],
              answer: 1,
              explanation: "Laravel 11 unified application configuration into bootstrap/app.php using a fluent Application::configure() builder, eliminating Http/Kernel.php, Console/Kernel.php, and RouteServiceProvider."
            },
            {
              question: "What is the default database connection configured out-of-the-box in a brand-new Laravel 11 application?",
              options: [
                "MySQL",
                "PostgreSQL",
                "SQLite",
                "In-Memory Redis"
              ],
              answer: 2,
              explanation: "Laravel 11 sets DB_CONNECTION=sqlite as the default database connection, creating database/database.sqlite automatically so you can start developing immediately without running a database server."
            },
            {
              question: "What HTTP status error does Laravel return if a POST form submission is missing a valid @csrf token?",
              options: [
                "400 Bad Request",
                "403 Forbidden",
                "419 Page Expired",
                "500 Internal Server Error"
              ],
              answer: 2,
              explanation: "When Laravel's VerifyCsrfToken middleware detects a missing or invalid token, it halts execution and returns an HTTP 419 Page Expired response to defend against Cross-Site Request Forgery attacks."
            },
            {
              question: "How does Laravel 11 recommend declaring attribute casts on an Eloquent Model?",
              options: [
                "Defining a protected $casts property array",
                "Defining a protected function casts(): array method",
                "Writing custom SQL string mutators in database migrations",
                "Overriding the __get() magic method"
              ],
              answer: 1,
              explanation: "Laravel 11 introduced method-based casts via 'protected function casts(): array', which allows calling static methods directly on cast classes and configuring cast parameters cleanly."
            },
            {
              question: "Which single Artisan command generates an Eloquent Model, a database migration, and a Resource Controller simultaneously?",
              options: [
                "php artisan make:all Post",
                "php artisan make:model Post -mcr",
                "php artisan create:crud Post",
                "php artisan generate:resource Post --full"
              ],
              answer: 1,
              explanation: "The flags -m (migration), -c (controller), and -r (resource actions: index, create, store, show, edit, update, destroy) generate the full CRUD scaffolding in one command."
            },
            {
              question: "In Laravel 11, how do you install and configure the routes/api.php file and API authentication?",
              options: [
                "Create routes/api.php manually and register it in config/app.php",
                "Run php artisan install:api",
                "Run composer require laravel/api-pack",
                "Toggle API_ENABLED=true in .env"
              ],
              answer: 1,
              explanation: "Laravel 11 keeps fresh applications lean by omitting API scaffolding by default. Running 'php artisan install:api' automatically creates routes/api.php, installs Laravel Sanctum, and registers the route in bootstrap/app.php."
            },
            {
              question: "What is the recommended modern Blade syntax for rendering a custom layout component?",
              options: [
                "@include('layout')",
                "@extends('components.layout')",
                "<x-layout> ... </x-layout>",
                "<blade:component name='layout'>"
              ],
              answer: 2,
              explanation: "Modern Laravel applications use tag-based Blade components prefixed with x- (e.g. <x-layout>, <x-card>), which support default slots ($slot), named slots (<x-slot:heading>), and props."
            },
            {
              question: "Which Artisan command launches the interactive PsySH REPL environment to test queries and execute PHP code live?",
              options: [
                "php artisan repl",
                "php artisan tinker",
                "php artisan console:run",
                "php artisan debug"
              ],
              answer: 1,
              explanation: "The 'php artisan tinker' command starts PsySH, enabling developers to interactively query Eloquent models, create test records, dispatch jobs, and test PHP functions live."
            },
            {
              question: "In an Eloquent model, what is the primary purpose of defining the protected $fillable property?",
              options: [
                "To specify which columns are required to be non-null in the database",
                "To whitelist attributes permitted to be set via mass-assignment methods like create() and update()",
                "To define database foreign key relationships",
                "To list attributes that should be encrypted before storage"
              ],
              answer: 1,
              explanation: "The $fillable array guards against Mass Assignment Vulnerabilities, ensuring attackers cannot maliciously modify sensitive attributes (such as is_admin = true) via $request->all()."
            }
          ]);
        } else if (found.id === 'database1') {
          setCustomQuestions([
            {
              question: "Which of the following statements is strictly TRUE regarding a relational Primary Key?",
              options: [
                "It can contain NULL values as long as they are distinct.",
                "It uniquely identifies each row in a table and cannot contain NULL values.",
                "A table can have multiple Primary Keys declared independently.",
                "It must always be an auto-incrementing integer."
              ],
              answer: 1,
              explanation: "Entity Integrity mandates that a Primary Key must be unique across all records and can never be NULL. While surrogate keys are common, primary keys can also be UUIDs or natural candidate keys."
            },
            {
              question: "What happens when an INSERT query attempts to add a child enrollment record with a student_id that does NOT exist in the parent students table?",
              options: [
                "The database automatically creates a new blank student record.",
                "The database rejects the query and throws a Foreign Key constraint violation error (ERROR 1452).",
                "The database sets the student_id to NULL without warning.",
                "The database inserts the record as a ghost entity."
              ],
              answer: 1,
              explanation: "Referential Integrity prevents orphan child records. Foreign keys ensure every referenced value must already exist in the referenced parent table."
            },
            {
              question: "In database transactions, which ACID property guarantees that if a system crashes during a bank transfer, either all money transfers succeed or none take effect?",
              options: [
                "Atomicity",
                "Consistency",
                "Isolation",
                "Durability"
              ],
              answer: 0,
              explanation: "Atomicity ('All-or-Nothing') ensures that a transaction is treated as a single indivisible unit. If an outage occurs before COMMIT, all partial operations are completely rolled back."
            },
            {
              question: "In standard SQL, why does the condition 'WHERE gpa = NULL' return 0 rows even when records have unassigned GPAs?",
              options: [
                "Because NULL cannot be stored in number columns.",
                "Because SQL uses three-valued logic where NULL comparisons evaluate to UNKNOWN, requiring the 'IS NULL' operator.",
                "Because NULL is mathematically equivalent to zero.",
                "Because WHERE clauses ignore columns with decimals."
              ],
              answer: 1,
              explanation: "In SQL, NULL represents missing or unknown data. Since UNKNOWN cannot be proven equal to UNKNOWN, '= NULL' always yields UNKNOWN (falsy in WHERE). You must always write 'IS NULL'."
            },
            {
              question: "What catastrophic outcome occurs if you execute 'UPDATE students SET age = 21;' without specifying a WHERE clause?",
              options: [
                "The database will throw a syntax error and abort.",
                "Every single student record in the entire table will have their age overwritten to 21.",
                "Only the first student record will be updated.",
                "Only students currently with age NULL will be updated."
              ],
              answer: 1,
              explanation: "Without a WHERE clause, UPDATE and DELETE target every row in the entire table. Always double-check your WHERE conditions before executing data modifications!"
            },
            {
              question: "What is the primary requirement for a table to achieve First Normal Form (1NF)?",
              options: [
                "All non-key columns must depend directly on the primary key.",
                "All multi-valued attributes and repeating groups must be eliminated so every cell contains a single atomic value.",
                "All foreign keys must use ON DELETE CASCADE.",
                "The table must not contain any text columns."
              ],
              answer: 1,
              explanation: "1NF requires that all column values are atomic (indivisible). Storing comma-separated lists (e.g. Courses: 'DB101, WD101') in a single cell violates 1NF."
            },
            {
              question: "What is the fundamental difference between Second Normal Form (2NF) and Third Normal Form (3NF)?",
              options: [
                "2NF removes partial key dependencies; 3NF removes transitive dependencies (non-key columns depending on other non-key columns).",
                "2NF removes transitive dependencies; 3NF removes composite keys.",
                "2NF requires JSON data; 3NF requires XML data.",
                "2NF only applies to tables without foreign keys."
              ],
              answer: 0,
              explanation: "2NF eliminates partial dependencies where an attribute depends on only part of a composite key. 3NF goes further by removing transitive dependencies (A -> B -> C), ensuring attributes depend ONLY on the primary key."
            },
            {
              question: "Which SQL JOIN returns ALL records from the Left table, and matched records from the Right table (filling missing matches with NULL)?",
              options: [
                "INNER JOIN",
                "LEFT JOIN (LEFT OUTER JOIN)",
                "CROSS JOIN",
                "RIGHT EXCLUSIVE JOIN"
              ],
              answer: 1,
              explanation: "A LEFT JOIN preserves every row from the left table. If there are no matching foreign keys in the right table, right-side columns are filled with NULL values."
            },
            {
              question: "How is a Many-to-Many (M:N) relationship properly implemented in a relational database?",
              options: [
                "By storing arrays of IDs directly inside a VARCHAR column.",
                "By decomposing it into two One-to-Many (1:N) relationships using a junction / associative table with two foreign keys.",
                "By creating duplicate copies of the primary table for every course.",
                "Relational databases do not support many-to-many concepts."
              ],
              answer: 1,
              explanation: "Relational models resolve Many-to-Many relationships using an associative table (e.g., ENROLLMENTS), where each row pairs one StudentID (FK) with one CourseID (FK)."
            },
            {
              question: "Why are Parameterized Queries (Prepared Statements) the industry-standard defense against SQL Injection?",
              options: [
                "They automatically encrypt the entire database on disk.",
                "The database compiles query structure and parameters separately, treating all user input as literal data rather than executable SQL code.",
                "They make web queries run slower to thwart automated bot scrapers.",
                "They prevent users from typing single quotation marks."
              ],
              answer: 1,
              explanation: "Prepared statements send the SQL query template and the parameter values in separate network packets. Even if an attacker types ' OR 1=1 --, the database engine treats it as a benign string value rather than SQL syntax."
            }
          ]);
        } else if (found.id === 'eventprog-w1') {
          setCustomQuestions([
            {
              question: "When configuring a 2D game for mobile devices in Godot 4 Project Settings, which stretch mode and aspect ratio settings ensure proper scaling without distortion or letterboxing blur?",
              options: [
                "Mode: disabled, Aspect: ignore",
                "Mode: canvas_items, Aspect: keep",
                "Mode: viewport, Aspect: expand",
                "Mode: 2d_pixel, Aspect: stretch"
              ],
              answer: 1,
              explanation: "Stretch Mode 'canvas_items' renders 2D elements at the native target resolution while scaling the coordinate space, and Aspect 'keep' preserves the 16:9 design ratio across various mobile aspect ratios."
            },
            {
              question: "Which node type serves as the standard 2D root node for spatial scene composition in Godot Engine?",
              options: [
                "Control",
                "Node3D",
                "Node2D",
                "CanvasLayer"
              ],
              answer: 2,
              explanation: "Node2D provides position, rotation, and scale transforms in 2D Euclidean coordinate space, serving as the canonical root for 2D game levels and gameplay scenes."
            },
            {
              question: "Which specialized node should you select in Godot 4 for a controllable 2D player character with gravity, jumping, and ground collision detection?",
              options: [
                "Area2D",
                "RigidBody2D",
                "StaticBody2D",
                "CharacterBody2D"
              ],
              answer: 3,
              explanation: "CharacterBody2D (formerly KinematicBody2D in Godot 3) is specifically designed for code-driven kinematic characters that move with custom physics and need built-in floor/wall detection via move_and_slide()."
            },
            {
              question: "In GDScript, which lifecycle callback must be used for executing physics movements, gravity accumulation, and collision detection?",
              options: [
                "_process(delta)",
                "_physics_process(delta)",
                "_input(event)",
                "_ready()"
              ],
              answer: 1,
              explanation: "_physics_process(delta) is synchronized with the fixed-rate physics tick (default 60 Hz), ensuring deterministic collision calculations and consistent movement regardless of display refresh rate."
            },
            {
              question: "Why does adding only a Sprite2D to a CharacterBody2D fail to stop the character from falling through the floor?",
              options: [
                "Sprite2D nodes only render 2D textures visually and do not register any physical bounding volume with the 2D physics engine.",
                "Sprite2D nodes are strictly 3D nodes.",
                "You must convert the Sprite2D into an AnimatedSprite3D first.",
                "Godot 4 requires all sprites to have custom shaders for collision."
              ],
              answer: 0,
              explanation: "A Sprite2D is purely a graphical visual element. Physics bodies require a child CollisionShape2D with an assigned shape (like RectangleShape2D or CapsuleShape2D) to register collision bounds."
            },
            {
              question: "In Godot 4 CharacterBody2D scripts, which method automatically moves the body along its velocity vector and handles slide collisions against obstacles?",
              options: [
                "move_and_collide(velocity)",
                "translate(velocity * delta)",
                "move_and_slide()",
                "apply_impulse(velocity)"
              ],
              answer: 2,
              explanation: "In Godot 4, move_and_slide() uses the body's internal 'velocity' property (Vector2), automatically factoring delta, sliding along walls/floors, and updating is_on_floor() status."
            },
            {
              question: "What is the recommended Godot 4 method for reading horizontal analog or keyboard direction inputs into a normalized -1.0 to +1.0 float?",
              options: [
                "Input.get_axis(\"ui_left\", \"ui_right\")",
                "Input.is_key_pressed(KEY_A) - Input.is_key_pressed(KEY_D)",
                "Input.get_vector_horizontal()",
                "Input.get_mouse_position().x"
              ],
              answer: 0,
              explanation: "Input.get_axis(negative_action, positive_action) provides smooth analog/digital evaluation returning -1.0 for left, +1.0 for right, and 0.0 when neither or both are pressed."
            },
            {
              question: "In Godot 2D Physics, what is the fundamental difference between 'Collision Layer' and 'Collision Mask'?",
              options: [
                "Layer defines the sprite rendering z-index, while Mask defines visibility.",
                "Layer specifies what channels this body exists on; Mask specifies which channels this body scans and collides against.",
                "Layer is for mobile touch, while Mask is for keyboard input.",
                "Layer and Mask are identical and interchangeable in Godot 4."
              ],
              answer: 1,
              explanation: "Collision Layer answers 'Where am I located in the physics world?' while Collision Mask answers 'What layers do I look at to detect collisions?'"
            },
            {
              question: "Which Project Setting allows developers to test mobile single-touch and gesture mechanics on a desktop development workstation using a standard mouse?",
              options: [
                "Display > Window > Mobile Test Mode",
                "Input Devices > Pointing > Emulate Touch From Mouse",
                "Rendering > Textures > Canvas Textures",
                "Physics > 2D > Touch Emulation Mode"
              ],
              answer: 1,
              explanation: "'Emulate Touch From Mouse' converts left-mouse button clicks into simulated touch screen events, enabling desktop testing of mobile virtual buttons and gestures."
            },
            {
              question: "If a player's CharacterBody2D has Collision Layer 2 and Collision Mask 1, which Collision Layer must the Terrain StaticBody2D have for the player to stand on it?",
              options: [
                "Layer 1",
                "Layer 2",
                "Layer 3",
                "Layer 0"
              ],
              answer: 0,
              explanation: "Since the player scans Mask 1, the terrain must exist on Layer 1 so that the physics server detects the collision and prevents the player from falling through."
            }
          ]);
        } else if (found.id !== 'week1') {
          // Generate general questions for custom uploaded quizzes
          setCustomQuestions([
            {
              question: `What is the primary topic of the lesson "${found.title}"?`,
              options: [
                `Core principles and methods of ${found.title}`,
                "Random facts unrelated to the syllabus",
                "A study of unrelated historical timelines",
                "None of the options"
              ],
              answer: 0,
              explanation: `This lesson covers the core definitions, workflow patterns, and applications of ${found.title}.`
            },
            {
              question: "Which approach is most recommended for retaining information covered in class?",
              options: [
                "Reading notes once and ignoring quizzes",
                "Practicing active recall, taking reviews, and using self-assessments",
                "Cramming slides in the last minute",
                "Skimming through titles without reading descriptions"
              ],
              answer: 1,
              explanation: "Active recall and retrieval practice are scientifically proven to maximize knowledge retention."
            },
            {
              question: "What is the recommended action when a quiz question is answered incorrectly?",
              options: [
                "Skip it and ignore explanations",
                "Read the explanation carefully to understand the core concept and correct your mental model",
                "Complain that the system is broken",
                "Quit the assessment immediately"
              ],
              answer: 1,
              explanation: "Understanding the 'why' behind incorrect options helps resolve knowledge gaps."
            },
            {
              question: `Why is active application of "${found.title}" concepts critical for mastery?`,
              options: [
                "It turns theoretical knowledge into direct practical skill",
                "It allows you to skip final homework",
                "It is not critical at all",
                "It makes the slides load faster"
              ],
              answer: 0,
              explanation: "Applying concepts to hands-on exercises consolidates understanding and builds functional capability."
            },
            {
              question: "How should a student proceed after completing this weekly assessment module?",
              options: [
                "Forget the topics by next week",
                "Review the next module in the library sequence to build cumulative skills",
                "Attempt the quiz again to get a perfect score without studying",
                "Decline to download the completion certificate"
              ],
              answer: 1,
              explanation: "Syllabi are built sequentially. Reviewing upcoming units expands your cumulative competencies."
            }
          ]);
        }
      }
    }
  }, [lessonId]);

  // If lesson is not found, not active, or quiz is disabled
  if (!lesson || !lesson.isActive || lesson.quizEnabled === false) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center p-6 text-center">
        <div className="w-full max-w-md bg-white border border-slate-200 rounded-3xl p-8 shadow-xl">
          <div className="p-3.5 rounded-full bg-amber-500/10 text-amber-600 w-fit mx-auto mb-4 border border-amber-500/20">
            <Lock className="w-6 h-6" />
          </div>
          <h2 className="font-lexend text-xl font-bold text-slate-900 mb-2">Quiz Unavailable</h2>
          <p className="text-xs sm:text-sm text-slate-500 mb-6 leading-relaxed">
            The assessment quiz for this lesson is locked or under construction. Check back later or ask your teacher for access.
          </p>
          <Link
            href="/"
            className="w-full py-2.5 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs rounded-xl shadow-md transition flex items-center justify-center gap-1.5"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Library
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 flex flex-col justify-between py-4 px-4">
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 items-start flex-grow">
        
        {/* Left main area (Quiz view) */}
        <div className={`flex-grow w-full ${showAds ? 'lg:max-w-[72%]' : 'lg:max-w-full'} flex flex-col h-full justify-between min-h-[85vh]`}>
          {/* Top Application Header */}
          <header className="w-full mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <BookOpen className="w-5 h-5 text-slate-900" />
              <h1 className="font-lexend text-base md:text-lg font-semibold text-slate-800">
                {lesson.title} • Quiz Assessment
              </h1>
            </div>

            <Link
              href="/"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 hover:text-sky-700 text-xs font-bold shadow-sm transition"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Library
            </Link>
          </header>

          {/* Main Quiz Frame */}
          <div className="flex-grow flex items-center justify-center py-6">
            {lesson.id === 'week1' ? (
              <QuizView />
            ) : (
              <QuizView questions={customQuestions} title={`${lesson.title} Quiz`} />
            )}
          </div>

          {/* Bottom Ad Banner */}
          <div className="mt-4 border-t border-slate-100 pt-2">
            <HeaderAd />
          </div>
        </div>

        {showAds && (
          /* Right Sidebar Ad (sticky) */
          <div className="w-full lg:w-[28%] shrink-0 lg:sticky lg:top-4 lg:mt-16">
            <AdSidebar slotName="Quiz Page Sidebar Ad" />
          </div>
        )}
      </div>

      {/* Bottom Footer signature */}
      <footer className="w-full max-w-7xl mx-auto mt-6 text-center text-xs text-slate-400 font-semibold tracking-wide border-t border-slate-200 pt-4">
        Developed by Luiese Amstrong • Lesson Library © 2026
      </footer>
    </main>
  );
}

export default function QuizPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-slate-500 font-semibold text-xs">Loading assessment quiz...</div>}>
      <QuizPageContent />
    </Suspense>
  );
}
