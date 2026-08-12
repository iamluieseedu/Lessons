import { SlideData } from '../types/slide';

// 50 Slide Objects for Week 1: Laravel 11 Fundamentals
const slides: SlideData[] = [
  // SECTION 1: AGENDA (1-2)
  {
    id: 'laravel-slide1',
    slideNum: 1,
    totalSlides: 50,
    type: 'cover',
    title: 'Laravel 11 Fundamentals'
  },
  {
    id: 'laravel-slide2',
    slideNum: 2,
    totalSlides: 50,
    type: 'single_topic',
    moduleTag: 'Agenda',
    title: 'Course Agenda',
    topicTitle: 'What We Will Cover Today',
    bullets: [
      'Why Web Frameworks Exist: Discover the advantages of frameworks, including security features, file organization, and package installations.',
      'MVC Architecture: Understand how Model (data), View (HTML layout), and Controller (logic) components connect to run apps.',
      'Environment Setup: Install prerequisites, configure local servers using php artisan, and edit settings in the .env file.',
      'Routing, Parameters & Cycle: Declare static routes, dynamic URL variables, regular expression filters, and inspect the HTTP request lifecycle.',
      'Blade Templates & Data Flows: Render HTML pages using loops, conditional views, data binding arrays, and Controller actions.'
    ],
    keyInsight: {
      title: 'Our Goal',
      text: 'By the end of this presentation, you will be able to construct, configure, route, and render dynamic database-linked web pages in a local Laravel 11 environment.'
    },
    image: {
      url: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
      caption: 'Laravel Fundamentals Path'
    }
  },

  // SECTION 2: WHY FRAMEWORK (3-7)
  {
    id: 'laravel-slide3',
    slideNum: 3,
    totalSlides: 50,
    type: 'single_topic',
    moduleTag: 'Frameworks',
    title: 'What is a Web Framework?',
    topicTitle: 'The Pre-Built Toolbox',
    bullets: [
      'Pre-built components: A framework is a software library that provides pre-built modules for common development tasks.',
      'Core tools: It handles cookie sessions, user login checks, SQL database connectors, URL routing tables, and mail helpers.',
      'Code Standard: Standardizes how files are placed, ensuring that other developers can quickly read and maintain your project.',
      'Language wrapping: Instead of writing raw PHP code from scratch, you write structured declarations using the framework\'s classes.'
    ],
    keyInsight: {
      title: 'Framework Definition',
      text: 'A framework is like a pre-assembled toolkit. It saves you from writing repetitive code for connections, routing, and logins.'
    },
    image: {
      url: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80',
      caption: 'Framework Tool Suite Abstractions'
    }
  },
  {
    id: 'laravel-slide4',
    slideNum: 4,
    totalSlides: 50,
    type: 'single_topic',
    moduleTag: 'Frameworks',
    title: 'Security Out-of-the-Box',
    topicTitle: 'Protecting Web Applications',
    bullets: [
      'XSS Prevention: Auto-escapes user variables in views to prevent malicious scripts from executing in visitors\' browsers.',
      'SQL Injection Protection: Uses parameter binding in SQL queries, keeping users from injecting code into database checks.',
      'CSRF Protection: Attaches unique tokens to POST requests, verifying that form submissions originate from real users.',
      'Password Encryption: Uses secure hashing algorithms (like bcrypt) to encrypt database passwords automatically.'
    ],
    keyInsight: {
      title: 'Security Standard',
      text: 'Writing custom security filters in raw PHP is difficult and error-prone. Laravel activates these protections by default.'
    },
    image: {
      url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
      caption: 'Securing Web Applications against Hackers'
    }
  },
  {
    id: 'laravel-slide5',
    slideNum: 5,
    totalSlides: 50,
    type: 'single_topic',
    moduleTag: 'Frameworks',
    title: 'Automated Tooling',
    topicTitle: 'Boosting Developer Productivity',
    bullets: [
      'Artisan CLI: The command-line utility that creates files, runs migrations, and handles background processes.',
      'Database Migrations: Define database tables directly in PHP code, allowing team members to synchronize schemas instantly.',
      'Composer packages: Install third-party libraries (like PDF generators or social logins) with simple commands.',
      'Task Schedulers: Schedule console commands to run at specific times (like daily database backups) in a single configuration file.'
    ],
    keyInsight: {
      title: 'Tooling Benefit',
      text: 'Laravel\'s CLI tools automate repetitive tasks, allowing you to build features instead of writing boilerplate setup code.'
    },
    image: {
      url: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=800&q=80',
      caption: 'Automated Command Line Utilities'
    }
  },
  {
    id: 'laravel-slide6',
    slideNum: 6,
    totalSlides: 50,
    type: 'single_topic',
    moduleTag: 'Frameworks',
    title: 'Composer Dependency Manager',
    topicTitle: 'Managing PHP Packages',
    bullets: [
      'What is Composer? The standard package dependency manager for the PHP ecosystem.',
      'File listings: Declares external packages, libraries, and code requirements in composer.json.',
      'Autoloading: Manages PHP namespace imports automatically, allowing you to load files without manually writing require() statements.',
      'Updating: Updates third-party libraries and verifies dependency compatibility with single commands.'
    ],
    keyInsight: {
      title: 'Composer Tip',
      text: 'Composer functions like npm for Node.js. It manages and updates all the external libraries your application relies on.'
    },
    image: {
      url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
      caption: 'composer.json Package Registries'
    }
  },
  {
    id: 'laravel-slide7',
    slideNum: 7,
    totalSlides: 50,
    type: 'single_topic',
    moduleTag: 'Frameworks',
    title: 'Why Use a Framework Simulation',
    topicTitle: 'Raw PHP vs Laravel Framework Code',
    bullets: [
      'Inspect the simulator: Toggling between the tabs on Slide 7 demonstrates how raw PHP requires writing manual database connections, query filters, XSS escapes, and form tokens.',
      'Raw PHP: Hard to read, susceptible to SQL Injection, and requires duplicate code across pages.',
      'Laravel: Abstracts query actions, handles security filters, and renders views in single statements.'
    ],
    keyInsight: {
      title: 'Comparison Summary',
      text: 'Using a framework allows you to accomplish complex database and security operations in short, clean statements.'
    },
    image: {
      url: 'https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=800&q=80',
      caption: 'Raw PHP vs Framework Efficiency comparison'
    }
  },

  // SECTION 3: MVC IN-DEPTH (8-14)
  {
    id: 'laravel-slide8',
    slideNum: 8,
    totalSlides: 50,
    type: 'versus',
    moduleTag: 'MVC',
    title: 'MVC Architecture Overview',
    topicTitle: 'The Model-View-Controller Cycle',
    versusLeft: {
      title: 'Model & View',
      bullets: [
        'Model (Data): Represents your tables and data rules. Executes query commands on databases.',
        'View (Interface): The front-end template rendering HTML markup, CSS styling, and user-facing layouts.'
      ]
    },
    versusRight: {
      title: 'Controller (Logic)',
      bullets: [
        'Controller: Receives browser inputs, requests records from the Model, and passes values to the View.',
        'Isolates backend business computations from layout files.'
      ]
    },
    keyInsight: {
      title: 'Decoupled Design',
      text: 'Separating components ensures frontend engineers can update page markup files without affecting database connections or routes.'
    },
    image: {
      url: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80',
      caption: 'MVC Architecture Pattern'
    }
  },
  {
    id: 'laravel-slide9',
    slideNum: 9,
    totalSlides: 50,
    type: 'code',
    moduleTag: 'MVC',
    title: 'M - The Model (Database ORM)',
    topicTitle: 'Eloquent ORM Database Mapper',
    code: `<?php\n\nnamespace App\\Models;\n\nuse Illuminate\\Database\\Eloquent\\Model;\n\nclass User extends Model\n{\n    // Maps to the "users" database table automatically\n}`,
    bullets: [
      'Model definition: Represents a database table. In Laravel, this class is an Eloquent Model.',
      'No SQL queries needed: Models allow you to fetch, update, and delete database rows using PHP methods instead of writing SQL queries.',
      'Naming convention: Model names are singular (e.g. User), mapping to plural database tables (e.g. users) automatically.'
    ],
    keyInsight: {
      title: 'Model Benefit',
      text: 'Instead of writing "SELECT * FROM users", you call "User::all()". Laravel translates this PHP method into a SQL query automatically.'
    }
  },
  {
    id: 'laravel-slide10',
    slideNum: 10,
    totalSlides: 50,
    type: 'single_topic',
    moduleTag: 'MVC',
    title: 'Model ORM Playground',
    topicTitle: 'Simulating Eloquent ORM to SQL Translations',
    bullets: [
      'Try the playground: Click the buttons on Slide 10 to see how calling PHP ORM methods translates into SQL queries.',
      'Active records: Laravel\'s Eloquent ORM maps table rows to PHP object instances.',
      'Query bindings: Variables pass through safe parameterized buffers, preventing SQL injection vectors.'
    ],
    keyInsight: {
      title: 'ORM Tip',
      text: 'Parameters in where() clauses are sanitized automatically, shielding database engines from malicious inputs.'
    },
    image: {
      url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      caption: 'Eloquent Database Mapping Translations'
    }
  },
  {
    id: 'laravel-slide11',
    slideNum: 11,
    totalSlides: 50,
    type: 'code',
    moduleTag: 'MVC',
    title: 'V - The View (Blade Layout)',
    topicTitle: 'Client HTML view templates',
    code: `<!-- resources/views/welcome.blade.php -->\n<!DOCTYPE html>\n<html>\n<body>\n    <h1>Welcome, {{ $name }}</h1>\n    <p>Logged in: {{ date('Y-m-d') }}</p>\n</body>\n</html>`,
    bullets: [
      'The presentation layer: Views contain the HTML markup rendered to visitors.',
      'Blade templates: Files use the extension .blade.php and compile dynamic variables inside double curly braces: {{ $variable }}.',
      'Location: View templates are stored inside resources/views/ directory.'
    ],
    keyInsight: {
      title: 'View isolation',
      text: 'Views should not contain database queries or controller logic. Keep templates limited to displaying layout tags.'
    }
  },
  {
    id: 'laravel-slide12',
    slideNum: 12,
    totalSlides: 50,
    type: 'code',
    moduleTag: 'MVC',
    title: 'Blade Directives & File Paths',
    topicTitle: 'Clean Template Rendering Loops',
    code: `@extends('layouts.app')\n\n@section('content')\n    <h3>Active Tasks</h3>\n    @foreach($tasks as $task)\n        <p>{{ $task }}</p>\n    @endforeach\n@endsection`,
    bullets: [
      'Folder layout dot-syntax: Dot-notation resolves folders without slashes: view(\'admin.profile\') resolves resources/views/admin/profile.blade.php.',
      'Template inheritance: Use @extends(\'layouts.app\') to load layout styles and inject custom views.',
      'Output caching: Templates compile to pure PHP on the server, ensuring fast page load speeds.'
    ],
    keyInsight: {
      title: 'View Compilation Tip',
      text: 'Dot notation keeps paths clean. Dots behave like directory separating slashes across all host operating systems.'
    }
  },
  {
    id: 'laravel-slide13',
    slideNum: 13,
    totalSlides: 50,
    type: 'code',
    moduleTag: 'MVC',
    title: 'C - The Controller (Logical Broker)',
    topicTitle: 'Brokering Requests & Model parameters',
    code: `<?php\n\nnamespace App\\Http\\Controllers;\n\nuse App\\Models\\User;\n\nclass UserController extends Controller\n{\n    public function show($id)\n    {\n        $user = User::findOrFail($id);\n        return view('profile', compact('user'));\n    }\n}`,
    bullets: [
      'Logical mediator: The controller contains the code rules handling incoming browser requests.',
      'Model queries: Calls Eloquent models to fetch appropriate database records.',
      'View binding: Feeds retrieved records to view templates and returns the compiled HTML to the visitor.'
    ],
    keyInsight: {
      title: 'Controller Rule of Thumb',
      text: 'Keep controllers simple. Move database definitions into models, and layout details into views.'
    }
  },
  {
    id: 'laravel-slide14',
    slideNum: 14,
    totalSlides: 50,
    type: 'single_topic',
    moduleTag: 'MVC',
    title: 'Controller Flow Simulator',
    topicTitle: 'Visualizing MVC request cycles',
    bullets: [
      'Interactive trace: Toggling steps on Slide 14 shows a request flowing through the controller to models and views.',
      'Browser request: User visits /user/5 URL path.',
      'Controller fetch: Controller intercepts parameter id 5 and queries User Model.',
      'View response: Controller injects user object parameters into profile view and returns final HTML.'
    ],
    keyInsight: {
      title: 'Data Loop Summary',
      text: 'The controller governs the entire execution flow: request variables capture → Model query → View template compilation.'
    },
    image: {
      url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      caption: 'MVC Loop: Request to View Response'
    }
  },

  // SECTION 4: LOCAL SETUP (15-20)
  {
    id: 'laravel-slide15',
    slideNum: 15,
    totalSlides: 50,
    type: 'bullets',
    moduleTag: 'Setup',
    title: 'Prerequisites & Bootstrapping',
    topicTitle: 'System Requirements for Laravel 11',
    bullets: [
      'PHP Runtime: Requires PHP 8.2 or higher installed on your computer.',
      'Dependency Manager: Composer CLI is needed to install the framework and third-party PHP packages.',
      'Database Engine: MySQL, PostgreSQL, or a simple SQLite file resolver is required to store application data.',
      'Creation command: Run composer create-project laravel/laravel:^11.0 project-name in your terminal.'
    ],
    keyInsight: {
      title: 'Composer check',
      text: 'Verify your installations by running "php -v" and "composer -v" inside your terminal before running installation commands.'
    },
    image: {
      url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
      caption: 'Validating CLI Runtimes'
    }
  },
  {
    id: 'laravel-slide16',
    slideNum: 16,
    totalSlides: 50,
    type: 'code',
    moduleTag: 'Setup',
    title: 'CLI Commands & Serve Startup',
    topicTitle: 'Booting Local Servers',
    code: `// Start local server in project folder:\nphp artisan serve\n\n// Mapped response:\n// INFO Server running on [http://127.0.0.1:8000]`,
    bullets: [
      'Artisan CLI: The command-line utility included in the root folder of your project.',
      'Serve command: Run "php artisan serve" inside your project directory to boot the built-in development server.',
      'Network Address: Access your application by navigating to http://127.0.0.1:8000 in your browser.'
    ],
    keyInsight: {
      title: 'Artisan Serve Tip',
      text: 'You do not need to install complex web servers (like Nginx or Apache) locally. Artisan serve maps PHP\'s built-in web server automatically.'
    }
  },
  {
    id: 'laravel-slide17',
    slideNum: 17,
    totalSlides: 50,
    type: 'single_topic',
    moduleTag: 'Setup',
    title: 'Interactive Artisan Console',
    topicTitle: 'Simulating Local Serve Logs',
    bullets: [
      'Try the terminal: Click "Boot Artisan Server" on Slide 17 to start the simulated local server.',
      'Network log output: Once active, simulate clicking "Send Request" to pipe live URL access logs.',
      'Log variables: Each entry displays status codes (e.g. 200 OK) and mapped paths.'
    ],
    keyInsight: {
      title: 'Artisan Logs',
      text: 'The terminal prints request logs, showing you when pages load successfully or fail with error codes.'
    },
    image: {
      url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
      caption: 'Terminal Console Log simulation'
    }
  },
  {
    id: 'laravel-slide18',
    slideNum: 18,
    totalSlides: 50,
    type: 'bullets',
    moduleTag: 'Setup',
    title: 'Port Bindings & Network configurations',
    topicTitle: 'Managing Port Configurations',
    bullets: [
      'Default port: The server binds by default to network port 8000.',
      'Port Override: If port 8000 is occupied, you can run: php artisan serve --port=8080.',
      'Host mapping: Share the site over your local network by running: php artisan serve --host=0.0.0.0.',
      'Terminal exit: Press Ctrl+C inside the terminal to stop the local serving thread.'
    ],
    keyInsight: {
      title: 'Network Tip',
      text: 'Binding to host 0.0.0.0 allows you to test the local application on external devices (like mobile phones) on the same Wi-Fi connection.'
    },
    image: {
      url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
      caption: 'Network IP and Port Bindings'
    }
  },
  {
    id: 'laravel-slide19',
    slideNum: 19,
    totalSlides: 50,
    type: 'code',
    moduleTag: 'Setup',
    title: 'Environment Variables (.env)',
    topicTitle: 'Managing Setting Parameters',
    code: `APP_NAME=Laravel\nAPP_ENV=local\nAPP_DEBUG=true\nAPP_URL=http://127.0.0.1:8000\n\nDB_CONNECTION=mysql\nDB_HOST=127.0.0.1\nDB_PORT=3306`,
    bullets: [
      'The .env file: Located in your project\'s root directory, this file stores configurations unique to your local machine (e.g. database credentials).',
      'APP_ENV: Tells the application whether it is running in "local" development or "production" mode.',
      'APP_DEBUG: Set to true in development to display detailed error reports when code fails.'
    ],
    keyInsight: {
      title: 'Security Notice',
      text: 'Set APP_DEBUG=false on production web servers to prevent visitors from seeing database credentials and code errors when problems occur.'
    }
  },
  {
    id: 'laravel-slide20',
    slideNum: 20,
    totalSlides: 50,
    type: 'bullets',
    moduleTag: 'Setup',
    title: 'APP_KEY Cryptography Variables',
    topicTitle: 'Securing Session and Cookie Encryptions',
    bullets: [
      'What is APP_KEY? A random 32-character string used to encrypt session data, user cookies, and passwords.',
      'Generation command: Generated automatically during install, or created by running: php artisan key:generate.',
      'Storage: Saved inside APP_KEY variable in your .env file.',
      'Version Control: Never commit your .env file to public Git repositories (like GitHub).'
    ],
    keyInsight: {
      title: 'APP_KEY Security',
      text: 'If you lose or change the APP_KEY in production, existing encrypted data (such as user cookies) will become unreadable.'
    },
    image: {
      url: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=80',
      caption: 'Key Generation and App Security'
    }
  },

  // SECTION 5: ROUTING (21-27)
  {
    id: 'laravel-slide21',
    slideNum: 21,
    totalSlides: 50,
    type: 'bullets',
    moduleTag: 'Routing',
    title: 'Routing Tables',
    topicTitle: 'Web request entry points',
    bullets: [
      'URL mappings: The router defines the paths and endpoints accessible in your application.',
      'File location: Declared in routes/web.php.',
      'Routing flow: When a user visits a page, the routing engine scans web.php for a matching URL path.',
      'Fallback: If no match is found, Laravel automatically displays a 404 Page Not Found error.'
    ],
    keyInsight: {
      title: 'Routing Tip',
      text: 'Think of the routing table as the directory directory of your web application, linking URLs to code actions.'
    },
    image: {
      url: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80',
      caption: 'Routing Table Operations'
    }
  },
  {
    id: 'laravel-slide22',
    slideNum: 22,
    totalSlides: 50,
    type: 'code',
    moduleTag: 'Routing',
    title: 'HTTP Action Verbs',
    topicTitle: 'Matching Request Methods',
    code: `Route::get('/items', [ItemController::class, 'index']);\nRoute::post('/items', [ItemController::class, 'store']);\nRoute::put('/items/{id}', [ItemController::class, 'update']);\nRoute::delete('/items/{id}', [ItemController::class, 'destroy']);`,
    bullets: [
      'Request verbs: Matches standard HTTP actions (GET, POST, PUT, DELETE).',
      'Route::get(): Used to load pages and fetch resource lists.',
      'Route::post(): Used to send form data and create new database records.'
    ],
    keyInsight: {
      title: 'RESTful Routing Tip',
      text: 'Using explicit HTTP verbs ensures pages only respond to correct actions, preventing browser refresh loops from resubmitting form data.'
    }
  },
  {
    id: 'laravel-slide23',
    slideNum: 23,
    totalSlides: 50,
    type: 'code',
    moduleTag: 'Routing',
    title: 'Closures vs Controllers',
    topicTitle: 'Organizing Route Code',
    code: `// Route Closure callback (Good for quick stubs):\nRoute::get('/hello', function () {\n    return 'Hello, Laravel!';\n});\n\n// Controller Class mapping (Standard for real-world apps):\nRoute::get('/user/{id}', [UserController::class, 'show']);`,
    bullets: [
      'Route Closures: Anonymous functions defined inline. Useful for quick testing or small static pages.',
      'Controllers: Class methods defined in separate files. Standard practice for organizing real-world applications.',
      'Clean Code: Moving logic to controllers keeps routes/web.php readable.'
    ],
    keyInsight: {
      title: 'Routing Organization Rule',
      text: 'Use closures for quick stubs. Move complex logic to controller classes to keep your code organized.'
    }
  },
  {
    id: 'laravel-slide24',
    slideNum: 24,
    totalSlides: 50,
    type: 'code',
    moduleTag: 'Routing',
    title: 'Dynamic Route Parameters',
    topicTitle: 'Extracting URL Segment values',
    code: `// routes/web.php\nRoute::get('/user/{id}', function ($id) {\n    return "User Account ID: " . $id;\n});`,
    bullets: [
      'URL variables: Capture dynamic segments in URLs by wrapping them in curly braces: {parameter}.',
      'Argument mapping: The routing engine passes these values as parameters to the closure or controller method.',
      'Database keys: Dynamic parameters frequently represent table ID columns.'
    ],
    keyInsight: {
      title: 'Dynamic Routing Tip',
      text: 'If a user visits "/user/15", the $id variable compiles to 15, allowing your controller to query user 15.'
    }
  },
  {
    id: 'laravel-slide25',
    slideNum: 25,
    totalSlides: 50,
    type: 'code',
    moduleTag: 'Routing',
    title: 'Optional Route Parameters',
    topicTitle: 'Handling Missing URL segments',
    code: `Route::get('/user/{name?}', function ($name = 'Guest') {\n    return "Welcome back, " . $name;\n});`,
    bullets: [
      'Optional segments: Mark a parameter as optional by appending a question mark: {parameter?}.',
      'PHP defaults: Declare a default value in your callback parameter signature to handle cases where the URL segment is missing.',
      'Flexible paths: Helps manage search filters or user dashboards with a single route.'
    ],
    keyInsight: {
      title: 'Optional parameters requirement',
      text: 'If a parameter is marked optional, you must specify a default value in your PHP parameter declaration to avoid errors.'
    }
  },
  {
    id: 'laravel-slide26',
    slideNum: 26,
    totalSlides: 50,
    type: 'code',
    moduleTag: 'Routing',
    title: 'Regular Expression Constraints',
    topicTitle: 'Validating URL Parameter Formats',
    code: `Route::get('/user/{id}', function ($id) {\n    return 'User ID: ' . $id;\n})->where('id', '[0-9]+');\n\nRoute::get('/user/{name}', ...)->whereAlpha('name');`,
    bullets: [
      'Input validation: Chain the where() method to restrict parameter formats.',
      'Constraint helpers: Helper methods like whereNumber(\'id\') or whereAlpha(\'name\') simplify format checks.',
      'Security boundaries: If input characters do not match the format, Laravel throws a 404 error.'
    ],
    keyInsight: {
      title: 'Input Validation benefit',
      text: 'Applying route constraints prevents database queries from running with invalid or malicious parameters.'
    }
  },
  {
    id: 'laravel-slide27',
    slideNum: 27,
    totalSlides: 50,
    type: 'code',
    moduleTag: 'Routing',
    title: 'Route Naming Attributes',
    topicTitle: 'Decoupling links from URL paths',
    code: `Route::get('/user/profile', function () {\n    return 'Profile Settings';\n})->name('profile');\n\n// Generate the link dynamically in HTML views:\n<a href="{{ route('profile') }}">My Settings</a>`,
    bullets: [
      'Named routes: Chain the name() method to route declarations to assign identifier aliases.',
      'Dynamic URLs: Use the route(\'alias\') helper to render links in Blade views automatically.',
      'Flexibility: Allows you to change URL paths in routes/web.php without breaking links across your templates.'
    ],
    keyInsight: {
      title: 'Named Routing Rule',
      text: 'Named routes isolate your views from changes to URL paths. Modifying "/user/profile" to "/my-profile" won\'t break links if you use route().'
    }
  },

  // SECTION 6: LIFECYCLE (28-31)
  {
    id: 'laravel-slide28',
    slideNum: 28,
    totalSlides: 50,
    type: 'bullets',
    moduleTag: 'Lifecycle',
    title: 'The HTTP Request-Response Cycle',
    topicTitle: 'Mapping Application Request Pipelines',
    bullets: [
      'Entry point: Browser requests enter the entry file: public/index.php.',
      'Bootstrapping: The kernel registers configurations and starts service providers.',
      'Middleware filtering: The request passes through global middleware layers (verifying sessions and cookies).',
      'Routing dispatcher: Matches path patterns, executes middleware stacks, and routes calls to controller methods.'
    ],
    keyInsight: {
      title: 'Lifecycle Overview',
      text: 'Browser Request → index.php → HTTP Kernel → Global Middlewares → Routing Dispatcher → Controller actions → Response rendering.'
    },
    image: {
      url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      caption: 'The HTTP Request pipeline flow diagram'
    }
  },
  {
    id: 'laravel-slide29',
    slideNum: 29,
    totalSlides: 50,
    type: 'code',
    moduleTag: 'Lifecycle',
    title: 'Intercepting Request Inputs',
    topicTitle: 'Extracting User Parameters',
    code: `use Illuminate\\Http\\Request;\n\nRoute::get('/search', function (Request $request) {\n    $term = $request->query('term');\n    $email = $request->input('email');\n    \n    return 'Search term: ' . $term;\n});`,
    bullets: [
      'Request object: Inject Illuminate\\Http\\Request into closures or controller methods.',
      'Query inputs: Access URL query parameters: $request->query(\'term\') or request(\'term\').',
      'Form inputs: Access POST variables: $request->input(\'email\').',
      'All inputs: Call $request->all() to retrieve the entire input payload.'
    ],
    keyInsight: {
      title: 'Dev Tip: Request Helpers',
      text: 'You can also access the request instance using the global helper function: request(\'email\').'
    }
  },
  {
    id: 'laravel-slide30',
    slideNum: 30,
    totalSlides: 50,
    type: 'single_topic',
    moduleTag: 'Lifecycle',
    title: 'The Interactive HTTP Route Tester',
    topicTitle: 'Simulate Live Requests & Parameter Routing',
    bullets: [
      'Try the tester: Select HTTP methods and input path segments in the Postman simulator to test routing behaviors.',
      'Extract Query variables: Access query parameters using $request->query(\'term\') or request(\'term\').',
      'Extract POST parameters: Retrieve request variables: $request->input(\'email\').',
      'JSON structures: Laravel automatically formats array returns into JSON headers.'
    ],
    keyInsight: {
      title: 'Tester Goal',
      text: 'This tester simulates Laravel\'s router logic, resolving paths, extracting parameters, and returning HTTP responses.'
    },
    image: {
      url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      caption: 'Simulating API and Route mappings'
    }
  },
  {
    id: 'laravel-slide31',
    slideNum: 31,
    totalSlides: 50,
    type: 'code',
    moduleTag: 'Lifecycle',
    title: 'JSON API Responses',
    topicTitle: 'Building REST API Endpoints',
    code: `use Illuminate\\Http\\Request;\n\nRoute::get('/search', function (Request $request) {\n    $term = $request->query('term');\n    \n    // Returning arrays auto-sets application/json headers\n    return [\n        'search_term' => $term,\n        'status' => 'success'\n    ];\n});`,
    bullets: [
      'JSON Formatting: Returning PHP arrays or collections automatically formats the HTTP output as JSON.',
      'Header setting: Laravel sets the HTTP header "Content-Type: application/json" automatically.',
      'Database API: Speeds up development, enabling quick integration with SPA frameworks (like React/Vue/Next.js).'
    ],
    keyInsight: {
      title: 'Dev Tip: JSON API',
      text: 'Returning arrays is the quickest way to create API stubs for frontend consumption (e.g. React/Next.js integrations).'
    }
  },

  // SECTION 7: BLADE RENDERING (32-37)
  {
    id: 'laravel-slide32',
    slideNum: 32,
    totalSlides: 50,
    type: 'bullets',
    moduleTag: 'Views',
    title: 'Rendering Blade HTML Views',
    topicTitle: 'Decoupled Front-End Layout Composition',
    bullets: [
      'Blade Engine: Laravel\'s built-in template compiler. Blends HTML with custom Blade statements.',
      'View paths: File templates are saved in resources/views/ using the .blade.php extension.',
      'The view() helper: Loads templates: return view(\'home\'); looks for resources/views/home.blade.php.',
      'Compilation loops: Server compiles layouts to optimize CPU cycles during execution.'
    ],
    keyInsight: {
      title: 'Developer Insight: Template Cache Directory',
      text: 'Laravel caches compiled views in storage/framework/views/. Compiled PHP files run directly, skipping compilation loops unless changes are detected.'
    },
    image: {
      url: 'https://images.unsplash.com/photo-1627398242454-45a1465c2079?auto=format&fit=crop&w=800&q=80',
      caption: 'Rendering Blade views'
    }
  },
  {
    id: 'laravel-slide33',
    slideNum: 33,
    totalSlides: 50,
    type: 'code',
    moduleTag: 'Views',
    title: 'Dot notation folder resolution',
    topicTitle: 'Organizing Nested View Folders',
    code: `// routes/web.php\nRoute::get('/admin', function () {\n    // Resolves to: resources/views/admin/dashboard.blade.php\n    return view('admin.dashboard');\n});`,
    bullets: [
      'Folder navigation: Dot-syntax resolves subfolders without manual directory slash characters.',
      'Organization patterns: Keep views modular by grouping directories by model namespace (e.g. resources/views/users/index.blade.php).',
      'Asset checks: Use View::exists(\'admin.dashboard\') to dynamically verify template existence.'
    ],
    keyInsight: {
      title: 'Dot-Syntax View Resolution',
      text: 'Using dot notation maps file references safely across Windows, Linux, and macOS platforms.'
    }
  },
  {
    id: 'laravel-slide34',
    slideNum: 34,
    totalSlides: 50,
    type: 'code',
    moduleTag: 'Views',
    title: 'Shorthand Dynamic Curly Output',
    topicTitle: 'Printing PHP variables',
    code: `<!-- resources/views/welcome.blade.php -->\n<h3>Hello, {{ $username }}</h3>\n<p>Active status: {{ $status }}</p>\n<p>Calculation check: {{ 5 * 10 }}</p>`,
    bullets: [
      'Variable output: Print variable values using double curly braces: {{ $variable }}.',
      'PHP translation: Compiles directly to: <?php echo e($variable); ?>.',
      'Shorthand rendering: Replaces verbose PHP echo tags.'
    ],
    keyInsight: {
      title: 'Blade syntax: Double Curly Braces',
      text: 'Double curly braces can print any PHP execution results, such as function returns or calculations.'
    }
  },
  {
    id: 'laravel-slide35',
    slideNum: 35,
    totalSlides: 50,
    type: 'bullets',
    moduleTag: 'Views',
    title: 'XSS Security & HTML Escaping',
    topicTitle: 'Mitigating Script Injection Vectors',
    bullets: [
      'Cross-site scripting: Double curly braces {{ $variable }} automatically parse variable values using PHP\'s htmlspecialchars() function.',
      'Entity conversion: Special chars (like <, >, &) convert safely into HTML entity codes (e.g. &lt;, &gt;).',
      'Browser safety: Prevents users from injecting malicious script commands into layouts.',
      'Default security: Enforces auto-escaping on all dynamic values.'
    ],
    keyInsight: {
      title: 'XSS Security & HTML Escaping',
      text: 'Always use double curly braces when printing user inputs. This prevents malicious scripts from running in browser sessions.'
    },
    image: {
      url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
      caption: 'XSS Sanitizers & Script Blockers'
    }
  },
  {
    id: 'laravel-slide36',
    slideNum: 36,
    totalSlides: 50,
    type: 'code',
    moduleTag: 'Views',
    title: 'Printing Unescaped Raw HTML',
    topicTitle: 'Bypassing output sanitizers',
    code: `// resources/views/article.blade.php\n// rawHtml = "<strong>Alice</strong>"\n<p>Author: {!! $rawHtml !!}</p>`,
    bullets: [
      'Unescaped output: To print raw unescaped values, wrap them in: {!! $variable !!}.',
      'PHP mapping: Compiles directly to: <?php echo $variable; ?>.',
      'Use cases: Printing rich markdown descriptions or formatted text.',
      'Risk vector: Unsanitized input prints execute scripts instantly, opening XSS vulnerabilities.'
    ],
    keyInsight: {
      title: 'Printing Unescaped Raw HTML',
      text: 'Only print unescaped raw outputs if the source dataset is fully trusted and sanitized beforehand.'
    }
  },
  {
    id: 'laravel-slide37',
    slideNum: 37,
    totalSlides: 50,
    type: 'bullets',
    moduleTag: 'Views',
    title: 'Blade Directives Overview',
    topicTitle: 'Directive Shorthand macros',
    bullets: [
      'Compiler shortcuts: Blade directives begin with the "@" character.',
      'Looping and conditionals: Clean syntax replaces verbose PHP opening and closing brackets.',
      'Compile-time caching: Directives compile into PHP code blocks on the server.',
      'Standard directives: Common structures include @if, @foreach, @auth, @guest, @csrf.'
    ],
    keyInsight: {
      title: 'Blade Compiler Engine',
      text: 'At runtime, Laravel parses Blade tokens using regular expressions, caching the final PHP script.'
    },
    image: {
      url: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?auto=format&fit=crop&w=800&q=80',
      caption: 'Writing Blade Directives in HTML Layouts'
    }
  },

  // SECTION 8: BLADE DIRECTIVES & PLAYGROUND (38-42)
  {
    id: 'laravel-slide38',
    slideNum: 38,
    totalSlides: 50,
    type: 'code',
    moduleTag: 'Views',
    title: 'Blade Conditionals',
    topicTitle: 'Conditional Layout rendering',
    code: `@if($role === 'admin')\n    <p>Admin panel active</p>\n@elseif($role === 'editor')\n    <p>Editor panel active</p>\n@else\n    <p>User view</p>\n@endif`,
    bullets: [
      'Control flow: Render HTML blocks using: @if, @elseif, @else, and @endif.',
      'Logical evaluations: Directive parameters process normal PHP logic evaluations.',
      'Auth helpers: Output layouts based on authorization: @auth displays blocks for logged-in sessions only.'
    ],
    keyInsight: {
      title: 'Blade Conditionals',
      text: 'Avoid checking Auth::check() inside if blocks. Use the clean @auth and @guest directives.'
    }
  },
  {
    id: 'laravel-slide39',
    slideNum: 39,
    totalSlides: 50,
    type: 'code',
    moduleTag: 'Views',
    title: 'Blade Loops: @foreach',
    topicTitle: 'Iterating through data arrays',
    code: `<!-- resources/views/users.blade.php -->\n<ul>\n    @foreach($users as $user)\n        <li>User: {{ $user }}</li>\n    @endforeach\n</ul>`,
    bullets: [
      'Array loops: Loop over array structures using: @foreach($items as $item) and @endforeach.',
      'Markup interpolation: Outputs HTML elements dynamically (e.g. lists, select option tags).',
      'Backend mapping: Translates directly into native PHP foreach loop structures.'
    ],
    keyInsight: {
      title: 'Blade Loops: @foreach',
      text: 'Always make sure variables passed to @foreach loops are arrays or iterable collections, otherwise PHP compiles with error logs.'
    }
  },
  {
    id: 'laravel-slide40',
    slideNum: 40,
    totalSlides: 50,
    type: 'code',
    moduleTag: 'Views',
    title: 'The scoped $loop variable',
    topicTitle: 'Tracking Loop Metadata',
    code: `@foreach($users as $user)\n    @if($loop->first)\n        <li class="active">{{ $user }}</li>\n    @else\n        <li>{{ $user }}</li>\n    @endif\n@endforeach`,
    bullets: [
      'Iteration details: Access loop metadata using the special $loop variable inside @foreach loops.',
      'Index variables: $loop->index starts at 0; $loop->iteration starts at 1.',
      'Boundary checks: $loop->first and $loop->last return boolean states.'
    ],
    keyInsight: {
      title: 'The scoped $loop variable',
      text: 'Apply specific CSS styles based on loop metadata (e.g., class="border-b" on all but the last item using $loop->last).'
    }
  },
  {
    id: 'laravel-slide41',
    slideNum: 41,
    totalSlides: 50,
    type: 'code',
    moduleTag: 'Views',
    title: 'Blade Loops: @forelse & @empty',
    topicTitle: 'Handling Empty Arrays Cleanly',
    code: `@forelse($users as $user)\n    <li>User: {{ $user }}</li>\n@empty\n    <p>No records found.</p>\n@endforelse`,
    bullets: [
      'Shorthand loops: @forelse combines loop execution and empty array checks.',
      'Fallback handler: The @empty directive renders fallback HTML if the dataset contains no records.',
      'Closing directive: Ends with: @endforelse.'
    ],
    keyInsight: {
      title: 'Blade Loops: @forelse & @empty',
      text: 'Using @forelse replaces the need to wrap loops in nested @if(count($items) > 0) conditionals, keeping template code clean.'
    }
  },
  {
    id: 'laravel-slide42',
    slideNum: 42,
    totalSlides: 50,
    type: 'single_topic',
    moduleTag: 'Views',
    title: 'The Interactive Blade Playground',
    topicTitle: 'Blade Conditionals & Loops Customizer',
    bullets: [
      'Blade Conditionals: Evaluate values using @if(expr), @elseif, @else, and @endif.',
      'Toggles test: Use the checkboxes in the simulator to toggle session states and parameters.',
      'Auth helpers: Output layouts based on authorization: @auth displays blocks for logged-in sessions only.',
      'Loops iteration: Loop over dynamic arrays and lists using: @foreach ($items as $item).'
    ],
    keyInsight: {
      title: 'Playground Goal',
      text: 'This playground compiles variable configurations in real-time, displaying the processed HTML outputs.'
    },
    image: {
      url: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?auto=format&fit=crop&w=800&q=80',
      caption: 'Toggling view layouts dynamically'
    }
  },

  // SECTION 9: DATA BINDINGS & CONTROLLER MAPPINGS (43-50)
  {
    id: 'laravel-slide43',
    slideNum: 43,
    totalSlides: 50,
    type: 'bullets',
    moduleTag: 'Data Flow',
    title: 'Data Binding Flows',
    topicTitle: 'Passing Parameters to Views',
    bullets: [
      'Parameter values: Pass variables from routes or controllers into views.',
      'Variables extraction: Array values map to local variable scopes in templates.',
      'Isolation: Views are isolated from global variables, preventing state contamination.',
      'Scope bounds: Templates access variables defined during the view compilation process.'
    ],
    keyInsight: {
      title: 'Data Binding Flows',
      text: 'Controller Action (Extracts database data) → package parameter variables → view() helper → Blade Compiler (binds variables) → rendered HTML output.'
    },
    image: {
      url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      caption: 'Binding parameters dynamically to layout templates'
    }
  },
  {
    id: 'laravel-slide44',
    slideNum: 44,
    totalSlides: 50,
    type: 'code',
    moduleTag: 'Data Flow',
    title: 'Data Binding via Arrays',
    topicTitle: 'Associative Array parameters',
    code: `Route::get('/user', function () {\n    return view('profile', [\n        'name' => 'Alice',\n        'email' => 'alice@example.com'\n    ]);\n});`,
    bullets: [
      'Parameters syntax: Feed associative arrays as the second argument: view(\'home\', [\'name\' => $name]).',
      'Key mappings: The array key name becomes the template variable name: key \'name\' maps to variable $name.',
      'Dynamic arrays: Pass database collections or inputs directly to view scopes.'
    ],
    keyInsight: {
      title: 'Data Binding via Arrays',
      text: 'Laravel utilizes extract() under the hood to assign variables within the views local scope, preventing state contamination.'
    }
  },
  {
    id: 'laravel-slide45',
    slideNum: 45,
    totalSlides: 50,
    type: 'code',
    moduleTag: 'Data Flow',
    title: 'Data Binding via compact()',
    topicTitle: 'Wrapping Local Variables Cleanly',
    code: `Route::get('/user', function () {\n    $name = 'Alice';\n    $email = 'alice@example.com';\n    \n    // Shorthand syntax mapping variable values\n    return view('profile', compact('name', 'email'));\n});`,
    bullets: [
      'PHP helper: compact() creates associative arrays from local variable scopes.',
      'Parameters mapping: Pass string names matching variable names: compact(\'name\', \'email\').',
      'Shorthand view calls: return view(\'profile\', compact(\'user\'));.'
    ],
    keyInsight: {
      title: 'Data Binding via compact()',
      text: 'Ensure the string names passed to compact() match your variable names exactly, otherwise PHP will throw a warning.'
    }
  },
  {
    id: 'laravel-slide46',
    slideNum: 46,
    totalSlides: 50,
    type: 'bullets',
    moduleTag: 'Controllers',
    title: 'Controller namespace stubs',
    topicTitle: 'Decoupling Application Logic',
    bullets: [
      'Controllers folder: Store controller classes inside app/Http/Controllers/.',
      'The Controller pattern: Move callback logic from routes/web.php into controller classes.',
      'Action methods: Declare public class methods (like show, index) to process requests.',
      'Class parameters: Controllers capture parameters resolved by the router dispatcher.'
    ],
    keyInsight: {
      title: 'Controller namespace stubs',
      text: 'Keep route files readable by delegating request processing tasks directly to controller classes.'
    },
    image: {
      url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
      caption: 'Decoupling route files using class stubs'
    }
  },
  {
    id: 'laravel-slide47',
    slideNum: 47,
    totalSlides: 50,
    type: 'bullets',
    moduleTag: 'Controllers',
    title: 'make:controller Artisan scaffolding',
    topicTitle: 'Scaffolding Controller Classes',
    bullets: [
      'Artisan commands: Scaffold controller stubs using: php artisan make:controller UserController.',
      'Code generation: Creates UserController.php template inside app/Http/Controllers/ directory.',
      'Automatic namespaces: Artisan automatically applies matching namespaces and imports.',
      'Provider checks: Artisan ensures class templates comply with base controller structures.'
    ],
    keyInsight: {
      title: 'make:controller Artisan scaffolding',
      text: 'Always use Artisan commands to create controllers. This avoids manual class creation errors and ensures correct namespaces.'
    },
    image: {
      url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
      caption: 'Generating Controller templates'
    }
  },
  {
    id: 'laravel-slide48',
    slideNum: 48,
    totalSlides: 50,
    type: 'code',
    moduleTag: 'Controllers',
    title: 'Controller class-string routing',
    topicTitle: 'Mapping Route Actions to Controller Classes',
    code: `// routes/web.php\nuse App\\Http\\Controllers\\UserController;\n\n// Pass array containing Controller name and method string\nRoute::get('/user/{id}', [UserController::class, 'show']);`,
    bullets: [
      'Routing mappings: Pass an array as the second argument: Route::get(\'/user/{id}\', [UserController::class, \'show\']).',
      'Imports requirement: Import the controller class namespace at the top of routes/web.php.',
      'Method string: The second array element maps to the target public action method name.'
    ],
    keyInsight: {
      title: 'Controller class-string routing',
      text: 'Using class-string syntax (e.g. UserController::class) ensures IDE autocomplete and refactoring tools track controller dependencies accurately.'
    }
  },
  {
    id: 'laravel-slide49',
    slideNum: 49,
    totalSlides: 50,
    type: 'code',
    moduleTag: 'Controllers',
    title: 'Resource CRUD controllers',
    topicTitle: 'Standard CRUD Route Automation',
    code: `// routes/web.php\nRoute::resource('users', UserController::class);\n\n// Generates routes for: index, create, store, show, edit, update, destroy`,
    bullets: [
      'Resource controllers: Scaffold CRUD methods automatically: php artisan make:controller UserController --resource.',
      'Automated routing: Route::resource(\'users\', UserController::class) registers all CRUD routes in one line.',
      'Standardized paths: Follows RESTful URL schemas.'
    ],
    keyInsight: {
      title: 'Resource CRUD controllers',
      text: 'Resource controllers standardize endpoints, ensuring API integrations scale consistently.'
    }
  },
  {
    id: 'laravel-slide50',
    slideNum: 50,
    totalSlides: 50,
    type: 'bullets',
    moduleTag: 'Wrap-up',
    title: 'Course Checklist & Week 2 Teaser',
    topicTitle: 'Verify Your Learning Milestones',
    bullets: [
      'Boot Dev Server: Can you run "php artisan serve" and access your local host?',
      'Routing Tables: Can you create custom URL routes that capture parameters dynamically?',
      'Blade Templates: Can you render Blade views and output sanitized variables?',
      'Logic separation: Can you generate controllers and map routes to controller class methods?',
      'Next Week: Section 2 - Database Migrations & Eloquent ORM.'
    ],
    keyInsight: {
      title: 'Course Finished',
      text: 'You have completed the introductory Laravel 11 slide deck. Review PHP database connections to prepare for database migrations next week.'
    },
    image: {
      url: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80',
      caption: 'Week 2 Preparation: Database Tables'
    }
  }
];

export const laravelSlidesData = slides;
