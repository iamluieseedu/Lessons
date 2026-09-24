import { SlideData } from '../types/slide';

// ============================================================================
// WEEK 1: INTRODUCTION TO LARAVEL
// ============================================================================
export const webdev3Week1Slides: SlideData[] = [
  {
    id: 'w1-slide1',
    slideNum: 1,
    totalSlides: 13,
    type: 'cover',
    moduleTag: 'Week 1 • Web Dev 3',
    title: 'Introduction to Laravel',
    subtitle: 'Understand the Laravel ecosystem, configure your local environment, and launch your first application.'
  },
  {
    id: 'w1-slide2',
    slideNum: 2,
    totalSlides: 13,
    type: 'single_topic',
    moduleTag: 'Module 1: Foundations',
    title: 'The Modern PHP Renaissance',
    topicTitle: 'Why Laravel Powers Millions of Enterprise Applications',
    whatItDoes: 'Provides an expressive, elegant web framework that eliminates repetitive boilerplate while enforcing modern architectural best practices.',
    whatIsGoingOn: 'Laravel operates as a dependency-injected IoC (Inversion of Control) container that pipelines incoming HTTP requests through routing, middleware, controllers, and database models.',
    bullets: [
      'Developer Joy & Velocity: Emphasizes readability, clean syntax, and rapid full-stack delivery.',
      'Batteries-Included Architecture: Out-of-the-box routing, authentication, ORM database mappers, queue workers, and background schedulers.',
      'Progressive Framework: Scales effortlessly from zero-config local SQLite prototypes to multi-region distributed cloud infrastructure.',
      'Modern PHP Standards: Strictly leverages PHP 8.2+ type safety, readonly classes, attributes, and match expressions.'
    ],
    layman: {
      title: 'Real-World Analogy',
      text: 'Coding in raw PHP is like manufacturing individual bolts, wheels, and belts by hand. Laravel is a high-tech automated vehicle chassis—all powertrain and safety systems are pre-tested, so you can focus directly on driving.'
    },
    keyInsight: {
      title: 'Core Philosophy',
      text: 'Laravel takes care of the repetitive plumbing of web development so you can concentrate on building features that make your business unique.'
    },
    discussionPrompt: {
      question: 'Why do modern software companies choose established frameworks over writing custom PHP engines from scratch?',
      talkingPoints: [
        'Faster team onboarding with globally standardized directory patterns.',
        'Continuous official security vulnerability audits and patches.',
        'Rich official first-party ecosystem (Breeze, Sanctum, Forge, Horizon).'
      ]
    }
  },
  {
    id: 'w1-slide3',
    slideNum: 3,
    totalSlides: 13,
    type: 'comparison',
    moduleTag: 'Module 1: Foundations',
    title: 'Vanilla PHP vs Laravel',
    topicTitle: 'How Modern Frameworks Protect and Accelerate Development',
    whatItDoes: 'Replaces raw SQL strings, regex routing in .htaccess, and manual cookie sessions with automated, battle-tested abstractions.',
    whatIsGoingOn: 'Laravel wraps PHP superglobals ($_POST, $_GET, $_SESSION) in an object-oriented Request lifecycle, sanitizes parameters automatically with PDO, and enforces CSRF tokens.',
    versusLeft: {
      title: 'Vanilla PHP (Manual Crafting)',
      bullets: [
        'Must manually craft PDO connections and remember SQL parameter binding',
        'Vulnerable to SQL Injection if prepared statements are missed',
        'No built-in CSRF token protection for web forms',
        'Routing requires complex regex matching or messy directory index files',
        'Inconsistent folder structure across different team members'
      ]
    },
    versusRight: {
      title: 'Laravel (Artisan Standard)',
      bullets: [
        'Eloquent ORM automatically sanitizes parameters and defines relations',
        'Built-in CSRF token defense on every web POST route',
        'Expressive route declarations: Route::get("/posts", [PostController::class, "index"])',
        'Streamlined, convention-based architecture recognized worldwide',
        'Artisan CLI scaffolds models, migrations, and controllers in milliseconds'
      ]
    },
    keyInsight: {
      title: 'Safety First',
      text: 'Laravel eliminates common security pitfalls (SQLi, CSRF, XSS, session fixation) by default.'
    }
  },
  {
    id: 'w1-slide4',
    slideNum: 4,
    totalSlides: 13,
    type: 'single_topic',
    moduleTag: 'Module 1: Foundations',
    title: 'The Laravel First-Party Ecosystem',
    topicTitle: 'Comprehensive Tools Powering Modern Production',
    whatItDoes: 'Supplies integrated official packages that solve real-world development problems without third-party dependency chaos.',
    whatIsGoingOn: 'Each package is maintained directly by the Laravel core team, ensuring 100% backward compatibility and seamless updates.',
    bullets: [
      'Laravel Breeze & Jetstream: Turnkey authentication scaffolds with Blade, Vue, or React.',
      'Laravel Sanctum: Featherweight API token issuing and SPA cookie authentication.',
      'Laravel Forge & Vapor: Effortless server provisioning on AWS, DigitalOcean, or serverless lambda.',
      'Laravel Horizon & Pulse: Real-time dashboard monitoring for Redis queues and server health metrics.'
    ],
    layman: {
      title: 'Ecosystem Cohesion',
      text: 'Instead of searching through unmaintained GitHub plugins for authentication or background jobs, Laravel provides officially verified modules that work together seamlessly.'
    }
  },
  {
    id: 'w1-slide5',
    slideNum: 5,
    totalSlides: 13,
    type: 'single_topic',
    moduleTag: 'Module 2: Environment Setup',
    title: 'Prerequisites & System Requirements',
    topicTitle: 'Everything You Need Before Building',
    whatItDoes: 'Validates that your local development workstation possesses the necessary runtime binaries and package managers.',
    whatIsGoingOn: 'Laravel requires modern PHP extensions (BCMath, Ctype, cURL, DOM, Fileinfo, Filter, Hash, Mbstring, OpenSSL, PCRE, PDO, Session, Tokenizer, XML) and Composer.',
    bullets: [
      'PHP >= 8.2: Required for modern typing, readonly classes, and performance enhancements.',
      'Composer: The official PHP dependency and package manager.',
      'Database: SQLite (default zero-configuration file) or MySQL / PostgreSQL.',
      'Node.js & NPM: For compiling Vite frontend assets, Tailwind CSS, or TypeScript.'
    ],
    code: `// Verify your local environment in terminal:
php -v
composer -v
node -v
npm -v`,
    keyInsight: {
      title: 'Zero-Config SQLite',
      text: 'Laravel defaults to SQLite out of the box. You do not need to install or configure MySQL just to start learning and prototyping!'
    }
  },
  {
    id: 'w1-slide6',
    slideNum: 6,
    totalSlides: 13,
    type: 'single_topic',
    moduleTag: 'Module 2: Environment Setup',
    title: 'Creating Your First Application',
    topicTitle: 'Project Scaffolding via Composer or Laravel Installer',
    whatItDoes: 'Downloads the official application skeleton, installs dependencies via Composer, and generates a unique application encryption key.',
    whatIsGoingOn: 'Artisan creates the directory hierarchy, copies .env.example to .env, and runs key:generate to secure cookies and sessions.',
    bullets: [
      'Method 1 (Global Installer): composer global require laravel/installer && laravel new my-app',
      'Method 2 (Direct Composer): composer create-project laravel/laravel my-app',
      'Choose SQLite when prompted for database during project creation for instant setup.',
      'Launch development server: cd my-app && php artisan serve'
    ],
    code: `// Step 1: Create application
composer create-project laravel/laravel webdev3-app

// Step 2: Navigate into folder
cd webdev3-app

// Step 3: Start local development server
php artisan serve
// Output: Server running on [http://127.0.0.1:8000]`,
    layman: {
      title: 'Instant Server',
      text: 'You do not need XAMPP, WAMP, or Apache running. \`php artisan serve\` launches a lightweight built-in PHP web server immediately on port 8000.'
    }
  },
  {
    id: 'w1-slide7',
    slideNum: 7,
    totalSlides: 13,
    type: 'single_topic',
    moduleTag: 'Module 2: Environment Setup',
    title: 'Laravel Streamlined Directory Structure',
    topicTitle: 'The Cleaned-Up Application Architecture',
    whatItDoes: 'Organizes your code into intuitive, focused directories with zero clutter.',
    whatIsGoingOn: 'Modern Laravel streamlined the root directory, centralizing application bootstrapping in `bootstrap/app.php` and keeping `app/` exclusively for your custom code.',
    bullets: [
      'app/: Contains your Models, Controllers, Middleware, and Providers.',
      'bootstrap/app.php: The single unified file configuring routing, middleware, and exception handling.',
      'config/: Houses application configuration files (database, cache, mail, services).',
      'database/: Contains database migrations, factories, and seeders.',
      'resources/views/: Contains your Blade HTML templates and raw frontend assets.',
      'routes/: Contains `routes/web.php` for browser requests and `routes/console.php` for Artisan tasks.'
    ],
    keyInsight: {
      title: 'Less is More',
      text: 'Gone are the days of dozens of unused middleware and provider files. Modern Laravel only generates what your application actually needs.'
    }
  },
  {
    id: 'w1-slide8',
    slideNum: 8,
    totalSlides: 13,
    type: 'single_topic',
    moduleTag: 'Module 3: Project Configuration',
    title: 'Environment Configuration (.env)',
    topicTitle: 'Managing Local Credentials, Ports, and Secret Keys',
    whatItDoes: 'Maintains machine-specific environment settings that should never be committed to Git version control.',
    whatIsGoingOn: 'Laravel reads the `.env` file upon boot via DotEnv and makes values available through the `env()` and `config()` functions.',
    bullets: [
      'APP_NAME: Defines the public name of your application.',
      'APP_ENV: Set to "local" during development, changed to "production" when deployed.',
      'APP_DEBUG: Set to "true" locally for detailed error stack traces; MUST be "false" in production.',
      'APP_KEY: A 32-character random string used by Laravel to encrypt user cookies and session IDs.',
      'DB_CONNECTION: Database driver (defaults to "sqlite", can be changed to "mysql" or "pgsql").'
    ],
    code: `APP_NAME="WebDev3"
APP_ENV=local
APP_KEY=base64:7aV8m9...
APP_DEBUG=true
APP_TIMEZONE=UTC
APP_URL=http://localhost:8000

DB_CONNECTION=sqlite`,
    layman: {
      title: 'The Security Rule',
      text: 'Never commit `.env` to public GitHub repositories! Your `.gitignore` file already excludes it. Only commit `.env.example` as a template for other developers.'
    }
  },
  {
    id: 'w1-slide9',
    slideNum: 9,
    totalSlides: 13,
    type: 'single_topic',
    moduleTag: 'Module 3: Artisan CLI',
    title: 'Meet Artisan: Your Command-Line Assistant',
    topicTitle: 'The Built-In Superpower of Every Laravel Developer',
    whatItDoes: 'Scaffolds code, runs database migrations, clears caches, and inspects application state via the terminal.',
    whatIsGoingOn: 'Artisan is powered by Symfony Console and provides a wide range of code generators and maintenance utilities.',
    bullets: [
      'php artisan list: Displays all available Artisan commands categorized by component.',
      'php artisan help <command>: Shows detailed options and arguments for any command.',
      'php artisan make:*: Generates controllers, models, migrations, middleware, and tests.',
      'php artisan tinker: Starts an interactive PHP REPL session connected to your live database.'
    ],
    code: `// Common daily Artisan commands:
php artisan make:controller PostController
php artisan make:model Post -m
php artisan migrate
php artisan route:list`,
    keyInsight: {
      title: 'Speed & Consistency',
      text: 'Never create controller or model files manually. Artisan scaffolds the exact namespace, imports, and class structure in less than a second.'
    }
  },
  {
    id: 'w1-slide10',
    slideNum: 10,
    totalSlides: 13,
    type: 'single_topic',
    moduleTag: 'Module 4: First Application',
    title: 'Creating Your First Route & Response',
    topicTitle: 'Handling an Incoming Browser Request',
    whatItDoes: 'Maps a specific URL path to a PHP closure or controller action that returns HTML or text.',
    whatIsGoingOn: 'When a user visits `http://127.0.0.1:8000/hello`, Laravel checks `routes/web.php` for a matching pattern and dispatches the callback.',
    bullets: [
      'Open `routes/web.php` in your code editor.',
      'Define a route using the `Route::get()` static method.',
      'Return a plain string, an array (automatically formatted as JSON), or a Blade view.',
      'Test the route immediately in your web browser.'
    ],
    code: `// routes/web.php
use Illuminate\\Support\\Facades\\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/hello', function () {
    return '<h1>Welcome to Web Dev 3: Laravel!</h1>';
});

Route::get('/course-info', function () {
    return [
        'course' => 'Web Development 3',
        'framework' => 'Laravel 11',
        'status' => 'Active'
    ]; // Automatically sent as Content-Type: application/json!
});`,
    layman: {
      title: 'Automatic Content-Type',
      text: 'Notice that returning an array in Laravel automatically sends a JSON response with status 200. You do not need to call `json_encode()` or set headers manually.'
    }
  },
  {
    id: 'w1-slide11',
    slideNum: 11,
    totalSlides: 13,
    type: 'single_topic',
    moduleTag: 'Module 4: First Application',
    title: 'The HTTP Request-Response Flow',
    topicTitle: 'Understanding How a Request Moves Through Laravel',
    whatItDoes: 'Visualizes the lifecycle of an HTTP request from public/index.php to the browser.',
    whatIsGoingOn: 'The web server directs all traffic through `public/index.php`, boots the IoC container in `bootstrap/app.php`, sends the request through global middleware, matches the route, and streams the response.',
    bullets: [
      '1. Entry Point: public/index.php receives the incoming browser request.',
      '2. Bootstrapping: bootstrap/app.php loads environment, service providers, and bindings.',
      '3. Middleware Pipeline: Request passes through security filters (TrimStrings, CSRF, Session).',
      '4. Routing & Controller: Route matches URL and invokes the action.',
      '5. Response Sent: HTML view or JSON data streamed back to the client.'
    ],
    keyInsight: {
      title: 'Single Point of Entry',
      text: 'Directing all traffic through `public/index.php` means no raw PHP file is ever directly exposed to the internet, keeping your server secure.'
    }
  },
  {
    id: 'w1-slide12',
    slideNum: 12,
    totalSlides: 13,
    type: 'single_topic',
    moduleTag: 'Module 4: First Application',
    title: 'Weekly Summary & Competency Checklist',
    topicTitle: 'Reviewing Your Week 1 Milestones',
    whatItDoes: 'Validates that you have mastered the foundational objectives before moving to routing.',
    whatIsGoingOn: 'Solidifying these concepts prepares you to build resourceful routes and controllers in Week 2.',
    bullets: [
      '✓ Understand the basics of Laravel and its ecosystem.',
      '✓ Set up a local development environment with PHP 8.2+ and Composer.',
      '✓ Scaffold and serve a new Laravel application using Artisan.',
      '✓ Configure environment variables in `.env` and create basic web routes.'
    ]
  },
  {
    id: 'w1-slide13',
    slideNum: 13,
    totalSlides: 13,
    type: 'section_break',
    sectionNum: 'Week 1 Summary',
    title: 'Self-Assessment Time',
    description: 'You have completed the Week 1 lecture deck on Laravel foundations, environment setup, and project configuration.'
  }
];

