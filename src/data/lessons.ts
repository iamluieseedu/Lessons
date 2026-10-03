export interface Lesson {
  id: string;
  week: number;
  title: string;
  description: string;
  duration: string;
  slidesCount: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  thumbnail: string;
  isActive: boolean;
  quizEnabled?: boolean;
  course?: string;
  competencies?: string[];
}

export const DEFAULT_LESSONS: Lesson[] = [
  // ==========================================
  // WEB DEV 3: OFFICIAL LARAVEL SYLLABUS TRACK
  // ==========================================
  {
    id: 'webdev3-w1',
    week: 1,
    course: 'Web Dev 3',
    title: 'Introduction to Laravel',
    description: 'Understand the core concepts of the Laravel framework, modern PHP tooling, local development setup (PHP 8.2+, Composer, SQLite), and initializing your first application.',
    duration: '35 mins',
    slidesCount: 16,
    difficulty: 'Beginner',
    thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
    isActive: true,
    quizEnabled: true,
    competencies: [
      'Understand the basics of Laravel and its ecosystem.',
      'Set up a Laravel development environment.',
      'Create a simple Laravel application.'
    ]
  },
  {
    id: 'webdev3-w2',
    week: 2,
    course: 'Web Dev 3',
    title: 'Laravel Routing',
    description: 'Master HTTP routing in Laravel: route definitions, HTTP verbs, dynamic parameters, regex constraints, named routes, route groups, prefixes, and caching.',
    duration: '30 mins',
    slidesCount: 15,
    difficulty: 'Beginner',
    thumbnail: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
    isActive: true,
    quizEnabled: true,
    competencies: [
      'Learn about routing in Laravel.',
      'Define and manage routes.',
      'Implement basic and advanced routing features.'
    ]
  },
  {
    id: 'webdev3-w3',
    week: 3,
    course: 'Web Dev 3',
    title: 'Middleware in Laravel',
    description: 'Explore the HTTP request pipeline and onion architecture. Build custom middleware, filter requests, enforce authentication, handle CORS, and terminate actions.',
    duration: '25 mins',
    slidesCount: 14,
    difficulty: 'Intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    isActive: true,
    quizEnabled: true,
    competencies: [
      'Understand the role of middleware in Laravel.',
      'Create and use custom middleware.',
      'Apply middleware for request filtering and authentication.'
    ]
  },
  {
    id: 'webdev3-w4',
    week: 4,
    course: 'Web Dev 3',
    title: 'Controllers and Views',
    description: 'Decouple presentation from request handling using resourceful controllers and the powerful Blade templating engine, components, layouts, and slot directives.',
    duration: '35 mins',
    slidesCount: 16,
    difficulty: 'Intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    isActive: true,
    quizEnabled: true,
    competencies: [
      'Learn about controllers and views in Laravel.',
      'Create resourceful controllers.',
      'Implement views using Blade templating engine.'
    ]
  },
  {
    id: 'webdev3-w6',
    week: 6,
    course: 'Web Dev 3',
    title: 'Eloquent ORM Basics',
    description: 'Harness Laravel\'s ActiveRecord ORM: database migrations, seeders, model definitions, basic CRUD operations, and core relationships (One-to-One, One-to-Many).',
    duration: '35 mins',
    slidesCount: 16,
    difficulty: 'Intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=80',
    isActive: true,
    quizEnabled: true,
    competencies: [
      'Understand the basics of Eloquent ORM.',
      'Define models and relationships.',
      'Perform CRUD operations using Eloquent.'
    ]
  },
  {
    id: 'webdev3-w7',
    week: 7,
    course: 'Web Dev 3',
    title: 'Advanced Eloquent ORM',
    description: 'Take your database interactions further with local & global query scopes, model events, observers, resolving N+1 issues with eager loading, and soft deletes.',
    duration: '30 mins',
    slidesCount: 15,
    difficulty: 'Advanced',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    isActive: true,
    quizEnabled: true,
    competencies: [
      'Learn advanced Eloquent features such as query scopes, events, and observers.',
      'Implement advanced database interactions.'
    ]
  },
  {
    id: 'webdev3-w8',
    week: 8,
    course: 'Web Dev 3',
    title: 'Form Handling and Validation',
    description: 'Safely accept user input with CSRF protection, inline validation, dedicated Form Request classes, preserving old form input, and customized error messages.',
    duration: '30 mins',
    slidesCount: 14,
    difficulty: 'Intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    isActive: true,
    quizEnabled: true,
    competencies: [
      'Learn to handle forms and validate user input in Laravel.',
      'Implement form requests and validation rules.',
      'Manage form submissions and errors.'
    ]
  },
  {
    id: 'webdev3-w10',
    week: 10,
    course: 'Web Dev 3',
    title: 'Authentication and Authorization',
    description: 'Secure your application with Laravel authentication guards, session management, password hashing, Authorization Gates, Model Policies, and role permissions.',
    duration: '35 mins',
    slidesCount: 16,
    difficulty: 'Advanced',
    thumbnail: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80',
    isActive: true,
    quizEnabled: true,
    competencies: [
      'Understand authentication and authorization in Laravel.',
      'Implement user authentication using Laravel’s built-in features.',
      'Create and manage roles and permissions.'
    ]
  },
  {
    id: 'webdev3-w11',
    week: 11,
    course: 'Web Dev 3',
    title: 'RESTful API Development',
    description: 'Build robust REST APIs: stateless endpoint design, API routes, Eloquent API Resources & Collections, HTTP status codes, and Sanctum token authentication.',
    duration: '35 mins',
    slidesCount: 15,
    difficulty: 'Advanced',
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    isActive: true,
    quizEnabled: true,
    competencies: [
      'Learn the principles of RESTful API design.',
      'Create and manage API routes and controllers.',
      'Implement RESTful API endpoints using Laravel.'
    ]
  },
  {
    id: 'webdev3-w12',
    week: 12,
    course: 'Web Dev 3',
    title: 'Testing in Laravel',
    description: 'Ensure software reliability through automated testing. Write unit and feature tests using Pest & PHPUnit, database fixtures, and HTTP response assertions.',
    duration: '30 mins',
    slidesCount: 14,
    difficulty: 'Advanced',
    thumbnail: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=800&q=80',
    isActive: true,
    quizEnabled: true,
    competencies: [
      'Understand the importance of testing in Laravel.',
      'Write and run unit tests and feature tests.',
      'Use PHPUnit and Laravel’s testing tools.'
    ]
  },
  {
    id: 'webdev3-w14',
    week: 14,
    course: 'Web Dev 3',
    title: 'Integrating Third-Party Services',
    description: 'Connect your Laravel backend to the outside world: fluent HTTP Client (Http facade), Composer packages, third-party REST APIs, and secure environment secret handling.',
    duration: '30 mins',
    slidesCount: 14,
    difficulty: 'Advanced',
    thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    isActive: true,
    quizEnabled: true,
    competencies: [
      'Learn to integrate third-party services and APIs with Laravel.',
      'Use Laravel packages and composer for integration.',
      'Manage API keys and secrets securely.'
    ]
  },
  {
    id: 'webdev3-w15',
    week: 15,
    course: 'Web Dev 3',
    title: 'Deployment and Security Best Practices',
    description: 'Take Laravel to production: caching optimizations (config, routes, views), HTTPS/SSL, CORS, cloud deployment workflows (Forge, VPS, Railway, Render), and monitoring.',
    duration: '35 mins',
    slidesCount: 15,
    difficulty: 'Advanced',
    thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    isActive: true,
    quizEnabled: true,
    competencies: [
      'Understand deployment best practices for Laravel applications.',
      'Implement security measures to protect applications.',
      'Deploy Laravel applications to cloud platforms.'
    ]
  },
  {
    id: 'webdev3-w16',
    week: 16,
    course: 'Web Dev 3',
    title: 'Real-World Project Development',
    description: 'Synthesize your skills into an end-to-end full-stack capstone project: database design, modular architecture, code quality, testing, and professional staging delivery.',
    duration: '40 mins',
    slidesCount: 16,
    difficulty: 'Advanced',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    isActive: true,
    quizEnabled: true,
    competencies: [
      'Apply learned concepts to a real-world project.',
      'Design, develop, and test a complete Laravel application.',
      'Focus on best practices and code quality.'
    ]
  },

  // ==========================================
  // ARCHIVE & OTHER SUBJECT LESSONS
  // ==========================================
  {
    id: 'laravel11',
    week: 1,
    course: 'Web Dev 3',
    title: 'Laravel Fundamentals (Comprehensive Master Deck)',
    description: '50-slide complete master deck covering Laravel architecture, zero-config SQLite, RESTful routing, Blade components, migrations, and interactive simulations.',
    duration: '50 mins',
    slidesCount: 50,
    difficulty: 'Beginner',
    thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
    isActive: true,
    quizEnabled: true,
    competencies: [
      'Understand the full stack Laravel request lifecycle.',
      'Experiment with artisan, tinker, migrations, and blade in interactive sandboxes.'
    ]
  },
  {
    id: 'webdev1',
    week: 1,
    course: 'Web Development 1',
    title: 'Introduction to Web Development',
    description: 'Learn the core building blocks of the web: HTML5 structure, CSS3 presentation, file extensions, and basic browser rendering loops.',
    duration: '15 mins',
    slidesCount: 21,
    difficulty: 'Beginner',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    isActive: true,
    quizEnabled: true,
    competencies: ['HTML5 Document Tree', 'CSS Box Model', 'Browser Parse Pipeline']
  },
  {
    id: 'cpp1',
    week: 1,
    course: 'C++ Programming',
    title: 'Fundamentals of Programming: C & C++ Masterclass',
    description: 'Master programming from core basics, escape sequences, identifiers, and control flow to pointers, memory management, and OOP classes with live code execution.',
    duration: '35 mins',
    slidesCount: 45,
    difficulty: 'Beginner',
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    isActive: true,
    quizEnabled: false,
    competencies: ['C/C++ Syntax', 'Memory Pointers', 'Standard Streams']
  },
  {
    id: 'database1',
    week: 1,
    course: 'Fundamentals of Database',
    title: 'Fundamentals of Database',
    description: 'A modern, structured college-level introductory database course covering relational modeling, SQL CRUD, JOINs, normalization (1NF-3NF), ACID transactions, constraints, and interactive database simulations.',
    duration: '45 mins',
    slidesCount: 55,
    difficulty: 'Beginner',
    thumbnail: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=80',
    isActive: true,
    quizEnabled: true,
    competencies: ['Relational Schema & Keys', 'SQL Queries & JOIN Operations', '1NF-3NF Normalization', 'ACID Transactions & Integrity']
  },
  {
    id: 'mediadsn1',
    week: 1,
    course: 'Interactive Media Design',
    title: 'Introduction to Interactive Media Design',
    description: 'Learn the basics, history, and key components of interactive media design, emphasizing user-centered digital experiences.',
    duration: '20 mins',
    slidesCount: 36,
    difficulty: 'Beginner',
    thumbnail: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    isActive: true,
    quizEnabled: true,
    competencies: ['HCI Frameworks', 'Interaction Design', 'Usability Principles']
  },
  {
    id: 'mediadsn2',
    week: 2,
    course: 'Interactive Media Design',
    title: 'Principles of Interactivity, UI & UX Design Basics',
    description: 'Master the fundamental principles of interactivity, engagement loops, spectrum of interactive media, UI layout and visual hierarchy (F/Z patterns, 8pt grid), 60-30-10 color theory, WCAG contrast accessibility, modular typography ladders, and UX research, personas, and user journey mapping with 8 live interactive simulations.',
    duration: '35 mins',
    slidesCount: 40,
    difficulty: 'Beginner',
    thumbnail: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80',
    isActive: true,
    quizEnabled: true,
    competencies: [
      "Learn Donald Norman's interaction principles (affordance, signifiers, feedback, mapping, constraints).",
      "Understand how interactivity enhances cognitive engagement and explore diverse interactive media types.",
      "Apply UI design layout rules (visual hierarchy, 8pt grid), color theory (60-30-10, WCAG), and typography ladders.",
      "Master UX fundamentals: Jakob Nielsen's 10 heuristics, user research, archetypal personas, and user journey mapping."
    ]
  },
  {
    id: 'week1',
    week: 1,
    course: 'Digital Video Production',
    title: 'Introduction to Video Editing',
    description: 'Learn the fundamentals of video editing, timeline cuts, A-Roll/B-Roll layering, and Walter Murch\'s rules of rendering.',
    duration: '25 mins',
    slidesCount: 51,
    difficulty: 'Beginner',
    thumbnail: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80',
    isActive: true,
    quizEnabled: true,
    competencies: ['Timeline Trimming', 'A/B Roll Layering', 'Rule of Six']
  },
  {
    id: 'eventprog-w1',
    week: 1,
    course: 'Event-Driven Programming',
    title: 'Introduction to Godot 2D & Event-Driven Game Loops',
    description: 'Explore the Godot 4 scene tree hierarchy, event-driven signal propagation, input processing (_unhandled_input vs _physics_process), mobile 2D viewport scaling, and character kinematics.',
    duration: '40 mins',
    slidesCount: 16,
    difficulty: 'Beginner',
    thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
    isActive: true,
    quizEnabled: true,
    competencies: [
      'Godot 4 Project Setup & Mobile Viewport Scaling',
      'Scene Hierarchy & 2D Node Composition',
      'Event-Driven GDScript Inputs & CharacterBody2D Movement',
      'Physics Layers & Collision Mask Architecture'
    ]
  },
  // ==========================================
  // MOBILE DEVELOPMENT 3: ARCTIC FOX TRACK
  // ==========================================
  {
    id: 'mobdev3-w1',
    week: 1,
    course: 'Mobile Development 3',
    title: 'Building Your First Multi-Screen Android Application',
    description: 'Master Android Studio Arctic Fox (2020.3.1), Activity lifecycles, explicit Intents, XML layouts, form input validation, and data passing across Welcome, Login, Sign Up, and Dashboard screens.',
    duration: '45 mins',
    slidesCount: 16,
    difficulty: 'Beginner',
    thumbnail: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&w=800&q=80',
    isActive: true,
    quizEnabled: true,
    competencies: [
      'Navigate Android Studio Arctic Fox (2020.3.1) and Empty Activity project scaffolding.',
      'Construct traditional XML linear layouts, ScrollViews, TextViews, and EditTexts.',
      'Implement explicit Intent screen navigation and Back Stack lifecycle management.',
      'Safely pass and receive user state across screen boundaries using putExtra and getStringExtra.'
    ]
  }
];
