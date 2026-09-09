import { SlideData } from '../types/slide';

// 50 High-Fidelity Slide Objects for Laravel Fundamentals (Aligned with official Laravel Docs: laravel.com/docs/11.x)
export const laravelSlidesData: SlideData[] = [
  // ==========================================================================
  // MODULE 1: INTRODUCTION & PHILOSOPHY (SLIDES 1 - 4)
  // ==========================================================================
  {
    id: 'laravel-slide1',
    slideNum: 1,
    totalSlides: 50,
    type: 'cover',
    moduleTag: 'Official Documentation • Laravel',
    title: 'Laravel Fundamentals',
    subtitle: 'A complete, step-by-step interactive course based on the official documentation at laravel.com'
  },
  {
    id: 'laravel-slide2',
    slideNum: 2,
    totalSlides: 50,
    type: 'single_topic',
    moduleTag: 'Module 1: Introduction',
    title: 'The PHP Framework for Web Artisans',
    topicTitle: 'Why Laravel is the Industry Gold Standard',
    whatItDoes: "Provides an all-inclusive, elegant PHP web application framework containing routing, ORM database mappers, authentication, and queues so you can launch full-stack software quickly.",
    whatIsGoingOn: "Laravel acts as an Inversion of Control (IoC) service container that resolves dependencies using PHP reflection, boots registered service providers, and pipelines HTTP requests to controllers.",
    discussionPrompt: {
      question: "Why do modern tech companies standardize on frameworks like Laravel instead of building custom in-house PHP architectures?",
      hint: "Think about developer onboarding time, security audits, ecosystem tools, and long-term framework upgrades.",
      talkingPoints: [
            "Shared global conventions allow any Laravel developer to contribute immediately.",
            "Continuous security updates and vulnerability patches maintained by the core team.",
            "Extensive official ecosystem (Breeze, Forge, Nova, Horizon, Pulse)."
      ]
},
    bullets: [
      'Philosophy of Developer Joy: Laravel values elegance, simplicity, and readability without sacrificing enterprise-grade power.',
      'Batteries-Included Ecosystem: Comes built-in with routing, authentication, ORM database mappers, queue workers, and background schedulers.',
      'Progressive Framework: Scales smoothly from small solo hobbies and SQLite micro-apps to planetary distributed systems.',
      'Laravel Milestone: Introduces a radically streamlined application structure, unified application bootstrap, and zero-setup SQLite defaults.'
    ],
    layman: {
      title: 'Real-World Analogy',
      text: 'Building with raw PHP is like forging screws, gears, and tires by hand. Laravel is a high-performance modern workshop where the entire chassis and engine are pre-assembled—you just design the car and drive.'
    },
    keyInsight: {
      title: 'Documentation Principle',
      text: 'Laravel takes care of the repetitive plumbing of web development so you can focus on building what makes your application unique.'
    }
  },
  {
    id: 'laravel-slide3',
    slideNum: 3,
    totalSlides: 50,
    type: 'comparison',
    moduleTag: 'Module 1: Introduction',
    title: 'Vanilla PHP vs Laravel',
    topicTitle: 'How Modern Frameworks Protect and Accelerate Development',
    whatItDoes: "Eliminates repetitive, vulnerable boilerplate code (raw SQL escaping, regex routing, manual session cookies) by replacing it with expressive, battle-tested methods.",
    whatIsGoingOn: "Laravel wraps PHP superglobals ($_POST, $_GET, $_SERVER) in an object-oriented Request lifecycle, sanitizes parameters automatically with PDO, and enforces CSRF tokens on web routes.",
    discussionPrompt: {
      question: "If a junior developer builds a login system in raw PHP versus using Laravel Breeze, what security risks are they exposed to?",
      hint: "Consider SQL injection, cross-site request forgery, session fixation, and secure password hashing algorithms.",
      talkingPoints: [
            "Vanilla PHP often uses insecure hashing or forgets prepared statements.",
            "Laravel uses bcrypt/argon2 hashing and automatic timing-attack safe comparisons.",
            "Session regeneration on login prevents session fixation attacks."
      ]
},
    versusLeft: {
      title: 'Vanilla PHP (Manual Crafting)',
      bullets: [
        'Must manually craft PDO connections and bind SQL variables',
        'Vulnerable to SQL Injection if prepared statements are forgotten',
        'No built-in CSRF protection for POST web forms',
        'Custom routing requires complex regex matching in .htaccess',
        'Zero standardized folder structure across development teams'
      ]
    },
    versusRight: {
      title: 'Laravel (Artisan Standard)',
      bullets: [
        'Eloquent ORM automatically sanitizes parameters and maps relations',
        'Built-in CSRF defense on every web route out-of-the-box',
        'Expressive route declarations: Route::get("/posts", [PostController::class, "index"])',
        'Streamlined, convention-based architecture recognized by millions of developers',
        'Artisan CLI scaffolds boilerplate files in milliseconds'
      ]
    },
    keyInsight: {
      title: 'The Modern Difference',
      text: 'Laravel eliminates an entire universe of boilerplate and security vulnerabilities so you write less code that does more.'
    }
  },
  {
    id: 'laravel-slide4',
    slideNum: 4,
    totalSlides: 50,
    type: 'single_topic',
    moduleTag: 'Module 1: Introduction',
    title: 'The Laravel Ecosystem Landscape',
    topicTitle: 'First-Party Tools Powering Full-Stack Production',
    whatItDoes: "Gives artisans a comprehensive fleet of first-party tools for local dev (Herd), auth (Breeze), server provisioning (Forge), queue monitoring (Horizon), and app metrics (Pulse).",
    whatIsGoingOn: "First-party tools hook directly into Laravel framework events and telemetry endpoints without requiring third-party plugins or complex configuration.",
    discussionPrompt: {
      question: "How does having first-party deployment tools (Forge/Vapor) affect the total cost and speed of launching a startup idea?",
      hint: "Compare configuring an Nginx Linux server manually for 3 days versus push-to-deploy Git automation in 5 minutes.",
      talkingPoints: [
            "Dramatically reduces operational DevOps overhead for small teams.",
            "Ensures server security best practices (SSL certificates, automated firewalls).",
            "Allows developers to focus on customer-facing product features."
      ]
},
    bullets: [
      'Laravel Breeze & Jetstream: Production-ready authentication scaffolding supporting Blade, Alpine, Livewire, and Inertia Vue/React.',
      'Laravel Forge & Vapor: Push-to-deploy server automation across DigitalOcean, AWS EC2, and serverless AWS Lambda infrastructure.',
      'Laravel Herd: Lightning-fast native macOS and Windows local PHP/Nginx development environment with zero Docker overhead.',
      'Laravel Horizon, Pulse & Telescope: Real-time dashboard monitoring for Redis queues, server health metrics, and deep application telemetry.'
    ],
    layman: {
      title: 'Tooling Ecosystem',
      text: 'Laravel is more than a framework—it is an entire ecosystem designed to take your idea from local terminal prototype to international cloud deployment.'
    },
    keyInsight: {
      title: 'Ecosystem Cohesion',
      text: 'Because first-party tools are maintained directly by the Laravel team, they work in seamless harmony without dependency conflicts.'
    }
  },

  // ==========================================================================
  // MODULE 2: PREREQUISITES & INSTALLATION (SLIDES 5 - 7)
  // ==========================================================================
  {
    id: 'laravel-slide5',
    slideNum: 5,
    totalSlides: 50,
    type: 'single_topic',
    moduleTag: 'Module 2: Installation',
    title: 'System Requirements & Prerequisites',
    topicTitle: 'Everything You Need Before Building',
    whatItDoes: "Verifies that your local environment has the required PHP 8.2+ runtime, Composer package manager, and cryptographic extensions needed to build with Laravel.",
    whatIsGoingOn: "Laravel takes full advantage of PHP 8.2+ features like typed class constants, readonly classes, and JIT optimizations. Composer builds the PSR-4 autoload class map.",
    discussionPrompt: {
      question: "Why does Laravel strictly require PHP 8.2+ and refuse to install on older versions like PHP 7.4 or 8.0?",
      hint: "Consider PHP End-of-Life (EOL) security schedules, performance benchmarks, and modern type systems.",
      talkingPoints: [
            "PHP 7.4 and 8.0 have reached End-of-Life and no longer receive security fixes.",
            "PHP 8.2 provides strict type guarantees that prevent entire categories of runtime bugs.",
            "Significant execution speed gains and reduced memory footprints."
      ]
},
    bullets: [
      'PHP >= 8.2 Required: Laravel takes full advantage of modern PHP 8.2 and 8.3 features (typed class constants, readonly classes, performance improvements).',
      'PHP Extensions: Requires OpenSSL, PDO, Mbstring, Tokenizer, XML, Ctype, JSON, and cURL (enabled by default in modern PHP installs).',
      'Composer: The official PHP dependency manager used to download packages and generate the PSR-4 autoload class map.',
      'Node.js & NPM: Used for compiling frontend CSS and JavaScript assets via the lightning-fast Vite asset bundler.'
    ],
    layman: {
      title: 'Prerequisite Check',
      text: 'Composer is to PHP what npm is to Node.js or pip is to Python. It installs Laravel and all third-party libraries your app needs.'
    },
    keyInsight: {
      title: 'Strict Requirement',
      text: 'Always check your PHP version with `php -v`. Laravel will refuse to install on PHP 8.1 or older.'
    }
  },
  {
    id: 'laravel-slide6',
    slideNum: 6,
    totalSlides: 50,
    type: 'single_topic',
    moduleTag: 'Module 2: Installation',
    title: 'Project Creation & Artisan Terminal',
    topicTitle: 'Two Official Ways to Spin Up a New Application',
    whatItDoes: "Generates a complete, ready-to-run Laravel application directory in seconds using `laravel new` or `composer create-project`, and boots it locally with `php artisan serve`.",
    whatIsGoingOn: "The installer pulls the official `laravel/laravel` repository skeleton, installs Composer packages, generates a cryptographic 256-bit `APP_KEY`, and creates the initial SQLite database.",
    discussionPrompt: {
      question: "What is the benefit of the interactive setup wizard in `laravel new` over manually configuring an application from scratch?",
      hint: "Look at how it prompts for Starter Kits, Testing suites (Pest), and Git initialization automatically.",
      talkingPoints: [
            "Prevents missing critical configuration steps like generating APP_KEY.",
            "Sets up preferred testing suites (Pest) with zero setup friction.",
            "Initializes Git repositories with production-ready .gitignore files."
      ]
},
    bullets: [
      'Method 1 (Laravel Installer): Install globally with `composer global require laravel/installer`, then create projects with `laravel new my-app`.',
      'Interactive Setup Wizard: The installer prompts you to choose Starter Kits (Breeze/None), Testing Frameworks (Pest/PHPUnit), and Git repository initialization.',
      'Method 2 (Composer Create-Project): `composer create-project laravel/laravel my-app` directly pulls the official application skeleton.',
      'Serve Locally: Enter the directory and run `php artisan serve` to boot the built-in development server on http://localhost:8000.'
    ],
    layman: {
      title: 'Interactive Simulator',
      text: 'Use the interactive terminal below to test authentic Artisan CLI commands and see how Laravel responds in real time!'
    },
    keyInsight: {
      title: 'Instant Database',
      text: 'During `laravel new`, selecting SQLite means your database file is automatically created—zero database server setup required!'
    }
  },
  {
    id: 'laravel-slide7',
    slideNum: 7,
    totalSlides: 50,
    type: 'code',
    moduleTag: 'Module 2: Installation',
    title: 'Environment Configuration (.env)',
    topicTitle: 'Local Credentials, Keys, and Secrets',
    whatItDoes: "Stores environment-specific secrets (passwords, encryption keys, mail credentials) in `.env` so code remains safe and adaptable across local, testing, and production servers.",
    whatIsGoingOn: "The `phpdotenv` library parses `.env` at boot, making values accessible via `env()`. In production, `php artisan config:cache` flattens configurations into a single cached file for speed.",
    discussionPrompt: {
      question: "Why is committing your `.env` file to a public GitHub repository considered a critical security catastrophe?",
      hint: "What could an attacker do with your `APP_KEY`, database credentials, or Stripe API keys?",
      talkingPoints: [
            "A compromised `APP_KEY` allows attackers to decrypt session cookies and forge user identities.",
            "Exposed database credentials allow attackers to download or destroy database records.",
            "Always keep `.env` in `.gitignore` and share safe defaults via `.env.example`."
      ]
},
    code: `APP_NAME="My Laravel App"
APP_ENV=local
APP_KEY=base64:X8p3mQv9...
APP_DEBUG=true
APP_TIMEZONE=UTC
APP_URL=http://localhost:8000

# Laravel Default: Zero-Config SQLite!
DB_CONNECTION=sqlite
# DB_DATABASE=/path/to/database.sqlite

CACHE_STORE=database
QUEUE_CONNECTION=database
SESSION_DRIVER=database`,
    bullets: [
      'The .env File: Holds environment-specific values (API keys, database credentials, mail server settings) that change between local and production.',
      'Security Golden Rule: Never commit `.env` to Git! Laravel provides a template `.env.example` that is tracked safely in source control.',
      'APP_KEY: Generated via `php artisan key:generate`. A 32-character AES encryption key used to encrypt session cookies and hashed tokens.',
      'APP_DEBUG: Set to `true` locally to see rich debugging traces; MUST be set to `false` in production to prevent leaking sensitive system paths.'
    ],
    keyInsight: {
      title: 'Config Caching',
      text: 'Access values using `config("app.name")` rather than calling `env()` directly inside production code to allow config caching.'
    }
  },

  // ==========================================================================
  // MODULE 3: STREAMLINED ARCHITECTURE (SLIDES 8 - 11)
  // ==========================================================================
  {
    id: 'laravel-slide8',
    slideNum: 8,
    totalSlides: 50,
    type: 'single_topic',
    moduleTag: 'Module 3: Architecture',
    title: 'Laravel Streamlined Structure',
    topicTitle: 'The Biggest Directory Cleanup in Framework History',
    whatItDoes: "Streamlines the application directory tree by eliminating over 70% of legacy boilerplate files, keeping fresh projects clean, focused, and beginner-friendly.",
    whatIsGoingOn: "Laravel moves default middleware, `Http/Kernel.php`, and `Console/Kernel.php` into framework core internals. Application customization is unified in `bootstrap/app.php`.",
    discussionPrompt: {
      question: "Why does removing boilerplate files make beginners learn faster while also making veteran developers more productive?",
      hint: "Consider cognitive overload when opening a new project and searching for where custom code actually lives.",
      talkingPoints: [
            "New learners are not intimidated by 15 unused config files and multi-layer Kernels.",
            "Experienced developers can jump straight into Models, Controllers, and Views.",
            "Everything you customize lives in files you actually created."
      ]
},
    bullets: [
      'Boilerplate Eliminated: Laravel removes Http/Kernel.php, Console/Kernel.php, and multiple default middleware classes from fresh apps.',
      'Unified Entry Point: All application configuration for routing, middleware pipelines, and exception reporting lives in `bootstrap/app.php`.',
      'On-Demand Configuration: The `config/` directory is virtually empty out-of-the-box. Run `php artisan config:publish` only when customization is needed.',
      'Lean Routes Folder: Fresh installs contain only `routes/web.php` and `routes/console.php`. API routes are installed on-demand via `php artisan install:api`.'
    ],
    layman: {
      title: 'Architecture Comparison',
      text: 'Toggle between Laravel 10 and Laravel in the interactive explorer below to see how hundreds of lines of boilerplate were eliminated!'
    },
    keyInsight: {
      title: 'Less is More',
      text: 'By removing boilerplate files, beginners are no longer overwhelmed, and experienced developers enjoy a drastically cleaner project tree.'
    }
  },
  {
    id: 'laravel-slide9',
    slideNum: 9,
    totalSlides: 50,
    type: 'code',
    moduleTag: 'Module 3: Architecture',
    title: 'The Unified bootstrap/app.php',
    topicTitle: 'The Central Nervous System of Laravel',
    whatItDoes: "Serves as the single central hub in Laravel for configuring routing, middleware pipelines, and custom exception handling using a clean fluent builder pattern.",
    whatIsGoingOn: "`Application::configure()` sets up the core container instance, binds route files, registers middleware aliases, and sets up exception handlers before HTTP requests are dispatched.",
    discussionPrompt: {
      question: "Why is a single fluent builder (`bootstrap/app.php`) easier to maintain than jumping between `Http/Kernel.php`, `Console/Kernel.php`, and `RouteServiceProvider`?",
      hint: "Consider code discovery, IDE autocompletion, and having one place to audit your app configuration.",
      talkingPoints: [
            "Method chaining (`->withRouting()->withMiddleware()`) provides full IDE autocompletion.",
            "Centralizes all entry pipelines in one file instead of three separate inheritance classes.",
            "Introduces built-in health check endpoint (`/up`) for cloud monitoring in one line."
      ]
},
    code: `<?php

use Illuminate\\Foundation\\Application;
use Illuminate\\Foundation\\Configuration\\Exceptions;
use Illuminate\\Foundation\\Configuration\\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up', // Built-in health check endpoint!
    )
    ->withMiddleware(function (Middleware $middleware) {
        // Register custom middleware aliases or prepend global filters
        $middleware->alias([
            'admin' => \\App\\Http\\Middleware\\EnsureUserIsAdmin::class,
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions) {
        // Custom exception handling callbacks
    })->create();`,
    bullets: [
      'Application::configure(): A fluent builder pattern replacing the old Kernel inheritance hierarchies.',
      'withRouting(): Declares active route files and enables the new built-in `/up` health check endpoint for monitoring uptime.',
      'withMiddleware(): Configure global middleware, route aliases, and middleware groups without opening a Kernel file.',
      'withExceptions(): Define custom reporting, logging, and rendering behavior for application exceptions.'
    ],
    keyInsight: {
      title: 'Architectural Shift',
      text: 'In Laravel, `bootstrap/app.php` is where your application pipeline is born. Everything flows through this fluent builder.'
    }
  },
  {
    id: 'laravel-slide10',
    slideNum: 10,
    totalSlides: 50,
    type: 'single_topic',
    moduleTag: 'Module 3: Architecture',
    title: 'The App Directory & AppServiceProvider',
    topicTitle: 'Where Your Custom Code Lives',
    whatItDoes: "Houses your custom application code (Models, Controllers) while consolidating all default service bootstrapping into a single, clean `AppServiceProvider.php`.",
    whatIsGoingOn: "In Laravel 10, bootstrapping was scattered across 5 providers. Laravel executes `AppServiceProvider::boot()` after all services register, providing a clean place for global settings.",
    discussionPrompt: {
      question: "What types of configurations belong inside `AppServiceProvider::boot()` versus inside an individual Controller?",
      hint: "Think about settings that must apply globally across every page, like pagination themes or database query monitoring.",
      talkingPoints: [
            "Global rules like `Paginator::useTailwind()` or `Model::preventLazyLoading()` belong in Providers.",
            "Request-specific logic (e.g. fetching one post or handling a form) belongs in Controllers.",
            "Service providers decouple global application configuration from individual web routes."
      ]
},
    bullets: [
      'app/Models/: Houses your Eloquent data models (e.g. User.php, Post.php).',
      'app/Http/Controllers/: Houses your HTTP controllers handling web and API request logic.',
      'app/Providers/AppServiceProvider.php: The single default service provider where you register application services, Blade directives, and pagination themes.',
      'Automatic Discovery: Commands, jobs, events, and listeners created via Artisan are discovered by the framework automatically without manual registration.'
    ],
    layman: {
      title: 'Mental Model',
      text: 'The `app/` folder is your house. The rest of the folders (`bootstrap/`, `vendor/`) are the municipal water pipes and foundation provided by the city.'
    },
    keyInsight: {
      title: 'Service Providers',
      text: 'Instead of managing five different providers (AuthServiceProvider, RouteServiceProvider, etc.), Laravel consolidates everything into `AppServiceProvider.php`.'
    }
  },
  {
    id: 'laravel-slide11',
    slideNum: 11,
    totalSlides: 50,
    type: 'code',
    moduleTag: 'Module 3: Architecture',
    title: 'Publishing Config & Installing APIs',
    topicTitle: 'On-Demand Scaffolding When Your App Grows',
    whatItDoes: "Keeps your project directory minimal by letting you publish configuration files and API routing on-demand only when your application actually needs them.",
    whatIsGoingOn: "Framework defaults stay tucked inside `vendor/laravel/framework`. Running `php artisan config:publish` copies specific files into `config/`, while `install:api` adds Sanctum and `routes/api.php`.",
    discussionPrompt: {
      question: "Why is on-demand configuration safer and easier to maintain when upgrading Laravel framework versions in the future?",
      hint: "What happens to files in `config/` when you upgrade your dependencies if you customized 20 files versus only 1 file?",
      talkingPoints: [
            "Unpublished configs automatically inherit upstream security improvements and new options.",
            "Reduces merge conflicts when updating composer packages across large teams.",
            "You only manage code that you explicitly care about and modified."
      ]
},
    code: `// Need to customize database or session settings?
// Publish specific configuration files:
php artisan config:publish database
php artisan config:publish session

// Building a mobile app or SPA?
// Install API routing & Sanctum tokens in one command:
php artisan install:api

// This automatically:
// 1. Creates routes/api.php
// 2. Installs Laravel Sanctum migration
// 3. Adds api: __DIR__.'/../routes/api.php to bootstrap/app.php`,
    bullets: [
      'Lean Default: By not including 15 config files in new projects, Laravel applications start significantly cleaner.',
      'config:publish: Inspect or customize framework defaults by publishing individual files to `config/`.',
      'install:api: One Artisan command provisions token-based API authentication and dedicated API route namespaces.',
      'Zero Disruption: You only add infrastructure when your project actually requires it.'
    ],
    keyInsight: {
      title: 'The On-Demand Philosophy',
      text: 'Never carry what you do not need. Laravel starts featherweight and expands on-demand as your application grows.'
    }
  },

  // ==========================================================================
  // MODULE 4: ROUTING & REQUEST LIFECYCLE (SLIDES 12 - 16)
  // ==========================================================================
  {
    id: 'laravel-slide12',
    slideNum: 12,
    totalSlides: 50,
    type: 'code',
    moduleTag: 'Module 4: Routing',
    title: 'Basic Routing & HTTP Verbs',
    topicTitle: 'Directing Web Traffic Expressively',
    whatItDoes: "Maps incoming web URLs (like `/posts` or `/contact`) to specific Controller methods or closures using standard HTTP verbs (GET, POST, PUT, DELETE).",
    whatIsGoingOn: "The Router matches the incoming HTTP verb and URI path against registered routes in `routes/web.php`, passes the request through assigned middleware, and returns a formatted response.",
    discussionPrompt: {
      question: "Why does the HTTP specification provide distinct verbs (GET, POST, PUT, DELETE) instead of using GET for every request?",
      hint: "What would happen if a web crawler like Google visited `/posts/5/delete` if it were a GET request?",
      talkingPoints: [
            "GET requests must be safe and idempotent (visiting them does not modify server data).",
            "Data-altering actions (creation, deletion, updates) must use POST, PUT, or DELETE.",
            "Search engine crawlers and browser pre-fetchers will accidentally delete data if destructive routes use GET."
      ]
},
    code: `use Illuminate\\Support\\Facades\\Route;
use App\\Http\\Controllers\\PostController;

// 1. Returning a simple string
Route::get('/welcome', function () {
    return 'Hello, Laravel!';
});

// 2. Returning a Blade view directly
Route::view('/about', 'pages.about');

// 3. Standard HTTP Verbs
Route::get('/posts', [PostController::class, 'index']);
Route::post('/posts', [PostController::class, 'store']);
Route::put('/posts/{id}', [PostController::class, 'update']);
Route::delete('/posts/{id}', [PostController::class, 'destroy']);`,
    bullets: [
      'HTTP Verbs: Express routing for GET (read), POST (create), PUT/PATCH (update), and DELETE (remove).',
      'Closure Routes: Simple inline functions ideal for testing, rapid prototypes, or static responses.',
      'Controller Actions: Recommended for production: delegate URL handling to dedicated Controller classes.',
      'Route::view(): Shortcut helper to render simple static Blade views without requiring a controller.'
    ],
    keyInsight: {
      title: 'REST Conventions',
      text: 'Matching standard HTTP verbs to CRUD database operations keeps your web application clean, predictable, and maintainable.'
    }
  },
  {
    id: 'laravel-slide13',
    slideNum: 13,
    totalSlides: 50,
    type: 'code',
    moduleTag: 'Module 4: Routing',
    title: 'Route Parameters & Constraints',
    topicTitle: 'Extracting Dynamic Values from the URL',
    whatItDoes: "Captures dynamic values from the URL path (like `/posts/{id}` or `/users/{username}`) and passes them directly to your controller action with optional validation constraints.",
    whatIsGoingOn: "Laravel converts route placeholders `{id}` into regular expression capture groups. Methods like `->whereNumber(\"id\")` ensure invalid URLs return an instant 404 without touching database queries.",
    discussionPrompt: {
      question: "Why should you apply parameter constraints like `->whereNumber(\"id\")` to your dynamic routes?",
      hint: "What happens if a user or bot visits `/posts/hello-world` when your database query expects an integer ID?",
      talkingPoints: [
            "Stops invalid requests at the router level before executing expensive database queries.",
            "Prevents SQL type errors and database exceptions.",
            "Enables having both `/posts/{id}` (numeric) and `/posts/{slug}` (string) coexist cleanly."
      ]
},
    code: `// Required Route Parameter
Route::get('/posts/{id}', function (string $id) {
    return "Displaying Post #" . $id;
});

// Optional Route Parameter with default value
Route::get('/users/{name?}', function (?string $name = 'Guest') {
    return "Hello, " . $name;
});

// Regular Expression Parameter Constraints
Route::get('/orders/{id}', function (string $id) {
    return "Order: " . $id;
})->whereNumber('id'); // Only allows numeric IDs!

Route::get('/tags/{slug}', function (string $slug) {
    return "Tag: " . $slug;
})->whereAlphaNumeric('slug');`,
    bullets: [
      'Dynamic Segments: Wrap variable URL segments in curly braces: `{id}` or `{slug}`.',
      'Automatic Injection: Parameter values are passed into route Closures and Controller actions in order.',
      'Optional Segments: Append a question mark `{name?}` and provide a default PHP parameter value.',
      'Convenience Constraints: Use `whereNumber("id")`, `whereAlpha("name")`, or custom regex with `where("slug", "[a-z0-9-]+")`.'
    ],
    keyInsight: {
      title: 'Parameter Safety',
      text: 'Adding route constraints ensures invalid URLs fail fast with a clean 404 Not Found before ever touching your controller or database.'
    }
  },
  {
    id: 'laravel-slide14',
    slideNum: 14,
    totalSlides: 50,
    type: 'code',
    moduleTag: 'Module 4: Routing',
    title: 'Named Routes & Route Groups',
    topicTitle: 'Refactor-Proof URLs & DRY Middleware Grouping',
    whatItDoes: "Assigns memorable nicknames to routes (`posts.show`) so you can generate URLs dynamically with `route(\"posts.show\", $id)` without hardcoding URLs in your views.",
    whatIsGoingOn: "Laravel indexes named routes in an internal lookup map. Route groups allow you to apply common URL prefixes (`/admin`) and middleware (`auth`) across multiple routes simultaneously.",
    discussionPrompt: {
      question: "If a client asks you to change all blog URLs from `/blog/{id}` to `/articles/{id}`, how do named routes save you from rewriting views?",
      hint: "What happens if you used `route(\"posts.show\", $post)` versus `<a href=\"/blog/{{ $post->id }}\">` across 50 templates?",
      talkingPoints: [
            "With named routes, updating 1 line in `routes/web.php` updates every link across your entire website.",
            "Hardcoded URLs require tedious, error-prone find-and-replace across dozens of Blade files.",
            "Route groups keep route files DRY (Don't Repeat Yourself)."
      ]
},
    code: `// 1. Named Routes (Never hardcode URLs in Blade views!)
Route::get('/user/profile', [ProfileController::class, 'show'])
    ->name('profile.show');

// Generating URLs or Redirects in PHP or Blade:
// $url = route('profile.show');
// return redirect()->route('profile.show');

// 2. Route Groups with Prefixes & Middleware
Route::prefix('admin')
    ->middleware(['auth', 'admin'])
    ->group(function () {
        Route::get('/dashboard', [AdminController::class, 'index'])->name('admin.dashboard');
        Route::get('/settings', [AdminController::class, 'settings'])->name('admin.settings');
    });`,
    bullets: [
      'Named Routes: Giving routes names (`->name("...")`) decouples your internal URLs from your templates and redirects.',
      'Refactor Freedom: If `/user/profile` changes to `/account/overview`, zero Blade templates break if you use `route("profile.show")`.',
      'Route Prefixes: Group admin or dashboard routes under a shared URL prefix (`/admin/*`) without repeating code.',
      'Shared Middleware: Apply authentication and authorization checks to dozens of routes simultaneously.'
    ],
    keyInsight: {
      title: 'Best Practice',
      text: 'Always name your routes. It turns URL changes from painful multi-file search-and-replace sessions into effortless one-line edits.'
    }
  },
  {
    id: 'laravel-slide15',
    slideNum: 15,
    totalSlides: 50,
    type: 'single_topic',
    moduleTag: 'Module 4: Routing',
    title: 'The HTTP Request Lifecycle',
    topicTitle: 'From Browser Click to Rendered HTML Response',
    whatItDoes: "Traces the step-by-step path of an HTTP request from `public/index.php` through bootstrapping, middleware filters, routing, and controller execution to the final rendered HTML response.",
    whatIsGoingOn: "`public/index.php` boots Composer and `bootstrap/app.php`. The captured `Request` passes through global middleware, matches a route, executes controller business logic, and converts the view to a `Response`.",
    discussionPrompt: {
      question: "If a user receives a 419 Page Expired or 401 Unauthorized error, where in the 5-stage lifecycle was their request halted?",
      hint: "Did the request ever reach the Controller method?",
      talkingPoints: [
            "Middleware filters intercept and reject unauthorized or invalid requests before controllers run.",
            "Protects backend controllers and database servers from processing illegitimate traffic.",
            "Understanding the lifecycle allows developers to place custom security checks at the right layer."
      ]
},
    bullets: [
      'Stage 1: Front Controller (`public/index.php`): Every request enters here, loading Composer autoloading and retrieving the app instance.',
      'Stage 2: Bootstrap (`bootstrap/app.php`): Framework initializes core providers, routing registry, and global middleware stack.',
      'Stage 3: Middleware Pipeline: Request passes through filters (CSRF checks, maintenance mode, sessions, authentication).',
      'Stage 4: Route Dispatcher & Controller: URL is matched to route action, dependencies are injected, and Eloquent queries run.',
      'Stage 5: Response Formulation: The Blade template is compiled into cached PHP, generating HTML returned to the browser with HTTP headers.'
    ],
    layman: {
      title: 'Interactive Pipeline Visualizer',
      text: 'Click the different routes in the interactive diagram below to follow a request traveling step-by-step through the Laravel pipeline!'
    },
    keyInsight: {
      title: 'Pipeline Invariance',
      text: 'Every single request in Laravel follows this exact pipeline, providing an unwavering foundation for security, caching, and observability.'
    }
  },
  {
    id: 'laravel-slide16',
    slideNum: 16,
    totalSlides: 50,
    type: 'code',
    moduleTag: 'Module 4: Routing',
    title: 'Inspecting Routes via Artisan',
    topicTitle: 'The Developer Secret: php artisan route:list',
    whatItDoes: "Displays a crystal-clear terminal table of every route registered in your application, showing HTTP verbs, URL patterns, names, controller methods, and assigned middleware.",
    whatIsGoingOn: "`php artisan route:list` queries the `RouteCollection` container service, formatting metadata for all registered web, console, and API routes with support for flags like `--name` or `--path`.",
    discussionPrompt: {
      question: "How does running `php artisan route:list` help verify that all admin routes are protected by authentication middleware?",
      hint: "Inspect the \"Middleware\" column in the generated CLI table.",
      talkingPoints: [
            "Instantly exposes accidental unprotected routes before shipping to production.",
            "Verifies exact route parameter names when debugging 404 errors.",
            "Indispensable command during pull request reviews and application audits."
      ]
},
    code: `// View all registered routes in your application:
php artisan route:list

// Filter specifically for post-related routes:
php artisan route:list --path=posts

// Exclude vendor and third-party routes for clean viewing:
php artisan route:list --except-vendor

// Sample output:
// +--------+----------+--------------+---------------+----------------------------+------------+
// | Domain | Method   | URI          | Name          | Action                     | Middleware |
// +--------+----------+--------------+---------------+----------------------------+------------+
// |        | GET|HEAD | posts        | posts.index   | PostController@index       | web        |
// |        | POST     | posts        | posts.store   | PostController@store       | web        |
// |        | GET|HEAD | posts/{post} | posts.show    | PostController@show        | web        |
// +--------+----------+--------------+---------------+----------------------------+------------+`,
    bullets: [
      'CLI Route Audit: `php artisan route:list` gives you an instant, complete overview of all URLs, names, actions, and middleware.',
      'Troubleshooting 404s: If a URL fails to resolve, running `route:list` immediately confirms whether the URI matches your expectations.',
      'Filter Flags: Use `--path=...` or `--method=...` to quickly pinpoint specific controllers in large enterprise applications.'
    ],
    keyInsight: {
      title: 'CLI Pro Tip',
      text: 'When in doubt about what middleware protects a URL or what name a route uses, run `php artisan route:list`.'
    }
  },

  // ==========================================================================
  // MODULE 5: CONTROLLERS & ACTIONS (SLIDES 17 - 20)
  // ==========================================================================
  {
    id: 'laravel-slide17',
    slideNum: 17,
    totalSlides: 50,
    type: 'single_topic',
    moduleTag: 'Module 5: Controllers',
    title: 'Why Use Controllers?',
    topicTitle: 'Separating Routing Definitions from Business Logic',
    whatItDoes: "Extracts application logic out of `routes/web.php` closures into structured, dedicated PHP classes so your codebase remains clean, modular, and maintainable.",
    whatIsGoingOn: "The router delegates incoming requests to a controller method. Controllers coordinate input validation, model queries, and view rendering while keeping route files purely declarative.",
    discussionPrompt: {
      question: "What architectural problems emerge when a team writes all database queries and validation logic inside `routes/web.php` closures?",
      hint: "Consider code reuse, unit testing, and route caching in production with `php artisan route:cache`.",
      talkingPoints: [
            "Closure routes cannot be cached with `php artisan route:cache`, severely hurting production performance.",
            "Large route files become unreadable merge-conflict nightmares in multi-developer teams.",
            "Controllers allow dependency injection, reusable private methods, and clean testing."
      ]
},
    bullets: [
      'Separation of Concerns: Routes should act purely as traffic directors; controllers should hold the business decisions and orchestration.',
      'Organized Organization: Groups related HTTP request logic together (e.g., all actions relating to user accounts in `UserController`).',
      'Artisan Scaffolding: Generate controllers instantly using `php artisan make:controller PostController`.',
      'Dependency Injection: Controllers automatically inject type-hinted request objects, services, and Eloquent models into action methods.'
    ],
    layman: {
      title: 'Restaurant Analogy',
      text: 'Routes are the host greeting guests at the door and directing them to a table. Controllers are the chef in the kitchen preparing the meal.'
    },
    keyInsight: {
      title: 'Fat Models, Skinny Controllers',
      text: 'Keep controllers focused on receiving requests, invoking data models, and returning views or redirects. Avoid writing raw SQL or heavy algorithms inside controllers.'
    }
  },
  {
    id: 'laravel-slide18',
    slideNum: 18,
    totalSlides: 50,
    type: 'code',
    moduleTag: 'Module 5: Controllers',
    title: 'Resource Controllers & CRUD',
    topicTitle: '7 Standard Actions in a Single Artisan Command',
    whatItDoes: "Scaffolds all 7 standard RESTful CRUD actions (index, create, store, show, edit, update, destroy) with a single command and one clean route declaration: `Route::resource(\"posts\", PostController::class)`.",
    whatIsGoingOn: "Laravel generates conventional methods matching standard HTTP verbs and URI patterns, establishing an intuitive, predictable interface for creating, viewing, updating, and deleting database records.",
    discussionPrompt: {
      question: "Why has the 7-action Resource pattern become the universal gold standard for web application CRUD architectures?",
      hint: "Think about predicting what a URL does without having to read custom documentation.",
      talkingPoints: [
            "Provides a predictable, uniform structure recognized by millions of developers worldwide.",
            "Covers the complete lifecycle of web forms (display form ➔ submit form ➔ redirect).",
            "Prevents bikeshedding and debates over arbitrary URL naming conventions."
      ]
},
    code: `// Generate Model, Migration, and Resource Controller all in one:
php artisan make:model Post -mcr

// In routes/web.php, register all 7 RESTful endpoints in ONE line:
Route::resource('posts', PostController::class);

// This automatically maps:
// GET       /posts             ➔ index()   (List all posts)
// GET       /posts/create      ➔ create()  (Show create form)
// POST      /posts             ➔ store()   (Save new post)
// GET       /posts/{post}      ➔ show()    (Display single post)
// GET       /posts/{post}/edit ➔ edit()    (Show edit form)
// PUT/PATCH /posts/{post}      ➔ update()  (Update existing post)
// DELETE    /posts/{post}      ➔ destroy() (Delete post)`,
    bullets: [
      'The 7 RESTful Actions: Standardizes the entire CRUD lifecycle across web applications worldwide.',
      'Route::resource(): Generates named routes for all 7 methods (`posts.index`, `posts.create`, `posts.store`, etc.).',
      'Selective Resources: Restrict generated routes with `Route::resource("posts", PostController::class)->only(["index", "show"]);`.'
    ],
    keyInsight: {
      title: 'Standardization',
      text: 'Because millions of Laravel developers use this exact same 7-method naming convention, you can jump into any Laravel codebase and navigate it instantly.'
    }
  },
  {
    id: 'laravel-slide19',
    slideNum: 19,
    totalSlides: 50,
    type: 'code',
    moduleTag: 'Module 5: Controllers',
    title: 'Implicit Route Model Binding',
    topicTitle: 'Automatic Database Lookups via Type-Hinting',
    whatItDoes: "Automatically searches the database for a model matching the URL parameter (e.g. `Post $post`) and injects it into your controller, returning an automatic 404 if the record is not found.",
    whatIsGoingOn: "Laravel uses PHP reflection to inspect type-hinted controller arguments. It executes `Post::where(\"id\", $value)->firstOrFail()` behind the scenes, eliminating manual query boilerplate.",
    discussionPrompt: {
      question: "How does implicit model binding protect your application from null-pointer crashes when a user navigates to `/posts/99999`?",
      hint: "Compare what happens with `firstOrFail()` versus manual `$post = Post::find($id)` if you forget to check `if (!$post)`.",
      talkingPoints: [
            "Automatic `firstOrFail()` throws a `ModelNotFoundException` which Laravel renders as a clean 404 page.",
            "Eliminates dozens of repetitive `if (!$model) { abort(404); }` blocks across your methods.",
            "Can be customized to lookup by `slug` or `uuid` instead of `id` using `getRouteKeyName()`."
      ]
},
    code: `namespace App\\Http\\Controllers;

use App\\Models\\Post;
use Illuminate\\View\\View;

class PostController extends Controller
{
    // Type-hint the Post model!
    // Laravel automatically matches the URL segment {post}
    // and executes Post::findOrFail($id) behind the scenes!
    public function show(Post $post): View
    {
        // If no post matches the ID, Laravel aborts with a 404 automatically!
        return view('posts.show', ['post' => $post]);
    }
}`,
    bullets: [
      'Zero Manual Querying: Notice there is no `Post::find($id)` call! Laravel inspects the type-hint and matches the `{post}` route variable name.',
      'Automatic 404 Handling: If an ID doesn\'t exist in the database, Laravel throws an automatic 404 Not Found error.',
      'Custom Key Binding: Bind by slug instead of ID effortlessly: `Route::get("/posts/{post:slug}", [PostController::class, "show"]);`.'
    ],
    keyInsight: {
      title: 'The Magic of Model Binding',
      text: 'Route Model Binding saves you from writing repetitive `find()` checks and `if (!$record) abort(404);` blocks in every single controller method.'
    }
  },
  {
    id: 'laravel-slide20',
    slideNum: 20,
    totalSlides: 50,
    type: 'code',
    moduleTag: 'Module 5: Controllers',
    title: 'Single Action (Invokable) Controllers',
    topicTitle: 'When a Controller Performs Exactly One Task',
    whatItDoes: "Provides dedicated, single-purpose controllers that perform exactly one complex job (like `GenerateInvoiceController`) using PHP's magic `__invoke()` method.",
    whatIsGoingOn: "When a route points to an invokable controller class without an explicit method name, PHP executes `__invoke()` automatically when the class instance is called as a callable.",
    discussionPrompt: {
      question: "When should you extract a feature into an Invokable Controller instead of adding an 8th or 9th custom action to a Resource Controller?",
      hint: "Think about Single Responsibility Principle (SRP) and avoiding massive, bloated controllers.",
      talkingPoints: [
            "Prevents resource controllers from degenerating into 500-line \"God Objects\".",
            "Ideal for distinct actions like downloading an export, checkout payment, or email verification.",
            "Extremely easy to locate in the project tree and unit test in isolation."
      ]
},
    code: `// Generate an Invokable Controller:
php artisan make:controller ProvisionServerController --invokable

// In app/Http/Controllers/ProvisionServerController.php:
namespace App\\Http\\Controllers;

use Illuminate\\Http\\Request;
use Illuminate\\Http\\Response;

class ProvisionServerController extends Controller
{
    public function __invoke(Request $request): Response
    {
        // Dedicated logic for provisioning a server
        return response('Server provisioned successfully!');
    }
}

// In routes/web.php, no method name is required:
Route::post('/server/provision', ProvisionServerController::class);`,
    bullets: [
      'PHP Magic `__invoke()`: Turns a class instance into a callable function.',
      'Complex Operations: Perfect for dedicated operations like checkout processing, PDF generation, or onboarding flows that exceed simple CRUD.',
      'Clean Routing: You do not need to specify an action array like `[Controller::class, "action"]`; just pass the class name directly.'
    ],
    keyInsight: {
      title: 'Architecture Tip',
      text: 'When a controller action begins to grow beyond 50 lines or requires several private helper methods, refactor it into an Invokable Controller.'
    }
  },

  // ==========================================================================
  // MODULE 6: DATABASE, MIGRATIONS & SQLITE (SLIDES 21 - 25)
  // ==========================================================================
  {
    id: 'laravel-slide21',
    slideNum: 21,
    totalSlides: 50,
    type: 'single_topic',
    moduleTag: 'Module 6: Database',
    title: 'Zero-Config SQLite in Laravel',
    topicTitle: 'Instant Database Development Without Server Setup',
    whatItDoes: "Configures SQLite as the default out-of-the-box database in Laravel, letting you run migrations and build complete database features immediately with zero setup.",
    whatIsGoingOn: "`.env` defaults to `DB_CONNECTION=sqlite`. When you run `php artisan migrate`, Laravel automatically creates the `database/database.sqlite` file if missing and executes migrations.",
    discussionPrompt: {
      question: "Why is zero-config SQLite a massive upgrade for classroom education, solo creators, and rapid prototyping?",
      hint: "Consider troubleshooting Docker containers, MySQL passwords, and port 3306 conflicts on student computers.",
      talkingPoints: [
            "Zero setup friction: clones and runs immediately on any Windows, Mac, or Linux computer.",
            "Full ACID transaction compliance stored in a single, portable disk file.",
            "Switching to MySQL or PostgreSQL in production requires editing just 1 line in `.env`."
      ]
},
    bullets: [
      'The Shift in Laravel: In previous versions, MySQL was the default, requiring users to install Docker or setup a local MySQL server and credentials.',
      'Default SQLite: Laravel defaults to `DB_CONNECTION=sqlite`, storing data directly inside `database/database.sqlite`.',
      'Automatic File Creation: Running your first migration automatically creates the SQLite file if it doesn\'t already exist.',
      'Full Database Portability: You can build and test your entire application with SQLite, then switch `.env` to MySQL or PostgreSQL in production with zero code changes!'
    ],
    layman: {
      title: 'Why SQLite?',
      text: 'SQLite stores the entire database in a single lightweight file on your disk. There is no daemon to start, no port conflicts, and no passwords to remember.'
    },
    keyInsight: {
      title: 'Database Agnostic',
      text: 'Because Laravel abstracts database operations through Eloquent and Schema Blueprints, your application code is 100% database engine agnostic.'
    }
  },
  {
    id: 'laravel-slide22',
    slideNum: 22,
    totalSlides: 50,
    type: 'code',
    moduleTag: 'Module 6: Database',
    title: 'Database Migrations Explained',
    topicTitle: 'Version Control for Your Database Schema',
    whatItDoes: "Acts as version control for your database, allowing teams to define, alter, and share tables and columns using reproducible PHP code instead of messy manual SQL dumps.",
    whatIsGoingOn: "Migration classes define `up()` and `down()` methods. The `Schema` facade translates `Blueprint` column definitions into SQL DDL statements tailored to your active database engine.",
    discussionPrompt: {
      question: "What disasters occur when development teams share database changes using manual SQL files or phpMyAdmin exports instead of migrations?",
      hint: "What happens when two developers add different columns to the same table on the same day?",
      talkingPoints: [
            "Manual database edits cause schema drift, breaking applications when deployed to production.",
            "Migrations provide a clear chronological git-tracked history of every schema change.",
            "Allows automated deployment pipelines and instant rollback capabilities."
      ]
},
    code: `// Generate a new migration:
php artisan make:migration create_posts_table

// In database/migrations/xxxx_xx_xx_create_posts_table.php:
use Illuminate\\Database\\Migrations\\Migration;
use Illuminate\\Database\\Schema\\Blueprint;
use Illuminate\\Support\\Facades\\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id(); // Auto-incrementing primary key
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->string('title');
            $table->string('slug')->unique();
            $table->text('body');
            $table->boolean('is_published')->default(false);
            $table->timestamps(); // created_at & updated_at
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('posts');
    }
};`,
    bullets: [
      'Schema as Code: Migrations allow team members to share and evolve database schemas without manually exporting SQL files.',
      'up() Method: Defines tables, columns, indexes, and foreign keys created when migrations run.',
      'down() Method: Reverses the operations (e.g. drops the table) if you ever need to rollback.',
      'Blueprint Methods: Expressive column types: `string()`, `text()`, `boolean()`, `dateTime()`, `json()`, `foreignId()`.'
    ],
    keyInsight: {
      title: 'Foreign Keys Made Simple',
      text: '`$table->foreignId("user_id")->constrained()->cascadeOnDelete()` sets up an indexed foreign key to the users table and cascades deletions in one readable line.'
    }
  },
  {
    id: 'laravel-slide23',
    slideNum: 23,
    totalSlides: 50,
    type: 'code',
    moduleTag: 'Module 6: Database',
    title: 'Running Migrations & Rollbacks',
    topicTitle: 'Managing Database State with Artisan',
    whatItDoes: "Executes all pending database migrations with `php artisan migrate`, checks current migration status, or rolls back previous batches with `php artisan migrate:rollback`.",
    whatIsGoingOn: "Laravel tracks executed migrations in a dedicated `migrations` table in your database. Running `migrate` inspects this table and only runs newly added migration files.",
    discussionPrompt: {
      question: "Why is `php artisan migrate:fresh` dangerous on production servers, and what safeguards does Laravel enforce?",
      hint: "What does `migrate:fresh` do to existing user data? What does Laravel display when `APP_ENV=production`?",
      talkingPoints: [
            "`migrate:fresh` drops every table and permanently wipes all database data.",
            "Laravel detects `APP_ENV=production` and requires an explicit `--force` confirmation flag.",
            "Production schema modifications should always be applied using non-destructive forward migrations."
      ]
},
    code: `// Run all outstanding migrations:
php artisan migrate

// Rollback the last batch of migrations executed:
php artisan migrate:rollback

// Rollback the last 2 migration batches:
php artisan migrate:rollback --step=2

// Drop all tables and re-run all migrations from scratch:
// (CAUTION: Clears all database data! Ideal for local development)
php artisan migrate:fresh

// Re-run all migrations and execute seeders:
php artisan migrate:fresh --seed`,
    bullets: [
      'Batch Tracking: Laravel maintains a hidden `migrations` table in your database tracking which migration files have executed and in what batch.',
      'Zero Duplicate Runs: Running `php artisan migrate` only executes new files that have not run yet.',
      'migrate:fresh: The quickest way during local development to reset your database after making schema adjustments.'
    ],
    keyInsight: {
      title: 'Production Rule',
      text: 'Never run `migrate:fresh` on a production server, as it permanently drops all database tables. Always use standard `php artisan migrate`.'
    }
  },
  {
    id: 'laravel-slide24',
    slideNum: 24,
    totalSlides: 50,
    type: 'single_topic',
    moduleTag: 'Module 6: Database',
    title: 'Interactive Eloquent ORM to SQL Playground',
    topicTitle: 'Translating PHP Methods into Parameterized SQL',
    whatItDoes: "Translates expressive object-oriented PHP queries like `Post::where(\"is_published\", true)->get()` into optimized, parameterized SQL queries automatically.",
    whatIsGoingOn: "Eloquent builds an abstract query syntax tree, compiles it into database-specific SQL (SQLite/MySQL/PostgreSQL), and binds parameters via PDO prepared statements to block SQL injection.",
    discussionPrompt: {
      question: "Why are parameterized prepared statements (e.g. `WHERE id = ?`) the only 100% reliable defense against SQL injection attacks?",
      hint: "How does the database treat user input when it is sent separately from the SQL command structure?",
      talkingPoints: [
            "Prepared statements treat user input strictly as literal values, never as executable SQL code.",
            "Even if user input contains quotes or `OR 1=1`, the query structure cannot be hijacked.",
            "Eloquent automatically binds every parameter with prepared statements under the hood."
      ]
},
    bullets: [
      'Active Record Pattern: Each Eloquent Model represents a database table, and an instance of that Model represents a specific row.',
      'Automatic Parameter Binding: Variables passed to `where()`, `find()`, or `create()` are passed through PDO prepared statements, making SQL injection impossible.',
      'Fluent Query Chaining: Combine filtering, ordering, eager loading, and limits using elegant PHP method chains.',
      'Collections Output: Results are returned not as raw arrays, but as rich `Illuminate\\Support\\Collection` objects packed with array helpers.'
    ],
    layman: {
      title: 'Try the Playground',
      text: 'Click the buttons in the interactive playground below to see how Eloquent methods translate directly into raw prepared SQL queries!'
    },
    keyInsight: {
      title: 'Developer Speed',
      text: 'Eloquent allows you to write complex queries in seconds while maintaining bulletproof security standards.'
    }
  },
  {
    id: 'laravel-slide25',
    slideNum: 25,
    totalSlides: 50,
    type: 'code',
    moduleTag: 'Module 6: Database',
    title: 'Database Seeders & Model Factories',
    topicTitle: 'Generating Realistic Test Data with Faker',
    whatItDoes: "Generates hundreds of realistic fake database rows (users, posts, comments) in milliseconds using Faker and Model Factories for development, testing, and layout styling.",
    whatIsGoingOn: "Model Factories define blueprint attributes with the Faker library. Running `Post::factory()->count(50)->create()` generates 50 records and inserts them directly into your database.",
    discussionPrompt: {
      question: "Why is developing an interface with 100 realistic dummy records much better than manually creating 2 test posts named \"Test 1\" and \"Test 2\"?",
      hint: "Think about testing pagination, varying text lengths, missing profile photos, and responsive layouts.",
      talkingPoints: [
            "Reveals unexpected layout breaks caused by long titles, short content, or special characters.",
            "Allows testing real pagination, search filters, and sorting with authentic volumes of data.",
            "Seeders allow any team member to populate a complete working database in 2 seconds."
      ]
},
    code: `// In database/factories/PostFactory.php:
namespace Database\\Factories;

use Illuminate\\Database\\Eloquent\\Factories\\Factory;

class PostFactory extends Factory
{
    public function definition(): array
    {
        return [
            'user_id' => \\App\\Models\\User::factory(),
            'title' => fake()->sentence(),
            'slug' => fake()->slug(),
            'body' => fake()->paragraphs(3, true),
            'is_published' => fake()->boolean(80),
        ];
    }
}

// In database/seeders/DatabaseSeeder.php:
public function run(): void
{
    // Generate 50 realistic posts with authors in 1 line!
    \\App\\Models\\Post::factory(50)->create();
}`,
    bullets: [
      'Model Factories: Define a blueprint of default fake attributes for testing using the built-in `fake()` helper.',
      'Instant Mock Data: Create hundreds of authentic test users, blog posts, and comments in seconds with `Post::factory(50)->create()`.',
      'Database Seeders: Script initial database state (e.g. seeding the default Admin account or country lookup tables).'
    ],
    keyInsight: {
      title: 'Testing Superpower',
      text: 'Never manually type dummy data into database tables again. Factories make UI and feature testing fast and realistic.'
    }
  },

  // ==========================================================================
  // MODULE 7: ELOQUENT ORM & ACTIVE RECORD (SLIDES 26 - 30)
  // ==========================================================================
  {
    id: 'laravel-slide26',
    slideNum: 26,
    totalSlides: 50,
    type: 'code',
    moduleTag: 'Module 7: Eloquent ORM',
    title: 'Defining Models & Method Casts',
    topicTitle: 'New in Laravel: Method-Based Attribute Casting',
    whatItDoes: "Maps database tables to interactive PHP classes. Laravel introduces method-based casts (`casts(): array`) for converting database columns into native PHP types (booleans, dates, JSON arrays).",
    whatIsGoingOn: "Eloquent uses the Active Record pattern. In Laravel, declaring `casts()` as a method allows calling static methods, instantiating custom cast objects, and using PHP 8.1+ Enums with arguments.",
    discussionPrompt: {
      question: "Why is defining `casts()` as a method in Laravel superior to the old `$casts` property array used in Laravel 10?",
      hint: "Can a PHP class property invoke functions or reference other runtime methods dynamically?",
      talkingPoints: [
            "Methods can execute logic, invoke static methods, and pass arguments to cast classes.",
            "Supports PHP 8.1+ backed Enums cleanly with autocomplete.",
            "Full static analysis and type safety support in modern IDEs."
      ]
},
    code: `namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Factories\\HasFactory;
use Illuminate\\Database\\Eloquent\\Model;

class Post extends Model
{
    use HasFactory;

    // Mass-assignment protection: whitelist allowed columns
    protected $fillable = [
        'user_id',
        'title',
        'slug',
        'body',
        'is_published',
    ];

    // New in Laravel: Method-based casts!
    // (Replaces the legacy protected $casts array)
    protected function casts(): array
    {
        return [
            'is_published' => 'boolean',
            'published_at' => 'datetime',
            'meta' => 'array',
        ];
    }
}`,
    bullets: [
      'Naming Convention: Singular model `Post` automatically maps to plural database table `posts`.',
      '$fillable Protection: Whitelists attributes permitted to be mass-assigned via `Post::create($request->all())`.',
      'New casts() Method: Laravel replaces the old `$casts` property with a method, allowing dynamic configuration and static class methods.',
      'Automatic Type Casting: Accessing `$post->is_published` returns a true PHP boolean, and `published_at` returns a Carbon DateTime instance.'
    ],
    keyInsight: {
      title: 'Laravel Innovation',
      text: 'Declaring `casts()` as a method makes attribute casting cleaner, extensible, and fully compatible with static analysis.'
    }
  },
  {
    id: 'laravel-slide27',
    slideNum: 27,
    totalSlides: 50,
    type: 'code',
    moduleTag: 'Module 7: Eloquent ORM',
    title: 'CRUD Operations with Eloquent',
    topicTitle: 'Reading, Creating, Updating, and Deleting Records',
    whatItDoes: "Performs all database Create, Read, Update, and Delete operations using intuitive PHP methods (`create()`, `find()`, `update()`, `delete()`) without writing raw SQL.",
    whatIsGoingOn: "Eloquent tracks model state in memory. When saving, it inspects modified attributes (`$dirty`) and issues a targeted SQL `UPDATE` statement only for the columns that actually changed.",
    discussionPrompt: {
      question: "What is mass-assignment vulnerability, and how does the `$fillable` property on an Eloquent model protect your database?",
      hint: "What happens if an attacker submits an extra form field like `is_admin=true` during profile registration?",
      talkingPoints: [
            "Mass-assignment allows users to set unvalidated database columns if left unprotected.",
            "`$fillable` acts as a strict whitelist specifying exactly which fields can be mass-assigned.",
            "Any submitted fields not in `$fillable` are silently ignored during `Model::create()`."
      ]
},
    code: `// 1. CREATE (Insert into database)
$post = Post::create([
    'user_id' => 1,
    'title' => 'Mastering Laravel',
    'slug' => 'mastering-laravel-11',
    'body' => 'Deep dive into modern web artisans...',
    'is_published' => true,
]);

// 2. READ (Fetch records)
$allPosts = Post::all();
$published = Post::where('is_published', true)->orderBy('id', 'desc')->get();
$single = Post::findOrFail(1);

// 3. UPDATE (Modify record)
$single->update(['title' => 'Mastering Laravel (Updated)']);

// 4. DELETE (Remove record)
$single->delete();
// Or delete directly by primary key:
Post::destroy(1);`,
    bullets: [
      'create(): Inserts a row and immediately returns the hydrated Eloquent model with generated ID and timestamps.',
      'findOrFail(): Finds a record by ID or automatically triggers a 404 response if not found.',
      'Automatic Timestamps: Eloquent automatically populates `created_at` and `updated_at` without manual intervention.',
      'Soft Deletes: Enable `use SoftDeletes;` to flag records as deleted with `deleted_at` rather than permanently purging them.'
    ],
    keyInsight: {
      title: 'Expressive Power',
      text: 'Every row in your database is a living PHP object with methods, casting, and relationships ready to use.'
    }
  },
  {
    id: 'laravel-slide28',
    slideNum: 28,
    totalSlides: 50,
    type: 'code',
    moduleTag: 'Module 7: Eloquent ORM',
    title: 'Eloquent Relationships (1-to-Many)',
    topicTitle: 'Connecting Users and Posts Intuitively',
    whatItDoes: "Connects related database tables together (e.g. a Post has many Comments; a Comment belongs to a Post) so you can query relations using natural properties like `$post->comments`.",
    whatIsGoingOn: "Laravel inspects foreign keys (`post_id`) to automatically build joined queries or subqueries when you access relation methods (`hasMany`, `belongsTo`, `hasOne`).",
    discussionPrompt: {
      question: "What is the critical difference between accessing `$post->comments` (property) versus `$post->comments()` (method)?",
      hint: "Which one executes the query immediately, and which one returns a Query Builder instance you can chain?",
      talkingPoints: [
            "Property `$post->comments` executes the query and returns the cached Eloquent Collection.",
            "Method `$post->comments()->where(\"approved\", true)->get()` allows chaining additional SQL filters.",
            "Understanding this difference prevents running redundant duplicate database queries."
      ]
},
    code: `// In app/Models/User.php:
namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;
use Illuminate\\Database\\Eloquent\\Relations\\HasMany;

class User extends Model
{
    // A User has many Posts
    public function posts(): HasMany
    {
        return $this->hasMany(Post::class);
    }
}

// In app/Models/Post.php:
use Illuminate\\Database\\Eloquent\\Relations\\BelongsTo;

class Post extends Model
{
    // A Post belongs to a User (author)
    public function author(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}

// Usage in controllers:
// $user = User::find(1);
// foreach ($user->posts as $post) { ... }
// echo $post->author->name;`,
    bullets: [
      'Intuitive Syntax: Define relations using readable methods like `hasMany()`, `belongsTo()`, `hasOne()`, and `belongsToMany()`.',
      'Dynamic Properties: Access relations as properties (`$user->posts`) to retrieve Eloquent Collections.',
      'Relational Insertion: Save related records cleanly: `$user->posts()->create(["title" => "My New Post"]);`.'
    ],
    keyInsight: {
      title: 'Convention Over Configuration',
      text: 'Because the foreign key `user_id` matches `{model}_id`, Laravel figures out table links automatically.'
    }
  },
  {
    id: 'laravel-slide29',
    slideNum: 29,
    totalSlides: 50,
    type: 'code',
    moduleTag: 'Module 7: Eloquent ORM',
    title: 'Eager Loading & Solving the N+1 Problem',
    topicTitle: 'Optimizing Database Queries for Lightning Performance',
    whatItDoes: "Solves the catastrophic N+1 query performance bug by pre-loading related records in a single batch using `Post::with(\"comments\")->get()` instead of running a query for every row in a loop.",
    whatIsGoingOn: "Without eager loading, looping through 25 posts to display their author fires 26 queries (1 + 25). Eager loading fires only 2 queries: one for posts and one for all matching author IDs using `WHERE id IN (...)`.",
    discussionPrompt: {
      question: "If an e-commerce catalog shows 50 products per page with their categories, what happens to the database server if you forget eager loading?",
      hint: "How many database queries will be executed every single time a customer refreshes the page?",
      talkingPoints: [
            "Fires 51 separate SQL queries per page load, quickly exhausting database connection pools.",
            "`Model::preventLazyLoading(!app()->isProduction())` catches this bug immediately during local development.",
            "Eager loading reduces query counts from hundreds down to just 2 fast, indexed queries."
      ]
},
    code: `// ❌ THE N+1 PROBLEM (101 SQL queries executed!)
// 1 query to get 100 posts, then 100 separate queries to get each author!
$posts = Post::all();
foreach ($posts as $post) {
    echo $post->author->name; // Fires a query for every single loop iteration!
}

// ✅ EAGER LOADING WITH with() (Only 2 SQL queries executed!)
// Query 1: SELECT * FROM posts;
// Query 2: SELECT * FROM users WHERE id IN (1, 2, 3, ...);
$posts = Post::with('author')->get();
foreach ($posts as $post) {
    echo $post->author->name; // Instant! Data is already in memory.
}`,
    bullets: [
      'The N+1 Trap: Occurs when accessing child relations inside loops, crippling database performance as data scales.',
      'Eager Loading: Using `with("relation")` pre-fetches all associated child records in one efficient `WHERE IN (...)` query.',
      'Multiple Relations: Eager load multiple relationships at once: `Post::with(["author", "comments.user", "tags"])->get();`.'
    ],
    keyInsight: {
      title: 'Performance Rule',
      text: 'Always use eager loading (`with(...)`) whenever you plan to display relational data in a list or table.'
    }
  },
  {
    id: 'laravel-slide30',
    slideNum: 30,
    totalSlides: 50,
    type: 'code',
    moduleTag: 'Module 7: Eloquent ORM',
    title: 'Query Scopes for Reusable Filters',
    topicTitle: 'Writing Clean, Chainable Business Logic',
    whatItDoes: "Allows you to package common database query filters into reusable, readable methods on your Model (e.g. `Post::published()->popular()->get()`) to keep controllers DRY.",
    whatIsGoingOn: "Query scopes are defined with a `scope` prefix (`scopePublished($query)`). When called, Laravel strips the prefix and passes the active query builder instance into the scope method.",
    discussionPrompt: {
      question: "Why is calling `Post::published()->get()` in 5 controllers better than writing `Post::where(\"is_published\", true)->whereNotNull(\"published_at\")->get()` everywhere?",
      hint: "What happens if the definition of \"published\" changes next month to require manager approval?",
      talkingPoints: [
            "Encapsulates business rules in a single place: update the scope once and it fixes the app everywhere.",
            "Makes controller code read like expressive, fluent English.",
            "Prevents bugs caused by forgotten filter clauses across different parts of the project."
      ]
},
    code: `namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Builder;
use Illuminate\\Database\\Eloquent\\Model;

class Post extends Model
{
    // Define a local scope by prefixing method with 'scope'
    public function scopePublished(Builder $query): void
    {
        $query->where('is_published', true);
    }

    public function scopeRecent(Builder $query): void
    {
        $query->orderBy('created_at', 'desc');
    }
}

// In your controller, call the scopes naturally:
$posts = Post::published()->recent()->take(5)->get();`,
    bullets: [
      'Local Scopes: Encapsulate common query constraints inside the model rather than repeating raw `where()` clauses across multiple controllers.',
      'Chaining Power: Scopes return the query builder, allowing seamless combination: `Post::published()->recent()->paginate(10);`.',
      'Dynamic Scopes: Pass arguments to scopes: `public function scopeOfType(Builder $query, string $type)`.'
    ],
    keyInsight: {
      title: 'Maintainability',
      text: 'If your definition of a "published post" ever changes, updating the single `scopePublished()` method updates your entire application instantly.'
    }
  },

  // ==========================================================================
  // MODULE 8: BLADE TEMPLATING & COMPONENTS (SLIDES 31 - 35)
  // ==========================================================================
  {
    id: 'laravel-slide31',
    slideNum: 31,
    totalSlides: 50,
    type: 'single_topic',
    moduleTag: 'Module 8: Blade',
    title: 'The Blade Templating Engine',
    topicTitle: 'Elegant Presentation Without Sacrificing Pure PHP Speed',
    whatItDoes: "Laravel's powerful, lightweight templating engine that allows you to write HTML with expressive directives (`@if`, `@foreach`, `@auth`) and automatic XSS escaping (`{{ $var }}`).",
    whatIsGoingOn: "Blade templates compile into cached raw PHP in `storage/framework/views/`. Curly braces `{{ $var }}` compile into `htmlspecialchars($var, ENT_QUOTES, \"UTF-8\")` to block Cross-Site Scripting.",
    discussionPrompt: {
      question: "Why does Blade automatically escape `{{ $var }}`, and why is using unescaped `{!! $var !!}` extremely dangerous with user input?",
      hint: "What happens if a user sets their display name to `<script>stealAuthToken()</script>`?",
      talkingPoints: [
            "Automatic escaping converts malicious HTML/JS tags into harmless plain text entities.",
            "Raw tags `{!! !!}` should ONLY be used for trusted, sanitized HTML (like processed Markdown).",
            "Never output raw user input directly with `{!! !!}`."
      ]
},
    bullets: [
      'Zero Overhead: Blade templates compile into pure, optimized PHP code and are cached automatically until modified.',
      'File Extension: All templates must be named using `.blade.php` and placed in the `resources/views/` directory.',
      'Automatic XSS Protection: Printing variables via `{{ $variable }}` automatically executes PHP\'s `htmlspecialchars()`.',
      'Raw HTML Unescaped: When intentional (e.g. rendering parsed Markdown), use `{!! $rawHtml !!}` cautiously.'
    ],
    layman: {
      title: 'Simple Analogy',
      text: 'Blade gives you clean, human-readable directives like `@if` and `@foreach` instead of ugly, messy `<?php if (...): ?>` tags.'
    },
    keyInsight: {
      title: 'Security Default',
      text: 'Double curly braces `{{ }}` protect your users from Cross-Site Scripting (XSS) attacks by default.'
    }
  },
  {
    id: 'laravel-slide32',
    slideNum: 32,
    totalSlides: 50,
    type: 'single_topic',
    moduleTag: 'Module 8: Blade',
    title: 'Blade Directives & Compiler Playground',
    topicTitle: 'Interactive Directive Execution in Real-Time',
    whatItDoes: "Provides clean control flow shortcuts that replace messy raw PHP tags (`<?php if(...): ?>`) with elegant directives like `@if`, `@foreach`, `@forelse`, `@auth`, and `@guest`.",
    whatIsGoingOn: "The Blade compiler scans templates using regular expressions, translating directives into native PHP code blocks before caching them for sub-millisecond execution.",
    discussionPrompt: {
      question: "Why is `@forelse` with `@empty` one of the most beloved directives in the Laravel community?",
      hint: "What do you normally have to write in raw PHP when rendering an array that might contain zero items?",
      talkingPoints: [
            "Combines an `empty()` check and a `foreach` loop into one clean, readable structure.",
            "Provides a dedicated fallback state (\"No items found\") without nested conditionals.",
            "Eliminates ugly raw PHP loops from frontend presentation templates."
      ]
},
    bullets: [
      'Conditionals: `@if`, `@elseif`, `@else`, `@endif`, and `@unless($archived)` for inverse logic.',
      'Authentication Checks: `@auth` renders content only for logged-in users; `@guest` renders for visitors.',
      'Looping Structures: `@foreach ($posts as $post)` and `@forelse` which provides an automatic `@empty` fallback.',
      'Asset Bundling: `@vite(["resources/css/app.css", "resources/js/app.js"])` seamlessly injects compiled Tailwind and JavaScript.'
    ],
    layman: {
      title: 'Interactive Directive Compiler',
      text: 'Toggle the Auth State and Notification count in the interactive tool below to watch Blade compile variables into live visual cards!'
    },
    keyInsight: {
      title: 'Compilation Speed',
      text: 'Because Blade compiles directly into cached opcode PHP, using Blade has literally zero runtime speed penalty.'
    }
  },
  {
    id: 'laravel-slide33',
    slideNum: 33,
    totalSlides: 50,
    type: 'code',
    moduleTag: 'Module 8: Blade',
    title: 'Modern Layout Components (<x-layout>)',
    topicTitle: 'The Modern Replacement for Legacy @extends',
    whatItDoes: "Structures your views using modern, tag-based component layouts (`<x-layout>`) where each page's unique content is seamlessly injected into the master layout's `$slot`.",
    whatIsGoingOn: "Replaces legacy `@extends` and `@section` inheritance with component composition. Laravel discovers `<x-layout>` in `resources/views/components/` and renders the wrapped view content.",
    discussionPrompt: {
      question: "Why do modern frontend developers prefer tag-based components (`<x-layout>`) over legacy `@extends(\"layouts.app\")`?",
      hint: "Notice how closely `<x-layout>` resembles modern HTML5, React, and Vue component syntax.",
      talkingPoints: [
            "Tag syntax feels native to modern HTML, React, and Vue developers.",
            "Component composition is much more flexible and modular than multi-tier inheritance.",
            "Components can easily accept typed props, default attributes, and named slots."
      ]
},
    code: `<!-- 1. resources/views/components/layout.blade.php -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>{{ $title ?? 'Laravel App' }}</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="bg-slate-50 text-slate-900">
    <header class="p-4 bg-white shadow-sm">
        <h1 class="text-xl font-bold">My Artisan Blog</h1>
    </header>

    <main class="container mx-auto py-8">
        {{ $slot }} <!-- Page content will inject right here! -->
    </main>
</body>
</html>

<!-- 2. resources/views/posts/index.blade.php -->
<x-layout title="All Blog Posts">
    <h2 class="text-2xl font-bold mb-4">Latest Articles</h2>
    @foreach ($posts as $post)
        <article class="p-4 bg-white rounded-lg mb-3 shadow-sm">
            <h3 class="font-bold text-lg">{{ $post->title }}</h3>
            <p>{{ $post->body }}</p>
        </article>
    @endforeach
</x-layout>`,
    bullets: [
      'Tag-Based Syntax: Blade components are invoked using custom tags starting with `x-` matching the file name in `components/`.',
      'The $slot Variable: The contents placed between `<x-layout>` and `</x-layout>` inject automatically into `$slot`.',
      'Passing Attributes & Props: Pass data directly into components: `<x-layout title="All Posts">`.'
    ],
    keyInsight: {
      title: 'Component Modernity',
      text: 'Tag-based Blade components resemble modern frontend frameworks like React or Vue while rendering on the server at maximum speed.'
    }
  },
  {
    id: 'laravel-slide34',
    slideNum: 34,
    totalSlides: 50,
    type: 'code',
    moduleTag: 'Module 8: Blade',
    title: 'Reusable UI Components & Named Slots',
    topicTitle: 'Building Modular Card & Modal Elements',
    whatItDoes: "Enables you to build reusable UI elements (like alerts, buttons, and modals) that accept dynamic attributes (`<x-alert type=\"warning\">`) and named multi-slot sections (`<x-slot:title>`).",
    whatIsGoingOn: "HTML attributes passed to component tags are collected into a `$attributes` bag. Named slots (`<x-slot:header>`) are extracted into dedicated variables alongside the main `$slot`.",
    discussionPrompt: {
      question: "How does building a library of reusable Blade components improve design consistency across a large application?",
      hint: "What happens when you need to change button colors or padding across 50 different views?",
      talkingPoints: [
            "Updating styling in 1 component file updates the design across every page instantly.",
            "Enforces consistent Tailwind CSS design tokens and accessible ARIA attributes.",
            "Accelerates development speed for new features by reusing pre-tested UI components."
      ]
},
    code: `<!-- resources/views/components/card.blade.php -->
@props(['type' => 'info'])

<div {{ $attributes->merge(['class' => 'p-4 rounded-xl border shadow-sm ' . ($type === 'danger' ? 'bg-rose-50 border-rose-200 text-rose-900' : 'bg-white border-slate-200')]) }}>
    @isset($header)
        <div class="border-b pb-2 mb-3 font-bold">
            {{ $header }}
        </div>
    @endisset

    <div>
        {{ $slot }}
    </div>
</div>

<!-- Usage in any Blade view: -->
<x-card type="danger" class="mb-4">
    <x-slot:header>
        Warning Alert
    </x-slot:header>
    This action cannot be undone. Please confirm your deletion.
</x-card>`,
    bullets: [
      '@props Directive: Declares incoming props and sets clean default values.',
      'Attribute Merging: `$attributes->merge([...])` merges external CSS classes and HTML attributes (like `id` or `data-id`) seamlessly.',
      'Named Slots: Use `<x-slot:header>` to inject content into specific named template locations.'
    ],
    keyInsight: {
      title: 'Design System Power',
      text: 'Using Blade components with Tailwind CSS allows you to build a reusable, company-wide UI design system with ease.'
    }
  },
  {
    id: 'laravel-slide35',
    slideNum: 35,
    totalSlides: 50,
    type: 'code',
    moduleTag: 'Module 8: Blade',
    title: 'Asset Bundling with Vite',
    topicTitle: 'Lightning-Fast Hot Module Replacement (HMR)',
    whatItDoes: "Compiles and bundles modern CSS (Tailwind) and JavaScript (Alpine.js, Vue, React) with instantaneous Hot Module Replacement (HMR) during local development.",
    whatIsGoingOn: "The `@vite` directive detects if the local Vite dev server is running on `localhost:5173`. In production, it points automatically to hashed, cache-busted assets in `public/build/`.",
    discussionPrompt: {
      question: "Why did Laravel transition from Webpack (Laravel Mix) to Vite as its default asset bundler?",
      hint: "Consider build speeds and browser reload delays when editing CSS files.",
      talkingPoints: [
            "Vite uses native browser ES modules, delivering instant sub-second hot updates.",
            "Builds production bundles significantly faster with Rollup.",
            "Zero complicated configuration files needed for modern Tailwind setups."
      ]
},
    code: `// In vite.config.js:
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true, // Auto-refreshes browser when Blade files change!
        }),
    ],
});

// Run dev server with instant Hot Module Reloading:
npm run dev

// Build minified production bundle:
npm run build`,
    bullets: [
      'Vite Integration: Laravel includes first-party integration with Vite for near-instant compilation of CSS, Tailwind, and JS.',
      'Full Blade Refresh: When `refresh: true` is enabled, editing any `.blade.php` file immediately updates your open browser tab without manual refresh.',
      'Production Optimization: `npm run build` minifies, hashes, and optimizes assets into `public/build/` for production CDN caching.'
    ],
    keyInsight: {
      title: 'Developer Experience',
      text: 'The combination of Laravel and Vite provides instantaneous page updates as you save files.'
    }
  },

  // ==========================================================================
  // MODULE 9: FORMS, VALIDATION & CSRF SECURITY (SLIDES 36 - 40)
  // ==========================================================================
  {
    id: 'laravel-slide36',
    slideNum: 36,
    totalSlides: 50,
    type: 'single_topic',
    moduleTag: 'Module 9: Security',
    title: 'CSRF Protection & The 419 Error',
    topicTitle: 'How Laravel Shields Applications from Forgery Attacks',
    whatItDoes: "Protects your web application against Cross-Site Request Forgery (CSRF) attacks by requiring an encrypted, session-verified token (`@csrf`) on all POST, PUT, and DELETE forms.",
    whatIsGoingOn: "The `ValidateCsrfToken` middleware checks that incoming requests contain an `_token` field matching the token stored in the user's active session. If missing or invalid, it halts with HTTP 419.",
    discussionPrompt: {
      question: "What is a Cross-Site Request Forgery attack, and how would an attacker steal funds from an authenticated bank user without `@csrf`?",
      hint: "Imagine a malicious site embedding an invisible form that submits to `bank.com/transfer` while you are logged in.",
      talkingPoints: [
            "Browsers automatically include cookies (sessions) with requests to a domain, even from third-party sites.",
            "Without CSRF tokens, external sites could submit unauthorized actions on behalf of logged-in users.",
            "The `@csrf` directive generates an unguessable secret token that only your authenticated site knows."
      ]
},
    bullets: [
      'Cross-Site Request Forgery (CSRF): A malicious attack where unauthorized commands are submitted from an authenticated user\'s browser.',
      'Automatic Token Generation: Laravel generates a unique secret CSRF session token for every active user session.',
      'The @csrf Directive: Renders a hidden HTML `<input type="hidden" name="_token" value="...">` inside your form.',
      'HTTP 419 Page Expired: If a POST, PUT, or DELETE request arrives without this token, Laravel blocks execution immediately with status code 419.'
    ],
    layman: {
      title: 'Bank Vault Analogy',
      text: 'Without CSRF tokens, a hacker could trick your browser into sending money while you are logged into your bank. The @csrf token is a one-time secret handshake proving the submission originated from your real form.'
    },
    keyInsight: {
      title: 'Golden Rule of Forms',
      text: 'Every HTML `<form method="POST">` in Laravel MUST contain `@csrf`. Omitting it will always trigger a 419 Page Expired error.'
    }
  },
  {
    id: 'laravel-slide37',
    slideNum: 37,
    totalSlides: 50,
    type: 'code',
    moduleTag: 'Module 9: Security',
    title: 'Form Method Spoofing (@method)',
    topicTitle: 'Simulating PUT, PATCH, and DELETE in HTML Forms',
    whatItDoes: "Allows HTML forms to trigger RESTful PUT, PATCH, and DELETE requests, bypassing the browser limitation that HTML `<form>` tags only natively support GET and POST.",
    whatIsGoingOn: "`@method(\"PUT\")` generates a hidden `<input type=\"hidden\" name=\"_method\" value=\"PUT\">` field. Laravel's routing middleware inspects this field and overrides the request's HTTP method.",
    discussionPrompt: {
      question: "Why did the HTML standard never natively support PUT or DELETE in `<form>` tags, and why is method spoofing necessary?",
      hint: "How do REST resource controllers know when an update versus a create is being requested?",
      talkingPoints: [
            "HTML forms were historically designed only for simple read (GET) and create (POST) actions.",
            "Method spoofing bridges the gap between browser form limitations and modern REST conventions.",
            "Allows clean routing to `PostController@update` and `PostController@destroy` without awkward URL paths."
      ]
},
    code: `<!-- HTML forms only natively support GET and POST methods! -->
<!-- To send a PUT (Update) or DELETE request, spoof the method: -->

<!-- Update Post Form (PUT) -->
<form action="{{ route('posts.update', $post) }}" method="POST">
    @csrf
    @method('PUT') <!-- Injects <input type="hidden" name="_method" value="PUT"> -->

    <input type="text" name="title" value="{{ old('title', $post->title) }}">
    <button type="submit">Update Post</button>
</form>

<!-- Delete Post Form (DELETE) -->
<form action="{{ route('posts.destroy', $post) }}" method="POST">
    @csrf
    @method('DELETE')
    <button type="submit" onclick="return confirm('Are you sure?')">Delete</button>
</form>`,
    bullets: [
      'HTML Browser Limitation: Standard HTML `<form>` tags only support `GET` and `POST`.',
      'The @method() Directive: Spoofs the HTTP verb by injecting a hidden `_method` input field.',
      'Laravel Route Matching: Laravel inspects the `_method` field and routes the request to your controller\'s `update()` or `destroy()` action.'
    ],
    keyInsight: {
      title: 'Standard Practice',
      text: 'Always pair `@csrf` with `@method("PUT")` or `@method("DELETE")` when updating or deleting records through web forms.'
    }
  },
  {
    id: 'laravel-slide38',
    slideNum: 38,
    totalSlides: 50,
    type: 'code',
    moduleTag: 'Module 9: Security',
    title: 'Incoming Request Validation',
    topicTitle: 'Never Trust User Input: $request->validate()',
    whatItDoes: "Validates submitted user input against strict rules (required, min/max length, email format, unique in database) before your application logic executes.",
    whatIsGoingOn: "`$request->validate()` evaluates input against validation rules. If validation fails, Laravel automatically halts execution, flashes errors to the session, and redirects back to the form.",
    discussionPrompt: {
      question: "Why must you NEVER rely solely on frontend HTML5 or JavaScript validation for application security?",
      hint: "Can an attacker bypass browser validation using Postman, curl, or browser developer tools?",
      talkingPoints: [
            "Frontend validation is for user convenience; backend validation is for security.",
            "Anyone can send raw HTTP POST requests bypassing browser checks completely.",
            "Backend validation is the only true barrier protecting your database integrity."
      ]
},
    code: `namespace App\\Http\\Controllers;

use App\\Models\\Post;
use Illuminate\\Http\\Request;
use Illuminate\\Http\\RedirectResponse;

class PostController extends Controller
{
    public function store(Request $request): RedirectResponse
    {
        // Validate the incoming HTTP request:
        $validated = $request->validate([
            'title' => ['required', 'string', 'min:5', 'max:255'],
            'slug'  => ['required', 'string', 'unique:posts,slug'],
            'body'  => ['required', 'string'],
        ]);

        // If validation fails, Laravel automatically redirects back
        // with error messages and flashed old form input!

        // If validation passes, execution continues safely:
        $post = Post::create($validated);

        return redirect()->route('posts.index')
            ->with('status', 'Post created successfully!');
    }
}`,
    bullets: [
      '$request->validate(): The cleanest way to validate data. Accepts an array of field names and pipe-delimited or array rules.',
      'Automatic Redirection: If validation fails, execution stops immediately, and the user is redirected back to the form with errors.',
      'Safe Data Extraction: The returned `$validated` variable contains ONLY the attributes that passed validation, preventing mass-assignment leaks.'
    ],
    keyInsight: {
      title: 'Defense in Depth',
      text: 'Validation is your first line of defense. By validating early, invalid or malicious data never reaches your database.'
    }
  },
  {
    id: 'laravel-slide39',
    slideNum: 39,
    totalSlides: 50,
    type: 'code',
    moduleTag: 'Module 9: Security',
    title: 'Displaying Errors & Flashing Old Input',
    topicTitle: 'Providing Exceptional UX for Form Errors',
    whatItDoes: "Displays helpful validation error messages next to form fields with `@error(\"field\")` and preserves previously typed input with `old(\"field\")` so users never lose their work.",
    whatIsGoingOn: "When validation fails, Laravel stores errors in the session's `$errors` MessageBag and flashes submitted inputs to the session for exactly one subsequent request before discarding them.",
    discussionPrompt: {
      question: "How does preserving form data with `value=\"{{ old('email') }}\"` dramatically improve user experience when a validation error occurs?",
      hint: "Think about how frustrating it is when a long form wipes all your answers because of one typo.",
      talkingPoints: [
            "Prevents user frustration and abandoned registrations caused by cleared forms.",
            "Session flashing retains data for exactly one request without polluting the database.",
            "Sensitive fields like passwords should intentionally NOT use `old()` for security reasons."
      ]
},
    code: `<!-- resources/views/posts/create.blade.php -->
<form action="{{ route('posts.store') }}" method="POST">
    @csrf

    <div>
        <label>Article Title</label>
        <!-- The old('title') helper preserves what the user typed! -->
        <input 
            type="text" 
            name="title" 
            value="{{ old('title') }}" 
            class="@error('title') border-rose-500 @enderror"
        >
        <!-- Display specific error for title -->
        @error('title')
            <p class="text-rose-500 text-sm mt-1">{{ $message }}</p>
        @enderror
    </div>

    <!-- Display all validation errors in a top banner -->
    @if ($errors->any())
        <div class="alert alert-danger">
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif

    <button type="submit">Publish</button>
</form>`,
    bullets: [
      'The @error Directive: Quickly checks if a specific field failed validation and exposes the localized `$message`.',
      'The old() Helper: Keeps the form pre-filled with whatever the user previously typed so they don\'t lose their work.',
      'The $errors Variable: Always available in all Blade views—even on successful requests where it is simply empty.'
    ],
    keyInsight: {
      title: 'User Experience',
      text: 'Combining `@error` with the `old()` helper ensures that users can correct form mistakes with zero frustration.'
    }
  },
  {
    id: 'laravel-slide40',
    slideNum: 40,
    totalSlides: 50,
    type: 'single_topic',
    moduleTag: 'Module 9: Security',
    title: 'Interactive CSRF & Validation Sandbox',
    topicTitle: 'Live Form Attack Simulation & Error Triggering',
    whatItDoes: "Provides an interactive testing sandbox demonstrating how Laravel handles valid submissions, missing CSRF tokens (HTTP 419), and validation failures in real time.",
    whatIsGoingOn: "Simulates the complete HTTP form submission pipeline: verifying CSRF tokens, evaluating validator rule arrays, and redirecting with flash session data or progressing to storage.",
    discussionPrompt: {
      question: "Why is seeing the cause-and-effect of missing CSRF tokens in an interactive sandbox helpful for mastering web security?",
      hint: "Connect the simulated visual pipeline to actual files in a project (`web.php`, `PostController.php`, `.blade.php`).",
      talkingPoints: [
            "Solidifies understanding of why the HTTP 419 error happens and how to fix it.",
            "Visualizes how validation errors travel through sessions back to Blade templates.",
            "Reinforces the role of middleware as an automated security shield."
      ]
},
    bullets: [
      'CSRF Attack Simulation: Toggle the CSRF token OFF to watch Laravel trigger the authentic HTTP 419 Page Expired response.',
      'Validation Testing: Submit incomplete form fields to trigger the `$errors->all()` validation error display.',
      'Success State: Submit valid data with CSRF enabled to see the 200 OK success state and session flash message.',
      'Hands-On Experience: Experiencing error states firsthand prepares you to diagnose real-world production issues effortlessly.'
    ],
    layman: {
      title: 'Interactive Simulator',
      text: 'Test submitting forms with and without CSRF tokens in the sandbox below to understand how Laravel enforces security.'
    },
    keyInsight: {
      title: 'Bulletproof Security',
      text: 'Laravel handles the complex security mechanics automatically so you never have to write custom token checkers.'
    }
  },

  // ==========================================================================
  // MODULE 10: STEP-BY-STEP PROJECT BUILD & TINKER (SLIDES 41 - 45)
  // ==========================================================================
  {
    id: 'laravel-slide41',
    slideNum: 41,
    totalSlides: 50,
    type: 'single_topic',
    moduleTag: 'Module 10: Project Build',
    title: 'Building a Real Feature Step-by-Step',
    topicTitle: 'The Complete Artisan Workflow in Action',
    whatItDoes: "Walks students through the professional step-by-step workflow of building a production feature: Migration ➔ Model ➔ Routes ➔ Controller ➔ Blade Views.",
    whatIsGoingOn: "Follows industry-standard feature architecture. Designing the schema first establishes clear data contracts, followed by business rules in models/controllers, and presentation in views.",
    discussionPrompt: {
      question: "Why is it best practice to design your database migration and Model BEFORE writing views and templates?",
      hint: "What happens if you design a complex UI only to discover your database cannot support the relationships you planned?",
      talkingPoints: [
            "Data models dictate what information is available to views.",
            "Prevents building UI mockups with unrealistic or missing database fields.",
            "Artisan scaffolds models, migrations, and resource controllers simultaneously with `make:model Post -mcr`."
      ]
},
    bullets: [
      'Step 1 (Scaffold): `php artisan make:model Post -mcr` creates your Model, Migration, and Controller.',
      'Step 2 (Schema): Edit the migration in `database/migrations/` and run `php artisan migrate`.',
      'Step 3 (Routes): Register `Route::resource("posts", PostController::class)` in `routes/web.php`.',
      'Step 4 (Logic): Implement controller methods (`index`, `create`, `store`, `show`) with `$request->validate()`.',
      'Step 5 (Views): Create `<x-layout>` and Blade views in `resources/views/posts/`.'
    ],
    layman: {
      title: 'The Artisan Rhythm',
      text: 'Scaffold ➔ Migrate ➔ Route ➔ Controller ➔ View. This simple five-step rhythm is how thousands of production web applications are built every day.'
    },
    keyInsight: {
      title: 'Consistency',
      text: 'Mastering this five-step sequence gives you the foundation to build any SaaS, e-commerce, or enterprise portal.'
    }
  },
  {
    id: 'laravel-slide42',
    slideNum: 42,
    totalSlides: 50,
    type: 'single_topic',
    moduleTag: 'Module 10: Project Build',
    title: 'Interactive Schema Builder Sandbox',
    topicTitle: 'Live Blueprint Column Designer',
    whatItDoes: "An interactive database schema sandbox where students can toggle columns (strings, texts, booleans, timestamps) and watch migration code and SQL generate in real time.",
    whatIsGoingOn: "Demonstrates the `Blueprint` class methods (`string()`, `text()`, `boolean()`, `foreignId()`, `timestamps()`) that Laravel compiles into database-specific `CREATE TABLE` DDL.",
    discussionPrompt: {
      question: "What is the performance difference between a `string` (VARCHAR) and a `text` column in relational databases, and when should you use each?",
      hint: "Think about database index sizes, memory consumption, and search efficiency.",
      talkingPoints: [
            "`string` defaults to 255 characters and can be indexed and searched rapidly.",
            "`text` supports up to 65,535 characters, ideal for article bodies and long markdown.",
            "Choosing appropriate column types optimizes database storage and query execution speed."
      ]
},
    bullets: [
      'Try adding fields: Click buttons to append foreign keys, unique slugs, or timestamps to the Blueprint.',
      'Database Flexibility: Notice how the schema code works identically whether you use SQLite, MySQL, or Postgres.',
      'Constraint Validation: Enforce database integrity with `unique()`, `nullable()`, and `cascadeOnDelete()`.',
      'Blueprint Clarity: Clean declarations make database schema reviews painless during team pull requests.'
    ],
    layman: {
      title: 'Interactive Builder',
      text: 'Use the interactive Blueprint builder below to design your database table fields and review generated schema code!'
    },
    keyInsight: {
      title: 'Schema Integrity',
      text: 'Setting proper database constraints in migrations guarantees your data remains clean and valid even under heavy load.'
    }
  },
  {
    id: 'laravel-slide43',
    slideNum: 43,
    totalSlides: 50,
    type: 'code',
    moduleTag: 'Module 10: Project Build',
    title: 'Step 4 Implementation: PostController',
    topicTitle: 'Connecting Eloquent, Validation, and Blade Views',
    whatItDoes: "Implements the complete CRUD logic for our blog feature: listing posts with pagination, validating input, and saving new records into SQLite via Eloquent.",
    whatIsGoingOn: "The controller validates incoming request data, executes `Post::create()`, flashes a session success message, and redirects to the index view.",
    discussionPrompt: {
      question: "Why should controllers remain \"skinny\" by delegating complex queries and business rules to Models or Action classes?",
      hint: "What happens to maintainability when a single controller method grows to 250 lines of code?",
      talkingPoints: [
            "\"Skinny Controllers, Fat Models/Services\" keeps application logic modular and maintainable.",
            "Enables reusing the same business logic across Web routes, API endpoints, and Console commands.",
            "Makes automated unit testing fast, reliable, and straightforward."
      ]
},
    code: `namespace App\\Http\\Controllers;

use App\\Models\\Post;
use Illuminate\\Http\\Request;
use Illuminate\\View\\View;
use Illuminate\\Http\\RedirectResponse;

class PostController extends Controller
{
    public function index(): View
    {
        $posts = Post::where('is_published', true)
            ->latest()
            ->paginate(10); // Automatic pagination!

        return view('posts.index', ['posts' => $posts]);
    }

    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'title' => 'required|min:5|max:255',
            'body'  => 'required',
        ]);

        $post = Post::create($validated);

        return redirect()->route('posts.show', $post)
            ->with('status', 'Article published successfully!');
    }
}`,
    bullets: [
      'Automatic Pagination: Calling `->paginate(10)` automatically computes SQL offsets, limits, and total pages.',
      'Blade Pagination Links: Render styled pagination buttons in your template with a single call: `{{ $posts->links() }}`.',
      'Clean Return Types: Modern Laravel code embraces strict PHP return types (`View`, `RedirectResponse`).'
    ],
    keyInsight: {
      title: 'Built-in Pagination',
      text: 'In raw PHP, pagination requires dozens of lines of mathematical offset calculations. In Laravel, it is one method call.'
    }
  },
  {
    id: 'laravel-slide44',
    slideNum: 44,
    totalSlides: 50,
    type: 'code',
    moduleTag: 'Module 10: Project Build',
    title: 'Interactive REPL with php artisan tinker',
    topicTitle: 'Testing Code and Querying Data Live in Terminal',
    whatItDoes: "Introduces `php artisan tinker`, an interactive command-line PHP REPL (Read-Eval-Print Loop) that lets you experiment with your application and query models in real time.",
    whatIsGoingOn: "Tinker boots your complete Laravel application in memory, giving you direct terminal access to Eloquent models, facades, helper functions, and the service container.",
    discussionPrompt: {
      question: "How does `php artisan tinker` save you hours of debugging time compared to adding temporary `dd()` statements in your code?",
      hint: "Think about testing an Eloquent query or creating 5 test users without having to open a browser or fill out a form.",
      talkingPoints: [
            "Test queries, relations, and calculation methods instantly without reloading web pages.",
            "Create and inspect database records directly from your terminal.",
            "An indispensable power tool used daily by professional Laravel engineers."
      ]
},
    code: `// Boot the interactive PsySH REPL:
php artisan tinker

// 1. Create a record interactively:
> $post = App\\Models\\Post::create(['title' => 'Tinker Test', 'body' => 'Testing']);

// 2. Count records in database:
> App\\Models\\Post::count();
= 42

// 3. Test passwords and hashing:
> Hash::make('secret-password');
= "$2y$12$eG8rE74l5f73k9QW..."

// 4. Test helper functions:
> now()->addDays(7)->format('Y-m-d');
= "2026-09-16"`,
    bullets: [
      'PsySH Power: Tinker boots your entire Laravel application in an interactive terminal shell.',
      'Live Database Exploration: Query and modify database records without writing temporary controller routes or opening GUI tools.',
      'Instant Debugging: Test complex Eloquent queries or encryption logic in real-time.'
    ],
    keyInsight: {
      title: 'Artisan Pro Tip',
      text: 'Tinker is the ultimate playground. Whenever you are uncertain about a method or query, test it in Tinker first.'
    }
  },
  {
    id: 'laravel-slide45',
    slideNum: 45,
    totalSlides: 50,
    type: 'single_topic',
    moduleTag: 'Module 10: Project Build',
    title: 'Interactive Tinker Shell Sandbox',
    topicTitle: 'Execute PHP & Eloquent Commands Live',
    whatItDoes: "An interactive in-browser simulation of the Artisan Tinker terminal where students can run authentic Eloquent commands and see instant database responses.",
    whatIsGoingOn: "Demonstrates real CLI feedback loops: instantiating models, executing `Post::create()`, checking record counts, and querying results directly.",
    discussionPrompt: {
      question: "Why is experimenting in a terminal REPL the fastest way to master Eloquent queries and relationships?",
      hint: "Consider the speed of feedback loops when learning new syntax.",
      talkingPoints: [
            "Immediate feedback builds muscle memory and deepens conceptual understanding.",
            "Safe sandbox environment to test queries without fear of breaking application code.",
            "Builds student confidence working with the command line."
      ]
},
    bullets: [
      'Try Tinker live: Click the preset commands below to test `Post::count()`, `Hash::make()`, or `config()` queries.',
      'Direct Feedback: Experience the immediate evaluation loop that makes Tinker such a beloved tool.',
      'Safe Sandboxing: Experiment with syntax and object relationships without touching your production database.'
    ],
    layman: {
      title: 'Interactive Shell',
      text: 'Type commands or click the buttons in the terminal below to test how Tinker evaluates PHP code interactively.'
    },
    keyInsight: {
      title: 'Speed of Thought',
      text: 'Tinker lets you converse directly with your application code in real time.'
    }
  },

  // ==========================================================================
  // MODULE 11: AUTHENTICATION, STARTER KITS & SUMMARY (SLIDES 46 - 50)
  // ==========================================================================
  {
    id: 'laravel-slide46',
    slideNum: 46,
    totalSlides: 50,
    type: 'single_topic',
    moduleTag: 'Module 11: Production',
    title: 'Starter Kits & Authentication',
    topicTitle: 'Laravel Breeze & Production Authentication',
    whatItDoes: "Provides official, production-ready authentication scaffolding (login, registration, password resets, email verification) via Laravel Breeze and Jetstream.",
    whatIsGoingOn: "Breeze publishes clean, readable controllers and views directly into your application using Blade, Livewire, or Inertia (Vue/React), giving you 100% code ownership with zero black-box magic.",
    discussionPrompt: {
      question: "Why is building a custom authentication system from scratch considered a major security risk for development teams?",
      hint: "Think about password hashing algorithms (bcrypt/argon2), timing attacks, session fixation, and secure token expiration.",
      talkingPoints: [
            "Authentication has dozens of subtle cryptographic pitfalls that are easy to get wrong.",
            "Laravel Breeze is battle-tested by millions of applications and audited by top security researchers.",
            "Saves weeks of development time while delivering enterprise-grade authentication out-of-the-box."
      ]
},
    bullets: [
      'Never Write Auth from Scratch: Authentication is security-critical. Laravel provides battle-tested starter kits.',
      'Laravel Breeze: Minimal, simple authentication scaffolding covering Login, Registration, Password Reset, Email Verification, and Profile management.',
      'Frontend Stacks: Breeze supports your choice of Blade + Alpine, Livewire, or Inertia with Vue or React.',
      'Laravel Jetstream: An advanced starter kit featuring two-factor authentication (2FA), team management, and API token generation via Sanctum.'
    ],
    layman: {
      title: 'Starter Kits',
      text: 'A starter kit gives you a complete, professionally designed login, register, and user settings system on day one so you don\'t waste weeks reinventing password reset flows.'
    },
    keyInsight: {
      title: 'Security Certified',
      text: 'Laravel\'s authentication kits are audited by top security professionals and protect against brute-force attacks and session fixation.'
    }
  },
  {
    id: 'laravel-slide47',
    slideNum: 47,
    totalSlides: 50,
    type: 'single_topic',
    moduleTag: 'Module 11: Production',
    title: 'Testing with Pest PHP',
    topicTitle: 'Laravel Default Testing Framework',
    whatItDoes: "Introduces Pest PHP, Laravel's official modern testing framework that allows you to write elegant, expressive automated tests (`it(\"shows published posts\")`) to prevent regressions.",
    whatIsGoingOn: "Pest runs on top of PHPUnit with an elegant closure-based syntax. Running `php artisan test` boots an in-memory SQLite database, runs tests, and reports pass/fail metrics.",
    discussionPrompt: {
      question: "Why do automated tests give development teams the superpower of deploying updates on Friday afternoon without anxiety?",
      hint: "What happens when you refactor a database query or change a controller method if you have 100 passing automated tests?",
      talkingPoints: [
            "Automated test suites catch regressions before broken code ever reaches production servers.",
            "Enables fearless refactoring, database optimizations, and framework version upgrades.",
            "Pest's syntax reads like plain human language, making test-driven development enjoyable."
      ]
},
    bullets: [
      'Pest as Default: Laravel adopts Pest PHP as the default testing framework during `laravel new` scaffolding.',
      'Expressive Syntax: Write tests that read like natural English: `test("it can create a post", function () { ... });`.',
      'HTTP Testing: Simulate requests and assert responses: `$response = $this->get("/"); $response->assertStatus(200);`.',
      'Artisan Test Runner: Execute your entire test suite with `php artisan test` to see beautiful color-coded terminal results.'
    ],
    layman: {
      title: 'Automated Confidence',
      text: 'Tests are like automated quality inspectors running through your application before every deploy to ensure nothing is broken.'
    },
    keyInsight: {
      title: 'Confidence to Ship',
      text: 'Writing automated tests gives you the confidence to refactor code and deploy to production on Friday afternoons without fear.'
    }
  },
  {
    id: 'laravel-slide48',
    slideNum: 48,
    totalSlides: 50,
    type: 'code',
    moduleTag: 'Module 11: Production',
    title: 'Production Readiness & Optimization',
    topicTitle: 'Speeding Up Live Production Deployments',
    whatItDoes: "Prepares your Laravel application for high-traffic production environments by compiling configurations, routes, and views into fast cached PHP arrays and disabling debug mode.",
    whatIsGoingOn: "`php artisan optimize` executes `config:cache`, `route:cache`, and `view:cache`, eliminating filesystem scans and regex route compilation on incoming HTTP requests.",
    discussionPrompt: {
      question: "Why is setting `APP_DEBUG=false` the single most critical checklist item before launching a Laravel application to the public?",
      hint: "What sensitive information appears on the screen when an unhandled error occurs while `APP_DEBUG=true`?",
      talkingPoints: [
            "Debug screens expose database passwords, secret API keys, server IP addresses, and file paths.",
            "Never deploy an application to production with `APP_DEBUG=true`.",
            "Optimization caches (`optimize`) reduce response times by up to 80% under heavy traffic."
      ]
},
    code: `// In production, optimize the entire application in one command:
php artisan optimize

// This compiles and caches:
// 1. Configuration cache (php artisan config:cache)
// 2. Route cache (php artisan route:cache)
// 3. View template cache (php artisan view:cache)

// To clear all caches during deployment updates:
php artisan optimize:clear

// Never forget in production .env:
APP_ENV=production
APP_DEBUG=false`,
    bullets: [
      'Configuration Caching: Merges all configuration files into a single cached file, bypassing file disk reads on every request.',
      'Route Caching: Compiles all routes into a fast lookup table, providing a dramatic speed boost for apps with hundreds of routes.',
      'optimize: The official Artisan command run during automated deployment scripts (Forge, Envoyer, GitHub Actions).'
    ],
    keyInsight: {
      title: 'Production Performance',
      text: 'Running `php artisan optimize` in production can double or triple your application request throughput.'
    }
  },
  {
    id: 'laravel-slide49',
    slideNum: 49,
    totalSlides: 50,
    type: 'single_topic',
    moduleTag: 'Module 11: Production',
    title: 'Course Summary & Master Checklist',
    topicTitle: 'What You Have Mastered Today',
    whatItDoes: "Summarizes the 10 core architectural pillars of Laravel mastered throughout the course, providing a comprehensive blueprint for building production-grade web applications.",
    whatIsGoingOn: "Consolidates knowledge across architecture, routing, controllers, databases, ORM, security, templating, and deployment into an integrated mental model.",
    discussionPrompt: {
      question: "Looking back across the entire framework, which component of Laravel do you find most impressive or most useful for your upcoming projects?",
      hint: "Consider Eloquent relationships, streamlined `bootstrap/app.php`, or zero-config SQLite.",
      talkingPoints: [
            "Reflect on personal learning growth from Day 1 to Day 50.",
            "Identify areas for deeper exploration (Queues, WebSockets, Testing, Inertia.js).",
            "Prepare for the final mastery assessment quiz."
      ]
},
    bullets: [
      '✓ Laravel Architecture: Unified `bootstrap/app.php` and streamlined folder structure.',
      '✓ Project Setup: Prerequisites (PHP 8.2+), Composer, and zero-config SQLite defaults.',
      '✓ Routing & Controllers: RESTful methods, route parameters, named routes, and Model Binding.',
      '✓ Database & Eloquent: Migrations, schema Blueprints, method casts, and eager loading.',
      '✓ Blade & Security: Reusable `<x-layout>` components, `@csrf` protection, and request validation.',
      '✓ Developer Tooling: Artisan CLI commands, interactive Tinker REPL, and production optimization.'
    ],
    layman: {
      title: 'Congratulations!',
      text: 'You now possess the foundational knowledge required to build, secure, and deploy modern web applications with Laravel.'
    },
    keyInsight: {
      title: 'Next Step: Certification Quiz',
      text: 'Put your knowledge to the test by taking the 10-question assessment quiz to verify your Laravel mastery!'
    }
  },
  {
    id: 'laravel-slide50',
    slideNum: 50,
    totalSlides: 50,
    type: 'single_topic',
    moduleTag: 'Quiz Prep & Next Steps',
    title: 'Interactive Project Tree & Quiz Launch',
    topicTitle: 'Explore the Complete Architecture and Launch Assessment',
    whatItDoes: "Provides a complete interactive project file explorer to review every directory in a Laravel app, along with a direct launchpad to test your knowledge with the official mastery quiz.",
    whatIsGoingOn: "Connects your holistic understanding of the directory structure directly with the 10-question evaluation quiz hosted at `/quiz/?id=laravel11`.",
    discussionPrompt: {
      question: "How does knowing where each file lives and what it does empower you to start building your own custom Laravel applications right now?",
      hint: "Think about the workflow of turning an idea into a working prototype.",
      talkingPoints: [
            "Confidence to initialize new projects with `laravel new` without hesitation.",
            "Understanding how to navigate and consult official documentation at `laravel.com/docs/11.x`.",
            "Ready to build and deploy real-world client and portfolio web projects."
      ]
},
    bullets: [
      'Interactive Directory Tree: Click each directory in the explorer below to review its official documentation role.',
      'Assessment Quiz Ready: 10 comprehensive questions covering PHP 8.2+, `bootstrap/app.php`, SQLite, CSRF, and Eloquent.',
      'Keep Building: The best way to solidify your skills is to open your terminal and run `laravel new blog`!'
    ],
    layman: {
      title: 'Interactive Directory Explorer',
      text: 'Click on the folders and files in the interactive directory explorer below for a final review before launching the quiz!'
    },
    keyInsight: {
      title: 'The Artisan Way',
      text: 'Build something amazing. Happy coding with Laravel!'
    }
  }
];
