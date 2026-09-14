'use client';

import React, { useState, useMemo } from 'react';
import { 
  Database, 
  Terminal, 
  Play, 
  RotateCcw, 
  Check, 
  Copy, 
  Layers, 
  ShieldAlert, 
  ShieldCheck, 
  ArrowRight, 
  ArrowLeftRight, 
  Table as TableIcon, 
  Key, 
  Link as LinkIcon, 
  AlertTriangle, 
  Server, 
  Cpu, 
  Sparkles, 
  CheckCircle2, 
  XCircle, 
  FileCode, 
  Sliders, 
  Search, 
  Filter, 
  Eye, 
  Activity, 
  Zap, 
  Box, 
  Info,
  DollarSign,
  Lock,
  Unlock,
  AlertCircle
} from 'lucide-react';

// ============================================================================
// 1. INTERACTIVE SQL CONSOLE SIMULATOR
// ============================================================================
interface TableRecord {
  [key: string]: any;
}

const SAMPLE_DATABASE: Record<string, TableRecord[]> = {
  students: [
    { student_id: 1001, first_name: 'Juan', last_name: 'Dela Cruz', age: 20, program: 'BSIT', gpa: 1.45 },
    { student_id: 1002, first_name: 'Maria', last_name: 'Santos', age: 19, program: 'BSCS', gpa: 1.25 },
    { student_id: 1003, first_name: 'Carlo', last_name: 'Reyes', age: 21, program: 'BSIT', gpa: 1.75 },
    { student_id: 1004, first_name: 'Angela', last_name: 'Cruz', age: 20, program: 'BSIS', gpa: 1.50 },
    { student_id: 1005, first_name: 'Mark', last_name: 'Garcia', age: 22, program: 'BSCS', gpa: 2.10 },
    { student_id: 1006, first_name: 'Bea', last_name: 'Flores', age: 19, program: 'BSIT', gpa: 1.30 },
  ],
  courses: [
    { course_id: 'CS101', course_name: 'Introduction to Computing', credits: 3 },
    { course_id: 'DB101', course_name: 'Fundamentals of Database', credits: 3 },
    { course_id: 'WD101', course_name: 'Web Development', credits: 3 },
    { course_id: 'NW101', course_name: 'Data Communications & Networking', credits: 3 },
  ],
  enrollments: [
    { enrollment_id: 1, student_id: 1001, course_id: 'DB101', semester: '1st Sem 2026', grade: 1.50 },
    { enrollment_id: 2, student_id: 1001, course_id: 'WD101', semester: '1st Sem 2026', grade: 1.75 },
    { enrollment_id: 3, student_id: 1002, course_id: 'DB101', semester: '1st Sem 2026', grade: 1.25 },
    { enrollment_id: 4, student_id: 1003, course_id: 'CS101', semester: '1st Sem 2026', grade: 2.00 },
    { enrollment_id: 5, student_id: 1004, course_id: 'NW101', semester: '1st Sem 2026', grade: 1.50 },
  ],
  products: [
    { product_id: 1, product_name: 'Laptop Stand Pro', category: 'Accessories', price: 1250, stock: 35 },
    { product_id: 2, product_name: 'Mechanical Keyboard RGB', category: 'Peripherals', price: 3450, stock: 18 },
    { product_id: 3, product_name: 'Wireless Ergonomic Mouse', category: 'Peripherals', price: 1850, stock: 42 },
    { product_id: 4, product_name: 'USB-C Multiport Hub', category: 'Accessories', price: 890, stock: 60 },
    { product_id: 5, product_name: '27-inch 4K IPS Monitor', category: 'Monitors', price: 16500, stock: 8 },
    { product_id: 6, product_name: 'Noise Cancelling Headset', category: 'Audio', price: 4200, stock: 22 },
  ]
};

