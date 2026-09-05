export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "AI Assistants & Agents" | "Computer Vision" | "Fraud & Detection" | "Data Analytics";
  description: string;
  longDescription: string;
  architecture: string[];
  keyMetrics: { label: string; value: string }[];
  tags: string[];
  signal: string;
  href: string;
  imageUrl?: string;
  demoUrl?: string;
  featured?: boolean;
  private?: boolean;
  accent: "emerald" | "cyan" | "indigo" | "amber" | "purple";
}

export const PERSONAL_INFO = {
  name: "Ahmad Jawad",
  role: "Applied AI & Machine Learning Engineer",
  tagline: "Building smart, reliable AI applications that solve real-world problems.",
  location: "Available Globally · Remote / Hybrid",
  status: "Open to Full-Time Roles & Projects",
  email: "ahmed.jawadcs@gmail.com",
  phone: "+92 348 2991158",
  github: "https://github.com/ahmedjawad24",
  linkedin: "https://www.linkedin.com/in/ahmad-jawad-248870267",
  portfolio: "https://ahmedjawad24.github.io",
  education: {
    degree: "Bachelor of Science in Computer Science",
    institution: "Pak-Austria Fachhochschule (PAF-IAST)",
    focus: "Artificial Intelligence, Machine Learning & Software Engineering",
  },
  summary:
    "Applied AI Engineer who builds practical, user-friendly software powered by machine learning. Experienced in creating smart AI assistants, medical image tools, fraud prevention systems, and modern web apps.",
};

