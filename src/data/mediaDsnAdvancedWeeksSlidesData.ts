import { SlideData } from '../types/slide';

// ============================================================================
// WEEK 14: DESIGNING FOR MOBILE INTERFACES & RESPONSIVE HCI (25 Comprehensive Slides)
// Patterns: Mobile-to-Desktop, Desktop-to-Mobile, 16px Font History, 8pt Grid, F/Z Layouts
// ============================================================================
export const mediaDsnMobileSlidesData: SlideData[] = [
  // SLIDE 1: COVER
  {
    id: 'mobui-s1',
    slideNum: 1,
    totalSlides: 25,
    type: 'cover',
    moduleTag: 'Week 14 — HUMAN-COMPUTER INTERACTION (IT-HCI1)',
    title: 'Designing for Mobile Interfaces & Responsive Cross-Platform HCI',
    subtitle: 'Mobile-to-Desktop, Desktop-to-Mobile, Breakpoints, The 1993 History of 16px Font Standards, The 8-Point Grid, and Gestalt Layout Engineering',
    metadata: [
      { label: 'Week', val: 'Week 14' },
      { label: 'Curriculum', val: 'Human-Computer Interaction (HCI)' },
      { label: 'Typography', val: 'Why 16px? 1993 NCSA CRT Math & Retinal Arc' },
      { label: 'Layouting', val: '8-Point Grid, F & Z Eye-Tracking, Gestalt' }
    ]
  },

  // SLIDE 2: OBJECTIVES & ROADMAP
  {
    id: 'mobui-s2',
    slideNum: 2,
    totalSlides: 25,
    type: 'interactive_objectives',
    moduleTag: 'Learning Competencies',
    title: 'Week 14 Learning Competencies',
    topicTitle: 'Core Learning Objectives in Responsive HCI',
    bullets: [
      'Master Cross-Platform Responsiveness: Compare Mobile-to-Desktop (Progressive Enhancement) with Desktop-to-Mobile (Graceful Degradation) across real-world workflows like Spotify, Twitter/X, and Amazon.',
      'Understand Standard Breakpoints & Viewports: Implement fluid grid systems scaling seamlessly from 320px compact mobile screens to 4K ultra-wide monitors.',
      'Uncover the History of 16px Font Sizing: Learn why Marc Andreessen and the 1993 NCSA Mosaic team used 12pt book print and 96 DPI CRT monitor physics to establish the permanent 16px web baseline.',
      'Neutralize the iOS 16px Auto-Zoom Penalty: Understand why Apple WebKit forces a 130% camera zoom on inputs < 16px and how to design immune checkout and registration forms.',
      'Implement the 8-Point Grid System: Discover how 8pt spacing eliminates fractional sub-pixel anti-aliasing blur across 1.5x (Android/Windows) and 2x/3x (Retina) display densities.',
      'Apply Ergonomic Layout Patterns: Deploy the Nielsen Norman F-Pattern (text scanning), the Z-Pattern (landing pages), and Gestalt grouping laws in modern production apps.'
    ],
    layman: {
      title: 'The Multi-Device Reality:',
      text: 'Users do not experience websites on a single screen. A student in Manila starts browsing Shopee on an iPhone 13 while riding an LRT train, continues comparing specs on an iPad during class, and completes checkout on a 27-inch desktop at home. Responsive HCI guarantees zero broken layouts, zero missing buttons, and zero disorientation across that physical journey.'
    },
    keyInsight: {
      title: 'HCI Principle',
      text: 'Responsive design is not simply resizing CSS boxes with percentages. It is the physiological science of adapting touch ergonomics, cognitive density, and reading geometry to the human body in motion.'
    }
  },

  // SLIDE 3: THUMB ZONE ERGONOMICS
  {
    id: 'mobui-s3',
    slideNum: 3,
    totalSlides: 25,
    type: 'single_topic',
    moduleTag: 'Ergonomics & Touch Mechanics',
    title: 'Steven Hoober’s "Thumb Zone" Ergonomics',
    topicTitle: 'Physical Hand Grips & Screen Reachability on 6.7" Displays',
    whatItDoes: 'Maps smartphone screen real estate into physiological zones based on the natural radial sweep of the human thumb.',
    whatIsGoingOn: 'Over 75% of all smartphone interactions rely entirely on the thumb. As flagship phones expanded from 3.5 inches to 6.7+ inches (iPhone Pro Max, Samsung Galaxy Ultra), the top 40% of the display became physically unreachable with one hand without risking a drop.',
    bullets: [
      'Natural Zone (Bottom 33%): Effortless thumb sweep. Primary interactive controls, sticky checkout bars (Grab/Shopee), and bottom navigation tabs MUST reside here.',
      'Stretch Zone (Middle 33%): Reachable with slight knuckle repositioning. Ideal for scrollable content cards, media carousels, and secondary filters.',
      'Hard-to-Reach / Danger Zone (Top 34%): Requires awkward two-handed cradling or dangerous hand-shifting. Strictly reserved for passive headers, status bars, and infrequent back arrows.',
      'Real-World Case Study (Apple Safari iOS 15): Apple moved the URL search bar from the top of the screen to the bottom after user research proved users could not reach the top bar with one hand on 6.7" screens.',
      'Grab & Foodpanda Implementation: In delivery apps, the "Place Order" and "Track Rider" floating action sheets stay permanently docked at the very bottom edge where thumbs naturally rest.'
    ],
    layman: {
      title: 'The Steering Wheel Analogy:',
      text: 'Car manufacturers put the horn, turn signals, and audio controls directly under your thumbs on the steering wheel, not up on the sun visor. Putting primary buttons at the top of a smartphone screen is like making a driver reach to the windshield wiper to honk the horn.'
    },
    discussionPrompt: {
      question: 'Why did Google Chrome and Apple Safari face initial user resistance when moving the URL bar to the bottom, despite it being ergonomically superior?',
      hint: 'Think about muscle memory, mental models, and the 25-year desktop habit of typing URLs at the top of a monitor.',
      talkingPoints: [
        'Desktop mental models conditioned users for decades to expect URLs at the very top.',
        'Users initially associated the bottom edge with ad banners or system home bars.',
        'Apple resolved this by making bottom tab bars swipeable to switch tabs, transforming ergonomic change into a high-value gesture feature.'
      ]
    },
    keyInsight: {
      title: 'Thumb Zone Axiom',
      text: 'Anchor primary conversion actions in the bottom third of the display. Every centimeter higher increases thumb fatigue, drop risk, and checkout abandonment.'
    }
  },

  // SLIDE 4: TOUCH TARGET SIZING & FITTS’S LAW
  {
    id: 'mobui-s4',
    slideNum: 4,
    totalSlides: 25,
    type: 'single_topic',
    moduleTag: 'Touch Target Guidelines',
    title: 'Touch Target Sizing & Fitts’s Law on Glass',
    topicTitle: 'The "Fat Finger" Problem and Hitbox Geometry',
    whatItDoes: 'Defines the minimum physical interactive bounding box (hitbox) needed for reliable human finger taps without precision pointing devices.',
    whatIsGoingOn: 'Unlike a desktop mouse cursor that targets a single 1×1 physical pixel, an adult human finger pad covers an area of 10mm to 14mm on mobile glass, with high vibration and micro-jitter.',
    bullets: [
      'Apple Human Interface Guidelines (HIG): Minimum 44 × 44 pt interactive touch target.',
      'Google Material Design 3: Minimum 48 × 48 dp (roughly 9mm physical size) with 8dp separation spacing.',
      'W3C WCAG 2.2 Success Criterion 2.5.8 (Target Size Minimum): Mandates at least 24 × 24 CSS pixels, but Level AAA recommends 44 × 44 pixels.',
      'Visual Icon vs. Clickable Hitbox: A search icon may appear as a sleek 18 × 18px graphic, but its transparent clickable wrapper (CSS padding) must measure at least 48 × 48px to prevent missed taps.',
      'Real-World Example (Shopee Checkout): Notice how Shopee makes the "Place Order" button span the entire 100% width of the mobile screen with 52px height—making it physically impossible for a user to miss the target!',
      'Destructive Spacing Rule: Always keep at least 12px to 16px of negative space between conflicting actions (e.g. "Save Order" vs "Cancel Order") to prevent catastrophic accidental misclicks.'
    ],
    layman: {
      title: 'The Light Switch Analogy:',
      text: 'Imagine if light switches in your house were tiny needle pins instead of wide plastic rocker plates. In the dark or when in a hurry, you would constantly miss or hurt your fingers. Generous touch hitboxes ensure you hit the target effortlessly on the first try.'
    },
    discussionPrompt: {
      question: 'Have you ever tried tapping a tiny "x" icon to close a popup on your phone, only to accidentally tap the ad itself? What HCI flaw caused this?',
      hint: 'Compare the visual size of the "x" with its clickable hitbox boundary.',
      talkingPoints: [
        'The developer made the clickable boundary identical to the 12px visual icon, with zero padding.',
        'Finger pads span 10mm–14mm, spilling outside the hitbox onto the adjacent advertising link.',
        'Violates WCAG 2.5.8 and destroys user trust through perceived deceptive manipulation.'
      ]
    },
    keyInsight: {
      title: 'Hitbox Rule',
      text: 'Visual size is for aesthetics; hitbox size is for human anatomy. An element can look small, but its interactive hit target must never be under 48 × 48px.'
    }
  },

  // SLIDE 5: MOBILE TO DESKTOP (PROGRESSIVE ENHANCEMENT)
  {
    id: 'mobui-s5',
    slideNum: 5,
    totalSlides: 25,
    type: 'single_topic',
    moduleTag: 'Cross-Platform Strategy',
    title: 'Mobile to Desktop: Progressive Enhancement',
    topicTitle: 'Starting from Extreme Constraints & Scaling Upward',
    whatItDoes: 'Architects digital interfaces by building for the most constrained mobile environment first, then progressively unlocking advanced features as screen size and power increase.',
    whatIsGoingOn: 'Mobile screens force product teams to eliminate cognitive clutter and prioritize the core 20% of features that deliver 80% of user value. Desktop layouts then expand naturally from this rock-solid core.',
    bullets: [
      'The Core Concept: Design for 320px–390px first: single vertical stream, touch gestures, high cellular latency, and strict battery constraints.',
      'Technical CSS Mechanics: Uses min-width media queries (@media (min-width: 768px)). Mobile devices only download lightweight baseline styles, delivering lightning-fast load times.',
      'Progressive Layering: As the viewport expands to 1024px and 1440px, the system introduces multi-column grids, persistent sidebars, hover previews, and keyboard shortcuts.',
      'Real-World Example (Spotify): Mobile Spotify focuses strictly on a single-column track list with a sticky bottom mini-player. On desktop (1440px), that same core progressively expands to reveal a 3-pane workstation: left playlist sidebar, center album art/lyrics, and right-hand Friend Activity feed.',
      'Real-World Example (Twitter / X): On mobile, Twitter displays a vertical feed with bottom navigation tabs. On desktop, the bottom navigation seamlessly reflows into a left-hand navigation rail with full text labels, while the right side gains trending topics and search.'
    ],
    layman: {
      title: 'The Motorcycle to Sports Car Analogy:',
      text: 'Mobile-first is like engineering a high-efficiency motorcycle engine first. Once the core engine runs flawlessly, you can add chassis panels, luxury seats, and air conditioning to build a sports car. You build strength from the inside out.'
    },
    discussionPrompt: {
      question: 'Why do companies that design mobile-first often report higher desktop conversion rates as well?',
      hint: 'What happens to confusing menus and unnecessary corporate clutter when forced into a 390px mobile screen?',
      talkingPoints: [
        'Mobile constraints force teams to cut useless fluff and clarify value propositions.',
        'When that streamlined clarity is brought to desktop, desktop users benefit from the reduced cognitive friction.',
        'Clean hierarchy converts better regardless of screen size.'
      ]
    },
    keyInsight: {
      title: 'Luke Wroblewski’s Axiom',
      text: 'Mobile-first is not merely a screen constraint; it is a mental discipline. Designing for constraints produces hyper-focused, superior software.'
    }
  },

  // SLIDE 6: DESKTOP TO MOBILE (GRACEFUL DEGRADATION)
  {
    id: 'mobui-s6',
    slideNum: 6,
    totalSlides: 25,
    type: 'single_topic',
    moduleTag: 'Cross-Platform Strategy',
    title: 'Desktop to Mobile: Graceful Degradation',
    topicTitle: 'Managing Complex Multi-Column Layout Reflow & Legacy Systems',
    whatItDoes: 'Begins with a full-featured, multi-column desktop application and systematically collapses, stacks, or simplifies components so it remains functional on smaller screens.',
    whatIsGoingOn: 'Legacy enterprise applications (banking back-offices, ERP dashboards, multi-tiered spreadsheets) cannot easily be re-architected mobile-first. They require strategic component reflow.',
    bullets: [
      'The Historical Context: Software built between 1995 and 2010 was optimized strictly for 1024×768 or 1920×1080 monitors with precision mouse hovering and physical keyboards.',
      'CSS Execution: Uses max-width media queries (@media (max-width: 1024px)) to progressively override and collapse wide horizontal layouts into vertical columns.',
      'Reflow Pattern 1 (Data Tables to Cards): A 10-column financial ledger table on desktop reflows on mobile into stacked cards with expandable key-value accordions.',
      'Reflow Pattern 2 (Complex Sidebar Filters): Real-World Example (Amazon / Shopee): Desktop Amazon displays a permanent left sidebar with 40 filter checkboxes (Brand, Price, Prime, Reviews). On mobile, this degrades gracefully into a single sticky "Filter & Sort (3)" pill button that opens a clean bottom-sheet modal.',
      'The Fatal Pitfall (Hiding with display: none): Simply hiding heavy 4MB desktop hero images or bloated table widgets on mobile with CSS still forces mobile phones to download those assets over 4G data, destroying mobile performance.'
    ],
    layman: {
      title: 'The Luggage Packing Analogy:',
      text: 'Graceful degradation is packing a giant steamer trunk for an ocean cruise, and then being told at the airport you can only bring a carry-on backpack. You are forced to frantically discard clothes at the boarding gate. It works in an emergency, but it is messy.'
    },
    discussionPrompt: {
      question: 'When is Desktop-to-Mobile Graceful Degradation justified over Mobile-First Progressive Enhancement?',
      hint: 'Consider enterprise tools like Figma, AutoCAD, Premiere Pro, or Bloomberg Terminals.',
      talkingPoints: [
        'Complex productivity software requires dense multi-window visual layouts that cannot realistically be operated on a 6-inch phone.',
        'Mobile experiences for these tools serve as lightweight companions (reviewing, commenting, approving) rather than full creation suites.',
        'Migrating a 15-year-old enterprise codebase is often economically viable only through graceful degradation.'
      ]
    },
    keyInsight: {
      title: 'Reflow Architecture Rule',
      text: 'Never "hide" desktop bloat with display: none. True graceful degradation transforms complex multi-column structures into mobile-native accordions, tabs, and bottom sheets.'
    }
  },

  // SLIDE 7: STANDARD BREAKPOINTS SPECTRUM
  {
    id: 'mobui-s7',
    slideNum: 7,
    totalSlides: 25,
    type: 'single_topic',
    moduleTag: 'Responsive Grid Standards',
    title: 'Standard Responsive Breakpoints Spectrum',
    topicTitle: 'Categorizing Hardware Viewports from 320px to 4K Displays',
    whatItDoes: 'Establishes standardized CSS viewport thresholds where application layout geometry shifts to accommodate physical display form factors.',
    whatIsGoingOn: 'Instead of designing for every single one of the 24,000+ distinct Android and iOS device models, HCI engineers group devices into 5 foundational breakpoint buckets.',
    bullets: [
      'Compact Mobile (320px – 480px): iPhone SE, standard Android smartphones. 1-column stream, 16px body text, sticky bottom action bar, 48px touch targets.',
      'Phablets & Foldables (481px – 768px): Large phones in landscape, Samsung Galaxy Z Fold. 1 to 2 adaptive columns, collapsible search bars.',
      'Tablets (769px – 1024px): iPad, Android tablets. 2 to 3 column cards, top navigation bar, split-view master-detail drawers.',
      'Laptops & Small Desktops (1025px – 1440px): MacBooks, 1080p office monitors. 3 to 4 columns, persistent left navigation sidebar, multi-panel layouts.',
      'Ultra-Wide Monitors (>1440px to 4K): 1440p, 4K monitors. CRITICAL HCI RULE: You MUST constrain content containers with max-width: 1280px or 1440px and margin: 0 auto; otherwise, lines of text will stretch across 3840 physical pixels, causing severe reader eye neck strain!'
    ],
    layman: {
      title: 'The Clothing Size Analogy:',
      text: 'Clothing manufacturers do not tailor a unique shirt for every individual citizen. They create standardized sizing: Small, Medium, Large, XL, and XXL. Responsive breakpoints are the standardized clothing sizes of the digital world.'
    },
    discussionPrompt: {
      question: 'What happens to a website on an ultra-wide 34-inch curved monitor if the developer forgets to set a max-width container?',
      hint: 'Imagine having to move your head from left to right like watching a tennis match just to read one sentence.',
      talkingPoints: [
        'Line lengths exceed 250 characters, far beyond human visual tracking capacity.',
        'The reader loses their place every time their eyes jump to the next line.',
        'Primary action buttons get pushed to the extreme opposite corners of the room.'
      ]
    },
    keyInsight: {
      title: 'Max-Width Rule',
      text: 'Responsive design does not mean stretching infinitely. Great responsive HCI expands gracefully up to 1280px–1440px, then centers itself to protect human reading ergonomics.'
    }
  },

  // SLIDE 8: INTERACTIVE VIEWPORT REFLOW LAB
  {
    id: 'mobui-s8',
    slideNum: 8,
    totalSlides: 25,
    type: 'responsive_viewport_reflow_lab',
    moduleTag: 'Interactive Studio',
    title: 'Cross-Platform Viewport & Reflow Lab',
    topicTitle: 'Test Mobile-First vs Desktop-First Across Live Viewports',
    whatItDoes: 'Simulates live viewport reflow across smartphone (375px), tablet (768px), and desktop (1200px) devices.',
    whatIsGoingOn: 'Allows engineers to test layout adaptation, observing how multi-column dashboard cards stack into single columns and how navigation migrates between sidebars and bottom bars.',
    bullets: [
      'Switch between Mobile (375px), Tablet (768px), and Desktop (1200px) viewports with one click.',
      'Toggle between Mobile-to-Desktop (Progressive Enhancement) and Desktop-to-Mobile (Graceful Degradation) logic.',
      'Observe live CSS container reflow, touch hitbox clearance, and component restructuring.',
      'Inspect how bottom tabs on mobile transform into persistent navigation sidebars on desktop monitors.'
    ],
    layman: {
      title: 'The Digital Wind Tunnel:',
      text: 'Just like aeronautical engineers test car and plane prototypes in a wind tunnel before production, responsive labs allow UI designers to test how layouts bend and reflow before shipping code to millions of users.'
    },
    keyInsight: {
      title: 'Reflow Principle',
      text: 'A layout is responsive only if it reflows without horizontal scrollbars, clipped text, or overlapping buttons at any viewport width.'
    }
  },

  // SLIDE 9: FLUID GRIDS & FLEXBOX/GRID
  {
    id: 'mobui-s9',
    slideNum: 9,
    totalSlides: 25,
    type: 'single_topic',
    moduleTag: 'Layout Mechanics',
    title: 'Fluid Grids, CSS Flexbox & CSS Grid in HCI',
    topicTitle: 'Proportional Fluidity Over Rigid Fixed Pixels',
    whatItDoes: 'Replaces hardcoded pixel widths with proportional, fractional units that automatically adjust to any screen width.',
    whatIsGoingOn: 'In 2010, Ethan Marcotte revolutionized web design by publishing the fluid grid formula: Target ÷ Context = Result. Today, modern CSS Grid and Flexbox automate this mathematical reflow natively in the browser.',
    bullets: [
      'The Ethan Marcotte Formula: target ÷ context = result. E.g., a 300px column inside a 960px container = (300 ÷ 960) = 31.25% width.',
      'CSS Flexbox (1-Dimensional Alignment): Ideal for toolbars, tab rows, and button bars where items need to space-between, center, or wrap naturally without rigid column tracks.',
      'CSS Grid (2-Dimensional Coordination): Controls rows and columns simultaneously. Perfect for Netflix/YouTube media catalogs and enterprise dashboards.',
      'The Auto-Fit Magic Formula: grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); This single line of CSS creates an infinitely responsive card grid that displays 1 column on phone, 2 on tablet, and 4 on desktop with ZERO media queries!',
      'CSS Clamp() for Fluid Spacing: font-size: clamp(1rem, 2.5vw, 2.5rem); allows headers to scale smoothly with screen size without abrupt media query snapping.'
    ],
    layman: {
      title: 'Water in a Vessel Analogy:',
      text: 'Fixed pixel layouts are like ice cubes—they maintain a rigid shape and shatter or spill over when forced into a smaller glass. Fluid CSS Grid layouts are like water—they take the exact shape of whatever container holds them.'
    },
    discussionPrompt: {
      question: 'Why is repeat(auto-fit, minmax(280px, 1fr)) considered superior to hardcoding three separate @media breakpoint rules?',
      hint: 'Think about code maintenance, foldable devices, and split-screen browser multitasking on iPad and Windows.',
      talkingPoints: [
        'Hardcoded breakpoints break when users resize windows in split-screen mode on an iPad or laptop.',
        'Auto-fit automatically calculates how many 280px cards fit into the current container in real time.',
        'Reduces CSS codebase size and eliminates breakpoint testing bugs.'
      ]
    },
    keyInsight: {
      title: 'Fluidity Axiom',
      text: 'Never hardcode fixed pixel widths on layout containers (e.g. width: 450px). Use max-width with percentages or CSS Grid minmax() to ensure natural fluidity.'
    }
  },

  // SLIDE 10: FLUID MEDIA & RETINA SCALING
  {
    id: 'mobui-s10',
    slideNum: 10,
    totalSlides: 25,
    type: 'single_topic',
    moduleTag: 'Media Optimization',
    title: 'Fluid Media, Retina Scaling & Art Direction',
    topicTitle: 'High-DPI Screen Density (@2x, @3x) and Responsive Images',
    whatItDoes: 'Ensures graphics, photos, and videos display razor-sharp on high-resolution displays without overloading mobile data connections.',
    whatIsGoingOn: 'Modern smartphones have Device Pixel Ratios (DPR) of 2.0 to 3.0 (@2x / @3x Retina). A 100×100 CSS pixel box contains 300×300 physical hardware pixels. Displaying a standard 1x image makes photos look blurry and pixelated, while serving an uncompressed 4K desktop photo to mobile wastes battery and bandwidth.',
    bullets: [
      'The Fluid Image Foundation: img, video { max-width: 100%; height: auto; } guarantees media elements never overflow outside their parent containers.',
      'The Resolution Switching Solution: Use the HTML5 srcset and sizes attributes to deliver 1x images (100KB) to low-end laptops, 2x (350KB) to MacBooks, and 3x to high-density smartphones.',
      'Art Direction with <picture>: On desktop, show a wide landscape image of a restaurant. On mobile, the wide image would make the food look microscopic—so the <picture> tag serves a tight, close-up crop of the dish!',
      'Next-Gen Modern Codecs: Modern formats like WebP and AVIF offer 30% to 50% smaller file sizes than legacy JPEG/PNG with zero perceptual loss in quality.',
      'Performance Impact on UX: Google research shows that 53% of mobile visits are abandoned if a page takes longer than 3 seconds to load. Loading desktop-sized 4MB images on mobile directly slashes e-commerce conversions.'
    ],
    layman: {
      title: 'The Billboard vs Wallet Photo Analogy:',
      text: 'Carrying a 4K desktop hero image on a phone is like carrying a 10-foot highway billboard in your wallet. It is unnecessarily heavy, impossible to unfold, and completely inappropriate for the handheld format.'
    },
    keyInsight: {
      title: 'Performance UX',
      text: 'High-DPI screens demand sharp graphics, but bandwidth is precious. Use srcset and modern WebP/AVIF formats to balance visual fidelity with instantaneous mobile loading.'
    }
  },

  // SLIDE 11: THE UNIVERSAL STANDARD: WHY 16PX?
  {
    id: 'mobui-s11',
    slideNum: 11,
    totalSlides: 25,
    type: 'single_topic',
    moduleTag: 'Typography Architecture',
    title: 'The Universal Standard: Why 16px is the Web Baseline',
    topicTitle: 'The Foundation of All Digital Screen Legibility',
    whatItDoes: 'Explains why 16px is the universal root font size across every modern web browser (Chrome, Safari, Firefox, Edge).',
    whatIsGoingOn: 'Browser engines standardize 1rem = 16px = 100% by default. Every relative CSS unit (rem, em) calculates its proportions from this foundation.',
    bullets: [
      'The Sovereign Baseline: All major browsers since the mid-1990s configure root html { font-size: 16px; } as their default factory setting.',
      'Relative Typography with REM: Using rem (Root EM) scales harmoniously: 1rem = 16px, 1.25rem = 20px, 1.5rem = 24px, 2rem = 32px.',
      'User Accessibility Freedom: When low-vision or elderly users change their operating system or browser font size to Large (20px) or Extra-Large (24px), websites styled with rem scale up proportionally without breaking the layout.',
      'The Fatal Anti-Pattern: Setting body { font-size: 13px; } or font-size: 14px; forcibly overrides the user’s accessibility preferences, making text painfully illegible for millions of readers.',
      'Mobile Body Reading Rule: Body paragraph text on mobile screens should never be set below 16px. Anything smaller causes immediate eye strain and forces users to pinch-zoom.'
    ],
    layman: {
      title: 'The Standard Railroad Gauge Analogy:',
      text: '16px is the standard railroad track gauge of the internet. Because all trains and railway tracks share the exact same 4-foot-8.5-inch width worldwide, trains travel across countries seamlessly without derailment. 16px is the universal track gauge of web typography.'
    },
    discussionPrompt: {
      question: 'Why do inexperienced junior designers frequently design body text at 12px or 13px in Figma, and what happens when that design is coded for real users?',
      hint: 'Junior designers inspect Figma on high-res monitors at 100% zoom with their faces 12 inches away.',
      talkingPoints: [
        'In Figma, 12px text looks sharp and stylish on a 27-inch 4K designer monitor.',
        'In the real world, users hold phones while walking in bright sunlight or read on budget 1080p office monitors.',
        '12px text causes immediate reading fatigue and forces older users to abandon the site.'
      ]
    },
    keyInsight: {
      title: 'Universal Rule',
      text: 'Respect the 16px root baseline. Use rem units so your typography respects user accessibility settings and remains crystal-clear across all hardware.'
    }
  },

  // SLIDE 12: THE DEEP HISTORY OF 16PX (1993 CRT MATH)
  {
    id: 'mobui-s12',
    slideNum: 12,
    totalSlides: 25,
    type: 'single_topic',
    moduleTag: 'Typography History',
    title: 'The Deep History of 16px: NCSA Mosaic & CRT Math',
    topicTitle: 'How 1990s Hardware Math Created the Permanent 16px Standard',
    whatItDoes: 'Traces the exact mathematical, hardware, and historical derivation of why 16 pixels became the global standard for body text.',
    whatIsGoingOn: 'The 16px standard was not picked randomly. It is the direct mathematical convergence of 500 years of printed book typography and 1990s cathode-ray tube (CRT) computer monitor physics.',
    bullets: [
      'The 1993 Graphical Web Genesis: Marc Andreessen and the NCSA Mosaic team developed the first graphical web browser in 1993, needing a default font size for body text.',
      'The Centuries-Old Print Baseline: Since Gutenberg and Aldus Manutius, books, newspapers, and academic publishing standardized on 12-point (12pt) typography for effortless human reading.',
      'The Typographical Point Definition: By international typesetting standards, 1 point = 1/72 of an inch. Therefore, 12pt body text = 12/72 = exactly 1/6 of an inch (4.23 mm) in physical print height.',
      'The 1990s Cathode-Ray Tube (CRT) Standard: Microsoft Windows and PC hardware manufacturers standardized early CRT computer monitors at 96 DPI (Dots Per Inch). (Apple Macintoshes used 72 DPI).',
      'The Exact Equation: (1/6 inch) × 96 pixels/inch = EXACTLY 16 PIXELS! Thus, 12pt printed book typography mathematically transformed into 16px on computer monitors.',
      'Historical Legacy: Because 16px matched the exact physical reading comfort of a printed novel on 96 DPI monitors, NCSA Mosaic, Netscape Navigator, Internet Explorer, and modern Chrome permanently hardcoded 16px as the universal web baseline.'
    ],
    layman: {
      title: 'The Metric System of the Web:',
      text: 'Just like the meter was originally defined as one ten-millionth of the distance from the Earth\'s equator to the North Pole, 16px was defined as the exact pixel height needed to recreate a 12pt printed novel page on a 1993 96-DPI computer monitor.'
    },
    discussionPrompt: {
      question: 'What would have happened if Marc Andreessen in 1993 had decided to set the default body font to 10px instead of 16px?',
      hint: 'Calculate: 10 pixels ÷ 96 DPI = 0.104 inches. Think about CRT phosphor masks and readability.',
      talkingPoints: [
        '10px on a 96 DPI monitor is only 2.6mm tall—letters would have blurred into unrecognizable blobs on early CRT screens.',
        'Users would have suffered extreme eyestrain, possibly slowing the adoption of the graphical World Wide Web.',
        '16px provided the exact visual comfort users were already accustomed to from reading physical newspapers.'
      ]
    },
    keyInsight: {
      title: 'Historical Math',
      text: '16px is not an arbitrary preference. It is (12pt ÷ 72pt/inch) × 96 DPI = 16px. It bridges 500 years of book printing with the physics of electronic displays.'
    }
  },

  // SLIDE 13: VISUAL ANGLE ERGONOMICS (READING DISTANCE)
  {
    id: 'mobui-s13',
    slideNum: 13,
    totalSlides: 25,
    type: 'single_topic',
    moduleTag: 'Visual Ergonomics',
    title: 'Visual Angle Ergonomics: 12" Book vs 24" Monitor',
    topicTitle: 'Why Screen Text Must Be Physically Larger Than Paper Text',
    whatItDoes: 'Applies human visual ergonomics and optical geometry to explain why digital screens require larger physical text than printed paper.',
    whatIsGoingOn: 'The human retina does not measure font size in physical millimeters; it measures the visual angle (degrees of arc) projected onto the back of the eye (fovea).',
    bullets: [
      'The Law of Visual Angle: Perceived size is inversely proportional to reading distance. If an object is twice as far away, it must be twice as large to project the exact same visual angle on the retina.',
      'Handheld Book Distance: A reader holds a printed novel 12 to 14 inches (30–35 cm) from their eyes. A 10pt–12pt font subtends roughly 0.3° to 0.35° of visual arc—the optimal human reading zone.',
      'Desktop Monitor Distance: A computer monitor sits 20 to 28 inches (50–70 cm) away on a desk—more than TWICE as far as a handheld book!',
      'The Geometric Requirement: Because the monitor is twice as far, text displayed on a screen must be physically larger than text in a book to project the identical 0.35° retinal arc.',
      'Mobile Smartphone Distance: Smartphones are typically held 14 to 16 inches away. 16px body text at 15 inches creates an ergonomic visual angle of ~0.33°, ensuring effortless reading without squinting or leaning forward.'
    ],
    layman: {
      title: 'The Highway Billboard Analogy:',
      text: 'Letters on an interstate highway billboard are 3 feet tall, while letters in your textbook are 3 millimeters tall. Both appear the exact same size to your eye because the billboard is 300 feet away while your textbook is 1 foot away! Distance dictates physical dimensions.'
    },
    keyInsight: {
      title: 'Visual Angle Law',
      text: 'Legibility is determined by visual angle, not pixel count. Because computer monitors sit at twice the distance of handheld books, screen typography must be proportionally larger.'
    }
  },

  // SLIDE 14: THE MOBILE IOS 16PX AUTO-ZOOM PENALTY
  {
    id: 'mobui-s14',
    slideNum: 14,
    totalSlides: 25,
    type: 'single_topic',
    moduleTag: 'Mobile UX Gotchas',
    title: 'The iOS 16px Auto-Zoom Penalty in Mobile Safari',
    topicTitle: 'How a 14px Input Font Breaks Mobile Checkout Layouts',
    whatItDoes: 'Deconstructs the Apple WebKit security/accessibility mechanism that forces mobile Safari to aggressively zoom in when users tap form fields styled < 16px.',
    whatIsGoingOn: 'To protect users with vision impairments from straining at microscopic form inputs, Apple programmed Mobile Safari to automatically zoom the viewport camera to 125%–130% whenever an input font-size is below 16px.',
    bullets: [
      'The Trigger: Any <input>, <select>, or <textarea> with CSS font-size: 14px (or smaller) triggers the WebKit camera zoom.',
      'The UX Disaster: When a user taps a coupon code or shipping address input on an e-commerce site, the mobile camera abruptly jerks forward. The horizontal layout shifts, cutting off headers, hiding the "Submit" or "Apply" button off-screen, and forcing users to awkwardly pinch-to-zoom back out.',
      'High Cart Abandonment: In e-commerce checkout flows, this jarring shift disorients users, triggers form validation errors, and causes significant cart abandonment.',
      'The Universal CSS Fix: Always set form inputs to at least 16px on mobile screens: input, select, textarea { font-size: 16px; }. This completely disarms the WebKit zoom trigger.',
      'Tailwind CSS Pro-Tip: Using text-base (16px) on mobile inputs and text-sm (14px) only on desktop viewports via md:text-sm guarantees a smooth, zoom-free mobile experience.'
    ],
    layman: {
      title: 'The Aggressive Magnifying Glass Analogy:',
      text: 'Imagine if you visited a bank, and every time you tried to sign a receipt, a security guard shoved a giant magnifying glass 1 inch in front of your face. You wouldn\'t be able to see the rest of the counter or the exit door. That is what iOS Safari does when inputs are smaller than 16px.'
    },
    discussionPrompt: {
      question: 'Why didn\'t Apple simply let developers disable zoom with maximum-scale=1.0 in the meta viewport tag?',
      hint: 'Consider accessibility laws and visually impaired users who legitimately need pinch-to-zoom.',
      talkingPoints: [
        'Disabling zoom via viewport meta tags breaks WCAG 1.4.4 (Resize Text) and violates accessibility compliance.',
        'Apple prioritized human accessibility rights over sloppy developer styling.',
        'The ethical and technical solution is to fix the font size to 16px, never disable user zoom controls.'
      ]
    },
    keyInsight: {
      title: 'The 16px Form Golden Rule',
      text: 'Never use font sizes under 16px on mobile inputs, selects, or textareas. 16px guarantees your mobile page stays locked at 100% viewport width without broken zoom shifts.'
    }
  },

  // SLIDE 15: MODULAR TYPE SCALES
  {
    id: 'mobui-s15',
    slideNum: 15,
    totalSlides: 25,
    type: 'single_topic',
    moduleTag: 'Typography Scales',
    title: 'The Modular Type Scale Hierarchy',
    topicTitle: 'Mathematical Harmonic Proportions in Visual Hierarchy',
    whatItDoes: 'Derives an entire harmonious typography system (H1, H2, H3, Body, Caption) from a single 16px base size multiplied by a consistent mathematical ratio.',
    whatIsGoingOn: 'Randomly picking font sizes (e.g. 13px, 17px, 23px, 31px) creates subconscious visual chaos. Modular scales use musical harmonic ratios to establish visual order and cognitive hierarchy.',
    bullets: [
      'Major Third (1.250 Ratio) — The Enterprise & Mobile Standard: Base 16px &rarr; 20px (H4) &rarr; 25px (H3) &rarr; 31.25px (H2) &rarr; 39px (H1). Perfect for dense mobile apps, dashboards, and SaaS tools where space is precious.',
      'Perfect Fourth (1.333 Ratio) — The Editorial & Blog Standard: Base 16px &rarr; 21.3px &rarr; 28.4px &rarr; 37.9px &rarr; 50.5px. Ideal for Medium blogs, news publications, and marketing sites.',
      'Golden Ratio (1.618 Ratio) — High Fashion & Luxury Branding: Base 16px &rarr; 25.9px &rarr; 41.9px &rarr; 67.8px. High dramatic contrast, best suited for portfolio titles and luxury landing pages.',
      'Tailwind CSS Typography: Tailwind\'s default scale (text-xs: 12px, text-sm: 14px, text-base: 16px, text-lg: 18px, text-xl: 20px, text-2xl: 24px) closely aligns with the Major Second and Major Third scales.',
      'Real-World Example (Apple HIG & Material 3): Both iOS and Android design systems use strict type ladders to ensure users instantly differentiate section headers from body copy.'
    ],
    layman: {
      title: 'The Musical Chord Analogy:',
      text: 'A modular scale is like tuning a guitar to harmonic musical chords (thirds, fourths, fifths). When notes share a mathematical frequency ratio, they sound pleasing and melodic. Random font sizes sound like banging random keys on a broken piano.'
    },
    keyInsight: {
      title: 'Harmonic Hierarchy',
      text: 'Never guess font sizes. Anchor your system at 16px and multiply by a consistent ratio (like Major Third 1.25) to guarantee subconscious visual harmony.'
    }
  },

  // SLIDE 16: LINE HEIGHT & MEASURE (THE BRINGHURST RULE)
  {
    id: 'mobui-s16',
    slideNum: 16,
    totalSlides: 25,
    type: 'single_topic',
    moduleTag: 'Readability Metrics',
    title: 'Typography Line Height & Line Measure',
    topicTitle: 'The Robert Bringhurst 45–75 Character Reading Rule',
    whatItDoes: 'Calculates the optimal horizontal width (measure) and vertical spacing (leading/line-height) for comfortable, sustained reading.',
    whatIsGoingOn: 'In the definitive typography manual "The Elements of Typographic Style", Robert Bringhurst proved that human reading tracking degrades when lines are either too long or too short.',
    bullets: [
      'Line Measure (Characters Per Line): The optimal reading measure is 45 to 75 characters per line (including spaces). Exactly 66 characters is widely considered the universal sweet spot.',
      'The Hazard of Overly Long Lines (>85 characters): The reader\'s eye gets fatigued traveling across wide screens and struggles to locate the start of the subsequent line (return sweep tracking error).',
      'The Hazard of Overly Short Lines (<35 characters): Breaks the reader’s cognitive flow by forcing the eye to dart back and forth frantically, slicing words awkwardly across hyphens.',
      'The Line-Height (Leading) Equation: Body text requires line-height: 1.5 to 1.6 (150%–160% of font size). Headings (H1/H2), however, must have tighter line-height (1.1 to 1.25) to prevent multi-line titles from floating apart.',
      'CSS Implementation Secret: Set max-width: 65ch; on article paragraphs. The "ch" unit equals the width of the "0" glyph in the current font, guaranteeing Bringhurst-compliant line lengths across any monitor!'
    ],
    layman: {
      title: 'The Typewriter Carriage Return Analogy:',
      text: 'Imagine reading a sentence written on a 50-foot roll of paper. By the time you reach the right edge, your neck hurts and you have no idea where the next line begins on the left. Capping line length at 65 characters keeps reading effortless.'
    },
    keyInsight: {
      title: 'The 65ch Secret',
      text: 'Use max-width: 65ch on body text containers. It mathematically locks your paragraph width to 65 characters regardless of screen resolution, preserving legibility automatically.'
    }
  },

  // SLIDE 17: INTERACTIVE FONT HISTORY & MODULAR SCALE STUDIO
  {
    id: 'mobui-s17',
    slideNum: 17,
    totalSlides: 25,
    type: 'font_history_modular_scale_studio',
    moduleTag: 'Interactive Studio',
    title: 'Typography Architecture & Modular Scale Studio',
    topicTitle: 'Inspect 16px CRT Math, iOS Auto-Zoom, and Musical Type Ladders',
    whatItDoes: 'Interactive laboratory allowing students to test the 1993 NCSA Mosaic math, simulate the iOS Safari auto-zoom penalty live, and generate modular type scales.',
    whatIsGoingOn: 'Enables tactile experimentation with font sizing mechanics, demonstrating why 16px is the unbreakable baseline of digital UI design.',
    bullets: [
      'Explore the 1993 NCSA Mosaic CRT math derivation: (12pt ÷ 72pt/in) × 96 DPI = 16px.',
      'Drag the iOS input font size slider below 16px to trigger the simulated Apple WebKit auto-zoom penalty live.',
      'Switch between musical modular scale ratios (Major Third 1.25, Perfect Fourth 1.333, Golden Ratio 1.618) to calculate complete typography ladders.',
      'Inspect generated CSS variables and rem values ready for production stylesheets.'
    ],
    layman: {
      title: 'The Typography Workbench:',
      text: 'Just like a carpenter uses calipers and gauges to measure wood down to the millimeter, this studio lets you test and verify typographical proportions before applying them to user interfaces.'
    },
    keyInsight: {
      title: 'Tactile Understanding',
      text: 'Seeing the iOS auto-zoom penalty trigger live proves why designing at 14px is a critical production bug on mobile.'
    }
  },

  // SLIDE 18: THE 8-POINT GRID SYSTEM
  {
    id: 'mobui-s18',
    slideNum: 18,
    totalSlides: 25,
    type: 'single_topic',
    moduleTag: 'Spatial Layout Systems',
    title: 'Proper Layouting: The 8-Point Grid System',
    topicTitle: 'Establishing Universal Spatial Cadence in HCI Layouts',
    whatItDoes: 'Enforces that every spatial dimension in an interface—margins, paddings, heights, widths, and gap offsets—is an exact multiple of 8 (8, 16, 24, 32, 40, 48, 56, 64px).',
    whatIsGoingOn: 'Pioneered by design systems at Uber, Airbnb, and Google Material Design, the 8pt grid establishes consistent rhythm and eliminates arbitrary guesswork between designers and software engineers.',
    bullets: [
      'The 8pt Multiples Ladder: 8px (micro gap), 16px (standard card padding), 24px (component spacing), 32px (section break), 48px (standard button height / touch target), 64px (hero margin).',
      'The 4pt Micro-Grid Exception: Half-grid increments of 4px and 12px are strictly reserved for compact icon spacing, status tags, and micro-badges.',
      'Eliminating Decision Fatigue: Designers and frontend engineers never waste time arguing whether a margin should be 17px, 19px, or 21px—the answer is always mathematically 16px or 24px.',
      'Subconscious Visual Cadence: When every element in an app conforms to the same spatial cadence, users perceive the interface as polished, high-quality, and deeply trustworthy.',
      'Seamless Developer Translation: Translates directly into modern CSS frameworks like Tailwind CSS: p-2 = 8px, p-4 = 16px, p-6 = 24px, p-8 = 32px, h-12 = 48px.'
    ],
    layman: {
      title: 'The Lego Brick Analogy:',
      text: 'Imagine trying to build a house with Lego blocks where every brick has a random peg size (7.3mm, 9.1mm, 11.4mm). The bricks would never click together. The 8-point grid ensures every component snaps together with mathematical precision.'
    },
    discussionPrompt: {
      question: 'Why do design systems at Uber (Base UI), Airbnb, and Google mandate an 8pt grid rather than a 5pt or 10pt grid?',
      hint: 'Think about screen resolution divisibility and what happens when you divide 10 by 2, or scale by 1.5x.',
      talkingPoints: [
        '10 divided by 2 is 5, which cannot divide into clean halves without producing decimals (2.5px).',
        '8 divides cleanly into 4, 2, and 1, allowing perfect micro-adjustments.',
        'Most display hardware resolutions (1920, 1080, 1440, 1280) are divisible by 8.'
      ]
    },
    keyInsight: {
      title: 'Spatial Cadence',
      text: 'Every margin, padding, and button height should be a multiple of 8. Consistency in spacing builds subconscious user trust.'
    }
  },

  // SLIDE 19: WHY 8PT AND NOT 7PT OR 10PT? (SUB-PIXEL BLUR)
  {
    id: 'mobui-s19',
    slideNum: 19,
    totalSlides: 25,
    type: 'single_topic',
    moduleTag: 'Pixel Geometry',
    title: 'Why 8pt and Not 7pt or 10pt? Sub-Pixel Blur',
    topicTitle: 'Display Densities (@1.5x, @2x, @3x) and Anti-Aliasing Geometry',
    whatItDoes: 'Reveals the underlying hardware display mathematics that make 8pt the only spacing system that scales cleanly across all display pixel densities without blurring.',
    whatIsGoingOn: 'Modern hardware uses fractional display scaling. Windows laptops commonly scale at 125% (1.25x) or 150% (1.5x). Budget Android smartphones scale at 1.5x, 2.0x, or 2.75x. If a design dimension cannot multiply into whole integer physical pixels, the GPU must anti-alias across adjacent sub-pixels, creating fuzzy borders.',
    bullets: [
      'The Fractional Scaling Math: When an interface is rendered at 150% (1.5x) scaling, every logical pixel is multiplied by 1.5 to calculate physical hardware pixels.',
      'The Perfection of 8: 8pt × 1.5 = exactly 12.0 physical pixels! 16pt × 1.5 = exactly 24.0 physical pixels! Crisp, razor-sharp hardware alignment.',
      'The Failure of 7pt: 7pt × 1.5 = 10.5 physical pixels. A hardware LCD screen cannot illuminate half a physical pixel! The GPU is forced to interpolate, creating a blurry, smudged border.',
      'The Failure of Odd Numbers (11pt, 13pt): 13pt × 1.5 = 19.5 physical pixels. Produces fuzzy card borders, illegible micro-text, and smudged separator lines.',
      'Hardware Resolution Divisibility: Almost every standard screen resolution in history is divisible by 8: 1920 (÷8 = 240), 1080 (÷8 = 135), 1440 (÷8 = 180), 1280 (÷8 = 160), 768 (÷8 = 96), 360 (÷8 = 45).'
    ],
    layman: {
      title: 'The Tile Cutter Analogy:',
      text: 'Imagine a mason laying bathroom tiles with 8-inch tiles on an 8-foot floor. Every tile fits whole, with zero cutting. Using 7-inch tiles forces the mason to cut half-inch slivers at every edge, leaving jagged, messy borders. 8pt ensures whole tiles every time.'
    },
    keyInsight: {
      title: 'Hardware Truth',
      text: '8pt avoids sub-pixel anti-aliasing blur because 8 × 1.5 = 12.0 integer pixels. It renders razor-sharp across Android, Windows, and Apple displays.'
    }
  },

  // SLIDE 20: EYE-TRACKING: THE F-PATTERN
  {
    id: 'mobui-s20',
    slideNum: 20,
    totalSlides: 25,
    type: 'single_topic',
    moduleTag: 'Eye-Tracking HCI',
    title: 'Eye-Tracking Layout Patterns: The F-Pattern',
    topicTitle: 'How Humans Scan Text-Dense Pages (Nielsen Norman Group)',
    whatItDoes: 'Details the scientific eye-tracking behavior discovered by Dr. Jakob Nielsen explaining how users scan information-dense web pages.',
    whatIsGoingOn: 'Eye-tracking heatmaps of thousands of users reading articles, search results, and documentation reveal that users do not read line-by-line. Their gaze traces the letter "F".',
    bullets: [
      'Movement 1 (Top Bar of F): The user’s eyes sweep horizontally across the upper part of the content area (reading headlines and introductory summaries).',
      'Movement 2 (Middle Bar of F): The user’s gaze drops down the page and sweeps across a second, shorter horizontal line (scanning subheadings or second paragraphs).',
      'Movement 3 (Vertical Spine of F): The user’s gaze sweeps strictly down the left-hand margin, scanning bullet point beginnings, bold words, and numbers without reading across.',
      'HCI Application Rule 1 (Front-Loading): Place your most critical informational keywords in the first 2 or 3 words of headlines and bullet points.',
      'HCI Application Rule 2 (Visual Anchors): Use bold text, colored icons, and numbered badges on the left edge of paragraphs to anchor the reader\'s vertical scanning path.',
      'Real-World Example (Medium & Wikipedia): Notice how Wikipedia and Medium left-align all major section headers and avoid center-aligning body text to support uninterrupted F-scanning.'
    ],
    layman: {
      title: 'The Metal Detector Analogy:',
      text: 'Web readers do not read like scholars studying ancient poetry. They sweep across the screen like someone with a metal detector on a sandy beach—walking straight along the waterline and stopping only when the detector beeps on a shiny keyword.'
    },
    discussionPrompt: {
      question: 'Why is center-aligned body text considered a severe usability violation on articles and blogs?',
      hint: 'Think about Movement 3 of the F-pattern (the vertical left margin sweep).',
      talkingPoints: [
        'Center-aligning text causes every line to begin at a completely different horizontal position.',
        'The reader\'s eye must hunt left and right to find the start of every single line.',
        'Destroys the vertical spine of the F-pattern, causing rapid reader fatigue and bounce.'
      ]
    },
    keyInsight: {
      title: 'Front-Loading Principle',
      text: 'Front-load high-value keywords in the first 2 words of headings and bullets. Users scan down the left edge and rarely read across full paragraphs.'
    }
  },

  // SLIDE 21: EYE-TRACKING: THE Z-PATTERN
  {
    id: 'mobui-s21',
    slideNum: 21,
    totalSlides: 25,
    type: 'single_topic',
    moduleTag: 'Eye-Tracking HCI',
    title: 'Eye-Tracking Layout Patterns: The Z-Pattern',
    topicTitle: 'Visual Processing for Landing Pages, Heroes & Ads',
    whatItDoes: 'Maps the natural eye scan path across visual, low-text interfaces such as hero banners, presentation slides, and marketing landing pages.',
    whatIsGoingOn: 'When an interface is visual rather than text-heavy, the human gaze traces the letter "Z", moving across top navigation, dropping diagonally across the hero visual, and finishing at the conversion action.',
    bullets: [
      'Point 1 (Top-Left): The gaze starts at the top-left corner, anchoring on the Brand Logo to establish identity and security.',
      'Point 2 (Top-Right): The eyes sweep horizontally along the top bar to inspect Navigation Links, Language pickers, and the "Sign In" button.',
      'Point 3 (Diagonal Sweep to Bottom-Left): The gaze drops diagonally across the center graphic or illustration, landing on the primary Value Proposition Headline.',
      'Point 4 (Bottom-Right Terminal Point): The gaze finishes in the bottom-right corner, landing directly on the Primary Call-to-Action (CTA) button (e.g. "Get Started Free" or "Buy Now").',
      'The Golden Terminal Rule: Never place your primary conversion button in visual dead zones (like top-center or bottom-left). Placing the CTA at Point 4 maximizes natural conversion momentum.',
      'Real-World Example (Netflix Landing Page): Netflix logo top-left (Point 1), "Sign In" top-right (Point 2), bold headline center-left (Point 3), and "Get Started >" red button bottom-right (Point 4).'
    ],
    layman: {
      title: 'The Billiard Table Analogy:',
      text: 'A billiard cue ball struck into a pocket follows a predictable rebound path. The human eye scanning a landing page follows the Z-pattern with the same physical predictability. Design the pocket (CTA button) right where the ball lands.'
    },
    keyInsight: {
      title: 'Terminal Point Law',
      text: 'Place your highest-priority conversion action at Point 4 (the bottom-right terminal point of the Z-pattern) to capture natural gaze completion.'
    }
  },

  // SLIDE 22: GESTALT PRINCIPLES IN UI LAYOUT
  {
    id: 'mobui-s22',
    slideNum: 22,
    totalSlides: 25,
    type: 'single_topic',
    moduleTag: 'Cognitive Psychology',
    title: 'Gestalt Principles in Interface Layout',
    topicTitle: 'How the Human Brain Subconsciously Groups Visual Information',
    whatItDoes: 'Applies cognitive Gestalt psychology laws to layout design, ensuring users instantly understand relationships between UI elements without reading explanations.',
    whatIsGoingOn: 'The human brain is a pattern-seeking organ that groups visual stimuli based on proximity, similarity, containers, and continuity.',
    bullets: [
      '1. Law of Proximity: Objects placed close together are instinctively perceived as related. Field labels should sit 4px to 8px above their input, while separate form groups should be separated by at least 24px to 32px of negative space.',
      '2. Law of Common Region: Enclosing elements inside a visible border, shadow, or colored card unites disparate items into a single cognitive entity. This is the psychological foundation of modern Card UI design (Spotify, YouTube, Shopee).',
      '3. Law of Similarity: Elements that share identical visual attributes (color, shape, typography) are perceived as performing the same function. All primary action buttons must share identical background color and corner radius.',
      '4. Law of Continuity: The human eye naturally follows lines and aligned edges. Left-aligning form fields and body copy creates an uninterrupted vertical reading spine.',
      '5. Law of Figure-Ground: Modal dialog overlays use dimmed background backdrops (scrims / backdrop-filter: blur(8px)) to separate the interactive modal (figure) from the underlying page (ground).'
    ],
    layman: {
      title: 'The Classroom Seating Analogy:',
      text: 'If students sit grouped around separate 4-person tables (Common Region), you immediately know who is on which project team without reading a name badge. Visible containers create effortless mental clarity.'
    },
    discussionPrompt: {
      question: 'What happens in a checkout form when the spacing between Form Group A and Form Group B is smaller than the spacing between labels and inputs inside Group A?',
      hint: 'Think about the Law of Proximity and grouping confusion.',
      talkingPoints: [
        'Users perceive the label of Group B as belonging to the input of Group A.',
        'Users enter their credit card number into the phone number field.',
        'Violates visual hierarchy and triggers catastrophic form submission errors.'
      ]
    },
    keyInsight: {
      title: 'Gestalt Clarity',
      text: 'Whitespace is not empty space; it is cognitive architecture. Use proximity and common region to communicate relationships instantly.'
    }
  },

  // SLIDE 23: INTERACTIVE LAYOUT GRID, GESTALT & EYE-TRACKING INSPECTOR
  {
    id: 'mobui-s23',
    slideNum: 23,
    totalSlides: 25,
    type: 'layout_grid_gestalt_inspector',
    moduleTag: 'Interactive Studio',
    title: 'HCI Layout Architecture: 8pt Grid, Eye-Tracking & Gestalt',
    topicTitle: 'Inspect Sub-Pixel Rendering, Gaze Heatmaps, and Gestalt Laws Live',
    whatItDoes: 'Interactive visual inspector demonstrating sub-pixel antialiasing differences, live eye-tracking scan paths, and Gestalt grouping laws.',
    whatIsGoingOn: 'Provides real-time interactive proof of why 8pt grid geometry renders clean integer pixels (12.0px) while 7pt causes fractional interpolation blur (10.5px).',
    bullets: [
      'Inspect 8pt clean integer rendering (12.0px) vs 7pt fractional blur (10.5px) under simulated 1.5x display density.',
      'Toggle live eye-tracking gaze overlays between the F-Pattern (text-heavy scanning) and Z-Pattern (landing page conversion).',
      'Explore Gestalt grouping laws (Proximity, Common Region, Similarity) directly inside modern UI card components.',
      'Inspect production CSS spacing rules, negative space ratios, and hit target padding.'
    ],
    layman: {
      title: 'The UX Microscope:',
      text: 'This studio lets you put digital interfaces under an electron microscope, revealing the exact pixel math and cognitive laws that separate amateur designs from world-class software.'
    },
    keyInsight: {
      title: 'Systematic Mastery',
      text: 'When pixel geometry (8pt), reading physics (F/Z), and cognitive psychology (Gestalt) align, interfaces feel invisible and effortless.'
    }
  },

  // SLIDE 24: MOBILE NAVIGATION & THE HAMBURGER TRADEOFF
  {
    id: 'mobui-s24',
    slideNum: 24,
    totalSlides: 25,
    type: 'single_topic',
    moduleTag: 'Navigation Architecture',
    title: 'Mobile Navigation: Bottom Tabs vs The Hamburger Tradeoff',
    topicTitle: 'The "Out of Sight, Out of Mind" Usability Penalty',
    whatItDoes: 'Examines the empirical usability trade-offs between visible bottom navigation bars and hidden off-canvas hamburger menus (☰).',
    whatIsGoingOn: 'Eye-tracking and analytics data from the Nielsen Norman Group demonstrate that hiding core navigation behind a hamburger menu reduces feature discovery and user engagement by up to 50%.',
    bullets: [
      'The Bottom Navigation Bar: Anchored permanently in Steven Hoober\'s Natural Thumb Zone. Displays 3 to 5 primary destinations with persistent icons and text labels.',
      'The Famous Spotify Case Study (2016): Spotify removed their hamburger menu and replaced it with a 5-tab bottom navigation bar. Result: User navigation clicks increased by 30%, tab exploration increased by 9%, and user retention surged.',
      'The Hamburger Menu Penalty: "Out of sight is out of mind." If users cannot see a feature on screen, they assume it does not exist.',
      'When Hamburger Menus Are Justified: Secondary, low-frequency utility destinations (Settings, Privacy Policy, Terms of Service, Log Out, Help Center).',
      'When Hamburger Menus Are Destructive: Hiding primary daily workflows (Home Feed, Search, Cart, Orders, Messages) behind a hamburger menu creates severe friction.',
      'Floating Action Button (FAB): Google Material Design pattern for the single most important action on a screen (e.g. "Compose" in Gmail, "New Chat" in WhatsApp).'
    ],
    layman: {
      title: 'The Storefront Window Analogy:',
      text: 'Putting primary navigation behind a hamburger menu is like a bakery keeping all their fresh bread hidden in a locked back closet and expecting customers to ask for it. Put your best products right in the front display window.'
    },
    discussionPrompt: {
      question: 'Why do major apps limit bottom navigation bars to a maximum of 5 tabs?',
      hint: 'Calculate: 375px mobile width ÷ 5 tabs = 75px per tab. Consider touch targets and label truncation.',
      talkingPoints: [
        'More than 5 tabs reduces individual hitboxes below the 48px minimum touch target.',
        'Icon labels truncate or overlap, creating visual noise and accidental misclicks.',
        'Miller’s Law (7 ± 2) and Hick’s Law prove that limiting primary choices accelerates decision speed.'
      ]
    },
    keyInsight: {
      title: 'Visibility Principle',
      text: 'What is visible gets used. Anchor your core 3 to 5 destinations in a persistent bottom navigation bar; reserve hamburger menus strictly for settings.'
    }
  },

  // SLIDE 25: SUMMARY & CAPSTONE CHECKLIST
  {
    id: 'mobui-s25',
    slideNum: 25,
    totalSlides: 25,
    type: 'section_break',
    sectionNum: 'Week 14 Mastered',
    title: 'Responsive Cross-Platform HCI Architecture Mastered',
    description: 'You have mastered mobile-to-desktop progressive enhancement, desktop-to-mobile reflow, standard responsive breakpoints, the 1993 CRT history of 16px font standards, avoiding the iOS input auto-zoom penalty, the 8-point grid system, and Gestalt F/Z eye-tracking layouts.'
  }
];

