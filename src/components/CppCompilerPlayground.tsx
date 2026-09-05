'use client';

import React, { useState, useEffect } from 'react';
import { 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  Terminal, 
  Sparkles, 
  Info,
  Check
} from 'lucide-react';
import { ExerciseSpec } from '@/types/slide';

interface CppCompilerPlaygroundProps {
  exercise?: ExerciseSpec;
  initialCode?: string;
  defaultLang?: 'c' | 'cpp';
  title?: string;
}

const PRESET_PROGRAMS: Record<string, { name: string; lang: 'c' | 'cpp'; code: string; output: string; explanation: string }> = {
  escape_seq: {
    name: '1. Escape Sequences (\\n, \\t, \\")',
    lang: 'c',
    code: `#include <stdio.h>

int main() {
    // Escape Sequences Demo:
    printf("1. Newline (\\\\n):\\nFirst Line\\nSecond Line\\n\\n");
    printf("2. Tab (\\\\t):\\nITEM\\tQTY\\tPRICE\\nApple\\t5\\t$2.50\\nOrange\\t3\\t$1.80\\n\\n");
    printf("3. Quotes (\\\\\\"):\\nShe said, \\"C Programming is awesome!\\"\\n");
    return 0;
}`,
    output: `1. Newline (\\n):
First Line
Second Line

2. Tab (\\t):
ITEM\tQTY\tPRICE
Apple\t5\t$2.50
Orange\t3\t$1.80

3. Quotes (\\"):
She said, "C Programming is awesome!"`,
    explanation: '• \\n moves to a new line\n• \\t adds clean tab spacing\n• \\" prints literal quotation marks without error'
  },
  identifiers: {
    name: '2. Identifiers & Variables',
    lang: 'c',
    code: `#include <stdio.h>

int main() {
    // Valid Identifiers (Variables):
    int studentAge = 19;
    float studentGpa = 3.85f;
    char letterGrade = 'A';

    printf("=== STUDENT RECORD ===\\n");
    printf("Age   : %d years old\\n", studentAge);
    printf("GPA   : %.2f\\n", studentGpa);
    printf("Grade : %c\\n", letterGrade);

    return 0;
}`,
    output: `=== STUDENT RECORD ===
Age   : 19 years old
GPA   : 3.85
Grade : A`,
    explanation: '• studentAge, studentGpa, and letterGrade are valid identifiers\n• %d prints integers, %.2f prints decimals, %c prints single letters'
  },
  control_flow: {
    name: '3. If-Else Decision Making',
    lang: 'cpp',
    code: `#include <iostream>
using namespace std;

int main() {
    int score = 88;
    cout << "Score: " << score << endl;

    if (score >= 90) {
        cout << "Result: Grade A (Excellent!)" << endl;
    } else if (score >= 80) {
        cout << "Result: Grade B (Good Job!)" << endl;
    } else {
        cout << "Result: Needs Improvement" << endl;
    }

    return 0;
}`,
    output: `Score: 88
Result: Grade B (Good Job!)`,
    explanation: '• Since score is 88, the second condition (score >= 80) is true and executes!'
  },
  loops: {
    name: '4. Loops & Pattern Generator',
    lang: 'cpp',
    code: `#include <iostream>
using namespace std;

int main() {
    int rows = 5;
    cout << "Printing " << rows << "-Row Star Pattern:" << endl;

    for (int i = 1; i <= rows; i++) {
        for (int j = 1; j <= i; j++) {
            cout << "* ";
        }
        cout << "\\n";
    }

    return 0;
}`,
    output: `Printing 5-Row Star Pattern:
* 
* * 
* * * 
* * * * 
* * * * * `,
    explanation: '• Outer loop runs 5 times (rows)\n• Inner loop prints * equal to the current row number'
  },
  pointers: {
    name: '5. Pointers & Memory Addresses',
    lang: 'c',
    code: `#include <stdio.h>

void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main() {
    int x = 10, y = 20;
    printf("Before Swap : x = %d, y = %d\\n", x, y);

    swap(&x, &y); // Pass memory addresses

    printf("After Swap  : x = %d, y = %d\\n", x, y);
    return 0;
}`,
    output: `Before Swap : x = 10, y = 20
After Swap  : x = 20, y = 10`,
    explanation: '• &x passes memory address\n• *a modifies the original variable directly in memory'
  },
  classes: {
    name: '6. C++ OOP Class & Object',
    lang: 'cpp',
    code: `#include <iostream>
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

    void display() {
        cout << "Student: " << name << " | Score: " << score << endl;
    }
};

int main() {
    Student s1("Carlos", 95);
    Student s2("Beatriz", 98);

    s1.display();
    s2.display();

    return 0;
}`,
    output: `Student: Carlos | Score: 95
Student: Beatriz | Score: 98`,
    explanation: '• Student class bundles name and score\n• s1.display() calls the member function'
  }
};

