<div align="center">

![Vibe Chat Logo](https://img.icons8.com/fluency/96/chat.png)

# 💬 Vibe Chat

### **Real-Time Community Chat Platform**

*Connect, communicate, and collaborate with communities worldwide*

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-Visit_Now-5865F2?style=for-the-badge&logo=vercel)](https://vibe-chat-eta.vercel.app/)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge)](CONTRIBUTING.md)

---

![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-20+-339933?style=flat-square&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-7.0-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Socket.IO](https://img.shields.io/badge/Socket.IO-4.7-010101?style=flat-square&logo=socket.io&logoColor=white)
![Stream](https://img.shields.io/badge/Stream_Chat-SDK-005FFF?style=flat-square&logo=stream&logoColor=white)
![Express](https://img.shields.io/badge/Express-4.19-000000?style=flat-square&logo=express&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.4-3178C6?style=flat-square&logo=typescript&logoColor=white)

</div>

---

## 📑 Table of Contents

- [🌟 Overview](#-overview)
- [✨ Key Features](#-key-features)
- [🎥 Live Demo](#-live-demo)
- [🖼️ Screenshots](#️-screenshots)
- [🏗️ Architecture](#️-architecture)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [🔐 Environment Variables](#-environment-variables)
- [📡 API Documentation](#-api-documentation)
- [🎨 Features Deep Dive](#-features-deep-dive)
- [🚢 Deployment](#-deployment)
- [🧪 Testing](#-testing)
- [🗺️ Roadmap](#️-roadmap)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👥 Team](#-team)
- [🙏 Acknowledgments](#-acknowledgments)
- [📞 Support](#-support)

---

## 🌟 Overview

**Vibe Chat** is a modern, feature-rich real-time messaging platform built for communities. Inspired by Discord's intuitive design and powered by [Stream Chat SDK](https://getstream.io/chat/), it delivers enterprise-grade chat functionality with a beautiful, responsive interface.

### 🎯 Mission

To provide a seamless, scalable, and secure communication platform that brings communities together through real-time messaging, voice channels, and rich media sharing.

### 💡 Why Vibe Chat?

| Feature | Description |
|---------|-------------|
| 🚀 **Production Ready** | Built with industry-standard technologies and best practices |
| ⚡ **Real-Time** | Powered by Socket.IO and Stream Chat SDK for instant messaging |
| 🔒 **Secure** | JWT authentication, encrypted connections, and secure data storage |
| 📱 **Responsive** | Seamless experience across desktop, tablet, and mobile devices |
| 🎨 **Customizable** | Modular architecture with extensive theming capabilities |
| 📈 **Scalable** | Microservices-ready architecture for horizontal scaling |

---

## ✨ Key Features

### 🔐 **Authentication & Security**
- ✅ Secure user registration and login
- ✅ JWT-based authentication with refresh tokens
- ✅ Password hashing using bcrypt (10 rounds)
- ✅ Protected routes and API endpoints
- ✅ Session management and automatic logout
- ✅ Email verification (coming soon)
- ✅ Two-factor authentication (2FA) (planned)

### 💬 **Real-Time Messaging**
- ✅ Instant message delivery via Socket.IO
- ✅ Stream Chat SDK integration for advanced features
- ✅ Typing indicators and read receipts
- ✅ Online/offline presence detection
- ✅ Message history and persistence
- ✅ Rich text formatting (Markdown support)
- ✅ Link previews and URL unfurling
- ✅ Message editing and deletion
- ✅ Message reactions with emoji support
- ✅ Thread-based conversations (coming soon)

### 🏘️ **Community Management**
- ✅ **Public Communities**: Open channels for everyone
- ✅ **Private Rooms**: Invite-only spaces with unique codes
- ✅ **Trending Communities**: Discover popular chat rooms
- ✅ **Community Search**: Find rooms by name or topic
- ✅ **Custom Community Creation**: Build your own spaces
- ✅ **Role-based Permissions**: Admin, moderator, and member roles
- ✅ **Community Settings**: Customize names, descriptions, and icons
- ✅ **Member Management**: Invite, kick, and ban users

### 📁 **Rich Media Support**
- ✅ Image uploads and sharing
- ✅ File attachments (PDFs, documents)
- ✅ Video and audio message support
- ✅ Drag-and-drop file uploads
- ✅ Image previews and lightbox view
- ✅ File size limits and type validation
- ✅ CDN-powered media delivery

### 🎤 **Voice & Video** (Planned)
- 🔜 Voice channels
- 🔜 Video calling (1-on-1 and group)
- 🔜 Screen sharing
- 🔜 Push-to-talk functionality
- 🔜 Voice activity detection

### 👤 **User Experience**
- ✅ **Customizable Profiles**: Avatar, bio, and status
- ✅ **Dark/Light Mode**: System-based or manual theme switching
- ✅ **Notification System**: Real-time desktop and in-app notifications
- ✅ **User Presence**: Online, away, do not disturb statuses
- ✅ **Search Functionality**: Find messages, users, and communities
- ✅ **Keyboard Shortcuts**: Power user features
- ✅ **Mobile-First Design**: Optimized for all screen sizes
- ✅ **Accessibility**: WCAG 2.1 AA compliant

### 🔔 **Notifications**
- ✅ Real-time push notifications
- ✅ Mention notifications (@username)
- ✅ Direct message alerts
- ✅ Customizable notification preferences
- ✅ Sound notifications (optional)
- ✅ Browser notification API integration

### 🛡️ **Moderation Tools**
- ✅ Message reporting system
- ✅ User blocking and muting
- ✅ Profanity filter (coming soon)
- ✅ Spam detection (coming soon)
- ✅ Audit logs for moderators

---

## 🎥 Live Demo

🌐 **Production URL**: [https://vibe-chat-eta.vercel.app/](https://vibe-chat-eta.vercel.app/)

### 🧪 Demo Credentials

```
📧 Email: demo@vibechat.com
🔑 Password: Demo@123
```

> **Note**: Feel free to create your own account to explore all features!

---

## 🖼️ Screenshots

<div align="center">

### 🔐 Authentication Pages

<img src="./screenshots/login-page.png" alt="Login Page" width="45%" />
<img src="./screenshots/signup-page.png" alt="Signup Page" width="45%" />

*Secure login and registration with form validation*

---

### 🏠 Home Dashboard

<img src="./screenshots/home-dashboard.png" alt="Home Dashboard" width="90%" />

*Clean, intuitive dashboard with community overview*

---

### 💬 Chat Interface

<img src="./screenshots/chat-interface.png" alt="Chat Interface" width="90%" />

*Real-time messaging with rich media support*

---

### 🌍 Explore Communities

<img src="./screenshots/explore-communities.png" alt="Explore Communities" width="90%" />

*Discover and join public communities*

---

### 🔒 Private Rooms

<img src="./screenshots/private-rooms.png" alt="Private Rooms" width="90%" />

*Create and manage invite-only spaces*

---

### 👤 User Profile

<img src="./screenshots/user-profile.png" alt="User Profile" width="90%" />

*Customizable profiles with status and settings*

</div>

---

## 🏗️ Architecture

### System Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                         CLIENT LAYER                             │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │              React SPA (Vite + TypeScript)                │   │
│  │  ┌────────────┐  ┌────────────┐  ┌──────────────────┐   │   │
│  │  │   React    │  │ Socket.IO  │  │  Stream Chat SDK │   │   │
│  │  │  Router    │  │   Client   │  │   (stream-chat-  │   │   │
│  │  │            │  │            │  │      react)      │   │   │
│  │  └────────────┘  └────────────┘  └──────────────────┘   │   │
│  │  ┌────────────┐  ┌────────────┐  ┌──────────────────┐   │   │
│  │  │  Tailwind  │  │   Axios    │  │   Context API    │   │   │
│  │  │    CSS     │  │    HTTP    │  │  State Management│   │   │
│  │  └────────────┘  └────────────┘  └──────────────────┘   │   │
│  └──────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
                              ↓ HTTPS / WSS
┌─────────────────────────────────────────────────────────────────┐
│                      API GATEWAY LAYER                           │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │              Express.js Application Server                │   │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐   │   │
│  │  │     Auth     │  │   Community  │  │   Messages   │   │   │
│  │  │   Routes     │  │    Routes    │  │    Routes    │   │   │
│  │  └──────────────┘  └──────────────┘  └──────────────┘   │   │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐   │   │
│  │  │     User     │  │    Upload    │  │   Webhook    │   │   │
│  │  │   Routes     │  │    Routes    │  │    Routes    │   │   │
│  │  └──────────────┘  └──────────────┘  └──────────────┘   │   │
│  └──────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                    MIDDLEWARE LAYER                              │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────────┐   │
│  │   CORS   │  │   Auth   │  │  Error   │  │   Request    │   │
│  │          │  │   JWT    │  │ Handler  │  │  Validator   │   │
│  └──────────┘  └──────────┘  └──────────┘  └──────────────┘   │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                   BUSINESS LOGIC LAYER                           │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │              Services & Controllers                       │   │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐   │   │
│  │  │   Socket.IO  │  │ Stream Chat  │  │   JWT Auth   │   │   │
│  │  │    Server    │  │ Integration  │  │   Service    │   │   │
│  │  └──────────────┘  └──────────────┘  └──────────────┘   │   │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐   │   │
│  │  │   Upload     │  │ Notification │  │  Validation  │   │   │
│  │  │   Service    │  │   Service    │  │   Service    │   │   │
│  │  └──────────────┘  └──────────────┘  └──────────────┘   │   │
│  └──────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                      DATA ACCESS LAYER                           │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │              Mongoose ODM (Models & Schemas)              │   │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌─────────┐  │   │
│  │  │   User   │  │Community │  │ Message  │  │  Room   │  │   │
│  │  │  Model   │  │  Model   │  │  Model   │  │  Model  │  │   │
│  │  └──────────┘  └──────────┘  └──────────┘  └─────────┘  │   │
│  └──────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                      PERSISTENCE LAYER                           │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │                   MongoDB Atlas                           │   │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌─────────┐  │   │
│  │  │  Users   │  │Communities│ │ Messages │  │ Sessions│  │   │
│  │  │Collection│  │Collection│  │Collection│  │Collection│ │   │
│  │  └──────────┘  └──────────┘  └──────────┘  └─────────┘  │   │
│  └──────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                   EXTERNAL SERVICES                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────────┐  │
│  │  Stream.io   │  │  Cloudinary  │  │  Email Service       │  │
│  │  Chat API    │  │  (Media CDN) │  │  (SendGrid/AWS SES)  │  │
│  └──────────────┘  └──────────────┘  └──────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

### 🔄 Data Flow

1. **Client Request** → User interacts with React UI
2. **HTTP/WebSocket** → Request sent to Express API Gateway
3. **Authentication** → JWT validated via middleware
4. **Business Logic** → Controllers process request
5. **Database Operations** → Mongoose interacts with MongoDB
6. **Real-Time Updates** → Socket.IO broadcasts to connected clients
7. **Response** → Data returned to client and UI updates

---

## 🛠️ Tech Stack

### **Frontend**

| Technology | Version | Purpose | Documentation |
|------------|---------|---------|---------------|
| ![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white) | 18.3.1 | UI Framework | [Docs](https://react.dev/) |
| ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white) | 5.4.5 | Type Safety | [Docs](https://www.typescriptlang.org/) |
| ![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white) | 5.2.0 | Build Tool | [Docs](https://vitejs.dev/) |
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind-06B6D4?logo=tailwindcss&logoColor=white) | 3.4.3 | Styling | [Docs](https://tailwindcss.com/) |
| ![Stream Chat React](https://img.shields.io/badge/Stream_Chat-005FFF?logo=stream&logoColor=white) | 13.14.0 | Chat UI Components | [Docs](https://getstream.io/chat/docs/sdk/react/) |
| ![Socket.IO Client](https://img.shields.io/badge/Socket.IO-010101?logo=socket.io&logoColor=white) | 4.7.5 | Real-Time Communication | [Docs](https://socket.io/docs/v4/client-api/) |
| ![React Router](https://img.shields.io/badge/React_Router-CA4245?logo=react-router&logoColor=white) | 6.23.0 | Routing | [Docs](https://reactrouter.com/) |
| ![Axios](https://img.shields.io/badge/Axios-5A29E4?logo=axios&logoColor=white) | 1.6.8 | HTTP Client | [Docs](https://axios-http.com/) |

### **Backend**

| Technology | Version | Purpose | Documentation |
|------------|---------|---------|---------------|
| ![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white) | 20.12.2 | Runtime | [Docs](https://nodejs.org/) |
| ![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white) | 4.19.2 | Web Framework | [Docs](https://expressjs.com/) |
| ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white) | 7.0 | Database | [Docs](https://www.mongodb.com/docs/) |
| ![Mongoose](https://img.shields.io/badge/Mongoose-880000) | 8.3.4 | ODM | [Docs](https://mongoosejs.com/) |
| ![Socket.IO](https://img.shields.io/badge/Socket.IO-010101?logo=socket.io&logoColor=white) | 4.7.5 | WebSocket Server | [Docs](https://socket.io/docs/v4/server-api/) |
| ![Stream Chat](https://img.shields.io/badge/Stream_Chat-005FFF?logo=stream&logoColor=white) | 8.40.0 | Chat Backend SDK | [Docs](https://getstream.io/chat/docs/node/) |
| ![JWT](https://img.shields.io/badge/JWT-000000?logo=jsonwebtokens&logoColor=white) | 9.0.2 | Authentication | [Docs](https://jwt.io/) |
| ![bcrypt](https://img.shields.io/badge/bcrypt-338833) | 5.1.1 | Password Hashing | [Docs](https://www.npmjs.com/package/bcrypt) |

### **DevOps & Deployment**

| Service | Purpose | Link |
|---------|---------|------|
| ![Vercel](https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white) | Frontend Hosting | [Visit](https://vercel.com/) |
| ![Railway](https://img.shields.io/badge/Railway-0B0D0E?logo=railway&logoColor=white) | Backend Hosting | [Visit](https://railway.app/) |
| ![MongoDB Atlas](https://img.shields.io/badge/MongoDB_Atlas-47A248?logo=mongodb&logoColor=white) | Database Hosting | [Visit](https://www.mongodb.com/cloud/atlas) |
| ![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?logo=cloudinary&logoColor=white) | Media Storage & CDN | [Visit](https://cloudinary.com/) |
| ![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?logo=github-actions&logoColor=white) | CI/CD Pipeline | [Visit](https://github.com/features/actions) |

### **Development Tools**

| Tool | Purpose |
|------|---------|
| ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?logo=eslint&logoColor=white) | Code Linting |
| ![Prettier](https://img.shields.io/badge/Prettier-F7B93E?logo=prettier&logoColor=white) | Code Formatting |
| ![Git](https://img.shields.io/badge/Git-F05032?logo=git&logoColor=white) | Version Control |
| ![Postman](https://img.shields.io/badge/Postman-FF6C37?logo=postman&logoColor=white) | API Testing |
| ![VS Code](https://img.shields.io/badge/VS_Code-007ACC?logo=visual-studio-code&logoColor=white) | Code Editor |

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your system:

```bash
Node.js >= 20.x
npm >= 10.x  (or yarn >= 1.22.x)
MongoDB >= 7.0  (local or Atlas)
Git >= 2.40
```

**Quick Version Check:**
```bash
node --version
npm --version
git --version
mongod --version  # If running locally
```

### Installation

#### 1️⃣ **Clone the Repository**

```bash
git clone https://github.com/yourusername/vibe-chat.git
cd vibe-chat
```

#### 2️⃣ **Install Dependencies**

**Option A: Using npm (recommended)**
```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

**Option B: Using yarn**
```bash
# Backend
cd backend
yarn install

# Frontend
cd ../frontend
yarn install
```

#### 3️⃣ **Set Up Environment Variables**

**Backend `.env` Configuration:**

Create `backend/.env`:

```env
# ====================================
# SERVER CONFIGURATION
# ====================================
NODE_ENV=development
PORT=5000
API_VERSION=v1

# ====================================
# DATABASE CONFIGURATION
# ====================================
# Local MongoDB
MONGODB_URI=mongodb://localhost:27017/vibechat

# OR MongoDB Atlas (Production)
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/vibechat?retryWrites=true&w=majority

# ====================================
# JWT AUTHENTICATION
# ====================================
JWT_SECRET=your_super_secret_jwt_key_minimum_32_characters_long
JWT_EXPIRE=7d
JWT_COOKIE_EXPIRE=7

# ====================================
# STREAM CHAT SDK
# ====================================
STREAM_API_KEY=your_stream_api_key_here
STREAM_API_SECRET=your_stream_api_secret_here
STREAM_APP_ID=your_stream_app_id_here

# ====================================
# CORS & SECURITY
# ====================================
FRONTEND_URL=http://localhost:5173
CORS_ORIGIN=http://localhost:5173

# ====================================
# SOCKET.IO CONFIGURATION
# ====================================
SOCKET_IO_CORS_ORIGIN=http://localhost:5173
SOCKET_IO_PATH=/socket.io

# ====================================
# FILE UPLOAD & MEDIA
# ====================================
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
MAX_FILE_SIZE=10485760  # 10MB in bytes

# ====================================
# EMAIL CONFIGURATION (Optional)
# ====================================
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
EMAIL_FROM=noreply@vibechat.com

# ====================================
# RATE LIMITING
# ====================================
RATE_LIMIT_WINDOW_MS=900000  # 15 minutes
RATE_LIMIT_MAX_REQUESTS=100

# ====================================
# LOGGING
# ====================================
LOG_LEVEL=debug  # error, warn, info, debug
LOG_FORMAT=combined  # combined, common, dev
```

**Frontend `.env` Configuration:**

Create `frontend/.env`:

```env
# ====================================
# API CONFIGURATION
# ====================================
VITE_API_URL=http://localhost:5000/api/v1
VITE_API_BASE_URL=http://localhost:5000

# ====================================
# SOCKET.IO CONFIGURATION
# ====================================
VITE_SOCKET_URL=http://localhost:5000
VITE_SOCKET_PATH=/socket.io

# ====================================
# STREAM CHAT SDK
# ====================================
VITE_STREAM_API_KEY=your_stream_api_key_here

# ====================================
# APPLICATION CONFIGURATION
# ====================================
VITE_APP_NAME=Vibe Chat
VITE_APP_VERSION=1.0.0
VITE_APP_DESCRIPTION=Real-Time Community Chat Platform

# ====================================
# FEATURE FLAGS
# ====================================
VITE_ENABLE_VOICE_CHAT=false
VITE_ENABLE_VIDEO_CHAT=false
VITE_ENABLE_FILE_UPLOAD=true
VITE_ENABLE_NOTIFICATIONS=true

# ====================================
# ANALYTICS (Optional)
# ====================================
VITE_GOOGLE_ANALYTICS_ID=
VITE_MIXPANEL_TOKEN=
```

#### 4️⃣ **Get Stream Chat Credentials**

1. Visit [https://getstream.io/](https://getstream.io/)
2. Sign up for a free account
3. Create a new app in the dashboard
4. Navigate to **Dashboard → Your App → Overview**
5. Copy:
   - **API Key**
   - **API Secret**
   - **App ID**
6. Add these to both `backend/.env` and `frontend/.env`

**Stream Chat Free Tier Limits:**
- ✅ Unlimited users
- ✅ 25,000 monthly active users
- ✅ 5GB file storage
- ✅ Perfect for development and small projects

#### 5️⃣ **Set Up MongoDB**

**Option A: Local MongoDB**
```bash
# Start MongoDB service
mongod --dbpath /path/to/data/directory

# Verify connection
mongo
> show dbs
```

**Option B: MongoDB Atlas (Recommended for Production)**

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Set up database access (create user)
4. Whitelist your IP address (or use 0.0.0.0/0 for development)
5. Get connection string and update `MONGODB_URI` in `backend/.env`

#### 6️⃣ **Run the Application**

**Development Mode:**

Open two terminal windows:

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev

# Or with nodemon for auto-reload
npm run dev:watch
```

Expected output:
```
🚀 Server running on http://localhost:5000
✅ MongoDB connected successfully
⚡ Socket.IO initialized
🎯 Stream Chat SDK initialized
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

Expected output:
```
 VITE v5.2.0  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: http://192.168.1.x:5173/
```

#### 7️⃣ **Access the Application**

🌐 **Frontend**: [http://localhost:5173](http://localhost:5173)  
🔌 **Backend API**: [http://localhost:5000](http://localhost:5000)  
📡 **API Health Check**: [http://localhost:5000/api/v1/health](http://localhost:5000/api/v1/health)

---

## 🔐 Environment Variables

### Backend Environment Variables Explained

| Variable | Description | Required | Default | Example |
|----------|-------------|----------|---------|---------|
| `NODE_ENV` | Application environment | Yes | `development` | `production`, `development`, `test` |
| `PORT` | Server port | Yes | `5000` | `3000`, `8080` |
| `MONGODB_URI` | MongoDB connection string | Yes | - | `mongodb://localhost:27017/vibechat` |
| `JWT_SECRET` | Secret key for JWT signing | Yes | - | Random 32+ char string |
| `JWT_EXPIRE` | JWT expiration time | Yes | `7d` | `1h`, `30d`, `90d` |
| `STREAM_API_KEY` | Stream Chat API key | Yes | - | From Stream dashboard |
| `STREAM_API_SECRET` | Stream Chat API secret | Yes | - | From Stream dashboard |
| `FRONTEND_URL` | Frontend application URL | Yes | - | `http://localhost:5173` |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary account name | No | - | Your Cloudinary name |
| `MAX_FILE_SIZE` | Maximum upload file size | No | `10485760` | In bytes (10MB default) |

### Frontend Environment Variables Explained

| Variable | Description | Required | Example |
|----------|-------------|----------|---------|
| `VITE_API_URL` | Backend API endpoint | Yes | `http://localhost:5000/api/v1` |
| `VITE_SOCKET_URL` | Socket.IO server URL | Yes | `http://localhost:5000` |
| `VITE_STREAM_API_KEY` | Stream Chat public key | Yes | From Stream dashboard |
| `VITE_ENABLE_FILE_UPLOAD` | Toggle file upload feature | No | `true` |
| `VITE_ENABLE_NOTIFICATIONS` | Toggle notifications | No | `true` |

---

## 📡 API Documentation

### Base URL

```
Development: http://localhost:5000/api/v1
Production: https://your-backend.railway.app/api/v1
```

### Authentication Endpoints

#### `POST /auth/register`
Register a new user account.

**Request Body:**
```json
{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "SecurePass123!",
  "confirmPassword": "SecurePass123!"
}
```

**Success Response (201):**
```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "user": {
      "id": "507f1f77bcf86cd799439011",
      "username": "johndoe",
      "email": "john@example.com",
      "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=johndoe",
      "createdAt": "2024-03-03T10:30:00.000Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "streamToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

**Error Response (400):**
```json
{
  "success": false,
  "error": "Email already exists"
}
```

---

#### `POST /auth/login`
Authenticate an existing user.

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "SecurePass123!"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "507f1f77bcf86cd799439011",
      "username": "johndoe",
      "email": "john@example.com",
      "avatar": "https://example.com/avatar.jpg",
      "status": "online"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "streamToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

---

#### `GET /auth/me`
Get current authenticated user profile.

**Headers:**
```
Authorization: Bearer {token}
```

**Success Response (200):**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "507f1f77bcf86cd799439011",
      "username": "johndoe",
      "email": "john@example.com",
      "bio": "Chat enthusiast",
      "avatar": "https://example.com/avatar.jpg",
      "status": "online",
      "lastSeen": "2024-03-03T10:35:00.000Z"
    }
  }
}
```

---

### Community Endpoints

#### `GET /communities`
Get all public communities with pagination.

**Query Parameters:**
```
page: number (default: 1)
limit: number (default: 20)
search: string (optional)
sort: string (default: -createdAt) // -members, -activity
```

**Example Request:**
```bash
GET /api/v1/communities?page=1&limit=10&search=tech&sort=-members
```

**Success Response (200):**
```json
{
  "success": true,
  "data": {
    "communities": [
      {
        "id": "community_id_1",
        "name": "Tech Enthusiasts",
        "description": "Discuss latest tech trends",
        "avatar": "https://example.com/community-avatar.jpg",
        "memberCount": 1543,
        "isPublic": true,
        "category": "Technology",
        "owner": {
          "id": "user_id",
          "username": "admin"
        },
        "createdAt": "2024-01-15T08:00:00.000Z"
      }
    ],
    "pagination": {
      "currentPage": 1,
      "totalPages": 5,
      "totalCommunities": 47,
      "hasMore": true
    }
  }
}
```

---

#### `POST /communities`
Create a new community.

**Headers:**
```
Authorization: Bearer {token}
Content-Type: application/json
```

**Request Body:**
```json
{
  "name": "Web Developers",
  "description": "A community for web developers",
  "isPublic": true,
  "category": "Programming",
  "avatar": "https://example.com/avatar.jpg" // optional
}
```

**Success Response (201):**
```json
{
  "success": true,
  "message": "Community created successfully",
  "data": {
    "community": {
      "id": "new_community_id",
      "name": "Web Developers",
      "description": "A community for web developers",
      "isPublic": true,
      "inviteCode": null,
      "streamChannelId": "messaging:web-developers-xyz",
      "owner": "user_id",
      "members": ["user_id"],
      "memberCount": 1,
      "createdAt": "2024-03-03T10:40:00.000Z"
    }
  }
}
```

---

#### `POST /communities/:id/join`
Join a community.

**Headers:**
```
Authorization: Bearer {token}
```

**Request Body (for private communities):**
```json
{
  "inviteCode": "TECH2024" // required for private communities
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Successfully joined community",
  "data": {
    "community": {
      "id": "community_id",
      "name": "Tech Enthusiasts",
      "memberCount": 1544
    }
  }
}
```

---

### Message Endpoints

#### `GET /messages/:channelId`
Get messages for a specific channel.

**Headers:**
```
Authorization: Bearer {token}
```

**Query Parameters:**
```
page: number (default: 1)
limit: number (default: 50)
before: ISO8601 date (optional) // Get messages before this date
```

**Success Response (200):**
```json
{
  "success": true,
  "data": {
    "messages": [
      {
        "id": "msg_id_1",
        "text": "Hello everyone!",
        "user": {
          "id": "user_id",
          "username": "johndoe",
          "avatar": "https://example.com/avatar.jpg"
        },
        "attachments": [],
        "reactions": {
          "👍": ["user_id_2", "user_id_3"],
          "❤️": ["user_id_4"]
        },
        "createdAt": "2024-03-03T10:30:00.000Z",
        "updatedAt": "2024-03-03T10:30:00.000Z"
      }
    ],
    "pagination": {
      "hasMore": true,
      "nextCursor": "2024-03-03T10:29:00.000Z"
    }
  }
}
```

---

### User Endpoints

#### `PUT /users/profile`
Update user profile.

**Headers:**
```
Authorization: Bearer {token}
Content-Type: application/json
```

**Request Body:**
```json
{
  "username": "newusername",
  "bio": "Updated bio",
  "avatar": "https://example.com/new-avatar.jpg",
  "status": "online" // online, away, dnd, offline
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Profile updated successfully",
  "data": {
    "user": {
      "id": "user_id",
      "username": "newusername",
      "email": "john@example.com",
      "bio": "Updated bio",
      "avatar": "https://example.com/new-avatar.jpg",
      "status": "online"
    }
  }
}
```

---

### File Upload Endpoints

#### `POST /upload/image`
Upload an image file.

**Headers:**
```
Authorization: Bearer {token}
Content-Type: multipart/form-data
```

**Request Body (Form Data):**
```
image: File (jpg, png, gif, webp)
```

**Success Response (200):**
```json
{
  "success": true,
  "data": {
    "url": "https://res.cloudinary.com/xxx/image/upload/v123/file.jpg",
    "publicId": "vibechat/uploads/xyz123",
    "format": "jpg",
    "width": 1920,
    "height": 1080,
    "size": 245632
  }
}
```

---

## 🎨 Features Deep Dive

### Stream Chat SDK Integration

Vibe Chat leverages **Stream Chat React SDK** for advanced messaging features:

```typescript
// Example: Initialize Stream Chat Client
import { StreamChat } from 'stream-chat';

const client = StreamChat.getInstance(STREAM_API_KEY);

await client.connectUser(
  {
    id: user.id,
    name: user.username,
    image: user.avatar,
  },
  userToken
);
```

**Key Features Provided by Stream:**
- ✅ Real-time message synchronization
- ✅ Typing indicators
- ✅ Read receipts
- ✅ Message reactions
- ✅ File attachments
- ✅ User presence
- ✅ Offline support
- ✅ Push notifications
- ✅ Message moderation

---

### Real-Time Communication (Socket.IO)

```javascript
// Server-side (backend/socket/index.js)
io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`);
  
  socket.on('join-room', (roomId) => {
    socket.join(roomId);
    io.to(roomId).emit('user-joined', socket.userId);
  });
  
  socket.on('send-message', (data) => {
    io.to(data.roomId).emit('receive-message', data);
  });
});

// Client-side (frontend/src/socket.ts)
import { io } from 'socket.io-client';

const socket = io(SOCKET_URL, {
  auth: { token: userToken }
});

socket.on('receive-message', (message) => {
  // Update UI with new message
});
```

---

### Authentication Flow

```mermaid
sequenceDiagram
    participant User
    participant Frontend
    participant Backend
    participant MongoDB
    participant Stream

    User->>Frontend: Enter credentials
    Frontend->>Backend: POST /api/v1/auth/login
    Backend->>MongoDB: Query user
    MongoDB-->>Backend: User data
    Backend->>Backend: Validate password (bcrypt)
    Backend->>Backend: Generate JWT token
    Backend->>Stream: Generate Stream token
    Stream-->>Backend: Stream user token
    Backend-->>Frontend: JWT + Stream token + user data
    Frontend->>Frontend: Store in localStorage
    Frontend->>Stream: Connect to Stream Chat
    Frontend-->>User: Redirect to dashboard
```

---

## 🚢 Deployment

### Frontend Deployment (Vercel)

1. **Push Code to GitHub**
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

2. **Deploy on Vercel**
- Visit [vercel.com](https://vercel.com)
- Click "New Project"
- Import your GitHub repository
- Select `frontend` folder as root directory
- Configure environment variables:

```env
VITE_API_URL=https://your-backend.railway.app/api/v1
VITE_SOCKET_URL=https://your-backend.railway.app
VITE_STREAM_API_KEY=your_stream_key
```

3. **Deploy**
- Click "Deploy"
- Wait for build to complete
- Your app will be live at `https://your-app.vercel.app`

**Vercel Configuration File** (`vercel.json`):
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

---

### Backend Deployment (Railway)

1. **Create Railway Account**
- Visit [railway.app](https://railway.app)
- Sign up with GitHub

2. **Deploy Backend**
- Click "New Project"
- Select "Deploy from GitHub repo"
- Choose your repository
- Set root directory to `backend`

3. **Add Environment Variables**

Navigate to **Variables** tab and add:
```env
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb+srv://...
JWT_SECRET=your_production_secret
STREAM_API_KEY=...
STREAM_API_SECRET=...
FRONTEND_URL=https://your-app.vercel.app
CORS_ORIGIN=https://your-app.vercel.app
```

4. **Deploy**
- Railway will automatically build and deploy
- Get your deployment URL: `https://your-app.railway.app`

**Railway Configuration** (`railway.toml`):
```toml
[build]
builder = "NIXPACKS"

[deploy]
startCommand = "npm start"
healthcheckPath = "/api/v1/health"
healthcheckTimeout = 100
restartPolicyType = "ON_FAILURE"
restartPolicyMaxRetries = 10
```

---

### Database Setup (MongoDB Atlas)

1. **Create Cluster**
- Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- Create free M0 cluster
- Choose region closest to your backend

2. **Configure Access**
- Database Access: Create database user
- Network Access: Add `0.0.0.0/0` (or specific IPs)

3. **Get Connection String**
- Click "Connect" → "Connect your application"
- Copy connection string
- Replace `<password>` and `<dbname>`
- Add to backend environment variables

---

### CI/CD with GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  deploy-frontend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          working-directory: ./frontend

  deploy-backend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy to Railway
        uses: bervProject/railway-deploy@main
        with:
          railway_token: ${{ secrets.RAILWAY_TOKEN }}
          service: backend
```

---

## 🧪 Testing

### Running Tests

```bash
# Backend tests
cd backend
npm test

# Frontend tests
cd frontend
npm test

# E2E tests
npm run test:e2e

# Coverage report
npm run test:coverage
```

### Test Structure

```
backend/
├── __tests__/
│   ├── unit/
│   │   ├── models/
│   │   ├── controllers/
│   │   └── services/
│   ├── integration/
│   │   ├── auth.test.js
│   │   ├── community.test.js
│   │   └── message.test.js
│   └── e2e/
│       └── chat-flow.test.js

frontend/
├── __tests__/
│   ├── components/
│   ├── hooks/
│   ├── pages/
│   └── utils/
```

---

## 🗺️ Roadmap

### ✅ Phase 1: Core Features (Completed)
- [x] User authentication (JWT)
- [x] Real-time messaging (Socket.IO + Stream)
- [x] Public communities
- [x] Private rooms with invite codes
- [x] File uploads (images)
- [x] Dark mode
- [x] Responsive design
- [x] User profiles
- [x] Message reactions

### 🚧 Phase 2: Enhanced Features (In Progress)
- [ ] Voice channels
- [ ] Video calling (1-on-1)
- [ ] Screen sharing
- [ ] Advanced user roles (Admin, Moderator, Member)
- [ ] Community moderation tools
- [ ] Message search
- [ ] Thread conversations
- [ ] User mentions (@username)
- [ ] Rich text editor

### 📅 Phase 3: Advanced Features (Planned Q2 2024)
- [ ] End-to-end encryption
- [ ] Mobile application (React Native)
- [ ] Email notifications
- [ ] Push notifications (PWA)
- [ ] Bot integration (webhooks)
- [ ] Custom emojis
- [ ] Message translation
- [ ] Analytics dashboard
- [ ] Community insights

### 🔮 Phase 4: Enterprise Features (Future)
- [ ] SSO integration (Google, GitHub, Microsoft)
- [ ] API rate limiting by tier
- [ ] Webhooks API
- [ ] Audit logs
- [ ] Data export
- [ ] White-label solution
- [ ] On-premise deployment option
- [ ] Advanced security features
- [ ] Compliance certifications (GDPR, SOC 2)

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Ways to Contribute

- 🐛 **Report Bugs**: Open an issue with details
- 💡 **Suggest Features**: Share your ideas
- 📖 **Improve Documentation**: Help others understand
- 💻 **Submit Pull Requests**: Fix bugs or add features
- 🧪 **Write Tests**: Improve code coverage
- 🎨 **Design Improvements**: UI/UX enhancements

### Contribution Guidelines

1. **Fork the Repository**
```bash
git clone https://github.com/yourusername/vibe-chat.git
cd vibe-chat
```

2. **Create a Feature Branch**
```bash
git checkout -b feature/amazing-feature
```

3. **Make Your Changes**
- Follow existing code style
- Add tests for new features
- Update documentation

4. **Commit Your Changes**
```bash
git add .
git commit -m "feat: add amazing feature

- Added XYZ functionality
- Updated documentation
- Added unit tests"
```

**Commit Message Format:**
```
type(scope): subject

body (optional)

footer (optional)
```

**Types**: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

5. **Push to Your Fork**
```bash
git push origin feature/amazing-feature
```

6. **Open a Pull Request**
- Use the PR template
- Link related issues
- Request review from maintainers

### Code Style Guidelines

**JavaScript/TypeScript:**
- Use ESLint and Prettier configurations
- Follow Airbnb style guide
- Use meaningful variable names
- Add JSDoc comments for functions

**React Components:**
- Use functional components with hooks
- Keep components small and focused
- Use TypeScript for type safety
- Follow component naming conventions

**Git Workflow:**
- One feature per branch
- Rebase before merging
- Squash commits when appropriate
- Write descriptive commit messages

### Development Setup

```bash
# Install dependencies
npm install

# Run linter
npm run lint

# Format code
npm run format

# Run tests
npm test

# Check types
npm run type-check
```

### Pull Request Checklist

- [ ] Code follows project style guidelines
- [ ] Tests pass locally (`npm test`)
- [ ] New features include tests
- [ ] Documentation updated
- [ ] No console errors or warnings
- [ ] PR description is clear
- [ ] Related issues linked

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024 Vibe Chat - Shaik Azeem

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 👥 Team

### Project Lead & Developer

<div align="center">

<img src="https://avatars.githubusercontent.com/u/yourusername?v=4" alt="Shaik Azeem" width="120" style="border-radius: 50%"/>

**Shaik Azeem**

Full-Stack Developer

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/shaikazeem2001)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/yourprofile)
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/yourhandle)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:shaikazeem2001@gmail.com)

</div>

### Contributors

We thank all contributors who have helped make Vibe Chat better!

<a href="https://github.com/yourusername/vibe-chat/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=yourusername/vibe-chat" />
</a>

*Want to be listed here? Check out our [Contributing Guidelines](#-contributing)!*

---

## 🙏 Acknowledgments

### Technologies & Services

- **[Stream.io](https://getstream.io/)** - Powerful chat infrastructure and SDK
- **[Socket.IO](https://socket.io/)** - Real-time bidirectional communication
- **[MongoDB](https://www.mongodb.com/)** - Flexible NoSQL database
- **[Vercel](https://vercel.com/)** - Seamless frontend deployment
- **[Railway](https://railway.app/)** - Hassle-free backend hosting
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[React](https://react.dev/)** - Powerful UI library
- **[Node.js](https://nodejs.org/)** - JavaScript runtime

### Inspiration

- **Discord** - For the amazing community chat experience
- **Slack** - For professional team communication features
- **Telegram** - For clean and intuitive messaging UX

### Community

- **Stack Overflow** - For countless solutions and guidance
- **GitHub Community** - For open-source collaboration
- **Stream Community** - For chat SDK support and resources

---

## 📞 Support

### Get Help

- 📖 **Documentation**: [Read the Docs](https://github.com/yourusername/vibe-chat/wiki)
- 💬 **Discord Community**: [Join Our Server](https://discord.gg/yourinvite)
- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/yourusername/vibe-chat/issues)
- 💡 **Feature Requests**: [GitHub Discussions](https://github.com/yourusername/vibe-chat/discussions)
- 📧 **Email Support**: [shaikazeem2001@gmail.com](mailto:shaikazeem2001@gmail.com)

### Frequently Asked Questions

**Q: Is Vibe Chat free to use?**  
A: Yes! Vibe Chat is open-source and free under the MIT license.

**Q: Can I use this for commercial projects?**  
A: Yes, the MIT license allows commercial use.

**Q: How do I report a security vulnerability?**  
A: Please email security@vibechat.com with details.

**Q: Is there a hosted version available?**  
A: Currently, we provide the source code for self-hosting. SaaS version coming soon!

**Q: What's the difference between Socket.IO and Stream Chat?**  
A: Socket.IO handles real-time connection layer, while Stream provides advanced chat features like reactions, threads, and moderation.

---

## 📊 Project Stats

![GitHub Stars](https://img.shields.io/github/stars/yourusername/vibe-chat?style=social)
![GitHub Forks](https://img.shields.io/github/forks/yourusername/vibe-chat?style=social)
![GitHub Issues](https://img.shields.io/github/issues/yourusername/vibe-chat)
![GitHub Pull Requests](https://img.shields.io/github/issues-pr/yourusername/vibe-chat)
![GitHub License](https://img.shields.io/github/license/yourusername/vibe-chat)
![GitHub Last Commit](https://img.shields.io/github/last-commit/yourusername/vibe-chat)

---

<div align="center">

### ⭐ Star this repository if you find it helpful!

**Made with ❤️ by [Shaik Azeem](https://github.com/shaikazeem2001)**

*Empowering communities through seamless communication*

---

[🏠 Homepage](https://vibe-chat-eta.vercel.app/) • 
[📖 Documentation](https://github.com/yourusername/vibe-chat/wiki) • 
[🐛 Report Bug](https://github.com/yourusername/vibe-chat/issues) • 
[✨ Request Feature](https://github.com/yourusername/vibe-chat/discussions)

---

**© 2024 Vibe Chat. All rights reserved.**

</div>