// ============================================================================
// WEEK 15: INFORMATION ARCHITECTURE (IA) (15 Comprehensive Slides)
// Patterns: Principles of IA, organizing content, sitemaps, navigation schemes
// ============================================================================
export const mediaDsnIASlidesData: SlideData[] = [
  // SLIDE 1: COVER
  {
    id: 'ia-s1',
    slideNum: 1,
    totalSlides: 15,
    type: 'cover',
    moduleTag: 'Week 15 — HUMAN-COMPUTER INTERACTION (IT-HCI1)',
    title: 'Information Architecture (IA)',
    subtitle: 'Principles of Information Architecture, Cognitive Content Structuring, Production Sitemaps, Taxonomies, and Navigation Systems',
    metadata: [
      { label: 'Week', val: 'Week 15' },
      { label: 'Curriculum', val: 'Human-Computer Interaction (HCI)' },
      { label: 'Core Framework', val: 'Morville & Rosenfeld IA Pillars' },
      { label: 'Research Method', val: 'Open & Closed Card Sorting' }
    ]
  },

  // SLIDE 2: OBJECTIVES & ROADMAP
  {
    id: 'ia-s2',
    slideNum: 2,
    totalSlides: 15,
    type: 'interactive_objectives',
    moduleTag: 'Learning Competencies',
    title: 'Week 15 Learning Competencies',
    topicTitle: 'Core Learning Objectives in Information Architecture',
    bullets: [
      'Master the Foundational Principles of IA: Balance Peter Morville & Louis Rosenfeld\'s 3 Circles (Users, Content, Context) to architect scalable digital structures.',
      'Deconstruct Mental Models vs Conceptual Models: Understand why software engineers naturally build menus reflecting database schemas, and how to bridge the Gulf of Execution.',
      'Organize & Structure Complex Content: Deploy Hierarchical Trees, Sequential Wizards, Matrix Hypermedia, and Multi-Faceted Classification (e.g. Amazon, Shopee, Netflix).',
      'Conduct Empirical Card Sorting & Tree Testing: Execute Open Card Sorting for discovery, Closed Card Sorting for evaluation, and quantitative Dendrogram similarity analysis.',
      'Develop Production Sitemaps & Navigation Schemes: Implement the 4 core navigation systems (Global, Local, Contextual, and Supplementary) with breadcrumb wayfinding and zero dead ends.'
    ],
    layman: {
      title: 'The Supermarket Grocery Store Analogy:',
      text: 'Information architecture is like the physical layout of a giant supermarket. If dairy, meats, produce, and bakery goods are organized logically with clear overhead aisle signs, shoppers find their ingredients in 5 minutes. If groceries were organized alphabetically or by product box color, hungry customers would abandon their shopping carts in sheer exhaustion.'
    },
    keyInsight: {
      title: 'IA is the Invisible Skeleton',
      text: 'Great visual UI cannot save broken information architecture. If users cannot find what they need in your system, the feature essentially does not exist.'
    }
  },

  // SLIDE 3: THE 3 CIRCLES OF IA
  {
    id: 'ia-s3',
    slideNum: 3,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Core IA Framework',
    title: 'The "Three Circles" of Information Architecture',
    topicTitle: 'Peter Morville & Louis Rosenfeld\'s Foundational Venn Diagram',
    whatItDoes: 'Aligns business context, content inventory, and user mental models into an effective, scalable structural blueprint.',
    whatIsGoingOn: 'High-performing digital products live at the exact intersection of three interdependent forces. Designing for only one or two causes severe system failure.',
    bullets: [
      '1. Users: What are their real-world mental models, information-seeking behaviors, vocabularies, and immediate task goals? (e.g., A student wants to "Pay Tuition", not "Query Bursar Accounts Receivable").',
      '2. Content: What data types, document formats, media assets, metadata, volume, and governance rules exist in the system?',
      '3. Context: What are the business goals, revenue targets, regulatory constraints, technical architectures, and corporate politics driving the product?',
      'Failure Mode A (Context Only): Designing solely around corporate department silos produces confusing intranet portals where users must guess which department handles their problem.',
      'Failure Mode B (Content Only): Dumping raw database tables onto screens creates impenetrable data landfills that overwhelm human working memory.'
    ],
    layman: {
      title: 'The Three-Legged Stool Analogy:',
      text: 'Information architecture is a three-legged stool. If you remove the User leg, customers fall over and leave. If you remove the Business Context leg, the company goes bankrupt. If you remove the Content leg, you have a beautiful empty room with nothing to buy.'
    },
    discussionPrompt: {
      question: 'Have you ever visited a university or government website where finding a simple form required clicking through 8 layers of bureaucratic department names? What IA failure occurred?',
      hint: 'The site was structured around internal corporate politics (Context) rather than user task goals (Users).',
      talkingPoints: [
        'The organization mapped its internal organizational hierarchy directly onto the sitemap.',
        'Users don\'t care who manages the department; they care about their immediate job-to-be-done.',
        'Fixing this requires shifting from organizational navigation to task-based navigation.'
      ]
    },
    keyInsight: {
      title: 'The Intersection of IA',
      text: 'Great IA harmonizes what users seek with what the business provides and what the content repository contains.'
    }
  },

  // SLIDE 4: THE 4 INFORMATION-SEEKING MODES
  {
    id: 'ia-s4',
    slideNum: 4,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Information Seeking Psychology',
    title: 'The 4 Information-Seeking Modes',
    topicTitle: 'How Humans Search for Digital Knowledge',
    whatItDoes: 'Classifies the distinct psychological mindsets and search patterns users adopt when entering a digital interface.',
    whatIsGoingOn: 'Users do not all search the same way. An interface must cater simultaneously to quick lookups, exploratory research, comprehensive audits, and re-finding familiar items.',
    bullets: [
      '1. Known-Item Searching: The user knows exactly what they want and what it is called (e.g., "iPhone 15 Pro Max 256GB" or "Dr. Santos email"). Requires instantaneous, predictive autocomplete search.',
      '2. Exploratory Browsing: The user has an open-ended goal and is curious (e.g., "Best laptop for Computer Science students under ₱40,000"). Requires faceted filters, category guides, and comparison tables.',
      '3. Exhaustive Searching: The user wants to find EVERY single record matching a criteria (e.g., a recruiter searching for all Flutter developers in Cebu, or a lawyer doing legal discovery). Requires advanced Boolean operators and bulk export.',
      '4. Re-Finding: The user is trying to find something they saw before (e.g., "What was that blue jacket I looked at on Shopee yesterday?"). Requires recent history rails, bookmarking, and "Recently Viewed" widgets.'
    ],
    layman: {
      title: 'The Library Visitor Analogy:',
      text: 'One visitor comes in with a specific book title and call number (Known-Item). Another wanders the mystery aisle looking for a fun weekend read (Exploratory). A researcher reads every document written on World War II (Exhaustive). A student returns to check out the book they returned last Friday (Re-Finding).'
    },
    keyInsight: {
      title: 'Multi-Modal Search',
      text: 'Never design a search bar that only accommodates known-item queries. Support exploratory filters and re-finding history to serve all human search mindsets.'
    }
  },

  // SLIDE 5: MENTAL MODELS VS CONCEPTUAL MODELS
  {
    id: 'ia-s5',
    slideNum: 5,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Cognitive Science',
    title: 'Mental Models vs Conceptual Models',
    topicTitle: 'The Norman "Gulf of Execution" in Architecture',
    whatItDoes: 'Examines the fundamental cognitive dissonance between how software developers architect systems and how end-users understand them.',
    whatIsGoingOn: 'In Donald Norman’s "The Design of Everyday Things", the Mental Model is the user\'s internal psychological picture of how the system works. The Conceptual Model is the actual structural design engineered by developers.',
    bullets: [
      'The Engineer\'s Conceptual Model: Organized by SQL database tables, microservices, API routes, and relational foreign keys (e.g., tbl_user_billing_ledger_v2).',
      'The User\'s Mental Model: Formed by real-world life experiences, paper documents, and intuitive goals (e.g., "Where is my receipt?").',
      'The Gulf of Execution: The cognitive distance between the user’s goal and the physical actions needed to accomplish it in the interface.',
      'The Gulf of Evaluation: The difficulty of assessing the system\'s state after an action (e.g., Did my payment succeed or is my card charged twice?).',
      'The Golden IA Principle: Never expose your database schema or corporate chart in your navigation menus. Structure your sitemap around the user\'s natural mental model.'
    ],
    layman: {
      title: 'The Car Transmission Analogy:',
      text: 'When you drive an automatic car, your mental model is simple: "Press gas to go forward, press brake to stop." You do not need to mentally calculate planetary gear ratios, fluid torque converters, or valve body solenoids. Good IA hides mechanical complexity behind clean intuitive abstractions.'
    },
    discussionPrompt: {
      question: 'Why do so many internal company tools require 3-week onboarding training sessions, while consumer apps like Instagram require zero training?',
      hint: 'Compare whether the interface reflects internal software engineering mechanics or intuitive human mental models.',
      talkingPoints: [
        'Enterprise tools frequently force employees to interact directly with raw database entities.',
        'Consumer apps hide all plumbing behind frictionless task-oriented mental models.',
        'High training costs are an admission of failed information architecture.'
      ]
    },
    keyInsight: {
      title: 'Mental Model Match',
      text: 'System architecture belongs in the backend. User-facing information architecture must mirror the user\'s mental model of their task.'
    }
  },

  // SLIDE 6: CARD SORTING METHODOLOGY
  {
    id: 'ia-s6',
    slideNum: 6,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'UX Research Methods',
    title: 'Card Sorting: Revealing User Mental Models',
    topicTitle: 'Open, Closed, and Hybrid Card Sorting Techniques',
    whatItDoes: 'Empirical UX research methodology where participants organize information topics into logical categories to discover intuitive sitemaps.',
    whatIsGoingOn: 'Card sorting removes subjective opinions from boardroom debates by providing statistical evidence of how real users naturally categorize concepts.',
    bullets: [
      'Open Card Sorting (Generative Discovery): Participants receive 30–50 cards with content topics and freely organize them into groups, creating their own category names. Best for building a brand new website sitemap.',
      'Closed Card Sorting (Evaluative Validation): Participants sort topic cards into pre-existing, fixed category buckets established by the design team. Best for testing if an existing menu structure makes sense.',
      'Hybrid Card Sorting: Participants sort cards into pre-defined categories, but are granted permission to invent new categories if a card does not fit naturally.',
      'Quantitative Similarity Matrix: Modern UX software (Optimal Workshop, Miro) calculates correlation matrices showing the percentage of participants who paired Card A with Card B.',
      'Hierarchical Cluster Dendrogram: Statistical tree diagrams that reveal natural taxonomy clusters with mathematical precision across 30+ test participants.'
    ],
    layman: {
      title: 'The Kitchen Utensils Sorting Analogy:',
      text: 'Give 30 people 50 kitchen items (spatula, can opener, coffee beans, dish soap) and ask them to organize them into kitchen cabinets. If 28 out of 30 people put the can opener in the top drawer next to the silverware, that is where it belongs—regardless of what the architect planned.'
    },
    keyInsight: {
      title: 'Empirical Taxonomy',
      text: 'Never guess how to label navigation menus. Run an Open Card Sort with 30 target users to let mathematical clustering build your taxonomy.'
    }
  },

  // SLIDE 7: TREE TESTING & REVERSE CARD SORTING
  {
    id: 'ia-s7',
    slideNum: 7,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Usability Testing',
    title: 'Tree Testing: Validating Findability without UI',
    topicTitle: 'Evaluating IA Skeletons Stripped of Visual Distraction',
    whatItDoes: 'Evaluates the findability of topics within a sitemap hierarchy by presenting users with a text-only tree structure and asking them to complete realistic tasks.',
    whatIsGoingOn: 'Visual design (colors, hero images, flashy banners) often masks broken navigation. Tree testing strips away all visual graphics, forcing users to rely entirely on the text labels and parent-child hierarchy.',
    bullets: [
      'The Test Setup: Users are given a text-only clickable folder tree (e.g., Home > Support > Billing > Invoices) and a concrete prompt (e.g. "Find where to download your official VAT invoice from last month").',
      'Metric 1 — Task Success Rate: What percentage of users successfully reach the correct final node without giving up?',
      'Metric 2 — Directness Score: Did users navigate directly to the target on their first try, or did they backtrack, open incorrect folders, and get lost?',
      'Metric 3 — Time on Task: How many seconds does the user spend deliberating between ambiguous parent category labels?',
      'Diagnosing Click Debt: If 60% of users click into "Account Settings" instead of "Billing" to find their invoice, your category labels suffer from semantic overlap and must be revised.'
    ],
    layman: {
      title: 'The Naked X-Ray Analogy:',
      text: 'Tree testing is like taking an X-ray of a patient\'s bones. You don\'t look at their clothing or hairstyle; you inspect the bare skeletal structure to see if any bones are fractured or out of alignment.'
    },
    discussionPrompt: {
      question: 'Why is it crucial to run Tree Testing BEFORE building visual wireframes and high-fidelity mockups in Figma?',
      hint: 'Think about development cost, rework friction, and emotional attachment to visual designs.',
      talkingPoints: [
        'Restructuring text hierarchy in a spreadsheet takes 10 minutes.',
        'Restructuring hierarchy after high-fidelity designs, illustrations, and frontend components are built takes 3 weeks of expensive rework.',
        'Test the bones before painting the walls.'
      ]
    },
    keyInsight: {
      title: 'Findability Truth',
      text: 'If users cannot find a feature in a bare text tree test, no amount of flashy visual buttons or animations will make it discoverable in the final UI.'
    }
  },

  // SLIDE 8: CONTENT ORGANIZATION SCHEMES & STRUCTURES
  {
    id: 'ia-s8',
    slideNum: 8,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Structural Models',
    title: 'Content Organization Schemes & Structures',
    topicTitle: 'Hierarchy, Sequential Wizards, Matrix Hypermedia & Faceted Systems',
    whatItDoes: 'Defines the architectural graph and relationship model connecting pieces of digital content.',
    whatIsGoingOn: 'Different problem domains demand different structural patterns. Choosing the wrong architectural structure creates cognitive chaos.',
    bullets: [
      '1. Hierarchical Tree (Top-Down): The classic parent-child pyramid. Most intuitive for corporate websites, e-commerce stores, and documentation. Must balance depth (clicks to leaf) with breadth (number of siblings).',
      '2. Sequential / Linear Wizard (Step 1 ➔ Step 2 ➔ Step 3): One-way linear progression. Mandatory for checkout flows, credit card applications, flight booking, and software installation.',
      '3. Matrix Hypermedia: Highly interconnected web where every node links associatively to other nodes based on shared tags. (e.g., Wikipedia, medical research wikis). Users forge their own exploratory paths.',
      '4. Faceted Classification: Dynamic multi-dimensional filtering across independent metadata attributes (e.g. Shopee / Amazon: Price Range, Brand, Star Rating, Delivery Speed, Seller Location). Users build customized queries without rigid hierarchies.'
    ],
    layman: {
      title: 'The Transportation System Analogy:',
      text: 'A Hierarchical Tree is an elevator in a building (Floor 1 ➔ Room 101). A Sequential Wizard is a train on a single track (Station A ➔ Station B). A Matrix is a walkable city street grid with infinite alleys. A Faceted System is a teleporter with customizable coordinate dials.'
    },
    keyInsight: {
      title: 'Structural Fit',
      text: 'Choose structure by user task: Linear wizards for transactions; Hierarchies for discovery; Faceted systems for massive multi-attribute catalogs.'
    }
  },

  // SLIDE 9: PRODUCTION SITEMAPS & VISUAL IA ARCHITECTURE
  {
    id: 'ia-s9',
    slideNum: 9,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Production Artifacts',
    title: 'Production Sitemaps & Visual IA Architecture',
    topicTitle: 'Designing Clear Parent-Child Trees without Orphan Pages',
    whatItDoes: 'Visual diagram representing the comprehensive structural map and relationship hierarchy of every page and section in a digital application.',
    whatIsGoingOn: 'A sitemap serves as the master blueprint shared between UX researchers, product managers, SEO specialists, and software engineers.',
    bullets: [
      'Sitemap Node Anatomy: Every node in a production sitemap must specify: Unique Page ID (e.g., P-102), Display Label, Access Permission (Public vs Logged-In), and Primary Component Type.',
      'Depth vs Breadth Dilemma: A "deep" sitemap requires 6 to 8 clicks to reach content, causing user fatigue. A "broad" sitemap displays 25 items on the homepage menu, causing Hick’s Law cognitive paralysis. Ideal balance: 3 to 4 levels of depth, 5 to 7 primary siblings.',
      'Orphan Page Elimination: An orphan page is any screen that has no incoming links from the global navigation or parent nodes. Orphan pages degrade SEO and become invisible to users.',
      'Cross-Linking Annotations: Dotted arrows indicate lateral contextual cross-links (e.g. from Course Syllabus P-201 directly to Related Instructor Bio P-405).',
      'SEO XML Sitemaps: Human-facing visual sitemaps map directly to machine-readable sitemap.xml files required by Google and search engine crawlers.'
    ],
    layman: {
      title: 'The Architectural Floor Plan Analogy:',
      text: 'Before builders pour concrete or electricians pull wires, the architect draws the building floor plan. It shows every doorway, hallway, and staircase connecting rooms. A sitemap is the digital floor plan ensuring no rooms are built without doors.'
    },
    discussionPrompt: {
      question: 'What is the "Three-Click Rule" in IA, and why has modern usability research modified it?',
      hint: 'Does the number of clicks matter more than how confident the user feels at every click?',
      talkingPoints: [
        'The old myth claimed users leave if they cannot find anything within 3 clicks.',
        'Usability studies prove users will happily make 6 or 7 clicks as long as every click provides clear "information scent" confirming they are on the right path.',
        'Friction is caused by confusion, not the physical click count.'
      ]
    },
    keyInsight: {
      title: 'The Golden Rule of Sitemaps',
      text: 'Ensure every screen has an identifiable parent, clear lateral wayfinding, and zero orphan dead ends.'
    }
  },

  // SLIDE 10: THE 4 CORE NAVIGATION SYSTEMS
  {
    id: 'ia-s10',
    slideNum: 10,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Navigation Systems',
    title: 'The 4 Core Navigation Systems in Modern IA',
    topicTitle: 'Global, Local, Contextual, and Supplementary Wayfinding',
    whatItDoes: 'Coordinates the four navigational layers that provide continuous spatial orientation across the entire digital ecosystem.',
    whatIsGoingOn: 'Without structured navigation systems, digital applications feel like maze labyrinths where users suffer from severe cognitive disorientation.',
    bullets: [
      '1. Global Navigation: Permanent top header bar or bottom mobile app bar available on EVERY screen (Home, Explore, Messages, Cart, Profile). Provides the universal anchor back to safety.',
      '2. Local Navigation: Sub-navigation options specific to the current parent section (e.g., inside Account Settings: Security, Notification Preferences, Linked Devices, Privacy).',
      '3. Contextual Navigation: Inline hypertext links and recommendations embedded naturally inside content paragraphs ("See Related Lecture", "Download Financial PDF", "Customers Also Bought").',
      '4. Supplementary Navigation: Sitemaps, footer link matrices, breadcrumb trails, and search bars that provide alternative routing paths for power users.',
      'Spatial Orientation Triad: At any millisecond, an interface must clearly communicate: 1. Where am I right now? 2. Where have I been? 3. Where can I go next?'
    ],
    layman: {
      title: 'The Airport Signage Analogy:',
      text: 'Global navigation is the main airport terminal departure board. Local navigation is the gate numbers on Terminal 3. Contextual navigation is an arrow pointing to the nearest coffee shop. Supplementary navigation is the printed airport terminal directory map at information kiosks.'
    },
    keyInsight: {
      title: 'Continuous Orientation',
      text: 'Layer your navigation systems: Global for universal anchoring, Local for deep section exploration, and Contextual for serendipitous discovery.'
    }
  },

  // SLIDE 11: LABELING SYSTEMS & LANGUAGE ERGONOMICS
  {
    id: 'ia-s11',
    slideNum: 11,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Linguistics & Taxonomy',
    title: 'Labeling Systems & Language Ergonomics',
    topicTitle: 'Eliminating Internal Jargon through Controlled Vocabularies',
    whatItDoes: 'Establishes clear, consistent, and unambiguous terminology across all digital navigation links, buttons, and system headers.',
    whatIsGoingOn: 'Labels represent chunks of information. If a label is ambiguous or packed with internal corporate jargon, users experience cognitive friction and hesitate to click.',
    bullets: [
      'The Curse of Knowledge: Internal corporate teams routinely name navigation labels after internal committee names or technical database systems (e.g., "Enterprise Synergies Portal" instead of "Careers").',
      'Controlled Vocabularies: A standardized dictionary of approved terminology enforced across all writers, engineers, and designers. (e.g., Deciding whether the system uses "Shop", "Buy", "Store", or "Marketplace").',
      'Information Scent (Peter Pirolli): Labels must provide a strong olfactory scent trail. When a user reads the label, they must instantly predict 90% of what lies on the other side of that click.',
      'Icon-Only Labeling Hazard: Icons without text labels (like a wrench, a compass, or three dots) create ambiguity. Usability testing proves that combining Icon + Text Label increases comprehension by over 80%!',
      'Localization & Cultural Context: Labels must translate gracefully across languages without awkward truncation or unintentional cultural offenses.'
    ],
    layman: {
      title: 'The Street Sign Analogy:',
      text: 'Imagine driving into an unfamiliar city where street signs say "District Synergies Alpha" and "Administrative Nexus 4" instead of "Hospital" and "Airport". Clear plain-language labels save lives and prevent panic.'
    },
    discussionPrompt: {
      question: 'Why do so many apps that use icon-only navigation without text labels fail usability audits for first-time users?',
      hint: 'Think about cognitive recognition vs recall and ambiguous glyph meanings.',
      talkingPoints: [
        'Except for the magnifying glass (Search) and house (Home), almost all icons have multiple conflicting meanings.',
        'A star can mean "Favorite", "Rate 5 Stars", or "Upgrade to Premium".',
        'Pairing icons with plain-language text eliminates cognitive hesitation.'
      ]
    },
    keyInsight: {
      title: 'Labeling Law',
      text: 'Speak the user’s language, never the company’s internal dialect. Clear, plain-spoken labels always outperform clever, poetic jargon.'
    }
  },

  // SLIDE 12: BREADCRUMB TAXONOMIES & SPATIAL WAYFINDING
  {
    id: 'ia-s12',
    slideNum: 12,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Wayfinding Patterns',
    title: 'Breadcrumb Taxonomies & Spatial Wayfinding',
    topicTitle: 'Location-Based, Attribute-Based, and SEO Schema Hierarchies',
    whatItDoes: 'Provides horizontal navigational trails that show the user their exact location in the site hierarchy and allow 1-click jumps back to higher-level parent categories.',
    whatIsGoingOn: 'Named after the Hansel and Gretel fairy tale, breadcrumbs prevent spatial disorientation when users land directly on deep sub-pages from Google search results.',
    bullets: [
      '1. Location-Based Breadcrumbs (Hierarchy): Shows the static structural tree (e.g. Home > Electronics > Audio > Wireless Headphones). The final item is the current page and is NOT clickable.',
      '2. Attribute-Based Breadcrumbs (Faceted): Shows the dynamic search filters currently active (e.g. Home > Laptops > Filter: [16GB RAM] × [Apple] × [Under ₱70,000] ×). Allows quick removal of individual filters.',
      '3. Path-Based Breadcrumbs (History): Shows the dynamic back-history (Page A > Page B > Page C). Generally discouraged because the browser "Back" button already performs this function.',
      'Google SEO Schema Microdata: Wrapping breadcrumbs in Schema.org BreadcrumbList JSON-LD allows Google search results to display clean URL trails directly in search snippets!',
      'HCI Wayfinding Rule: Breadcrumbs must never replace global navigation; they serve as supplementary wayfinding for deep content catalogs.'
    ],
    layman: {
      title: 'The Hansel & Gretel Trail Analogy:',
      text: 'Leaving breadcrumbs along the forest path ensures that no matter how deep you walk into the dark woods, you can glance down at the ground and immediately retrace your steps back to safety.'
    },
    keyInsight: {
      title: 'Wayfinding Principle',
      text: 'Breadcrumbs orient users who land deep inside your site from search engines, giving them an instant 1-click path to higher-level parent categories.'
    }
  },

  // SLIDE 13: SEARCH SYSTEMS & QUERY ARCHITECTURE
  {
    id: 'ia-s13',
    slideNum: 13,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Search Mechanics',
    title: 'Search Systems & Query Architecture',
    topicTitle: 'Autocomplete, Predictive Typeahead, and Zero-Results Fallbacks',
    whatItDoes: 'Architects the retrieval engine, query interpretation, and result presentation for users who prefer searching over menu browsing.',
    whatIsGoingOn: 'Over 50% of e-commerce shoppers head straight to the search box upon entering a site. A poorly architected search engine translates directly into abandoned shopping sessions.',
    bullets: [
      'Predictive Typeahead / Autocomplete: Begins suggesting matching products, categories, and past queries after the user types just 2 or 3 characters, drastically reducing typing errors.',
      'Fuzzy Search & Typo Tolerance: Uses Levenshtein distance algorithms to automatically recognize that "shues" means "shoes" or "samung" means "Samsung" without returning an empty screen.',
      'Synonym Mapping & Thesaurus Engine: Maps consumer slang to technical catalog names (e.g., typing "earphones", "earbuds", or "airpods" maps to the "In-Ear Audio" taxonomy).',
      'The "Zero-Results" Disaster Recovery: Never show an empty white screen saying "0 results found." Always display: 1. Spelling corrections, 2. Popular trending searches, and 3. Top-selling recommendations.',
      'Faceted Search Integration: Combine the search bar with instant faceted filters on the left/bottom to let users narrow down 5,000 results in seconds.'
    ],
    layman: {
      title: 'The Master Librarian Analogy:',
      text: 'A brilliant librarian doesn\'t throw up their hands and say "We don\'t have it" if you misspell a book author\'s name. They say: "Did you mean John Grisham? We have his new legal thriller right here on Table 2."'
    },
    discussionPrompt: {
      question: 'Why does Google Search display search suggestions with bolded predictive words before you even finish typing?',
      hint: 'Think about cognitive recognition vs recall and physical keystroke reduction.',
      talkingPoints: [
        'Recognizing a suggested phrase takes 1/10th the cognitive effort of remembering and spelling it out.',
        'Prevents user typos before they occur, eliminating zero-result search errors.',
        'Accelerates task completion speed by up to 400%.'
      ]
    },
    keyInsight: {
      title: 'Search Resilience',
      text: 'Great search engines tolerate human imperfections: typos, synonyms, and partial queries. Never let a search query result in a dead-end blank screen.'
    }
  },

  // SLIDE 14: REAL-WORLD CASE STUDY: REDESIGNING A BLOATED PORTAL
  {
    id: 'ia-s14',
    slideNum: 14,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Case Study Audit',
    title: 'Real-World Case Study: Redesigning a Bloated Portal',
    topicTitle: 'Before & After IA Transformation of an Academic/Government System',
    whatItDoes: 'Walks through an end-to-end case study of diagnosing a bloated, dysfunctional portal and transforming it into an intuitive, high-conversion architecture.',
    whatIsGoingOn: 'Demonstrates how the principles of card sorting, tree testing, and task-based labeling solve real organizational nightmares.',
    bullets: [
      'The Broken State (Before): University portal with 18 top-level dropdown menus containing 140 links labeled with administrative acronyms (e.g. OVP-AA, SAO-DOCS, BUR-PAY). 70% of student helpdesk tickets were "Where do I pay my tuition?".',
      'The Discovery Phase: Conducted Open Card Sort with 45 students and faculty. Students consistently clustered tasks into 4 clear mental models: 1. Academics & Grades, 2. Enrollment & Schedule, 3. Billing & Payments, 4. Campus Life & Support.',
      'The Tree Testing Audit: The new 4-category taxonomy achieved an 89% Directness Score and 94% Task Success Rate in blind tree testing, compared to 28% on the old portal.',
      'The Production Result (After): Replaced 18 bureaucratic menus with 4 task-oriented navigation hubs, a prominent predictive search bar, and personalized "Quick Links" based on student enrollment status.',
      'The Business Outcome: Student helpdesk support tickets dropped by 64% in the first semester, and payment completion speed improved by 3.5 minutes per student.'
    ],
    layman: {
      title: 'The Highway Bypass Analogy:',
      text: 'Instead of forcing thousands of cars to navigate 18 congested residential stoplights, civil engineers build a clean 4-lane highway with clear overhead signs. Traffic flows smoothly and accidents disappear.'
    },
    keyInsight: {
      title: 'Transformational IA',
      text: 'Shifting from corporate-centric organization to user-task organization routinely slashes support costs by over 50% while dramatically elevating user satisfaction.'
    }
  },

  // SLIDE 15: SUMMARY & CAPSTONE CHECKLIST
  {
    id: 'ia-s15',
    slideNum: 15,
    totalSlides: 15,
    type: 'section_break',
    sectionNum: 'Week 15 Mastered',
    title: 'Information Architecture Principles Mastered',
    description: 'You have mastered Peter Morville\'s 3 Circles of IA, the 4 information-seeking modes, empirical card sorting, tree testing, production sitemaps, the 4 navigation layers, breadcrumbs, search query architecture, and enterprise taxonomy engineering.'
  }
];

