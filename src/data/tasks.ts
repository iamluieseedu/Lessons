export interface CourseTask {
  id: string;
  courseFolderId: string; // 'webdev3' | 'mediadsn' | 'webdev1' | 'cpp' | 'video'
  courseCode: string;
  courseTitle: string;
  title: string;
  badge: string;
  phaseTag: string;
  type: 'Graded Lab Task' | 'Practice Lab' | 'Assignment' | 'Project';
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  status: 'active' | 'upcoming' | 'completed';
  duration: string;
  weekAlignment: string;
  description: string;
  objectives: string[];
  deliverables?: string[];
  techStack: string[];
  launchUrl: string;
  actionText: string;
  isExternal?: boolean;
}

export const DEFAULT_TASKS: CourseTask[] = [
  {
    id: 'laravel-lab-part-2',
    courseFolderId: 'webdev3',
    courseCode: 'IT-WD3',
    courseTitle: 'Web Dev 3: Laravel Framework',
    title: 'Migrating Multi-Page Native PHP to Laravel Blade',
    badge: 'Laboratory Manual • Part 2',
    phaseTag: 'Phase 2: Multi-Page',
    type: 'Graded Lab Task',
    difficulty: 'Intermediate',
    status: 'active',
    duration: '60 - 90 mins',
    weekAlignment: 'Week 4 - 5 Practical Lab',
    description: 'Master Blade Layout Inheritance (@yield, @extends, @section), configure clean multi-page routing in routes/web.php, and eliminate repetitive native includes with an interactive step-by-step guide.',
    objectives: [
      'Deconstruct repetitive multi-page native includes (header.php, footer.php) into resources/views/layouts/app.blade.php',
      'Implement Blade layout inheritance with dynamic @yield(\'title\') and content slots',
      'Configure multiple clean HTTP navigation routes in routes/web.php (Home, About, Services, Contact)',
      'Correctly reference static stylesheets, scripts, and media using {{ asset(...) }}',
      'Test your migrated views with artisan serve and submit clean Git commits'
    ],
    deliverables: [
      'Full multi-page Laravel repository (Home, About, Services, Contact)',
      'Clean Blade layout hierarchy in resources/views/layouts',
      'Verified zero broken asset references on artisan serve'
    ],
    techStack: ['Laravel 11', 'Blade Engine', 'PHP 8.2+', 'Composer'],
    launchUrl: '/laravel/',
    actionText: 'Launch Lab Manual',
    isExternal: true
  },
  {
    id: 'laravel-lab-part-1',
    courseFolderId: 'webdev3',
    courseCode: 'IT-WD3',
    courseTitle: 'Web Dev 3: Laravel Framework',
    title: 'Single-Page Blade Setup & Environment Configuration',
    badge: 'Laboratory Manual • Part 1',
    phaseTag: 'Phase 1: Foundation',
    type: 'Practice Lab',
    difficulty: 'Beginner',
    status: 'completed',
    duration: '45 mins',
    weekAlignment: 'Week 1 - 2 Setup',
    description: 'Initial environment validation (PHP 8.2+, Composer, SQLite), local dev server startup, and converting a standalone native PHP script into a single Blade view.',
    objectives: [
      'Verify local PHP 8.2+ and Composer installation',
      'Initialize a clean Laravel 11 project and boot php artisan serve',
      'Convert a single static PHP file into a Blade template returning from routes/web.php'
    ],
    deliverables: [
      'Working local Laravel development environment',
      'Initial single-route Blade template'
    ],
    techStack: ['Laravel 11', 'Artisan CLI', 'Composer', 'SQLite'],
    launchUrl: '/laravel/',
    actionText: 'Review Part 1 Setup',
    isExternal: true
  },
  {
    id: 'godot-lab-part-1',
    courseFolderId: 'eventprog',
    courseCode: 'IT-EDP1',
    courseTitle: 'Event-Driven Programming',
    title: 'Building a 2D Platformer in Godot 4 (Mobile Setup & Physics)',
    badge: 'Laboratory Manual • Week 1',
    phaseTag: 'Part 1: Mobile 2D Setup',
    type: 'Graded Lab Task',
    difficulty: 'Beginner',
    status: 'active',
    duration: '60 - 90 mins',
    weekAlignment: 'Week 1 Practical Lab',
    description: 'Create a 2D mobile game from scratch in Godot 4 following Coco Code\'s beginner guide: mobile resolution & viewport setup, Nearest texture filtering, background TextureRect tiling, static terrain collision, CharacterBody2D player assembly with AnimatedSprite2D, GDScript movement, and physics layer masking.',
    objectives: [
      'Initialize Godot 4 project with Mobile renderer, 1280x720 canvas_items stretch, Nearest filter, and touch emulation',
      'Construct a Node2D scene hierarchy and tile a seamless background PNG using TextureRect',
      'Build static ground terrain geometry using StaticBody2D with TextureRect tiling or TileMap with Physics Layer 0',
      'Assemble a CharacterBody2D player with AnimatedSprite2D (idle, run, jump) and CapsuleShape2D bounds',
      'Implement event-driven movement, gravity, jump, and deceleration in GDScript',
      'Configure 2D Physics Layers, Collision Masks, and Camera2D follow node to complete the game loop'
    ],
    deliverables: [
      'Playable Godot 4 project directory with scenes/main.tscn, scenes/player.tscn, and scripts/player.gd',
      'Verified physical collision contact where player stands, runs, and jumps on terrain',
      'Completed laboratory report and self-evaluation checklist'
    ],
    techStack: ['Godot Engine 4.x', 'GDScript 2.0', '2D Physics Engine', 'Mobile Canvas Stretch', 'Coco Code Guide'],
    launchUrl: '/godot/',
    actionText: 'Open Godot Lab Manual',
    isExternal: true
  }
];
