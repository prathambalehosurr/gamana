# 🍅 Gamana Timer App

A beautiful, feature-rich Pomodoro timer application built with React and TypeScript. Stay focused, track your productivity, and achieve your daily goals — all wrapped in a clean, distraction-free interface.

![License](https://img.shields.io/badge/license-MIT-green)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-Build-646CFF?logo=vite&logoColor=white)

---

## 🌐 Live Demo

🔗 **[Gamana](https://gamana-iota.vercel.app/)**

---


## ✨ Features

### ⏱️ Timer & Focus
- **Customizable Pomodoro Timer** — Adjust focus and break durations (1–60 min)
- **Focus Mode** — Press `F` to hide distractions and lock in
- **Smart Time Snapping** — Timer adjusts in clean intervals (1, 5, 10, 15...)
- **Timer Presets** — Classic (25/5), Deep Work (50/10), Quick Tasks (15/3)

### 📊 Productivity Tracking
- **Streak Counter** 🔥 — Track your daily consistency
- **Weekly Charts** — Visualize your last 7 days of progress
- **Session Statistics** — Total pomodoros, focus time, completed tasks
- **Daily Goals** — Set and track daily session targets

### ✅ Task Management
- **Task List** — Create, edit, and complete tasks
- **Color Coding** — Categorize tasks visually
- **Preset Quick Add** — One-click task creation (Coding, Study, Gaming, etc.)
- **Task Progress** — Track pomodoros per task

### 🎨 Customization
- **5 Theme Colors** — Red, Orange, Green, Blue, Purple
- **Browser Notifications** — Get notified when sessions complete
- **Sound Alerts** — Customizable alarm and ambient sounds
- **Motivational Quotes** — Random quotes refresh on reset

### 🔐 Authentication
- **Supabase Auth** — Secure email/password authentication
- **User Profiles** — Personalized experience with your name

---

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `Space` | Start/Pause timer |
| `R` | Reset timer |
| `F` | Toggle Focus Mode |
| `←` / `→` | Cycle through modes |
| `↑` / `↓` | Adjust timer ±5 min |

---

## 🛠 Tech Stack

| Category | Technology |
|---|---|
| Frontend | React 18, TypeScript, Vite |
| Styling | CSS-in-JS (inline styles) |
| Animation | Framer Motion |
| Icons | Lucide React |
| Auth & Database | Supabase |
| Deployment | Vercel |

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) 18+
- npm or yarn
- A [Supabase](https://supabase.com/) account (for auth)

### Installation

```bash
# Clone the repository
https://github.com/prathambalehosurr/gamana
cd gamana

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your Supabase credentials

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`.


## 📦 Build & Deploy

```bash
# Production build
npm run build

# Preview production build
npm run preview
```

The build output will be in the `dist/` folder, ready to deploy on Vercel, Netlify, or any static host.

---

## 📁 Project Structure
pomodoro-app/

├── src/

│   ├── components/     # UI components

│   ├── hooks/          # Custom React hooks

│   ├── lib/            # Supabase client & utilities

│   ├── types/          # TypeScript type definitions

│   ├── App.tsx

│   └── main.tsx

├── public/

├── .env.example

└── package.json
---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** — feel free to use it for personal or commercial purposes.

---

<div align="center">

Made with ❤️ by **[Pratham Balehosur](https://github.com/prathambalehosurr)**

⭐ If you found this project helpful, consider giving it a star!

</div>
