import fs from 'fs';
import path from 'path';
import os from 'os';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const LOCAL_DB_PATH = path.join(__dirname, 'data', 'db.json');
const TMP_DB_PATH = path.join(os.tmpdir(), 'portfolio_db.json');

let inMemoryDB = null;

// Minimalist, high-impact data for Divyanshu Kumar
const initialData = {
  profile: {
    name: "Divyanshu Kumar",
    title: "Full Stack Web Developer (MERN)",
    headline: "Hi, my name is Divyanshu Kumar and I'm a Full Stack Developer",
    education: "B.Tech in Computer Science & Engineering (Graduated)",
    college: "Sitamarhi Institute of Technology (SIT), Bihar",
    email: "divy9anshu@gmail.com",
    phone: "+91-9334805955",
    location: "Hyderabad, Telangana, India",
    bio: "Software Developer with 9+ months of full-stack internship experience building secure, scalable web applications using JavaScript, TypeScript, React.js, Redux, Node.js, Express.js, and MongoDB. Skilled in REST API design, authentication/RBAC, AWS (EC2, S3), CI/CD, and CCNA networking.",
    availability: "Open to Full-time Roles & Immediate Joining",
    github: "https://github.com/divy9anshu",
    linkedin: "https://www.linkedin.com/in/divyanshu-kumar-86736a257/",
    resumeUrl: "/Divyanshu_Kumar_Resume.pdf",
    stats: {
      internship: "9+ Months",
      projects: "12+ Built",
      quality: "99% Code Quality",
      response: "< 4 Hrs"
    }
  },
  education: [
    {
      degree: "B.Tech in Computer Science & Engineering (Graduated)",
      institution: "Sitamarhi Institute of Technology (SIT), Bihar",
      year: "2022 – 2026"
    }
  ],
  certifications: [
    {
      title: "Career Essentials in Cybersecurity",
      issuer: "Microsoft & LinkedIn Learning (Aug 2026)"
    },
    {
      title: "CCNA: Introduction to Networks",
      issuer: "Cisco Networking Academy (Mar 2025)"
    },
    {
      title: "CCNA: Switching, Routing & Wireless Essentials",
      issuer: "Cisco Networking Academy (Apr 2025)"
    },
    {
      title: "DSA in Java (400+ Problems)",
      issuer: "Apna College"
    },
    {
      title: "Full Stack MERN Web Development",
      issuer: "Apna College"
    }
  ],
  experience: [
    {
      id: "exp-1",
      company: "Maryamurti Pvt. Ltd.",
      role: "Full Stack Developer Intern",
      period: "Jun 2025 – Nov 2025",
      location: "Patna, Bihar (ManoIndia Platform)",
      bullets: [
        "Developed 5+ reusable React.js & Redux frontend modules and implemented JWT authentication/RBAC serving 500+ users, cutting load times by ~25%.",
        "Hardened Node.js/Express.js REST APIs with OWASP-aligned input validation and Postman-tested endpoints.",
        "Optimized MongoDB schemas and indexing strategies, cutting average query response times by 30%."
      ],
      technologies: ["React.js", "Redux", "Node.js", "Express.js", "MongoDB", "JWT", "REST APIs"]
    },
    {
      id: "exp-2",
      company: "Intellio Intern",
      role: "Machine Learning Intern",
      period: "Jan 2026 – Mar 2026",
      location: "Remote (Grade: A+ 95%)",
      bullets: [
        "Built and evaluated ML models (Random Forest, SVM, Logistic Regression) in Python, achieving up to 94% accuracy.",
        "Deployed end-to-end ML pipelines via Flask REST APIs, gaining hands-on experience securing model-serving endpoints."
      ],
      technologies: ["Python", "Flask", "REST APIs", "Machine Learning", "Scikit-Learn"]
    },
    {
      id: "exp-3",
      company: "AndroWebsTech Pvt. Ltd.",
      role: "Software Developer Intern",
      period: "Mar 2025 – Apr 2025",
      location: "India",
      bullets: [
        "Built a Zerodha-clone trading platform website (10+ pages) using HTML5, CSS3, Bootstrap, and PHP.",
        "Engineered responsive layouts and ensured full cross-browser compatibility."
      ],
      technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "PHP"]
    }
  ],
  skills: {
    languages: ["Java", "Python", "JavaScript (ES6+)", "TypeScript", "SQL", "C/C++"],
    frontend: ["React.js", "Redux", "Next.js", "HTML5 & CSS3", "Tailwind CSS", "Bootstrap"],
    backend: ["Node.js", "Express.js", "Flask", "RESTful APIs", "JWT Auth & RBAC"],
    databasesAndCloud: ["MongoDB", "MySQL", "AWS (EC2, S3)", "Vercel", "Docker"],
    toolsAndCore: ["Git/GitHub", "CI/CD", "Postman", "Jest", "CCNA Networking", "OWASP Security"]
  },
  services: [
    {
      id: "fullstack-dev",
      title: "Full Stack Web Development",
      features: ["React.js & Node.js Architecture", "Scalable Database Schemas", "Clean Responsive UIs"]
    },
    {
      id: "api-dev",
      title: "REST API Development",
      features: ["Token-based Auth (JWT)", "Fast Query Performance", "Third-party & Stripe Integrations"]
    },
    {
      id: "db-design",
      title: "Database Design & Tuning",
      features: ["MongoDB & MySQL Modeling", "Index Optimization", "ACID Compliance"]
    },
    {
      id: "frontend-ui",
      title: "Responsive Web Engineering",
      features: ["Mobile-First Design", "Sub-2s Fast Page Loads", "Modern Clean UX"]
    }
  ],
  projects: [
    {
      id: "drenza-ai",
      title: "DrenzaAI — AI Recruitment Platform",
      category: "Full Stack",
      featured: true,
      image: "/images/hero-thumb-1.jpg",
      tags: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      metric: "92%+ Match Accuracy • Sub-2s Load",
      demoUrl: "https://drenzaai.vercel.app",
      githubUrl: "https://github.com/divy9anshu/drenza-ai",
      prd: {
        version: "v2.0",
        problemStatement: "Manual resume screening is slow and prone to keyword mismatch.",
        targetAudience: "Technical Recruiters, Startups, and Candidates.",
        userStories: [
          "Automated resume parsing with ranked candidate matching in seconds.",
          "Real-time applicant pipeline tracking with stage progression.",
          "Secure candidate profile document vault."
        ],
        technicalArchitecture: "React SPA + Express REST API + MongoDB Indexed Store + JWT Security.",
        keyFeatures: [
          "Automated Resume Parsing & Scoring Engine",
          "92%+ Candidate Match Accuracy",
          "Recruiter Kanban Pipeline",
          "Secure Document Vault",
          "Status Notification Triggers"
        ],
        apiEndpoints: [
          "POST /api/v1/auth/login",
          "POST /api/v1/candidates/analyze",
          "GET /api/v1/jobs/:id/applicants",
          "PATCH /api/v1/applications/:id/status"
        ],
        metrics: "92%+ match accuracy, sub-2s average page load speed, 99.9% uptime."
      }
    },
    {
      id: "manoindia-platform",
      title: "ManoIndia — Multi-Vendor Marketplace",
      category: "Full Stack",
      featured: true,
      image: "/images/contact-bg.jpg",
      tags: ["React.js", "Node.js", "Express", "MySQL", "Stripe API"],
      metric: "30% Faster Queries • Zero Race Conditions",
      demoUrl: "https://manoindia-store.vercel.app",
      githubUrl: "https://github.com/divy9anshu/manoindia-platform",
      prd: {
        version: "v2.4",
        problemStatement: "High database latency during peak traffic and cart race conditions.",
        targetAudience: "Retail Vendors, Shoppers, and Marketplace Admins.",
        userStories: [
          "Instant product search and category filtering in < 150ms.",
          "Vendor inventory management with live SKU updates.",
          "Stripe checkout with automated receipt generation."
        ],
        technicalArchitecture: "React UI + Express API + Normalized MySQL ACID Store + Stripe Webhooks.",
        keyFeatures: [
          "30% Query Latency Optimization",
          "Atomic Inventory Locking (No Double-Checkout)",
          "Multi-Vendor Management Portal",
          "Stripe Payment Gateway Integration",
          "Real-Time Sales Telemetry"
        ],
        apiEndpoints: [
          "GET /api/v1/products",
          "POST /api/v1/cart/checkout",
          "POST /api/v1/webhooks/stripe",
          "GET /api/v1/vendor/metrics"
        ],
        metrics: "30% query speedup, 500+ mock transactions verified."
      }
    },
    {
      id: "zerodha-clone",
      title: "Zerodha Clone — Real-Time Trading App",
      category: "Frontend & APIs",
      featured: true,
      image: "/images/hero-thumb-2.jpg",
      tags: ["React.js", "Node.js", "Express", "MongoDB", "Chart.js"],
      metric: "< 50ms Chart Latency • Real-Time P&L",
      demoUrl: "https://zerodha-fintech.vercel.app",
      githubUrl: "https://github.com/divy9anshu/zerodha-clone",
      prd: {
        version: "v1.5",
        problemStatement: "Traders need instant, zero-lag market visualization and rapid order execution.",
        targetAudience: "Active Traders, Investors, and Finance Learners.",
        userStories: [
          "Interactive candlestick charts across dynamic timeframes.",
          "Live portfolio holdings and P&L calculated in real time.",
          "1-click simulated order execution."
        ],
        technicalArchitecture: "React + Chart.js + Express Tick Simulation + MongoDB Portfolio Ledger.",
        keyFeatures: [
          "Interactive Candlestick & Line Market Charts",
          "Live Dynamic Watchlist",
          "Holdings & Positions Summary with Live P&L",
          "Market & Limit Order Execution"
        ],
        apiEndpoints: [
          "GET /api/v1/market/tickers",
          "GET /api/v1/portfolio/holdings",
          "POST /api/v1/orders/execute"
        ],
        metrics: "Sub-50ms chart latency, 60fps smooth pan/zoom."
      }
    },
    {
      id: "novavault-saas",
      title: "NovaVault — Document & Cloud Vault",
      category: "Full Stack",
      featured: false,
      image: "/images/hero-portrait.jpg",
      tags: ["React.js", "Node.js", "Express", "MongoDB", "AWS S3"],
      metric: "Presigned S3 Uploads • 100% RBAC",
      demoUrl: "https://novavault-demo.vercel.app",
      githubUrl: "https://github.com/divy9anshu/novavault-saas",
      prd: {
        version: "v1.2",
        problemStatement: "Teams require secure document versioning and permission governance.",
        targetAudience: "Engineering squads, startups, and agencies.",
        userStories: [
          "Role-based access control (Viewer, Editor, Admin).",
          "Presigned direct multipart S3 uploads."
        ],
        technicalArchitecture: "React + Express + MongoDB Metadata + AWS S3 Encrypted Storage.",
        keyFeatures: [
          "Presigned Direct S3 Uploads",
          "Role-Based Access Control (RBAC)",
          "Document Version History & Audit Logging"
        ],
        apiEndpoints: [
          "POST /api/v1/docs/upload-token",
          "GET /api/v1/docs"
        ],
        metrics: "Sub-180ms API response time, 100% RBAC enforcement."
      }
    }
  ],
  testimonials: [
    {
      id: "t1",
      name: "Amrita Sekhon",
      company: "Sekhon Unlimited",
      role: "VP of Product",
      avatar: "/images/client-1.jpg",
      content: "Divyanshu's mastery of React, Node.js, and clean API architecture significantly elevated our delivery velocity and product quality.",
      rating: 5,
      date: "September 2026"
    },
    {
      id: "t2",
      name: "Simran Ahluwalia",
      company: "Ahluwalia Industries",
      role: "Technology Director",
      avatar: "/images/client-2.jpg",
      content: "Divyanshu provided actionable engineering solutions and fast turnarounds. He writes exceptionally well-structured, production-ready code.",
      rating: 5,
      date: "August 2026"
    },
    {
      id: "t3",
      name: "Esha Dhaliwal",
      company: "Dhaliwal Industries",
      role: "Engineering Manager",
      avatar: "/images/client-3.jpg",
      content: "Divyanshu's work on responsive interfaces and database query optimization cut our app loading times by half.",
      rating: 5,
      date: "July 2026"
    }
  ],
  messages: []
};

