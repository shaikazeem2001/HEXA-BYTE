<div align="center">

# 💬 Vibe Chat
### A Next-Generation Real-Time Community Platform

A fully-featured, full-stack enterprise-grade chat application designed for seamless real-time communication. Vibe Chat empowers users to discover communities, engage in vibrant public channels, and spin up secure private rooms, all wrapped within a highly responsive and aesthetically refined modern UI.

🚀 **Live Demo:**  
https://vibe-chat-8qwh6570f-shaikazeem2001s-projects.vercel.app/

---

![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Backend-green?style=for-the-badge&logo=nodedotjs)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-brightgreen?style=for-the-badge&logo=mongodb)
![Stream](https://img.shields.io/badge/Stream.io-Chat_SDK-blue?style=for-the-badge&logo=stream)
![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS_v4-06B6D4?style=for-the-badge&logo=tailwindcss)

</div>

---

## 🌟 Overview

Vibe Chat moves beyond legacy messaging systems by deeply integrating the robust **Stream.io SDK** to deliver an uncompromising real-time chat experience mimicking top-tier industry standards. Complete with dynamic user customizations—including a native 3D/SVG Avatar generator—and globally synchronized Light/Dark mode theming, Vibe Chat is engineered for scale, responsiveness, and aesthetic minimalism.

This project demonstrates a comprehensive mastery of:

- Full-Stack Service Architecture & RESTful API Design
- Real-time Communication Pipelines (Stream SDK)
- Secure, State-Driven Authentication Flows (JWT / Bcrypt)
- Responsive UI/UX Systems (Tailwind CSS v4)
- Complex State Management & DOM Synchronization

---

## 🚀 Key Features

- **Enterprise Messaging (Powered by Stream.io):** Leverages the Stream Chat React SDK for rich messaging functionalities including Threads, File Attachments, Emojis, and Real-time Read Receipts.
- **Dynamic Avatar Creation (Memoji):** Integrated with `react-nice-avatar` to provide users with an interactive, heavily customizable avatar generator that persists dynamically across their user sessions.
- **Global Theme Engine:** Fully configured internal Light and Dark modes managed by an active DOM MutationObserver that synchronizes Tailwind `dark:` variants securely to `localStorage`.
- **Public & Secure Private Rooms:** Fluid transitions between global discovery modes and strictly invite-only private rooms. 
- **Frictionless Authentication Flows:** Supports keyboard-driven login/signup flows and secure JSON payload transfers connected to MongoDB.
- **Responsive Navigation:** A sticky, collapsible Sidebar nested inside a primary application Layout shell for uncompromised mobile and desktop experiences.

---

## 🖼️ Application Showcases

### 🔐 Frictionless Authentication
Minimalist, keyboard-accessible Login & Signup views structured with absolute visual hierarchy.
> *(Screenshots configured locally under `./screenshots/`)*

### 👤 Interactive Profile & Settings
Robust settings panel featuring live Memoji generation updates and global theme/privacy toggles.

### 🌍 Discovery & Trending Topics
Vibrant grid layouts pointing users toward automatically generated or pre-configured community hubs.

### 💬 Real-Time Chat (Stream UI)
A fully overridden conversational UI interface powered natively by Stream, injecting custom memoji assets seamlessly into the message feed.

---

## 🧱 Technical Stack

### Frontend Architecture
- **Framework:** React 18 / Vite
- **Styling UI/UX:** Tailwind CSS v4 
- **Integrations:** Stream-Chat-React, React-Nice-Avatar, React-Router-Dom
- **Iconography:** Lucide-React

### Backend Architecture
- **Runtime Environment:** Node.js
- **Framework:** Express.js
- **Database Architecture:** MongoDB with Mongoose ODMs
- **Authentication:** JSON Web Tokens (JWT) / Bcrypt

### Deployment & CI/CD
- **Frontend App:** Vercel  
- **Backend API:** Railway  

---

## ⚙️ Local Development Setup

### 1. Backend Configuration
Navigate to the `Backend` directory and clone the `.env.example` setup with your provisioning variables.

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

### 2. Frontend Configuration
Navigate to the `sign-up` root directory to initialize the user-facing client. You will require Stream.io developer credentials explicitly.

```env
VITE_API_URL=http://localhost:5000
VITE_STREAM_API_KEY=your_stream_api_key
VITE_STREAM_USER_TOKEN=your_development_user_token
```

### 3. Installation Flow

**Start the Backend API:**
```bash
cd Backend
npm install
npm run dev
```

**Start the React Client:**
```bash
cd sign-up
npm install
npm run dev
```

The application will successfully bootstrap to `http://localhost:5173`.

---

## 🛡️ License & Attributions

Designed alongside robust architectural principles.
MIT License - Open Source

</div>
