import { SlideData } from '../types/slide';

// ============================================================================
// WEEK 14: TYPOGRAPHY AND TEXT EFFECTS (15 SLIDES)
// ============================================================================
export const digitalImagingTypographySlidesData: SlideData[] = [
  {
    id: 'di-w14-s1',
    slideNum: 1,
    totalSlides: 15,
    type: 'cover',
    moduleTag: 'DIGITAL IMAGING • WEEK 14',
    title: 'Typography & Text Effects',
    subtitle: 'Integrating Text into Digital Images, Typographic Hierarchy, Layer Styles & Non-Destructive FX',
    metadata: [
      { label: 'Subject', val: 'Digital Imaging' },
      { label: 'Level', val: 'Week 14 Intermediate' },
      { label: 'Lab Engine', val: 'Typography & Text Effects Lab' },
      { label: 'Core Tools', val: 'Photoshop, Illustrator, InDesign' }
    ]
  },
  {
    id: 'di-w14-s2',
    slideNum: 2,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Anatomy of Type',
    title: 'The Anatomical Architecture of Letterforms',
    topicTitle: 'Micro-Typography Mechanics That Dictate Legibility',
    whatItDoes: 'Defines the structural baselines, ascenders, descenders, and x-heights that allow text to balance harmoniously on top of complex digital raster artwork.',
    whatIsGoingOn: 'Letterforms are engineered using precise geometric constraints. When placing typography into a digital composite, understanding the x-height and baseline ensures text aligns naturally with photographic horizons and architectural vanishing lines.',
    bullets: [
      'Baseline & Mean Line: The invisible horizontal axis upon which glyphs rest and lowercase letters terminate.',
      'x-Height Ratio: The vertical height of lowercase letters (like "x", "o", "a"); large x-heights increase readability in digital hero banners.',
      'Ascenders & Descenders: Stems extending above the cap line (b, d, h) or dropping below the baseline (g, p, y) that require generous vertical leading.',
      'Apertures & Counters: The enclosed or open negative space inside letterforms (e.g., the bowl of an "o" or loop of an "e") that prevent visual clogging when blurs are applied.'
    ],
    layman: {
      title: 'The Human Skeleton Analogy:',
      text: 'Think of typography like human posture: the baseline is the solid floor you stand on, the x-height is your torso, and ascenders/descenders are your raised arms and kicking legs. If you cramp them together, you stumble.'
    },
    discussionPrompt: {
      question: 'Why do billboard ads on EDSA use typefaces with tall x-heights and open counters rather than delicate calligraphic scripts?',
      hint: 'Consider viewing distance, speed of vehicles, and visual noise from streetlights.',
      talkingPoints: [
        'Commuters have less than 3 seconds to perceive the brand name and headline.',
        'High x-height letterforms maintain legible silhouette recognition even under low resolution or bad weather.'
      ]
    },
    keyInsight: {
      title: 'Digital Imaging Rule #1',
      text: 'Type is not mere decoration; it is structured geometry that must anchor into the physical lighting and perspective of your background scene.'
    }
  },
  {
    id: 'di-w14-s3',
    slideNum: 3,
    totalSlides: 15,
    type: 'comparison',
    moduleTag: 'Classification & Tone',
    title: 'Typographic Classification & Commercial Tone',
    topicTitle: 'Selecting the Right Voice for Digital Imagery',
    whatItDoes: 'Maps font classifications (Serif, Sans-Serif, Slab Serif, Script, Display) directly to psychological audience perception and brand authority.',
    whatIsGoingOn: 'A high-fashion magazine cover requires a high-contrast Modern Serif (Didone), while an Apple product advertisement demands a neutral geometric or neo-grotesque Sans-Serif (SF Pro/Helvetica). Pairing the wrong classification with a photo creates cognitive dissonance.',
    versusLeft: {
      title: 'SERIF & EDITORIAL (Vogue, Rolex)',
      bullets: [
        'Distinctive terminal brackets and tapering strokes evoking heritage, luxury, and intellectual gravitas.',
        'Excels in high-resolution print, luxury packaging, and cinematic drama titles (e.g., Cinzel, Playfair Display).',
        'Vulnerable to legibility breakdown on low-DPI displays due to thin hairlines.'
      ]
    },
    versusRight: {
      title: 'SANS-SERIF & MODERN (Nike, Apple)',
      bullets: [
        'Monolinear or low-contrast strokes engineered for clarity, athletic impact, and tech utility.',
        'Excels across mobile screens, billboards, UI overlays, and high-energy sportswear campaigns (e.g., Montserrat, Futura, Impact).',
        'Can feel utilitarian or cold if unassisted by texture and expressive kerning.'
      ]
    },
    layman: {
      title: 'The Wardrobe Analogy:',
      text: 'Serif type is a tailored Italian tuxedo with polished leather shoes. Sans-Serif is a sleek minimalist tech windbreaker and carbon-fiber sneakers. Dress your digital image according to the occasion.'
    },
    discussionPrompt: {
      question: 'What happens when a horror movie poster uses Comic Sans or Helvetica instead of a weathered serif or distressed display typeface?',
      hint: 'Think about genre expectations and associative emotional triggers.',
      talkingPoints: [
        'The typographic voice contradicts the visual terror, converting suspense into comedy.',
        'Typefaces carry subconscious cultural baggage that primes viewer emotion before reading a single word.'
      ]
    },
    keyInsight: {
      title: 'Tone Matching',
      text: 'Before applying a single Photoshop layer style, confirm that the fundamental font weight and letterform geometry align with the narrative mood of your artwork.'
    }
  },
  {
    id: 'di-w14-s4',
    slideNum: 4,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Spatial Mechanics',
    title: 'Spatial Mechanics: Tracking, Kerning & Leading',
    topicTitle: 'Mathematical Precision in Typographic Spacing',
    whatItDoes: 'Controls the micro-spacing between individual glyphs (kerning), uniform line-wide expansion (tracking), and vertical line separation (leading).',
    whatIsGoingOn: 'Photoshop measures tracking and kerning in 1/1000 of an em. For large display titles over photographs, default auto-kerning leaves awkward gaps between letters like "A", "V", "T", and "W" (optical kerning vs metric kerning). Generous tracking (+100 to +300) conveys luxury and cinematic atmosphere.',
    bullets: [
      'Kerning (Individual Pairs): Manual adjustment between two specific glyphs to eliminate optical gaps (e.g., T and o, or A and V).',
      'Tracking (Global Expansion): Uniform spacing applied across an entire string of text. Luxury perfume ads frequently use all-caps with +250 tracking.',
      'Leading (Vertical Distance): Measured from baseline to baseline. Standard body text requires 120% to 145% of font size; hero titles often require tight or negative leading.',
      'Optical vs Metric Kerning: Metric kerning uses the font designer\'s built-in mathematical tables; Optical kerning uses Photoshop\'s visual algorithms to equalize white space.'
    ],
    layman: {
      title: 'The Elevator Analogy:',
      text: 'Kerning is adjusting the personal space between two people standing next to each other. Tracking is increasing the size of the entire elevator so everyone breathes comfortably. Leading is the ceiling height between elevator floors.'
    },
    discussionPrompt: {
      question: 'Why does tight tracking (-50 to -100) work wonders for explosive action movie titles, while luxury watch ads use wide positive tracking (+200)?',
      hint: 'Think about density, aggression, and breathing room.',
      talkingPoints: [
        'Negative tracking creates an imposing, monolithic wall of text that suggests brute force and speed.',
        'Positive tracking allows the background photography to breathe through the letters, signaling elegance, patience, and wealth.'
      ]
    },
    keyInsight: {
      title: 'Never Ship Default Kerning',
      text: 'Whenever headline text exceeds 48pt in a digital composite, always switch from Metric to Optical kerning or manually hand-kern problematic character pairs.'
    }
  },
  {
    id: 'di-w14-s5',
    slideNum: 5,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Raster vs Vector Text',
    title: 'Raster vs Vector Text in Compositing Workflows',
    topicTitle: 'Maintaining Scalable Fidelity vs Destructive Pixelation',
    whatItDoes: 'Explains the crucial difference between live vector type layers, rasterized pixel type, and Smart Object-wrapped typography.',
    whatIsGoingOn: 'In Adobe Photoshop, live text layers are native vector outlines calculated via Bézier mathematical curves. Once a user clicks "Rasterize Type", the mathematical curves are permanently flattened into fixed pixel grids. If scaled up later, the letters suffer jagged anti-aliasing artifacts.',
    bullets: [
      'Live Type Layers: Maintain editable text strings, font metrics, and resolution-independent vector outlines during non-destructive compositing.',
      'Rasterized Text: Converts letterforms into fixed bitmap pixels; allows direct use of the Smudge tool, Eraser, and Brush filters, but permanently disables text editing.',
      'Smart Object Text: Wraps live vector typography inside a protective container; allows destructive distortion filters (Liquify, Displacement Maps) while preserving non-destructive re-editability.',
      'Anti-Aliasing Algorithms: Selecting Sharp, Crisp, Strong, or Smooth determines how sub-pixel gray boundaries soften edge transitions against photo backdrops.'
    ],
    layman: {
      title: 'The Clay vs Cookie Dough Analogy:',
      text: 'Live vector text is an adjustable metal cookie cutter that you can resize anytime. Rasterized text is the baked cookie—if you want to make it bigger, you cannot stretch it without breaking it into crumbs!'
    },
    discussionPrompt: {
      question: 'A client demands that you change a typo in a 4K game poster, but you rasterized the text layer 3 days ago. What is the production cost of that mistake?',
      hint: 'Consider rebuilding layer styles, clipping masks, and lighting blends from scratch.',
      talkingPoints: [
        'Destructive rasterization forces an artist to redo hours of masking, color grading, and displacement matching.',
        'Converting type to a Smart Object gives you the benefits of bitmap filters without ever sacrificing vector fidelity.'
      ]
    },
    keyInsight: {
      title: 'The Non-Destructive Rule',
      text: 'Never right-click and "Rasterize Type". If a filter requires pixel data, convert the text layer into a Smart Object instead.'
    }
  },
  {
    id: 'di-w14-s6',
    slideNum: 6,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Layer Styles & Physics',
    title: 'Non-Destructive Layer Styles & Lighting Physics',
    topicTitle: 'Drop Shadows, Bevel & Emboss, and Stroke Consistency',
    whatItDoes: 'Simulates physical depth, lighting interaction, and edge definition using procedural layer effects that update dynamically as text changes.',
    whatIsGoingOn: 'Photoshop Layer Styles (FX) calculate procedural render passes directly on layer boundaries. Amateur designers apply harsh, black, 100% opacity drop shadows with incorrect angles. Professional compositors match the global light angle of the photograph, lower shadow opacity to 25-45%, and tint shadows with the scene\'s ambient color.',
    bullets: [
      'Global Light Synchronization: Ensures that Drop Shadows, Inner Shadows, and Bevel & Emboss highlight angles match the primary key light in the background photograph.',
      'Drop Shadow Physics: Natural shadows have a soft penumbra (high size value), low opacity (30-50%), and are never pure #000000 (they sample ambient blue or warm bounce light).',
      'Bevel & Emboss: Simulates chiseled stone, metallic sheen, or plastic molding by creating specular highlights on the light-facing edge and shadow occlusion on the opposite edge.',
      'Stroke & Inner Glow: Provides edge separation when dark typography rests on complex or high-contrast photo backdrops without blurring the core letterform.'
    ],
    layman: {
      title: 'The Sun and Shadow Analogy:',
      text: 'If the photograph shows a model lit by sunset on the left, your text cannot cast a shadow toward the left! Shadows must fall to the right, tinted in cool dusk purple, matching nature.'
    },
    discussionPrompt: {
      question: 'Why do beginner graphic designers often make drop shadows look like black smudges, and how do you fix it?',
      hint: 'Look at real shadows in daylight—are they ever pitch black with hard cardboard edges?',
      talkingPoints: [
        'Beginners leave Opacity at 75% with Distance too high and Size at 0.',
        'Fix: Increase Blur/Size for realistic falloff, lower Opacity to 25-35%, and blend with Multiply mode using a sampled dark scene tone.'
      ]
    },
    keyInsight: {
      title: 'Ambient Shadow Tinting',
      text: 'Never use pure black #000000 for drop shadows in a daylight composite. Sample the deepest shadow tone from your background photo to maintain photorealism.'
    }
  },
  {
    id: 'di-w14-s7',
    slideNum: 7,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Advanced Blending Modes',
    title: 'Advanced Layer Blending for Typographic Depth',
    topicTitle: 'Multiply, Screen, Overlay, Color Dodge & Difference',
    whatItDoes: 'Merges text luminance and chrominance directly into background photo pixels to achieve cinematic, neon, and organic composite integrations.',
    whatIsGoingOn: 'Layer blend modes use mathematical algorithms to calculate the interaction between the Base layer (photo) and the Blend layer (text). Multiply ignores white to create deep ink-stamp effects; Screen ignores black for luminous glows; Overlay boosts midtone contrast; Color Dodge creates explosive lens flare and neon highlights.',
    bullets: [
      'Multiply (Darken Math): $(Base \times Blend) / 255$. Ideal for printing text onto textured cardboard, aged parchment, or textured denim fabric.',
      'Screen (Lighten Math): $255 - ((255 - Base) \times (255 - Blend)) / 255$. Drops dark pixels completely; perfect for holographic and neon light signage.',
      'Overlay & Soft Light (Contrast Math): Preserves background highlights and shadows while infusing text color; creates embossed paint and subtle watermark styling.',
      'Color Dodge & Linear Dodge: Drastically brightens background saturated tones; creates incandescent neon signs, cyberpunk titles, and laser typography.'
    ],
    layman: {
      title: 'The Projector vs Stamp Analogy:',
      text: 'Multiply is pressing a wet ink rubber stamp onto rough paper—the texture shows through the dark ink. Screen is shining a beam of flashlight onto a wall—only the bright light illuminates, and black areas disappear.'
    },
    discussionPrompt: {
      question: 'When designing a cyberpunk billboard with glowing neon text, why does "Normal" blend mode look fake while "Color Dodge" or "Linear Dodge" looks real?',
      hint: 'Think about how real light photons interact with camera sensors and surrounding air molecules.',
      talkingPoints: [
        'Normal mode paints flat solid pixels over the image, completely covering background textures.',
        'Color Dodge forces the brightness of the background pixels to bloom and clip naturally, mimicking real optical lens flares.'
      ]
    },
    keyInsight: {
      title: 'Fill Opacity Secret',
      text: 'Modes like Color Dodge and Linear Burn react uniquely to "Fill" vs "Opacity". Dropping Fill to 0% while retaining Layer Styles reveals pure luminescent text effects without solid letter fill.'
    }
  },
  {
    id: 'di-w14-s8',
    slideNum: 8,
    totalSlides: 15,
    type: 'typography_text_effects_lab',
    moduleTag: 'Interactive Studio Lab',
    title: 'Interactive Studio: Typography & Text Effects Lab',
    topicTitle: 'Hands-On Real-Time CSS & Layer FX Synthesizer',
    whatItDoes: 'Empowers students to experiment interactively with typefaces, tracking, blend modes, drop shadows, bevels, neon glows, and clipping masks with live CSS generation.',
    whatIsGoingOn: 'Adjust tracking sliders, toggle layer effects, switch blend modes (Multiply, Screen, Overlay, Color Dodge), and test one-click industry presets (Neon Cyberpunk, Hollywood Cinematic, Editorial Luxury, Chrome 3D).'
  },
  {
    id: 'di-w14-s9',
    slideNum: 9,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Clipping Masks',
    title: 'Clipping Masks & Alpha Channel Typographic Textures',
    topicTitle: 'Filling Letterforms with Cinematic Imagery & Textures',
    whatItDoes: 'Restricts the visibility of photographs, liquid gradients, and gold textures strictly within the boundaries of a live or rasterized text layer.',
    whatIsGoingOn: 'In Photoshop, pressing Alt+Click between two layers establishes a Clipping Mask. The base text layer acts as an alpha stencil. Any image placed above it will only render where the text has non-zero alpha opacity. Crucially, the text remains 100% editable—you can change the font or spellings, and the clipped artwork immediately conforms.',
    bullets: [
      'Non-Destructive Stenciling: The upper image is clipped without deleting any pixels; you can pan, zoom, and rotate the texture inside the letters freely.',
      'Editable Text Preserved: Unlike selecting text and hitting Delete on an image, a clipping mask allows you to fix typos or change fonts in one click.',
      'Multi-Layer Stacking: You can clip multiple adjustment layers (Curves, Hue/Saturation, Color Balance) directly onto the text layer to grade the clipped texture independently.',
      'Alpha Channel Storage: Saving high-contrast typographic masks into the Channels panel allows quick selection retrieval for complex 3D displacement.'
    ],
    layman: {
      title: 'The Window Frame Analogy:',
      text: 'A clipping mask is like looking through wooden alphabet-shaped windows into a botanical garden outside. The garden is huge, but you only see whatever greenery falls directly behind the glass letters.'
    },
    discussionPrompt: {
      question: 'Why do music album covers and sports posters frequently clip fire, smoke, and liquid splashes into athlete or artist names?',
      hint: 'Consider the psychological metaphor of raw energy and thematic unity.',
      talkingPoints: [
        'It binds the title directly to the physical environment of the photograph.',
        'It transforms typography from an external label into an active participant in the story.'
      ]
    },
    keyInsight: {
      title: 'The Alt+Click Shortcut',
      text: 'Never use the Magic Wand to cut an image into letters. Always use an Alt+Click Clipping Mask so your artwork stays modular, flexible, and client-proof.'
    }
  },
  {
    id: 'di-w14-s10',
    slideNum: 10,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Displacement Mapping',
    title: 'Displacement Mapping: Conforming Text to Surfaces',
    topicTitle: 'Bending Typography Along Fabric Folds, Wrinkles & Concrete',
    whatItDoes: 'Uses luminance values from a black-and-white displacement map file to physically shift typography pixels along the organic contours of clothing and rough textures.',
    whatIsGoingOn: 'Flat text pasted onto a wrinkled t-shirt looks like a sticker. The Displacement Map filter analyzes a grayscale PSD copy of the shirt: white pixels shift text up and left, black pixels shift down and right, and 50% gray leaves pixels untouched. The resulting text warps dynamically across every ripple and wrinkle.',
    bullets: [
      'Grayscale Map Generation: Duplicate the background image, desaturate to black & white, increase contrast with Curves, apply a 2px Gaussian Blur, and save as a standalone .PSD file.',
      'Displace Filter Execution: Convert your text layer to a Smart Object, navigate to Filter > Distort > Displace, set Horizontal/Vertical scale (typically 5 to 12), and select the saved map.',
      'Organic Distortion: Letter edges bend naturally into fabric creases, rock crevices, brick mortar lines, and skin pores.',
      'Blend If Finishing: Double-click the text layer and adjust the "Underlying Layer" sliders with Alt-split brackets to allow fabric highlights to punch through the typography.'
    ],
    layman: {
      title: 'The Iron-On Decal Analogy:',
      text: 'Pasting flat text is like laying a stiff piece of cardboard over an unmade bed. Displacement mapping is like ironing a thin rubber print directly into the cotton threads—it flows over every hill and valley of the wrinkles.'
    },
    discussionPrompt: {
      question: 'Why do fashion brand mockups look hyper-realistic on wrinkled hoodies when using Displacement Maps compared to standard Free Transform warping?',
      hint: 'Manual warping cannot micro-displace individual pixel rows along microscopic fabric weave.',
      talkingPoints: [
        'Displacement is calculated pixel-by-pixel using the underlying grayscale luminance data.',
        'It captures thousands of tiny micro-creases that human hands could never manually paint or warp.'
      ]
    },
    keyInsight: {
      title: 'Blend If + Displace Synergy',
      text: 'A Displacement Map handles physical geometric distortion, but combining it with the "Blend If: Underlying Layer" slider allows photo highlights and deep shadow creases to show through your ink.'
    }
  },
  {
    id: 'di-w14-s11',
    slideNum: 11,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: '3D & Perspective Distortion',
    title: 'Perspective Distortion & 3D Typographic Integration',
    topicTitle: 'Matching Vanishing Points, Horizon Lines & Environmental Depth',
    whatItDoes: 'Distorts flat letterforms to adhere to one-point, two-point, or three-point linear perspective grids established by photographic architecture or landscape.',
    whatIsGoingOn: 'When text is painted onto a building facade or highway asphalt, it must obey Renaissance linear perspective. Using Photoshop\'s Vanishing Point filter or Perspective Transform ensures that vertical stems converge toward the scene\'s true vanishing point, while atmospheric haze decreases text contrast as it recedes into the distance.',
    bullets: [
      'Horizon Line Alignment: Locate the scene\'s eye level; text resting below the horizon recedes downward, while text floating above converges upward.',
      'Vanishing Point Grid: Create a 3D perspective plane in Filter > Vanishing Point; pasting text into the grid automatically scales and foreshortens the letterforms in true geometric 3D.',
      'Atmospheric Aerial Perspective: As text recedes toward the background, lower its contrast, reduce saturation, and tint it slightly with the horizon sky color (ambient occlusion).',
      'Cast Shadows on Ground Planes: Duplicate the text, flip vertically, apply Free Transform > Distort along the ground, blur with Gaussian Blur, and drop opacity to 35%.'
    ],
    layman: {
      title: 'The Highway Lane Lines Analogy:',
      text: 'Think of yellow dashed lines on an open highway. Up close next to your car, they look huge and thick. Five hundred meters away near the mountains, they converge into a tiny pinpoint line. Your 3D text must do the exact same thing.'
    },
    discussionPrompt: {
      question: 'If you paste 3D text on a photo of a highway and the letters don\'t get smaller as they recede, what cognitive optical illusion happens?',
      hint: 'The Ponzo illusion and brain depth perception.',
      talkingPoints: [
        'The human brain perceives the distant text as gigantic rather than positioned in depth.',
        'Without correct vanishing point convergence, the text appears detached and floats like a flat sticker on camera glass.'
      ]
    },
    keyInsight: {
      title: 'Aerial Perspective Pass',
      text: 'Perspective is not just angle; it is atmospheric density. Distant letters must lose sharpness and contrast due to airborne dust and humidity.'
    }
  },
  {
    id: 'di-w14-s12',
    slideNum: 12,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Industry Case Studies',
    title: 'Commercial Case Studies: Nike, Apple & Netflix',
    topicTitle: 'How World-Class Brands Execute Digital Image Typography',
    whatItDoes: 'Deconstructs award-winning commercial typography across athletic advertising, luxury tech keynotes, and streaming entertainment posters.',
    whatIsGoingOn: 'World-class creative agencies follow rigid typographic frameworks. Nike uses heavy condensed display fonts tightly tracked with high athletic contrast; Apple utilizes ultra-clean neo-grotesques with surgical white space; Netflix integrates textured typography directly behind actors using depth maps.',
    bullets: [
      'Nike "Just Do It" Campaigns: Futura Bold Condensed in all-caps, tightly tracked (-30), angled diagonally (+12°) to communicate raw kinetic momentum and explosive speed.',
      'Apple Product Launches: Custom San Francisco (SF Pro Display), balanced lowercase with generous breathing room, ultra-clean contrast against 100% pure black or studio white.',
      'Netflix "Stranger Things" Title Style: Benguiat with custom red neon outer glow, subtle chromatic aberration on letter edges, and heavy 35mm film grain composited over letter fills.',
      'The "Text Behind Subject" Trend: Masking the main character\'s head and shoulders in front of massive background typography to create immediate 3-layer spatial depth.'
    ],
    layman: {
      title: 'The Bodyguard Analogy:',
      text: 'Having a superhero stand partially in front of their own giant name on a poster creates a sandwich of depth: Background Wall -> Giant Text -> Superhero -> Foreground Fog. The text feels physically trapped inside the movie world!'
    },
    discussionPrompt: {
      question: 'Why has placing giant typography partially behind the model or athlete become one of the most popular digital imaging techniques on Instagram and billboards?',
      hint: 'Think about visual depth cues and foreground-background separation.',
      talkingPoints: [
        'It immediately breaks the flat 2D plane of the poster, creating a three-dimensional diorama.',
        'It proves that the typography was customized for that specific photograph rather than slapped on as an afterthought.'
      ]
    },
    keyInsight: {
      title: 'Spatial Sandwiching',
      text: 'Always sandwich text between background and foreground scene elements (smoke, embers, or the subject\'s hair) to lock it convincingly into the physical camera space.'
    }
  },
  {
    id: 'di-w14-s13',
    slideNum: 13,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Hierarchy & Legibility',
    title: 'Hierarchy, Scrims & Legibility Over Busy Photos',
    topicTitle: 'Guaranteeing 100% Readability Without Ruining Photography',
    whatItDoes: 'Introduces professional techniques (gradient scrims, selective blur masks, color luminance separation) to ensure text pops off chaotic, high-detail photographs.',
    whatIsGoingOn: 'Placing white text directly on a photograph containing trees, crowd faces, or city lights destroys readability because the photo contains high-frequency contrast. Adding a simple black box looks amateur. Professional retouchers apply subtle gradient scrims or selective low-frequency blurs directly behind the typography.',
    bullets: [
      'The Gradient Scrim: A subtle, curved black-to-transparent gradient (0% to 45% black) placed between photo and text that darkens the backdrop imperceptibly without feeling like a box.',
      'Selective Frequency Blur: Blurring high-frequency noise (sharp tree leaves or gravel) only directly under the text while keeping the rest of the photograph razor sharp.',
      'Luminance Isolation: If the photo is mid-tone, push background levels darker with a Curves adjustment layer clipped to the text boundary zone.',
      'Rule of Thirds Placement: Positioning headlines in dead negative space (open sky, calm water, out-of-focus background bokeh) before resorting to heavy layer effects.'
    ],
    layman: {
      title: 'The Sunglasses Analogy:',
      text: 'A gradient scrim is like putting on tinted sunglasses over just the top 20% of the photo. You can still see all the details of the sky and buildings, but the glare is dimmed just enough that you can read white subtitles comfortably.'
    },
    discussionPrompt: {
      question: 'Why do UI designers and movie poster artists avoid putting thick black strokes (outlines) around text to make it readable, preferring a gradient scrim instead?',
      hint: 'Consider visual clutter, cheap aesthetics, and letterform distortion.',
      talkingPoints: [
        'Thick black strokes choke thin letterforms, destroying the font\'s designed proportions and making it look like a 90s amateur meme.',
        'A soft scrim preserves the integrity of both the typography and the underlying photo.'
      ]
    },
    keyInsight: {
      title: 'Find Negative Space First',
      text: 'The best typography effect is good art direction: compose your shot or crop your photo to provide natural negative space where clean type can live without artificial crutches.'
    }
  },
  {
    id: 'di-w14-s14',
    slideNum: 14,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Common Typographic Sins',
    title: 'The Deadly Typographic Sins in Digital Imaging',
    topicTitle: 'Rookie Mistakes That Instantly Ruin Professional Composites',
    whatItDoes: 'Identifies and provides direct fixes for amateur habits: artificial font stretching, unlinked shadow angles, excessive layer styles, and orphan words.',
    whatIsGoingOn: 'Even an astonishing 100-hour composite looks amateur if the final typography is mishandled. The most offensive error is dragging transform handles to artificially squeeze or stretch a font horizontally, destroying the stroke weights designed by the type foundry.',
    bullets: [
      'Sin 1: Artificial Horizontal/Vertical Scaling: Never use Free Transform to squish text. If you need a condensed font, use an authentic condensed typeface like Impact or DIN Condensed.',
      'Sin 2: Competing Light Angles: Having a drop shadow cast downward at 90° while the background model has a sunlight rim light coming from 45° left.',
      'Sin 3: "FX Buffet" Overload: Stacking heavy Stroke, Bevel, Rainbow Gradient Overlay, Outer Glow, and Drop Shadow all at once on a single sentence.',
      'Sin 4: Dead Center Traps: Centering long paragraphs of text over photographic subjects, creating ragged, uneven edges on both sides that tire the human eye.'
    ],
    layman: {
      title: 'The Too-Much-Cologne Analogy:',
      text: 'A dab of cologne is alluring; emptying the whole bottle makes everyone run out of the room. Layer styles are cologne: a subtle 20% shadow and gentle curve is stylish; stacking every effect at 100% makes your poster reek of rookie design.'
    },
    discussionPrompt: {
      question: 'Why do typography purists get physically upset when someone scales a font horizontally by 70% instead of using an actual Condensed font cut?',
      hint: 'Notice what happens to vertical stem thickness compared to horizontal crossbars.',
      talkingPoints: [
        'Artificial scaling distorts the weight ratio: horizontal lines stay thick while vertical stems become paper-thin, ruining the optical balance.',
        'True condensed fonts are redrawn from scratch with balanced optical weights.'
      ]
    },
    keyInsight: {
      title: 'Restraint Is Mastery',
      text: 'Professional digital imaging is defined not by how many effects you can apply, but by how seamlessly your text integrates with the atmosphere of the camera lens.'
    }
  },
  {
    id: 'di-w14-s15',
    slideNum: 15,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Week 14 Capstone Challenge',
    title: 'Week 14 Studio Challenge & Knowledge Synthesis',
    topicTitle: 'Creating a Cinematic Cyberpunk or High-Fashion Editorial Cover',
    whatItDoes: 'Challenges students to synthesize all Week 14 competencies into an industry-grade typography project using displacement maps, non-destructive layer styles, and color grading.',
    whatIsGoingOn: 'Students will take a high-resolution portrait or urban street photo, construct custom typography using live vector type, conform it to background geometry using Smart Objects and Displacement Maps, and execute a multi-layer lighting grade.',
    bullets: [
      'Project Brief: Produce a 3000x4000px cinematic editorial poster featuring a bold headline integrated both in front of and behind a primary subject.',
      'Mandatory Requirement 1: Non-destructive workflow—zero rasterized text layers; all displacement and blurs applied via Smart Filters.',
      'Mandatory Requirement 2: Manual kerning pass on all characters exceeding 60pt font size.',
      'Mandatory Requirement 3: Lighting harmony—drop shadows and highlights must sample color and angle from the photographic key light.'
    ],
    layman: {
      title: 'The Final Exam Analogy:',
      text: 'You have learned the individual ingredients: how to chop the type (anatomy), season it (kerning), cook it into the background (displacement), and garnish it with light (blending modes). Now serve the complete Michelin-star dish!'
    },
    discussionPrompt: {
      question: 'Which technique did you find most transformative for integrating flat letters into a photo: Displacement Maps, Clipping Masks, or Blend If sliders?',
      hint: 'Reflect on how each method addresses a different dimension of reality (geometry, texture, lighting).',
      talkingPoints: [
        'Displacement addresses geometric warping along physical folds.',
        'Blend If addresses luminance interaction and fabric specular highlights.'
      ]
    },
    keyInsight: {
      title: 'Week 14 Core Takeaway',
      text: 'Typography in digital imaging is not text written on a canvas; it is a physical, sculptural element sharing the exact same light, air, and texture of the scene.'
    }
  }
];

