import React from 'react';

export interface WebDev3Example {
  title: string;
  code: string;
  lang: 'php' | 'blade' | 'bash';
  outputType: 'api_json' | 'artisan_cli' | 'blade_preview' | 'eloquent_db';
  outputTitle?: string;
  outputSummary?: string;
  jsonOutput?: Record<string, any>;
  cliOutput?: { cmd: string; lines: string[]; status: string };
  bladeOutput?: { title: string; badge: string; author: string; status: string; content: string };
  dbOutput?: { columns: string[]; rows: string[][] };
  explanation: string;
  simulation?: 'terminal' | 'pipeline' | 'eloquent' | 'blade' | 'migration' | 'csrf' | 'tinker' | 'explorer' | 'diff';
}

export const WEBDEV3_SLIDE_EXAMPLES: Record<string, WebDev3Example> = {
  // =========================================================================
  // WEEK 1: INTRODUCTION TO LARAVEL
  // =========================================================================
  'w1-slide2': {
    title: 'Laravel 11 Fast-Track Bootstrapping',
    code: `// 1. Create a modern Laravel 11 project with Pest and SQLite
composer create-project laravel/laravel blog

// 2. Change directory into project root
cd blog

// 3. Launch local PHP artisan development server
php artisan serve
// => Server running on [http://127.0.0.1:8000]

// 4. Run zero-configuration initial migrations
php artisan migrate`,
    lang: 'bash',
    outputType: 'artisan_cli',
    outputTitle: 'Terminal CLI • Local Server Launch',
    cliOutput: {
      cmd: 'php artisan serve',
      status: 'Server active on http://127.0.0.1:8000',
      lines: [
        '   INFO  Server running on [http://127.0.0.1:8000].',
        '   Press Ctrl+C to stop the server',
        '   2026-09-23 09:15:02 ..................................... ~ 14ms',
        '   2026-09-23 09:15:05 GET / ...................... 200 OK ~ 8.2ms',
        '   2026-09-23 09:15:08 GET /api/v1/health ......... 200 OK ~ 3.5ms'
      ]
    },
    explanation: 'Laravel 11 provides a streamlined, zero-config onboarding workflow. Running php artisan serve spins up an isolated development server with hot-reload and real-time request timing.',
    simulation: 'terminal'
  },
  'w1-slide3': {
    title: 'Vanilla PHP vs Laravel Comparison',
    code: `// --- VANILLA PHP (Manual PDO & SQL Binding) ---
$pdo = new PDO('mysql:host=localhost;dbname=school', 'root', '');
$stmt = $pdo->prepare('SELECT * FROM students WHERE grade = ?');
$stmt->execute([12]);
$students = $stmt->fetchAll(PDO::FETCH_ASSOC);

// --- LARAVEL 11 (Eloquent Model & Method Chaining) ---
use App\\Models\\Student;

// Clean, expressive, SQL-injection safe by default:
$students = Student::where('grade', 12)
    ->where('is_active', true)
    ->orderBy('name')
    ->get();`,
    lang: 'php',
    outputType: 'eloquent_db',
    outputTitle: 'Eloquent Query Result: students table',
    dbOutput: {
      columns: ['id', 'name', 'grade', 'is_active', 'created_at'],
      rows: [
        ['1', 'Alex Johnson', '12', 'true', '2026-09-20'],
        ['2', 'Maria Santos', '12', 'true', '2026-09-21'],
        ['3', 'Ethan Williams', '12', 'true', '2026-09-22']
      ]
    },
    explanation: 'Eloquent ORM replaces brittle SQL string concatenations with type-safe method chaining. All query parameters are automatically bound via PDO prepared statements to block SQL injection.',
    simulation: 'eloquent'
  },
  'w1-slide4': {
    title: 'Official First-Party Packages (Breeze & Sanctum)',
    code: `// 1. Install Laravel Breeze turnkey authentication
composer require laravel/breeze --dev

// 2. Scaffold clean Blade + Alpine views and routes
php artisan breeze:install blade

// 3. Issue Sanctum API token for headless SPA or mobile client
use App\\Models\\User;

$user = User::where('email', 'dev@university.edu')->first();
$token = $user->createToken('mobile-app-client')->plainTextToken;

// Response payload with Sanctum bearer token:
return response()->json([
    'access_token' => $token,
    'token_type'   => 'Bearer',
    'expires_in'   => 86400,
]);`,
    lang: 'php',
    outputType: 'api_json',
    outputTitle: 'POST /api/tokens/create • HTTP 201 Created',
    jsonOutput: {
      status: 'authenticated',
      token_type: 'Bearer',
      access_token: '1|4r5t8y7u9i0o2p3a4s5d6f7g8h9j0k1l2m3n4b5v6c',
      user: {
        id: 101,
        name: 'Maria Santos',
        email: 'dev@university.edu',
        role: 'student_developer'
      }
    },
    explanation: 'Laravel first-party packages like Breeze and Sanctum provide official, security-audited authentication scaffolds without requiring untrusted third-party dependencies.',
    simulation: 'csrf'
  },
  'w1-slide6': {
    title: 'Interactive Artisan CLI Commands',
    code: `// Generate a full MVC stack in a single Artisan command:
php artisan make:model Course -mcr

// This command automatically creates:
// 1. Model:       app/Models/Course.php
// 2. Migration:   database/migrations/2026_create_courses_table.php
// 3. Controller:  app/Http/Controllers/CourseController.php (Resourceful)`,
    lang: 'bash',
    outputType: 'artisan_cli',
    outputTitle: 'Terminal CLI • Multi-Component Generator',
    cliOutput: {
      cmd: 'php artisan make:model Course -mcr',
      status: 'Command finished with Exit Code 0',
      lines: [
        '   INFO  Model [app/Models/Course.php] created successfully.',
        '   INFO  Migration [database/migrations/2026_09_23_000001_create_courses_table.php] created.',
        '   INFO  Controller [app/Http/Controllers/CourseController.php] created successfully.'
      ]
    },
    explanation: 'The make:model -mcr flag is a hallmark of Laravel productivity, instantly scaffolding your database migration, Eloquent model, and resourceful REST controller.',
    simulation: 'terminal'
  },
  'w1-slide7': {
    title: 'Streamlined Directory Structure in Laravel 11',
    code: `// In Laravel 11, routing and middleware are consolidated in:
// 1. bootstrap/app.php  -> Master application middleware & exception config
// 2. routes/web.php     -> Web routes with CSRF & session middleware
// 3. routes/api.php     -> API routes with Sanctum & throttling
// 4. routes/console.php -> Artisan CLI commands and cron schedules

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        // Global or route-specific middleware
    })
    ->create();`,
    lang: 'php',
    outputType: 'artisan_cli',
    outputTitle: 'Configuration Manifest • bootstrap/app.php',
    cliOutput: {
      cmd: 'php artisan route:list --path=up',
      status: 'Health Route Verified',
      lines: [
        '   GET|HEAD   up ............................................................. ',
        '   HTTP 200 OK • Application heart-beat monitor online'
      ]
    },
    explanation: 'Laravel 11 eliminates dozens of boilerplate config files. Application setup is centralized directly in bootstrap/app.php for faster boot times and simplified maintenance.',
    simulation: 'explorer'
  },
  'w1-slide11': {
    title: 'The HTTP Request Lifecycle & Pipeline',
    code: `// Incoming HTTP Request Journey:
// 1. public/index.php captures global request
// 2. bootstrap/app.php boots the IoC service container
// 3. Request enters Global Middleware (maintenance, CORS, session)
// 4. Matched Route executes Route Middleware (auth, throttle)
// 5. Controller Action executes business logic & queries Database
// 6. Response (Blade View or JSON) flows back to client browser

Route::get('/api/welcome', function () {
    return response()->json([
        'message' => 'Laravel 11 request pipeline executed successfully!',
        'latency' => '12ms'
    ]);
});`,
    lang: 'php',
    outputType: 'api_json',
    outputTitle: 'GET /api/welcome • HTTP 200 OK',
    jsonOutput: {
      status: 200,
      message: 'Laravel 11 request pipeline executed successfully!',
      server: 'PHP 8.2 / Laravel 11.x',
      latency: '12ms',
      memory_peak: '2.4 MB'
    },
    explanation: 'Every request passes sequentially through the onion-style middleware pipeline. If any middleware rejects the request (e.g. unauthenticated), it halts immediately without reaching the database.',
    simulation: 'pipeline'
  },

  // =========================================================================
  // WEEK 2: LARAVEL ROUTING
  // =========================================================================
  'w2-slide2': {
    title: 'Basic HTTP Routing & Verbs',
    code: `use App\\Http\\Controllers\\LessonController;
use Illuminate\\Support\\Facades\\Route;

// 1. Simple GET route with closure:
Route::get('/', function () {
    return view('welcome');
});

// 2. Route with URI parameter & regex constraint:
Route::get('/courses/{id}', function (string $id) {
    return response()->json(['course_id' => $id, 'active' => true]);
})->whereNumber('id')->name('courses.show');

// 3. POST route submitting data to Controller action:
Route::post('/courses', [LessonController::class, 'store'])
    ->name('courses.store');`,
    lang: 'php',
    outputType: 'api_json',
    outputTitle: 'GET /courses/42 • HTTP 200 OK',
    jsonOutput: {
      course_id: 42,
      course_title: 'Web Dev 3: Laravel Framework',
      department: 'Computer Studies',
      active: true,
      students_enrolled: 38
    },
    explanation: 'Routes match the incoming HTTP method and URI. The whereNumber constraint enforces numeric IDs at the router level, preventing non-numeric strings from triggering database errors.',
    simulation: 'pipeline'
  },
  'w2-slide3': {
    title: 'Route Groups, Prefixes, and Name Prefixes',
    code: `use App\\Http\\Controllers\\AdminController;
use Illuminate\\Support\\Facades\\Route;

// Clean grouping to avoid repeating middleware, prefixes, and names:
Route::middleware(['auth', 'verified'])
    ->prefix('admin')
    ->name('admin.')
    ->group(function () {
        // URI: /admin/dashboard  |  Route Name: admin.dashboard
        Route::get('/dashboard', [AdminController::class, 'dashboard'])
            ->name('dashboard');

        // URI: /admin/students   |  Route Name: admin.students
        Route::get('/students', [AdminController::class, 'students'])
            ->name('students');
    });`,
    lang: 'php',
    outputType: 'artisan_cli',
    outputTitle: 'Terminal CLI • php artisan route:list',
    cliOutput: {
      cmd: 'php artisan route:list --path=admin',
      status: 'Group routes registered',
      lines: [
        '   GET|HEAD   admin/dashboard ... admin.dashboard › AdminController@dashboard',
        '   GET|HEAD   admin/students .... admin.students › AdminController@students',
        '   Middleware: web, auth, verified'
      ]
    },
    explanation: 'Route groups allow you to apply common attributes such as auth middleware, URL prefixes, and route name prefixes to dozens of routes without repetitive code.',
    simulation: 'pipeline'
  },

  // =========================================================================
  // WEEK 3: MIDDLEWARE IN LARAVEL
  // =========================================================================
  'w3-slide2': {
    title: 'Custom Middleware Implementation',
    code: `namespace App\\Http\\Middleware;

use Closure;
use Illuminate\\Http\\Request;
use Symfony\\Component\\HttpFoundation\\Response;

class EnsureUserIsAdmin
{
    /**
     * Handle an incoming request.
     */
    public function handle(Request $request, Closure $next): Response
    {
        // 1. Inspect authenticated user role:
        if (! $request->user() || ! $request->user()->is_admin) {
            // Terminate request early if unauthorized:
            abort(403, 'Access denied. Administrator privileges required.');
        }

        // 2. Pass request to the next handler in the pipeline:
        return $next($request);
    }
}`,
    lang: 'php',
    outputType: 'api_json',
    outputTitle: 'GET /admin/settings • Middleware Inspection',
    jsonOutput: {
      status: 403,
      error: 'Forbidden',
      message: 'Access denied. Administrator privileges required.',
      middleware_intercepted: 'EnsureUserIsAdmin',
      request_timestamp: '2026-09-23T09:20:00Z'
    },
    explanation: 'Middleware acts as a gatekeeper. By calling $next($request), you allow the request to proceed. By returning a response or throwing an exception, you block unauthorized access before reaching the controller.',
    simulation: 'pipeline'
  },

  // =========================================================================
  // WEEK 4: CONTROLLERS AND VIEWS
  // =========================================================================
  'w4-slide2': {
    title: 'Resourceful Controller & Blade View Integration',
    code: `namespace App\\Http\\Controllers;

use App\\Models\\Post;
use Illuminate\\Http\\Request;
use Illuminate\\View\\View;

class PostController extends Controller
{
    // Display paginated post listings
    public function index(): View
    {
        $posts = Post::where('is_published', true)
            ->latest()
            ->paginate(10);

        return view('posts.index', compact('posts'));
    }

    // Store a new post in the database
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|max:255',
            'body'  => 'required',
        ]);

        Post::create($validated);
        return redirect()->route('posts.index')->with('success', 'Post published!');
    }
}`,
    lang: 'php',
    outputType: 'blade_preview',
    outputTitle: 'Rendered Blade View: posts.index',
    bladeOutput: {
      title: 'Building Modern Web Apps with Laravel 11',
      badge: 'Laravel 11 • Published',
      author: 'Prof. Amstrong',
      status: 'Live on Portal',
      content: 'Learn how to leverage modern PHP 8.2 features and the Laravel 11 request pipeline to engineer secure, production-grade applications.'
    },
    explanation: 'Resourceful controllers follow standard RESTful conventions (index, create, store, show, edit, update, destroy). Passing data to view() seamlessly hydrates Blade templates.',
    simulation: 'blade'
  },

  // =========================================================================
  // WEEK 6: ELOQUENT ORM BASICS
  // =========================================================================
  'w6-slide2': {
    title: 'Eloquent Model Definition & Relationships',
    code: `namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;
use Illuminate\\Database\\Eloquent\\Relations\\HasMany;
use Illuminate\\Database\\Eloquent\\Relations\\BelongsTo;

class Course extends Model
{
    // Mass-assignable attributes protection
    protected $fillable = ['code', 'title', 'units', 'teacher_id'];

    // 1-to-Many Relationship: Course has many Modules
    public function modules(): HasMany
    {
        return $this->hasMany(Module::class);
    }

    // Inverse Relationship: Course belongs to a Teacher
    public function teacher(): BelongsTo
    {
        return $this->belongsTo(Teacher::class);
    }
}`,
    lang: 'php',
    outputType: 'eloquent_db',
    outputTitle: 'Database Schema: courses table',
    dbOutput: {
      columns: ['id', 'code', 'title', 'units', 'teacher_id', 'created_at'],
      rows: [
        ['1', 'IT-WD3', 'Web Dev 3: Laravel Framework', '3', '101', '2026-09-01'],
        ['2', 'IT-MD1', 'Multimedia Design & HCI', '3', '102', '2026-09-01'],
        ['3', 'CS-CPP1', 'C++ Systems & OOP', '3', '103', '2026-09-01']
      ]
    },
    explanation: 'Eloquent Active Record models map database tables directly to PHP objects. Setting $fillable protects against mass-assignment vulnerabilities when handling user inputs.',
    simulation: 'eloquent'
  },

  // =========================================================================
  // WEEK 7: ADVANCED ELOQUENT ORM
  // =========================================================================
  'w7-slide2': {
    title: 'Local Query Scopes & Eager Loading (Fixing N+1)',
    code: `// --- Local Scope in Course.php ---
public function scopePopular(Builder $query, int $minStudents = 30): void
{
    $query->where('enrolled_count', '>=', $minStudents);
}

// --- Controller Query with Eager Loading (with) ---
// Prevents the devastating N+1 query problem by loading relations in 2 queries:
$courses = Course::with(['teacher.profile', 'modules'])
    ->popular(25)
    ->latest()
    ->get();`,
    lang: 'php',
    outputType: 'artisan_cli',
    outputTitle: 'Database Query Log • Eager Loading Verification',
    cliOutput: {
      cmd: 'php artisan tinker --execute="DB::getQueryLog()"',
      status: 'Optimized into 2 queries (No N+1)',
      lines: [
        '   Query 1: SELECT * FROM courses WHERE enrolled_count >= 25 [4.1ms]',
        '   Query 2: SELECT * FROM teachers WHERE id IN (101, 102, 103) [1.8ms]',
        '   Total Execution Time: 5.9ms • Memory Peak: 1.2MB'
      ]
    },
    explanation: 'Eager loading with Course::with(...) executes a single IN query instead of executing a separate query for each row in a loop, avoiding catastrophic database latency.',
    simulation: 'eloquent'
  },

  // =========================================================================
  // WEEK 8: FORM HANDLING AND VALIDATION
  // =========================================================================
  'w8-slide2': {
    title: 'Dedicated Form Request Validation',
    code: `namespace App\\Http\\Requests;

use Illuminate\\Foundation\\Http\\FormRequest;

class StoreStudentRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user()->can('create-student');
    }

    public function rules(): array
    {
        return [
            'name'       => 'required|string|min:3|max:100',
            'student_id' => 'required|string|unique:students,student_id',
            'email'      => 'required|email|unique:students,email',
            'grade'      => 'required|integer|between:1,12',
        ];
    }
}`,
    lang: 'php',
    outputType: 'api_json',
    outputTitle: 'Validation Error Response (HTTP 422 Unprocessable Content)',
    jsonOutput: {
      message: 'The email has already been taken. (and 1 other error)',
      errors: {
        email: ['The email has already been taken.'],
        grade: ['The grade field must be between 1 and 12.']
      }
    },
    explanation: 'Form Requests keep controllers thin and readable by encapsulating authorization and validation rules in an isolated, unit-testable class.',
    simulation: 'csrf'
  },

  // =========================================================================
  // WEEK 10: ARTISAN CLI AND DATABASE MIGRATIONS
  // =========================================================================
  'w10-slide2': {
    title: 'Database Migrations Schema Blueprint',
    code: `use Illuminate\\Database\\Migrations\\Migration;
use Illuminate\\Database\\Schema\\Blueprint;
use Illuminate\\Support\\Facades\\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('quizzes', function (Blueprint $table) {
            $table->id();
            $table->foreignId('course_id')->constrained()->cascadeOnDelete();
            $table->string('title');
            $table->integer('passing_score')->default(75);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('quizzes');
    }
};`,
    lang: 'php',
    outputType: 'artisan_cli',
    outputTitle: 'Terminal CLI • php artisan migrate',
    cliOutput: {
      cmd: 'php artisan migrate',
      status: 'Migration batch executed',
      lines: [
        '   INFO  Running database migrations.',
        '   2026_09_23_000001_create_quizzes_table ........... 14.82ms DONE',
        '   ✓ All database tables synced with schema blueprint.'
      ]
    },
    explanation: 'Database migrations are version control for your database, allowing engineering teams to modify schemas across local, staging, and production environments reliably.',
    simulation: 'migration'
  },

  // =========================================================================
  // WEEK 11: AUTHENTICATION AND AUTHORIZATION
  // =========================================================================
  'w11-slide2': {
    title: 'Sanctum API Token Authentication & Gates',
    code: `use App\\Models\\User;
use Illuminate\\Support\\Facades\\Gate;
use Illuminate\\Support\\Facades\\Route;

// 1. Issue token upon verified login:
Route::post('/api/login', function (Request $request) {
    if (! Auth::attempt($request->only('email', 'password'))) {
        return response()->json(['message' => 'Invalid credentials'], 401);
    }
    
    $token = $request->user()->createToken('auth-token')->plainTextToken;
    return response()->json(['token' => $token]);
});

// 2. Protect route with auth:sanctum middleware:
Route::middleware('auth:sanctum')->get('/api/me', function (Request $request) {
    return $request->user();
});`,
    lang: 'php',
    outputType: 'api_json',
    outputTitle: 'GET /api/me (Authenticated via Bearer Token)',
    jsonOutput: {
      id: 1,
      name: 'Instructor Admin',
      email: 'admin@school.edu',
      email_verified_at: '2026-09-01T00:00:00Z',
      roles: ['instructor', 'curriculum_admin']
    },
    explanation: 'Sanctum provides lightweight API authentication for mobile apps and single-page applications using hashed SHA-256 tokens stored in the personal_access_tokens table.',
    simulation: 'csrf'
  },

  // =========================================================================
  // WEEK 12: BUILDING RESTFUL APIS
  // =========================================================================
  'w12-slide2': {
    title: 'API Resources & JSON Serialization',
    code: `namespace App\\Http\\Resources;

use Illuminate\\Http\\Request;
use Illuminate\\Http\\Resources\\Json\\JsonResource;

class CourseResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     */
    public function toArray(Request $request): array
    {
        return [
            'id'           => $this->id,
            'course_code'  => $this->code,
            'title'        => $this->title,
            'unit_credits' => $this->units,
            'enrolled'     => $this->whenLoaded('students', fn() => $this->students->count()),
            'links'        => [
                'self' => route('api.courses.show', $this->id),
            ]
        ];
    }
}`,
    lang: 'php',
    outputType: 'api_json',
    outputTitle: 'GET /api/v1/courses/1 • Standard JSON API Output',
    jsonOutput: {
      data: {
        id: 1,
        course_code: 'IT-WD3',
        title: 'Web Dev 3: Laravel Framework',
        unit_credits: 3,
        links: {
          self: 'http://localhost:8000/api/v1/courses/1'
        }
      }
    },
    explanation: 'API Resources act as a transformation layer between Eloquent models and the JSON response returned to mobile or web clients, ensuring internal database details are never leaked.',
    simulation: 'pipeline'
  },

  // =========================================================================
  // WEEK 14: TESTING AND DEBUGGING
  // =========================================================================
  'w14-slide2': {
    title: 'Automated Feature Testing with Pest PHP',
    code: `use App\\Models\\User;
use App\\Models\\Course;

// Pest Test Syntax (Default in Laravel 11)
it('allows an authenticated user to view active courses', function () {
    // 1. Arrange: Create user & mock course
    $user = User::factory()->create();
    $course = Course::factory()->create(['title' => 'Laravel 11 Mastery']);

    // 2. Act: Send authenticated HTTP GET request
    $response = $this->actingAs($user)->getJson('/api/v1/courses');

    // 3. Assert: Verify HTTP status and response payload
    $response
        ->assertStatus(200)
        ->assertJsonFragment(['title' => 'Laravel 11 Mastery']);
});`,
    lang: 'php',
    outputType: 'artisan_cli',
    outputTitle: 'Terminal CLI • php artisan test (Pest)',
    cliOutput: {
      cmd: 'php artisan test',
      status: 'PASS  Tests\\Feature\\CourseApiTest',
      lines: [
        '   ✓ it allows an authenticated user to view active courses .... 0.08s',
        '   ✓ it rejects unauthenticated guests from modifying courses . 0.04s',
        '   Tests:    2 passed (6 assertions)',
        '   Duration: 0.18s • Memory Peak: 14.2 MB'
      ]
    },
    explanation: 'Automated tests give you the confidence to refactor and upgrade your application without fear of breaking critical production workflows.',
    simulation: 'tinker'
  },

  // =========================================================================
  // WEEK 15: DEPLOYMENT AND MAINTENANCE
  // =========================================================================
  'w15-slide2': {
    title: 'Production Optimization & Caching Commands',
    code: `// --- PRODUCTION DEPLOYMENT SCRIPT ---
// 1. Install production dependencies without dev packages
composer install --no-dev --optimize-autoloader

// 2. Cache configuration files into a single optimized array
php artisan config:cache

// 3. Compile and cache route registrations for fast routing
php artisan route:cache

// 4. Precompile all Blade view templates into cached PHP code
php artisan view:cache

// 5. Execute any pending database migrations safely
php artisan migrate --force`,
    lang: 'bash',
    outputType: 'artisan_cli',
    outputTitle: 'Production Deployment Terminal Output',
    cliOutput: {
      cmd: 'php artisan optimize',
      status: 'Optimization Complete (Exit 0)',
      lines: [
        '   INFO  Configuration cached successfully.',
        '   INFO  Routes cached successfully.',
        '   INFO  Events cached successfully.',
        '   INFO  Views cached successfully.',
        '   ✓ Production server running at sub-millisecond route resolution.'
      ]
    },
    explanation: 'In production, running config:cache and route:cache eliminates file system reads on every incoming request, reducing server response times from 40ms to under 5ms.',
    simulation: 'terminal'
  },

  // =========================================================================
  // WEEK 16: CAPSTONE PROJECT & REVIEW
  // =========================================================================
  'w16-slide2': {
    title: 'Full-Stack MVC Architecture Synthesis',
    code: `// The Unified Laravel 11 Full-Stack Pattern:
// 1. Client sends request to Route:
Route::get('/catalog', [CatalogController::class, 'index']);

// 2. Controller queries Eloquent with caching:
class CatalogController extends Controller {
    public function index() {
        $courses = Cache::remember('catalog.active', 3600, fn() => 
            Course::with('teacher')->where('is_active', true)->get()
        );
        return view('catalog.index', compact('courses'));
    }
}

// 3. Blade layout renders responsive UI with components:
<x-layout title="Course Catalog">
    @foreach($courses as $course)
        <x-course-card :course="$course" />
    @endforeach
</x-layout>`,
    lang: 'php',
    outputType: 'blade_preview',
    outputTitle: 'Rendered MVC Viewport: catalog.index',
    bladeOutput: {
      title: 'Full-Stack Laravel 11 University Portal',
      badge: 'Capstone Architecture • Online',
      author: 'Graduate Web Artisan',
      status: 'Production Certified',
      content: 'Complete full-stack integration connecting HTTP routes, middleware authentication, Eloquent ORM relationships, cached database queries, and modular Blade components.'
    },
    explanation: 'Mastering the integration of Routing, Middleware, Controllers, Eloquent, and Blade completes the foundational competencies of an enterprise Laravel full-stack engineer.',
    simulation: 'pipeline'
  }
};