// ============================================================================
// WEEK 2: LARAVEL ROUTING
// ============================================================================
export const webdev3Week2Slides: SlideData[] = [
  {
    id: 'w2-slide1',
    slideNum: 1,
    totalSlides: 12,
    type: 'cover',
    moduleTag: 'Week 2 • Web Dev 3',
    title: 'Laravel Routing',
    subtitle: 'Master defining routes, dynamic parameters, regex constraints, named routes, and route groups.'
  },
  {
    id: 'w2-slide2',
    slideNum: 2,
    totalSlides: 12,
    type: 'single_topic',
    moduleTag: 'Module 1: Routing Basics',
    title: 'The Role of Routing in Laravel',
    topicTitle: 'The Switchboard of Your Web Application',
    whatItDoes: 'Connects inbound HTTP URLs and request methods to specific PHP closures or controller classes.',
    whatIsGoingOn: 'Laravel inspects `routes/web.php` in top-to-bottom order. The first route matching both the HTTP verb and the URI pattern handles the request.',
    bullets: [
      'Defined in `routes/web.php` for browser sessions with CSRF protection and cookie state.',
      'Defined in `routes/api.php` for stateless API endpoints (tokens, rate limiting).',
      'Supported HTTP Verbs: GET, POST, PUT, PATCH, DELETE, OPTIONS.',
      'Expressive fluent syntax: Route::get(), Route::post(), Route::match(), Route::any().'
    ],
    code: `use Illuminate\\Support\\Facades\\Route;

Route::get('/about', function () {
    return view('about');
});

Route::post('/contact', function () {
    // Process submitted contact form
});`,
    layman: {
      title: 'Real-World Analogy',
      text: 'Routing is like an office receptionist. When a visitor arrives at the front desk asking for "Billing" or "Support", the receptionist guides them directly to the correct room without exposing internal hallways.'
    }
  },
  {
    id: 'w2-slide3',
    slideNum: 3,
    totalSlides: 12,
    type: 'single_topic',
    moduleTag: 'Module 1: Routing Basics',
    title: 'HTTP Verbs & Semantic Actions',
    topicTitle: 'Choosing the Right Verb for Every Operation',
    whatItDoes: 'Standardizes HTTP interactions according to REST conventions.',
    whatIsGoingOn: 'Browsers natively send GET (link clicks) and POST (form submits). Laravel uses hidden `_method` inputs to simulate PUT, PATCH, and DELETE.',
    bullets: [
      'GET: Retrieve a webpage or resource without modifying server state.',
      'POST: Submit new data to create a new resource.',
      'PUT / PATCH: Update an existing resource (PUT replaces entirely, PATCH updates partial fields).',
      'DELETE: Remove a resource from storage.',
      'Route::match([\'get\', \'post\'], \'/\', ...): Responds to multiple specific verbs.',
      'Route::any(\'/webhook\', ...): Responds to any valid HTTP verb.'
    ],
    code: `Route::get('/articles', [ArticleController::class, 'index']);
Route::post('/articles', [ArticleController::class, 'store']);
Route::put('/articles/{id}', [ArticleController::class, 'update']);
Route::delete('/articles/{id}', [ArticleController::class, 'destroy']);`,
    keyInsight: {
      title: 'REST Cleanliness',
      text: 'Notice that `/articles/{id}` can be used for both updating (PUT) and deleting (DELETE). The HTTP verb specifies the intent, keeping URLs clean.'
    }
  },
  {
    id: 'w2-slide4',
    slideNum: 4,
    totalSlides: 12,
    type: 'single_topic',
    moduleTag: 'Module 2: Dynamic Parameters',
    title: 'Route Parameters & Dynamic Segments',
    topicTitle: 'Extracting Variables Directly from the URL',
    whatItDoes: 'Captures dynamic segments of the URI (such as user IDs or slugs) and injects them directly into your route callback or controller.',
    whatIsGoingOn: 'Laravel wraps route parameters in curly braces `{param}` and passes them as arguments in the order they appear in the URI.',
    bullets: [
      'Required Parameters: `{id}` must be present in the URL or a 404 is thrown.',
      'Multiple Parameters: Can accept multiple variables in one route: `/posts/{post}/comments/{comment}`.',
      'Optional Parameters: `{name?}` followed by a default argument value in the closure.',
      'Parameter naming must consist of alphabetic characters and cannot contain dashes.'
    ],
    code: `// Required parameter
Route::get('/users/{id}', function (string $id) {
    return "Displaying profile for User #{$id}";
});

// Optional parameter with default value
Route::get('/greet/{name?}', function (?string $name = 'Guest') {
    return "Hello, {$name}!";
});`,
    layman: {
      title: 'Clean URLs',
      text: 'Instead of messy legacy query strings like `/user.php?id=42`, Laravel provides human-readable, SEO-friendly paths like `/users/42`.'
    }
  },
  {
    id: 'w2-slide5',
    slideNum: 5,
    totalSlides: 12,
    type: 'single_topic',
    moduleTag: 'Module 2: Dynamic Parameters',
    title: 'Regular Expression Parameter Constraints',
    topicTitle: 'Defending Routes from Malformed Input',
    whatItDoes: 'Restricts parameter values to specific regex patterns before the route executes.',
    whatIsGoingOn: 'If the incoming URL parameter does not match the regex condition, Laravel skips the route and returns a 404 Not Found response.',
    bullets: [
      'whereNumber(\'id\'): Ensures parameter contains digits only (^[0-9]+$).',
      'whereAlpha(\'name\'): Ensures parameter contains alphabetic letters only (^[a-zA-Z]+$).',
      'whereAlphaNumeric(\'code\'): Alphanumeric characters only.',
      'whereIn(\'category\', [\'tech\', \'sports\']): Restricts to a defined array of strings.',
      'Custom regex: `->where(\'uuid\', \'[0-9a-f]{8}-[0-9a-f]{4}-...\')`.'
    ],
    code: `Route::get('/orders/{id}', function (string $id) {
    return "Order #{$id}";
})->whereNumber('id');

Route::get('/category/{slug}', function (string $slug) {
    return "Category: {$slug}";
})->whereIn('slug', ['laravel', 'php', 'javascript']);`,
    keyInsight: {
      title: 'Bulletproof Validation',
      text: 'Parameter constraints stop invalid requests at the routing boundary before your controller or database is ever touched.'
    }
  },
  {
    id: 'w2-slide6',
    slideNum: 6,
    totalSlides: 12,
    type: 'single_topic',
    moduleTag: 'Module 3: Named Routes',
    title: 'Named Routes & The route() Helper',
    topicTitle: 'Decoupling URLs from Code to Prevent Broken Links',
    whatItDoes: 'Assigns a unique identifier to a route so you can generate URLs and redirects without hardcoding paths.',
    whatIsGoingOn: 'When you call `route(\'profile\', [\'id\' => 1])`, Laravel inspects the route registry and returns `/users/1/profile`.',
    bullets: [
      'Assign name using `->name(\'route.name\')`.',
      'Standard convention uses dot notation: `users.index`, `users.show`, `posts.create`.',
      'Generate link in Blade: `<a href="{{ route(\'users.show\', 42) }}">Profile</a>`.',
      'Redirect in Controller: `return redirect()->route(\'dashboard\');`.',
      'Allows changing URL paths in `routes/web.php` anytime without breaking templates or controllers.'
    ],
    code: `// Route declaration
Route::get('/user/account/settings', [UserController::class, 'settings'])
    ->name('user.settings');

// In Blade View:
<a href="{{ route('user.settings') }}">Account Settings</a>

// In Controller:
return redirect()->route('user.settings');`,
    layman: {
      title: 'Refactor-Proof Code',
      text: 'If your marketing team decides to change `/user/account/settings` to `/my-account`, you only change the string once in `routes/web.php`. All links and redirects across your entire application update automatically!'
    }
  },
  {
    id: 'w2-slide7',
    slideNum: 7,
    totalSlides: 12,
    type: 'single_topic',
    moduleTag: 'Module 3: Route Groups',
    title: 'Route Groups & URL Prefixes',
    topicTitle: 'DRY Organization for Large Route Files',
    whatItDoes: 'Shares attributes such as middleware, URL prefixes, and name prefixes across multiple routes without repeating code.',
    whatIsGoingOn: 'Laravel bundles the nested routes within a closure and automatically merges prefix strings and middleware arrays.',
    bullets: [
      'Prefix Group: `Route::prefix(\'admin\')->group(...)` prepends `/admin` to all child URLs.',
      'Name Group: `Route::name(\'admin.\')->group(...)` prepends `admin.` to all route names.',
      'Middleware Group: `Route::middleware([\'auth\'])->group(...)` protects all inner routes.',
      'Can chain multiple group configurations together fluently.'
    ],
    code: `Route::prefix('admin')->name('admin.')->middleware(['auth'])->group(function () {
    Route::get('/dashboard', [AdminController::class, 'dashboard'])
        ->name('dashboard'); // URL: /admin/dashboard, Name: admin.dashboard

    Route::get('/users', [AdminController::class, 'users'])
        ->name('users'); // URL: /admin/users, Name: admin.users
});`,
    keyInsight: {
      title: 'Clean Architecture',
      text: 'Group routes logically by user role (admin, student, public) to keep routing files organized and maintainable.'
    }
  },
  {
    id: 'w2-slide8',
    slideNum: 8,
    totalSlides: 12,
    type: 'single_topic',
    moduleTag: 'Module 4: Advanced Features',
    title: 'Subdomain Routing & Fallback Routes',
    topicTitle: 'Handling Multi-Tenant Domains & Custom 404s',
    whatItDoes: 'Routes requests based on the host subdomain and captures unmatched requests cleanly.',
    whatIsGoingOn: 'Laravel matches the HTTP `Host` header against the domain pattern before evaluating the path.',
    bullets: [
      'Subdomain: `Route::domain(\'{account}.myapp.com\')->group(...)` extracts tenant identifiers.',
      'Fallback Route: `Route::fallback(...)` executes only when no other route matches.',
      'Fallback routes must always be placed at the very end of `routes/web.php`.',
      'Great for rendering custom branded 404 error pages or single-page app (SPA) HTML.'
    ],
    code: `// Subdomain routing
Route::domain('{account}.myapp.com')->group(function () {
    Route::get('/dashboard', function (string $account) {
        return "Welcome to {$account} dashboard!";
    });
});

// Fallback route (Catch-all 404)
Route::fallback(function () {
    return response()->view('errors.404', [], 404);
});`,
    layman: {
      title: 'The Safety Net',
      text: 'The fallback route is your safety net. If a user typos a URL, it gracefully renders your custom interactive 404 view instead of an ugly default error.'
    }
  },
  {
    id: 'w2-slide9',
    slideNum: 9,
    totalSlides: 12,
    type: 'single_topic',
    moduleTag: 'Module 4: Advanced Features',
    title: 'Route Caching for Production Speed',
    topicTitle: 'Compiling Routes into a Lightning-Fast PHP Array',
    whatItDoes: 'Dramatically speeds up route registration by compiling all routes into a single cached file.',
    whatIsGoingOn: 'In local development, Laravel parses `routes/web.php` on every page refresh. In production, `route:cache` creates a pre-compiled array, reducing route lookup overhead to near zero.',
    bullets: [
      'Compile cache: `php artisan route:cache`.',
      'Clear cache: `php artisan route:clear`.',
      'Inspect registered routes: `php artisan route:list`.',
      'Crucial rule: Only run `route:cache` in production deployments or staging tests.'
    ],
    code: `// Inspect all routes in your terminal:
php artisan route:list

// Filter by name or path:
php artisan route:list --path=admin`,
    keyInsight: {
      title: 'Production Rule',
      text: 'Whenever you add new routes in production, remember to re-run `php artisan route:cache` so Laravel discovers them.'
    }
  },
  {
    id: 'w2-slide10',
    slideNum: 10,
    totalSlides: 12,
    type: 'single_topic',
    moduleTag: 'Module 4: Advanced Features',
    title: 'Weekly Summary & Competency Checklist',
    topicTitle: 'Reviewing Your Week 2 Milestones',
    whatItDoes: 'Reviews the core routing principles covered this week.',
    whatIsGoingOn: 'With routing mastered, you are prepared to explore Middleware in Week 3 to inspect and filter HTTP requests.',
    bullets: [
      '✓ Mastered basic route definitions and HTTP verbs (GET, POST, PUT, DELETE).',
      '✓ Implemented dynamic parameters and regex validation constraints.',
      '✓ Applied named routes and the `route()` helper for refactor-safe URLs.',
      '✓ Structured route groups with prefixes, middleware, and fallback handlers.'
    ]
  },
  {
    id: 'w2-slide11',
    slideNum: 11,
    totalSlides: 12,
    type: 'section_break',
    sectionNum: 'Week 2 Summary',
    title: 'Test Your Routing Skills',
    description: 'You have completed the Week 2 lecture deck and hands-on code examples. Return to the lesson library or review the slide outline.'
  }
];

