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
  | 'playground';

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
  layman?: CalloutBox;
  visualTrick?: CalloutBox;
  keyInsight?: CalloutBox;
  image?: ImageSpec;
  code?: string;
  versusLeft?: { title: string; bullets: string[] };
  versusRight?: { title: string; bullets: string[] };
  timelineItems?: TimelineItem[];
  metadata?: SlideMetaData[];
}
