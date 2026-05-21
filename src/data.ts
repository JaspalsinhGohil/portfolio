import { Project, Experience, Education, SkillCategory } from './types';

export const personalInfo = {
  name: 'Jaspalsinh A. Gohil',
  title: 'Senior Android Developer',
  subtitle: 'Kotlin | Java | Flutter',
  location: 'Ahmedabad, India',
  email: 'gohiljaspalsinhashoksinh@gmail.com',
  phone: '+918200108568',
  linkedIn: 'https://linkedin.com/in/jaspalsinh-gohil',
  summary: 'Senior Android Developer with 7+ years of experience building scalable, high-performance mobile applications across ride-sharing, IoT, and social media. Delivered 15+ apps on Google Play Store. Expertise in Kotlin, Jetpack Compose, Coroutines/Flow, MVVM, Clean Architecture, and Hilt. Strong in real-time systems (WebSockets, MQTT) and performance optimization.'
};

export const projects: Project[] = [
  {
    id: 'commuto',
    title: 'Commuto Ride Sharing',
    company: 'Exsilio Solution',
    description: 'Developed ride-sharing app with real-time tracking, improving booking success by 30%.',
    fullDescription: 'Commuto is a high-performance ride-sharing application. It features ultra-low latency real-time vehicle tracking, optimized matching algorithms that pair drivers and riders with high efficiency, and seamless Google Maps API integration with route polyline computation and custom map pins.',
    technologies: ['Kotlin', 'Android SDK', 'Google Maps API', 'Coroutines', 'MVVM', 'Clean Architecture', 'Hilt'],
    impact: 'Improved booking success rates by over 30% through improved socket reconnection & location polling strategy.',
    appType: 'ride-sharing'
  },
  {
    id: 'itouch',
    title: 'iTOUCH Home Automation',
    company: 'AIS Technolabs',
    description: 'Smart home app using MQTT for device control with Geo-fencing and customizable UI.',
    fullDescription: 'iTOUCH is an IoT-enabled smart home app that utilizes the MQTT protocol for instant, bidirectional device control. Integrated Geo-fencing APIs to auto-trigger custom smart home scenes when approaching/leaving coordinates. Features a modular dashboard representing various appliance categories.',
    technologies: ['Kotlin', 'MQTT Client', 'Android SDK', 'Geo-fencing', 'MVVM', 'Clean Architecture'],
    impact: 'Established ultra-fast 40ms command round-trip latency to terminal devices over MQTT on cell connections.',
    appType: 'home-automation'
  },
  {
    id: 'grassroots',
    title: 'Grassroots to Glory',
    description: 'Cross-platform athlete app featuring high-quality video capture and replay using Flutter.',
    fullDescription: 'An interactive professional athlete development app tailored for video performance review. Users can capture high-frames-rate videos, draw overlays for joint-angle trajectory assessment (motion analysis), and stream content with customized codecs optimized for mobile cellular networks.',
    technologies: ['Flutter', 'Dart', 'Custom Codecs', 'Video Player SDK', 'Camera2 API'],
    impact: 'Enabled thousands of athletes and coaches to share frame-accurate athletic clips and custom video markings.',
    appType: 'flutter-app'
  },
  {
    id: 'ipv',
    title: 'Inflection Point Ventures',
    description: 'Angel investor platform with subscription-based tracking, WebSocket chat, and event scheduling.',
    fullDescription: 'Premium venture capital and angel investment portal. Enables subscription management, tracking of investment portfolios, real-time live chats with deal leads using persistent WebSocket channels, and calendar sync integrations for investor pitch presentations.',
    technologies: ['Kotlin', 'WebSockets', 'Subscription Billing', 'Calendar SDK', 'Room Database', 'Jetpack Compose'],
    impact: 'Successfully channels millions in angel funding annually via secure mobile interfaces with active push alerts.',
    appType: 'investment'
  },
  {
    id: 'cxo',
    title: 'CXO & Founders Genie',
    description: 'Job portal and discussion platform with distinct UI flavors for different user segments.',
    fullDescription: 'A custom, dual-sided executive-level networking and recruiting platform. Implements dedicated user interface "flavors" for Founders and CXOs, ensuring seamless job posting workflows on one end and curated executive matching boards on the other.',
    technologies: ['Kotlin', 'Android SDK', 'Material Design 3', 'Retrofit', 'MVVM', 'Hilt'],
    impact: 'Provides unified codebases utilizing build-flavors to minimize bundle sizes while delivery custom branded screens.',
    appType: 'job-portal'
  },
  {
    id: 'referral_hero',
    title: 'Referral Hero SDK',
    description: 'Custom Android SDK for seamless friend referrals and tracking with secure API integration.',
    fullDescription: 'An enterprise-ready, developer-friendly Android SDK wrapper for marketing referrals. Offers frictionless setup via dependency injectors, cryptographic security hooks to prevent fake invite spoofing, and customizable floating in-app referral rewards cards.',
    technologies: ['Kotlin', 'Android Library SDK', 'REST API Client', 'SHA-256 Signing', 'Retrofit'],
    githubLink: 'https://github.com/jaspalsinh-gohil',
    appType: 'sdk'
  },
  {
    id: 'wongapk',
    title: 'WongaPKLive',
    description: 'Social live-streaming app with real-time video broadcasting using Agora SDK.',
    fullDescription: 'An high-concurrency, interactive live streaming and social hub. Integrates Agora SDK for low-latency audio/video feeds, custom RTMP ingestion streams, real-time virtual gifting overlays with complex Canvas render animations, and an active WebSockets comment tray.',
    technologies: ['Kotlin', 'Agora SDK', 'WebSockets', 'Canvas Render', 'Jetpack Compose', 'Hilt'],
    impact: 'Maintained seamless video streaming experience for up to 5,000 active concurrent viewers per broadcaster.',
    appType: 'live-stream'
  },
  {
    id: 'iptv',
    title: 'IPTV - Flutter TV App',
    description: 'High-performance TV app for Samsung/LG Smart TVs with custom HLS/DASH video players.',
    fullDescription: 'A highly responsive, clean Smart TV app created using Flutter. Optimized for standard remote-control D-Pad layouts and focus frames. Integrates tailored HLS and DASH stream decoders for buffering-free live and on-demand TV channels.',
    technologies: ['Flutter', 'Dart', 'D-Pad Custom Focus', 'HLS/DASH Players', 'ExoPlayer Bindings'],
    impact: 'Optimized network streaming buffers resulting in a 40% reduction in media start-up lag on smart TV processors.',
    appType: 'iptv'
  }
];