// ============================================================================
// WEEK 15: PREPARING IMAGES FOR PRINT AND WEB (15 SLIDES)
// ============================================================================
export const digitalImagingPrintWebSlidesData: SlideData[] = [
  {
    id: 'di-w15-s1',
    slideNum: 1,
    totalSlides: 15,
    type: 'cover',
    moduleTag: 'DIGITAL IMAGING • WEEK 15',
    title: 'Preparing Images for Print and Web',
    subtitle: 'Output Color Spaces, Subtractive vs Additive Physics, Resolution Mathematics, Halftones & Web Compression',
    metadata: [
      { label: 'Subject', val: 'Digital Imaging' },
      { label: 'Level', val: 'Week 15 Advanced' },
      { label: 'Lab Engine', val: 'Print vs Web Color & Resolution Lab' },
      { label: 'Standards', val: 'ISO 12647-2, FOGRA39, sRGB, WebP, AVIF' }
    ]
  },
  {
    id: 'di-w15-s2',
    slideNum: 2,
    totalSlides: 15,
    type: 'comparison',
    moduleTag: 'Color Physics',
    title: 'Additive RGB vs Subtractive CMYK Physics',
    topicTitle: 'The Fundamental Optical Schism Between Screens and Inks',
    whatItDoes: 'Explains why vibrant electric greens and glowing neons on your monitor look muddy, dull, or dark when printed on physical paper.',
    whatIsGoingOn: 'Computer monitors emit photons directly into human eyes (Additive RGB: combining Red, Green, and Blue light creates 100% white). Physical paper emits zero light—it relies on ambient room light bouncing off pigment droplets (Subtractive CMYK: Cyan, Magenta, and Yellow dyes absorb/subtract light wavelengths).',
    versusLeft: {
      title: 'RGB (Additive Light - Screens)',
      bullets: [
        'Light emission: Phosphors and OLED diodes project Red, Green, and Blue wavelengths directly.',
        'Summation math: $R + G + B = White$ ($255, 255, 255$). Black is the total absence of light ($0, 0, 0$).',
        'Vast color spectrum: Displays saturated electric neons, cyan lasers, and vibrant purples that no physical ink can replicate.'
      ]
    },
    versusRight: {
      title: 'CMYK (Subtractive Pigment - Inks)',
      bullets: [
        'Light absorption: Cyan, Magenta, Yellow, and Key (Black) inks absorb specific wavelengths and reflect what remains.',
        'Summation math: $C + M + Y = Muddy\\ Brown$. Black ink (K) is added to provide deep optical density and contrast.',
        'Physical gamut limit: Inks are constrained by chemical pigment chemistry and paper porosity.'
      ]
    },
    layman: {
      title: 'The Flashlight vs Paint Analogy:',
      text: 'RGB is shining three colored flashlights (Red, Green, Blue) at the exact same spot in a dark room—it gets brighter and turns pure white. CMYK is mixing jars of finger paint together—the more colors you stir in, the darker and muddier it turns until it looks like dirty pond water!'
    },
    discussionPrompt: {
      question: 'Why can a student create a stunning neon green logo in Photoshop RGB, but when printed at a local print shop, it comes out as dull avocado sludge?',
      hint: 'Check the CMYK color gamut boundary—can physical ink emit light?',
      talkingPoints: [
        'Standard CMYK inks absorb blue and red light but cannot physically fluoresce or emit photons like an LED screen.',
        'Fluorescent neons in print require costly special spot colors (Pantone Neon/Pastel inks) rather than standard 4-color process printing.'
      ]
    },
    keyInsight: {
      title: 'The Gamut Reality',
      text: 'You cannot print light. If your digital artwork relies on glowing emissive pixels, it will fundamentally change character when translated to physical ink.'
    }
  },
  {
    id: 'di-w15-s3',
    slideNum: 3,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Color Spaces & Gamuts',
    title: 'Color Spaces & The Gamut Hierarchy',
    topicTitle: 'ProPhoto RGB, Adobe RGB (1998), sRGB, and FOGRA39',
    whatItDoes: 'Visualizes color gamuts as mathematical geometric volumes inside the CIE 1931 chromaticity diagram to guide proper profile assignment.',
    whatIsGoingOn: 'A color profile defines the boundaries of reproducible color. ProPhoto RGB is massive (enclosing colors human eyes cannot even perceive); Adobe RGB covers 50% of the visible spectrum and captures saturated cyans; sRGB is the universal standard for web browsers and mobile screens; CMYK (FOGRA39/US Web Coated) is the smallest.',
    bullets: [
      'ProPhoto RGB: The master archival space for Camera RAW workflows; prevents clipping of raw camera sensor data during high-end retouching.',
      'Adobe RGB (1998): Engineered by Adobe to encompass all printable CMYK colors plus vibrant screen greens; standard for fine-art photography and pre-press.',
      'sRGB (IEC 61966-2.1): The universal default for the internet, Android, iOS, Windows, and video games. Every web export MUST be converted to sRGB.',
      'CMYK Profiles (ISO Coated v2 / FOGRA39): Specifically tailored to offset presses on coated glossy stock; limits ink coverage to prevent paper tearing.'
    ],
    layman: {
      title: 'The Suitcase Analogy:',
      text: 'ProPhoto RGB is an enormous shipping container. Adobe RGB is a large check-in luggage bag. sRGB is an overhead carry-on. CMYK is a tiny handbag. If you pack a huge dress from the shipping container into the tiny handbag without folding it, parts of it get chopped off!'
    },
    discussionPrompt: {
      question: 'What happens when you upload an image saved with an Adobe RGB or ProPhoto RGB color profile directly to Facebook or an e-commerce website?',
      hint: 'Most web browsers assume untagged images are sRGB.',
      talkingPoints: [
        'Colors appear washed out, desaturated, and gray because the browser interprets wide color coordinates using narrow sRGB lookup tables.',
        'Always use "Convert to Profile: sRGB" before publishing anything online.'
      ]
    },
    keyInsight: {
      title: 'Assign vs Convert',
      text: '"Assign Profile" changes how existing pixel numbers are interpreted (distorting colors). "Convert to Profile" recalculates pixel numbers to preserve visual appearance across spaces.'
    }
  },
  {
    id: 'di-w15-s4',
    slideNum: 4,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Soft Proofing & Rendering Intents',
    title: 'Soft Proofing & Out-of-Gamut Warning Mechanics',
    topicTitle: 'Previewing Commercial Print Presses Inside Photoshop',
    whatItDoes: 'Simulates the physical press profile, paper brightness, and ink black point directly on your calibrated monitor before sending files to print.',
    whatIsGoingOn: 'Photoshop\'s View > Proof Setup simulates how inks interact with specific paper stocks. Pressing Ctrl+Shift+Y toggles the Out-of-Gamut Warning, overlaying gray zebra stripes across any color that physical CMYK ink cannot reproduce. Rendering intents (Perceptual vs Relative Colorimetric) dictate how those clipped colors are compressed.',
    bullets: [
      'Soft Proof Setup (Ctrl+Y): Loads the exact ICC profile of your target commercial printer (e.g., FOGRA51 or GRACoL 2013) and simulates paper white.',
      'Gamut Warning (Ctrl+Shift+Y): Marks illegal colors that will shift or clip during CMYK conversion with a solid warning overlay.',
      'Relative Colorimetric Intent: Maps out-of-gamut colors to the closest reproducible shade on the gamut boundary while leaving in-gamut colors untouched (ideal for corporate logos).',
      'Perceptual Intent: Scales the entire color spectrum proportionally, shifting even in-gamut colors to maintain visual relationships between shades (ideal for portraits and landscapes).'
    ],
    layman: {
      title: 'The Orchestra Analogy:',
      text: 'Relative Colorimetric is like telling the brass section: "You guys are playing too loud; quiet down to match the room, but everyone else play normally." Perceptual is telling the entire orchestra: "Everyone play 20% softer so the balance between all instruments stays identical."'
    },
    discussionPrompt: {
      question: 'Why is Relative Colorimetric preferred for commercial brand logos (like Coca-Cola red), while Perceptual is preferred for high-fashion portraits?',
      hint: 'Consider whether exact color matching of a single shade matters more than smooth tonal transitions.',
      talkingPoints: [
        'Brand guidelines require exact delta-E color accuracy for trademark logos.',
        'Portraits have smooth skin gradients; if colors clip abruptly, skin develops harsh, posterized banding.'
      ]
    },
    keyInsight: {
      title: 'Never Print Blind',
      text: 'Always request the ICC profile from your commercial printing vendor and soft-proof your work before exporting final press PDFs.'
    }
  },
  {
    id: 'di-w15-s5',
    slideNum: 5,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Resolution Mechanics',
    title: 'Resolution Mathematics: PPI vs DPI vs LPI',
    topicTitle: 'Deconstructing the Triad of Spatial Detail Measurement',
    whatItDoes: 'Eliminates universal confusion between digital screen pixels (PPI), printer ink droplets (DPI), and commercial halftone lines (LPI).',
    whatIsGoingOn: 'Beginners use PPI and DPI interchangeably, but they measure completely different physical domains. PPI (Pixels Per Inch) defines digital image sampling density. DPI (Dots Per Inch) measures the physical micro-droplets of ink sprayed by an inkjet printhead. LPI (Lines Per Inch) measures the mechanical screening mesh on offset lithographic rollers.',
    bullets: [
      'PPI (Pixels Per Inch): Digital raster density. A $3000 \\times 4000$px image printed at 300 PPI produces a physical $10 \\times 13.33$ inch print with zero upsampling.',
      'DPI (Dots Per Inch): Mechanical printer resolution. A 2400 DPI inkjet printer fires 2400 microscopic ink droplets per linear inch to construct tonal shades from four CMYK cartridges.',
      'LPI (Lines Per Inch): Halftone frequency in commercial offset printing. Typical glossy magazines print at 150 LPI; luxury coffee-table art books print at 175-200 LPI.',
      'The Golden 300 PPI Rule: At standard reading distance (12-14 inches), human 20/20 vision cannot distinguish individual pixels when density exceeds 300 PPI.'
    ],
    layman: {
      title: 'The Mosaic Tile Analogy:',
      text: 'PPI is how many small glass tiles you designed in your computer sketch. DPI is how many tiny drops of colored glue the mason uses to stick each tile onto the wall. They are not the same thing!'
    },
    discussionPrompt: {
      question: 'Why do giant highway billboards only need 30 to 50 PPI resolution, while a handheld business card requires 300 to 450 PPI?',
      hint: 'Consider viewing distance and human visual acuity (angular resolution).',
      talkingPoints: [
        'Billboards are viewed from 50 to 100 meters away; human eyes blend low-density pixels into sharp pictures at that distance.',
        'At 50 PPI, an uncompressed billboard file remains workable (100MB) rather than an impossible 50-gigabyte file.'
      ]
    },
    keyInsight: {
      title: 'Viewing Distance Formula',
      text: 'Minimum required PPI is inversely proportional to viewing distance: $PPI \\approx 3438 / \\text{Distance in inches}$. A print viewed from 10 feet only needs 30 PPI!'
    }
  },
  {
    id: 'di-w15-s6',
    slideNum: 6,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Halftone & Nyquist Rule',
    title: 'Halftone Screening & The Nyquist Printing Rule',
    topicTitle: 'Why $LPI \\times 2 = DPI$ in Commercial Offset Lithography',
    whatItDoes: 'Derives the mathematical rule that dictates why professional pre-press standards require exactly 300 PPI for a standard 150 LPI magazine print run.',
    whatIsGoingOn: 'Commercial printing presses cannot print continuous photographic tones; they only print tiny dots of solid ink at varying sizes (halftones). By the Nyquist-Shannon sampling theorem, capturing continuous wave frequencies without aliasing requires sampling at twice the target frequency. Thus, $150\\text{ LPI} \\times 2 = 300\\text{ PPI}$.',
    bullets: [
      'Continuous Tone vs Halftone: Photographs have continuous gradients; presses can only apply ink or no ink. Halftoning varies dot size to trick human eyes into seeing smooth shades.',
      'The Quality Factor ($QF = 2.0$): Multiplying the press LPI by 2.0 guarantees that every individual halftone cell has 4 digital pixels to calculate its precise size and angle.',
      'Screen Angles to Prevent Moiré: CMYK halftone screens are rotated to mathematically safe angles (Cyan 15°, Magenta 75°, Yellow 0°, Black 45°) to prevent unsightly optical interference patterns (moiré).',
      'The Rosette Pattern: When screen angles are calibrated correctly, overlapping CMYK dots form tiny geometric rosettes that render lifelike continuous skin tones.'
    ],
    layman: {
      title: 'The Comic Book Dot Analogy:',
      text: 'Look at a vintage newspaper or comic book with a magnifying glass: that smooth peach skin is actually an array of tiny magenta and yellow polka dots! Halftone screening is the art of varying dot sizes so your brain sees continuous shades.'
    },
    discussionPrompt: {
      question: 'What happens if a pre-press technician accidentally aligns both Cyan and Magenta screens at the exact same 45° angle?',
      hint: 'Moiré pattern distortion and optical interference.',
      talkingPoints: [
        'The dots clash and create severe, swirling geometric wavy lines called moiré.',
        'Separating the angles ensures dots interlock in balanced floral rosettes.'
      ]
    },
    keyInsight: {
      title: 'The 300 PPI Origin',
      text: 'The universal 300 PPI specification was not invented randomly—it is the direct mathematical result of $150\\text{ LPI} \\times 2.0$ for standard offset commercial lithography.'
    }
  },
  {
    id: 'di-w15-s7',
    slideNum: 7,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Pre-Press Anatomy',
    title: 'Pre-Press Geometry: Bleed, Trim & Safe Margins',
    topicTitle: 'Protecting Physical Artwork from Industrial Guillotine Blades',
    whatItDoes: 'Defines the spatial boundary zones required for commercial printing to prevent white borders and chopped text during mass paper cutting.',
    whatIsGoingOn: 'Commercial print shops print thousands of pages on large parent sheets, which are stacked and sliced by high-speed industrial hydraulic guillotines. Because paper sheets can shift slightly (up to 1-2mm) during cutting, artwork that touches the edge must extend beyond the cut line into the "Bleed" zone.',
    bullets: [
      'Trim Line: The exact dimension of the final physical product (e.g., A4: $210 \\times 297$mm or US Letter: $8.5 \\times 11$ inches).',
      'Bleed Zone (Typically 3mm or 0.125 inches): Artwork extends past the trim line so that if the blade cuts slightly outward, no raw white paper edge is exposed.',
      'Safe Margin (Inner 5mm / 0.25 inches): Critical headlines, body text, and logos must stay well inside this boundary so they are never clipped if the blade shifts inward.',
      'Crop Marks & Registration Marks: High-contrast hairline crosses printed outside the artwork that guide the press operator in aligning plates and setting cutting blades.'
    ],
    layman: {
      title: 'The Pizza Dough Analogy:',
      text: 'Bleed is rolling pizza dough slightly larger than the metal baking pan. When you trim off the excess, the crust reaches every single edge with zero bald spots. Safe margin is keeping your pepperoni away from the rim so none falls into the oven!'
    },
    discussionPrompt: {
      question: 'A student submits a business card design with their phone number placed 1 millimeter away from the trim edge. What happens at the commercial print shop?',
      hint: 'Consider guillotine vibration and paper shift during high-speed cutting.',
      talkingPoints: [
        'A 1.5mm mechanical blade shift will slice the phone number in half, rendering 1,000 printed cards unusable.',
        'Always maintain at least 4-5mm of safe margin padding for all critical text.'
      ]
    },
    keyInsight: {
      title: 'Bleed Is Not Optional',
      text: 'Any background photo or color that goes to the edge of the finished page must have at least 3mm (0.125") of bleed past the trim line.'
    }
  },
  {
    id: 'di-w15-s8',
    slideNum: 8,
    totalSlides: 15,
    type: 'print_vs_web_color_lab',
    moduleTag: 'Interactive Studio Lab',
    title: 'Interactive Studio: Print vs Web Color & Resolution',
    topicTitle: 'Real-Time Pre-Press & Web Optimization Simulator',
    whatItDoes: 'Interactive lab simulating CMYK gamut clipping, DPI/PPI output calculations, physical print dimensions, LPI screening, and WebP vs TIFF file weight tradeoffs.',
    whatIsGoingOn: 'Adjust DPI sliders from 72 to 600, toggle between Web sRGB and Print FOGRA39 modes, test color gamut warning overlays, and examine physical print size calculations dynamically.'
  },
  {
    id: 'di-w15-s9',
    slideNum: 9,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Ink Limits & Rich Black',
    title: 'Total Area Coverage (TAC) & The Rich Black Formula',
    topicTitle: 'Preventing Wet Ink Smearing and Faded Gray Lettering',
    whatItDoes: 'Explains the chemical physics of ink saturation on paper and teaches the exact CMYK formula for rich, deep velvet black.',
    whatIsGoingOn: 'Setting $C=100\\%, M=100\\%, Y=100\\%, K=100\\%$ totals 400% Total Area Coverage (TAC). At 400%, the paper is soaked with so much wet liquid ink that it curls, jams the press, and smears onto adjacent sheets (offsetting). Commercial presses enforce a TAC limit between 280% and 320%. Conversely, pure $K=100\\%$ looks washed-out and dark gray.',
    bullets: [
      'Total Area Coverage (TAC / TIC): The sum of all four CMYK ink percentages on a single spot. Maximum safe limit for coated sheetfed presses is typically 300%.',
      'Plain Black ($C=0, M=0, Y=0, K=100$): Used strictly for body text and fine lines to prevent misregistration; appears muddy gray when used for large background areas.',
      'Standard Rich Black Formula: $C=60\\%, M=40\\%, Y=40\\%, K=100\\%$ ($Total = 240\\% TAC$). Creates a deep, neutral, obsidian black with fast drying times.',
      'Cool Black vs Warm Black: $C=70, M=35, Y=30, K=100$ leans cool for tech and automotive; $C=30, M=60, Y=30, K=100$ leans warm for luxury and vintage.'
    ],
    layman: {
      title: 'The Wet Sponge Analogy:',
      text: 'Paper is like a thin dry sponge. A few drops of water (ink) soak in nicely. If you dump four full cups of water onto it at once (400% TAC), the sponge turns into wet mush and falls apart. You must keep the liquid within safe absorption limits.'
    },
    discussionPrompt: {
      question: 'Why should you NEVER use Rich Black ($C=60, M=40, Y=40, K=100$) for 8pt body text in a printed brochure?',
      hint: 'Think about plate registration and paper vibrations.',
      talkingPoints: [
        'Small text requires all 4 print plates to align within fractions of a millimeter.',
        'If any plate shifts by 0.1mm, the tiny letters show rainbow halo fringes (misregistration). Small text must always be 100% K only.'
      ]
    },
    keyInsight: {
      title: 'The Black Rule',
      text: 'Small text = 100% K only (sharp, zero misregistration). Large headline banners & backgrounds = Rich Black ($C=60, M=40, Y=40, K=100$) for luxurious depth.'
    }
  },
  {
    id: 'di-w15-s10',
    slideNum: 10,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Print Export Standards',
    title: 'Professional Print Standards: PDF/X & TIFF Masters',
    topicTitle: 'ISO-Compliant File Delivery for High-Volume Production',
    whatItDoes: 'Compares industry-standard archival formats (PDF/X-1a, PDF/X-4, TIFF with LZW) to guarantee zero layout shifts at commercial pre-press facilities.',
    whatIsGoingOn: 'Sending a raw PSD or open Illustrator file to a commercial print house is dangerous because fonts can substitute, linked images can unlink, and effects can re-render differently. ISO-standardized PDF/X files lock down all fonts, embed vector outlines, enforce CMYK compliance, and freeze transparency states.',
    bullets: [
      'PDF/X-1a (2001 Standard): The bulletproof legacy standard; strictly requires CMYK/spot colors and completely flattens all transparencies into solid artwork.',
      'PDF/X-4 (Modern Standard): Supports live transparency, ICC color management, 16-bit layers, and embedded RGB assets converted by modern RIP processors.',
      'TIFF Masters (Tagged Image File Format): Uncompressed or losslessly compressed (LZW/ZIP) bitmap master format; ideal for photographic gallery prints and fine art.',
      'Pre-Flight Verification: Running Adobe Acrobat Pro Preflight tools to scan for RGB images, low-resolution assets (<250 PPI), missing bleeds, and font licensing errors before sending to press.'
    ],
    layman: {
      title: 'The Cake in a Sealed Box Analogy:',
      text: 'Sending a raw PSD file is sending a half-baked cake and a bowl of frosting—hoping the baker puts it together right. A PDF/X-1a is sending a fully baked, frozen, sealed cake in a temperature-controlled titanium box: what you baked is exactly what arrives!'
    },
    discussionPrompt: {
      question: 'What is the commercial danger of sending a print shop an ordinary PDF exported with "Smallest File Size" intended for email sharing?',
      hint: 'Look at what that preset does to image resolution and color profiles.',
      talkingPoints: [
        'It downsamples images to 72 PPI and compresses with heavy lossy JPEG artifacts.',
        'A printed poster would look completely pixelated, resulting in rejected print runs and wasted budgets.'
      ]
    },
    keyInsight: {
      title: 'PDF/X Is Non-Negotiable',
      text: 'Never send commercial printers raw JPGs or unverified PDFs. Always export using certified PDF/X-1a (for legacy offset) or PDF/X-4 (for modern digital presses).'
    }
  },
  {
    id: 'di-w15-s11',
    slideNum: 11,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Web Compression Engineering',
    title: 'Web Image Compression: Lossy vs Lossless & Chroma',
    topicTitle: 'Balancing Visual Fidelity Against Millisecond Network Latency',
    whatItDoes: 'Analyzes human optical perception to compress megabytes of photographic data into tiny kilobyte payloads without noticeable visual degradation.',
    whatIsGoingOn: 'Every 100ms of page load latency drops e-commerce conversion rates by 7%. High-end digital images must be compressed ruthlessly for the web. Web compression leverages human eye biology: our retinas have millions of rod cells (detecting luminance/brightness) but far fewer cone cells (detecting color/chroma).',
    bullets: [
      'Lossless Compression (PNG, WebP Lossless): Retains every original pixel byte; eliminates redundant code using DEFLATE algorithms; ideal for logos, screenshots, and sharp vector UI.',
      'Lossy Compression (JPEG, WebP, AVIF): Discards imperceptible high-frequency visual data using Discrete Cosine Transform (DCT); achieves 80-90% file size reductions.',
      'Chroma Subsampling (4:2:0 vs 4:4:4): Cuts color resolution by 50% or 75% while keeping luminance full resolution. The human brain perceives full detail because brightness is preserved.',
      'Perceptual Quality Sweet Spot: Saving JPEGs at Quality 80-82 delivers 60% file size savings compared to Quality 100 with virtually zero visible difference to human eyes.'
    ],
    layman: {
      title: 'The Black & White Sketch Analogy:',
      text: 'Imagine sketching a drawing with a sharp black pencil (luminance) and then coloring it with a wide watercolor brush (chroma). Your eye follows the sharp pencil lines and barely notices that the watercolor paint is blurry. That is how JPEG compression works!'
    },
    discussionPrompt: {
      question: 'Why does saving a JPEG at Quality 100 in Photoshop increase file size by 300% over Quality 85 while looking identical on a smartphone screen?',
      hint: 'Think about diminishing returns in human visual perception.',
      talkingPoints: [
        'Quality 100 preserves mathematical noise and microscopic sensor grain that human eyes cannot see.',
        'Quality 82 discards invisible mathematical artifacts, reducing file weight from 4MB to 600KB.'
      ]
    },
    keyInsight: {
      title: 'The 80% Rule',
      text: 'In web production, Quality 80-82 is the gold standard. Never export web JPEGs at 100% unless creating an uncompressed photographic master.'
    }
  },
  {
    id: 'di-w15-s12',
    slideNum: 12,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Next-Gen Web Formats',
    title: 'Next-Generation Formats: WebP, AVIF & SVG',
    topicTitle: 'The Modern Web Arsenal Replacing Legacy JPEG and PNG',
    whatItDoes: 'Evaluates performance benchmarks, browser compatibility, and compression ratios between modern modern formats (WebP, AVIF) and legacy formats (JPEG, PNG, GIF).',
    whatIsGoingOn: 'Legacy web formats like JPEG (1992) and GIF (1987) are decades old. WebP (Google) provides 25-34% smaller file sizes than comparable JPEGs with native 8-bit alpha transparency. AVIF (Alliance for Open Media, based on the AV1 video codec) achieves up to 50% smaller sizes than JPEG with 10-bit and 12-bit HDR color support.',
    bullets: [
      'WebP: The current industry workhorse for web hero images and banners; supports lossy, lossless, alpha transparency, and animation; supported by 97%+ of global browsers.',
      'AVIF: Superior compression efficiency; retains fidelity in deep shadows and gradients where JPEGs suffer blocky banding; natively supports Wide Gamut P3 and HDR highlights.',
      'SVG (Scalable Vector Graphics): XML-based vector code for icons, logos, and UI typography; infinite scalability with zero pixelation at fractions of a kilobyte.',
      'Progressive Rendering: Encoding JPEGs and WebPs to load a blurry full-image preview in 100ms that sharpens over time, dramatically improving perceived page speed.'
    ],
    layman: {
      title: 'The Modern Jet Engine Analogy:',
      text: 'JPEG is a dependable 1970s station wagon. WebP is a fuel-efficient modern hybrid car. AVIF is an electric supersonic jet. They all carry passengers (pixels) to the destination, but the jet uses half the fuel and travels twice as fast!'
    },
    discussionPrompt: {
      question: 'Why haven\'t all websites completely replaced JPEG with AVIF yet if AVIF produces 50% smaller files?',
      hint: 'Consider encoding time, server CPU cost, and legacy device rendering speed.',
      talkingPoints: [
        'Encoding AVIF files takes significantly more CPU processing power and time on web servers.',
        'Older mobile phones can experience battery drain and lag when decoding complex AV1 video frames.'
      ]
    },
    keyInsight: {
      title: 'The Picture Element Strategy',
      text: 'Use HTML5 `<picture>` tags with `<source type="image/avif">`, `<source type="image/webp">`, and a fallback `<img>` with JPEG to deliver optimal formats to all browsers.'
    }
  },
  {
    id: 'di-w15-s13',
    slideNum: 13,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Responsive & Retina Workflows',
    title: 'Responsive Images & Retina Display Optimization',
    topicTitle: '1x, 2x, 3x Asset Pipelines and the HTML srcset Attribute',
    whatItDoes: 'Explains how modern mobile high-DPI displays (Apple Retina, Samsung Super AMOLED) render double-density images and how to deliver multi-resolution assets.',
    whatIsGoingOn: 'An iPhone with a 3x Retina display packs 460 physical pixels per inch. If a website serves a standard $400 \\times 300$px image to a $400 \\times 300$pt container, the phone stretches each digital pixel across a $3 \\times 3$ grid of physical sub-pixels, resulting in blurry, fuzzy graphics. To render razor-sharp, the asset must be exported at $1200 \\times 900$px ($3\\times$).',
    bullets: [
      'Device Pixel Ratio (DPR): The ratio between physical hardware pixels and logical CSS pixels ($DPR = 1.0$ for standard desktop; $2.0$ for MacBook Retina; $3.0$ for high-end phones).',
      'The srcset Attribute: Allows browsers to automatically pick the best asset: `<img srcset="photo-1x.jpg 1x, photo-2x.jpg 2x, photo-3x.jpg 3x" src="photo-1x.jpg">`.',
      'Sizes & Breakpoints: Informs the browser what width the image will occupy across mobile, tablet, and ultra-wide desktop screens before the HTML document renders.',
      'CDN Image Transformations: Modern CDNs (Cloudinary, Cloudflare, Imgix) automatically resize, crop, and convert to WebP on the fly based on user device headers.'
    ],
    layman: {
      title: 'The Television Screen Grid Analogy:',
      text: 'If you draw a picture with thick chalk on a sidewalk (1x), it looks okay from far away. But a Retina screen has microscope-level tiny tiles (3x). If you don\'t give it high-detail data, the screen has to guess and blur the gaps.'
    },
    discussionPrompt: {
      question: 'Why not just serve 3x images to everyone so all screens get maximum sharpness?',
      hint: 'Think about mobile data caps, 3G/4G connections, and page load speed.',
      talkingPoints: [
        'A 3x image is 9 times heavier in pixel area than a 1x image.',
        'Users on low-bandwidth mobile connections will suffer slow page loads and high data usage.'
      ]
    },
    keyInsight: {
      title: 'Export at 2x as Minimum',
      text: 'For modern web design, always export raster hero banners at 2x pixel dimensions with medium compression (Quality 75) for optimal Retina crispness with minimal file weight.'
    }
  },
  {
    id: 'di-w15-s14',
    slideNum: 14,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Pre-Flight Checklist',
    title: 'The Professional Pre-Flight Verification Checklist',
    topicTitle: 'How to Prevent $50,000 Disasters Before Final Production',
    whatItDoes: 'A step-by-step verification protocol to audit digital artwork before committing to physical factory printing or web publishing.',
    whatIsGoingOn: 'In commercial production, errors caught at the digital stage cost $0. Errors caught after 50,000 brochures are printed, bound, and delivered cost tens of thousands of dollars and can ruin professional reputations. Pre-flighting is the disciplined inspection pass every digital artist must master.',
    bullets: [
      'Check 1: Resolution Audit—Verify that all placed raster assets have an "Effective PPI" of $\\ge 300$ at their final layout scale.',
      'Check 2: Color Space Verification—Zero RGB or untagged images in print PDFs; all assets converted to the target press profile (e.g., FOGRA39).',
      'Check 3: Bleed & Safety Inspection—Ensure 3mm bleed extends on all trimmed edges and no critical text is within 5mm of the cut line.',
      'Check 4: TAC & Ink Density Scan—Confirm that no shadow area exceeds 300% Total Area Coverage using the InDesign/Acrobat Separations Preview.',
      'Check 5: Web Compression Audit—Confirm web hero banners are under 300KB and converted to sRGB color profile.'
    ],
    layman: {
      title: 'The Pilot Pre-Flight Analogy:',
      text: 'An airline pilot never takes off without walking around the plane, testing wing flaps, and checking fuel pressure. A pre-flight checklist is your pilot inspection before your artwork launches into the world.'
    },
    discussionPrompt: {
      question: 'What is the difference between "Actual PPI" and "Effective PPI" in Adobe InDesign when placing an image?',
      hint: 'What happens if you scale a 300 PPI photo up to 200% on the page?',
      talkingPoints: [
        'Actual PPI is the file\'s native density (e.g., 300 PPI).',
        'Effective PPI is the density at its placed size. If scaled to 200%, the Effective PPI drops to 150, which will print blurry!'
      ]
    },
    keyInsight: {
      title: 'Audit Effective PPI',
      text: 'Never trust native file resolution alone. Always check the "Effective PPI" in your layout software to ensure placed assets are not over-scaled.'
    }
  },
  {
    id: 'di-w15-s15',
    slideNum: 15,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Week 15 Capstone Challenge',
    title: 'Week 15 Studio Challenge: The Dual-Output Challenge',
    topicTitle: 'Exporting One Master Composite for Both Offset Print & Mobile Web',
    whatItDoes: 'Tests students on executing professional dual-pipeline exports: a certified PDF/X-1a pre-press master and an optimized WebP responsive bundle from a single artwork file.',
    whatIsGoingOn: 'Students will take an intricate commercial composite and prepare two distinct deliverables: Deliverable A (CMYK ISO Coated v2, 300 PPI, 3mm bleed, crop marks, Rich Black backgrounds, PDF/X-1a) and Deliverable B (sRGB, 2x Retina WebP, sub-250KB file size, responsive metadata).',
    bullets: [
      'Deliverable A (Commercial Print): PDF/X-1a compliant, $300\\text{ PPI}$, 3mm bleed on all sides, zero RGB assets, TAC capped at 300%.',
      'Deliverable B (Web Hero Banner): sRGB profile, converted to modern WebP format, max file size of 200KB, crisp text rendering on high-DPI displays.',
      'Soft Proofing Report: A written 1-page breakdown comparing color gamut shifts observed between RGB master and CMYK soft proof.',
      'Quality Verification: Both deliverables must pass automated pre-flight checks with zero warnings.'
    ],
    layman: {
      title: 'The Dual Citizenship Analogy:',
      text: 'Your image must be able to travel anywhere: in the physical world, it carries a sturdy paper passport (PDF/X). In the digital world, it carries a lightweight biometric smart card (WebP). Both represent the same citizen perfectly.'
    },
    discussionPrompt: {
      question: 'Why is it better practice to design in a wide RGB color space and convert to CMYK at the very end, rather than designing in CMYK from scratch?',
      hint: 'Consider filter availability, blending modes, and multi-channel reusability.',
      talkingPoints: [
        'Designing in RGB allows non-destructive blend modes, camera raw filters, and preserves maximum color data.',
        'You can repurpose an RGB master for web, social media, video, and print. If you start in CMYK, you permanently discard vibrant colors.'
      ]
    },
    keyInsight: {
      title: 'Master in RGB, Output to Destination',
      text: 'Always build and archive your master layered artwork in 16-bit RGB. Convert to CMYK or WebP only during final destination export.'
    }
  }
];

