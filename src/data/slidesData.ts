import { SlideData } from '../types/slide';

export const slidesData: SlideData[] = [
  // SLIDE 1
  {
    id: 'slide1',
    slideNum: 1,
    totalSlides: 51,
    type: 'cover',
    moduleTag: 'VIDEODIT Lecture Series',
    title: 'Introduction to Video Editing'
  },
  // SLIDE 2
  {
    id: 'slide2',
    slideNum: 2,
    totalSlides: 51,
    type: 'single_topic',
    moduleTag: 'Syllabus Overview',
    title: 'Week 1 Learning Goals (Made Simple)',
    topicTitle: 'What You Will Learn Today',
    bullets: [
      'Goal 1: Understand Video Basics — Learn how video clips are cut, arranged, and put together to tell a smooth story. This involves cutting raw camera footage, sorting scenes chronologically, and establishing a clear narrative flow.',
      'Goal 2: Explore History & Inventors — Discover how video editing changed from physical razor blade splicing to modern computers. We examine how early filmmakers discovered special effects by accident and how computer NLEs democratized editing.',
      'Goal 3: Master the Software Interface — Get comfortable with the 4 screen areas used in software like Premiere Pro. By understanding the Project Panel, Source Monitor, Program Monitor, and Timeline, you master any video editor.'
    ],
    layman: {
      title: 'Think Of It Like This:',
      text: 'Learning video editing is just like learning how to cook! You select raw ingredients (video footage), chop them up, and arrange them into a delicious meal (the final movie).'
    },
    image: {
      url: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80',
      caption: 'Visual Learning Competencies & Roadmap Strategy'
    }
  },
  // SLIDE 3
  {
    id: 'slide3',
    slideNum: 3,
    totalSlides: 51,
    type: 'single_topic',
    moduleTag: 'Week 1 Agenda',
    title: 'Lecture Roadmap & Visual Plan',
    topicTitle: '4 Easy Steps to Complete Week 1',
    bullets: [
      'Part 1: Video Fundamentals — The Lego block rules of cutting footage, frame speeds, screen shapes, and story rules. We will cover temporal resolution, aspect ratios, and editing continuity.',
      'Part 2: The Time Travel History — How movie pioneers invented cuts by mistake and revolutionized media. We will journey through five distinct historical eras from Thomas Edison to AI-driven editing.',
      'Part 3: The 4-Quadrant Screen — Unlocking the 4 main rooms inside video editing software. Learn where to import, preview, trim, and assemble your assets.',
      'Part 4: Real-World Scenarios — How to fix real video mistakes using simple editing tricks. Analyze practical scenarios like coverups using B-roll overlays and visual eye-trace alignment.'
    ],
    image: {
      url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
      caption: 'Visual Step-by-Step Learning Flow'
    }
  },
  // SLIDE 4
  {
    id: 'slide4',
    slideNum: 4,
    totalSlides: 51,
    type: 'section_break',
    sectionNum: 'Module 01',
    title: 'Fundamentals of Video Editing',
    description: 'Learning the language of video: how cuts work, why footage is structured like Lego bricks, and the simple rules of storytelling.'
  },
  // SLIDE 5
  {
    id: 'slide5',
    slideNum: 5,
    totalSlides: 51,
    type: 'single_topic',
    moduleTag: 'Module 01',
    title: 'What is Video Editing? (The Lego Analogy)',
    topicTitle: 'Rearranging Clips to Tell a Story',
    bullets: [
      'Video editing is simply taking individual recorded video clips, trimming away the boring parts, and stitching them together in a specific order. This is done to convey a cohesive message, guide user attention, and eliminate unwanted frames.',
      'Without editing, video is just a pile of random recorded moments. The edit turns chaos into a smooth, exciting story by managing pace, setting atmosphere with audio, and building a structured plot.',
      'Creative editing allows you to play with time and space, letting you transition characters across environments instantly, skip hours of slow travel, and focus entirely on emotional climaxes.'
    ],
    layman: {
      title: 'The Lego Block Analogy:',
      text: 'Raw video clips are like individual Lego blocks. Video editing is picking the right colored blocks and snapping them together to build a castle!'
    },
    image: {
      url: 'https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?auto=format&fit=crop&w=800&q=80',
      caption: 'Raw Video Clips Assembled into a Finished Timeline'
    }
  },
  // SLIDE 6
  {
    id: 'slide6',
    slideNum: 6,
    totalSlides: 51,
    type: 'single_topic',
    moduleTag: 'Module 01',
    title: 'Continuity (The Invisible Magic Trick)',
    topicTitle: 'Making Cuts Feel Seamless',
    bullets: [
      'Continuity Editing means making cuts so smooth that the audience doesn\'t even notice a cut happened. This is called "invisible editing" because it maintains the illusion of continuous time and space.',
      'If an actor raises a cup in a wide shot, they must still be holding the cup when you cut to a close-up shot! Any mismatch causes a "continuity error" which distracts the viewer.',
      'Correct continuity requires matching action directions, screen positions, lighting values, background sounds, and physical props between different camera takes.'
    ],
    visualTrick: {
      title: 'The "Invisible Edit" Rule:',
      text: 'If the audience notices the cut, their brain stops paying attention to the movie. Good editing feels continuous, like watching real life unfold.'
    },
    image: {
      url: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80',
      caption: 'Camera Setup & Continuity Alignment Example'
    }
  },
  // SLIDE 7
  {
    id: 'slide7',
    slideNum: 7,
    totalSlides: 51,
    type: 'comparison',
    moduleTag: 'Module 01',
    title: 'Active vs. Passive Viewing Dynamics',
    topicTitle: "Waking Up the Viewer's Brain",
    versusLeft: {
      title: 'Passive Viewing',
      bullets: [
        'Watching a boring, unedited security camera feed.',
        'The audience gets sleepy because nothing guides their attention, and the visual remains static without changing angles.',
        'Requires very low mental effort, leading to quick loss of focus and interest.'
      ]
    },
    versusRight: {
      title: 'Active Viewing',
      bullets: [
        'Fast, energetic edits that show close-ups of reactions.',
        "The audience's brain is fully awake, guessing what happens next, analyzing facial emotions, and feeling the kinetic pace.",
        'Editors manipulate camera angles, cuts, and audio design to actively trigger anticipation, suspense, and empathy.'
      ]
    },
    keyInsight: {
      title: 'Lesson for Editors:',
      text: "Your job as an editor is to act like a tour guide for the audience's eyes. Show them exactly what matters at each second!"
    },
    image: {
      url: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80',
      caption: 'Engagement Example: Passive vs Active Viewer Reactions'
    }
  },
  // SLIDE 8
  {
    id: 'slide8',
    slideNum: 8,
    totalSlides: 51,
    type: 'single_topic',
    moduleTag: 'Module 01',
    title: 'A-Roll (The Main Storyteller)',
    topicTitle: 'The Backbone of Your Video',
    bullets: [
      'A-Roll is the primary video and audio footage that carries the main message or plot. It forms the narrative foundation, providing the spoken script or dialogue of the production.',
      'Think of news anchors speaking, a person being interviewed, or an actor delivering monologue dialogue. Without A-roll, the audience lacks direct verbal context of the story.',
      'In modern post-production pipelines, editors lay down the A-roll first to establish the pacing, duration, and structure before overlaying any B-roll or sound effects.'
    ],
    layman: {
      title: 'The Singer Analogy:',
      text: 'A-Roll is like the lead singer in a music band. It provides the main lyrics and melody that everything else is built around.'
    },
    image: {
      url: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&w=800&q=80',
      caption: 'Standard A-Roll Talking Head Interview Visual Setup'
    }
  },
  // SLIDE 9
  {
    id: 'slide9',
    slideNum: 9,
    totalSlides: 51,
    type: 'single_topic',
    moduleTag: 'Module 01',
    title: 'B-Roll (The Picture Book / Visual Helper)',
    topicTitle: 'Extra Footage that Illustrates Words',
    bullets: [
      'B-Roll is extra background video played over the voice of the speaker to show what they are talking about. It adds context, visual interest, and masks edits on the main track.',
      'If a chef talks about baking bread (A-Roll), you show video clips of flour mixing and oven baking (B-Roll)! This keeps the viewer\'s eyes engaged and breaks up static talking heads.',
      'B-roll can be B-roll cutaways (showing objects in the room), detail inserts (close-ups of hands/tools), establishing shots (showing the environment), or generic stock footage.'
    ],
    visualTrick: {
      title: 'The Picture Book Metaphor:',
      text: 'A-Roll is someone reading an audiobook to you. B-Roll is opening the picture book so you can see what they are describing!'
    },
    image: {
      url: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80',
      caption: 'Overlaying B-Roll Action Footage Over Main Voice Audio'
    }
  },
  // SLIDE 10
  {
    id: 'slide10',
    slideNum: 10,
    totalSlides: 51,
    type: 'single_topic',
    moduleTag: 'Module 01',
    title: 'Linear Editing (The Old VHS Tape System)',
    topicTitle: 'Copying Video in Fixed Order (Tape-to-Tape)',
    bullets: [
      'In the past, video editing was Linear. You had to copy scenes from Tape 1 to Tape 2 in strict chronological order (Scene A -> B -> C -> D).',
      'The Biggest Pain: If you made a mistake on Scene A, you had to re-record the ENTIRE tape from start to finish! There was no drag-and-drop or shifting.',
      'Required physical VCR/VTR decks connected together. Tape wear and tear could degrade image quality with each generation copy.'
    ],
    layman: {
      title: 'Typewriter Analogy:',
      text: "Linear editing is like using a typewriter. If you make a typo on paragraph 1, you can't just press 'Backspace'—you must re-type the whole page!"
    },
    image: {
      url: 'https://images.unsplash.com/photo-1533158326339-7f3cf2404354?auto=format&fit=crop&w=800&q=80',
      caption: 'Legacy Videotape Tape-to-Tape Sequential Editing System'
    }
  },
  // SLIDE 11
  {
    id: 'slide11',
    slideNum: 11,
    totalSlides: 51,
    type: 'single_topic',
    moduleTag: 'Module 01',
    title: 'Non-Linear Editing / NLE (Digital Word Processor)',
    topicTitle: 'Instant Drag-and-Drop Freedom',
    bullets: [
      'Modern video editing software is Non-Linear (NLE). All footage is saved digitally on a computer hard drive (HDD/SSD).',
      'You can grab any video clip at any time, slice it in half, move it to the front, or delete it without destroying anything else! The rest of the timeline automatically adjusts.',
      'Allows multi-track layering, applying real-time filters, instant previews, and exporting to digital formats with zero generation loss.'
    ],
    visualTrick: {
      title: 'Microsoft Word Analogy:',
      text: 'NLE is like typing on Microsoft Word. You can highlight text, copy, paste, delete, and undo mistakes instantly with no hassle!'
    },
    image: {
      url: 'https://images.unsplash.com/photo-1622737133809-d95047b9e673?auto=format&fit=crop&w=800&q=80',
      caption: 'Modern Non-Linear Digital Editing Workspace'
    }
  },
  // SLIDE 12
  {
    id: 'slide12',
    slideNum: 12,
    totalSlides: 51,
    type: 'single_topic',
    moduleTag: 'Module 01',
    title: 'Non-Destructive Editing (The Safety Net)',
    topicTitle: 'Your Original Files Are Always Safe',
    bullets: [
      'When you cut a clip in Premiere Pro, you are NOT cutting the original camera file on your hard drive! The raw media file remains untouched.',
      'The NLE software only creates "virtual pointers" (XML/instruction lines) telling the computer when to start playing and when to stop playing.',
      'This means you can restore trimmed parts of a clip at any time, perform infinite undos, and try out wild edit options with complete safety.'
    ],
    layman: {
      title: 'The Stencil / Trace Paper Analogy:',
      text: "It's like placing tracing paper over a valuable painting and drawing on it. If you ruin the tracing paper, the original painting remains 100% perfect!"
    },
    image: {
      url: 'https://images.unsplash.com/photo-1544396821-4dd40b938ad3?auto=format&fit=crop&w=800&q=80',
      caption: 'Original File Protection on Hard Drive Storage'
    }
  },
  // SLIDE 13
  {
    id: 'slide13',
    slideNum: 13,
    totalSlides: 51,
    type: 'single_topic',
    moduleTag: 'Module 01',
    title: 'Frame Rates (The Flipbook Speed Test)',
    topicTitle: 'Frames Per Second (FPS) Explained',
    bullets: [
      'Video is just a stack of still photographs played really fast. FPS stands for how many pictures flash on screen in 1 second.',
      '24 FPS (Cinema Look): Classic movie feel with natural motion blur. It mimics how the human eye naturally perceives movement.',
      '30 FPS (TV & News): Crisp, realistic look used in live TV, news broadcasts, and standard videography.',
      '60 FPS (Gaming & Slow-Mo): Ultra-smooth motion used for esports and slow-motion video playback. Recording in 60 FPS allows you to slow it down to 24 FPS for clean, slow-motion shots.'
    ],
    visualTrick: {
      title: 'The Flipbook Test:',
      text: 'Imagine a drawing flipbook. If you flip 24 pages per second, it looks like a movie. If you flip 60 pages per second, the action looks buttery smooth!'
    },
    image: {
      url: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=800&q=80',
      caption: 'Film Strip Frame Density Example (24 vs 30 vs 60 FPS)'
    }
  },
  // SLIDE 14
  {
    id: 'slide14',
    slideNum: 14,
    totalSlides: 51,
    type: 'single_topic',
    moduleTag: 'Module 01',
    title: 'Aspect Ratio: 16:9 Horizontal Widescreen',
    topicTitle: 'The Standard TV & YouTube Shape',
    bullets: [
      'Aspect Ratio is the shape rectangle of the video screen, calculated as width units versus height units.',
      '16:9 Widescreen (1920x1080): The universal horizontal standard for TV screens, cinema displays, desktop computers, and standard YouTube players.',
      'Allows wide landscapes, fits standard television standards, and is the default output setting for almost all modern video cameras.'
    ],
    layman: {
      title: 'Human Sight Match:',
      text: 'Our eyes are placed side-by-side on our face, so human eyes naturally see the world in horizontal widescreen format!'
    },
    image: {
      url: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
      caption: 'Standard 16:9 Horizontal Widescreen Display Frame'
    }
  },
  // SLIDE 15
  {
    id: 'slide15',
    slideNum: 15,
    totalSlides: 51,
    type: 'single_topic',
    moduleTag: 'Module 01',
    title: 'Aspect Ratio: 9:16 Vertical Mobile',
    topicTitle: 'The Smartphone / TikTok Standard',
    bullets: [
      '9:16 Vertical (1080x1920): The portrait-oriented video shape made specifically for smartphone screens.',
      'Used for TikTok, Instagram Reels, and YouTube Shorts so users don\'t have to turn their phone sideways to fill the screen.',
      'Requires different composition techniques: keep subjects in the center frame and stack text vertically so UI elements don\'t block crucial content.'
    ],
    keyInsight: {
      title: 'Editor Warning:',
      text: "When editing vertical video, keep people's faces right in the middle! Mobile app buttons on TikTok can block text on the top and bottom."
    },
    image: {
      url: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80',
      caption: 'Vertical 9:16 Smartphone Screen Format Example'
    }
  },
  // SLIDE 16
  {
    id: 'slide16',
    slideNum: 16,
    totalSlides: 51,
    type: 'single_topic',
    moduleTag: 'Module 01',
    title: "Walter Murch’s \"Rule of Six\" (Priority Recipe)",
    pioneerBadge: 'Legendary Editor: Walter Murch',
    topicTitle: 'How to Judge Every Single Cut',
    bullets: [
      'Oscar-winning editor Walter Murch created a 6-rule checklist to know when to cut, ranked from most important to least important:',
      '1. Emotion (51%) — Does the cut feel right emotionally? If the emotional beat lands, the cut works.',
      '2. Story (23%) — Does the cut advance the plot and keep the narrative logical?',
      '3. Rhythm (10%) — Does the cut feel musical, matching the breathing or visual beat of the scene?',
      '4. Eye-Trace (7%) — Where is the viewer\'s focus directed? Keep eye movements natural.',
      '5. 2D Screen Line (5%) — Camera angle rules like the 180-degree axis line.',
      '6. 3D Room Space (4%) — Physical object positions in the three-dimensional space.'
    ],
    image: {
      url: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=800&q=80',
      caption: "Walter Murch's Cut Priority Breakdown"
    }
  },
  // SLIDE 17
  {
    id: 'slide17',
    slideNum: 17,
    totalSlides: 51,
    type: 'single_topic',
    moduleTag: 'Module 01',
    title: 'Rule 1 & 2: Emotion (51%) & Story (23%)',
    topicTitle: 'The Golden 74% of Video Editing',
    bullets: [
      'Emotion (51%): Does the cut make the viewer feel sad, happy, or scared at the exact right second? Emotion beats everything else combined!',
      'Story (23%): Does the cut help the audience understand the plot? Each cut must either answer a question or raise a new one to drive narrative progress.',
      'Together, these two rules form 74% of the decision-making process. Focus on performances and narrative clarity above minor technical details.'
    ],
    layman: {
      title: 'The Golden Secret:',
      text: 'If a cut makes the audience cry or laugh at the right moment, nobody will care if a coffee cup on the table moved slightly between shots!'
    },
    image: {
      url: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80',
      caption: 'Emotional Acting Priority in Cinema Editing'
    }
  },
  // SLIDE 18
  {
    id: 'slide18',
    slideNum: 18,
    totalSlides: 51,
    type: 'single_topic',
    moduleTag: 'Module 01',
    title: 'Rule 3 & 4: Rhythm (10%) & Eye-Trace (7%)',
    topicTitle: 'The Dance Beat & Focal Pointer',
    bullets: [
      'Rhythm (10%): Cutting to the beat of background music or natural speaking patterns so the video flows like a song. Cuts should match the physical movement or sentence breaks.',
      'Eye-Trace (7%): Ensuring the audience\'s eyes don\'t have to jump across the screen to find the subject in the next shot. The focal point of Shot A should align with the start focus of Shot B.',
      'By controlling eye-trace and rhythm, editors keep the visual flow comfortable and reduce viewer fatigue during fast-paced action.'
    ],
    visualTrick: {
      title: 'The Laser Pointer Metaphor:',
      text: 'Imagine pointing a red laser at the screen. If Shot 1 puts the laser on the left side, Shot 2 should keep the action on the left side so viewers don\'t get dizzy!'
    },
    image: {
      url: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
      caption: 'Visualizing Rhythm and Eye-Trace Motion Flow'
    }
  },
  // SLIDE 19
  {
    id: 'slide19',
    slideNum: 19,
    totalSlides: 51,
    type: 'single_topic',
    moduleTag: 'Module 01',
    title: 'Rule 5 & 6: 2D Line (5%) & 3D Space (4%)',
    topicTitle: 'Keeping Spatial Rules & Physics Logical',
    bullets: [
      '2D Screen Line (5%): Respecting the 180-degree camera line so two people talking keep looking in the correct directions relative to each other.',
      '3D Spatial Continuity (4%): Making sure physical objects stay in the same position in the room from shot to shot (e.g., character holding a cigarette in the same hand).',
      'While these technical rules are important to prevent confusion, they are ranked lowest because a powerful performance easily hides minor spatial glitches.'
    ],
    keyInsight: {
      title: 'Why Are These Lowest?',
      text: 'These spatial rules are important, but Walter Murch proved that audiences gladly forgive minor continuity glitches if the Emotion and Story are amazing!'
    },
    image: {
      url: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?auto=format&fit=crop&w=800&q=80',
      caption: 'Spatial Camera Placement & Axis Orientation'
    }
  },
  // SLIDE 20
  {
    id: 'slide20',
    slideNum: 20,
    totalSlides: 51,
    type: 'section_break',
    sectionNum: 'Module 02',
    title: 'History & Evolution of Video Editing',
    description: 'From 1895 celluloid film strips to modern AI cloud workstations—how film pioneers invented video editing step-by-step.'
  },
  // SLIDE 21
  {
    id: 'slide21',
    slideNum: 21,
    totalSlides: 51,
    type: 'timeline',
    moduleTag: 'Module 02',
    title: 'Macro Timeline of Video History (1895 - Today)',
    topicTitle: 'The 5 Great Historical Eras',
    timelineItems: [
      { year: '1895–1903', title: 'Uncut Film to Story Splicing', desc: 'Edison, Lumière, Porter start film cuts.' },
      { year: '1918–1925', title: 'Mind Tricks & Soviet Montage', desc: 'Kuleshov and Eisenstein shock the brain.' },
      { year: '1924–1950s', title: 'Razor Blades & Moviola Machine', desc: 'Iwan Serrurier invents physical workbenches.' },
      { year: '1956–1980s', title: 'Magnetic Videotapes & Light Pens', desc: 'Ampex magnetic tapes and CMX 600 controllers.' },
      { year: '1989–Present', title: 'Digital NLE Computers & AI', desc: 'Avid, Premiere, and automated text transcript editing.' }
    ],
    image: {
      url: 'https://images.unsplash.com/photo-1442522467253-cf3114d241d8?auto=format&fit=crop&w=800&q=80',
      caption: 'Evolution Timeline of Post-Production Tools'
    }
  },
  // SLIDE 22
  {
    id: 'slide22',
    slideNum: 22,
    totalSlides: 51,
    type: 'single_topic',
    moduleTag: 'Module 02',
    title: '1895: Edison & Lumières (Zero Cuts Allowed!)',
    pioneerBadge: 'Pioneers: Thomas Edison & Lumière Brothers (1895)',
    topicTitle: 'The Era of Uncut 50-Second Clips',
    bullets: [
      "In 1895, the Lumière brothers projected the world's first movies in Paris. Cameras were set up on a static tripod, recorded 50 seconds of celluloid, and stopped.",
      'Films like "Arrival of a Train" had zero cuts. People stared at a single continuous, unedited shot and fled in terror thinking a real train was coming!',
      'Filmmakers at the time treated the camera like a theatre seat: you place it down and capture whatever passes in front of the lens in one single take.'
    ],
    layman: {
      title: 'Layman Metaphor:',
      text: 'It was like recording a short 50-second Instagram story video on your phone without editing or trimming anything!'
    },
    image: {
      url: 'https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?auto=format&fit=crop&w=800&q=80',
      caption: 'Early Cinema 1895 Single-Take Camera Setup'
    }
  },
  // SLIDE 23
  {
    id: 'slide23',
    slideNum: 23,
    totalSlides: 51,
    type: 'single_topic',
    moduleTag: 'Module 02',
    title: '1896: Georges Méliès (The Magic Camera Jam)',
    pioneerBadge: 'Pioneer: Georges Méliès (French Magician)',
    topicTitle: 'Discovering the "Stop-Trick" Cut by Accident',
    bullets: [
      'In 1896, magician Georges Méliès was filming a street in Paris when his camera jammed for a few seconds. He cleared the jam and kept filming.',
      'When he played the movie back, a passing bus instantly vanished and turned into a horse hearse! He realized cutting film creates magical transformations.',
      'Méliès became the father of special effects, inventing tools like double exposures, fade-ins, and stop-motion trick edits.'
    ],
    visualTrick: {
      title: 'The First Special Effect:',
      text: 'Méliès realized you can make people disappear on screen simply by stopping the recording, having them walk away, and recording again!'
    },
    image: {
      url: 'https://images.unsplash.com/photo-1518676599625-585804595232?auto=format&fit=crop&w=800&q=80',
      caption: 'Georges Méliès Accidental "Stop-Trick" Trick Cut'
    }
  },
  // SLIDE 24
  {
    id: 'slide24',
    slideNum: 24,
    totalSlides: 51,
    type: 'single_topic',
    moduleTag: 'Module 02',
    title: '1903: Edwin S. Porter (Cutting Between Two Places)',
    pioneerBadge: 'Pioneer: Edwin S. Porter (1903)',
    topicTitle: 'Inventing Cross-Cutting (Parallel Action)',
    bullets: [
      'In 1903, Edwin S. Porter directed "The Great Train Robbery". Instead of showing one scene at a time, he cut back and forth between two locations!',
      'He showed robbers tying up a telegraph operator in one scene, then cut to police chasing them down horseback in another, building narrative suspense.',
      'Porter proved that the audience could understand two events happening at different places at the exact same time without getting confused.'
    ],
    layman: {
      title: 'Why This Changed Everything:',
      text: 'Before Porter, movies only showed one place at a time. Porter proved you can cut between two different places happening at the exact same time!'
    },
    image: {
      url: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=800&q=80',
      caption: "Edwin S. Porter's Cross-Cutting Parallel Action Example"
    }
  },
  // SLIDE 25
  {
    id: 'slide25',
    slideNum: 25,
    totalSlides: 51,
    type: 'single_topic',
    moduleTag: 'Module 02',
    title: '1918: Lev Kuleshov (The Mind Trick Experiment)',
    pioneerBadge: 'Pioneer: Lev Kuleshov (Russian Scientist)',
    topicTitle: 'The Kuleshov Effect (Context Changes Meaning)',
    bullets: [
      'Kuleshov filmed an actor with a neutral expression. He cut that face next to 3 different images:',
      'Face + Bowl of Soup = Audience says: "He looks hungry!"',
      'Face + Dead Child in Coffin = Audience says: "He looks sad!"',
      'Face + Pretty Woman = Audience says: "He looks in love!"',
      'Proved that the juxtaposition (order) of two shots creates a new psychological meaning in the viewer\'s mind that doesn\'t exist in the shots alone.'
    ],
    visualTrick: {
      title: 'The Big Discovery:',
      text: "The actor's face never changed! The audience created emotion inside their own heads based purely on the next picture!"
    },
    image: {
      url: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80',
      caption: 'Historical Kuleshov Experiment Visual Context'
    }
  },
  // SLIDE 26
  {
    id: 'slide26',
    slideNum: 26,
    totalSlides: 51,
    type: 'single_topic',
    moduleTag: 'Module 02',
    title: '1925: Sergei Eisenstein (Clash & Collision Editing)',
    pioneerBadge: 'Pioneer: Sergei Eisenstein (1925)',
    topicTitle: 'Soviet Montage Theory (1 + 1 = 3)',
    bullets: [
      "Eisenstein believed cutting shouldn't be peaceful—it should be a collision of two opposing shots to shock the viewer's brain!",
      'In "Battleship Potemkin", he cut between marching soldiers and a baby carriage rolling down steps to create intense panic.',
      'Soviet Montage Theory defined five methods of montage: Metric, Rhythmic, Tonal, Overtonal, and Intellectual to manipulate audience emotions.'
    ],
    layman: {
      title: 'Math Metaphor:',
      text: 'Shot A (Soldier with Gun) + Shot B (Crying Baby) = Shot C in your brain (Fear & Outrage!).'
    },
    image: {
      url: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=800&q=80',
      caption: 'Soviet Intellectual Montage Collision Example'
    }
  },
  // SLIDE 27
  {
    id: 'slide27',
    slideNum: 27,
    totalSlides: 51,
    type: 'single_topic',
    moduleTag: 'Module 02',
    title: '1924: Iwan Serrurier (The Moviola Machine)',
    pioneerBadge: 'Inventor: Iwan Serrurier (1924)',
    topicTitle: 'The First Movie Preview Machine',
    bullets: [
      'Before 1924, editors held film strips up to a magnifying glass over light bulbs to see frames! It was painful and slow.',
      'Serrurier invented the Moviola—a machine with a tiny glass screen and foot pedals where editors could view film in motion!',
      'This changed editing from a blind manual cut process into an interactive visual preview workbench, standardizing Hollywood workflow.'
    ],
    keyInsight: {
      title: 'Why It Prevailed:',
      text: 'The Moviola became the standard viewing workbench in Hollywood studios for over 50 years until digital screens arrived!'
    },
    image: {
      url: 'https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?auto=format&fit=crop&w=800&q=80',
      caption: 'Upright Moviola Film Viewing & Editing Workbench'
    }
  },
  // SLIDE 28
  {
    id: 'slide28',
    slideNum: 28,
    totalSlides: 51,
    type: 'single_topic',
    moduleTag: 'Module 02',
    title: 'Physical Film Splicing (Razor Blades & Glue)',
    topicTitle: 'Literal Cut & Paste on Film Strips',
    bullets: [
      'Old-school editing was a manual trade. Editors sat at tables with literal razor blades, special glue, and tape blocks.',
      'They chopped physical celluloid film strips, glued them together, and hung unused pieces in cloth-lined Trim Bins using clothes pins!',
      'This manual workflow meant mistakes were very costly, requiring chemical tape splicing and physical handling of raw negatives.'
    ],
    layman: {
      title: 'Where "Bin" Comes From:',
      text: 'That\'s why digital folders in Premiere Pro are still called "Bins" today! They are named after those physical cloth bins from 100 years ago!'
    },
    image: {
      url: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80',
      caption: 'Physical 35mm Celluloid Film Splicing & Trim Bins'
    }
  },
  // SLIDE 29
  {
    id: 'slide29',
    slideNum: 29,
    totalSlides: 51,
    type: 'single_topic',
    moduleTag: 'Module 02',
    title: '1956: Charles Ginsburg (Magnetic Videotape)',
    pioneerBadge: 'Pioneer: Charles Ginsburg & Ampex (1956)',
    topicTitle: 'Replacing Glass Film with Magnetic Tape',
    bullets: [
      'In 1956, Ampex invented the VR-1000—the first machine to record video onto magnetic tape instead of developing film in chemical baths.',
      'TV channels could now record live TV shows and broadcast them immediately without waiting days for chemical film processing!',
      'Magnetic tape editing was performed by slicing the tape at precise edit points, requiring audio sync sync track alignments.'
    ],
    image: {
      url: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&w=800&q=80',
      caption: 'Ampex Magnetic Broadcast Videotape Console'
    }
  },
  // SLIDE 30
  {
    id: 'slide30',
    slideNum: 30,
    totalSlides: 51,
    type: 'single_topic',
    moduleTag: 'Module 02',
    title: '1971: CMX 600 (The $300,000 Computer Controller)',
    pioneerBadge: 'Milestone: CMX Systems (1971)',
    topicTitle: 'The First Computer-Assisted Tape Editing',
    bullets: [
      'The CMX 600 was a giant computer system using light pens to point at screen monitors and trigger tape decks automatically.',
      'It cost over $300,000 per machine, so only rich TV networks could buy one, but it introduced computer-assisted editing!',
      'Instead of cutting tapes manually, the CMX generated an Edit Decision List (EDL) which commanded mechanical players to splice tapes.'
    ],
    image: {
      url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
      caption: 'Early Computer Controller Terminal Concept'
    }
  },
  // SLIDE 31
  {
    id: 'slide31',
    slideNum: 31,
    totalSlides: 51,
    type: 'single_topic',
    moduleTag: 'Module 02',
    title: '1989: Bill Warner & Avid (Digital Computer Age)',
    pioneerBadge: 'Founder: Bill Warner (Avid, 1989)',
    topicTitle: 'Digitizing Video onto Macintosh Hard Drives',
    bullets: [
      'Bill Warner introduced Avid Media Composer on Macintosh computers, turning recorded video into digital files on hard drives.',
      'It created the multi-track timeline, visual timeline tracks, and instant trimming that we still use in software today!',
      'Digitizing video eliminated tape wear, allowed random access to frames, and laid the foundation for modern NLE interfaces.'
    ],
    image: {
      url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
      caption: 'Digital Multi-Track Timeline on Macintosh Workstation'
    }
  },
  // SLIDE 32
  {
    id: 'slide32',
    slideNum: 32,
    totalSlides: 51,
    type: 'single_topic',
    moduleTag: 'Module 02',
    title: '1991: Randy Ubillos & Adobe Premiere 1.0',
    pioneerBadge: 'Creator: Randy Ubillos (Adobe, 1991)',
    topicTitle: 'Video Editing for Everyday Desktop PCs',
    bullets: [
      'In December 1991, Randy Ubillos released Adobe Premiere 1.0 for Apple Mac computers.',
      'Before Premiere, editing required $100,000 Hollywood equipment. Premiere allowed students and creators to edit video on everyday home PCs!',
      'It democratized the film industry, opening digital post-production tools to content creators, students, and independent filmmakers globally.'
    ],
    image: {
      url: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80',
      caption: 'Desktop PC Video Editing Software Workspace'
    }
  },
  // SLIDE 33
  {
    id: 'slide33',
    slideNum: 33,
    totalSlides: 51,
    type: 'single_topic',
    moduleTag: 'Module 02',
    title: 'Modern Era: AI Speech & Cloud Workflows',
    topicTitle: 'Editing Video by Editing Text Transcripts',
    bullets: [
      'Today, NLE software uses Artificial Intelligence to automatically generate speech transcripts of your video clips.',
      'If you delete a word in the text transcript, the software automatically cuts that word out of the video clip instantly! This is called text-based editing.',
      'Cloud integrations also allow remote teams to collaborate on the same editing timeline simultaneously from anywhere in the world.'
    ],
    visualTrick: {
      title: 'AI Magic:',
      text: 'Editors no longer spend hours hunting for dialogue. You type a keyword in the search bar, and AI jumps directly to that frame!'
    },
    image: {
      url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      caption: 'AI Automated Text-Based Editing Example'
    }
  },
  // SLIDE 34
  {
    id: 'slide34',
    slideNum: 34,
    totalSlides: 51,
    type: 'section_break',
    sectionNum: 'Module 03',
    title: 'NLE Software Interface Anatomy',
    description: 'Demystifying the video editing workspace: understanding the 4 major screen quadrants and essential keyboard tools.'
  },
  // SLIDE 35
  {
    id: 'slide35',
    slideNum: 35,
    totalSlides: 51,
    type: 'single_topic',
    moduleTag: 'Module 03',
    title: 'The 4-Quadrant Screen Layout (The 4 Rooms)',
    topicTitle: 'Every Video Software Uses These 4 Windows',
    bullets: [
      'Whether you open Adobe Premiere Pro, Final Cut Pro, or DaVinci Resolve, the screen is always split into 4 functional rooms:',
      'Quadrant 1 (Bottom Left): Project Panel (Storage Bin) where all raw media assets are imported and organized.',
      'Quadrant 2 (Top Left): Source Monitor (Inspection Room) for previewing and trimming raw clips.',
      'Quadrant 3 (Top Right): Program Monitor (Final Movie Screen) showing live playback of your active timeline.',
      'Quadrant 4 (Bottom Right): Timeline Canvas (Workbench) where video and audio assets are stacked and arranged.'
    ],
    image: {
      url: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80',
      caption: 'Standard 4-Quadrant NLE Software Screen Architecture'
    }
  },
  // SLIDE 36
  {
    id: 'slide36',
    slideNum: 36,
    totalSlides: 51,
    type: 'single_topic',
    moduleTag: 'Module 03',
    title: 'Quadrant 1: Project Panel (The Organized Closet)',
    topicTitle: 'Where All Your Files Live',
    bullets: [
      'The Project Panel (Bottom-Left) holds all raw video files, music audio tracks, logos, and photos imported from your computer.',
      'Good editors keep files organized using color-coded digital folders called Bins (e.g., 01_FOOTAGE, 02_AUDIO, 03_TITLES) to prevent chaos.',
      'Searching, sorting, and tagging assets in this panel saves hours of search time during complex narrative edits.'
    ],
    layman: {
      title: 'Toy Box Analogy:',
      text: 'The Project Panel is like a toy box. Before you start playing, you dump all your toys inside so you know where everything is stored!'
    },
    image: {
      url: 'https://images.unsplash.com/photo-1586075010923-2dd45e9b2d4f?auto=format&fit=crop&w=800&q=80',
      caption: 'Organizing Raw Assets Inside Project Bins'
    }
  },
  // SLIDE 37
  {
    id: 'slide37',
    slideNum: 37,
    totalSlides: 51,
    type: 'single_topic',
    moduleTag: 'Module 03',
    title: 'Quadrant 2: Source Monitor (The Fitting Room)',
    topicTitle: 'Testing & Trimming Clips Before Placing Them',
    bullets: [
      'Double-clicking a clip in the Project Panel opens it inside the Source Monitor (Top-Left) for isolated inspection.',
      'Press [I] on your keyboard to mark an In-Point (Start) and [O] to mark an Out-Point (End) to trim away bad footage before dragging it to the timeline.',
      'Allows you to drag only the video track, only the audio track, or both tracks simultaneously using the small track icons.'
    ],
    visualTrick: {
      title: 'The Fitting Room Analogy:',
      text: 'You try on clothes in a fitting room before buying them. The Source Monitor lets you test a clip and trim bad parts before putting it in your main movie!'
    },
    image: {
      url: 'https://images.unsplash.com/photo-1503792501406-2c40da09e1e2?auto=format&fit=crop&w=800&q=80',
      caption: 'Setting In/Out Trimming Points in Source Window'
    }
  },
  // SLIDE 38
  {
    id: 'slide38',
    slideNum: 38,
    totalSlides: 51,
    type: 'single_topic',
    moduleTag: 'Module 03',
    title: 'Quadrant 3: Program Monitor (The Cinema Screen)',
    topicTitle: "Your Movie's Live Output Display",
    bullets: [
      'The Program Monitor (Top-Right) shows live playback of whatever sits directly under the playhead blue line on your timeline.',
      'It includes overlay guides like Action Safe (90%) and Title Safe (80%) lines so text isn\'t cut off on old CRT television screens!',
      'Features playback resolution scaling (e.g., 1/2 or 1/4 quality) to prevent preview stuttering on slower computer processors.'
    ],
    image: {
      url: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
      caption: 'Program Output Screen with Title Safe Margins'
    }
  },
  // SLIDE 39
  {
    id: 'slide39',
    slideNum: 39,
    totalSlides: 51,
    type: 'single_topic',
    moduleTag: 'Module 03',
    title: 'Quadrant 4: Multi-Track Timeline (The Sandwich Workbench)',
    topicTitle: 'Arranging Clips Chronologically',
    bullets: [
      'The Timeline Canvas (Bottom-Right) lays out video clips left-to-right along a time ruler (00:00:00:00).',
      'Video Tracks (V1, V2, V3): Higher tracks cover up lower tracks. The top layer always takes visual priority, acting like overlay stickers.',
      'Audio Tracks (A1, A2, A3): All audio tracks play together at the exact same time, allowing music, voiceovers, and sound effects to mix.'
    ],
    layman: {
      title: 'Sandwich Layer Analogy:',
      text: 'Top video track V2 is like cheese placed over meat V1. You only see the top cheese, but you hear both audio layers below!'
    },
    image: {
      url: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80',
      caption: 'Multi-Track Video and Audio Stacking Canvas'
    }
  },
  // SLIDE 40
  {
    id: 'slide40',
    slideNum: 40,
    totalSlides: 51,
    type: 'single_topic',
    moduleTag: 'Module 03',
    title: 'Tool 1: Selection Tool [Key V] (Your Virtual Hand)',
    topicTitle: 'Default Arrow Pointer',
    bullets: [
      'Shortcut [V]: The main pointer tool used to click, select, drag, move, and reposition clips on your timeline workbench.',
      "Whenever you don't know what tool to use, press [V] to return to the safe default arrow pointer.",
      'Allows you to resize clips by dragging their edge borders, select multiple items with marquee select, and move blocks of footage.'
    ],
    layman: {
      title: 'Virtual Hand:',
      text: 'Think of key [V] as extending your physical hand onto the screen to grab and move clips around!'
    },
    image: {
      url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      caption: 'Using Selection Tool [V] to Move Timeline Clips'
    }
  },
  // SLIDE 41
  {
    id: 'slide41',
    slideNum: 41,
    totalSlides: 51,
    type: 'single_topic',
    moduleTag: 'Module 03',
    title: 'Tool 2: Razor Cut Tool [Key C] (Your Virtual Scissors)',
    topicTitle: 'Slicing Clips in Half',
    bullets: [
      'Shortcut [C]: Turns your mouse cursor into a razor blade icon to cut clips into separate pieces at any frame position.',
      'Used to slice out unwanted coughs, awkward pauses, or speaking mistakes in recorded interview clips.',
      'Hold the Shift key while using the Razor tool to slice across all video and audio tracks simultaneously at the same frame.'
    ],
    visualTrick: {
      title: 'Pair with Key V:',
      text: 'Press [C] to make two cuts around a mistake, then press [V] to select the mistake clip and hit Delete!'
    },
    image: {
      url: 'https://images.unsplash.com/photo-1503792501406-2c40da09e1e2?auto=format&fit=crop&w=800&q=80',
      caption: 'Cutting Timeline Clips into Segments with Razor Tool [C]'
    }
  },
  // SLIDE 42
  {
    id: 'slide42',
    slideNum: 42,
    totalSlides: 51,
    type: 'single_topic',
    moduleTag: 'Module 03',
    title: 'Ripple [B] & Rolling [N] (Dynamic Magnet Trimmers)',
    topicTitle: 'Trimming Without Leaving Empty Gaps',
    bullets: [
      'Ripple Edit [B]: Trims a clip and automatically pulls all remaining clips behind it forward so no empty black gaps are left on the timeline.',
      'Rolling Edit [N]: Moves the cut border between two adjacent clips at the same time without changing the total duration of the timeline.',
      'These tools save editors from manually selecting and dragging hundreds of clips forward after trimming a single frame.'
    ],
    layman: {
      title: 'Magnet Analogy:',
      text: 'Ripple Edit acts like a magnet. When you delete a clip segment, it snaps the rest of the timeline together instantly!'
    },
    image: {
      url: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80',
      caption: 'Ripple Edit [B] Auto-Closing Timeline Black Gaps'
    }
  },
  // SLIDE 43
  {
    id: 'slide43',
    slideNum: 43,
    totalSlides: 51,
    type: 'single_topic',
    moduleTag: 'Module 03',
    title: 'Audio Metering (The Traffic Light Loudness Rule)',
    topicTitle: 'Decibels & Avoiding Ear-Bleeding Distortion',
    bullets: [
      'In digital audio, 0 dB is the absolute maximum ceiling. If audio touches 0 dB, it clips and turns into harsh static digital distortion.',
      'Voice / Speech Target: Keep voice volume peaking between -6 dB and -12 dB (Green to Yellow zone) so it is clear and punchy.',
      'Background Music Target: Lower background music down to -18 dB to -24 dB so it supports the speech track without competing with it.'
    ],
    visualTrick: {
      title: 'Traffic Light Metering Rule:',
      text: 'Green is good, Yellow is loud and clear, RED is DANGER! Never let your audio meters hit red 0 dB!'
    },
    image: {
      url: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80',
      caption: 'Audio Peak Metering Decibel Green-Yellow-Red Zones'
    }
  },
  // SLIDE 44
  {
    id: 'slide44',
    slideNum: 44,
    totalSlides: 51,
    type: 'single_topic',
    moduleTag: 'Module 03',
    title: 'Keyframe Animation (Connecting Point A to Point B)',
    topicTitle: 'Animating Position, Scale, and Opacity',
    bullets: [
      'Keyframes let you animate visual movement or parameters across the timeline.',
      'You place Point A at second 1 (Small size) and Point B at second 3 (Large size). The computer automatically calculates the smooth zoom in between.',
      'Allows you to slide titles on screen, zoom into details, fade audio in/out, and create custom transition movements.'
    ],
    layman: {
      title: 'GPS Destination Analogy:',
      text: 'Keyframes are like setting Start Location A and Destination B on Google Maps. The computer drives the smooth path automatically!'
    },
    image: {
      url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
      caption: 'Setting Motion Keyframe Interpolation Points'
    }
  },
  // SLIDE 45
  {
    id: 'slide45',
    slideNum: 45,
    totalSlides: 51,
    type: 'single_topic',
    moduleTag: 'Module 03',
    title: 'The 6-Step Editing Recipe (Start to Finish)',
    topicTitle: 'Systematic Workflow Order',
    bullets: [
      '1. Ingest & Organize: Import assets into organized Project Bins (e.g., footage, audio, assets) so they are easy to locate.',
      '2. Assembly Cut: Lay clips down in rough chronological order, establishing the backbone plot without trimming details.',
      '3. Rough to Fine Cut: Trim bad footage, tighten dialogue pauses, and layer illustrative B-Roll overlays to cover cuts.',
      '4. Audio Mixing: Balance speech volume targets (-12dB) and lower background music tracks to maintain clarity.',
      '5. Color & Titles: Adjust brightness exposure, apply color correction, and add title nameplates or captions.',
      '6. Export & Master: Render the final timeline sequence into an .MP4 container using compression presets.'
    ],
    image: {
      url: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80',
      caption: 'Step-by-Step Post-Production Workflow Chart'
    }
  },
  // SLIDE 46
  {
    id: 'slide46',
    slideNum: 46,
    totalSlides: 51,
    type: 'single_topic',
    moduleTag: 'Module 03',
    title: 'Codecs vs. Containers (Gift Wrapping vs. Present)',
    topicTitle: 'Understanding Export Formats',
    bullets: [
      'Codec (Compressor): The invisible software engine that shrinks massive video files down (e.g., H.264 is the web standard).',
      'Container Format: The file box extension holding video and audio tracks together in sync (e.g., .MP4, .MOV, .AVI).',
      'Choosing the right format balance is crucial: H.264/MP4 offers high compatibility and small file sizes for web uploading, while ProRes/MOV provides high quality for editing.'
    ],
    layman: {
      title: 'The Gift Box Analogy:',
      text: 'The Container (.MP4) is the cardboard gift box. The Codec (H.264) is how tightly the sweater inside was folded to fit in the box!'
    },
    image: {
      url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
      caption: 'Exporting Preset H.264 MP4 Render Concept'
    }
  },
  // SLIDE 47
  {
    id: 'slide47',
    slideNum: 47,
    totalSlides: 51,
    type: 'section_break',
    sectionNum: 'Module 04',
    title: 'Practical Scenarios & Assessment',
    description: 'Applying Week 1 principles to fix real-world video editing problems and testing your knowledge.'
  },
  // SLIDE 48
  {
    id: 'slide48',
    slideNum: 48,
    totalSlides: 51,
    type: 'single_topic',
    moduleTag: 'Module 04',
    title: 'Scenario 1: Fixing Speech Stumbles with B-Roll Band-Aids',
    topicTitle: 'Problem & Fix',
    bullets: [
      'Problem: An interview speaker stumbles over their words: "I love editing... uh... cough... video." If you cut out the cough, their face jumps awkwardly on screen (Jump Cut!).',
      'Solution: Cut out the cough on the audio track, slice the video, and place a 3-second B-Roll clip on Track V2 directly over the cut! This masks the edit.',
      'The background audio remains smooth, and the viewer sees relevant B-Roll video, making the cut completely invisible.'
    ],
    visualTrick: {
      title: 'B-Roll Band-Aid:',
      text: 'The audio remains smooth, and the viewer sees B-Roll video covering up the ugly cut jump!'
    },
    image: {
      url: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&w=800&q=80',
      caption: 'Masking Interview Speech Cuts using B-Roll Video Overlays'
    }
  },
  // SLIDE 49
  {
    id: 'slide49',
    slideNum: 49,
    totalSlides: 51,
    type: 'single_topic',
    moduleTag: 'Module 04',
    title: 'Scenario 2: Guiding the Eye in Fast Action Scenes',
    topicTitle: 'Problem & Fix',
    bullets: [
      'Problem: In a basketball video, Player 1 throws a pass on the far right side of screen in Shot A, but Shot B cuts to Player 2 catching the ball on the far left side, confusing audience eyes.',
      "Solution: Shift or crop Shot B slightly using motion parameters to align focal points, respecting Murch's Eye-Trace rule! This keeps the focal path simple.",
      'By aligning action focus zones between cuts, you prevent viewer disorientation and ensure the visual flow feels natural and kinetic.'
    ],
    image: {
      url: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=800&q=80',
      caption: 'Realigning Focal Points to Keep Audience Eye-Trace Natural'
    }
  },
  // SLIDE 50
  {
    id: 'slide50',
    slideNum: 50,
    totalSlides: 51,
    type: 'single_topic',
    moduleTag: 'Module 04',
    title: 'Week 1 Visual Mastery Self-Checklist',
    topicTitle: 'Can You Explain These Simple Concepts?',
    bullets: [
      'Linear vs. NLE: Typewriter tape editing vs. Word Processor drag-and-drop. Understand the differences in speed, media accessibility, and safety.',
      'A-Roll vs. B-Roll: Lead singer voice vs. Picture book illustrations. Know how they layer to form the story structure.',
      "Murch's #1 Rule: Emotion (51%) beats technical perfection! Always prioritize performance over matching minor details.",
      '4 Screen Quadrants: Storage Closet (Project), Fitting Room (Source), Cinema Screen (Program), Sandwich Workbench (Timeline).',
      'Tool Keys: Key [V] (Hand/Selection pointer) and Key [C] (Scissors/Razor blade cutter).'
    ],
    image: {
      url: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80',
      caption: 'Visual Week 1 Competency Verification'
    }
  },
  // SLIDE 51
  {
    id: 'slide51',
    slideNum: 51,
    totalSlides: 51,
    type: 'single_topic',
    moduleTag: 'Module 04',
    title: 'Quiz Preview & Week 2 Teaser',
    topicTitle: 'Upcoming Quiz & Next Lesson',
    bullets: [
      'Quiz Preview: 15 simple questions testing historical pioneers (Porter, Kuleshov, Murch), NLE software screen quadrants, and green/yellow/red audio decibel targets.',
      'Week 2 Preview: "Narrative Structure and Storytelling"—3-act movie structures, pacing curves, and editing clips for emotional payoff!',
      'Review your key terms, keyboard shortcuts, and Walter Murch\'s rule priorities before taking the self-evaluation quiz.'
    ],
    image: {
      url: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80',
      caption: 'Week 2 Teaser: Narrative Structure & Movie Pacing'
    }
  }
];