// ============================================================================
// WEEK 3: MIDDLEWARE IN LARAVEL
// ============================================================================
export const webdev3Week3Slides: SlideData[] = [
  {
    id: 'w3-slide1',
    slideNum: 1,
    totalSlides: 11,
    type: 'cover',
    moduleTag: 'Week 3 • Web Dev 3',
    title: 'Middleware in Laravel',
    subtitle: 'Inspect, filter, and protect HTTP requests using Laravel onion architecture and custom middleware.'
  },
  {
    id: 'w3-slide2',
    slideNum: 2,
    totalSlides: 11,
    type: 'single_topic',
    moduleTag: 'Module 1: Middleware Concepts',
    title: 'The Onion Architecture of HTTP',
    topicTitle: 'What Middleware Does and Why It Exists',
    whatItDoes: 'Acts as a series of protective layers surrounding your application core, inspecting every HTTP request before it reaches a controller and modifying responses on the way out.',
    whatIsGoingOn: 'Laravel pipelines the `$request` object through a chain of callable closures (`Closure $next`). Each layer decides whether to pass the request forward or halt it.',
    bullets: [
      'Authentication: Checking if a user is logged in before letting them access protected pages.',
      'Authorization & Roles: Verifying whether an account has "Admin" or "Staff" status.',
      'Security: Enforcing CSRF verification tokens, strict headers, and CORS rules.',
      'Transformation: Trimming whitespace from input strings and formatting headers.'
    ],
    layman: {
      title: 'Airport Security Analogy',
      text: 'Middleware is like airport security checkpoints. Before boarding a plane (the controller action), every passenger must pass through ticket verification, baggage scanning, and passport control. If any check fails, you are turned away immediately.'
    },
    keyInsight: {
      title: 'Decoupled Security',
      text: 'Controllers never have to worry about checking authentication headers or validating session cookies—middleware guarantees the request is authorized before the controller runs.'
    }
  },
  {
    id: 'w3-slide3',
    slideNum: 3,
    totalSlides: 11,
    type: 'single_topic',
    moduleTag: 'Module 1: Middleware Concepts',
    title: 'Before Middleware vs After Middleware',
    topicTitle: 'Controlling When Code Executes During the Request Cycle',
    whatItDoes: 'Allows operations to execute before the request reaches the controller or after the controller generates its response.',
    whatIsGoingOn: 'Calling `$next($request)` delegates execution to the inner layers. Code placed before `$next()` runs on the request; code placed after `$next()` runs on the returned `$response`.',
    bullets: [
      'Before Middleware: Performs security checks, redirects unauthorized users, or modifies input parameters.',
      'After Middleware: Adds custom response headers, logs performance metrics, or compresses HTML.',
      'Terminating Middleware: Executes tasks *after* the HTTP response has already been sent to the browser.'
    ],
    code: `// Before Middleware Pattern:
public function handle(Request $request, Closure $next): Response
{
    // Perform check BEFORE reaching controller
    if ($request->input('age') < 18) {
        return redirect('home');
    }
    return $next($request);
}

// After Middleware Pattern:
public function handle(Request $request, Closure $next): Response
{
    $response = $next($request);
    // Perform action AFTER controller finished
    $response->headers->set('X-App-Time', microtime(true));
    return $response;
}`,
    keyInsight: {
      title: 'Halt or Proceed',
      text: 'If a middleware returns a redirect or JSON response instead of `$next($request)`, the entire rest of the pipeline is aborted.'
    }
  },
  {
    id: 'w3-slide4',
    slideNum: 4,
    totalSlides: 11,
    type: 'single_topic',
    moduleTag: 'Module 2: Custom Middleware',
    title: 'Generating Custom Middleware',
    topicTitle: 'Using Artisan to Scaffold Middleware Classes',
    whatItDoes: 'Creates a clean middleware class under `app/Http/Middleware/`.',
    whatIsGoingOn: 'Artisan generates the class with the standard `handle(Request $request, Closure $next): Response` signature ready for custom logic.',
    bullets: [
      'Generate command: `php artisan make:middleware EnsureUserIsAdmin`.',
      'File created at: `app/Http/Middleware/EnsureUserIsAdmin.php`.',
      'Type-hinted with Laravel `Request` and Symfony `Response`.',
      'Can inject services or repositories through the constructor.'
    ],
    code: `namespace App\\Http\\Middleware;

use Closure;
use Illuminate\\Http\\Request;
use Symfony\\Component\\HttpFoundation\\Response;

class EnsureUserIsAdmin
{
    public function handle(Request $request, Closure $next): Response
    {
        if (! $request->user() || ! $request->user()->is_admin) {
            abort(403, 'Unauthorized administrative access.');
        }

        return $next($request);
    }
}`,
    layman: {
      title: 'Fail Fast',
      text: '`abort(403)` stops execution instantly and renders a 403 Forbidden page, preventing non-admin users from touching confidential logic.'
    }
  },
  {
    id: 'w3-slide5',
    slideNum: 5,
    totalSlides: 11,
    type: 'single_topic',
    moduleTag: 'Module 2: Registration',
    title: 'Registering Middleware in bootstrap/app.php',
    topicTitle: 'The Central Nervous System of Modern Laravel',
    whatItDoes: 'Binds your custom middleware into the global pipeline or assigns it an alias for routes.',
    whatIsGoingOn: 'Modern Laravel configures middleware fluently inside `bootstrap/app.php` using the `$middleware` configuration callback.',
    bullets: [
      'Route Middleware Alias: Assigns a memorable string keyword (e.g. `admin`, `subscribed`).',
      'Append to Web Group: Automatically runs on all browser routes in `routes/web.php`.',
      'Append to Global: Runs on every single incoming HTTP request (both web and api).'
    ],
    code: `// bootstrap/app.php
use App\\Http\\Middleware\\EnsureUserIsAdmin;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
    )
    ->withMiddleware(function (Middleware $middleware) {
        // Register route alias:
        $middleware->alias([
            'admin' => EnsureUserIsAdmin::class,
        ]);
    })
    ->create();`,
    keyInsight: {
      title: 'Modern Architecture',
      text: 'Prior to Laravel 11, middleware was registered in `app/Http/Kernel.php`. Modern Laravel eliminates the Kernel file entirely in favor of fluent `bootstrap/app.php` configuration.'
    }
  },
  {
    id: 'w3-slide6',
    slideNum: 6,
    totalSlides: 11,
    type: 'single_topic',
    moduleTag: 'Module 3: Application & Filtering',
    title: 'Applying Middleware to Routes',
    topicTitle: 'Guarding Endpoints and Passing Middleware Arguments',
    whatItDoes: 'Protects individual routes or entire route groups with assigned middleware aliases.',
    whatIsGoingOn: 'Laravel checks the middleware aliases attached to the route and executes each handler sequentially.',
    bullets: [
      'Single Route: `Route::get(\'/dashboard\', ...)->middleware(\'auth\')`.',
      'Multiple Middleware: Pass an array `->middleware([\'auth\', \'admin\'])`.',
      'Route Groups: Wrap an entire section in `Route::middleware([\'auth\'])->group(...)`.',
      'Middleware Parameters: Pass arguments separated by a colon: `->middleware(\'role:editor\')`.'
    ],
    code: `// Protecting a single route
Route::get('/admin/settings', [AdminController::class, 'settings'])
    ->middleware(['auth', 'admin']);

// Protecting an entire group
Route::middleware(['auth'])->group(function () {
    Route::get('/profile', [UserController::class, 'profile']);
    Route::get('/orders', [OrderController::class, 'index']);
});`,
    layman: {
      title: 'Clean Code',
      text: 'Grouping protected routes ensures you never forget to add authentication to a new page.'
    }
  },
  {
    id: 'w3-slide7',
    slideNum: 7,
    totalSlides: 11,
    type: 'single_topic',
    moduleTag: 'Module 3: Rate Limiting',
    title: 'Request Rate Limiting & Throttling',
    topicTitle: 'Protecting Your Server from Abuse and Brute-Force Attacks',
    whatItDoes: 'Limits the number of requests a client IP or authenticated user can make in a given timeframe.',
    whatIsGoingOn: 'Laravel stores request counters in the cache driver (Redis, database, or array). If the limit is exceeded, HTTP 429 Too Many Requests is returned.',
    bullets: [
      'Built-in `throttle` middleware: `throttle:60,1` allows 60 requests per 1 minute.',
      'Defends login endpoints against automated dictionary attacks.',
      'Configurable per-route, per-user, or dynamically based on subscription tier.'
    ],
    code: `// Limit password reset attempts to 5 per minute
Route::post('/forgot-password', [PasswordResetController::class, 'send'])
    ->middleware('throttle:5,1');`,
    keyInsight: {
      title: 'Production Critical',
      text: 'Always apply rate limiting to authentication routes (login, register, forgot-password) and public API endpoints.'
    }
  },
  {
    id: 'w3-slide8',
    slideNum: 8,
    totalSlides: 11,
    type: 'single_topic',
    moduleTag: 'Module 4: Summary',
    title: 'Weekly Summary & Competency Checklist',
    topicTitle: 'Reviewing Your Week 3 Milestones',
    whatItDoes: 'Reviews the core concepts of the Laravel middleware pipeline.',
    whatIsGoingOn: 'Next week, we explore Controllers and the Blade templating engine to build full-stack interfaces.',
    bullets: [
      '✓ Understood the onion architecture and HTTP request pipeline.',
      '✓ Created custom middleware using `php artisan make:middleware`.',
      '✓ Registered middleware aliases in `bootstrap/app.php`.',
      '✓ Applied middleware to individual routes and grouped paths for authentication and filtering.'
    ]
  },
  {
    id: 'w3-slide9',
    slideNum: 9,
    totalSlides: 11,
    type: 'section_break',
    sectionNum: 'Week 3 Summary',
    title: 'Test Your Middleware Knowledge',
    description: 'You have completed the Week 3 lecture deck and hands-on code examples. Return to the lesson library or review the slide outline.'
  }
];

// ============================================================================
// WEEK 4: CONTROLLERS AND VIEWS
// ============================================================================
export const webdev3Week4Slides: SlideData[] = [
  {
    id: 'w4-slide1',
    slideNum: 1,
    totalSlides: 12,
    type: 'cover',
    moduleTag: 'Week 4 • Web Dev 3',
    title: 'Controllers and Views',
    subtitle: 'Decouple presentation from request handling using resourceful controllers and the powerful Blade templating engine.'
  },
  {
    id: 'w4-slide2',
    slideNum: 2,
    totalSlides: 12,
    type: 'single_topic',
    moduleTag: 'Module 1: Controllers',
    title: 'Separation of Concerns: Why Controllers?',
    topicTitle: 'Moving Business Logic Out of Route Closures',
    whatItDoes: 'Encapsulates HTTP request handling into structured classes instead of cluttering `routes/web.php` with closures.',
    whatIsGoingOn: 'Controllers live in `app/Http/Controllers`. They receive HTTP requests, interact with models, and return Blade views or JSON.',
    bullets: [
      'Keep routes file lean and focused solely on URI declarations.',
      'Enables dependency injection of services and models via constructor or method parameters.',
      'Supports automated unit testing and route caching.',
      'Generate with Artisan: `php artisan make:controller PostController`.'
    ],
    code: `namespace App\\Http\\Controllers;

use App\\Models\\Post;
use Illuminate\\View\\View;

class PostController extends Controller
{
    public function index(): View
    {
        $posts = Post::latest()->get();
        return view('posts.index', ['posts' => $posts]);
    }
}`,
    layman: {
      title: 'Restaurant Kitchen Analogy',
      text: 'Routes are the waitstaff taking orders from customers. Controllers are the chefs in the kitchen preparing the meal. Views are the plated dish presented back to the table.'
    }
  },
  {
    id: 'w4-slide3',
    slideNum: 3,
    totalSlides: 12,
    type: 'single_topic',
    moduleTag: 'Module 1: Resource Controllers',
    title: 'Resourceful Controllers & Standard REST Actions',
    topicTitle: 'Scaffolding the Complete CRUD Lifecycle in One Command',
    whatItDoes: 'Creates a controller with all 7 standard REST methods (index, create, store, show, edit, update, destroy).',
    whatIsGoingOn: 'Pairing `php artisan make:controller PostController --resource` with `Route::resource(\'posts\', PostController::class)` maps all 7 routes automatically.',
    bullets: [
      'GET /posts -> index() (List all)',
      'GET /posts/create -> create() (Show HTML creation form)',
      'POST /posts -> store() (Save new record)',
      'GET /posts/{id} -> show() (View single record)',
      'GET /posts/{id}/edit -> edit() (Show HTML edit form)',
      'PUT /posts/{id} -> update() (Update record)',
      'DELETE /posts/{id} -> destroy() (Delete record)'
    ],
    code: `// routes/web.php
use App\\Http\\Controllers\\PostController;

Route::resource('posts', PostController::class);
// That's it! 7 routes registered with one clean line.`,
    keyInsight: {
      title: 'Conventions Over Configuration',
      text: 'Following Laravel standard resource naming means any developer in the world can immediately navigate your project.'
    }
  },
  {
    id: 'w4-slide4',
    slideNum: 4,
    totalSlides: 12,
    type: 'single_topic',
    moduleTag: 'Module 2: Blade Basics',
    title: 'The Blade Templating Engine',
    topicTitle: 'Fast, Expressive, and Safe HTML Templates',
    whatItDoes: 'Compiles clean template syntax into optimized raw PHP and caches it for blazingly fast page loads.',
    whatIsGoingOn: 'Files stored in `resources/views/*.blade.php` are evaluated by the Blade compiler. Unlike raw PHP tags `<?php ?>`, Blade uses clean `@` directives.',
    bullets: [
      'Escaped Output: `{{ $variable }}` automatically runs `htmlspecialchars()` to prevent XSS attacks.',
      'Raw Output: `{!! $html !!}` renders unescaped HTML when deliberately needed.',
      'Zero Overhead: Blade files compile down to plain PHP files and are cached until modified.',
      'Template Inheritance: Allows defining a master layout once and extending it across pages.'
    ],
    code: `<!-- resources/views/posts/index.blade.php -->
<h1>Welcome, {{ $user->name }}</h1>

<!-- Safe from XSS injection! If $user->name is <script>alert(1)</script>, 
     Blade displays it safely as text, not runnable code. -->`,
    layman: {
      title: 'Automatic Security Shield',
      text: 'In raw PHP, forgetting `htmlspecialchars()` leaves you vulnerable to Cross-Site Scripting (XSS). Blade shields you automatically on every single `{{ }}` echo.'
    }
  },
  {
    id: 'w4-slide5',
    slideNum: 5,
    totalSlides: 12,
    type: 'single_topic',
    moduleTag: 'Module 2: Blade Directives',
    title: 'Blade Control Structures & Loops',
    topicTitle: 'Conditionals, Loops, and Authentication State in Views',
    whatItDoes: 'Replaces verbose PHP if/else and foreach syntax with elegant Blade directives.',
    whatIsGoingOn: 'Blade compiles `@if`, `@foreach`, `@empty`, and `@auth` into native PHP control blocks.',
    bullets: [
      'Conditionals: `@if($post->is_published) ... @else ... @endif`.',
      'Foreach Loops: `@foreach($posts as $post) ... @endforeach`.',
      'The @forelse Directive: Combines a foreach loop with an `@empty` fallback block if the collection has zero items.',
      'Auth State: `@auth <p>Logged in</p> @else <p>Guest</p> @endauth`.'
    ],
    code: `@forelse($posts as $post)
    <article class="p-4 border-b">
        <h2>{{ $post->title }}</h2>
        <p>{{ $post->excerpt }}</p>
    </article>
@empty
    <p class="text-slate-500">No blog posts found. Check back later!</p>
@endforelse`,
    keyInsight: {
      title: 'The @forelse Gem',
      text: '`@forelse` eliminates the clunky `if (count($posts) > 0)` boilerplate required in vanilla PHP.'
    }
  },
  {
    id: 'w4-slide6',
    slideNum: 6,
    totalSlides: 12,
    type: 'single_topic',
    moduleTag: 'Module 3: Blade Components',
    title: 'Modern Blade Components & Layouts',
    topicTitle: 'Building Reusable UI Building Blocks',
    whatItDoes: 'Enables custom HTML-like tags (e.g. `<x-layout>`, `<x-button>`) that encapsulate markup and styling.',
    whatIsGoingOn: 'Files located in `resources/views/components/` can be invoked as `<x-filename>`. Default content is injected into the `$slot` variable.',
    bullets: [
      'Master Layout: Define `resources/views/components/layout.blade.php` with navigation and footer.',
      'Page Views: Wrap page content inside `<x-layout> ... </x-layout>`.',
      'Named Slots: Pass headers or footers with `<x-slot:header>Title</x-slot:header>`.',
      'Props & Attributes: Pass variables `<x-button :primary="true">Click</x-button>`.'
    ],
    code: `<!-- resources/views/components/layout.blade.php -->
<!DOCTYPE html>
<html>
<head><title>{{ $title ?? 'WebDev3' }}</title></head>
<body class="bg-slate-50">
    <nav>...</nav>
    <main>{{ $slot }}</main>
</body>
</html>

<!-- In any page view: -->
<x-layout>
    <x-slot:title>All Posts</x-slot:title>
    <h1>Welcome to our Blog</h1>
</x-layout>`,
    layman: {
      title: 'Lego-Like Web Design',
      text: 'Blade Components let you build websites like assembling Lego blocks. Build `<x-card>`, `<x-navbar>`, and `<x-modal>` once, and reuse them across your whole application.'
    }
  },
  {
    id: 'w4-slide7',
    slideNum: 7,
    totalSlides: 12,
    type: 'single_topic',
    moduleTag: 'Module 4: Summary',
    title: 'Weekly Summary & Competency Checklist',
    topicTitle: 'Reviewing Your Week 4 Milestones',
    whatItDoes: 'Validates comprehension of Controllers and Blade templating.',
    whatIsGoingOn: 'Next, in Week 6, we dive into database design and the Eloquent ORM to persist and retrieve data.',
    bullets: [
      '✓ Understood the role of controllers in separating HTTP logic from routes.',
      '✓ Created resourceful controllers using `php artisan make:controller --resource`.',
      '✓ Implemented views using the Blade templating engine and security directives.',
      '✓ Structured reusable components and master layouts using `<x-layout>` and slots.'
    ]
  },
  {
    id: 'w4-slide8',
    slideNum: 8,
    totalSlides: 12,
    type: 'section_break',
    sectionNum: 'Week 4 Summary',
    title: 'Test Your Controllers & Blade Knowledge',
    description: 'You have completed the Week 4 lecture deck and hands-on code examples. Return to the lesson library or review the slide outline.'
  }
];

