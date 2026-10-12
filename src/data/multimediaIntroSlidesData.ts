import { SlideData } from '../types/slide';

export const multimediaIntroSlidesData: SlideData[] = [
  // ==========================================================================
  // SLIDE 1: COVER
  // ==========================================================================
  {
    id: 'mm-slide1',
    slideNum: 1,
    totalSlides: 26,
    type: 'cover',
    moduleTag: 'BS MULTIMEDIA • CORE CURRICULUM',
    title: 'Introduction to Multimedia',
    subtitle: 'The Creative Technology Foundation: The 5 Elements, Interactivity, Authoring & Industry Products',
    metadata: [
      { label: 'Audience', val: 'BS Multimedia Students' },
      { label: 'Foundations', val: '5 Elements & Hypermedia' },
      { label: 'Interactive Labs', val: '9 Live Studio Simulators' },
      { label: 'Delivery', val: 'Optical Discs to 5G Streaming' }
    ]
  },

  // ==========================================================================
  // SLIDE 2: AGENDA
  // ==========================================================================
  {
    id: 'mm-slide2',
    slideNum: 2,
    totalSlides: 26,
    type: 'single_topic',
    moduleTag: 'Roadmap',
    title: 'Lecture Roadmap',
    topicTitle: 'What Multimedia Creators Will Explore Today',
    bullets: [
      'Etymology & Definition: Breaking down "Multi" (Multiple) and "Media" (Distribution channels).',
      'The 5 Core Elements: Deep dive into Text, Graphic, Audio, Animation, and Video.',
      'Linear vs. Non-Linear: Passive spectator broadcast vs. dynamic user agency and hypermedia.',
      'Authoring Tools: How software like Director, Flash, and modern engines merge media elements.',
      'The 6 Industry Products: Briefing, Reference, Database, Education, Kiosks, and Video Games.'
    ],
    layman: {
      title: 'The Multimedia Mindset:',
      text: 'Multimedia is where digital fine arts meets computer science. You are not just designing static graphics—you are directing time, space, interactivity, and human perception.'
    },
    keyInsight: {
      title: 'Our Mission Today',
      text: 'Transform dry theory into tangible creator intuition through 9 hands-on interactive studio sandboxes.'
    }
  },

  // ==========================================================================
  // SLIDE 3: LEARNING OBJECTIVES
  // ==========================================================================
  {
    id: 'mm-slide3',
    slideNum: 3,
    totalSlides: 26,
    type: 'interactive_objectives',
    moduleTag: 'Competencies',
    title: 'Syllabus Learning Competencies',
    topicTitle: 'Click each core skill to explore why it matters:'
  },

  // ==========================================================================
  // SLIDE 4: WHAT IS MULTIMEDIA? (ETYMOLOGY)
  // ==========================================================================
  {
    id: 'mm-slide4',
    slideNum: 4,
    totalSlides: 26,
    type: 'comparison',
    moduleTag: 'Etymology',
    title: 'Deconstructing the Word "Multimedia"',
    topicTitle: 'Derived from the Latin "Multi" and "Media"',
    versusLeft: {
      title: 'MULTI (Many / Multiple)',
      bullets: [
        'Diverse simultaneous channels: Combining more than one sensory mode at the same time.',
        'Sensory convergence: Engaging both auditory (hearing) and visual (sight) cognitive pathways.',
        'Multi-faceted expression: Moving beyond single-channel print or single-channel radio.'
      ]
    },
    versusRight: {
      title: 'MEDIA (Distribution & Presentation)',
      bullets: [
        'Information carriers: Tools used to store, transmit, and present human meaning.',
        'Core building blocks: Text copy, 2D graphics, spoken voice, music, animation, and video.',
        'Electronic delivery: Rendered, manipulated, and orchestrated via digital computers.'
      ]
    },
    keyInsight: {
      title: 'The Dual Definition',
      text: 'Multimedia is both the medium (how content is distributed) and the message (how diverse media elements weave together to convey meaning).'
    }
  },

  // ==========================================================================
  // SLIDE 5: FORMAL DEFINITION & 5-ELEMENT CONSTELLATION
  // ==========================================================================
  {
    id: 'mm-slide5',
    slideNum: 5,
    totalSlides: 26,
    type: 'single_topic',
    moduleTag: 'Definition',
    title: 'The Formal Definition of Multimedia',
    topicTitle: 'How Digital Systems Deliver Compound Media',
    bullets: [
      'A seamless combination: Integrates Text, Graphic, Sound, Animation, and Video into a unified experience.',
      'Digitally manipulated: Processed, generated, compressed, and synchronized using computational hardware.',
      'Delivered interactively: Empowers the human user with control over navigation, playback, and input state.',
      'Cognitive multiplier: Multi-channel delivery increases information retention by up to 65% over pure text.'
    ],
    layman: {
      title: 'The Kitchen Analogy:',
      text: 'Text is flour, Graphics are sugar, Audio is vanilla, Animation is rising heat, and Video is fresh fruit. Alone, they are raw ingredients. Mixed and baked together, they create a delicious multimedia cake!'
    },
    keyInsight: {
      title: 'Golden Rule for BS Multimedia Students',
      text: 'Never add elements for decoration alone. Every element (audio chime, graphic icon, animated transition) must serve a clear communicative purpose.'
    }
  },

  // ==========================================================================
  // SLIDE 6: [INTERACTIVE LAB 1] 5 ELEMENTS MIXER
  // ==========================================================================
  {
    id: 'mm-slide6',
    slideNum: 6,
    totalSlides: 26,
    type: 'multimedia_elements_mixer',
    moduleTag: 'Interactive Lab 1',
    title: 'The 5 Elements Mixer Studio',
    subtitle: 'Toggle Text, Graphic, Audio, Animation, and Video in real time to observe how compound media transforms user engagement.'
  },

  // ==========================================================================
  // SLIDE 7: ELEMENT 1: TEXT
  // ==========================================================================
  {
    id: 'mm-slide7',
    slideNum: 7,
    totalSlides: 26,
    type: 'single_topic',
    moduleTag: 'Element 1 • Text',
    title: 'Element 1: Text & Typographic Micro-Copy',
    topicTitle: 'The Most Fundamental Anchor of Human Meaning',
    bullets: [
      'The foundational element: Words and characters express precise meaning where visuals might be ambiguous.',
      'Key word selection: Precise, concise copywriting directs user actions without mental fatigue.',
      'Critical UI roles: Headlines, menu navigation, button labels, instructional copy, and captions.',
      'Typographic hierarchy: Font size, weight, and contrast establish scanning priority (H1 &rarr; H2 &rarr; Body).'
    ],
    whatItDoes: 'Anchors exact meaning, provides clear navigation cues, and guides the user through complex workflows.',
    whatIsGoingOn: 'Text is encoded digitally using character sets (ASCII, Unicode UTF-8) and rendered via vector font bezier outlines (OpenType, TrueType).',
    discussionPrompt: {
      question: 'Why does an icon without a text label often confuse users (the "Mystery Meat Navigation" trap)?',
      hint: 'Icons rely on cultural metaphors that vary between users; text removes ambiguity and confirms intent.'
    }
  },

  // ==========================================================================
  // SLIDE 8: ELEMENT 2: GRAPHICS
  // ==========================================================================
  {
    id: 'mm-slide8',
    slideNum: 8,
    totalSlides: 26,
    type: 'single_topic',
    moduleTag: 'Element 2 • Graphics',
    title: 'Element 2: Graphics & Visual Clarity',
    topicTitle: '"A Picture Means a Thousand Words"',
    bullets: [
      'Two-dimensional figures: Visual illustrations, diagrams, icons, photographs, and user interface panels.',
      'Creation workflows: Produced manually (drawing, painting, sculpting) or digitally (photoshop, vector math, 3D render).',
      'Visual mental models: Diagrams explain complex systems faster than pages of dense textual description.',
      'Two fundamental formats: Raster Bitmaps (pixels) vs. Scalable Vectors (mathematical bezier curves).'
    ],
    layman: {
      title: 'Why Graphics Win:',
      text: 'The human brain processes visual scenes in as little as 13 milliseconds—60,000 times faster than reading textual characters!'
    },
    keyInsight: {
      title: 'Design Principle: Signal-to-Noise Ratio',
      text: 'Good graphics simplify reality to highlight essential relationships. Cluttered graphics add cognitive noise.'
    }
  },

  // ==========================================================================
  // SLIDE 9: [INTERACTIVE LAB 2] GRAPHIC RESOLUTION INSPECTOR
  // ==========================================================================
  {
    id: 'mm-slide9',
    slideNum: 9,
    totalSlides: 26,
    type: 'graphic_raster_vector_inspector',
    moduleTag: 'Interactive Lab 2',
    title: 'Raster Bitmaps vs. Scalable Vectors',
    subtitle: 'Zoom in from 1x to 5x magnification to witness pixel grid degradation vs. infinite mathematical vector recalculation.'
  },

  // ==========================================================================
  // SLIDE 10: ELEMENT 3: AUDIO
  // ==========================================================================
  {
    id: 'mm-slide10',
    slideNum: 10,
    totalSlides: 26,
    type: 'single_topic',
    moduleTag: 'Element 3 • Audio',
    title: 'Element 3: Audio & Acoustic Sound Design',
    topicTitle: 'Physical Vibrations Perceived by the Human Ear',
    bullets: [
      'Speech & Narration: Human voiceover for instructional clarity, emotional tone, and accessibility.',
      'Sound Effects (SFX): Tactile auditory feedback (button clicks, alert chimes, error buzzers, game physics).',
      'Musical Score (BGM): Orchestrates emotional atmosphere, tension, pacing, and brand identity.',
      'Fastest sensory reflex: Human auditory reflex is ~140ms—significantly faster than visual perception (~190ms)!'
    ],
    whatItDoes: 'Creates immersion, provides instant feedback, and engages users even when their eyes glance away.',
    whatIsGoingOn: 'Continuous analog sound waves are converted to digital PCM samples (44.1 kHz, 16-bit) via Nyquist theorem sampling.',
    discussionPrompt: {
      question: 'Why do horror movies lose nearly all their fear factor when muted?',
      hint: 'Sound bypasses the conscious visual filter and triggers involuntary neurological fight-or-flight reactions!'
    }
  },

  // ==========================================================================
  // SLIDE 11: [INTERACTIVE LAB 3] AUDIO SOUND DESIGN VISUALIZER
  // ==========================================================================
  {
    id: 'mm-slide11',
    slideNum: 11,
    totalSlides: 26,
    type: 'audio_sound_design_visualizer',
    moduleTag: 'Interactive Lab 3',
    title: 'Sound Design & Frequency Visualizer',
    subtitle: 'Trigger synthesized speech, tactile SFX, and musical chords while observing the real-time acoustic oscilloscope.'
  },

  // ==========================================================================
  // SLIDE 12: ELEMENT 4: ANIMATION
  // ==========================================================================
  {
    id: 'mm-slide12',
    slideNum: 12,
    totalSlides: 26,
    type: 'single_topic',
    moduleTag: 'Element 4 • Animation',
    title: 'Element 4: Animation & The Illusion of Motion',
    topicTitle: 'Persistence of Vision: Retinal Frame Retention',
    bullets: [
      'The optical illusion: Rapid sequential display of discrete static images creates perceived continuous motion.',
      'Eye tracking & focus: Animated transitions guide the user\'s eyes naturally between interface state changes.',
      'Enriched understanding: Demonstrates physical transformations, mechanical processes, and character emotion.',
      'Standard frame rates: 12 FPS (traditional 2s), 24 FPS (cinema standard), 60 FPS (fluid UI & modern games).'
    ],
    layman: {
      title: 'The Flipbook Secret:',
      text: 'A computer never moves an image—it merely draws static pictures quickly enough that your eye merges them together!'
    },
    keyInsight: {
      title: 'Disney\'s 12 Principles of Animation (1981)',
      text: 'Ollie Johnston & Frank Thomas codified squash & stretch, anticipation, and staging. These same principles define modern app UI animations today!'
    }
  },

  // ==========================================================================
  // SLIDE 13: [INTERACTIVE LAB 4] ANIMATION FPS PLAYER
  // ==========================================================================
  {
    id: 'mm-slide13',
    slideNum: 13,
    totalSlides: 26,
    type: 'animation_fps_motion_player',
    moduleTag: 'Interactive Lab 4',
    title: 'Frame Rate & Persistence of Vision',
    subtitle: 'Test 6, 12, 24, and 60 FPS playback, scrub individual frames, and toggle onion skinning to understand motion illusion.'
  },

  // ==========================================================================
  // SLIDE 14: ELEMENT 5: VIDEO
  // ==========================================================================
  {
    id: 'mm-slide14',
    slideNum: 14,
    totalSlides: 26,
    type: 'single_topic',
    moduleTag: 'Element 5 • Video',
    title: 'Element 5: Video & Photographic Capture',
    topicTitle: 'Real-World Motion Capture & Compression Planning',
    bullets: [
      'Photographic capture: Live recording, processing, and reconstruction of real-world optical imagery.',
      'Video vs. Animation: Video captures photo-realistic light through camera sensors; animation synthesizes graphic assets.',
      'Massive data weight: Uncompressed 4K video generates hundreds of gigabytes per hour!',
      'Mandatory compression: Modern creators must plan video codecs (H.264, H.265/HEVC, AV1) and bitrates carefully.'
    ],
    whatItDoes: 'Delivers documentary realism, facial nuances, product demonstrations, and cinematic storytelling.',
    whatIsGoingOn: 'Camera sensors capture optical Bayer matrices, which temporal and spatial compression algorithms (I/P/B frames) shrink for web delivery.',
    discussionPrompt: {
      question: 'Why did YouTube struggle to exist before 2005, despite video cameras existing for decades?',
      hint: 'Consumer bandwidth was too slow and early compression formats were too inefficient to stream video in real time.'
    }
  },

  // ==========================================================================
  // SLIDE 15: [INTERACTIVE LAB 5] VIDEO STORAGE CALCULATOR
  // ==========================================================================
  {
    id: 'mm-slide15',
    slideNum: 15,
    totalSlides: 26,
    type: 'video_bitrate_storage_calculator',
    moduleTag: 'Interactive Lab 5',
    title: 'Video Bitrate & Storage Calculator',
    subtitle: 'Calculate file sizes across 1080p, 4K, and 8K resolutions and discover how codecs prevent physical media overflow.'
  },

  // ==========================================================================
  // SLIDE 16: INTERACTIVITY & HYPERMEDIA
  // ==========================================================================
  {
    id: 'mm-slide16',
    slideNum: 16,
    totalSlides: 26,
    type: 'comparison',
    moduleTag: 'Interactivity',
    title: 'Interactive Multimedia & Hypermedia',
    topicTitle: 'Empowering User Control Across Linked Networks',
    versusLeft: {
      title: 'Interactive Multimedia',
      bullets: [
        'User in the driver seat: The user is granted agency to control playback, trigger states, and manipulate elements.',
        'Bidirectional conversation: Every click, tap, or keystroke produces immediate visual and auditory feedback.',
        'Custom pacing: Students read, pause, rewind, and re-examine content at their individual learning speed.'
      ]
    },
    versusRight: {
      title: 'Hypermedia (Linked Web of Media)',
      bullets: [
        'Evolution of Hypertext: Ted Nelson coined "Hypermedia" to extend text hyperlinks into graphics, audio, and video.',
        'Non-linear web: Media assets connect through clickable nodes rather than a single straight narrative line.',
        'Exploratory discovery: Users forge unique custom trajectories through a complex body of knowledge.'
      ]
    },
    keyInsight: {
      title: 'The Shift in Power',
      text: 'In traditional media, the author controls the timeline. In hypermedia, the author designs a universe of possibilities, and the user controls the journey.'
    }
  },

  // ==========================================================================
  // SLIDE 17: LINEAR VS NON-LINEAR MULTIMEDIA
  // ==========================================================================
  {
    id: 'mm-slide17',
    slideNum: 17,
    totalSlides: 26,
    type: 'comparison',
    moduleTag: 'Architecture',
    title: 'Linear vs. Non-Linear Media Structures',
    topicTitle: 'Comparing Passive Spectatorship with Active Agency',
    versusLeft: {
      title: 'LINEAR MULTIMEDIA',
      bullets: [
        'Zero user interactivity: The project plays from start to finish without branching options.',
        'No navigational control: The viewer cannot alter the order of scenes or outcomes.',
        'Predetermined timeline: Every viewer experiences the exact same sequence at the exact same pace.',
        'Examples: Cinema movies, broadcast TV shows, traditional non-interactive lecture demos.'
      ]
    },
    versusRight: {
      title: 'NON-LINEAR MULTIMEDIA',
      bullets: [
        'High interactivity: Users actively choose paths, make decisions, and manipulate inputs.',
        'Navigational agency: Backtracking, searching, filtering, and jumping between chapters.',
        'Personalized outcomes: Different users experience different story endings and learning paths.',
        'Examples: Video games, e-learning courseware, websites, airport kiosks, mobile apps.'
      ]
    },
    keyInsight: {
      title: 'When to Use Which?',
      text: 'Use Linear for emotional, author-directed narratives (films). Use Non-Linear when users must explore, solve problems, or make decisions (learning, tools, games).'
    }
  },

  // ==========================================================================
  // SLIDE 18: [INTERACTIVE LAB 6] LINEAR VS NON-LINEAR LAB
  // ==========================================================================
  {
    id: 'mm-slide18',
    slideNum: 18,
    totalSlides: 26,
    type: 'linear_vs_nonlinear_branching_lab',
    moduleTag: 'Interactive Lab 6',
    title: 'Linear Filmstrip vs. Non-Linear Decision Tree',
    subtitle: 'Experience the psychological difference: watch a passive linear cinema clip, then navigate an interactive branching narrative.'
  },

  // ==========================================================================
  // SLIDE 19: MULTIMEDIA AUTHORING TOOLS
  // ==========================================================================
  {
    id: 'mm-slide19',
    slideNum: 19,
    totalSlides: 26,
    type: 'single_topic',
    moduleTag: 'Authoring Tools',
    title: 'Multimedia Authoring Tools: The Merge Engines',
    topicTitle: 'Software that Glues the 5 Elements Together',
    bullets: [
      'Asset integration: Imports and synchronizes text, audio tracks, bitmap/vector graphics, animations, and video clips.',
      'Timeline & staging: Organizes assets across sequential keyframes, layers, and interactive trigger points.',
      'Scripting & logic: Adds interactivity via programming languages (ActionScript, Lingo, GDScript, C#, JavaScript).',
      'Historical & modern tools: Macromedia Authorware, Director, Flash, Godot 4, Unity, Unreal Engine, and Figma.'
    ],
    layman: {
      title: 'The Director\'s Chair:',
      text: 'An authoring tool is like a theatrical stage director: it tells the actors (graphics), the orchestra (audio), and the lighting (effects) exactly where to be and when to respond to the audience!'
    },
    keyInsight: {
      title: 'Flash Legacy to Modern Web',
      text: 'While the Flash player was retired, its core paradigm—timeline layers, keyframing, and event-driven scripting—lives on in every modern game engine and motion graphics tool.'
    }
  },

  // ==========================================================================
  // SLIDE 20: [INTERACTIVE LAB 7] AUTHORING TIMELINE STUDIO
  // ==========================================================================
  {
    id: 'mm-slide20',
    slideNum: 20,
    totalSlides: 26,
    type: 'multimedia_authoring_studio',
    moduleTag: 'Interactive Lab 7',
    title: 'Multi-Track Layer & Keyframe Studio',
    subtitle: 'Scrub the playhead across the 20-frame timeline, inspect code triggers on frame 14, and run the stage animation.'
  },

  // ==========================================================================
  // SLIDE 21: DOMAINS OF APPLICATION
  // ==========================================================================
  {
    id: 'mm-slide21',
    slideNum: 21,
    totalSlides: 26,
    type: 'single_topic',
    moduleTag: 'Impact & Domains',
    title: 'The 5 Major Fields of Multimedia Impact',
    topicTitle: 'Where BS Multimedia Graduates Build Careers',
    bullets: [
      'Business: High-impact marketing pitch decks, trade show booth displays, staff training simulations, company kiosks.',
      'Education: Interactive courseware, virtual laboratory simulations, distance learning portals, search utilities.',
      'Entertainment: Commercial video games, CGI theatrical feature films, on-demand streaming networks, VR theme parks.',
      'Home: Smart IPTV, interactive television, connected gaming consoles (PlayStation, Switch, mobile), smart home hubs.',
      'Public Places: Airport check-in terminals, subway ticket kiosks, digital museum exhibits, interactive public wayfinding.'
    ],
    whatItDoes: 'Empowers every modern industry to communicate, teach, sell, and entertain through digital sensory channels.',
    whatIsGoingOn: 'High-speed broadband and pervasive touch screens turn every public and private space into an interactive multimedia terminal.',
    discussionPrompt: {
      question: 'Which multimedia field holds the largest global economic market cap today?',
      hint: 'The global gaming industry (~$180+ Billion) now generates more revenue than film and music combined!'
    }
  },

  // ==========================================================================
  // SLIDE 22: THE 6 MULTIMEDIA PRODUCTS (TAXONOMY)
  // ==========================================================================
  {
    id: 'mm-slide22',
    slideNum: 22,
    totalSlides: 26,
    type: 'single_topic',
    moduleTag: 'Product Taxonomy',
    title: 'The 6 Types of Multimedia Products',
    topicTitle: 'Classification of Commercial Industry Deliverables',
    bullets: [
      '1. Briefing Products: Fast, concise, linear decks to pitch ideas quickly (Corporate presentations, sales decks).',
      '2. Reference Products: Massive encyclopedic repositories for specific queries (Encarta, digital dictionaries).',
      '3. Database Products: Large-scale indexed media datasets with content search (Google Earth, media archives).',
      '4. Education & Training: Interactive textbooks and simulations (Pre-K to corporate training courseware).',
      '5. Kiosk Products: Public standalone touch terminals (POI: Point of Information vs. POS: Point of Sale).',
      '6. Entertainment & Games: Immersive real-time simulations featuring challenge, reward, and multiplayer play.'
    ],
    layman: {
      title: 'Product Archetypes:',
      text: 'From a simple 5-minute sales pitch to a 100-hour open-world video game, every multimedia deliverable fits into these six architectural product categories.'
    },
    keyInsight: {
      title: 'BS Multimedia Career Alignment',
      text: 'Understanding product archetypes helps you scope project timelines, budget media assets, and design appropriate interaction loops.'
    }
  },

  // ==========================================================================
  // SLIDE 23: [INTERACTIVE LAB 8] THE 6 PRODUCTS MATRIX
  // ==========================================================================
  {
    id: 'mm-slide23',
    slideNum: 23,
    totalSlides: 26,
    type: 'multimedia_products_interactive_matrix',
    moduleTag: 'Interactive Lab 8',
    title: 'The 6 Multimedia Products Interactive Matrix',
    subtitle: 'Click through each product category to examine development cycles, user interactivity levels, and live simulated prototypes.'
  },

  // ==========================================================================
  // SLIDE 24: DELIVERING MULTIMEDIA (STORAGE & BANDWIDTH)
  // ==========================================================================
  {
    id: 'mm-slide24',
    slideNum: 24,
    totalSlides: 26,
    type: 'single_topic',
    moduleTag: 'Delivery Pipelines',
    title: 'Delivering Multimedia: Storage & Bandwidth',
    topicTitle: 'How Physical Discs Evolved into Cloud Streaming',
    bullets: [
      'The delivery bottleneck: Rich multimedia requires large storage capacities and high data transfer throughput.',
      'Physical Optical & Flash: Historical reliance on CD-ROM (700 MB), DVD-ROM (4.7 GB), Blu-ray, and USB flash memory.',
      'Network Broadband Streaming: High-speed fiber, 5G cellular, and edge Content Delivery Networks (CDNs).',
      'Adaptive bitrate streaming: Modern video players adjust stream resolution dynamically to match user network conditions.'
    ],
    layman: {
      title: 'Water Pipe Analogy:',
      text: 'File size is the amount of water in a tank. Bandwidth is the diameter of the pipe. If the pipe is narrow, you either wait hours or compress the water into ice cubes!'
    },
    keyInsight: {
      title: 'The 1990s CD-ROM Revolution',
      text: 'Before high-speed internet, CD-ROMs enabled the first multimedia boom because they held 700 MB—over 480 times the storage of a 1.44 MB floppy disk!'
    }
  },

  // ==========================================================================
  // SLIDE 25: [INTERACTIVE LAB 9] BANDWIDTH DELIVERY SPEED RACE
  // ==========================================================================
  {
    id: 'mm-slide25',
    slideNum: 25,
    totalSlides: 26,
    type: 'delivery_bandwidth_speed_race',
    moduleTag: 'Interactive Lab 9',
    title: 'Media Delivery Bandwidth Race',
    subtitle: 'Pit a 700MB video package against Floppy, CD-ROM, DVD, USB 3.0, and 5G Fiber to witness the speed revolution.'
  },

  // ==========================================================================
  // SLIDE 26: COURSE SYNTHESIS & RECAP
  // ==========================================================================
  {
    id: 'mm-slide26',
    slideNum: 26,
    totalSlides: 26,
    type: 'section_break',
    sectionNum: 'SUMMARY',
    title: 'Multimedia Fundamentals Mastered! 🎓',
    description: 'You have mastered: 1) The etymology of Multi + Media, 2) The 5 core elements and their technical requirements, 3) Interactivity & Hypermedia, 4) Linear vs Non-Linear architectures, 5) Authoring tools, and 6) The 6 commercial multimedia products. You are now prepared to build rich digital experiences!'
  }
];
