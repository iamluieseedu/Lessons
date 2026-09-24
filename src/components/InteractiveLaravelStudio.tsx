'use client';

import React, { useState } from 'react';
import { SlideData } from '@/types/slide';
import { 
  Code2, 
  Play, 
  Brain, 
  Copy, 
  Check, 
  Terminal, 
  Globe, 
  Database, 
  Lightbulb, 
  Sparkles,
  Layers,
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { getWebDev3SlideExample, WebDev3Example } from './WebDev3SlideExamples';
import {
  LaravelTerminalSimulator,
  Laravel11ArchitectureDiff,
  LaravelRequestPipeline,
  LaravelEloquentPlayground,
  LaravelBladeCompiler,
  LaravelMigrationBuilder,
  LaravelCsrfValidationSandbox,
  LaravelTinkerShell,
  LaravelDirectoryExplorer
} from './LaravelSimulations';

interface InteractiveLaravelStudioProps {
  slide: SlideData;
}

export const InteractiveLaravelStudio: React.FC<InteractiveLaravelStudioProps> = ({ slide }) => {
  const example = getWebDev3SlideExample(slide.id, slide);
  const [activeTab, setActiveTab] = useState<'code' | 'output' | 'interactive'>('code');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(example.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const renderInteractiveSimulation = () => {
    switch (example.simulation) {
      case 'terminal':
        return <LaravelTerminalSimulator />;
      case 'pipeline':
        return <LaravelRequestPipeline />;
      case 'eloquent':
        return <LaravelEloquentPlayground />;
      case 'blade':
        return <LaravelBladeCompiler />;
      case 'migration':
        return <LaravelMigrationBuilder />;
      case 'csrf':
        return <LaravelCsrfValidationSandbox />;
      case 'tinker':
        return <LaravelTinkerShell />;
      case 'explorer':
        return <LaravelDirectoryExplorer />;
      case 'diff':
        return <Laravel11ArchitectureDiff />;
      default:
        return <LaravelTerminalSimulator />;
    }
  };

  const renderLiveOutput = () => {
    if (example.outputType === 'api_json' && example.jsonOutput) {
      return (
        <div className="flex flex-col h-full bg-slate-950 p-4 space-y-3 font-mono text-xs text-slate-300">
          <div className="flex items-center justify-between bg-slate-900 px-3 py-2 rounded-xl border border-slate-800">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-400 font-bold text-[10px]">HTTP 200 OK</span>
              <span className="text-slate-400 text-[11px] truncate">{example.outputTitle || 'GET /api/v1/resource'}</span>
            </div>
            <span className="text-[10px] text-slate-500 font-sans">application/json</span>
          </div>
          <div className="bg-black/70 p-3.5 rounded-xl border border-slate-800 text-emerald-400 overflow-x-auto text-[11px] leading-relaxed max-h-[340px]">
            <pre>{JSON.stringify(example.jsonOutput, null, 2)}</pre>
          </div>
          <p className="text-[11px] text-slate-400 font-sans italic flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Serialized output delivered in 8ms by Laravel response pipeline.
          </p>
        </div>
      );
    }

    if (example.outputType === 'artisan_cli' && example.cliOutput) {
      return (
        <div className="flex flex-col h-full bg-slate-950 p-4 space-y-3 font-mono text-xs text-slate-300">
          <div className="flex items-center justify-between text-slate-500 text-[11px] pb-2 border-b border-slate-800">
            <span className="flex items-center gap-1.5 text-slate-400">
              <Terminal className="w-3.5 h-3.5 text-indigo-400" />
              <span>{example.outputTitle || 'Terminal CLI'}</span>
            </span>
            <span className="text-emerald-400 font-bold text-[10px] bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              {example.cliOutput.status || 'Exit Code: 0 (Success)'}
            </span>
          </div>
          <div className="bg-black/80 p-3.5 rounded-xl border border-slate-800 text-slate-200 space-y-2 text-[11px] leading-relaxed max-h-[340px] overflow-y-auto">
            <p className="text-slate-400 font-bold">$ {example.cliOutput.cmd}</p>
            {example.cliOutput.lines.map((line, i) => (
              <p key={i} className={line.includes('INFO') || line.includes('DONE') || line.includes('✓') ? 'text-emerald-400 font-semibold' : 'text-slate-300'}>
                {line}
              </p>
            ))}
          </div>
        </div>
      );
    }

    if (example.outputType === 'blade_preview' && example.bladeOutput) {
      return (
        <div className="flex flex-col h-full bg-slate-900 p-4 space-y-3 font-sans">
          <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-2">
            <span className="font-bold uppercase tracking-wider text-rose-400 flex items-center gap-1.5 font-lexend">
              <Globe className="w-3.5 h-3.5 text-rose-400" />
              {example.outputTitle || 'Rendered Blade Viewport'}
            </span>
            <span className="bg-rose-500/20 text-rose-300 px-2.5 py-0.5 rounded-full font-mono text-[10px]">
              Live HTML5 Component
            </span>
          </div>
          <div className="bg-white rounded-2xl p-5 text-slate-900 shadow-xl border border-slate-200 space-y-3">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
              <span className="text-xs font-black text-rose-600 uppercase tracking-wider font-lexend">
                {example.bladeOutput.badge}
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                {example.bladeOutput.status}
              </span>
            </div>
            <h4 className="font-lexend text-base font-black text-slate-900 leading-snug">
              {example.bladeOutput.title}
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              {example.bladeOutput.content}
            </p>
            <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-100">
              <span>Author: <strong className="text-slate-700">{example.bladeOutput.author}</strong></span>
              <span className="text-rose-600 font-bold hover:underline cursor-pointer">Read Full Lesson →</span>
            </div>
          </div>
        </div>
      );
    }

    if (example.outputType === 'eloquent_db' && example.dbOutput) {
      return (
        <div className="flex flex-col h-full bg-slate-950 p-4 space-y-3 font-mono text-xs text-slate-300">
          <div className="flex items-center justify-between text-slate-500 text-[11px] pb-2 border-b border-slate-800">
            <span className="flex items-center gap-1.5 text-sky-400 font-bold font-sans">
              <Database className="w-3.5 h-3.5 text-sky-400" />
              {example.outputTitle || 'Database Schema & Records'}
            </span>
            <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded">SQLite / MySQL</span>
          </div>
          <div className="rounded-xl border border-slate-800 overflow-x-auto bg-black/60">
            <table className="w-full text-left text-[11px]">
              <thead className="bg-slate-900 text-slate-400 uppercase text-[9px] font-bold border-b border-slate-800">
                <tr>
                  {example.dbOutput.columns.map((col, i) => (
                    <th key={i} className="px-3 py-2 font-mono">{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80">
                {example.dbOutput.rows.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-900/50">
                    {row.map((cell, j) => (
                      <td key={j} className="px-3 py-2 text-slate-200">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[10px] text-slate-500 font-sans italic">
            ✓ Hydrated into Eloquent collection with mass-assignment protection.
          </p>
        </div>
      );
    }

    return (
      <div className="p-4 text-slate-300 font-mono text-xs">
        Execution completed successfully.
      </div>
    );
  };

  return (
    <div className="w-full h-full min-h-[380px] lg:min-h-[480px] bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between font-mono text-xs">
      {/* Header with 3 Tabs */}
      <div className="bg-slate-900 px-3.5 py-2.5 border-b border-slate-800 flex flex-wrap items-center justify-between gap-2 font-sans select-none">
        <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-2xl border border-slate-800">
          <button
            onClick={() => setActiveTab('code')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition ${
              activeTab === 'code'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Code Example</span>
          </button>
          
          <button
            onClick={() => setActiveTab('output')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition ${
              activeTab === 'output'
                ? 'bg-rose-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Live Output</span>
          </button>

          {example.simulation && (
            <button
              onClick={() => setActiveTab('interactive')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                activeTab === 'interactive'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Brain className="w-3.5 h-3.5" />
              <span>Interactive Studio</span>
            </button>
          )}
        </div>

        <div className="flex items-center gap-2">
          <span className="hidden sm:inline text-[10px] text-slate-400 font-mono font-bold px-2 py-0.5 rounded bg-slate-800">
            {example.lang === 'blade' ? 'Blade Template' : example.lang === 'bash' ? 'Artisan CLI' : 'PHP 8.2+'}
          </span>
          <button
            onClick={handleCopy}
            className="text-slate-400 hover:text-white px-2.5 py-1 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs flex items-center gap-1.5 transition font-semibold"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>
      </div>

      {/* Tab Body */}
      <div className="flex-grow overflow-y-auto bg-black/40">
        {activeTab === 'code' && (
          <div className="p-4 select-text font-mono flex flex-col justify-between h-full space-y-4">
            <pre className="text-slate-200 leading-relaxed text-xs sm:text-[13px] whitespace-pre font-mono overflow-x-auto">
              {example.code}
            </pre>
            <div className="bg-indigo-950/40 border border-indigo-900/60 rounded-xl p-3 text-slate-300 font-sans text-xs">
              <strong className="text-indigo-400 font-bold block mb-1 flex items-center gap-1.5">
                <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                How This Works in Production:
              </strong>
              <p className="text-[11px] leading-relaxed text-slate-300">
                {example.explanation}
              </p>
            </div>
          </div>
        )}

        {activeTab === 'output' && renderLiveOutput()}

        {activeTab === 'interactive' && renderInteractiveSimulation()}
      </div>

      {/* Footer Status Bar */}
      <div className="bg-slate-900 px-4 py-2 text-[11px] text-slate-400 border-t border-slate-800 flex justify-between items-center font-sans">
        <span className="text-slate-400 font-mono text-[10px]">Laravel 11.x • Modern PHP Standards</span>
        <span className="text-indigo-400 font-semibold text-[11px]">
          {activeTab === 'code' ? 'Verified Syntax Example' : activeTab === 'output' ? 'Live Runtime Output' : 'Interactive Playground'}
        </span>
      </div>
    </div>
  );
};