function getDbPath() {
  try {
    const dataDir = path.dirname(LOCAL_DB_PATH);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    fs.accessSync(dataDir, fs.constants.W_OK);
    return LOCAL_DB_PATH;
  } catch {
    return TMP_DB_PATH;
  }
}

function initDB() {
  if (inMemoryDB) return inMemoryDB;

  const targetPath = getDbPath();
  try {
    if (fs.existsSync(targetPath)) {
      const content = fs.readFileSync(targetPath, 'utf8');
      inMemoryDB = JSON.parse(content);
      return inMemoryDB;
    }
    if (targetPath !== LOCAL_DB_PATH && fs.existsSync(LOCAL_DB_PATH)) {
      const content = fs.readFileSync(LOCAL_DB_PATH, 'utf8');
      inMemoryDB = JSON.parse(content);
      try {
        fs.writeFileSync(targetPath, JSON.stringify(inMemoryDB, null, 2), 'utf8');
      } catch (e) {
        // ignore fallback write error
      }
      return inMemoryDB;
    }
  } catch (e) {
    console.warn('Could not read existing DB file:', e.message);
  }

  inMemoryDB = JSON.parse(JSON.stringify(initialData));
  try {
    fs.writeFileSync(targetPath, JSON.stringify(inMemoryDB, null, 2), 'utf8');
  } catch (e) {
    // Read-only filesystem fallback
  }
  return inMemoryDB;
}