// ============================================================================
// WEEK 16: FINAL PROJECT DEVELOPMENT (15 SLIDES)
// ============================================================================
export const digitalImagingFinalProjectSlidesData: SlideData[] = [
  {
    id: 'di-w16-s1',
    slideNum: 1,
    totalSlides: 15,
    type: 'cover',
    moduleTag: 'DIGITAL IMAGING • WEEK 16',
    title: 'Final Project Development',
    subtitle: 'Comprehensive Digital Image Production: Concept, Masking, Perspective, Lighting, Grading & Production Pipeline',
    metadata: [
      { label: 'Subject', val: 'Digital Imaging' },
      { label: 'Level', val: 'Week 16 Capstone' },
      { label: 'Scope', val: 'Master Digital Composite Series' },
      { label: 'Deliverables', val: 'Production PSD, 16-Bit Master, Case Study' }
    ]
  },
  {
    id: 'di-w16-s2',
    slideNum: 2,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Concept & Moodboarding',
    title: 'Concept Ideation & Visual Moodboarding',
    topicTitle: 'Building the Creative Compass Before Touching Photoshop',
    whatItDoes: 'Establishes the narrative premise, target demographic, color harmony framework, and visual references that guide every compositing decision.',
    whatIsGoingOn: 'Jumping directly into software without clear visual references leads to disjointed, incoherent composites where lighting, perspectives, and color palettes clash. Professional concept development uses curated moodboards (Milanote, Pinterest, PureRef) to lock down visual benchmarks for key lighting, atmosphere, lens focal lengths, and costume textures.',
    bullets: [
      'The Creative Brief: Defining the core narrative question, client brand values, and primary emotional reaction expected from the viewer.',
      'The Triad Moodboard: Curating 10-15 high-res reference images divided into 3 distinct categories: Lighting/Atmosphere, Character/Focal Subject, and Environment/Textures.',
      'Color Palette Architecture: Selecting an intentional color harmony (Complementary, Split-Complementary, Analogous, or Triadic) to unify disparate photographic sources.',
      'Thumbnail Value Roughs: Sketching quick 3-tone thumbnail sketches (Black, Mid-Gray, White) to test visual balance and focal silhouettes.'
    ],
    layman: {
      title: 'The Blueprints Analogy:',
      text: 'You would never start building a two-story house by laying bricks randomly in the grass. A moodboard and concept sketch is your architectural blueprint; it ensures the roof, doors, and foundation all fit together.'
    },
    discussionPrompt: {
      question: 'Why do master concept artists say that 50% of a successful digital image is completed before opening Photoshop?',
      hint: 'Consider how much time is wasted trying to fix fundamentally mismatched source photos.',
      talkingPoints: [
        'Finding photos with matching perspective and lighting takes minutes during pre-production.',
        'Trying to force mismatched lighting to look realistic in Photoshop can take 20 frustrating hours.'
      ]
    },
    keyInsight: {
      title: 'Pre-Production Saves Projects',
      text: 'A great composite is built on disciplined curation. If your source photos don\'t match in camera angle and lighting direction, no amount of retouching will save the image.'
    }
  },
  {
    id: 'di-w16-s3',
    slideNum: 3,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Project Scoping',
    title: 'Project Scoping & Vertical Slice Production',
    topicTitle: 'Managing Scope, Milestones & Technical Feasibility',
    whatItDoes: 'Teaches time estimation, asset pipelining, and milestone structuring to deliver complex multi-image series on strict professional deadlines.',
    whatIsGoingOn: 'Creative projects fail most frequently due to "feature creep"—ambitious students try to composite 40 characters, alien spaceships, and exploding buildings in 5 days, resulting in an unfinished disaster. Industry veterans produce a "vertical slice": a single fully-finished hero piece to prove the pipeline before expanding into a series.',
    bullets: [
      'The Vertical Slice: Take one focal quadrant or single hero hero frame from concept to 100% polish first to establish the lighting recipe and layer structure.',
      'Production Phasing: Phase 1 (Rough Blocking & Horizon Alignment), Phase 2 (Clean Masking & Extractions), Phase 3 (Lighting & Shadows), Phase 4 (Color Grading & Atmosphere).',
      'Time Boxing: Allocating strict maximum hours per phase (e.g., 3 hours for extraction, 4 hours for lighting balance, 2 hours for final grading).',
      'Asset Inventory Audit: Verifying that all required source assets are captured, licensed, and checked for minimum resolution requirements before production begins.'
    ],
    layman: {
      title: 'The Recipe Tasting Analogy:',
      text: 'If you are cooking a 10-course banquet for 100 guests, you cook one small test bowl first and taste it. You adjust the salt and spices until it\'s delicious, then you cook the full feast with total confidence.'
    },
    discussionPrompt: {
      question: 'What is the danger of working on color grading and particle effects before your basic perspective and horizon lines are locked down?',
      hint: 'What happens if you have to move a building 2 inches to the left later?',
      talkingPoints: [
        'Moving an element invalidates all the custom lighting, contact shadows, and adjustment masks painted on top of it.',
        'Always build foundations (perspective, scale, silhouette) before adding surface polish.'
      ]
    },
    keyInsight: {
      title: 'Foundation First, Polish Last',
      text: 'Never color-grade or add film grain until all spatial scales, horizon lines, and subject extractions are 100% approved.'
    }
  },
  {
    id: 'di-w16-s4',
    slideNum: 4,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Asset Acquisition & Legal',
    title: 'Asset Acquisition, Model Releases & Copyright',
    topicTitle: 'Legally Clean and Technically Pristine Raw Materials',
    whatItDoes: 'Covers commercial licensing, stock photography curation, model/property releases, and Creative Commons compliance for professional digital imagers.',
    whatIsGoingOn: 'Using images downloaded from Google Images or Pinterest in client work can trigger catastrophic copyright lawsuits. Professional compositors source imagery from certified commercial stock libraries (Adobe Stock, Shutterstock, Unsplash Commercial), capture their own studio RAW plates, and ensure every identifiable person signs a standard Model Release.',
    bullets: [
      'Copyright Law & Commercial Rights: Distinguishing between Editorial Use Only (cannot be used for advertising) and Commercial Rights (fully cleared for product marketing).',
      'Model & Property Releases: Legal contracts signed by human subjects and property owners granting permission to distribute composite artwork commercially.',
      'RAW Photography Advantages: Sourcing uncompressed 14-bit or 16-bit DNG/CR3/ARW files preserves deep shadow details and allows dynamic white balance adjustments.',
      'Creative Commons Standards: Understanding CC0 (Public Domain), CC-BY (Attribution required), and CC-NC (strictly non-commercial).'
    ],
    layman: {
      title: 'The Restaurant Ingredients Analogy:',
      text: 'A chef cannot cook dinner using groceries stolen from someone else\'s refrigerator. You must buy your ingredients legally from trusted suppliers so your customers can enjoy the meal without health inspectors shutting down the restaurant!'
    },
    discussionPrompt: {
      question: 'A company loves your digital poster and wants to print 10,000 billboards, but you used an "Editorial Use Only" photo of a model found online. What happens?',
      hint: 'Legal liability, statutory damages, and career reputation.',
      talkingPoints: [
        'The agency and client face massive copyright infringement lawsuits from the model and photographer.',
        'Always ensure every composite element has verifiable commercial clearance.'
      ]
    },
    keyInsight: {
      title: 'Keep a License Folder',
      text: 'Always save purchase receipts, stock license PDFs, and signed model releases in an `Assets/_Licenses` subfolder alongside your project file.'
    }
  },
  {
    id: 'di-w16-s5',
    slideNum: 5,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Non-Destructive Workflow',
    title: 'Non-Destructive Architecture: Smart Objects & Links',
    topicTitle: 'Building Bulletproof Production Files That Survive Endless Revisions',
    whatItDoes: 'Teaches advanced file structuring: Smart Objects, Linked Assets, Nested Pre-Compositions, and Layer Comps for maximum agility.',
    whatIsGoingOn: 'In commercial production, client revisions are guaranteed. If a client asks to change the color of a car or alter a model\'s expression, a destructive artist has to rebuild the entire composite from scratch. A non-destructive artist updates a single nested Smart Object, and the entire 50-layer composite updates automatically.',
    bullets: [
      'Embedded vs Linked Smart Objects: Embedded objects travel inside the PSD; Linked Smart Objects reference external files, enabling multi-artist team collaboration.',
      'Smart Filters: Applying blurs, sharpeners, and displacement maps non-destructively with editable filter masks and independent blend modes.',
      'Adjustment Layer Clipping Chains: Stacking Curves, Hue/Saturation, and Color Balance layers clipped directly to specific element groups.',
      'Layer Comps Panel: Recording multiple design states (Daylight Version, Night Version, Minimalist Version) inside a single master Photoshop file.'
    ],
    layman: {
      title: 'The Russian Nesting Doll Analogy:',
      text: 'A Smart Object is a box inside a box. Inside the inner box, you have the original, pristine high-resolution photo. You can paint, stretch, and filter the outer box all you want, but the original photo inside stays untouched and ready to be reset at any second.'
    },
    discussionPrompt: {
      question: 'Why do professional art directors immediately inspect the Layers panel of a job applicant\'s submitted PSD file before looking at the visual artwork?',
      hint: 'A beautiful image with a chaotic, flattened, destructive layer stack proves amateur habits.',
      talkingPoints: [
        'Organized, named, non-destructive layers prove that the artist can function in a high-speed agency pipeline.',
        'Flattened or destructive files cost studios money when emergency client revisions arrive.'
      ]
    },
    keyInsight: {
      title: 'The Non-Destructive Pledge',
      text: 'Never use the Eraser tool. Never hit "Merge Layers". Always use Layer Masks, Smart Objects, and Adjustment Layers.'
    }
  },
  {
    id: 'di-w16-s6',
    slideNum: 6,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Master Masking & Extraction',
    title: 'Master Masking: Pen Tool, Channels & Hair Extraction',
    topicTitle: 'Surgical Subject Separation from Complex Backgrounds',
    whatItDoes: 'Details the four primary extraction techniques: Pen Tool vector paths for hard surfaces, Calculations/Channels for fine hair, and AI Select Subject with Select & Mask.',
    whatIsGoingOn: 'A sloppy cutout with glowing halos or clipped hair edges immediately breaks the illusion of reality. Professional compositors never rely on a single extraction method. They use the Pen Tool for crisp mechanical boundaries (skin, armor, weapons) and Alpha Channel thresholding for complex flyaway hair and transparent fabrics.',
    bullets: [
      'The Pen Tool (Hard Surfaces): The gold standard for clean, anti-aliased Bézier paths around vehicles, clothing silhouettes, and architectural edges.',
      'Alpha Channel Calculations (Hair & Fur): Duplicate the channel with highest contrast (usually Blue); apply Levels to crush shadows to pure black and highlights to pure white.',
      'Select & Mask Refine Edge: Using the Refine Edge brush to detect semi-transparent hairs against contrasting backgrounds with "Decontaminate Colors" checked.',
      'Edge Halo Removal: Contracting masks by 1-2 pixels and using "Inner Shadow" or clipping a 50% gray layer in Soft Light mode to paint out residual background fringing.'
    ],
    layman: {
      title: 'The Barber vs Sculptor Analogy:',
      text: 'For cutting a marble statue, you need a sharp diamond chisel (Pen Tool). For cutting fine human hair, a chisel would smash everything—you need a microscopic optical scanner (Channel Masking). Use the right tool for each texture.'
    },
    discussionPrompt: {
      question: 'Why does an extracted subject often have an ugly white or green fringe along their edge, and how do you eradicate it permanently?',
      hint: 'Reflected light spill from the original background studio backdrop.',
      talkingPoints: [
        'The edge pixels are contaminated by light bouncing from the original studio wall.',
        'Fix: Use Layer > Matting > Defringe (1px), or paint with a soft brush using the subject\'s local hair color on a layer set to "Color" mode.'
      ]
    },
    keyInsight: {
      title: 'Combine Multiple Masks',
      text: 'A single subject often requires 3 separate masks: one Pen Tool mask for the body, one Channel mask for the hair, and one soft brush mask for transparent fabric.'
    }
  },
  {
    id: 'di-w16-s7',
    slideNum: 7,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Perspective & Vanishing Points',
    title: 'Perspective Alignment & Vanishing Point Geometry',
    topicTitle: 'Aligning Camera Focal Lengths and Spatial Horizon Lines',
    whatItDoes: 'Ensures that every composited element shares the exact same camera lens focal length, tilt angle, and horizon line to maintain optical realism.',
    whatIsGoingOn: 'If your background was photographed with a 24mm wide-angle lens from a low worm\'s-eye view, compositing a model shot with a 200mm telephoto lens at eye level creates subconscious discord. Human brains instantly spot the spatial lie even if they don\'t understand perspective math.',
    bullets: [
      'Horizon Line Matching: Draw perspective guide lines along architectural walls and roads; their intersection point reveals the true camera horizon line.',
      'Matching Eye Levels: If two people are standing on flat ground, their eyes will align along the horizon line regardless of how far into the distance they stand.',
      'Focal Length Distortion: Wide-angle lenses (16-35mm) stretch edge objects and exaggerate depth; telephoto lenses (85-200mm) compress depth and flatten facial features.',
      'Vanishing Point Grid Integration: Using the Vanishing Point filter to map planes, floors, and ceilings for seamless texture mapping.'
    ],
    layman: {
      title: 'The Standing in a Crowd Analogy:',
      text: 'Take a photo of a flat crowd at a concert: whether a person is 5 feet away or 50 feet away, if you are both standing on flat ground, everyone\'s eyes will cross the exact same horizontal line in your camera viewfinder!'
    },
    discussionPrompt: {
      question: 'Can you successfully composite an aerial drone shot of a city into the background of a portrait taken from ground level?',
      hint: 'Consider where the horizon line is located in both images.',
      talkingPoints: [
        'No; the drone shot looks down from above (high horizon), while the portrait looks straight ahead (mid horizon).',
        'The perspective mismatch cannot be fixed without warping and distorting the perspective geometry.'
      ]
    },
    keyInsight: {
      title: 'Draw the Horizon First',
      text: 'Before placing your first character, create a temporary red guide line marking the background photo\'s true horizon. Match all character eye-lines to that guide.'
    }
  },
  {
    id: 'di-w16-s8',
    slideNum: 15,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Lighting Integration',
    title: 'Lighting Integration: Key, Fill, Rim & Ambient Occlusion',
    topicTitle: 'Re-Lighting Composited Subjects to Match Environmental Light',
    whatItDoes: 'Constructs realistic 4-part illumination: directional key light, ambient fill light, backlight/rim light, and physical contact shadows.',
    whatIsGoingOn: 'Lighting is the universal glue of digital compositing. Even a perfectly extracted subject looks fake if their light direction contradicts the background. Artists construct custom lighting passes using clipped Curves adjustment layers, painting specular highlights on light-facing planes and carving ambient occlusion into deep crevices.',
    bullets: [
      'Key Light Matching: Identify the primary sun or studio lamp in the background; adjust Curves to match brightness, angle, and falloff on the subject.',
      'Fill Light & Color Cast: Sample the ambient sky or floor bounce tone and wash it over the subject\'s shadow areas using a Solid Color layer set to Color or Soft Light.',
      'Rim Light (Backlight): Paint sharp, bright edge highlights along contours where powerful backlights or explosive fireballs bleed behind the subject.',
      'The Two-Layer Shadow System: Contact Shadow (razor-sharp, 100% black, directly under shoe soles) + Cast Shadow (soft, fading penumbra stretching away in the key light direction).'
    ],
    layman: {
      title: 'The Flashlight and Campfire Analogy:',
      text: 'If you step in front of a roaring orange campfire at night, your back gets hit with brilliant orange rim light, your front faces dark cool blue shadows, and your feet cast dark contact shadows on the dirt. You must paint all three lights onto your character.'
    },
    discussionPrompt: {
      question: 'Why do rookie retouchers often make characters look like they are floating in mid-air over a street or sidewalk?',
      hint: 'Look closely at where shoes touch the concrete—what is missing?',
      talkingPoints: [
        'They forgot the razor-thin "Contact Shadow" (Ambient Occlusion) directly beneath the sole.',
        'Without a 2-pixel black contact line where surfaces touch, objects cannot visually anchor to the ground.'
      ]
    },
    keyInsight: {
      title: 'Ambient Occlusion Is Gravity',
      text: 'Ambient occlusion is the absence of light in tight crevices where surfaces meet. Painting this dark contact line instantly grounds floating subjects into the floor.'
    }
  },
  {
    id: 'di-w16-s9',
    slideNum: 15,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Color Grading & Atmosphere',
    title: 'Color Grading & Atmospheric Depth (Aerial Perspective)',
    topicTitle: 'Harmonizing Disparate Photo Sources with 3D LUTs and Haze',
    whatItDoes: 'Unifies varied color palettes using Curves, Gradient Maps, and 3D LUTs, while simulating airborne humidity, haze, and volumetric fog.',
    whatIsGoingOn: 'Even after lighting is matched, source photos from different camera sensors carry distinct color science (Sony greens vs Canon skin tones). A global color grade brings all elements into a unified cinematic palette. Simultaneously, adding atmospheric perspective (low-contrast haze on distant elements) communicates massive physical scale.',
    bullets: [
      'Global Color Grading: Applying master 3D LUTs (Lookup Tables) or dual Gradient Maps (e.g., Teal in shadows, Orange in highlights) over the entire composite.',
      'Aerial Perspective (Atmospheric Haze): Distant mountains and buildings lose contrast, drop black points, and shift toward the ambient sky color due to light scattering.',
      'Volumetric Light Rays: Creating god rays by painting white strokes, applying Radial Blur (Zoom mode), and blending with Screen or Linear Dodge.',
      'Black Point Harmonization: Use a Threshold adjustment layer to identify the deepest black in the background photo, and force your subject\'s black point to match.'
    ],
    layman: {
      title: 'The Mountain Haze Analogy:',
      text: 'Look at a distant mountain range: the trees right in front of you are deep dark green, but the mountain 10 miles away looks pale, hazy blue. That is miles of air and dust scattering light. You must paint that same haze over distant layers.'
    },
    discussionPrompt: {
      question: 'How does a master retoucher make a composite feel like a single still frame from a Hollywood movie rather than a collection of pasted images?',
      hint: 'Think about unified color harmony and unifying optical defects.',
      talkingPoints: [
        'A cohesive cinematic color grade (split-toning) washes over all layers simultaneously.',
        'Adding subtle overall grain, lens vignette, and chromatic aberration binds all pixels into a single optical camera sensor.'
      ]
    },
    keyInsight: {
      title: 'Match the Black Points First',
      text: 'If your subject has pure #000000 shadows while the background\'s darkest shadow is lifted #151820 gray, the composite falls apart. Lift your subject\'s black point using Curves.'
    }
  },
  {
    id: 'di-w16-s10',
    slideNum: 15,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Texture & Photorealism',
    title: 'Texture Mapping: Surface Imperfections & Film Grain',
    topicTitle: 'Injecting Micro-Imperfections to Defeat "Too Perfect" Digital CG',
    whatItDoes: 'Overlays dirt, scratches, lens dust, specular grain, and chromatic aberration to break synthetic digital smoothness and achieve tactile photorealism.',
    whatIsGoingOn: 'Human visual systems are expert at detecting digital fakes. 3D renders and clean digital cutouts look unnatural because real physical reality is covered in dust, oil, scratches, and lens distortions. By overlaying subtle micro-textures and genuine 35mm film grain, the composite acquires tangible physical weight.',
    bullets: [
      'Surface Imperfections: Blend dust, concrete texture, skin pores, and water droplets onto clean surfaces using Overlay or Soft Light blend modes.',
      'Film Grain Unification: Create a new layer, fill with 50% gray (#808080), apply Filter > Noise > Add Noise (uniform, monochromatic, 2-4%), and set to Overlay at 35% opacity.',
      'Lens Chromatic Aberration: Shift the Red and Blue channels slightly (1-2 pixels) along the extreme outer edges to simulate real optical glass refraction.',
      'Vignette & Lens Falloff: Subtly darken canvas corners to draw the viewer\'s eye toward the central narrative focal point.'
    ],
    layman: {
      title: 'The Brand-New Shoe Analogy:',
      text: 'A soldier returning from battle wearing squeaky clean, spotless white sneakers looks like a cosplay actor. Rub some dirt, scuffs, and mud onto the boots, and suddenly the soldier looks authentic and battle-hardened!'
    },
    discussionPrompt: {
      question: 'Why does adding a uniform layer of fine film grain over an entire composite help blend different photographic elements together?',
      hint: 'Think about unifying disparate noise structures from different cameras.',
      talkingPoints: [
        'Photos taken with different cameras, lenses, and ISO settings have clashing noise patterns.',
        'A single unifying film grain pass covers the entire image with a consistent visual texture, convincing the brain they were shot on the same sensor.'
      ]
    },
    keyInsight: {
      title: 'Imperfection Is Realism',
      text: 'Perfection looks fake. Photorealism lives in the micro-scratches, dust specks, atmospheric haze, and subtle optical lens flaws.'
    }
  },
  {
    id: 'di-w16-s11',
    slideNum: 15,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Advanced Retouching',
    title: 'Advanced Retouching: Frequency Separation & Dodge/Burn',
    topicTitle: 'High-End Editorial Skin and Surface Sculpting Mathematics',
    whatItDoes: 'Splits image data into independent spatial frequencies: Low Frequency (color, tone, shading) and High Frequency (pores, wrinkles, fabric weave) for pristine retouching.',
    whatIsGoingOn: 'Traditional smoothing tools (like the Blur or Smudge tool) destroy skin texture, turning human faces into rubber plastic mannequins. Frequency Separation uses mathematical spatial filters (Gaussian Blur + Apply Image subtraction) to isolate high-pass texture onto a separate layer, allowing retouchers to paint smooth color gradients underneath without losing a single skin pore.',
    bullets: [
      'Low-Frequency Layer: Duplicate image, apply Gaussian Blur (typically 4-8px radius); holds pure color, blotchiness, shadow falloff, and tone.',
      'High-Frequency Layer: Duplicate original, apply Image > Apply Image (Subtract Low Frequency, Offset 128, Scale 2), set blend mode to Linear Light; holds pure texture.',
      'Pore-Safe Healing: Retouch blemishes and flyaway hairs strictly on the High-Frequency layer using the Clone Stamp tool set to "Current Layer".',
      'Non-Destructive Dodge & Burn: Create a layer filled with 50% Gray set to Soft Light; use low-opacity (2-4%) white brushes to highlight cheekbones and black brushes to deepen contours.'
    ],
    layman: {
      title: 'The Stencil and Ink Analogy:',
      text: 'Frequency Separation separates your image into a wire mesh screen (High Frequency texture) and a puddle of watercolor paint (Low Frequency tone). You can smooth out the watercolor paint all you want while keeping the wire mesh screen completely crisp and sharp!'
    },
    discussionPrompt: {
      question: 'Why do luxury beauty brands (L\'Oréal, Sephora, Vogue) forbid retouchers from using traditional blur or automated skin-smoothing filters?',
      hint: 'What happens to consumer trust when skin texture looks like melted plastic?',
      talkingPoints: [
        'Consumers demand authentic, tactile human texture; blurred skin looks cheap and deceptive.',
        'Frequency Separation preserves natural organic skin pores while evening out redness and discoloration.'
      ]
    },
    keyInsight: {
      title: 'Dodge & Burn for Dimension',
      text: 'Never use the default Dodge/Burn tools directly on pixel layers. Paint with soft black and white brushes at 2% flow on a 50% gray Soft Light layer for Hollywood-level contour sculpting.'
    }
  },
  {
    id: 'di-w16-s12',
    slideNum: 15,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Production Organization',
    title: 'Production File Organization & Naming Conventions',
    topicTitle: 'Industrial Architecture for 100+ Layer Master Documents',
    whatItDoes: 'Establishes color-coded layer group hierarchies, standardized naming conventions, and layer comp states used in AAA advertising agencies and VFX houses.',
    whatIsGoingOn: 'A Photoshop document with 120 layers named "Layer 47 copy 3" is an unworkable nightmare. In professional studios, your PSD file will be opened by art directors, 3D artists, and motion designers. Files must be organized with military discipline using standard top-to-bottom folder hierarchies and standardized layer prefixes.',
    bullets: [
      'The Standard 6-Group Stack: 01_FINISHING (Grain/Vignette/Crop) -> 02_COLOR_GRADE (LUTs/Curves) -> 03_ATMOSPHERE (Fog/Embers/Rays) -> 04_FOREGROUND -> 05_CHARACTERS -> 06_BACKGROUND.',
      'Color-Coded Groups: Red for Global Grading, Orange for Atmospheric FX, Green for Primary Subject, Blue for Background, Gray for Guide Rulers and Perspective Grids.',
      'Layer Prefixes: `ADJ_` for Adjustment Layers, `MSK_` for Isolated Masks, `SO_` for Smart Objects, `FX_` for Procedural Particle Passes.',
      'Purging Unused Assets: Run File > Scripts > Delete All Empty Layers and purge history states to reduce bloated PSD file sizes from 4GB down to 800MB.'
    ],
    layman: {
      title: 'The Professional Kitchen Tool Rack Analogy:',
      text: 'In a Michelin-star kitchen, the head chef can reach out with their eyes closed and grab the exact paring knife because every tool has a labeled spot. Your Photoshop layers panel must be that organized.'
    },
    discussionPrompt: {
      question: 'Imagine you suddenly get sick and another retoucher has to take over your project 2 hours before a client presentation. Could they navigate your layer stack in 60 seconds?',
      hint: 'If the answer is no, your layer naming and grouping habits need overhaul.',
      talkingPoints: [
        'Agency workflows demand interchangeable team agility.',
        'Clear layer hierarchies eliminate expensive production delays during emergencies.'
      ]
    },
    keyInsight: {
      title: 'The Clean File Habit',
      text: 'Name every single layer the exact second you create it. Color-code your primary folder groups and delete discarded test layers immediately.'
    }
  },
  {
    id: 'di-w16-s13',
    slideNum: 15,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Quality Assurance',
    title: 'Technical Asset QA: Histograms & Halos',
    topicTitle: 'Stress-Testing Composite Fidelity on Calibrated Hardware',
    whatItDoes: 'Conducts rigorous technical stress tests: checking dynamic range histograms for clipped whites, scanning for color cast pollution, and zooming to 200% for edge fringing.',
    whatIsGoingOn: 'Before presenting or exporting master files, a digital imager runs diagnostic checks. Placing a high-contrast solar curve (Curve layer with extreme inverted S-curve) over the canvas immediately exposes hidden edge halos, bad cutout seams, and compression artifacts that are invisible under normal display conditions.',
    bullets: [
      'The Solarization Stress Test: Create a Curves layer and draw a zig-zag M-curve; any hidden extraction flaws, sloppy feathering, or dirt specks light up like neon.',
      'Histogram Dynamic Range Inspection: Verify that the histogram breathes across the full tonal range without hard clipping against the 0 (pure black) or 255 (pure white) walls.',
      'Color Cast Detection: Create a 50% gray test patch, sample with the Eyedropper in Info panel, and ensure shadows do not carry accidental green or magenta tint pollution.',
      'Edge Magnification Pass: Scroll through all extraction boundaries at 200% zoom to verify anti-aliasing smoothness and eliminate residual background fringing.'
    ],
    layman: {
      title: 'The Blacklight Inspection Analogy:',
      text: 'A hotel room might look clean in daylight, but turn on a blacklight (UV light), and every hidden stain glows brightly. A solarization curve is the blacklight for your Photoshop composite—it reveals all hidden mistakes instantly.'
    },
    discussionPrompt: {
      question: 'Why do beginners often miss edge halos on their home laptop screens, only to have them look glaringly obvious on an office projection screen?',
      hint: 'Monitor brightness, contrast ratios, and color calibration differences.',
      talkingPoints: [
        'Cheap uncalibrated laptop screens compress shadow details and hide low-contrast fringing.',
        'Using technical diagnostic curves ensures flaws are caught regardless of display quality.'
      ]
    },
    keyInsight: {
      title: 'The Diagnostic Curve Habit',
      text: 'Keep a disabled "Diagnostic Curves" layer at the very top of your layer stack. Toggle it on before final export to expose hidden edge errors.'
    }
  },
  {
    id: 'di-w16-s14',
    slideNum: 15,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Backup & Disaster Recovery',
    title: 'Data Backup & Archival: The 3-2-1 Rule',
    topicTitle: 'Guaranteeing Zero Data Loss on Mission-Critical Production',
    whatItDoes: 'Protects creative assets against drive corruption, accidental overwrites, and hardware loss using the industry-standard 3-2-1 backup protocol and project packaging.',
    whatIsGoingOn: 'Hard drives fail; operating systems crash; files get corrupted. Losing a 100-hour capstone project 12 hours before deadline is a student\'s worst nightmare. The 3-2-1 backup rule is the global IT and creative agency standard that guarantees 100% data survivability under any disaster scenario.',
    bullets: [
      'The 3-2-1 Backup Protocol: Maintain at least 3 copies of your project data, on 2 different physical media types (e.g., NVMe SSD + External HDD), with 1 copy stored Offsite (Cloud: Google Drive/Dropbox/AWS).',
      'Incremental Version Stamping: Save new versions after major milestones: `Project_HeroComp_v01.psd`, `Project_HeroComp_v02_Masks.psd`, `Project_HeroComp_v03_Lighting.psd`.',
      'The "Package Project" Archive: Consolidate all external linked assets, font files, stock licenses, and reference moodboards into a self-contained archive folder.',
      'Cloud Auto-Sync Caution: Never save active multi-gigabyte PSD files directly into a syncing Dropbox/OneDrive folder while Photoshop is actively writing—it can corrupt temporary scratch disk files.'
    ],
    layman: {
      title: 'The Spare Car Key Analogy:',
      text: 'You keep your main car key in your pocket. You keep a spare key in your desk drawer at home. You give a third spare key to your parents who live across town. If you lose your keys at the mall, your car isn\'t stranded forever!'
    },
    discussionPrompt: {
      question: 'What happens to your grade and career if your laptop SSD dies the night before the final presentation and you have no backup?',
      hint: 'In the professional creative industry, "my computer crashed" is never accepted as an excuse.',
      talkingPoints: [
        'Clients and employers expect creative professionals to build redundancy into their workflows.',
        'Setting up automated cloud backups costs zero dollars and takes 5 minutes.'
      ]
    },
    keyInsight: {
      title: 'If It Doesn\'t Exist in 3 Places, It Doesn\'t Exist',
      text: 'Before you go to sleep tonight, ensure your active PSD project file is saved to your main drive, an external drive, and a cloud storage service.'
    }
  },
  {
    id: 'di-w16-s15',
    slideNum: 15,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Week 16 Milestone Review',
    title: 'Week 16 Milestone Review: The Alpha-to-Beta Gate',
    topicTitle: 'The Pre-Critique Production Assessment Rubric',
    whatItDoes: 'A final milestone gate verifying that all composition, lighting, masking, and grading layers meet professional standards before entering Week 17 presentations.',
    whatIsGoingOn: 'Before advancing to the final critique stage, students review their project against the industry production rubric. All technical elements (perspective, masking, lighting, organization) must pass the Alpha-to-Beta gate.',
    bullets: [
      'Checkpoint 1: Concept & Storytelling—Is the narrative intent immediately legible within 3 seconds of viewing?',
      'Checkpoint 2: Spatial Perspective—Do all elements obey a unified horizon line and matching lens focal compression?',
      'Checkpoint 3: Lighting & Occlusion—Does every composited element possess a matching key light, ambient fill, and physical contact shadow?',
      'Checkpoint 4: Non-Destructive Layer Hygiene—Are all 50+ layers grouped, color-coded, labeled, and free of destructive raster operations?'
    ],
    layman: {
      title: 'The Dress Rehearsal Analogy:',
      text: 'Actors don\'t wait until opening night on Broadway to put on their costumes and test the stage lights. The Alpha-to-Beta gate is your full dress rehearsal before the audience arrives next week.'
    },
    discussionPrompt: {
      question: 'What is the single weakest element in your current composite that you know needs one final polish pass before presenting next week?',
      hint: 'Be brutally honest with your work—is it edge halos, flat lighting, or muddy color grading?',
      talkingPoints: [
        'Self-critique is the defining hallmark of senior creative artists.',
        'Identifying your own weak points allows you to fix them before a client or instructor points them out.'
      ]
    },
    keyInsight: {
      title: 'Polish Is the Difference',
      text: 'Good artists stop when the composite is finished. Great artists spend an extra 3 hours refining the micro-details that elevate good artwork into mastery.'
    }
  }
];

