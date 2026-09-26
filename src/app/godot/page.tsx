'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Gamepad2,
  ArrowLeft,
  Copy,
  Check,
  CheckCircle2,
  Layers,
  Smartphone,
  Box,
  Code,
  Sparkles,
  Terminal,
  ShieldAlert,
  FolderGit2,
  Camera,
  FileCode,
  ListChecks,
  Monitor,
  Cpu,
  BookOpen
} from 'lucide-react';

export default function GodotLabManualPage() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  useEffect(() => {
    try {
      const saved = localStorage.getItem('godot_app_checklist');
      if (saved) {
        setCheckedItems(JSON.parse(saved));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const toggleCheck = (id: string) => {
    const updated = { ...checkedItems, [id]: !checkedItems[id] };
    setCheckedItems(updated);
    try {
      localStorage.setItem('godot_app_checklist', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  const copyCode = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const milestones = [
    { id: 'm1', label: 'Milestone 1: Project Creation, Mobile Renderer & Pixel Art Nearest Filter (1280×720, canvas_items)' },
    { id: 'm2', label: 'Milestone 2: Blank Root Node2D & Background PNG (TextureRect Tile Mode / Sprite2D z-index -10)' },
    { id: 'm3', label: 'Milestone 3: Terrain Setup (TileMap with 16×16 Physics TileSet or TextureRect Platform)' },
    { id: 'm4', label: 'Milestone 4: Character Assembly (CharacterBody2D + AnimatedSprite2D SpriteFrames / CapsuleShape2D)' },
    { id: 'm5', label: 'Milestone 5: GDScript Kinematic Physics & Animations (gravity, jump, move_toward, flip_h, move_and_slide)' },
    { id: 'm6', label: 'Milestone 6: 2D Physics Layer Matrix (Terrain Layer 1, Player Mask 1) & Camera2D Follow' },
  ];

  const completedCount = milestones.filter(m => checkedItems[m.id]).length;
  const progressPercent = Math.round((completedCount / milestones.length) * 100);

  const playerGdScript = `extends CharacterBody2D

## 2D Kinematic Player Controller with Gravity, Jump, and Animations
## Godot Engine 4.x CharacterBody2D Implementation

# Movement Constants
const SPEED: float = 300.0
const JUMP_VELOCITY: float = -400.0

# Fetch default 2D gravity value from Project Settings (default: 980 px/s²)
var gravity: float = ProjectSettings.get_setting("physics/2d/default_gravity")

# Reference to the AnimatedSprite2D child node
@onready var animated_sprite: AnimatedSprite2D = $AnimatedSprite2D

func _physics_process(delta: float) -> void:
	# 1. APPLY GRAVITY WHEN AIRBORNE (+Y is downward in Godot 2D)
	if not is_on_floor():
		velocity.y += gravity * delta

	# 2. HANDLE JUMP IMPULSE
	# ui_accept corresponds to Spacebar, Enter, or Virtual Mobile Jump Button
	if Input.is_action_just_pressed("ui_accept") and is_on_floor():
		velocity.y = JUMP_VELOCITY

	# 3. READ HORIZONTAL INPUT AXIS (-1.0 for Left, +1.0 for Right, 0.0 for Idle)
	var direction: float = Input.get_axis("ui_left", "ui_right")

	# 4. HANDLE MOVEMENT & ANIMATION STATES
	if direction != 0.0:
		velocity.x = direction * SPEED
		# Flip sprite horizontally based on moving direction
		animated_sprite.flip_h = direction < 0.0
		# Play running animation when grounded
		if is_on_floor():
			animated_sprite.play("run")
	else:
		# Smooth deceleration towards 0 when no keys are held
		velocity.x = move_toward(velocity.x, 0.0, SPEED)
		# Play idle animation when standing on the ground
		if is_on_floor():
			animated_sprite.play("idle")

	# 5. PLAY JUMP ANIMATION IN AIR
	if not is_on_floor():
		animated_sprite.play("jump")

	# 6. EXECUTE KINEMATIC COLLISION RESOLUTION
	# move_and_slide() automatically applies internal velocity and updates is_on_floor()!
	move_and_slide()`;

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-700 font-sans pb-24 antialiased selection:bg-sky-500 selection:text-white">
      {/* Sticky Top Navbar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 sm:px-6 py-3.5 shadow-sm">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600">
              <Gamepad2 className="w-4 h-4" />
            </span>
            <span className="font-extrabold text-sm text-slate-900 tracking-tight">
              IT-EDP1: Event-Driven Programming
            </span>
            <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-sky-50 text-sky-700 border border-sky-200">
              Godot 4 &bull; Week 1
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/?filter=eventprog"
              className="text-xs font-semibold text-slate-600 hover:text-slate-900 px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition flex items-center gap-1.5 shadow-sm"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Course</span>
            </Link>
            <Link
              href="/lesson/?id=eventprog-w1"
              className="text-xs font-semibold text-slate-600 hover:text-slate-900 px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition flex items-center gap-1.5 shadow-sm"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Slides</span>
            </Link>
            <Link
              href="/quiz/?id=eventprog-w1"
              className="text-xs font-semibold text-white bg-sky-600 hover:bg-sky-700 px-3 py-1.5 rounded-lg transition flex items-center gap-1.5 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Quiz</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Reading Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-10 space-y-12">
        {/* Header Section */}
        <header className="border-b border-slate-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-600 block mb-2 font-mono flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5" />
            Laboratory Manual &bull; Week 1 Practical Exercise
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Building Your First 2D Game in Godot Engine 4
          </h1>
          <p className="text-slate-600 text-base leading-relaxed">
            Construct a mobile-ready 2D game scene from scratch. You will configure native mobile display viewports, construct hierarchical node trees, compose static terrain geometry, assemble physics-driven kinematic player bodies, write deterministic movement scripts in GDScript, and configure 2D collision layer masks so character bodies interact seamlessly with the physical world.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
            <div className="bg-white p-3 rounded-xl border border-slate-200 flex items-center gap-3 shadow-xs">
              <div className="w-9 h-9 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                <Smartphone className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-600 block">Viewport</span>
                <span className="text-xs font-bold text-slate-900">1280×720 Mobile</span>
              </div>
            </div>

            <div className="bg-white p-3 rounded-xl border border-slate-200 flex items-center gap-3 shadow-xs">
              <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <Box className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-600 block">Engine</span>
                <span className="text-xs font-bold text-slate-900">Godot 4.x Standard</span>
              </div>
            </div>

            <div className="bg-white p-3 rounded-xl border border-slate-200 flex items-center gap-3 shadow-xs">
              <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                <Code className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-600 block">Language</span>
                <span className="text-xs font-bold text-slate-900">GDScript 2.0</span>
              </div>
            </div>

            <div className="bg-white p-3 rounded-xl border border-slate-200 flex items-center gap-3 shadow-xs">
              <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                <Layers className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-600 block">Physics</span>
                <span className="text-xs font-bold text-slate-900">2D Layer Matrix</span>
              </div>
            </div>
          </div>
        </header>



        {/* Interactive Progress Checklist */}
        <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <ListChecks className="w-5 h-5 text-sky-600" />
              <span>Interactive Milestone Progress Checklist</span>
            </h3>
            <span className="text-xs font-extrabold text-sky-600 bg-sky-50 px-2.5 py-1 rounded-full border border-sky-200">
              {progressPercent}% Completed ({completedCount}/{milestones.length})
            </span>
          </div>
          <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden mb-5">
            <div
              className="bg-emerald-500 h-full transition-all duration-300 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <div className="space-y-2.5">
            {milestones.map((m) => (
              <label
                key={m.id}
                onClick={() => toggleCheck(m.id)}
                className={`flex items-start gap-3 p-3 rounded-xl border transition cursor-pointer select-none ${
                  checkedItems[m.id]
                    ? 'bg-emerald-50/50 border-emerald-200 text-slate-500'
                    : 'bg-slate-50/50 border-slate-200 hover:border-slate-300 text-slate-800'
                }`}
              >
                <input
                  type="checkbox"
                  checked={!!checkedItems[m.id]}
                  onChange={() => {}}
                  className="mt-0.5 rounded text-emerald-600 focus:ring-emerald-500 w-4 h-4"
                />
                <span className={`text-xs sm:text-sm font-medium leading-relaxed ${checkedItems[m.id] ? 'line-through' : ''}`}>
                  {m.label}
                </span>
              </label>
            ))}
          </div>
        </section>

        {/* MILESTONE 1 */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-md bg-sky-600 text-white font-extrabold text-xs uppercase tracking-wider">
              Milestone 1
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Project Creation & Mobile Display Configuration
            </h2>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-5">
            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-700 text-xs flex items-center justify-center font-bold">1</span>
                Create Project in Godot 4
              </h3>
              <ol className="list-decimal pl-6 text-sm text-slate-600 space-y-1.5">
                <li>Launch <strong>Godot Engine 4.x</strong> and click <strong>New Project</strong>.</li>
                <li>Set <strong>Project Name:</strong> <code className="bg-slate-100 text-sky-700 px-1.5 py-0.5 rounded font-mono text-xs">Godot_2D_Mobile_Game</code>.</li>
                <li>Click <strong>Create Folder</strong> to ensure a dedicated project root.</li>
                <li>Select Renderer: <strong>Mobile</strong> (Vulkan) or <strong>Compatibility</strong> (OpenGL 3 - recommended for low-spec laptops).</li>
                <li>Click <strong>Create & Edit</strong>.</li>
              </ol>
            </div>

            <div className="space-y-2 pt-3 border-t border-slate-100">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-700 text-xs flex items-center justify-center font-bold">2</span>
                Configure Mobile Resolution, Stretch Mode &amp; Pixel Art Filter
              </h3>
              <p className="text-sm text-slate-600">
                Navigate to <strong>Project &gt; Project Settings</strong> to configure display and rendering:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-slate-700">
                      <th className="p-2.5 font-bold">Setting Path</th>
                      <th className="p-2.5 font-bold">Value</th>
                      <th className="p-2.5 font-bold">Tutorial Reference / Purpose</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600 font-mono text-xs">
                    <tr>
                      <td className="p-2.5 font-sans font-medium text-slate-800">Display &gt; Window &gt; Size</td>
                      <td className="p-2.5 text-sky-700 font-bold">1280 × 720</td>
                      <td className="p-2.5 font-sans text-slate-500">Standard 16:9 mobile landscape base resolution.</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-sans font-medium text-slate-800">Display &gt; Window &gt; Stretch &gt; Mode</td>
                      <td className="p-2.5 text-emerald-700 font-bold">canvas_items</td>
                      <td className="p-2.5 font-sans text-slate-500">Crisply scales 2D vector &amp; pixel art across phone screens.</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-sans font-medium text-slate-800">Display &gt; Window &gt; Stretch &gt; Aspect</td>
                      <td className="p-2.5 text-emerald-700 font-bold">keep</td>
                      <td className="p-2.5 font-sans text-slate-500">Preserves screen ratio; eliminates aspect distortion.</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-sans font-medium text-slate-800">Rendering &gt; Textures &gt; Canvas Textures &gt; Default Texture Filter</td>
                      <td className="p-2.5 text-purple-700 font-bold">Nearest</td>
                      <td className="p-2.5 font-sans text-slate-500"><strong>Critical for Pixel Art!</strong> Disables bilinear blur so Pixel Adventure sprites remain razor-sharp.</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-sans font-medium text-slate-800">Input Devices &gt; Pointing &gt; Emulate Touch</td>
                      <td className="p-2.5 text-indigo-700 font-bold">ON</td>
                      <td className="p-2.5 font-sans text-slate-500">Allows testing mobile touch inputs using desktop mouse clicks.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Asset Pack Note */}
            <div className="bg-sky-50/70 border border-sky-200/80 rounded-xl p-3.5 text-xs text-slate-700 flex items-start gap-2.5">
              <Box className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
              <div>
                <strong>Assets Used in Tutorial:</strong> The tutorial uses the free <a href="https://pixelfrog-assets.itch.io/pixel-adventure-1" target="_blank" rel="noopener noreferrer" className="text-sky-700 font-bold underline hover:text-sky-800">Pixel Adventure 1</a> pack by Pixel Frog (Ninja Frog, Background tiles, Terrain tiles). Unzip into your project folder under <code className="font-mono bg-sky-100/80 px-1 py-0.2 rounded text-sky-900">res://assets/</code>.
              </div>
            </div>
          </div>
        </section>

        {/* MILESTONE 2 */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-md bg-sky-600 text-white font-extrabold text-xs uppercase tracking-wider">
              Milestone 2
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Blank Root Node &amp; Seamless Background Setup (TextureRect Tiling)
            </h2>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <p className="text-sm text-slate-600 leading-relaxed">
              In Godot, backgrounds can be made from a single full illustration or an infinitely repeating 64×64 PNG tile. We utilize a <code className="text-sky-700 font-mono font-bold">TextureRect</code> with <strong>Tile</strong> stretch mode so small seamless textures repeat across any mobile screen size:
            </p>

            <ol className="list-decimal pl-6 text-sm text-slate-600 space-y-2.5">
              <li>In the <strong>Scene Dock</strong> (top-left), click <strong>2D Scene</strong> to create a root <code className="text-sky-700 font-mono font-bold">Node2D</code>. Rename it to <code className="text-slate-900 font-bold font-mono">Main</code> (or <code className="text-slate-900 font-bold font-mono">World</code>).</li>
              <li>Press <kbd className="px-1.5 py-0.5 bg-slate-100 border border-slate-300 rounded text-xs font-mono">Ctrl + S</kbd> and save as <code className="text-sky-700 font-mono">res://scenes/main.tscn</code>.</li>
              <li>Right-click <code className="text-slate-900 font-bold font-mono">Main</code> &gt; <strong>Add Child Node...</strong> &gt; search for <strong>TextureRect</strong>. Rename to <code className="text-slate-900 font-mono font-bold">Background</code>.</li>
              <li>Drag your background tile (e.g. <code className="text-slate-700 font-mono">Blue.png</code> or <code className="text-slate-700 font-mono">Brown.png</code>) into the <strong>Texture</strong> property in the Inspector.</li>
              <li>Under <strong>CanvasItem &gt; Texture &gt; Repeat</strong>, set to <code className="text-emerald-700 font-mono font-bold">Enabled</code>.</li>
              <li>Under <strong>TextureRect &gt; Stretch Mode</strong>, set to <code className="text-emerald-700 font-mono font-bold">Tile</code> (<code className="text-xs font-mono text-slate-500">STRETCH_TILE</code>).</li>
              <li>Set <strong>Layout &gt; Transform &gt; Size</strong> to <code className="text-sky-700 font-mono font-bold">1280 × 720</code> (or click the green <strong>Layout</strong> button in the 2D viewport header &gt; <strong>Full Rect</strong>).</li>
              <li>Under <strong>CanvasItem &gt; Ordering</strong>, set <code className="text-emerald-700 font-mono font-bold">Z Index = -10</code> so all characters and terrain render in front.</li>
            </ol>

            <div className="bg-slate-900 text-slate-200 p-4 rounded-xl font-mono text-xs leading-relaxed">
              <span className="text-slate-500 uppercase tracking-wider text-[10px] block mb-1">Scene Tree Hierarchy:</span>
              <p className="text-blue-400 font-bold">Main [Node2D]</p>
              <p className="pl-4 text-amber-300">&boxur; Background [TextureRect] &mdash; (Repeat: Enabled | Stretch: Tile | Size: 1280×720 | Z-Index: -10)</p>
            </div>
          </div>
        </section>

        {/* MILESTONE 3 */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-md bg-sky-600 text-white font-extrabold text-xs uppercase tracking-wider">
              Milestone 3
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Static Terrain &amp; Ground Setup (TileMap or TextureRect)
            </h2>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-5">
            <p className="text-sm text-slate-600 leading-relaxed">
              Terrain in platform games must be solid and unyielding so characters can stand securely without falling through infinity. In Godot 4, you can construct terrain surfaces using either a modular <strong>TileMap with 16×16 Physics Layer painting</strong> or a standalone <strong>StaticBody2D with TextureRect Tiling</strong>:
            </p>

            <div className="space-y-4">
              {/* Method A: TileMap with Physics TileSet */}
              <div className="border border-indigo-200 bg-indigo-50/50 rounded-xl p-4 sm:p-5 space-y-3">
                <h4 className="font-bold text-indigo-950 text-sm sm:text-base flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded bg-indigo-600 text-white text-xs font-mono font-bold">Method A</span>
                  <span>TileMap with 16×16 Physics TileSet</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Paint dynamic platforms and modular terrain directly onto the canvas with automatic collision geometry:
                </p>
                <ol className="list-decimal pl-5 text-xs sm:text-sm text-slate-700 space-y-2">
                  <li>Right-click <code className="text-slate-900 font-mono font-bold">Main</code> &gt; <strong>Add Child Node...</strong> &gt; search for <strong>TileMap</strong> (or <strong>TileMapLayer</strong> in Godot 4.3+). Rename it to <code className="text-indigo-700 font-mono font-bold">TerrainTileMap</code>.</li>
                  <li>In the Inspector &gt; TileSet &gt; click dropdown &gt; <strong>New TileSet</strong>. Click into the newly created TileSet resource to open its properties.</li>
                  <li>In TileSet properties in Inspector:
                    <ul className="list-disc pl-5 mt-1 space-y-1 text-xs text-slate-600">
                      <li>Set <strong>Tile Size:</strong> <code className="font-mono text-sky-700 font-bold">16 × 16</code> px (matching the Pixel Adventure terrain tiles).</li>
                      <li>Expand <strong>Physics Layers</strong> &gt; click <strong>Add Element</strong> (this registers Physics Layer 0 for collision detection).</li>
                    </ul>
                  </li>
                  <li>In the bottom <strong>TileSet</strong> dock, drag <code className="font-mono text-xs text-indigo-900 bg-indigo-100 px-1 py-0.2 rounded">Terrain (16x16).png</code> in. Click <strong>Yes</strong> when Godot prompts to automatically create tiles.</li>
                  <li>Click the <strong>Paint</strong> tab in the TileSet dock &gt; select property <strong>Physics Layer 0</strong> &gt; click on each ground/platform tile to assign collision boundaries.</li>
                  <li>Switch to the <strong>TileMap</strong> tab at the bottom, select your solid ground tiles, and paint platforms across the viewport!</li>
                </ol>
              </div>

              {/* Method B: TextureRect Tiled Platform */}
              <div className="border border-slate-200 bg-slate-50/70 rounded-xl p-4 sm:p-5 space-y-3">
                <h4 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded bg-slate-700 text-white text-xs font-mono font-bold">Method B</span>
                  <span>TextureRect Tiled Platform (StaticBody2D)</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  An alternative quick-setup approach using a standalone physical body with a repeating tiled texture:
                </p>
                <ol className="list-decimal pl-5 text-xs sm:text-sm text-slate-700 space-y-2">
                  <li>Right-click <code className="text-slate-900 font-mono font-bold">Main</code> &gt; <strong>Add Child Node...</strong> &gt; add a <strong>StaticBody2D</strong>. Rename to <code className="text-emerald-700 font-mono font-bold">Ground</code>.</li>
                  <li>Right-click <code className="text-emerald-700 font-mono">Ground</code> &gt; add a <strong>CollisionShape2D</strong>. Set Shape &rarr; <strong>New RectangleShape2D</strong> with size <code className="text-sky-700 font-mono font-bold">1280 × 64</code>.</li>
                  <li>Right-click <code className="text-emerald-700 font-mono">Ground</code> &gt; add a <strong>TextureRect</strong> (rename to <code className="text-sky-700 font-mono font-bold">GroundVisual</code>). Assign your ground tile PNG into Texture, set <strong>Expand Mode: Ignore Size</strong>, set <strong>Stretch Mode: Tile</strong>, and set <strong>Size: 1280 × 64</strong> with <strong>Position: (-640, -32)</strong> to center on the collider.</li>
                  <li>Set parent <code className="text-emerald-700 font-mono">Ground</code> position to <code className="text-sky-700 font-mono">(640, 688)</code> to rest cleanly at the screen bottom.</li>
                </ol>
              </div>
            </div>

            <div className="bg-slate-900 text-slate-200 p-4 rounded-xl font-mono text-xs leading-relaxed space-y-2">
              <span className="text-slate-500 uppercase tracking-wider text-[10px] block mb-1">Terrain Node Hierarchies:</span>
              <div>
                <p className="text-indigo-400 font-bold">Method A (TileMap):</p>
                <p className="pl-4 text-slate-300">Main [Node2D]</p>
                <p className="pl-8 text-emerald-400">&boxur; TerrainTileMap [TileMap / TileMapLayer] &mdash; (TileSet 16×16 | Physics Layer 0)</p>
              </div>
              <div className="pt-1 border-t border-slate-800">
                <p className="text-sky-400 font-bold">Method B (TextureRect):</p>
                <p className="pl-4 text-emerald-400">Ground [StaticBody2D] &mdash; (Position: 640, 688)</p>
                <p className="pl-8 text-pink-400">&boxur; CollisionShape2D &mdash; (RectangleShape2D 1280×64)</p>
                <p className="pl-8 text-sky-400">&boxur; GroundVisual [TextureRect] &mdash; (Expand: Ignore Size | Stretch: Tile | Size: 1280×64)</p>
              </div>
            </div>
          </div>
        </section>

        {/* MILESTONE 4 */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-md bg-sky-600 text-white font-extrabold text-xs uppercase tracking-wider">
              Milestone 4
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Player Character Assembly (AnimatedSprite2D &amp; Hitbox)
            </h2>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <p className="text-sm text-slate-600 leading-relaxed">
              In this tutorial, the character (Ninja Frog) is assembled as a dedicated scene using an <code className="text-rose-700 font-mono font-bold">AnimatedSprite2D</code> with multiple animation frames:
            </p>

            <ol className="list-decimal pl-6 text-sm text-slate-600 space-y-2.5">
              <li>Click <strong>Scene &gt; New Scene</strong> &gt; choose <strong>Other Node</strong> &gt; search for <strong>CharacterBody2D</strong>. Rename root to <code className="text-rose-600 font-mono font-bold">Player</code>. Save as <code className="text-sky-700 font-mono">res://scenes/player.tscn</code>.</li>
              <li>Right-click <code className="text-rose-600 font-mono">Player</code> &gt; <strong>Add Child Node...</strong> &gt; add an <strong>AnimatedSprite2D</strong>.</li>
              <li>In the Inspector under <strong>Animation &gt; Sprite Frames</strong>, click dropdown &gt; <strong>New SpriteFrames</strong> &gt; click it to open the bottom SpriteFrames panel.</li>
              <li>Configure the 3 core platformer animations:
                <ul className="list-disc pl-5 mt-1 space-y-1 text-xs text-slate-700">
                  <li><strong>idle:</strong> Click &ldquo;Add frames from sprite sheet&rdquo; &gt; select <code className="font-mono">Idle (32x32).png</code> &gt; set 11 horizontal slices &gt; select all &gt; set <strong>Speed: 20 FPS</strong> &gt; <strong>Loop: ON</strong>.</li>
                  <li><strong>run:</strong> Click new animation icon &gt; name it <code className="font-mono">run</code> &gt; add frames from <code className="font-mono">Run (32x32).png</code> (12 frames) &gt; set <strong>Speed: 20 FPS</strong> &gt; <strong>Loop: ON</strong>.</li>
                  <li><strong>jump:</strong> Click new animation icon &gt; name it <code className="font-mono">jump</code> &gt; add frame from <code className="font-mono">Jump (32x32).png</code> (1 frame) &gt; <strong>Loop: OFF</strong>.</li>
                </ul>
              </li>
              <li>Right-click <code className="text-rose-600 font-mono">Player</code> &gt; add a <strong>CollisionShape2D</strong>. In Inspector, select <strong>New CapsuleShape2D</strong> (Radius: <code className="text-sky-700 font-mono">10</code>, Height: <code className="text-sky-700 font-mono">24</code>) and position it snugly around the character torso.</li>
              <li>Switch back to <code className="text-slate-800 font-mono">main.tscn</code> and click the <strong>Instantiate Child Scene</strong> icon (chain link) on <code className="text-slate-900 font-mono">Main</code> &gt; pick <code className="text-sky-700 font-mono">player.tscn</code>. Position the player at <code className="text-sky-700 font-mono">(320, 400)</code>.</li>
            </ol>

            <div className="bg-slate-900 text-slate-200 p-4 rounded-xl font-mono text-xs leading-relaxed">
              <span className="text-slate-500 uppercase tracking-wider text-[10px] block mb-1">Player Scene Hierarchy:</span>
              <p className="text-rose-400 font-bold">Player [CharacterBody2D]</p>
              <p className="pl-4 text-emerald-300">&boxur; AnimatedSprite2D &mdash; (SpriteFrames: idle, run, jump @ 20 FPS)</p>
              <p className="pl-4 text-pink-400">&boxur; CollisionShape2D &mdash; (CapsuleShape2D radius: 10, height: 24)</p>
            </div>
          </div>
        </section>

        {/* MILESTONE 5 */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-md bg-sky-600 text-white font-extrabold text-xs uppercase tracking-wider">
              Milestone 5
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              GDScript Kinematic Movement Scripting
            </h2>
          </div>

          <div className="space-y-4">
            <p className="text-sm text-slate-600">
              Select <code className="text-rose-600 font-mono font-bold">Player</code> and click <strong>Attach Script</strong>. Save as <code className="text-sky-700 font-mono">res://scripts/player.gd</code>. Paste the complete, production-ready script below:
            </p>

            <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-lg">
              <div className="bg-slate-900 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                  <FileCode className="w-3.5 h-3.5 text-sky-400" />
                  <span>res://scripts/player.gd</span>
                </div>
                <button
                  onClick={() => copyCode(playerGdScript, 'player-script')}
                  className="text-xs font-semibold px-2.5 py-1 rounded-md bg-white/10 hover:bg-white/20 text-white transition flex items-center gap-1.5"
                >
                  {copiedKey === 'player-script' ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400 font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy GDScript</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="p-4 sm:p-5 text-xs sm:text-sm font-mono text-slate-200 overflow-x-auto leading-relaxed">
                <code>{playerGdScript}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* MILESTONE 6 */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-md bg-sky-600 text-white font-extrabold text-xs uppercase tracking-wider">
              Milestone 6
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              2D Physics Layer Names & Collision Mask Matrix
            </h2>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <p className="text-sm text-slate-600 leading-relaxed">
              Open <strong>Project &gt; Project Settings &gt; Layer Names &gt; 2D Physics</strong> and define:
            </p>
            <ul className="list-disc pl-6 text-sm text-slate-700 space-y-1 font-mono">
              <li><strong>Layer 1:</strong> World (Terrain)</li>
              <li><strong>Layer 2:</strong> Player</li>
            </ul>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl border border-sky-200 bg-sky-50/50">
                <h4 className="font-bold text-sky-900 text-sm mb-1">StaticBody2D (Ground)</h4>
                <p className="text-xs text-slate-600 mb-2">Immovable world boundary.</p>
                <div className="space-y-1 text-xs font-mono">
                  <div><strong>Layer:</strong> <span className="text-emerald-700 font-bold">1 (World) &mdash; ON</span></div>
                  <div><strong>Mask:</strong> <span className="text-slate-500">None (0) &mdash; Static objects do not scan</span></div>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/50">
                <h4 className="font-bold text-emerald-900 text-sm mb-1">CharacterBody2D (Player)</h4>
                <p className="text-xs text-slate-600 mb-2">Kinematic moving character.</p>
                <div className="space-y-1 text-xs font-mono">
                  <div><strong>Layer:</strong> <span className="text-indigo-700 font-bold">2 (Player) &mdash; ON</span></div>
                  <div><strong>Mask:</strong> <span className="text-emerald-700 font-bold">1 (World) &mdash; ON (scans and lands on terrain)</span></div>
                </div>
              </div>
            </div>

            {/* Step 3: Camera2D Follow Setup */}
            <div className="space-y-2 pt-3 border-t border-slate-100">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-700 text-xs flex items-center justify-center font-bold">3</span>
                Attach Camera2D Follow Node (Viewport Tracking)
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Open <code className="font-mono text-xs">player.tscn</code>, right-click <code className="font-mono text-xs font-bold text-rose-700">Player</code> &gt; <strong>Add Child Node...</strong> &gt; add a <strong>Camera2D</strong>:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs text-slate-600">
                <li>Set <strong>Zoom:</strong> <code className="font-mono text-sky-700 font-bold">(2.5, 2.5)</code> or <code className="font-mono text-sky-700 font-bold">(3.0, 3.0)</code> &mdash; zooms closely into the pixel art character for responsive mobile displays.</li>
                <li>Under <strong>Position Smoothing:</strong> check <code className="font-mono text-emerald-700 font-bold">Enabled = ON</code> (Speed: 5.0) for silky smooth camera panning when the player runs and jumps.</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs sm:text-sm flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong>Test & Verify (F5):</strong> Press <kbd className="px-1.5 py-0.5 bg-white border border-emerald-300 rounded text-xs font-mono font-bold">F5</kbd>. The player will fall with gravity and land securely on the tiled terrain. Press Left/Right arrows or <kbd>A</kbd>/<kbd>D</kbd> to run and flip, and <kbd>Space</kbd> to jump with smooth Camera2D tracking!
              </div>
            </div>
          </div>
        </section>

        {/* Deliverables Section */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <FolderGit2 className="w-5 h-5 text-sky-600" />
            <span>Submission Deliverables</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white border border-slate-200 p-4 rounded-xl shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center mb-3">
                <Camera className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm mb-1">1. Gameplay Screenshot</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Capture running game showing the player standing securely on the ground with background PNG behind.
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-4 rounded-xl shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
                <FileCode className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm mb-1">2. Complete GDScript File</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Submit <code className="font-mono text-xs">player.gd</code> with gravity, jump, input axis, and comments.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
