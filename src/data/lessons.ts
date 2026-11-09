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
    id: 'database2',
    week: 2,
    course: 'Fundamentals of Database',
    title: 'Relational Data Modeling & Advanced SQL Operations',
    description: 'Master relational architecture: ERD Crow\'s Foot cardinality (1:1, 1:N, M:N), foreign key cascading actions (CASCADE, SET NULL, RESTRICT), SQL aggregations with GROUP BY and HAVING, multi-table JOINs, subqueries, and SQL injection prevention with 5 live interactive database simulators.',
    duration: '40 mins',
    slidesCount: 24,
    difficulty: 'Intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=80',
    isActive: true,
    quizEnabled: true,
    competencies: [
      'ERD Crow\'s Foot Cardinality (1:1, 1:N, M:N)',
      'Foreign Key Cascades (CASCADE, SET NULL, RESTRICT)',
      'GROUP BY & HAVING Group Aggregations',
      'Multi-Table Joins & Subqueries',
      'SQL Injection & Prepared Statements'
    ]
  },
  {
    id: 'multimedia1',
    week: 1,
    course: 'Introduction to Multimedia',
    title: 'Introduction to Multimedia: Fundamentals & 5 Elements',
    description: 'A dynamic, visual interactive slide presentation crafted for BS Multimedia students. Covers the definition of multimedia, the 5 core elements (Text, Graphic, Audio, Animation, Video), interactive hypermedia, linear vs non-linear systems, authoring tools, application domains, and the 6 multimedia products with 9 live interactive studio simulators.',
    duration: '25 mins',
    slidesCount: 26,
    difficulty: 'Beginner',
    thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
    isActive: true,
    quizEnabled: true,
    competencies: [
      'Define Multimedia (Multi + Media) and its 5 fundamental elements.',
      'Differentiate between Raster Bitmaps and Scalable Vector Graphics.',
      'Analyze the 3 forms of multimedia audio: Speech, SFX, and Music.',
      'Understand Persistence of Vision, frame rates (12, 24, 60 FPS), and video compression.',
      'Compare Linear broadcasting with Non-Linear interactive hypermedia systems.',
      'Categorize and evaluate the 6 commercial multimedia product archetypes.'
    ]
  },
  {
    id: 'multimedia-w14',
    week: 14,
    course: 'Introduction to Multimedia',
    title: 'Multimedia Production Techniques',
    description: 'Master advanced production techniques for multimedia: 3-phase pipelines (pre-production, production, post-production), non-destructive editing, LUFS loudness mastering (-14 LUFS), and color grading.',
    duration: '35 mins',
    slidesCount: 15,
    difficulty: 'Intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80',
    isActive: true,
    quizEnabled: true,
    competencies: [
      'Learn advanced production techniques for multimedia.',
      'Apply techniques to produce high-quality multimedia content.',
      'Ensure consistency and quality in multimedia production.'
    ]
  },
  {
    id: 'multimedia-w15',
    week: 15,
    course: 'Introduction to Multimedia',
    title: 'Multimedia Integration',
    description: 'Integrate the 5 core multimedia elements into cohesive projects: Mayer’s Cognitive Theory of Multimedia Learning, temporal synchronization, automatic audio ducking, seamless transitions, and 60 FPS profiling.',
    duration: '30 mins',
    slidesCount: 15,
    difficulty: 'Intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
    isActive: true,
    quizEnabled: true,
    competencies: [
      'Integrate various multimedia elements to create cohesive projects.',
      'Ensure smooth transitions and interactions between different media types.',
      'Test and refine multimedia projects.'
    ]
  },
  {
    id: 'multimedia-w16',
    week: 16,
    course: 'Introduction to Multimedia',
    title: 'Final Project Development',
    description: 'Plan, design, and produce a comprehensive multimedia capstone project: vertical slice scoping, milestone sprint management, 3-2-1 backup protocols, and balancing creative artistry with technical rigor.',
    duration: '40 mins',
    slidesCount: 15,
    difficulty: 'Advanced',
    thumbnail: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80',
    isActive: true,
    quizEnabled: true,
    competencies: [
      'Apply all learned skills to develop a final multimedia project.',
      'Plan, design, and produce a comprehensive multimedia piece.',
      'Focus on creativity, design principles, and technical skills.'
    ]
  },
  {
    id: 'multimedia-w17',
    week: 17,
    course: 'Introduction to Multimedia',
    title: 'Project Presentation and Critique',
    description: 'Professional multimedia project defense: the 5-minute pitch framework, constructive critique using the "I Like, I Wish, What If" model, post-critique refinement, and industry portfolio curation.',
    duration: '35 mins',
    slidesCount: 15,
    difficulty: 'Advanced',
    thumbnail: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80',
    isActive: true,
    quizEnabled: true,
    competencies: [
      'Present final multimedia projects to the class.',
      'Receive and provide constructive feedback.',
      'Refine and prepare projects for portfolio inclusion.'
    ]
  },
  {
    id: 'mediadsn1',
    week: 1,
    course: 'Human-Computer Interaction',
    title: 'Introduction to Human-Computer Interaction',
    description: 'Learn the basics, history, and key components of Human-Computer Interaction and interactive system design, emphasizing user-centered digital experiences.',
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
    course: 'Human-Computer Interaction',
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
    id: 'mediadsn-a11y',
    week: 3,
    course: 'Human-Computer Interaction',
    title: 'Accessibility in Interactive Design',
    description: 'Understand the importance of accessibility in interactive media design, learn to create accessible designs catering to all users including those with disabilities, and apply international accessibility guidelines (WCAG 2.1/2.2 Level AA, P.O.U.R., WAI-ARIA) with 5 live studio simulators.',
    duration: '30 mins',
    slidesCount: 30,
    difficulty: 'Beginner',
    thumbnail: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    isActive: true,
    quizEnabled: true,
    competencies: [
      'Understand the importance of accessibility in interactive media design.',
      'Learn to create accessible designs that cater to all users, including those with disabilities.',
      'Apply accessibility guidelines and standards (WCAG 2.1/2.2 Level AA & P.O.U.R. Framework).'
    ]
  },
  {
    id: 'mediadsn-w14',
    week: 14,
    course: 'Human-Computer Interaction',
    title: 'Designing for Mobile Interfaces & Responsive HCI',
    description: 'Master cross-platform responsive HCI: mobile-to-desktop progressive enhancement, desktop-to-mobile graceful degradation, the 1993 CRT history of 16px font standards, avoiding the iOS input auto-zoom penalty, the 8-point grid system, and Gestalt F/Z eye-tracking layouts with 3 live interactive studios.',
    duration: '40 mins',
    slidesCount: 25,
    difficulty: 'Intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80',
    isActive: true,
    quizEnabled: true,
    competencies: [
      'Cross-platform responsiveness: Mobile-to-Desktop & Desktop-to-Mobile reflow.',
      'The 16px universal font standard: 1993 NCSA Mosaic, 96 DPI CRT math & visual angles.',
      'Eliminating the iOS 16px auto-zoom input penalty & modular type scales.',
      'The 8-point grid system & sub-pixel anti-aliasing across 1.5x, 2x, and 3x DPI displays.',
      'Cognitive layout patterns: Nielsen Norman F-Pattern, Z-Pattern & Gestalt grouping laws.'
    ]
  },
  {
    id: 'mediadsn-w15',
    week: 15,
    course: 'Human-Computer Interaction',
    title: 'Information Architecture',
    description: 'Understand the principles of information architecture, organize and structure complex digital content for usability, and develop production sitemaps, navigation schemes, and card sorting taxonomies.',
    duration: '30 mins',
    slidesCount: 15,
    difficulty: 'Intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    isActive: true,
    quizEnabled: true,
    competencies: [
      'Understand the principles of information architecture.',
      'Organize and structure content for usability.',
      'Develop sitemaps and navigation schemes.'
    ]
  },
  {
    id: 'mediadsn-w16',
    week: 16,
    course: 'Human-Computer Interaction',
    title: 'Ethical Considerations in HCI',
    description: 'Explore ethical issues in HCI design, deceptive dark patterns (Roach Motel, Confirmshaming), understand the critical importance of privacy and data protection (Privacy by Design), and apply ethical principles to interface design.',
    duration: '30 mins',
    slidesCount: 15,
    difficulty: 'Intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    isActive: true,
    quizEnabled: true,
    competencies: [
      'Explore ethical issues in HCI design.',
      'Understand the importance of privacy and data protection.',
      'Apply ethical principles to interface design.'
    ]
  },
  {
    id: 'mediadsn-w17',
    week: 17,
    course: 'Human-Computer Interaction',
    title: 'Review and Practical Applications',
    description: 'Review key foundational concepts from the entire HCI curriculum, work on practical applications that integrate all learned topics, and apply advanced problem-solving skills to real-world interface scenarios and capstone audits.',
    duration: '40 mins',
    slidesCount: 15,
    difficulty: 'Advanced',
    thumbnail: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    isActive: true,
    quizEnabled: true,
    competencies: [
      'Review key concepts from the course.',
      'Work on practical applications that integrate all learned topics.',
      'Apply problem-solving skills to real-world scenarios.'
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
  // MOB DEV 1 LAB: ARCTIC FOX TRACK
  // ==========================================
  {
    id: 'mobdev3-w1',
    week: 1,
    course: 'Mob Dev 1 Lab',
    title: 'School Campus Connect: Building Your First Multi-Screen Android Application',
    description: 'Construct the 4-screen School Campus Connect student portal in Android Studio Arctic Fox (2020.3.1) using Kotlin and XML. Master static UI layout design and explicit Intent navigation across Welcome, Login, Sign Up, and Dashboard screens (static muna, strictly zero database or backend required).',
    duration: '45 mins',
    slidesCount: 16,
    difficulty: 'Beginner',
    thumbnail: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&w=800&q=80',
    isActive: true,
    quizEnabled: true,
    competencies: [
      'Navigate Android Studio Arctic Fox (2020.3.1) and Empty Activity project scaffolding (API 21+).',
      'Construct clean static XML layouts with LinearLayout, ScrollView, TextViews, and Buttons.',
      'Implement explicit Intent screen navigation (startActivity) and Back Stack management on button clicks.',
      'Connect 4 portal screens with Kotlin click listeners (purely static UI, zero database setup).'
    ]
  },
  {
    id: 'mobdev1-exam',
    week: 2,
    course: 'Mob Dev 1 Lab',
    title: 'Practical Exam: CampusVibe Social Media Android App',
    description: 'Hands-on practical examination: construct "CampusVibe", a 4-screen static student social media application in Android Studio Arctic Fox (2020.3.1) using Kotlin and XML (Welcome Splash, Campus Feed, Create Post, and Student Profile). Pure static UI navigation, strictly zero database required.',
    duration: '120 mins',
    slidesCount: 12,
    difficulty: 'Beginner',
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    isActive: true,
    quizEnabled: false,
    competencies: [
      'Scaffold an Empty Activity project in Android Studio Arctic Fox (API 21+).',
      'Design modern multi-screen XML layouts with ScrollViews, custom shapes, and vector drawables.',
      'Implement explicit Intent navigation (startActivity) and finish() between 4 connected screens.',
      'Handle button click listener events with interactive Toast messages.'
    ]
  }
];
