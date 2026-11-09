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
  Table as TableIcon,
  Key,
  Link as LinkIcon,
  AlertTriangle,
  Server,
  Cpu,
  Sparkles,
  CheckCircle2,
  XCircle,
  Filter,
  Eye,
  Zap,
  Info,
  Sliders,
  AlertCircle,
  HelpCircle,
  Hash,
  Boxes
} from 'lucide-react';
import { SlideData } from '../types/slide';

// ============================================================================
// 1. SQL AGGREGATION & GROUP BY STUDIO
// ============================================================================
export const SqlAggregationStudio: React.FC<{ slide?: SlideData }> = () => {
  const [activeDataset, setActiveDataset] = useState<'students' | 'employees'>('students');
  const [groupByCol, setGroupByCol] = useState<string>('program');
  const [aggFunc, setAggFunc] = useState<'COUNT' | 'AVG' | 'SUM' | 'MAX' | 'MIN'>('COUNT');
  const [targetCol, setTargetCol] = useState<string>('gpa');
  const [enableHaving, setEnableHaving] = useState<boolean>(false);
  const [havingCondition, setHavingCondition] = useState<number>(2);
  const [copied, setCopied] = useState<boolean>(false);

  const studentData = [
    { id: 101, name: 'Juan Dela Cruz', program: 'BSIT', year: '3rd', gpa: 1.45 },
    { id: 102, name: 'Maria Santos', program: 'BSCS', year: '2nd', gpa: 1.25 },
    { id: 103, name: 'Carlo Reyes', program: 'BSIT', year: '3rd', gpa: 1.75 },
    { id: 104, name: 'Angela Cruz', program: 'BSIS', year: '1st', gpa: 1.50 },
    { id: 105, name: 'Mark Garcia', program: 'BSCS', year: '4th', gpa: 2.10 },
    { id: 106, name: 'Bea Flores', program: 'BSIT', year: '2nd', gpa: 1.30 },
    { id: 107, name: 'Danilo Aquino', program: 'BSIS', year: '3rd', gpa: 1.85 },
    { id: 108, name: 'Sofia Ramos', program: 'BSCS', year: '1st', gpa: 1.40 },
  ];

  const employeeData = [
    { id: 501, name: 'Elena Torres', dept: 'Engineering', role: 'Dev', salary: 65000 },
    { id: 502, name: 'Ramon Diaz', dept: 'Marketing', role: 'Lead', salary: 52000 },
    { id: 503, name: 'Katrina Lee', dept: 'Engineering', role: 'Architect', salary: 85000 },
    { id: 504, name: 'Paolo Reyes', dept: 'Design', role: 'UI/UX', salary: 48000 },
    { id: 505, name: 'Grace Lim', dept: 'Engineering', role: 'DevOps', salary: 72000 },
    { id: 506, name: 'Leo Navarro', dept: 'Marketing', role: 'Specialist', salary: 45000 },
    { id: 507, name: 'Chloe Cruz', dept: 'Design', role: 'Creative', salary: 56000 },
  ];

  const currentDataset: any[] = activeDataset === 'students' ? studentData : employeeData;
  const currentGroupField = activeDataset === 'students' ? groupByCol : 'dept';
  const currentMetricField = activeDataset === 'students' ? targetCol : 'salary';

  // Group calculations
  const groupedResult = useMemo(() => {
    const map: Record<string, any[]> = {};
    currentDataset.forEach((row) => {
      const key = String(row[currentGroupField]);
      if (!map[key]) map[key] = [];
      map[key].push(row);
    });

    return Object.entries(map).map(([groupKey, rows]) => {
      let aggValue: number = 0;
      const values = rows.map((r: any) => Number(r[currentMetricField]) || 0);

      if (aggFunc === 'COUNT') {
        aggValue = rows.length;
      } else if (aggFunc === 'SUM') {
        aggValue = values.reduce((a, b) => a + b, 0);
      } else if (aggFunc === 'AVG') {
        const sum = values.reduce((a, b) => a + b, 0);
        aggValue = values.length ? Number((sum / values.length).toFixed(2)) : 0;
      } else if (aggFunc === 'MAX') {
        aggValue = Math.max(...values);
      } else if (aggFunc === 'MIN') {
        aggValue = Math.min(...values);
      }

      return {
        groupKey,
        count: rows.length,
        aggValue,
        rows
      };
    }).filter((g) => {
      if (!enableHaving) return true;
      if (aggFunc === 'COUNT') return g.aggValue >= havingCondition;
      return g.aggValue >= havingCondition;
    });
  }, [currentDataset, currentGroupField, currentMetricField, aggFunc, enableHaving, havingCondition]);

  const generatedSql = useMemo(() => {
    const tbl = activeDataset === 'students' ? 'students' : 'employees';
    const grp = currentGroupField;
    const aggExp = aggFunc === 'COUNT' ? 'COUNT(*)' : `${aggFunc}(${currentMetricField})`;
    let sql = `SELECT ${grp}, ${aggExp} AS metric_result\nFROM ${tbl}\nGROUP BY ${grp}`;
    if (enableHaving) {
      sql += `\nHAVING ${aggExp} >= ${havingCondition}`;
    }
    sql += `\nORDER BY ${grp} ASC;`;
    return sql;
  }, [activeDataset, currentGroupField, aggFunc, currentMetricField, enableHaving, havingCondition]);

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedSql);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col font-sans text-xs">
      {/* Title bar */}
      <div className="bg-slate-950 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Hash className="w-4 h-4 text-emerald-400" />
          <span className="font-mono text-xs font-bold text-slate-200">
            SQL Aggregation &amp; GROUP BY Interactive Studio
          </span>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800">
          Live Query Simulator
        </span>
      </div>

      {/* Control knobs */}
      <div className="p-3 bg-slate-950/60 border-b border-slate-800 grid grid-cols-1 sm:grid-cols-4 gap-3 text-slate-300">
        <div>
          <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Dataset</label>
          <div className="flex rounded-lg bg-slate-900 p-0.5 border border-slate-700">
            <button
              onClick={() => { setActiveDataset('students'); setGroupByCol('program'); setTargetCol('gpa'); }}
              className={`flex-1 py-1 rounded text-[11px] font-semibold transition ${activeDataset === 'students' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'}`}
            >
              Students
            </button>
            <button
              onClick={() => { setActiveDataset('employees'); setGroupByCol('dept'); setTargetCol('salary'); }}
              className={`flex-1 py-1 rounded text-[11px] font-semibold transition ${activeDataset === 'employees' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'}`}
            >
              Employees
            </button>
          </div>
        </div>

        <div>
          <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1">GROUP BY Column</label>
          <select
            value={groupByCol}
            onChange={(e) => setGroupByCol(e.target.value)}
            disabled={activeDataset === 'employees'}
            className="w-full bg-slate-900 border border-slate-700 rounded-lg p-1.5 text-xs text-indigo-300 font-mono focus:outline-none"
          >
            {activeDataset === 'students' ? (
              <>
                <option value="program">program (BSIT, BSCS, BSIS)</option>
                <option value="year">year (1st, 2nd, 3rd, 4th)</option>
              </>
            ) : (
              <option value="dept">dept (Engineering, Marketing, Design)</option>
            )}
          </select>
        </div>

        <div>
          <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Aggregation Function</label>
          <select
            value={aggFunc}
            onChange={(e) => setAggFunc(e.target.value as any)}
            className="w-full bg-slate-900 border border-slate-700 rounded-lg p-1.5 text-xs text-emerald-300 font-mono focus:outline-none"
          >
            <option value="COUNT">COUNT(*) - Tally records</option>
            <option value="AVG">AVG({currentMetricField}) - Average</option>
            <option value="SUM">SUM({currentMetricField}) - Total sum</option>
            <option value="MAX">MAX({currentMetricField}) - Peak high</option>
            <option value="MIN">MIN({currentMetricField}) - Lowest floor</option>
          </select>
        </div>

        <div>
          <div className="flex items-center justify-between mb-1">
            <label className="text-[10px] uppercase font-bold text-slate-400">HAVING Filter</label>
            <input
              type="checkbox"
              checked={enableHaving}
              onChange={(e) => setEnableHaving(e.target.checked)}
              className="accent-indigo-500 rounded"
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-slate-400 font-mono">&gt;=</span>
            <input
              type="number"
              disabled={!enableHaving}
              value={havingCondition}
              onChange={(e) => setHavingCondition(Number(e.target.value))}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg p-1 text-xs text-amber-300 font-mono disabled:opacity-40"
            />
          </div>
        </div>
      </div>

      {/* SQL Output Box */}
      <div className="px-3 py-2 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
        <pre className="font-mono text-emerald-300 text-[11px] overflow-x-auto whitespace-pre leading-relaxed">
          {generatedSql}
        </pre>
        <button
          onClick={handleCopy}
          className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition flex items-center gap-1 text-[10px] shrink-0 font-mono"
        >
          {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
          {copied ? 'Copied' : 'Copy SQL'}
        </button>
      </div>

      {/* Live Grouping Result Cards */}
      <div className="p-3 bg-slate-900 overflow-y-auto max-h-[300px]">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-bold text-slate-300 flex items-center gap-1.5">
            <Boxes className="w-3.5 h-3.5 text-indigo-400" />
            Aggregated Output Groups ({groupedResult.length} groups generated)
          </span>
          <span className="text-[10px] text-slate-500">
            SQL execution engine automatically collapses matching tuples into single summary rows
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {groupedResult.map((group, idx) => (
            <div key={idx} className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-1.5 mb-2">
                  <span className="font-mono text-xs font-bold text-indigo-300">
                    {currentGroupField} = &apos;{group.groupKey}&apos;
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                    {group.count} {group.count === 1 ? 'row' : 'rows'}
                  </span>
                </div>

                <div className="space-y-1 mb-2">
                  {group.rows.map((row: any, rIdx) => (
                    <div key={rIdx} className="text-[10px] text-slate-400 flex items-center justify-between font-mono bg-slate-900/60 px-1.5 py-0.5 rounded">
                      <span>{row.name}</span>
                      <span className="text-slate-300 font-bold">{row[currentMetricField]}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between bg-slate-900/40 -mx-3 -mb-3 p-2.5 rounded-b-xl">
                <span className="text-[10px] font-bold text-slate-400 uppercase font-mono">{aggFunc} Result:</span>
                <span className="text-sm font-extrabold text-emerald-400 font-mono">
                  {group.aggValue}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// 2. FOREIGN KEY CASCADE & REFERENTIAL INTEGRITY SIMULATOR
// ============================================================================
export const ForeignKeyCascadeSimulator: React.FC<{ slide?: SlideData }> = () => {
  const initialDepts = [
    { id: 101, name: 'Engineering', budget: '$250,000' },
    { id: 102, name: 'Marketing', budget: '$120,000' },
    { id: 103, name: 'Design', budget: '$90,000' },
  ];

  const initialEmps = [
    { id: 1, name: 'Alice Smith', dept_id: 101, role: 'Backend Lead' },
    { id: 2, name: 'Bob Johnson', dept_id: 101, role: 'Full-Stack Dev' },
    { id: 3, name: 'Charlie Kim', dept_id: 102, role: 'Content Writer' },
    { id: 4, name: 'Diana Prince', dept_id: 103, role: 'UI Designer' },
    { id: 5, name: 'Edward Norton', dept_id: 102, role: 'SEO Analyst' },
  ];

  const [depts, setDepts] = useState(initialDepts);
  const [emps, setEmps] = useState(initialEmps);
  const [actionRule, setActionRule] = useState<'CASCADE' | 'SET NULL' | 'RESTRICT'>('CASCADE');
  const [log, setLog] = useState<string>('System initialized. Select an ON DELETE rule and delete a department to observe cascade mechanics.');
  const [isError, setIsError] = useState<boolean>(false);

  const handleDeleteDept = (deptId: number) => {
    const deptToDelete = depts.find(d => d.id === deptId);
    if (!deptToDelete) return;

    if (actionRule === 'RESTRICT') {
      const childCount = emps.filter(e => e.dept_id === deptId).length;
      if (childCount > 0) {
        setIsError(true);
        setLog(`[SQL Error 1451]: Cannot delete or update a parent row: a foreign key constraint fails ('employees', CONSTRAINT 'fk_dept' FOREIGN KEY ('dept_id') REFERENCES 'departments' ('id')). Action aborted!`);
        return;
      }
    }

    setIsError(false);
    if (actionRule === 'CASCADE') {
      const affectedChildren = emps.filter(e => e.dept_id === deptId).length;
      setDepts(prev => prev.filter(d => d.id !== deptId));
      setEmps(prev => prev.filter(e => e.dept_id !== deptId));
      setLog(`SUCCESS: Deleted department '${deptToDelete.name}' (ID ${deptId}). ON DELETE CASCADE automatically removed ${affectedChildren} dependent employee record(s).`);
    } else if (actionRule === 'SET NULL') {
      const affectedChildren = emps.filter(e => e.dept_id === deptId).length;
      setDepts(prev => prev.filter(d => d.id !== deptId));
      setEmps(prev => prev.map(e => e.dept_id === deptId ? { ...e, dept_id: null as any } : e));
      setLog(`SUCCESS: Deleted department '${deptToDelete.name}' (ID ${deptId}). ON DELETE SET NULL preserved ${affectedChildren} employee(s) and set their dept_id to NULL.`);
    }
  };

  const handleReset = () => {
    setDepts(initialDepts);
    setEmps(initialEmps);
    setIsError(false);
    setLog('Database reset to original state.');
  };

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col font-sans text-xs">
      <div className="bg-slate-950 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Key className="w-4 h-4 text-amber-400" />
          <span className="font-mono text-xs font-bold text-slate-200">
            Referential Integrity &amp; Foreign Key Cascade Simulator
          </span>
        </div>
        <button
          onClick={handleReset}
          className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-[10px] font-mono flex items-center gap-1 transition"
        >
          <RotateCcw className="w-3 h-3" /> Reset Database
        </button>
      </div>

      {/* Rule Selection Banner */}
      <div className="p-3 bg-slate-950/70 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="text-[10px] uppercase font-bold text-slate-400 font-mono">ON DELETE Rule:</span>
          <div className="flex rounded-lg bg-slate-900 p-0.5 border border-slate-700">
            {(['CASCADE', 'SET NULL', 'RESTRICT'] as const).map(rule => (
              <button
                key={rule}
                onClick={() => { setActionRule(rule); setIsError(false); }}
                className={`px-3 py-1 rounded text-[11px] font-mono font-bold transition ${actionRule === rule ? 'bg-amber-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}
              >
                {rule}
              </button>
            ))}
          </div>
        </div>

        <span className="text-[10px] text-slate-400">
          Rule: <code className="text-amber-300 font-mono">FOREIGN KEY (dept_id) REFERENCES departments(id) ON DELETE {actionRule}</code>
        </span>
      </div>

      {/* Two Tables Grid */}
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Parent Table: Departments */}
        <div className="bg-slate-950 border border-slate-800 rounded-xl p-3 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2">
              <span className="font-mono font-bold text-xs text-indigo-300 flex items-center gap-1.5">
                <TableIcon className="w-3.5 h-3.5 text-indigo-400" />
                Parent Table: <code>departments</code>
              </span>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/60">
                Primary Key: id
              </span>
            </div>

            <table className="w-full text-left font-mono text-[11px]">
              <thead>
                <tr className="text-slate-400 border-b border-slate-800 text-[10px] uppercase">
                  <th className="py-1">id (PK)</th>
                  <th className="py-1">name</th>
                  <th className="py-1 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/50">
                {depts.map(d => (
                  <tr key={d.id} className="hover:bg-slate-900/60 transition">
                    <td className="py-1.5 text-amber-400 font-bold">{d.id}</td>
                    <td className="py-1.5 text-slate-200">{d.name}</td>
                    <td className="py-1.5 text-right">
                      <button
                        onClick={() => handleDeleteDept(d.id)}
                        className="px-2 py-0.5 rounded bg-rose-950/80 hover:bg-rose-900 border border-rose-800 text-rose-300 text-[10px] font-mono transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
                {depts.length === 0 && (
                  <tr>
                    <td colSpan={3} className="py-3 text-center text-slate-500 italic">No departments remaining. Click Reset.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Child Table: Employees */}
        <div className="bg-slate-950 border border-slate-800 rounded-xl p-3 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2">
              <span className="font-mono font-bold text-xs text-purple-300 flex items-center gap-1.5">
                <TableIcon className="w-3.5 h-3.5 text-purple-400" />
                Child Table: <code>employees</code>
              </span>
              <span className="text-[10px] font-mono text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800/60">
                Foreign Key: dept_id
              </span>
            </div>

            <table className="w-full text-left font-mono text-[11px]">
              <thead>
                <tr className="text-slate-400 border-b border-slate-800 text-[10px] uppercase">
                  <th className="py-1">id</th>
                  <th className="py-1">name</th>
                  <th className="py-1">dept_id (FK)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/50">
                {emps.map(e => (
                  <tr key={e.id} className="hover:bg-slate-900/60 transition">
                    <td className="py-1.5 text-slate-400">{e.id}</td>
                    <td className="py-1.5 text-slate-200">{e.name}</td>
                    <td className="py-1.5 font-bold">
                      {e.dept_id === null ? (
                        <span className="text-amber-400 font-bold bg-amber-950/60 px-1.5 py-0.5 rounded text-[10px]">NULL</span>
                      ) : (
                        <span className="text-indigo-400">{e.dept_id}</span>
                      )}
                    </td>
                  </tr>
                ))}
                {emps.length === 0 && (
                  <tr>
                    <td colSpan={3} className="py-3 text-center text-slate-500 italic">All child rows cascaded. Click Reset.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Execution Feedback Terminal */}
      <div className={`p-3 border-t font-mono text-[11px] flex items-start gap-2 ${isError ? 'bg-rose-950/70 border-rose-800 text-rose-300' : 'bg-slate-950 border-slate-800 text-emerald-300'}`}>
        {isError ? <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" /> : <Terminal className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />}
        <span className="leading-relaxed">{log}</span>
      </div>
    </div>
  );
};

// ============================================================================
// 3. ERD CROW'S FOOT CARDINALITY TESTER
// ============================================================================
export const ErdCardinalityTester: React.FC<{ slide?: SlideData }> = () => {
  const [selectedRelationship, setSelectedRelationship] = useState<'1:1' | '1:N' | 'M:N'>('1:N');

  const relationshipDetails = {
    '1:1': {
      title: 'One-to-One (1:1) Relationship',
      example: 'Citizen to Philippine Passport',
      entityA: 'Citizen',
      entityB: 'Passport',
      notation: '| | -------------------- | |',
      explanation: 'Each citizen can possess at most one valid passport, and each passport is issued to exactly one citizen.',
      schemaImplementation: 'Place Foreign Key in either table (typically in Passport referencing Citizen) with a UNIQUE constraint to guarantee only one record matches.',
      ddl: `CREATE TABLE citizens (\n  citizen_id INT PRIMARY KEY,\n  full_name VARCHAR(100) NOT NULL\n);\n\nCREATE TABLE passports (\n  passport_number VARCHAR(20) PRIMARY KEY,\n  citizen_id INT UNIQUE NOT NULL,\n  FOREIGN KEY (citizen_id) REFERENCES citizens(citizen_id)\n);`
    },
    '1:N': {
      title: 'One-to-Many (1:N) Relationship',
      example: 'Department to Professors',
      entityA: 'Department',
      entityB: 'Professor',
      notation: '| | -------------------- |<',
      explanation: 'One department employs multiple professors, but each professor belongs to exactly one department.',
      schemaImplementation: 'The Foreign Key ALWAYS resides on the "Many" (child) side (inside the Professor table referencing the Department table).',
      ddl: `CREATE TABLE departments (\n  dept_id INT PRIMARY KEY,\n  dept_name VARCHAR(50) NOT NULL\n);\n\nCREATE TABLE professors (\n  prof_id INT PRIMARY KEY,\n  name VARCHAR(100) NOT NULL,\n  dept_id INT NOT NULL,\n  FOREIGN KEY (dept_id) REFERENCES departments(dept_id)\n);`
    },
    'M:N': {
      title: 'Many-to-Many (M:N) Relationship',
      example: 'Students to Courses',
      entityA: 'Student',
      entityB: 'Course',
      notation: '>| -------------------- |<',
      explanation: 'A student enrolls in many courses, and a single course has many enrolled students.',
      schemaImplementation: 'Relational databases CANNOT directly link M:N without an Associative Bridge (Junction) Table using a Composite Primary Key.',
      ddl: `CREATE TABLE students (student_id INT PRIMARY KEY, name VARCHAR(100));\nCREATE TABLE courses (course_id VARCHAR(10) PRIMARY KEY, title VARCHAR(100));\n\n-- Bridge / Junction Table\nCREATE TABLE enrollments (\n  student_id INT,\n  course_id VARCHAR(10),\n  enrolled_date DATE NOT NULL,\n  PRIMARY KEY (student_id, course_id),\n  FOREIGN KEY (student_id) REFERENCES students(student_id),\n  FOREIGN KEY (course_id) REFERENCES courses(course_id)\n);`
    }
  };

  const current = relationshipDetails[selectedRelationship];

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col font-sans text-xs">
      <div className="bg-slate-950 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-cyan-400" />
          <span className="font-mono text-xs font-bold text-slate-200">
            Interactive ERD Crow&apos;s Foot Cardinality Explorer
          </span>
        </div>
        <div className="flex rounded-lg bg-slate-900 p-0.5 border border-slate-700">
          {(['1:1', '1:N', 'M:N'] as const).map(type => (
            <button
              key={type}
              onClick={() => setSelectedRelationship(type)}
              className={`px-3 py-1 rounded text-[11px] font-mono font-bold transition ${selectedRelationship === type ? 'bg-cyan-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Visual Entity diagram */}
        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="p-3 rounded-lg bg-indigo-950/80 border border-indigo-700 text-center w-full sm:w-44">
            <span className="text-[10px] text-indigo-400 font-mono font-bold block uppercase">Entity A</span>
            <span className="text-sm font-bold text-white">{current.entityA}</span>
          </div>

          <div className="flex flex-col items-center gap-1 font-mono text-cyan-400">
            <span className="text-[10px] text-slate-400 uppercase tracking-widest">{current.title}</span>
            <span className="text-lg tracking-widest font-extrabold">{current.notation}</span>
            <span className="text-[11px] text-slate-300 font-bold">{current.example}</span>
          </div>

          <div className="p-3 rounded-lg bg-purple-950/80 border border-purple-700 text-center w-full sm:w-44">
            <span className="text-[10px] text-purple-400 font-mono font-bold block uppercase">Entity B</span>
            <span className="text-sm font-bold text-white">{current.entityB}</span>
          </div>
        </div>

        {/* Relational Rule Explanation */}
        <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1.5">
          <div className="flex items-center gap-2 text-amber-400 font-bold text-xs">
            <Info className="w-4 h-4" />
            <span>Relational Schema Architecture Rule:</span>
          </div>
          <p className="text-slate-300 text-[11px] leading-relaxed">
            {current.explanation}
          </p>
          <p className="text-emerald-400 text-[11px] font-mono font-semibold pt-1">
            &rarr; {current.schemaImplementation}
          </p>
        </div>

        {/* DDL Code Window */}
        <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 font-mono text-[11px]">
          <span className="text-slate-400 text-[10px] uppercase font-bold block mb-1">Generated Production SQL Schema:</span>
          <pre className="text-slate-300 overflow-x-auto whitespace-pre leading-relaxed bg-slate-900/60 p-2.5 rounded-lg border border-slate-800/80">
            {current.ddl}
          </pre>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// 4. SQL INJECTION & PARAMETERIZED QUERY SHIELD
// ============================================================================
export const SqlInjectionShield: React.FC<{ slide?: SlideData }> = () => {
  const [userInput, setUserInput] = useState<string>("' OR '1'='1");
  const [passwordInput, setPasswordInput] = useState<string>('anything');

  const vulnerableSql = useMemo(() => {
    return `SELECT * FROM users \nWHERE username = '${userInput}' AND password = '${passwordInput}';`;
  }, [userInput, passwordInput]);

  const parameterizedSql = useMemo(() => {
    return `-- 1. PRE-COMPILED QUERY TEMPLATE (ENGINE LEVEL):\nPREPARE login_stmt FROM \n  'SELECT * FROM users WHERE username = ? AND password = ?';\n\n-- 2. SECURE PARAMETER INGESTION (TREATED AS RAW STRINGS):\nEXECUTE login_stmt USING '${userInput.replace(/'/g, "\\'")}', '${passwordInput}';`;
  }, [userInput, passwordInput]);

  const isBypassed = userInput.includes("' OR '1'='1") || userInput.includes("' OR 1=1");

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col font-sans text-xs">
      <div className="bg-slate-950 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShieldAlert className="w-4 h-4 text-rose-400" />
          <span className="font-mono text-xs font-bold text-slate-200">
            SQL Injection vs. Parameterized Prepared Statements
          </span>
        </div>
        <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${isBypassed ? 'bg-rose-950 text-rose-300 border-rose-800' : 'bg-emerald-950 text-emerald-300 border-emerald-800'}`}>
          {isBypassed ? 'ATTACK VECTOR DETECTED' : 'NORMAL INPUT'}
        </span>
      </div>

      {/* Input controls & presets */}
      <div className="p-3 bg-slate-950/60 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="text-[10px] uppercase font-bold text-slate-400 font-mono">Test Injections:</span>
          <button
            onClick={() => { setUserInput("' OR '1'='1"); setPasswordInput('pass'); }}
            className="px-2 py-1 rounded bg-rose-950/80 hover:bg-rose-900 border border-rose-800 text-rose-300 text-[10px] font-mono transition"
          >
            &apos; OR &apos;1&apos;=&apos;1 (Auth Bypass)
          </button>
          <button
            onClick={() => { setUserInput("admin' --"); setPasswordInput('any'); }}
            className="px-2 py-1 rounded bg-amber-950/80 hover:bg-amber-900 border border-amber-800 text-amber-300 text-[10px] font-mono transition"
          >
            admin&apos; -- (Comment-Out Attack)
          </button>
          <button
            onClick={() => { setUserInput("juan_dela_cruz"); setPasswordInput("SecurePass!2026"); }}
            className="px-2 py-1 rounded bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-800 text-emerald-300 text-[10px] font-mono transition"
          >
            Legitimate User
          </button>
        </div>
      </div>

      <div className="p-3 grid grid-cols-1 sm:grid-cols-2 gap-3 bg-slate-900">
        <div>
          <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Username Input:</label>
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-rose-300 font-mono text-xs focus:outline-none"
          />
        </div>
        <div>
          <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Password Input:</label>
          <input
            type="text"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
            className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-slate-300 font-mono text-xs focus:outline-none"
          />
        </div>
      </div>

      {/* Side-by-Side Comparison */}
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Vulnerable Concatenation */}
        <div className="p-3.5 rounded-xl bg-rose-950/20 border border-rose-800/60 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-1.5 text-rose-400 font-bold mb-2">
              <ShieldAlert className="w-4 h-4" />
              <span>Vulnerable Dynamic Concatenation</span>
            </div>
            <pre className="font-mono text-[11px] text-rose-300 bg-slate-950 p-2.5 rounded-lg border border-rose-900/60 mb-2 whitespace-pre leading-relaxed">
              {vulnerableSql}
            </pre>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              {isBypassed ? (
                <span className="text-rose-400 font-bold">
                  CRITICAL BREACH: Because the developer concatenated strings, the single quote closed the literal and injected a boolean truth condition (&apos;1&apos;=&apos;1&apos;). The database authenticates ANY attacker without password verification!
                </span>
              ) : (
                <span>Works for regular text, but remains catastrophic if an attacker inputs quotation marks or comment characters.</span>
              )}
            </p>
          </div>
        </div>

        {/* Parameterized Prepared Statement */}
        <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-800/60 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-1.5 text-emerald-400 font-bold mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Parameterized Prepared Statement</span>
            </div>
            <pre className="font-mono text-[11px] text-emerald-300 bg-slate-950 p-2.5 rounded-lg border border-emerald-900/60 mb-2 whitespace-pre leading-relaxed">
              {parameterizedSql}
            </pre>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              <span className="text-emerald-400 font-bold">
                100% IMMUNE: The query blueprint is parsed and compiled BEFORE incoming values arrive. The entire string &quot;{userInput}&quot; is treated as literal data bytes, never executable code!
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// 5. MULTI-TABLE JOIN MATRIX VISUALIZER
// ============================================================================
export const SqlJoinMatrixVisualizer: React.FC<{ slide?: SlideData }> = () => {
  const [joinType, setJoinType] = useState<'INNER' | 'LEFT' | 'RIGHT' | 'FULL'>('INNER');

  const customers = [
    { id: 1, name: 'Alice', city: 'Manila' },
    { id: 2, name: 'Bob', city: 'Cebu' },
    { id: 3, name: 'Charlie', city: 'Davao' },
    { id: 4, name: 'Diana', city: 'Baguio' }, // No orders
  ];

  const orders = [
    { order_id: 101, customer_id: 1, item: 'Mechanical Keyboard', amount: '$85' },
    { order_id: 102, customer_id: 1, item: 'USB-C Cable', amount: '$15' },
    { order_id: 103, customer_id: 2, item: 'Gaming Mouse', amount: '$45' },
    { order_id: 104, customer_id: 99, item: 'Laptop Stand', amount: '$30' }, // Orphan order
  ];

  const joinResults = useMemo(() => {
    if (joinType === 'INNER') {
      const rows: any[] = [];
      customers.forEach(c => {
        orders.filter(o => o.customer_id === c.id).forEach(o => {
          rows.push({ cust_id: c.id, name: c.name, order_id: o.order_id, item: o.item, amount: o.amount });
        });
      });
      return rows;
    } else if (joinType === 'LEFT') {
      const rows: any[] = [];
      customers.forEach(c => {
        const matches = orders.filter(o => o.customer_id === c.id);
        if (matches.length > 0) {
          matches.forEach(o => rows.push({ cust_id: c.id, name: c.name, order_id: o.order_id, item: o.item, amount: o.amount }));
        } else {
          rows.push({ cust_id: c.id, name: c.name, order_id: 'NULL', item: 'NULL', amount: 'NULL' });
        }
      });
      return rows;
    } else if (joinType === 'RIGHT') {
      const rows: any[] = [];
      orders.forEach(o => {
        const match = customers.find(c => c.id === o.customer_id);
        if (match) {
          rows.push({ cust_id: match.id, name: match.name, order_id: o.order_id, item: o.item, amount: o.amount });
        } else {
          rows.push({ cust_id: 'NULL', name: 'NULL', order_id: o.order_id, item: o.item, amount: o.amount });
        }
      });
      return rows;
    } else {
      // FULL OUTER JOIN
      const rows: any[] = [];
      customers.forEach(c => {
        const matches = orders.filter(o => o.customer_id === c.id);
        if (matches.length > 0) {
          matches.forEach(o => rows.push({ cust_id: c.id, name: c.name, order_id: o.order_id, item: o.item, amount: o.amount }));
        } else {
          rows.push({ cust_id: c.id, name: c.name, order_id: 'NULL', item: 'NULL', amount: 'NULL' });
        }
      });
      orders.filter(o => !customers.some(c => c.id === o.customer_id)).forEach(o => {
        rows.push({ cust_id: 'NULL', name: 'NULL', order_id: o.order_id, item: o.item, amount: o.amount });
      });
      return rows;
    }
  }, [joinType]);

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col font-sans text-xs">
      <div className="bg-slate-950 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <LinkIcon className="w-4 h-4 text-indigo-400" />
          <span className="font-mono text-xs font-bold text-slate-200">
            Multi-Table SQL JOIN Visual Matrix
          </span>
        </div>
        <div className="flex rounded-lg bg-slate-900 p-0.5 border border-slate-700">
          {(['INNER', 'LEFT', 'RIGHT', 'FULL'] as const).map(type => (
            <button
              key={type}
              onClick={() => setJoinType(type)}
              className={`px-3 py-1 rounded text-[11px] font-mono font-bold transition ${joinType === type ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}
            >
              {type} JOIN
            </button>
          ))}
        </div>
      </div>

      {/* SQL Query Preview */}
      <div className="px-4 py-2 bg-slate-950/80 border-b border-slate-800 font-mono text-[11px] text-emerald-300 flex items-center justify-between">
        <code>
          SELECT c.id, c.name, o.order_id, o.item FROM customers c {joinType} JOIN orders o ON c.id = o.customer_id;
        </code>
        <span className="text-[10px] text-slate-400">{joinResults.length} rows returned</span>
      </div>

      {/* Output Result Table */}
      <div className="p-4 overflow-x-auto">
        <table className="w-full text-left font-mono text-[11px] border border-slate-800 rounded-lg overflow-hidden">
          <thead className="bg-slate-950 text-slate-400 uppercase text-[10px] border-b border-slate-800">
            <tr>
              <th className="py-2 px-3 text-indigo-400">c.id</th>
              <th className="py-2 px-3 text-indigo-400">c.name</th>
              <th className="py-2 px-3 text-purple-400">o.order_id</th>
              <th className="py-2 px-3 text-purple-400">o.item</th>
              <th className="py-2 px-3 text-purple-400">o.amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 bg-slate-950/40">
            {joinResults.map((r, idx) => (
              <tr key={idx} className="hover:bg-slate-800/40 transition">
                <td className="py-2 px-3 text-slate-300">{r.cust_id === 'NULL' ? <span className="text-amber-400 font-bold">NULL</span> : r.cust_id}</td>
                <td className="py-2 px-3 text-slate-300">{r.name === 'NULL' ? <span className="text-amber-400 font-bold">NULL</span> : r.name}</td>
                <td className="py-2 px-3 text-slate-300">{r.order_id === 'NULL' ? <span className="text-amber-400 font-bold">NULL</span> : r.order_id}</td>
                <td className="py-2 px-3 text-slate-300">{r.item === 'NULL' ? <span className="text-amber-400 font-bold">NULL</span> : r.item}</td>
                <td className="py-2 px-3 text-slate-300">{r.amount === 'NULL' ? <span className="text-amber-400 font-bold">NULL</span> : r.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
