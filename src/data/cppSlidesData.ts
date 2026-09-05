import { SlideData } from '../types/slide';

export const cppSlidesData: SlideData[] = [
  // SLIDE 1: COVER
  {
    id: 'cpp-slide1',
    slideNum: 1,
    totalSlides: 45,
    type: 'cover',
    moduleTag: 'Week 1 — FUNDAMENTALS OF PROGRAMMING',
    title: 'C & C++ Programming Masterclass',
    subtitle: 'From Core Basics, Escape Sequences & Identifiers to Pointers, Memory & OOP Basics'
  },

  // SLIDE 2: CURRICULUM ROADMAP
  {
    id: 'cpp-slide2',
    slideNum: 2,
    totalSlides: 45,
    type: 'single_topic',
    moduleTag: 'Curriculum Roadmap',
    title: 'Mastery Learning Objectives',
    topicTitle: 'Comprehensive 10-Unit Journey into Systems Programming',
    bullets: [
      'Unit 1: History, Language Foundations & Compilation Pipeline (Preprocessor to Linker)',
      'Unit 2: Program Anatomy, Literals & Escape Sequences (\\n, \\t, \\", \\r, %d, %f, %p)',
      'Unit 3: Identifiers, Reserved Keywords, Naming Rules & Primitive Data Types',
      'Unit 4: Operators & Expressions (Arithmetic, Relational, Logical, Bitwise, Increment)',
      'Unit 5: Selection Structures (if-else, switch-case, ternary operator)',
      'Unit 6: Iteration & Loops (for, while, do-while, break, continue)',
      'Unit 7: Functions, Scope & Parameter Passing (Pass-by-Value vs Pass-by-Reference)',
      'Unit 8: Arrays, C-Strings (null-terminated \\0) & C++ std::string',
      'Unit 9: Pointers & Dynamic Memory (&, *, malloc/free vs new/delete)',
      'Unit 10: Structs & C++ OOP Classes (Access Specifiers, Constructors, Methods)'
    ],
    layman: {
      title: 'Why Learn C & C++?',
      text: 'C is the mother of modern programming (powers operating systems, game engines, and microcontrollers). C++ adds Object-Oriented superpowers while preserving lightning-fast execution speed!'
    }
  },

  // SLIDE 3: SECTION BREAK 1
  {
    id: 'cpp-slide3',
    slideNum: 3,
    totalSlides: 45,
    type: 'section_break',
    sectionNum: 'PART 1',
    title: 'Foundations & Compilation Pipeline',
    description: 'Deconstructing language evolution and how source code transforms into machine hardware instructions.'
  },

  // SLIDE 4: HISTORY TIMELINE
  {
    id: 'cpp-slide4',
    slideNum: 4,
    totalSlides: 45,
    type: 'timeline',
    moduleTag: 'History',
    title: 'Evolution of C and C++',
    topicTitle: 'From Bell Laboratories to High-Performance Modern Computing',
    timelineItems: [
      {
        year: '1972',
        title: 'Dennis Ritchie Creates C',
        desc: 'Developed at Bell Labs to re-write the Unix Operating System, offering direct hardware memory control.'
      },
      {
        year: '1979',
        title: 'Bjarne Stroustrup Introduces C with Classes',
        desc: 'Enhanced C with Object-Oriented principles, user-defined types, and class encapsulation at Bell Labs.'
      },
      {
        year: '1985',
        title: 'C++ 1.0 Commercial Release',
        desc: 'Renamed to C++ (increment operator ++ signaling the next step beyond C) with virtual functions and references.'
      },
      {
        year: 'Modern',
        title: 'ISO Standards (C17 / C++20 / C++23)',
        desc: 'Powers game engines (Unreal), robotics, web browsers (Chrome/V8), databases, and AI runtimes.'
      }
    ]
  },

  // SLIDE 5: COMPILATION PIPELINE
  {
    id: 'cpp-slide5',
    slideNum: 5,
    totalSlides: 45,
    type: 'single_topic',
    moduleTag: 'Compilation Flow',
    title: 'The 4-Stage Compilation Pipeline',
    topicTitle: 'How text files (.c / .cpp) become binary machine executables',
    bullets: [
      '1. Preprocessor (#include, #define): Strips comments and expands macros/headers into pure source text.',
      '2. Compiler (gcc / g++): Translates preprocessed code into assembly language instructions (.s).',
      '3. Assembler (as): Converts assembly instructions into machine code binary object files (.o / .obj).',
      '4. Linker (ld): Combines object files with standard C/C++ runtime libraries into an executable (.exe).'
    ],
    keyInsight: {
      title: 'Compilation Rule',
      text: 'Syntax errors (like missing semicolons or invalid identifiers) are caught during Compiler stage before any executable is generated!'
    }
  },

  // SLIDE 6: ANATOMY OF A C VS C++ PROGRAM
  {
    id: 'cpp-slide6',
    slideNum: 6,
    totalSlides: 45,
    type: 'comparison',
    moduleTag: 'Syntax Comparison',
    title: 'Anatomy: C vs C++ Hello World',
    topicTitle: 'Comparing header includes, standard output, and program entry points',
    versusLeft: {
      title: 'C Language (stdio.h)',
      bullets: [
        '#include <stdio.h> (Standard I/O header)',
        'Uses printf() for formatted output stream',
        'Explicit escape sequences like \\n needed',
        'Compiles with gcc main.c -o main',
        'Standard: C11 / C17'
      ]
    },
    versusRight: {
      title: 'C++ Language (iostream)',
      bullets: [
        '#include <iostream> (Stream I/O header)',
        'using namespace std; (Standard namespace)',
        'Uses std::cout << stream insertion operator',
        'Can use std::endl for newlines',
        'Compiles with g++ main.cpp -o main'
      ]
    }
  },

  // SLIDE 7: SECTION BREAK 2
  {
    id: 'cpp-slide7',
    slideNum: 7,
    totalSlides: 45,
    type: 'section_break',
    sectionNum: 'PART 2',
    title: 'Literals, Escape Sequences & Format Specifiers',
    description: 'Mastering special character formatting control and printf/cout stream specifiers.'
  },

  // SLIDE 8: WHAT ARE ESCAPE SEQUENCES?
  {
    id: 'cpp-slide8',
    slideNum: 8,
    totalSlides: 45,
    type: 'single_topic',
    moduleTag: 'Output Control',
    title: 'Understanding Escape Sequences',
    topicTitle: 'Character combinations beginning with backslash (\\) that represent non-printable or special actions',
    bullets: [
      'Escape sequences allow programmers to embed non-printable characters (like tabs or carriage returns).',
      'They escape the normal character interpretation of the compiler.',
      'Always enclosed inside string literals e.g., "Hello\\nWorld".',
      'Count as a single character in memory despite consisting of 2 typed characters (\\ and char).'
    ],
    layman: {
      title: 'Keyboard Analogy',
      text: '\\n acts like pressing the ENTER key, \\t acts like pressing the TAB key, and \\" tells the compiler "this is literal quote text, do not close string!"'
    }
  },

  // SLIDE 9: MASTER LIST OF ESCAPE SEQUENCES
  {
    id: 'cpp-slide9',
    slideNum: 9,
    totalSlides: 45,
    type: 'single_topic',
    moduleTag: 'Reference Guide',
    title: 'Essential C / C++ Escape Sequences',
    topicTitle: 'Key sequences used for terminal output formatting',
    bullets: [
      '\\n : Newline — Moves cursor to the beginning of the next line.',
      '\\t : Horizontal Tab — Advances cursor to the next tab stop (typically 4 or 8 spaces).',
      '\\\\ : Backslash — Prints a literal backslash character (\\).',
      '\\" : Double Quote — Prints a literal double quote inside a string without syntax error.',
      '\\\' : Single Quote — Prints a literal single quote character.',
      '\\r : Carriage Return — Moves cursor back to the start of the current line (overwriting text).',
      '\\a : Audible Alert (Bell) — Triggers system beep or notification sound.',
      '\\b : Backspace — Moves cursor back one character space.'
    ]
  },

  // SLIDE 10: FORMAT SPECIFIERS IN C
  {
    id: 'cpp-slide10',
    slideNum: 10,
    totalSlides: 45,
    type: 'single_topic',
    moduleTag: 'Printf Formatting',
    title: 'C Format Specifiers (%d, %f, %c, %s, %p)',
    topicTitle: 'Placeholders inside printf() strings replaced by variable values',
    bullets: [
      '%d or %i : Signed 32-bit Integer e.g., printf("Age: %d", age);',
      '%f : Floating point decimal e.g., printf("GPA: %.2f", gpa);',
      '%c : Single character e.g., printf("Grade: %c", grade);',
      '%s : Null-terminated character string e.g., printf("Name: %s", name);',
      '%p : Hexadecimal Memory Pointer Address e.g., printf("Address: %p", (void*)&x);',
      '%u / %ld : Unsigned Integer / Long Integer'
    ]
  },

  // SLIDE 11: INTERACTIVE EXERCISE 1: ESCAPE SEQUENCE MATRIX
  {
    id: 'cpp-slide11',
    slideNum: 11,
    totalSlides: 45,
    type: 'cpp_exercise',
    moduleTag: 'Interactive Demo #1',
    title: 'Interactive Demo: Escape Sequences in Action',
    exercise: {
      id: 'ex1_escape',
      challengeTitle: 'Demo 1: Tabular Output with \\n and \\t',
      instructions: 'Click Run Program to see how \\t neatly separates columns and \\n creates clean rows in C output!',
      initialCode: `#include <stdio.h>

int main() {
    printf("ID\\tNAME\\n");
    printf("101\\tALEX\\n");
    printf("102\\tBEA\\n");
    return 0;
}`,
      language: 'c',
      expectedOutputSubstring: '101\tALEX',
      hint: '\\t adds horizontal tab space, \\n breaks into a new line.',
      solutionCode: `#include <stdio.h>

int main() {
    printf("ID\\tNAME\\n");
    printf("101\\tALEX\\n");
    printf("102\\tBEA\\n");
    return 0;
}`
    }
  },

  // SLIDE 12: SECTION BREAK 3
  {
    id: 'cpp-slide12',
    slideNum: 12,
    totalSlides: 45,
    type: 'section_break',
    sectionNum: 'PART 3',
    title: 'Identifiers, Keywords & Data Types',
    description: 'Understanding variable naming constraints, type sizes, and memory allocation.'
  },

  // SLIDE 13: RULES FOR VALID IDENTIFIERS
  {
    id: 'cpp-slide13',
    slideNum: 13,
    totalSlides: 45,
    type: 'single_topic',
    moduleTag: 'Syntax Rules',
    title: 'Rules for Valid Identifiers',
    topicTitle: 'Identifiers are user-defined names for variables, functions, and classes',
    bullets: [
      'Rule 1: Must begin with a letter (A-Z, a-z) or an underscore (_). CANNOT start with a digit!',
      'Rule 2: Subsequent characters can include letters, digits (0-9), and underscores.',
      'Rule 3: Case Sensitive! totalScore, TotalScore, and TOTALSCORE are 3 distinct identifiers.',
      'Rule 4: Cannot contain spaces, hyphens (-), or special symbols (@, $, %, !).',
      'Rule 5: Cannot be a C/C++ reserved keyword (like int, return, class, break).'
    ],
    visualTrick: {
      title: 'Valid vs Invalid Examples',
      text: 'VALID: _studentCount, total_2026, gpaVal | INVALID: 2ndPlace (starts with digit), user-name (hyphen), float (reserved keyword)'
    }
  },

  // SLIDE 14: RESERVED KEYWORDS IN C VS C++
  {
    id: 'cpp-slide14',
    slideNum: 14,
    totalSlides: 45,
    type: 'versus',
    moduleTag: 'Keyword Dictionary',
    title: 'Reserved Keywords in C & C++',
    topicTitle: 'Words reserved by the compiler with built-in grammatical meaning',
    versusLeft: {
      title: 'C Reserved Keywords (32 Core)',
      bullets: [
        'auto, break, case, char, const, continue, default, do',
        'double, else, enum, extern, float, for, goto, if',
        'int, long, register, return, short, signed, sizeof, static',
        'struct, switch, typedef, union, unsigned, void, volatile, while'
      ]
    },
    versusRight: {
      title: 'C++ Additional Keywords (90+)',
      bullets: [
        'class, public, private, protected, virtual, friend',
        'template, typename, namespace, using, try, catch, throw',
        'new, delete, nullptr, bool, true, false, constexpr, decltype'
      ]
    }
  },

  // SLIDE 15: PRIMITIVE DATA TYPES & MEMORY SIZES
  {
    id: 'cpp-slide15',
    slideNum: 15,
    totalSlides: 45,
    type: 'single_topic',
    moduleTag: 'Data Types',
    title: 'Primitive Data Types & Byte Allocations',
    topicTitle: 'Core data types built into C & C++ compiler memory specs',
    bullets: [
      'char : 1 Byte (8 bits) | Holds single ASCII character e.g. \'A\' (Range -128 to 127)',
      'int : 4 Bytes (32 bits) | Holds whole numbers e.g. 42 (Range -2,147,483,648 to 2,147,483,647)',
      'float : 4 Bytes (32 bits) | Single-precision decimal numbers e.g. 3.14f (6-7 digits precision)',
      'double : 8 Bytes (64 bits) | Double-precision decimal numbers e.g. 3.14159265 (15 digits precision)',
      'bool (C++ / stdbool.h) : 1 Byte | Holds true (1) or false (0)'
    ]
  },

  // SLIDE 16: TYPE MODIFIERS
  {
    id: 'cpp-slide16',
    slideNum: 16,
    totalSlides: 45,
    type: 'single_topic',
    moduleTag: 'Type Modifiers',
    title: 'Type Modifiers & Qualifiers',
    topicTitle: 'Altering data storage capacity, sign representation, or mutability',
    bullets: [
      'signed / unsigned : Controls positive/negative signs. unsigned int cannot be negative, doubling max positive capacity (0 to 4.29 billion).',
      'short / long : Alters memory byte size. short int = 2 bytes, long long int = 8 bytes.',
      'const Qualifier : Makes variable read-only immutable constant e.g. const double PI = 3.14159;',
      'sizeof Operator : Returns memory byte size of type e.g. printf("%lu", sizeof(double)); // prints 8'
    ]
  },

  // SLIDE 17: INTERACTIVE EXERCISE 2: IDENTIFIER DEMO
  {
    id: 'cpp-slide17',
    slideNum: 17,
    totalSlides: 45,
    type: 'cpp_exercise',
    moduleTag: 'Interactive Demo #2',
    title: 'Interactive Demo: Valid Identifiers in Action',
    exercise: {
      id: 'ex2_identifier',
      challengeTitle: 'Demo 2: Clean, Valid Variable Names',
      instructions: 'Click Run Program to see how valid identifiers (firstScore, student_gpa, yearVal) compile and store data cleanly!',
      initialCode: `#include <stdio.h>

int main() {
    int firstScore = 95;
    float student_gpa = 3.8;
    int yearVal = 2026;

    printf("=== STUDENT RECORD ===\\n");
    printf("Score: %d\\nGPA  : %.1f\\nYear : %d\\n", firstScore, student_gpa, yearVal);
    return 0;
}`,
      language: 'c',
      expectedOutputSubstring: 'Score: 95',
      hint: 'Identifiers start with a letter or underscore, no spaces!',
      solutionCode: `#include <stdio.h>

int main() {
    int firstScore = 95;
    float student_gpa = 3.8;
    int yearVal = 2026;

    printf("=== STUDENT RECORD ===\\n");
    printf("Score: %d\\nGPA  : %.1f\\nYear : %d\\n", firstScore, student_gpa, yearVal);
    return 0;
}`
    }
  },

  // SLIDE 18: SECTION BREAK 4
  {
    id: 'cpp-slide18',
    slideNum: 18,
    totalSlides: 45,
    type: 'section_break',
    sectionNum: 'PART 4',
    title: 'Operators & Expressions',
    description: 'Evaluating arithmetic calculations, logical evaluations, and bitwise manipulation.'
  },

  // SLIDE 19: ARITHMETIC & RELATIONAL OPERATORS
  {
    id: 'cpp-slide19',
    slideNum: 19,
    totalSlides: 45,
    type: 'single_topic',
    moduleTag: 'Operators',
    title: 'Arithmetic & Relational Operators',
    topicTitle: 'Mathematical expressions and comparison evaluation',
    bullets: [
      'Arithmetic: + (Addition), - (Subtraction), * (Multiplication), / (Division), % (Modulo remainder).',
      'Integer Division Note: 7 / 2 yields 3 (truncated integer). Use 7.0 / 2 for 3.5 float division!',
      'Modulo Operator (%): Returns remainder of division e.g., 10 % 3 = 1. Requires integer operands.',
      'Relational (Comparisons): == (Equal to), != (Not equal), > (Greater), < (Less), >=, <=.',
      'Relational statements evaluate to boolean 1 (true) or 0 (false).'
    ]
  },

  // SLIDE 20: LOGICAL & BITWISE OPERATORS
  {
    id: 'cpp-slide20',
    slideNum: 20,
    totalSlides: 45,
    type: 'single_topic',
    moduleTag: 'Logic & Bits',
    title: 'Logical & Bitwise Operators',
    topicTitle: 'Boolean decision chains and direct bit-level manipulation',
    bullets: [
      'Logical AND (&&): True only if BOTH conditions are true e.g. (age >= 18 && hasID == 1).',
      'Logical OR (||): True if AT LEAST ONE condition is true e.g. (isWeekend || isHoliday).',
      'Logical NOT (!): Inverts boolean condition e.g. !(passed).',
      'Bitwise Operators: & (AND), | (OR), ^ (XOR), ~ (NOT), << (Left Shift), >> (Right Shift).',
      'Bitwise Shift: 5 << 1 shifts binary bits left by 1 position (multiplies by 2).'
    ]
  },

  // SLIDE 21: INCREMENT & DECREMENT
  {
    id: 'cpp-slide21',
    slideNum: 21,
    totalSlides: 45,
    type: 'single_topic',
    moduleTag: 'Increment Logic',
    title: 'Pre-Increment vs Post-Increment (++i vs i++)',
    topicTitle: 'Order of evaluation in increment and assignment expressions',
    bullets: [
      'Pre-Increment (++i): Increments variable value FIRST, then returns the new incremented value in expression.',
      'Post-Increment (i++): Returns current variable value in expression FIRST, then increments variable value afterwards.',
      'Example: int x = 5; int y = ++x; // x is 6, y is 6',
      'Example: int x = 5; int y = x++; // y is 5, x becomes 6',
      'Compound Assignment: x += 5 is shorthand equivalent for x = x + 5;'
    ]
  },

  // SLIDE 22: SECTION BREAK 5
  {
    id: 'cpp-slide22',
    slideNum: 22,
    totalSlides: 45,
    type: 'section_break',
    sectionNum: 'PART 5',
    title: 'Control Flow & Decision Making',
    description: 'Branching execution paths using if-else, switch-case, and ternary expressions.'
  },

  // SLIDE 23: SELECTION STATEMENTS
  {
    id: 'cpp-slide23',
    slideNum: 23,
    totalSlides: 45,
    type: 'single_topic',
    moduleTag: 'Conditionals',
    title: 'Selection Statements: if, if-else, else-if',
    topicTitle: 'Executing specific blocks of code based on dynamic boolean conditions',
    bullets: [
      'if Statement: Executes enclosed block only when specified condition evaluates to true (non-zero).',
      'if-else Statement: Offers alternate branch when condition evaluates to false.',
      'else-if Ladder: Evaluates multiple mutually exclusive conditions sequentially top to bottom.',
      'Short-Circuit Evaluation: In (A && B), if A is false, B is never evaluated!'
    ]
  },

  // SLIDE 24: THE SWITCH-CASE SELECTOR
  {
    id: 'cpp-slide24',
    slideNum: 24,
    totalSlides: 45,
    type: 'single_topic',
    moduleTag: 'Switch-Case',
    title: 'The switch-case Multi-way Branch',
    topicTitle: 'Efficient multi-value comparison for discrete integer or character constants',
    bullets: [
      'Evaluates expression against discrete integral constant case values.',
      'break Statement: CRITICAL! Exits the switch block. Without break, execution "falls through" into subsequent cases!',
      'default Case: Optional catch-all block executed if no case matches.',
      'Constraint: Switch expression must evaluate to integer, char, or enum (no floating point or string allowed in C/C++ switch!).'
    ]
  },

  // SLIDE 25: TERNARY CONDITIONAL OPERATOR
  {
    id: 'cpp-slide25',
    slideNum: 25,
    totalSlides: 45,
    type: 'single_topic',
    moduleTag: 'Short Hand',
    title: 'The Ternary Operator ( condition ? expr1 : expr2 )',
    topicTitle: 'Compact inline syntax for 2-way conditional assignment',
    bullets: [
      'Syntax: result = (condition) ? value_if_true : value_if_false;',
      'Example: int maxVal = (a > b) ? a : b;',
      'Improves readability for simple single-line conditional assignments.',
      'Can be nested, but over-nesting reduces code clarity.'
    ]
  },

  // SLIDE 26: SECTION BREAK 6
  {
    id: 'cpp-slide26',
    slideNum: 26,
    totalSlides: 45,
    type: 'section_break',
    sectionNum: 'PART 6',
    title: 'Loops & Iteration',
    description: 'Repeating execution blocks efficiently with for, while, and do-while loops.'
  },

  // SLIDE 27: FOR LOOPS
  {
    id: 'cpp-slide27',
    slideNum: 27,
    totalSlides: 45,
    type: 'single_topic',
    moduleTag: 'Loops',
    title: 'Counter-Controlled for Loops',
    topicTitle: 'Ideal when the exact number of iterations is known before loop execution',
    bullets: [
      'Syntax: for (initialization; condition; update) { // body }',
      'Step 1: Initialization runs once at start (e.g. int i = 0;).',
      'Step 2: Condition is evaluated before each iteration (e.g. i < 10;).',
      'Step 3: Loop body executes if condition is true.',
      'Step 4: Update step executes (e.g. i++) and jumps back to Step 2.'
    ]
  },

  // SLIDE 28: WHILE VS DO-WHILE LOOPS
  {
    id: 'cpp-slide28',
    slideNum: 28,
    totalSlides: 45,
    type: 'versus',
    moduleTag: 'Loop Comparison',
    title: 'while vs do-while Loops',
    topicTitle: 'Entry-controlled vs exit-controlled iteration loops',
    versusLeft: {
      title: 'while Loop (Entry-Controlled)',
      bullets: [
        'Condition evaluated BEFORE loop body runs',
        'If condition is false initially, loop body executes 0 times!',
        'Syntax: while (condition) { ... }',
        'Best for indefinite loops waiting on user input or flags'
      ]
    },
    versusRight: {
      title: 'do-while Loop (Exit-Controlled)',
      bullets: [
        'Condition evaluated AFTER loop body runs',
        'Guaranteed to execute AT LEAST ONCE regardless of condition!',
        'Syntax: do { ... } while (condition);',
        'Best for interactive menus where prompt must show once'
      ]
    }
  },

  // SLIDE 29: LOOP JUMP CONTROL
  {
    id: 'cpp-slide29',
    slideNum: 29,
    totalSlides: 45,
    type: 'single_topic',
    moduleTag: 'Loop Jump',
    title: 'Loop Jump Control: break & continue',
    topicTitle: 'Altering loop iteration order dynamically',
    bullets: [
      'break Statement: Immediately terminates innermost loop and transfers control past loop block.',
      'continue Statement: Skips remaining statements in current iteration and jumps directly to update step.',
      'Nested Loops: Loops placed inside another loop e.g. for outer loop, for inner loop (used for 2D grids).'
    ]
  },

  // SLIDE 30: INTERACTIVE EXERCISE 3: PATTERN GENERATOR LOOP DEMO
  {
    id: 'cpp-slide30',
    slideNum: 30,
    totalSlides: 45,
    type: 'cpp_exercise',
    moduleTag: 'Interactive Demo #3',
    title: 'Interactive Demo: Star Pattern Generator Loop',
    exercise: {
      id: 'ex3_loop',
      challengeTitle: 'Demo 3: Nested For-Loops in C++',
      instructions: 'Click Run Program to watch nested loops generate a clean 5-row star right-triangle pattern!',
      initialCode: `#include <iostream>
using namespace std;

int main() {
    int rows = 5;
    for (int i = 1; i <= rows; i++) {
        for (int j = 1; j <= i; j++) {
            cout << "* ";
        }
        cout << "\\n";
    }
    return 0;
}`,
      language: 'cpp',
      expectedOutputSubstring: '*',
      hint: 'Outer loop manages rows, inner loop prints the stars on each line.',
      solutionCode: `#include <iostream>
using namespace std;

int main() {
    int rows = 5;
    for (int i = 1; i <= rows; i++) {
        for (int j = 1; j <= i; j++) {
            cout << "* ";
        }
        cout << "\\n";
    }
    return 0;
}`
    }
  },

  // SLIDE 31: SECTION BREAK 7
  {
    id: 'cpp-slide31',
    slideNum: 31,
    totalSlides: 45,
    type: 'section_break',
    sectionNum: 'PART 7',
    title: 'Functions & Memory Stack',
    description: 'Modular code organization, function prototypes, and parameter passing mechanisms.'
  },

  // SLIDE 32: FUNCTION ANATOMY & PROTOTYPES
  {
    id: 'cpp-slide32',
    slideNum: 32,
    totalSlides: 45,
    type: 'single_topic',
    moduleTag: 'Functions',
    title: 'Function Anatomy & Prototypes',
    topicTitle: 'Modular reusable code blocks with input arguments and return values',
    bullets: [
      'Function Prototype (Declaration): Tells compiler function signature before main() e.g. int add(int a, int b);',
      'Function Definition: Contains actual implementation body.',
      'Return Type: Data type returned by function e.g. void (no return), int, double.',
      'Parameters: Variables declared in function header receiving incoming arguments.'
    ]
  },

  // SLIDE 33: PASS-BY-VALUE VS PASS-BY-REFERENCE
  {
    id: 'cpp-slide33',
    slideNum: 33,
    totalSlides: 45,
    type: 'comparison',
    moduleTag: 'Parameter Passing',
    title: 'Pass-by-Value vs Pass-by-Reference',
    topicTitle: 'How memory arguments are received by functions',
    versusLeft: {
      title: 'Pass-by-Value (Default)',
      bullets: [
        'Creates a independent COPY of argument in function stack frame',
        'Modifications inside function DO NOT affect original variable in caller!',
        'Safer, but incurs memory copy overhead for large objects',
        'Syntax: void modify(int x) { x = 99; }'
      ]
    },
    versusRight: {
      title: 'Pass-by-Reference (& / Pointers)',
      bullets: [
        'Passes actual memory ADDRESS or reference alias of caller variable',
        'Modifications inside function DIRECTLY alter original caller variable!',
        'No memory copy overhead',
        'Syntax (C++): void modify(int &x) { x = 99; }'
      ]
    }
  },

  // SLIDE 34: RECURSION & CALL STACK
  {
    id: 'cpp-slide34',
    slideNum: 34,
    totalSlides: 45,
    type: 'single_topic',
    moduleTag: 'Recursion',
    title: 'Recursion & Function Call Stack',
    topicTitle: 'Functions invoking themselves to solve repetitive sub-problems',
    bullets: [
      'Base Case: Mandatory termination condition that stops recursive calls.',
      'Recursive Step: Function calling itself with reduced problem size e.g. return n * factorial(n - 1);',
      'Stack Overflow Error: Occurs if base case is missing, consuming all available stack RAM frames.'
    ]
  },

  // SLIDE 35: SECTION BREAK 8
  {
    id: 'cpp-slide35',
    slideNum: 35,
    totalSlides: 45,
    type: 'section_break',
    sectionNum: 'PART 8',
    title: 'Arrays, Strings & C-Strings',
    description: 'Storing sequential element collections and handling text string memory buffers.'
  },

  // SLIDE 36: ARRAY DECLARATION & INDEXING
  {
    id: 'cpp-slide36',
    slideNum: 36,
    totalSlides: 45,
    type: 'single_topic',
    moduleTag: 'Arrays',
    title: 'Array Allocation & Zero-Based Indexing',
    topicTitle: 'Contiguous memory block holding elements of identical data type',
    bullets: [
      'Declaration: int scores[5] = {90, 85, 88, 92, 78};',
      'Zero-Based Indexing: First element is at index [0], last element at [size - 1].',
      'Contiguous RAM Storage: Elements are stored side-by-side in memory.',
      '2D Arrays (Matrices): int matrix[3][3] representing 3 rows by 3 columns.'
    ]
  },

  // SLIDE 37: C-STRINGS VS CPP STD::STRING
  {
    id: 'cpp-slide37',
    slideNum: 37,
    totalSlides: 45,
    type: 'versus',
    moduleTag: 'String Handling',
    title: 'C-Strings (char[]) vs C++ std::string',
    topicTitle: 'Comparing low-level character arrays to high-level string objects',
    versusLeft: {
      title: 'C-Strings (char array)',
      bullets: [
        'Null-terminated character array ending with \\0 sentinel byte',
        'Requires string.h library (strlen, strcpy, strcat, strcmp)',
        'Fixed buffer size — risk of buffer overflow security bugs',
        'Example: char name[20] = "Alice";'
      ]
    },
    versusRight: {
      title: 'C++ std::string Object',
      bullets: [
        'Dynamic auto-resizing string object class from <string>',
        'Supports intuitive + concatenation operator (s1 + s2)',
        'Built-in safety methods e.g., s.length(), s.find(), s.substr()',
        'Example: string name = "Alice";'
      ]
    }
  },

  // SLIDE 38: SECTION BREAK 9
  {
    id: 'cpp-slide38',
    slideNum: 38,
    totalSlides: 45,
    type: 'section_break',
    sectionNum: 'PART 9',
    title: 'Pointers & Dynamic Memory',
    description: 'Direct RAM address manipulation, dereferencing, and heap allocation.'
  },

  // SLIDE 39: POINTERS & MEMORY ADDRESS INSPECTION
  {
    id: 'cpp-slide39',
    slideNum: 39,
    totalSlides: 45,
    type: 'single_topic',
    moduleTag: 'Pointers',
    title: 'Pointers & Memory Dereferencing (* and &)',
    topicTitle: 'Variables that store memory addresses of another variable',
    bullets: [
      'Address-of Operator (&): Retrieves physical RAM address of a variable e.g. &num.',
      'Pointer Declaration (*): Declares variable as pointer e.g. int *ptr = &num;',
      'Dereference Operator (*): Accesses or modifies the value stored at pointer address e.g. *ptr = 99;',
      'Null Pointer (NULL / nullptr): Pointer pointing to address 0 (unassigned safety state).'
    ],
    keyInsight: {
      title: 'Memory Pointer Key',
      text: 'ptr holds the ADDRESS (0x7ffde5a12b40). *ptr holds the VALUE inside that address (42)!'
    }
  },

  // SLIDE 40: DYNAMIC MEMORY ALLOCATION
  {
    id: 'cpp-slide40',
    slideNum: 40,
    totalSlides: 45,
    type: 'comparison',
    moduleTag: 'Heap Allocation',
    title: 'Dynamic Heap Memory: malloc/free vs new/delete',
    topicTitle: 'Allocating runtime memory on the Heap rather than Stack',
    versusLeft: {
      title: 'C Heap Allocation (stdlib.h)',
      bullets: [
        'int *arr = (int*) malloc(5 * sizeof(int));',
        'Allocates raw uninitialized byte block on heap',
        'Must manually release with free(arr);',
        'Memory leak occurs if free() is omitted!'
      ]
    },
    versusRight: {
      title: 'C++ Heap Allocation (new/delete)',
      bullets: [
        'int *arr = new int[5];',
        'Allocates heap memory and calls constructors automatically',
        'Must release array memory with delete[] arr;',
        'Throws std::bad_alloc exception on out-of-memory'
      ]
    }
  },

  // SLIDE 41: INTERACTIVE EXERCISE 4: POINTER ADDRESS & SWAP DEMO
  {
    id: 'cpp-slide41',
    slideNum: 41,
    totalSlides: 45,
    type: 'cpp_exercise',
    moduleTag: 'Interactive Demo #4',
    title: 'Interactive Demo: Pointer Memory Swap Function',
    exercise: {
      id: 'ex4_pointer',
      challengeTitle: 'Demo 4: Swapping Values with Pointers (*a, *b)',
      instructions: 'Click Run Program to see how passing memory addresses (&x, &y) lets a function swap variable values in-place!',
      initialCode: `#include <stdio.h>

void swapValues(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main() {
    int x = 10, y = 20;
    printf("Before Swap: x=%d, y=%d\\n", x, y);
    swapValues(&x, &y);
    printf("After Swap : x=%d, y=%d\\n", x, y);
    return 0;
}`,
      language: 'c',
      expectedOutputSubstring: 'After Swap',
      hint: '& passes the address, * dereferences and alters the original variable.',
      solutionCode: `#include <stdio.h>

void swapValues(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main() {
    int x = 10, y = 20;
    printf("Before Swap: x=%d, y=%d\\n", x, y);
    swapValues(&x, &y);
    printf("After Swap : x=%d, y=%d\\n", x, y);
    return 0;
}`
    }
  },

  // SLIDE 42: SECTION BREAK 10
  {
    id: 'cpp-slide42',
    slideNum: 42,
    totalSlides: 45,
    type: 'section_break',
    sectionNum: 'PART 10',
    title: 'Structures & C++ OOP Classes',
    description: 'Grouping custom data types with struct and object-oriented class encapsulation.'
  },

  // SLIDE 43: C STRUCT VS CPP CLASS
  {
    id: 'cpp-slide43',
    slideNum: 43,
    totalSlides: 45,
    type: 'comparison',
    moduleTag: 'OOP & Structs',
    title: 'C struct vs C++ Object-Oriented Class',
    topicTitle: 'User-defined composite types bundling attributes and behavior methods',
    versusLeft: {
      title: 'C Language struct',
      bullets: [
        'Groups multiple variables into single compound data record',
        'Members are PUBLIC by default',
        'Cannot contain methods/functions directly inside struct (in standard C)',
        'Example: struct Student { int id; float gpa; };'
      ]
    },
    versusRight: {
      title: 'C++ Class (OOP Paradigm)',
      bullets: [
        'Bundles data attributes AND member methods together',
        'Members are PRIVATE by default (Encapsulation)',
        'Access Specifiers: public, private, protected',
        'Constructors initialize object state upon instantiation'
      ]
    }
  },

  // SLIDE 44: INTERACTIVE EXERCISE 5: CPP OOP CLASS DEMO
  {
    id: 'cpp-slide44',
    slideNum: 44,
    totalSlides: 45,
    type: 'cpp_exercise',
    moduleTag: 'Interactive Demo #5',
    title: 'Interactive Demo: C++ Class & Object Encapsulation',
    exercise: {
      id: 'ex5_oop',
      challengeTitle: 'Demo 5: Object-Oriented Class Methods in C++',
      instructions: 'Click Run Program to see how a Student class bundles attributes (name, score) with an action method displayScore()!',
      initialCode: `#include <iostream>
#include <string>
using namespace std;

class Student {
public:
    string name;
    int score;

    Student(string n, int s) {
        name = n;
        score = s;
    }

    void displayScore() {
        cout << "Student " << name << " Score: " << score << endl;
    }
};

int main() {
    Student s1("Carlos", 98);
    s1.displayScore();
    return 0;
}`,
      language: 'cpp',
      expectedOutputSubstring: 'Student Carlos Score: 98',
      hint: 'Classes combine data and functions into single objects.',
      solutionCode: `#include <iostream>
#include <string>
using namespace std;

class Student {
public:
    string name;
    int score;

    Student(string n, int s) {
        name = n;
        score = s;
    }

    void displayScore() {
        cout << "Student " << name << " Score: " << score << endl;
    }
};

int main() {
    Student s1("Carlos", 98);
    s1.displayScore();
    return 0;
}`
    }
  },

  // SLIDE 45: FULL COMPILER PLAYGROUND
  {
    id: 'cpp-slide45',
    slideNum: 45,
    totalSlides: 45,
    type: 'cpp_compiler',
    moduleTag: 'C / C++ Open Sandbox',
    title: 'Live C & C++ Compiler & Executor Sandbox',
    subtitle: 'Free-form interactive compiler to test any C or C++ program code, escape sequences, pointers, and memory operations!'
  }
];