export const SqlConsoleSimulator: React.FC = () => {
  const [query, setQuery] = useState<string>('SELECT * FROM students WHERE age >= 20 ORDER BY last_name ASC;');
  const [activePreset, setActivePreset] = useState<number>(0);
  const [copied, setCopied] = useState<boolean>(false);
  const [executionTime, setExecutionTime] = useState<number>(1.2);

  const presets = [
    {
      title: 'Filter & Sort',
      sql: 'SELECT * FROM students WHERE age >= 20 ORDER BY last_name ASC;',
      desc: 'Retrieves students aged 20 and above, ordered alphabetically by last name'
    },
    {
      title: 'Projection (Columns)',
      sql: 'SELECT first_name, last_name, program FROM students WHERE program = \'BSIT\';',
      desc: 'Projects specific columns only for students in the BSIT program'
    },
    {
      title: 'Aggregation (AVG/COUNT)',
      sql: 'SELECT COUNT(*) AS total_products, AVG(price) AS average_price FROM products;',
      desc: 'Computes total inventory items and average price across products'
    },
    {
      title: 'Range Filter (BETWEEN)',
      sql: 'SELECT product_name, price, stock FROM products WHERE price BETWEEN 1000 AND 5000;',
      desc: 'Finds products priced between ₱1,000 and ₱5,000'
    },
    {
      title: 'Relational INNER JOIN',
      sql: 'SELECT students.first_name, students.last_name, courses.course_name FROM students INNER JOIN enrollments ON students.student_id = enrollments.student_id INNER JOIN courses ON enrollments.course_id = courses.course_id;',
      desc: 'Joins 3 tables (students, enrollments, courses) to show enrolled course titles'
    }
  ];

  const handleSelectPreset = (idx: number) => {
    setActivePreset(idx);
    setQuery(presets[idx].sql);
    setExecutionTime(Number((Math.random() * 1.5 + 0.6).toFixed(2)));
  };

  // Safe simulated query processor
  const queryResult = useMemo(() => {
    const q = query.trim().replace(/;+$/, '');
    const lower = q.toLowerCase();

    // 1. Relational 3-table join simulation
    if (lower.includes('join') && lower.includes('enrollments') && lower.includes('courses')) {
      const rows = [
        { first_name: 'Juan', last_name: 'Dela Cruz', course_name: 'Fundamentals of Database' },
        { first_name: 'Juan', last_name: 'Dela Cruz', course_name: 'Web Development' },
        { first_name: 'Maria', last_name: 'Santos', course_name: 'Fundamentals of Database' },
        { first_name: 'Carlo', last_name: 'Reyes', course_name: 'Introduction to Computing' },
        { first_name: 'Angela', last_name: 'Cruz', course_name: 'Data Communications & Networking' }
      ];
      return { columns: ['first_name', 'last_name', 'course_name'], rows, totalRows: rows.length };
    }

    // 2. Aggregations on products
    if (lower.includes('count(*)') && lower.includes('avg(price)')) {
      const avg = SAMPLE_DATABASE.products.reduce((acc, cur) => acc + cur.price, 0) / SAMPLE_DATABASE.products.length;
      return {
        columns: ['total_products', 'average_price'],
        rows: [{ total_products: SAMPLE_DATABASE.products.length, average_price: `₱${avg.toFixed(2)}` }],
        totalRows: 1
      };
    }

    // 3. Products range filter
    if (lower.includes('from products') && lower.includes('between')) {
      const rows = SAMPLE_DATABASE.products
        .filter(p => p.price >= 1000 && p.price <= 5000)
        .map(p => ({ product_name: p.product_name, price: `₱${p.price.toLocaleString()}`, stock: p.stock }));
      return { columns: ['product_name', 'price', 'stock'], rows, totalRows: rows.length };
    }

    // 4. Projection BSIT
    if (lower.includes('from students') && lower.includes("program = 'bsit'")) {
      const rows = SAMPLE_DATABASE.students
        .filter(s => s.program === 'BSIT')
        .map(s => ({ first_name: s.first_name, last_name: s.last_name, program: s.program }));
      return { columns: ['first_name', 'last_name', 'program'], rows, totalRows: rows.length };
    }

    // 5. Default students filter
    if (lower.includes('from students')) {
      let filtered = [...SAMPLE_DATABASE.students];
      if (lower.includes('age >= 20')) {
        filtered = filtered.filter(s => s.age >= 20);
      } else if (lower.includes('age > 20')) {
        filtered = filtered.filter(s => s.age > 20);
      }
      if (lower.includes('order by last_name asc')) {
        filtered.sort((a, b) => a.last_name.localeCompare(b.last_name));
      }
      return {
        columns: ['student_id', 'first_name', 'last_name', 'age', 'program', 'gpa'],
        rows: filtered,
        totalRows: filtered.length
      };
    }

    // 6. Generic products fallback
    if (lower.includes('from products')) {
      return {
        columns: ['product_id', 'product_name', 'category', 'price', 'stock'],
        rows: SAMPLE_DATABASE.products,
        totalRows: SAMPLE_DATABASE.products.length
      };
    }

    // 7. Generic courses fallback
    if (lower.includes('from courses')) {
      return {
        columns: ['course_id', 'course_name', 'credits'],
        rows: SAMPLE_DATABASE.courses,
        totalRows: SAMPLE_DATABASE.courses.length
      };
    }

    // Fallback
    return {
      columns: ['student_id', 'first_name', 'last_name', 'age', 'program'],
      rows: SAMPLE_DATABASE.students.slice(0, 4),
      totalRows: 4
    };
  }, [query]);

  const handleCopy = () => {
    navigator.clipboard.writeText(query);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl flex flex-col font-sans text-xs">
      {/* Terminal Title Bar */}
      <div className="bg-slate-950 px-3 py-2 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-slate-400 font-mono text-[11px] ml-2 flex items-center gap-1.5 font-bold">
            <Database className="w-3.5 h-3.5 text-indigo-400" />
            RDBMS Engine Console • MariaDB/PostgreSQL Compatible
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-emerald-400 font-mono bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 rounded-full flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            LIVE SIMULATION
          </span>
        </div>
      </div>

      {/* Preset Query Chips */}
      <div className="bg-slate-900/90 px-3 py-2 border-b border-slate-800 flex items-center gap-1.5 overflow-x-auto scrollbar-none">
        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider whitespace-nowrap mr-1 flex items-center gap-1">
          <Zap className="w-3 h-3 text-amber-400" /> Queries:
        </span>
        {presets.map((preset, idx) => (
          <button
            key={idx}
            onClick={() => handleSelectPreset(idx)}
            className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold whitespace-nowrap transition flex items-center gap-1 border ${
              activePreset === idx
                ? 'bg-indigo-600/20 text-indigo-300 border-indigo-500/40 shadow-sm'
                : 'bg-slate-800/60 text-slate-400 hover:text-slate-200 border-slate-700/60 hover:bg-slate-800'
            }`}
          >
            {preset.title}
          </button>
        ))}
      </div>

      {/* SQL Editor Area */}
      <div className="p-3 bg-slate-950/60 border-b border-slate-800">
        <div className="flex items-center justify-between mb-1 text-[11px] text-slate-400">
          <span className="font-mono flex items-center gap-1 text-slate-300 font-bold">
            <Terminal className="w-3.5 h-3.5 text-indigo-400" /> SQL Statement
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="text-[10px] text-slate-400 hover:text-slate-200 flex items-center gap-1 transition"
            >
              {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
              {copied ? 'Copied' : 'Copy'}
            </button>
            <button
              onClick={() => handleSelectPreset(0)}
              className="text-[10px] text-slate-400 hover:text-slate-200 flex items-center gap-1 transition"
            >
              <RotateCcw className="w-3 h-3" /> Reset
            </button>
          </div>
        </div>
        <div className="relative">
          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-slate-900 border border-slate-700/80 rounded-lg p-2.5 font-mono text-emerald-300 text-xs focus:outline-none focus:border-indigo-500 transition resize-none leading-relaxed"
            rows={2}
            spellCheck={false}
          />
        </div>
        <p className="text-[10px] text-slate-400 mt-1.5 flex items-center gap-1">
          <Info className="w-3 h-3 text-indigo-400 shrink-0" />
          {presets[activePreset]?.desc || 'Custom query execution against in-memory student/product relational schema'}
        </p>
      </div>

      {/* Output Table Result */}
      <div className="p-3 bg-slate-900 flex-grow overflow-x-auto">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-bold text-slate-300 flex items-center gap-1.5">
            <TableIcon className="w-3.5 h-3.5 text-indigo-400" />
            Query Result Set ({queryResult.totalRows} {queryResult.totalRows === 1 ? 'row' : 'rows'})
          </span>
          <span className="text-[10px] text-slate-500 font-mono">
            Execution: {executionTime}ms • status: OK
          </span>
        </div>

        <div className="rounded-lg border border-slate-800 overflow-hidden shadow-sm bg-slate-950">
          <table className="w-full text-left text-[11px]">
            <thead className="bg-slate-800/80 text-slate-300 font-mono text-[10px] uppercase border-b border-slate-700">
              <tr>
                {queryResult.columns.map((col, idx) => (
                  <th key={idx} className="py-2 px-3 font-semibold text-indigo-300">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 font-mono">
              {queryResult.rows.map((row: Record<string, any>, rIdx) => (
                <tr key={rIdx} className="hover:bg-slate-800/40 transition">
                  {queryResult.columns.map((col, cIdx) => (
                    <td key={cIdx} className="py-2 px-3 text-slate-300">
                      {typeof row[col] === 'number' && col.includes('id') ? (
                        <span className="text-amber-400 font-bold">{row[col]}</span>
                      ) : (
                        <span>{String(row[col] ?? '')}</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// 2. WHERE FILTERING & SORTING SANDBOX
// ============================================================================
export const WhereFilterSandbox: React.FC = () => {
  const [minAge, setMinAge] = useState<number>(20);
  const [selectedProgram, setSelectedProgram] = useState<string>('ALL');
  const [searchLetter, setSearchLetter] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<'ASC' | 'DESC'>('ASC');

  const students = [
    { id: 1001, name: 'Juan Dela Cruz', age: 20, program: 'BSIT', city: 'Manila' },
    { id: 1002, name: 'Maria Santos', age: 19, program: 'BSCS', city: 'Quezon City' },
    { id: 1003, name: 'Carlo Reyes', age: 21, program: 'BSIT', city: 'Cebu' },
    { id: 1004, name: 'Angela Cruz', age: 20, program: 'BSIS', city: 'Pasig' },
    { id: 1005, name: 'Mark Garcia', age: 22, program: 'BSCS', city: 'Davao' },
    { id: 1006, name: 'Bea Flores', age: 19, program: 'BSIT', city: 'Makati' },
    { id: 1007, name: 'Danilo Aquino', age: 23, program: 'BSIT', city: 'Baguio' },
  ];

  const filtered = useMemo(() => {
    return students
      .filter((s) => {
        if (s.age < minAge) return false;
        if (selectedProgram !== 'ALL' && s.program !== selectedProgram) return false;
        if (searchLetter && !s.name.toLowerCase().startsWith(searchLetter.toLowerCase())) return false;
        return true;
      })
      .sort((a, b) => {
        return sortOrder === 'ASC' ? a.age - b.age : b.age - a.age;
      });
  }, [minAge, selectedProgram, searchLetter, sortOrder]);

  const generatedSql = useMemo(() => {
    const conditions = [];
    if (minAge > 18) conditions.push(`age >= ${minAge}`);
    if (selectedProgram !== 'ALL') conditions.push(`program = '${selectedProgram}'`);
    if (searchLetter) conditions.push(`name LIKE '${searchLetter}%'`);

    let sql = 'SELECT * FROM students';
    if (conditions.length > 0) {
      sql += `\nWHERE ${conditions.join(' AND ')}`;
    }
    sql += `\nORDER BY age ${sortOrder};`;
    return sql;
  }, [minAge, selectedProgram, searchLetter, sortOrder]);

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl flex flex-col font-sans text-xs">
      <div className="bg-slate-950 px-3 py-2 border-b border-slate-800 flex items-center justify-between">
        <span className="text-slate-300 font-mono text-[11px] font-bold flex items-center gap-1.5">
          <Filter className="w-3.5 h-3.5 text-cyan-400" />
          Interactive WHERE Clause Filter & Sorting Engine
        </span>
        <span className="text-[10px] text-cyan-400 font-mono bg-cyan-950/60 border border-cyan-800/60 px-2 py-0.5 rounded-full">
          {filtered.length} of {students.length} Records Matched
        </span>
      </div>

      {/* Control Knobs */}
      <div className="p-3 bg-slate-950/40 border-b border-slate-800 grid grid-cols-1 sm:grid-cols-4 gap-3">
        {/* Min Age Slider */}
        <div className="flex flex-col gap-1">
          <div className="flex justify-between text-[11px] text-slate-400 font-mono">
            <span>Filter: Age &gt;=</span>
            <span className="text-cyan-400 font-bold">{minAge}</span>
          </div>
          <input
            type="range"
            min={18}
            max={23}
            value={minAge}
            onChange={(e) => setMinAge(Number(e.target.value))}
            className="w-full accent-cyan-500 cursor-pointer"
          />
        </div>

        {/* Program Filter */}
        <div className="flex flex-col gap-1">
          <span className="text-[11px] text-slate-400 font-mono">Program:</span>
          <select
            value={selectedProgram}
            onChange={(e) => setSelectedProgram(e.target.value)}
            className="bg-slate-800 border border-slate-700 text-slate-200 text-xs rounded-lg px-2 py-1 focus:outline-none focus:border-cyan-500"
          >
            <option value="ALL">All Programs</option>
            <option value="BSIT">BSIT</option>
            <option value="BSCS">BSCS</option>
            <option value="BSIS">BSIS</option>
          </select>
        </div>

        {/* LIKE Name Filter */}
        <div className="flex flex-col gap-1">
          <span className="text-[11px] text-slate-400 font-mono">Starts With (LIKE):</span>
          <input
            type="text"
            placeholder="e.g. J, M, C"
            maxLength={2}
            value={searchLetter}
            onChange={(e) => setSearchLetter(e.target.value)}
            className="bg-slate-800 border border-slate-700 text-slate-200 text-xs rounded-lg px-2 py-1 font-mono uppercase focus:outline-none focus:border-cyan-500"
          />
        </div>

        {/* Order By */}
        <div className="flex flex-col gap-1">
          <span className="text-[11px] text-slate-400 font-mono">ORDER BY age:</span>
          <div className="flex rounded-lg overflow-hidden border border-slate-700">
            <button
              onClick={() => setSortOrder('ASC')}
              className={`flex-1 py-1 text-center font-bold text-[10px] transition ${
                sortOrder === 'ASC' ? 'bg-cyan-600 text-white' : 'bg-slate-800 text-slate-400'
              }`}
            >
              ASC ↑
            </button>
            <button
              onClick={() => setSortOrder('DESC')}
              className={`flex-1 py-1 text-center font-bold text-[10px] transition ${
                sortOrder === 'DESC' ? 'bg-cyan-600 text-white' : 'bg-slate-800 text-slate-400'
              }`}
            >
              DESC ↓
            </button>
          </div>
        </div>
      </div>

      {/* Generated SQL Preview */}
      <div className="px-3 py-2 bg-slate-950 border-b border-slate-800 flex items-center justify-between font-mono">
        <div className="flex items-start gap-2">
          <span className="text-cyan-400 font-bold text-[10px] uppercase tracking-wider shrink-0 mt-0.5">Live SQL:</span>
          <pre className="text-emerald-400 text-[11px] whitespace-pre-wrap">{generatedSql}</pre>
        </div>
        <button
          onClick={() => {
            setMinAge(18);
            setSelectedProgram('ALL');
            setSearchLetter('');
            setSortOrder('ASC');
          }}
          className="text-[10px] text-slate-400 hover:text-slate-200 flex items-center gap-1 transition shrink-0 ml-2"
        >
          <RotateCcw className="w-3 h-3" /> Reset
        </button>
      </div>

      {/* Dynamic Filtered Table */}
      <div className="p-3 bg-slate-900 overflow-x-auto">
        <table className="w-full text-left text-[11px]">
          <thead className="bg-slate-800 text-slate-300 font-mono text-[10px] uppercase border-b border-slate-700">
            <tr>
              <th className="py-1.5 px-3">student_id</th>
              <th className="py-1.5 px-3">name</th>
              <th className="py-1.5 px-3">age</th>
              <th className="py-1.5 px-3">program</th>
              <th className="py-1.5 px-3">city</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/80 font-mono">
            {students.map((student) => {
              const isMatch = filtered.some((m) => m.id === student.id);
              return (
                <tr
                  key={student.id}
                  className={`transition duration-200 ${
                    isMatch
                      ? 'bg-cyan-950/20 text-slate-200 font-semibold border-l-2 border-cyan-400'
                      : 'opacity-30 text-slate-600 line-through'
                  }`}
                >
                  <td className="py-1.5 px-3 text-amber-400">{student.id}</td>
                  <td className="py-1.5 px-3">{student.name}</td>
                  <td className="py-1.5 px-3 text-cyan-300 font-bold">{student.age}</td>
                  <td className="py-1.5 px-3">{student.program}</td>
                  <td className="py-1.5 px-3 text-slate-400">{student.city}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// ============================================================================
// 3. VISUAL SQL JOIN SIMULATOR (INNER, LEFT, RIGHT, FULL)
// ============================================================================
export const SqlJoinVisualizer: React.FC = () => {
  const [joinType, setJoinType] = useState<'INNER' | 'LEFT' | 'RIGHT' | 'FULL'>('INNER');

  const studentsTable = [
    { student_id: 1001, name: 'Juan Dela Cruz' },
    { student_id: 1002, name: 'Maria Santos' },
    { student_id: 1003, name: 'Carlo Reyes' },
    { student_id: 1004, name: 'Angela Cruz (No Enrollment)' },
  ];

  const enrollmentsTable = [
    { enrollment_id: 501, student_id: 1001, course: 'DB101' },
    { enrollment_id: 502, student_id: 1001, course: 'WD101' },
    { enrollment_id: 503, student_id: 1002, course: 'DB101' },
    { enrollment_id: 504, student_id: 1003, course: 'CS101' },
    { enrollment_id: 505, student_id: 9999, course: 'NW101 (Ghost Student)' },
  ];

  const joinedResults = useMemo(() => {
    switch (joinType) {
      case 'INNER':
        return [
          { student_id: 1001, name: 'Juan Dela Cruz', enrollment_id: 501, course: 'DB101', status: 'Matched' },
          { student_id: 1001, name: 'Juan Dela Cruz', enrollment_id: 502, course: 'WD101', status: 'Matched' },
          { student_id: 1002, name: 'Maria Santos', enrollment_id: 503, course: 'DB101', status: 'Matched' },
          { student_id: 1003, name: 'Carlo Reyes', enrollment_id: 504, course: 'CS101', status: 'Matched' },
        ];
      case 'LEFT':
        return [
          { student_id: 1001, name: 'Juan Dela Cruz', enrollment_id: 501, course: 'DB101', status: 'Matched' },
          { student_id: 1001, name: 'Juan Dela Cruz', enrollment_id: 502, course: 'WD101', status: 'Matched' },
          { student_id: 1002, name: 'Maria Santos', enrollment_id: 503, course: 'DB101', status: 'Matched' },
          { student_id: 1003, name: 'Carlo Reyes', enrollment_id: 504, course: 'CS101', status: 'Matched' },
          { student_id: 1004, name: 'Angela Cruz', enrollment_id: 'NULL', course: 'NULL', status: 'Left Preserved' },
        ];
      case 'RIGHT':
        return [
          { student_id: 1001, name: 'Juan Dela Cruz', enrollment_id: 501, course: 'DB101', status: 'Matched' },
          { student_id: 1001, name: 'Juan Dela Cruz', enrollment_id: 502, course: 'WD101', status: 'Matched' },
          { student_id: 1002, name: 'Maria Santos', enrollment_id: 503, course: 'DB101', status: 'Matched' },
          { student_id: 1003, name: 'Carlo Reyes', enrollment_id: 504, course: 'CS101', status: 'Matched' },
          { student_id: 'NULL', name: 'NULL', enrollment_id: 505, course: 'NW101', status: 'Right Preserved' },
        ];
      case 'FULL':
        return [
          { student_id: 1001, name: 'Juan Dela Cruz', enrollment_id: 501, course: 'DB101', status: 'Matched' },
          { student_id: 1001, name: 'Juan Dela Cruz', enrollment_id: 502, course: 'WD101', status: 'Matched' },
          { student_id: 1002, name: 'Maria Santos', enrollment_id: 503, course: 'DB101', status: 'Matched' },
          { student_id: 1003, name: 'Carlo Reyes', enrollment_id: 504, course: 'CS101', status: 'Matched' },
          { student_id: 1004, name: 'Angela Cruz', enrollment_id: 'NULL', course: 'NULL', status: 'Left Preserved' },
          { student_id: 'NULL', name: 'NULL', enrollment_id: 505, course: 'NW101', status: 'Right Preserved' },
        ];
    }
  }, [joinType]);

  const joinExplanation = {
    INNER: 'Returns ONLY records that have matching keys in BOTH tables (intersection only). Unenrolled students and orphan enrollments are omitted.',
    LEFT: 'Returns ALL records from Left table (students), plus matching records from Right table. Unenrolled students like Angela Cruz appear with NULL courses.',
    RIGHT: 'Returns ALL records from Right table (enrollments), plus matching students. Unmatched enrollments (e.g. ID 9999) appear with NULL student info.',
    FULL: 'Returns ALL records from both tables. Missing sides are filled with NULLs. Nothing from either table is dropped.'
  };

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl flex flex-col font-sans text-xs">
      {/* Header */}
      <div className="bg-slate-950 px-3 py-2 border-b border-slate-800 flex items-center justify-between">
        <span className="text-slate-300 font-mono text-[11px] font-bold flex items-center gap-1.5">
          <ArrowLeftRight className="w-3.5 h-3.5 text-indigo-400" />
          Relational JOIN Inspector & Venn Engine
        </span>
        <div className="flex gap-1">
          {(['INNER', 'LEFT', 'RIGHT', 'FULL'] as const).map((type) => (
            <button
              key={type}
              onClick={() => setJoinType(type)}
              className={`px-2.5 py-0.5 rounded text-[10px] font-bold font-mono transition ${
                joinType === type
                  ? 'bg-indigo-600 text-white shadow'
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
              }`}
            >
              {type} JOIN
            </button>
          ))}
        </div>
      </div>

      {/* Venn / Concept Banner */}
      <div className="p-3 bg-slate-950/60 border-b border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          {/* Visual Venn Graphic */}
          <div className="relative w-28 h-14 flex items-center justify-center shrink-0">
            <div
              className={`absolute left-2 w-11 h-11 rounded-full border-2 transition-all ${
                joinType === 'INNER' || joinType === 'LEFT' || joinType === 'FULL'
                  ? 'border-indigo-400 bg-indigo-500/30'
                  : 'border-slate-600 bg-transparent'
              }`}
            />
            <div
              className={`absolute right-2 w-11 h-11 rounded-full border-2 transition-all ${
                joinType === 'INNER' || joinType === 'RIGHT' || joinType === 'FULL'
                  ? 'border-emerald-400 bg-emerald-500/30'
                  : 'border-slate-600 bg-transparent'
              }`}
            />
            <span className="relative z-10 text-[9px] font-mono font-extrabold text-white uppercase bg-slate-950/80 px-1 py-0.5 rounded border border-slate-700">
              {joinType}
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-mono text-indigo-300 font-bold text-xs">
              students {joinType} JOIN enrollments ON students.student_id = enrollments.student_id
            </span>
            <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
              {joinExplanation[joinType]}
            </p>
          </div>
        </div>
      </div>

      {/* Result Grid */}
      <div className="p-3 bg-slate-900 overflow-x-auto">
        <span className="text-[11px] font-bold text-slate-300 mb-2 block font-mono">
          JOIN Output Result Table ({joinedResults.length} records):
        </span>

        <table className="w-full text-left text-[11px]">
          <thead className="bg-slate-800 text-slate-300 font-mono text-[10px] uppercase border-b border-slate-700">
            <tr>
              <th className="py-1.5 px-3 text-indigo-300">students.student_id</th>
              <th className="py-1.5 px-3 text-indigo-300">students.name</th>
              <th className="py-1.5 px-3 text-emerald-300">enrollments.enrollment_id</th>
              <th className="py-1.5 px-3 text-emerald-300">enrollments.course</th>
              <th className="py-1.5 px-3 text-slate-400">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/80 font-mono">
            {joinedResults.map((r, i) => (
              <tr key={i} className="hover:bg-slate-800/40">
                <td className="py-1.5 px-3">
                  {r.student_id === 'NULL' ? (
                    <span className="text-rose-400 bg-rose-950/40 px-1 py-0.5 rounded font-bold">NULL</span>
                  ) : (
                    <span className="text-amber-400 font-bold">{r.student_id}</span>
                  )}
                </td>
                <td className="py-1.5 px-3">
                  {r.name === 'NULL' ? (
                    <span className="text-rose-400 italic">NULL</span>
                  ) : (
                    <span>{r.name}</span>
                  )}
                </td>
                <td className="py-1.5 px-3">
                  {r.enrollment_id === 'NULL' ? (
                    <span className="text-rose-400 bg-rose-950/40 px-1 py-0.5 rounded font-bold">NULL</span>
                  ) : (
                    <span className="text-cyan-400 font-bold">{r.enrollment_id}</span>
                  )}
                </td>
                <td className="py-1.5 px-3">
                  {r.course === 'NULL' ? (
                    <span className="text-rose-400 italic">NULL</span>
                  ) : (
                    <span>{r.course}</span>
                  )}
                </td>
                <td className="py-1.5 px-3">
                  <span
                    className={`text-[9px] px-1.5 py-0.5 rounded font-bold uppercase ${
                      r.status === 'Matched'
                        ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                        : 'bg-amber-950 text-amber-400 border border-amber-800'
                    }`}
                  >
                    {r.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// ============================================================================
// 4. CONSTRAINT VIOLATION & INTEGRITY TESTING LABORATORY
// ============================================================================
export const ConstraintViolationSandbox: React.FC = () => {
  const [activeTest, setActiveTest] = useState<number>(0);

  const tests = [
    {
      name: 'Primary Key Duplicate',
      constraint: 'PRIMARY KEY (student_id)',
      sql: "INSERT INTO students (student_id, first_name, last_name, age)\nVALUES (1001, 'Carlo', 'Reyes', 21);",
      status: 'VIOLATION',
      error: "ERROR 1062 (23000): Duplicate entry '1001' for key 'students.PRIMARY'",
      explanation: 'Entity Integrity: Primary Keys must be strictly unique for every row. Student ID 1001 is already registered to Juan Dela Cruz. The DBMS immediately rejects duplicate keys.'
    },
    {
      name: 'Foreign Key Violation',
      constraint: 'FOREIGN KEY (student_id) REFERENCES students(student_id)',
      sql: "INSERT INTO enrollments (enrollment_id, student_id, course_id)\nVALUES (99, 9999, 'DB101');",
      status: 'VIOLATION',
      error: "ERROR 1452 (23000): Cannot add or update a child row: a foreign key constraint fails (`school_db`.`enrollments`, CONSTRAINT `fk_student` FOREIGN KEY (`student_id`) REFERENCES `students` (`student_id`))",
      explanation: 'Referential Integrity: A foreign key value must exist in the parent table first. Student ID 9999 does not exist in students, so creating an enrollment for them is blocked.'
    },
    {
      name: 'NOT NULL Violation',
      constraint: 'product_name VARCHAR(100) NOT NULL',
      sql: "INSERT INTO products (product_id, product_name, price)\nVALUES (10, NULL, 500.00);",
      status: 'VIOLATION',
      error: "ERROR 1048 (23000): Column 'product_name' cannot be null",
      explanation: 'Domain Integrity: NOT NULL ensures that mandatory fields are never omitted or empty. A product without a name cannot be cataloged or searched.'
    },
    {
      name: 'CHECK Constraint (Price >= 0)',
      constraint: 'CHECK (price >= 0)',
      sql: "INSERT INTO products (product_id, product_name, price)\nVALUES (11, 'Gaming Mousepad', -450.00);",
      status: 'VIOLATION',
      error: "ERROR 3819 (HY000): Check constraint 'chk_product_price' is violated.",
      explanation: 'Business Logic Integrity: The CHECK constraint validates that inserted values satisfy boolean business rules. A negative retail price makes no economic sense.'
    },
    {
      name: 'Valid Compliant INSERT',
      constraint: 'All Constraints Satisfied',
      sql: "INSERT INTO students (student_id, first_name, last_name, age)\nVALUES (1007, 'Danilo', 'Aquino', 21);",
      status: 'SUCCESS',
      error: 'Query OK, 1 row affected (0.01 sec)',
      explanation: 'Success: 1007 is unique, all required columns are populated, and data types match the defined table schema.'
    }
  ];

  const current = tests[activeTest];

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl flex flex-col font-sans text-xs">
      <div className="bg-slate-950 px-3 py-2 border-b border-slate-800 flex items-center justify-between">
        <span className="text-slate-300 font-mono text-[11px] font-bold flex items-center gap-1.5">
          <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
          Constraint Enforcement & Rejection Sandbox
        </span>
        <span className="text-[10px] text-slate-400 font-mono">
          DBMS Integrity Verification Engine
        </span>
      </div>

      {/* Test Buttons */}
      <div className="bg-slate-900/90 px-3 py-2 border-b border-slate-800 flex items-center gap-1.5 overflow-x-auto">
        {tests.map((t, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTest(idx)}
            className={`px-2.5 py-1 rounded text-[11px] font-semibold font-mono whitespace-nowrap transition border ${
              activeTest === idx
                ? t.status === 'SUCCESS'
                  ? 'bg-emerald-600/20 text-emerald-300 border-emerald-500/50'
                  : 'bg-rose-600/20 text-rose-300 border-rose-500/50'
                : 'bg-slate-800/60 text-slate-400 hover:text-slate-200 border-slate-700/60'
            }`}
          >
            {t.name}
          </button>
        ))}
      </div>

      <div className="p-3 bg-slate-950/80 grid grid-cols-1 md:grid-cols-2 gap-3 border-b border-slate-800">
        {/* Left: Attempted SQL */}
        <div className="flex flex-col gap-1.5">
          <span className="text-[10px] text-slate-400 font-mono uppercase tracking-wider font-bold">
            Attempted SQL INSERT Query:
          </span>
          <pre className="p-2.5 bg-slate-900 border border-slate-800 rounded-lg text-amber-300 font-mono text-[11px] leading-relaxed">
            {current.sql}
          </pre>
          <span className="text-[10px] text-slate-400 font-mono">
            Active Constraint: <code className="text-indigo-300">{current.constraint}</code>
          </span>
        </div>

        {/* Right: DBMS Result */}
        <div className="flex flex-col gap-1.5">
          <span className="text-[10px] text-slate-400 font-mono uppercase tracking-wider font-bold">
            Database Engine Response:
          </span>
          <div
            className={`p-2.5 rounded-lg border font-mono text-[11px] flex flex-col gap-1 ${
              current.status === 'SUCCESS'
                ? 'bg-emerald-950/30 border-emerald-700/60 text-emerald-300'
                : 'bg-rose-950/30 border-rose-700/60 text-rose-300'
            }`}
          >
            <div className="flex items-center gap-1.5 font-bold">
              {current.status === 'SUCCESS' ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              ) : (
                <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
              )}
              <span>{current.status === 'SUCCESS' ? 'TRANSACTION COMMITTED' : 'OPERATION ABORTED'}</span>
            </div>
            <p className="text-[10px] text-slate-300 mt-1">{current.error}</p>
          </div>
        </div>
      </div>

      {/* Explanation Footer */}
      <div className="p-3 bg-slate-900 text-slate-300 flex items-start gap-2">
        <Info className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
        <div>
          <strong className="text-indigo-300 font-semibold">Why this matters: </strong>
          <span className="text-slate-300 leading-relaxed">{current.explanation}</span>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// 5. DATABASE NORMALIZATION STEP-THROUGH (UNF -> 1NF -> 2NF -> 3NF)
// ============================================================================
export const NormalizationStepThrough: React.FC = () => {
  const [activeStage, setActiveStage] = useState<'UNF' | '1NF' | '2NF' | '3NF'>('UNF');

  const stages = [
    {
      id: 'UNF',
      title: 'Unnormalized Form (UNF)',
      desc: 'Contains multi-valued repeating groups, mixed non-atomic data, and serious data anomalies.',
      badge: 'Dirty Data & Redundancy',
      color: 'rose'
    },
    {
      id: '1NF',
      title: 'First Normal Form (1NF)',
      desc: 'All attributes are atomic (single values only). Each record has a primary key or composite identifier.',
      badge: 'Atomic Values',
      color: 'amber'
    },
    {
      id: '2NF',
      title: 'Second Normal Form (2NF)',
      desc: 'Satisfies 1NF AND removes partial functional dependencies (attributes depend on the FULL primary key).',
      badge: 'No Partial Dependencies',
      color: 'cyan'
    },
    {
      id: '3NF',
      title: 'Third Normal Form (3NF)',
      desc: 'Satisfies 2NF AND removes transitive dependencies (non-key columns depend ONLY on the primary key, nothing else).',
      badge: 'Clean Relational Design',
      color: 'emerald'
    }
  ];

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl flex flex-col font-sans text-xs">
      {/* Header */}
      <div className="bg-slate-950 px-3 py-2 border-b border-slate-800 flex items-center justify-between">
        <span className="text-slate-300 font-mono text-[11px] font-bold flex items-center gap-1.5">
          <Layers className="w-3.5 h-3.5 text-indigo-400" />
          Interactive Normalization Transformation Studio
        </span>
        <span className="text-[10px] text-indigo-400 font-mono bg-indigo-950/60 border border-indigo-800/60 px-2 py-0.5 rounded-full">
          Progress: {activeStage} Stage
        </span>
      </div>

      {/* Stepper Tabs */}
      <div className="grid grid-cols-4 border-b border-slate-800 bg-slate-950/40">
        {stages.map((stage) => (
          <button
            key={stage.id}
            onClick={() => setActiveStage(stage.id as any)}
            className={`py-2 px-2 text-center font-mono text-[11px] font-bold transition flex flex-col items-center border-b-2 ${
              activeStage === stage.id
                ? 'border-indigo-400 bg-indigo-950/30 text-indigo-300'
                : 'border-transparent text-slate-500 hover:text-slate-300'
            }`}
          >
            <span>{stage.id}</span>
            <span className="hidden sm:inline text-[9px] font-normal opacity-80">{stage.badge}</span>
          </button>
        ))}
      </div>

      {/* Stage Description */}
      <div className="px-3 py-2 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
        <p className="text-slate-300 text-[11px]">
          <strong className="text-indigo-300">{stages.find(s => s.id === activeStage)?.title}: </strong>
          {stages.find(s => s.id === activeStage)?.desc}
        </p>
      </div>

      {/* Visual Tables based on Stage */}
      <div className="p-3 bg-slate-950 overflow-x-auto flex flex-col gap-3">
        {activeStage === 'UNF' && (
          <div>
            <span className="text-[10px] text-rose-400 font-mono uppercase tracking-wider font-bold mb-1 block">
              ⚠️ Unnormalized Table: student_enrollments_unf
            </span>
            <table className="w-full text-left text-[11px] border border-slate-800">
              <thead className="bg-slate-800 text-slate-300 font-mono text-[10px]">
                <tr>
                  <th className="p-2">StudentID</th>
                  <th className="p-2">StudentName</th>
                  <th className="p-2 text-rose-400">Courses (Multi-valued!)</th>
                  <th className="p-2">Advisor</th>
                  <th className="p-2">AdvisorRoom</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 font-mono">
                <tr>
                  <td className="p-2 text-amber-400">1001</td>
                  <td className="p-2">Juan Dela Cruz</td>
                  <td className="p-2 text-rose-300 bg-rose-950/20 font-bold">DB101, WD101, NW101</td>
                  <td className="p-2">Prof. Reyes</td>
                  <td className="p-2">Room 402</td>
                </tr>
                <tr>
                  <td className="p-2 text-amber-400">1002</td>
                  <td className="p-2">Maria Santos</td>
                  <td className="p-2 text-rose-300 bg-rose-950/20 font-bold">CS101, DB101</td>
                  <td className="p-2">Prof. Gomez</td>
                  <td className="p-2">Room 301</td>
                </tr>
              </tbody>
            </table>
            <div className="mt-2 p-2 rounded bg-rose-950/30 border border-rose-900/60 text-rose-300 text-[10px]">
              <strong>Anomalies Present:</strong> Insertion anomaly (cannot add an advisor without a student), Update anomaly (changing AdvisorRoom requires multiple edits), Delete anomaly (deleting Maria loses Prof. Gomez record).
            </div>
          </div>
        )}

        {activeStage === '1NF' && (
          <div>
            <span className="text-[10px] text-amber-400 font-mono uppercase tracking-wider font-bold mb-1 block">
              1NF: Atomic Cells (Every course has its own record)
            </span>
            <table className="w-full text-left text-[11px] border border-slate-800">
              <thead className="bg-slate-800 text-slate-300 font-mono text-[10px]">
                <tr>
                  <th className="p-2 text-indigo-300">StudentID (PK1)</th>
                  <th className="p-2">StudentName</th>
                  <th className="p-2 text-indigo-300">CourseID (PK2)</th>
                  <th className="p-2">CourseName</th>
                  <th className="p-2">Advisor</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 font-mono">
                <tr>
                  <td className="p-2 text-amber-400 font-bold">1001</td>
                  <td className="p-2">Juan Dela Cruz</td>
                  <td className="p-2 text-cyan-400 font-bold">DB101</td>
                  <td className="p-2">Fundamentals of Database</td>
                  <td className="p-2">Prof. Reyes</td>
                </tr>
                <tr>
                  <td className="p-2 text-amber-400 font-bold">1001</td>
                  <td className="p-2">Juan Dela Cruz</td>
                  <td className="p-2 text-cyan-400 font-bold">WD101</td>
                  <td className="p-2">Web Development</td>
                  <td className="p-2">Prof. Reyes</td>
                </tr>
                <tr>
                  <td className="p-2 text-amber-400 font-bold">1002</td>
                  <td className="p-2">Maria Santos</td>
                  <td className="p-2 text-cyan-400 font-bold">CS101</td>
                  <td className="p-2">Intro to Computing</td>
                  <td className="p-2">Prof. Gomez</td>
                </tr>
              </tbody>
            </table>
            <p className="mt-1 text-[10px] text-amber-400">
              ⚠️ <strong>Remaining issue in 1NF:</strong> Partial dependency exists! StudentName depends only on StudentID, not CourseID.
            </p>
          </div>
        )}

        {activeStage === '2NF' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <span className="text-[10px] text-cyan-400 font-mono uppercase font-bold mb-1 block">
                Table: STUDENTS (Removed Partial Dependency)
              </span>
              <table className="w-full text-left text-[10px] border border-slate-800 font-mono">
                <thead className="bg-slate-800 text-slate-300">
                  <tr><th className="p-1.5">StudentID (PK)</th><th className="p-1.5">StudentName</th><th className="p-1.5">Advisor</th><th className="p-1.5">AdvisorRoom</th></tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  <tr><td className="p-1.5 text-amber-400 font-bold">1001</td><td className="p-1.5">Juan Dela Cruz</td><td className="p-1.5">Prof. Reyes</td><td className="p-1.5">Room 402</td></tr>
                  <tr><td className="p-1.5 text-amber-400 font-bold">1002</td><td className="p-1.5">Maria Santos</td><td className="p-1.5">Prof. Gomez</td><td className="p-1.5">Room 301</td></tr>
                </tbody>
              </table>
            </div>

            <div>
              <span className="text-[10px] text-cyan-400 font-mono uppercase font-bold mb-1 block">
                Table: ENROLLMENTS (Associative Table)
              </span>
              <table className="w-full text-left text-[10px] border border-slate-800 font-mono">
                <thead className="bg-slate-800 text-slate-300">
                  <tr><th className="p-1.5">StudentID (FK)</th><th className="p-1.5">CourseID (FK)</th></tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  <tr><td className="p-1.5 text-amber-400">1001</td><td className="p-1.5 text-cyan-400">DB101</td></tr>
                  <tr><td className="p-1.5 text-amber-400">1001</td><td className="p-1.5 text-cyan-400">WD101</td></tr>
                  <tr><td className="p-1.5 text-amber-400">1002</td><td className="p-1.5 text-cyan-400">CS101</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeStage === '3NF' && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <div className="border border-emerald-900/60 rounded p-2 bg-emerald-950/20">
              <span className="text-[10px] text-emerald-400 font-mono font-bold block mb-1">
                STUDENTS (No Transitive Deps)
              </span>
              <div className="text-[10px] font-mono text-slate-300 space-y-0.5">
                <p>• <strong>StudentID (PK)</strong></p>
                <p>• StudentName</p>
                <p>• AdvisorID (FK)</p>
              </div>
            </div>

            <div className="border border-emerald-900/60 rounded p-2 bg-emerald-950/20">
              <span className="text-[10px] text-emerald-400 font-mono font-bold block mb-1">
                ADVISORS (Transitive Column Extracted)
              </span>
              <div className="text-[10px] font-mono text-slate-300 space-y-0.5">
                <p>• <strong>AdvisorID (PK)</strong></p>
                <p>• AdvisorName</p>
                <p>• OfficeRoom</p>
              </div>
            </div>

            <div className="border border-emerald-900/60 rounded p-2 bg-emerald-950/20">
              <span className="text-[10px] text-emerald-400 font-mono font-bold block mb-1">
                COURSES & ENROLLMENTS
              </span>
              <div className="text-[10px] font-mono text-slate-300 space-y-0.5">
                <p>• <strong>CourseID (PK)</strong>, Title</p>
                <p>• <strong>EnrollmentID (PK)</strong></p>
                <p>• StudentID (FK), CourseID (FK)</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// ============================================================================
// 6. ACID TRANSACTION SIMULATOR (BANK TRANSFER COMMITTED VS ROLLBACK)
// ============================================================================
export const AcidTransactionSimulator: React.FC = () => {
  const [step, setStep] = useState<number>(0);
  const [hasCrash, setHasCrash] = useState<boolean>(false);
  const [accountA, setAccountA] = useState<number>(5000);
  const [accountB, setAccountB] = useState<number>(1200);
  const [logs, setLogs] = useState<string[]>(['Transaction Idle. Initialized Account 101 (₱5,000) & Account 102 (₱1,200)']);

  const transferAmount = 1500;

  const handleStartTransaction = () => {
    setStep(1);
    setHasCrash(false);
    setLogs(prev => [...prev, 'BEGIN TRANSACTION; - Locking accounts 101 and 102']);
  };

  const handleDebitA = () => {
    setStep(2);
    setAccountA(prev => prev - transferAmount);
    setLogs(prev => [...prev, `UPDATE accounts SET balance = balance - ${transferAmount} WHERE account_id = 101; (₱${accountA - transferAmount})`]);
  };

  const handleTriggerCrash = () => {
    setHasCrash(true);
    setLogs(prev => [...prev, '⚡ CRITICAL ERROR: Network disconnect / Server power failure before second statement!']);
  };

  const handleCreditB = () => {
    setStep(3);
    setAccountB(prev => prev + transferAmount);
    setLogs(prev => [...prev, `UPDATE accounts SET balance = balance + ${transferAmount} WHERE account_id = 102; (₱${accountB + transferAmount})`]);
  };

  const handleCommit = () => {
    setStep(4);
    setLogs(prev => [...prev, 'COMMIT; - ACID Durability guaranteed. Written to WAL disk storage.']);
  };

  const handleRollback = () => {
    setStep(0);
    setHasCrash(false);
    setAccountA(5000);
    setAccountB(1200);
    setLogs(prev => [...prev, 'ROLLBACK; - ACID Atomicity saved the ledger. All accounts restored to pristine state.']);
  };

  const handleReset = () => {
    setStep(0);
    setHasCrash(false);
    setAccountA(5000);
    setAccountB(1200);
    setLogs(['Ledger reset. Initial state restored.']);
  };

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl flex flex-col font-sans text-xs">
      <div className="bg-slate-950 px-3 py-2 border-b border-slate-800 flex items-center justify-between">
        <span className="text-slate-300 font-mono text-[11px] font-bold flex items-center gap-1.5">
          <Zap className="w-3.5 h-3.5 text-amber-400" />
          ACID Transaction Ledger Simulator (Transfer ₱1,500)
        </span>
        <button
          onClick={handleReset}
          className="text-[10px] text-slate-400 hover:text-slate-200 flex items-center gap-1 transition"
        >
          <RotateCcw className="w-3 h-3" /> Reset
        </button>
      </div>

      {/* Account Balance Cards */}
      <div className="p-3 bg-slate-950/60 grid grid-cols-2 gap-3 border-b border-slate-800">
        <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-slate-400 font-mono text-[10px] font-bold">Account 101 (Juan)</span>
            <span className="text-xs text-indigo-400 font-bold">Sender</span>
          </div>
          <div className="text-xl font-mono font-extrabold text-white mt-2">
            ₱{accountA.toLocaleString()}
          </div>
          <span className="text-[10px] text-slate-500 mt-1">Pending: -₱{transferAmount}</span>
        </div>

        <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-slate-400 font-mono text-[10px] font-bold">Account 102 (Maria)</span>
            <span className="text-xs text-emerald-400 font-bold">Receiver</span>
          </div>
          <div className="text-xl font-mono font-extrabold text-white mt-2">
            ₱{accountB.toLocaleString()}
          </div>
          <span className="text-[10px] text-slate-500 mt-1">Pending: +₱{transferAmount}</span>
        </div>
      </div>

      {/* Controls / Step Pipeline */}
      <div className="p-3 bg-slate-900 border-b border-slate-800 flex flex-wrap items-center gap-2">
        {step === 0 && (
          <button
            onClick={handleStartTransaction}
            className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-mono font-bold flex items-center gap-1.5 shadow"
          >
            <Play className="w-3.5 h-3.5 fill-current" /> 1. BEGIN TRANSACTION;
          </button>
        )}

        {step === 1 && (
          <button
            onClick={handleDebitA}
            className="px-3 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-mono font-bold flex items-center gap-1.5 shadow"
          >
            2. Debit Account 101 (₱1,500)
          </button>
        )}

        {step === 2 && !hasCrash && (
          <>
            <button
              onClick={handleCreditB}
              className="px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-mono font-bold flex items-center gap-1.5 shadow"
            >
              3. Credit Account 102 (₱1,500)
            </button>
            <button
              onClick={handleTriggerCrash}
              className="px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-mono font-bold flex items-center gap-1.5 shadow"
            >
              ⚡ Simulate System Crash!
            </button>
          </>
        )}

        {step === 3 && !hasCrash && (
          <button
            onClick={handleCommit}
            className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-mono font-bold flex items-center gap-1.5 shadow"
          >
            <Check className="w-3.5 h-3.5" /> 4. COMMIT; (Permanently Apply)
          </button>
        )}

        {(hasCrash || step === 2) && (
          <button
            onClick={handleRollback}
            className="px-3 py-1.5 rounded-lg bg-rose-700 hover:bg-rose-600 text-white font-mono font-bold flex items-center gap-1.5 shadow"
          >
            <RotateCcw className="w-3.5 h-3.5" /> ROLLBACK; (Undo All Changes)
          </button>
        )}

        {step === 4 && (
          <div className="flex items-center gap-2 text-emerald-400 font-mono font-bold">
            <CheckCircle2 className="w-4 h-4" /> Transfer Successfully Committed!
          </div>
        )}
      </div>

      {/* Transaction Log Monitor */}
      <div className="p-3 bg-slate-950 font-mono text-[10px] max-h-32 overflow-y-auto">
        <span className="text-slate-500 font-bold uppercase tracking-wider block mb-1">
          Database Write-Ahead Log (WAL) Console:
        </span>
        <div className="space-y-1">
          {logs.map((log, idx) => (
            <div
              key={idx}
              className={`leading-relaxed ${
                log.includes('CRITICAL')
                  ? 'text-rose-400 font-bold'
                  : log.includes('COMMIT')
                  ? 'text-emerald-400 font-bold'
                  : log.includes('ROLLBACK')
                  ? 'text-amber-400 font-bold'
                  : 'text-slate-400'
              }`}
            >
              &gt; {log}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// 7. INTERACTIVE ERD SCHEMA EXPLORER
// ============================================================================
export const ErdSchemaExplorer: React.FC = () => {
  const [selectedEntity, setSelectedEntity] = useState<string>('STUDENTS');
  const [schemaSystem, setSchemaSystem] = useState<'ENROLLMENT' | 'INVENTORY'>('ENROLLMENT');

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl flex flex-col font-sans text-xs">
      <div className="bg-slate-950 px-3 py-2 border-b border-slate-800 flex items-center justify-between">
        <span className="text-slate-300 font-mono text-[11px] font-bold flex items-center gap-1.5">
          <Database className="w-3.5 h-3.5 text-indigo-400" />
          Entity-Relationship Diagram (ERD) Schema Explorer
        </span>
        <div className="flex gap-1">
          <button
            onClick={() => {
              setSchemaSystem('ENROLLMENT');
              setSelectedEntity('STUDENTS');
            }}
            className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold transition ${
              schemaSystem === 'ENROLLMENT' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'
            }`}
          >
            Enrollment System
          </button>
          <button
            onClick={() => {
              setSchemaSystem('INVENTORY');
              setSelectedEntity('PRODUCT');
            }}
            className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold transition ${
              schemaSystem === 'INVENTORY' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'
            }`}
          >
            Inventory System
          </button>
        </div>
      </div>

      {schemaSystem === 'ENROLLMENT' ? (
        <div className="p-3 bg-slate-950/60 grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* STUDENTS */}
          <div
            onClick={() => setSelectedEntity('STUDENTS')}
            className={`cursor-pointer p-3 rounded-lg border transition ${
              selectedEntity === 'STUDENTS'
                ? 'border-indigo-500 bg-indigo-950/30'
                : 'border-slate-800 bg-slate-900 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800">
              <span className="font-mono font-extrabold text-indigo-300 text-xs">STUDENT</span>
              <span className="text-[9px] bg-indigo-950 border border-indigo-800 px-1.5 py-0.5 rounded text-indigo-400">
                1:N to ENROLLMENT
              </span>
            </div>
            <div className="space-y-1 font-mono text-[10px]">
              <div className="text-amber-400 font-bold flex items-center gap-1">
                <Key className="w-3 h-3 text-amber-400" /> student_id (PK, INT)
              </div>
              <div className="text-slate-300">first_name (VARCHAR)</div>
              <div className="text-slate-300">last_name (VARCHAR)</div>
              <div className="text-slate-400">age (INT)</div>
              <div className="text-slate-400">program (VARCHAR)</div>
            </div>
          </div>

          {/* ENROLLMENT */}
          <div
            onClick={() => setSelectedEntity('ENROLLMENT')}
            className={`cursor-pointer p-3 rounded-lg border transition ${
              selectedEntity === 'ENROLLMENT'
                ? 'border-indigo-500 bg-indigo-950/30'
                : 'border-slate-800 bg-slate-900 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800">
              <span className="font-mono font-extrabold text-cyan-300 text-xs">ENROLLMENT</span>
              <span className="text-[9px] bg-cyan-950 border border-cyan-800 px-1.5 py-0.5 rounded text-cyan-400">
                Associative Table
              </span>
            </div>
            <div className="space-y-1 font-mono text-[10px]">
              <div className="text-amber-400 font-bold flex items-center gap-1">
                <Key className="w-3 h-3 text-amber-400" /> enrollment_id (PK)
              </div>
              <div className="text-indigo-400 font-semibold flex items-center gap-1">
                <LinkIcon className="w-3 h-3 text-indigo-400" /> student_id (FK)
              </div>
              <div className="text-emerald-400 font-semibold flex items-center gap-1">
                <LinkIcon className="w-3 h-3 text-emerald-400" /> course_id (FK)
              </div>
              <div className="text-slate-400">semester (VARCHAR)</div>
              <div className="text-slate-400">grade (DECIMAL)</div>
            </div>
          </div>

          {/* COURSE */}
          <div
            onClick={() => setSelectedEntity('COURSE')}
            className={`cursor-pointer p-3 rounded-lg border transition ${
              selectedEntity === 'COURSE'
                ? 'border-indigo-500 bg-indigo-950/30'
                : 'border-slate-800 bg-slate-900 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800">
              <span className="font-mono font-extrabold text-emerald-300 text-xs">COURSE</span>
              <span className="text-[9px] bg-emerald-950 border border-emerald-800 px-1.5 py-0.5 rounded text-emerald-400">
                1:N to ENROLLMENT
              </span>
            </div>
            <div className="space-y-1 font-mono text-[10px]">
              <div className="text-amber-400 font-bold flex items-center gap-1">
                <Key className="w-3 h-3 text-amber-400" /> course_id (PK, VARCHAR)
              </div>
              <div className="text-slate-300">course_name (VARCHAR)</div>
              <div className="text-slate-400">credits (INT)</div>
              <div className="text-slate-400">department (VARCHAR)</div>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-3 bg-slate-950/60 grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* CATEGORY */}
          <div
            onClick={() => setSelectedEntity('CATEGORY')}
            className="p-3 rounded-lg border border-slate-800 bg-slate-900"
          >
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800">
              <span className="font-mono font-extrabold text-amber-300 text-xs">CATEGORY</span>
              <span className="text-[9px] text-slate-400">1:N to Product</span>
            </div>
            <div className="space-y-1 font-mono text-[10px]">
              <div className="text-amber-400 font-bold">category_id (PK)</div>
              <div className="text-slate-300">category_name</div>
            </div>
          </div>

          {/* PRODUCT */}
          <div
            onClick={() => setSelectedEntity('PRODUCT')}
            className="p-3 rounded-lg border border-indigo-500 bg-indigo-950/30"
          >
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800">
              <span className="font-mono font-extrabold text-indigo-300 text-xs">PRODUCT</span>
              <span className="text-[9px] text-indigo-400">Core Inventory Item</span>
            </div>
            <div className="space-y-1 font-mono text-[10px]">
              <div className="text-amber-400 font-bold">product_id (PK)</div>
              <div className="text-slate-300">product_name (NOT NULL)</div>
              <div className="text-amber-400">category_id (FK)</div>
              <div className="text-emerald-400">supplier_id (FK)</div>
              <div className="text-slate-400">price (CHECK &gt;= 0)</div>
              <div className="text-slate-400">quantity (DEFAULT 0)</div>
            </div>
          </div>

          {/* SUPPLIER */}
          <div
            onClick={() => setSelectedEntity('SUPPLIER')}
            className="p-3 rounded-lg border border-slate-800 bg-slate-900"
          >
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800">
              <span className="font-mono font-extrabold text-emerald-300 text-xs">SUPPLIER</span>
              <span className="text-[9px] text-slate-400">1:N to Product</span>
            </div>
            <div className="space-y-1 font-mono text-[10px]">
              <div className="text-amber-400 font-bold">supplier_id (PK)</div>
              <div className="text-slate-300">supplier_name</div>
              <div className="text-slate-400">contact_number</div>
            </div>
          </div>
        </div>
      )}

      {/* Footer Info */}
      <div className="p-3 bg-slate-900 border-t border-slate-800 text-slate-400 flex items-center justify-between text-[11px]">
        <span className="flex items-center gap-1.5">
          <Info className="w-3.5 h-3.5 text-indigo-400" />
          Many-to-Many relationships are decomposed into two 1-to-Many relationships via junction tables.
        </span>
      </div>
    </div>
  );
};