/**
 * Helper to fetch or generate a contextual code example for any Web Dev 3 slide
 */
export function getWebDev3SlideExample(slideId: string, slide?: any): WebDev3Example {
  if (WEBDEV3_SLIDE_EXAMPLES[slideId]) {
    return WEBDEV3_SLIDE_EXAMPLES[slideId];
  }

  // Fallback generation based on slide week prefix or keywords
  const title = slide?.title || 'Laravel 11 Implementation';
  const topic = slide?.topicTitle || 'Modern Web Application Architecture';

  if (slideId.startsWith('w1-')) {
    return WEBDEV3_SLIDE_EXAMPLES['w1-slide2'];
  }
  if (slideId.startsWith('w2-')) {
    return WEBDEV3_SLIDE_EXAMPLES['w2-slide2'];
  }
  if (slideId.startsWith('w3-')) {
    return WEBDEV3_SLIDE_EXAMPLES['w3-slide2'];
  }
  if (slideId.startsWith('w4-')) {
    return WEBDEV3_SLIDE_EXAMPLES['w4-slide2'];
  }
  if (slideId.startsWith('w6-')) {
    return WEBDEV3_SLIDE_EXAMPLES['w6-slide2'];
  }
  if (slideId.startsWith('w7-')) {
    return WEBDEV3_SLIDE_EXAMPLES['w7-slide2'];
  }
  if (slideId.startsWith('w8-')) {
    return WEBDEV3_SLIDE_EXAMPLES['w8-slide2'];
  }
  if (slideId.startsWith('w10-')) {
    return WEBDEV3_SLIDE_EXAMPLES['w10-slide2'];
  }
  if (slideId.startsWith('w11-')) {
    return WEBDEV3_SLIDE_EXAMPLES['w11-slide2'];
  }
  if (slideId.startsWith('w12-')) {
    return WEBDEV3_SLIDE_EXAMPLES['w12-slide2'];
  }
  if (slideId.startsWith('w14-')) {
    return WEBDEV3_SLIDE_EXAMPLES['w14-slide2'];
  }
  if (slideId.startsWith('w15-')) {
    return WEBDEV3_SLIDE_EXAMPLES['w15-slide2'];
  }
  if (slideId.startsWith('w16-')) {
    return WEBDEV3_SLIDE_EXAMPLES['w16-slide2'];
  }

  // General default fallback
  return {
    title: `${title} Example`,
    code: `// Laravel 11 Implementation: ${topic}
use Illuminate\\Support\\Facades\\Route;

Route::get('/api/demo', function () {
    return response()->json([
        'status'  => 'success',
        'topic'   => '${topic}',
        'version' => 'Laravel 11.x',
        'active'  => true
    ]);
});`,
    lang: 'php',
    outputType: 'api_json',
    outputTitle: 'HTTP 200 OK • Response',
    jsonOutput: {
      status: 'success',
      topic: topic,
      version: 'Laravel 11.x',
      active: true
    },
    explanation: 'Laravel 11 ensures all responses follow predictable HTTP standards and strict serialization.',
    simulation: 'pipeline'
  };
}