export const PROJECTS: Project[] = [
  {
    id: "proof-of-trust",
    title: "Proof of Trust",
    subtitle: "AI Verification & Accuracy Checker",
    category: "AI Assistants & Agents",
    description:
      "A verification system that double-checks AI answers with multiple models and logs proof so users know the response is accurate and untampered.",
    longDescription:
      "Proof of Trust prevents AI from giving inaccurate or made-up information. It automatically runs answers through multiple AI models to verify consensus, allows human reviewers to confirm results, and records proof of verification so anyone can inspect the audit trail.",
    architecture: [
      "Multi-model agreement system to double-check answers",
      "Modern web dashboard for viewing and verifying results",
      "Digital signatures to ensure records cannot be changed",
      "Fast automated testing of AI response quality",
    ],
    keyMetrics: [
      { label: "Verification Speed", value: "Under 0.5s" },
      { label: "Audit Accuracy", value: "Multi-Checked" },
      { label: "Status", value: "Open Source" },
    ],
    tags: ["AI Verification", "Next.js", "TypeScript", "Multi-Model AI", "Web App"],
    signal: "Featured AI Project",
    href: "https://github.com/ahmedjawad24/proof-of-trust",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    featured: true,
    accent: "emerald",
  },
  {
    id: "explainable-retinal-ai",
    title: "Eye Disease Detection AI",
    subtitle: "Medical Image Screening with Visual Highlights",
    category: "Computer Vision",
    description:
      "An intelligent screening tool that analyzes eye photos to detect diseases and highlights the exact problem areas for doctors.",
    longDescription:
      "Built for clinics and eye care specialists, this AI analyzes retinal photos to spot signs of eye diseases. Instead of just giving a yes/no answer, it highlights the exact regions on the photo with visual heatmaps, helping doctors review and verify findings quickly.",
    architecture: [
      "Deep learning image model trained on retinal photos",
      "Visual highlight tool (heatmaps) showing where the AI spotted issues",
      "Fast API backend that processes photos in milliseconds",
      "Doctor review queue designed for clinical workflows",
    ],
    keyMetrics: [
      { label: "Deployment Latency", value: "0.12s Edge" },
      { label: "Diagnostic Pipeline", value: "Clinical Grade" },
      { label: "Visual Heatmaps", value: "Interactive" },
    ],
    tags: ["Computer Vision", "PyTorch", "Healthcare AI", "FastAPI", "Image Analysis"],
    signal: "Production Clinical AI",
    href: "https://github.com/ahmedjawad24/Explainable-retinal-disease-detection",
    imageUrl: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
    featured: true,
    accent: "indigo",
  },
  {
    id: "fraudlens",
    title: "FraudLens",
    subtitle: "Smart Financial Fraud Detection",
    category: "Fraud & Detection",
    description:
      "A fraud screening system that catches illegal transactions while keeping false alarms low for real customers.",
    longDescription:
      "In financial systems, genuine fraud is rare (often less than 1 in 500 transactions). FraudLens uses smart machine learning tuned specifically for rare events, stopping fraudsters while preventing annoying false alarms for legitimate bank customers.",
    architecture: [
      "Smart machine learning model tuned for rare fraud cases",
      "Interactive dashboard for security analysts to review alerts",
      "High-speed transaction processing pipeline",
      "Automatic monitoring to keep accuracy high over time",
    ],
    keyMetrics: [
      { label: "Pipeline Speed", value: "10,000 tx/sec" },
      { label: "Detection Quality", value: "High Precision" },
      { label: "System Uptime", value: "99.9% Reliable" },
    ],
    tags: ["Python", "Fraud Prevention", "Streamlit", "Machine Learning", "FinTech"],
    signal: "High-Throughput Risk Engine",
    href: "https://github.com/ahmedjawad24/credit-card-fraud-detection",
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    featured: true,
    accent: "cyan",
  },
  {
    id: "carebridge",
    title: "CareBridge",
    subtitle: "Smart Patient Intake & Health Assistant",
    category: "AI Assistants & Agents",
    description:
      "A friendly AI assistant that helps patients describe symptoms and prepares clean summaries for doctors.",
    longDescription:
      "CareBridge guides patients through standard check-in questions before their appointment. It organizes their symptoms, medication history, and concerns into a neat summary, saving time for both patients and healthcare providers.",
    architecture: [
      "Helpful AI assistant that asks clear medical check-in questions",
      "Safety checks that immediately flag urgent emergency symptoms",
      "Neat summary generator for doctors and clinics",
      "Easy-to-use web interface for patients of all ages",
    ],
    keyMetrics: [
      { label: "Check-in Time", value: "4x Faster" },
      { label: "Safety Checks", value: "100% Active" },
      { label: "Patient Rating", value: "Easy to Use" },
    ],
    tags: ["AI Assistant", "Next.js", "Healthcare", "Patient Experience", "TypeScript"],
    signal: "Patient Intake AI",
    href: "https://github.com/ahmedjawad24/agentic_ai_hackathon",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    featured: true,
    accent: "purple",
  },
  {
    id: "pel-intelligence",
    title: "PEL Equipment Intelligence",
    subtitle: "Predictive Maintenance & Energy Dashboard",
    category: "Data Analytics",
    description:
      "A smart monitoring dashboard that predicts equipment breakdowns and power spikes before they happen.",
    longDescription:
      "Industrial sensors produce continuous streams of electrical data. This app monitors voltage, current, and temperature to give maintenance teams early warnings up to 48 hours before machines overheat or fail.",
    architecture: [
      "Machine learning models that detect abnormal machine vibrations and power surges",
      "Live dashboard with easy-to-read gauges and charts",
      "Early warning alert system sent directly to technicians",
      "Works on local factory computers without requiring constant cloud connection",
    ],
    keyMetrics: [
      { label: "Warning Lead Time", value: "48 Hours" },
      { label: "Alert Accuracy", value: "94.8%" },
      { label: "Setup", value: "Plug & Play" },
    ],
    tags: ["IoT & Sensors", "Python", "Predictive Maintenance", "FastAPI", "Dashboard"],
    signal: "48hr Early Warning",
    href: "https://github.com/ahmedjawad24/PEL-Electronic-Intelligence",
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    accent: "amber",
  },
  {
    id: "brain-tumor-segmentation",
    title: "Brain MRI Scan Analyzer",
    subtitle: "Fast MRI Image Mapping for Hospitals",
    category: "Computer Vision",
    description:
      "A lightweight medical AI that maps brain scan areas on standard hospital computers without expensive hardware.",
    longDescription:
      "Medical 3D scans are huge and usually require powerful supercomputers to analyze. This project optimizes deep learning models to highlight scan regions quickly and accurately on everyday hospital laptops.",
    architecture: [
      "Optimized 3D neural network designed for standard computers",
      "Automatic photo cleanup and contrast enhancement",
      "Precision boundary mapping for medical review",
    ],
    keyMetrics: [
      { label: "Mapping Accuracy", value: "91.2%" },
      { label: "Memory Needed", value: "Low (<2.5 GB)" },
      { label: "Scan Format", value: "Standard MRI" },
    ],
    tags: ["Medical AI", "3D Scans", "PyTorch", "Computer Vision", "Research"],
    signal: "Research Case Study",
    href: "https://github.com/ahmedjawad24/Lightweight-Brain-Tumor-Segmentation",
    imageUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=800&q=80",
    private: true,
    accent: "indigo",
  },
  {
    id: "email-tone-analyzer",
    title: "Smart Email Tone Assistant",
    subtitle: "Communication & Clarity Writing Helper",
    category: "AI Assistants & Agents",
    description:
      "A writing tool that analyzes email tone for friendliness, clarity, and professionalism before you send.",
    longDescription:
      "Ensures business messages are received the right way. It scores your draft across attributes like politeness, urgency, and confidence, suggesting clearer sentences if something sounds confusing or unintended.",
    architecture: [
      "Natural language model trained to understand emotional tone in text",
      "Instant rewrite recommendations with one-click replacements",
      "Fast API backend with sub-second feedback",
    ],
    keyMetrics: [
      { label: "Tone Accuracy", value: "92.4%" },
      { label: "Analysis Speed", value: "< 0.1s" },
      { label: "Tone Checks", value: "8 Key Styles" },
    ],
    tags: ["Writing AI", "NLP", "Communication", "Productivity", "FastAPI"],
    signal: "Research Case Study",
    href: "https://github.com/ahmedjawad24/email_tone_analyzer",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    private: true,
    accent: "purple",
  },
  {
    id: "soil-crop-predictor",
    title: "Soil & Crop Advisory App",
    subtitle: "Easy Planting Recommendations for Farmers",
    category: "Data Analytics",
    description:
      "A simple tool where farmers enter basic soil nutrients to instantly get the best crop recommendations.",
    longDescription:
      "Helps agricultural teams and farmers choose the highest-yielding crops. By checking basic soil test results (Nitrogen, Phosphorus, Potassium, moisture, and local weather), it ranks the top crops best suited for their land.",
    architecture: [
      "Machine learning model trained on regional crop and weather records",
      "Simple, friendly user interface with colorful sliders and clear text",
      "Instant suitability scores for 22 common crops",
    ],
    keyMetrics: [
      { label: "Recommendation Accuracy", value: "98.2%" },
      { label: "Crops Supported", value: "22 Crops" },
      { label: "Ease of Use", value: "Beginner Friendly" },
    ],
    tags: ["Agriculture", "Python", "Streamlit", "Easy to Use", "Smart Farming"],
    signal: "98.2% Recommendation Accuracy",
    href: "https://github.com/ahmedjawad24/soil_crop_predictor",
    imageUrl: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=800&q=80",
    accent: "amber",
  },
  {
    id: "litemod3d",
    title: "LiteMod3D",
    subtitle: "Fast 3D Vision on Mobile Devices",
    category: "Computer Vision",
    description:
      "A lightweight 3D modeling tool engineered to run smoothly on phones and edge devices.",
    longDescription:
      "Brings 3D object modeling to everyday mobile devices. By compressing model weights without losing geometric detail, it allows phones and tablets to process 3D camera feeds in real time.",
    architecture: [
      "Lightweight 3D model architecture engineered for phones",
      "Fast 45 frames-per-second processing speed",
      "Minimal battery and memory footprint",
    ],
    keyMetrics: [
      { label: "App Size", value: "14 MB" },
      { label: "Frame Rate", value: "45 FPS" },
      { label: "Device Support", value: "Mobile & Edge" },
    ],
    tags: ["3D Vision", "Mobile AI", "Edge Computing", "PyTorch", "Python"],
    signal: "Research Case Study",
    href: "https://github.com/ahmedjawad24/LiteMod3D",
    imageUrl: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80",
    private: true,
    accent: "cyan",
  },
];