// ============================================================================
// WEEK 6: ELOQUENT ORM BASICS
// ============================================================================
export const webdev3Week6Slides: SlideData[] = [
  {
    id: 'w6-slide1',
    slideNum: 1,
    totalSlides: 12,
    type: 'cover',
    moduleTag: 'Week 6 • Web Dev 3',
    title: 'Eloquent ORM Basics',
    subtitle: 'Harness Laravel ActiveRecord ORM: database migrations, model conventions, CRUD operations, and core relationships.'
  },
  {
    id: 'w6-slide2',
    slideNum: 2,
    totalSlides: 12,
    type: 'single_topic',
    moduleTag: 'Module 1: ORM & Migrations',
    title: 'The ActiveRecord Pattern & Eloquent',
    topicTitle: 'Bridging Object-Oriented PHP and Relational Databases',
    whatItDoes: 'Maps database tables to PHP model classes. Each model instance corresponds to a single row in your database table.',
    whatIsGoingOn: 'Instead of writing raw SQL strings (`SELECT * FROM posts WHERE id = 1`), Eloquent allows expressive PHP methods (`Post::find(1)`).',
    bullets: [
      'ActiveRecord: Model objects encapsulate both data fields and database persistence logic.',
      'Automatic Table Binding: Model `Post` automatically binds to database table `posts`.',
      'Primary Key Convention: Defaults to `id` (bigint auto-increment).',
      'Timestamps Convention: Automatically populates `created_at` and `updated_at`.'
    ],
    layman: {
      title: 'The Universal Translator',
      text: 'Eloquent acts as an interpreter between PHP and database engines (SQLite, MySQL, PostgreSQL). You write standard PHP objects, and Eloquent writes the exact SQL dialect for you.'
    }
  },
  {
    id: 'w6-slide3',
    slideNum: 3,
    totalSlides: 12,
    type: 'single_topic',
    moduleTag: 'Module 1: Migrations',
    title: 'Database Migrations: Version Control for Tables',
    topicTitle: 'Creating and Modifying Database Tables in Code',
    whatItDoes: 'Defines your database schema in PHP code so your team can reconstruct identical database structures anywhere.',
    whatIsGoingOn: 'Artisan executes migration files in timestamp order. The `up()` method creates tables, while `down()` reverses the migration.',
    bullets: [
      'Create migration: `php artisan make:migration create_posts_table`.',
      'Shortcut: `php artisan make:model Post -m` creates model and migration together!',
      'Run migrations: `php artisan migrate`.',
      'Rollback migrations: `php artisan migrate:rollback` or `php artisan migrate:fresh`.'
    ],
    code: `public function up(): void
{
    Schema::create('posts', function (Blueprint $table) {
        $table->id();
        $table->foreignId('user_id')->constrained()->cascadeOnDelete();
        $table->string('title');
        $table->text('body');
        $table->boolean('is_published')->default(false);
        $table->timestamps();
    });
}`,
    keyInsight: {
      title: 'Never Share SQL Dumps',
      text: 'With migrations, developers never have to manually export `.sql` files or run phpMyAdmin. Simply run `php artisan migrate` and the exact database is built instantly.'
    }
  },
  {
    id: 'w6-slide4',
    slideNum: 4,
    totalSlides: 12,
    type: 'single_topic',
    moduleTag: 'Module 2: CRUD Operations',
    title: 'Eloquent CRUD: Create & Mass Assignment',
    topicTitle: 'Persisting New Records Safely into the Database',
    whatItDoes: 'Inserts records using either object property assignment or the mass assignment `create()` method.',
    whatIsGoingOn: 'To protect against mass assignment vulnerabilities, Eloquent requires defining `$fillable` (whitelisted attributes) on the model.',
    bullets: [
      'Method 1: `$post = new Post; $post->title = "..."; $post->save();`',
      'Method 2: `Post::create([\'title\' => \'...\', \'body\' => \'...\']);`',
      'Mass Assignment Defense: Define `protected $fillable = [\'title\', \'body\'];` in your model class.'
    ],
    code: `namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;

class Post extends Model
{
    protected $fillable = ['title', 'body', 'is_published'];
}

// In Controller:
Post::create([
    'title' => 'My First Laravel Post',
    'body' => 'Eloquent makes database queries effortless.',
    'is_published' => true,
]);`,
    layman: {
      title: 'The Bouncer ($fillable)',
      text: '`$fillable` is the bouncer of your model. If a malicious user tries to submit `is_admin=1` in a form, Eloquent ignores it because it is not on the VIP fillable list.'
    }
  },
  {
    id: 'w6-slide5',
    slideNum: 5,
    totalSlides: 12,
    type: 'single_topic',
    moduleTag: 'Module 2: CRUD Operations',
    title: 'Eloquent CRUD: Read, Update, and Delete',
    topicTitle: 'Querying and Modifying Existing Database Records',
    whatItDoes: 'Fetches, updates, and deletes records using expressive query methods.',
    whatIsGoingOn: 'Eloquent builds queries fluently using PDO prepared statements to guarantee full protection against SQL injection.',
    bullets: [
      'Read All: `Post::all();` or `Post::latest()->get();`',
      'Read Single: `Post::find($id);` or `Post::findOrFail($id);` (automatically throws 404 if missing!)',
      'Read Filtered: `Post::where(\'is_published\', true)->get();`',
      'Update: `$post->update([\'title\' => \'Updated Title\']);`',
      'Delete: `$post->delete();` or `Post::destroy($id);`'
    ],
    code: `// Retrieve and update
$post = Post::findOrFail($id);
$post->title = 'Updated Title';
$post->save();

// Or mass update:
$post->update(['title' => 'Updated Title']);

// Delete:
$post->delete();`,
    keyInsight: {
      title: 'The Magic of findOrFail',
      text: '`findOrFail()` saves lines of boilerplate. If the ID does not exist, Laravel aborts with a clean 404 Not Found response automatically.'
    }
  },
  {
    id: 'w6-slide6',
    slideNum: 6,
    totalSlides: 12,
    type: 'single_topic',
    moduleTag: 'Module 3: Relationships',
    title: 'Eloquent Relationships: One-to-Many',
    topicTitle: 'Connecting Related Database Tables Expressively',
    whatItDoes: 'Defines associations between models (e.g. A User has many Posts; A Post belongs to a User).',
    whatIsGoingOn: 'Eloquent inspects foreign key conventions (e.g. `user_id` on the `posts` table) and returns related model instances as dynamic properties.',
    bullets: [
      'One-to-Many: `hasMany()` on parent model; `belongsTo()` on child model.',
      'One-to-One: `hasOne()` on parent model; `belongsTo()` on child model.',
      'Dynamic Properties: Access related records directly: `$user->posts` returns a collection of Post models.',
      'Convenience methods: `$user->posts()->create([...])` automatically populates the `user_id` foreign key.'
    ],
    code: `// User Model
public function posts(): HasMany
{
    return $this->hasMany(Post::class);
}

// Post Model
public function user(): BelongsTo
{
    return $this->belongsTo(User::class);
}

// Usage in Blade or Controller:
$authorName = $post->user->name;
$userPostsCount = $user->posts->count();`,
    layman: {
      title: 'No More Complex JOINs',
      text: 'Instead of writing complex SQL `INNER JOIN` queries, you simply call `$post->user->name`. Eloquent handles the foreign key connection under the hood.'
    }
  },
  {
    id: 'w6-slide7',
    slideNum: 7,
    totalSlides: 12,
    type: 'single_topic',
    moduleTag: 'Module 4: Summary',
    title: 'Weekly Summary & Competency Checklist',
    topicTitle: 'Reviewing Your Week 6 Milestones',
    whatItDoes: 'Validates that you understand the core mechanics of Eloquent ORM.',
    whatIsGoingOn: 'In Week 7, we expand into Advanced Eloquent: Query Scopes, Observers, and resolving the N+1 performance bottleneck.',
    bullets: [
      '✓ Understood the ActiveRecord pattern and table conventions.',
      '✓ Created database tables using migrations and the Schema Builder.',
      '✓ Performed complete CRUD operations (Create, Read, Update, Delete) with Eloquent.',
      '✓ Defined and navigated One-to-Many relationships between models.'
    ]
  },
  {
    id: 'w6-slide8',
    slideNum: 8,
    totalSlides: 12,
    type: 'section_break',
    sectionNum: 'Week 6 Summary',
    title: 'Test Your Eloquent ORM Basics',
    description: 'You have completed the Week 6 lecture deck and hands-on code examples. Return to the lesson library or review the slide outline.'
  }
];