export function readDB() {
  if (!inMemoryDB) {
    return initDB();
  }
  const targetPath = getDbPath();
  try {
    if (fs.existsSync(targetPath)) {
      const raw = fs.readFileSync(targetPath, 'utf8');
      inMemoryDB = JSON.parse(raw);
    }
  } catch (e) {
    // Keep in-memory DB
  }
  return inMemoryDB || initialData;
}

export function writeDB(data) {
  inMemoryDB = data;
  const targetPath = getDbPath();
  try {
    fs.writeFileSync(targetPath, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (e) {
    return true;
  }
}

export function addMessage(message) {
  const db = readDB();
  const newMessage = {
    id: 'msg_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
    name: message.name || '',
    email: message.email || '',
    phone: message.phone || '',
    subject: message.subject || 'Project Inquiry',
    message: message.message || '',
    createdAt: new Date().toISOString(),
    read: false
  };
  db.messages.unshift(newMessage);
  writeDB(db);
  return newMessage;
}

export function addTestimonial(testimonial) {
  const db = readDB();
  const newTestimonial = {
    id: 't_' + Date.now(),
    name: testimonial.name || 'Anonymous',
    email: testimonial.email || '',
    company: testimonial.company || 'Client',
    role: testimonial.role || 'Partner',
    avatar: testimonial.avatar || '/images/client-1.jpg',
    content: testimonial.content || '',
    rating: Number(testimonial.rating) || 5,
    verifiedWithGoogle: !!testimonial.verifiedWithGoogle,
    authMethod: testimonial.authMethod || 'none',
    date: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
  };
  db.testimonials.unshift(newTestimonial);
  writeDB(db);
  return newTestimonial;
}