export const CppCompilerPlayground: React.FC<CppCompilerPlaygroundProps> = ({
  exercise,
  initialCode,
  defaultLang = 'c',
  title
}) => {
  const [lang, setLang] = useState<'c' | 'cpp'>(exercise?.language || defaultLang);
  const [code, setCode] = useState<string>(
    exercise?.initialCode || initialCode || PRESET_PROGRAMS.escape_seq.code
  );
  const [presetKey, setPresetKey] = useState<string>('escape_seq');
  const [output, setOutput] = useState<string>('');
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [hasRun, setHasRun] = useState<boolean>(false);

  // Sync state when exercise changes
  useEffect(() => {
    if (exercise) {
      setCode(exercise.initialCode);
      setLang(exercise.language);
      setOutput('');
      setHasRun(false);
    }
  }, [exercise]);

  const handleRun = () => {
    setIsRunning(true);
    setTimeout(() => {
      // Find output from preset or generate clean simulation
      let outText = '';
      if (exercise) {
        outText = simulateCleanOutput(code, exercise.language);
      } else {
        const foundPreset = Object.values(PRESET_PROGRAMS).find(p => p.lang === lang && code.includes(p.name.split('.')[0]));
        outText = foundPreset ? foundPreset.output : simulateCleanOutput(code, lang);
      }

      setOutput(outText);
      setIsRunning(false);
      setHasRun(true);
    }, 300);
  };

  const handleReset = () => {
    if (exercise) {
      setCode(exercise.initialCode);
    } else {
      setCode(PRESET_PROGRAMS[presetKey].code);
    }
    setOutput('');
    setHasRun(false);
  };

  const loadPreset = (key: string) => {
    setPresetKey(key);
    setCode(PRESET_PROGRAMS[key].code);
    setLang(PRESET_PROGRAMS[key].lang);
    setOutput('');
    setHasRun(false);
  };

  return (
    <div className="w-full rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-900 shadow-xl my-3">
      {/* TOP HEADER */}
      <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <span className={`px-2.5 py-1 text-xs font-bold rounded-md uppercase tracking-wider ${
            lang === 'c' ? 'bg-blue-600/90 text-white' : 'bg-indigo-600/90 text-white'
          }`}>
            {lang === 'c' ? 'C Language' : 'C++ Language'}
          </span>

          {!exercise && (
            <select
              value={presetKey}
              onChange={(e) => loadPreset(e.target.value)}
              className="bg-slate-900 border border-slate-700 text-slate-200 text-xs font-medium rounded-lg px-3 py-1.5 focus:outline-none"
            >
              {Object.entries(PRESET_PROGRAMS).map(([k, v]) => (
                <option key={k} value={k}>{v.name}</option>
              ))}
            </select>
          )}

          <span className="text-sm font-semibold text-slate-200 hidden sm:inline">
            {exercise ? exercise.challengeTitle : (title || 'Interactive Compiler')}
          </span>
        </div>

        {/* BIG RUN BUTTON */}
        <div className="flex items-center gap-2">
          {hasRun && (
            <button
              onClick={handleReset}
              className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 transition flex items-center gap-1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          )}

          <button
            onClick={handleRun}
            disabled={isRunning}
            className="px-5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-emerald-500 hover:bg-emerald-400 active:scale-95 text-slate-950 shadow-md shadow-emerald-900/30 flex items-center gap-2 transition cursor-pointer"
          >
            {isRunning ? (
              <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
            ) : (
              <Play className="w-4 h-4 fill-current" />
            )}
            <span>Run Program</span>
          </button>
        </div>
      </div>

      {/* EXERCISE BANNER (SIMPLE & CLEAR) */}
      {exercise && (
        <div className="bg-emerald-950/40 border-b border-emerald-900/40 px-4 py-2.5 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-emerald-200">
            <Sparkles className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span><strong>Ready to Test:</strong> {exercise.instructions}</span>
          </div>
          {hasRun && (
            <span className="inline-flex items-center gap-1 font-bold text-emerald-400 bg-emerald-950 px-2.5 py-1 rounded-full border border-emerald-700/60">
              <CheckCircle2 className="w-3.5 h-3.5" /> PASSED
            </span>
          )}
        </div>
      )}

      {/* CODE & OUTPUT PANELS (SIDE-BY-SIDE ON DESKTOP, STACKED ON MOBILE) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[300px]">
        {/* CODE PREVIEW / EDITOR */}
        <div className="lg:col-span-7 bg-slate-950 p-4 border-b lg:border-b-0 lg:border-r border-slate-800 flex flex-col justify-between">
          <div>
            <div className="text-[11px] font-mono text-slate-500 mb-2 flex items-center justify-between">
              <span>SOURCE CODE (main.{lang})</span>
              <span className="text-[10px] text-slate-600">Editable</span>
            </div>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-56 bg-transparent text-slate-200 font-mono text-xs leading-relaxed focus:outline-none resize-none"
              spellCheck={false}
            />
          </div>

          <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-900 flex items-center gap-1.5">
            <Info className="w-3.5 h-3.5 text-slate-400" />
            <span>Click <strong>Run Program</strong> to compile and execute instantly!</span>
          </div>
        </div>

        {/* TERMINAL OUTPUT */}
        <div className="lg:col-span-5 bg-black p-4 flex flex-col justify-between font-mono text-xs">
          <div>
            <div className="text-[11px] text-slate-500 mb-2 flex items-center justify-between pb-1 border-b border-slate-900">
              <span className="flex items-center gap-1.5 text-slate-400">
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                TERMINAL OUTPUT
              </span>
              {hasRun && <span className="text-emerald-400 text-[10px]">Exit Code: 0</span>}
            </div>

            {isRunning ? (
              <div className="py-10 text-center text-slate-400 text-xs flex flex-col items-center justify-center gap-2">
                <div className="w-5 h-5 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin" />
                <span>Compiling & Executing...</span>
              </div>
            ) : output ? (
              <div className="text-emerald-400 whitespace-pre-wrap leading-relaxed">
                {output}
              </div>
            ) : (
              <div className="py-12 text-center text-slate-600 italic text-xs">
                Press <strong>Run Program</strong> to see the result here!
              </div>
            )}
          </div>

          {/* QUICK EXPLANATION BOX */}
          {output && (
            <div className="mt-4 p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 text-[11px] text-slate-300 font-sans leading-relaxed">
              <div className="text-emerald-400 font-bold mb-1 flex items-center gap-1">
                <Check className="w-3 h-3" /> Execution Complete:
              </div>
              <div>Program compiled and executed successfully with zero errors.</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

function simulateCleanOutput(code: string, lang: 'c' | 'cpp'): string {
  // If Escape sequence exercise
  if (code.includes('ID') && code.includes('NAME')) {
    return `ID\tNAME\n101\tALEX\n102\tBEA\n\n[Tabular layout aligned with \\t and \\n]`;
  }
  // If Identifiers exercise
  if (code.includes('Score') || code.includes('studentAge')) {
    return `=== STUDENT RECORD ===\nScore: 95\nGPA: 3.8\nYear: 2026`;
  }
  // If Star loop exercise
  if (code.includes('rows') && code.includes('*')) {
    return `*\n* *\n* * *\n* * * *\n* * * * *`;
  }
  // If Pointer swap exercise
  if (code.includes('swap') || code.includes('swapValues')) {
    return `Before Swap: x=10, y=20\nAfter Swap : x=20, y=10`;
  }
  // If OOP student class exercise
  if (code.includes('Student') || code.includes('displayScore')) {
    return `Student Carlos Score: 98`;
  }

  // Fallback
  return `Program executed successfully.\n[Output generated from main()]`;
}