// ============================================================================
// WEEK 17: PROJECT PRESENTATION AND CRITIQUE (15 SLIDES)
// ============================================================================
export const digitalImagingPresentationCritiqueSlidesData: SlideData[] = [
  {
    id: 'di-w17-s1',
    slideNum: 1,
    totalSlides: 15,
    type: 'cover',
    moduleTag: 'DIGITAL IMAGING • WEEK 17',
    title: 'Project Presentation and Critique',
    subtitle: 'Presenting Creative Work, Constructive Peer Critique, Layer Breakdown Case Studies & Portfolio Curation',
    metadata: [
      { label: 'Subject', val: 'Digital Imaging' },
      { label: 'Level', val: 'Week 17 Culmination' },
      { label: 'Lab Engine', val: 'High-End Retouching Studio' },
      { label: 'Platforms', val: 'Behance, ArtStation, Client Pitches' }
    ]
  },
  {
    id: 'di-w17-s2',
    slideNum: 2,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Pitch Architecture',
    title: 'The 5-Minute Creative Presentation Framework',
    topicTitle: 'Pitching Your Digital Artwork to Clients and Creative Directors',
    whatItDoes: 'Provides a structured 5-minute pitching template that frames digital imaging artwork around client problem solving, narrative intent, and execution mastery.',
    whatIsGoingOn: 'In the commercial industry, great artwork does not speak for itself. An artist who bumbles, apologizes, or reads layer names puts clients to sleep. Creative directors evaluate how articulately an artist explains the narrative problem, why specific design choices were made, and how technical hurdles were overcome.',
    bullets: [
      'Minute 1: The Narrative Hook & Client Brief—State the core story, target demographic, and primary emotional feeling the artwork inspires.',
      'Minute 2: Moodboard & Visual References—Show 3 key reference images that established the lighting, palette, and perspective direction.',
      'Minute 3: Technical Execution & Key Challenges—Walk through the master perspective alignment, custom lighting passes, and hair extractions.',
      'Minute 4: Before & After Transformation—Reveal the raw photographic source plates next to the final master grade composite.',
      'Minute 5: Commercial Applications & Synthesis—Display the artwork on real-world mockups (bus stop billboard, magazine cover, streaming UI).'
    ],
    layman: {
      title: 'The Film Director Pitch Analogy:',
      text: 'A movie director pitching a new film to a studio doesn\'t read the camera instruction manual. They describe the explosive opening scene, introduce the charismatic hero, and show the dramatic movie trailer. Sell the emotional vision first!'
    },
    discussionPrompt: {
      question: 'Why should you never begin a design presentation by saying: "Sorry guys, I didn\'t have enough time to finish this part..."?',
      hint: 'What does an opening apology do to client confidence in your professional ability?',
      talkingPoints: [
        'An apology immediately biases the audience to search for flaws and weaknesses.',
        'Present the work you have with confidence, enthusiasm, and professional poise.'
      ]
    },
    keyInsight: {
      title: 'Present the Story, Not the Tools',
      text: 'Never tell a client: "I used the Pen Tool at 4px feather." Tell them: "I sculpted crisp, clean silhouettes to emphasize the athletic power of the subject."'
    }
  },
  {
    id: 'di-w17-s3',
    slideNum: 3,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Visual Storytelling',
    title: 'Visual Storytelling: Communicating Intent & Emotion',
    topicTitle: 'Transforming Technical Pixel Stacking into Emotional Resonance',
    whatItDoes: 'Explores narrative composition, visual hierarchy, eye-tracking scanpaths, and emotional mood to ensure artwork resonates deeply with human viewers.',
    whatIsGoingOn: 'Digital compositing is not just putting 10 pictures together; it is visual poetry. A composition must guide the viewer\'s eyes across an intentional journey (Visual Scanpath) using leading lines, contrast hierarchy, and atmospheric focus. Without a clear narrative story, high-end technical skills feel soulless and forgettable.',
    bullets: [
      'The Narrative Focal Point: The single primary subject that captures the viewer\'s eye within the first 500 milliseconds of viewing.',
      'Leading Lines & Compositional Flow: Arranging architectural lines, light rays, and body postures to pull the viewer toward secondary narrative clues.',
      'Emotional Color Psychology: Cool blue and desaturated teal tones suggest isolation and technological dread; warm amber and golden hour rim lights inspire hope, triumph, and nostalgia.',
      'The Unresolved Story Element: Leaving an intriguing unanswered question in the scene (e.g., an open door, an approaching storm, an empty chair) that makes the viewer linger.'
    ],
    layman: {
      title: 'The Magician\'s Wand Analogy:',
      text: 'A magician waves their shiny silver wand with their right hand so you look right, while their left hand prepares the secret trick. Composition is your magic wand: you control exactly where the audience looks and what they discover second and third.'
    },
    discussionPrompt: {
      question: 'Look at a movie poster for a sci-fi blockbuster: what visual cues tell you instantly whether it is an action thriller or an emotional drama before reading the title?',
      hint: 'Look at the color temperature, character eye contact, and atmospheric weather.',
      talkingPoints: [
        'Aggressive high-contrast lighting and cold blues signal danger and high-octane action.',
        'Soft golden haze, shallow depth of field, and reflective characters signal intimate human drama.'
      ]
    },
    keyInsight: {
      title: 'Every Pixel Must Serve the Story',
      text: 'If an element in your composite does not support the core narrative or emotional tone of the scene, delete it—regardless of how much technical effort it took to create.'
    }
  },
  {
    id: 'di-w17-s4',
    slideNum: 15,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Case Study Breakdown',
    title: 'The Case Study Breakdown: Layer Slides & Asset Maps',
    topicTitle: 'Documenting the Hidden Architecture Behind Your Final Image',
    whatItDoes: 'Teaches students how to construct viral portfolio breakdowns: asset grids, step-by-step layer build slides, and animated before-and-after comparisons.',
    whatIsGoingOn: 'On platforms like Behance and ArtStation, a single finished JPEG receives modest applause. A comprehensive behind-the-scenes case study showing the raw stock photos, extraction masks, lighting passes, and color grading steps gets featured, shared, and noticed by top agency recruiters.',
    bullets: [
      'The Asset Grid: Displaying all 8-15 original raw source photographs neatly framed in a grid to demonstrate the magnitude of the transformation.',
      'The 4-Step Build Sequence: Frame 1: Base Horizon & Plate -> Frame 2: Masked Subject Integration -> Frame 3: Lighting & Ambient Occlusion -> Frame 4: Master Color Grade.',
      'Detail Crop Callouts: 100% zoom crops highlighting micro-details (hand-painted hair strands, skin texture, water droplets) that get lost when viewing the whole image.',
      'Process Reflection: A brief paragraph explaining technical challenges solved during production (e.g., matching a 50mm portrait to a 24mm landscape).'
    ],
    layman: {
      title: 'The Cooking Show Time-Lapse Analogy:',
      text: 'Watching someone eat a delicious cake is nice. But watching the chef crack the eggs, fold the dark chocolate batter, bake it to golden perfection, and pipe the intricate frosting is mesmerizing! Show your audience the baking process.'
    },
    discussionPrompt: {
      question: 'Why do top creative agencies like Industrial Light & Magic and Droga5 dedicate so much time to publishing breakdown case studies on YouTube and Behance?',
      hint: 'Think about client trust, recruitment, and demonstrating mastery.',
      talkingPoints: [
        'Case studies prove to high-paying clients that their success was engineered through deliberate mastery rather than lucky accidents.',
        'It attracts top-tier talent who want to work with industry masters.'
      ]
    },
    keyInsight: {
      title: 'The Portfolio Multiplier',
      text: 'Never post just the final image. A well-crafted case study showing the raw ingredients and step-by-step build is 10 times more likely to get you hired.'
    }
  },
  {
    id: 'di-w17-s5',
    slideNum: 15,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Motion & Showreels',
    title: 'Process Showreels: 60-Second Social Media Breakdowns',
    topicTitle: 'Packaging Still Artwork into High-Engagement Video Content',
    whatItDoes: 'Covers the creation of 60-second vertical reels (TikTok, Instagram Reels, YouTube Shorts) showing layer-by-layer reveal time-lapses.',
    whatIsGoingOn: 'Still images suffer low engagement algorithms on modern social media. By converting a static Photoshop composite into an energetic 30-to-60 second process video showing layer visibility toggling on from background to foreground synced to a rhythmic audio beat, artists achieve hundreds of thousands of organic views.',
    bullets: [
      'The Layer Reveal Sequence: Record your screen or animate Photoshop Layer Comps turning on sequentially: Background -> Middleground -> Subject -> Shadows -> Color Grade.',
      'The Split-Screen Wiper: A video transition where a vertical line sweeps left-to-right across the canvas, wiping between the raw unretouched plate and final master grade.',
      '2.5D Parallax Camera Push: Cut your composite into 4 depth planes (Foreground, Subject, Atmosphere, Background), import into After Effects, and animate a 3D camera push-in.',
      'Audio Synchronization: Sync layer snaps to rhythmic musical transients (percussion beats) to make the visual transformation feel dynamic and satisfying.'
    ],
    layman: {
      title: 'The Flipbook Analogy:',
      text: 'A single page in a flipbook is a still drawing. But when you flip the pages rapidly with your thumb, it springs to life with motion! Turning your layer stack into a fast video clip makes your artwork impossible to scroll past.'
    },
    discussionPrompt: {
      question: 'Why has the 30-second before-and-after slider video become the most viral format for digital artists on Instagram and TikTok?',
      hint: 'Think about human curiosity and the satisfaction of seeing chaos turn into perfection.',
      talkingPoints: [
        'Humans love dramatic transformations; the contrast between a messy raw photo and a polished movie poster triggers dopamine.',
        'It instantly communicates high skill in less than 5 seconds of viewing.'
      ]
    },
    keyInsight: {
      title: 'Animate Your Layers',
      text: 'Spend 30 minutes exporting your Photoshop layer groups as a sequential video pass. That 30-second reel will reach 100 times more clients than a static JPEG.'
    }
  },
  {
    id: 'di-w17-s6',
    slideNum: 15,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Critique Principles',
    title: 'Constructive Critique Principles: Radical Candor in Design',
    topicTitle: 'The Cultural Architecture of Growth-Oriented Studio Critiques',
    whatItDoes: 'Teaches Liz Lerman\'s Critical Response Process and Kim Scott\'s Radical Candor framework to build an emotionally safe yet rigorously honest feedback environment.',
    whatIsGoingOn: 'Unproductive critiques fall into two toxic traps: "Ruinous Empathy" (everyone smiles and says "good job" while secretly noticing massive flaws, preventing the artist from growing) or "Obnoxious Aggression" (brutal personal attacks that crush creative confidence). Constructive critique separates the human artist from the technical artifact on screen.',
    bullets: [
      'Radical Candor (Care Personally, Challenge Directly): Providing honest, direct technical critique because you genuinely care about the artist\'s professional success.',
      'Liz Lerman Step 1 (Statements of Meaning): Viewers describe what was evocative, powerful, or memorable about the work before offering suggestions.',
      'Liz Lerman Step 2 (Artist as Questioner): The creator frames the discussion by asking specific questions: "Does the rim light on the character\'s shoulder feel too intense?"',
      'Neutral Observations vs Value Judgments: Say "The horizon line appears tilted by 3 degrees relative to the background road," instead of "Your perspective looks wrong."'
    ],
    layman: {
      title: 'The Sports Coach Analogy:',
      text: 'A great basketball coach doesn\'t say "You\'re a terrible player!" They say: "Your elbow is flaring out 2 inches on your free throw; tuck your elbow in and your shot will go straight." Critique is mechanical coaching, not personal judgment.'
    },
    discussionPrompt: {
      question: 'Why is saying "I like it, it looks nice!" one of the most unhelpful pieces of feedback you can give a peer during an academic critique?',
      hint: 'Does it give the artist any actionable insight into what worked or how to improve?',
      talkingPoints: [
        'Vague praise gives zero actionable data; the artist doesn\'t know which technical choices succeeded.',
        'Meaningful critique identifies specific mechanics: "Your contact shadows under the boots anchor the character realistically."'
      ]
    },
    keyInsight: {
      title: 'Critique the Canvas, Not the Creator',
      text: 'Never use the word "You". Don\'t say "You made the lighting too dark." Say "The shadow levels on the jacket feel clipped compared to the daylight background."'
    }
  },
  {
    id: 'di-w17-s7',
    slideNum: 15,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Giving Feedback',
    title: 'Giving Feedback: The Formula for Actionable Critique',
    topicTitle: 'Observation + Impact + Actionable Recommendation',
    whatItDoes: 'Provides students with a 3-part sentence structure that transforms subjective personal taste into precise, actionable engineering recommendations.',
    whatIsGoingOn: 'Saying "I don\'t like the color" is useless personal taste. Professional designers use the 3-part formula: (1) Observation (What specific physical pixels did you notice?), (2) Impact (How does that affect human visual perception or the narrative brief?), and (3) Recommendation (What specific Photoshop tool or slider will fix it?).',
    bullets: [
      'Part 1: The Specific Observation—"I notice that the left edge of the character\'s coat has a 2-pixel green halo."',
      'Part 2: The Perceptual Impact—"This reveals the green studio backdrop and visually detaches the subject from the red desert background."',
      'Part 3: The Actionable Fix—"Contracting the layer mask by 1px and painting with the desert tone on a clipped Color layer will neutralize the fringe."',
      'Separating Taste from Execution: Acknowledging that while an art style might not match your personal aesthetic, its technical execution can still be flawless.'
    ],
    layman: {
      title: 'The Car Mechanic Analogy:',
      text: 'A mechanic doesn\'t tell you "Your car feels sad." They say: "Your front right brake pad is worn down to 1 millimeter (Observation), which makes your car pull left when stopping (Impact). Replacing the brake pad will make it stop straight (Recommendation)."'
    },
    discussionPrompt: {
      question: 'Practice the formula right now: how would you critique a composite where the character\'s head is lit from the left, but the background sun is on the right?',
      hint: 'State the Observation, explain the Impact on realism, and suggest the Recommendation.',
      talkingPoints: [
        'Observation: The key light highlight falls on the character\'s left cheek while the sun sits on the right horizon.',
        'Impact: The brain detects contradictory light sources, breaking the illusion of a single physical world.',
        'Recommendation: Flip the character horizontally or invert the Curves adjustment mask.'
      ]
    },
    keyInsight: {
      title: 'Always Offer the Fix',
      text: 'If you point out a problem on a peer\'s screen, always propose at least one concrete Photoshop tool or technique they can use to solve it.'
    }
  },
  {
    id: 'di-w17-s8',
    slideNum: 15,
    totalSlides: 15,
    type: 'digital_imaging_retouching_studio',
    moduleTag: 'Interactive Studio Lab',
    title: 'Interactive Studio: Digital Imaging Retouching Studio',
    topicTitle: 'High-End 12-Layer Retouching & Composite Inspector',
    whatItDoes: 'Interactive split-screen inspector featuring a movable before/after slider comparing unretouched Camera RAW plates against a 12-layer master composite.',
    whatIsGoingOn: 'Drag the split-screen slider to inspect the composite at full fidelity. Toggle individual layer passes: Low Frequency tone, High Frequency texture, Dodge & Burn sculpting, 3D LUT color grading, and Vignette shading.'
  },
  {
    id: 'di-w17-s9',
    slideNum: 15,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Receiving Feedback',
    title: 'Receiving Feedback: Overcoming Ego & The Revision Log',
    topicTitle: 'The Psychological Discipline of Embracing Creative Critique',
    whatItDoes: 'Teaches mental frameworks to detach self-worth from work, process conflicting critique notes, and synthesize feedback into a prioritized Revision Log.',
    whatIsGoingOn: 'Receiving feedback can feel like an attack on your identity. When an instructor or client points out flaws, the amateur reacts defensively, offering excuses: "Well, I wanted it to look that way!" Professional artists listen quietly, take notes, ask clarifying questions, and treat feedback as valuable free consultancy that will make their work world-class.',
    bullets: [
      'The "You Are Not Your Layers" Mindset: You are a creative problem solver; the PSD file is an experiment. Critiquing the file is not critiquing your human value.',
      'Active Listening Without Defense: Put your pen down, do not interrupt, and never offer defensive excuses. Say "Thank you for that observation; can you clarify what you mean by...?"',
      'The Feedback Synthesis Matrix: Categorizing feedback into 3 buckets: Must-Fix (Technical flaws like halos, perspective errors), Consider (Valid subjective ideas), and Discard (Conflicting or off-brief notes).',
      'The Actionable Revision Log: Converting verbal critique into a numbered to-do checklist in Notion or Trello before opening Photoshop again.'
    ],
    layman: {
      title: 'The Diamond Polisher Analogy:',
      text: 'When a jeweler points a magnifying glass at a rough diamond and points out rough gray spots, they aren\'t insulting the diamond! They are showing you exactly where to grind and polish so the gem sparkles with blinding brilliance.'
    },
    discussionPrompt: {
      question: 'When a client gives you two pieces of feedback that directly contradict each other, what is the professional way to respond without getting angry?',
      hint: 'Ask clarifying questions about the underlying business goal rather than arguing about opinions.',
      talkingPoints: [
        'Acknowledge both perspectives and explain the optical tradeoff between the two paths.',
        'Guide the client back to the primary audience goal: "Option A increases legibility on mobile, while Option B looks more dramatic on desktop."'
      ]
    },
    keyInsight: {
      title: 'Ego Is the Enemy of Mastery',
      text: 'Amateurs defend their work. Professionals interrogate their work. Welcome every critique as free advice to make your portfolio unbeatable.'
    }
  },
  {
    id: 'di-w17-s10',
    slideNum: 15,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Iterative Refinement',
    title: 'Iterative Refinement: The Post-Critique Polish Pass',
    topicTitle: 'Translating Critique Notes into Final Master Execution',
    whatItDoes: 'Structures the final 24-hour post-critique revision workflow to address all feedback items systematically without breaking existing layer architecture.',
    whatIsGoingOn: 'The real magic happens after the critique. Armed with their Revision Log, the artist returns to Photoshop with surgical focus. Working from top-level feedback down to micro-details, the artist resolves edge artifacts, balances shadow densities, and executes the final color grade polish pass.',
    bullets: [
      'Sprint 1: Structural Corrections—Fixing any lingering perspective misalignments or scale issues (always done first!).',
      'Sprint 2: Lighting & Masking Polish—Refining contact shadows, cleaning edge fringes, and balancing key light intensities.',
      'Sprint 3: Color Harmony & Tonal Balance—Adjusting LUT opacity, matching black points, and removing color cast pollution.',
      'Sprint 4: The Fresh Eye Test—Step away from the screen for 2 hours, return in a dark room, and view the canvas flipped horizontally (Image > Image Rotation > Flip Canvas Horizontal).'
    ],
    layman: {
      title: 'The Mirror Test Analogy:',
      text: 'When you stare at a painting for 8 hours, your brain gets tired and ignores mistakes. Flipping the canvas horizontally in Photoshop shocks your brain into seeing the image with brand-new eyes—any balance or perspective flaw jumps out instantly!'
    },
    discussionPrompt: {
      question: 'Why does flipping your canvas horizontally reveal anatomical and perspective errors that you stared at for 10 hours without noticing?',
      hint: 'Brain habituation and visual fatigue.',
      talkingPoints: [
        'The brain memorizes familiar visual patterns and stops actively processing them.',
        'Flipping the image forces the visual cortex to analyze the geometry as an unfamiliar new composition.'
      ]
    },
    keyInsight: {
      title: 'The Horizontal Flip Test',
      text: 'Before you export your final master file, flip the canvas horizontally. If the composition still looks balanced and natural in the mirror, your artwork is ready for the world.'
    }
  },
  {
    id: 'di-w17-s11',
    slideNum: 15,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Portfolio Curation',
    title: 'Professional Portfolio Curation: Behance & ArtStation',
    topicTitle: 'Showcasing Your Best Work to Global Recruiters and Studios',
    whatItDoes: 'Teaches portfolio architecture, thumbnail psychology, metadata tagging, and project sequencing to maximize job interviews and freelance inquiries.',
    whatIsGoingOn: 'Recruiters and art directors review hundreds of portfolios daily; they spend an average of 15 seconds per portfolio. Showing 20 mediocre images hurts you far more than showing 5 master-grade masterpieces. A portfolio is judged by its weakest piece. Curating with ruthless discipline ensures you are perceived as a top-tier specialist.',
    bullets: [
      'The "Rule of 5" Masterpieces: Showcase only your top 4-6 strongest projects. If a project is even slightly below your current best standard, delete it.',
      'The High-Impact Thumbnail: Behance and ArtStation thumbnails must have clear focal silhouettes, high contrast, and zero tiny unreadable text.',
      'Role & Tool Transparency: Clearly state your exact responsibilities: "Compositing, Retouching, Color Grading. Created in Adobe Photoshop."',
      'SEO & Discovery Tagging: Tagging specific industry keywords (Matte Painting, Key Art, Frequency Separation, Commercial Retouching, Advertising Composite).'
    ],
    layman: {
      title: 'The Olympic Relay Team Analogy:',
      text: 'If you are assembling an Olympic 4x100m relay team, you don\'t invite 2 fast runners and 2 slow runners. You only pick the 4 absolute fastest sprinters in the country. Your portfolio must only contain your gold-medal work.'
    },
    discussionPrompt: {
      question: 'Why is having 4 mind-blowing projects in your portfolio infinitely better than having 15 projects that range from average to great?',
      hint: 'How do art directors calculate your hiring risk?',
      talkingPoints: [
        'Art directors assume your next assignment for their agency will look like the worst piece in your portfolio.',
        'A tightly curated portfolio proves consistency, maturity, and quality control.'
      ]
    },
    keyInsight: {
      title: 'You Are Judged by Your Weakest Piece',
      text: 'Audit your portfolio right now. Delete your oldest, weakest projects and showcase only the work that represents your current peak capability.'
    }
  },
  {
    id: 'di-w17-s12',
    slideNum: 15,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Mockup Presentation',
    title: 'High-Resolution Mockups: Real-World Contextualization',
    topicTitle: 'Presenting Artwork in Billboards, Packaging & Gallery Walls',
    whatItDoes: 'Elevates flat 2D artwork by embedding it into photorealistic 3D mockups (bus shelter billboards, retail packaging, glossy magazines, vinyl sleeves).',
    whatIsGoingOn: 'Clients lack the imagination to visualize how a flat JPEG will look in real life. When you present an album cover floating on an unmade wooden table next to a vinyl record with realistic paper glare and reflections, the client immediately perceives the design as a tangible, high-value commercial product.',
    bullets: [
      'Contextual Value Multiplier: Embedding artwork into a mockup instantly increases perceived commercial value by 300% in client pitches.',
      'Smart Object Mockup Templates: Double-clicking the "Your Artwork Here" layer replaces the flat design while preserving all 3D warps, lighting reflections, and paper creases.',
      'Matching Environmental Lighting: If your billboard mockup is in a rainy night city, ensure your artwork reflects ambient neon light and rain droplets.',
      'Custom Mockup Photography: Photographing real physical objects (cardboard boxes, glass bottles) and building proprietary Smart Object mockups for unique portfolio presentation.'
    ],
    layman: {
      title: 'The Real Estate Staging Analogy:',
      text: 'An empty house with bare concrete floors looks small and cold. Put in a plush sofa, a dining table with flowers, and warm lamps (staging), and buyers suddenly imagine their dream life there. Mockups stage your artwork in the real world.'
    },
    discussionPrompt: {
      question: 'Why do freelance retouchers and designers charge significantly higher rates when presenting client proofs inside realistic product mockups?',
      hint: 'Think about psychological anchoring and commercial readiness.',
      talkingPoints: [
        'It demonstrates that the artist understands commercial manufacturing and packaging realities.',
        'The client sees the end product working in their business rather than an unfinished graphic.'
      ]
    },
    keyInsight: {
      title: 'Context Sells',
      text: 'Always include at least 2 real-world contextual mockups (e.g., street billboard, product box) in your final client presentation.'
    }
  },
  {
    id: 'di-w17-s13',
    slideNum: 15,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Archival Master Export',
    title: 'Archival Master Export: The Deliverable Package',
    topicTitle: 'Delivering Master Assets for Commercial Client Hand-Off',
    whatItDoes: 'Covers the industry protocol for packaging final project deliverables: 16-bit uncompressed TIFF masters, organized layered PSDs, web previews, and asset manifests.',
    whatIsGoingOn: 'Finishing the artwork is only half the battle; delivering the final package professionally is what gets you hired again. When hand-off day arrives, sending an uncompressed, organized delivery package with clear README documentation proves you are a top-tier creative professional.',
    bullets: [
      'The Master TIFF: 16-bit, ProPhoto RGB or Adobe RGB, uncompressed or LZW compressed; the permanent master archival copy.',
      'The Cleaned Layered PSD: Fully grouped, labeled, with all empty layers deleted, font licenses included, and smart objects intact.',
      'Web Delivery Kit: sRGB JPEGs and WebPs optimized at multiple resolutions (1x, 2x, social media crop sizes: 16:9, 1:1, 9:16).',
      'The Delivery Manifest README: A clean markdown or PDF document listing color profiles, print specs, font names, stock photo licenses, and contact info.'
    ],
    layman: {
      title: 'The Gift Box Analogy:',
      text: 'You don\'t hand someone an expensive birthday gift in a crumpled plastic grocery bag. You place it in a beautiful sturdy box with tissue paper and a handwritten card. Your delivery package is that gift box.'
    },
    discussionPrompt: {
      question: 'Why do international advertising agencies require 16-bit TIFF masters rather than 8-bit JPEGs for their corporate archives?',
      hint: 'Look at mathematical color depth: $256$ levels per channel vs $65,536$ levels per channel.',
      talkingPoints: [
        '16-bit color depth contains 65,536 shades per channel, preventing color banding during future remastering or giant billboard enlargement.',
        'JPEGs discard pixel data permanently with lossy compression.'
      ]
    },
    keyInsight: {
      title: 'Professional Hand-Off Equals Repeat Business',
      text: 'A clean, impeccably organized delivery folder with clear documentation turns one-time clients into lifelong repeat customers.'
    }
  },
  {
    id: 'di-w17-s14',
    slideNum: 15,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Career Pathways',
    title: 'Industry Career Pathways in Digital Imaging',
    topicTitle: 'From Commercial Retoucher to Hollywood Key Art Director',
    whatItDoes: 'Maps career specializations, salary benchmarks, and daily responsibilities across commercial retouching, entertainment matte painting, and visual direction.',
    whatIsGoingOn: 'Digital imaging skills open doors across multi-billion-dollar global industries: high-fashion editorial retouching, Hollywood movie poster (Key Art) design, film matte painting, gaming concept art, and luxury product e-commerce. Each pathway values distinct specializations and workflows.',
    bullets: [
      'Commercial & Editorial Retoucher: Specializes in frequency separation, high-fashion skin grading, luxury watch and jewelry rendering (clients: Vogue, Nike, Rolex).',
      'Entertainment Key Art Designer: Designs epic theatrical movie posters, Netflix streaming hero banners, and AAA game box covers (agencies: Concept Arts, BLT Communications).',
      'Digital Matte Painter: Creates hyper-realistic photorealistic environments and background set extensions for major motion pictures and TV VFX (studios: ILM, Wētā FX).',
      'Creative / Art Director: Leads creative strategy, directs photography shoots, guides teams of retouchers, and presents campaigns to global Fortune 500 executives.'
    ],
    layman: {
      title: 'The Music Industry Analogy:',
      text: 'Learning guitar allows you to play in a rock band, compose film scores, teach at a conservatory, or produce pop albums. Your digital imaging mastery is your instrument—you can play in Hollywood movies, fashion runways, or advertising agencies.'
    },
    discussionPrompt: {
      question: 'Which of these career pathways aligns most with your personal passion: high-fashion editorial beauty, Hollywood movie key art, or film VFX matte painting?',
      hint: 'Reflect on what kind of stories and aesthetics make you excited to open Photoshop every day.',
      talkingPoints: [
        'Beauty retouching demands surgical micro-perfection and anatomical nuance.',
        'Key art and matte painting demand epic visual storytelling, cinematic perspective, and lighting mastery.'
      ]
    },
    keyInsight: {
      title: 'Mastery Is Transferable',
      text: 'The fundamental laws you mastered in this course—perspective, lighting, color harmony, and non-destructive compositing—are the exact same principles used by Hollywood directors and top advertising agencies worldwide.'
    }
  },
  {
    id: 'di-w17-s15',
    slideNum: 15,
    totalSlides: 15,
    type: 'single_topic',
    moduleTag: 'Course Graduation',
    title: 'Course Capstone: The Digital Imager\'s Code of Excellence',
    topicTitle: 'Graduation Synthesis: The Mindset of the Master Visual Artist',
    whatItDoes: 'Summarizes the foundational ethos of digital imaging: non-destructive discipline, reverence for natural optical physics, and lifelong creative curiosity.',
    whatIsGoingOn: 'As this course concludes, students transition from software operators into genuine visual artists. Software interfaces and AI tools will evolve and change, but the core fundamentals of light, shadow, human perception, and visual storytelling remain timeless.',
    bullets: [
      'Tenet 1: Respect the Physics of Light—Never composite an element without identifying its key light, ambient fill, and physical contact shadow.',
      'Tenet 2: The Non-Destructive Code—Protect original pixels with masks, smart objects, and adjustment layers; build for agility and collaboration.',
      'Tenet 3: Ruthless Self-Critique—Continuously audit your own artwork with diagnostic curves and the horizontal flip test before showing the world.',
      'Tenet 4: Timeless Storytelling Over Fleeting Trends—Software and filters come and go; compelling human emotion, visual balance, and powerful concepts endure forever.'
    ],
    layman: {
      title: 'The Lighthouse Analogy:',
      text: 'Software tools are ships sailing across an ever-changing ocean. The foundational laws of light, perspective, and storytelling are the granite lighthouse on the shore. Keep your eyes on the lighthouse, and you will never lose your way.'
    },
    discussionPrompt: {
      question: 'Looking back at your very first digital image from Week 1 compared to your final capstone today, what has been your greatest transformation as a creative artist?',
      hint: 'Notice how your eyes now see light, shadow, and detail in the physical world around you.',
      talkingPoints: [
        'You no longer see photographs as flat images; you see them as depth maps, lighting vectors, and spatial opportunities.',
        'You have earned the technical freedom to bring anything in your imagination into photorealistic reality.'
      ]
    },
    keyInsight: {
      title: 'Congratulations, Digital Imagers!',
      text: 'Go forth and create visual magic with confidence, discipline, and artistic excellence.'
    }
  }
];