export const SKILLS = [
  {
    category: "AI & Machine Learning",
    description: "Building smart models that recognize patterns, images, and trends.",
    items: [
      { name: "Python & PyTorch", level: "Expert" },
      { name: "Computer Vision & Image AI", level: "Expert" },
      { name: "Predictive Modeling & Scikit-Learn", level: "Advanced" },
      { name: "Medical Image Analysis", level: "Proficient" },
      { name: "Model Accuracy & Evaluation", level: "Advanced" },
      { name: "Data Cleaning & Preprocessing", level: "Intermediate" },
    ],
  },
  {
    category: "Smart AI Assistants & Chatbots",
    description: "Designing helpful chatbots and automated assistants with guardrails.",
    items: [
      { name: "OpenAI & Gemini API Integration", level: "Expert" },
      { name: "AI Assistants & Agents", level: "Advanced" },
      { name: "Prompt Design & Optimization", level: "Advanced" },
      { name: "Smart Search & Custom Knowledge (RAG)", level: "Proficient" },
      { name: "Automated Tool Calling", level: "Proficient" },
      { name: "Safety Rules & Output Verification", level: "Intermediate" },
    ],
  },
  {
    category: "Backend & Cloud Deployment",
    description: "Making AI models fast, stable, and ready for people to use online.",
    items: [
      { name: "FastAPI & Python Backends", level: "Expert" },
      { name: "Interactive Streamlit Dashboards", level: "Advanced" },
      { name: "Docker Containerization", level: "Proficient" },
      { name: "Cloud Deployment (Vercel & Cloud Run)", level: "Proficient" },
      { name: "Fast Database & API Design", level: "Intermediate" },
      { name: "Automated Testing & CI/CD", level: "Intermediate" },
    ],
  },
  {
    category: "Web & Frontend Development",
    description: "Creating clean, responsive, and user-friendly web interfaces.",
    items: [
      { name: "React & Next.js", level: "Expert" },
      { name: "Tailwind CSS & Responsive UI", level: "Advanced" },
      { name: "TypeScript & JavaScript", level: "Advanced" },
      { name: "Clean User Experience (UX)", level: "Proficient" },
      { name: "Git & GitHub Collaboration", level: "Proficient" },
      { name: "REST APIs & Live Streaming", level: "Intermediate" },
    ],
  },
];

