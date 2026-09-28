import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DB_PATH = path.join(__dirname, 'data', 'db.json');

// Minimalist, high-impact data for Divyanshu Kumar
const initialData = {
  profile: {
    name: "Divyanshu Kumar",
    title: "Full Stack Web Developer (MERN)",
    headline: "Hi, my name is Divyanshu Kumar and I'm a FullStack Developer",
    education: "B.Tech in Computer Science & Engineering",
    college: "Sitamarhi Institute of Technology (SIT)",
    email: "divy9anshu@gmail.com",
    phone: "+91-9334805955",
    location: "India • Remote & Onsite",
    bio: "Full Stack Developer (MERN) and B.Tech CSE graduate with hands-on internship experience in React.js, Node.js, Express.js, MongoDB, and MySQL.",
    availability: "Open to Full-time Roles & Contracts",
    github: "https://github.com/divy9anshu",
    linkedin: "https://www.linkedin.com/in/divyanshu-kumar-86736a257/",
    stats: {
      internship: "6+ Months",
      projects: "12+ Built",
      quality: "99% Code Quality",
      response: "< 4 Hrs"
    }
  },
  education: [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Sitamarhi Institute of Technology (SIT)",
      year: "2022 – 2026"
    }
  ],
  certifications: [
    {
      title: "DSA in Java (400+ Problems)",
      issuer: "Apna College"
    },
    {
      title: "Full Stack MERN Web Development",
      issuer: "Apna College"
    },
    {
      title: "Salesforce Developer Virtual Internship",
      issuer: "SmartBridge / Salesforce"
    }
  ],
  experience: [
    {
      id: "exp-1",
      company: "Maryamurti",
      role: "Full Stack Developer Intern",
      period: "Internship",
      location: "Remote",
      bullets: [
        "Built MERN stack modules with React.js & Node.js",
        "Optimized MongoDB queries and indexes by 30%",
        "Implemented JWT authentication and RBAC"
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"]
    },
    {
      id: "exp-2",
      company: "AndroWebsTech",
      role: "Web Developer Intern",
      period: "Internship",
      location: "India",
      bullets: [
        "Engineered responsive React UIs with ~25% faster load speeds",
        "Built REST API endpoints for content and user management"
      ],
      technologies: ["React.js", "Node.js", "Tailwind CSS", "REST APIs"]
    },
    {
      id: "exp-3",
      company: "SmartBridge / Salesforce",
      role: "Salesforce Developer Intern",
      period: "Virtual Internship",
      location: "Virtual",
      bullets: [
        "Developed custom Apex triggers and cloud data models",
        "Designed relational schemas and SOQL queries"
      ],
      technologies: ["Salesforce", "Apex", "SOQL", "Cloud"]
    },
    {
      id: "exp-4",
      company: "Intellio Intern",
      role: "Software Developer Intern",
      period: "Internship",
      location: "India",
      bullets: [
        "Built backend API integration services",
        "Executed comprehensive Postman test suites"
      ],
      technologies: ["JavaScript", "Node.js", "REST APIs", "Postman"]
    }
  ],
  skills: {
    frontend: ["React.js", "JavaScript (ES6+)", "HTML5 & CSS3", "Tailwind CSS"],
    backend: ["Node.js", "Express.js", "RESTful APIs", "JWT Authentication"],
    databases: ["MongoDB", "Mongoose ODM", "MySQL", "Query Optimization"],
    devops: ["Git & GitHub", "CI/CD", "Vercel", "Render", "Postman"]
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

function initDB() {
  const dataDir = path.dirname(DB_PATH);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  fs.writeFileSync(DB_PATH, JSON.stringify(initialData, null, 2), 'utf8');
}

export function readDB() {
  initDB();
  try {
    const raw = fs.readFileSync(DB_PATH, 'utf8');
    return JSON.parse(raw);
  } catch (e) {
    console.error('Error reading db:', e);
    return initialData;
  }
}

export function writeDB(data) {
  initDB();
  try {
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (e) {
    console.error('Error writing db:', e);
    return false;
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
    company: testimonial.company || 'Client',
    role: testimonial.role || 'Partner',
    avatar: testimonial.avatar || '/images/client-1.jpg',
    content: testimonial.content || '',
    rating: Number(testimonial.rating) || 5,
    date: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
  };
  db.testimonials.unshift(newTestimonial);
  writeDB(db);
  return newTestimonial;
}
