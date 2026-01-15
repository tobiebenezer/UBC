
import { Sermon, Ministry, Event, Series, Leader, Group, Institution, Article, WeeklyUpdate, SocialPost } from './types';

export const leadersData: Leader[] = [
  {
    id: "1",
    name: "Rev. Dr. Elizabeth Sterling",
    role: "Senior Pastor",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop",
    bio: "Pastor Elizabeth leads our discipleship tracks with a focus on spiritual formation and biblical literacy."
  },
  {
    id: "2",
    name: "Pastor David Chen",
    role: "Executive Pastor",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    bio: "David is a classically trained musician with a heart for modern worship liturgy."
  },
  {
    id: "3",
    name: "Sarah Matthews",
    role: "Worship Director",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
    bio: "Sarah brings passion and excellence to our worship ministry."
  }
];

export const institutionsData: Institution[] = [
  {
    id: "academy",
    name: "United Baptist Academy",
    type: "Education",
    tagline: "Excellence in Mind & Spirit",
    description: "A premier K-12 Christian school dedicated to academic rigor and character development. UBA prepares the next generation of leaders with a biblical worldview.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop",
    founded: "1966",
    head: "Dr. Robert Vance",
    contact: "admissions@uba.edu"
  },
  {
    id: "seminary",
    name: "Sterling Theological Seminary",
    type: "Higher Education",
    tagline: "Equipping the Saints",
    description: "Providing accredited undergraduate and graduate degrees in Theology, Ministry, and Counseling. Raising up pastors and lay leaders for the global church.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop",
    founded: "1988",
    head: "Dean Marcus Thorne",
    contact: "registrar@sterling.edu"
  },
  {
    id: "clinic",
    name: "Hope Medical Clinic",
    type: "Healthcare",
    tagline: "Healing Hands, Caring Hearts",
    description: "Offering subsidized primary care, dental services, and counseling to the underserved communities of Jos. We believe healthcare is a ministry of compassion.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop",
    founded: "2005",
    head: "Dr. Sarah Okonjo",
    contact: "clinic@unitedbaptist.org"
  }
];

export const groupsData: Group[] = [
  {
    id: "1",
    name: "Downtown Young Adults",
    description: "A community for professionals and grad students ages 22-35 navigating faith, career, and culture.",
    category: "Young Adults",
    day: "Tuesday",
    time: "7:00 PM",
    location: "Cafe 316",
    leader: "Mark & Jenny",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2064&auto=format&fit=crop"
  },
  {
    id: "2",
    name: "Wednesday Men's Study",
    description: "Digging deep into theology and building strong accountability. Currently studying Romans.",
    category: "Men",
    day: "Wednesday",
    time: "6:30 AM",
    location: "Fellowship Hall",
    leader: "James Wilson",
    image: "https://images.unsplash.com/photo-1549497558-4d56d78703a5?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "3",
    name: "Moms & Coffee",
    description: "A break for moms with little ones. Childcare provided while we connect and pray together.",
    category: "Women",
    day: "Thursday",
    time: "9:30 AM",
    location: "Family Wing",
    leader: "Sarah Jenkins",
    image: "https://images.unsplash.com/photo-1524623869269-8f0a3ccb4632?q=80&w=2074&auto=format&fit=crop"
  },
  {
    id: "4",
    name: "Couples: Building on the Rock",
    description: "For married and engaged couples looking to strengthen their relationship through biblical principles.",
    category: "Couples",
    day: "Friday",
    time: "6:30 PM",
    location: "The Sterling Home",
    leader: "Dr. & Mrs. Sterling",
    image: "https://images.unsplash.com/photo-1516575334481-f85287c2c81d?q=80&w=2070&auto=format&fit=crop"
  }
];

export const seriesData: Series[] = [
  {
    id: "silence-solitude",
    title: "Silence & Solitude",
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2070&auto=format&fit=crop",
    description: "Finding God in the quiet places of our lives."
  },
  {
    id: "first-john",
    title: "First John",
    image: "https://images.unsplash.com/photo-1507692864268-4a3cb280af7b?q=80&w=2070&auto=format&fit=crop",
    description: "Walking in the light of God's love."
  },
  {
    id: "vision-2024",
    title: "Vision 2024",
    image: "https://images.unsplash.com/photo-1490129375591-2338b1f7d453?q=80&w=2076&auto=format&fit=crop",
    description: "Looking forward to what God has in store."
  }
];

