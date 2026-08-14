import { SlideData } from '../types/slide';

export const webdevSlidesData: SlideData[] = [
  // SLIDE 1: COVER
  {
    id: 'webdev-slide1',
    slideNum: 1,
    totalSlides: 18,
    type: 'cover',
    moduleTag: 'Week 1 — WEBDEV',
    title: 'Introduction to Web Development',
    subtitle: 'Week 1 — The Role of HTML5, CSS3, & Basic Browser Rendering'
  },
  // SLIDE 2: SECTION BREAK 1
  {
    id: 'webdev-slide2',
    slideNum: 2,
    totalSlides: 18,
    type: 'section_break',
    sectionNum: 'PART 1',
    title: 'Core Concepts & Web Evolution',
    description: 'Understanding the origins of the World Wide Web and the structure of visual interfaces.'
  },
  // SLIDE 3: EVOLUTION TIMELINE (Engagement Example 1)
  {
    id: 'webdev-slide3',
    slideNum: 3,
    totalSlides: 18,
    type: 'single_topic',
    moduleTag: 'History',
    title: 'Evolution of the Web',
    topicTitle: 'How the Web Technologies Grew Over Time',
    bullets: [
      'The World Wide Web (WWW) was invented in 1989 by Sir Tim Berners-Lee as a document sharing platform at CERN.',
      'Technologies did not appear all at once: early text pages preceded graphical browsers, styles (CSS), and client scripting (JavaScript).',
      'Today, modern web rendering platforms run highly complex dynamic graphics pipelines.'
    ],
    keyInsight: {
      title: 'Historical reference',
      text: 'According to W3C historical documents, HTML was designed to organize text documents, and CSS was introduced later in 1996 to separate structure from presentation.'
    }
  },
  // SLIDE 4: HTML WITHOUT CSS (Engagement Example 2)
  {
    id: 'webdev-slide4',
    slideNum: 4,
    totalSlides: 18,
    type: 'single_topic',
    moduleTag: 'Structure vs Style',
    title: 'HTML Without CSS',
    topicTitle: 'What happens to a webpage when stylesheets disappear?',
    bullets: [
      'HTML represents pure structured content: headings, lists, paragraphs, and links.',
      'CSS is the presentation engine: colors, layout grids, spacing, and typography.',
      'Removing CSS leaves the raw browser default stylesheet styling, demonstrating the separation of concerns.'
    ],
    layman: {
      title: 'Real-world analogy',
      text: 'HTML is like the concrete beams and structural walls of a house; CSS is the paint, furniture, lighting, and interior decoration.'
    }
  },
  // SLIDE 5: HTML ANATOMY (New custom engagement widget)
  {
    id: 'webdev-slide5',
    slideNum: 5,
    totalSlides: 18,
    type: 'single_topic',
    moduleTag: 'Syntax Basics',
    title: 'Anatomy of an HTML Element',
    topicTitle: 'Deconstructing the syntax of markup tags',
    bullets: [
      'HTML elements consist of an opening tag, optional attributes, the element content, and a closing tag.',
      'Attributes provide extra metadata configurations, such as class names, style keys, or link targets.',
      'Incorrect tag naming, matching, or capitalization yields unexpected browser structural interpretations.'
    ],
    keyInsight: {
      title: 'Important syntax rule',
      text: 'HTML tags are generally case-insensitive in browser parses (e.g. <h1> matches </H1>), but standard HTML5 specifies lowercase tags as a strict best practice.'
    }
  },
  // SLIDE 6: HTML CODE TO WEBPAGE (Engagement Example 3)
  {
    id: 'webdev-slide6',
    slideNum: 6,
    totalSlides: 18,
    type: 'single_topic',
    moduleTag: 'Rendering',
    title: 'HTML Code Becomes a Page',
    topicTitle: 'Mapping source tags to visual nodes',
    bullets: [
      'Browsers read source strings sequentially, compiling them into a visual layout structure.',
      'Heading tags (h1 to h6) instruct the parser to display large, bold, isolated block boxes.',
      'Paragraph tags (p) mark editorial text segments, applying default margins at the top and bottom.'
    ]
  },
  // SLIDE 7: TRY IT YOURSELF LIVE CODE EDITOR (New custom sandbox widget)
  {
    id: 'webdev-slide7',
    slideNum: 7,
    totalSlides: 18,
    type: 'single_topic',
    moduleTag: 'Practice',
    title: 'Try It Yourself Sandbox',
    topicTitle: 'Live editor sandbox modeled after W3Schools standards',
    bullets: [
      'Hands-on editing is the fastest way to memorize structural tags and markup patterns.',
      'Edit the HTML source code on the left to see the visual changes rendered immediately in the frame on the right.',
      'Try adding new elements like headings or paragraph paragraphs, and observe the outcomes.'
    ]
  },
  // SLIDE 8: SECTION BREAK 2
  {
    id: 'webdev-slide8',
    slideNum: 8,
    totalSlides: 18,
    type: 'section_break',
    sectionNum: 'PART 2',
    title: 'Behind the Code: Syntax & Nodes',
    description: 'Exploring document markup constraints, tag matching, and document structures.'
  },
  // SLIDE 9: MYTH VS FACT (Engagement Example 4)
  {
    id: 'webdev-slide9',
    slideNum: 9,
    totalSlides: 18,
    type: 'single_topic',
    moduleTag: 'Logic vs Structure',
    title: 'Myth vs Fact: Programming',
    topicTitle: 'Is HTML a programming language?',
    bullets: [
      'HTML stands for HyperText Markup Language, designed to organize and structure text documents.',
      'Programming languages compute instructions, utilize variables, write loops, and resolve boolean logic.',
      'HTML only declares *what* the content represents, not *how* to calculate values.',
      'Websites use JavaScript to handle active logic, algorithms, and interactive states.'
    ],
    layman: {
      title: 'Simple explanation',
      text: 'Markup describes hierarchy and meaning. Telling a computer "this text is a heading" is structural markup; telling a computer "multiply this number by 5" is programming.'
    }
  },
  // SLIDE 10: BREAK THE CODE (Engagement Example 5)
  {
    id: 'webdev-slide10',
    slideNum: 10,
    totalSlides: 18,
    type: 'single_topic',
    moduleTag: 'Troubleshooting',
    title: 'Break the Code',
    topicTitle: 'What happens when closing tags are omitted?',
    bullets: [
      'A missing closing tag (like omitting </h1>) breaks the element boundaries.',
      'Browsers attempt to auto-repair malformed HTML documents, but this can cause styles to leak downstream.',
      'Strict tag closure ensures your elements render exactly as designed across all client browsers.'
    ],
    keyInsight: {
      title: 'Parser behavior',
      text: 'HTML5 is designed to survive missing tags to keep pages readable, but it forces the browser to make assumptions which can skew page layouts.'
    }
  },
  // SLIDE 11: WEBPAGE IS A DOCUMENT (Engagement Example 6)
  {
    id: 'webdev-slide11',
    slideNum: 11,
    totalSlides: 18,
    type: 'single_topic',
    moduleTag: 'DOM Tree',
    title: 'The Document Tree',
    topicTitle: 'Deconstructing pages into nested node trees',
    bullets: [
      'Webpages are structured hierarchically: elements are nested inside other elements.',
      'The top root container node is <html>.',
      'The <head> holds metadata details (page titles, keywords) which are invisible to readers.',
      'The <body> holds visible layouts, slides, menus, and headers.'
    ]
  },
  // SLIDE 12: SECTION BREAK 3
  {
    id: 'webdev-slide12',
    slideNum: 12,
    totalSlides: 18,
    type: 'section_break',
    sectionNum: 'PART 3',
    title: 'Files & Server Environments',
    description: 'Learning default file extensions, homepage conventions, and index.html structures.'
  },
  // SLIDE 13: INDEX.HTML DISCOVERY (Engagement Example 7)
  {
    id: 'webdev-slide13',
    slideNum: 13,
    totalSlides: 18,
    type: 'single_topic',
    moduleTag: 'Servers',
    title: 'The index.html Convention',
    topicTitle: 'Why do most homepages use index.html?',
    bullets: [
      'Web servers receive requests for folders and look for a default file to display.',
      'By convention, `index.html` is the entrypoint file loaded by default.',
      'Using index.html prevents servers from displaying raw folders structures or directories.',
      'This behavior is configurable inside server software (Apache, Nginx) but remains the global standard.'
    ],
    keyInsight: {
      title: 'Educational caution',
      text: 'It is a common myth that homepages *must* be index.html. While conventionally standard, servers can be set to load other files (like home.html or main.html).'
    }
  },
  // SLIDE 14: FILE EXTENSIONS (Engagement Example 8)
  {
    id: 'webdev-slide14',
    slideNum: 14,
    totalSlides: 18,
    type: 'single_topic',
    moduleTag: 'File Formats',
    title: 'File Extensions Matter',
    topicTitle: 'How extensions dictate browser interpretation',
    bullets: [
      'Extensions (like `.html`, `.txt`, `.png`) instruct operating systems how to read files.',
      'A browser opens `.html` documents, parses structural elements, and draws visual assets.',
      'Changing an extension from `.txt` to `.html` transforms a raw text file into a parseable webpage.'
    ]
  },
  // SLIDE 15: SECTION BREAK 4
  {
    id: 'webdev-slide15',
    slideNum: 15,
    totalSlides: 18,
    type: 'section_break',
    sectionNum: 'PART 4',
    title: 'Browsers & Layout Styles',
    description: 'Understanding how CSS rules map to HTML nodes and how browser rendering loops function.'
  },
  // SLIDE 16: HTML + CSS EXPERIMENT (Engagement Example 9)
  {
    id: 'webdev-slide16',
    slideNum: 16,
    totalSlides: 18,
    type: 'single_topic',
    moduleTag: 'Styling Sandbox',
    title: 'HTML & CSS Experiment',
    topicTitle: 'Altering presentation properties without editing HTML text',
    bullets: [
      'CSS rules target specific HTML tags and apply rules (sizing, margins, colors).',
      'Modifying CSS changes visual presentations, while the structural HTML text remains identical.',
      'This sandbox generates live CSS selectors as you modify sliders, showing style mapping in action.'
    ]
  },
  // SLIDE 17: BROWSER RENDERING PERSPECTIVE (Engagement Example 10)
  {
    id: 'webdev-slide17',
    slideNum: 17,
    totalSlides: 18,
    type: 'single_topic',
    moduleTag: 'Rendering Engine',
    title: 'How Browsers Render Pages',
    topicTitle: 'A simplified learning model of document parsing',
    bullets: [
      'Step 1: The browser reads raw HTML characters and parses tags into a structured DOM tree.',
      'Step 2: The browser reads CSS styles and matches rules to the active nodes (CSSOM).',
      'Step 3: The layout engine calculates exact positions and pixel dimensions of boxes.',
      'Step 4: The painting engine draws pixels, colors, text, and graphics onto your monitor.'
    ],
    layman: {
      title: 'Parser breakdown',
      text: 'A browser reads code like an architect reading blue prints. It constructs a mental map of nodes (DOM), applies specifications, measures gaps, and draws the final structure.'
    }
  },
  // SLIDE 18: SUMMARY EXIT
  {
    id: 'webdev-slide18',
    slideNum: 18,
    totalSlides: 18,
    type: 'exit_reflection',
    moduleTag: 'Summary',
    title: 'Week 1 Review & Summary',
    topicTitle: 'Congratulations on completing Introduction to Web Development!',
    bullets: [
      'HTML5 structures documents using nested elements, tags, and attributes.',
      'CSS3 styles presentations, keeping design rules separate from text data.',
      'Index.html convention organizes server landing folders automatically.',
      'Extensions instruct browsers to parse code, measure visual boxes, and paint layouts.'
    ]
  }
];
