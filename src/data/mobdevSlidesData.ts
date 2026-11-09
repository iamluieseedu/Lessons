import { SlideData } from '../types/slide';

export const mobdevExamSlidesData: SlideData[] = [
  {
    id: 'mobdev-exam-s1',
    slideNum: 1,
    totalSlides: 9,
    type: 'cover',
    moduleTag: 'Mob Dev 1 Practical Exam • Arctic Fox',
    title: 'Practical Exam: CampusVibe Social Media App',
    subtitle: 'Build a complete 4-screen modern student social media application in Android Studio Arctic Fox (2020.3.1) using Kotlin and XML. Purely static UI navigation — strictly zero database required.',
    metadata: [
      { label: 'Environment', val: 'Arctic Fox 2020.3.1' },
      { label: 'Architecture', val: 'Static UI (No Database)' },
      { label: 'Language', val: 'Kotlin + XML Layouts' },
      { label: 'Duration', val: '120 - 150 Mins' }
    ]
  },
  {
    id: 'mobdev-exam-s2',
    slideNum: 2,
    totalSlides: 9,
    type: 'single_topic',
    moduleTag: 'Exam App Architecture',
    title: '4 Connected Screens & Flow',
    topicTitle: 'How the Screens Navigate on Button Click',
    whatItDoes: 'Connects 4 distinct Activities using explicit Android Intents (startActivity) without requiring any external database or backend server.',
    whatIsGoingOn: 'Every screen transition is triggered by a standard button setOnClickListener event, enabling instant responsive transitions between Welcome, Feed, Post, and Profile screens.',
    bullets: [
      'Screen 1: Welcome Splash (MainActivity) — Branded logo, app tagline, and navigation buttons.',
      'Screen 2: Campus Feed (FeedActivity) — ScrollView feed with trending topics, post cards, and like toasts.',
      'Screen 3: Create Post (CreatePostActivity) — Form with title, channel chips, and multiline caption.',
      'Screen 4: Student Profile (ProfileActivity) — Student avatar, stats counters, bio, and logout button.'
    ],
    keyInsight: {
      title: 'Zero Database Required',
      text: 'This exam tests layout composition, XML drawables, Activity lifecycle, and explicit Intents. All data is static and runs 100% locally!'
    }
  },
  {
    id: 'mobdev-exam-s3',
    slideNum: 3,
    totalSlides: 9,
    type: 'single_topic',
    moduleTag: 'Step 0 & 1: Project Setup',
    title: 'Arctic Fox Project Scaffolding & Theme',
    topicTitle: 'Project Configuration & Palette',
    bullets: [
      '1. Open Android Studio Arctic Fox (2020.3.1) ➔ New Project ➔ Empty Activity.',
      '2. Application Name: CampusVibe | Package: com.example.campusvibe.',
      '3. Language: Kotlin | Minimum SDK: API 21: Android 5.0 (Lollipop).',
      '4. Setup colors.xml with Indigo (#6366F1), Dark Indigo (#4F46E5), and Rose Pink (#EC4899).',
      '5. Add strings.xml labels and create custom drawables: rounded_card.xml, edit_text_border.xml, and logo.xml.'
    ],
    layman: {
      title: 'No Image Downloads Needed',
      text: 'All visual assets (app logo, card containers, input borders) are rendered using native Android XML vector shapes, avoiding broken image links.'
    }
  },
  {
    id: 'mobdev-exam-s4',
    slideNum: 4,
    totalSlides: 9,
    type: 'single_topic',
    moduleTag: 'Step 2: Welcome Screen',
    title: 'Screen 1: Welcome Splash (MainActivity)',
    topicTitle: 'Entry Layout & Intent Triggers',
    bullets: [
      'Layout (activity_main.xml): Centered vertical LinearLayout with vector logo, bold typography, and 2 action buttons.',
      'btnEnterFeed: Navigates directly to FeedActivity with an exploratory toast.',
      'btnGoProfile: Navigates directly to ProfileActivity to view student profile credentials.',
      'Rule 1-2-3: In Android Studio, Ctrl+A to select all, Delete, then paste the provided Kotlin and XML blocks.'
    ],
    keyInsight: {
      title: 'Red Lines Normal',
      text: 'Red underlines under FeedActivity or ProfileActivity will disappear as soon as you create those Activities in subsequent steps.'
    }
  },
  {
    id: 'mobdev-exam-s5',
    slideNum: 5,
    totalSlides: 9,
    type: 'single_topic',
    moduleTag: 'Step 3: Campus Feed',
    title: 'Screen 2: Campus Social Feed (FeedActivity)',
    topicTitle: 'Scrollable Timeline & Interactive Cards',
    bullets: [
      'Header Bar: Displays CampusVibe title and a prominent "+ POST" button triggering CreatePostActivity.',
      'Trending Chips: Horizontal row highlighting campus topics (#Hackathon2026, #TechExpo, #CS_Club).',
      'Post Cards: Clean rounded cards with student initials, name, department, time, post content, and like counters.',
      'Interactive Feedback: Tapping like buttons displays responsive Android Toast notifications.',
      'Bottom Actions: Quick buttons to view student profile or return to the welcome screen.'
    ]
  },
  {
    id: 'mobdev-exam-s6',
    slideNum: 6,
    totalSlides: 9,
    type: 'single_topic',
    moduleTag: 'Step 4: Create Post',
    title: 'Screen 3: Post Composer (CreatePostActivity)',
    topicTitle: 'Input Form & Publishing Action',
    bullets: [
      'Form Fields: EditText for Post Title, Channel selector chips (Academic, Events, Social), and multiline caption EditText.',
      'Publish Button (btnPublishPost): Displays Toast "Post published to CampusVibe! 🎉" and navigates back to FeedActivity.',
      'Cancel Button (btnCancelPost): Discards input and safely returns to FeedActivity using finish().',
      'Focus & Keyboard: Standard Android soft keyboard input with smooth scrollable viewport.'
    ]
  },
  {
    id: 'mobdev-exam-s7',
    slideNum: 7,
    totalSlides: 9,
    type: 'single_topic',
    moduleTag: 'Step 5: Student Profile',
    title: 'Screen 4: Student Profile (ProfileActivity)',
    topicTitle: 'Profile Card, Stats & Logout',
    bullets: [
      'Profile Card: Student avatar initials (AR), name (Alex Rivera), department (BSIT 3rd Year), and student ID.',
      'Stats Grid: 3-column metric cards showing Posts (18), Followers (342), and Vibes (1.2k).',
      'Student Bio: Personal statement card describing student programming journey.',
      'Action Buttons: Back to Feed, Edit Profile toast, and Logout button returning to MainActivity.'
    ]
  },
  {
    id: 'mobdev-exam-s8',
    slideNum: 8,
    totalSlides: 9,
    type: 'single_topic',
    moduleTag: 'Step 6 & 7: Manifest & Execution',
    title: 'AndroidManifest.xml & Emulator Testing',
    topicTitle: 'Activity Registration & Play ▶',
    bullets: [
      'Check AndroidManifest.xml: Ensure MainActivity has LAUNCHER intent filter and all 3 other Activities are registered.',
      'Theme Verification: Ensure @style/Theme.CampusVibe matches your application theme declaration.',
      'Launch Emulator: Select Pixel 3a API 30 or physical Android device in Arctic Fox toolbar.',
      'Click Run ▶ (Shift + F10): Build APK and test all 4 screen transitions and button click events.'
    ]
  },
  {
    id: 'mobdev-exam-s9',
    slideNum: 9,
    totalSlides: 9,
    type: 'section_break',
    sectionNum: 'Rubric',
    title: 'Practical Exam Deliverables & Checklist',
    description: 'Submit your 5 required emulator screenshots: (1) Welcome Screen, (2) Campus Feed with Like Toast, (3) Create Post form, (4) Student Profile, and (5) Project Tree with all 4 Activities.'
  }
];

