export interface QuizQuestion {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

export const webdev3QuizMap: Record<string, QuizQuestion[]> = {
  // ==========================================================================
  // WEEK 1: INTRODUCTION TO LARAVEL
  // ==========================================================================
  'webdev3-w1': [
    {
      question: "What is the minimum PHP version required to run modern Laravel applications?",
      options: [
        "PHP 7.4",
        "PHP 8.0",
        "PHP 8.1",
        "PHP 8.2"
      ],
      answer: 3,
      explanation: "Modern Laravel requires at least PHP 8.2 (and fully supports PHP 8.3+), leveraging modern features like readonly classes, typed constants, and match expressions."
    },
    {
      question: "Where is the central application configuration for routing and middleware unified in modern Laravel?",
      options: [
        "app/Http/Kernel.php",
        "bootstrap/app.php",
        "config/app.php",
        "app/Providers/RouteServiceProvider.php"
      ],
      answer: 1,
      explanation: "Laravel unified application bootstrapping into `bootstrap/app.php` using a fluent Application::configure() builder, eliminating Http/Kernel.php and RouteServiceProvider."
    },
    {
      question: "Which database connection is configured as the default out-of-the-box in brand-new Laravel projects?",
      options: [
        "MySQL",
        "PostgreSQL",
        "SQLite",
        "In-Memory Redis"
      ],
      answer: 2,
      explanation: "Laravel defaults to zero-configuration SQLite out-of-the-box, allowing instant local development without installing or configuring external database servers."
    },
    {
      question: "Which Artisan command launches the lightweight local PHP development server?",
      options: [
        "php artisan start",
        "php artisan serve",
        "php artisan run",
        "php artisan dev"
      ],
      answer: 1,
      explanation: "`php artisan serve` boots the built-in PHP web server at http://127.0.0.1:8000."
    },
    {
      question: "Why should the `.env` file never be committed to a public Git repository?",
      options: [
        "It prevents Laravel from compiling Blade views.",
        "It contains sensitive secrets, database credentials, and cryptographic encryption keys.",
        "Git cannot parse files starting with a dot.",
        "It slows down Composer dependency resolution."
      ],
      answer: 1,
      explanation: "The `.env` file holds local machine credentials, database passwords, and the application encryption key (APP_KEY). Committing it exposes sensitive credentials to the public."
    }
  ],

  // ==========================================================================
  // WEEK 2: LARAVEL ROUTING
  // ==========================================================================
  'webdev3-w2': [
    {
      question: "Where are standard web routes defined in a Laravel project?",
      options: [
        "routes/api.php",
        "routes/web.php",
        "routes/console.php",
        "app/Http/Routes.php"
      ],
      answer: 1,
      explanation: "`routes/web.php` handles browser web requests and automatically assigns session state and CSRF protection."
    },
    {
      question: "How do you define an optional parameter in a Laravel route URI?",
      options: [
        "Route::get('/user/{name?}', ...)",
        "Route::get('/user/[name]', ...)",
        "Route::get('/user/:name?', ...)",
        "Route::get('/user/{?name}', ...)"
      ],
      answer: 0,
      explanation: "Placing a question mark after the parameter name (`{name?}`) indicates the parameter is optional, paired with a default closure argument."
    },
    {
      question: "Which method restricts a route parameter to digits only?",
      options: [
        "->whereAlpha('id')",
        "->whereDigits('id')",
        "->whereNumber('id')",
        "->isNumeric('id')"
      ],
      answer: 2,
      explanation: "`->whereNumber('id')` ensures the parameter contains only numeric digits (^[0-9]+$)."
    },
    {
      question: "What is the primary benefit of using named routes with the `route()` helper?",
      options: [
        "It makes database queries run faster.",
        "It decouples URLs from your views and controllers, preventing broken links when URLs are refactored.",
        "It encrypts the URL parameters in browser history.",
        "It bypasses middleware execution."
      ],
      answer: 1,
      explanation: "Named routes allow you to change the URI path in `routes/web.php` anytime without breaking any views or redirects that generate URLs via `route('name')`."
    },
    {
      question: "Which command compiles all registered routes into a single cached file for maximum production performance?",
      options: [
        "php artisan route:list",
        "php artisan route:cache",
        "php artisan route:compile",
        "php artisan route:optimize"
      ],
      answer: 1,
      explanation: "`php artisan route:cache` compiles all routes into a cached array, speeding up route registration dramatically in production."
    }
  ],

  // ==========================================================================
  // WEEK 3: MIDDLEWARE IN LARAVEL
  // ==========================================================================
  'webdev3-w3': [
    {
      question: "What architectural pattern best describes how middleware processes incoming requests in Laravel?",
      options: [
        "Monolithic Pipeline",
        "Onion Architecture",
        "Model-View-Presenter",
        "Event Sourcing"
      ],
      answer: 1,
      explanation: "Middleware acts like layers of an onion: requests pass inward through each middleware layer to the controller, and the response passes back outward."
    },
    {
      question: "In a custom middleware class, what must you call to pass the request to the next handler in the pipeline?",
      options: [
        "$this->proceed($request)",
        "$next($request)",
        "pipeline_next($request)",
        "return $request->continue()"
      ],
      answer: 1,
      explanation: "Calling `$next($request)` delegates execution to the next middleware or controller in the pipeline."
    },
    {
      question: "Where are custom middleware route aliases registered in modern Laravel?",
      options: [
        "app/Http/Kernel.php",
        "bootstrap/app.php inside withMiddleware()",
        "config/middleware.php",
        "routes/web.php"
      ],
      answer: 1,
      explanation: "In modern Laravel, custom middleware aliases are fluently registered inside `bootstrap/app.php` using `$middleware->alias([...])`."
    },
    {
      question: "Which built-in middleware protects authentication endpoints from brute-force dictionary attacks?",
      options: [
        "authenticate",
        "throttle",
        "encrypt_cookies",
        "trim_strings"
      ],
      answer: 1,
      explanation: "The `throttle` middleware enforces rate limiting (e.g. `throttle:5,1` limits requests to 5 per minute), blocking automated attacks."
    },
    {
      question: "What HTTP status code is returned if a client exceeds their rate limit?",
      options: [
        "HTTP 400 Bad Request",
        "HTTP 401 Unauthorized",
        "HTTP 403 Forbidden",
        "HTTP 429 Too Many Requests"
      ],
      answer: 3,
      explanation: "HTTP 429 Too Many Requests is the standard status code returned when rate limits are exceeded."
    }
  ],

  // ==========================================================================
  // WEEK 4: CONTROLLERS AND VIEWS
  // ==========================================================================
  'webdev3-w4': [
    {
      question: "What Artisan command generates a resourceful controller containing all 7 standard REST methods?",
      options: [
        "php artisan make:controller PostController --full",
        "php artisan make:controller PostController --resource",
        "php artisan make:controller PostController --crud",
        "php artisan make:controller PostController --rest"
      ],
      answer: 1,
      explanation: "The `--resource` flag scaffolds the standard 7 REST methods: index, create, store, show, edit, update, and destroy."
    },
    {
      question: "Which Blade syntax automatically escapes HTML characters using `htmlspecialchars()` to protect against XSS?",
      options: [
        "{!! $variable !!}",
        "{{ $variable }}",
        "<% $variable %>",
        "[@ $variable @]"
      ],
      answer: 1,
      explanation: "`{{ $variable }}` automatically escapes HTML output to protect against Cross-Site Scripting (XSS). `{!! $variable !!}` renders unescaped raw HTML."
    },
    {
      question: "Which Blade directive combines a foreach loop with a fallback block when a collection is empty?",
      options: [
        "@loop ... @none",
        "@foreach ... @empty ... @endforeach",
        "@forelse ... @empty ... @endforelse",
        "@iterate ... @empty ... @enditerate"
      ],
      answer: 2,
      explanation: "`@forelse` executes a loop over an array, but if the collection has zero items, it automatically renders the `@empty` block."
    },
    {
      question: "How do you invoke a Blade component located at `resources/views/components/card.blade.php`?",
      options: [
        "<blade:card></blade:card>",
        "<x-card></x-card>",
        "@includeComponent('card')",
        "<component name='card'></component>"
      ],
      answer: 1,
      explanation: "Modern Blade components use custom HTML tags prefixed with `x-`, such as `<x-card></x-card>`."
    },
    {
      question: "Where is default child content placed inside a Blade component template?",
      options: [
        "{{ $content }}",
        "{{ $children }}",
        "{{ $slot }}",
        "{{ $body }}"
      ],
      answer: 2,
      explanation: "Content placed inside component tags is injected into the default `{{ $slot }}` variable."
    }
  ],

  // ==========================================================================
  // WEEK 6: ELOQUENT ORM BASICS
  // ==========================================================================
  'webdev3-w6': [
    {
      question: "What design pattern does Laravel's Eloquent ORM implement?",
      options: [
        "Data Mapper",
        "ActiveRecord",
        "Repository Pattern",
        "Unit of Work"
      ],
      answer: 1,
      explanation: "Eloquent implements the ActiveRecord pattern, where each model class represents a database table and an instance represents a table row."
    },
    {
      question: "By convention, what database table name will Eloquent automatically map to a model named `Flight`?",
      options: [
        "flight",
        "tbl_flight",
        "flights",
        "flight_records"
      ],
      answer: 2,
      explanation: "Eloquent expects the plural, snake_case version of the model class name (`Flight` -> `flights`)."
    },
    {
      question: "What model property must be defined to protect against mass assignment vulnerabilities when calling `Model::create()`?",
      options: [
        "protected $guardedKeys",
        "protected $fillable",
        "protected $allowedColumns",
        "protected $whiteList"
      ],
      answer: 1,
      explanation: "The `$fillable` array whitelists the exact attributes that can be mass-assigned via `create()` or `update()`."
    },
    {
      question: "What method retrieves a single record by primary key and throws an automatic 404 response if not found?",
      options: [
        "Model::findOrExit($id)",
        "Model::findOrFail($id)",
        "Model::mustFind($id)",
        "Model::getOrFail($id)"
      ],
      answer: 1,
      explanation: "`findOrFail($id)` retrieves the model or automatically throws a `ModelNotFoundException`, which Laravel renders as a 404."
    },
    {
      question: "Which relationship method defines the inverse of a `hasMany` relationship?",
      options: [
        "hasOne()",
        "belongsTo()",
        "parentOf()",
        "references()"
      ],
      answer: 1,
      explanation: "If a User `hasMany(Post::class)`, then each Post `belongsTo(User::class)`."
    }
  ],

  // ==========================================================================
  // WEEK 7: ADVANCED ELOQUENT ORM
  // ==========================================================================
  'webdev3-w7': [
    {
      question: "How do you prefix a method in an Eloquent model to declare a local query scope?",
      options: [
        "filterPublished()",
        "queryPublished()",
        "scopePublished()",
        "wherePublished()"
      ],
      answer: 2,
      explanation: "Prefixing a model method with `scope` (e.g. `scopePublished($query)`) registers it as a chainable query builder macro (`Post::published()->get()`)."
    },
    {
      question: "What is the primary danger of the 'N+1 Query Problem' in web applications?",
      options: [
        "It causes database tables to corrupt during write operations.",
        "It fires separate database queries for every item inside a loop, drastically degrading server performance.",
        "It bypasses model validation rules.",
        "It exposes database passwords to clients."
      ],
      answer: 1,
      explanation: "Lazy-loading relations inside a loop fires 1 query for the parent records plus N queries for each child record, causing severe response latency."
    },
    {
      question: "Which Eloquent method prevents the N+1 problem through eager loading?",
      options: [
        "Post::include('author')->get()",
        "Post::with('author')->get()",
        "Post::loadEager('author')->get()",
        "Post::joinRelation('author')->get()"
      ],
      answer: 1,
      explanation: "`Post::with('author')->get()` eager loads all related records in just 2 optimized SQL queries."
    },
    {
      question: "Which Artisan command scaffolds a dedicated Observer class to listen to model lifecycle events?",
      options: [
        "php artisan make:listener PostListener",
        "php artisan make:observer PostObserver --model=Post",
        "php artisan make:event PostObserver",
        "php artisan make:hook PostHook"
      ],
      answer: 1,
      explanation: "`php artisan make:observer PostObserver --model=Post` creates an observer with lifecycle hooks (creating, updating, deleting)."
    },
    {
      question: "What database column does Eloquent check when using the `SoftDeletes` trait?",
      options: [
        "is_deleted",
        "deleted_at",
        "archived_date",
        "trash_timestamp"
      ],
      answer: 1,
      explanation: "`SoftDeletes` records a timestamp in `deleted_at`. Non-null records are treated as deleted."
    }
  ],

  // ==========================================================================
  // WEEK 8: FORM HANDLING AND VALIDATION
  // ==========================================================================
  'webdev3-w8': [
    {
      question: "What HTTP status code is returned if a web form fails CSRF token verification?",
      options: [
        "HTTP 401 Unauthorized",
        "HTTP 403 Forbidden",
        "HTTP 419 Page Expired",
        "HTTP 500 Internal Error"
      ],
      answer: 2,
      explanation: "Laravel returns HTTP 419 Page Expired when a POST form submission lacks a valid CSRF token."
    },
    {
      question: "Which Blade directive is required inside every POST web form to generate the CSRF hidden token?",
      options: [
        "@token",
        "@csrf",
        "@secure",
        "@verify"
      ],
      answer: 1,
      explanation: "`@csrf` generates a hidden `<input type=\"hidden\" name=\"_token\" value=\"...\">` field containing the session CSRF token."
    },
    {
      question: "Which helper function repopulates previously submitted form text after a validation error?",
      options: [
        "previous('email')",
        "last('email')",
        "old('email')",
        "draft('email')"
      ],
      answer: 2,
      explanation: "`old('email')` retrieves the flashed input from the previous request so users don't lose typed text."
    },
    {
      question: "Which validation rule ensures that an email address is not already taken in the `users` table?",
      options: [
        "distinct:users,email",
        "unique:users,email",
        "isolated:users,email",
        "single:users,email"
      ],
      answer: 1,
      explanation: "`unique:users,email` checks the database to verify the submitted value does not already exist."
    },
    {
      question: "What Artisan command generates a dedicated Form Request class?",
      options: [
        "php artisan make:form PostForm",
        "php artisan make:request StorePostRequest",
        "php artisan make:validator PostValidator",
        "php artisan make:rule StorePostRule"
      ],
      answer: 1,
      explanation: "`php artisan make:request StorePostRequest` creates a Form Request class with `authorize()` and `rules()` methods."
    }
  ],

  // ==========================================================================
  // WEEK 10: AUTHENTICATION AND AUTHORIZATION
  // ==========================================================================
  'webdev3-w10': [
    {
      question: "What is the key difference between Authentication and Authorization?",
      options: [
        "Authentication is for APIs; Authorization is for web forms.",
        "Authentication verifies user identity (Who are you?); Authorization checks permissions (What are you allowed to do?).",
        "Authentication encrypts passwords; Authorization stores session cookies.",
        "There is no difference; they are interchangeable terms."
      ],
      answer: 1,
      explanation: "Authentication proves user identity (login). Authorization governs permissions (accessing admin panels, editing specific posts)."
    },
    {
      question: "Which method on the `Auth` facade attempts to authenticate a user with credentials and a session?",
      options: [
        "Auth::login($credentials)",
        "Auth::verify($credentials)",
        "Auth::attempt($credentials)",
        "Auth::authenticate($credentials)"
      ],
      answer: 2,
      explanation: "`Auth::attempt(['email' => $email, 'password' => $password])` checks credentials and creates an authenticated session."
    },
    {
      question: "Where are simple closure-based authorization Gates typically defined in Laravel?",
      options: [
        "routes/web.php",
        "AppServiceProvider::boot()",
        "bootstrap/app.php",
        "config/auth.php"
      ],
      answer: 1,
      explanation: "Gates are typically defined inside the `boot()` method of `AppServiceProvider` using `Gate::define('name', ...) `."
    },
    {
      question: "Which Artisan command creates a Policy class linked to the `Post` model?",
      options: [
        "php artisan make:permission PostPermission",
        "php artisan make:policy PostPolicy --model=Post",
        "php artisan make:gate PostGate",
        "php artisan make:guard PostGuard"
      ],
      answer: 1,
      explanation: "`php artisan make:policy PostPolicy --model=Post` creates a policy with methods for view, create, update, and delete."
    },
    {
      question: "Which Blade directive conditionally displays HTML only if the user has permission according to a Policy or Gate?",
      options: [
        "@ifAuth('update', $post)",
        "@can('update', $post) ... @endcan",
        "@hasPermission('update')",
        "@allow('update')"
      ],
      answer: 1,
      explanation: "The `@can` directive checks authorization against registered Policies and Gates."
    }
  ],

  // ==========================================================================
  // WEEK 11: RESTFUL API DEVELOPMENT
  // ==========================================================================
  'webdev3-w11': [
    {
      question: "Which HTTP status code signifies that a new resource was successfully created via a POST request?",
      options: [
        "HTTP 200 OK",
        "HTTP 201 Created",
        "HTTP 204 No Content",
        "HTTP 302 Found"
      ],
      answer: 1,
      explanation: "HTTP 201 Created is the standard REST status code returned after successfully creating a resource."
    },
    {
      question: "What route method registers standard API endpoints without HTML form actions (`create` and `edit`)?",
      options: [
        "Route::resource()",
        "Route::apiResource()",
        "Route::restResource()",
        "Route::statelessResource()"
      ],
      answer: 1,
      explanation: "`Route::apiResource('products', ProductController::class)` registers only index, store, show, update, and destroy."
    },
    {
      question: "What is the primary purpose of an Eloquent API Resource class?",
      options: [
        "To run database migrations automatically.",
        "To act as a transformation layer between Eloquent models and public JSON responses.",
        "To encrypt database passwords in storage.",
        "To replace PHP PDO drivers."
      ],
      answer: 1,
      explanation: "API Resources format model attributes into standardized JSON, preventing internal database column leakage."
    },
    {
      question: "Which official first-party package provides featherweight token authentication for SPAs and mobile apps in Laravel?",
      options: [
        "Laravel Passport",
        "Laravel Sanctum",
        "Laravel Fortify",
        "Laravel Socialite"
      ],
      answer: 1,
      explanation: "Laravel Sanctum provides a lightweight, token-based authentication system for SPAs, mobile apps, and simple API tokens."
    },
    {
      question: "In which HTTP header should a client pass their Sanctum personal access token?",
      options: [
        "X-API-Token: <token>",
        "Authorization: Bearer <token>",
        "Authentication: Token <token>",
        "Content-Security: <token>"
      ],
      answer: 1,
      explanation: "Sanctum expects tokens formatted as standard Bearer tokens in the `Authorization: Bearer <token>` header."
    }
  ],

  // ==========================================================================
  // WEEK 12: TESTING IN LARAVEL
  // ==========================================================================
  'webdev3-w12': [
    {
      question: "What Artisan command executes the test suite in a Laravel application?",
      options: [
        "php artisan run:tests",
        "php artisan test",
        "php artisan execute",
        "php artisan verify"
      ],
      answer: 1,
      explanation: "`php artisan test` runs your automated test suite using Pest PHP or PHPUnit."
    },
    {
      question: "What is the key difference between Unit Tests and Feature Tests?",
      options: [
        "Unit tests are written in JavaScript; Feature tests are written in PHP.",
        "Unit tests evaluate small isolated functions without boots; Feature tests simulate full HTTP requests and database interactions.",
        "Unit tests only run in production; Feature tests only run locally.",
        "Unit tests check CSS styles; Feature tests check database speed."
      ],
      answer: 1,
      explanation: "Unit tests focus on isolated algorithms; Feature tests exercise the full request lifecycle, routing, middleware, and database."
    },
    {
      question: "Which trait resets and migrates the database schema before each test run to ensure total test isolation?",
      options: [
        "use CleanDatabase;",
        "use ResetDatabase;",
        "use RefreshDatabase;",
        "use WipeDatabase;"
      ],
      answer: 2,
      explanation: "The `RefreshDatabase` trait migrates the test database and wraps each test in a database transaction that rolls back upon completion."
    },
    {
      question: "Which helper simulates an authenticated user making a request in an automated feature test?",
      options: [
        "$this->loginAs($user)",
        "$this->actingAs($user)",
        "$this->authenticate($user)",
        "$this->setUser($user)"
      ],
      answer: 1,
      explanation: "`$this->actingAs($user)` sets the user as the authenticated actor for subsequent simulated HTTP requests."
    },
    {
      question: "Which assertion checks that a specific record was persisted to a database table during a test?",
      options: [
        "$this->assertTableContains('posts', [...])",
        "$this->assertDatabaseHas('posts', [...])",
        "$this->assertModelSaved('posts', [...])",
        "$this->assertDatabaseExists('posts', [...])"
      ],
      answer: 1,
      explanation: "`$this->assertDatabaseHas('table', ['column' => 'value'])` asserts that a table contains a matching record."
    }
  ],

  // ==========================================================================
  // WEEK 14: INTEGRATING THIRD-PARTY SERVICES
  // ==========================================================================
  'webdev3-w14': [
    {
      question: "Which Laravel facade provides an expressive, fluent interface for making outbound HTTP calls?",
      options: [
        "Illuminate\\Support\\Facades\\Curl",
        "Illuminate\\Support\\Facades\\Http",
        "Illuminate\\Support\\Facades\\Request",
        "Illuminate\\Support\\Facades\\Client"
      ],
      answer: 1,
      explanation: "The `Http` facade wraps the Guzzle client with an expressive, clean syntax for GET, POST, PUT, and DELETE requests."
    },
    {
      question: "How do you automatically retry a failed outbound HTTP request up to 3 times with a 100ms delay?",
      options: [
        "Http::attempt(3, 100)->get(...)",
        "Http::retry(3, 100)->get(...)",
        "Http::repeat(3, 100)->get(...)",
        "Http::reconnect(3, 100)->get(...)"
      ],
      answer: 1,
      explanation: "`Http::retry(3, 100)->get(...)` automatically retries requests on connection failures or 5xx server errors."
    },
    {
      question: "Which method prevents real network requests from firing during automated testing by mocking responses?",
      options: [
        "Http::mock()",
        "Http::fake()",
        "Http::stub()",
        "Http::dummy()"
      ],
      answer: 1,
      explanation: "`Http::fake([...])` instructs the HTTP client to return predetermined mock responses without making real network calls."
    },
    {
      question: "Where should third-party credentials and API keys be configured in Laravel?",
      options: [
        "Directly in controller files.",
        "Stored in `.env` and mapped inside `config/services.php`.",
        "Saved in `public/credentials.json`.",
        "Hardcoded into route closures."
      ],
      answer: 1,
      explanation: "Secrets are kept in `.env` and mapped through `config/services.php` so they can be retrieved cleanly via `config('services.name.key')`."
    },
    {
      question: "Why should you never call `env()` directly inside your controllers when deploying to production?",
      options: [
        "Because `env()` calls are slow.",
        "Because `php artisan config:cache` turns off dynamic `.env` reading, causing `env()` to return null.",
        "Because `env()` modifies the file permissions.",
        "Because `env()` only works in Blade views."
      ],
      answer: 1,
      explanation: "Once configuration is cached in production with `config:cache`, `.env` is no longer loaded. All values must be retrieved via `config()`."
    }
  ],

  // ==========================================================================
  // WEEK 15: DEPLOYMENT AND SECURITY BEST PRACTICES
  // ==========================================================================
  'webdev3-w15': [
    {
      question: "What must `APP_DEBUG` be set to in a production environment?",
      options: [
        "true",
        "false",
        "verbose",
        "silent"
      ],
      answer: 1,
      explanation: "`APP_DEBUG` MUST be set to `false` in production to prevent leaking sensitive credentials and database stack traces to visitors."
    },
    {
      question: "Which Artisan command caches configuration, routes, and events in a single step for maximum performance?",
      options: [
        "php artisan speedup",
        "php artisan optimize",
        "php artisan compile:all",
        "php artisan prod:ready"
      ],
      answer: 1,
      explanation: "`php artisan optimize` caches configuration and routes in one convenient command."
    },
    {
      question: "To which directory must your production web server (Nginx/Apache) document root point?",
      options: [
        "The project root directory (`/var/www/my-app`)",
        "The `app/` directory (`/var/www/my-app/app`)",
        "The `public/` directory (`/var/www/my-app/public`)",
        "The `resources/` directory (`/var/www/my-app/resources`)"
      ],
      answer: 2,
      explanation: "The web server MUST point strictly to `public/`. Pointing to root exposes `.env`, database files, and private code to the public web!"
    },
    {
      question: "Why is the `--force` flag needed when running `php artisan migrate` in production scripts?",
      options: [
        "It overrides SQLite file locks.",
        "It suppresses the interactive confirmation prompt required in production environments.",
        "It forces tables to drop before rebuilding.",
        "It skips foreign key checks."
      ],
      answer: 1,
      explanation: "In production (`APP_ENV=production`), Artisan asks 'Are you sure you want to run this command?'. Adding `--force` bypasses the prompt for automated CI/CD."
    },
    {
      question: "Which official first-party Laravel tool automates server provisioning and push-to-deploy on clouds like AWS and DigitalOcean?",
      options: [
        "Laravel Homestead",
        "Laravel Forge",
        "Laravel Sail",
        "Laravel Herd"
      ],
      answer: 1,
      explanation: "Laravel Forge provisions servers, configures Nginx, PHP-FPM, MySQL, SSL certificates, and handles push-to-deploy git integrations."
    }
  ],

  // ==========================================================================
  // WEEK 16: REAL-WORLD PROJECT DEVELOPMENT
  // ==========================================================================
  'webdev3-w16': [
    {
      question: "What is the recommended first step before writing any code in a full-stack project?",
      options: [
        "Writing CSS styles.",
        "Requirements gathering, user story mapping, and database ERD design.",
        "Deploying an empty server to AWS.",
        "Scaffolding 50 controllers."
      ],
      answer: 1,
      explanation: "Planning data models, entity relationships, and core user journeys beforehand prevents costly architectural rewrites later."
    },
    {
      question: "Which built-in zero-config tool formats your PHP code to modern community standards?",
      options: [
        "Laravel Prettier",
        "Laravel Pint",
        "Laravel Clean",
        "Laravel Format"
      ],
      answer: 1,
      explanation: "Laravel Pint is an opinionated PHP code style fixer built directly into Laravel based on PHP-CS-Fixer."
    },
    {
      question: "How do you run database migrations and seeders simultaneously in one command?",
      options: [
        "php artisan migrate --seed",
        "php artisan migrate:with-seeders",
        "php artisan db:rebuild",
        "php artisan setup:all"
      ],
      answer: 0,
      explanation: "`php artisan migrate --seed` (or `migrate:fresh --seed`) executes all migrations and runs DatabaseSeeder."
    },
    {
      question: "Which tool performs static type analysis on Laravel code to catch bugs before execution?",
      options: [
        "Larastan (PHPStan for Laravel)",
        "PHP Linter",
        "Babel PHP",
        "ESLint"
      ],
      answer: 0,
      explanation: "Larastan is an extension of PHPStan for Laravel that detects type errors, missing methods, and incorrect query calls without running the code."
    },
    {
      question: "What constitutes the core definition of a 'Full-Stack' Laravel project?",
      options: [
        "HTML and CSS files only.",
        "A complete application integrating a database, Eloquent models, validation, authentication, authorization, routes/controllers, and views/APIs.",
        "A website with 100 pages.",
        "An application with only third-party JavaScript libraries."
      ],
      answer: 1,
      explanation: "Full-stack development encompasses the entire lifecycle: database architecture, backend business logic, validation, security, and responsive presentation."
    }
  ]
};

export const getWebDev3QuizQuestions = (lessonId: string): QuizQuestion[] | null => {
  return webdev3QuizMap[lessonId] || null;
};