// ============================================================================
// WEEK 16: ETHICAL CONSIDERATIONS IN HCI (15 Comprehensive Slides)
// Patterns: Ethical issues, privacy, data protection, ethical design principles
// ============================================================================
export const mediaDsnEthicsSlidesData: SlideData[] = [
  // SLIDE 1: COVER
  {
    id: 'ethics-s1',
    slideNum: 1,
    totalSlides: 15,
    type: 'cover',
    moduleTag: 'Week 16 — HUMAN-COMPUTER INTERACTION (IT-HCI1)',
    title: 'Ethical Considerations in HCI',
    subtitle: 'Deceptive Dark Patterns, Privacy by Design (PbD), Algorithmic Inclusivity, Digital Wellbeing, and Humane Interface Architecture',
    metadata: [
      { label: 'Week', val: 'Week 16' },
      { label: 'Curriculum', val: 'Human-Computer Interaction (HCI)' },
      { label: 'Core Framework', val: 'Brignull Deceptive Patterns & PbD' },
      { label: 'Compliance', val: 'GDPR & Philippine RA 10173' }
    ]
  },

  // SLIDE 2: OBJECTIVES & ROADMAP
  {
    id: 'ethics-s2',
    slideNum: 2,
    totalSlides: 15,
    type: 'interactive_objectives',
    moduleTag: 'Learning Competencies',
    title: 'Week 16 Learning Competencies',
    topicTitle: 'Core Learning Objectives in Ethical HCI & Digital Rights',
    bullets: [
      'Expose Deceptive Design & Dark Patterns: Analyze Harry Brignull\'s taxonomy (Roach Motel, Confirmshaming, Sneak into Basket, Hidden Costs, and Disguised Ads).',
      'Implement Privacy by Design (PbD): Apply Dr. Ann Cavoukian’s 7 foundational principles, data minimization, and granular consent architectures.',
      'Deconstruct Addictive Engagement Loops: Examine B.F. Skinner\'s variable ratio schedules, infinite scroll, and pull-to-refresh dopamine mechanics.',
      'Mitigate Algorithmic Bias & Injustice: Identify machine learning biases in facial recognition, automated hiring, and accessibility exclusion.',
      'Enforce Legal & Ethical Compliance: Align interfaces with international regulations (EU GDPR, US FTC enforcement, and Philippine Data Privacy Act of 2012 / RA 10173).'
    ],
    layman: {
      title: 'The Magician vs The Honest Guide Analogy:',
      text: 'A deceptive dark pattern is like a sleight-of-hand magician who tricks your eyes to look to the left while secretly picking your wallet with his right hand. Ethical HCI design is like a trusted mountain guide who clearly warns you of cliffs, tells you the exact price of supplies, and shows you the safest path home.'
    },
    keyInsight: {
      title: 'The Immense Power of Designers',
      text: 'Every interface decision directly influences human choices. Designers have the power to manipulate psychological vulnerabilities for short-term corporate metrics, or empower human agency and autonomy.'
    }
  },

  // SLIDE 3: DECEPTIVE DESIGN TAXONOMY (DARK PATTERNS)
  {
    id: 'ethics-s3',
    slideNum: 3,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Deceptive Design',
    title: 'Deceptive Design & Dark Patterns Taxonomy',
    topicTitle: 'Harry Brignull’s Catalog of Interface Traps',
    whatItDoes: 'Identifies and categorizes interface patterns deliberately engineered to trick users into doing things they might not otherwise choose to do.',
    whatIsGoingOn: 'In 2010, UX specialist Harry Brignull coined the term "Dark Patterns". Companies weaponize cognitive biases (loss aversion, default effect, visual fatigue) to extract money, attention, and private data.',
    bullets: [
      '1. Roach Motel: Extremely easy to enter, nearly impossible to leave (e.g. 1-click subscription signup, but cancellation requires a 30-minute phone call during business hours).',
      '2. Confirmshaming: Emotionally manipulating users through guilt-inducing opt-out buttons (e.g., "No thanks, I hate saving money and prefer paying full price").',
      '3. Sneak into Basket: Quietly checking an optional upsell insurance or warranty box by default without explicit user consent.',
      '4. Hidden Costs: Disclosing surprise service fees, delivery markups, or convenience fees only at the very final checkout screen after 15 minutes of form-filling.',
      '5. Disguised Ads: Advertisements styled identically to organic editorial content, system error dialogs, or giant "DOWNLOAD NOW" buttons on utility websites.'
    ],
    layman: {
      title: 'The Mousetrap Analogy:',
      text: 'The cheese in a mousetrap is easy to reach and delicious to smell. But once you take a bite, the steel bar snaps shut and you cannot escape. Roach Motel designs are digital mousetraps built to trap your credit card.'
    },
    discussionPrompt: {
      question: 'Have you ever encountered a "Confirmshaming" button on an e-commerce site or newsletter popup? How did it make you feel about the brand?',
      hint: 'Notice the emotional manipulation: insults, guilt, and passive-aggressive copy.',
      talkingPoints: [
        'Short-term click-through rates may slightly increase, but long-term brand equity is demolished.',
        'Users feel insulted, disgusted, and actively seek competitor alternatives.',
        'Ethical brands provide simple, respectful "No thanks" or "Maybe later" dismissal options.'
      ]
    },
    keyInsight: {
      title: 'Ethical Axiom',
      text: 'Tricking users into a purchase is not clever marketing; it is fraudulent interface manipulation. Long-term customer loyalty requires radical honesty.'
    }
  },

  // SLIDE 4: CASE STUDY: ROACH MOTEL & CANCELLATION FRICTION
  {
    id: 'ethics-s4',
    slideNum: 4,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Case Study Audit',
    title: 'Case Study: The Roach Motel & Amazon Prime Lawsuit',
    topicTitle: 'How Asymmetric Interaction Friction Violates Federal Law',
    whatItDoes: 'Examines the legal prosecution and regulatory dismantling of asymmetric cancellation friction in major tech platforms.',
    whatIsGoingOn: 'In 2023, the US Federal Trade Commission (FTC) sued Amazon for duping millions of consumers into automatically renewing Prime subscriptions through complex labyrinthine cancellation flows codenamed "Project Iliad".',
    bullets: [
      'The Asymmetry Violation: Signing up for Prime took 1 single click. Canceling Prime required navigating 6 distinct web pages, reading 1,500 words of warning copy, and clicking through 4 separate confirmation prompts with ambiguous labels.',
      'The FTC "Click to Cancel" Mandate: Regulatory rule establishing that canceling a subscription must be just as fast and easy as signing up (1-click in = 1-click out).',
      'Adobe Regulatory Lawsuit (2024): The US Department of Justice sued Adobe for hiding massive early termination fees ($200+) behind microscopic mouseover tooltips and trapping creative professionals.',
      'Gym & Telco Cancellation Friction: Forcing users to send certified physical postal mail or visit a physical branch in person to cancel a digital subscription is a textbook Roach Motel violation.',
      'The Ethical Standard: Place a prominent "Cancel Subscription" button directly inside the Account Settings panel with zero penalty hurdles and transparent billing dates.'
    ],
    layman: {
      title: 'The Revolving Door Analogy:',
      text: 'If a store invites you in through a wide open, welcoming automatic sliding glass door, but padlocks the exit and forces you to crawl through an air conditioning duct to leave, that store is committing false imprisonment. Digital exits must be as wide as digital entrances.'
    },
    keyInsight: {
      title: 'The Symmetry Rule',
      text: 'Canceling a service must require the exact same number of clicks, time, and effort as signing up. If signup takes 1 click, cancellation must take 1 click.'
    }
  },

  // SLIDE 5: CONFIRMSHAMING & PSYCHOLOGICAL MANIPULATION
  {
    id: 'ethics-s5',
    slideNum: 5,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Psychological Exploitation',
    title: 'Confirmshaming & Emotional Manipulation',
    topicTitle: 'Deconstructing Passive-Aggressive Microcopy',
    whatItDoes: 'Analyzes how deceptive UX writers exploit social anxiety, guilt, and pride to manipulate user decisions.',
    whatIsGoingOn: 'Instead of providing neutral, factual choices ("Accept Discount" vs "Decline"), confirmshaming phrases the decline option as an insulting confession of stupidity or moral failure.',
    bullets: [
      'Example A (E-Commerce): Button 1: "Yes, I want 20% off my order!" vs Button 2: "No thanks, I prefer paying full price and hate saving money."',
      'Example B (Health App): Button 1: "Start My Diet Today!" vs Button 2: "No, I don\'t care about my physical health or fitness."',
      'Example C (Travel Insurance): Button 1: "Protect My Vacation ($29)" vs Button 2: "No, I am willing to risk financial ruin if my flight is canceled."',
      'Visual Hierarchy Asymmetry: Notice how the positive button is styled in bold high-contrast green (48px height), while the confirmshaming decline link is rendered in microscopic 11px gray text with zero button background.',
      'The Ethical Antidote: Offer neutral, objective choices: "Claim Discount" and "Skip for now". Treat the user with dignity and respect their autonomy.'
    ],
    layman: {
      title: 'The Guilt-Tripping Waiter Analogy:',
      text: 'Imagine a waiter asking if you want dessert, and when you say no, he shouts across the dining room: "Look at this customer, they hate sweet things and don\'t enjoy being happy!" It is obnoxious, manipulative, and ensures you will never dine there again.'
    },
    keyInsight: {
      title: 'Dignified Microcopy',
      text: 'Never insult or guilt-trip users into taking an action. Ethical microcopy presents neutral facts and honors the user\'s authentic decision.'
    }
  },

  // SLIDE 6: PRIVACY BY DESIGN (PBD)
  {
    id: 'ethics-s6',
    slideNum: 6,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Privacy Architecture',
    title: 'Privacy by Design (PbD) 7 Foundational Principles',
    topicTitle: 'Dr. Ann Cavoukian’s Universal Privacy Framework',
    whatItDoes: 'Embeds data protection directly into the architectural blueprints of software systems rather than bolting it on as an afterthought.',
    whatIsGoingOn: 'Created by Ontario Privacy Commissioner Dr. Ann Cavoukian, PbD is the foundational framework enshrined in international privacy laws including the European GDPR and the Philippine Data Privacy Act of 2012.',
    bullets: [
      '1. Proactive Not Reactive: Anticipate and prevent privacy invasive events before they happen, rather than apologizing after a data leak.',
      '2. Privacy as the Default Setting: If a user takes ZERO action, their personal data remains 100% private. Strict opt-in, never opt-out!',
      '3. Privacy Embedded into Design: Privacy is not an add-on checkmark; it is an organic, fundamental design requirement of every feature.',
      '4. Full Functionality (Positive-Sum, Not Zero-Sum): Reject false trade-offs (e.g. "You can have security OR privacy"). Deliver full functionality with zero privacy compromise.',
      '5. End-to-End Security: Protect data through its entire lifecycle from initial collection to secure, certified cryptographic deletion.',
      '6. Visibility & Transparency: Keep all stakeholders informed with clear, plain-language privacy policies and accessible audit logs.',
      '7. Respect for User Privacy: Keep user interests paramount with granular privacy controls, clear defaults, and 1-click data export.'
    ],
    layman: {
      title: 'The Automobile Seatbelt Analogy:',
      text: 'Privacy by Design is like engineering a car with crumple zones, anti-lock brakes, and pre-tensioned seatbelts built into the chassis at the factory. You don\'t sell an empty tin box and tell the driver to weld on their own brakes later.'
    },
    keyInsight: {
      title: 'The Default Rule',
      text: 'Privacy must be the default operational state. If a user installs your application and clicks nothing, their data must remain 100% private.'
    }
  },

  // SLIDE 7: DATA MINIMIZATION & PERMISSION ARCHITECTURE
  {
    id: 'ethics-s7',
    slideNum: 7,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Mobile Privacy',
    title: 'Data Minimization & In-Context Permission Architecture',
    topicTitle: 'Requesting Hardware Access Responsibly on iOS & Android',
    whatItDoes: 'Enforces that applications collect only the bare minimum personal data required to perform the immediate task requested by the user.',
    whatIsGoingOn: 'Legacy apps routinely demanded blanket access to GPS location, contacts list, camera, microphone, and photo libraries upon first launch, even if the app was just a simple flashlight or calculator.',
    bullets: [
      'The Principle of Data Minimization: "Collect only what you strictly need, keep it only as long as you need it, and delete it immediately thereafter."',
      'Upfront Permission Walls (The Anti-Pattern): Presenting a barrage of 5 system permission dialogs (Camera, Contacts, Location, Bluetooth, Microphone) the moment the app opens causes 65% of users to uninstall immediately.',
      'In-Context Permission Requests (The Gold Standard): Request permission ONLY at the exact moment the user initiates a feature that genuinely requires it (e.g. Asking for Camera access only when the user taps "Scan Barcode").',
      'The Primer Screen Pattern: Display a friendly, branded in-app screen explaining WHY the feature needs hardware access BEFORE triggering the immutable OS system permission dialog.',
      'Apple iOS Privacy Nutrition Labels: Apple forces App Store developers to publicly disclose: 1. Data Used to Track You, 2. Data Linked to You, and 3. Data Not Linked to You.'
    ],
    layman: {
      title: 'The Cashier Asking for ID Analogy:',
      text: 'If you buy a pack of gum at a convenience store, and the cashier demands your passport, mother\'s maiden name, and blood type, you would walk out. An app should never demand permissions irrelevant to its stated purpose.'
    },
    discussionPrompt: {
      question: 'Why did Apple introduce the "Approximate Location" and "Select Photos..." permission options in iOS 14?',
      hint: 'Think about data minimization and why a weather app does not need your exact house address.',
      talkingPoints: [
        'A weather app only needs to know what city you are in, not which bedroom you are sitting in.',
        'A photo upload in a messaging app does not require granting the app permanent access to your entire 10-year photo archive.',
        'Gives users fine-grained sovereignty over their personal digital exhaust.'
      ]
    },
    keyInsight: {
      title: 'Just-in-Time Permissions',
      text: 'Never demand permissions upfront upon app installation. Request access in-context at the exact moment of user action, preceded by a clear primer screen.'
    }
  },

  // SLIDE 8: ALGORITHMIC BIAS & INCLUSIVITY IN HCI
  {
    id: 'ethics-s8',
    slideNum: 8,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Algorithmic Justice',
    title: 'Algorithmic Bias & Inclusivity in HCI',
    topicTitle: 'How Biased Training Data Codifies Discrimination into Software',
    whatItDoes: 'Examines how automated decision systems, AI interfaces, and algorithms reflect, amplify, and automate historical human prejudices.',
    whatIsGoingOn: 'Machine learning algorithms are trained on historical data. If historical data reflects discrimination, redlining, sexism, or racism, the algorithm codifies those injustices as objective truth.',
    bullets: [
      'Facial Recognition Bias (Joy Buolamwini / MIT Media Lab): Landmark studies proved commercial facial recognition error rates were under 0.8% for lighter-skinned men, but skyrocketed to 34.7% for darker-skinned women due to unrepresentative training datasets.',
      'Automated Hiring Algorithms: Amazon had to scrap its AI resume screening engine when audits revealed it actively penalized resumes containing the word "women\'s" (e.g. "captain of women\'s chess team") because historical hiring was male-dominated.',
      'Algorithmic Credit Scoring & Redlining: Credit limit algorithms giving women significantly lower credit lines than their husbands despite identical assets and credit scores.',
      'Accessibility & Ageism Exclusion: Failing to design for aging eyes, tremors, color blindness, or non-English native speakers excludes billions of global citizens.',
      'The Inclusive HCI Mandate: Diversify training data, conduct continuous algorithmic bias audits, and always provide human appeals mechanisms for high-stakes automated decisions.'
    ],
    layman: {
      title: 'The Warped Mirror Analogy:',
      text: 'An AI algorithm is like a mirror reflecting society. If society has historical cracks and flaws, the algorithm reflects and magnifies those cracks. You cannot fix the reflection without actively correcting the underlying data.'
    },
    keyInsight: {
      title: 'Algorithmic Accountability',
      text: 'Algorithms are not neutral math; they are opinions embedded in code. Always audit your models for disparate impact and protect marginalized users.'
    }
  },

  // SLIDE 9: DIGITAL WELLBEING & DOPAMINE ENGINEERING
  {
    id: 'ethics-s9',
    slideNum: 9,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Attention Economy',
    title: 'Digital Wellbeing & Dopamine Engineering',
    topicTitle: 'B.F. Skinner\'s Variable Ratio Schedules in Social Feeds',
    whatItDoes: 'Analyzes the behavioral addiction mechanics engineered by tech platforms to maximize screen time, ad impressions, and user engagement metrics.',
    whatIsGoingOn: 'Tech companies employ neuroscientists and behavioral psychologists to weaponize evolutionary dopamine response loops, transforming smartphones into pocket-sized slot machines.',
    bullets: [
      'B.F. Skinner\'s Variable Ratio Schedule of Reinforcement: Laboratory animals press levers most compulsively when rewards are delivered unpredictably. Social media likes, shares, and video feeds follow this exact casino schedule.',
      'The Slot Machine Pull-to-Refresh: Invented by Loren Brichter, pulling down on a mobile feed deliberately introduces an artificial 1-second delay with a spinning wheel, replicating the suspense of a casino slot machine wheel.',
      'Infinite Scroll (Aza Raskin): Eliminating pagination removes natural stopping cues, keeping human brains trapped in unconscious consumption loops for hours.',
      'Ephemeral Streaks & FOMO: Snapchat and TikTok "streaks" weaponize loss aversion, creating intense social anxiety in teenagers who fear breaking arbitrary digital counters.',
      'Ethical Counter-Measures: Introducing intentional friction: screen time dashboards, daily usage caps, "You\'re All Caught Up" feed milestones (Instagram), and batch notification delivery.'
    ],
    layman: {
      title: 'The Bottomless Soup Bowl Experiment:',
      text: 'Cornell University researchers gave participants a soup bowl that secretly refilled from beneath the table. People ate 73% more soup without realizing it because they had no visual stopping cue. Infinite scroll is a bottomless soup bowl for your brain.'
    },
    discussionPrompt: {
      question: 'Why did Aza Raskin, the inventor of infinite scroll, publicly apologize for his invention?',
      hint: 'Think about human willpower vs an algorithm designed to consume human attention.',
      talkingPoints: [
        'Infinite scroll was originally created to make browsing smoother, not to trap users.',
        'Combined with algorithmic feeds, it steals billions of hours of human life and sleep.',
        'Human willpower cannot defeat 1,000 engineers on the other side of the screen optimizing for addiction.'
      ]
    },
    keyInsight: {
      title: 'Humane Technology',
      text: 'Design interfaces that respect human time. Introduce natural stopping cues and celebrate when users successfully log off and return to their real lives.'
    }
  },

  // SLIDE 10: ETHICAL COUNTER-MEASURES & HUMANE TECH
  {
    id: 'ethics-s10',
    slideNum: 10,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Humane Interface Design',
    title: 'Ethical Counter-Measures & Humane Technology',
    topicTitle: 'Tristan Harris\'s Center for Humane Technology Principles',
    whatItDoes: 'Provides actionable UI patterns and architectural strategies to build software that protects mental health, focus, and human agency.',
    whatIsGoingOn: 'Former Google design ethicist Tristan Harris founded the Center for Humane Technology to guide the industry from "extractive attention capitalism" toward "humane technology".',
    bullets: [
      '1. Natural Stopping Cues: Replacing infinite scroll with clear pagination milestones (e.g., "Page 1 of 5" or "You have reviewed all 10 updates for today").',
      '2. Intentional Friction: Introducing thoughtful delays before destructive or impulsive actions (e.g. Twitter asking "Would you like to read the article before retweeting?").',
      '3. Batch Notification Delivery: Bundling notifications into scheduled daily digests (e.g. morning, lunch, evening) rather than interrupting the user with 150 vibrating buzzes per day.',
      '4. Transparent Financial Summaries: Providing upfront, clear lifetime subscription costs and sending renewal warning emails 7 days prior to charging credit cards.',
      '5. Meaningful Defaults: Defaulting audio to muted, video playback to manual play (no autoplay!), and privacy settings to maximum protection.'
    ],
    layman: {
      title: 'The Glass of Water vs Firehose Analogy:',
      text: 'Addictive technology is like a firehose blasting information in your face until you drown. Humane technology is like a courteous waiter offering you a clean glass of water when you are thirsty.'
    },
    keyInsight: {
      title: 'Humane Design Axiom',
      text: 'Measure product success by time well spent and user goals achieved, not raw screen time and addiction metrics.'
    }
  },

  // SLIDE 11: CHILD SAFETY & GAMING DARK PATTERNS
  {
    id: 'ethics-s11',
    slideNum: 11,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Vulnerable Users',
    title: 'Child Safety & Dark Patterns in Gaming / Social Media',
    topicTitle: 'Protecting Minors from Predatory Monetization & Peer Pressure',
    whatItDoes: 'Examines the predatory exploitation of children\'s undeveloped impulse control in video games, mobile apps, and social platforms.',
    whatIsGoingOn: 'The prefrontal cortex (responsible for impulse control, long-term planning, and risk evaluation) does not fully mature until age 25. Minors are biologically vulnerable to psychological monetization tricks.',
    bullets: [
      'Loot Boxes & Gacha Mechanics: Purchasing blind virtual boxes with real money hoping to win a rare character. Multiple European governments (Belgium, Netherlands) classify loot boxes as illegal child gambling.',
      'Obfuscated Virtual Currencies: Converting real money into multi-tiered virtual tokens (e.g. $10 &rarr; 800 Robux &rarr; 500 V-Bucks) to intentionally mask the real-world financial cost of digital cosmetics.',
      'Artificial Countdown Timers: Fake countdown clocks ("Sale ends in 04:12!") engineered to trigger intense panic and impulsive purchases in young players.',
      'Social Humiliation & Default Skins: Weaponizing peer pressure in multiplayer games where players using free default skins are bullied by peers into buying premium cosmetic skins.',
      'Parental Gate Protections: Mandating robust mathematical challenge gates and biometric authentication before allowing in-app purchase dialogs.'
    ],
    layman: {
      title: 'The Arcade Claw Machine Analogy:',
      text: 'Claw machines in arcades are programmed to slip 95% of the time, keeping children feeding coins into the slot. Digital loot boxes take that arcade trick, supercharge it with algorithms, and put it in every child\'s pocket.'
    },
    keyInsight: {
      title: 'Duty of Care',
      text: 'Minors lack mature impulse control. Designing deceptive monetization or addictive loops targeted at children is an egregious ethical violation.'
    }
  },

  // SLIDE 12: THE LEGAL & REGULATORY LANDSCAPE
  {
    id: 'ethics-s12',
    slideNum: 12,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Legal Compliance',
    title: 'The Global Legal & Regulatory Landscape',
    topicTitle: 'GDPR, US FTC, and Philippine Data Privacy Act (RA 10173)',
    whatItDoes: 'Summarizes the international statutory regulations, financial penalties, and enforcement mechanisms governing digital user rights.',
    whatIsGoingOn: 'Deceptive design and privacy invasion are no longer just moral dilemmas; they are criminal and civil violations resulting in multi-billion dollar fines.',
    bullets: [
      'European Union General Data Protection Regulation (GDPR): Mandates explicit, affirmative opt-in consent. Pre-checked boxes are strictly illegal. Fines up to €20 million or 4% of global annual turnover.',
      'EU Digital Services Act (DSA - 2023): Explicitly outlaws deceptive dark patterns, banning platforms from designing interfaces that distort or impair user autonomy.',
      'Philippine Data Privacy Act of 2012 (Republic Act No. 10173): Governed by the National Privacy Commission (NPC). Mandates transparency, legitimate purpose, proportionality, and grants Filipino citizens the right to object, access, and erase their personal data.',
      'US Federal Trade Commission (FTC) Section 5: Prosecutes unfair and deceptive business practices, forcing tech giants (Epic Games, Amazon, Google) to refund hundreds of millions of dollars in deceptive billing.',
      'Right to be Forgotten: Citizens have the legally protected right to demand complete, permanent deletion of their personal accounts and data trails.'
    ],
    layman: {
      title: 'The Health Inspection Analogy:',
      text: 'Just like restaurant owners face shutdown and arrest if health inspectors find rats in the kitchen or expired food in the freezer, tech companies face massive legal penalties if privacy regulators find dark patterns and illegal data harvesting in their code.'
    },
    keyInsight: {
      title: 'Statutory Reality',
      text: 'Compliance is mandatory. Designing deceptive interfaces risks catastrophic corporate fines, regulatory prosecution, and total loss of public license to operate.'
    }
  },

  // SLIDE 13: THE ETHICAL DESIGN AUDIT PROTOCOL
  {
    id: 'ethics-s13',
    slideNum: 13,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Audit Frameworks',
    title: 'The Ethical Design Audit Protocol',
    topicTitle: 'A 4-Step Checklist Before Releasing Any Production Feature',
    whatItDoes: 'Provides development teams with a pragmatic, structured checklist to audit features for ethical violations prior to deployment.',
    whatIsGoingOn: 'Just as engineering teams run automated unit tests and security scans, design teams must run ethical audits before pushing code to production.',
    bullets: [
      'Test 1: The "Front Page of the Newspaper" Test — If our deceptive UI trick or subscription trap was published on the front page of the New York Times or Philippine Daily Inquirer tomorrow, would our executive team be proud or humiliated?',
      'Test 2: The "Grandma Test" — Would you feel comfortable with your own grandmother or younger sibling navigating this checkout flow without you sitting next to them?',
      'Test 3: The "Symmetric Action Test" — Does it take the exact same amount of time, steps, and visual clarity to undo an action (cancel, unsubscribe, delete) as it took to do it?',
      'Test 4: The "Autonomous Choice Test" — Are options presented with equal visual contrast, neutral wording, and zero pre-checked boxes?',
      'Deployment Gate: If a proposed feature fails any of these four tests, it must be rejected at code review regardless of short-term revenue projections.'
    ],
    layman: {
      title: 'The Pre-Flight Airplane Checklist:',
      text: 'Airline pilots don\'t guess if the plane is safe; they go down a strict, physical pre-flight checklist. The Ethical Design Audit is your pre-flight checklist ensuring your software doesn\'t crash your users\' lives.'
    },
    discussionPrompt: {
      question: 'What should a junior UX designer or frontend engineer do if their boss orders them to implement a deceptive Roach Motel dark pattern?',
      hint: 'Think about professional codes of ethics, company liability, and presenting data-driven business alternatives.',
      talkingPoints: [
        'Document the ethical objection professionally in writing.',
        'Present empirical data showing that deceptive patterns lead to high chargeback fees, brand boycotts, and legal FTC/GDPR liability.',
        'Propose an honest, high-value alternative that achieves business metrics without deception.'
      ]
    },
    keyInsight: {
      title: 'Professional Responsibility',
      text: 'Never ship a pattern you would be ashamed to explain to your family. Maintain professional integrity: you are the guardian of your users\' digital rights.'
    }
  },

  // SLIDE 14: CASE STUDY: REDESIGNING FOR ETHICAL UX
  {
    id: 'ethics-s14',
    slideNum: 14,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Ethical Transformation',
    title: 'Case Study: Duolingo & Apple Privacy Leadership',
    topicTitle: 'How Ethical Transparency Outperforms Predatory Tricks',
    whatItDoes: 'Demonstrates how leading tech companies turned ethical transparency into their primary competitive market advantage.',
    whatIsGoingOn: 'Ethical design is not merely defensive; it is a massive commercial differentiator. Trustworthy products enjoy dramatically higher customer lifetime value (LTV).',
    bullets: [
      'Apple\'s App Tracking Transparency (ATT): Apple introduced the "Ask App not to Track" prompt in iOS 14.5. Over 80% of global users opted out of ad tracking, establishing Apple as the world\'s premier privacy-first brand.',
      'Duolingo Trial Reminders: Unlike shady subscription apps that rely on users forgetting their free trial, Duolingo sends a push notification 2 days before the trial ends: "Your trial ends in 48 hours. We will charge your card on Friday, or you can cancel now with 1 tap."',
      'The Resulting Retention Paradox: Duolingo discovered that sending cancellation reminders actually INCREASED long-term subscription retention, because users trusted the company and felt safe paying them!',
      'Radical Pricing Transparency (Basecamp): Displaying plain-language pricing with zero hidden fees and 1-click account deletion directly in the user profile.',
      'The Long-Term Economic Lesson: Predatory deceptive tricks yield quick 1-month revenue spikes followed by catastrophic churn. Honest, ethical UX builds decade-long customer trust.'
    ],
    layman: {
      title: 'The Honest Mechanic Analogy:',
      text: 'A dishonest mechanic invents fake engine problems to take your money once. An honest mechanic tells you: "Your brake pads have 6 months left; don\'t spend your money today." You will happily bring your car to that honest mechanic for the next 20 years.'
    },
    keyInsight: {
      title: 'The Trust Economy',
      text: 'Honesty is the most profitable long-term business strategy. Users reward transparent, respectful platforms with unwavering loyalty.'
    }
  },

  // SLIDE 15: SUMMARY & CAPSTONE CHECKLIST
  {
    id: 'ethics-s15',
    slideNum: 15,
    totalSlides: 15,
    type: 'section_break',
    sectionNum: 'Week 16 Mastered',
    title: 'Ethical Considerations in HCI Mastered',
    description: 'You have mastered Harry Brignull\'s deceptive design taxonomy, Ann Cavoukian\'s Privacy by Design framework, child protection mechanics, digital wellbeing counter-measures, global privacy statutory compliance, and the 4-step ethical design audit protocol.'
  }
];

