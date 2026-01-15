
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
    founded: "1965",
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
  },
  {
    id: "5",
    name: "Sermon Discussion Group",
    description: "An open group for anyone wanting to dive deeper into Sunday's message.",
    category: "Mixed",
    day: "Sunday",
    time: "10:30 AM",
    location: "Library",
    leader: "Elder John",
    image: "https://images.unsplash.com/photo-1470790376778-a9fcd484fcac?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "6",
    name: "Creative Collective",
    description: "Artists, writers, and musicians gathering to share work and pray for inspiration.",
    category: "Mixed",
    day: "Monday",
    time: "7:00 PM",
    location: "The Loft",
    leader: "David Chen",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
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
    youtubeId: "V_3K38127qE", // Placeholder ID
    description: "In a world of instant gratification, how do we learn to wait on God? This message explores the spiritual discipline of patience and the hidden work God does in the waiting room of life. We look at the life of David and how his years in the wilderness prepared him for the palace.",
    transcript: "Good morning, church. It is so good to be with you today. If you have your Bibles, please turn with me to Psalm 27. We are continuing our series on Silence and Solitude, and today we are talking about something that I think all of us struggle with: the art of waiting.\n\nIn a world of instant gratification, where we can get almost anything we want with the click of a button, waiting feels like a curse. It feels like wasted time. But in the economy of God, waiting is not wasted. Waiting is work. It is in the waiting room of life that God does some of His deepest work in our souls.\n\nDavid, the man after God's own heart, knew what it was to wait. He was anointed king as a teenager, but he didn't take the throne until he was thirty. For years, he ran for his life, hiding in caves, waiting on God's timing. And it was in those caves that he wrote some of the most beautiful Psalms we have today.\n\nLet's look at Psalm 27, verses 13 and 14: 'I remain confident of this: I will see the goodness of the Lord in the land of the living. Wait for the Lord; be strong and take heart and wait for the Lord.'\n\nNotice the repetition. 'Wait for the Lord.' It's an imperative. It's a command. But it's also an invitation. An invitation to trust. An invitation to believe that God is good, even when the timeline isn't what we expected.",
    scripture: [
      { ref: "Psalm 27:13-14", text: "I remain confident of this: I will see the goodness of the Lord in the land of the living. Wait for the Lord; be strong and take heart and wait for the Lord." },
      { ref: "Isaiah 40:31", text: "But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint." }
    ],
    discussion: [
      "When was the last time you felt forced to wait for something? How did you react?",
      "What is the difference between passive waiting and active waiting?",
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
    youtubeId: "h3_GZk39q4c", // Placeholder ID
    description: "Hurry is the great enemy of spiritual life in our day. You must ruthlessly eliminate hurry from your life.",
    transcript: "Dallas Willard once said, 'Hurry is the great enemy of spiritual life in our day. You must ruthlessly eliminate hurry from your life.'\n\nThink about your week. How many times did you rush? How many times did you check your phone while talking to someone? We are a distracted people. And because we are distracted, we are disconnected. Disconnected from ourselves, from each other, and from God.\n\nJesus was never in a hurry. He walked everywhere. He stopped for the one. He had time. If we want to follow Jesus, we must adopt His pace.",
    scripture: [
       { ref: "Matthew 11:28-30", text: "Come to me, all you who are weary and burdened, and I will give you rest." }
    ],
    discussion: [
      "What are the symptoms of hurry sickness in your life?",
      "How does hurry affect your capacity to love?"
    ]
  },
  {
    id: "3",
    title: "Walking in the Light",
    series: "First John",
    speaker: "Pastor David Chen",
    date: "Oct 08, 2023",
    image: "https://images.unsplash.com/photo-1507692864268-4a3cb280af7b?q=80&w=2070&auto=format&fit=crop",
    duration: "42 mins",
    youtubeId: "1y86r4x1j3k", // Placeholder ID
    description: "To walk in the light is to be known, to be honest, and to be free. We cannot have fellowship with God while hiding in the darkness.",
    transcript: "Scripture tells us that God is light; in him there is no darkness at all. If we claim to have fellowship with him and yet walk in the darkness, we lie and do not live out the truth.\n\nWhat does it mean to walk in the light? It means stepping out of hiding. It means being honest about our struggles, our sins, and our fears. It is terrifying to be known, but it is the only way to be loved.",
    scripture: [
      { ref: "1 John 1:7", text: "But if we walk in the light, as he is in the light, we have fellowship with one another, and the blood of Jesus, his Son, purifies us from all sin." }
    ],
    discussion: [
      "Why is vulnerability so difficult?",
      "What does 'walking in the light' look like practically at work or home?"
    ]
  },
  {
    id: "4",
    title: "A Community of Grace",
    series: "Vision 2024",
    speaker: "Rev. Dr. Elizabeth Sterling",
    date: "Oct 01, 2023",
    image: "https://images.unsplash.com/photo-1490129375591-2338b1f7d453?q=80&w=2076&auto=format&fit=crop",
    duration: "40 mins",
    youtubeId: "V_3K38127qE", // Placeholder ID
    description: "We are called to be a people of grace. Not just recipients of it, but conduits of it to a watching world.",
    transcript: "Grace is not just a theological concept. It is the very air we breathe as believers. When we look at the early church in Acts, we see a community defined by grace. They shared everything. They broke bread together. They cared for the poor.\n\nHow can we embody that same spirit today? It starts with recognizing how much grace we have received.",
    scripture: [
      { ref: "Acts 2:42", text: "They devoted themselves to the apostles’ teaching and to fellowship, to the breaking of bread and to prayer." }
    ],
    discussion: [
      "How would you describe the culture of our church?",
      "Who is someone you need to extend grace to this week?"
    ]
  }
];