// ============================================================================
// WEEK 7: ADVANCED ELOQUENT ORM
// ============================================================================
export const webdev3Week7Slides: SlideData[] = [
  {
    id: 'w7-slide1',
    slideNum: 1,
    totalSlides: 11,
    type: 'cover',
    moduleTag: 'Week 7 • Web Dev 3',
    title: 'Advanced Eloquent ORM',
    subtitle: 'Learn query scopes, events, observers, resolving N+1 query bottlenecks with eager loading, and soft deletes.'
  },
  {
    id: 'w7-slide2',
    slideNum: 2,
    totalSlides: 11,
    type: 'single_topic',
    moduleTag: 'Module 1: Query Scopes',
    title: 'Local Query Scopes: Reusable Query Logic',
    topicTitle: 'Writing Clean, DRY Database Queries',
    whatItDoes: 'Encapsulates common query constraints directly into your model so you can chain them anywhere.',
    whatIsGoingOn: 'Prefixing a model method with `scope` (e.g. `scopePublished($query)`) registers a fluent query builder macro.',
    bullets: [
      'Define in Model: `public function scopePublished($query) { return $query->where(\'is_published\', true); }`',
      'Use in Controller: `Post::published()->latest()->get();`',
      'Dynamic Scopes: Pass arguments to scopes: `Post::ofType(\'tutorial\')->get();`',
      'Eliminates duplicate `where()` clauses across multiple controllers.'
    ],
    code: `// app/Models/Post.php
public function scopePopular(Builder $query, int $minViews = 1000): Builder
{
    return $query->where('views_count', '>=', $minViews);
}

// In Controller:
$trendingPosts = Post::published()->popular(5000)->get();`,
    layman: {
      title: 'Human-Readable Code',
      text: '`Post::published()->popular()->get()` reads like plain English sentences rather than messy database logic.'
    }
  },
  {
    id: 'w7-slide3',
    slideNum: 3,
    totalSlides: 11,
    type: 'single_topic',
    moduleTag: 'Module 1: Global Scopes',
    title: 'Global Scopes: Automatic Database Filters',
    topicTitle: 'Enforcing Constraints on Every Single Query',
    whatItDoes: 'Applies a filter automatically to all queries executed on a given model.',
    whatIsGoingOn: 'Global scopes are ideal for multi-tenant software (e.g. only showing records belonging to the current tenant) or soft-deleted records.',
    bullets: [
      'Can define via an anonymous closure or a dedicated scope class.',
      'Automatically appended to `Model::all()`, `Model::find()`, and relations.',
      'Temporarily disable when needed: `Post::withoutGlobalScopes()->get()`.'
    ],
    code: `protected static function booted(): void
{
    static::addGlobalScope('active', function (Builder $builder) {
        $builder->where('status', 'active');
    });
}

// Bypassing when querying administrative panels:
$all = Post::withoutGlobalScope('active')->get();`,
    keyInsight: {
      title: 'Multi-Tenant Power',
      text: 'Global scopes guarantee that junior developers never accidentally leak another customer\'s data by forgetting a `where(\'tenant_id\')` clause.'
    }
  },
  {
    id: 'w7-slide4',
    slideNum: 4,
    totalSlides: 11,
    type: 'single_topic',
    moduleTag: 'Module 2: Events & Observers',
    title: 'Model Events & Observers',
    topicTitle: 'Reacting to Model Lifecycle Transitions',
    whatItDoes: 'Fires hooks whenever a model is retrieved, created, updated, or deleted.',
    whatIsGoingOn: 'Instead of polluting controllers with side-effects (e.g. sending a welcome email or generating a slug), Observers group lifecycle listeners in one class.',
    bullets: [
      'Lifecycle hooks: `retrieved`, `creating`, `created`, `updating`, `updated`, `deleting`, `deleted`.',
      'Generate observer: `php artisan make:observer PostObserver --model=Post`.',
      'Automatically registered in modern Laravel or `AppServiceProvider`.'
    ],
    code: `namespace App\\Observers;

use App\\Models\\Post;
use Illuminate\\Support\\Str;

class PostObserver
{
    public function creating(Post $post): void
    {
        // Auto-generate URL slug before saving to database!
        if (empty($post->slug)) {
            $post->slug = Str::slug($post->title);
        }
    }
}`,
    layman: {
      title: 'Automated Triggers',
      text: 'Whenever a user or script creates a post, the observer automatically generates a web-safe slug like `my-first-post` without anyone having to remember to write it.'
    }
  },
  {
    id: 'w7-slide5',
    slideNum: 5,
    totalSlides: 11,
    type: 'single_topic',
    moduleTag: 'Module 3: Performance',
    title: 'The N+1 Query Problem & Eager Loading',
    topicTitle: 'The #1 Database Performance Killer in Web Applications',
    whatItDoes: 'Solves slow database performance caused by lazy-loading relations inside loops.',
    whatIsGoingOn: 'Lazy loading 100 posts and accessing `$post->author->name` fires 1 query for the posts, plus 100 separate queries for each author (101 queries total). Eager loading uses `with()` to load all authors in just 2 queries!',
    bullets: [
      'Bad (Lazy Loading): `Post::all()` -> 100 queries inside Blade loop.',
      'Good (Eager Loading): `Post::with(\'author\')->get()` -> Exactly 2 queries.',
      'Eager Load Multiple: `Post::with([\'author\', \'comments.user\'])->get()`.',
      'Strict Mode: `Model::preventLazyLoading(! app()->isProduction())` alerts you during development.'
    ],
    code: `// In Controller:
// Fast: 2 queries regardless of how many posts exist!
$posts = Post::with('user')->latest()->get();

// In Blade:
@foreach($posts as $post)
    <p>{{ $post->title }} by {{ $post->user->name }}</p>
@endforeach`,
    keyInsight: {
      title: 'Massive Speedup',
      text: 'Fixing an N+1 query can reduce database response time from 1,500ms down to 15ms. Always use `with()` when accessing relations in lists!'
    }
  },
  {
    id: 'w7-slide6',
    slideNum: 6,
    totalSlides: 11,
    type: 'single_topic',
    moduleTag: 'Module 3: Soft Deletes',
    title: 'Soft Deletes: Recycle Bin for Records',
    topicTitle: 'Protecting Critical Business Data from Accidental Deletion',
    whatItDoes: 'Marks records as deleted in the database with a timestamp instead of purging them from the hard drive.',
    whatIsGoingOn: 'The `SoftDeletes` trait adds a `deleted_at` column. Eloquent automatically adds `WHERE deleted_at IS NULL` to all queries.',
    bullets: [
      'Migration helper: `$table->softDeletes();` creates `deleted_at` timestamp.',
      'Model trait: `use Illuminate\\Database\\Eloquent\\SoftDeletes;`',
      'Normal queries automatically hide soft-deleted records.',
      'Include deleted: `Post::withTrashed()->get();`',
      'Restore record: `$post->restore();`',
      'Permanent purge: `$post->forceDelete();`'
    ],
    code: `// Soft delete
$post->delete(); // sets deleted_at = 2026-09-23 12:00:00

// In admin dashboard:
$trashed = Post::onlyTrashed()->get();
$trashed->first()->restore(); // Restored!`,
    layman: {
      title: 'Undo Button',
      text: 'Soft deletes give your users an "Undo" or "Trash Can" feature. If a student accidentally deletes an essay, you can restore it with a single click.'
    }
  },
  {
    id: 'w7-slide7',
    slideNum: 7,
    totalSlides: 11,
    type: 'single_topic',
    moduleTag: 'Module 4: Summary',
    title: 'Weekly Summary & Competency Checklist',
    topicTitle: 'Reviewing Your Week 7 Milestones',
    whatItDoes: 'Summarizes advanced Eloquent techniques.',
    whatIsGoingOn: 'In Week 8, we move to user input: Form Handling, Validation, and CSRF defense.',
    bullets: [
      '✓ Implemented local and global query scopes for DRY queries.',
      '✓ Handled model lifecycle events using dedicated Observers.',
      '✓ Eliminated the N+1 query problem using eager loading (`with()`).',
      '✓ Configured soft deletes for safe record recovery.'
    ]
  },
  {
    id: 'w7-slide8',
    slideNum: 8,
    totalSlides: 11,
    type: 'section_break',
    sectionNum: 'Week 7 Summary',
    title: 'Test Your Advanced Eloquent Skills',
    description: 'You have completed the Week 7 lecture deck and hands-on code examples. Return to the lesson library or review the slide outline.'
  }
];

// ============================================================================
// WEEK 8: FORM HANDLING AND VALIDATION
// ============================================================================
export const webdev3Week8Slides: SlideData[] = [
  {
    id: 'w8-slide1',
    slideNum: 1,
    totalSlides: 11,
    type: 'cover',
    moduleTag: 'Week 8 • Web Dev 3',
    title: 'Form Handling and Validation',
    subtitle: 'Safely process incoming user data with CSRF defense, validation rules, Form Requests, and error handling.'
  },
  {
    id: 'w8-slide2',
    slideNum: 2,
    totalSlides: 11,
    type: 'single_topic',
    moduleTag: 'Module 1: CSRF & Form Flow',
    title: 'The Form Submission Lifecycle in Laravel',
    topicTitle: 'From Browser Form to Database Insertion',
    whatItDoes: 'Coordinates submitting form inputs, validating data against business rules, and either processing or redirecting with errors.',
    whatIsGoingOn: 'When an HTTP POST request arrives, Laravel verifies the CSRF token, binds the input parameters into the `Request` object, and runs validation rules.',
    bullets: [
      '1. Render Form: GET route renders Blade view with form input fields.',
      '2. Submit Data: Form submits POST/PUT request with CSRF token.',
      '3. Validation: Rules inspect input. If invalid, Laravel redirects BACK with errors and old input.',
      '4. Persistence: If valid, controller persists data and redirects with success message.'
    ],
    layman: {
      title: 'Bouncer at the Door',
      text: 'Validation is the strict inspector at the intake gate. If a user enters an invalid email or leaves their password blank, the form bounces them back immediately with helpful red error messages.'
    }
  },
  {
    id: 'w8-slide3',
    slideNum: 3,
    totalSlides: 11,
    type: 'single_topic',
    moduleTag: 'Module 1: CSRF Protection',
    title: 'CSRF Defense: The @csrf Directive',
    topicTitle: 'Stopping Cross-Site Request Forgery Attacks Dead in Their Tracks',
    whatItDoes: 'Prevents unauthorized third-party websites from submitting requests on behalf of your authenticated users.',
    whatIsGoingOn: 'Laravel generates a secret token stored in the user\'s session. Every POST/PUT/DELETE form MUST include this token via `@csrf`. If missing, HTTP 419 Page Expired is returned.',
    bullets: [
      'Always include `@csrf` inside every `<form method="POST">` in Blade.',
      'Generates a hidden input: `<input type="hidden" name="_token" value="...">`.',
      'Automatic defense enforced by the `ValidateCsrfToken` middleware on all web routes.'
    ],
    code: `<form method="POST" action="/posts">
    @csrf
    
    <label>Title</label>
    <input type="text" name="title" class="border p-2">
    
    <button type="submit">Publish</button>
</form>`,
    keyInsight: {
      title: 'HTTP 419 Error',
      text: 'If you ever see a "419 Page Expired" error after submitting a form in Laravel, it means you forgot the `@csrf` directive inside the form!'
    }
  },
  {
    id: 'w8-slide4',
    slideNum: 4,
    totalSlides: 11,
    type: 'single_topic',
    moduleTag: 'Module 2: Validation Rules',
    title: 'Inline Controller Validation',
    topicTitle: 'Expressive Validation with $request->validate()',
    whatItDoes: 'Tests submitted parameters against a pipe-delimited list or array of validation rules.',
    whatIsGoingOn: 'If validation passes, it returns the sanitized array of validated data. If validation fails, Laravel automatically throws a `ValidationException` and redirects back with `$errors`.',
    bullets: [
      'required: Field cannot be null or empty string.',
      'string / numeric / integer / boolean: Enforces specific data types.',
      'min:8 / max:255: Character length or numeric range bounds.',
      'email: Verifies RFC-compliant email address format.',
      'unique:users,email: Checks database to ensure email is not already registered!'
    ],
    code: `public function store(Request $request)
{
    $validated = $request->validate([
        'title' => 'required|string|min:5|max:200',
        'email' => 'required|email|unique:users,email',
        'content' => 'required|string',
    ]);

    Post::create($validated);
    return redirect()->route('posts.index')->with('success', 'Post published!');
}`,
    layman: {
      title: 'Automatic Redirects',
      text: 'Notice you do NOT need an `if ($validationFails)` block! Laravel handles the redirection and flash message automatically.'
    }
  },
  {
    id: 'w8-slide5',
    slideNum: 5,
    totalSlides: 11,
    type: 'single_topic',
    moduleTag: 'Module 2: Dedicated Form Requests',
    title: 'Dedicated Form Request Classes',
    topicTitle: 'Moving Complex Validation Out of Controllers',
    whatItDoes: 'Encapsulates authorization and validation logic into dedicated request classes.',
    whatIsGoingOn: 'Generated via `php artisan make:request StorePostRequest`. By type-hinting it in your controller method, Laravel validates the request before the controller method even runs!',
    bullets: [
      'Scaffold command: `php artisan make:request StorePostRequest`.',
      'authorize(): Verify whether user has permission to submit this data.',
      'rules(): Return array of validation constraints.',
      'messages(): Customize user-friendly error messages.'
    ],
    code: `namespace App\\Http\\Requests;

use Illuminate\\Foundation\\Http\\FormRequest;

class StorePostRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true; // Or check $this->user()->can('create', Post::class);
    }

    public function rules(): array
    {
        return [
            'title' => ['required', 'string', 'max:255'],
            'body' => ['required', 'string', 'min:20'],
        ];
    }
}

// In Controller:
public function store(StorePostRequest $request)
{
    Post::create($request->validated());
    return redirect()->route('posts.index');
}`,
    keyInsight: {
      title: 'Clean Controller Nirvana',
      text: 'With Form Requests, your controller methods shrink to just 2 lines of clean code: create and redirect.'
    }
  },
  {
    id: 'w8-slide6',
    slideNum: 6,
    totalSlides: 11,
    type: 'single_topic',
    moduleTag: 'Module 3: Error Feedback',
    title: 'Displaying Errors & Preserving Old Input',
    topicTitle: 'Crafting a Smooth, Frustration-Free User Experience',
    whatItDoes: 'Displays specific validation errors next to input fields and repopulates previously entered text so users do not have to retype everything.',
    whatIsGoingOn: 'Laravel flashes validation errors into the session under `$errors` and preserves submitted input accessible via `old(\'field\')`.',
    bullets: [
      'The @error directive: Checks if a field has an error and provides `$message`.',
      'The old() helper: Retrieves previously submitted value from session flash.',
      'Global error summary: `@if($errors->any())` displays a bulleted list of all errors.'
    ],
    code: `<div class="mb-4">
    <label class="block font-bold">Post Title</label>
    <input type="text" name="title" 
           value="{{ old('title') }}" 
           class="border rounded p-2 w-full @error('title') border-rose-500 @enderror">
    
    @error('title')
        <p class="text-rose-500 text-xs mt-1">{{ $message }}</p>
    @enderror
</div>`,
    layman: {
      title: 'No Wasted Effort',
      text: 'Have you ever filled out a 20-field form, made one mistake, and had the whole page clear out? `old(\'field\')` prevents that nightmare by remembering what the user typed!'
    }
  },
  {
    id: 'w8-slide7',
    slideNum: 7,
    totalSlides: 11,
    type: 'single_topic',
    moduleTag: 'Module 4: Summary',
    title: 'Weekly Summary & Competency Checklist',
    topicTitle: 'Reviewing Your Week 8 Milestones',
    whatItDoes: 'Reviews form processing, CSRF protection, and validation rules.',
    whatIsGoingOn: 'In Week 10, we move into user identity: Authentication, Authorization, Gates, and Policies.',
    bullets: [
      '✓ Protected web forms from Cross-Site Request Forgery using `@csrf`.',
      '✓ Implemented inline controller validation with `$request->validate()`.',
      '✓ Scaffolding clean, dedicated Form Request classes.',
      '✓ Displayed targeted error feedback and preserved old input in Blade.'
    ]
  },
  {
    id: 'w8-slide8',
    slideNum: 8,
    totalSlides: 11,
    type: 'section_break',
    sectionNum: 'Week 8 Summary',
    title: 'Test Your Form Validation Knowledge',
    description: 'You have completed the Week 8 lecture deck and hands-on code examples. Return to the lesson library or review the slide outline.'
  }
];