// ============================================================================
// WEEK 17: REVIEW AND PRACTICAL APPLICATIONS (15 Comprehensive Slides)
// Patterns: Review course concepts, practical applications, problem-solving
// ============================================================================
export const mediaDsnReviewSlidesData: SlideData[] = [
  // SLIDE 1: COVER
  {
    id: 'review-s1',
    slideNum: 1,
    totalSlides: 15,
    type: 'cover',
    moduleTag: 'Week 17 — HUMAN-COMPUTER INTERACTION (IT-HCI1)',
    title: 'Review and Practical Applications',
    subtitle: 'Comprehensive Course Synthesis, Integrated Design Systems, Production Heuristic Audits, and Capstone Case Study Problem-Solving',
    metadata: [
      { label: 'Week', val: 'Week 17' },
      { label: 'Curriculum', val: 'Human-Computer Interaction (HCI)' },
      { label: 'Scope', val: 'Weeks 1 Through 16 Full Synthesis' },
      { label: 'Deliverable', val: 'Capstone Usability & Accessibility Audit' }
    ]
  },

  // SLIDE 2: OBJECTIVES & ROADMAP
  {
    id: 'review-s2',
    slideNum: 2,
    totalSlides: 15,
    type: 'interactive_objectives',
    moduleTag: 'Learning Competencies',
    title: 'Week 17 Learning Competencies',
    topicTitle: 'Core Learning Objectives in HCI Synthesis & Execution',
    bullets: [
      'Synthesize the 5 Pillars of HCI: Harmonize Cognitive Ergonomics, Visual UI Systems, Accessibility (WCAG 2.2), Responsive Architecture, and Digital Ethics.',
      'Internalize Donald Norman\'s Interaction Principles: Apply Affordances, Signifiers, Constraints, Mapping, Feedback, and Conceptual Models to diagnose broken physical and digital interfaces.',
      'Deploy Jakob Nielsen\'s 10 Usability Heuristics: Master systematic heuristic evaluation methods to identify, severity-rate, and repair usability flaws.',
      'Execute Mathematical Ergonomic Laws: Solve interface friction using Fitts’s Law (button hitboxes), Hick’s Law (decision latency), and Miller’s Law (working memory chunking).',
      'Conduct End-to-End Production Case Audits: Diagnose and reconstruct flawed real-world applications (Healthcare portals, high-volume mobile e-commerce, and fintech workflows).'
    ],
    layman: {
      title: 'The Master Builder Analogy:',
      text: 'In previous weeks, you studied individual construction materials: foundations (Norman cognitive psychology), steel frames (8pt layout grids), plumbing (information architecture), ramps (accessibility), and fire alarms (ethical privacy safeguards). Week 17 is where you construct the complete, functioning architectural skyscraper.'
    },
    keyInsight: {
      title: 'From Theory to Mastery',
      text: 'True HCI expertise is not memorizing terminology. It is the instinctual ability to look at any flawed digital screen and immediately diagnose how to make it intuitive, accessible, and delight-inducing.'
    }
  },

  // SLIDE 3: THE 5 INTEGRATED PILLARS OF HCI
  {
    id: 'review-s3',
    slideNum: 3,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Curriculum Synthesis',
    title: 'The 5 Integrated Pillars of Modern HCI',
    topicTitle: 'How Every Module Connects in Production Software',
    whatItDoes: 'Unifies the entire semester\'s curriculum into a single cohesive, professional design execution pipeline.',
    whatIsGoingOn: 'A production application cannot succeed if it excels in visual craft but fails in accessibility, or excels in mobile reflow but exploits users with deceptive dark patterns.',
    bullets: [
      'Pillar 1: Cognitive Foundations — Don Norman\'s mental models, gulf of execution, cognitive load theory, and Jakob Nielsen\'s 10 usability heuristics.',
      'Pillar 2: Visual UI & Layout Engineering — 8-point spatial grid, modular type scales (Major Third 1.25), 60-30-10 color theory, and Gestalt grouping laws.',
      'Pillar 3: Accessibility (WCAG 2.2 AA) — 4.5:1 text contrast ratios, 48px touch targets, full keyboard focus rings, screen reader ARIA semantics, and prefers-reduced-motion.',
      'Pillar 4: Mobile & Information Architecture — Thumb zone ergonomics, mobile-to-desktop progressive enhancement, card sorting taxonomies, and 4-tier navigation systems.',
      'Pillar 5: Ethical Design & Trust — Privacy by Design (PbD), data minimization, eliminating deceptive dark patterns, and protecting human attention.'
    ],
    layman: {
      title: 'The Pentathlon Athlete Analogy:',
      text: 'An Olympic modern pentathlon athlete must run, swim, fence, ride horses, and shoot. Being the fastest runner in the world will not save you if you cannot swim. An elite HCI engineer must master all 5 pillars simultaneously.'
    },
    keyInsight: {
      title: 'Holistic HCI',
      text: 'Excellence in HCI requires harmony across all 5 disciplines. Neglecting even one pillar compromises the integrity of the entire user experience.'
    }
  },

  // SLIDE 4: DON NORMAN’S FUNDAMENTAL PRINCIPLES
  {
    id: 'review-s4',
    slideNum: 4,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Cognitive Foundations',
    title: 'Don Norman’s Fundamental Principles of Interaction',
    topicTitle: 'Affordances, Signifiers, Constraints, Mapping & Feedback',
    whatItDoes: 'Provides the bedrock psychological framework for analyzing how human beings interact with artifacts in their environment.',
    whatIsGoingOn: 'Published in "The Design of Everyday Things", Donald Norman defined the universal interaction mechanics that explain why doors are hard to push and buttons are hard to click.',
    bullets: [
      '1. Affordance: The fundamental physical properties of an object that determine how it could possibly be used (e.g. A chair affords sitting; glass affords seeing through).',
      '2. Signifier: Any perceivable indicator that signals WHERE and HOW action should take place (e.g. A flat metal plate on a door signifies "PUSH"; a drop shadow on a digital button signifies "TAP ME").',
      '3. Constraint: Physical, logical, or cultural limitations that prevent incorrect actions (e.g. You cannot insert a USB plug upside down; graying out a "Submit" button until all required fields are filled).',
      '4. Natural Mapping: The spatial relationship between controls and their real-world effects (e.g. Stove burner knobs arranged in the exact same spatial grid as the 4 burners).',
      '5. Feedback: Instant, unambiguous sensory confirmation that an action has been registered (e.g. A haptic click, a sound chime, or a spinner wheel confirming order submission).'
    ],
    layman: {
      title: 'The Norman Door Analogy:',
      text: 'Have you ever walked up to a door with a vertical brass handle, pulled it, and slammed your face because it was a PUSH door? The handle had a pulling affordance. A flat metal push-plate is an unambiguous signifier that requires zero cognitive thought.'
    },
    discussionPrompt: {
      question: 'What is the difference between an Affordance and a Signifier in a digital mobile app?',
      hint: 'A smartphone screen is flat glass (physical affordance); what makes an icon look tappable?',
      talkingPoints: [
        'A touchscreen physically affords only touching, tapping, and swiping.',
        'Digital buttons do not physically exist—they are visual signifiers (borders, shadows, icons) that communicate clickability.',
        'When designers remove signifiers (e.g. flat plain text with zero underlines), users no longer know what is clickable.'
      ]
    },
    keyInsight: {
      title: 'Norman’s Law',
      text: 'When users make mistakes, it is rarely human error; it is almost always poor design that failed to provide clear signifiers, constraints, and natural mapping.'
    }
  },

  // SLIDE 5: JAKOB NIELSEN’S 10 USABILITY HEURISTICS
  {
    id: 'review-s5',
    slideNum: 5,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Evaluation Heuristics',
    title: 'Jakob Nielsen’s 10 Usability Heuristics',
    topicTitle: 'The Universal Diagnostic Matrix for User Interface Audits',
    whatItDoes: 'Serves as the international industry-standard diagnostic checklist for evaluating interface usability and user friction.',
    whatIsGoingOn: 'Developed in 1994 by Dr. Jakob Nielsen and Rolf Molich, these 10 rules account for over 85% of all identified interface usability bugs.',
    bullets: [
      '1. Visibility of System Status: Always keep users informed through appropriate, timely feedback (e.g. Progress bars, upload percentage counters).',
      '2. Match between System and Real World: Speak the user\'s language using familiar words, phrases, and concepts rather than internal system jargon.',
      '3. User Control and Freedom: Provide clearly marked emergency exits and reversible actions (e.g. "Undo", "Cancel", and back navigation).',
      '4. Consistency and Standards: Follow platform conventions (e.g. Underlined blue text means link; shopping cart top-right). Don\'t reinvent established wheels.',
      '5. Error Prevention: Better than good error messages is careful design that prevents errors from occurring in the first place (e.g. Date pickers instead of manual text inputs).',
      '6. Recognition Rather than Recall: Minimize human memory load by making elements, actions, and options visible. Don\'t make users remember data across screens.',
      '7. Flexibility and Efficiency of Use: Accommodate both novice users (guided wizards) and advanced power users (keyboard shortcuts and accelerators).',
      '8. Aesthetic and Minimalist Design: Eliminate superfluous visual noise that competes with high-priority information.',
      '9. Help Users Recognize, Diagnose, and Recover from Errors: Plain-language error messages explaining exactly what went wrong and how to fix it immediately.',
      '10. Help and Documentation: Provide searchable, concise, task-oriented documentation right at the point of need.'
    ],
    layman: {
      title: 'The Medical Diagnostic Checklist:',
      text: 'Just like an emergency room physician checks pulse, blood pressure, oxygen saturation, and pupil response, an HCI auditor runs through Nielsen\'s 10 heuristics to diagnose the health of a digital interface.'
    },
    keyInsight: {
      title: 'Heuristic Mastery',
      text: 'Memorize Nielsen’s 10 Heuristics. They are the stethoscope and scalpel of every professional UX designer and software architect.'
    }
  },

  // SLIDE 6: MATHEMATICAL ERGONOMIC LAWS (FITTS, HICK & MILLER)
  {
    id: 'review-s6',
    slideNum: 6,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Quantitative HCI Laws',
    title: 'The Mathematical Laws of HCI: Fitts, Hick & Miller',
    topicTitle: 'Quantifying Human Motor and Cognitive Performance',
    whatItDoes: 'Applies quantitative mathematical equations to model human movement time, decision latency, and working memory limits in digital interfaces.',
    whatIsGoingOn: 'HCI is a hard quantitative science. These three mathematical laws allow engineers to calculate exact interaction times before writing a single line of code.',
    bullets: [
      'Fitts’s Law: MT = a + b · log2(2D / W). Movement time is a function of the distance (D) to the target and the width (W) of the target. Larger targets and targets close to the hand are hit dramatically faster. (Explains why full-width mobile checkout buttons convert highest!).',
      'Hick’s Law: RT = b · log2(n + 1). Reaction time increases logarithmically with the number (n) of choices presented. Doubling menu options from 4 to 8 increases decision hesitation. (Explains why bottom nav bars cap at 5 tabs!).',
      'Miller’s Law: The human working memory limit is 7 ± 2 chunks of information (modern cognitive research shows 4 ± 1 for complex data). Interfaces must group dense data into digestible cognitive chunks (e.g. Formatting credit card numbers as 4-4-4-4).',
      'Tesler’s Law (Conservation of Complexity): Every system has an inherent amount of irreducible complexity. The only question is: Does the developer absorb that complexity in software, or does the user suffer it in confusion?',
      'Jakob’s Law of Internet User Experience: Users spend 99% of their time on OTHER websites. They expect your site to work just like all the other sites they already know.'
    ],
    layman: {
      title: 'The Kitchen Drawer Analogy:',
      text: 'If your kitchen drawer has 50 unorganized loose tools, finding a knife takes forever (Hick’s Law). If the drawer has 4 labeled dividers (Miller’s Law) and the knife handle is wide and easy to grab (Fitts’s Law), you grab it in 1 second.'
    },
    keyInsight: {
      title: 'Quantitative Design',
      text: 'Design decisions can be mathematically calculated. Make targets large and close (Fitts), choices minimal (Hick), and content chunked (Miller).'
    }
  },

  // SLIDE 7: WCAG 2.2 AA ACCESSIBILITY AUDIT MATRIX
  {
    id: 'review-s7',
    slideNum: 7,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Accessibility Compliance',
    title: 'WCAG 2.2 AA Accessibility Compliance Matrix',
    topicTitle: 'The 4 POUR Principles and Production Auditing Standards',
    whatItDoes: 'Synthesizes the W3C Web Content Accessibility Guidelines (WCAG 2.2 Level AA) into a rigorous production compliance matrix.',
    whatIsGoingOn: 'Accessibility is a fundamental civil human right. Modern legal frameworks worldwide mandate WCAG 2.2 AA compliance for public and commercial software.',
    bullets: [
      'P — Perceivable: Information and UI components must be presentable to users in ways they can perceive. 1. 4.5:1 contrast ratio for normal text; 3:1 for large text and UI components. 2. Meaningful alt text on images. 3. Closed captions on video media.',
      'O — Operable: UI components and navigation must be operable. 1. Full keyboard operability (Tab, Shift+Tab, Enter, Escape). 2. Visible focus rings (never outline: none!). 3. Minimum 44×44px / 48×48dp touch targets.',
      'U — Understandable: Information and operation must be understandable. 1. Specify <html lang="en"> for screen reader pronunciation. 2. Predictable navigation. 3. Input assistance with clear error suggestions.',
      'R — Robust: Content must be robust enough to be interpreted reliably by diverse user agents, including assistive technologies. 1. Valid semantic HTML tags (<main>, <nav>, <button>). 2. Accurate ARIA labels and live regions.',
      'Automated vs Manual Auditing: Automated tools (Lighthouse, axe-core) catch only 30% to 40% of accessibility violations. Manual screen reader testing (NVDA, VoiceOver) is mandatory for 100% compliance.'
    ],
    layman: {
      title: 'The Wheelchair Ramp Analogy:',
      text: 'Building a building with stairs and no wheelchair ramp excludes people with mobility challenges. Designing a website with low contrast and no keyboard navigation builds digital stairs that lock disabled citizens out of the modern economy.'
    },
    discussionPrompt: {
      question: 'Why do so many CSS resets include "button:focus { outline: none; }", and why is that considered a catastrophic accessibility violation?',
      hint: 'How does a blind or motor-impaired user who navigates with a keyboard know where they are on the page?',
      talkingPoints: [
        'Visual designers remove focus outlines because they think the default blue ring looks "ugly".',
        'Removing focus rings makes the site completely unusable for keyboard-only users, who cannot see what is selected.',
        'The correct solution is styling a custom, high-contrast, beautiful focus ring using ":focus-visible".'
      ]
    },
    keyInsight: {
      title: 'POUR Sovereignty',
      text: 'Accessibility is not an optional charity feature. If an interface is not Perceivable, Operable, Understandable, and Robust, it is unfinished software.'
    }
  },

  // SLIDE 8: RESPONSIVE MOBILE-FIRST ARCHITECTURE SYNTHESIS
  {
    id: 'review-s8',
    slideNum: 8,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Cross-Platform Mastery',
    title: 'Responsive Mobile-First Architecture Synthesis',
    topicTitle: 'Unifying Breakpoints, 16px Typography, and the 8pt Spatial Grid',
    whatItDoes: 'Connects the complete responsive engineering pipeline from 320px mobile touch devices to 4K desktop workstations.',
    whatIsGoingOn: 'Brings together the physical mechanics of touch ergonomics, the historical 16px baseline, and sub-pixel hardware grid alignment into a unified development workflow.',
    bullets: [
      '1. Thumb Zone Allocation: Dock primary actions (sticky checkouts, bottom tabs) in the lower 33% Natural Thumb Zone.',
      '2. The 16px Sovereign Baseline: Root body font-size: 16px (1rem). Form inputs strictly >= 16px on mobile to permanently disarm the iOS Safari camera auto-zoom bug.',
      '3. Robert Bringhurst Line Measure: Cap body paragraphs at max-width: 65ch with line-height: 1.5 to guarantee optimal human visual tracking.',
      '4. The 8-Point Spatial Grid: Every margin, padding, height, and width scaled in multiples of 8 (8, 16, 24, 32, 48px), guaranteeing zero sub-pixel interpolation blur on 1.5x displays.',
      '5. Eye-Tracking Layout Alignment: Align landing page conversions with the Z-Pattern terminal point, and front-load article headlines along the F-Pattern vertical reading spine.'
    ],
    layman: {
      title: 'The Swiss Watch Analogy:',
      text: 'A mechanical Swiss watch has hundreds of microscopic gears. If the escape wheel, balance spring, and mainspring are synchronized to the exact same frequency, the watch keeps perfect time for 50 years. Responsive HCI is the synchronization of pixels, typography, and spacing.'
    },
    keyInsight: {
      title: 'Responsive Harmony',
      text: 'Responsive design is the perfect harmony of 16px root typography, 8pt spatial cadence, and thumb zone reachability across any viewport.'
    }
  },

  // SLIDE 9: INFORMATION ARCHITECTURE & TAXONOMY SYNTHESIS
  {
    id: 'review-s9',
    slideNum: 9,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'IA Synthesis',
    title: 'Information Architecture & Taxonomy Synthesis',
    topicTitle: 'Sitemaps, 4 Navigation Layers, and Search Engine Resiliency',
    whatItDoes: 'Unifies mental model research, sitemap structural design, and multi-tier wayfinding into a cohesive information architecture engine.',
    whatIsGoingOn: 'Information architecture ensures that users never feel lost, frustrated, or uncertain about how to achieve their immediate real-world goals.',
    bullets: [
      '1. The 3 Circles of IA: Balance User mental models, Content repository constraints, and Business context drivers.',
      '2. Empirical Validation: Run Open Card Sorting to discover natural category clusters, followed by Tree Testing to measure findability success rates without visual UI bias.',
      '3. The 4 Navigation Layers: Synchronize Global persistent headers, Local section navigation, Contextual inline hyperlinks, and Supplementary breadcrumb trails.',
      '4. Plain-Language Ergonomics: Eliminate internal corporate acronyms; use task-oriented, predictable labels with high "information scent".',
      '5. Resilient Search Architecture: Deploy autocomplete predictive typeahead, typo tolerance (Levenshtein distance), and zero-results fallbacks.'
    ],
    layman: {
      title: 'The Highway System Analogy:',
      text: 'A well-engineered highway system has overhead interstate signs, exit numbers, mileage markers, and rest stop listings. Drivers travel across countries at 100 km/h without getting lost. Great IA gives digital users that same effortless velocity.'
    },
    keyInsight: {
      title: 'Findability Mastery',
      text: 'Structure content by user mental models, validate with card sorting, and guide users with continuous 4-tier navigation.'
    }
  },

  // SLIDE 10: ETHICAL UX & DARK PATTERN PREVENTION
  {
    id: 'review-s10',
    slideNum: 10,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Ethical Leadership',
    title: 'Ethical UX & Dark Pattern Prevention Protocol',
    topicTitle: 'Protecting Human Agency, Privacy by Design, and Trust',
    whatItDoes: 'Synthesizes the ethical safeguards and regulatory compliance protocols required to engineer humane, trust-building digital products.',
    whatIsGoingOn: 'Ethical engineering protects users from exploitation and shields corporations from catastrophic regulatory fines and brand destruction.',
    bullets: [
      '1. Eliminate Deceptive Patterns: Eradicate Roach Motels, Confirmshaming, Sneak into Basket, Hidden Fees, and Disguised Ads.',
      '2. Enforce Interaction Symmetry: Make canceling, unsubscribing, and account deletion just as fast and easy as signing up (1-click in = 1-click out).',
      '3. Enforce Privacy by Design (PbD): Privacy must be the default operational state. Collect only the absolute minimum data required (Data Minimization).',
      '4. In-Context Hardware Permissions: Never present upfront permission walls. Request camera, location, and photos only at the exact moment of user action.',
      '5. Protect Human Attention: Eliminate addictive dopamine traps (infinite scroll, variable ratio delays) and introduce natural stopping cues.'
    ],
    layman: {
      title: 'The Hippocratic Oath of Design:',
      text: 'Before doctors treat patients, they swear: "First, do no harm." Professional HCI engineers swear that same oath: "First, do not deceive, do not trap, and do not exploit the human beings using our software."'
    },
    keyInsight: {
      title: 'Trust Above All',
      text: 'Long-term corporate enterprise value is built on customer trust. Protect human agency, practice radical transparency, and reject deceptive shortcuts.'
    }
  },

  // SLIDE 11: THE COMPREHENSIVE 4-STEP HCI AUDIT PROTOCOL
  {
    id: 'review-s11',
    slideNum: 11,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Diagnostic Protocol',
    title: 'The Comprehensive 4-Step HCI Audit Protocol',
    topicTitle: 'A Systematic Diagnostic Framework for Any Broken Application',
    whatItDoes: 'Provides senior engineers and UX architects with a repeatable, systematic diagnostic methodology to evaluate and refactor flawed digital products.',
    whatIsGoingOn: 'Amateur designers jump straight into Figma and draw pretty buttons. Elite HCI architects follow systematic forensic diagnostic protocols.',
    bullets: [
      'Step 1: Empathy & Task Analysis — Map user personas, primary jobs-to-be-done, conversion funnels, and identify where users experience severe cognitive friction.',
      'Step 2: Heuristic & Accessibility Evaluation — Conduct a forensic audit scoring the product against Jakob Nielsen’s 10 Usability Heuristics and WCAG 2.2 AA accessibility standards.',
      'Step 3: Information Architecture & Reflow Restructuring — Simplify bloated menus using card sorting, eliminate orphan pages, and architect mobile-first 8pt layout reflow.',
      'Step 4: Ethical & Usability Validation — Audit the experience for dark patterns, verify transparent defaults, and test the refactored prototype with 5 representative target users.'
    ],
    layman: {
      title: 'The Aircraft Crash Investigation Analogy:',
      text: 'When aviation investigators inspect an incident, they don\'t guess. They recover the black box, test mechanical stress, examine cockpit telemetry, and review pilot checklists. The 4-Step HCI Audit is your forensic black box investigation for software.'
    },
    discussionPrompt: {
      question: 'Why does Jakob Nielsen argue that testing with just 5 users uncovers 85% of all usability problems in an application?',
      hint: 'Think about diminishing returns and overlapping discovery curves in qualitative testing.',
      talkingPoints: [
        'The first user uncovers 30% of usability flaws; the second uncovers another 20%; by the fifth user, you observe the same major blockers repeatedly.',
        'Running 3 tests with 5 users iteratively is dramatically more cost-effective than 1 test with 15 users.',
        'Iterate quickly and fix severe bugs between test rounds.'
      ]
    },
    keyInsight: {
      title: 'Systematic Forensics',
      text: 'Never rely on subjective personal opinions. Use the 4-Step Audit to provide empirical, heuristic, and accessibility evidence for every design recommendation.'
    }
  },

  // SLIDE 12: REAL-WORLD AUDIT 1: HEALTHCARE / CLINICAL PORTAL
  {
    id: 'review-s12',
    slideNum: 12,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Case Study 1',
    title: 'Real-World Audit 1: Healthcare Patient Portal',
    topicTitle: 'Eliminating Medical Diagnostic Friction & Preventing Dosage Errors',
    whatItDoes: 'Applies full-course HCI principles to audit and redesign a high-stakes electronic health records (EHR) and patient hospital portal.',
    whatIsGoingOn: 'In healthcare software, bad HCI is literally life-threatening. Confusing medical medication forms, ambiguous dosages, and poor contrast can result in patient fatality.',
    bullets: [
      'The Flawed Baseline: Hospital portal with 12px light-gray text, unchunked prescription lists, and conflicting "Cancel" vs "Administer Morphine" buttons placed 4px apart!',
      'Heuristic Violation 1 (Error Prevention): Redesigned medication dosage inputs to use strict numerical steppers and explicit unit selectors (mg vs mL) with visual sanity warnings for lethal dosages.',
      'Heuristic Violation 2 (Fitts’s Law & Destructive Spacing): Separated "Confirm Administration" (56px high green button) from "Cancel" by 32px of negative space to eliminate catastrophic accidental mis-taps.',
      'Accessibility Remediations (WCAG 2.2 AA): Upgraded text contrast to 7:1 AAA standard, increased base font to 16px, and implemented large 48px touch targets for trembling hands or gloved hospital nurses.',
      'The Life-Saving Outcome: Clinical nurse entry errors dropped by 82%, medication logging time decreased by 4 minutes per patient, and patient portal adoption among elderly citizens surged by 210%.'
    ],
    layman: {
      title: 'The Airplane Cockpit Emergency Button Analogy:',
      text: 'In an airplane cockpit, the fire extinguisher handle is painted bright red, shaped differently from all other switches, and covered by a safety guard. Critical medical actions require that same physical and cognitive protection.'
    },
    keyInsight: {
      title: 'Life-Critical HCI',
      text: 'In healthcare, HCI is not about conversion rates; it is about human life. Error prevention, high contrast, and generous target separation are non-negotiable.'
    }
  },

  // SLIDE 13: REAL-WORLD AUDIT 2: MOBILE E-COMMERCE CHECKOUT
  {
    id: 'review-s13',
    slideNum: 13,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Case Study 2',
    title: 'Real-World Audit 2: High-Volume E-Commerce App',
    topicTitle: 'Refactoring a Shopee/Lazada Style Checkout from Chaos to Flow',
    whatItDoes: 'Audits and refactors a high-volume mobile shopping application suffering from severe cart abandonment and cognitive overload.',
    whatIsGoingOn: 'Many e-commerce apps assault users with flashing voucher banners, pre-checked insurance upsells, microscopic address forms, and confusing fee breakdowns.',
    bullets: [
      'The Flawed Baseline: 68% mobile cart abandonment. 14px coupon inputs causing iOS Safari camera zoom spasms, pre-checked ₱150 shipping insurance (Sneak into Basket), and surprise convenience fees disclosed at the last step.',
      'Fix 1 (iOS Auto-Zoom Neutralization): Set all mobile inputs to font-size: 16px (1rem), locking the viewport at 100% width and eliminating disorienting camera jerks.',
      'Fix 2 (Thumb Zone Action Sheet): Consolidated shipping address, payment method, and total summary into a clean bottom-sheet dialog with a full-width 52px "Place Order" button in the Natural Thumb Zone.',
      'Fix 3 (Ethical Dark Pattern Elimination): Removed pre-checked insurance checkboxes, displayed transparent all-inclusive pricing upfront, and provided a 1-click cancellation window.',
      'The Business Outcome: Mobile checkout completion rate increased by 27%, cart abandonment dropped by 18%, and customer support refund requests plummeted by 54%.'
    ],
    layman: {
      title: 'The Fast-Track Airport Security Line Analogy:',
      text: 'Instead of an airport security line where passengers are shoved, questioned 5 times, and hit with surprise baggage fees, you build a clean, transparent fast-track lane where everyone glides through in 3 minutes.'
    },
    keyInsight: {
      title: 'E-Commerce Flow',
      text: 'Frictionless checkouts combine 16px inputs, thumb zone sticky buttons, and transparent ethical pricing to maximize revenue and user trust.'
    }
  },

  // SLIDE 14: CAPSTONE EVALUATION RUBRIC & PEER CRITIQUE
  {
    id: 'review-s14',
    slideNum: 14,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Capstone Readiness',
    title: 'Capstone Evaluation Rubric & Peer Critique Framework',
    topicTitle: 'How to Give and Receive Rigorous, Constructive HCI Critiques',
    whatItDoes: 'Establishes the professional peer review and capstone grading standards used to evaluate production-ready interface designs.',
    whatIsGoingOn: 'Professional software engineering teams rely on structured design critiques (design reviews) to catch usability flaws before investing months of expensive development time.',
    bullets: [
      'Criterion 1: Usability Heuristics Compliance (25%) — Does the design adhere strictly to Jakob Nielsen’s 10 heuristics, offering visibility of status, error prevention, and clear exits?',
      'Criterion 2: Accessibility & Universal Design (25%) — Does the interface satisfy WCAG 2.2 AA (4.5:1 contrast, 48px touch targets, full keyboard accessibility, visible focus rings)?',
      'Criterion 3: Responsive Architecture & Layout (20%) — Does the system implement 16px typography baselines, 8pt spatial grid cadence, and seamless reflow between mobile and desktop?',
      'Criterion 4: Information Architecture & Navigation (15%) — Is the sitemap intuitive, free of orphan dead ends, and supported by structured multi-tier navigation?',
      'Criterion 5: Ethical Integrity & Transparency (15%) — Is the product 100% free of deceptive dark patterns, equipped with Privacy by Design defaults, and respectful of human attention?'
    ],
    layman: {
      title: 'The Master Chef Taste Test Analogy:',
      text: 'A master chef doesn\'t just say "this food tastes good." They evaluate balance: acidity, salt, texture, temperature, and presentation. The HCI Rubric evaluates the balance of usability, accessibility, responsiveness, architecture, and ethics.'
    },
    discussionPrompt: {
      question: 'When participating in a peer design critique, why should you NEVER say "I don\'t like that blue button"? What should you say instead?',
      hint: 'Frame critiques around objective user goals, cognitive principles, and accessibility standards rather than personal taste.',
      talkingPoints: [
        'Personal taste is subjective and leads to defensive emotional arguments.',
        'Objective critique: "The blue button has a 2.8:1 contrast ratio against the gray background, failing WCAG 2.2 AA contrast standards for low-vision users."',
        'Grounding feedback in empirical principles elevates the entire engineering culture.'
      ]
    },
    keyInsight: {
      title: 'The Professional Standard',
      text: 'Elevate your critiques from subjective aesthetics to empirical HCI principles. Measure software by usability, accessibility, and human dignity.'
    }
  },

  // SLIDE 15: SUMMARY & CAPSTONE CHECKLIST
  {
    id: 'review-s15',
    slideNum: 15,
    totalSlides: 15,
    type: 'section_break',
    sectionNum: 'Course Mastered',
    title: 'HCI Curriculum Mastered & Ready for Production',
    description: 'Congratulations! You have completed the comprehensive Human-Computer Interaction curriculum. You are equipped with cognitive psychology, visual design systems, WCAG 2.2 AA accessibility, responsive engineering, information architecture, and ethical leadership to build world-class digital products.'
  }
];