export const ministriesData: Ministry[] = [
  {
    id: 'grace-kids',
    title: "Grace Kids",
    tagline: "Foundations of Faith",
    description: "We believe that even the youngest hearts can know the love of God. Grace Kids is designed to be a safe, fun, and engaging environment where children from infancy through 5th grade can learn biblical truth.",
    image: "https://images.unsplash.com/photo-1502086223501-413b164c05d5?q=80&w=2070&auto=format&fit=crop",
    schedule: "Sundays at 9:00 AM & 11:00 AM",
    location: "Family Wing, Level 1",
    leader: leadersData[0] 
  },
  {
    id: 'youth-collective',
    title: "Youth Collective",
    tagline: "Own Your Faith",
    description: "Middle and High School is a pivotal time. Youth Collective provides a space for students to ask hard questions, build lasting friendships, and encounter Jesus in a real way.",
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=2070&auto=format&fit=crop",
    schedule: "Wednesdays at 7:00 PM",
    location: "The Loft (Student Center)",
    leader: {
      id: "mike",
      name: "Pastor Mike Ross",
      role: "Youth Pastor",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop",
      bio: "Mike is dedicated to discipleship and mentorship, helping teens navigate culture with a biblical worldview."
    }
  },
  {
    id: 'worship-arts',
    title: "Worship & Arts",
    tagline: "Creativity for the Creator",
    description: "We are a community of artists, musicians, and technicians who use our gifts to lead the church in worship. We value excellence, authenticity, and humility.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop",
    schedule: "Thursdays at 6:30 PM (Rehearsal)",
    location: "Main Sanctuary",
    leader: leadersData[1]
  },
  {
    id: "adult-discipleship",
    title: "Adult Discipleship",
    tagline: "Deep Roots, Strong Faith",
    description: "Deep dive bible studies, small groups, and theology classes designed to mature us in the image of Christ.",
    image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?q=80&w=2068&auto=format&fit=crop",
    schedule: "Various Times",
    location: "Fellowship Hall",
    leader: leadersData[0]
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
    description: "Join us for an extended evening of worship, prayer, and seeking the presence of God. This is a time to disconnect from the noise of the world and reconnect with the Father. Childcare will be provided for ages 0-5.",
    image: "https://images.unsplash.com/photo-1459749411177-0473ef716175?q=80&w=2070&auto=format&fit=crop",
    category: 'Worship'
  },
  {
    id: "2",
    day: "18",
    month: "NOV",
    date: "November 18, 2023",
    title: "Community Outreach",
    time: "9:00 AM - 12:00 PM",
    location: "City Park",
    description: "We are the hands and feet of Jesus. Come help us serve our city by cleaning up City Park and distributing food boxes to families in need. Wear your 'United for the City' t-shirt!",
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2070&auto=format&fit=crop",
    category: 'Outreach'
  },
  {
    id: "3",
    day: "24",
    month: "NOV",
    date: "November 24, 2023",
    title: "Thanksgiving Potluck",
    time: "5:00 PM - 8:00 PM",
    location: "Fellowship Hall",
    description: "Gather around the table! Bring your favorite side dish or dessert to share. The church will provide turkey and ham. It's a time of gratitude, laughter, and family.",
    image: "https://images.unsplash.com/photo-1512413316925-fd52bdc8b02c?q=80&w=1968&auto=format&fit=crop",
    category: 'Community'
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
    content: `
      <p>The world is loud. From the moment we wake up to the chime of a notification to the moment we fall asleep to the glow of a screen, we are inundated with noise. Opinions, news, demands, advertisements—they all clamor for our attention.</p>
      
      <p>In the midst of this cacophony, the invitation of Jesus sounds almost radical: "Come to me, all you who are weary and burdened, and I will give you rest." (Matthew 11:28)</p>
      
      <h3>The Discipline of Silence</h3>
      <p>Silence is not something that happens naturally in our culture; it is something we must fight for. It is a discipline. The Desert Fathers and Mothers of the early church understood this. They fled the noise of the empire to find God in the stillness of the desert.</p>
      
      <p>But we don't need to move to the Sahara to find silence. We can create "deserts" in our daily lives. Maybe it's turning off the radio on your commute. Maybe it's waking up 15 minutes early to sit with a cup of coffee and your Bible before the house wakes up.</p>
      
      <p>When we silence the noise around us, we begin to hear the noise within us. Our anxieties, our fears, our insecurities—they all bubble to the surface. And that is exactly where God wants to meet us. He doesn't want to meet the curated version of ourselves; He wants to meet the real us.</p>
      
      <h3>Practical Steps</h3>
      <p>Start small. Try five minutes of silence today. Don't pray, don't read, just sit. Be with God. Acknowledge His presence. It might feel awkward at first. You might feel unproductive. But remember, prayer is not about efficiency; it's about intimacy.</p>
    `
  },
  {
    id: "liturgy-matters",
    title: "Why Liturgy Matters in a Modern Age",
    subtitle: "Rediscovering the ancient rhythms of grace.",
    author: "Pastor David Chen",
    authorRole: "Executive Pastor",
    authorImage: leadersData[1].image,
    date: "October 24, 2023",
    category: "Theology",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2073&auto=format&fit=crop",
    content: `
      <p>In many modern churches, the word "liturgy" is viewed with suspicion. It sounds dry, rote, or overly religious. We prize spontaneity and authenticity. But the truth is, everyone has a liturgy. Liturgy simply means "the work of the people."</p>
      
      <p>If you go to a football game, there is a liturgy. The national anthem, the kickoff, the chants, the halftime show. If you go to a coffee shop, there is a liturgy. Standing in line, ordering, waiting, receiving your cup.</p>
      
      <h3>Formation through Repetition</h3>
      <p>We are creatures of habit. What we do repeatedly shapes who we are. The philosopher James K.A. Smith argues that we are not primarily "thinking things" but "loving things." And our loves are shaped by our habits.</p>
      
      <p>When we gather on Sunday mornings and recite the Lord's Prayer, or confess our sins together, or come to the communion table, we are engaging in "counter-liturgies." We are retelling the story of the Gospel in a way that counters the stories the world tells us—stories of consumerism, individualism, and power.</p>
      
      <p>Liturgy is not about empty ritual; it is about deep formation. It is about syncing our hearts with the heartbeat of God.</p>
    `
  },
  {
    id: "community-garden",
    title: "New Community Garden Breaks Ground",
    subtitle: "Feeding our neighbors, body and soul.",
    author: "Sarah Matthews",
    authorRole: "Outreach Coordinator",
    authorImage: leadersData[2].image,
    date: "October 15, 2023",
    category: "News",
    readTime: "3 min",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=2070&auto=format&fit=crop",
    content: `
      <p>We are thrilled to announce the launch of the United Baptist Community Garden! Located on the south side of our campus, this 2-acre plot will provide fresh, organic produce to local food pantries and families in need.</p>
      
      <p>This initiative was born out of our "Vision 2024" campaign, which seeks to find tangible ways to bless our city. "It's about more than just vegetables," says Deacon Mark Johnson, who is leading the project. "It's about cultivating community. It's about getting our hands dirty together and watching God bring life from the soil."</p>
      
      <h3>Get Involved</h3>
      <p>We need volunteers! Whether you are a master gardener or have never held a trowel in your life, there is a place for you. Work days will be every Saturday morning from 8:00 AM to 12:00 PM starting next month.</p>
      
      <p>Tools and gloves will be provided. Just bring a water bottle and a willing heart. Let's grow something beautiful together.</p>
    `
  }
];

