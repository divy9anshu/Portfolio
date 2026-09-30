# Divyanshu Kumar — Full Stack Developer (MERN) Portfolio & PRD Suite

An editorial, high-performance Full-Stack Portfolio website for **Divyanshu Kumar** designed in the **Pastel Blue (`#aec4c4`)**, **Dark Green (`#1b392c`)**, **Ivory / Cream (`#fffdf0`)**, and **Warm Sand (`#f2edd1`)** curated editorial style inspired by Canva, complete with the original **Migra** and **TT Hoves** typography, high-resolution assets, interactive PRD exploration modals, and a persistent Node.js/Express REST backend.

---

## 🌟 Key Features

### 1. Curated Editorial Aesthetic & Typography
- **Exact Color Palette**:
  - Hero & Feedback: Pastel Blue (`#aec4c4`)
  - About & Contact: Soft Ivory / Cream (`#fffdf0`)
  - Skills & Services: Warm Sand (`#f2edd1`)
  - Primary Accent & Typography: Dark Forest Green (`#1b392c` / `#23391b`)
- **Original Editorial Typography**:
  - Headings: `Migra` (Extra Light & Extra Light Italic serif)
  - Body & UI: `TT Hoves` (Clean geometric sans-serif)
- **Framed Imagery & Organic Curves**: Editorial pill tags, rounded photo frames (`border-radius: 32px-38px`), magazine-like column compositions.

### 2. Full-Stack PRD (Product Requirement Document) Showcase
- **Featured Projects**:
  1. **NovaVault** — Enterprise Workspace & Document Management (React, Node, Express, MongoDB, S3, JWT)
  2. **PulseFlow** — Real-Time Product Analytics & Heatmap Engine (Node.js, Express, MongoDB, Redis, React)
  3. **ShopNexus** — Modern Headless E-Commerce Platform (React, Tailwind, Node, MySQL, Stripe)
  4. **AgileTrack** — Collaborative Task Management & Sprint Suite (React, Express, MongoDB, DnD)
- **Interactive PRD Deep-Dive Modal**:
  - Problem Statement & Target Persona
  - Technical Architecture & System Data Flow
  - User Stories & Acceptance Criteria
  - REST API Endpoints Specification (with 1-click copy)
  - Performance & Verification Metrics
  - Direct Links to Live Demos & GitHub Repositories

### 3. Client Feedback & Endorsements
- Real testimonials from **Amrita (Sekhon Unlimited)**, **Simran (Ahluwalia Industries)**, and **Esha (Dhaliwal Industries)**.
- **Interactive Feedback Submission**: Visitors and clients can submit testimonials directly via a modal, stored persistently in the database.

### 4. Interactive Contact & Inquiries System
- Direct contact details: **Phone `+91-9334805955`** | **Email `divy9anshu@gmail.com`**
- Working Contact Form with instant validation, loading feedback, and persistent storage.
- **Admin Inquiries Drawer**: Built-in drawer (accessible via the Inbox icon in the navbar) to view messages, mark them as read, or delete them.

### 5. Seamless Dark & Light Mode
- Smooth transitions between Editorial Light Mode and Dark Forest Green theme.

---

## 🛠️ Tech Stack

- **Frontend**: React 19, Tailwind CSS v3.4, Vite 6, Lucide Icons
- **Backend**: Node.js, Express.js, RESTful API architecture
- **Database**: Persistent JSON/SQLite storage (`server/data/db.json`) with ACID safety
- **Styling**: Tailored Tailwind CSS, custom `@font-face` definitions for Migra & TT Hoves

---

## 🚀 Getting Started

### 1. Installation
```bash
npm install
```

### 2. Start Full Stack Dev Environment (Client + Server)
```bash
npm run dev
```
- Frontend will run on: `http://localhost:3000`
- Backend API will run on: `http://localhost:5000`

### 3. Standalone Scripts
- Start Backend Only: `npm run server`
- Start Frontend Only: `npm run client`
- Build for Production: `npm run build`
- Test Email Configuration: `node server/test_email.js`

---

## 📧 Direct Email Setup (Receive Messages Directly in Gmail)

To receive portfolio contact messages straight into your Gmail inbox (`divy9anshu@gmail.com`):

1. Go to your [Google Account Security Settings](https://myaccount.google.com/security).
2. Enable **2-Step Verification** (if not already enabled).
3. Search for **"App Passwords"** (or visit [https://myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)).
4. Enter an app name (e.g. `Portfolio Contact`) and click **Create**.
5. Copy the generated **16-character password** (e.g. `abcd efgh ijkl mnop`).
6. Open your `.env` file and set:
```env
EMAIL_USER=divy9anshu@gmail.com
EMAIL_PASS=your_16_character_app_password
CONTACT_RECEIVER_EMAIL=divy9anshu@gmail.com
SEND_AUTO_REPLY=true
```
7. Verify by running:
```bash
node server/test_email.js
```

> **For Vercel Deployment**: In your Vercel Project Settings > **Environment Variables**, add `EMAIL_USER`, `EMAIL_PASS`, and `CONTACT_RECEIVER_EMAIL`.

---

## 📡 REST API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/health` | Server status and developer info |
| `GET` | `/api/profile` | Divyanshu's profile, bio, and capabilities |
| `GET` | `/api/projects` | All full-stack projects with PRD data |
| `GET` | `/api/projects/:id` | Single project with full PRD specifications |
| `GET` | `/api/testimonials` | Client feedback testimonials |
| `POST` | `/api/testimonials` | Submit a new testimonial review |
| `POST` | `/api/contact` | Submit a contact form inquiry |
| `GET` | `/api/contact/messages` | Admin view of all inquiries & unread count |
| `PATCH`| `/api/contact/messages/:id/read` | Mark inquiry as read |
| `DELETE`| `/api/contact/messages/:id` | Delete an inquiry |

---

## ☁️ Deployment on Vercel

This repository is fully configured for zero-config 1-click deployment on **Vercel** with full serverless API support and Vite SPA routing.

### Option 1: Deploy via Vercel Dashboard (Recommended)
1. Go to [vercel.com/new](https://vercel.com/new).
2. Connect your GitHub account and import `https://github.com/divy9anshu/Portfolio`.
3. Keep default settings (Framework Preset: **Vite**, Build Command: `npm run build`, Output Directory: `dist`).
4. Click **Deploy**.

### Option 2: Deploy via Vercel CLI
```bash
npx vercel
# To deploy to production:
npx vercel --prod
```

---

## 👤 Developer Information

- **Name**: Divyanshu Kumar
- **Role**: Full Stack Developer (MERN) & B.Tech CSE Graduate (Sitamarhi Institute of Technology 2022–2026)
- **Email**: [divy9anshu@gmail.com](mailto:divy9anshu@gmail.com)
- **Phone**: [+91-9334805955](tel:+919334805955)
- **GitHub**: [https://github.com/divy9anshu](https://github.com/divy9anshu)
- **LinkedIn**: [https://www.linkedin.com/in/divyanshu-kumar-86736a257/](https://www.linkedin.com/in/divyanshu-kumar-86736a257/)
- **Portfolio Style**: Curated Editorial Style (Pastel Blue & Dark Green)