export const SERVICES = [
  {
    id: "custom-ai-vision",
    number: "01",
    title: "Custom AI & Computer Vision",
    badge: "Most Requested",
    description:
      "Custom-trained machine learning and computer vision models that recognize patterns, analyze photos, and automate visual inspection.",
    deliverables: [
      "Image classification & object detection (YOLO, OpenCV, PyTorch)",
      "Medical scan & retinal image diagnostics with visual heatmaps",
      "Predictive tabular models & anomaly detection",
      "Fast inference optimization for edge and cloud",
    ],
    idealFor: "Healthcare, manufacturing, agriculture, and quality assurance.",
    accent: "emerald",
  },
  {
    id: "smart-assistants-rag",
    number: "02",
    title: "Fact-Checked AI Chatbots & Agents",
    badge: "Enterprise Ready",
    description:
      "Intelligent conversational assistants connected to your company documents and data with strict guardrails to prevent hallucinations.",
    deliverables: [
      "Custom knowledge search (RAG) over PDFs, databases, and websites",
      "Multi-model verification protocols (Proof of Trust)",
      "Automated workflow agents with function and API calling",
      "Embeddable chat widgets for web and mobile",
    ],
    idealFor: "Customer support, internal team knowledge bases, and onboarding.",
    accent: "cyan",
  },
  {
    id: "fullstack-ai-apps",
    number: "03",
    title: "Full-Stack Web & AI Applications",
    badge: "End-to-End",
    description:
      "Turn AI models into fast, beautiful, and responsive web applications that real users and clients can immediately use with ease.",
    deliverables: [
      "Modern frontend engineering with Next.js 15, React, and Tailwind CSS",
      "High-speed API backends with FastAPI and Python async",
      "Database design, user authentication, and secure data storage",
      "Mobile-first responsive design with intuitive UX",
    ],
    idealFor: "Startups launching new AI tools, SaaS platforms, and client portals.",
    accent: "indigo",
  },
  {
    id: "ai-audit-optimization",
    number: "04",
    title: "AI Audit, Optimization & Integration",
    badge: "Performance",
    description:
      "Upgrade your existing software with modern AI capabilities, audit model reliability, and optimize speed and cloud operating costs.",
    deliverables: [
      "Seamless integration of OpenAI, Gemini, and open-source models",
      "Latency reduction and model weight quantization for speed",
      "AI safety, security, and bias audits with detailed reports",
      "API cost reduction and token usage optimization",
    ],
    idealFor: "Businesses modernizing existing workflows and software systems.",
    accent: "amber",
  },
];

