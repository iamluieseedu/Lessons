'use client';

import React, { useState, useMemo, useEffect, Suspense, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { 
  GraduationCap, 
  ArrowLeft, 
  Search, 
  ExternalLink, 
  Printer, 
  CheckCircle2, 
  Target, 
  Cpu, 
  MessageSquare, 
  Lightbulb, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight,
  Play, 
  Filter,
  Users,
  Copy,
  Check,
  Compass,
  ListOrdered,
  Eye,
  BookOpen,
  Volume2,
  Clock,
  RotateCcw,
  Maximize2,
  Type,
  Presentation,
  Smartphone
} from 'lucide-react';
import { laravelSlidesData } from '@/data/laravelSlidesData';
import { slidesData } from '@/data/slidesData';
import { mediaDsnSlidesData } from '@/data/mediaDsnSlidesData';
import { webdevSlidesData } from '@/data/webdevSlidesData';
import { DEFAULT_LESSONS, Lesson } from '@/data/lessons';
import { SlideData } from '@/types/slide';

// ============================================================================
// CLEANER UTILITY: REMOVE "11" AND "MASTERCLASS"
// ============================================================================
function cleanSpeakerText(text?: string): string {
  if (!text) return '';
  return text
    .replace(/Laravel\s*11(\.x)?/gi, 'Laravel')
    .replace(/Laravel\s+11/gi, 'Laravel')
    .replace(/\b11\.x\b/gi, '')
    .replace(/masterclass/gi, 'course')
    .replace(/master\s+class/gi, 'course')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

// ============================================================================
// TAILORED SPEAKER SCRIPTS: REAL-LIFE SAMPLES & SLIDE VISUAL/SIMULATION CUES
// ============================================================================
interface SlideSpeakerMeta {
  realLifeSample: string;
  slideVisualCue: string;
  speakerHook: string;
  speakerWalkthrough: string;
  speakerQuestion: string;
  speakerNudge: string;
  expectedStudentAnswers: { studentSays: string; teacherValidates: string }[];
  goldenRule: string;
  transitionLine: string;
}

const LARAVEL_SPEAKER_GUIDES: Record<number, SlideSpeakerMeta> = {
  1: {
    realLifeSample: "Think of modern car manufacturing. A car company doesn't smelt its own steel bolts or formulate rubber from trees. They start with a pre-tested chassis and an assembled engine. Laravel is that exact high-performance chassis for web applications.",
    slideVisualCue: "Look at the title slide on your screen: 'Laravel Fundamentals'. Settle your students in and show them the clean roadmap ahead.",
    speakerHook: "Good morning, everyone! Today we are learning Laravel—the most popular, in-demand PHP framework in the world. By the end of this course, you won't just understand code syntax; you'll be building real, secure, full-stack web applications with total confidence.",
    speakerWalkthrough: "Throughout this course, we are following the official documentation standards at laravel.com. We will move step-by-step from project setup to routing, controllers, databases, Blade templates, and security.",
    speakerQuestion: "Quick question for the room: Who here has ever written backend code or built a website before? What was the hardest part you ran into?",
    speakerNudge: "Was it connecting to the database? Creating login forms? Or figuring out why an SQL query failed?",
    expectedStudentAnswers: [
      { studentSays: "Setting up database connections and user logins took forever.", teacherValidates: "Exactly! In vanilla programming, you waste days writing repetitive login forms. In Laravel, it's ready in minutes." },
      { studentSays: "Keeping the code organized as the project got bigger.", teacherValidates: "Spot on! That's why Laravel's standardized folders and conventions will be a game changer for you." }
    ],
    goldenRule: "Work smarter: let the framework handle the plumbing so you can focus on your app's unique features.",
    transitionLine: "Now that we are ready, let's look at Slide 2 to see why companies choose Laravel over raw PHP!"
  },
  2: {
    realLifeSample: "Imagine opening a carpentry workshop. You could spend six months building your own hammers, saws, and measuring tapes—or you can buy a professional toolkit and start making beautiful furniture on Day 1. Laravel is that complete professional toolkit.",
    slideVisualCue: "Look at the pillars highlighted on your screen: routing, database ORM, authentication, and queues.",
    speakerHook: "Class, take a look at our topic: 'The PHP Framework for Web Artisans'. Why do you think top tech companies hire Laravel developers instead of building everything with raw PHP from scratch?",
    speakerWalkthrough: "Laravel gives us an all-inclusive ecosystem. Everything you need—from routing web requests and querying databases to sending emails and authenticating users—is pre-built, tested, and secure right out of the box.",
    speakerQuestion: "If you were running a startup with 3 months of budget, would you write your own custom security and routing, or use Laravel? Why?",
    speakerNudge: "Think about development speed, hiring other developers, and protecting your users' passwords.",
    expectedStudentAnswers: [
      { studentSays: "Use Laravel because it saves time and gets our product launched fast.", teacherValidates: "100%! Time to market is everything. You save hundreds of engineering hours." },
      { studentSays: "It's safer because the Laravel core team patches security bugs.", teacherValidates: "Spot on! An entire global security team maintains Laravel every single week." }
    ],
    goldenRule: "Conventions over configuration: standard code means any developer can join your team and start building immediately.",
    transitionLine: "Let's put this into perspective! In Slide 3, we compare raw Vanilla PHP directly against Laravel side-by-side."
  },
  3: {
    realLifeSample: "Vanilla PHP is like writing handwritten paper receipts and calculating totals in your head. One typo, and you overcharge a customer or lose tax records. Laravel is an automated POS cash register with barcode scanning and auto-reconciliation.",
    slideVisualCue: "Look at the two columns on your screen: Vanilla PHP on the left vs Laravel on the right.",
    speakerHook: "Take a close look at the left column versus the right column on your screen. In raw PHP, one missed quote or unescaped variable can give a hacker full access to your database. Look how Laravel solves that on the right.",
    speakerWalkthrough: "On the left, you see raw SQL strings and manual session cookies. On the right, Laravel uses Eloquent ORM and automatic CSRF tokens. You write one clean line of code, and Laravel handles parameter sanitization and security checks behind the scenes.",
    speakerQuestion: "Look at the left column: what happens if a beginner forgets to write a prepared statement in raw PHP?",
    speakerNudge: "Think about what happens if someone types `OR 1=1` into a login username box.",
    expectedStudentAnswers: [
      { studentSays: "SQL Injection attack—the hacker can dump or delete the whole database.", teacherValidates: "Bingo! That is the number one web security flaw, and Laravel eliminates it by default." },
      { studentSays: "The code becomes messy and hard to read.", teacherValidates: "Exactly! Clean code is secure code." }
    ],
    goldenRule: "Never trust raw user input: let Laravel sanitize and protect your data automatically.",
    transitionLine: "Now let's look at Slide 4 to see the fleet of official first-party tools that power Laravel applications!"
  },
  4: {
    realLifeSample: "Think of Apple's ecosystem: iPhone, MacBook, and Apple Watch all talk to each other seamlessly. Laravel has its own first-party ecosystem: Herd for local servers, Breeze for login, and Forge for cloud deployment.",
    slideVisualCue: "Look at the ecosystem diagram on your screen showing Breeze, Forge, Herd, and Horizon.",
    speakerHook: "When you learn Laravel, you're not just learning a framework—you're getting an entire ecosystem. Look at the tools listed on your screen.",
    speakerWalkthrough: "Instead of stitching together random third-party libraries that might break next month, Laravel creates its own official tools: Breeze for instant login forms, Forge to deploy to AWS or DigitalOcean, and Herd for instantaneous local PHP servers.",
    speakerQuestion: "Why is it safer to use official first-party tools rather than searching for random GitHub plugins from strangers?",
    speakerNudge: "Consider what happens when PHP updates to a new version—who updates those random plugins?",
    expectedStudentAnswers: [
      { studentSays: "Official tools are guaranteed to work together and get updated.", teacherValidates: "Precisely! They are tested against every framework release." }
    ],
    goldenRule: "An ecosystem is only as good as its maintenance. Official tools guarantee long-term stability.",
    transitionLine: "Now let's get our hands dirty! Let's check the system requirements in Slide 5 before creating our first project."
  },
  5: {
    realLifeSample: "Like installing a high-end video game on your computer: your machine needs the right graphics card and operating system. Laravel requires modern PHP 8.2 or newer to unlock maximum performance.",
    slideVisualCue: "Look at the terminal commands on screen: `php -v` and `composer -v`.",
    speakerHook: "Before we build anything, we have to verify our machine has the right engines installed. Look at the terminal snippet on screen: `php -v`.",
    speakerWalkthrough: "Laravel requires PHP 8.2 or higher because modern PHP is blazing fast and supports strict type-safety, readonly classes, and JIT compilation. We also need Composer, which is the package manager for PHP—just like npm is for JavaScript.",
    speakerQuestion: "If a company has a server running an outdated version like PHP 7.4, why should they upgrade to PHP 8.2+ before building their new app?",
    speakerNudge: "Think about security patches and server execution speed.",
    expectedStudentAnswers: [
      { studentSays: "PHP 7 is end-of-life and has known security vulnerabilities.", teacherValidates: "Spot on! Running obsolete PHP is a massive security hazard." },
      { studentSays: "PHP 8 is significantly faster and uses less memory.", teacherValidates: "Correct! You get double the performance for free." }
    ],
    goldenRule: "Always check your foundation: verify `php -v` and `composer -v` before starting any project.",
    transitionLine: "Now let's launch our very first project! Look at the interactive terminal simulator in Slide 6."
  },
  6: {
    realLifeSample: "Artisan CLI is like a digital assistant living in your terminal. Instead of manually right-clicking to create 10 folders and files, you give Artisan one voice command and it builds them instantly.",
    slideVisualCue: "Point to the interactive black terminal simulator on your screen. Tell students: 'Go ahead and click the interactive buttons on your slide!'",
    speakerHook: "Class, look at the interactive terminal simulator on your screen! This is Artisan, Laravel's command-line interface. Go ahead, click `php artisan serve` on your slide right now!",
    speakerWalkthrough: "Notice what happened when you clicked? Laravel booted a local web server at `http://127.0.0.1:8000`. You didn't have to configure Apache or Nginx. To create a project, we simply run `laravel new my-app` or `composer create-project`.",
    speakerQuestion: "Why do professional developers love terminal CLI tools like Artisan instead of manually creating files with a mouse?",
    speakerNudge: "How long does it take to create a controller, a model, and a migration by hand versus one Artisan command?",
    expectedStudentAnswers: [
      { studentSays: "It's ten times faster and creates the exact boilerplate structure.", teacherValidates: "Yes! `php artisan make:model Post -m` creates the model and database migration in one second." }
    ],
    goldenRule: "Master the terminal: Artisan is your fastest coworker in Laravel.",
    transitionLine: "Every application has private secrets like database passwords. Let's see where they live in Slide 7!"
  },
  7: {
    realLifeSample: "Think of your home's breaker box or a hotel safe. You keep secret keys and private combinations locked away, never taped to the front door where guests can see them. That's the `.env` file.",
    slideVisualCue: "Look at the `.env` code block on your screen showing `APP_KEY`, `DB_CONNECTION`, and `APP_DEBUG`.",
    speakerHook: "Look at the code on screen. This is the `.env` file—the secret configuration vault for your project.",
    speakerWalkthrough: "In web development, you NEVER hardcode database passwords or Stripe API keys inside your PHP code. Why? Because if you push that code to GitHub, anyone can see your credentials! Instead, you store them in `.env`, which is ignored by Git.",
    speakerQuestion: "What disaster happens if a developer accidentally commits their `.env` file with AWS or database keys to a public GitHub repo?",
    speakerNudge: "Bots scan GitHub 24/7 for leaked keys within 30 seconds of pushing code.",
    expectedStudentAnswers: [
      { studentSays: "Hackers can steal the keys and run up thousands of dollars in server bills or wipe the database.", teacherValidates: "Exactly! That's why `.gitignore` excludes `.env` by default." }
    ],
    goldenRule: "Keep secrets in `.env`: never commit private API keys or database passwords to Git.",
    transitionLine: "Now let's look at the clean project folder structure in Slide 8!"
  },
  8: {
    realLifeSample: "Imagine organizing a desk: removing 50 unused papers and empty pens so only your computer, notepad, and coffee cup are in front of you. That's what Laravel did to the project directory.",
    slideVisualCue: "Look at the interactive project structure comparison on your screen! Tap the folders to expand them.",
    speakerHook: "Take a look at the interactive folder explorer on your screen. Notice how clean and focused the project tree is.",
    speakerWalkthrough: "Laravel streamlined the application structure. It moved unnecessary boilerplate files and Kernels out of your sight. Everything you actually customize lives in `app/`, `routes/`, and `resources/`.",
    speakerQuestion: "Why is an uncluttered, minimalist folder structure better for both beginners and senior developers?",
    speakerNudge: "Think about cognitive fatigue when opening a project for the first time.",
    expectedStudentAnswers: [
      { studentSays: "You immediately know where your code belongs without getting lost in 20 config files.", teacherValidates: "Exactly right! Less noise means more focus on your actual features." }
    ],
    goldenRule: "Less is more: a clean directory structure means less mental clutter and faster development.",
    transitionLine: "Where did all the central settings go? Look at Slide 9 to meet `bootstrap/app.php`!"
  },
  9: {
    realLifeSample: "Think of the main electrical breaker panel in a house. When electricity enters the house, this one panel controls which rooms get power, which breakers have safety fuses, and how power surges are handled.",
    slideVisualCue: "Look at `bootstrap/app.php` on screen with `withRouting()`, `withMiddleware()`, and `withExceptions()`.",
    speakerHook: "Look at this code block on screen. This is `bootstrap/app.php`—the single central nervous system of your entire Laravel application.",
    speakerWalkthrough: "Instead of jumping between multiple kernel files and service providers, Laravel unifies everything here using a fluent builder. In this one file, you configure where your web routes live, what security middleware runs, and how errors are handled.",
    speakerQuestion: "Why is having a single configuration file like `bootstrap/app.php` easier to debug than having 4 different files scattered across folders?",
    speakerNudge: "What happens when you need to audit which security middleware is running?",
    expectedStudentAnswers: [
      { studentSays: "You only have to look in one file instead of hunting through subfolders.", teacherValidates: "Spot on! One file to read, one place to configure." }
    ],
    goldenRule: "Fluent configuration: configure your entire application pipeline in one clear, readable file.",
    transitionLine: "Now let's check `AppServiceProvider.php` in Slide 10 to see how services boot up!"
  },
  10: {
    realLifeSample: "The concierge desk at a 5-star hotel. As soon as the hotel opens in the morning, the concierge sets up the greeting signs, checks room keys, and ensures every guest service is ready to run.",
    slideVisualCue: "Look at `AppServiceProvider.php` on screen showing the `register()` and `boot()` methods.",
    speakerHook: "Turn your eyes to `AppServiceProvider.php` on the slide. Notice the two core methods: `register()` and `boot()`.",
    speakerWalkthrough: "When Laravel wakes up for an incoming web request, it runs `register()` to bind classes into the service container, and then `boot()` to initialize global settings—like database pagination styles or custom security gates.",
    speakerQuestion: "If you want every paginated list in your app to use Bootstrap or Tailwind styles by default, which method would you put that in?",
    speakerNudge: "Think about which method runs after all services are loaded: `register()` or `boot()`?",
    expectedStudentAnswers: [
      { studentSays: "The `boot()` method!", teacherValidates: "Correct! `boot()` is where you configure application-wide defaults." }
    ],
    goldenRule: "`register()` binds your tools; `boot()` turns them on and prepares them for the request.",
    transitionLine: "What if you need API routes or want to publish extra config files? Look at Slide 11!"
  },
  11: {
    realLifeSample: "A minimalist smartphone that comes out of the box with only the essential phone and camera apps. If you want photo editing or games, you install them on-demand so your phone never gets bloated.",
    slideVisualCue: "Look at the terminal commands on screen: `php artisan install:api` and `php artisan config:publish`.",
    speakerHook: "Look at the terminal commands on your slide. Laravel starts lean and featherweight, and expands only when you ask it to.",
    speakerWalkthrough: "If your project is a standard website, you don't need API token scaffolding sitting around. The moment you decide to build a mobile app API, you just run `php artisan install:api`, and Laravel instantly creates `routes/api.php` and sets up Sanctum authentication.",
    speakerQuestion: "Why is on-demand scaffolding better than loading every conceivable library into every new project?",
    speakerNudge: "Think about project file size and unused code maintenance.",
    expectedStudentAnswers: [
      { studentSays: "It keeps the project lightweight and you only maintain what you actually use.", teacherValidates: "Exactly right! No unnecessary bloat." }
    ],
    goldenRule: "Start light, expand on demand: install APIs and publish config files only when your project needs them.",
    transitionLine: "Now let's dive into the heart of web applications: Routing! Look at Slide 12."
  },
  12: {
    realLifeSample: "A restaurant receptionist. When a customer walks in and says, 'Table for two please' (a GET request for the dining room), the receptionist guides them to their table. When they hand over cash (a POST request), the cashier processes payment.",
    slideVisualCue: "Look at `Route::get('/', ...)` on screen. Notice how clean the syntax is.",
    speakerHook: "Class, look at Slide 12: 'Basic Routing & HTTP Verbs'. Every web application starts with routes. Look how simple this syntax is on screen.",
    speakerWalkthrough: "A route matches an incoming URL to a response. When a user visits `GET /about`, Laravel executes the function and returns the view. We have standard HTTP verbs: GET to view, POST to submit, PUT to update, and DELETE to remove.",
    speakerQuestion: "Why do we use POST when submitting a user registration form instead of GET?",
    speakerNudge: "What happens to form data when you use GET? Where does the password appear in the browser?",
    expectedStudentAnswers: [
      { studentSays: "In a GET request, form data shows up in the URL bar for anyone to see!", teacherValidates: "Exactly! Passwords in the URL bar would be a security disaster. POST hides the payload in the request body." }
    ],
    goldenRule: "Match the right verb to the action: GET to read, POST to create, PUT to update, DELETE to remove.",
    transitionLine: "What if we want to show a specific user profile like `/user/42`? Look at Route Parameters in Slide 13!"
  },
  13: {
    realLifeSample: "An ID badge scanner at an office turnstile. It reads your unique employee badge number (`{id}`). If someone swipes a library card or a grocery receipt, the scanner rejects it immediately.",
    slideVisualCue: "Look at the code sample on screen: `Route::get('/user/{id}', ...)->whereNumber('id')`.",
    speakerHook: "Look at the code box on Slide 13. Notice the curly braces: `{id}`. That's a dynamic route parameter.",
    speakerWalkthrough: "Instead of writing 1,000 separate routes for 1,000 users, we write one dynamic route with `{id}`. Laravel captures the ID from the URL and passes it into our function. Even better, we can chain `->whereNumber('id')` so users can't crash our app by passing letters into an ID field.",
    speakerQuestion: "If someone types `/user/abc` into their browser, what does `whereNumber('id')` do?",
    speakerNudge: "Does it run the function and crash, or return a 404 Not Found error?",
    expectedStudentAnswers: [
      { studentSays: "It returns a 404 Not Found immediately without touching the database.", teacherValidates: "Spot on! That protects your database from invalid queries." }
    ],
    goldenRule: "Constrain your route parameters: enforce numbers or slugs so bad input gets stopped at the front door.",
    transitionLine: "What happens when URLs change? Look at Named Routes in Slide 14 to see how names save the day!"
  },
  14: {
    realLifeSample: "Saving a friend's contact name in your phone. Instead of memorizing their 11-digit number every time, you just tap 'Sarah'. If Sarah changes her phone number, you update it once in your contacts and your calls still connect.",
    slideVisualCue: "Look at `->name('user.profile')` and `route('user.profile')` in the code box on your screen.",
    speakerHook: "Look at the code snippet on screen. Notice how we chained `->name('dashboard')` to the end of the route.",
    speakerWalkthrough: "In your HTML links and controllers, you should never hardcode URLs like `<a href='/user/settings/profile'>`. Why? Because if your boss asks you to change that URL to `/my-account`, you would have to find and replace that link in 50 Blade files! With named routes, you write `route('profile')`, and if the URL ever changes, every link in your app updates automatically.",
    speakerQuestion: "How many hours can named routes save a team during a major website redesign?",
    speakerNudge: "Think about changing the URL of your checkout page on a shopping site with 500 links.",
    expectedStudentAnswers: [
      { studentSays: "Countless hours! You only change the URL in `routes/web.php` once, and all 500 links work instantly.", teacherValidates: "Exactly! That is clean engineering." }
    ],
    goldenRule: "Always name your routes: change URLs once in routes/web.php, and never break a link.",
    transitionLine: "Now let's trace the journey of an HTTP request from click to screen! Look at the interactive simulation in Slide 15."
  },
  15: {
    realLifeSample: "A visitor arriving at a corporate headquarters: security guard at the gate checks their badge (Middleware), receptionist directs them to Floor 3 (Router), and the department manager conducts the meeting (Controller).",
    slideVisualCue: "Point to the interactive pipeline simulator on screen! Tell students: 'Tap the Send Request button on your slide and watch the pulse travel!'",
    speakerHook: "Class, look at the interactive pipeline animation on your screen! Go ahead and tap the 'Send Request' button on your slide right now!",
    speakerWalkthrough: "Watch how the request travels: Browser ➔ `public/index.php` ➔ Unified `bootstrap/app.php` ➔ Router ➔ Security Middleware ➔ Controller ➔ Blade View ➔ HTTP Response. Every single request follows this disciplined, predictable assembly line.",
    speakerQuestion: "If a user is NOT logged in and tries to access their profile, where in this pipeline does Laravel stop them?",
    speakerNudge: "Does it reach the Controller, or does Middleware intercept them first?",
    expectedStudentAnswers: [
      { studentSays: "The Authentication Middleware stops them and redirects them to the login page!", teacherValidates: "Bingo! The controller never even runs. Middleware acts as the security checkpoint." }
    ],
    goldenRule: "Understand the pipeline: Middleware guards the door; Controllers handle the business logic.",
    transitionLine: "How can we view all the routes registered in our app? Look at the Artisan command in Slide 16!"
  },
  16: {
    realLifeSample: "The master flight departure board at an airport. In one glance, travelers and pilots can see every flight number, destination gate, status, and departure time.",
    slideVisualCue: "Look at the terminal table on screen showing the output of `php artisan route:list`.",
    speakerHook: "Whenever you join a new project and want to know what pages and endpoints exist, run the command on screen: `php artisan route:list`.",
    speakerWalkthrough: "Artisan scans your entire project and prints a clean table displaying every HTTP method, URL pattern, route name, and assigned controller. You can even filter by name using `--name=user` or filter by method.",
    speakerQuestion: "When you get a 404 error or a route isn't loading, why is `php artisan route:list` the very first command you should run?",
    speakerNudge: "Can you see typos in the URL or missing parameters in the list?",
    expectedStudentAnswers: [
      { studentSays: "It tells you if the route actually exists and what URL it expects.", teacherValidates: "Exactly! It eliminates guessing and instantly reveals typos." }
    ],
    goldenRule: "When in doubt, list it out: `php artisan route:list` is your map of the application.",
    transitionLine: "Writing all our logic inside `routes/web.php` gets messy fast. Let's meet Controllers in Slide 17!"
  },
  17: {
    realLifeSample: "A restaurant kitchen. The waiter (the route) takes your order at the table, but they don't cook the food there! They hand the order slip through the window to the chef in the kitchen (the controller).",
    slideVisualCue: "Look at the comparison on screen: Route Closure vs Dedicated Controller Class.",
    speakerHook: "Class, look at Slide 17: 'Why Use Controllers?'. Imagine if a restaurant waiter tried to fry steak and bake pizza right at your table—chaos! That's what happens when you cram 50 lines of database logic into `routes/web.php`.",
    speakerWalkthrough: "Controllers keep your project organized. The route file stays super lean—it just maps the URL to a controller method: `Route::get('/users', [UserController::class, 'index'])`. The controller handles querying the database and returning the view.",
    speakerQuestion: "Why is separating routes and controllers essential when multiple developers work on the same project?",
    speakerNudge: "What happens if 5 developers all edit `routes/web.php` at the exact same time in Git?",
    expectedStudentAnswers: [
      { studentSays: "Git merge conflicts! If all code is in one file, everyone collides.", teacherValidates: "Spot on! Controllers let each developer work on their own clean file without conflicts." }
    ],
    goldenRule: "Routes direct traffic; Controllers do the cooking.",
    transitionLine: "Can we automate standard CRUD operations? Yes! Look at Resource Controllers in Slide 18."
  },
  18: {
    realLifeSample: "A standard physical filing cabinet. For any folder, you only ever do 7 standard actions: View all files, open a new form, store the document, view a single document, open the edit form, save updates, or shred the document.",
    slideVisualCue: "Look at the 7 CRUD actions table on screen: index, create, store, show, edit, update, destroy.",
    speakerHook: "Look at the 7 actions in the table on Slide 18: Index, Create, Store, Show, Edit, Update, Destroy. This is CRUD.",
    speakerWalkthrough: "Almost every web feature—blog posts, shop products, user accounts—needs these exact same 7 actions. With one command, `php artisan make:controller PostController --resource`, Laravel creates all 7 methods. And in `routes/web.php`, `Route::resource('posts', PostController::class)` registers all 7 routes in one single line!",
    speakerQuestion: "How many lines of route code does `Route::resource` save you for 10 resources like Users, Orders, Products, and Comments?",
    speakerNudge: "7 routes times 10 resources = 70 lines of manual code down to 10 lines!",
    expectedStudentAnswers: [
      { studentSays: "It saves 70 lines of repetitive code and follows universal REST standards.", teacherValidates: "Precisely! Standard URLs mean predictable, clean architecture." }
    ],
    goldenRule: "Embrace the 7 RESTful actions: `Route::resource` standardizes your entire API and web flow.",
    transitionLine: "Now for one of Laravel's most magical features: Route Model Binding in Slide 19!"
  },
  19: {
    realLifeSample: "Checking into a hotel. You tell the front desk, 'I'm in room 302.' The clerk doesn't make you wait while they run upstairs to check if room 302 exists—they instantly hand you the exact room key already programmed for room 302.",
    slideVisualCue: "Look at the method signature on screen: `public function show(Post $post)`. Notice the type-hint `Post`!",
    speakerHook: "Pay close attention to Slide 19: 'Route Model Binding'. This is where Laravel makes junior code look like senior engineering.",
    speakerWalkthrough: "In raw PHP, you would grab `$_GET['id']`, run a SQL query, check if the record exists, and write an `if (!$post)` statement to show an error. In Laravel, you simply type-hint `Post $post` in your controller method. Laravel automatically queries the database using the URL ID, finds the post, and injects it. If the post doesn't exist, it automatically throws a 404 error!",
    speakerQuestion: "How many lines of manual database query and `if/else` error-checking code does Route Model Binding eliminate in every controller?",
    speakerNudge: "At least 5 to 10 lines per method!",
    expectedStudentAnswers: [
      { studentSays: "It eliminates manual SQL queries and automatic 404 checking.", teacherValidates: "Yes! You write zero queries—Laravel does it for you cleanly." }
    ],
    goldenRule: "Type-hint your Eloquent model: let Laravel fetch the record and handle 404s automatically.",
    transitionLine: "What if a controller only does ONE single job? Look at Invokable Controllers in Slide 20!"
  },
  20: {
    realLifeSample: "The big red emergency stop button on an escalator or a payment checkout button. It doesn't need a menu of options; it has exactly ONE job, and it does it immediately.",
    slideVisualCue: "Look at the `__invoke()` method inside the controller code on screen.",
    speakerHook: "Look at the method on screen: `public function __invoke()`. This is an Invokable Controller.",
    speakerWalkthrough: "Sometimes you have an action that is complex and dedicated—like `ProcessStripePayment` or `DownloadInvoicePdf`. It doesn't need 7 CRUD methods; it only does one thing. An invokable controller has only one method: `__invoke()`. In your routes, you just pass the class name: `Route::post('/checkout', CheckoutController::class)`.",
    speakerQuestion: "When would you prefer an invokable controller over cramming another method into a giant 1,000-line controller?",
    speakerNudge: "Think about single responsibility principle and testing complex payment workflows.",
    expectedStudentAnswers: [
      { studentSays: "For specialized, critical actions like payments or password resets.", teacherValidates: "Exactly! It keeps your controllers focused and easy to unit test." }
    ],
    goldenRule: "One job, one controller: use `__invoke()` when an action is too important to share a class.",
    transitionLine: "Now let's talk about databases! Look at Zero-Config SQLite in Slide 21."
  },
  21: {
    realLifeSample: "A portable USB flash drive versus renting a full server room. For local development, why install heavy MySQL server software when you can use a high-speed file-based database that works instantly?",
    slideVisualCue: "Look at the `.env` snippet showing `DB_CONNECTION=sqlite` on your screen.",
    speakerHook: "Class, look at Slide 21. Setting up MySQL with Docker or XAMPP used to take beginners hours of troubleshooting. Look how Laravel solved that.",
    speakerWalkthrough: "Laravel defaults out of the box to SQLite. It stores your entire database inside one local file: `database/database.sqlite`. You don't have to create usernames, configure root passwords, or start background database daemons. You can clone a project, run migrations, and immediately start coding.",
    speakerQuestion: "Why is zero-config SQLite a lifesaver for student laptops and quick hackathons?",
    speakerNudge: "What happens if someone has a laptop with no MySQL installed?",
    expectedStudentAnswers: [
      { studentSays: "It works immediately with zero installation hassle.", teacherValidates: "Yes! No MySQL crashes, no port conflicts, zero friction." }
    ],
    goldenRule: "Develop fast with SQLite locally; switch to MySQL or PostgreSQL in production with one line in `.env`.",
    transitionLine: "How do we create database tables without writing raw SQL? Look at Database Migrations in Slide 22!"
  },
  22: {
    realLifeSample: "Version control (Git) for your database structure. If your teammate adds a `phone_number` column to the users table, instead of sending you a 50-line SQL file over Slack, they commit a migration. You run one command, and your database matches theirs perfectly.",
    slideVisualCue: "Look at the `up()` and `down()` methods in the migration file on your screen.",
    speakerHook: "Look at the code on Slide 22. This is a Database Migration—a blueprint for your database tables.",
    speakerWalkthrough: "Instead of manually clicking around in phpMyAdmin or writing raw `CREATE TABLE` queries, you define tables in PHP code using Schema Blueprints. The `up()` method creates the table and columns; the `down()` method drops or reverts them.",
    speakerQuestion: "What happens on a team of 5 developers if they don't use migrations and change database tables manually in phpMyAdmin?",
    speakerNudge: "Will everyone's local database have the same columns and types?",
    expectedStudentAnswers: [
      { studentSays: "Chaos! Tables will be missing, columns will have different names, and code will crash.", teacherValidates: "Spot on! Migrations guarantee that every developer and production server has the exact same database schema." }
    ],
    goldenRule: "Code your schema: migrations are Git version control for your database.",
    transitionLine: "How do we run or rollback migrations? Look at Slide 23!"
  },
  23: {
    realLifeSample: "The 'Undo' button (Ctrl+Z) in Microsoft Word or Photoshop. If you made a mistake on your last document change, you hit undo and it restores the previous state without destroying your whole work.",
    slideVisualCue: "Look at the terminal commands on screen: `php artisan migrate` and `php artisan migrate:rollback`.",
    speakerHook: "Look at the terminal commands on Slide 23: `php artisan migrate` and `php artisan migrate:rollback`.",
    speakerWalkthrough: "Running `php artisan migrate` executes all new migrations and records them in a special `migrations` table so it never runs the same file twice. If you realize you made a typo on your last migration, you don't panic—you run `php artisan migrate:rollback`, fix the file, and re-run.",
    speakerQuestion: "Why should you NEVER run `php artisan migrate:fresh` on a live production database with real customers?",
    speakerNudge: "What does `migrate:fresh` do to all existing tables and user records?",
    expectedStudentAnswers: [
      { studentSays: "It drops ALL tables and deletes every single customer's data permanently!", teacherValidates: "CRITICAL warning! Exactly. `migrate:fresh` is only for local dev. On production, only run `php artisan migrate`." }
    ],
    goldenRule: "Migrate with caution: `migrate` adds new tables; `migrate:fresh` wipes everything clean.",
    transitionLine: "Now let's see how Eloquent translates our code into SQL in real time! Look at Slide 24."
  },
  24: {
    realLifeSample: "A diplomatic translator. You speak plain English ('Show me all published articles'), and the translator converts it into fluent Japanese or Spanish for the foreign audience. Eloquent is that translator between PHP and SQL.",
    slideVisualCue: "Point to the interactive Eloquent-to-SQL playground on your screen! Tell students: 'Click the query buttons and watch the SQL generate below!'",
    speakerHook: "Class, look at the interactive playground on your screen! Go ahead and click the query buttons on your slide right now.",
    speakerWalkthrough: "Look at what happens: when you write `Post::where('published', true)->get()`, Eloquent converts it into `SELECT * FROM posts WHERE published = 1`. You write clean, expressive PHP objects, and Eloquent crafts high-performance, parameter-sanitized SQL queries.",
    speakerQuestion: "Why is `Post::where('votes', '>', 100)->get()` easier to maintain than concatenating raw SQL strings with `$sql = 'SELECT * FROM...'`?",
    speakerNudge: "Think about typos in SQL syntax and automatic parameter escaping.",
    expectedStudentAnswers: [
      { studentSays: "It's readable, prevents SQL injection, and works even if you switch database engines.", teacherValidates: "100% correct! Whether you use SQLite, MySQL, or Postgres, your Eloquent code stays identical." }
    ],
    goldenRule: "Speak PHP, let Eloquent speak SQL: clean code with zero SQL injection vulnerabilities.",
    transitionLine: "Need fake test data for your app? Meet Seeders & Factories in Slide 25!"
  },
  25: {
    realLifeSample: "The display furniture and mannequins in an IKEA showroom. Before real families move into apartments, IKEA stages the rooms with dummy sofas, lamps, and fake books so you can visualize how the room functions.",
    slideVisualCue: "Look at `User::factory()->count(50)->create()` in the code box on your screen.",
    speakerHook: "Look at the code on Slide 25. Imagine testing an e-commerce website with zero products in the database—you can't test search, sorting, or pagination!",
    speakerWalkthrough: "Model Factories generate realistic fake names, emails, and addresses using Faker. In one line, `User::factory()->count(50)->create()`, Laravel generates 50 realistic user records and inserts them into your database in less than one second.",
    speakerQuestion: "How does having 50 fake records help you test user interfaces like pagination and tables?",
    speakerNudge: "Can you test if a 'Next Page' button works if you only have 1 product?",
    expectedStudentAnswers: [
      { studentSays: "You can immediately see if pagination works, if search filters work, and how the layout looks with full data.", teacherValidates: "Exactly! You never build UI with an empty database." }
    ],
    goldenRule: "Don't test empty tables: use Factories and Seeders to populate realistic data in seconds.",
    transitionLine: "Now let's see how Eloquent models cast data types in Slide 26!"
  },
  26: {
    realLifeSample: "A digital smart-meter that automatically converts raw raw electrical voltage readings into kilowatt-hours and currency totals on your smartphone app.",
    slideVisualCue: "Look at the `casts()` method inside the Post model code block on your screen.",
    speakerHook: "Turn your eyes to the `casts()` method on Slide 26. Databases store dates and booleans as plain strings or 1s and 0s. Look how Laravel upgrades them.",
    speakerWalkthrough: "When you declare `'published_at' => 'datetime'` and `'is_active' => 'boolean'` inside `casts()`, Laravel automatically converts raw database values into real PHP Carbon date objects and true/false booleans. You can call `$post->published_at->diffForHumans()` directly!",
    speakerQuestion: "Why is converting date strings to Carbon date objects so powerful for building real apps?",
    speakerNudge: "Think about displaying 'Posted 5 minutes ago' or calculating an expiration date.",
    expectedStudentAnswers: [
      { studentSays: "You can easily format dates, add days, and calculate human-readable times like '3 hours ago'.", teacherValidates: "Spot on! Carbon handles timezones and date math effortlessly." }
    ],
    goldenRule: "Typecast your data: let `casts()` convert raw database strings into native PHP types.",
    transitionLine: "How do we create, read, update, and delete records with Eloquent? Look at Slide 27!"
  },
  27: {
    realLifeSample: "Shopping on Shopee or Lazada: You click 'Add to Cart' (Create), open your cart page (Read), change quantity to 3 (Update), or click the trash can icon to remove an item (Delete). That's Eloquent CRUD.",
    slideVisualCue: "Look at the 4 code examples on your screen: Create, Read, Update, and Delete.",
    speakerHook: "Look at the four code blocks on Slide 27. Notice how natural and intuitive Eloquent syntax is.",
    speakerWalkthrough: "To create a record: `Post::create([...])`. To find a record: `Post::find(1)`. To update: `$post->update([...])`. To delete: `$post->delete()`. Every operation is an object method that reads like plain English.",
    speakerQuestion: "Look at `Post::create([...])`: what security setting must you define on your Model to prevent mass-assignment attacks?",
    speakerNudge: "Is it `$fillable` or `$guarded`?",
    expectedStudentAnswers: [
      { studentSays: "`$fillable`! It tells Laravel which columns users are allowed to fill.", teacherValidates: "Crucial answer! Exactly. `$fillable` prevents malicious users from injecting `is_admin = true` into form requests." }
    ],
    goldenRule: "Always protect mass-assignment: declare `$fillable` on every Eloquent model.",
    transitionLine: "What about relationships between tables? Look at One-to-Many Relationships in Slide 28!"
  },
  28: {
    realLifeSample: "An author and their books, or an Instagram post and its comments. One author writes many books, but each book belongs to that specific author.",
    slideVisualCue: "Look at the two methods on screen: `hasMany(Comment::class)` and `belongsTo(Post::class)`.",
    speakerHook: "Look at Slide 28: 'Eloquent Relationships'. Real databases aren't isolated tables—they connect to each other. Look how simple Laravel makes these links.",
    speakerWalkthrough: "In the Post model, we define `hasMany(Comment::class)`. In the Comment model, we define `belongsTo(Post::class)`. Now, you can simply write `$post->comments` to get all comments, or `$comment->post` to get the parent post. No manual SQL JOIN queries needed!",
    speakerQuestion: "If you have a User model and an Order model on an e-commerce site, what relationship methods would you define?",
    speakerNudge: "Does a User have many Orders? Does an Order belong to a User?",
    expectedStudentAnswers: [
      { studentSays: "User hasMany Orders, and Order belongsTo User.", teacherValidates: "Perfect! It feels like plain English." }
    ],
    goldenRule: "Define relationships once in your models, and traverse your database like an object graph.",
    transitionLine: "Beware of the hidden performance trap! Meet the N+1 problem in Slide 29."
  },
  29: {
    realLifeSample: "Going to the grocery store. Do you make 50 separate trips in your car to buy 50 eggs one by one? Or do you take ONE trip and bring home a carton of 50 eggs? Eager loading is that single efficient trip.",
    slideVisualCue: "Look at the contrast on screen: Lazy Loading (101 queries) vs Eager Loading `Post::with('author')->get()` (2 queries).",
    speakerHook: "Pay attention to Slide 29: this is the number one interview question for backend developers—the N+1 Problem.",
    speakerWalkthrough: "If you fetch 100 posts and loop through them to display each author's name, lazy loading runs 1 query for the posts plus 100 separate queries for each author—that's 101 queries! If your site gets traffic, your database will crash. With eager loading, you write `Post::with('author')->get()`. Laravel runs exactly TWO queries and links them in memory.",
    speakerQuestion: "What is the speed difference between running 101 database queries versus 2 database queries?",
    speakerNudge: "Will the page load in 2 seconds or 20 milliseconds?",
    expectedStudentAnswers: [
      { studentSays: "It's massively faster—2 queries load in milliseconds while 101 queries can crash the server.", teacherValidates: "Spot on! Always use `with()` when accessing relationships inside loops." }
    ],
    goldenRule: "Kill the N+1 problem: always eager load relationships with `with('relation')`.",
    transitionLine: "Want reusable query filters? Look at Query Scopes in Slide 30!"
  },
  30: {
    realLifeSample: "Preset radio buttons on your car dashboard. Instead of manually tuning to 99.5 FM every time you drive, you press button 1 for 'Popular Music' and button 2 for 'News'.",
    slideVisualCue: "Look at `scopePopular()` in the Model and `Post::popular()->get()` in the controller code on screen.",
    speakerHook: "Look at Slide 30: 'Query Scopes'. Don't repeat complex SQL `where` clauses across 10 controllers.",
    speakerWalkthrough: "If you frequently filter posts by `where('views', '>', 1000)` and `where('active', true)`, wrap that logic into a scope method: `scopePopular()`. Now, in any controller or API in your project, you just write `Post::popular()->get()`. If your definition of 'popular' ever changes, you update it in one place.",
    speakerQuestion: "Why does writing `Post::popular()->active()->get()` make your code look like clean literature instead of ugly database queries?",
    speakerNudge: "Can a non-technical project manager understand what that line does?",
    expectedStudentAnswers: [
      { studentSays: "Anyone can read it and immediately understand what data is being fetched.", teacherValidates: "Exactly! Self-documenting code is the hallmark of great developers." }
    ],
    goldenRule: "Keep controllers thin: encapsulate recurring query logic into Eloquent Scopes.",
    transitionLine: "Now let's build beautiful user interfaces! Meet the Blade Templating Engine in Slide 31."
  },
  31: {
    realLifeSample: "A picture frame hanging on your living room wall. The wooden frame and glass stay mounted on the wall; you just slide different photographs into the frame whenever you want without building a new frame.",
    slideVisualCue: "Look at the Blade code on screen with `{{ $title }}` and `@foreach`.",
    speakerHook: "Class, look at Slide 31: 'The Blade Templating Engine'. Blade is Laravel's lightning-fast, expressive templating engine.",
    speakerWalkthrough: "Unlike ugly raw PHP where you write `<?php echo htmlspecialchars($title); ?>`, Blade lets you write `{{ $title }}`. The double curly braces automatically sanitize HTML output to protect your site against Cross-Site Scripting (XSS) attacks. Blade compiles directly into cached PHP for raw speed.",
    speakerQuestion: "Why is `{{ $name }}` safer than writing raw `<?= $name ?>` in vanilla PHP?",
    speakerNudge: "What happens if a user submits `<script>alert('hacked')</script>` as their name?",
    expectedStudentAnswers: [
      { studentSays: "Blade escapes the HTML tags so the hacker's script cannot execute in the browser.", teacherValidates: "Bingo! Automatic XSS defense on every single variable." }
    ],
    goldenRule: "Safety with elegance: `{{ }}` protects against XSS attacks automatically.",
    transitionLine: "Let's see how Blade compiles into pure PHP! Look at the interactive compiler in Slide 32."
  },
  32: {
    realLifeSample: "Shorthand texting abbreviations: when you type 'omw', your smartphone automatically expands it into 'On my way!'. Blade directives are shorthand abbreviations that expand into clean PHP code.",
    slideVisualCue: "Point to the interactive Blade compiler simulation on screen! Tell students: 'Watch how `@if` and `@foreach` compile to PHP on the right!'",
    speakerHook: "Class, look at the interactive Blade compiler playground on your screen right now!",
    speakerWalkthrough: "Look at the left box versus the right box: on the left, you write `@if($user)` and `@foreach($posts as $post)`. On the right, Blade compiles that into standard PHP `if` and `foreach` loops. Because Blade compiles once and caches the result, it runs with zero performance overhead.",
    speakerQuestion: "Why do developers prefer typing `@auth` and `@guest` instead of `<?php if (Auth::check()): ?>`?",
    speakerNudge: "Which one is cleaner and less prone to missing syntax errors?",
    expectedStudentAnswers: [
      { studentSays: "`@auth` is 10 times cleaner, faster to write, and easier to spot in a template.", teacherValidates: "Exactly! Cleaner markup means fewer bugs." }
    ],
    goldenRule: "Write clean directives: Blade compiles to pure, cached PHP under the hood.",
    transitionLine: "How do we share one master layout across all pages? Look at `<x-layout>` in Slide 33!"
  },
  33: {
    realLifeSample: "A pre-printed corporate letterhead. The top company logo, address, and bottom legal footer are already printed on the page. Every employee just prints their custom letter body into the empty space in the middle.",
    slideVisualCue: "Look at `<x-layout>` and `{{ $slot }}` in the code box on your screen.",
    speakerHook: "Look at Slide 33: 'Modern Layout Components'. In older frameworks, you had to write header includes and footer includes on every page. Look how modern Laravel does it.",
    speakerWalkthrough: "We create one master layout file: `resources/views/components/layout.blade.php`. Inside it, we put our HTML boilerplate, navbar, and footer, and place `{{ $slot }}` in the middle. On any page, you just wrap your content in `<x-layout>Your content here</x-layout>`, and Laravel injects it straight into the slot.",
    speakerQuestion: "If you need to change your website's navbar or footer copyright year, how many files do you have to edit?",
    speakerNudge: "Just one file, or all 50 pages?",
    expectedStudentAnswers: [
      { studentSays: "Just that one layout component file!", teacherValidates: "Precisely! Update once, and all 50 pages update instantly." }
    ],
    goldenRule: "Don't repeat yourself: wrap every page in a modern `<x-layout>` component.",
    transitionLine: "Can we build reusable buttons, cards, and modals too? Look at Slide 34!"
  },
  34: {
    realLifeSample: "LEGO bricks. You have a standard blue 4x2 brick. You can use that exact same brick to build a castle wall, a spaceship wing, or a car door. That's a reusable UI component.",
    slideVisualCue: "Look at `<x-card>` and `<x-slot:title>` in the code sample on your screen.",
    speakerHook: "Look at Slide 34: 'Reusable UI Components & Named Slots'. Don't copy-paste the same 15 lines of card HTML on every page.",
    speakerWalkthrough: "You build an `<x-card>` component once. Whenever you need a card, you pass props and named slots: `<x-slot:title>Breaking News</x-slot:title>`. Your card styles stay 100% consistent across your entire website.",
    speakerQuestion: "Why is building with reusable components much easier to redesign than copy-pasting HTML blocks?",
    speakerNudge: "What happens when your client asks you to change button corner rounding from square to rounded?",
    expectedStudentAnswers: [
      { studentSays: "You change the CSS class inside the component once, and every button across the app updates.", teacherValidates: "Spot on! That is professional UI engineering." }
    ],
    goldenRule: "Componentize your UI: build once, reuse everywhere with named slots.",
    transitionLine: "How do we compile Tailwind CSS and JavaScript? Meet Vite in Slide 35!"
  },
  35: {
    realLifeSample: "A vacuum storage bag for luggage. You put all your bulky blankets and winter jackets inside, suck the air out with a vacuum, and it shrinks down to a tiny flat package that fits in your carry-on bag.",
    slideVisualCue: "Look at `@vite(['resources/css/app.css', 'resources/js/app.js'])` on screen.",
    speakerHook: "Look at Slide 35: 'Asset Bundling with Vite'. In modern web apps, we write modern CSS and JavaScript that needs to be compiled fast.",
    speakerWalkthrough: "Vite is the default frontend bundler in Laravel. When you type `@vite([...])` in your Blade layout, Vite provides Hot Module Replacement (HMR). The millisecond you save a CSS or JS file, your browser updates instantly without even reloading the page!",
    speakerQuestion: "Why does instant Hot Module Replacement make frontend styling so much more fun?",
    speakerNudge: "No more manually pressing Ctrl+F5 a hundred times an hour!",
    expectedStudentAnswers: [
      { studentSays: "You see changes in real time the moment you save your file!", teacherValidates: "Yes! It keeps you in the creative flow." }
    ],
    goldenRule: "Lightning-fast frontend: let Vite bundle your assets with instant Hot Module Replacement.",
    transitionLine: "Now let's talk about web security! What is CSRF and the famous 419 error? Look at Slide 36."
  },
  36: {
    realLifeSample: "A bank check with a holographic security watermark. If an imposter photocopies the check and brings it to the bank teller, the teller checks the hologram, sees it's a counterfeit, and immediately rejects the transaction.",
    slideVisualCue: "Look at the `@csrf` directive inside the form on your screen.",
    speakerHook: "Pay close attention to Slide 36: 'CSRF Protection & The 419 Error'. If you submit a form without `@csrf`, Laravel blocks you immediately.",
    speakerWalkthrough: "Cross-Site Request Forgery (CSRF) is an attack where a malicious website tricks your browser into making an unwanted request to a site where you are logged in (like transferring money). Laravel generates a unique secret token for every session. When you add `@csrf` inside your form, Laravel checks that token. If the token is missing or expired, Laravel throws a `419 Page Expired` error and blocks the request.",
    speakerQuestion: "If you build a POST form in Laravel and forget to include `@csrf`, what error will you see when you click submit?",
    speakerNudge: "Is it a 404, a 500, or a 419 error?",
    expectedStudentAnswers: [
      { studentSays: "A 419 Page Expired error!", teacherValidates: "Exactly! Whenever you see 419, your immediate reaction should be: 'Did I forget @csrf?'" }
    ],
    goldenRule: "Every HTML form needs `@csrf`: protect your users against cross-site request forgery.",
    transitionLine: "What if you want to send a PUT or DELETE request from an HTML form? Meet Method Spoofing in Slide 37!"
  },
  37: {
    realLifeSample: "Mailing a letter: standard envelopes only have two options (Standard Post). But if you slap an official 'Certified Priority Express' sticker on the front, the postal system treats it as priority express. `@method('PUT')` is that priority sticker.",
    slideVisualCue: "Look at `@method('PUT')` and `@method('DELETE')` in the form code on screen.",
    speakerHook: "Look at Slide 37: 'Form Method Spoofing'. Did you know standard HTML forms can ONLY send GET and POST requests?",
    speakerWalkthrough: "Browsers don't natively support `<form method='PUT'>` or `<form method='DELETE'>`. But REST standards require PUT to update and DELETE to destroy. Laravel solves this with method spoofing: you keep `method='POST'`, and add `@method('PUT')` inside the form. Laravel reads that hidden field and routes the request to your update method!",
    speakerQuestion: "If you want to create a Delete Post button in Blade, what method directive do you include inside the form?",
    speakerNudge: "Is it `@method('DELETE')`?",
    expectedStudentAnswers: [
      { studentSays: "Add `@method('DELETE')` inside the form!", teacherValidates: "Bingo! And make sure the form itself uses `method='POST'`." }
    ],
    goldenRule: "HTML only knows GET and POST: use `@method('PUT')` and `@method('DELETE')` for RESTful updates.",
    transitionLine: "How do we ensure users don't submit blank forms or invalid emails? Meet Validation in Slide 38!"
  },
  38: {
    realLifeSample: "A bouncer checking IDs at the entrance of a club. If you don't have a valid ID, or you're under 18, the bouncer turns you away right at the door before you can step inside.",
    slideVisualCue: "Look at `$request->validate([...])` in the controller code on your screen.",
    speakerHook: "Class, look at Slide 38: 'Incoming Request Validation'. Never trust data sent from a user's browser.",
    speakerWalkthrough: "In your controller, you call `$request->validate(['title' => 'required|min:5', 'email' => 'required|email'])`. If any rule fails, Laravel automatically stops execution, redirects the user back to the form with error messages, and keeps their previous input!",
    speakerQuestion: "What happens if a user leaves the title blank when submitting the form? Does your database get an empty record?",
    speakerNudge: "Does the code continue to run, or does Laravel redirect immediately?",
    expectedStudentAnswers: [
      { studentSays: "Laravel immediately stops and redirects the user back with an error message.", teacherValidates: "Spot on! Bad data never even reaches your database." }
    ],
    goldenRule: "Validate early, validate often: let `$request->validate()` guard your database.",
    transitionLine: "How do we show errors to the user and keep what they typed? Look at Slide 39!"
  },
  39: {
    realLifeSample: "Filling out a long government passport application online. If you mistype your zip code on field 20, you don't want the website to wipe out your name, birthdate, and address! You want it to highlight the zip code in red and keep everything else you typed.",
    slideVisualCue: "Look at `old('title')` and `@error('title')` in the Blade code on your screen.",
    speakerHook: "Look at Slide 39: 'Displaying Errors & Flashing Old Input'. Have you ever filled out a form, got an error, and had to re-type everything from scratch? It's infuriating!",
    speakerWalkthrough: "Laravel makes user forms delightful. By writing `value=\"{{ old('title') }}\"`, Laravel repopulates whatever the user typed before the error. And with the `@error('title')` directive, you can display a crisp red error message directly below the invalid input.",
    speakerQuestion: "Why is `old()` essential for good user experience on login and registration forms?",
    speakerNudge: "Think about user frustration when a form resets to blank.",
    expectedStudentAnswers: [
      { studentSays: "Users don't get frustrated because they only have to fix the one field that failed.", teacherValidates: "Exactly! Respect your users' time." }
    ],
    goldenRule: "Combine `old()` and `@error()`: keep valid inputs and clearly highlight errors.",
    transitionLine: "Ready to test a live attack simulation? Look at the interactive sandbox in Slide 40!"
  },
  40: {
    realLifeSample: "A car crash-test laboratory. Before cars go on public roads, engineers intentionally crash them into walls with sensors to verify that the airbags deploy and passengers survive.",
    slideVisualCue: "Point to the interactive CSRF & Validation sandbox on screen! Tell students: 'Toggle the CSRF token OFF and click submit to watch Laravel block the fake attack!'",
    speakerHook: "Class, look at the interactive security sandbox on your screen right now! Let's test a live attack simulation.",
    speakerWalkthrough: "On your screen, notice the toggle switch: 'CSRF Token'. Try switching it OFF, and click Submit. Look what happens: Laravel triggers a real HTTP 419 error and blocks the request! Now turn it back ON, leave the title blank, and watch the validation error light up in red.",
    speakerQuestion: "When you toggled the CSRF token OFF, why did Laravel refuse to process the form?",
    speakerNudge: "What did the server think was happening?",
    expectedStudentAnswers: [
      { studentSays: "The server thought the form was forged by a third-party malicious site!", teacherValidates: "Bingo! That is proof that CSRF defense works." }
    ],
    goldenRule: "Security in action: test your defenses in the sandbox so you trust them in production.",
    transitionLine: "Now let's see how a complete feature gets built from scratch! Look at Slide 41."
  },
  41: {
    realLifeSample: "Building a house in 4 logical stages: Stage 1 is laying the concrete foundation (Migration). Stage 2 is framing the structure (Model). Stage 3 is installing electrical and plumbing (Controller). Stage 4 is painting and decorating the rooms (Blade View).",
    slideVisualCue: "Look at the 4-step architectural roadmap diagram on your screen.",
    speakerHook: "Look at Slide 41: 'Building a Real Feature Step-by-Step'. Whenever you want to build a new feature, follow these exact 4 steps.",
    speakerWalkthrough: "Step 1: Create the Migration (`database/migrations`). Step 2: Create the Eloquent Model (`app/Models`). Step 3: Create the Controller & Routes (`app/Http/Controllers`). Step 4: Create the Blade Views (`resources/views`). With one command: `php artisan make:model Post -mcr`, Artisan creates all three backend files for you in one second!",
    speakerQuestion: "Why is following this 4-step sequence (Migration ➔ Model ➔ Controller ➔ View) so bulletproof?",
    speakerNudge: "Can you query a database table before the table has been created?",
    expectedStudentAnswers: [
      { studentSays: "No! You need the database table first before the model and controller can interact with it.", teacherValidates: "Exactly right! Foundation first, then structure, then interface." }
    ],
    goldenRule: "The Artisan formula: `make:model Post -mcr` gives you the Migration, Controller, and Model in one step.",
    transitionLine: "Let's test designing a schema in the interactive sandbox in Slide 42!"
  },
  42: {
    realLifeSample: "A digital drafting blueprint software where architects drag and drop walls, doors, and windows to see how a house looks before pouring concrete.",
    slideVisualCue: "Point to the interactive Schema Builder sandbox on screen! Tell students: 'Add a column and watch the schema code generate!'",
    speakerHook: "Look at the interactive schema sandbox on Slide 42. Go ahead and interact with the column controls on your slide!",
    speakerWalkthrough: "Notice how choosing column types—string for title, text for body, boolean for published—generates the exact Blueprint code you need for your migration. Notice how `timestamps()` automatically gives you `created_at` and `updated_at` columns.",
    speakerQuestion: "Why does Laravel include `created_at` and `updated_at` timestamps on every table by default?",
    speakerNudge: "How often do apps need to know when an order was placed or when an article was updated?",
    expectedStudentAnswers: [
      { studentSays: "Almost every app needs audit trails to know when records were created or modified.", teacherValidates: "Yes! And Eloquent updates those timestamps automatically." }
    ],
    goldenRule: "Blueprint precision: choose the right column types and let Laravel handle the timestamps.",
    transitionLine: "Now let's write the controller logic to save data! Look at Slide 43."
  },
  43: {
    realLifeSample: "The post office clerk taking your package across the counter: they weigh it and verify your address stamp (Validation), log it into the tracking database (Model save), and hand you a tracking receipt (Redirect with success message).",
    slideVisualCue: "Look at the `store()` method in `PostController` on your screen.",
    speakerHook: "Look at the complete `store()` method on Slide 43. This is what a real-world controller action looks like in production.",
    speakerWalkthrough: "Look at the 3 steps inside this method: Step 1: `$validated = $request->validate([...])`. Step 2: `Post::create($validated)`. Step 3: `return redirect()->route('posts.index')->with('success', 'Post created!')`. It's only 10 lines of code, but it validates, protects, saves, and confirms.",
    speakerQuestion: "Notice that we pass `$validated` directly into `Post::create()`. Why is passing `$validated` safer than passing `$request->all()`?",
    speakerNudge: "Does `$validated` only contain the fields that passed your validation rules?",
    expectedStudentAnswers: [
      { studentSays: "Yes! `$validated` strips out any extra fields a hacker tried to inject.", teacherValidates: "Brilliant answer! Only verified, clean data gets saved to your database." }
    ],
    goldenRule: "Validate, create, redirect: the golden trio of every web form controller.",
    transitionLine: "Want to test database queries in a live terminal without loading web pages? Meet Tinker in Slide 44!"
  },
  44: {
    realLifeSample: "Having a direct private hotline to your database. Instead of writing a whole webpage just to see if a user exists, you pick up the phone, ask the database directly, and get an instant answer.",
    slideVisualCue: "Look at the terminal commands on screen: `php artisan tinker`, `User::count()`, and `Post::first()`.",
    speakerHook: "Class, look at Slide 44: 'Interactive REPL with php artisan tinker'. This is every Laravel developer's secret weapon.",
    speakerWalkthrough: "Tinker gives you an interactive command shell with your entire Laravel application loaded into memory. You can run `User::count()`, create new records, test relationships, or dispatch jobs directly from the terminal. No need to create temporary routes or `var_dump()` in controllers!",
    speakerQuestion: "How does Tinker save you time when debugging why a database relationship isn't working?",
    speakerNudge: "Can you test `$post->comments` directly in the terminal in 3 seconds?",
    expectedStudentAnswers: [
      { studentSays: "You get instant feedback in the terminal without opening a browser or writing dummy test pages.", teacherValidates: "Exactly! It speeds up debugging by 10x." }
    ],
    goldenRule: "Debug interactively: `php artisan tinker` is your playground to test queries in real time.",
    transitionLine: "Try running a query right now! Look at the interactive Tinker shell sandbox in Slide 45."
  },
  45: {
    realLifeSample: "A flight simulator cockpit. Before pilots take off in a real commercial jet, they test every button and throttle in the simulator to see how the plane responds safely.",
    slideVisualCue: "Point to the interactive Tinker terminal simulation on screen! Tell students: 'Click the sample query buttons and watch the terminal response!'",
    speakerHook: "Class, look at the interactive Tinker terminal on your screen right now! Let's test running real commands.",
    speakerWalkthrough: "Notice how the simulated terminal responds to commands like `Post::all()` and `User::where('email', '...')->first()`. Notice how Eloquent formats the output as clean JSON objects with timestamps. This is the exact same experience you get in your real terminal.",
    speakerQuestion: "Why do developers use Tinker during live database debugging instead of editing database tables directly in MySQL Workbench?",
    speakerNudge: "Does Tinker trigger Eloquent model events and casts?",
    expectedStudentAnswers: [
      { studentSays: "Yes! Tinker runs through Eloquent, so casts, mutators, and model events run properly.", teacherValidates: "Spot on! It guarantees application logic is respected." }
    ],
    goldenRule: "Practice in the terminal: Tinker makes you intimate with your data.",
    transitionLine: "Need a complete login and registration system in 1 minute? Meet Breeze in Slide 46!"
  },
  46: {
    realLifeSample: "Buying a modern move-in ready apartment where the keycard doors, security alarms, lighting, and air conditioning are already installed and tested. You don't build door locks from scratch.",
    slideVisualCue: "Look at the Laravel Breeze authentication overview on your screen.",
    speakerHook: "Look at Slide 46: 'Starter Kits & Authentication'. Building user login, registration, email verification, and password resets from scratch takes days. Look how Laravel solves it.",
    speakerWalkthrough: "Laravel provides Breeze—a minimal, production-ready authentication starter kit. With one command, `composer require laravel/breeze --dev` followed by `php artisan breeze:install`, Breeze scaffolds complete login, registration, password hashing, and profile editing views with clean Tailwind CSS.",
    speakerQuestion: "Why is using Laravel Breeze infinitely safer than writing your own custom login verification scripts in raw PHP?",
    speakerNudge: "Think about timing-safe password comparisons, session fixation defense, and secure bcrypt hashing.",
    expectedStudentAnswers: [
      { studentSays: "Breeze is written by world-class security engineers and follows strict cryptography standards.", teacherValidates: "Exactly! Never roll your own custom cryptographic authentication when official battle-tested tools exist." }
    ],
    goldenRule: "Don't reinvent auth: start every new project with Laravel Breeze.",
    transitionLine: "How do we make sure our code never breaks when we add new features? Meet Automated Testing in Slide 47!"
  },
  47: {
    realLifeSample: "An automobile safety crash test and brake inspection before a car leaves the factory. The robotic testing machines verify that every brake pad and airbag triggers perfectly before a human driver takes the wheel.",
    slideVisualCue: "Look at the Pest PHP code on screen: `it('has a homepage', function() { ... })`.",
    speakerHook: "Turn your eyes to Slide 47: 'Testing with Pest PHP'. Professional developers don't manually click through 50 web pages to check if they broke something—they write automated tests.",
    speakerWalkthrough: "Pest is the elegant testing framework in Laravel. Look at the code on screen—it reads like plain English sentences: `it('has a homepage', function () { $response = $this->get('/'); $response->assertStatus(200); });`. You run `php artisan test`, and in 2 seconds, Pest tests 50 pages and guarantees everything works.",
    speakerQuestion: "How does having automated tests give you superpowers when deploying updates on a Friday afternoon?",
    speakerNudge: "Would you be scared to push code if you knew 50 automated tests passed with 100% green checkmarks?",
    expectedStudentAnswers: [
      { studentSays: "You have total confidence that you didn't accidentally break existing features.", teacherValidates: "Yes! Green tests mean fearless deployments." }
    ],
    goldenRule: "Test automatically: write Pest tests so you can refactor code without fear.",
    transitionLine: "How do we prepare our application for millions of live users? Look at Optimization in Slide 48!"
  },
  48: {
    realLifeSample: "Tuning a Formula 1 racing car in the pit lane before the championship race: mechanics change tires, tune aerodynamics, and lock down weight so the car reaches maximum top speed without overheating.",
    slideVisualCue: "Look at the terminal commands on screen: `php artisan optimize` and `APP_DEBUG=false`.",
    speakerHook: "Class, look at Slide 48: 'Production Readiness & Optimization'. Before you open your website to the public, there are two golden rules you MUST follow.",
    speakerWalkthrough: "Golden Rule 1: Set `APP_DEBUG=false` in your production `.env`. If an error occurs, you never want your database password and secret keys splashed across the user's screen! Golden Rule 2: Run `php artisan optimize`. This caches all your routes, configuration files, and Blade templates into lightning-fast lookup tables, doubling or tripling your server throughput.",
    speakerQuestion: "What disastrous leak happens if you leave `APP_DEBUG=true` on a live production website?",
    speakerNudge: "What does Laravel's error screen show when a database query fails?",
    expectedStudentAnswers: [
      { studentSays: "It exposes database passwords, secret keys, and server file paths to the public!", teacherValidates: "Critical rule! Exactly right. Always set `APP_DEBUG=false` before going live." }
    ],
    goldenRule: "Never forget: `APP_DEBUG=false` for security, `php artisan optimize` for maximum speed.",
    transitionLine: "Now let's review everything we have mastered today! Look at the Course Summary in Slide 49."
  },
  49: {
    realLifeSample: "A pilot's pre-flight checklist. Before the plane leaves the tarmac, the captain and co-pilot verify every green light: engines, hydraulics, fuel, radar, and cabin pressure. You are now cleared for flight.",
    slideVisualCue: "Look at the 10 master checklist checkmarks on your screen.",
    speakerHook: "Class, take a moment to look at the checklist on Slide 49. Look at how far you have come today!",
    speakerWalkthrough: "You started from project setup and streamlined architecture. You mastered routing, controllers, route model binding, migrations, SQLite, Eloquent relationships, Blade layouts, CSRF defense, validation, and production optimization. You now understand the full lifecycle of modern web engineering.",
    speakerQuestion: "Looking back across all of these milestones, which concept made you think, 'Wow, this is going to save me so much time in my own projects'?",
    speakerNudge: "Was it Route Model Binding? Blade Components? Or Eloquent ORM?",
    expectedStudentAnswers: [
      { studentSays: "Eloquent ORM and Relationships—queries are so much easier than raw SQL.", teacherValidates: "It truly changes how you think about databases." },
      { studentSays: "Resource controllers and route model binding—so much boilerplate gone.", teacherValidates: "Spot on! You can build features in hours instead of days." }
    ],
    goldenRule: "You are now web artisans: you have the knowledge to build, secure, and deploy modern applications.",
    transitionLine: "Now it's time to prove your skills! Look at Slide 50 to explore the project directory and launch your quiz!"
  },
  50: {
    realLifeSample: "Receiving your graduation diploma and stepping out onto the field ready to play. You have the training; now you take the test and build your first masterpiece.",
    slideVisualCue: "Point to the interactive project directory explorer and the 'Launch Quiz' button on your screen!",
    speakerHook: "Congratulations everyone! We have officially arrived at our final milestone: Slide 50.",
    speakerWalkthrough: "On your screen, take a final tour through the interactive project directory explorer. Review where every model, controller, route, and migration lives. When you feel ready, click the 'Launch Assessment Quiz' button to test your knowledge with the 10-question evaluation.",
    speakerQuestion: "Who is ready to take the assessment quiz and verify your mastery right now?",
    speakerNudge: "Remember what we learned: conventions over configuration, `@csrf` protection, and clean Eloquent queries!",
    expectedStudentAnswers: [
      { studentSays: "Ready! Let's take the quiz!", teacherValidates: "Fantastic energy! Go ahead and launch your quiz and show what you've learned. Good luck everyone!" }
    ],
    goldenRule: "The best way to learn code is to write code: open your terminal, run `laravel new`, and build something amazing.",
    transitionLine: "Click the quiz button on your slide and let's verify your mastery. Great job everyone!"
  }
};

// ============================================================================
// FACE GUIDE COMPILER
// ============================================================================
interface FaceGuide {
  focus: {
    hookSayThis: string;
    teacherAction: string;
    analogy: string;
  };
  analyze: {
    visualCue: string;
    coreConceptSayThis: string;
    underTheHoodSayThis: string;
    keyTakeaways: string[];
  };
  challenge: {
    managementTechnique: {
      name: string;
      badge: string;
      procedure: string;
      timerDefaultSeconds: number;
    };
    questionToAsk: string;
    ifStuckNudge: string;
    dialoguePairs: {
      studentSays: string;
      teacherValidates: string;
    }[];
  };
  echo: {
    goldenRule: string;
    transitionSayThis: string;
  };
}

function buildFaceGuide(slide: SlideData, index: number, allSlides: SlideData[]): FaceGuide {
  const slideNum = slide.slideNum || index + 1;
  const customGuide = LARAVEL_SPEAKER_GUIDES[slideNum];

  // Rotate through 4 student management strategies
  const techniques = [
    {
      name: '30-Second Think-Pair-Share',
      badge: '👥 Pair Discussion',
      procedure: 'Tell students: "Turn to your seatmate and take 30 seconds to discuss this question. Go!" Start the 30s timer, then call on 1-2 pairs.',
      timerDefaultSeconds: 30
    },
    {
      name: 'Rapid Room Poll (Show of Hands)',
      badge: '✋ Show of Hands',
      procedure: 'Ask the room: "Quick show of hands: who thinks A? Who thinks B?" Scan the room, acknowledge both sides, then ask 1 student to explain their reasoning.',
      timerDefaultSeconds: 15
    },
    {
      name: 'Friendly Cold Call (With Safety Hint)',
      badge: '🎯 Friendly Cold Call',
      procedure: 'Call on a student warmly: "Alex, what comes to mind?" If they hesitate, immediately share the safety hint so they feel supported and confident.',
      timerDefaultSeconds: 20
    },
    {
      name: 'Interactive Screen Check (iPad / Laptop)',
      badge: '💻 Live Screen Check',
      procedure: 'Instruct students: "Look at the interactive simulator or code sample on your screen right now. Test the buttons before we discuss."',
      timerDefaultSeconds: 45
    }
  ];
  const chosenTechnique = techniques[index % techniques.length];

  // Teacher Physical Stage Direction
  let teacherAction = 'Stand center stage. Point to the slide heading on the screen. Make eye contact with both left and right sides of the room.';
  if (slide.code) {
    teacherAction = 'Point directly to the code snippet on screen. Say: "Before I say a word, let your eyes trace this syntax for 5 seconds."';
  } else if (slide.type === 'comparison') {
    teacherAction = 'Use both hands: hold up your left hand for "Vanilla PHP (Manual)" and your right hand for "Laravel (Automated)".';
  } else if (customGuide?.slideVisualCue.includes('simulator') || customGuide?.slideVisualCue.includes('playground')) {
    teacherAction = 'Tap the interactive simulator on your screen to trigger visual feedback, then turn back to address the classroom.';
  }

  // If custom guide exists, use its rich tailored data
  if (customGuide) {
    return {
      focus: {
        hookSayThis: cleanSpeakerText(customGuide.speakerHook),
        teacherAction,
        analogy: cleanSpeakerText(customGuide.realLifeSample)
      },
      analyze: {
        visualCue: cleanSpeakerText(customGuide.slideVisualCue),
        coreConceptSayThis: cleanSpeakerText(customGuide.speakerWalkthrough),
        underTheHoodSayThis: cleanSpeakerText(slide.whatIsGoingOn || 'Laravel processes this cleanly through its service container and automated pipelines, removing repetitive plumbing.'),
        keyTakeaways: slide.bullets?.map(b => cleanSpeakerText(b)).slice(0, 3) || [
          'Enforces standard enterprise web architecture.',
          'Eliminates manual boilerplate and security vulnerabilities.',
          'Boosts development velocity while preserving code readability.'
        ]
      },
      challenge: {
        managementTechnique: chosenTechnique,
        questionToAsk: cleanSpeakerText(customGuide.speakerQuestion),
        ifStuckNudge: cleanSpeakerText(customGuide.speakerNudge),
        dialoguePairs: customGuide.expectedStudentAnswers.map(pair => ({
          studentSays: cleanSpeakerText(pair.studentSays),
          teacherValidates: cleanSpeakerText(pair.teacherValidates)
        }))
      },
      echo: {
        goldenRule: cleanSpeakerText(customGuide.goldenRule),
        transitionSayThis: cleanSpeakerText(customGuide.transitionLine)
      }
    };
  }

  // Dynamic fallback for any non-mapped slides
  const nextSlide = allSlides[index + 1];
  const topicName = cleanSpeakerText(slide.topicTitle || slide.title || 'this core concept');
  const whatItDoes = cleanSpeakerText(slide.whatItDoes || slide.bullets?.[0] || 'Standardizes our application architecture.');
  const underTheHood = cleanSpeakerText(slide.whatIsGoingOn || slide.bullets?.[1] || 'Laravel automatically handles dependency resolution and request dispatching.');

  return {
    focus: {
      hookSayThis: `Class, look at Slide ${slideNum}: "${cleanSpeakerText(slide.title)}". In real-world software engineering, mastering ${topicName} is what separates junior copy-pasters from senior software architects. Let's see why.`,
      teacherAction,
      analogy: cleanSpeakerText(slide.layman?.text || 'Think of this like a standardized blueprint: once you build it according to conventions, everything fits together smoothly.')
    },
    analyze: {
      visualCue: slide.code 
        ? 'Look at the code sample on screen. Trace the class imports and method calls.'
        : 'Look at the highlighted key concepts on your screen from top to bottom.',
      coreConceptSayThis: `Here is what this does in plain terms: ${whatItDoes}. Instead of writing manual boilerplate code, Laravel provides a clean, expressive API.`,
      underTheHoodSayThis: `Behind the scenes, here is what Laravel is doing: ${underTheHood}. It handles the low-level plumbing so you can focus on building features.`,
      keyTakeaways: slide.bullets?.map(b => cleanSpeakerText(b)).slice(0, 3) || [
        'Enforces standard enterprise web architecture.',
        'Eliminates manual boilerplate and security vulnerabilities.',
        'Boosts development velocity while preserving code readability.'
      ]
    },
    challenge: {
      managementTechnique: chosenTechnique,
      questionToAsk: cleanSpeakerText(slide.discussionPrompt?.question || `Why do professional development teams prefer using ${slide.title} rather than writing custom code from scratch?`),
      ifStuckNudge: cleanSpeakerText(slide.discussionPrompt?.hint || 'Think about what happens to maintenance, security, and team collaboration when a project grows to thousands of users.'),
      dialoguePairs: slide.discussionPrompt?.talkingPoints?.map((pt, pIdx) => ({
        studentSays: pIdx === 0 ? 'It saves time and prevents repetitive boilerplate code.' : 'It provides built-in security features.',
        teacherValidates: `Affirm: "Spot on! ${cleanSpeakerText(pt)}"`
      })) || [
        {
          studentSays: 'It saves time and prevents repetitive boilerplate code.',
          teacherValidates: 'Affirm: "Exactly right! You don\'t want to reinvent authentication and routing for every new client project."'
        },
        {
          studentSays: 'It provides built-in security features.',
          teacherValidates: 'Affirm: "Spot on! The framework protects against CSRF, SQL injection, and session hijacking out of the box."'
        }
      ]
    },
    echo: {
      goldenRule: cleanSpeakerText(slide.keyInsight?.text || 'Conventions over configuration: Let Laravel handle the plumbing so you can focus on your features.'),
      transitionSayThis: nextSlide 
        ? `Now that everyone understands ${cleanSpeakerText(slide.title)}, let's see how this connects directly to Slide ${slideNum + 1}: "${cleanSpeakerText(nextSlide.title)}". Let's move on!`
        : `We have officially covered all 50 slides in this course! Open your quiz links and let's verify your mastery. Great job everyone!`
    }
  };
}

// ============================================================================
// MAIN TEACHER GUIDE COMPONENT
// ============================================================================
function TeacherGuideContent() {
  const searchParams = useSearchParams();
  const lessonId = searchParams.get('id') || 'laravel11';

  const [viewMode, setViewMode] = useState<'presenter' | 'outline'>('presenter');
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedModule, setSelectedModule] = useState<string>('All');
  const [copiedQuestion, setCopiedQuestion] = useState(false);
  const [fontSizeMode, setFontSizeMode] = useState<'normal' | 'large'>('large');

  // Interactive discussion countdown timer
  const [timerSeconds, setTimerSeconds] = useState<number | null>(null);
  const [timerActive, setTimerActive] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Lesson resolution
  const lesson: Lesson = useMemo(() => {
    return DEFAULT_LESSONS.find((l) => l.id === lessonId) || DEFAULT_LESSONS[1] || {
      id: 'laravel11',
      title: 'Laravel Fundamentals',
      week: 1,
      description: 'Official Laravel Walkthrough',
      isActive: true,
      slideCount: 50,
      badgeColor: 'rose'
    };
  }, [lessonId]);

  // Slides resolution
  const slides: SlideData[] = useMemo(() => {
    if (lessonId === 'laravel11') return laravelSlidesData;
    if (lessonId === 'week1') return slidesData;
    if (lessonId === 'mediadsn1') return mediaDsnSlidesData;
    if (lessonId === 'webdev1') return webdevSlidesData;
    return laravelSlidesData;
  }, [lessonId]);

  // Modules list
  const modules = useMemo(() => {
    const list = new Set<string>();
    slides.forEach((s) => {
      if (s.moduleTag) list.add(cleanSpeakerText(s.moduleTag));
    });
    return ['All', ...Array.from(list)];
  }, [slides]);

  // Filtered slides for outline view or search
  const filteredSlides = useMemo(() => {
    return slides.filter((slide) => {
      const matchesModule = selectedModule === 'All' || cleanSpeakerText(slide.moduleTag) === selectedModule;
      if (!matchesModule) return false;

      if (!searchQuery.trim()) return true;
      const query = searchQuery.toLowerCase();
      return (
        slide.title?.toLowerCase().includes(query) ||
        slide.topicTitle?.toLowerCase().includes(query) ||
        slide.whatItDoes?.toLowerCase().includes(query) ||
        slide.whatIsGoingOn?.toLowerCase().includes(query) ||
        slide.discussionPrompt?.question.toLowerCase().includes(query) ||
        String(slide.slideNum) === query
      );
    });
  }, [slides, selectedModule, searchQuery]);

  // Keyboard navigation for presenter mode
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (viewMode !== 'presenter') return;
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === 'j') {
        e.preventDefault();
        setActiveSlideIndex((prev) => Math.min(prev + 1, slides.length - 1));
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp' || e.key === 'k') {
        e.preventDefault();
        setActiveSlideIndex((prev) => Math.max(prev - 1, 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [viewMode, slides.length]);

  const currentSlide = slides[activeSlideIndex] || slides[0];
  const currentFace = useMemo(() => {
    return buildFaceGuide(currentSlide, activeSlideIndex, slides);
  }, [currentSlide, activeSlideIndex, slides]);

  // Timer logic for student discussion
  const startTimer = (seconds: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    setTimerSeconds(seconds);
    setTimerActive(true);

    timerRef.current = setInterval(() => {
      setTimerSeconds((prev) => {
        if (prev === null || prev <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          setTimerActive(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const stopTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setTimerActive(false);
    setTimerSeconds(null);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleCopyQuestion = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedQuestion(true);
    setTimeout(() => setCopiedQuestion(false), 1800);
  };

  // Typography scaling
  const scriptTextSize = fontSizeMode === 'large' 
    ? 'text-base sm:text-lg leading-relaxed' 
    : 'text-sm sm:text-base leading-relaxed';

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans print:bg-white print:text-black antialiased selection:bg-rose-500 selection:text-white">
      
      {/* ====================================================================== */}
      {/* TOP INSTRUCTOR NAVIGATION BAR                                          */}
      {/* ====================================================================== */}
      <header className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-xl border-b border-slate-800/80 px-4 sm:px-8 py-3 print:hidden shadow-lg">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          
          {/* Left: Branding & Lesson Badge */}
          <div className="flex items-center gap-3">
            <Link
              href="/admin/"
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition shadow-sm"
              title="Return to Admin Dashboard"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>

            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-md bg-gradient-to-r from-rose-600 to-red-600 text-white font-mono font-bold text-[10px] uppercase tracking-wider shadow-sm">
                  FACE Teaching Method
                </span>
                <span className="text-[11px] text-slate-400 font-mono hidden md:inline">
                  Focus • Analyze • Challenge • Echo
                </span>
              </div>
              <h1 className="font-lexend text-sm sm:text-base font-bold text-white mt-0.5 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-rose-500 shrink-0" />
                <span>{cleanSpeakerText(lesson.title)}</span>
                <span className="text-slate-500 font-normal text-xs hidden sm:inline">• Speaker Discussion Script</span>
              </h1>
            </div>
          </div>

          {/* Right: Controls & Actions */}
          <div className="flex items-center gap-2">
            
            {/* Font Size Toggle for iPad / Distance Reading */}
            <button
              onClick={() => setFontSizeMode((prev) => (prev === 'large' ? 'normal' : 'large'))}
              className={`px-2.5 py-1.5 rounded-xl border text-xs font-mono font-semibold flex items-center gap-1.5 transition ${
                fontSizeMode === 'large'
                  ? 'bg-indigo-600/20 border-indigo-500/50 text-indigo-300'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
              }`}
              title="Toggle Large Font for iPad / Distance Reading"
            >
              <Type className="w-3.5 h-3.5" />
              <span>{fontSizeMode === 'large' ? 'Large Text' : 'Standard'}</span>
            </button>

            {/* View Mode Switcher */}
            <div className="bg-slate-900 border border-slate-800 p-1 rounded-xl flex items-center gap-1">
              <button
                onClick={() => setViewMode('presenter')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                  viewMode === 'presenter'
                    ? 'bg-rose-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Single Slide Teleprompter Mode (Arrow Keys ← / →)"
              >
                <Compass className="w-3.5 h-3.5" />
                <span>Presenter</span>
              </button>
              <button
                onClick={() => setViewMode('outline')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                  viewMode === 'outline'
                    ? 'bg-rose-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="View All Slides Outline"
              >
                <ListOrdered className="w-3.5 h-3.5" />
                <span>All Slides</span>
              </button>
            </div>

            <button
              onClick={() => window.print()}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition"
              title="Print or Save PDF"
            >
              <Printer className="w-4 h-4" />
            </button>

            {/* Open Student Live Slides in New Tab */}
            <Link
              href={`/lesson/?id=${lesson.id}`}
              target="_blank"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white text-xs font-bold shadow-sm transition"
              title="Open Student Slides in Separate Screen"
            >
              <Play className="w-3 h-3 fill-current" />
              <span className="hidden sm:inline">Launch Slides</span>
              <ExternalLink className="w-3 h-3 text-rose-200" />
            </Link>
          </div>

        </div>
      </header>

      {/* ====================================================================== */}
      {/* MODE 1: PRESENTER MODE (SLIDE-BY-SLIDE TELEPROMPTER)                     */}
      {/* ====================================================================== */}
      {viewMode === 'presenter' && (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 space-y-6">
          
          {/* Slide Progress & Navigation Toolbar */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-3 sm:p-4 shadow-xl backdrop-blur-md">
            <div className="flex flex-wrap items-center justify-between gap-3">
              
              {/* Left: Active Slide Info */}
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 to-red-600 text-white flex items-center justify-center font-mono font-bold text-sm shadow-md">
                  #{activeSlideIndex + 1}
                </span>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-rose-400 font-bold block">
                    {cleanSpeakerText(currentSlide.moduleTag) || 'Curriculum Milestone'}
                  </span>
                  <h2 className="font-lexend text-base sm:text-lg font-bold text-white leading-tight">
                    {cleanSpeakerText(currentSlide.title)}
                  </h2>
                </div>
              </div>

              {/* Right: Quick Jump & Arrow Controls */}
              <div className="flex items-center gap-2">
                <select
                  value={activeSlideIndex}
                  onChange={(e) => setActiveSlideIndex(Number(e.target.value))}
                  className="bg-slate-950 border border-slate-800 text-xs text-slate-200 rounded-xl px-3 py-2 focus:outline-none focus:border-rose-500 font-mono max-w-[180px] sm:max-w-xs truncate"
                >
                  {slides.map((s, idx) => (
                    <option key={s.id} value={idx}>
                      #{idx + 1}: {cleanSpeakerText(s.title)}
                    </option>
                  ))}
                </select>

                <div className="flex items-center gap-1 bg-slate-950 border border-slate-800 rounded-xl p-1">
                  <button
                    onClick={() => setActiveSlideIndex((prev) => Math.max(prev - 1, 0))}
                    disabled={activeSlideIndex === 0}
                    className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-900 disabled:opacity-25 transition"
                    title="Previous Slide (← or K)"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  <span className="text-xs font-mono font-bold text-slate-400 px-2 min-w-[55px] text-center">
                    {activeSlideIndex + 1} / {slides.length}
                  </span>

                  <button
                    onClick={() => setActiveSlideIndex((prev) => Math.min(prev + 1, slides.length - 1))}
                    disabled={activeSlideIndex === slides.length - 1}
                    className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-900 disabled:opacity-25 transition"
                    title="Next Slide (→ or J)"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

            {/* Visual Progress Bar */}
            <div className="w-full bg-slate-950 h-1.5 rounded-full overflow-hidden mt-3 border border-slate-800/60">
              <div 
                className="bg-gradient-to-r from-rose-500 to-amber-500 h-full transition-all duration-300"
                style={{ width: `${((activeSlideIndex + 1) / slides.length) * 100}%` }}
              />
            </div>
          </div>

          {/* 4-PHASE FACE FRAMEWORK CARDS */}
          <div className="space-y-5">
            
            {/* ============================================================= */}
            {/* PHASE 1: [ F ] FOCUS (The Hook & Engagement)                  */}
            {/* ============================================================= */}
            <div className="bg-slate-900/90 border-2 border-amber-500/50 rounded-3xl p-5 sm:p-7 shadow-xl relative overflow-hidden transition">
              <div className="flex items-center justify-between pb-3 border-b border-amber-500/20 mb-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-xl bg-amber-500 text-slate-950 font-black font-mono flex items-center justify-center text-sm shadow-md">
                    F
                  </span>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold block">
                      Phase 1 • FOCUS (The Speaker's Hook)
                    </span>
                    <h3 className="font-lexend text-base font-bold text-amber-200">
                      Grab Classroom Attention & Relate to Real Life
                    </h3>
                  </div>
                </div>

                <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-bold">
                  Step 1 • 1–2 Mins
                </span>
              </div>

              {/* Stage Direction / Physical Action */}
              <div className="mb-4 p-3 rounded-2xl bg-amber-950/40 border border-amber-500/30 text-xs text-amber-200 flex items-start gap-2.5">
                <span className="font-bold uppercase tracking-wider shrink-0 bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded text-[10px]">
                  🎬 Stage Direction
                </span>
                <span className="leading-relaxed">{currentFace.focus.teacherAction}</span>
              </div>

              {/* Spoken Speech Bubble */}
              <div className="bg-gradient-to-br from-amber-500/15 via-slate-950 to-slate-950 border border-amber-500/50 rounded-2xl p-4 sm:p-5 shadow-inner">
                <div className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-amber-400 font-bold mb-2">
                  <Volume2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>🗣️ Speak This Naturally to the Room:</span>
                </div>
                <p className={`text-white font-medium ${scriptTextSize}`}>
                  "{currentFace.focus.hookSayThis}"
                </p>
              </div>

              {/* Real-World Analogy & Sample */}
              <div className="mt-3.5 p-3.5 rounded-2xl bg-slate-950/80 border border-amber-500/30 text-xs text-slate-300 flex items-start gap-2.5">
                <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-amber-300 block text-[11px] uppercase tracking-wider mb-0.5 font-mono">
                    💡 Real-Life Everyday Example:
                  </strong>
                  <span className="leading-relaxed text-slate-200">{currentFace.focus.analogy}</span>
                </div>
              </div>
            </div>

            {/* ============================================================= */}
            {/* PHASE 2: [ A ] ANALYZE (Core Lesson & Mechanics)              */}
            {/* ============================================================= */}
            <div className="bg-slate-900/90 border-2 border-indigo-500/50 rounded-3xl p-5 sm:p-7 shadow-xl relative overflow-hidden transition">
              <div className="flex items-center justify-between pb-3 border-b border-indigo-500/20 mb-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-xl bg-indigo-500 text-white font-black font-mono flex items-center justify-center text-sm shadow-md">
                    A
                  </span>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-indigo-400 font-bold block">
                      Phase 2 • ANALYZE (The Core Lesson)
                    </span>
                    <h3 className="font-lexend text-base font-bold text-indigo-200">
                      Explain The Concept & What Students See on Screen
                    </h3>
                  </div>
                </div>

                <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 font-bold">
                  Step 2 • 2–3 Mins
                </span>
              </div>

              {/* Slide Visual Cue / Simulation Pointer */}
              <div className="mb-4 p-3.5 rounded-2xl bg-indigo-950/40 border border-indigo-500/40 text-xs text-indigo-200 flex items-start gap-2.5">
                <Smartphone className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-indigo-300 block text-[10px] uppercase tracking-wider mb-0.5 font-mono">
                    📱 What Students Are Looking At on Their Slide:
                  </strong>
                  <span className="leading-relaxed text-indigo-100">{currentFace.analyze.visualCue}</span>
                </div>
              </div>

              {/* Spoken Core Concept */}
              <div className="space-y-3">
                <div className="bg-gradient-to-br from-indigo-500/15 via-slate-950 to-slate-950 border border-indigo-500/50 rounded-2xl p-4 sm:p-5 shadow-inner">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-indigo-400 font-bold mb-2">
                    <Target className="w-3.5 h-3.5 text-indigo-400" />
                    <span>🗣️ Speak This to Explain What This Feature Does:</span>
                  </div>
                  <p className={`text-white font-medium ${scriptTextSize}`}>
                    "{currentFace.analyze.coreConceptSayThis}"
                  </p>
                </div>

                {/* Under the Hood Mechanics */}
                <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 sm:p-5 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-indigo-400 font-bold">
                    <Cpu className="w-3.5 h-3.5 text-indigo-400" />
                    <span>⚙️ How It Works in Plain Words (Under the Hood):</span>
                  </div>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {currentFace.analyze.underTheHoodSayThis}
                  </p>
                </div>
              </div>
            </div>

            {/* ============================================================= */}
            {/* PHASE 3: [ C ] CHALLENGE (Student Management & Discussion)     */}
            {/* ============================================================= */}
            <div className="bg-slate-900/90 border-2 border-emerald-500/50 rounded-3xl p-5 sm:p-7 shadow-xl relative overflow-hidden transition">
              <div className="flex items-center justify-between pb-3 border-b border-emerald-500/20 mb-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-xl bg-emerald-500 text-slate-950 font-black font-mono flex items-center justify-center text-sm shadow-md">
                    C
                  </span>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold block">
                      Phase 3 • CHALLENGE & CONNECT (Discussion)
                    </span>
                    <h3 className="font-lexend text-base font-bold text-emerald-200">
                      Manage Student Engagement with Real Questions
                    </h3>
                  </div>
                </div>

                <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-bold">
                  Step 3 • 2–3 Mins
                </span>
              </div>

              {/* Student Management Strategy Card with Timer */}
              <div className="mb-4 p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 flex flex-wrap items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-md bg-emerald-500 text-slate-950 font-mono font-bold text-[10px] uppercase">
                      {currentFace.challenge.managementTechnique.badge}
                    </span>
                    <span className="font-bold text-emerald-200 text-xs sm:text-sm">
                      {currentFace.challenge.managementTechnique.name}
                    </span>
                  </div>
                  <p className="text-emerald-300 text-xs leading-relaxed max-w-xl">
                    {currentFace.challenge.managementTechnique.procedure}
                  </p>
                </div>

                {/* Quick Discussion Timer Controls */}
                <div className="flex items-center gap-2 bg-slate-950/90 border border-emerald-500/30 px-3 py-1.5 rounded-xl">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" />
                  {timerSeconds !== null ? (
                    <span className="font-mono font-bold text-sm text-emerald-300 min-w-[32px] text-center">
                      {timerSeconds}s
                    </span>
                  ) : (
                    <span className="font-mono text-xs text-slate-400">
                      {currentFace.challenge.managementTechnique.timerDefaultSeconds}s
                    </span>
                  )}

                  {!timerActive ? (
                    <button
                      onClick={() => startTimer(currentFace.challenge.managementTechnique.timerDefaultSeconds)}
                      className="px-2 py-0.5 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-bold transition shadow-sm"
                    >
                      Start
                    </button>
                  ) : (
                    <button
                      onClick={stopTimer}
                      className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition"
                      title="Reset Timer"
                    >
                      <RotateCcw className="w-3 h-3" />
                    </button>
                  )}
                </div>
              </div>

              {/* The Spoken Discussion Question */}
              <div className="bg-gradient-to-br from-emerald-500/15 via-slate-950 to-slate-950 border border-emerald-500/50 rounded-2xl p-4 sm:p-5 shadow-inner space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-bold block">
                    ❓ Throw This Question to the Room:
                  </span>
                  <button
                    onClick={() => handleCopyQuestion(currentFace.challenge.questionToAsk)}
                    className="text-[10px] text-emerald-300 hover:text-white bg-emerald-950/80 px-2.5 py-1 rounded-lg border border-emerald-700/60 flex items-center gap-1.5 transition"
                  >
                    {copiedQuestion ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedQuestion ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                <p className={`text-white font-bold ${scriptTextSize}`}>
                  "{currentFace.challenge.questionToAsk}"
                </p>
              </div>

              {/* Safety Net: Spoken Nudge If Silent */}
              <div className="mt-3.5 p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300">
                <strong className="text-emerald-400 block text-[11px] uppercase tracking-wider mb-1 font-mono">
                  💡 If Students Are Quiet, Say This Nudge:
                </strong>
                <p className="italic text-slate-200">
                  "{currentFace.challenge.ifStuckNudge}"
                </p>
              </div>

              {/* Expected Student Answers & Validation */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
                  🗣️ Real Student Answers & How to Validate:
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {currentFace.challenge.dialoguePairs.map((pair, pIdx) => (
                    <div key={pIdx} className="bg-slate-950/90 border border-slate-800/80 p-3 rounded-xl space-y-1 text-xs">
                      <div className="flex items-start gap-1.5 text-slate-300">
                        <span className="font-mono text-emerald-400 font-bold">Student:</span>
                        <span>"{pair.studentSays}"</span>
                      </div>
                      <div className="flex items-start gap-1.5 text-emerald-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="font-medium">{pair.teacherValidates}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* ============================================================= */}
            {/* PHASE 4: [ E ] ECHO (Wrap-Up, Synthesis & Transition)         */}
            {/* ============================================================= */}
            <div className="bg-slate-900/90 border-2 border-rose-500/50 rounded-3xl p-5 sm:p-7 shadow-xl relative overflow-hidden transition">
              <div className="flex items-center justify-between pb-3 border-b border-rose-500/20 mb-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-xl bg-rose-600 text-white font-black font-mono flex items-center justify-center text-sm shadow-md">
                    E
                  </span>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-rose-400 font-bold block">
                      Phase 4 • ECHO & EVALUATE (Wrap-Up)
                    </span>
                    <h3 className="font-lexend text-base font-bold text-rose-200">
                      Summarize The Golden Rule & Bridge Smoothly
                    </h3>
                  </div>
                </div>

                <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 font-bold">
                  Step 4 • 1 Min
                </span>
              </div>

              {/* Golden Rule to Write on Board */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-rose-950/40 to-slate-950 border border-rose-500/40 space-y-1.5">
                <span className="text-[11px] font-mono uppercase tracking-wider text-rose-400 font-bold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-rose-400" />
                  Golden Rule (Write This on the Whiteboard / Tell Students):
                </span>
                <p className="text-white text-sm sm:text-base font-bold leading-relaxed">
                  "{currentFace.echo.goldenRule}"
                </p>
              </div>

              {/* Exact Spoken Transition Script */}
              <div className="mt-4 p-4 rounded-2xl bg-slate-950 border border-rose-500/30 flex flex-wrap items-center justify-between gap-3">
                <div className="space-y-1 max-w-xl">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-rose-400 font-bold block">
                    ➡️ Say This as You Click Next Slide:
                  </span>
                  <p className="text-slate-200 text-xs sm:text-sm italic font-medium leading-relaxed">
                    "{currentFace.echo.transitionSayThis}"
                  </p>
                </div>

                {activeSlideIndex < slides.length - 1 && (
                  <button
                    onClick={() => setActiveSlideIndex((prev) => prev + 1)}
                    className="px-4 py-2.5 bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white text-xs font-bold rounded-xl flex items-center gap-2 transition shadow-md shrink-0"
                  >
                    <span>Advance to Slide #{activeSlideIndex + 2}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>

            </div>

          </div>

          {/* Quick Slide Selector Pill Carousel */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-3 flex items-center gap-1.5 overflow-x-auto select-none shadow-sm">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setActiveSlideIndex(idx)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold shrink-0 transition ${
                  activeSlideIndex === idx
                    ? 'bg-rose-600 text-white shadow-md'
                    : 'bg-slate-950 text-slate-400 hover:bg-slate-800 hover:text-white'
                }`}
                title={`Slide ${idx + 1}: ${cleanSpeakerText(s.title)}`}
              >
                #{idx + 1}
              </button>
            ))}
          </div>

        </div>
      )}

      {/* ====================================================================== */}
      {/* MODE 2: FULL OUTLINE MODE (ALL 50 SLIDES SCROLLABLE & PRINTABLE)        */}
      {/* ====================================================================== */}
      {viewMode === 'outline' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6 space-y-6">
          
          {/* Filter & Search Toolbar */}
          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-4 shadow-sm space-y-3 print:hidden">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search topics, questions, or concepts across all 50 slides..."
                className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-800 bg-slate-950 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-rose-500 transition"
              />
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
              <span className="text-slate-400 font-semibold flex items-center gap-1 shrink-0 mr-1 text-[11px]">
                <Filter className="w-3 h-3 text-slate-500" /> Module:
              </span>
              {modules.map((mod) => (
                <button
                  key={mod}
                  onClick={() => setSelectedModule(mod)}
                  className={`px-3 py-1 rounded-lg shrink-0 font-medium text-[11px] transition ${
                    selectedModule === mod
                      ? 'bg-rose-600 text-white font-bold shadow-xs'
                      : 'bg-slate-950 hover:bg-slate-800 text-slate-400'
                  }`}
                >
                  {mod}
                </button>
              ))}
            </div>
          </div>

          {/* List of All Slides in FACE Pattern */}
          <div className="space-y-6">
            {filteredSlides.map((slide, index) => {
              const slideNum = slide.slideNum || index + 1;
              const face = buildFaceGuide(slide, index, slides);

              return (
                <article
                  key={slide.id}
                  id={`outline-slide-${slideNum}`}
                  className="bg-slate-900 rounded-3xl border border-slate-800 shadow-xl overflow-hidden print:border-b print:bg-white print:text-black print:rounded-none"
                >
                  {/* Slide Title Bar */}
                  <div className="bg-slate-950 p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-xl bg-rose-600 text-white flex items-center justify-center font-mono font-bold text-xs">
                        #{slideNum}
                      </span>
                      <div>
                        <span className="text-[10px] font-mono text-rose-400 font-bold uppercase tracking-wider block">
                          {cleanSpeakerText(slide.moduleTag) || 'Core Module'}
                        </span>
                        <h3 className="font-lexend text-base font-bold text-white print:text-black">
                          {cleanSpeakerText(slide.title)}
                        </h3>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        setActiveSlideIndex(index);
                        setViewMode('presenter');
                      }}
                      className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold flex items-center gap-1.5 transition print:hidden"
                    >
                      <Compass className="w-3.5 h-3.5 text-rose-400" />
                      <span>Presenter Mode</span>
                    </button>
                  </div>

                  {/* 4-Step FACE Content */}
                  <div className="p-5 sm:p-6 space-y-4 text-xs">
                    
                    {/* [ F ] Focus */}
                    <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-1.5">
                      <span className="font-bold uppercase tracking-wider text-amber-400 text-[10px] font-mono block">
                        🎯 [ F ] FOCUS (Speak to Open):
                      </span>
                      <p className="text-white print:text-black font-medium leading-relaxed text-sm">
                        "{face.focus.hookSayThis}"
                      </p>
                      <div className="text-[11px] text-amber-300">
                        <strong>💡 Real-Life Sample:</strong> {face.focus.analogy}
                      </div>
                    </div>

                    {/* [ A ] Analyze */}
                    <div className="p-3.5 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 space-y-1.5">
                      <span className="font-bold uppercase tracking-wider text-indigo-400 text-[10px] font-mono block">
                        ⚙️ [ A ] ANALYZE (Explanation & Screen Cue):
                      </span>
                      <p className="text-indigo-200 text-[11px]">
                        <strong>📱 On Screen:</strong> {face.analyze.visualCue}
                      </p>
                      <p className="text-slate-100 print:text-black leading-relaxed font-medium">
                        "{face.analyze.coreConceptSayThis}"
                      </p>
                      <p className="text-slate-300 print:text-slate-700 leading-relaxed text-[11px]">
                        <strong>Under the hood:</strong> {face.analyze.underTheHoodSayThis}
                      </p>
                    </div>

                    {/* [ C ] Challenge */}
                    <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-bold uppercase tracking-wider text-emerald-400 text-[10px] font-mono block">
                          💬 [ C ] CHALLENGE & STUDENT MANAGEMENT:
                        </span>
                        <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[9px] font-bold">
                          {face.challenge.managementTechnique.name}
                        </span>
                      </div>
                      <div className="bg-slate-950 p-2.5 rounded-xl border border-emerald-500/20 text-emerald-200 font-bold text-sm">
                        "{face.challenge.questionToAsk}"
                      </div>
                      <div className="text-[11px] text-slate-400">
                        {face.challenge.ifStuckNudge}
                      </div>
                    </div>

                    {/* [ E ] Echo */}
                    <div className="p-3.5 rounded-2xl bg-rose-500/10 border border-rose-500/30 space-y-1">
                      <span className="font-bold uppercase tracking-wider text-rose-400 text-[10px] font-mono block">
                        🧠 [ E ] ECHO (Takeaway & Bridge):
                      </span>
                      <p className="text-rose-200 font-bold leading-relaxed text-xs">
                        <strong>Golden Rule:</strong> "{face.echo.goldenRule}"
                      </p>
                      <p className="text-slate-300 italic text-[11px]">
                        <strong>Transition:</strong> "{face.echo.transitionSayThis}"
                      </p>
                    </div>

                  </div>
                </article>
              );
            })}
          </div>

        </div>
      )}

    </main>
  );
}

export default function TeacherGuidePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6 text-slate-400 font-sans">
        <div className="text-center">
          <GraduationCap className="w-8 h-8 text-rose-500 animate-pulse mx-auto mb-2" />
          <p className="text-xs font-semibold">Loading Speaker Discussion Script...</p>
        </div>
      </div>
    }>
      <TeacherGuideContent />
    </Suspense>
  );
}