export const weeklyUpdate: WeeklyUpdate = {
  date: "November 5 - 11, 2023",
  title: "Vision Sunday Is Coming",
  videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  thumbnail: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop",
  description: "Join us as Pastor Elizabeth shares the roadmap for 2024. Plus, updates on the building fund and the fall retreat.",
  highlights: [
    { title: "New Member Class", content: "Starting this Sunday at 9:00 AM in Room 204. Lunch provided." },
    { title: "Food Pantry Needs", content: "We are collecting canned corn and green beans for Thanksgiving baskets." },
    { title: "Baptism Service", content: "Our next baptism is Nov 19th. Sign up online or at the Info Desk." },
    { title: "Congratulations", content: "To the Thompson family on the birth of baby Lucas!" }
  ]
};

export const socialData: SocialPost[] = [
  {
    id: "1",
    platform: "facebook",
    date: "2 hours ago",
    content: "What a powerful morning of worship! 'Great is Thy Faithfulness' hit different today. Grateful for a community that sings loud. 🎶 #UnitedBaptist #SundayMorning",
    image: "https://images.unsplash.com/photo-1524117074681-31bd4de22ad3?q=80&w=2000&auto=format&fit=crop",
    likes: "142",
    link: "#"
  },
  {
    id: "2",
    platform: "instagram",
    date: "Yesterday",
    content: "The youth group crushed it at the city-wide serve day! So proud of these students for showing up and loving our neighbors well. 💪 #FaithInAction",
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=2070&auto=format&fit=crop",
    likes: "89",
    link: "#"
  },
  {
    id: "3",
    platform: "facebook",
    date: "2 days ago",
    content: "Reminder: Men's breakfast is this Saturday at 7 AM. Bacon, coffee, and brotherhood. Don't miss it!",
    likes: "56",
    link: "#"
  },
  {
    id: "4",
    platform: "youtube",
    date: "3 days ago",
    content: "Missed Sunday's message on 'The Art of Waiting'? Catch the replay on our channel now.",
    image: "https://images.unsplash.com/photo-1519750058932-a58f4f2c96b7?q=80&w=2070&auto=format&fit=crop",
    likes: "203",
    link: "#"
  }
];