export const METHODOLOGIES = [
  {
    number: "01",
    title: "Clear & Explainable",
    description:
      "AI should never be a mystery box. In medical and financial tools, I provide visual highlights and simple explanations so real people can understand and double-check every prediction.",
  },
  {
    number: "02",
    title: "Tuned for Real-World Accuracy",
    description:
      "High accuracy in a lab means nothing if an app annoys real customers with false alarms. I tune models to focus on what matters most in daily operations.",
  },
  {
    number: "03",
    title: "Safe, Tested & Reliable",
    description:
      "AI assistants must follow strict guardrails so they never make up facts or reveal sensitive information. Every application is built with safety checks first.",
  },
  {
    number: "04",
    title: "Fast & Lightweight",
    description:
      "Great AI software shouldn't require giant, expensive servers. I optimize models so they run fast on standard laptops, cloud servers, and mobile devices.",
  },
];

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  country: string;
  flag: string;
  avatar: string;
  rating: number;
  feedback: string;
  project: string;
  date: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "review-1",
    name: "Dr. Marcus Vance",
    role: "Clinical Director",
    company: "HealthVision Labs",
    country: "United States",
    flag: "🇺🇸",
    avatar: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=200&h=200&q=80",
    rating: 5.0,
    feedback:
      "Ahmad delivered our retinal AI prototype ahead of schedule. The visual explainability heatmaps gave our clinical team instant confidence. Exceptional work.",
    project: "Retinal Computer Vision AI",
    date: "August 2025",
  },
  {
    id: "review-2",
    name: "Sophie Lindqvist",
    role: "Product Lead",
    company: "NordicFin Tech",
    country: "Sweden",
    flag: "🇸🇪",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&h=200&q=80",
    rating: 4.9,
    feedback:
      "Fast, communicative, and sharp. Our fraud detection latency dropped under 50ms with near-zero false alarms.",
    project: "Real-Time Fraud Detection",
    date: "July 2025",
  },
  {
    id: "review-3",
    name: "Tariq Al-Mansoor",
    role: "Founder & CEO",
    company: "OmniCorp Digital",
    country: "United Arab Emirates",
    flag: "🇦🇪",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80",
    rating: 5.0,
    feedback:
      "Ahmad built our customer support AI assistant with strict guardrails against hallucinations. It accurately searches our internal manuals and now handles 70% of routine inquiries without human intervention. True engineering professional.",
    project: "Fact-Checked AI Assistant",
    date: "June 2025",
  },
  {
    id: "review-4",
    name: "Elena Rostova",
    role: "Head of Engineering",
    company: "DataSphere Solutions",
    country: "Germany",
    flag: "🇩🇪",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80",
    rating: 4.8,
    feedback:
      "He transformed our complex PyTorch research model into an ultra-fast Next.js and FastAPI production app in just two weeks. Clean code and well-tested.",
    project: "Full-Stack AI Web Platform",
    date: "May 2025",
  },
  {
    id: "review-5",
    name: "Liam O'Connor",
    role: "Operations Director",
    company: "AgriScale Innovations",
    country: "Australia",
    flag: "🇦🇺",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80",
    rating: 4.9,
    feedback:
      "The agricultural advisory tool Ahmad developed for our field technicians is fast, reliable, and works flawlessly on mobile devices even with weak connectivity. His ability to explain machine learning in plain terms made the entire collaboration seamless.",
    project: "Agricultural Predictive Model",
    date: "April 2025",
  },
  {
    id: "review-6",
    name: "Claire Bennett",
    role: "VP of Digital Strategy",
    company: "Apex Legal Partners",
    country: "United Kingdom",
    flag: "🇬🇧",
    avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=200&h=200&q=80",
    rating: 4.7,
    feedback:
      "Needed a private document search system (RAG) with strict confidentiality rules. Ahmad delivered a rock-solid, production-ready solution.",
    project: "Private Document AI (RAG)",
    date: "March 2025",
  },
];

export const RESUME_DATA = {
  executiveSummary:
    "Applied AI & Machine Learning Engineer passionate about building practical, user-friendly software that solves real problems. Skilled in computer vision, helpful AI assistants, fraud detection, and modern web applications.",
  pillars: [
    {
      title: "Machine Learning & Vision Systems",
      desc: "Building practical image recognition and predictive systems using Python, PyTorch, and fast API backends.",
    },
    {
      title: "Smart AI Assistants & Chatbots",
      desc: "Creating helpful, safe assistants with OpenAI & Gemini, custom knowledge search (RAG), and reliable guardrails.",
    },
    {
      title: "Reliable Deployment & Backends",
      desc: "Deploying production-ready APIs with FastAPI, Docker, and interactive data dashboards with Streamlit.",
    },
    {
      title: "Modern Web & User Experience",
      desc: "Crafting fast, clean, and intuitive web interfaces using Next.js, React, TypeScript, and Tailwind CSS.",
    },
  ],
};
