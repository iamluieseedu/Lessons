import { SlideData } from '../types/slide';

export const mediaDsnWeek2SlidesData: SlideData[] = [
  // SLIDE 1: COVER
  {
    id: 'media2-slide1',
    slideNum: 1,
    totalSlides: 40,
    type: 'cover',
    moduleTag: 'Week 2 — INTERACTIVE MEDIA DESIGN',
    title: 'Principles of Interactivity, UI & UX Design Basics',
    subtitle: 'Week 2 — Deconstructing Human Interaction, Visual Layouts, Color Systems, Typography, and User Journeys',
    metadata: [
      { label: 'Curriculum', val: 'Interactive Media Design (Week 2)' },
      { label: 'Units', val: 'Interactivity, UI Design & UX Basics' },
      { label: 'Interactive Labs', val: '8 Real-Time Simulators' },
      { label: 'Assessment', val: 'Self-Check Quizzes & Written Audit' }
    ]
  },

  // SLIDE 2: AGENDA
  {
    id: 'media2-slide2',
    slideNum: 2,
    totalSlides: 40,
    type: 'single_topic',
    moduleTag: 'Agenda',
    title: 'Week 2 Lecture Roadmap',
    topicTitle: 'What We Will Explore & Build Today',
    bullets: [
      'Unit 1 — Principles of Interactivity: Discover Donald Norman\'s 6 interaction principles (affordance, signifiers, feedback, mapping, constraints, consistency), study how interactivity fuels cognitive engagement, and test the spectrum of interactive media from hypermedia to spatial XR.',
      'Unit 2 — User Interface (UI) Design Basics: Master the sensory layer of digital products. Learn visual hierarchy, F-pattern scanning, the 8-point grid, the 60-30-10 color rule, WCAG contrast accessibility, and modular typography scale ladders.',
      'Unit 3 — User Experience (UX) Design Basics: Demystify the UI vs UX distinction, examine Jakob Nielsen\'s 10 usability heuristics, and learn how to conduct user research, craft evidence-based personas, and plot user journey maps.',
      'Interactive Labs & Audits: Engage with 8 live simulation sandboxes (Affordance Sandbox, Media Types Explorer, Layout Lab, Color Theory Studio, Typography Playground, Persona Empathy Map, Journey Map Simulator, and Usability Audit).'
    ],
    keyInsight: {
      title: 'Our Weekly Mission',
      text: 'By the end of this module, you will not only understand the scientific theory behind UI and UX design, but you will also be able to audit any mobile app or website, identify usability friction, and engineer intuitive, accessible interfaces.'
    }
  },

  // SLIDE 3: LEARNING OBJECTIVES
  {
    id: 'media2-slide3',
    slideNum: 3,
    totalSlides: 40,
    type: 'interactive_objectives',
    moduleTag: 'Objectives',
    title: 'Syllabus Learning Competencies',
    topicTitle: 'Core Skills You Will Master in Week 2'
  },

  // ==========================================================================
  // UNIT 1: PRINCIPLES OF INTERACTIVITY
  // ==========================================================================
  {
    id: 'media2-slide4',
    slideNum: 4,
    totalSlides: 40,
    type: 'section_break',
    sectionNum: 'UNIT 01',
    title: 'Principles of Interactivity',
    description: 'Understanding bidirectional human-system communication, the 5 dimensions of interaction, and the psychological mechanics of user engagement.'
  },

  // SLIDE 5: WHAT MAKES MEDIA INTERACTIVE
  {
    id: 'media2-slide5',
    slideNum: 5,
    totalSlides: 40,
    type: 'single_topic',
    moduleTag: 'Interactivity',
    title: 'The 5 Fundamental Dimensions of Interaction',
    topicTitle: 'How Humans Communicate with Computational Systems',
    bullets: [
      '1D — Words: Text labels, instructions, button copy, and typography that communicate meaning directly without ambiguity.',
      '2D — Visual Representations: Icons, diagrams, typography hierarchy, illustrations, and photographic signifiers that aid comprehension.',
      '3D — Physical Objects & Space: The hardware devices (mouse, touch glass, stylus, VR controllers) and physical ergonomics of the interaction.',
      '4D — Time & Pacing: Animations, sound effects, video speed, transition timing, and response latency that establish the temporal rhythm of the system.',
      '5D — Behavior & Mechanics: The underlying state machine, feedback loops, error handling, and logical responses triggered when users take action.'
    ],
    layman: {
      title: 'Simple Analogy:',
      text: 'A book operates in 1D and 2D (words and pictures). A video adds 4D (time). But true interactive media requires the 5th dimension: dynamic behavioral feedback where the system actively changes based on your choices.'
    },
    keyInsight: {
      title: '💡 Academic Origin: Gillian Crampton Smith (Moggridge, 2007)',
      text: 'Gillian Crampton Smith originally proposed the first 4 dimensions of interaction design, and Kevin Silver subsequently introduced the crucial 5th dimension: Behavior. Together, they form the complete taxonomy of interaction architecture.'
    },
    image: {
      url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      caption: 'The 5 Dimensions of Interaction Design in Modern Digital Products'
    }
  },

  // SLIDE 6: DONALD NORMAN'S 6 PRINCIPLES
  {
    id: 'media2-slide6',
    slideNum: 6,
    totalSlides: 40,
    type: 'single_topic',
    moduleTag: 'Interactivity',
    title: "Donald Norman's Core Interaction Principles",
    topicTitle: 'The Classical Foundations of Everyday Usability',
    bullets: [
      'Affordance: The fundamental physical and perceptual properties of an object that determine how it can possibly be used (e.g. a chair affords sitting, a glass screen affords touching).',
      'Signifiers: Perceptible visual or auditory clues that tell users WHERE and HOW to interact (e.g. a bevel or drop shadow on a button, a "Push" label on a door).',
      'Feedback: Immediate acknowledgment sent back to the user validating that their action was registered (e.g. an audio click, a color state transition, or a loading spinner).',
      'Feedforward: Information that explains to users what will happen BEFORE they commit to an action (e.g. hover tooltips, URL previews, or destructive action warning badges).',
      'Mapping: The spatial, conceptual, or geometric relationship between controls and their real-world outcome (e.g. turning a steering wheel clockwise turns the car right).',
      'Constraints: Restricting the range of possible user actions to prevent fatal errors (e.g. disabling the "Submit" button until all required fields are validated).'
    ],
    layman: {
      title: 'The Infamous "Norman Door":',
      text: 'Have you ever pushed a door that you were supposed to pull? That is not your fault! If a door has a handle that affords pulling, but requires pushing, the design has a misleading signifier that violates human intuition.'
    },
    keyInsight: {
      title: '🔍 Rule of Thumb for Designers',
      text: 'When users make mistakes in your software, do not blame the user. A well-designed interface leverages signifiers and constraints so that doing the right thing is easy, and doing the wrong thing is impossible.'
    },
    image: {
      url: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80',
      caption: 'Donald Norman\'s Interaction Principles Applied to Modern Interface Prototyping'
    }
  },

  // SLIDE 7: INTERACTIVE SIMULATION 1
  {
    id: 'media2-slide7',
    slideNum: 7,
    totalSlides: 40,
    type: 'interactivity_principles_sandbox',
    moduleTag: 'Lab 1 — Interactivity',
    title: 'Interactive Lab: Affordance, Signifiers & Mapping Sandbox',
    topicTitle: 'Experiment with Norman\'s Principles in Real-Time'
  },

  // SLIDE 8: HOW INTERACTIVITY ENHANCES ENGAGEMENT
  {
    id: 'media2-slide8',
    slideNum: 8,
    totalSlides: 40,
    type: 'comparison',
    moduleTag: 'Interactivity',
    title: 'How Interactivity Enhances User Engagement',
    topicTitle: 'Passive Consumption vs. Active Interactive Exploration',
    versusLeft: {
      title: 'Passive Media Consumption',
      bullets: [
        'Passive Spectator: The consumer watches or reads without influencing the content pacing or sequence.',
        'High Attention Drop-Off: Studies show student attention peaks at 7-10 minutes during static video lectures before steep decline.',
        'Low Memory Retention: Information recall after 48 hours averages only 10% to 20% for purely passive listening.',
        'Helplessness during Errors: If the consumer misunderstands a concept, the linear broadcast continues without adjustment.'
      ]
    },
    versusRight: {
      title: 'Active Interactive Media',
      bullets: [
        'Active Agency & Control: Users manipulate parameters, test hypotheses, and navigate custom exploratory pathways.',
        'Sustained Cognitive Immersion: The interaction loop maintains alertness through continuous decision-making and feedback.',
        'High Constructivist Retention: "Learning by doing" increases information recall to over 75% through mental model reinforcement.',
        'Self-Paced Error Correction: Instant feedback lets learners test boundaries, make mistakes safely, and iterate in real-time.'
      ]
    },
    keyInsight: {
      title: 'Mihaly Csikszentmihalyi\'s "Flow State"',
      text: 'Interactivity induces psychological "Flow" when the interface strikes an optimal balance between the user\'s skill level and the interactive challenge, accompanied by clear goals and immediate feedback.'
    }
  },

  // SLIDE 9: THE COGNITIVE ENGAGEMENT LOOP
  {
    id: 'media2-slide9',
    slideNum: 9,
    totalSlides: 40,
    type: 'single_topic',
    moduleTag: 'Interactivity',
    title: 'The Psychology of the Cognitive Engagement Loop',
    topicTitle: 'Dopamine, Micro-Interactions & The Hook Model',
    bullets: [
      'The Trigger (Cue): A visual signifier (notification badge, pulsing button, or hover highlight) prompts the user to focus attention.',
      'The Action: The user executes an input (click, swipe, type, drag) with minimal cognitive friction and effort.',
      'The Variable Feedback (Reward): The system responds with instant visual delight, sound confirmation, or newly unlocked information.',
      'The Investment: The user inputs data, bookmarks content, or levels up their progress, increasing their emotional ownership of the product.',
      'Application in Educational Systems: Duolingo streak animations, Spotify Wrapped visual summaries, and interactive coding sandboxes use this exact loop to transform tedious tasks into engaging habits.'
    ],
    layman: {
      title: 'Why Micro-Animations Matter:',
      text: 'When you tap a "Like" button and it gently pops and bursts with colorful confetti, that tiny 200-millisecond micro-interaction releases dopamine and validates your physical effort.'
    },
    keyInsight: {
      title: '⚠️ Ethical UX Warning',
      text: 'Engagement loops are powerful. As interaction designers, our goal is to build loops that empower users and foster genuine learning—never dark patterns that induce addiction or manipulation.'
    },
    image: {
      url: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=800&q=80',
      caption: 'The Cognitive Engagement Cycle: Trigger, Action, Variable Feedback, and User Investment'
    }
  },

  // SLIDE 10: SPECTRUM OF INTERACTIVE MEDIA
  {
    id: 'media2-slide10',
    slideNum: 10,
    totalSlides: 40,
    type: 'single_topic',
    moduleTag: 'Media Types',
    title: 'The Spectrum of Interactive Media Types',
    topicTitle: 'Categorizing Digital Communication Channels',
    bullets: [
      'Level 1 — Reactive Media: Low interactivity. The user initiates playback, pauses, or adjusts volume (e.g. streaming video, digital audiobooks, linear slide presentations).',
      'Level 2 — Hypermedia & Web Documents: Cross-linked document nodes where users choose their own reading pathway (e.g. Wikipedia, blogs, corporate portals, e-commerce stores).',
      'Level 3 — Mobile Gestural Applications: Direct multi-touch manipulation using physical metaphors like inertia, friction, swiping, and pinch-to-zoom (e.g. Instagram, TikTok, Google Maps).',
      'Level 4 — Conversational & Voice Interfaces (CUI / VUI): Natural language dialogue replacing rigid menus with intent recognition (e.g. ChatGPT, Siri, Alexa, interactive voice response).',
      'Level 5 — Immersive Spatial Media (VR / AR / XR): 6-Degrees-of-Freedom tracking, spatial audio, and digital interfaces projected directly into physical 3D space (e.g. Apple Vision Pro, Meta Quest, Pokemon GO).'
    ],
    discussionPrompt: {
      question: "Which type of interactive media requires the highest cognitive effort from the user, and why?",
      hint: "Consider how conversational interfaces require formulating queries from memory (recall), whereas GUIs rely on recognizing visual icons (recognition)."
    }
  },

  // SLIDE 11: HYPERMEDIA & GESTURAL
  {
    id: 'media2-slide11',
    slideNum: 11,
    totalSlides: 40,
    type: 'single_topic',
    moduleTag: 'Media Types',
    title: 'Deep Dive: Non-Linear Hypermedia & Mobile Gestures',
    topicTitle: 'From Hypertext Webs to Capacitive Multi-Touch Glass',
    bullets: [
      'The Hypertext Revolution: Ted Nelson (1965) and Tim Berners-Lee (1989) decoupled reading from physical paper order. The hyperlink transformed information architecture into an open web graph.',
      'Multi-Touch Gestural Paradigms: The 2007 iPhone removed physical keyboards in favor of direct manipulation on capacitive glass.',
      'Skeuomorphism to Flat Design to Neumorphism: Early mobile interfaces mimicked real-world materials (leather, glossy plastic) to teach users new touch signifiers. Once users mastered the mental model, interfaces simplified into clean minimalist layouts.',
      'Ergonomics of the "Thumb Zone": On mobile devices, 75% of user interactions are conducted using a single thumb. Designers must place primary interactive controls in the bottom third of the screen.'
    ],
    keyInsight: {
      title: 'Steven Hoober\'s Thumb Zone Study',
      text: 'Always place high-frequency buttons (like "Add to Cart" or "Next Slide") within the natural sweeping arc of the user\'s thumb. Placing critical actions in the top-left corner on large mobile screens forces awkward two-handed stretching!'
    },
    image: {
      url: 'https://images.unsplash.com/photo-1576153192621-7a3be10b356e?auto=format&fit=crop&w=800&q=80',
      caption: 'Mobile Multi-Touch Gestural Ergonomics and the Thumb Zone'
    }
  },

  // SLIDE 12: SPATIAL XR & CONVERSATIONAL AI
  {
    id: 'media2-slide12',
    slideNum: 12,
    totalSlides: 40,
    type: 'single_topic',
    moduleTag: 'Media Types',
    title: 'Deep Dive: Spatial Computing & Conversational AI',
    topicTitle: 'The Post-Screen Frontiers of Interaction Design',
    bullets: [
      'Spatial Computing & Mixed Reality (XR): Users interact with digital 3D objects anchored into their real physical rooms. Eye-tracking serves as targeting, and micro-pinch gestures serve as click inputs.',
      'The "Gulf of Evaluation" in Spatial Media: Without physical tactile boundaries, spatial interfaces must provide rich depth shadows, audio cues, and hover highlights so users know their gaze was registered.',
      'Conversational User Interfaces (CUIs): Natural language replaces buttons. Instead of drilling down through 5 layers of settings menus, the user expresses intent: "Show me all sales reports from last Tuesday."',
      'The "Invisible Interface" Dilemma: The greatest challenge of voice and AI interfaces is discoverability—users cannot see what the system can or cannot do, leading to trial-and-error frustration.'
    ],
    layman: {
      title: 'The Challenge of Voice UI:',
      text: 'Imagine walking into a restaurant with no menu on the wall, and the waiter says: "Order whatever you want!" You freeze because you don\'t know what ingredients they have. That is the discoverability challenge of conversational AI!'
    },
    image: {
      url: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=800&q=80',
      caption: 'Immersive Spatial Computing and Virtual Reality Interaction Metaphors'
    }
  },

  // SLIDE 13: INTERACTIVE SIMULATION 2
  {
    id: 'media2-slide13',
    slideNum: 13,
    totalSlides: 40,
    type: 'interactive_media_types_explorer',
    moduleTag: 'Lab 2 — Media Types',
    title: 'Interactive Lab: Types of Interactive Media Showcase',
    topicTitle: 'Test Hypermedia, Gestures, Spatial 3D, and AI Chat in Real-Time'
  },

  // ==========================================================================
  // UNIT 2: USER INTERFACE (UI) DESIGN BASICS
  // ==========================================================================
  {
    id: 'media2-slide14',
    slideNum: 14,
    totalSlides: 40,
    type: 'section_break',
    sectionNum: 'UNIT 02',
    title: 'User Interface (UI) Design Basics',
    description: 'Crafting the sensory membrane: visual hierarchy, layout scanning patterns, the 8-point grid, the 60-30-10 color rule, WCAG contrast accessibility, and typography ladders.'
  },

  // SLIDE 15: WHAT IS UI DESIGN
  {
    id: 'media2-slide15',
    slideNum: 15,
    totalSlides: 40,
    type: 'single_topic',
    moduleTag: 'UI Basics',
    title: 'What is User Interface (UI) Design?',
    topicTitle: 'The Sensory Membrane of Digital Software',
    bullets: [
      'Definition: UI design is the visual, auditory, and tactile presentation layer through which a human interacts with an underlying computational system.',
      'The 4 Core UI Element Families: Input controls (buttons, checkboxes, text fields), Navigational components (tabs, breadcrumbs, search bars), Informational elements (tooltips, notification badges, progress meters), and Containers (cards, modals, drawers).',
      'Bridging Mental Models and Implementation: Software engineers think in database tables, foreign keys, and API status codes. UI designers translate that raw computation into visual metaphors that match the user\'s real-world mental model.',
      'Design Systems: Professional UI relies on reusable design tokens (standardized colors, spacing units, and font styles) to maintain consistency across thousands of screens.'
    ],
    layman: {
      title: 'The Automobile Metaphor:',
      text: 'Under the hood of a car is an intricate engine of pistons, spark plugs, and fuel injectors (the backend). But the driver operates the vehicle through the steering wheel, speedometer, pedals, and turn signals. That is the UI!'
    },
    keyInsight: {
      title: 'Alan Cooper\'s Principle of Mental Models',
      text: 'The best user interface does not reflect how the software was coded; it reflects how the human user conceives the task in their mind.'
    },
    image: {
      url: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=800&q=80',
      caption: 'Component Anatomy and Design Tokens in Modern UI Design Systems'
    }
  },

  // SLIDE 16: UI LAYOUT & SCANNING PATTERNS
  {
    id: 'media2-slide16',
    slideNum: 16,
    totalSlides: 40,
    type: 'single_topic',
    moduleTag: 'UI Layout',
    title: 'UI Layout Principles: Visual Hierarchy & Eye Scanning',
    topicTitle: 'How Humans Actually Read Digital Screens',
    bullets: [
      'Users Do Not Read; They Scan: Eye-tracking research shows users spend fewer than 4 seconds on a webpage before deciding whether to stay or leave.',
      'The F-Pattern Scanning Model: Common in text-heavy environments (blogs, documentation, search results). The eye scans horizontally across the top headline, drops down, scans a shorter horizontal line, and then sweeps straight down the left margin.',
      'The Z-Pattern Scanning Model: Common in visual landing pages and hero banners. The eye starts at the top-left logo, moves horizontally to the top-right CTA, sweeps diagonally down to the bottom-left, and finishes on the bottom-right action button.',
      'Visual Hierarchy Controls: Size, weight, color contrast, and elevation determine the exact sequence in which information is processed by the brain.'
    ],
    layman: {
      title: 'Visual Weight Trick:',
      text: 'Squint your eyes when looking at your interface design. If everything blurs into one uniform gray blob, your visual hierarchy is broken. The most important action should still pop out even through blurry squinted eyes!'
    },
    keyInsight: {
      title: 'Nielsen Norman Group Eye-Tracking Finding',
      text: 'Put the most critical value proposition and action within the first two paragraphs or the top horizontal bar. 80% of total visual fixation time occurs above the fold.'
    },
    image: {
      url: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=800&q=80',
      caption: 'Eye-Tracking Heatmaps and F-Pattern vs Z-Pattern Layout Scanning Architectures'
    }
  },

  // SLIDE 17: WHITESPACE & THE 8PT GRID
  {
    id: 'media2-slide17',
    slideNum: 17,
    totalSlides: 40,
    type: 'single_topic',
    moduleTag: 'UI Layout',
    title: 'UI Layout: Whitespace & The 8-Point Grid System',
    topicTitle: 'Eliminating Chaos with Mathematical Spatial Systems',
    bullets: [
      'Whitespace is Active, Not Empty: Negative space is a fundamental structural tool. It reduces cognitive overload, groups related elements, and signals premium quality.',
      'The Gestalt Law of Proximity: Objects that are close together are perceived as belonging to the same group; objects separated by whitespace are perceived as distinct.',
      'Why the 8-Point Grid?: Most screen resolutions (1920x1080, 2560x1440, modern smartphones) are divisible by 8. Sizing all margins, padding, and component heights in multiples of 8 (8px, 16px, 24px, 32px, 48px, 64px) ensures crisp pixel-perfect rendering across @1x, @2x, and @3x retina screens.',
      'Sub-Grid of 4px: For tight micro-spacing (such as the space between an icon and its text label), an 8pt system allows half-steps of 4px.'
    ],
    keyInsight: {
      title: '📐 Why Multiples of 8 Prevent Blurry Screens',
      text: 'If you use odd spacing numbers like 15px or 27px, a device with a 1.5x or 2.5x display scaling factor will generate fractional sub-pixels (e.g. 22.5px), causing anti-aliasing fuzziness and blurry borders. The 8pt grid mathematically prevents sub-pixel distortion!'
    },
    image: {
      url: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
      caption: 'The 8-Point Grid System and Spatial Whitespace Alignment in Responsive Layouts'
    }
  },

  // SLIDE 18: INTERACTIVE SIMULATION 3
  {
    id: 'media2-slide18',
    slideNum: 18,
    totalSlides: 40,
    type: 'ui_layout_hierarchy_lab',
    moduleTag: 'Lab 3 — UI Layout',
    title: 'Interactive Lab: UI Layout & Visual Hierarchy Studio',
    topicTitle: 'Toggle Poor vs Polished Layouts, 8pt Grid Overlays, and F-Pattern Heatmaps'
  },

  // SLIDE 19: COLOR THEORY IN UI
  {
    id: 'media2-slide19',
    slideNum: 19,
    totalSlides: 40,
    type: 'single_topic',
    moduleTag: 'Color Theory',
    title: 'Color Theory in UI: The 60-30-10 Golden Rule',
    topicTitle: 'Harmonious Visual Balance and Semantic Meaning',
    bullets: [
      'The 60-30-10 Interior Design Rule Applied to UI:',
      '&bull; 60% Dominant Neutral: The canvas background and negative space (slate dark, warm off-white). Sets the mood without competing for attention.',
      '&bull; 30% Secondary Structure: Cards, modal surfaces, sidebars, dividers, and typography. Gives depth and organization to the layout.',
      '&bull; 10% Accent Power: Reserved strictly for Call-to-Action (CTA) buttons, progress highlights, active tabs, and critical focal points.',
      'Semantic Color Archetypes: Modern design systems use standardized functional colors: Green for Success/Affirmation, Red for Destructive/Errors, Amber for Warnings/Caution, and Blue/Violet for Interactive Links.',
      'The Golden Mistake of Junior Designers: Using the accent color everywhere! If everything is bright blue, nothing stands out.'
    ],
    layman: {
      title: 'The Business Suit Analogy:',
      text: 'A formal suit follows 60-30-10: 60% is the jacket and trousers (dominant navy or charcoal), 30% is the dress shirt (secondary white), and 10% is the necktie or pocket square (accent vibrant red or gold).'
    },
    image: {
      url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      caption: 'Harmonious Color Theory, Semantic Palettes, and the 60-30-10 Balance'
    }
  },

  // SLIDE 20: ACCESSIBILITY & WCAG CONTRAST
  {
    id: 'media2-slide20',
    slideNum: 20,
    totalSlides: 40,
    type: 'single_topic',
    moduleTag: 'Accessibility',
    title: 'Color Accessibility & WCAG Contrast Standards',
    topicTitle: 'Designing Interfaces That Include Everyone',
    bullets: [
      'The WCAG 2.1 Contrast Benchmark: The Web Content Accessibility Guidelines establish clear mathematical contrast ratios between text and its background surface:',
      '&bull; Level AA (Minimum standard): Requires at least 4.5:1 for regular body text, and 3:1 for large text (18pt+ or 14pt bold).',
      '&bull; Level AAA (Enhanced standard): Requires at least 7.0:1 for regular text, and 4.5:1 for large text.',
      'The Trendy Trap of Low Contrast: Light gray text (#999999) on white backgrounds looks sleek in design mockups, but is illegible to seniors, people with cataracts, or anyone looking at a phone in bright sunlight.',
      'Color Vision Deficiency (Colorblindness): Approximately 8% of men and 0.5% of women have red-green colorblindness (Deuteranopia/Protanopia). Never convey meaning through color alone—always pair colors with icons or descriptive text labels!'
    ],
    keyInsight: {
      title: '♿ Accessibility is Good Design for Everyone',
      text: 'High-contrast accessible text does not just help visually impaired individuals; it helps tired students studying late at night and smartphone users walking outdoors under direct tropical sunshine.'
    }
  },

  // SLIDE 21: INTERACTIVE SIMULATION 4
  {
    id: 'media2-slide21',
    slideNum: 21,
    totalSlides: 40,
    type: 'color_theory_wcag_studio',
    moduleTag: 'Lab 4 — Color & WCAG',
    title: 'Interactive Lab: 60-30-10 Color & WCAG Contrast Studio',
    topicTitle: 'Build Palettes, Calculate Real-Time WCAG Ratios, and Test Colorblind Vision Filters'
  },

  // SLIDE 22: TYPOGRAPHY IN UI DESIGN
  {
    id: 'media2-slide22',
    slideNum: 22,
    totalSlides: 40,
    type: 'single_topic',
    moduleTag: 'Typography',
    title: 'Typography in UI: Anatomy & Modular Scale Ladders',
    topicTitle: 'Type is the Backbone of User Interface Communication',
    bullets: [
      '95% of Web Design is Typography: Software interfaces are primarily vehicles for transmitting written language, data values, and actionable commands.',
      'Anatomy of Digital Type: Baseline (the invisible line letters rest on), x-height (height of lowercase letters like "x" or "e"), Cap-height (height of capital letters), Ascenders (stems rising above x-height like "h"), and Descenders (tails dropping below baseline like "y").',
      'High x-height for Small Screens: Fonts designed for UI (like Inter, Roboto, or SF Pro) have tall x-heights and open apertures, making text legible at tiny 12px or 14px sizes on mobile screens.',
      'The Modular Scale: Rather than guessing font sizes randomly, designers multiply a base font size (typically 16px) by a fixed mathematical ratio (e.g. 1.25 Major Third): 12px &rarr; 16px &rarr; 20px &rarr; 25px &rarr; 31px &rarr; 39px.'
    ],
    image: {
      url: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80',
      caption: 'Typographic Anatomy, Baseline Rhythms, and Modular Scales'
    }
  },

  // SLIDE 23: READABILITY, LEADING & PAIRING
  {
    id: 'media2-slide23',
    slideNum: 23,
    totalSlides: 40,
    type: 'single_topic',
    moduleTag: 'Typography',
    title: 'Typography: Line-Height (Leading) & The Optimal Measure',
    topicTitle: 'Engineering Effortless Reading Comfort',
    bullets: [
      'Line-Height (Leading): The vertical spacing between consecutive lines of text. For body paragraphs, optimal line-height is 140% to 160% (1.4x to 1.6x). If leading is too tight, readers lose their place when jumping lines; if too loose, lines feel disconnected.',
      'The Measure (Line Length): The horizontal width of a text block. The optimal measure for digital reading is 45 to 75 characters per line (approximately 60 characters). Text lines that span across a 1920px wide monitor cause severe eye-tracking fatigue.',
      'Letter-Spacing (Tracking): Tighten tracking slightly (-0.01em to -0.02em) on massive display headlines to keep words unified; loosen tracking (+0.04em to +0.08em) on all-caps subheadings or tiny 11px metadata badges for crisp legibility.',
      'Font Pairing Rule of Two: Limit an interface to a maximum of 2 typeface families—a functional sans-serif for UI controls and body copy (e.g. Inter), optionally paired with an expressive display font for hero headlines.'
    ],
    keyInsight: {
      title: 'Robert Bringhurst, The Elements of Typographic Style',
      text: '"Typography exists to honor content." An interface font should never draw attention to itself at the expense of legibility.'
    }
  },

  // SLIDE 24: INTERACTIVE SIMULATION 5
  {
    id: 'media2-slide24',
    slideNum: 24,
    totalSlides: 40,
    type: 'typography_scale_playground',
    moduleTag: 'Lab 5 — Typography',
    title: 'Interactive Lab: Typography Scale & Font Pairing Studio',
    topicTitle: 'Adjust Modular Scale Factors, Test Font Pairings, and Inspect Line-Height Rhythms'
  },

  // SLIDE 25: APPLYING UI PRINCIPLES
  {
    id: 'media2-slide25',
    slideNum: 25,
    totalSlides: 40,
    type: 'single_topic',
    moduleTag: 'UI Components',
    title: 'Applying UI Principles: Button & Form State Matrices',
    topicTitle: 'Anatomy of Reusable, Robust UI Components',
    bullets: [
      'The 6 Mandatory States of an Interactive Button: Default (idle), Hover (cursor enters, elevation rises), Focused (keyboard navigation tab ring for accessibility), Active/Pressed (instant tactile depression), Disabled (opacity drops, cursor becomes not-allowed), and Loading (spinner replaces label to prevent double-clicks).',
      'Anatomy of Form Input Fields: Persistent label (never rely solely on disappearing placeholder text!), input container with 8pt padding, clear focus indicator, inline validation icon, and human-readable helper/error text below.',
      'Atomic Design Hierarchy (Brad Frost): Atoms (buttons, inputs, color tokens) &rarr; Molecules (search input group) &rarr; Organisms (navigation header bar) &rarr; Templates (page layout wireframe) &rarr; Pages (production screen with real data).',
      'Why State Completeness Matters: If a designer only mocks up the "happy path" default state, developers are forced to invent loading and error states on the fly, leading to inconsistent user experiences.'
    ],
    layman: {
      title: 'The Disappearing Placeholder Crime:',
      text: 'Have you ever started typing into a text field, forgot what the field was asking for, and had to delete everything you wrote just to re-read the placeholder? That is why professional UI always includes a persistent label above the field!'
    },
    image: {
      url: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&w=800&q=80',
      caption: 'Comprehensive Button State Matrix and Form Input Micro-Interactions'
    }
  },

  // ==========================================================================
  // UNIT 3: USER EXPERIENCE (UX) DESIGN BASICS
  // ==========================================================================
  {
    id: 'media2-slide26',
    slideNum: 26,
    totalSlides: 40,
    type: 'section_break',
    sectionNum: 'UNIT 03',
    title: 'User Experience (UX) Design Basics',
    description: 'Human-centered design thinking: Jakob Nielsen\'s usability heuristics, qualitative and quantitative user research, archetypal personas, and user journey mapping.'
  },

  // SLIDE 27: UI VS UX DESIGN
  {
    id: 'media2-slide27',
    slideNum: 27,
    totalSlides: 40,
    type: 'comparison',
    moduleTag: 'UX Basics',
    title: 'UI Design vs. UX Design: The Classic Distinction',
    topicTitle: 'Visual Craftsmanship vs. Holistic Problem Solving',
    versusLeft: {
      title: 'User Interface (UI) Design',
      bullets: [
        'Focus: The sensory surface (how it looks, animates, and sounds).',
        'Deliverables: High-fidelity Figma screens, color palettes, typography scales, icon sets, button states, and design system component libraries.',
        'Core Disciplines: Visual hierarchy, layout grid alignment, graphic design, micro-interaction animation, and visual branding.',
        'Primary Question: "Does this button look clear, visually appealing, and unmistakably clickable?"'
      ]
    },
    versusRight: {
      title: 'User Experience (UX) Design',
      bullets: [
        'Focus: The holistic journey (how it works, feels, and solves the user\'s real problem).',
        'Deliverables: User research interviews, empathy maps, personas, information architecture, user flows, journey maps, and wireframe prototypes.',
        'Core Disciplines: Cognitive psychology, usability testing, friction reduction, task efficiency, and accessibility architecture.',
        'Primary Question: "Does the user actually need this button, does it make sense in their journey, and does it reduce their cognitive burden?"'
      ]
    },
    keyInsight: {
      title: 'The Famous Iceberg Metaphor',
      text: 'UI is the visible 10% of the iceberg above the water (the polished visuals). UX is the 90% of the iceberg beneath the water (the research, user psychology, information architecture, and strategic alignment) that keeps the product afloat!'
    }
  },

  // SLIDE 28: JAKOB NIELSEN'S 10 HEURISTICS
  {
    id: 'media2-slide28',
    slideNum: 28,
    totalSlides: 40,
    type: 'single_topic',
    moduleTag: 'UX Heuristics',
    title: "Jakob Nielsen's 10 Usability Heuristics",
    topicTitle: 'The Universal Golden Rules of User-Centered Design',
    bullets: [
      '1. Visibility of System Status: Always keep users informed about what is happening through timely feedback (e.g. progress bars, upload percentages).',
      '2. Match between System & Real World: Speak the user\'s language with familiar concepts and real-world metaphors (e.g. desktop trash can, folder icons).',
      '3. User Control & Freedom: Provide a clearly marked "emergency exit" to leave unwanted states without penalty (e.g. Undo, Redo, Cancel).',
      '4. Consistency and Standards: Follow platform conventions so users don\'t wonder whether different words or actions mean the same thing.',
      '5. Error Prevention: Design to prevent mistakes before they occur (e.g. confirmation prompts for destructive deletes, date-picker constraints).',
      '6. Recognition rather than Recall: Minimize memory load by making options, actions, and objects visible rather than requiring memory recall.',
      '7. Flexibility & Efficiency: Provide accelerators (keyboard shortcuts, bookmarks) for expert users while keeping it simple for novices.',
      '8. Aesthetic & Minimalist Design: Eliminate irrelevant clutter. Every extra element competes with relevant information.',
      '9. Help Users Recognize & Recover from Errors: Error messages should be in plain human language, state the exact problem, and constructively suggest a fix.',
      '10. Help and Documentation: While the best system needs no manual, search-indexed contextual documentation should be easy to find.'
    ],
    keyInsight: {
      title: 'Empirical Rule: Nielsen & Molich (1990)',
      text: 'Evaluating an interface against these 10 heuristics (Heuristic Evaluation) identifies up to 85% of core usability flaws before a single line of production code is written.'
    }
  },

  // SLIDE 29: USER RESEARCH METHODOLOGIES
  {
    id: 'media2-slide29',
    slideNum: 29,
    totalSlides: 40,
    type: 'single_topic',
    moduleTag: 'UX Research',
    title: 'User Research: Qualitative vs. Quantitative Methods',
    topicTitle: 'Discovering What Users Say, Think, Do, and Feel',
    bullets: [
      'Quantitative Research ("What is happening at scale"): Analytics data, conversion rates, drop-off percentages, click heatmaps, and A/B test results. Tells you that 62% of users abandon the registration form on Step 3.',
      'Qualitative Research ("Why it is happening deeply"): 1-on-1 contextual user interviews, think-aloud usability testing sessions, and observational field studies. Reveals that users abandon Step 3 because they feel uncomfortable sharing their phone number without a privacy explanation.',
      'Triangulation: Professional UX never relies solely on numbers or solely on anecdotes. Pairing quantitative metrics with qualitative empathy interviews reveals the complete, actionable truth.',
      'Card Sorting & Tree Testing: Methods used to evaluate Information Architecture (IA). Asking 20 representative users to organize topic cards into groups reveals how navigation menus should naturally be labeled.'
    ],
    layman: {
      title: 'The Medical Doctor Analogy:',
      text: 'A blood test or heart monitor gives quantitative numbers (your pulse is 120 bpm). But the doctor asks qualitative questions ("Where does it hurt? When did this start?") to understand the root cause. UX research does the exact same thing!'
    },
    image: {
      url: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
      caption: 'Qualitative User Research Interviews and Usability Testing Sessions'
    }
  },

  // SLIDE 30: USER PERSONAS
  {
    id: 'media2-slide30',
    slideNum: 30,
    totalSlides: 40,
    type: 'single_topic',
    moduleTag: 'UX Personas',
    title: 'User Personas: Crafting Evidence-Based Archetypes',
    topicTitle: 'Moving from "Everyone" to Specific User Needs',
    bullets: [
      'What is a User Persona?: A fictional yet realistic composite archetype created from empirical data gathered during user research interviews.',
      'Why Personas are Critical: If you design a product for "everyone", you end up pleasing no one. A persona gives cross-functional engineering teams a shared human face to empathize with.',
      'The 5 Core Elements of a Professional Persona: 1) Persona Name & Representative Bio, 2) Technical Literacy & Environment (e.g. iPhone on 5G vs desktop with high zoom), 3) Core Motivations & Goals, 4) Pain Points & Frustrations, and 5) Key Quotes.',
      'Empathy Mapping (Says, Thinks, Does, Feels): Synthesizing user quotes, internal anxieties, behavioral habits, and emotional states into a 4-quadrant diagram that informs architectural decisions.'
    ],
    keyInsight: {
      title: 'Alan Cooper, The Inmates are Running the Asylum',
      text: 'Personas prevent the "Elastic User" anti-pattern—where software developers unconsciously change their definition of the user to fit whatever feature they find easiest to code!'
    },
    image: {
      url: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80',
      caption: 'Evidence-Based User Personas and Empathy Mapping Frameworks'
    }
  },

  // SLIDE 31: INTERACTIVE SIMULATION 6
  {
    id: 'media2-slide31',
    slideNum: 31,
    totalSlides: 40,
    type: 'ux_persona_empathy_studio',
    moduleTag: 'Lab 6 — Personas & Empathy',
    title: 'Interactive Lab: UX Persona & Empathy Map Explorer',
    topicTitle: 'Switch Between User Archetypes and Map Quotes to Architectural Solutions'
  },

  // SLIDE 32: USER JOURNEY MAPPING
  {
    id: 'media2-slide32',
    slideNum: 32,
    totalSlides: 40,
    type: 'single_topic',
    moduleTag: 'Journey Mapping',
    title: 'User Journey Mapping: Visualizing the Experience Arc',
    topicTitle: 'Tracking Human Emotion, Touchpoints, and Friction Across Time',
    bullets: [
      'Definition: A chronological timeline diagram illustrating the step-by-step path a user takes across digital and physical touchpoints to accomplish a goal.',
      'The 5 Universal Experience Phases: 1) Awareness / Discovery, 2) Consideration / Exploration, 3) Conversion / Task Execution, 4) Retention / Ongoing Use, and 5) Advocacy / Offboarding.',
      'The Anatomy of a Journey Map Grid: Horizontal columns represent phases over time; vertical swimlanes capture User Actions, Touchpoint Channels (web, mobile, email, physical), Emotional Satisfaction Waves (+10 delight to -10 rage), Pain Points, and UX Design Opportunities.',
      'Finding the "Valley of Despair": Most journey maps uncover a steep drop in user satisfaction during checkout or onboarding. Identifying this valley shows designers exactly where high-impact redesign efforts must be targeted.'
    ],
    layman: {
      title: 'The Rollercoaster of Emotion:',
      text: 'Ordering food on an app feels exciting while picking pizza toppings (delight curve rises). But when entering credit card numbers and paying hidden delivery fees, anxiety spikes (delight curve plunges). A journey map visualizes this emotional rollercoaster.'
    }
  },

  // SLIDE 33: INTERACTIVE SIMULATION 7
  {
    id: 'media2-slide33',
    slideNum: 33,
    totalSlides: 40,
    type: 'user_journey_map_simulator',
    moduleTag: 'Lab 7 — Journey Mapping',
    title: 'Interactive Lab: User Journey Map & Emotional Curve Simulator',
    topicTitle: 'Step Through Journey Phases, Inspect Touchpoints, and Apply UX Solutions'
  },

  // SLIDE 34: INTERACTIVE SIMULATION 8
  {
    id: 'media2-slide34',
    slideNum: 34,
    totalSlides: 40,
    type: 'ux_heuristics_audit',
    moduleTag: 'Lab 8 — Heuristics Audit',
    title: 'Interactive Lab: Jakob Nielsen\'s Usability Heuristics Audit',
    topicTitle: 'Test Violations vs Fixed Heuristic Solutions on Live Interactive Prototypes'
  },

  // SLIDE 35: APPLYING UX PRINCIPLES
  {
    id: 'media2-slide35',
    slideNum: 35,
    totalSlides: 40,
    type: 'single_topic',
    moduleTag: 'UX Architecture',
    title: 'Applying UX Principles: From Napkin Sketches to Launch',
    topicTitle: 'The 1:10:100 Rule of User Experience Engineering',
    bullets: [
      'The Fidelity Spectrum: Low-Fidelity (quick paper sketches or grayscale wireframes focusing strictly on layout and information flow) &rarr; Mid-Fidelity (clickable wireframes with realistic copy and component hierarchy) &rarr; High-Fidelity (pixel-perfect interactive prototypes with design tokens, animations, and micro-interactions).',
      'Why Low-Fidelity Testing is Crucial: When mockups have vibrant colors and polished fonts, stakeholders debate the shade of purple instead of whether the core user flow makes sense. Grayscale wireframes keep everyone focused on structural usability.',
      'The 1:10:100 Cost of Change Rule: Fixing a usability flaw on a paper wireframe costs $1. Fixing that same flaw in code during development costs $10. Fixing it after production deployment (handling angry support tickets, bug fixes, lost customer trust) costs $100+!',
      'Continuous Usability Testing: Testing with just 5 representative users uncovers approximately 85% of usability issues (Nielsen & Landauer, 1993).'
    ],
    keyInsight: {
      title: 'The Golden Rule of Prototyping',
      text: 'Prototype as if you know you are right; test as if you know you are wrong.'
    },
    image: {
      url: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80',
      caption: 'The Progression from Low-Fidelity Wireframes to High-Fidelity Design Prototypes'
    }
  },

  // ==========================================================================
  // UNIT 4: REVIEW, SYNTHESIS & ASSESSMENT
  // ==========================================================================
  {
    id: 'media2-slide36',
    slideNum: 36,
    totalSlides: 40,
    type: 'recap_ordering',
    moduleTag: 'Assessment',
    title: 'Synthesis Challenge: The Design Thinking Sequence',
    topicTitle: 'Arrange the 5 Stages of the Stanford d.school Design Thinking Process in Order'
  },

  // SLIDE 37: KNOWLEDGE CHECK
  {
    id: 'media2-slide37',
    slideNum: 37,
    totalSlides: 40,
    type: 'knowledge_check',
    moduleTag: 'Quiz',
    title: 'Knowledge Check: Interactivity, UI & UX Synthesis',
    topicTitle: 'According to Donald Norman, what is the critical difference between an Affordance and a Signifier?',
    bullets: [
      'An affordance is the actual possible interaction, whereas a signifier is the perceptible clue indicating where that interaction should occur.',
      'An affordance only applies to physical objects, while signifiers only apply to mobile touch screens.',
      'An affordance represents the color contrast ratio, while a signifier represents the font line-height.',
      'There is no difference; affordance and signifier are interchangeable academic synonyms.'
    ]
  },

  // SLIDE 38: ESSAY PROMPT
  {
    id: 'media2-slide38',
    slideNum: 38,
    totalSlides: 40,
    type: 'essay_prompt',
    moduleTag: 'Assessment',
    title: 'Written Design Audit Assignment',
    topicTitle: 'Submit your conceptual audit of a real-world digital interface below:'
  },

  // SLIDE 39: EXIT REFLECTION
  {
    id: 'media2-slide39',
    slideNum: 39,
    totalSlides: 40,
    type: 'exit_reflection',
    moduleTag: 'Assessment',
    title: 'Exit Slip Reflection Log',
    topicTitle: 'Self-Assess your Week 2 understanding and key takeaways:'
  },

  // SLIDE 40: SUMMARY & LOOKING AHEAD
  {
    id: 'media2-slide40',
    slideNum: 40,
    totalSlides: 40,
    type: 'single_topic',
    moduleTag: 'Summary',
    title: 'Week 2 Module Summary & What Comes Next',
    topicTitle: 'Key Takeaways and Week 3 Preview',
    bullets: [
      'Interactivity is a Dialogue: Donald Norman\'s principles (Affordance, Signifiers, Feedback, Mapping, Constraints) turn computational systems into intuitive extensions of the human mind.',
      'UI is Visual Rigor: Strict visual hierarchy, F/Z pattern scanning, the 8pt grid, the 60-30-10 color rule, WCAG AA/AAA contrast standards, and modular typography ladders ensure clarity and accessibility.',
      'UX is Human Empathy: Jakob Nielsen\'s 10 heuristics, qualitative research, archetypal personas, and user journey maps eliminate friction and bridge the user\'s goal to real-world fulfillment.',
      'Looking Ahead to Week 3: In Week 3, we will open Figma, translate these principles into responsive auto-layout wireframes, construct interactive component variants, and conduct live moderated usability tests!'
    ],
    keyInsight: {
      title: 'Congratulations!',
      text: 'You have completed the theoretical foundations of Interactive Media Design Week 2! Proceed to the interactive quiz to test your mastery.'
    }
  }
];
