
export interface Scripture {
  ref: string;
  text: string;
}

export interface Sermon {
  id: string;
  title: string;
  series: string;
  speaker: string;
  date: string;
  image: string;
  duration: string;
  youtubeId: string; // Changed from videoUrl to youtubeId
  description: string;
  transcript?: string;
  scripture?: Scripture[];
  discussion?: string[];
}

export interface Leader {
  id: string;
  name: string;
  role: string;
  image: string;
  bio?: string;
}

export interface Ministry {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  schedule: string;
  location: string;
  leader: Leader;
}

export interface Group {
  id: string;
  name: string;
  description: string;
  category: 'Men' | 'Women' | 'Mixed' | 'Young Adults' | 'Couples';
  day: 'Sunday' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday';
  time: string;
  location: string;
  leader: string;
  image: string;
}

export interface Institution {
  id: string;
  name: string;
  type: string;
  tagline: string;
  description: string;
  image: string;
  founded: string;
  head: string;
  contact: string;
}

export interface Series {
  id: string;
  title: string;
  image: string;
  description: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  day: string;
  month: string;
  time: string;
  location: string;
  description: string;
  image: string;
  category?: 'Worship' | 'Community' | 'Youth' | 'Outreach';
}

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  author: string;
  authorRole: string;
  authorImage: string;
  date: string;
  category: 'Devotional' | 'Theology' | 'News' | 'Culture';
  image: string;
  content: string;
  readTime: string;
}

export interface WeeklyUpdate {
  date: string;
  title: string;
  videoUrl: string;
  thumbnail: string;
  description: string;
  highlights: { title: string; content: string }[];
}

export interface NavItem {
  label: string;
  path?: string;
  children?: NavItem[];
}

export interface SocialPost {
  id: string;
  platform: 'facebook' | 'instagram' | 'youtube';
  date: string;
  content: string;
  image?: string;
  likes: string;
  link: string;
}