export const mobdevCampusConnectSlidesData: SlideData[] = [
  {
    id: 'mobdev-cc-s1',
    slideNum: 1,
    totalSlides: 6,
    type: 'cover',
    moduleTag: 'Mob Dev 1 Lab • Arctic Fox Track',
    title: 'School Campus Connect: Multi-Screen Android App',
    subtitle: 'Construct the 4-screen CampusConnect school portal in Android Studio Arctic Fox (2020.3.1) using Kotlin and XML. Purely static UI layout design and explicit Intent navigation (static muna, zero database required).',
    metadata: [
      { label: 'Environment', val: 'Arctic Fox 2020.3.1' },
      { label: 'Architecture', val: 'Static UI (No Database)' },
      { label: 'Language', val: 'Kotlin + XML' },
      { label: 'Status', val: 'Lab Manual Available' }
    ]
  },
  {
    id: 'mobdev-cc-s2',
    slideNum: 2,
    totalSlides: 6,
    type: 'single_topic',
    moduleTag: 'Lab Overview',
    title: 'CampusConnect 4-Screen Navigation Flow',
    topicTitle: 'Welcome ➔ Dashboard ➔ Login ➔ Sign Up',
    bullets: [
      'Screen 1: Welcome Screen (MainActivity) — App title, graduation cap logo, and direct navigation buttons.',
      'Screen 2: Student Dashboard (DashboardActivity) — Student portal hub with active course cards and announcements.',
      'Screen 3: Login Design (LoginActivity) — Static login interface with direct button click opening the Dashboard.',
      'Screen 4: Sign Up Design (SignUpActivity) — Static registration form with return navigation to Login and Welcome.'
    ],
    keyInsight: {
      title: 'Zero Database Required',
      text: 'Focuses entirely on mastering Android Studio project scaffolding, XML layouts, and Kotlin Intent transitions.'
    }
  },
  {
    id: 'mobdev-cc-s3',
    slideNum: 3,
    totalSlides: 6,
    type: 'single_topic',
    moduleTag: 'Implementation Steps',
    title: 'Key Implementation Steps',
    topicTitle: 'From Empty Activity to Working App',
    bullets: [
      'Step 0: Create project "CampusConnect" (package com.example.campusconnect, Kotlin, API 21).',
      'Step 1: Configure colors.xml, strings.xml, edit_text_border.xml, and logo.xml.',
      'Step 2: Build Welcome Screen layout (activity_main.xml) and Kotlin click listeners.',
      'Step 3: Build Student Dashboard (DashboardActivity) with enrolled courses.',
      'Step 4: Build Login & Sign Up screens with immediate Intent redirection.',
      'Step 5: Verify AndroidManifest.xml and test in emulator.'
    ]
  },
  {
    id: 'mobdev-cc-s4',
    slideNum: 4,
    totalSlides: 6,
    type: 'section_break',
    sectionNum: 'Lab Manual',
    title: 'Complete Step-by-Step Code Manual Ready',
    description: 'The interactive CampusConnect laboratory manual is available with 1-click code copy buttons at /mobdev/index.html.'
  }
];