// ============================================================================
// WEEK 10: AUTHENTICATION AND AUTHORIZATION
// ============================================================================
export const webdev3Week10Slides: SlideData[] = [
  {
    id: 'w10-slide1',
    slideNum: 1,
    totalSlides: 11,
    type: 'cover',
    moduleTag: 'Week 10 • Web Dev 3',
    title: 'Authentication and Authorization',
    subtitle: 'Secure user identity and permissions with Laravel authentication guards, the Auth facade, Gates, and Policies.'
  },
  {
    id: 'w10-slide2',
    slideNum: 2,
    totalSlides: 11,
    type: 'single_topic',
    moduleTag: 'Module 1: Authentication Core',
    title: 'Authentication vs Authorization',
    topicTitle: 'Who Are You? vs What Are You Allowed To Do?',
    whatItDoes: 'Clarifies the critical distinction between verifying user identity and granting permission to perform actions.',
    whatIsGoingOn: 'Authentication (AuthN) proves a user is who they claim to be (login credentials). Authorization (AuthZ) verifies if that authenticated user has rights to edit or delete a resource.',
    bullets: [
      'Authentication: Login, password hashing, session cookies, remember-me tokens.',
      'Authorization: Gates, Policies, role-based access control (Admin, Student, Guest).',
      'Laravel ships with turn-key authentication packages: Laravel Breeze (Blade/React/Vue).'
    ],
    layman: {
      title: 'Building Pass Analogy',
      text: 'Authentication is showing your government ID at the lobby front desk to get a visitor badge. Authorization is whether your badge opens the door to the Server Room or only the Cafeteria.'
    }
  },
  {
    id: 'w10-slide3',
    slideNum: 3,
    totalSlides: 11,
    type: 'single_topic',
    moduleTag: 'Module 1: Authentication Core',
    title: 'The Auth Facade & Helpers',
    topicTitle: 'Interacting with Current Logged-In User State',
    whatItDoes: 'Provides methods to inspect authentication state, attempt logins, and log users out.',
    whatIsGoingOn: 'Laravel maintains authentication state using session guards and encrypts session identifiers using the `APP_KEY`.',
    bullets: [
      'Auth::check(): Returns boolean indicating if current visitor is authenticated.',
      'Auth::user(): Returns the current logged-in `User` model instance (or null).',
      'Auth::id(): Returns primary key ID of logged-in user.',
      'Auth::attempt($credentials, $remember): Validates password and authenticates.',
      'Auth::logout(): Invalidates session and regenerates CSRF token.'
    ],
    code: `if (Auth::attempt(['email' => $email, 'password' => $password], $remember)) {
    $request->session()->regenerate();
    return redirect()->intended('dashboard');
}

return back()->withErrors(['email' => 'Invalid credentials.']);`,
    keyInsight: {
      title: 'Timing-Safe Hashing',
      text: 'Laravel hashes passwords with Bcrypt or Argon2 using `Hash::make()`. Passwords are never stored in plain text, and comparisons use timing-attack-safe routines.'
    }
  },
  {
    id: 'w10-slide4',
    slideNum: 4,
    totalSlides: 11,
    type: 'single_topic',
    moduleTag: 'Module 2: Authorization Gates',
    title: 'Authorization Gates: Closure-Based Permissions',
    topicTitle: 'Simple Authorization Logic for General Actions',
    whatItDoes: 'Defines permission checks using simple closures, typically registered in `AppServiceProvider`.',
    whatIsGoingOn: 'Gates take the authenticated `$user` as their first argument and return `true` or `false`.',
    bullets: [
      'Define in `AppServiceProvider::boot()`: `Gate::define(\'access-admin\', fn(User $user) => $user->is_admin);`',
      'Check in Controller: `Gate::authorize(\'access-admin\');` (throws 403 if unauthorized).',
      'Check in Blade: `@can(\'access-admin\') <a href="/admin">Admin Area</a> @endcan`.'
    ],
    code: `// app/Providers/AppServiceProvider.php
public function boot(): void
{
    Gate::define('edit-settings', function (User $user) {
        return $user->role === 'superadmin';
    });
}

// In Blade View:
@can('edit-settings')
    <button class="bg-indigo-600 text-white">System Settings</button>
@endcan`,
    layman: {
      title: 'Simple Checkpoints',
      text: 'Gates are ideal for standalone permissions that do not belong to any specific model, such as accessing a billing dashboard or maintenance mode.'
    }
  },
  {
    id: 'w10-slide5',
    slideNum: 5,
    totalSlides: 11,
    type: 'single_topic',
    moduleTag: 'Module 2: Model Policies',
    title: 'Model Policies: Resource-Specific Authorization',
    topicTitle: 'Organizing Permission Logic Around Eloquent Models',
    whatItDoes: 'Groups authorization rules for a specific model (e.g. Can this user update this specific Post?).',
    whatIsGoingOn: 'Generated via `php artisan make:policy PostPolicy --model=Post`. Laravel automatically discovers and associates the policy with the `Post` model.',
    bullets: [
      'Scaffold: `php artisan make:policy PostPolicy --model=Post`.',
      'Contains standard action methods: `viewAny`, `view`, `create`, `update`, `delete`.',
      'Enforce in Controller: `Gate::authorize(\'update\', $post);` or `$this->authorize(\'update\', $post);`',
      'Blade directive: `@can(\'update\', $post) <a href="...">Edit Post</a> @endcan`.'
    ],
    code: `// app/Policies/PostPolicy.php
public function update(User $user, Post $post): bool
{
    // Only the original author can edit their own post!
    return $user->id === $post->user_id;
}

public function delete(User $user, Post $post): bool
{
    return $user->id === $post->user_id || $user->is_admin;
}`,
    keyInsight: {
      title: 'Decoupled Business Rules',
      text: 'If your business rules change (e.g. allowing editors to modify posts), you only edit `PostPolicy.php`. Your controllers and views stay completely untouched!'
    }
  },
  {
    id: 'w10-slide6',
    slideNum: 6,
    totalSlides: 11,
    type: 'single_topic',
    moduleTag: 'Module 3: Route Authorization',
    title: 'Authorizing Requests in Routes & Middleware',
    topicTitle: 'Stopping Unauthorized Access at the URL Boundary',
    whatItDoes: 'Attaches authorization policies directly to routes using middleware.',
    whatIsGoingOn: 'Laravel provides the `can` middleware which invokes the corresponding Policy or Gate before the controller executes.',
    bullets: [
      'Route syntax: `->middleware(\'can:update,post\')`.',
      'Laravel inspects the route parameter `{post}` and automatically passes the resolved model to the policy.',
      'Throws automatic HTTP 403 Forbidden response if the policy returns false.'
    ],
    code: `// Protect route using Policy
Route::put('/posts/{post}', [PostController::class, 'update'])
    ->middleware('can:update,post');

// Protect route using Gate
Route::get('/admin', [AdminController::class, 'index'])
    ->middleware('can:access-admin');`,
    layman: {
      title: 'Maximum Defense',
      text: 'Putting authorization in route middleware means hackers cannot even probe controller vulnerabilities if they lack the required permissions.'
    }
  },
  {
    id: 'w10-slide7',
    slideNum: 7,
    totalSlides: 11,
    type: 'single_topic',
    moduleTag: 'Module 4: Summary',
    title: 'Weekly Summary & Competency Checklist',
    topicTitle: 'Reviewing Your Week 10 Milestones',
    whatItDoes: 'Summarizes authentication and authorization mechanisms in Laravel.',
    whatIsGoingOn: 'In Week 11, we explore building stateless RESTful APIs with JSON resources and Sanctum tokens.',
    bullets: [
      '✓ Understood the distinction between authentication (identity) and authorization (permissions).',
      '✓ Interacted with user sessions using the `Auth` facade and secure password hashing.',
      '✓ Built global permission checks using Gates in `AppServiceProvider`.',
      '✓ Implemented granular model-specific permissions using dedicated Policies.'
    ]
  },
  {
    id: 'w10-slide8',
    slideNum: 8,
    totalSlides: 11,
    type: 'section_break',
    sectionNum: 'Week 10 Summary',
    title: 'Test Your Auth & Permissions Knowledge',
    description: 'You have completed the Week 10 lecture deck and hands-on code examples. Return to the lesson library or review the slide outline.'
  }
];

// ============================================================================
// WEEK 11: RESTFUL API DEVELOPMENT
// ============================================================================
export const webdev3Week11Slides: SlideData[] = [
  {
    id: 'w11-slide1',
    slideNum: 1,
    totalSlides: 11,
    type: 'cover',
    moduleTag: 'Week 11 • Web Dev 3',
    title: 'RESTful API Development',
    subtitle: 'Build robust REST APIs: stateless routes, Eloquent API Resources, HTTP status codes, and Sanctum token authentication.'
  },
  {
    id: 'w11-slide2',
    slideNum: 2,
    totalSlides: 11,
    type: 'single_topic',
    moduleTag: 'Module 1: REST Architecture',
    title: 'Principles of RESTful API Design',
    topicTitle: 'How Modern Web & Mobile Clients Communicate with Backends',
    whatItDoes: 'Provides a stateless, standardized interface for mobile apps, SPAs (React, Vue), and third-party integrations to exchange data.',
    whatIsGoingOn: 'REST APIs communicate using JSON payloads and rely on standard HTTP verbs and status codes rather than HTML views.',
    bullets: [
      'Statelessness: Every request contains all credentials and tokens needed for authentication.',
      'JSON Standard: Payloads and responses are structured as UTF-8 encoded JSON.',
      'HTTP Status Codes: 200 (OK), 201 (Created), 204 (No Content), 400 (Bad Request), 401 (Unauthenticated), 403 (Forbidden), 404 (Not Found), 422 (Validation Error), 500 (Server Error).'
    ],
    layman: {
      title: 'Universal Data Plug',
      text: 'A REST API is like a universal electrical outlet. An iOS app, Android app, React frontend, and smart refrigerator can all plug into the exact same Laravel backend.'
    }
  },
  {
    id: 'w11-slide3',
    slideNum: 3,
    totalSlides: 11,
    type: 'single_topic',
    moduleTag: 'Module 1: API Routing',
    title: 'API Routing & API Resource Controllers',
    topicTitle: 'Configuring routes/api.php and Scaffold Controllers',
    whatItDoes: 'Sets up dedicated API routes prefixed with `/api` and removes HTML form actions.',
    whatIsGoingOn: 'Install via `php artisan install:api`. API routes do not include session cookies or CSRF tokens because they are stateless.',
    bullets: [
      'Route declaration: `Route::apiResource(\'products\', ProductController::class);`',
      'API Resource Controllers exclude HTML form methods (`create` and `edit`), leaving only: `index`, `store`, `show`, `update`, `destroy`.',
      'Generate API controller: `php artisan make:controller Api/ProductController --api`.'
    ],
    code: `// routes/api.php
use App\\Http\\Controllers\\Api\\ProductController;

Route::apiResource('products', ProductController::class);

// Registers 5 stateless endpoints:
// GET    /api/products
// POST   /api/products
// GET    /api/products/{id}
// PUT    /api/products/{id}
// DELETE /api/products/{id}`,
    keyInsight: {
      title: 'No HTML Boilerplate',
      text: 'Because mobile and React apps render their own forms, `--api` controllers discard `create()` and `edit()` completely.'
    }
  },
  {
    id: 'w11-slide4',
    slideNum: 4,
    totalSlides: 11,
    type: 'single_topic',
    moduleTag: 'Module 2: Eloquent API Resources',
    title: 'Eloquent API Resources: Transforming JSON',
    topicTitle: 'Decoupling Database Schema from Public API Output',
    whatItDoes: 'Acts as a transformation layer between your Eloquent models and the JSON response returned to clients.',
    whatIsGoingOn: 'Returning raw models leaks database columns (passwords, internal IDs, timestamps). API Resources allow precise curation of JSON output keys.',
    bullets: [
      'Generate resource: `php artisan make:resource ProductResource`.',
      'The `toArray(Request $request)` method formats the output structure.',
      'Prevents breaking client apps when internal database columns are renamed.',
      'Include computed attributes and conditionally load relations.'
    ],
    code: `namespace App\\Http\\Resources;

use Illuminate\\Http\\Request;
use Illuminate\\Http\\Resources\\Json\\JsonResource;

class ProductResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'formatted_price' => '$' . number_format($this->price, 2),
            'category' => $this->category->name,
            'published_at' => $this->created_at->toIso8601String(),
        ];
    }
}`,
    layman: {
      title: 'The Gift Wrapper',
      text: 'API Resources are like gift wrapping. Instead of handing a customer raw database parts, you package the data cleanly and attractively formatted.'
    }
  },
  {
    id: 'w11-slide5',
    slideNum: 5,
    totalSlides: 11,
    type: 'single_topic',
    moduleTag: 'Module 2: API Collections',
    title: 'Using Resources in API Controllers',
    topicTitle: 'Returning Single Models and Paginated Collections',
    whatItDoes: 'Instantiates resources for single records or wraps query collections with automatic pagination metadata.',
    whatIsGoingOn: 'Laravel automatically handles Content-Type headers (`application/json`) and HTTP 200/201 status codes.',
    bullets: [
      'Single Model: `return new ProductResource($product);`',
      'Collection / List: `return ProductResource::collection(Product::paginate(15));`',
      'Automatic Pagination: Includes `links` (next, prev) and `meta` (total, current_page) in the JSON payload.',
      'Creation response: `return (new ProductResource($product))->response()->setStatusCode(201);`'
    ],
    code: `public function index()
{
    $products = Product::with('category')->paginate(10);
    return ProductResource::collection($products);
}

public function show(Product $product)
{
    return new ProductResource($product);
}`,
    keyInsight: {
      title: 'Free Pagination Metadata',
      text: 'Passing paginated models to `Resource::collection()` automatically embeds standard pagination metadata so mobile clients know when to trigger infinite scrolling.'
    }
  },
  {
    id: 'w11-slide6',
    slideNum: 6,
    totalSlides: 11,
    type: 'single_topic',
    moduleTag: 'Module 3: API Authentication',
    title: 'Stateless API Tokens with Laravel Sanctum',
    topicTitle: 'Issuing and Validating Personal Access Tokens',
    whatItDoes: 'Provides lightweight token-based authentication for mobile apps and third-party API clients.',
    whatIsGoingOn: 'Sanctum generates cryptographically hashed tokens stored in the `personal_access_tokens` table. Clients include the token in the `Authorization: Bearer <token>` header.',
    bullets: [
      'Issue token: `$token = $user->createToken(\'mobile-app\')->plainTextToken;`',
      'Protect routes: Add `middleware(\'auth:sanctum\')`.',
      'Revoke token on logout: `$user->currentAccessToken()->delete();`',
      'Token abilities: Assign granular permissions to tokens (e.g. `read-only`, `order:create`).'
    ],
    code: `// Login endpoint issuing token
Route::post('/api/login', function (Request $request) {
    $credentials = $request->validate([
        'email' => 'required|email',
        'password' => 'required',
    ]);

    if (! Auth::attempt($credentials)) {
        return response()->json(['message' => 'Unauthorized'], 401);
    }

    $token = Auth::user()->createToken('api-token')->plainTextToken;
    return response()->json(['token' => $token]);
});

// Protected endpoint
Route::get('/api/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');`,
    layman: {
      title: 'VIP Wristband',
      text: 'A Sanctum Bearer token is like a VIP concert wristband. Once issued, you show the wristband at every door (`Authorization` header) without retyping your password.'
    }
  },
  {
    id: 'w11-slide7',
    slideNum: 7,
    totalSlides: 11,
    type: 'single_topic',
    moduleTag: 'Module 4: Summary',
    title: 'Weekly Summary & Competency Checklist',
    topicTitle: 'Reviewing Your Week 11 Milestones',
    whatItDoes: 'Reviews REST principles, API resources, and token auth.',
    whatIsGoingOn: 'In Week 12, we learn automated testing with Pest and PHPUnit to ensure zero regressions.',
    bullets: [
      '✓ Designed RESTful endpoints adhering to HTTP semantic verbs and status codes.',
      '✓ Configured API routes in `routes/api.php` using `Route::apiResource()`.',
      '✓ Formatted and secured JSON responses using Eloquent API Resources and Collections.',
      '✓ Secured stateless endpoints using Laravel Sanctum personal access tokens.'
    ]
  },
  {
    id: 'w11-slide8',
    slideNum: 8,
    totalSlides: 11,
    type: 'section_break',
    sectionNum: 'Week 11 Summary',
    title: 'Test Your RESTful API Knowledge',
    description: 'You have completed the Week 11 lecture deck and hands-on code examples. Return to the lesson library or review the slide outline.'
  }
];

