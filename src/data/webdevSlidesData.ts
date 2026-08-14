import { SlideData } from '../types/slide';

export const webdevSlidesData: SlideData[] = [
  // SLIDE 1: COVER
  {
    id: 'webdev-slide1',
    slideNum: 1,
    totalSlides: 21,
    type: 'cover',
    moduleTag: 'Week 1 — WEBDEV',
    title: 'Introduction to HTML5 & CSS3',
    subtitle: 'Week 1 — Visual-First Curriculum for Modern Web Builders'
  },
  // SLIDE 2: SECTION BREAK 1
  {
    id: 'webdev-slide2',
    slideNum: 2,
    totalSlides: 21,
    type: 'section_break',
    sectionNum: 'PART 1',
    title: 'Web Evolution & Structure',
    description: 'Deconstructing the foundations of the World Wide Web and the concept of separate layers.'
  },
  // SLIDE 3: EVOLUTION TIMELINE (Milestones)
  {
    id: 'webdev-slide3',
    slideNum: 3,
    totalSlides: 21,
    type: 'single_topic',
    moduleTag: 'History',
    title: 'Web Milestones Timeline',
    topicTitle: 'How the web transformed from simple text documents into interactive apps',
    bullets: [
      '1989: Sir Tim Berners-Lee proposes the World Wide Web at CERN, defining the client-server protocol.',
      '1991: HTML 1.0 is published with only 18 basic tag elements to display raw research documents.',
      '1996: CSS 1.0 is standardized by the W3C, separating presentation styles from the text structure.',
      'Modern: HTML5 and CSS3 support rich vector graphics, animations, grids, audio, and video streams.'
    ],
    keyInsight: {
      title: 'Historical Note',
      text: 'In the early 90s, websites had no layouts or design. Everything was left-aligned text and blue links!'
    }
  },
  // SLIDE 4: HTML WITHOUT CSS (The Switcher)
  {
    id: 'webdev-slide4',
    slideNum: 4,
    totalSlides: 21,
    type: 'single_topic',
    moduleTag: 'Design Separation',
    title: 'HTML vs CSS Presentation',
    topicTitle: 'Separation of Content Structure from Layout Style',
    bullets: [
      'HTML (Content): Holds text paragraphs, lists, links, image links, and semantic sections.',
      'CSS (Design): Applies colors, spacing, page positioning, background grids, and typography.',
      'With CSS active: A gorgeous modern card display. Without CSS: A plain vertical stack of raw text.'
    ],
    layman: {
      title: 'Construction Analogy',
      text: 'HTML is the concrete structural frame of the building; CSS is the paint, decorations, glass, and lights.'
    }
  },
  // SLIDE 5: NODE TREE (Document Hierarchy)
  {
    id: 'webdev-slide5',
    slideNum: 5,
    totalSlides: 21,
    type: 'single_topic',
    moduleTag: 'DOM Structure',
    title: 'The Document DOM Tree',
    topicTitle: 'How browsers view nesting and relationships between elements',
    bullets: [
      'HTML uses parent-child nesting. Elements inside other elements form a tree structure.',
      'The top root container is <html>.',
      'The <head> block holds page metadata configurations which are invisible to visitors.',
      'The <body> holds visible page items like headings (h1), paragraph tags (p), and buttons.'
    ]
  },
  // SLIDE 6: SECTION BREAK 2
  {
    id: 'webdev-slide6',
    slideNum: 6,
    totalSlides: 21,
    type: 'section_break',
    sectionNum: 'PART 2',
    title: 'HTML5 Markup & Fundamentals',
    description: 'Mastering tags, attributes, headings, links, and image markup with live previews.'
  },
  // SLIDE 7: TAG ANATOMY
  {
    id: 'webdev-slide7',
    slideNum: 7,
    totalSlides: 21,
    type: 'single_topic',
    moduleTag: 'Syntax Rules',
    title: 'Anatomy of an HTML Element',
    topicTitle: 'Deconstructing the syntax parts of markup code',
    bullets: [
      'Opening Tag (e.g. `<p>`): Marks where the element boundaries begin.',
      'Attribute Name & Value (e.g. `class="alert"`): Supplies configuration details or metadata.',
      'Inner Content (e.g. `Hello`): The text or children rendered inside the element tags.',
      'Closing Tag (e.g. `</p>`): Uses a slash (/) to signal the browser that the element ends.'
    ]
  },
  // SLIDE 8: HTML HEADINGS (New Heading visualizer slide)
  {
    id: 'webdev-slide8',
    slideNum: 8,
    totalSlides: 21,
    type: 'single_topic',
    moduleTag: 'Text Markup',
    title: 'HTML Headings (h1 to h6)',
    topicTitle: 'Establishing visual hierarchy and outline structures',
    bullets: [
      'HTML provides six levels of document headings, from `<h1>` (most important) to `<h6>` (least).',
      'Headings are structural, not decorative. Search engines use them to index page outlines.',
      'Default sizing: Each level decreases in font size and applies margins above and below.',
      'Example: `<h1>Main Title</h1>` is the largest block; `<h6>Sub-title</h6>` is the smallest.'
    ],
    keyInsight: {
      title: 'SEO Best Practice',
      text: 'Use exactly one <h1> per page representing the main title, then nest <h2> and <h3> sub-sections under it.'
    }
  },
  // SLIDE 9: PARAGRAPHS & BR (New Paragraph space slide)
  {
    id: 'webdev-slide9',
    slideNum: 9,
    totalSlides: 21,
    type: 'single_topic',
    moduleTag: 'Content Blocks',
    title: 'Paragraphs & Line Breaks',
    topicTitle: 'Managing flowable texts, margins, and inline breaks',
    bullets: [
      'The `<p>` tag defines a block of text, automatically adding spacing (margins) before and after it.',
      'Browsers ignore extra white spaces or line breaks typed inside HTML editor strings.',
      'To force a single-line break without margins, use the empty tag `<br>` (no closing tag needed).',
      'Example: `<p>First Paragraph</p><p>Second Paragraph</p>` splits them with clear gaps.'
    ],
    layman: {
      title: 'Space Hint',
      text: 'Using multiple <br><br> to create gaps is a bad practice. Use CSS margins for clean spacing instead!'
    }
  },
  // SLIDE 10: HTML LINKS (New Link navigator slide)
  {
    id: 'webdev-slide10',
    slideNum: 10,
    totalSlides: 21,
    type: 'single_topic',
    moduleTag: 'Hyperlinks',
    title: 'HTML Links & Anchor Tags',
    topicTitle: 'Linking documents using the href attribute',
    bullets: [
      'The `<a>` (anchor) tag creates a hyperlink pointing to another URL or document.',
      'The `href` attribute (hypertext reference) is required to set the destination URL.',
      'The text inside the `<a>` and `</a>` tags becomes the clickable link.',
      'Example: `<a href="https://iamlesson.space">Go to Lessons</a>` renders a clickable link.'
    ]
  },
  // SLIDE 11: HTML IMAGES (New Image src loader slide)
  {
    id: 'webdev-slide11',
    slideNum: 11,
    totalSlides: 21,
    type: 'single_topic',
    moduleTag: 'Multimedia',
    title: 'HTML Images & Alternative Text',
    topicTitle: 'Embedding graphics files using src and alt attributes',
    bullets: [
      'The `<img>` tag is an empty/self-closing tag. It does not have a closing `</img>` tag.',
      'The `src` attribute (source) contains the URL path to the image file to load.',
      'The `alt` attribute (alternative text) provides a description for screen readers and displays if the file breaks.',
      'Example: `<img src="photo.jpg" alt="A developer working on code" />`.'
    ],
    keyInsight: {
      title: 'Accessibility Rule',
      text: 'Always include an alt attribute. It makes your site readable for blind students using screen readers!'
    }
  },
  // SLIDE 12: SECTION BREAK 3
  {
    id: 'webdev-slide12',
    slideNum: 12,
    totalSlides: 21,
    type: 'section_break',
    sectionNum: 'PART 3',
    title: 'CSS3 Presentation & Styling',
    description: 'Exploring rules, style mixers, selective tags, and the fundamentals of the Box Model.'
  },
  // SLIDE 13: CSS SELECTORS (New Selector highlight slide)
  {
    id: 'webdev-slide13',
    slideNum: 13,
    totalSlides: 21,
    type: 'single_topic',
    moduleTag: 'Styling Targets',
    title: 'CSS Selectors & Mapping',
    topicTitle: 'Targeting specific HTML elements in style sheets',
    bullets: [
      'CSS rules require a selector to declare which elements get styled.',
      'Tag Selector (e.g. `h1`): Matches all `<h1>` tags on the page.',
      'Class Selector (e.g. `.alert`): Matches any tag with a `class="alert"` attribute.',
      'ID Selector (e.g. `#header`): Matches the single tag with an `id="header"` attribute.'
    ],
    keyInsight: {
      title: 'Selector Hierarchy',
      text: 'ID selectors are more specific than class selectors, and class selectors are more specific than tag selectors.'
    }
  },
  // SLIDE 14: CSS COLORS (New Color mixer slide)
  {
    id: 'webdev-slide14',
    slideNum: 14,
    totalSlides: 21,
    type: 'single_topic',
    moduleTag: 'Colors',
    title: 'CSS Color Formats',
    topicTitle: 'Defining colors using Names, Hex codes, and RGB values',
    bullets: [
      'Color Name: Using standard named values like `color: red;` or `color: skyblue;`.',
      'HEX Code: Hexadecimal values representing Red, Green, and Blue light intensities (e.g. `#ff0000`).',
      'RGB Values: Specifying red, green, blue values from 0 to 255 (e.g. `rgb(255, 0, 0)`).',
      'Interactive Color Mixer: Drag sliders to mix lights and generate computed hex color strings.'
    ]
  },
  // SLIDE 15: CSS BOX MODEL (New 3D Box Model slide)
  {
    id: 'webdev-slide15',
    slideNum: 15,
    totalSlides: 21,
    type: 'single_topic',
    moduleTag: 'Layout Metrics',
    title: 'The CSS Box Model',
    topicTitle: 'How elements are structured inside nested rings',
    bullets: [
      'Every HTML element is rendered as a rectangular block box by the browser engine.',
      'Content: The core area where text characters, child tags, or image pixels reside.',
      'Padding: Transparent spacing surrounding the content, located inside the border.',
      'Border: The frame outline surrounding the padding (e.g. `border: 2px solid red`).',
      'Margin: Transparent spacing outside the border, creating gaps between adjacent elements.'
    ],
    layman: {
      title: 'Box Model Metaphor',
      text: 'Content is a fragile photo; Padding is the bubble wrap inside the box; Border is the physical cardboard box; Margin is the empty space around the box on a table.'
    }
  },
  // SLIDE 16: TRY IT YOURSELF (W3Schools style code editor)
  {
    id: 'webdev-slide16',
    slideNum: 16,
    totalSlides: 21,
    type: 'single_topic',
    moduleTag: 'Live Practice',
    title: 'Interactive Code Sandbox',
    topicTitle: 'Edit HTML & CSS below and watch live preview render instantly',
    bullets: [
      'Practice HTML and inline CSS properties in the code editor box.',
      'Observe margins, text alignments, and color values updating live.',
      'Try typing `<h2>Subheading</h2>` or `<p style="color:red">Colored text</p>`.'
    ]
  },
  // SLIDE 17: SECTION BREAK 4
  {
    id: 'webdev-slide17',
    slideNum: 17,
    totalSlides: 21,
    type: 'section_break',
    sectionNum: 'PART 4',
    title: 'Environment & Browser Engine',
    description: 'Understanding files, extensions, index.html rules, and document rendering pipelines.'
  },
  // SLIDE 18: MYTH OR FACT
  {
    id: 'webdev-slide18',
    slideNum: 18,
    totalSlides: 21,
    type: 'single_topic',
    moduleTag: 'Logic Rules',
    title: 'Myth vs Fact: Logic',
    topicTitle: 'Is HTML a programming language?',
    bullets: [
      'HTML only declares structure and headings. It does not compute logic.',
      'Programming languages use loops, calculations, and branch statements.',
      'Web development uses JavaScript to implement logic and program events.',
      'We use HTML for hierarchy, CSS for layouts, and JS for computational loops.'
    ]
  },
  // SLIDE 19: FILE EXTENSIONS
  {
    id: 'webdev-slide19',
    slideNum: 19,
    totalSlides: 21,
    type: 'single_topic',
    moduleTag: 'File Formats',
    title: 'File Extensions Renamer',
    topicTitle: 'How extensions configure browser rendering behavior',
    bullets: [
      'Changing file extensions alters how operating systems interpret file buffers.',
      '`.txt` files render plain characters without formatting.',
      '`.html` files tell browser rendering engines to parse markup and draw layout pixels.'
    ]
  },
  // SLIDE 20: BROWSER PIPELINE
  {
    id: 'webdev-slide20',
    slideNum: 20,
    totalSlides: 21,
    type: 'single_topic',
    moduleTag: 'Parser Engine',
    title: 'How Browsers Render Pages',
    topicTitle: 'The structural stages of the browser drawing loop',
    bullets: [
      '1. Read HTML and parse nodes to build the Document Object Model (DOM) Tree.',
      '2. Read CSS styles to construct the Stylesheet Object Model (CSSOM).',
      '3. Combine DOM and CSSOM to create a layout render tree.',
      '4. Measure box widths/heights, and paint pixels onto screen coordinates.'
    ]
  },
  // SLIDE 21: EXIT REFLECTION
  {
    id: 'webdev-slide21',
    slideNum: 21,
    totalSlides: 21,
    type: 'exit_reflection',
    moduleTag: 'Review',
    title: 'Module Complete!',
    topicTitle: 'Congratulations on completing Introduction to HTML5 & CSS3!',
    bullets: [
      'HTML5 structures hierarchical document node trees using nested element tags.',
      'CSS3 styles design presentations (colors, typography, margins) separate from structure.',
      'HTML headings, paragraphs, links, and images form the basic block/inline elements of web pages.',
      'Browser engines parse DOM + CSSOM pipelines, measure boxes, and paint layout pixels.'
    ]
  }
];
