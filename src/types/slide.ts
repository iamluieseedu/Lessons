export type SlideType = 
  | 'cover' 
  | 'section_break' 
  | 'single_topic' 
  | 'comparison' 
  | 'timeline'
  | 'code'
  | 'versus'
  | 'bullets'
  | 'framework-comparison'
  | 'model-playground'
  | 'controller-flow'
  | 'tester'
  | 'playground'
  | 'interactive_objectives'
  | 'user_input_simulator'
  | 'static_vs_interactive'
  | 'interaction_loop'
  | 'components_diagram'
  | 'cli_vs_gui'
  | 'button_simulator'
  | 'interaction_slider'
  | 'campus_kiosk'
  | 'recap_ordering'
  | 'knowledge_check'
  | 'essay_prompt'
  | 'exit_reflection'
  | 'history_timeline'
  | 'cpp_compiler'
  | 'cpp_exercise'
  | 'escape_sequence_tester'
  | 'pointer_visualizer'
  | 'interactivity_principles_sandbox'
  | 'interactive_media_types_explorer'
  | 'ui_layout_hierarchy_lab'
  | 'color_theory_wcag_studio'
  | 'typography_scale_playground'
  | 'ux_persona_empathy_studio'
  | 'user_journey_map_simulator'
  | 'ux_heuristics_audit'
  | 'multimedia_elements_mixer'
  | 'graphic_raster_vector_inspector'
  | 'audio_sound_design_visualizer'
  | 'animation_fps_motion_player'
  | 'video_bitrate_storage_calculator'
  | 'linear_vs_nonlinear_branching_lab'
  | 'multimedia_authoring_studio'
  | 'multimedia_products_interactive_matrix'
  | 'delivery_bandwidth_speed_race';

export interface CalloutBox {
  title?: string;
  text: string;
}

export interface SlideMetaData {
  label: string;
  val: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  desc: string;
}

export interface ImageSpec {
  url: string;
  caption: string;
}

export interface ExerciseSpec {
  id: string;
  challengeTitle: string;
  instructions: string;
  initialCode: string;
  language: 'c' | 'cpp';
  expectedOutputSubstring?: string;
  expectedPattern?: RegExp;
  hint: string;
  solutionCode: string;
}

export interface DiscussionPrompt {
  question: string;
  hint?: string;
  talkingPoints?: string[];
}

export interface SlideData {
  id: string;
  slideNum?: number;
  totalSlides?: number;
  type: SlideType;
  moduleTag?: string;
  title?: string;
  subtitle?: string;
  sectionNum?: string;
  description?: string;
  topicTitle?: string;
  pioneerBadge?: string;
  bullets?: string[];
  whatItDoes?: string;
  whatIsGoingOn?: string;
  discussionPrompt?: DiscussionPrompt;
  layman?: CalloutBox;
  visualTrick?: CalloutBox;
  keyInsight?: CalloutBox;
  image?: ImageSpec;
  code?: string;
  versusLeft?: { title: string; bullets: string[] };
  versusRight?: { title: string; bullets: string[] };
  timelineItems?: TimelineItem[];
  metadata?: SlideMetaData[];
  exercise?: ExerciseSpec;
}