// ============================================================================
// WEEK 12: TESTING IN LARAVEL
// ============================================================================
export const webdev3Week12Slides: SlideData[] = [
  {
    id: 'w12-slide1',
    slideNum: 1,
    totalSlides: 11,
    type: 'cover',
    moduleTag: 'Week 12 • Web Dev 3',
    title: 'Testing in Laravel',
    subtitle: 'Ensure rock-solid software quality through automated unit testing, feature testing, and database fixtures with Pest & PHPUnit.'
  },
  {
    id: 'w12-slide2',
    slideNum: 2,
    totalSlides: 11,
    type: 'single_topic',
    moduleTag: 'Module 1: Testing Foundations',
    title: 'Why Automated Testing is Mandatory',
    topicTitle: 'The Safety Net of Professional Software Engineering',
    whatItDoes: 'Runs programmatic scripts that execute your code and verify expected outputs in milliseconds, preventing software regressions.',
    whatIsGoingOn: 'Instead of clicking through forms manually in a browser every time you change a line of code, automated tests execute your entire test suite automatically.',
    bullets: [
      'Instant Feedback: Discover bugs in seconds before users or clients ever encounter them.',
      'Fearless Refactoring: Upgrade framework versions and refactor architecture with 100% confidence.',
      'Living Documentation: Tests clearly describe how your application is expected to behave under all edge cases.',
      'Run tests with Artisan: `php artisan test`.'
    ],
    layman: {
      title: 'Safety Net Analogy',
      text: 'Deploying software without automated tests is like performing a high-wire trapeze act without a safety net. Automated tests guarantee you never hit the ground when making changes.'
    }
  },
  {
    id: 'w12-slide3',
    slideNum: 3,
    totalSlides: 11,
    type: 'single_topic',
    moduleTag: 'Module 1: Test Types',
    title: 'Unit Tests vs Feature Tests',
    topicTitle: 'The Testing Pyramid: Isolated Logic vs Full Request Cycles',
    whatItDoes: 'Divides testing into targeted function tests and end-to-end user flow tests.',
    whatIsGoingOn: 'Laravel stores unit tests in `tests/Unit` and feature tests in `tests/Feature`.',
    bullets: [
      'Unit Tests: Test small, isolated methods (calculations, string formatters) without touching the database or network.',
      'Feature Tests: Test full HTTP request cycles (visiting URLs, submitting forms, querying the database, checking redirects).',
      'In web development, ~80% of your tests should be Feature Tests because they simulate real user behavior.'
    ],
    versusLeft: {
      title: 'Unit Tests (tests/Unit)',
      bullets: [
        'Blazingly fast execution (microseconds)',
        'Does not boot the full Laravel application',
        'Does not connect to database or session',
        'Tests pure algorithmic logic'
      ]
    },
    versusRight: {
      title: 'Feature Tests (tests/Feature)',
      bullets: [
        'Boots the full Laravel application',
        'Interacts with live database, sessions, and auth',
        'Simulates real browser and API requests',
        'High business value and confidence'
      ]
    }
  },
  {
    id: 'w12-slide4',
    slideNum: 4,
    totalSlides: 11,
    type: 'single_topic',
    moduleTag: 'Module 2: Feature Tests',
    title: 'Writing HTTP Feature Tests',
    topicTitle: 'Simulating Inbound Requests and Asserting Responses',
    whatItDoes: 'Fires simulated HTTP requests to your endpoints and verifies status codes and response content.',
    whatIsGoingOn: 'Laravel provides fluent assertion methods (`assertStatus`, `assertSee`, `assertRedirect`, `assertJson`).',
    bullets: [
      'Scaffold command: `php artisan make:test PostTest`.',
      'Simulate GET: `$response = $this->get(\'/posts\');`',
      'Simulate POST: `$response = $this->post(\'/posts\', [...]);`',
      'Simulate Auth: `$this->actingAs($user)->get(\'/dashboard\');`'
    ],
    code: `namespace Tests\\Feature;

use Tests\\TestCase;
use App\\Models\\User;

class PostTest extends TestCase
{
    public function test_guests_cannot_create_posts(): void
    {
        $response = $this->post('/posts', ['title' => 'Test Post']);
        $response->assertRedirect('/login');
    }

    public function test_authenticated_users_can_create_posts(): void
    {
        $user = User::factory()->create();

        $response = $this->actingAs($user)->post('/posts', [
            'title' => 'My Great Post',
            'body' => 'Post body content...',
        ]);

        $response->assertStatus(302);
        $this->assertDatabaseHas('posts', ['title' => 'My Great Post']);
    }
}`,
    keyInsight: {
      title: 'actingAs Helper',
      text: '`$this->actingAs($user)` bypasses login forms in tests and immediately authenticates the simulated request.'
    }
  },
  {
    id: 'w12-slide5',
    slideNum: 5,
    totalSlides: 11,
    type: 'single_topic',
    moduleTag: 'Module 3: Database Fixtures',
    title: 'The RefreshDatabase Trait & Model Factories',
    topicTitle: 'Isolated Database Testing with Automated Data Fixtures',
    whatItDoes: 'Resets the database schema between test runs and generates fake test models on demand.',
    whatIsGoingOn: 'The `RefreshDatabase` trait executes migrations on an in-memory SQLite database before each test and rolls back transactions so tests never pollute each other.',
    bullets: [
      'Add `use RefreshDatabase;` inside your test class.',
      'Model Factories: `Post::factory()->create()` generates dummy database records with realistic fake data.',
      'Count generator: `Post::factory()->count(10)->create()` generates 10 records at once.',
      'Database assertions: `assertDatabaseHas(\'table\', [...])` and `assertDatabaseMissing(\'table\', [...])`.'
    ],
    code: `use Illuminate\\Foundation\\Testing\\RefreshDatabase;

class ArticleTest extends TestCase
{
    use RefreshDatabase; // Resets database automatically!

    public function test_articles_list_displays_published_articles(): void
    {
        $article = Article::factory()->create(['title' => 'Laravel Testing Guide']);

        $response = $this->get('/articles');
        $response->assertStatus(200);
        $response->assertSee('Laravel Testing Guide');
    }
}`,
    layman: {
      title: 'Self-Cleaning Workspace',
      text: '`RefreshDatabase` is like an automated janitor. After every single test finishes running, the database is wiped completely clean so the next test starts with a fresh slate.'
    }
  },
  {
    id: 'w12-slide6',
    slideNum: 6,
    totalSlides: 11,
    type: 'single_topic',
    moduleTag: 'Module 4: Summary',
    title: 'Weekly Summary & Competency Checklist',
    topicTitle: 'Reviewing Your Week 12 Milestones',
    whatItDoes: 'Summarizes automated testing in Laravel.',
    whatIsGoingOn: 'In Week 14, we connect external APIs and Composer packages with Laravel.',
    bullets: [
      '✓ Understood the importance and economics of automated testing.',
      '✓ Differentiated between isolated Unit tests and holistic Feature tests.',
      '✓ Executed tests via Artisan (`php artisan test`).',
      '✓ Leveraged `RefreshDatabase`, HTTP response assertions, and Model Factories.'
    ]
  },
  {
    id: 'w12-slide7',
    slideNum: 7,
    totalSlides: 11,
    type: 'section_break',
    sectionNum: 'Week 12 Summary',
    title: 'Test Your Testing Skills',
    description: 'You have completed the Week 12 lecture deck and hands-on code examples. Return to the lesson library or review the slide outline.'
  }
];

// ============================================================================
// WEEK 14: INTEGRATING THIRD-PARTY SERVICES
// ============================================================================
export const webdev3Week14Slides: SlideData[] = [
  {
    id: 'w14-slide1',
    slideNum: 1,
    totalSlides: 11,
    type: 'cover',
    moduleTag: 'Week 14 • Web Dev 3',
    title: 'Integrating Third-Party Services',
    subtitle: 'Connect external REST APIs, integrate Composer packages, and securely manage API credentials.'
  },
  {
    id: 'w14-slide2',
    slideNum: 2,
    totalSlides: 11,
    type: 'single_topic',
    moduleTag: 'Module 1: External APIs',
    title: 'Why Web Apps Rely on External Services',
    topicTitle: 'Extending Your Application Beyond the Local Server',
    whatItDoes: 'Enables your application to communicate with payment processors (Stripe), email providers (Mailgun, SendGrid), mapping services, and social networks.',
    whatIsGoingOn: 'Instead of reinventing payment gateways or SMS delivery from scratch, web apps make outbound HTTP calls to third-party web services.',
    bullets: [
      'Payment Gateways: Stripe, PayPal, PayMongo.',
      'Transactional Email & SMS: Postmark, Mailgun, Twilio.',
      'AI & Cloud Services: OpenAI API, AWS S3 storage buckets, Google Cloud Vision.',
      'Authentication: OAuth social login via Laravel Socialite (GitHub, Google).'
    ],
    layman: {
      title: 'Don\'t Reinvent the Wheel',
      text: 'Building your own credit card processing vault would take years of banking compliance audits. Integrating Stripe takes 30 minutes with an API.'
    }
  },
  {
    id: 'w14-slide3',
    slideNum: 3,
    totalSlides: 11,
    type: 'single_topic',
    moduleTag: 'Module 1: The HTTP Client',
    title: 'Laravel\'s Fluent HTTP Client',
    topicTitle: 'Making Outbound HTTP Requests with the Http Facade',
    whatItDoes: 'Provides an expressive wrapper around the Guzzle HTTP library to make outbound GET, POST, PUT, and DELETE calls.',
    whatIsGoingOn: '`Illuminate\\Support\\Facades\\Http` handles headers, query strings, JSON payloads, and SSL verification fluently.',
    bullets: [
      'GET Request: `Http::get(\'https://api.github.com/users/laravel\');`',
      'POST with JSON: `Http::post(\'https://api.example.com/orders\', [\'item\' => \'Book\']);`',
      'Bearer Authentication: `Http::withToken(\'secret_token\')->get(...);`',
      'Inspect Response: `$response->json()`, `$response->status()`, `$response->successful()`.'
    ],
    code: `use Illuminate\\Support\\Facades\\Http;

$response = Http::withToken(config('services.github.token'))
    ->timeout(5)
    ->get('https://api.github.com/user/repos');

if ($response->successful()) {
    $repos = $response->json(); // Array of repositories
} else {
    logger()->error('GitHub API failed: ' . $response->body());
}`,
    keyInsight: {
      title: 'Zero Guzzle Boilerplate',
      text: 'The `Http` facade handles JSON encoding, cURL connection pooling, and error detection with simple, readable one-liners.'
    }
  },
  {
    id: 'w14-slide4',
    slideNum: 4,
    totalSlides: 11,
    type: 'single_topic',
    moduleTag: 'Module 2: Resilience',
    title: 'HTTP Retries, Timeouts, and Faking',
    topicTitle: 'Building Resilient Outbound Integrations',
    whatItDoes: 'Protects your app from hanging when third-party servers are slow or experiencing transient errors.',
    whatIsGoingOn: 'Laravel provides automatic retry loops and offline mock testing without sending real network traffic.',
    bullets: [
      'Timeouts: `->timeout(3)` prevents server from freezing if external API stalls.',
      'Automatic Retries: `->retry(3, 100)` automatically retries failed requests 3 times with 100ms backoff.',
      'Offline Testing: `Http::fake([...])` allows testing API integration code without internet access or spending API credits!'
    ],
    code: `// Automatic retry on 5xx server errors
$response = Http::retry(3, 200)
    ->post('https://api.sms-provider.com/send', ['msg' => 'Hello']);

// Testing without making real HTTP calls:
Http::fake([
    'api.github.com/*' => Http::response(['name' => 'Laravel'], 200),
]);`,
    layman: {
      title: 'Shielding Your Users',
      text: 'If the SMS gateway has a 1-second hiccup, `Http::retry()` automatically tries again behind the scenes. Your user never notices an error.'
    }
  },
  {
    id: 'w14-slide5',
    slideNum: 5,
    totalSlides: 11,
    type: 'single_topic',
    moduleTag: 'Module 3: Security & Composer',
    title: 'Managing API Keys Securely',
    topicTitle: 'The .env & config/services.php Pattern',
    whatItDoes: 'Protects secret API keys from leaking to public Git repositories.',
    whatIsGoingOn: 'Secret keys are placed in `.env`, mapped inside `config/services.php`, and retrieved via `config(\'services.service_name.key\')`.',
    bullets: [
      'Never hardcode API keys directly into PHP files or controllers!',
      'Step 1: Put secret in `.env`: `STRIPE_SECRET=sk_live_...`',
      'Step 2: Map in `config/services.php`: `\'stripe\' => [\'secret\' => env(\'STRIPE_SECRET\')]`',
      'Step 3: Retrieve with config(): `config(\'services.stripe.secret\')`.'
    ],
    code: `// config/services.php
return [
    'stripe' => [
        'key' => env('STRIPE_KEY'),
        'secret' => env('STRIPE_SECRET'),
    ],
];

// In Controller:
$stripeSecret = config('services.stripe.secret');`,
    keyInsight: {
      title: 'Config Caching Safety',
      text: 'Never call `env()` directly in controllers! In production, `php artisan config:cache` turns off dynamic `env()` lookups. Always access secrets via `config()`.'
    }
  },
  {
    id: 'w14-slide6',
    slideNum: 6,
    totalSlides: 11,
    type: 'single_topic',
    moduleTag: 'Module 4: Summary',
    title: 'Weekly Summary & Competency Checklist',
    topicTitle: 'Reviewing Your Week 14 Milestones',
    whatItDoes: 'Reviews third-party integration, the HTTP client, and secret management.',
    whatIsGoingOn: 'In Week 15, we cover deployment, server tuning, and security best practices for production.',
    bullets: [
      '✓ Integrated external APIs using Laravel\'s fluent `Http` client.',
      '✓ Handled API resilience with timeouts, retry strategies, and offline `Http::fake()`.',
      '✓ Installed and utilized ecosystem Composer packages.',
      '✓ Safely managed API credentials via `.env` and `config/services.php`.'
    ]
  },
  {
    id: 'w14-slide7',
    slideNum: 7,
    totalSlides: 11,
    type: 'section_break',
    sectionNum: 'Week 14 Summary',
    title: 'Test Your Integration Skills',
    description: 'You have completed the Week 14 lecture deck and hands-on code examples. Return to the lesson library or review the slide outline.'
  }
];