export const sermonsData: Sermon[] = [
  {
    id: "1",
    title: "The Art of Waiting",
    series: "Silence & Solitude",
    speaker: "Rev. Dr. Elizabeth Sterling",
    date: "October 22, 2023",
    image: "https://images.unsplash.com/photo-1519750058932-a58f4f2c96b7?q=80&w=2070&auto=format&fit=crop",
    duration: "45 mins",
    youtubeId: "V_3K38127qE",
    description: "In a world of instant gratification, how do we learn to wait on God? This message explores the spiritual discipline of patience and the hidden work God does in the waiting room of life. We look at the life of David and how his years in the wilderness prepared him for the palace.",
    scripture: [
      { ref: "Psalm 27:13-14", text: "I remain confident of this: I will see the goodness of the Lord in the land of the living. Wait for the Lord; be strong and take heart and wait for the Lord." }
    ],
    discussion: [
      "When was the last time you felt forced to wait for something?",
      "How can we support each other during seasons of uncertainty?"
    ]
  },
  {
    id: "2",
    title: "The Ruthless Elimination of Hurry",
    series: "Silence & Solitude",
    speaker: "Rev. Dr. Elizabeth Sterling",
    date: "Oct 15, 2023",
    image: "https://images.unsplash.com/photo-1543616991-75a2c125bb9b?q=80&w=2070&auto=format&fit=crop",
    duration: "38 mins",
    youtubeId: "h3_GZk39q4c",
    description: "Hurry is the great enemy of spiritual life in our day. You must ruthlessly eliminate hurry from your life.",
    scripture: [
       { ref: "Matthew 11:28-30", text: "Come to me, all you who are weary and burdened, and I will give you rest." }
    ],
    discussion: [
      "What are the symptoms of hurry sickness in your life?",
      "How does hurry affect your capacity to love?"
    ]
  }
];

export const ministriesData: Ministry[] = [
  {
    id: 'grace-kids',
    title: "Grace Kids",
    tagline: "Foundations of Faith",
    description: "We believe that even the youngest hearts can know the love of God. Grace Kids is designed to be a safe, fun, and engaging environment where children can learn biblical truth.",
    image: "https://images.unsplash.com/photo-1502086223501-413b164c05d5?q=80&w=2070&auto=format&fit=crop",
    schedule: "Sundays at 9:00 AM & 11:00 AM",
    location: "Family Wing, Level 1",
    leader: leadersData[0] 
  },
  {
    id: 'youth-collective',
    title: "Youth Collective",
    tagline: "Own Your Faith",
    description: "Middle and High School is a pivotal time. Youth Collective provides a space for students to ask hard questions and build lasting friendships.",
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=2070&auto=format&fit=crop",
    schedule: "Wednesdays at 7:00 PM",
    location: "The Loft (Student Center)",
    leader: {
      id: "mike",
      name: "Pastor Mike Ross",
      role: "Youth Pastor",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop",
      bio: "Mike is dedicated to discipleship and mentorship for the next generation."
    }
  }
];

export const eventsData: Event[] = [
  {
    id: "1",
    day: "12",
    month: "NOV",
    date: "November 12, 2023",
    title: "Night of Worship",
    time: "7:00 PM - 9:00 PM",
    location: "Main Sanctuary",
    description: "Join us for an extended evening of worship and seeking the presence of God.",
    image: "https://images.unsplash.com/photo-1459749411177-0473ef716175?q=80&w=2070&auto=format&fit=crop",
    category: 'Worship'
  }
];

export const articlesData: Article[] = [
  {
    id: "finding-peace",
    title: "Finding Peace in a Chaotic World",
    subtitle: "Why silence is more than just the absence of noise.",
    author: "Rev. Dr. Elizabeth Sterling",
    authorRole: "Senior Pastor",
    authorImage: leadersData[0].image,
    date: "November 1, 2023",
    category: "Devotional",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1499728603963-bc0922fc7442?q=80&w=2070&auto=format&fit=crop",
    content: `<p>The world is loud. In the midst of this cacophony, the invitation of Jesus sounds almost radical.</p>`
  }
];

export const weeklyUpdate: WeeklyUpdate = {
  date: "November 5 - 11, 2023",
  title: "Vision Sunday Is Coming",
  videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  thumbnail: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop",
  description: "Join us as Pastor Elizabeth shares the roadmap for 2024.",
  highlights: [
    { title: "New Member Class", content: "Starting this Sunday at 9:00 AM." }
  ]
};

export const socialData: SocialPost[] = [
  {
    id: "1",
    platform: "instagram",
    date: "2 hours ago",
    content: "What a powerful morning of worship! The presence of God was tangible. #UnitedBaptist #SundayMorning",
    image: "https://images.unsplash.com/photo-1524117074681-31bd4de22ad3?q=80&w=2000&auto=format&fit=crop",
    likes: "142",
    link: "https://instagram.com"
  },
  {
    id: "2",
    platform: "youtube",
    date: "1 day ago",
    content: "Missed the sermon? Watch 'The Art of Waiting' now on our channel. A timely word for a busy season.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop",
    likes: "856",
    link: "https://youtube.com"
  },
  {
    id: "3",
    platform: "facebook",
    date: "3 days ago",
    content: "Join us this Wednesday for our community potluck! Bring a dish and a friend. 6:30 PM in the Fellowship Hall.",
    likes: "45",
    link: "https://facebook.com"
  },
  {
    id: "4",
    platform: "instagram",
    date: "5 days ago",
    content: "Our youth team serving at the local shelter. 'Love in action is the most powerful sermon.'",
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070&auto=format&fit=crop",
    likes: "289",
    link: "https://instagram.com"
  }
];
