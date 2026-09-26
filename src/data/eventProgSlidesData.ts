import { SlideData } from '../types/slide';

export const eventProgWeek1Slides: SlideData[] = [
  // ==========================================================================
  // SLIDE 1: COVER
  // ==========================================================================
  {
    id: 'edp-w1-s1',
    slideNum: 1,
    totalSlides: 16,
    type: 'cover',
    moduleTag: 'Week 1 • Event-Driven Programming',
    title: 'Introduction to Godot 2D & Event-Driven Game Loops',
    subtitle: 'Master Godot 4 scene trees, mobile viewport scaling, GDScript input event handling, and 2D physics architectures.'
  },

  // ==========================================================================
  // SLIDE 2: POLLING VS EVENT-DRIVEN ARCHITECTURE
  // ==========================================================================
  {
    id: 'edp-w1-s2',
    slideNum: 2,
    totalSlides: 16,
    type: 'single_topic',
    moduleTag: 'Core Concepts',
    title: 'Event-Driven Architecture in Games',
    topicTitle: 'Signals, Interrupts, and Decoupled Systems',
    whatItDoes: 'Allows game components to listen and react immediately to inputs, collisions, and state changes without wasteful continuous loops.',
    whatIsGoingOn: 'Instead of polling every object every frame to ask "did you get touched?", the engine dispatches discrete InputEvents and physics notification signals only to listening subscribers.',
    bullets: [
      'Decoupled Logic: Broadcasters emit signals without caring which specific nodes are subscribed.',
      'CPU Efficiency: Idle objects consume minimal battery and processing cycles until an event arrives.',
      'Input Interrupt Priority: Critical actions (e.g. Jump taps) register instantly at the hardware level.',
      'Publisher-Subscriber Pattern: Enables scalable multi-system communication across HUD, player, and audio.'
    ],
    layman: {
      title: 'Real-World Analogy',
      text: 'Polling is like checking your mailbox every 5 seconds to see if a letter arrived. Event-driven programming is having a doorbell that rings only when the mail carrier presses it.'
    },
    keyInsight: {
      title: 'Design Principle',
      text: 'Call down with method calls, signal up with event emissions. This keeps child nodes independent of parent scenes.'
    }
  },

  // ==========================================================================
  // SLIDE 3: THE GODOT SCENE TREE
  // ==========================================================================
  {
    id: 'edp-w1-s3',
    slideNum: 3,
    totalSlides: 16,
    type: 'single_topic',
    moduleTag: 'Engine Architecture',
    title: 'The Godot Node Tree',
    topicTitle: 'Everything is a Node, Packed into Reusable Scenes',
    whatItDoes: 'Organizes visual assets, collision boundaries, and scripts into a hierarchical tree of specialized behavior components.',
    whatIsGoingOn: 'Godot processes tree operations from top to bottom. Transform2D coordinates (position, rotation, scale) cascade from parent nodes to all their children.',
    bullets: [
      'Node: Base class offering lifecycle methods (_ready, _process, _exit_tree).',
      'CanvasItem: Intermediate class providing 2D visibility, modulate tinting, and z-index ordering.',
      'Node2D: Supplies a Transform2D position, global coordinates, and rotation matrix.',
      'Scene Instancing: Entire complex actors (Player, Enemies) are saved as separate .tscn files and instanced into main levels.'
    ],
    layman: {
      title: 'Tree Inheritance',
      text: 'If a parent vehicle moves forward 10 meters, all passenger child nodes automatically move forward 10 meters without writing extra code.'
    },
    keyInsight: {
      title: 'Scene Modularity',
      text: 'Design actors in isolation first. Test player.tscn by pressing F6 before ever instancing it into main.tscn.'
    }
  },

  // ==========================================================================
  // SLIDE 4: GODOT 4 RENDERERS
  // ==========================================================================
  {
    id: 'edp-w1-s4',
    slideNum: 4,
    totalSlides: 16,
    type: 'comparison',
    moduleTag: 'Project Configuration',
    title: 'Mobile vs Compatibility Renderers',
    topicTitle: 'Choosing the Optimal Engine Backend',
    whatItDoes: 'Dictates the graphics API pipeline, shader capabilities, and battery consumption on target hardware.',
    whatIsGoingOn: 'Godot 4 replaces GLES2/3 with Vulkan for high-end rendering while providing an OpenGL 3 fallback for web and low-spec mobile chipsets.',
    versusLeft: {
      title: 'Mobile Renderer (Vulkan)',
      bullets: [
        'Optimized for modern Android and iOS GPUs with tiled architectures.',
        'Vulkan Mobile backend with hardware shading.',
        'High dynamic range and advanced post-processing.',
        'Requires modern devices (Android 10+, Vulkan 1.1+).'
      ]
    },
    versusRight: {
      title: 'Compatibility Renderer (OpenGL 3)',
      bullets: [
        'Maximum reach across low-end mobile phones and web browsers.',
        'OpenGL ES 3.0 / WebGL 2.0 fallback backend.',
        'Fastest load times and minimal memory footprint.',
        'Best for 2D pixel art and student platformer labs.'
      ]
    }
  },

  // ==========================================================================
  // SLIDE 5: VIEWPORT SCALING & RESOLUTION
  // ==========================================================================
  {
    id: 'edp-w1-s5',
    slideNum: 5,
    totalSlides: 16,
    type: 'single_topic',
    moduleTag: 'Mobile Display',
    title: 'Resolution Independence',
    topicTitle: 'Configuring Viewports for Fragmentation Across Phones',
    whatItDoes: 'Ensures your 2D game scales crisp and centered on thousands of different phone aspect ratios (16:9, 19.5:9, 21:9).',
    whatIsGoingOn: 'Godot’s stretch manager creates a virtual logical viewport and maps it onto the device window buffer using specified aspect constraints.',
    bullets: [
      'Viewport Dimensions: Standard 1280x720 (landscape) or 720x1280 (portrait).',
      'Stretch Mode: "canvas_items" scales 2D vector elements and sprites smoothly.',
      'Stretch Aspect: "keep" maintains the exact game aspect ratio with clean letterboxing.',
      'Touch Emulation: Enable "Emulate Touch From Mouse" to test finger drag and taps seamlessly on PC.'
    ],
    layman: {
      title: 'Letterboxing',
      text: 'Like watching a widescreen movie on an older TV, the game keeps its exact proportion and adds subtle black margins instead of stretching characters wide.'
    },
    keyInsight: {
      title: 'Settings Path',
      text: 'Project -> Project Settings -> Display -> Window -> Stretch Mode: canvas_items, Aspect: keep.'
    }
  },

  // ==========================================================================
  // SLIDE 6: BACKGROUNDS & TEXTURE FILTERING
  // ==========================================================================
  {
    id: 'edp-w1-s6',
    slideNum: 6,
    totalSlides: 16,
    type: 'single_topic',
    moduleTag: 'Scene Art',
    title: 'Backgrounds & Texture Filtering',
    topicTitle: 'Crisp Pixel Art vs Smooth High-Res Textures',
    whatItDoes: 'Renders 2D environment graphics without unwanted blurriness, distortion, or performance hits.',
    whatIsGoingOn: 'GPU sampling algorithms either interpolate adjacent texels (Linear/Bilinear) or select the nearest color value (Nearest Neighbor).',
    bullets: [
      'TextureRect with Stretch Mode "Tile": The industry-standard approach for repeating ground/terrain tiles (e.g. 64×64 dirt/grass) across 1280px without stretching or distortion.',
      'TextureRect vs Sprite2D: TextureRect provides layout anchors and native tiling; Sprite2D offers world-space transform manipulation.',
      'Nearest Neighbor Filter: Crucial for pixel art to preserve razor-sharp pixel edges.',
      'Linear Interpolation Filter: Ideal for hand-drawn, vector, and high-definition painted backdrops.',
      'Z-Index Positioning: Set background z-index to -10 to guarantee it always renders behind gameplay elements.'
    ],
    layman: {
      title: 'Texture Sampling',
      text: 'Nearest filter keeps every square pixel exact. Linear filter blurs adjacent colors together like a soft lens.'
    },
    keyInsight: {
      title: 'Default Filter',
      text: 'Set Project Settings -> Rendering -> Textures -> Canvas Textures -> Default Texture Filter to "Nearest" for retro pixel platformers.'
    }
  },

  // ==========================================================================
  // SLIDE 7: PHYSICS BODY TYPES IN GODOT 4
  // ==========================================================================
  {
    id: 'edp-w1-s7',
    slideNum: 7,
    totalSlides: 16,
    type: 'single_topic',
    moduleTag: 'Physics Architecture',
    title: 'Godot 2D Physics Body Types',
    topicTitle: 'Static, Character, and Rigid Bodies Deconstructed',
    whatItDoes: 'Categorizes nodes into distinct physical behaviors so the 2D physics engine calculates appropriate responses.',
    whatIsGoingOn: 'Godot maintains an internal physics server running at a fixed 60Hz tick rate, checking collisions between registered shape geometries.',
    bullets: [
      'StaticBody2D: Immovable collision boundaries (walls, terrain, floors, spikes). Infinite mass; does not respond to forces.',
      'CharacterBody2D: Script-controlled kinematic bodies (player, NPC, moving platforms). Uses move_and_slide().',
      'RigidBody2D: Fully physics-simulated bodies (bouncing balls, ragdolls, crates). Driven by impulses, friction, and mass.',
      'Area2D: Non-solid sensor zones. Detects entry/exit events (pickups, checkpoints, triggers) without physical pushback.'
    ],
    keyInsight: {
      title: 'Rule of Thumb',
      text: 'Always use CharacterBody2D for the player. Never use RigidBody2D for tight platformer jump controls, as raw physics feels slippery.'
    }
  },

  // ==========================================================================
  // SLIDE 8: COLLISION SHAPES & BOUNDING BOXES
  // ==========================================================================
  {
    id: 'edp-w1-s8',
    slideNum: 8,
    totalSlides: 16,
    type: 'single_topic',
    moduleTag: 'Collision Mechanics',
    title: 'CollisionShape2D & Shapes',
    topicTitle: 'Defining the Physical Geometry of Actors',
    whatItDoes: 'Gives invisible mathematical boundaries to visual sprites so the physics server knows where contact occurs.',
    whatIsGoingOn: 'A CollisionShape2D requires a Shape2D resource (Rectangle, Capsule, Circle, Segment). Without it, the body is completely non-solid.',
    bullets: [
      'RectangleShape2D: Fast computation; ideal for flat ground, platforms, and boxy level blocks.',
      'CapsuleShape2D: The gold standard for humanoid characters. Rounded bottom prevents snagging on tile seams.',
      'CircleShape2D: Most efficient shape; ideal for rolling boulders and projectiles.',
      'Convex / Concave Polygons: Custom irregular geometries, but significantly more CPU intensive.'
    ],
    layman: {
      title: 'Why Capsule over Box?',
      text: 'A flat rectangular box can catch on microscopic seams between ground blocks like a shoe heel. A capsule has rounded edges that slide smoothly over joints.'
    },
    keyInsight: {
      title: 'Visual Alert',
      text: 'Godot displays a warning triangle beside any CollisionShape2D that does not yet have a Shape resource assigned in the Inspector.'
    }
  },

  // ==========================================================================
  // SLIDE 9: GDSCRIPT STATIC TYPING & EXPORT DIRECTIVES
  // ==========================================================================
  {
    id: 'edp-w1-s9',
    slideNum: 9,
    totalSlides: 16,
    type: 'single_topic',
    moduleTag: 'GDScript Mastery',
    title: 'Modern GDScript 2.0 Syntax',
    topicTitle: 'Static Types, @export, and Clean Architecture',
    whatItDoes: 'Binds game logic directly into the engine UI while accelerating execution speed and eliminating runtime bugs.',
    whatIsGoingOn: 'Godot 4’s GDScript compiler optimizes statically typed variables at build time and exposes annotated properties directly in the editor Inspector.',
    bullets: [
      '@export var speed: float = 300.0: Exposes a configurable slider in the editor for level designers.',
      'Static Typing: Syntax like "var direction: float = 0.0" enables instant autocomplete and runtime speedups.',
      '@onready var sprite = $Sprite2D: Safely caches node references once the scene tree is fully mounted.',
      'extends CharacterBody2D: Inherits all kinematic movement properties (velocity, is_on_floor, move_and_slide).'
    ],
    layman: {
      title: 'Designer Friendliness',
      text: '@export allows your team to tweak player run speed in the Inspector without ever touching or risking code syntax errors.'
    },
    keyInsight: {
      title: 'Best Practice',
      text: 'Always use static typing (var name: Type = value). It provides compiler warnings before you launch the game.'
    }
  },

  // ==========================================================================
  // SLIDE 10: THE GAME LOOP PROCESS VS PHYSICS_PROCESS
  // ==========================================================================
  {
    id: 'edp-w1-s10',
    slideNum: 10,
    totalSlides: 16,
    type: 'comparison',
    moduleTag: 'Lifecycle Methods',
    title: '_process() vs _physics_process()',
    topicTitle: 'Frame-Rate Dependent Rendering vs Deterministic Physics',
    whatItDoes: 'Separates visual frame updates from mathematical collision and velocity steps to avoid glitches.',
    whatIsGoingOn: '_process runs as fast as the monitor refreshes (60, 120, 144Hz); _physics_process runs at a strict, fixed interval (default 60 iterations/sec).',
    versusLeft: {
      title: '_process(delta)',
      bullets: [
        'Executed once every graphic frame.',
        'delta is variable (changes with GPU load).',
        'Used for UI updates, animations, and camera follow.',
        'Not synchronized with physics collision buffers.'
      ]
    },
    versusRight: {
      title: '_physics_process(delta)',
      bullets: [
        'Executed at deterministic, fixed ticks (60Hz).',
        'delta is constant (default 1/60th second).',
        'Mandatory for velocity adjustments, gravity, and jumping.',
        'Prevents objects from tunneling through walls at low FPS.'
      ]
    }
  },

  // ==========================================================================
  // SLIDE 11: EVENT-DRIVEN INPUT HANDLING
  // ==========================================================================
  {
    id: 'edp-w1-s11',
    slideNum: 11,
    totalSlides: 16,
    type: 'single_topic',
    moduleTag: 'Input Systems',
    title: 'Event-Driven Input Handling',
    topicTitle: 'Input Actions, get_axis(), and Mobile Touch',
    whatItDoes: 'Translates hardware events (keyboard, gamepad, touchscreen taps) into named semantic actions.',
    whatIsGoingOn: 'The Input map maps physical keys (A/D, Left/Right arrow, touch buttons) to abstract action strings like "ui_left" and "ui_accept".',
    bullets: [
      'Input.get_axis("ui_left", "ui_right"): Returns a float between -1.0 and +1.0 with automatic deadzone calculation.',
      'Input.is_action_just_pressed("ui_accept"): Triggers true only on the initial frame the button is pressed (ideal for single jump).',
      'Input.is_action_pressed("fire"): Continuously true while held down (ideal for rapid fire or running).',
      '_unhandled_input(event): Event callback triggered when an input was not consumed by UI windows.'
    ],
    layman: {
      title: 'Abstract Actions',
      text: 'Instead of checking "if Space key or Screen Tap or Xbox A button", your script simply asks "if action: jump". The engine handles the hardware mapping.'
    },
    keyInsight: {
      title: 'Action Mapping',
      text: 'Configure custom actions in Project -> Project Settings -> Input Map tab.'
    }
  },

  // ==========================================================================
  // SLIDE 12: THE MOVE_AND_SLIDE() ALGORITHM
  // ==========================================================================
  {
    id: 'edp-w1-s12',
    slideNum: 12,
    totalSlides: 16,
    type: 'single_topic',
    moduleTag: 'Kinematic Movement',
    title: 'The move_and_slide() Engine',
    topicTitle: 'Godot 4 Velocity-Based Kinematic Movement',
    whatItDoes: 'Moves the body along its velocity vector, slides along collision normal surfaces, and detects floors/ceilings.',
    whatIsGoingOn: 'Internally solves multiple sub-step collision iterations, adjusting velocity.x on slopes and zeroing velocity.y when standing on floor.',
    bullets: [
      'Velocity Property: In Godot 4, velocity is a built-in Vector2 property on CharacterBody2D (no need to pass it into move_and_slide).',
      'Automatic Slope Handling: Character smoothly ascends angles up to floor_max_angle (default 45°).',
      'Floor Snapping: Keeps player grounded when running downhill without jitter.',
      'Floor Query: Call is_on_floor() immediately after move_and_slide() to verify standing state.'
    ],
    layman: {
      title: 'Why It Matters',
      text: 'Without move_and_slide(), a character hitting a wall would freeze or clip through. It automatically computes the tangential vector so you slide smoothly along walls.'
    },
    keyInsight: {
      title: 'Delta Rule',
      text: 'Do NOT multiply velocity by delta inside move_and_slide(). Godot 4 automatically calculates delta time internally.'
    }
  },

  // ==========================================================================
  // SLIDE 13: PHYSICS LAYERS & COLLISION MASKS
  // ==========================================================================
  {
    id: 'edp-w1-s13',
    slideNum: 13,
    totalSlides: 16,
    type: 'comparison',
    moduleTag: 'Collision Matrix',
    title: 'Collision Layers vs Collision Masks',
    topicTitle: 'The Two-Part Filtering Matrix for Every Physics Object',
    whatItDoes: 'Determines which objects can hit which other objects, saving CPU calculations and preventing bugs.',
    whatIsGoingOn: 'Godot uses a 32-bit bitmask comparison. A collision occurs only if Body A’s Layer matches Body B’s Mask OR Body B’s Layer matches Body A’s Mask.',
    versusLeft: {
      title: 'Collision Layer (What I am)',
      bullets: [
        'The physical layer(s) that this object lives on.',
        'Terrain: Layer 1 (World / Terrain).',
        'Player: Layer 2 (Player).',
        'Enemies: Layer 3 (Hostiles).'
      ]
    },
    versusRight: {
      title: 'Collision Mask (What I look for)',
      bullets: [
        'The layer(s) this object scans to detect collisions.',
        'Player Mask: 1 (scans and lands on Terrain).',
        'Terrain Mask: 0 (terrain does not scan; it is static).',
        'Bullets Mask: 1 & 3 (hits terrain and enemies, ignores player).'
      ]
    }
  },

  // ==========================================================================
  // SLIDE 14: TOUCH CONTROLS & MOBILE EMULATION
  // ==========================================================================
  {
    id: 'edp-w1-s14',
    slideNum: 14,
    totalSlides: 16,
    type: 'single_topic',
    moduleTag: 'Mobile Adaptation',
    title: 'Touch Emulation & On-Screen Controls',
    topicTitle: 'Bridging Desktop Keyboards to Mobile Glass Screens',
    whatItDoes: 'Enables responsive touch buttons and virtual analog thumbsticks for mobile gameplay.',
    whatIsGoingOn: 'Godot provides TouchScreenButton nodes that emit standard InputEventAction events whenever a finger touches their assigned screen region.',
    bullets: [
      'TouchScreenButton: Assign an action string (e.g. "ui_left", "ui_accept") and a pressed/unpressed texture.',
      'Screen Adaptation: Parent touch buttons to a CanvasLayer so they remain fixed regardless of camera panning.',
      'Multi-Touch Support: Godot tracks multiple simultaneous finger indices (touch index 0, 1, 2).',
      'Pass-by Mode: Allows sliding a thumb between left/right buttons without lifting the finger.'
    ],
    layman: {
      title: 'Glass Arcade',
      text: 'TouchScreenButtons convert tap coordinates on your smartphone into the exact same "ui_accept" action your PC spacebar uses.'
    },
    keyInsight: {
      title: 'CanvasLayer Anchor',
      text: 'Always place on-screen UI and touch controls inside a CanvasLayer node so they stay pinned to the camera screen edges.'
    }
  },

  // ==========================================================================
  // SLIDE 15: COMMON BEGINNER PITFALLS
  // ==========================================================================
  {
    id: 'edp-w1-s15',
    slideNum: 15,
    totalSlides: 16,
    type: 'single_topic',
    moduleTag: 'Troubleshooting',
    title: 'Top 5 Beginner Godot Pitfalls',
    topicTitle: 'How to Diagnose and Fix the Most Common Lab Roadblocks',
    whatItDoes: 'Identifies common errors students encounter during their first 2D physics setup.',
    whatIsGoingOn: 'Small misconfigurations in collision transforms, gravity signs, or node types cause unexpected physics glitches.',
    bullets: [
      'Player Falls Through Floor: Check that Terrain has a CollisionShape2D and that Player’s Collision Mask includes Layer 1.',
      'Character Jumps Downward: In Godot 2D, negative Y is UP, positive Y is DOWN. Jump velocity must be negative (e.g., -400.0).',
      'Blurry Pixel Art: Ensure Project Settings -> Textures -> Default Texture Filter is set to "Nearest", not "Linear".',
      'Player Snags on Seams: Avoid box colliders on characters. Use a CapsuleShape2D for smooth horizontal sliding.',
      'Forgetting move_and_slide(): Setting velocity without calling move_and_slide() produces zero on-screen movement.'
    ],
    keyInsight: {
      title: 'Debugging Tip',
      text: 'Toggle Debug -> Visible Collision Shapes in the Godot top menu to see real-time collision boundaries during gameplay.'
    }
  },

  // ==========================================================================
  // SLIDE 16: LABORATORY ROADMAP
  // ==========================================================================
  {
    id: 'edp-w1-s16',
    slideNum: 16,
    totalSlides: 16,
    type: 'single_topic',
    moduleTag: 'Lab Assignment',
    title: 'Laboratory Manual: 2D Mobile Game',
    topicTitle: 'Step-by-Step Hands-On Implementation Roadmap',
    whatItDoes: 'Prepares students to build their own playable mobile 2D platformer following the interactive lab guide.',
    whatIsGoingOn: 'The lab manual covers 6 graded milestones from project creation to fully functioning collision physics.',
    bullets: [
      'Milestone 1: Project initialization & Mobile preset (1280x720, canvas_items, touch emulation).',
      'Milestone 2: Blank Node2D root assembly with single PNG background anchoring.',
      'Milestone 3: Static ground terrain geometry and collision sizing.',
      'Milestone 4: CharacterBody2D player assembly with sprite and capsule collider.',
      'Milestone 5: Event-driven GDScript implementation (gravity, jump, horizontal axis, friction).',
      'Milestone 6: Physical collision layer and mask matrix verification.'
    ],
    layman: {
      title: 'Ready to Build?',
      text: 'Launch the interactive Lab Manual directly at /godot/ or from the Tasks tab. Faithfully based on Coco Code\'s popular Godot tutorial "Start Your Game Creation Journey Today!" (YouTube: 5V9f3MT86M8) using Pixel Adventure 1 assets.'
    },
    keyInsight: {
      title: 'Action Link & Video Companion',
      text: 'Visit /godot/ for the complete step-by-step guide with copyable code snippets, screenshots, and the companion YouTube video.'
    }
  }
];
