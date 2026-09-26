'use client';

import React from 'react';
import Link from 'next/link';
import {
  Gamepad2,
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  Layers,
  Code2,
  Smartphone,
  Cpu,
  Sparkles,
  ExternalLink,
  Play
} from 'lucide-react';

export default function EventDrivenProgrammingCoursePage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-700 font-sans pb-24 antialiased selection:bg-sky-500 selection:text-white">
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 sm:px-6 py-3.5 shadow-sm">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
          <Link href="/courses/" className="flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-slate-900 transition">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Courses</span>
          </Link>

          <div className="flex items-center gap-2">
            <Link
              href="/lesson/?id=eventprog-w1"
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-sky-50 text-sky-700 border border-sky-200 hover:bg-sky-100 transition flex items-center gap-1.5"
            >
              <Play className="w-3 h-3 fill-current" />
              <span>Week 1 Slides</span>
            </Link>
            <Link
              href="/godot/"
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition flex items-center gap-1.5"
            >
              <BookOpen className="w-3 h-3" />
              <span>Launch Lab Manual</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-12 space-y-10">
        <header className="border-b border-slate-200 pb-8">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="font-mono text-xs font-extrabold px-2.5 py-1 rounded-md bg-sky-100 text-sky-800 border border-sky-200">
              IT-EDP1
            </span>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              18 Weeks &bull; 3 Credit Units &bull; Laboratory &amp; Lecture
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Event-Driven Programming with Godot Engine 4
          </h1>
          <p className="text-base text-slate-600 leading-relaxed max-w-3xl">
            A comprehensive collegiate curriculum exploring event-driven design patterns, game loops, scene trees, kinematic 2D physics, mobile viewport scaling, and GDScript 2.0 object-oriented game development.
          </p>
        </header>

        {/* Course Overview Section */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-5">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <Cpu className="w-5 h-5 text-sky-600" />
            <span>Course Description &amp; Architectural Focus</span>
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Event-Driven Programming (EDP) is the cornerstone of modern interactive software, graphical user interfaces (GUIs), and real-time game engines. Unlike traditional sequential programs that follow a rigid line-by-line flow from main entry to exit, event-driven architectures execute asynchronously in response to discrete internal or external stimuli—such as touchscreen taps, keyboard actuations, timer timeouts, network packets, or physical collision signals.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            In this course, students utilize <strong>Godot Engine 4</strong>, an open-source, industry-standard 2D/3D game engine. Students learn how Godot&apos;s main loop synchronizes rendering cycles (<code>_process</code>) with deterministic, fixed-rate physics ticks (<code>_physics_process</code> at 60 Hz). Through structured laboratory assignments, students construct full 2D mobile platformer prototypes featuring custom kinematic physics, surface collision masks, animated sprites, and touch input emulation.
          </p>
        </section>

        {/* 18-Week Syllabus Outline */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <Layers className="w-5 h-5 text-indigo-600" />
            <span>Semester Syllabus &amp; Module Progression</span>
          </h2>

          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
              <span className="text-[10px] font-bold uppercase tracking-wider text-sky-700 font-mono">Week 1 &ndash; 2: Core Foundations</span>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base mt-0.5 mb-1">
                Engine Setup, Viewport Stretch, &amp; 2D Physics Layers
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Project initialization, Vulkan Mobile vs Compatibility renderers, 1280×720 canvas_items stretch mode, touch emulation, StaticBody2D terrain, TextureRect tiling, CharacterBody2D assembly, and collision masks.
              </p>
              <div className="mt-2.5 flex items-center gap-2">
                <Link href="/godot/" className="text-xs font-bold text-sky-600 hover:underline">
                  &rarr; Week 1 Practical Lab Manual
                </Link>
                <span className="text-slate-300">&bull;</span>
                <Link href="/lesson/?id=eventprog-w1" className="text-xs font-bold text-sky-600 hover:underline">
                  &rarr; Week 1 Interactive Slides
                </Link>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
              <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-700 font-mono">Week 3 &ndash; 4: GDScript Kinematics</span>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base mt-0.5 mb-1">
                Euler Gravity Integration &amp; Kinematic Character Controllers
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Frame-independent delta time, acceleration curves, jump impulse velocities, floor slope snapping, horizontal deceleration, and sprite animation state machines.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
              <span className="text-[10px] font-bold uppercase tracking-wider text-purple-700 font-mono">Week 5 &ndash; 7: Event Signals &amp; Observer Pattern</span>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base mt-0.5 mb-1">
                Custom Signals, Area2D Trigger Volumes, &amp; Collectibles
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Decoupled system architecture via Godot signals. Connecting <code>body_entered</code> events, coin pickups, hazard death planes, and health UI meters without circular script dependencies.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 font-mono">Week 8 &ndash; 10: Mobile Touch Controls</span>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base mt-0.5 mb-1">
                Virtual Joysticks, Screen Touch Buttons, &amp; Gesture Recognition
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Designing on-screen virtual d-pads and jump buttons using <code>TouchScreenButton</code>, multi-touch event filtering, and responsive HUD anchoring across diverse smartphone aspect ratios.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 font-mono">Week 11 &ndash; 14: Game State &amp; Data Persistence</span>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base mt-0.5 mb-1">
                Autoload Singletons, Scene Changing, &amp; JSON File I/O
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Managing global game state across levels using Autoloads, loading and saving high scores to <code>user://</code> storage via <code>FileAccess</code>, and pause menus.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
              <span className="text-[10px] font-bold uppercase tracking-wider text-rose-700 font-mono">Week 15 &ndash; 18: Final Capstone Project</span>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base mt-0.5 mb-1">
                Complete 2D Mobile Game Deployment &amp; Optimization
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Texture atlas compression, audio bus management, particle effects, Android APK export templates, debug signing, and final academic project presentation.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Highlights Section */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-4">
          <h2 className="text-xl font-bold text-slate-900">Key Takeaway Engineering Concepts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50">
              <h4 className="font-bold text-slate-900 mb-1">Collision Layer vs Mask</h4>
              <p className="text-slate-600 leading-relaxed">
                Layer defines what channel an entity resides on. Mask defines what channels the entity actively queries. This 32-bit bitmask matrix avoids CPU-heavy collision false positives.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50">
              <h4 className="font-bold text-slate-900 mb-1">_physics_process vs _process</h4>
              <p className="text-slate-600 leading-relaxed">
                Graphics rendering fluctuates with monitor refresh rates (60, 120, 144Hz). Physics simulations must run at a fixed deterministic rate (60Hz) to prevent objects tunneling through walls.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
