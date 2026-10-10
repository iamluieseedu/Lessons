'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import {
  Terminal as TerminalIcon,
  Code2,
  ArrowRight,
  ArrowLeft,
  ArrowDown,
  CornerDownRight,
  Sparkles,
  Info,
  RotateCcw,
  Bot,
  Check
} from 'lucide-react';

interface StoryStep {
  id: number;
  actTitle: string;
  actBadge: string;
  mentorSpeech: string;
  actionButtonLabel: string;
  actionType: 'type-code' | 'run-terminal' | 'next-dialog';
  highlightLine?: number;
  codeSnapshot: string[];
  terminalPrompt?: {
    promptLabel: string;
    placeholder: string;
    defaultOption1?: string;
    defaultOption2?: string;
  };
  keyTakeaway?: string;
}

const STORY_STEPS: StoryStep[] = [
  // ==========================================
  // ACT 1: THE NATURAL C STRING (NO EXTRA IMPORTS)
  // ==========================================
  {
    id: 1,
    actTitle: 'Act 1: The Natural C String',
    actBadge: 'Part 1 • Strings in C',
    mentorSpeech:
      'Hello and welcome! I am Professor C, your interactive programming guide. Today, we will explore how scanf() works. Think of scanf() as the "listening ear" of your program: it pauses and waits for keyboard input. Let us begin with natural C strings!',
    actionButtonLabel: 'Start Interactive Lesson 👉',
    actionType: 'next-dialog',
    codeSnapshot: [
      '// Welcome to Interactive C Programming!',
      '// Click the action button on the left to start typing code...'
    ],
    keyTakeaway: 'scanf() stops program execution and waits for the user to press Enter.'
  },
  {
    id: 2,
    actTitle: 'Act 1: The Natural C String',
    actBadge: 'Part 1 • Standard I/O Only',
    mentorSpeech:
      'In pure C, there is no built-in "string" keyword, and we do NOT need to import <string.h> for basic string input. The standard #include <stdio.h> header is all we need! Click the button to insert our C program boilerplate.',
    actionButtonLabel: '✍️ Insert Boilerplate (#include <stdio.h>)',
    actionType: 'type-code',
    highlightLine: 1,
    codeSnapshot: [
      '#include <stdio.h>',
      '',
      'int main() {',
      '    // We will place our string input logic here...',
      '    return 0;',
      '}'
    ],
    keyTakeaway: 'Natural C strings only require <stdio.h>. No extra imports needed!'
  },
  {
    id: 3,
    actTitle: 'Act 1: The Natural C String',
    actBadge: 'Part 1 • Char Array Declaration',
    mentorSpeech:
      'How do we create a natural string in C? We declare a character array: `char nickname[50];`. This reserves 50 contiguous slots in computer memory to store characters typed by the user.',
    actionButtonLabel: '✍️ Declare char nickname[50];',
    actionType: 'type-code',
    highlightLine: 4,
    codeSnapshot: [
      '#include <stdio.h>',
      '',
      'int main() {',
      '    char nickname[50]; // Holds up to 49 letters + null terminator (\\0)',
      '',
      '    return 0;',
      '}'
    ],
    keyTakeaway: 'A string in C is a sequence of characters terminated by null (\\0).'
  },
  {
    id: 4,
    actTitle: 'Act 1: The Natural C String',
    actBadge: 'Part 1 • User Prompt',
    mentorSpeech:
      'Before capturing user input, we should always display a prompt using printf(). Without a prompt, the user sees a blank screen and does not know what to type.',
    actionButtonLabel: '✍️ Add Prompt (printf)',
    actionType: 'type-code',
    highlightLine: 6,
    codeSnapshot: [
      '#include <stdio.h>',
      '',
      'int main() {',
      '    char nickname[50]; // Holds up to 49 letters + null terminator (\\0)',
      '',
      '    printf("Enter your nickname: ");',
      '',
      '    return 0;',
      '}'
    ],
    keyTakeaway: 'Always prompt the user with printf() before calling scanf().'
  },
  {
    id: 5,
    actTitle: 'Act 1: The Natural C String',
    actBadge: 'Part 1 • The "No &" Rule',
    mentorSpeech:
      'Here is the golden rule of C strings: when using `scanf("%s", nickname);`, notice that there is NO "&" (ampersand) symbol! Why? Because in C, the name of an array already represents its base address in memory!',
    actionButtonLabel: '✍️ Type scanf("%s", nickname); (Look: NO &!)',
    actionType: 'type-code',
    highlightLine: 7,
    codeSnapshot: [
      '#include <stdio.h>',
      '',
      'int main() {',
      '    char nickname[50]; // Holds up to 49 letters + null terminator (\\0)',
      '',
      '    printf("Enter your nickname: ");',
      '    scanf("%s", nickname); // Look closely: NO "&" symbol!',
      '',
      '    return 0;',
      '}'
    ],
    keyTakeaway: 'Strings do NOT need "&" in scanf() because the array name is already a pointer.'
  },
  {
    id: 6,
    actTitle: 'Act 1: The Natural C String',
    actBadge: 'Part 1 • Output Formatting',
    mentorSpeech:
      'Now let us display the captured string using the %s specifier in printf() to warmly greet the user!',
    actionButtonLabel: '✍️ Complete Program (Add Greeting)',
    actionType: 'type-code',
    highlightLine: 9,
    codeSnapshot: [
      '#include <stdio.h>',
      '',
      'int main() {',
      '    char nickname[50]; // Holds up to 49 letters + null terminator (\\0)',
      '',
      '    printf("Enter your nickname: ");',
      '    scanf("%s", nickname); // Look closely: NO "&" symbol!',
      '',
      '    printf("Hello, %s! Welcome to C programming.\\n", nickname);',
      '    return 0;',
      '}'
    ],
    keyTakeaway: '%s formats and prints the character array up to the null-terminator.'
  },
  {
    id: 7,
    actTitle: 'Act 1: The Natural C String',
    actBadge: 'Part 1 • Live Terminal Test',
    mentorSpeech:
      'Act 1 is complete! Now click the Run button below to compile and execute your program in the virtual terminal. Try typing your nickname!',
    actionButtonLabel: '▶ Run Program in Terminal!',
    actionType: 'run-terminal',
    highlightLine: 7,
    codeSnapshot: [
      '#include <stdio.h>',
      '',
      'int main() {',
      '    char nickname[50]; // Holds up to 49 letters + null terminator (\\0)',
      '',
      '    printf("Enter your nickname: ");',
      '    scanf("%s", nickname); // Look closely: NO "&" symbol!',
      '',
      '    printf("Hello, %s! Welcome to C programming.\\n", nickname);',
      '    return 0;',
      '}'
    ],
    terminalPrompt: {
      promptLabel: 'Enter your nickname: ',
      placeholder: 'Type nickname here (e.g. Alex)...',
      defaultOption1: 'Alex',
      defaultOption2: 'Taylor'
    },
    keyTakeaway: 'Your program runs and pauses at scanf() waiting for standard input.'
  },

  // ==========================================
  // ACT 2: NUMBERS & THE ADDRESS-OF (&) OPERATOR
  // ==========================================
  {
    id: 8,
    actTitle: 'Act 2: Numbers & The & Operator',
    actBadge: 'Part 2 • Why & is Required',
    mentorSpeech:
      'Great work! You now understand natural strings without extra imports or ampersands. But what happens with numbers, such as age (int) and allowance (float)? Here is where the essential "&" address-of operator comes into play!',
    actionButtonLabel: 'Proceed to Numbers & The & Rule 👉',
    actionType: 'next-dialog',
    codeSnapshot: [
      '#include <stdio.h>',
      '',
      'int main() {',
      '    // Act 2: Numbers & The Address-of (&) Operator',
      '    // Click the button to declare int and float variables...',
      '    return 0;',
      '}'
    ],
    keyTakeaway: 'Numbers behave differently than strings in scanf(). Let us discover why!'
  },
  {
    id: 9,
    actTitle: 'Act 2: Numbers & The & Operator',
    actBadge: 'Part 2 • Declaring int & float',
    mentorSpeech:
      'Let us declare two primitive variables: `int age;` for integers and `float allowance;` for decimals. Unlike arrays, primitive variables do not evaluate to addresses automatically.',
    actionButtonLabel: '✍️ Declare int age; and float allowance;',
    actionType: 'type-code',
    highlightLine: 4,
    codeSnapshot: [
      '#include <stdio.h>',
      '',
      'int main() {',
      '    int age;',
      '    float allowance;',
      '',
      '    return 0;',
      '}'
    ],
    keyTakeaway: 'int = whole numbers (%d), float = decimal numbers (%f).'
  },
  {
    id: 10,
    actTitle: 'Act 2: Numbers & The & Operator',
    actBadge: 'Part 2 • The "&" Address Rule',
    mentorSpeech:
      'Here is the critical memory rule: for numeric variables, you MUST prefix the variable name with "&" (e.g. `scanf("%d", &age);`). The ampersand passes the memory address of the variable so scanf() knows where in RAM to store the value. Omitting "&" causes a Segmentation Fault!',
    actionButtonLabel: '✍️ Write scanf with &age and &allowance',
    actionType: 'type-code',
    highlightLine: 8,
    codeSnapshot: [
      '#include <stdio.h>',
      '',
      'int main() {',
      '    int age;',
      '    float allowance;',
      '',
      '    printf("Enter your age: ");',
      '    scanf("%d", &age); // Notice the "&" address-of operator!',
      '',
      '    printf("Enter your allowance ($): ");',
      '    scanf("%f", &allowance); // Float also requires "&"!',
      '',
      '    return 0;',
      '}'
    ],
    keyTakeaway: 'Memory Rule: Primitive variables MUST have "&" in scanf() to locate their storage.'
  },
  {
    id: 11,
    actTitle: 'Act 2: Numbers & The & Operator',
    actBadge: 'Part 2 • Formatted Output',
    mentorSpeech:
      'Next, let us print the numbers cleanly. We use `%d` for age and `%.2f` for allowance to round and display exactly two decimal places.',
    actionButtonLabel: '✍️ Add Summary Printf (%.2f formatting)',
    actionType: 'type-code',
    highlightLine: 13,
    codeSnapshot: [
      '#include <stdio.h>',
      '',
      'int main() {',
      '    int age;',
      '    float allowance;',
      '',
      '    printf("Enter your age: ");',
      '    scanf("%d", &age); // Notice the "&" address-of operator!',
      '',
      '    printf("Enter your allowance ($): ");',
      '    scanf("%f", &allowance); // Float also requires "&"!',
      '',
      '    printf("\\n[Student Profile]\\n");',
      '    printf("Age: %d years old\\n", age);',
      '    printf("Daily Allowance: $%.2f\\n", allowance);',
      '    return 0;',
      '}'
    ],
    keyTakeaway: '%.2f formats floating-point values to two decimal digits.'
  },
  {
    id: 12,
    actTitle: 'Act 2: Numbers & The & Operator',
    actBadge: 'Part 2 • Live Numbers Test',
    mentorSpeech:
      'Awesome! Let us test this in our virtual terminal. Click Run and enter your age and allowance when prompted.',
    actionButtonLabel: '▶ Run Numbers Code in Terminal!',
    actionType: 'run-terminal',
    highlightLine: 8,
    codeSnapshot: [
      '#include <stdio.h>',
      '',
      'int main() {',
      '    int age;',
      '    float allowance;',
      '',
      '    printf("Enter your age: ");',
      '    scanf("%d", &age); // Notice the "&" address-of operator!',
      '',
      '    printf("Enter your allowance ($): ");',
      '    scanf("%f", &allowance); // Float also requires "&"!',
      '',
      '    printf("\\n[Student Profile]\\n");',
      '    printf("Age: %d years old\\n", age);',
      '    printf("Daily Allowance: $%.2f\\n", allowance);',
      '    return 0;',
      '}'
    ],
    terminalPrompt: {
      promptLabel: 'Enter your age: ',
      placeholder: 'Type age (e.g. 19)...',
      defaultOption1: '19',
      defaultOption2: '21'
    },
    keyTakeaway: 'Both integer and float values are stored safely using &age and &allowance.'
  },

  // ==========================================
  // ACT 3: THE 4 BASIC MATH OPERATORS (+, -, *, /)
  // ==========================================
  {
    id: 13,
    actTitle: 'Act 3: The 4 Basic Math Operators',
    actBadge: 'Part 3 • Basic Math in C',
    mentorSpeech:
      'Outstanding! You have mastered strings (no &) and numbers (with &). Now let us build a 4-Operator Calculator in C to calculate Sum (+), Difference (-), Product (*), and Quotient (/) from user inputs!',
    actionButtonLabel: 'Build 4-Operator Calculator! 🧮',
    actionType: 'next-dialog',
    codeSnapshot: [
      '#include <stdio.h>',
      '',
      'int main() {',
      '    // Act 3: 4 Basic Math Operators in C (+, -, *, /)',
      '    // Click the button to set up the calculator variables...',
      '    return 0;',
      '}'
    ],
    keyTakeaway: 'We will prompt for two numbers and calculate +, -, *, and / simultaneously.'
  },
  {
    id: 14,
    actTitle: 'Act 3: The 4 Basic Math Operators',
    actBadge: 'Part 3 • Operand Declarations',
    mentorSpeech:
      'Let us declare two inputs: `float num1, num2;` and four variables for results: `float sum, diff, prod, quot;`. We choose float so division retains its decimal values instead of truncating!',
    actionButtonLabel: '✍️ Declare Operands & Results (float)',
    actionType: 'type-code',
    highlightLine: 4,
    codeSnapshot: [
      '#include <stdio.h>',
      '',
      'int main() {',
      '    float num1, num2;',
      '    float sum, diff, prod, quot;',
      '',
      '    return 0;',
      '}'
    ],
    keyTakeaway: 'Using float for arithmetic avoids integer division truncation.'
  },
  {
    id: 15,
    actTitle: 'Act 3: The 4 Basic Math Operators',
    actBadge: 'Part 3 • Capturing Operands',
    mentorSpeech:
      'Let us ask the user for both numbers using `scanf("%f", &num1);` and `scanf("%f", &num2);`. Remember: because they are float numbers, the ampersand (&) is strictly required!',
    actionButtonLabel: '✍️ Prompt & Scan Both Numbers',
    actionType: 'type-code',
    highlightLine: 8,
    codeSnapshot: [
      '#include <stdio.h>',
      '',
      'int main() {',
      '    float num1, num2;',
      '    float sum, diff, prod, quot;',
      '',
      '    printf("Enter first number: ");',
      '    scanf("%f", &num1);',
      '',
      '    printf("Enter second number: ");',
      '    scanf("%f", &num2);',
      '',
      '    return 0;',
      '}'
    ],
    keyTakeaway: 'Both numbers are captured into memory using &num1 and &num2.'
  },
  {
    id: 16,
    actTitle: 'Act 3: The 4 Basic Math Operators',
    actBadge: 'Part 3 • Computing Formulas',
    mentorSpeech:
      'Here are the 4 fundamental arithmetic operators in C: + (Addition), - (Subtraction), * (Multiplication using asterisk), and / (Division using forward slash). Let us compute all four expressions!',
    actionButtonLabel: '✍️ Compute +, -, *, and / Formulas',
    actionType: 'type-code',
    highlightLine: 14,
    codeSnapshot: [
      '#include <stdio.h>',
      '',
      'int main() {',
      '    float num1, num2;',
      '    float sum, diff, prod, quot;',
      '',
      '    printf("Enter first number: ");',
      '    scanf("%f", &num1);',
      '',
      '    printf("Enter second number: ");',
      '    scanf("%f", &num2);',
      '',
      '    // The 4 Basic Arithmetic Operators in C',
      '    sum  = num1 + num2; // Addition',
      '    diff = num1 - num2; // Subtraction',
      '    prod = num1 * num2; // Multiplication (*)',
      '    quot = num1 / num2; // Division (/)',
      '',
      '    return 0;',
      '}'
    ],
    keyTakeaway: '+ adds, - subtracts, * multiplies, and / divides in C arithmetic expressions.'
  },
  {
    id: 17,
    actTitle: 'Act 3: The 4 Basic Math Operators',
    actBadge: 'Part 3 • Formatting Results',
    mentorSpeech:
      'Finally, let us print all four answers using formatted `%.2f` for a neat and professional output table!',
    actionButtonLabel: '✍️ Add Results Printf Display',
    actionType: 'type-code',
    highlightLine: 20,
    codeSnapshot: [
      '#include <stdio.h>',
      '',
      'int main() {',
      '    float num1, num2;',
      '    float sum, diff, prod, quot;',
      '',
      '    printf("Enter first number: ");',
      '    scanf("%f", &num1);',
      '',
      '    printf("Enter second number: ");',
      '    scanf("%f", &num2);',
      '',
      '    // The 4 Basic Arithmetic Operators in C',
      '    sum  = num1 + num2; // Addition',
      '    diff = num1 - num2; // Subtraction',
      '    prod = num1 * num2; // Multiplication (*)',
      '    quot = num1 / num2; // Division (/)',
      '',
      '    printf("\\n--- Calculation Results ---\\n");',
      '    printf("Sum        (+): %.2f\\n", sum);',
      '    printf("Difference (-): %.2f\\n", diff);',
      '    printf("Product    (*): %.2f\\n", prod);',
      '    printf("Quotient   (/): %.2f\\n", quot);',
      '    return 0;',
      '}'
    ],
    keyTakeaway: 'The calculator handles all 4 operations simultaneously and prints rounded results.'
  },
  {
    id: 18,
    actTitle: 'Act 3: The 4 Basic Math Operators',
    actBadge: 'Part 3 • Live Calculator Run',
    mentorSpeech:
      'Your C calculator is ready! Click the Run button below, type two numbers (e.g. 20 and 4), and observe C arithmetic in action.',
    actionButtonLabel: '▶ Run Calculator in Terminal!',
    actionType: 'run-terminal',
    highlightLine: 14,
    codeSnapshot: [
      '#include <stdio.h>',
      '',
      'int main() {',
      '    float num1, num2;',
      '    float sum, diff, prod, quot;',
      '',
      '    printf("Enter first number: ");',
      '    scanf("%f", &num1);',
      '',
      '    printf("Enter second number: ");',
      '    scanf("%f", &num2);',
      '',
      '    // The 4 Basic Arithmetic Operators in C',
      '    sum  = num1 + num2; // Addition',
      '    diff = num1 - num2; // Subtraction',
      '    prod = num1 * num2; // Multiplication (*)',
      '    quot = num1 / num2; // Division (/)',
      '',
      '    printf("\\n--- Calculation Results ---\\n");',
      '    printf("Sum        (+): %.2f\\n", sum);',
      '    printf("Difference (-): %.2f\\n", diff);',
      '    printf("Product    (*): %.2f\\n", prod);',
      '    printf("Quotient   (/): %.2f\\n", quot);',
      '    return 0;',
      '}'
    ],
    terminalPrompt: {
      promptLabel: 'Enter first number: ',
      placeholder: 'Type first number (e.g. 20)...',
      defaultOption1: '20',
      defaultOption2: '15'
    },
    keyTakeaway: 'The terminal pauses for both numbers and computes all 4 results.'
  },

  // ==========================================
  // COMPLETION & FINISH
  // ==========================================
  {
    id: 19,
    actTitle: 'Lesson Completed',
    actBadge: 'Finished • C scanf & Math',
    mentorSpeech:
      'You have finished all 3 parts of this lesson: 1) Natural C strings using char arrays (no extra imports, and no & operator), 2) Numbers using the address-of & operator (int and float), and 3) The 4 basic math operators (+, -, *, /). You are all set to move on to next C projects.',
    actionButtonLabel: 'Finish Lesson',
    actionType: 'next-dialog',
    codeSnapshot: [
      '// Lesson Summary: C scanf() & Basic Operators',
      '// 1. Strings:  char name[50]; scanf("%s", name);   -> No & operator',
      '// 2. Numbers:  int age; scanf("%d", &age);          -> Requires &',
      '// 3. Math:     float x; scanf("%f", &x);            -> +, -, *, /'
    ],
    keyTakeaway: 'Lesson completed. You have mastered standard input and memory addressing rules in C.'
  }
];