export const experiences: Experience[] = [
  {
    id: 'exsilio',
    company: 'Exsilio Solution',
    role: 'Sr. Android Developer',
    location: 'Ahmedabad, India',
    period: 'Jun 2025 – Present',
    bullets: [
      'Developed Commuto, a ride-sharing app with real-time tracking and driver matching.',
      'Integrated Google Maps for live tracking and optimized REST API performance with custom pooling structures.'
    ]
  },
  {
    id: 'ais',
    company: 'AIS Technolabs',
    role: 'Sr. Android Developer',
    location: 'Ahmedabad, India',
    period: 'March 2023 – Apr 2025',
    bullets: [
      'Led Android development for multiple projects using Kotlin, Flutter, and Jetpack Components.',
      'Worked on complex IoT projects using MQTT and Raspberry Pi with a strict clean architecture template.'
    ]
  },
  {
    id: 'codiot',
    company: 'Codiot Technologies',
    role: 'Sr. Android Developer',
    location: 'Ahmedabad, India',
    period: 'Sept 2020 – Feb 2023',
    bullets: [
      'Successfully rebuilt legacy Java codebases with modern, type-safe Kotlin.',
      'Designed and engineered responsive, dynamic UI components maximizing layout reutilization.',
      'Led local development teams and client collaboration for performance-optimized products.'
    ]
  },
  {
    id: 'ebiz',
    company: 'eBizTrait Technolabs',
    role: 'Jr. Android Developer',
    location: 'Ahmedabad, India',
    period: 'Jun 2019 – Aug 2020',
    bullets: [
      'Rebuilt legacy Java apps with Kotlin and implemented modular Jetpack UI components.',
      'Fostered collaborative team coordination and client alignments to ensure fast roadmap delivery.'
    ]
  },
  {
    id: 'addict',
    company: 'Addict2Web',
    role: 'Jr. Android Developer',
    location: 'Ahmedabad, India',
    period: 'Feb 2018 – May 2019',
    bullets: [
      'Engaged heavily in restructuring Java projects to functional Kotlin implementations.',
      'Built custom dashboard modules and local SQLite/Room storage structures.'
    ]
  }
];

export const education: Education[] = [
  {
    degree: 'MCA (Master of Computer Applications)',
    institution: 'GLS University',
    location: 'Ahmedabad, India',
    period: '2016 - 2018',
    score: '68%'
  },
  {
    degree: 'BCA (Bachelor of Computer Applications)',
    institution: 'Swami Vivekanand College',
    location: 'Bhavnagar, India',
    period: '2013 - 2016',
    score: '63%'
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    skills: [
      { name: 'Kotlin', level: 95 },
      { name: 'Java', level: 90 },
      { name: 'Dart', level: 85 }
    ]
  },
  {
    title: 'Frameworks',
    skills: [
      { name: 'Android SDK', level: 95 },
      { name: 'Jetpack Compose', level: 92 },
      { name: 'Flutter', level: 88 }
    ]
  },
  {
    title: 'Architecture & Design',
    skills: [
      { name: 'MVVM', level: 95 },
      { name: 'Clean Architecture', level: 92 },
      { name: 'SOLID Principles', level: 90 },
      { name: 'MVP', level: 80 }
    ]
  },
  {
    title: 'Networking & Real-time',
    skills: [
      { name: 'REST APIs (Retrofit)', level: 95 },
      { name: 'WebSockets', level: 90 },
      { name: 'MQTT', level: 88 }
    ]
  },
  {
    title: 'Concurrency & Di',
    skills: [
      { name: 'Coroutines', level: 92 },
      { name: 'Kotlin Flow', level: 90 },
      { name: 'Hilt (Dagger)', level: 92 }
    ]
  },
  {
    title: 'Databases & Client APIs',
    skills: [
      { name: 'Room Database', level: 92 },
      { name: 'SQLite', level: 88 },
      { name: 'Firebase Firestore', level: 90 },
      { name: 'Google Maps API', level: 92 }
    ]
  },
  {
    title: 'Tools & DevOps',
    skills: [
      { name: 'Git', level: 95 },
      { name: 'JIRA', level: 88 },
      { name: 'Android Studio', level: 95 },
      { name: 'CI/CD', level: 82 }
    ]
  }
];
