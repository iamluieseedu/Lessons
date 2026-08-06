export interface Question {
  id: number;
  question: string;
  options: string[];
  answer: number; // Index of the correct option
  explanation: string;
}

export const quizQuestions: Question[] = [
  {
    id: 1,
    question: "What is the primary video and audio footage that carries the main story message or dialogue called?",
    options: ["B-Roll", "A-Roll", "C-Roll", "Timeline Mix"],
    answer: 1,
    explanation: "A-Roll is the primary talking footage (e.g. news anchor or interview) that serves as the backbone of the story."
  },
  {
    id: 2,
    question: "Which metaphor best describes the function of B-Roll in a video edit?",
    options: [
      "The lead singer of a music band.",
      "A typewriter where mistakes are permanent.",
      "Opening a picture book to illustrate spoken words.",
      "Stacking cheese on top of a meat sandwich."
    ],
    answer: 2,
    explanation: "B-Roll serves as visual helper footage overlaying the spoken narrative, acting like picture illustrations in a book."
  },
  {
    id: 3,
    question: "What was the main limitation of physical Linear Videotape Editing?",
    options: [
      "You could copy clips randomly at any time.",
      "Editing required digital computer screens.",
      "If you made a mistake at the beginning, you had to re-record the entire tape.",
      "Files were constantly lost due to software crashes."
    ],
    answer: 2,
    explanation: "Linear tape-to-tape editing was sequential. Making a mistake meant re-recording everything downstream."
  },
  {
    id: 4,
    question: "Why is modern Non-Linear Editing (NLE) considered 'Non-Destructive'?",
    options: [
      "It deletes raw camera files automatically to save storage space.",
      "It only writes virtual pointers, leaving original source files untouched.",
      "It permanently burns cuts and edits into original media files.",
      "It restricts editors from performing undos."
    ],
    answer: 1,
    explanation: "NLEs write virtual XML instruction pointers, keeping your original camera files completely safe on your hard drive."
  },
  {
    id: 5,
    question: "Which frame rate (FPS) is the standard for classic cinema look with natural motion blur?",
    options: ["60 FPS", "30 FPS", "24 FPS", "120 FPS"],
    answer: 2,
    explanation: "24 FPS is the universal standard for cinema, providing natural motion blur closest to human perception."
  },
  {
    id: 6,
    question: "What is the standard aspect ratio shape for modern TV, desktop monitors, and horizontal YouTube players?",
    options: ["9:16", "1:1", "4:3", "16:9"],
    answer: 3,
    explanation: "16:9 Widescreen (1920x1080) is the universal horizontal standard shape for modern screens."
  },
  {
    id: 7,
    question: "According to Walter Murch’s 'Rule of Six', what is the most important element of any cut, taking up 51% of the priority?",
    options: ["Story", "Emotion", "Rhythm", "Eye-Trace"],
    answer: 1,
    explanation: "Emotion takes 51% priority. If a cut lands the correct emotional feeling, the audience will forgive technical errors."
  },
  {
    id: 8,
    question: "In the 'Rule of Six', which element is ranked as the absolute lowest priority (4%) when choosing a cut?",
    options: ["Story", "Rhythm", "3D Spatial Continuity", "2D Screen Line"],
    answer: 2,
    explanation: "3D Spatial Continuity (e.g. precise placement of items in the room) is the lowest priority check at 4%."
  },
  {
    id: 9,
    question: "Which pioneer discovered the 'Stop-Trick' editing cut by accident when his camera jammed in 1896?",
    options: ["Thomas Edison", "Edwin S. Porter", "Georges Méliès", "Lev Kuleshov"],
    answer: 2,
    explanation: "French magician Georges Méliès discovered the stop-trick cut by accident, using it to invent film special effects."
  },
  {
    id: 10,
    question: "What does the Kuleshov Effect prove to film editors?",
    options: [
      "Audience eyes naturally align to the left side of the screen.",
      "Viewers construct emotional meaning based purely on the juxtaposition of two shots.",
      "Cuts must align to a strict musical tempo.",
      "Tapes degrade in quality when copied multiple times."
    ],
    answer: 1,
    explanation: "The Kuleshov Effect proves that the context/order of shots changes the meaning viewers generate in their heads."
  },
  {
    id: 11,
    question: "In video software interfaces, which panel serves as the 'organized closet' holding all raw imported assets?",
    options: ["Timeline Panel", "Source Monitor", "Program Monitor", "Project Panel"],
    answer: 3,
    explanation: "The Project Panel (Bottom-Left) serves as storage bin for raw footage, audio, and graphics files."
  },
  {
    id: 12,
    question: "Double-clicking a clip opens it in the Source Monitor to set In/Out points. What is the analogy for this quadrant?",
    options: ["The Organized Closet", "The Fitting Room", "The Cinema Screen", "The Sandwich Workbench"],
    answer: 1,
    explanation: "The Source Monitor is like a fitting room, letting you check and trim clips before committing them to the timeline."
  },
  {
    id: 13,
    question: "Which keyboard shortcut returns your cursor to the default Selection Tool?",
    options: ["[C]", "[B]", "[V]", "[N]"],
    answer: 2,
    explanation: "Key [V] (Selection Tool) is your virtual hand to grab and move clips, serving as the safe default pointer."
  },
  {
    id: 14,
    question: "What is the target decibel (dB) peak range for clear and readable voice/speech audio?",
    options: ["0 dB to -3 dB", "-6 dB to -12 dB", "-18 dB to -24 dB", "-30 dB"],
    answer: 1,
    explanation: "Clear dialogue should peak in the green-yellow zone between -6 dB and -12 dB. 0 dB is the distortion roof."
  },
  {
    id: 15,
    question: "The Container Format holds video and audio together. Which of these is a Container Format?",
    options: ["H.264", "ProRes", ".MP4", "AAC"],
    answer: 2,
    explanation: ".MP4 and .MOV are Container formats (boxes), while H.264 is the Codec (compressor) that packs the file."
  }
];