export default function LinearCScanfInteractivePage() {
  const [currentStepId, setCurrentStepId] = useState(1);
  const [isFinished, setIsFinished] = useState(false);
  const currentStep = STORY_STEPS.find((s) => s.id === currentStepId) || STORY_STEPS[0];

  // Editor typing state
  const [displayedCode, setDisplayedCode] = useState<string[]>(currentStep.codeSnapshot);
  const [isTyping, setIsTyping] = useState(false);
  const [activeTypingLineIndex, setActiveTypingLineIndex] = useState<number | null>(null);
  const typingTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Terminal state
  const [terminalLines, setTerminalLines] = useState<string[]>([
    '$ gcc main.c -o app && ./app',
    'Follow the discussion dialog on the left to begin your lesson!'
  ]);
  const [isWaitingInput, setIsWaitingInput] = useState(false);
  const [inputBuffer, setInputBuffer] = useState('');
  const [collectedInputs, setCollectedInputs] = useState<string[]>([]);
  const terminalInputRef = useRef<HTMLInputElement>(null);
  const terminalContainerRef = useRef<HTMLDivElement>(null);

  // Clean up typing timer on unmount
  useEffect(() => {
    return () => {
      if (typingTimerRef.current) {
        clearInterval(typingTimerRef.current);
        typingTimerRef.current = null;
      }
    };
  }, []);

  // Incremental code typing animation: keeps existing lines intact and only writes new code where it belongs
  const animateIncrementalTyping = (
    prevLines: string[],
    targetLines: string[],
    onComplete: () => void
  ) => {
    if (typingTimerRef.current) {
      clearInterval(typingTimerRef.current);
      typingTimerRef.current = null;
    }

    // 1. Longest common prefix
    let prefixCount = 0;
    while (
      prefixCount < prevLines.length &&
      prefixCount < targetLines.length &&
      prevLines[prefixCount] === targetLines[prefixCount]
    ) {
      prefixCount++;
    }

    // 2. Longest common suffix after prefix
    let suffixCount = 0;
    while (
      suffixCount < prevLines.length - prefixCount &&
      suffixCount < targetLines.length - prefixCount &&
      prevLines[prevLines.length - 1 - suffixCount] === targetLines[targetLines.length - 1 - suffixCount]
    ) {
      suffixCount++;
    }

    const prefixLines = targetLines.slice(0, prefixCount);
    const suffixLines = suffixCount > 0 ? targetLines.slice(targetLines.length - suffixCount) : [];
    const linesToType = targetLines.slice(prefixCount, targetLines.length - suffixCount);

    if (linesToType.length === 0) {
      setDisplayedCode(targetLines);
      setIsTyping(false);
      setActiveTypingLineIndex(null);
      onComplete();
      return;
    }

    setIsTyping(true);

    // If completely new file / boilerplate (prefixCount === 0), reveal lines sequentially
    if (prefixCount === 0) {
      let currentLineIdx = 0;
      setDisplayedCode([targetLines[0]]);
      setActiveTypingLineIndex(0);

      typingTimerRef.current = setInterval(() => {
        currentLineIdx++;
        if (currentLineIdx < targetLines.length) {
          setDisplayedCode(targetLines.slice(0, currentLineIdx + 1));
          setActiveTypingLineIndex(currentLineIdx);
        } else {
          if (typingTimerRef.current) clearInterval(typingTimerRef.current);
          typingTimerRef.current = null;
          setIsTyping(false);
          setActiveTypingLineIndex(null);
          setDisplayedCode(targetLines);
          onComplete();
        }
      }, 70);
      return;
    }

    // Incremental line insertion: keep prefix and suffix untouched!
    // Write the new line(s) character-by-character directly where they belong
    let currentLineOffset = 0;
    let currentCharIndex = 0;

    const buildView = (finishedCount: number, partialText: string) => {
      const finishedLines = linesToType.slice(0, finishedCount);
      const middle = [...finishedLines, partialText];
      return [...prefixLines, ...middle, ...suffixLines];
    };

    setDisplayedCode(buildView(0, ''));
    setActiveTypingLineIndex(prefixCount);

    typingTimerRef.current = setInterval(() => {
      const targetLineText = linesToType[currentLineOffset];

      if (currentCharIndex < targetLineText.length) {
        currentCharIndex++;
        const partial = targetLineText.slice(0, currentCharIndex);
        setDisplayedCode(buildView(currentLineOffset, partial));
        setActiveTypingLineIndex(prefixCount + currentLineOffset);
      } else {
        // Line finished
        currentLineOffset++;
        currentCharIndex = 0;

        if (currentLineOffset < linesToType.length) {
          setDisplayedCode(buildView(currentLineOffset, ''));
          setActiveTypingLineIndex(prefixCount + currentLineOffset);
        } else {
          // All lines finished
          if (typingTimerRef.current) clearInterval(typingTimerRef.current);
          typingTimerRef.current = null;
          setIsTyping(false);
          setActiveTypingLineIndex(null);
          setDisplayedCode(targetLines);
          onComplete();
        }
      }
    }, 16);
  };

  // When step changes, update code with typing effect if type-code action
  const handleStepAction = () => {
    if (currentStep.actionType === 'type-code') {
      animateIncrementalTyping(displayedCode, currentStep.codeSnapshot, () => {
        if (currentStepId < STORY_STEPS.length) {
          setCurrentStepId((prev) => prev + 1);
        }
      });
    } else if (currentStep.actionType === 'run-terminal') {
      // Launch terminal simulation
      setIsWaitingInput(true);
      setCollectedInputs([]);
      setInputBuffer('');

      if (currentStep.id === 7) {
        // Act 1: String input
        setTerminalLines([
          '$ gcc main.c -o app && ./app',
          'Enter your nickname: '
        ]);
      } else if (currentStep.id === 12) {
        // Act 2: Numbers input
        setTerminalLines([
          '$ gcc main.c -o app && ./app',
          'Enter your age: '
        ]);
      } else if (currentStep.id === 18) {
        // Act 3: Math Calculator input
        setTerminalLines([
          '$ gcc main.c -o app && ./app',
          'Enter first number: '
        ]);
      }

      setTimeout(() => {
        terminalContainerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        terminalInputRef.current?.focus();
      }, 100);
    } else {
      // Normal next dialog step
      if (currentStepId < STORY_STEPS.length) {
        setCurrentStepId((prev) => prev + 1);
        const nextStep = STORY_STEPS.find((s) => s.id === currentStepId + 1);
        if (nextStep) {
          setDisplayedCode(nextStep.codeSnapshot);
        }
      } else {
        // Step 19 completed -> mark as finished
        setIsFinished(true);
      }
    }
  };

  // Handle Terminal User Input Submission
  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const val = inputBuffer.trim() || currentStep.terminalPrompt?.defaultOption1 || 'Test';
    const newInputs = [...collectedInputs, val];
    setCollectedInputs(newInputs);
    setInputBuffer('');

    if (currentStep.id === 7) {
      // String run complete
      setTerminalLines([
        '$ gcc main.c -o app && ./app',
        `Enter your nickname: ${val}`,
        `Hello, ${val}! Welcome to C programming.`,
        '[Process exited with code 0]'
      ]);
      setIsWaitingInput(false);
      // Advance to Act 2 intro step
      setTimeout(() => {
        setCurrentStepId(8);
        setDisplayedCode(STORY_STEPS.find((s) => s.id === 8)?.codeSnapshot || []);
      }, 1200);
    } else if (currentStep.id === 12) {
      // Number input: requires age then allowance
      if (newInputs.length === 1) {
        setTerminalLines([
          '$ gcc main.c -o app && ./app',
          `Enter your age: ${val}`,
          'Enter your allowance ($): '
        ]);
      } else {
        const ageVal = newInputs[0];
        const allowVal = parseFloat(newInputs[1] || '150.50').toFixed(2);
        setTerminalLines([
          '$ gcc main.c -o app && ./app',
          `Enter your age: ${ageVal}`,
          `Enter your allowance ($): ${allowVal}`,
          '',
          '[Student Profile]',
          `Age: ${ageVal} years old`,
          `Daily Allowance: $${allowVal}`,
          '[Process exited with code 0]'
        ]);
        setIsWaitingInput(false);
        // Advance to Act 3 intro step
        setTimeout(() => {
          setCurrentStepId(13);
          setDisplayedCode(STORY_STEPS.find((s) => s.id === 13)?.codeSnapshot || []);
        }, 1200);
      }
    } else if (currentStep.id === 18) {
      // Math Calculator: requires num1 then num2
      if (newInputs.length === 1) {
        setTerminalLines([
          '$ gcc main.c -o app && ./app',
          `Enter first number: ${val}`,
          'Enter second number: '
        ]);
      } else {
        const n1 = parseFloat(newInputs[0] || '20');
        const n2 = parseFloat(newInputs[1] || '4');
        const sum = n1 + n2;
        const diff = n1 - n2;
        const prod = n1 * n2;
        const quot = n2 !== 0 ? n1 / n2 : 0;

        setTerminalLines([
          '$ gcc main.c -o app && ./app',
          `Enter first number: ${n1}`,
          `Enter second number: ${n2}`,
          '',
          '--- Calculation Results ---',
          `Sum        (+): ${sum.toFixed(2)}`,
          `Difference (-): ${diff.toFixed(2)}`,
          `Product    (*): ${prod.toFixed(2)}`,
          n2 !== 0
            ? `Quotient   (/): ${quot.toFixed(2)}`
            : 'Quotient   (/): Error (Division by Zero)',
          '[Process exited with code 0]'
        ]);
        setIsWaitingInput(false);
        // Advance to final celebration step
        setTimeout(() => {
          setCurrentStepId(19);
          setDisplayedCode(STORY_STEPS.find((s) => s.id === 19)?.codeSnapshot || []);
        }, 1200);
      }
    }
  };

  const handleQuickInput = (val: string) => {
    setInputBuffer(val);
  };

  const progressPercent = Math.round((currentStepId / STORY_STEPS.length) * 100);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans selection:bg-rose-500 selection:text-white pb-20 antialiased">
      {/* Top Navbar: Clean White Theme */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 sm:px-6 py-3 shadow-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link
              href="/courses/cpp-programming"
              className="text-xs font-semibold px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300 transition flex items-center gap-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Back to C Course</span>
            </Link>

            <div className="h-4 w-px bg-slate-300 hidden sm:block" />

            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-rose-50 border border-rose-200 text-rose-600 flex items-center justify-center font-mono font-bold text-xs">
                C
              </span>
              <div>
                <h1 className="text-sm font-bold text-slate-900 tracking-tight leading-none flex items-center gap-1.5">
                  Interactive C Story: Mastering <code className="text-rose-600 font-mono text-xs font-bold">scanf()</code>
                </h1>
                <span className="text-[11px] text-slate-500">
                  Step-by-step Interactive Discussion &bull; Auto-typing Simulated Editor
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Story Progress Bar */}
            <div className="hidden md:flex items-center gap-2">
              <div className="w-32 bg-slate-200 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-rose-500 h-full rounded-full transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <span className="text-[11px] font-mono text-rose-600 font-bold">
                {progressPercent}%
              </span>
            </div>

            <Link
              href="/"
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300 transition"
            >
              Portal Home
            </Link>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 space-y-6">
        {/* Act & Progress Header Indicator (White Theme) */}
        <div className="flex flex-wrap items-center justify-between gap-3 bg-white border border-slate-200 rounded-2xl px-5 py-3.5 shadow-xs">
          <div className="flex items-center gap-2.5">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-rose-50 text-rose-600 border border-rose-200">
              {currentStep.actBadge}
            </span>
            <span className="text-sm font-bold text-slate-800 font-mono">
              {currentStep.actTitle}
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
            <span>Step {currentStep.id} of {STORY_STEPS.length}</span>
            <span className="text-slate-300">&bull;</span>
            <button
              onClick={() => {
                if (typingTimerRef.current) {
                  clearInterval(typingTimerRef.current);
                  typingTimerRef.current = null;
                }
                setIsFinished(false);
                setIsTyping(false);
                setActiveTypingLineIndex(null);
                setCurrentStepId(1);
                setDisplayedCode(STORY_STEPS[0].codeSnapshot);
              }}
              className="hover:text-rose-600 transition cursor-pointer flex items-center gap-1 text-[11px] font-semibold text-slate-600"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Restart Story</span>
            </button>
          </div>
        </div>

        {/* 2-Column Story Grid: Dialogue & Action (Left) + Simulated Editor & Terminal (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* LEFT: DISCUSSION DIALOG COMPANION */}
          <div className="lg:col-span-5 space-y-4">
            {/* Mentor Chat Balloon Card (White Theme) */}
            <div className="relative bg-white border-2 border-rose-200 rounded-3xl p-5 shadow-lg space-y-4">
              {/* Floating Pulse Avatar Badge */}
              <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                <div className="w-10 h-10 rounded-2xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600 relative shrink-0">
                  <Bot className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                  </span>
                </div>
                <div>
                  <h3 className="text-sm font-extrabold text-slate-900 flex items-center gap-1.5">
                    Professor C &bull; Interactive Guide
                  </h3>
                  <span className="text-[11px] text-emerald-600 font-mono flex items-center gap-1 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Active Discussion &bull; Waiting for your action
                  </span>
                </div>
              </div>

              {/* Dialogue Speech Bubble */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 relative text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2">
                <p className="font-normal">{currentStep.mentorSpeech}</p>

                {currentStep.keyTakeaway && (
                  <div className="mt-3 bg-rose-50 border border-rose-200 rounded-xl p-2.5 text-xs text-rose-900 flex items-start gap-2 font-medium">
                    <Sparkles className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                    <span>{currentStep.keyTakeaway}</span>
                  </div>
                )}
              </div>

              {/* Guided Action Button or Finish Options */}
              {isFinished ? (
                <div className="space-y-2.5 pt-1">
                  <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="font-medium">Lesson finished! You have completed all 19 steps.</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-0.5">
                    <Link
                      href="/courses/cpp-programming"
                      className="py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs text-center transition flex items-center justify-center gap-1.5 shadow-xs"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Back to C Course</span>
                    </Link>

                    <button
                      onClick={() => {
                        if (typingTimerRef.current) {
                          clearInterval(typingTimerRef.current);
                          typingTimerRef.current = null;
                        }
                        setIsFinished(false);
                        setIsTyping(false);
                        setActiveTypingLineIndex(null);
                        setCurrentStepId(1);
                        setDisplayedCode(STORY_STEPS[0].codeSnapshot);
                        setTerminalLines([
                          '$ gcc main.c -o app && ./app',
                          'Follow the discussion dialog on the left to begin your lesson!'
                        ]);
                      }}
                      className="py-2.5 px-3 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 font-medium text-xs text-center transition flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                    >
                      <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
                      <span>Restart Lesson</span>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-2 pt-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold block">
                    Your Next Action:
                  </span>

                  <button
                    onClick={handleStepAction}
                    disabled={isTyping}
                    className={`w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm transition flex items-center justify-center gap-2 shadow-md cursor-pointer ${
                      currentStepId === 19
                        ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-200'
                        : currentStep.actionType === 'run-terminal'
                        ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-200 ring-2 ring-emerald-400 ring-offset-2'
                        : 'bg-rose-600 hover:bg-rose-700 text-white shadow-rose-200'
                    } disabled:opacity-50`}
                  >
                    <span>
                      {isTyping
                        ? 'Typing into Editor...'
                        : currentStepId === 19
                        ? 'Finish Lesson'
                        : currentStep.actionButtonLabel}
                    </span>
                    {currentStepId === 19 ? (
                      <Check className="w-4 h-4" />
                    ) : currentStep.actionType === 'run-terminal' ? (
                      <CornerDownRight className="w-4 h-4 animate-bounce text-emerald-100" />
                    ) : (
                      <ArrowRight className="w-4 h-4" />
                    )}
                  </button>

                  {/* Direct Visual Guide to Terminal when running */}
                  {(currentStep.actionType === 'run-terminal' || isWaitingInput) && (
                    <div className="bg-emerald-50 border-2 border-emerald-300 rounded-xl p-3 text-xs text-emerald-900 flex items-start gap-2.5 shadow-sm">
                      <div className="p-1.5 rounded-lg bg-emerald-500 text-white shrink-0 mt-0.5">
                        <CornerDownRight className="w-4 h-4 animate-bounce" />
                      </div>
                      <div>
                        <span className="font-extrabold text-emerald-950 block">
                          Direct Attention: Look at the Terminal ↘
                        </span>
                        <span className="text-[11px] text-emerald-800 leading-snug">
                          {isWaitingInput
                            ? 'The program is paused waiting for you! Click the input box in the terminal below to type.'
                            : 'Click the green button above, then interact with the Virtual Terminal below on the right.'}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Step dots */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-[11px] text-slate-500">
                <span>Story Milestone {currentStep.id} of {STORY_STEPS.length}</span>
                <div className="flex items-center gap-1">
                  {STORY_STEPS.map((s) => (
                    <span
                      key={s.id}
                      className={`h-1.5 rounded-full transition-all ${
                        s.id === currentStepId
                          ? 'w-4 bg-rose-500'
                          : s.id < currentStepId
                          ? 'w-1.5 bg-emerald-500'
                          : 'w-1.5 bg-slate-200'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Summary Pill Card (White Theme) */}
            <div className="bg-white border border-slate-200 rounded-2xl p-4 text-xs space-y-2 shadow-xs">
              <span className="font-bold text-slate-800 flex items-center gap-1.5 font-mono">
                <Info className="w-3.5 h-3.5 text-sky-500" />
                Key Concept Checklist:
              </span>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                  <span>
                    <strong className="text-slate-800">Natural Strings:</strong> <code className="bg-slate-100 px-1 py-0.5 rounded text-emerald-700 font-mono">char str[50];</code> &bull; NO <code className="bg-rose-50 px-1 py-0.5 rounded text-rose-600 font-mono font-bold">&amp;</code> needed in scanf!
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                  <span>
                    <strong className="text-slate-800">Numbers:</strong> <code className="bg-slate-100 px-1 py-0.5 rounded text-sky-700 font-mono">int, float</code> &bull; MUST have <code className="bg-rose-50 px-1 py-0.5 rounded text-rose-600 font-mono font-bold">&amp;age</code> address-of operator!
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                  <span>
                    <strong className="text-slate-800">4 Math Operators:</strong> <code className="bg-slate-100 px-1 py-0.5 rounded text-amber-700 font-mono">+ - * /</code> with formatted <code className="bg-slate-100 px-1 py-0.5 rounded text-amber-700 font-mono">%.2f</code> output.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT: SIMULATED IDE + VIRTUAL TERMINAL */}
          <div className="lg:col-span-7 space-y-5">
            {/* SIMULATED C EDITOR (Clean Light IDE Theme) */}
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-md">
              {/* Editor Tab Bar */}
              <div className="bg-slate-100 px-4 py-2.5 border-b border-slate-200 flex items-center justify-between text-xs font-mono text-slate-600">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
                  </div>
                  <span className="text-slate-800 font-semibold flex items-center gap-1.5 ml-2">
                    <Code2 className="w-3.5 h-3.5 text-rose-500" />
                    main.c
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {isTyping ? (
                    <span className="text-[10px] text-rose-600 font-mono bg-rose-50 border border-rose-200 px-2 py-0.5 rounded font-semibold flex items-center gap-1.5 animate-pulse">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                      Writing code...
                    </span>
                  ) : (
                    <span className="text-[10px] text-slate-600 font-mono bg-white border border-slate-200 px-2 py-0.5 rounded font-medium">
                      Simulated C Editor
                    </span>
                  )}
                </div>
              </div>

              {/* Code Canvas (White Background with Crisp Light Syntax Highlighting) */}
              <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto min-h-[300px] bg-white">
                {displayedCode.map((line, idx) => {
                  const lineNum = idx + 1;
                  const isCurrentHighlighted = !isTyping && lineNum === currentStep.highlightLine;
                  const isCurrentlyTypingHere = isTyping && activeTypingLineIndex === idx;

                  return (
                    <div
                      key={idx}
                      className={`flex items-start transition-colors py-0.5 px-2 -mx-2 rounded ${
                        isCurrentlyTypingHere
                          ? 'bg-rose-50/80 border-l-4 border-rose-500 text-slate-900 font-medium'
                          : isCurrentHighlighted
                          ? 'bg-rose-50 border-l-4 border-rose-500 text-slate-900 font-medium'
                          : 'text-slate-800 hover:bg-slate-50'
                      }`}
                    >
                      <span
                        className={`w-7 text-right pr-3 select-none text-xs shrink-0 ${
                          isCurrentlyTypingHere || isCurrentHighlighted
                            ? 'text-rose-600 font-bold'
                            : 'text-slate-400'
                        }`}
                      >
                        {lineNum}
                      </span>
                      <pre className="font-mono overflow-x-visible whitespace-pre flex items-center">
                        {renderSyntaxHighlighter(line)}
                        {isCurrentlyTypingHere && (
                          <span className="inline-block w-2 h-4 bg-rose-500 animate-pulse ml-0.5 align-middle rounded-[1px]" />
                        )}
                      </pre>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* LIVE SIMULATED TERMINAL (Clean Terminal Theme with Great Contrast) */}
            <div
              ref={terminalContainerRef}
              className={`bg-[#0f172a] rounded-2xl overflow-hidden shadow-md flex flex-col transition-all duration-300 ${
                currentStep.actionType === 'run-terminal' || isWaitingInput
                  ? 'border-2 border-emerald-400 ring-4 ring-emerald-400/30 shadow-xl shadow-emerald-950/40'
                  : 'border border-slate-800'
              }`}
            >
              {/* Eye-catching Banner Pointer when Terminal is Active */}
              {(currentStep.actionType === 'run-terminal' || isWaitingInput) && (
                <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 text-white px-4 py-2 text-xs font-bold flex items-center justify-between shadow-inner">
                  <span className="flex items-center gap-1.5">
                    <ArrowDown className="w-4 h-4 animate-bounce text-emerald-100" />
                    <span>TERMINAL ACTIVE: Enter your value below and press Enter!</span>
                  </span>
                  <span className="text-[10px] bg-emerald-800/80 px-2 py-0.5 rounded font-mono">
                    scanf() waiting
                  </span>
                </div>
              )}

              {/* Terminal Title Bar */}
              <div className="bg-[#1e293b] px-4 py-2 border-b border-slate-800 flex items-center justify-between text-xs font-mono text-slate-300">
                <div className="flex items-center gap-2">
                  <TerminalIcon className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-slate-100 font-semibold">Virtual Terminal (GCC Execution)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded">
                    stdin active
                  </span>
                </div>
              </div>

              {/* Terminal Screen Body */}
              <div className="p-4 font-mono text-xs min-h-[170px] max-h-[220px] overflow-y-auto space-y-1">
                {terminalLines.map((line, idx) => (
                  <div
                    key={idx}
                    className={
                      line.startsWith('$')
                        ? 'text-slate-400 font-bold'
                        : line.startsWith('[')
                        ? 'text-slate-500 text-[11px]'
                        : line.includes('Error')
                        ? 'text-rose-400'
                        : 'text-emerald-300'
                    }
                  >
                    {line}
                  </div>
                ))}

                {/* Waiting Input Form */}
                {isWaitingInput && currentStep.terminalPrompt && (
                  <div className="pt-2 border-t border-slate-800 space-y-2">
                    <div className="flex items-center gap-1.5 text-[11px] text-emerald-300 font-mono font-semibold animate-pulse">
                      <ArrowDown className="w-3 h-3 animate-bounce" />
                      <span>Input required by scanf(): Type below and press Enter:</span>
                    </div>

                    <form
                      onSubmit={handleTerminalSubmit}
                      className="flex items-center gap-2 text-white"
                    >
                      <span className="text-emerald-400 font-bold">&gt;</span>
                      <input
                        ref={terminalInputRef}
                        type="text"
                        value={inputBuffer}
                        onChange={(e) => setInputBuffer(e.target.value)}
                        placeholder={currentStep.terminalPrompt.placeholder}
                        className="bg-[#1e293b] border-2 border-emerald-500 px-3 py-1.5 rounded-lg text-xs font-mono text-white placeholder:text-slate-500 flex-1 outline-none focus:border-emerald-400 shadow-inner ring-2 ring-emerald-500/20"
                      />
                      <button
                        type="submit"
                        className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold transition cursor-pointer flex items-center gap-1 shrink-0"
                      >
                        <span>Send</span>
                        <CornerDownRight className="w-3.5 h-3.5" />
                      </button>
                    </form>

                    {/* Quick Choice Buttons for Convenience */}
                    <div className="flex items-center gap-2 text-[11px] text-slate-400">
                      <span>Quick suggestions:</span>
                      {currentStep.terminalPrompt.defaultOption1 && (
                        <button
                          type="button"
                          onClick={() => handleQuickInput(currentStep.terminalPrompt!.defaultOption1!)}
                          className="px-2 py-0.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded text-[11px] font-mono transition cursor-pointer"
                        >
                          &quot;{currentStep.terminalPrompt.defaultOption1}&quot;
                        </button>
                      )}
                      {currentStep.terminalPrompt.defaultOption2 && (
                        <button
                          type="button"
                          onClick={() => handleQuickInput(currentStep.terminalPrompt!.defaultOption2!)}
                          className="px-2 py-0.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded text-[11px] font-mono transition cursor-pointer"
                        >
                          &quot;{currentStep.terminalPrompt.defaultOption2}&quot;
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// C Syntax Highlighter for Light Theme
function renderSyntaxHighlighter(line: string) {
  if (line.trim().startsWith('//')) {
    return <span className="text-slate-400 italic">{line}</span>;
  }
  if (line.trim().startsWith('#include')) {
    return (
      <span>
        <span className="text-indigo-600 font-bold">#include</span>{' '}
        <span className="text-amber-700 font-semibold">{line.replace('#include', '').trim()}</span>
      </span>
    );
  }

  const tokens = line.split(/(\b(?:int|char|float|double|return|printf|scanf|void)\b|"[^"]*"|\/\/[^\n]*|&[a-zA-Z0-9_]+)/g);

  return (
    <>
      {tokens.map((token, i) => {
        if (/^(int|char|float|double|void)$/.test(token)) {
          return (
            <span key={i} className="text-sky-700 font-bold">
              {token}
            </span>
          );
        }
        if (token === 'return') {
          return (
            <span key={i} className="text-indigo-600 font-bold">
              {token}
            </span>
          );
        }
        if (/^(printf|scanf)$/.test(token)) {
          return (
            <span key={i} className="text-amber-700 font-bold">
              {token}
            </span>
          );
        }
        if (token.startsWith('"') && token.endsWith('"')) {
          return (
            <span key={i} className="text-emerald-700 font-medium">
              {token}
            </span>
          );
        }
        if (token.startsWith('//')) {
          return (
            <span key={i} className="text-slate-400 italic">
              {token}
            </span>
          );
        }
        if (token.startsWith('&')) {
          return (
            <span key={i} className="text-rose-600 font-extrabold underline decoration-rose-400 decoration-2">
              {token}
            </span>
          );
        }
        return <span key={i}>{token}</span>;
      })}
    </>
  );
}