// ============================================================================
// WEEK 15: DEPLOYMENT AND SECURITY BEST PRACTICES
// ============================================================================
export const webdev3Week15Slides: SlideData[] = [
  {
    id: 'w15-slide1',
    slideNum: 1,
    totalSlides: 11,
    type: 'cover',
    moduleTag: 'Week 15 • Web Dev 3',
    title: 'Deployment and Security Best Practices',
    subtitle: 'Prepare your application for production: caching optimizations, server hardening, HTTPS, and cloud deployment.'
  },
  {
    id: 'w15-slide2',
    slideNum: 2,
    totalSlides: 11,
    type: 'single_topic',
    moduleTag: 'Module 1: Production Readiness',
    title: 'The Production Readiness Checklist',
    topicTitle: 'Essential Configuration Changes Before Launching Live',
    whatItDoes: 'Ensures that sensitive debug information is concealed and security defenses are active.',
    whatIsGoingOn: 'Deploying with `APP_DEBUG=true` leaks database passwords and API keys in stack traces whenever an error occurs.',
    bullets: [
      'APP_ENV: Must be set to `production`.',
      'APP_DEBUG: MUST be set to `false`.',
      'APP_URL: Set to your live production domain (e.g. `https://myapp.com`).',
      'APP_KEY: Generated and secure.'
    ],
    code: `// Production .env settings:
APP_NAME="WebDev3 Production"
APP_ENV=production
APP_KEY=base64:7aV8m9...
APP_DEBUG=false
APP_URL=https://myapp.com`,
    layman: {
      title: 'Closing the Curtains',
      text: '`APP_DEBUG=false` closes the curtains. If an unexpected error happens, visitors see a polite "500 Server Error" page instead of your database schema and passwords.'
    }
  },
  {
    id: 'w15-slide3',
    slideNum: 3,
    totalSlides: 11,
    type: 'single_topic',
    moduleTag: 'Module 1: Caching Optimizations',
    title: 'Production Caching Commands',
    topicTitle: 'Maximizing Speed with Artisan Optimization',
    whatItDoes: 'Compiles configuration files, routes, and Blade templates into static PHP arrays.',
    whatIsGoingOn: 'Instead of scanning dozens of files on every request, the server reads single cached arrays from memory, delivering sub-10ms response times.',
    bullets: [
      'The Magic Command: `php artisan optimize` runs config and route caching in one step.',
      'config:cache: Merges all `config/*.php` files into one file.',
      'route:cache: Pre-compiles all registered routes into a fast lookup table.',
      'view:cache: Pre-compiles all Blade templates into PHP.',
      'Clear cache during redeployments: `php artisan optimize:clear`.'
    ],
    code: `// Run on production deployment server:
php artisan optimize
php artisan view:cache
php artisan icons:cache

// If you update code:
php artisan optimize:clear && php artisan optimize`,
    keyInsight: {
      title: 'Huge Performance Jump',
      text: 'Running `php artisan optimize` typically triples the requests per second your server can handle.'
    }
  },
  {
    id: 'w15-slide4',
    slideNum: 4,
    totalSlides: 11,
    type: 'single_topic',
    moduleTag: 'Module 2: Server Architecture',
    title: 'Web Server Architecture: Nginx & PHP-FPM',
    topicTitle: 'Routing Web Traffic to the Public Directory',
    whatItDoes: 'Configures web servers (Nginx, Caddy, Apache) to safely serve Laravel.',
    whatIsGoingOn: 'The web server document root must ALWAYS point to the `public/` directory. Pointing to the project root exposes your `.env` and source code to the internet!',
    bullets: [
      'Document Root: Point strictly to `/var/www/my-app/public`.',
      'URL Rewriting: Redirect all requests to `index.php?$query_string`.',
      'PHP-FPM: FastCGI Process Manager handles executing PHP worker processes.',
      'Supervisor: Background process manager that keeps your queue workers running.'
    ],
    layman: {
      title: 'The Vault Door',
      text: 'Pointing Nginx to `public/` ensures the outside world only sees compiled CSS/JS and `index.php`. The rest of your app (`.env`, models, database) stays safely locked in the private server vault.'
    }
  },
  {
    id: 'w15-slide5',
    slideNum: 5,
    totalSlides: 11,
    type: 'single_topic',
    moduleTag: 'Module 3: Cloud Deployment',
    title: 'Modern Deployment Workflows',
    topicTitle: 'From Git Push to Zero-Downtime Live Updates',
    whatItDoes: 'Automates building, migrating, and deploying Laravel applications to cloud servers.',
    whatIsGoingOn: 'Deployment scripts pull latest Git commits, install Composer production dependencies, run migrations, and reload PHP-FPM.',
    bullets: [
      'Laravel Forge: Automatic server provisioning on DigitalOcean, AWS, or Hetzner with one-click SSL and push-to-deploy.',
      'Laravel Vapor: Serverless deployment running on AWS Lambda with automatic auto-scaling.',
      'PaaS Platforms: Railway, Render, Fly.io, Heroku.',
      'Standard deploy script: git pull -> composer install --no-dev -> php artisan migrate --force -> php artisan optimize.'
    ],
    code: `// Standard Production Deployment Script:
git pull origin main
composer install --no-dev --optimize-autoloader
php artisan migrate --force
php artisan optimize
php artisan view:cache
sudo systemctl reload php8.2-fpm`,
    keyInsight: {
      title: 'migrate --force',
      text: 'In production, Artisan asks for confirmation before altering tables. Adding `--force` allows automated CI/CD scripts to run migrations unattended.'
    }
  },
  {
    id: 'w15-slide6',
    slideNum: 6,
    totalSlides: 11,
    type: 'single_topic',
    moduleTag: 'Module 4: Summary',
    title: 'Weekly Summary & Competency Checklist',
    topicTitle: 'Reviewing Your Week 15 Milestones',
    whatItDoes: 'Summarizes production deployment and security hardening.',
    whatIsGoingOn: 'In our final week, Week 16, we apply all our skills to build and deliver a complete real-world capstone application.',
    bullets: [
      '✓ Verified production settings (`APP_DEBUG=false`, `APP_ENV=production`).',
      '✓ Executed caching commands (`php artisan optimize`) for maximum performance.',
      '✓ Hardened server web root to `public/` and configured PHP-FPM.',
      '✓ Understood modern automated cloud deployment workflows.'
    ]
  },
  {
    id: 'w15-slide7',
    slideNum: 7,
    totalSlides: 11,
    type: 'section_break',
    sectionNum: 'Week 15 Summary',
    title: 'Test Your Deployment & Security Knowledge',
    description: 'You have completed the Week 15 lecture deck and hands-on code examples. Return to the lesson library or review the slide outline.'
  }
];

// ============================================================================
// WEEK 16: REAL-WORLD PROJECT DEVELOPMENT
// ============================================================================
export const webdev3Week16Slides: SlideData[] = [
  {
    id: 'w16-slide1',
    slideNum: 1,
    totalSlides: 12,
    type: 'cover',
    moduleTag: 'Week 16 • Web Dev 3',
    title: 'Real-World Project Development',
    subtitle: 'Synthesize your skills into an end-to-end full-stack capstone project: architecture, code quality, and final delivery.'
  },
  {
    id: 'w16-slide2',
    slideNum: 2,
    totalSlides: 12,
    type: 'single_topic',
    moduleTag: 'Module 1: Capstone Planning',
    title: 'The Full-Stack Software Lifecycle',
    topicTitle: 'From Blank Directory to Production Delivery',
    whatItDoes: 'Guides you through planning, architecting, and building a complete Laravel application.',
    whatIsGoingOn: 'Great software starts with database schema planning, user story mapping, and wireframing before writing code.',
    bullets: [
      'Phase 1: Requirements Gathering & User Stories (Who are the users? What can they do?).',
      'Phase 2: Database ERD Modeling (Tables, Foreign Keys, Indexes, Relations).',
      'Phase 3: Route & Controller Architecture (REST conventions, API endpoints, Blade components).',
      'Phase 4: Security & Validation (CSRF, Form Requests, Policies, Rate Limiting).',
      'Phase 5: Automated Testing & Cloud Deployment.'
    ],
    layman: {
      title: 'Architect\'s Blueprint',
      text: 'You would never start building a house by laying bricks without an architectural blueprint. Spending 1 hour on your database ERD saves 10 hours of refactoring later.'
    }
  },
  {
    id: 'w16-slide3',
    slideNum: 3,
    totalSlides: 12,
    type: 'single_topic',
    moduleTag: 'Module 1: Database Modeling',
    title: 'Database ERD & Relationship Design',
    topicTitle: 'Establishing Solid Relational Foundations',
    whatItDoes: 'Maps out tables, foreign keys, and relationships cleanly.',
    whatIsGoingOn: 'Planning relationships (1-to-1, 1-to-Many, Many-to-Many with pivot tables) prevents data duplication and migration headaches.',
    bullets: [
      'Users Table: Handles authentication, roles, and profiles.',
      'Resource Tables: Business entities (Products, Orders, Posts, Lessons).',
      'Pivot Tables: For Many-to-Many associations (e.g. `course_user`, `post_tag`).',
      'Database Seeders: Use Model Factories to populate realistic test data with `php artisan db:seed`.'
    ],
    code: `// database/seeders/DatabaseSeeder.php
public function run(): void
{
    // Create admin user
    User::factory()->create([
        'name' => 'Admin User',
        'email' => 'admin@webdev3.edu',
        'is_admin' => true,
    ]);

    // Create 20 sample users each with 5 posts
    User::factory(20)->hasPosts(5)->create();
}`,
    keyInsight: {
      title: 'Instant Realistic Data',
      text: 'With seeders, your entire team and evaluation panel can test the application with realistic data immediately by running `php artisan migrate:fresh --seed`.'
    }
  },
  {
    id: 'w16-slide4',
    slideNum: 4,
    totalSlides: 12,
    type: 'single_topic',
    moduleTag: 'Module 2: Code Quality',
    title: 'Professional Code Quality: Pint & Static Analysis',
    topicTitle: 'Writing Clean, Maintainable, and Standardized Code',
    whatItDoes: 'Enforces code style and catches subtle bugs before runtime.',
    whatIsGoingOn: 'Laravel Pint formats your code according to PHP-CS-Fixer standards. PHPStan/Larastan analyzes types and method calls.',
    bullets: [
      'Laravel Pint: Zero-config code style linter built into Laravel: `vendor/bin/pint`.',
      'Formats indentation, spacing, and strict types automatically.',
      'Static Analysis (Larastan): Detects undefined variables, type mismatches, and dead code.',
      'Git Pre-Commit Hooks: Run automated linters before permitting code commits.'
    ],
    code: `// Run Laravel Pint to auto-format entire project:
./vendor/bin/pint

// Test code quality without modifying files:
./vendor/bin/pint --test`,
    layman: {
      title: 'The Automatic Polisher',
      text: 'Laravel Pint is like an automated editor that fixes all your punctuation, formatting, and indentation instantly.'
    }
  },
  {
    id: 'w16-slide5',
    slideNum: 5,
    totalSlides: 12,
    type: 'single_topic',
    moduleTag: 'Module 3: Project Checklist',
    title: 'The Capstone Production Checklist',
    topicTitle: 'Verifying Every Component Before Your Final Defense',
    whatItDoes: 'Provides an exhaustive rubric for validating your full-stack application.',
    whatIsGoingOn: 'A production-grade web application must demonstrate mastery across routing, security, database modeling, and user feedback.',
    bullets: [
      '✓ Authentication: Secure login, registration, password hashing, and logout.',
      '✓ Authorization: Model Policies preventing unauthorized edits and deletions.',
      '✓ CRUD: Full Create, Read, Update, Delete with Eloquent ORM.',
      '✓ Validation: Form Requests with user-friendly error messages and old input.',
      '✓ UI / UX: Clean responsive Blade templates or API responses.',
      '✓ Testing: Automated Feature tests verifying key business user journeys.',
      '✓ Performance: Eager loading applied to avoid N+1 queries.'
    ]
  },
  {
    id: 'w16-slide6',
    slideNum: 6,
    totalSlides: 12,
    type: 'single_topic',
    moduleTag: 'Module 4: Final Wrap-up',
    title: 'Congratulations, Web Artisan!',
    topicTitle: 'You Have Completed Web Development 3: Laravel',
    whatItDoes: 'Celebrates your mastery of modern PHP and the Laravel framework.',
    whatIsGoingOn: 'You are now equipped with the same skills, patterns, and tools used by top technology companies worldwide.',
    bullets: [
      'Mastered the full request lifecycle from routing to controllers and Blade.',
      'Harnessed Eloquent ORM for scalable, secure database persistence.',
      'Protected applications with robust middleware, validation, CSRF, and policies.',
      'Engineered RESTful APIs with Sanctum tokens and automated test suites.',
      'Ready to build and deploy high-impact software for the world.'
    ],
    keyInsight: {
      title: 'Keep Building',
      text: 'The best way to solidify your mastery is to build real projects that solve problems for yourself, your campus, and your community.'
    }
  },
  {
    id: 'w16-slide7',
    slideNum: 7,
    totalSlides: 12,
    type: 'section_break',
    sectionNum: 'Course Completed',
    title: 'Full Course Completed!',
    description: 'Congratulations! You have completed all 13 modules of the comprehensive Web Dev 3 curriculum covering full-stack Laravel engineering.'
  }
];

// ============================================================================
// MASTER SLIDES REGISTRY
// ============================================================================
export const webdev3SlidesRegistry: Record<string, SlideData[]> = {
  'webdev3-w1': webdev3Week1Slides,
  'webdev3-w2': webdev3Week2Slides,
  'webdev3-w3': webdev3Week3Slides,
  'webdev3-w4': webdev3Week4Slides,
  'webdev3-w6': webdev3Week6Slides,
  'webdev3-w7': webdev3Week7Slides,
  'webdev3-w8': webdev3Week8Slides,
  'webdev3-w10': webdev3Week10Slides,
  'webdev3-w11': webdev3Week11Slides,
  'webdev3-w12': webdev3Week12Slides,
  'webdev3-w14': webdev3Week14Slides,
  'webdev3-w15': webdev3Week15Slides,
  'webdev3-w16': webdev3Week16Slides,
};

export const getWebDev3Slides = (lessonId: string): SlideData[] | null => {
  return webdev3SlidesRegistry[lessonId] || null;
};
