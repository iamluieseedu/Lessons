'use client';

import React, { useState } from 'react';
import { 
  Terminal, 
  Play, 
  RotateCcw, 
  Check, 
  Copy, 
  Layers, 
  FolderTree, 
  Database, 
  ShieldCheck, 
  Code2, 
  Cpu, 
  ExternalLink, 
  Sparkles, 
  FileCode, 
  CheckCircle2, 
  AlertTriangle, 
  Server, 
  Globe, 
  ArrowRight, 
  Box, 
  Eye, 
  Sliders, 
  ListFilter,
  Users,
  Target
} from 'lucide-react';

// ============================================================================
// 1. INTERACTIVE ARTISAN TERMINAL SIMULATOR
// ============================================================================
export const LaravelTerminalSimulator: React.FC = () => {
  const [activeCommand, setActiveCommand] = useState<string>('php artisan serve');
  const [copied, setCopied] = useState(false);

  const commandOutputs: Record<string, { cmd: string; output: string; desc: string }> = {
    'php artisan serve': {
      cmd: 'php artisan serve',
      desc: 'Starts the local PHP development server on localhost:8000',
      output: `  INFO  Server running on [http://127.0.0.1:8000].\n\n  Press Ctrl+C to stop the server\n\n  2026-09-09 09:30:15 .................................................... ~ 12ms\n  2026-09-09 09:30:16 GET / .................................... 200 OK ~ 8.4ms\n  2026-09-09 09:30:18 GET /posts ............................... 200 OK ~ 14.1ms`
    },
    'laravel new blog': {
      cmd: 'laravel new blog',
      desc: 'Official Laravel Installer interactive setup wizard with starter kits and SQLite default',
      output: `   _                               _
  | |    __ _ _ __ __ ___   _____| |
  | |   / _\` | '__/ _\` \\ \\ / / _ \\ |
  | |__| (_| | | | (_| |\\ V /  __/ |
  |_____\\__,_|_|  \\__,_| \\_/ \\___|_|

  Which starter kit would you like to install?
  > Laravel Breeze (Blade with Alpine / Livewire / Vue / React)

  Which testing framework do you prefer?
  > Pest (Laravel 11 Default)

  Which database will your application use?
  > SQLite (Zero-config default in Laravel 11)

  ✓ Repository initialized.
  ✓ Application ready in ./blog! Build something amazing.`
    },
    'php artisan make:model Post -mcr': {
      cmd: 'php artisan make:model Post -mcr',
      desc: 'Generates Eloquent Model, Database Migration, and Resource Controller in one step',
      output: `  INFO  Model [app/Models/Post.php] created successfully.
  INFO  Migration [database/migrations/2026_09_09_000001_create_posts_table.php] created successfully.
  INFO  Controller [app/Http/Controllers/PostController.php] created successfully.`
    },
    'php artisan migrate': {
      cmd: 'php artisan migrate',
      desc: 'Executes all pending database migrations against database.sqlite',
      output: `  INFO  Preparing database.
  Creating database file [database/database.sqlite] ... DONE

  INFO  Running migrations.

  2026_09_09_000001_create_users_table ........................... 14.21ms DONE
  2026_09_09_000002_create_cache_table ........................... 6.84ms DONE
  2026_09_09_000003_create_jobs_table ............................ 8.12ms DONE
  2026_09_09_000004_create_posts_table ........................... 10.33ms DONE`
    },
    'php artisan route:list': {
      cmd: 'php artisan route:list',
      desc: 'Displays the unified route registry mapped via bootstrap/app.php and routes/web.php',
      output: `  GET|HEAD   / .................................................... home
  GET|HEAD   posts ............................ posts.index › PostController@index
  POST       posts ............................ posts.store › PostController@store
  GET|HEAD   posts/create ................... posts.create › PostController@create
  GET|HEAD   posts/{post} ....................... posts.show › PostController@show
  PUT|PATCH  posts/{post} ................... posts.update › PostController@update
  DELETE     posts/{post} ................. posts.destroy › PostController@destroy
  GET|HEAD   up ............................................................. `
    },
    'php artisan tinker': {
      cmd: 'php artisan tinker',
      desc: 'Launches PsySH REPL to interact with your application, Eloquent models, and DB live',
      output: `Psy Shell v0.12.4 (PHP 8.3.6 — cli) by Justin Hileman
> App\\Models\\Post::create(['title' => 'First Post', 'slug' => 'first-post', 'body' => 'Hello Laravel 11']);
= App\\Models\\Post {#6041
    title: "First Post",
    slug: "first-post",
    body: "Hello Laravel 11",
    updated_at: "2026-09-09 09:30:00",
    created_at: "2026-09-09 09:30:00",
    id: 1,
  }

> App\\Models\\Post::count();
= 1`
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(commandOutputs[activeCommand].cmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="w-full flex flex-col h-full bg-slate-950 text-slate-100 rounded-xl overflow-hidden border border-slate-800 shadow-2xl font-mono text-xs">
      {/* Terminal Title Bar */}
      <div className="bg-slate-900/90 px-3 py-2 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
          <span className="ml-2 text-[11px] text-slate-400 font-sans font-semibold flex items-center gap-1">
            <Terminal className="w-3.5 h-3.5 text-rose-500" /> artisan@laravel11: ~/blog
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="text-slate-400 hover:text-white px-2 py-0.5 rounded bg-slate-800 text-[10px] flex items-center gap-1 transition"
        >
          {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>

      {/* Preset Command Selector */}
      <div className="bg-slate-900/40 p-2 border-b border-slate-800/80 flex flex-wrap gap-1.5 font-sans">
        {Object.keys(commandOutputs).map((cmd) => (
          <button
            key={cmd}
            onClick={() => setActiveCommand(cmd)}
            className={`px-2 py-1 rounded text-[11px] font-medium transition ${
              activeCommand === cmd
                ? 'bg-rose-600 text-white shadow-sm font-semibold'
                : 'bg-slate-800/80 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
            }`}
          >
            {cmd.split(' ')[2] || cmd.split(' ')[1] || cmd}
          </button>
        ))}
      </div>

      {/* Terminal Output Area */}
      <div className="p-3.5 flex-grow overflow-y-auto space-y-2 select-text">
        <div className="flex items-center gap-2 text-rose-400">
          <span className="text-emerald-400 font-bold">➜</span>
          <span className="text-sky-400">blog</span>
          <span className="text-slate-400">(main)</span>
          <span className="text-white font-semibold">$ {commandOutputs[activeCommand].cmd}</span>
        </div>

        <p className="text-[11px] text-slate-400 italic font-sans mb-2">
          💡 {commandOutputs[activeCommand].desc}
        </p>

        <pre className="text-slate-300 whitespace-pre-wrap leading-relaxed bg-black/40 p-2.5 rounded-lg border border-slate-800/60">
          {commandOutputs[activeCommand].output}
        </pre>
      </div>

      {/* Terminal Status Footer */}
      <div className="bg-slate-900/60 px-3 py-1 text-[10px] text-slate-500 border-t border-slate-800/80 flex justify-between items-center font-sans">
        <span>Laravel Framework 11.x (PHP 8.3+)</span>
        <span className="text-emerald-400 font-medium">● Environment: local</span>
      </div>
    </div>
  );
};

// ============================================================================
// 2. LARAVEL 10 VS LARAVEL 11 ARCHITECTURE DIFF EXPLORER (FULLY CLICKABLE)
// ============================================================================
interface FileDetail {
  path: string;
  badge: string;
  badgeType: 'core' | 'removed' | 'sqlite' | 'routes' | 'config' | 'public';
  whatItDoes: string;
  whatIsGoingOn: string;
  codeSnippet: string;
  discussion: string;
  lang?: string;
}

const L11_FILES: Record<string, FileDetail> = {
  'bootstrap/app.php': {
    path: 'bootstrap/app.php',
    badge: '★ Core Application Hub in Laravel 11',
    badgeType: 'core',
    whatItDoes: 'Acts as the single unified control room configuring your entire application (routing, middleware, and exceptions).',
    whatIsGoingOn: 'Laravel 11 eliminated Http/Kernel.php and Console/Kernel.php. It uses a fluent Application::configure() builder pattern where you pass closures to configure web routes, middleware aliases, and exception reports in one clean file.',
    codeSnippet: `<?php

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
        // Register custom middleware aliases:
        $middleware->alias([
            'admin' => \\App\\Http\\Middleware\\EnsureAdmin::class,
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions) {
        // Custom exception handling
    })->create();`,
    discussion: 'Why is a single fluent builder easier to maintain for developers than jumping across Http/Kernel.php, Console/Kernel.php, and RouteServiceProvider?'
  },
  'app/Http/Controllers/': {
    path: 'app/Http/Controllers/',
    badge: '📁 Request Handlers & Business Logic',
    badgeType: 'core',
    whatItDoes: 'Houses your Controller classes that accept HTTP requests from routes, query Eloquent models, and return Blade views or JSON.',
    whatIsGoingOn: 'Controllers keep routes clean. By isolating request validation and view data mapping into dedicated classes, your code remains testable and organized.',
    codeSnippet: `namespace App\\Http\\Controllers;

use App\\Models\\Post;
use Illuminate\\View\\View;

class PostController extends Controller
{
    public function index(): View
    {
        $posts = Post::where('is_published', true)->latest()->paginate(10);
        return view('posts.index', ['posts' => $posts]);
    }
}`,
    discussion: 'What issues occur in large team projects if all database queries are written directly inside routes/web.php closures instead of controllers?'
  },
  'app/Models/': {
    path: 'app/Models/',
    badge: '📁 Eloquent Data Models',
    badgeType: 'core',
    whatItDoes: 'Maps database tables into interactive PHP classes. Each Model instance represents a row in the database.',
    whatIsGoingOn: 'Eloquent uses the Active Record pattern. In Laravel 11, attribute casting is now declared cleanly as a method: protected function casts(): array.',
    codeSnippet: `namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;

class Post extends Model
{
    protected $fillable = ['title', 'slug', 'body', 'is_published'];

    // New in Laravel 11: Method-based casts!
    protected function casts(): array
    {
        return [
            'is_published' => 'boolean',
            'published_at' => 'datetime',
        ];
    }
}`,
    discussion: 'Why does Laravel 11 recommend writing casts() as a method instead of a property array? (Hint: Allows static methods & parameters!)'
  },
  'app/Providers/AppServiceProvider.php': {
    path: 'app/Providers/AppServiceProvider.php',
    badge: '📄 Single Consolidated Provider',
    badgeType: 'core',
    whatItDoes: 'The single central place to bootstrap custom application services, Tailwind pagination themes, and model configurations.',
    whatIsGoingOn: 'In Laravel 10, developers had to manage 5 different providers. Laravel 11 consolidated all default bootstrapping into this single provider for ultimate simplicity.',
    codeSnippet: `namespace App\\Providers;

use Illuminate\\Support\\ServiceProvider;
use Illuminate\\Pagination\\Paginator;
use Illuminate\\Database\\Eloquent\\Model;

class AppServiceProvider extends ServiceProvider
{
    public function boot(): void
    {
        Paginator::useTailwind();
        Model::preventLazyLoading(!app()->isProduction());
    }
}`,
    discussion: 'How does reducing 5 service providers down to 1 provider speed up developer onboarding and eliminate cognitive overload?'
  },
  'database/database.sqlite': {
    path: 'database/database.sqlite',
    badge: '⚡ Zero-Config Default Database',
    badgeType: 'sqlite',
    whatItDoes: 'The default database file configured out-of-the-box in Laravel 11. Stores all tables, rows, and indexes directly on disk.',
    whatIsGoingOn: 'Laravel 11 sets DB_CONNECTION=sqlite in .env. Running php artisan migrate creates this file automatically with zero server configuration required!',
    codeSnippet: `# In .env:
DB_CONNECTION=sqlite
# DB_DATABASE=/absolute/path/to/database.sqlite

# Run your first migration immediately:
php artisan migrate
# Output: Creating database file [database/database.sqlite] ... DONE`,
    discussion: 'Why is zero-config SQLite ideal for prototypes, classroom teaching, and small SaaS apps compared to setting up a MySQL server daemon?'
  },
  'public/index.php': {
    path: 'public/index.php',
    badge: '🌐 Web Server Front Controller',
    badgeType: 'public',
    whatItDoes: 'The sole public entry point for all incoming web requests arriving through Nginx, Apache, or Laravel Herd.',
    whatIsGoingOn: 'Bootstraps Composer autoloading, retrieves the application instance from bootstrap/app.php, and dispatches the HTTP request.',
    codeSnippet: `define('LARAVEL_START', microtime(true));

// 1. Register Composer Autoloader
require __DIR__.'/../vendor/autoload.php';

// 2. Bootstrap Application and Handle Request
(require_once __DIR__.'/../bootstrap/app.php')
    ->handleRequest(Request::capture());`,
    discussion: 'Why is pointing the web server document root directly to public/ critical for preventing visitors from viewing your .env secret file?'
  },
  'resources/views/': {
    path: 'resources/views/',
    badge: '📁 Blade Layouts & Components',
    badgeType: 'core',
    whatItDoes: 'Contains all .blade.php presentation templates, modern tag-based components (<x-layout>), and view layouts.',
    whatIsGoingOn: 'Blade templates compile into cached raw PHP. Variables wrapped in {{ $var }} are automatically sanitized with htmlspecialchars() to prevent XSS attacks.',
    codeSnippet: `<!-- resources/views/components/layout.blade.php -->
<!DOCTYPE html>
<html lang="en">
<head>
    <title>{{ $title ?? 'Laravel 11' }}</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="bg-slate-50 text-slate-900">
    <main class="container mx-auto p-6">
        {{ $slot }}
    </main>
</body>
</html>`,
    discussion: 'How do tag-based Blade components (<x-layout>) give you the modularity of React/Vue components while remaining pure server-rendered HTML?'
  },
  'routes/web.php': {
    path: 'routes/web.php',
    badge: '📄 Browser HTTP Routes',
    badgeType: 'routes',
    whatItDoes: 'Defines web URLs for your application with session state, cookie encryption, and CSRF protection automatically enabled.',
    whatIsGoingOn: 'Maps incoming HTTP methods (GET, POST, PUT, DELETE) and URL paths to Controller actions or Closures.',
    codeSnippet: `use Illuminate\\Support\\Facades\\Route;
use App\\Http\\Controllers\\PostController;

Route::get('/', function () {
    return view('welcome');
});

Route::resource('posts', PostController::class);`,
    discussion: 'Why do routes declared in routes/web.php have CSRF verification and session state enabled by default, while API routes do not?'
  },
  'routes/console.php': {
    path: 'routes/console.php',
    badge: '📄 Artisan Console & Task Scheduler',
    badgeType: 'routes',
    whatItDoes: 'Defines custom Artisan CLI commands and automated cron task schedules in one convenient location.',
    whatIsGoingOn: 'In Laravel 11, Console/Kernel.php was removed. You can now schedule commands directly in console.php using the Schedule facade.',
    codeSnippet: `use Illuminate\\Support\\Facades\\Artisan;
use Illuminate\\Support\\Facades\\Schedule;

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote');

// Schedule tasks right here!
Schedule::command('emails:send-digest')->dailyAt('08:00');`,
    discussion: 'How does configuring background cron schedules directly in PHP prevent brittle cron-tab misconfigurations on Linux servers?'
  },
  '.env': {
    path: '.env',
    badge: '🔐 Environment Secret Variables',
    badgeType: 'core',
    whatItDoes: 'Holds environment-specific secrets (APP_KEY, database credentials, mail server settings) that change between computers.',
    whatIsGoingOn: 'Parsed by PHP dotenv. Never committed to Git. In Laravel 11, DB_CONNECTION defaults to sqlite right here.',
    codeSnippet: `APP_NAME="Laravel 11 App"
APP_ENV=local
APP_KEY=base64:xK92Lp0Q...
APP_DEBUG=true
APP_URL=http://localhost:8000

DB_CONNECTION=sqlite
# DB_DATABASE=/path/to/database.sqlite`,
    discussion: 'What would happen if you accidentally pushed a production .env file to a public GitHub repository? How does APP_KEY protect user sessions?'
  }
};

const L10_FILES: Record<string, FileDetail> = {
  'app/Http/Kernel.php': {
    path: 'app/Http/Kernel.php',
    badge: '❌ Removed in Laravel 11 (Legacy Boilerplate)',
    badgeType: 'removed',
    whatItDoes: 'In Laravel 10, developers had to open this file to register middleware classes, web/api groups, and route aliases.',
    whatIsGoingOn: 'Eliminated in Laravel 11! Replaced by the fluent withMiddleware() builder in bootstrap/app.php. You no longer have a massive Kernel file taking up space.',
    codeSnippet: `// ❌ LARAVEL 10 LEGACY (REMOVED IN 11)
namespace App\\Http;

use Illuminate\\Foundation\\Http\\Kernel as HttpKernel;

class Kernel extends HttpKernel
{
    protected $middleware = [ ... ];
    protected $middlewareGroups = [ ... ];
    protected $routeMiddleware = [ ... ];
}`,
    discussion: 'Why is it better for beginners and pros to declare middleware fluently in bootstrap/app.php rather than editing a 70-line inheritance class?'
  },
  'app/Console/Kernel.php': {
    path: 'app/Console/Kernel.php',
    badge: '❌ Removed in Laravel 11 (Legacy Boilerplate)',
    badgeType: 'removed',
    whatItDoes: 'In Laravel 10, scheduled tasks and custom Artisan command classes had to be declared in this separate Kernel class.',
    whatIsGoingOn: 'Eliminated in Laravel 11! Scheduled tasks are now written directly in routes/console.php with Schedule::command(), and Artisan discovers commands automatically.',
    codeSnippet: `// ❌ LARAVEL 10 LEGACY (REMOVED IN 11)
namespace App\\Console;

use Illuminate\\Foundation\\Console\\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    protected function schedule(Schedule $schedule): void { ... }
    protected function commands(): void { ... }
}`,
    discussion: 'How does automatic command discovery in Laravel 11 save developers time when building artisan utilities?'
  },
  'app/Http/Middleware/': {
    path: 'app/Http/Middleware/',
    badge: '❌ 9 Default Classes Removed in 11',
    badgeType: 'removed',
    whatItDoes: 'In Laravel 10, fresh apps included 9 default middleware classes (Authenticate, EncryptCookies, VerifyCsrfToken, etc.).',
    whatIsGoingOn: 'In Laravel 11, these default middleware classes live inside framework core internals. Your project only has custom middleware that you actually write!',
    codeSnippet: `// ❌ LARAVEL 10 LEGACY (9 default files in project)
// app/Http/Middleware/Authenticate.php
// app/Http/Middleware/EncryptCookies.php
// app/Http/Middleware/PreventRequestsDuringMaintenance.php
// app/Http/Middleware/TrimStrings.php
// app/Http/Middleware/TrustProxies.php
// app/Http/Middleware/ValidateSignature.php
// app/Http/Middleware/VerifyCsrfToken.php`,
    discussion: 'Why should a framework keep standard security middleware inside the vendor core rather than cluttering the student\'s application folder?'
  },
  'app/Providers/RouteServiceProvider.php': {
    path: 'app/Providers/RouteServiceProvider.php',
    badge: '❌ Removed in Laravel 11',
    badgeType: 'removed',
    whatItDoes: 'In Laravel 10, this provider mapped route files (routes/web.php, routes/api.php) and configured rate limiting.',
    whatIsGoingOn: 'Eliminated in Laravel 11! withRouting() in bootstrap/app.php now registers route files in one clean line.',
    codeSnippet: `// ❌ LARAVEL 10 LEGACY (REMOVED IN 11)
class RouteServiceProvider extends ServiceProvider
{
    public const HOME = '/home';
    public function boot(): void
    {
        $this->routes(function () {
            Route::middleware('api')->prefix('api')->group(base_path('routes/api.php'));
            Route::middleware('web')->group(base_path('routes/web.php'));
        });
    }
}`,
    discussion: 'How does declaring routing files in bootstrap/app.php make multi-route configurations much more transparent?'
  },
  'config/': {
    path: 'config/',
    badge: '❌ 15+ Default Files Removed in 11',
    badgeType: 'config',
    whatItDoes: 'In Laravel 10, fresh applications generated over 15 configuration files (app.php, auth.php, database.php, mail.php, etc.).',
    whatIsGoingOn: 'In Laravel 11, the config/ directory is empty by default! Framework defaults are built-in. Run php artisan config:publish to publish only what you need.',
    codeSnippet: `// ❌ LARAVEL 10: 15+ files generated by default:
// config/app.php, config/auth.php, config/broadcasting.php,
// config/cache.php, config/cors.php, config/database.php,
// config/filesystems.php, config/hashing.php, config/logging.php,
// config/mail.php, config/queue.php, config/sanctum.php...

// ✅ LARAVEL 11: On-demand publishing!
// php artisan config:publish database`,
    discussion: 'Why is on-demand configuration (publishing only when needed) better for beginners than looking through 1,500 lines of default config files?'
  },
  'routes/api.php': {
    path: 'routes/api.php',
    badge: '⚡ Now Installed On-Demand in 11',
    badgeType: 'routes',
    whatItDoes: 'In Laravel 10, api.php was created by default even if you were only building a traditional Blade HTML website.',
    whatIsGoingOn: 'In Laravel 11, API routing is omitted by default. Run php artisan install:api to generate routes/api.php and install Laravel Sanctum tokens in one step.',
    codeSnippet: `// In Laravel 11, install API scaffolding on-demand:
php artisan install:api

// This automatically:
// 1. Creates routes/api.php
// 2. Installs Laravel Sanctum migration
// 3. Registers api in bootstrap/app.php`,
    discussion: 'Why should a web framework keep API token scaffolding optional rather than forcing it into every new blog or landing page project?'
  }
};

export const Laravel11ArchitectureDiff: React.FC = () => {
  const [version, setVersion] = useState<'l11' | 'l10'>('l11');
  const [selectedPath, setSelectedPath] = useState<string>('bootstrap/app.php');
  const [activeTab, setActiveTab] = useState<'overview' | 'code' | 'discussion'>('overview');
  const [copied, setCopied] = useState(false);

  // Switch default selected path when version changes
  const handleVersionSwitch = (v: 'l11' | 'l10') => {
    setVersion(v);
    if (v === 'l11') {
      setSelectedPath('bootstrap/app.php');
    } else {
      setSelectedPath('app/Http/Kernel.php');
    }
    setActiveTab('overview');
  };

  const filesMap = version === 'l11' ? L11_FILES : L10_FILES;
  const currentDetail: FileDetail = filesMap[selectedPath] || Object.values(filesMap)[0];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(currentDetail.codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="w-full h-full flex flex-col bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden text-xs font-sans">
      {/* Top Bar with Version Switcher */}
      <div className="bg-slate-50 p-2.5 sm:p-3 border-b border-slate-200 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <FolderTree className="w-4 h-4 text-rose-600" />
          <span className="font-bold text-slate-800 font-lexend text-xs sm:text-sm">
            Interactive Directory Explorer
          </span>
          <span className="text-[10px] bg-rose-500/10 text-rose-700 font-bold px-2 py-0.5 rounded-full border border-rose-200">
            Click any file to inspect!
          </span>
        </div>

        {/* Version Switcher */}
        <div className="flex items-center gap-1 bg-slate-200/80 p-0.5 rounded-xl">
          <button
            onClick={() => handleVersionSwitch('l11')}
            className={`px-2.5 sm:px-3 py-1.5 rounded-lg font-bold text-[11px] transition flex items-center gap-1.5 ${
              version === 'l11' ? 'bg-rose-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            Laravel 11 (Streamlined)
          </button>
          <button
            onClick={() => handleVersionSwitch('l10')}
            className={`px-2.5 sm:px-3 py-1.5 rounded-lg font-bold text-[11px] transition flex items-center gap-1.5 ${
              version === 'l10' ? 'bg-slate-800 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <AlertTriangle className="w-3.5 h-3.5" />
            Laravel 10 (Legacy)
          </button>
        </div>
      </div>

      {/* Main Responsive Split: Left Tree + Right Inspector */}
      <div className="p-2 sm:p-3 flex-grow overflow-y-auto grid grid-cols-1 md:grid-cols-12 gap-3 min-h-0">
        {/* Left Column: Interactive Clickable File Tree (5 cols on iPad/Desktop) */}
        <div className="md:col-span-5 bg-slate-950 text-slate-200 p-2.5 rounded-xl font-mono text-[11px] flex flex-col justify-between border border-slate-800 shadow-inner">
          <div>
            <div className="text-rose-400 font-bold mb-2 pb-1.5 border-b border-slate-800 flex items-center justify-between font-sans text-xs">
              <span className="flex items-center gap-1.5">
                <Box className="w-3.5 h-3.5 text-rose-500" />
                {version === 'l11' ? 'Laravel 11 Project Tree' : 'Laravel 10 Legacy Tree'}
              </span>
              <span className="text-[10px] text-slate-400 font-normal">
                {version === 'l11' ? '10 Lean Core Files' : 'Heavy Boilerplate'}
              </span>
            </div>

            {/* Clickable Items List */}
            <div className="space-y-1 overflow-y-auto max-h-[380px] sm:max-h-[440px] pr-1">
              {Object.keys(filesMap).map((pathKey) => {
                const item = filesMap[pathKey];
                const isSelected = selectedPath === pathKey;
                const isFolder = pathKey.endsWith('/');

                let badgeBadge = null;
                if (item.badgeType === 'core') {
                  badgeBadge = <span className="text-[9px] text-rose-400 font-sans">Core</span>;
                } else if (item.badgeType === 'sqlite') {
                  badgeBadge = <span className="text-[9px] text-sky-400 font-sans">SQLite</span>;
                } else if (item.badgeType === 'removed') {
                  badgeBadge = <span className="text-[9px] text-rose-400 font-sans font-bold">Removed</span>;
                }

                return (
                  <button
                    key={pathKey}
                    onClick={() => setSelectedPath(pathKey)}
                    className={`w-full text-left px-2.5 py-1.5 rounded-lg transition flex items-center justify-between group font-mono text-[11px] ${
                      isSelected
                        ? 'bg-rose-600 text-white font-bold shadow-md ring-1 ring-rose-400'
                        : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                    }`}
                  >
                    <span className="truncate flex items-center gap-1.5">
                      <span>{isFolder ? '📁' : '📄'}</span>
                      <span className={isSelected ? 'text-white' : isFolder ? 'text-amber-300 font-semibold' : 'text-slate-300'}>
                        {pathKey}
                      </span>
                    </span>
                    <div className="flex items-center gap-1 shrink-0 ml-1">
                      {badgeBadge}
                      <ArrowRight className={`w-3 h-3 transition ${isSelected ? 'opacity-100 translate-x-0.5' : 'opacity-0 group-hover:opacity-60'}`} />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-2 pt-2 border-t border-slate-800 text-[10px] text-slate-400 font-sans flex items-center justify-between">
            <span>Tap any row to inspect details</span>
            <span className="text-emerald-400 font-semibold">● Live Studio</span>
          </div>
        </div>

        {/* Right Column: Deep Inspector Panel (7 cols on iPad/Desktop) */}
        <div className="md:col-span-7 bg-slate-50 border border-slate-200 rounded-xl p-3 sm:p-3.5 flex flex-col justify-between h-full">
          <div>
            {/* Header with Title & Badge */}
            <div className="border-b border-slate-200 pb-2 mb-2.5 flex flex-wrap items-center justify-between gap-1.5">
              <div>
                <span className="text-[10px] font-mono text-slate-500 block uppercase">Inspecting File</span>
                <h3 className="font-lexend text-sm sm:text-base font-bold text-slate-900 flex items-center gap-1.5">
                  <FileCode className="w-4 h-4 text-rose-600" />
                  {currentDetail.path}
                </h3>
              </div>
              <span className={`px-2 py-0.5 rounded-full font-semibold text-[10px] border ${
                version === 'l11'
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                  : 'bg-rose-50 text-rose-700 border-rose-200'
              }`}>
                {currentDetail.badge}
              </span>
            </div>

            {/* Inspector Navigation Tabs */}
            <div className="flex gap-1 mb-2.5 bg-slate-200/60 p-0.5 rounded-lg w-fit">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-2.5 py-1 rounded-md text-[11px] font-bold transition ${
                  activeTab === 'overview' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('code')}
                className={`px-2.5 py-1 rounded-md text-[11px] font-bold transition flex items-center gap-1 ${
                  activeTab === 'code' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Code2 className="w-3 h-3 text-rose-600" />
                Inside the File
              </button>
              <button
                onClick={() => setActiveTab('discussion')}
                className={`px-2.5 py-1 rounded-md text-[11px] font-bold transition flex items-center gap-1 ${
                  activeTab === 'discussion' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Users className="w-3 h-3 text-emerald-600" />
                Discussion
              </button>
            </div>

            {/* Tab 1: Overview */}
            {activeTab === 'overview' && (
              <div className="space-y-2.5 animate-fade-in">
                <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <h4 className="font-lexend font-bold text-rose-800 text-[11px] uppercase tracking-wider flex items-center gap-1 mb-1">
                    <Target className="w-3.5 h-3.5 text-rose-600" />
                    What It Does (The Purpose)
                  </h4>
                  <p className="text-slate-700 text-xs leading-relaxed font-medium">
                    {currentDetail.whatItDoes}
                  </p>
                </div>

                <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <h4 className="font-lexend font-bold text-indigo-800 text-[11px] uppercase tracking-wider flex items-center gap-1 mb-1">
                    <Cpu className="w-3.5 h-3.5 text-indigo-600" />
                    What Is Going On (Under the Hood)
                  </h4>
                  <p className="text-slate-700 text-xs leading-relaxed font-medium">
                    {currentDetail.whatIsGoingOn}
                  </p>
                </div>
              </div>
            )}

            {/* Tab 2: Code Preview */}
            {activeTab === 'code' && (
              <div className="bg-slate-950 text-slate-200 rounded-xl overflow-hidden border border-slate-800 shadow-inner flex flex-col justify-between animate-fade-in font-mono text-xs">
                <div className="bg-slate-900/90 px-3 py-1.5 border-b border-slate-800 flex items-center justify-between font-sans">
                  <span className="text-[10px] text-slate-400 font-mono">{currentDetail.path}</span>
                  <button
                    onClick={handleCopyCode}
                    className="text-slate-400 hover:text-white px-2 py-0.5 rounded bg-slate-800 text-[10px] flex items-center gap-1 transition"
                  >
                    {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    {copied ? 'Copied' : 'Copy'}
                  </button>
                </div>
                <div className="p-3 overflow-y-auto max-h-[220px] bg-black/40">
                  <pre className="text-slate-300 leading-relaxed text-[11px] whitespace-pre-wrap">
                    {currentDetail.codeSnippet}
                  </pre>
                </div>
              </div>
            )}

            {/* Tab 3: Class Discussion Prompt */}
            {activeTab === 'discussion' && (
              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-300 shadow-sm animate-fade-in space-y-2">
                <h4 className="font-lexend font-bold text-emerald-800 text-xs flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-emerald-600" />
                  Student Discussion Question
                </h4>
                <div className="text-[11px] text-slate-500 bg-white/80 p-2.5 rounded-lg border border-emerald-100 italic">
                  💡 <strong>Class Challenge:</strong> Contrast how difficult configuration was before Laravel 11 streamlined these paths.
                </div>
              </div>
            )}
          </div>

          <div className="mt-3 pt-2 border-t border-slate-200 flex items-center justify-between text-[10px] text-slate-500 font-mono">
            <span>Laravel 11.x Architectural Spec</span>
            <span className="text-rose-600 font-bold">Interactive Classroom Mode</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// 3. INTERACTIVE REQUEST-TO-RESPONSE PIPELINE SIMULATOR
// ============================================================================
export const LaravelRequestPipeline: React.FC = () => {
  const [selectedRoute, setSelectedRoute] = useState<'home' | 'post' | 'create_post' | 'csrf_fail'>('post');

  const routeDetails = {
    home: {
      method: 'GET',
      uri: '/',
      handler: 'Closure in routes/web.php',
      orm: 'None',
      view: 'welcome.blade.php',
      status: '200 OK',
      statusColor: 'text-emerald-600 bg-emerald-50 border-emerald-200'
    },
    post: {
      method: 'GET',
      uri: '/posts/1',
      handler: 'PostController@show',
      orm: 'Post::findOrFail(1)',
      view: 'posts/show.blade.php',
      status: '200 OK',
      statusColor: 'text-emerald-600 bg-emerald-50 border-emerald-200'
    },
    create_post: {
      method: 'POST',
      uri: '/posts',
      handler: 'PostController@store (CSRF Validated)',
      orm: '$request->validate() ➔ Post::create()',
      view: 'Redirect ➔ /posts/2',
      status: '302 Found',
      statusColor: 'text-sky-600 bg-sky-50 border-sky-200'
    },
    csrf_fail: {
      method: 'POST',
      uri: '/posts (Missing @csrf)',
      handler: 'VerifyCsrfToken Middleware',
      orm: 'Blocked before controller',
      view: 'Laravel 419 Page Expired Screen',
      status: '419 Page Expired',
      statusColor: 'text-rose-600 bg-rose-50 border-rose-200'
    }
  };

  const current = routeDetails[selectedRoute];

  return (
    <div className="w-full h-full flex flex-col bg-slate-950 text-slate-100 rounded-xl border border-slate-800 p-3.5 shadow-xl font-sans text-xs">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4 text-rose-500" />
          <span className="font-bold text-slate-200 font-lexend">Laravel 11 Request Lifecycle</span>
        </div>
        <span className={`px-2 py-0.5 rounded font-mono text-[11px] font-bold border ${current.statusColor}`}>
          {current.status}
        </span>
      </div>

      {/* Route Selectors */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mb-3">
        {(Object.keys(routeDetails) as (keyof typeof routeDetails)[]).map((key) => (
          <button
            key={key}
            onClick={() => setSelectedRoute(key)}
            className={`p-1.5 rounded text-left transition border ${
              selectedRoute === key
                ? 'bg-rose-600/20 border-rose-500 text-rose-300 font-bold'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            <span className="text-[10px] font-mono block opacity-75">{routeDetails[key].method}</span>
            <span className="text-[11px] truncate block font-mono">{routeDetails[key].uri.split(' ')[0]}</span>
          </button>
        ))}
      </div>

      {/* Visual Pipeline Stages */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 items-center flex-grow py-2">
        {/* Step 1: Entry */}
        <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-center">
          <div className="text-[10px] text-slate-400 font-mono">1. Entry Point</div>
          <Server className="w-4 h-4 text-rose-400 mx-auto my-1" />
          <div className="font-mono text-slate-200 text-[11px] font-bold">public/index.php</div>
          <div className="text-[9px] text-slate-500">Auto-loads Composer</div>
        </div>

        {/* Step 2: Bootstrap */}
        <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-center">
          <div className="text-[10px] text-slate-400 font-mono">2. Bootstrap</div>
          <Cpu className="w-4 h-4 text-amber-400 mx-auto my-1" />
          <div className="font-mono text-slate-200 text-[11px] font-bold">bootstrap/app.php</div>
          <div className="text-[9px] text-slate-500">Routing & Middleware</div>
        </div>

        {/* Step 3: Router */}
        <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-center">
          <div className="text-[10px] text-slate-400 font-mono">3. Dispatch</div>
          <Box className="w-4 h-4 text-sky-400 mx-auto my-1" />
          <div className="font-mono text-slate-200 text-[11px] font-bold">routes/web.php</div>
          <div className="text-[9px] text-slate-500 truncate">{current.handler}</div>
        </div>

        {/* Step 4: Model / Controller */}
        <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-center">
          <div className="text-[10px] text-slate-400 font-mono">4. Business Logic</div>
          <Database className="w-4 h-4 text-emerald-400 mx-auto my-1" />
          <div className="font-mono text-slate-200 text-[11px] font-bold">Eloquent ORM</div>
          <div className="text-[9px] text-slate-500 truncate">{current.orm}</div>
        </div>

        {/* Step 5: Response / Blade */}
        <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-center">
          <div className="text-[10px] text-slate-400 font-mono">5. Response</div>
          <Eye className="w-4 h-4 text-purple-400 mx-auto my-1" />
          <div className="font-mono text-slate-200 text-[11px] font-bold">Blade HTML</div>
          <div className="text-[9px] text-slate-500 truncate">{current.view}</div>
        </div>
      </div>

      <div className="bg-slate-900/60 p-2 rounded border border-slate-800/80 text-[11px] text-slate-300 font-sans mt-2">
        <strong className="text-rose-400 font-mono">Pipeline Note: </strong>
        {selectedRoute === 'csrf_fail' 
          ? 'POST requests without a valid @csrf token are rejected at Stage 2 Middleware with an HTTP 419 Page Expired status.' 
          : 'HTTP requests flow cleanly from front controller through bootstrap middleware to your controller action and back as HTML.'}
      </div>
    </div>
  );
};

// ============================================================================
// 4. LIVE ELOQUENT ORM TO SQL TRANSLATOR PLAYGROUND
// ============================================================================
export const LaravelEloquentPlayground: React.FC = () => {
  const [queryKey, setQueryKey] = useState<string>('all');

  const queries: Record<string, { php: string; sql: string; result: any[]; note: string }> = {
    all: {
      php: 'Post::all();',
      sql: 'SELECT * FROM "posts";',
      note: 'Fetches all rows from the posts table as an Eloquent Collection.',
      result: [
        { id: 1, title: 'Getting Started with Laravel 11', is_published: 1 },
        { id: 2, title: 'Mastering Blade Components', is_published: 1 },
        { id: 3, title: 'Deploying with Docker Sail', is_published: 0 }
      ]
    },
    where: {
      php: "Post::where('is_published', true)\n    ->orderBy('created_at', 'desc')\n    ->take(2)\n    ->get();",
      sql: 'SELECT * FROM "posts"\nWHERE "is_published" = ?\nORDER BY "created_at" DESC\nLIMIT 2;\n-- Bindings: [1]',
      note: 'Safe parameterized query: bindings shield the database against SQL injection attacks automatically.',
      result: [
        { id: 2, title: 'Mastering Blade Components', is_published: 1 },
        { id: 1, title: 'Getting Started with Laravel 11', is_published: 1 }
      ]
    },
    find: {
      php: 'Post::findOrFail(1);',
      sql: 'SELECT * FROM "posts" WHERE "id" = ? LIMIT 1;\n-- Bindings: [1]',
      note: 'If record is not found, automatically throws an ModelNotFoundException resulting in a 404 response.',
      result: [
        { id: 1, title: 'Getting Started with Laravel 11', is_published: 1, body: 'Welcome to the artisan guide!' }
      ]
    },
    create: {
      php: "Post::create([\n    'title' => 'New Post',\n    'body'  => 'Saved in SQLite'\n]);",
      sql: 'INSERT INTO "posts" ("title", "body", "updated_at", "created_at")\nVALUES (?, ?, ?, ?);\n-- Mass assignment protected by $fillable',
      note: 'Model automatically manages created_at and updated_at timestamps.',
      result: [
        { id: 4, title: 'New Post', body: 'Saved in SQLite', created_at: '2026-09-09 09:30:00' }
      ]
    }
  };

  const current = queries[queryKey];

  return (
    <div className="w-full h-full flex flex-col bg-slate-950 text-slate-100 rounded-xl border border-slate-800 p-3.5 shadow-xl font-mono text-xs">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2 font-sans">
        <div className="flex items-center gap-2">
          <Database className="w-4 h-4 text-rose-500" />
          <span className="font-bold text-slate-200">Eloquent ORM ➔ Prepared SQL</span>
        </div>
        <span className="text-[10px] text-slate-400">Laravel Active Record</span>
      </div>

      {/* Query Selector Tabs */}
      <div className="flex gap-1.5 mb-2 font-sans">
        {Object.keys(queries).map((key) => (
          <button
            key={key}
            onClick={() => setQueryKey(key)}
            className={`px-2.5 py-1 rounded text-[11px] font-bold transition ${
              queryKey === key ? 'bg-rose-600 text-white' : 'bg-slate-900 text-slate-400 hover:text-slate-200'
            }`}
          >
            {key.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 flex-grow overflow-y-auto">
        {/* PHP Eloquent Box */}
        <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="text-[10px] text-rose-400 font-bold mb-1 uppercase tracking-wider font-sans">
              PHP Eloquent Code
            </div>
            <pre className="text-emerald-400 text-[11px] whitespace-pre-wrap">{current.php}</pre>
          </div>
          <div className="text-[10px] text-slate-400 font-sans mt-2 italic">
            💡 {current.note}
          </div>
        </div>

        {/* Generated SQL Box */}
        <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="text-[10px] text-sky-400 font-bold mb-1 uppercase tracking-wider font-sans">
              Generated SQL Statement
            </div>
            <pre className="text-amber-300 text-[11px] whitespace-pre-wrap">{current.sql}</pre>
          </div>

          <div className="mt-2 pt-2 border-t border-slate-800">
            <div className="text-[9px] text-slate-400 uppercase font-sans font-semibold mb-1">
              Sample Output Collection
            </div>
            <pre className="text-[10px] text-slate-300 bg-black/40 p-1.5 rounded overflow-x-auto max-h-24">
              {JSON.stringify(current.result, null, 2)}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// 5. INTERACTIVE BLADE TEMPLATE COMPILER & LIVE PREVIEW
// ============================================================================
export const LaravelBladeCompiler: React.FC = () => {
  const [isAuth, setIsAuth] = useState(true);
  const [unreadCount, setUnreadCount] = useState(3);
  const [userName] = useState('Jane Doe');

  return (
    <div className="w-full h-full flex flex-col bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden text-xs font-sans">
      {/* Header controls */}
      <div className="bg-slate-50 p-2.5 border-b border-slate-200 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Code2 className="w-4 h-4 text-rose-600" />
          <span className="font-bold text-slate-800">Blade Template Directive Playground</span>
        </div>

        {/* Interactive Toggles */}
        <div className="flex items-center gap-3">
          <label className="flex items-center gap-1.5 cursor-pointer text-[11px] font-semibold text-slate-700">
            <input
              type="checkbox"
              checked={isAuth}
              onChange={(e) => setIsAuth(e.target.checked)}
              className="rounded text-rose-600 focus:ring-rose-500"
            />
            <span>Auth State: {isAuth ? 'Logged In' : 'Guest'}</span>
          </label>

          <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-700">
            <span>Unread:</span>
            <button
              onClick={() => setUnreadCount(Math.max(0, unreadCount - 1))}
              className="w-5 h-5 bg-slate-200 rounded text-slate-700 flex items-center justify-center font-bold hover:bg-slate-300"
            >
              -
            </button>
            <span className="w-4 text-center font-mono">{unreadCount}</span>
            <button
              onClick={() => setUnreadCount(unreadCount + 1)}
              className="w-5 h-5 bg-slate-200 rounded text-slate-700 flex items-center justify-center font-bold hover:bg-slate-300"
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-3.5 flex-grow overflow-y-auto">
        {/* Left: Blade Syntax */}
        <div className="bg-slate-900 text-slate-100 p-3 rounded-lg font-mono text-[11px] flex flex-col justify-between">
          <div>
            <div className="text-rose-400 font-bold mb-2 pb-1 border-b border-slate-800 flex items-center justify-between font-sans">
              <span>resources/views/nav.blade.php</span>
              <span className="text-[10px] text-slate-400">Blade Syntax</span>
            </div>
            <pre className="text-slate-300 leading-relaxed">
{`<nav class="navbar">
    @auth
        <span>Welcome, {{ $user }}</span>
        @if ($unread > 0)
            <span class="badge">{{ $unread }}</span>
        @endif
        <a href="/logout">Logout</a>
    @else
        <a href="/login">Login</a>
        <a href="/register">Register</a>
    @endauth
</nav>`}
            </pre>
          </div>
          <div className="text-[10px] text-slate-400 font-sans mt-2">
            💡 Directives compile directly into high-speed, cached PHP scripts.
          </div>
        </div>

        {/* Right: Rendered HTML Card */}
        <div className="bg-slate-50 border border-slate-200 p-3 rounded-lg flex flex-col justify-between">
          <div>
            <div className="text-slate-800 font-bold mb-2 pb-1 border-b border-slate-200 flex items-center justify-between">
              <span>Live Visual Output</span>
              <span className="text-[10px] text-emerald-600 font-mono font-bold">● Compiled</span>
            </div>

            {/* Rendered Mock UI */}
            <div className="bg-white p-3.5 rounded-lg border border-slate-200 shadow-sm flex items-center justify-between">
              {isAuth ? (
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-full bg-rose-100 text-rose-700 font-bold flex items-center justify-center text-xs">
                      JD
                    </span>
                    <span className="font-semibold text-slate-800 text-xs">Welcome, {userName}</span>
                    {unreadCount > 0 && (
                      <span className="bg-rose-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full animate-pulse">
                        {unreadCount}
                      </span>
                    )}
                  </div>
                  <button className="text-xs text-rose-600 font-semibold hover:underline">
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex items-center justify-between w-full">
                  <span className="text-slate-500 italic text-xs">Guest Visitor</span>
                  <div className="flex gap-2">
                    <button className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs font-semibold hover:bg-slate-200">
                      Login
                    </button>
                    <button className="px-2 py-1 bg-rose-600 text-white rounded text-xs font-semibold hover:bg-rose-700">
                      Register
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="mt-3 p-2 bg-rose-50 border border-rose-200 rounded text-[11px] text-rose-900 leading-snug">
            <strong>Security Feature: </strong>
            <code className="bg-rose-100 px-1 py-0.5 rounded font-mono">{"{{ $user }}"}</code> automatically runs <code className="bg-rose-100 px-1 py-0.5 rounded font-mono">htmlspecialchars()</code> to prevent Cross-Site Scripting (XSS).
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// 6. INTERACTIVE MIGRATION & SCHEMA DESIGNER
// ============================================================================
export const LaravelMigrationBuilder: React.FC = () => {
  const [columns, setColumns] = useState<string[]>([
    "$table->id();",
    "$table->string('title');",
    "$table->text('body');",
    "$table->boolean('is_published')->default(false);",
    "$table->timestamps();"
  ]);

  const addColumn = (col: string) => {
    if (!columns.includes(col)) {
      setColumns([...columns.slice(0, -1), col, columns[columns.length - 1]]);
    }
  };

  const removeColumn = (col: string) => {
    setColumns(columns.filter((c) => c !== col));
  };

  return (
    <div className="w-full h-full flex flex-col bg-slate-950 text-slate-100 rounded-xl border border-slate-800 p-3.5 shadow-xl font-mono text-xs">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2 font-sans">
        <div className="flex items-center gap-2">
          <Database className="w-4 h-4 text-rose-500" />
          <span className="font-bold text-slate-200">Database Migration Blueprint</span>
        </div>
        <span className="text-[10px] text-slate-400">database/migrations/</span>
      </div>

      {/* Available Blueprint Methods */}
      <div className="flex flex-wrap gap-1 mb-2 font-sans">
        <span className="text-[10px] text-slate-400 self-center mr-1">Add Field:</span>
        <button
          onClick={() => addColumn("$table->foreignId('user_id')->constrained()->cascadeOnDelete();")}
          className="px-2 py-0.5 bg-slate-900 border border-slate-700 hover:border-rose-500 text-slate-300 rounded text-[10px] transition"
        >
          + foreignId('user_id')
        </button>
        <button
          onClick={() => addColumn("$table->string('slug')->unique();")}
          className="px-2 py-0.5 bg-slate-900 border border-slate-700 hover:border-rose-500 text-slate-300 rounded text-[10px] transition"
        >
          {"+ string('slug')->unique()"}
        </button>
        <button
          onClick={() => addColumn("$table->timestamp('published_at')->nullable();")}
          className="px-2 py-0.5 bg-slate-900 border border-slate-700 hover:border-rose-500 text-slate-300 rounded text-[10px] transition"
        >
          {"+ timestamp('published_at')->nullable()"}
        </button>
      </div>

      <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 flex-grow overflow-y-auto leading-relaxed">
        <div className="text-slate-400 text-[10px] mb-1 font-sans">
          Schema::create('posts', function (Blueprint $table) &#123;
        </div>
        <div className="pl-4 space-y-1">
          {columns.map((col, idx) => (
            <div key={idx} className="flex items-center justify-between group">
              <span className="text-emerald-400">{col}</span>
              {col !== "$table->id();" && col !== "$table->timestamps();" && (
                <button
                  onClick={() => removeColumn(col)}
                  className="text-slate-500 hover:text-rose-400 opacity-0 group-hover:opacity-100 text-[10px] font-sans px-1"
                >
                  ✕ Remove
                </button>
              )}
            </div>
          ))}
        </div>
        <div className="text-slate-400 text-[10px] mt-1 font-sans">&#125;);</div>
      </div>

      <div className="mt-2 text-[10px] text-slate-400 font-sans flex items-center justify-between">
        <span>Run with: <code className="text-rose-400 font-mono">php artisan migrate</code></span>
        <span className="text-emerald-400 font-bold">SQLite / MySQL / PostgreSQL Agnostic</span>
      </div>
    </div>
  );
};

// ============================================================================
// 7. INTERACTIVE CSRF & FORM VALIDATION SANDBOX
// ============================================================================
export const LaravelCsrfValidationSandbox: React.FC = () => {
  const [includeCsrf, setIncludeCsrf] = useState(true);
  const [title, setTitle] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | '419' | 'validation_error' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!includeCsrf) {
      setStatus('419');
      return;
    }
    if (!title.trim() || !email.includes('@')) {
      setStatus('validation_error');
      return;
    }
    setStatus('success');
  };

  return (
    <div className="w-full h-full flex flex-col bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden text-xs font-sans">
      <div className="bg-slate-50 p-2.5 border-b border-slate-200 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-rose-600" />
          <span className="font-bold text-slate-800">CSRF & Request Validation Simulator</span>
        </div>
        <label className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-700 cursor-pointer">
          <input
            type="checkbox"
            checked={includeCsrf}
            onChange={(e) => {
              setIncludeCsrf(e.target.checked);
              setStatus('idle');
            }}
            className="rounded text-rose-600 focus:ring-rose-500"
          />
          <span>Include @csrf Token: {includeCsrf ? 'ON' : 'OFF'}</span>
        </label>
      </div>

      <div className="p-3.5 flex-grow overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-3 items-start">
        {/* Form Form */}
        <form onSubmit={handleSubmit} className="space-y-2.5 bg-slate-50 p-3 rounded-lg border border-slate-200">
          <div>
            <label className="block text-[11px] font-bold text-slate-700 mb-1">Article Title</label>
            <input
              type="text"
              placeholder="e.g. Exploring Laravel 11"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                if (status !== 'idle') setStatus('idle');
              }}
              className="w-full px-2.5 py-1.5 bg-white border border-slate-300 rounded text-xs focus:outline-none focus:border-rose-500"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 mb-1">Author Email</label>
            <input
              type="email"
              placeholder="e.g. dev@laravel.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status !== 'idle') setStatus('idle');
              }}
              className="w-full px-2.5 py-1.5 bg-white border border-slate-300 rounded text-xs focus:outline-none focus:border-rose-500"
            />
          </div>

          <div className="text-[10px] font-mono text-slate-500">
            {includeCsrf ? (
              <span className="text-emerald-600 font-bold">✓ &lt;input type="hidden" name="_token" value="csrf_token()"&gt;</span>
            ) : (
              <span className="text-rose-600 font-bold">✕ Missing CSRF token (Attack Simulation)</span>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-1.5 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded text-xs transition shadow-sm"
          >
            Submit Post (POST /posts)
          </button>
        </form>

        {/* Server Response Feedback */}
        <div className="h-full flex flex-col justify-center">
          {status === 'idle' && (
            <div className="p-4 bg-slate-50 rounded-lg border border-dashed border-slate-300 text-center text-slate-500 text-xs">
              Fill out the form and submit to simulate server validation and CSRF token inspection.
            </div>
          )}

          {status === '419' && (
            <div className="p-3.5 bg-rose-50 border border-rose-300 rounded-lg text-rose-900 animate-fade-in">
              <div className="font-bold text-sm flex items-center gap-1.5 text-rose-700 font-mono">
                <AlertTriangle className="w-4 h-4 text-rose-600" />
                419 | PAGE EXPIRED
              </div>
              <p className="text-[11px] text-rose-700 mt-1">
                The CSRF token was missing or mismatched. Laravel protected your app from Cross-Site Request Forgery! Always include <code className="font-mono bg-rose-100 px-1 py-0.5 rounded">@csrf</code> in your Blade forms.
              </p>
            </div>
          )}

          {status === 'validation_error' && (
            <div className="p-3.5 bg-amber-50 border border-amber-300 rounded-lg text-amber-900 animate-fade-in">
              <div className="font-bold text-xs flex items-center gap-1.5 text-amber-800">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                Laravel $errors-&gt;all() Triggered:
              </div>
              <ul className="text-[11px] text-amber-800 list-disc list-inside mt-1 space-y-0.5">
                {!title.trim() && <li>The title field is required.</li>}
                {!email.includes('@') && <li>The email field must be a valid email address.</li>}
              </ul>
            </div>
          )}

          {status === 'success' && (
            <div className="p-3.5 bg-emerald-50 border border-emerald-300 rounded-lg text-emerald-900 animate-fade-in">
              <div className="font-bold text-xs flex items-center gap-1.5 text-emerald-800 font-mono">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                200 OK — Validation Passed
              </div>
              <p className="text-[11px] text-emerald-700 mt-1">
                Post validated successfully. Saved to database! Redirected with flash session: <code className="font-mono bg-emerald-100 px-1 py-0.5 rounded">session('status', 'Post Created!')</code>.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// 8. INTERACTIVE ARTISAN TINKER REPL SHELL
// ============================================================================
export const LaravelTinkerShell: React.FC = () => {
  const [history, setHistory] = useState<Array<{ cmd: string; out: string }>>([
    { cmd: "App\\Models\\User::first();", out: '=> App\\Models\\User {#6102\n     id: 1,\n     name: "Taylor Otwell",\n     email: "taylor@laravel.com",\n     created_at: "2026-09-09 00:00:00"\n   }' }
  ]);
  const [currentInput, setCurrentInput] = useState('');

  const runCommand = (cmdStr: string) => {
    let out = '';
    const trimmed = cmdStr.trim();
    if (trimmed === 'Post::count()' || trimmed.includes('count()')) {
      out = '=> 4';
    } else if (trimmed.includes('bcrypt') || trimmed.includes('Hash::make')) {
      out = '=> "$2y$12$eG8rE74l5f73k9QW..."';
    } else if (trimmed.includes('config(')) {
      out = '=> "Laravel"';
    } else {
      out = `=> true /* Executed in tinker sandbox: ${trimmed} */`;
    }
    setHistory([...history, { cmd: trimmed, out }]);
    setCurrentInput('');
  };

  return (
    <div className="w-full h-full flex flex-col bg-slate-950 text-slate-100 rounded-xl border border-slate-800 shadow-xl font-mono text-xs overflow-hidden">
      <div className="bg-slate-900 px-3 py-2 border-b border-slate-800 flex items-center justify-between font-sans">
        <div className="flex items-center gap-2">
          <Terminal className="w-3.5 h-3.5 text-rose-500" />
          <span className="font-bold text-slate-300">php artisan tinker (PsySH Interactive REPL)</span>
        </div>
        <button
          onClick={() => setHistory([])}
          className="text-[10px] text-slate-400 hover:text-white px-2 py-0.5 rounded bg-slate-800"
        >
          Clear
        </button>
      </div>

      <div className="p-3 flex-grow overflow-y-auto space-y-2">
        <div className="text-[10px] text-slate-500 font-sans">
          Type PHP expressions, Eloquent queries, or helper functions to execute live:
        </div>

        {history.map((h, i) => (
          <div key={i} className="space-y-1">
            <div className="text-emerald-400">&gt; {h.cmd}</div>
            <pre className="text-slate-300 text-[11px] whitespace-pre-wrap pl-2 border-l border-slate-800">
              {h.out}
            </pre>
          </div>
        ))}

        <div className="flex items-center gap-1 text-emerald-400 pt-1">
          <span>&gt;</span>
          <input
            type="text"
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && currentInput.trim()) {
                runCommand(currentInput);
              }
            }}
            placeholder="e.g. Post::count(); or config('app.name');"
            className="flex-grow bg-transparent text-slate-200 focus:outline-none text-xs"
          />
        </div>
      </div>

      {/* Preset Command Buttons */}
      <div className="bg-slate-900/80 p-2 border-t border-slate-800 flex flex-wrap gap-1.5 font-sans">
        <span className="text-[10px] text-slate-500 self-center">Try:</span>
        <button
          onClick={() => runCommand('App\\Models\\Post::count();')}
          className="px-2 py-0.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded text-[10px]"
        >
          Post::count()
        </button>
        <button
          onClick={() => runCommand("Hash::make('secret');")}
          className="px-2 py-0.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded text-[10px]"
        >
          Hash::make('secret')
        </button>
        <button
          onClick={() => runCommand("config('app.name');")}
          className="px-2 py-0.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded text-[10px]"
        >
          config('app.name')
        </button>
      </div>
    </div>
  );
};

// ============================================================================
// 9. INTERACTIVE LARAVEL 11 DIRECTORY TREE EXPLORER
// ============================================================================
export const LaravelDirectoryExplorer: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<string>('bootstrap/app.php');

  const fileDoc: Record<string, { title: string; type: string; desc: string; officialDoc: string }> = {
    'app/': {
      title: 'App Directory',
      type: 'Core Business Logic',
      desc: 'Contains Models, HTTP Controllers, and Service Providers. Middleware and Kernels are now tucked into the framework core.',
      officialDoc: 'laravel.com/docs/11.x/structure#the-app-directory'
    },
    'bootstrap/app.php': {
      title: 'bootstrap/app.php',
      type: 'Unified Framework Application Hub',
      desc: 'New in Laravel 11: Configures routing, global and route middleware, and exception handling in one concise, fluent builder.',
      officialDoc: 'laravel.com/docs/11.x/structure#the-bootstrap-directory'
    },
    'config/': {
      title: 'Config Directory',
      type: 'Configuration Files',
      desc: 'In Laravel 11, config files are omitted by default. If you need to tweak database or mail defaults, run php artisan config:publish.',
      officialDoc: 'laravel.com/docs/11.x/configuration'
    },
    'database/database.sqlite': {
      title: 'database/database.sqlite',
      type: 'Zero-Config Default Database',
      desc: 'New in Laravel 11: SQLite is configured as the default database connection. No server setup or external DB needed!',
      officialDoc: 'laravel.com/docs/11.x/database'
    },
    'public/index.php': {
      title: 'public/index.php',
      type: 'Web Server Entry Point',
      desc: 'All HTTP requests enter through this file. Web servers (Nginx, Apache, Caddy) must point their document root to public/.',
      officialDoc: 'laravel.com/docs/11.x/deployment'
    },
    'resources/views/': {
      title: 'resources/views/',
      type: 'Blade Layouts & Components',
      desc: 'Holds .blade.php presentation templates, modern component tags (<x-layout>), and raw frontend assets compiled via Vite.',
      officialDoc: 'laravel.com/docs/11.x/blade'
    },
    'routes/web.php': {
      title: 'routes/web.php',
      type: 'Browser HTTP Routes',
      desc: 'Defines routes for web interfaces with session state and CSRF protection automatically assigned.',
      officialDoc: 'laravel.com/docs/11.x/routing'
    },
    '.env': {
      title: '.env (Environment File)',
      type: 'Environment Configuration',
      desc: 'Houses local credentials: APP_NAME, APP_KEY, DB_CONNECTION=sqlite, and mail services. Never commit .env to Git!',
      officialDoc: 'laravel.com/docs/11.x/configuration#environment-configuration'
    }
  };

  const current = fileDoc[selectedFile];

  return (
    <div className="w-full h-full flex flex-col bg-slate-950 text-slate-100 rounded-xl border border-slate-800 shadow-xl overflow-hidden font-sans text-xs">
      <div className="bg-slate-900 p-2.5 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FolderTree className="w-4 h-4 text-rose-500" />
          <span className="font-bold text-slate-200">Interactive Project Directory Tree</span>
        </div>
        <span className="text-[10px] text-slate-400 font-mono">Laravel 11.x Spec</span>
      </div>

      <div className="p-3.5 flex-grow overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-3 items-start">
        {/* Left: Interactive File Tree */}
        <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 font-mono text-[11px] space-y-1">
          {Object.keys(fileDoc).map((key) => (
            <button
              key={key}
              onClick={() => setSelectedFile(key)}
              className={`w-full text-left px-2 py-1 rounded transition flex items-center justify-between ${
                selectedFile === key
                  ? 'bg-rose-600 text-white font-bold shadow-sm'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <span>{key.endsWith('/') ? '📁 ' + key : '📄 ' + key}</span>
              {selectedFile === key && <ArrowRight className="w-3 h-3" />}
            </button>
          ))}
        </div>

        {/* Right: Documentation Card */}
        <div className="bg-slate-900 p-3.5 rounded-lg border border-slate-800 flex flex-col justify-between h-full">
          <div>
            <span className="text-[10px] font-mono text-rose-400 uppercase tracking-wider font-bold">
              {current.type}
            </span>
            <h3 className="font-lexend text-base font-bold text-slate-100 mt-1 mb-2">
              {current.title}
            </h3>
            <p className="text-slate-300 leading-relaxed text-xs">
              {current.desc}
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
            <span className="font-mono text-[10px]">Doc: {current.officialDoc}</span>
            <span className="text-emerald-400 font-bold">Official Spec</span>
          </div>
        </div>
      </div>
    </div>
  );
};
