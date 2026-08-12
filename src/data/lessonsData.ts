export interface Lesson {
  id: string;
  week: number;
  title: string;
  description: string;
  duration: string;
  slidesCount: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  thumbnail: string;
  isActive: boolean;
  quizEnabled?: boolean;
}

export const lessonsData: Lesson[] = [
  {
    id: 'laravel11',
    week: 1,
    title: 'Laravel 11 Fundamentals',
    description: 'Learn the core concepts of Laravel 11, including server setup, directory structure, routing, Blade templates, and passing data.',
    duration: '15 mins',
    slidesCount: 50,
    difficulty: 'Beginner',
    thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
    isActive: true,
    quizEnabled: false,
  },
  {
    id: 'week1',
    week: 1,
    title: 'Introduction to Video Editing',
    description: 'Learn the fundamentals of video editing, timeline cuts, A-Roll/B-Roll layering, and Walter Murch\'s rules of rendering.',
    duration: '25 mins',
    slidesCount: 51,
    difficulty: 'Beginner',
    thumbnail: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80',
    isActive: true,
  },
  {
    id: 'week2',
    week: 2,
    title: 'Pacing & Narrative Cuts',
    description: 'Master the rhythm of editing: learn jump cuts, match cuts, J-cuts, and pacing to guide emotional story arcs.',
    duration: '30 mins',
    slidesCount: 40,
    difficulty: 'Intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=800&q=80',
    isActive: false,
  },
  {
    id: 'week3',
    week: 3,
    title: 'Audio Design & Sound Mixing',
    description: 'Understand decibel limits, ambient noise, sound effects layering, and mixing music to double the impact of your video.',
    duration: '20 mins',
    slidesCount: 35,
    difficulty: 'Intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80',
    isActive: false,
  },
  {
    id: 'week4',
    week: 4,
    title: 'Color Grading & Exporting',
    description: 'Learn color correction basics, primary vs secondary grades, scopes, LUTs, and export settings for YouTube, TikTok, and TV.',
    duration: '25 mins',
    slidesCount: 45,
    difficulty: 'Advanced',
    thumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80',
    isActive: false,
  }
];
