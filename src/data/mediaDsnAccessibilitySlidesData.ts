import { SlideData } from '../types/slide';

export const mediaDsnAccessibilitySlidesData: SlideData[] = [
  // ==========================================================================
  // SLIDE 1: COVER
  // ==========================================================================
  {
    id: 'a11y-slide1',
    slideNum: 1,
    totalSlides: 30,
    type: 'cover',
    moduleTag: 'Week 3 — INTERACTIVE MEDIA DESIGN',
    title: 'Accessibility in Interactive Design',
    subtitle: 'Designing for the Human Spectrum: Universal Design, WCAG 2.1/2.2 Standards, Multi-Sensory Interfaces, and Assistive Technology',
    metadata: [
      { label: 'Curriculum', val: 'Interactive Media Design (IT-MD1)' },
      { label: 'Core Theme', val: 'Accessibility & Universal Usability' },
      { label: 'Simulators', val: '5 Live Accessibility Studios' },
      { label: 'Standard', val: 'W3C WCAG 2.1/2.2 (Level AA)' }
    ]
  },

  // ==========================================================================
  // SLIDE 2: AGENDA
  // ==========================================================================
  {
    id: 'a11y-slide2',
    slideNum: 2,
    totalSlides: 30,
    type: 'single_topic',
    moduleTag: 'Roadmap',
    title: 'Module 3 Lecture Roadmap',
    topicTitle: 'What We Will Explore & Build Today',
    bullets: [
      'Unit 1 — The Case for Inclusivity: Understand why accessibility is not a compliance chore or an afterthought, but foundational to digital ethics, human dignity, and the "Curb-Cut Effect" that elevates usability for everyone.',
      'Unit 2 — The Human Spectrum of Ability: Deconstruct the persona spectrum across Visual, Auditory, Motor, and Cognitive modalities across permanent, temporary, and situational contexts.',
      'Unit 3 — Visual & Color Accessibility: Master luminance contrast mathematics (4.5:1 ratio), Color Vision Deficiency (CVD) simulation, and the cardinal rule: never rely solely on color to convey information.',
      'Unit 4 — Motor, Touch & Vestibular Design: Apply Fitts\'s Law to touch targets (48×48px standard), keyboard focus indicators (:focus-visible), and vestibular protection via @media (prefers-reduced-motion).',
      'Unit 5 — Assistive Tech & The P.O.U.R. Framework: Demystify screen readers, semantic HTML5, WAI-ARIA states, and the four international pillars: Perceivable, Operable, Understandable, and Robust.'
    ],
    layman: {
      title: 'The Inclusivity Analogy:',
      text: 'Building digital media without accessibility is like building a multi-million-dollar modern public library with revolving glass doors and sweeping marble staircases, but zero wheelchair ramps or Braille signage.'
    },
    keyInsight: {
      title: 'Our Weekly Mission',
      text: 'By the end of this module, you will design interactive products that don\'t exclude a single user, mastering both the scientific guidelines (WCAG) and the empathy-driven design techniques that power production web and mobile apps.'
    }
  },

  // ==========================================================================
  // SLIDE 3: LEARNING OBJECTIVES
  // ==========================================================================
  {
    id: 'a11y-slide3',
    slideNum: 3,
    totalSlides: 30,
    type: 'interactive_objectives',
    moduleTag: 'Competencies',
    title: 'Syllabus Learning Competencies',
    topicTitle: 'Master the 3 Pillars of Accessible Interactive Design:'
  },

  // ==========================================================================
  // SLIDE 4: SECTION BREAK - THE CASE FOR INCLUSIVITY
  // ==========================================================================
  {
    id: 'a11y-slide4',
    slideNum: 4,
    totalSlides: 30,
    type: 'section_break',
    sectionNum: 'UNIT 01',
    title: 'The Case for Inclusivity',
    description: 'Why accessibility (a11y) is foundational to digital ethics, universal usability, and modern software architecture.'
  },

  // ==========================================================================
  // SLIDE 5: THE CURB-CUT EFFECT IN DIGITAL MEDIA
  // ==========================================================================
  {
    id: 'a11y-slide5',
    slideNum: 5,
    totalSlides: 30,
    type: 'comparison',
    moduleTag: 'Universal Design',
    title: 'The "Curb-Cut Effect" in Digital Products',
    topicTitle: 'Designing for Edge Cases Solves Friction for Everyone',
    versusLeft: {
      title: 'Physical World Curb-Cut',
      bullets: [
        'Originally engineered in 1945 for World War II veterans in wheelchairs to roll from sidewalks onto street crossings.',
        'Immediate unintended universal benefit: parents pushing strollers, workers with heavy dollies, travelers with rolling luggage, and cyclists all used it daily.',
        'Became an indisputable civil engineering standard worldwide.'
      ]
    },
    versusRight: {
      title: 'Interactive Media Analog',
      bullets: [
        'Closed Captions: Engineered for deaf users; now used by 80%+ of smartphone viewers watching video in noisy commutes or quiet offices.',
        'High Contrast Mode: Built for low-vision; essential for anyone viewing an OLED screen in blinding tropical sunlight.',
        'Voice Dictation & Siri: Built for paralysis/motor impairment; embraced universally by hands-free drivers and busy professionals.'
      ]
    },
    keyInsight: {
      title: 'Universal Design Truth',
      text: 'When you solve a design problem for a user with severe constraints, you inadvertently create a dramatically superior, frictionless product for every other user.'
    }
  },

  // ==========================================================================
  // SLIDE 6: THE PERSONA SPECTRUM
  // ==========================================================================
  {
    id: 'a11y-slide6',
    slideNum: 6,
    totalSlides: 30,
    type: 'single_topic',
    moduleTag: 'Disability Models',
    title: 'The Persona Spectrum: Redefining Disability',
    topicTitle: 'Disability is a Mismatch Between Human and Environment',
    bullets: [
      'Permanent Impairment: A lifelong condition such as total blindness, profound deafness, limb loss, or cerebral palsy.',
      'Temporary Impairment: A short-term physical setback such as a broken wrist in a cast, dilated pupils after an eye exam, or an ear infection.',
      'Situational Limitation: An environmental restriction such as holding a baby with one hand, walking under intense sunlight glare, or streaming audio in a crowded subway without headphones.',
      'Design Implication: In the old medical model, disability belonged to the person. In modern interaction design, disability is a friction mismatch created by bad interface design.'
    ],
    layman: {
      title: 'The 100% Reality:',
      text: 'Every single human being will experience temporary or situational disability throughout their life, and all of us will experience gradual sensory and motor decline as we age.'
    },
    discussionPrompt: {
      question: 'Think of a situation this past week where your ability to interact with your phone was impaired by your environment. What feature helped or hindered you?',
      hint: 'Consider bright sunlight glare, having wet hands while cooking, or trying to read tiny fonts while walking.'
    }
  },

  // ==========================================================================
  // SLIDE 7: THE LEGAL, BUSINESS & SEO IMPERATIVE
  // ==========================================================================
  {
    id: 'a11y-slide7',
    slideNum: 7,
    totalSlides: 30,
    type: 'single_topic',
    moduleTag: 'Industry Mandates',
    title: 'The Legal, Commercial & SEO Imperatives',
    topicTitle: 'Why Global Tech Companies Enforce Accessibility',
    bullets: [
      'The 1.3 Billion Market: Over 16% of the global population lives with a significant disability. Ignoring accessibility voluntarily excludes trillions in global disposable income.',
      'Legal Liability & Lawsuits: In the US and EU, landmark civil lawsuits (e.g. Domino\'s Pizza ADA case) established that websites and apps are public accommodations subject to ADA Title III and the European Accessibility Act (EAA).',
      'Search Engine Optimization (SEO): Googlebot is essentially a blind, deaf user with a keyboard. Semantic HTML, clear heading hierarchies, alt text, and descriptive link anchors directly amplify search rankings.',
      'Operational Efficiency: Clean accessible code with semantic elements (<button>, <main>, <nav>) has smaller bundle sizes, faster load times, and fewer cross-browser rendering bugs.'
    ],
    keyInsight: {
      title: 'The Bottom Line',
      text: 'Accessibility is neither charity nor optional polish. It is a fundamental engineering requirement that protects companies from legal risk while maximizing audience reach.'
    }
  },

  // ==========================================================================
  // SLIDE 8: SECTION BREAK - VISUAL ACCESSIBILITY & COLOR SCIENCE
  // ==========================================================================
  {
    id: 'a11y-slide8',
    slideNum: 8,
    totalSlides: 30,
    type: 'section_break',
    sectionNum: 'UNIT 02',
    title: 'Visual Accessibility & Color Science',
    description: 'Mastering luminance contrast ratios, color blindness simulations, and multi-sensory signifiers.'
  },

  // ==========================================================================
  // SLIDE 9: COLOR CONTRAST SCIENCE & WCAG 2.1 THRESHOLDS
  // ==========================================================================
  {
    id: 'a11y-slide9',
    slideNum: 9,
    totalSlides: 30,
    type: 'single_topic',
    moduleTag: 'WCAG 1.4.3',
    title: 'Luminance Contrast Mathematics & Thresholds',
    topicTitle: 'How Relative Luminance Determines Readability',
    bullets: [
      'The WCAG Contrast Formula: Contrast is measured as (L1 + 0.05) / (L2 + 0.05), where L1 is the relative luminance of the lighter color and L2 is the darker color, spanning 1:1 (zero contrast) to 21:1 (pure black on pure white).',
      'Normal Body Text (< 18pt or < 14pt bold): Requires a minimum 4.5:1 ratio to pass WCAG 2.1 Level AA compliance.',
      'Large Text (≥ 18pt or ≥ 14pt bold): Requires a minimum 3.0:1 ratio because thicker letterforms are inherently easier for the human eye to resolve.',
      'UI Components & Form Borders: Interactive elements (input outlines, button borders, radio buttons) require a minimum 3.0:1 ratio against adjacent backgrounds (WCAG 1.4.11).',
      'Enhanced AAA Target: For government and safety-critical platforms, Level AAA demands a strict 7.0:1 ratio for normal text.'
    ],
    visualTrick: {
      title: 'The "Squint Test":',
      text: 'Close your eyes halfway and look at your UI. If low-contrast gray text disappears into the background canvas, it will be completely unreadable to anyone over age 40 or under outdoor sunlight.'
    }
  },

  // ==========================================================================
  // SLIDE 10: SIMULATOR 1 - WCAG CONTRAST RATIO MATRIX
  // ==========================================================================
  {
    id: 'a11y-slide10',
    slideNum: 10,
    totalSlides: 30,
    type: 'a11y_contrast_matrix',
    moduleTag: 'Live Studio Simulator 1',
    title: 'WCAG 2.1 Luminance Contrast Analyzer',
    topicTitle: 'Test and Auto-Remediate Text Readability in Real Time'
  },

  // ==========================================================================
  // SLIDE 11: COLOR VISION DEFICIENCY (CVD)
  // ==========================================================================
  {
    id: 'a11y-slide11',
    slideNum: 11,
    totalSlides: 30,
    type: 'single_topic',
    moduleTag: 'Color Science',
    title: 'Color Vision Deficiency (CVD) in Human Vision',
    topicTitle: 'How 1 in 12 Men and 1 in 200 Women Perceive Light',
    bullets: [
      'Protanopia (Red-Blind): The eye lacks long-wavelength (L) retinal cone cells. Reds appear dark, brownish, or olive; reds and greens blend indistinguishably.',
      'Deuteranopia (Green-Blind): The most prevalent CVD form (approx. 5-6% of biological males). Medium-wavelength (M) cones are absent. Greens, yellows, and reds collapse into muddy browns.',
      'Tritanopia (Blue-Blind): Rare genetic condition where short-wavelength (S) cones are defective. Blues appear greenish, and yellows look pink or light gray.',
      'Achromatopsia (Monochromacy): Complete absence of cone vision; the user perceives the entire digital world strictly in values of light and dark grayscale.',
      'UX Consequence: If your app uses a bare green circle for "Success" and a bare red circle for "Error", millions of users see identical brownish dots with zero clue what happened.'
    ],
    keyInsight: {
      title: 'The Designer Paradox',
      text: 'Designers spend hours debating whether to use emerald green or lime green, yet up to 8% of their male audience sees an entirely different palette.'
    }
  },

  // ==========================================================================
  // SLIDE 12: THE CARDINAL RULE - NEVER RELY ON COLOR ALONE
  // ==========================================================================
  {
    id: 'a11y-slide12',
    slideNum: 12,
    totalSlides: 30,
    type: 'comparison',
    moduleTag: 'WCAG 1.4.1',
    title: 'The Cardinal Rule: Never Rely on Color Alone',
    topicTitle: 'Enforce Multimodal Redundancy: Color + Shape + Text',
    versusLeft: {
      title: '❌ Bad Practice (Color Only)',
      bullets: [
        'Form input turns red on error without text: "Correct the fields highlighted in red."',
        'Status pills with colored dots but no text label or icon.',
        'Hyperlinks that are only distinguished from paragraph text by color, with no underline.',
        'Data visualization charts that only use red/green slices with no patterned hatching or callout labels.'
      ]
    },
    versusRight: {
      title: '✅ Accessible Universal Pattern',
      bullets: [
        'Input receives red border PLUS an exclamation mark [!] icon PLUS descriptive text: "Password must contain a number."',
        'Status pills show an icon ([✓] Check), a clear text label ("Active"), and a distinct border.',
        'Hyperlinks have consistent underlines (or 3:1 contrast + hover underline signifier).',
        'Charts use unique geometric markers (circles, triangles, squares) or high-contrast textures.'
      ]
    },
    layman: {
      title: 'The Traffic Light Solution:',
      text: 'Traffic lights don\'t rely purely on color: Red is ALWAYS top, Yellow is middle, Green is bottom. Position and shape provide redundant signifiers for color-blind drivers.'
    }
  },

  // ==========================================================================
  // SLIDE 13: SIMULATOR 2 - COLOR BLINDNESS LENS
  // ==========================================================================
  {
    id: 'a11y-slide13',
    slideNum: 13,
    totalSlides: 30,
    type: 'color_blindness_lens',
    moduleTag: 'Live Studio Simulator 2',
    title: 'Color Blindness Simulation Lens & Multimodal Studio',
    topicTitle: 'Inspect UI Signals Under Protanopia, Deuteranopia & Achromatopsia'
  },

  // ==========================================================================
  // SLIDE 14: SECTION BREAK - AUDITORY & MULTIMODAL SYSTEMS
  // ==========================================================================
  {
    id: 'a11y-slide14',
    slideNum: 14,
    totalSlides: 30,
    type: 'section_break',
    sectionNum: 'UNIT 03',
    title: 'Auditory & Multi-Sensory Systems',
    description: 'Closed captions, audio descriptions, and visual haptics for media interfaces.'
  },

  // ==========================================================================
  // SLIDE 15: CAPTIONS, SUBTITLES & TRANSCRIPTS
  // ==========================================================================
  {
    id: 'a11y-slide15',
    slideNum: 15,
    totalSlides: 30,
    type: 'single_topic',
    moduleTag: 'WCAG 1.2',
    title: 'Captions, Subtitles & Audio Descriptions',
    topicTitle: 'Ensuring Temporal Media is Fully Perceivable',
    bullets: [
      'Closed Captions (CC) vs Subtitles: Subtitles only translate spoken dialogue for foreign-language viewers. Captions include ALL critical audio cues: speaker identification, music genre, and sound effects (e.g. [Door slams shut], [Suspenseful violin chord]).',
      'Open Captions: Burned directly into the video stream pixels. Always visible and un-toggleable, ideal for public social feeds (TikTok, Instagram Reels).',
      'Text Transcripts: A complete written record containing verbatim dialogue and descriptive narrative. Crucial for podcasts and long webinars, enabling screen readers and search engines to index spoken knowledge.',
      'Audio Description (AD): A secondary audio narration track that describes essential visual information (gestures, scene changes, on-screen text) during natural dialogue pauses for visually impaired viewers.'
    ],
    discussionPrompt: {
      question: 'Have you ever tried watching an interactive video tutorial with the audio muted and auto-generated captions turned off? What critical context was lost?',
      hint: 'Notice how tone of voice, background sound cues, and unspoken facial actions disappear.'
    }
  },

  // ==========================================================================
  // SLIDE 16: MULTI-SENSORY FEEDBACK
  // ==========================================================================
  {
    id: 'a11y-slide16',
    slideNum: 16,
    totalSlides: 30,
    type: 'single_topic',
    moduleTag: 'Interaction Design',
    title: 'Multi-Sensory Feedback Loops in Gaming & Media',
    topicTitle: 'Pairing Audio Cues with Visual and Haptic Signifiers',
    bullets: [
      'The Game Timer Problem: A digital game sounds a rapid warning beep when time is running out. A deaf player receives zero feedback and abruptly fails.',
      'The Multi-Sensory Solution: Pair every audio alert with a synchronized visual pulse (screen border flash, shaking icon) and physical haptic vibration (on mobile/gamepads).',
      'Audio Waveform Displays: In media editing and podcast players, visual sound waves (loudness peaks, silences) enable deaf editors to identify edits and speech pauses visually.',
      'Avoid Auto-Playing Audio: Never launch background music or auto-playing video on page load. It clashes aggressively with screen reader speech synthesizers and causes severe cognitive distress.'
    ],
    keyInsight: {
      title: 'Cross-Modality Principle',
      text: 'Every critical system message must cross at least two sensory channels: If it can be heard, it must be seen. If it can be seen, it must be announced in text.'
    }
  },

  // ==========================================================================
  // SLIDE 17: SECTION BREAK - MOTOR, TOUCH & PHYSICAL OPERABILITY
  // ==========================================================================
  {
    id: 'a11y-slide17',
    slideNum: 17,
    totalSlides: 30,
    type: 'section_break',
    sectionNum: 'UNIT 04',
    title: 'Motor, Touch & Physical Operability',
    description: 'Fitts\'s Law, touch target hitboxes, keyboard navigation, and seizure prevention.'
  },

  // ==========================================================================
  // SLIDE 18: FITTS'S LAW & TOUCH TARGET DIMENSIONS
  // ==========================================================================
  {
    id: 'a11y-slide18',
    slideNum: 18,
    totalSlides: 30,
    type: 'single_topic',
    moduleTag: 'WCAG 2.5.5 / 2.5.8',
    title: 'Fitts\'s Law & The 48×48px Touch Target Rule',
    topicTitle: 'Designing for Thumbs, Tremors, and Mobile Dexterity',
    bullets: [
      'Fitts\'s Law: Movement Time (MT) = a + b × log₂(2D / W). The time required to rapidly move to a target area is a function of the distance (D) to the target and the width (W) of the target.',
      'The Human Thumb: The average adult finger pad covers an area roughly 10mm to 11mm wide, translating to approximately 48×48 CSS pixels on high-DPI screens.',
      'WCAG 2.2 Target Size (Minimum): Interactive targets must measure at least 24×24 CSS pixels with sufficient offset spacing (Level AA), with 48×48px strongly recommended for primary controls.',
      'Hitbox vs Icon Size: An icon can visually measure 20×20px, but its transparent clickable hitbox padding must span at least 48×48px to prevent frustrating missed taps.',
      'Motor Tremors & Arthritis: Users with Parkinson\'s, arthritis, or temporary hand shaking cannot pinpoint tiny 16px links without triggering disastrous mis-clicks.'
    ],
    layman: {
      title: 'The Doorbell Analogy:',
      text: 'Imagine a house with a doorbell button the size of a pinhead placed right next to an electric shock button. You would dread pressing it. That is what tiny web buttons feel like to users with motor tremors.'
    }
  },

  // ==========================================================================
  // SLIDE 19: SIMULATOR 3 - TOUCH TARGET HITBOX LAB
  // ==========================================================================
  {
    id: 'a11y-slide19',
    slideNum: 19,
    totalSlides: 30,
    type: 'touch_target_hitbox_lab',
    moduleTag: 'Live Studio Simulator 3',
    title: 'Fitts\'s Law Touch Target & Hitbox Lab',
    topicTitle: 'Test Your Motor Speed: 24px Micro-Targets vs 48px Compliant Hitboxes'
  },

  // ==========================================================================
  // SLIDE 20: KEYBOARD ACCESSIBILITY & THE FOCUS RING
  // ==========================================================================
  {
    id: 'a11y-slide20',
    slideNum: 20,
    totalSlides: 30,
    type: 'single_topic',
    moduleTag: 'WCAG 2.4.7',
    title: 'Keyboard Operability & The Sacred Focus Ring',
    topicTitle: 'Every Digital Control Must Be Navigable Without a Mouse',
    bullets: [
      'The Tab Navigation Order: Users press Tab and Shift+Tab to jump sequentially through links, buttons, and inputs. The tab order must follow logical reading hierarchy.',
      'The #1 Developer Crime: outline: none; Many junior designers remove the default browser focus ring because they think it looks ugly, leaving keyboard users completely blind to where they are on the page.',
      'Modern Solution (:focus-visible): CSS now allows you to style custom, beautiful focus rings that only trigger when a user is actively navigating via keyboard, leaving mouse clicks clean.',
      'Keyboard Traps: A user tabs into a modal dialogue, dropdown menu, or video player, and is unable to tab back out. Keyboard traps are an absolute Level A failure (WCAG 2.1.2).',
      'Skip to Main Content Link: Provide a hidden link at the very top of the page that becomes visible on focus, allowing keyboard users to skip past 50 repetitive navigation links directly to the content.'
    ],
    visualTrick: {
      title: 'Quick 10-Second Test:',
      text: 'Unplug your mouse right now. Can you complete the checkout form on your website using only Tab, Shift+Tab, and Enter? If not, your app is broken.'
    }
  },

  // ==========================================================================
  // SLIDE 21: AVOIDING SEIZURE TRIGGERS (THE 3-FLASH RULE)
  // ==========================================================================
  {
    id: 'a11y-slide21',
    slideNum: 21,
    totalSlides: 30,
    type: 'single_topic',
    moduleTag: 'WCAG 2.3.1',
    title: 'Photosensitive Seizure Prevention: The 3-Flash Rule',
    topicTitle: 'Protecting Users from Life-Threatening Neurological Triggers',
    bullets: [
      'Photosensitive Epilepsy: Flashing lights or rapid alternating visual patterns can trigger epileptic seizures in approximately 3% of people with epilepsy, particularly children and young adults.',
      'The 3-Flash Threshold: Web pages and media content must NOT contain anything that flashes more than three times in any one-second period (WCAG 2.3.1 Level A).',
      'The Infamous 1997 Pokémon Incident: Episode 38 of Pokémon broadcast a 4-second sequence of un-attenuated red and blue flashing lights, sending 685 Japanese viewers directly to emergency hospitals.',
      'Interactive Media Danger Zones: Strobe lighting in browser games, flashing promotional discount banners, and chaotic neon transitions in video editing reels must be strictly attenuated or user-toggleable.'
    ],
    keyInsight: {
      title: 'Safety Over Style',
      text: 'No dynamic visual effect, gaming particle burst, or animated brand splash is worth triggering an epileptic seizure in a student or customer.'
    }
  },

  // ==========================================================================
  // SLIDE 22: SECTION BREAK - COGNITIVE, VESTIBULAR & ASSISTIVE TECH
  // ==========================================================================
  {
    id: 'a11y-slide22',
    slideNum: 22,
    totalSlides: 30,
    type: 'section_break',
    sectionNum: 'UNIT 05',
    title: 'Cognitive Health & Assistive Technology',
    description: 'Vestibular motion safety, screen readers, semantic HTML5, and WAI-ARIA architectures.'
  },

  // ==========================================================================
  // SLIDE 23: VESTIBULAR HEALTH & PREFERS-REDUCED-MOTION
  // ==========================================================================
  {
    id: 'a11y-slide23',
    slideNum: 23,
    totalSlides: 30,
    type: 'single_topic',
    moduleTag: 'WCAG 2.3.3',
    title: 'Vestibular Disorders & prefers-reduced-motion',
    topicTitle: 'When Parallax and 3D Motion Cause Physical Nausea',
    bullets: [
      'The Vestibular System: The inner ear fluid mechanism that controls balance and spatial orientation. When the eyes perceive rapid 3D motion while the body remains stationary, severe motion sickness and vertigo occur.',
      'Triggers in Modern Web Apps: Aggressive multi-layer parallax scrolling, continuous 360° spinning icons, zooming 3D canvas cards, and high-velocity spring transitions.',
      'The CSS Media Query: @media (prefers-reduced-motion: reduce) detects whether the user has requested minimal motion in their operating system accessibility settings.',
      'Design Remedy: You do not need to strip out all emotion—simply swap aggressive spatial movements (rotations, slides, zooms) for subtle 150ms opacity fades.'
    ],
    code: `/* Standard Production Reduced Motion Rule */
@media (prefers-reduced-motion: reduce) {
  *, ::before, ::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}`
  },

  // ==========================================================================
  // SLIDE 24: SIMULATOR 4 - PREFERS-REDUCED-MOTION STUDIO
  // ==========================================================================
  {
    id: 'a11y-slide24',
    slideNum: 24,
    totalSlides: 30,
    type: 'prefers_reduced_motion_studio',
    moduleTag: 'Live Studio Simulator 4',
    title: 'Vestibular Health & Reduced Motion Studio',
    topicTitle: 'Compare Aggressive Spatial Animations with Safe Opacity Fades'
  },

  // ==========================================================================
  // SLIDE 25: SCREEN READERS & WAI-ARIA
  // ==========================================================================
  {
    id: 'a11y-slide25',
    slideNum: 25,
    totalSlides: 30,
    type: 'single_topic',
    moduleTag: 'Assistive Tech',
    title: 'Screen Readers & The Accessibility Tree',
    topicTitle: 'How Assistive Technology Translates Code into Spoken Sound',
    bullets: [
      'What is a Screen Reader?: Software (NVDA, JAWS on Windows; VoiceOver on Apple; TalkBack on Android) that converts on-screen text and interactive semantics into synthesized speech or refreshable Braille.',
      'The Accessibility Tree: The browser parses HTML and compiles an invisible "Accessibility Tree" containing element Roles (button, link, heading), Names (accessible labels), and States (expanded, checked, disabled).',
      'The Cardinal Law of ARIA: "Don\'t use ARIA if you can use native HTML." A native <button> has keyboard focus, space/enter activation, and role announcements built in automatically.',
      'WAI-ARIA Attributes: Used when building complex custom widgets. Essential attributes include aria-expanded="true/false" for accordions, aria-label="Close dialogue" for icon buttons, and aria-live="polite" for dynamic notification toasts.'
    ],
    layman: {
      title: 'The Div Button Trap:',
      text: '<div onClick="submit()">Click Me</div> looks like a button in CSS, but to a screen reader, it is just meaningless invisible text with zero indication that it can be clicked.'
    }
  },

  // ==========================================================================
  // SLIDE 26: SIMULATOR 5 - SCREEN READER AUDIT & FOCUS ANNOUNCER
  // ==========================================================================
  {
    id: 'a11y-slide26',
    slideNum: 26,
    totalSlides: 30,
    type: 'screen_reader_announcer',
    moduleTag: 'Live Studio Simulator 5',
    title: 'Screen Reader Speech Synthesizer & Focus Announcer',
    topicTitle: 'Experience Virtual Speech Synthesis and Audit Focus Traps'
  },

  // ==========================================================================
  // SLIDE 27: THE P.O.U.R. FRAMEWORK CHEAT SHEET
  // ==========================================================================
  {
    id: 'a11y-slide27',
    slideNum: 27,
    totalSlides: 30,
    type: 'comparison',
    moduleTag: 'WCAG Core',
    title: 'The P.O.U.R. Framework Cheat Sheet',
    topicTitle: 'The 4 Foundation Pillars of Web Content Accessibility Guidelines',
    versusLeft: {
      title: 'P & O: Perceivable & Operable',
      bullets: [
        'PERCEIVABLE: Information cannot be invisible to all senses. Provide text alternatives (alt text), synchronized captions, transcripts, and 4.5:1 color contrast.',
        'OPERABLE: Users must be able to operate the interface. Full keyboard access, visible focus rings, ample time limits, no keyboard traps, and 48px touch targets.'
      ]
    },
    versusRight: {
      title: 'U & R: Understandable & Robust',
      bullets: [
        'UNDERSTANDABLE: Interface behavior must be predictable. Clear microcopy, predictable navigation menus, forgiving input validation, and clear error recovery.',
        'ROBUST: Code must maximize compatibility with current and future user agents, screen readers, and assistive devices via valid semantic HTML.'
      ]
    },
    keyInsight: {
      title: 'Memorize P.O.U.R.',
      text: 'Every single accessibility guideline in the 100+ pages of the W3C WCAG specification maps directly to one of these four fundamental questions.'
    }
  },

  // ==========================================================================
  // SLIDE 28: KNOWLEDGE CHECK / AUDIT CHALLENGE
  // ==========================================================================
  {
    id: 'a11y-slide28',
    slideNum: 28,
    totalSlides: 30,
    type: 'knowledge_check',
    moduleTag: 'Knowledge Check',
    title: 'Self-Assessment: Identifying Inaccessible Patterns',
    topicTitle: 'Which of the following interface implementations represents a severe accessibility violation under WCAG 2.1 Level AA?'
  },

  // ==========================================================================
  // SLIDE 29: STUDIO LAB ASSIGNMENT
  // ==========================================================================
  {
    id: 'a11y-slide29',
    slideNum: 29,
    totalSlides: 30,
    type: 'essay_prompt',
    moduleTag: 'Studio Assignment',
    title: 'Lab Task: The 3-Step Accessibility Friction Audit',
    topicTitle: 'Audit a Real-World Interactive App & Document Remediations'
  },

  // ==========================================================================
  // SLIDE 30: CONCLUSION & EXIT REFLECTION
  // ==========================================================================
  {
    id: 'a11y-slide30',
    slideNum: 30,
    totalSlides: 30,
    type: 'exit_reflection',
    moduleTag: 'Course Wrap-Up',
    title: 'Exit Reflection: Designing for Every Human',
    topicTitle: 'How will accessibility principles transform the way you approach multimedia design?'
  }
];
