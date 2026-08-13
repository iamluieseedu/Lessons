import { SlideData } from '../types/slide';

export const mediaDsnSlidesData: SlideData[] = [
  // SLIDE 1: COVER
  {
    id: 'media-slide1',
    slideNum: 1,
    totalSlides: 36,
    type: 'cover',
    moduleTag: 'Week 1 — MEDIADSN',
    title: 'Introduction to Interactive Media Design',
    subtitle: 'Week 1 — Understanding Interactive Experiences'
  },
  // SLIDE 2: AGENDA
  {
    id: 'media-slide2',
    slideNum: 2,
    totalSlides: 36,
    type: 'single_topic',
    moduleTag: 'Agenda',
    title: 'Course Agenda',
    topicTitle: 'What We Will Explore Today',
    bullets: [
      'Welcome & Core Objectives: Establishing syllabus targets and studying how digital experiences establish a dynamic two-way conversation with users.',
      'Unit 1 - Basics of Interactivity: Contrast analysis between traditional static media (television, newspapers) and modern user-directed mediums.',
      'Unit 2 - The Key Components: Deconstructing software applications into User, Input, Interface, System, Output, and Feedback elements.',
      'Unit 3 - History & Evolution: Tracing the progress from command-line terminals to modern Graphical User Interfaces (GUIs), touchscreen gestures, and spatial computing.',
      'Interactive Lab & Practice: Interactive simulations (YouTube, Google Maps, ATM), sandboxes, and student assessments.'
    ],
    keyInsight: {
      title: 'Our Goal',
      text: 'By the end of this module, you will understand the fundamentals of interactive media, its historical progression, and be able to audit and identify key components of any interactive system.'
    }
  },
  // SLIDE 3: LEARNING OBJECTIVES (Interactive checklist)
  {
    id: 'media-slide3',
    slideNum: 3,
    totalSlides: 36,
    type: 'interactive_objectives',
    moduleTag: 'Objectives',
    title: 'Syllabus Learning Objectives',
    topicTitle: 'Click each objective to explore why it matters:'
  },
  // SLIDE 4: WHAT IS INTERACTIVE MEDIA
  {
    id: 'media-slide4',
    slideNum: 4,
    totalSlides: 36,
    type: 'single_topic',
    moduleTag: 'Basics',
    title: 'What Is Interactive Media?',
    topicTitle: 'Defining the Conversation',
    bullets: [
      'Two-way communication: Unlike traditional mediums, interactive media establishes a dynamic, bidirectional dialogue between a human user and a digital system.',
      'User agency and control: The user has active control over the pace, sequence, and output format of the information, rather than being a passive spectator.',
      'Dynamic state updates: The system receives inputs, executes processing logic, and updates its visual/auditory state in real-time, closing the feedback loop.',
      'Cognitive engagement: Direct engagement increases information retention, mapping to the student\'s active mental model.'
    ],
    layman: {
      title: 'Simple Analogy:',
      text: 'Static media is like a lecture where you just listen. Interactive media is like a conversation where you ask questions, get answers, and decide what to talk about next.'
    },
    keyInsight: {
      title: '🎥 History Fun Fact: Spacewar! (1962)',
      text: 'The first truly interactive computer game, "Spacewar!", was created at MIT in 1962. It required real-time coordination on a circular radar-style display screen, marking the birth of real-time software user input loops!'
    }
  },
  // SLIDE 5: MEDIA VS INTERACTIVE MEDIA
  {
    id: 'media-slide5',
    slideNum: 5,
    totalSlides: 36,
    type: 'comparison',
    moduleTag: 'Basics',
    title: 'Media vs. Interactive Media',
    topicTitle: 'How User Agency Changes the Medium',
    versusLeft: {
      title: 'Traditional Static Media',
      bullets: [
        'Passive Consumption: Reading newspapers, listening to radio broadcasts, or watching motion pictures.',
        'Linear Flow: The timeline is pre-recorded. The story flows from start to finish without any user controls.',
        'One-Way Delivery: Information is broadcasted; the consumer cannot alter the content in real time.'
      ]
    },
    versusRight: {
      title: 'Interactive Media',
      bullets: [
        'Active Participation: Users choose navigation paths, input custom values, and manipulate visual objects.',
        'Non-Linear Exploration: Users can skip around, drill down, search records, or trigger contextual views.',
        'Bidirectional Flow: Inputs instantly dictate outputs. The user and the system cooperate.'
      ]
    },
    keyInsight: {
      title: 'The Shift in Responsibility',
      text: 'In static media, the author controls the exact pacing and linear timeline. In interactive media, the designer builds a system of possibilities, letting the user control the journey.'
    }
  },
  // SLIDE 6: USER INPUT SIMULATOR
  {
    id: 'media-slide6',
    slideNum: 6,
    totalSlides: 36,
    type: 'user_input_simulator',
    moduleTag: 'Interactions',
    title: 'User Input Simulator',
    topicTitle: 'Testing Communication Channels'
  },
  // SLIDE 7: STATIC VS INTERACTIVE TOGGLE
  {
    id: 'media-slide7',
    slideNum: 7,
    totalSlides: 36,
    type: 'static_vs_interactive',
    moduleTag: 'Interactions',
    title: 'Static Mode vs. Interactive Mode',
    topicTitle: 'Toggle modes below to experience the psychological difference:'
  },
  // SLIDE 8: THE INTERACTION LOOP DIAGRAM
  {
    id: 'media-slide8',
    slideNum: 8,
    totalSlides: 36,
    type: 'interaction_loop',
    moduleTag: 'Frameworks',
    title: 'The Interaction Loop',
    topicTitle: 'How Humans and Computers Converse'
  },
  // SLIDE 9: THE INTERACTION LOOP DETAILS
  {
    id: 'media-slide9',
    slideNum: 9,
    totalSlides: 36,
    type: 'single_topic',
    moduleTag: 'Frameworks',
    title: 'Interaction Loop Breakdown',
    topicTitle: 'Deep Dive into Each Phase',
    bullets: [
      '1. Goal Formulation: The user decides what they want to achieve (e.g., finding the price of a flight).',
      '2. Action Execution: The user interacts with the system using an input device (e.g., clicking the "Search Flights" button).',
      '3. Processing: The system runs algorithms, database queries, and background validations to generate the result.',
      '4. Output Representation: The interface presents the new state (e.g., rendering a list of available flights and price cards).',
      '5. Evaluation & Feedback: The user reads the screen, assesses if their goal was met, and plans their next move.'
    ],
    layman: {
      title: '🚪 Design Story: The Norman Door',
      text: 'Donald Norman coined the term "Norman Doors" to describe doors with handles that suggest pulling, but actually require pushing. This represents a breakdown in the evaluation loop where the design contradicts user mental models.'
    }
  },
  // SLIDE 10: KEY COMPONENTS INTRO
  {
    id: 'media-slide10',
    slideNum: 10,
    totalSlides: 36,
    type: 'single_topic',
    moduleTag: 'Components',
    title: 'Key Components of Interactive Media',
    topicTitle: 'The Building Blocks of Digital Experiences',
    bullets: [
      'The User: The human operator who has goals, expectations, cognitive limits, and sensory capacities.',
      'The Interface: The digital membrane (screens, audio, physical controls) where interaction occurs.',
      'The Input: The mechanical or gestural action translated by the hardware (clicks, keyboard keys, speech).',
      'The System: The computational hardware and software that computes state changes and processes logic.',
      'The Output: The auditory, visual, or haptic displays returned by the system.',
      'The Feedback: The immediate indicator showing that the system recognized the input and is acting on it.'
    ],
    keyInsight: {
      title: '💾 History Story: Xerox Alto (1973)',
      text: 'Xerox PARC built the first computer featuring all six modern components, including the first desktop metaphor and three-button mouse. Unfortunately, Xerox corporate executives failed to see its commercial value, allowing Apple and Microsoft to later define the GUI era.'
    }
  },
  // SLIDE 11: CLICKABLE COMPONENTS DIAGRAM
  {
    id: 'media-slide11',
    slideNum: 11,
    totalSlides: 36,
    type: 'components_diagram',
    moduleTag: 'Components',
    title: 'Visualizing Component Connections',
    topicTitle: 'Select a component to inspect its relationships and data flows:'
  },
  // SLIDE 12: YOUTUBE PLAYBACK CASE STUDY
  {
    id: 'media-slide12',
    slideNum: 12,
    totalSlides: 36,
    type: 'single_topic',
    moduleTag: 'Case Study',
    title: 'Case Study: YouTube Video Player',
    topicTitle: 'Mapping Components to YouTube Controls',
    bullets: [
      'User Intention: Find and watch an instructional design video tutorial.',
      'Interface controls: Buttons for play/pause, dynamic progress bars, settings menus, and volume sliders.',
      'Input translation: Mouse clicks, touchscreen gestures, or key taps register control commands.',
      'System Processing: Network servers seek video timestamps, buffer segments, and calculate recommendations.',
      'Feedback & Output: Video starts immediately, progress bar advances, and buffer indicators spin during delays.'
    ],
    layman: {
      title: 'Play with the simulator:',
      text: 'Adjust options on the right simulation widget. Notice how system inputs instantly alter video output and status updates!'
    }
  },
  // SLIDE 13: GOOGLE MAPS CASE STUDY
  {
    id: 'media-slide13',
    slideNum: 13,
    totalSlides: 36,
    type: 'single_topic',
    moduleTag: 'Case Study',
    title: 'Case Study: Google Maps Navigation',
    topicTitle: 'Exploring Non-Linear Geographic Viewports',
    bullets: [
      'User Intention: Find the fastest route to the campus registrar office.',
      'Interface controls: Map overlays, search inputs, zoom widgets, and directions buttons.',
      'Input translation: Screen swipes to pan, pinch to zoom, and keystrokes to input search strings.',
      'System Processing: Routing engines query database tables and calculate path directions.',
      'Feedback & Output: Route paths trace on the canvas, compass pointers rotate, and directions list updates.'
    ],
    layman: {
      title: 'Play with the maps:',
      text: 'Type destinations or tap buttons in the maps simulator on the right. Notice how the map adjusts views dynamically!'
    }
  },
  // SLIDE 14: ATM TRANSACTION CASE STUDY
  {
    id: 'media-slide14',
    slideNum: 14,
    totalSlides: 36,
    type: 'single_topic',
    moduleTag: 'Case Study',
    title: 'Case Study: Automated Teller Machine',
    topicTitle: 'Rigid Security Interaction Loops',
    bullets: [
      'User Intention: Safely withdraw cash from checking balance records.',
      'Interface controls: Numeric pinpads, card intake slots, and cash dispenser gates.',
      'Input translation: Keypresses to input PIN numbers, button taps to select withdrawal cash values.',
      'System Processing: Banking servers authenticate credentials, balance database records, and verify currency notes.',
      'Feedback & Output: Card reader locks, status indicators prompt actions, dispenser ejects banknotes.'
    ],
    layman: {
      title: 'Try the ATM:',
      text: 'Complete the secure login PIN sequence on the simulator to withdraw cash and trigger state feedback.'
    }
  },
  // SLIDE 15: HISTORY AND EVOLUTION INTRO
  {
    id: 'media-slide15',
    slideNum: 15,
    totalSlides: 36,
    type: 'single_topic',
    moduleTag: 'History',
    title: 'History and Evolution of Interactive Media',
    topicTitle: 'From Scientific Tools to Personal Expression',
    bullets: [
      'Early Computers (1940s-50s): Giant machines (like ENIAC) configured via physical cables and punch cards. Zero real-time user interaction.',
      'Command-Line Interfaces (1960s-70s): Teletypes and terminals allowed text commands. Interaction was slow, sequential, and text-only.',
      'The GUI Revolution (1980s): The mouse, folders, icons, and windows (WIMP model) made computing visual and accessible.',
      'The World Wide Web (1990s): Hyperlinks connected documents, introducing non-linear reading across global networks.',
      'Mobile & Touch (2000s): Capacitive screens replaced styluses and mice with direct, finger-based touch gestures (pinch, swipe).',
      'Immersive Media (Modern): Virtual Reality (VR), Augmented Reality (AR), and voice assistants remove physical screen barriers.'
    ],
    image: {
      url: '/hci_evolution.jpg',
      caption: 'The Historical Evolution of Human-Computer Interaction Models'
    },
    keyInsight: {
      title: '💡 History Story: "Mother of All Demos" (1968)',
      text: 'In 1968, Douglas Engelbart presented the computer mouse, hypertext links, dynamic file browsing, and video conferencing in a single demonstration. It took the commercial market nearly 20 years to catch up and implement what he showed in one afternoon!'
    }
  },
  // SLIDE 16: THE TIMELINE
  {
    id: 'media-slide16',
    slideNum: 16,
    totalSlides: 36,
    type: 'history_timeline',
    moduleTag: 'History',
    title: 'Interactive Evolution Timeline',
    topicTitle: 'Click the milestones below to explore the shift in interaction models:'
  },
  // SLIDE 17: CLI VS GUI SIMULATOR
  {
    id: 'media-slide17',
    slideNum: 17,
    totalSlides: 36,
    type: 'cli_vs_gui',
    moduleTag: 'History',
    title: 'Command Line vs. Graphical User Interface',
    topicTitle: 'Try executing the task "Open Document" in both environments:'
  },
  // SLIDE 18: GUI VISUAL METAPHORS
  {
    id: 'media-slide18',
    slideNum: 18,
    totalSlides: 36,
    type: 'single_topic',
    moduleTag: 'History',
    title: 'Why the GUI Succeeded',
    topicTitle: 'The Power of Visual Metaphors',
    bullets: [
      'Desktop Metaphor: The screen resembles a physical desk with folders, files, and trash bins, tapping into real-world familiarity.',
      'Direct Manipulation: Instead of typing abstract text instructions, users grab, drag, and drop visual files directly.',
      'Recognition over Recall: Command lines require users to memorize exact commands (recall). GUIs present icons and menus (recognition).',
      'Immediate Visibility: The system changes state immediately upon interaction, showing progress clearly.'
    ],
    visualTrick: {
      title: 'Mental Models',
      text: 'A good interface aligns with the user\'s existing mental model. If a file looks like a paper page, users naturally assume they can click it to open it.'
    }
  },
  // SLIDE 19: TYPES OF INTERACTIVE MEDIA Accordion
  {
    id: 'media-slide19',
    slideNum: 19,
    totalSlides: 36,
    type: 'single_topic',
    moduleTag: 'Types',
    title: 'Major Categories of Interactive Media',
    topicTitle: 'Diverse Formats and Scenarios',
    bullets: [
      'Interactive Websites: Portals like E-Commerce shops and blogs where users search, filter, check out, and chat.',
      'Video Games: Complex, highly interactive simulations where players control narratives, actions, and character parameters.',
      'Mobile Applications: Handheld touch tools optimized for speed, gestures, location mapping, and haptics.',
      'Digital Kiosks: Public terminals (airports, retail, museums) with touch-optimized maps or ticketing.',
      'Interactive Art Installations: Spaces where sensors detect motion, sound, or temperature, causing projection updates.'
    ],
    layman: {
      title: 'Key Point:',
      text: 'Regardless of the category, the fundamental rule remains: design must prioritize user-centered navigation and immediate, clear response loops.'
    }
  },
  // SLIDE 20: DISCOVERABILITY AND AFFORDANCES
  {
    id: 'media-slide20',
    slideNum: 20,
    totalSlides: 36,
    type: 'single_topic',
    moduleTag: 'Design',
    title: 'Affordances, Signifiers, and Feedback',
    topicTitle: 'Helping Users Understand the System',
    bullets: [
      'Affordance: The actual physical/digital properties of an object that define how it can be used (e.g., a button affords clicking).',
      'Signifier: Visual indicators that point out the affordance (e.g., a drop shadow and rounded corners signaling that it is a button).',
      'Feedback: What happens after the action (e.g., a clicking sound, button press animation, and page transition).',
      'Mapping: The natural relationship between controls and their movements (e.g., sliding a volume knob right increases intensity).'
    ],
    layman: {
      title: '📱 History Fact: Jobs and the Stylus',
      text: 'When Apple introduced the iPhone in 2007, Steve Jobs famously declared: "Who wants a stylus? You have to get \'em, put \'em away, you lose \'em... Yuck! We\'re going to use the best pointing device in the world - our fingers." This marked the transition to pure capacitive gestures!'
    }
  },
  // SLIDE 21: GOOD VS POOR DESIGN
  {
    id: 'media-slide21',
    slideNum: 21,
    totalSlides: 36,
    type: 'versus',
    moduleTag: 'Design',
    title: 'Good Interaction vs. Poor Interaction',
    topicTitle: 'Compare the behaviors of these design patterns:',
    versusLeft: {
      title: 'Good Interaction Design',
      bullets: [
        'Clear visual signifiers: A button clearly stands out from static text layout elements.',
        'Immediate feedback: System displays a spinner or visual change in under 100ms.',
        'Informative labels: Buttons read "Complete Purchase" or "Delete Folder".',
        'Forgiving controls: Provides "Undo" and clear confirmation modals before destruction.'
      ]
    },
    versusRight: {
      title: 'Poor Interaction Design',
      bullets: [
        'Invisible buttons: Interactive elements look exactly like static bullet points.',
        'No confirmation: Tapping "Format Drive" deletes files instantly with no warning.',
        'Vague actions: Buttons are labeled "Submit" or "Click Here" without context.',
        'Zero status feedback: Clicked button does not animate, leaving users guessing.'
      ]
    },
    keyInsight: {
      title: '⏱️ Design Story: The Progress Bar (1985)',
      text: 'In 1985, Brad Myers presented the concept of a progress indicator at ACM SIGCHI. He proved that showing a loading bar reduces user anxiety and prevents them from restarting applications thinking the computer has crashed.'
    }
  },
  // SLIDE 22: BUTTON STATES SIMULATOR
  {
    id: 'media-slide22',
    slideNum: 22,
    totalSlides: 36,
    type: 'button_simulator',
    moduleTag: 'Design',
    title: 'Interactive Button State Sandbox',
    topicTitle: 'Inspect and click the control below to see state updates:'
  },
  // SLIDE 23: LEVELS OF INTERACTIVE MEDIA
  {
    id: 'media-slide23',
    slideNum: 23,
    totalSlides: 36,
    type: 'interaction_slider',
    moduleTag: 'Design',
    title: 'Levels of Interactivity Complexity',
    topicTitle: 'Slide the slider to inspect responsive layouts from static up to simulator levels:'
  },
  // SLIDE 24: SYSTEM RESPONSIVENESS LIMITS
  {
    id: 'media-slide24',
    slideNum: 24,
    totalSlides: 36,
    type: 'single_topic',
    moduleTag: 'Feedback',
    title: 'System Responsiveness Timelines',
    topicTitle: 'Understanding Interaction Response Thresholds',
    bullets: [
      '0.1 Second (100ms): The limit for users to feel that the system is reacting instantaneously. Visual feedback (button states) must occur within this window.',
      '1.0 Second: The limit for the user\'s flow of thought to stay uninterrupted. If actions take longer, loading indicators must show.',
      '10 Seconds: The limit for keeping the user\'s attention focused. Actions taking longer require progress indicators showing completion time.'
    ],
    keyInsight: {
      title: 'Miller\'s Law',
      text: 'A user\'s short-term memory can hold 7 ± 2 chunks of info. If response times exceed 10 seconds, their goal memory decays, breaking the loop.'
    }
  },
  // SLIDE 25: USER CONTROL AND FREEDOM
  {
    id: 'media-slide25',
    slideNum: 25,
    totalSlides: 36,
    type: 'single_topic',
    moduleTag: 'Design',
    title: 'User Control and Freedom',
    topicTitle: 'Providing Emergency Exits',
    bullets: [
      'Undo/Redo: Giving users simple commands to cancel accidental actions or go back safely.',
      'Emergency Exits: Clear "Cancel", "Back", or "Quit" buttons on multi-step forms so users do not feel trapped.',
      'Configurable Defaults: Letting users customize their settings and revert parameters easily.',
      'Forgiving systems: Encouraging exploration by making actions non-destructive where possible.'
    ],
    layman: {
      title: '⌨️ History Story: The Origin of Undo (1971)',
      text: 'The "Undo" command was created by programmer Warren Teitelman in 1971 while working on the INTERLISP system at Xerox PARC. It was originally called "UNDO" and was designed to save programmers from losing hours of code due to typo mistakes.'
    }
  },
  // SLIDE 26: DYNAMIC DIALOGUE & USER AGENCY
  {
    id: 'media-slide26',
    slideNum: 26,
    totalSlides: 36,
    type: 'single_topic',
    moduleTag: 'Design',
    title: 'User Agency vs. Machine Automation',
    topicTitle: 'Balancing Automation and Control',
    bullets: [
      'User Agency: Giving the student or operator full control over parameters, letting them adjust styles and settings.',
      'System Automation: Automating tedious operations (saving data, validating variables) to prevent cognitive overload.',
      'Avoid Trap Gates: Designers must never take away navigation freedom unless security parameters mandate locking inputs.',
      'Informative Interactivity: Interaction should clarify concepts, not confuse users with unnecessary clicks.'
    ],
    keyInsight: {
      title: 'Design Philosophy',
      text: 'The machine should assist, not dictate. High-agency designs empower users to configure states, building confidence.'
    }
  },
  // SLIDE 27: CASE STUDY INTRO
  {
    id: 'media-slide27',
    slideNum: 27,
    totalSlides: 36,
    type: 'single_topic',
    moduleTag: 'Case Study',
    title: 'Case Study: Campus Information Kiosk',
    topicTitle: 'Designing for Public Interaction Scenarios',
    bullets: [
      'The Scenario: Trimex Colleges wants to deploy public touchscreen kiosks in lobby hallways.',
      'The Goal: Help freshmen locate the Registrar Office, verify today\'s events, and check classroom schedules.',
      'The Challenge: Users are in a hurry, have different touch heights, and expect immediate feedback without reading manual text pages.'
    ],
    layman: {
      title: 'Design Goal:',
      text: 'We must build an interface with large touch zones, visible signifiers, and instant visual response maps to facilitate low-friction interaction loops.'
    }
  },
  // SLIDE 28: KIOSK SANDBOX
  {
    id: 'media-slide28',
    slideNum: 28,
    totalSlides: 36,
    type: 'campus_kiosk',
    moduleTag: 'Case Study',
    title: 'Interactive Lobby Kiosk Mockup',
    topicTitle: 'Tap portals on screen below to check Registrar directions and events calendars:'
  },
  // SLIDE 29: KIOSK RECAP ACTIVITY
  {
    id: 'media-slide29',
    slideNum: 29,
    totalSlides: 36,
    type: 'recap_ordering',
    moduleTag: 'Activity',
    title: 'Activity: Chronological Interaction Loop',
    topicTitle: 'Sort items on left in correct chronological order to complete the loops:'
  },
  // SLIDE 30: USER CENTERED DESIGN PROCESS
  {
    id: 'media-slide30',
    slideNum: 30,
    totalSlides: 36,
    type: 'single_topic',
    moduleTag: 'Process',
    title: 'The User-Centered Design Process (UCD)',
    topicTitle: 'Structuring Your Creative Design Framework',
    bullets: [
      '1. User Research: Understand user demographics, cognitive capabilities, and target environments.',
      '2. Requirements Definition: Specify user goals and technical limitations.',
      '3. Interface Prototyping: Build visual layouts, interactive wireframes, and mockups.',
      '4. Usability Evaluation: Test prototypes with actual users to uncover navigation friction.'
    ],
    keyInsight: {
      title: '🖱️ History Story: The First Computer Mouse (1964)',
      text: 'In 1964, Douglas Engelbart built the first mouse prototype out of a hollowed block of wood, featuring two metal wheels and a single red button. He tested several other models (including foot-controlled ones!), but found the hand mouse was the most natural pointing metaphor.'
    }
  },
  // SLIDE 31: KNOWLEDGE CHECK 1
  {
    id: 'media-slide31',
    slideNum: 31,
    totalSlides: 36,
    type: 'knowledge_check',
    moduleTag: 'Quiz',
    title: 'Knowledge Check: Interactivity',
    topicTitle: 'Identify the core definition of interactivity:',
    bullets: [
      'High-resolution imagery displaying complex visual design.',
      'Bidirectional information flow allowing user agency to alter system state.',
      'Processor speeds compiling server pages in less than 50ms.',
      'The capacity to print layout grids to paper sheets.'
    ]
  },
  // SLIDE 32: KNOWLEDGE CHECK 2
  {
    id: 'media-slide32',
    slideNum: 32,
    totalSlides: 36,
    type: 'knowledge_check',
    moduleTag: 'Quiz',
    title: 'Knowledge Check: Visual Feedback',
    topicTitle: 'A loading spinner spinning on form submit represents which component:',
    bullets: [
      'Input execution coordinates tracking cursor lines.',
      'Backend system compilation running on database servers.',
      'Visual feedback validating action registration to reduce user uncertainty.',
      'Goal formulation values inside the student\'s memory.'
    ]
  },
  // SLIDE 33: KNOWLEDGE CHECK 3
  {
    id: 'media-slide33',
    slideNum: 33,
    totalSlides: 36,
    type: 'knowledge_check',
    moduleTag: 'Quiz',
    title: 'Knowledge Check: Evolution Timeline',
    topicTitle: 'What is the correct chronological timeline of HCI evolution models:',
    bullets: [
      'Keyboard typing → Touch screens → Command-Line → Graphical GUI desktop.',
      'Punch card boards → Command-Line Terminals → Visual Desktop GUIs → Touch Gestures.',
      'Capacitive touch screens → Desktop folders → Teletypes → Mechanical punch cards.',
      'Keyboard CLI → Punch cards → Immersive AR → Hypertext web links.'
    ]
  },
  // SLIDE 34: ESSAY ASSESSMENT
  {
    id: 'media-slide34',
    slideNum: 34,
    totalSlides: 36,
    type: 'essay_prompt',
    moduleTag: 'Assessment',
    title: 'Written Essay Assessment',
    topicTitle: 'Submit your conceptual audit below:'
  },
  // SLIDE 35: EXIT SLIP REFLECTION
  {
    id: 'media-slide35',
    slideNum: 35,
    totalSlides: 36,
    type: 'exit_reflection',
    moduleTag: 'Assessment',
    title: 'Exit Slip Reflection Log',
    topicTitle: 'Self-Assess your module understanding:'
  },
  // SLIDE 36: WRAP UP SUMMARY
  {
    id: 'media-slide36',
    slideNum: 36,
    totalSlides: 36,
    type: 'single_topic',
    moduleTag: 'Summary',
    title: 'Module Summary Roadmap',
    topicTitle: 'Key Takeaways from Week 1',
    bullets: [
      'Interactivity is a bidirectional loop: User goal → Input → System processing → Output display → Feedback loop.',
      'HCI has evolved: Command lines required recall; GUIs introduced WIMP recognition; touch made coordinates direct.',
      'Good design signposts signifiers: Helping users understand affordances with fast responsiveness grids.'
    ],
    keyInsight: {
      title: 'Keep Exploring!',
      text: 'In Week 2, we will dive into Desktop Visual Metaphors and learn how window layering systems manage multi-process rendering contexts!'
    }
  }
];
