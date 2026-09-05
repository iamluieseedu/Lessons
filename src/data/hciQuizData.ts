export interface Question {
  id: number;
  question: string;
  options: string[];
  answer: number; // 0-indexed
  explanation: string;
}

export const hciQuizQuestions: Question[] = [
  {
    id: 1,
    question: "Which human senses are explicitly excluded from the focus of this specific HCI course according to the lecture materials?",
    options: [
      "Seeing and hearing",
      "Feeling and touching",
      "Balance and orientation",
      "Smelling and tasting"
    ],
    answer: 3,
    explanation: "Standard HCI focuses primarily on visual, auditory, and haptic (touch) interfaces, while taste and smell are excluded."
  },
  {
    id: 2,
    question: "Beyond physical senses, what must HCI designers consider regarding the 'Human' element of the interaction?",
    options: [
      "Memories, skills, and past experiences",
      "Genetic predisposition to code",
      "Innate ability to multitask",
      "Current biological heart rate"
    ],
    answer: 0,
    explanation: "Human factors in HCI include cognitive abilities, past knowledge, domain skills, and mental models."
  },
  {
    id: 3,
    question: "How does the lecture describe the role of Augmented Reality (AR) games like Pokemon Go in the context of HCI?",
    options: [
      "Simplifying the interaction loop",
      "Turning the world into an HCI instance",
      "Limiting interaction to mobile screens",
      "Replacing physical reality with pixels"
    ],
    answer: 1,
    explanation: "AR overlays digital interfaces onto physical spaces, turning the real environment into an instance of HCI."
  },
  {
    id: 4,
    question: "In the most basic view of interaction, what is the primary relationship described between the human and the computer?",
    options: [
      "Passive observation by the human",
      "Back-and-forth response",
      "Simultaneous independent actions",
      "One-way data transmission"
    ],
    answer: 1,
    explanation: "Basic interaction is defined as a two-way dialogue: user input triggers computer response."
  },
  {
    id: 5,
    question: "What does the lecture suggest is the 'most important part' of HCI that might be missed by the basic interaction view?",
    options: [
      "Improving the screen resolution",
      "Mastering the software shortcuts",
      "Maximizing the processing speed",
      "Interacting with the task"
    ],
    answer: 3,
    explanation: "The end goal is not interacting with the tool itself, but accomplishing the underlying task smoothly."
  },
  {
    id: 6,
    question: "When the computer acts as a 'mediator' in HCI, what is it mediating between?",
    options: [
      "The human and the task",
      "The input and output devices",
      "The designer and the user",
      "The hardware and software"
    ],
    answer: 0,
    explanation: "The computer serves as a tool or mediator bridging the user and the goal/task they want to complete."
  },
  {
    id: 7,
    question: "According to the 'Invisible Interaction' concept, what should the user be spending as little time as possible on?",
    options: [
      "Focusing on the interface",
      "Providing input to the system",
      "Completing the objective",
      "Thinking about the task"
    ],
    answer: 0,
    explanation: "An invisible interface gets out of the way so the user can focus 100% on their actual task."
  },
  {
    id: 8,
    question: "What is the ultimate goal of a designer according to the 'Interaction' section of the lecture?",
    options: [
      "Make the interface vanish",
      "Add more features to the tool",
      "Create a highly visible brand",
      "Increase user engagement time"
    ],
    answer: 0,
    explanation: "The ideal design feels so natural that the interface 'vanishes' from conscious thought."
  },
  {
    id: 9,
    question: "Why is it described as 'ideal' for an interface to be invisible?",
    options: [
      "To reduce the cost of production",
      "To allow focus on the task",
      "To prevent user errors",
      "To hide flaws in the design"
    ],
    answer: 1,
    explanation: "Invisibility minimizes cognitive load, allowing total focus on productive work."
  },
  {
    id: 10,
    question: "What 'realist' perspective does the lecture provide regarding interface visibility?",
    options: [
      "Interfaces will stay somewhat visible",
      "Visible interfaces are more powerful",
      "Complete invisibility is already achieved",
      "Users prefer seeing the tools"
    ],
    answer: 0,
    explanation: "In practice, complete invisibility is rarely achievable, so interfaces remain partially visible tools."
  },
  {
    id: 11,
    question: "In the context of HCI, what human element allows us to utilize past knowledge during a new interaction?",
    options: [
      "Memories and experiences",
      "Heightened sensory perception",
      "Inherent logical reasoning",
      "Biological reflexes"
    ],
    answer: 0,
    explanation: "Prior memories and experiences form schema that help users intuit how new systems work."
  },
  {
    id: 12,
    question: "Which device represents a specialized portable computer for capturing visual data?",
    options: [
      "Digital camera",
      "Smart glasses",
      "Laptop",
      "Smart TV"
    ],
    answer: 0,
    explanation: "A digital camera is an embedded computing system tailored for image sensing and processing."
  },
  {
    id: 13,
    question: "What happens to the user's focus when they feel like they are 'interacting directly with the task'?",
    options: [
      "The interface vanishes",
      "The software crashes less",
      "The computer gets faster",
      "The task becomes more complex"
    ],
    answer: 0,
    explanation: "Direct engagement with the task makes the medium or UI dissolve from awareness."
  },
  {
    id: 14,
    question: "Why must we take every human element into consideration in HCI?",
    options: [
      "To account for perception and history",
      "To replace the need for human memory",
      "To maximize advertising revenue",
      "To standardise human behavior"
    ],
    answer: 0,
    explanation: "Designing effectively requires understanding human perceptual limits and cognitive history."
  },
  {
    id: 15,
    question: "What negative experience illustrates a failure in invisible interaction?",
    options: [
      "Spending all time thinking about the tool",
      "The device running out of battery",
      "High purchase price of software",
      "The interface being too colorful"
    ],
    answer: 0,
    explanation: "When users are forced to struggle with the tool rather than the work, the interaction has failed."
  },
  {
    id: 16,
    question: "Which of these is a listed human element that contributes to how we use computers?",
    options: [
      "Height and weight",
      "Skills and knowledge",
      "Sleep patterns",
      "Innate coding ability"
    ],
    answer: 1,
    explanation: "Individual user skills and domain knowledge directly influence interface usability."
  },
  {
    id: 17,
    question: "The lecture states that in HCI, we consider the human and computer 'together' doing what?",
    options: [
      "Competing for system resources",
      "Generating new hardware",
      "Interacting with the task",
      "Reversing roles"
    ],
    answer: 2,
    explanation: "Human and computer work as a coupled system to accomplish a target task."
  },
  {
    id: 18,
    question: "Which sense is described as a way we 'perceive the world' that IS included in the course?",
    options: [
      "Telepathy",
      "Tasting",
      "Smelling",
      "Feeling"
    ],
    answer: 3,
    explanation: "Touch/feeling (haptics) along with seeing and hearing are core sensory modalities in HCI."
  },
  {
    id: 19,
    question: "What is the relationship between 'Interaction' and 'Interacting directly' according to the goal of HCI?",
    options: [
      "Direct interaction targets the computer",
      "Direct interaction targets the task",
      "Both target the hardware only",
      "They are mutually exclusive"
    ],
    answer: 1,
    explanation: "Direct manipulation aims to make user actions feel like manipulating the task directly."
  },
  {
    id: 20,
    question: "What does the lecture use to illustrate the 'ubiquity' of HCI?",
    options: [
      "Standard keyboard typing",
      "Supercomputer clusters",
      "Augmented reality games",
      "Offline board games"
    ],
    answer: 2,
    explanation: "AR games showcase how HCI has expanded beyond desktop PCs into ubiquitous real-world environments."
  }
];
