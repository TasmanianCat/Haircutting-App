# BarberPro - Premium Barbershop Landing Page

![Status](https://img.shields.io/badge/Status-Live-success)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue)
![Vite](https://img.shields.io/badge/Vite-5.4.2-purple)

A modern, fully responsive, and highly animated landing page for a premium barbershop studio. Built with **React** and **TypeScript**, this project focuses on exceptional user experience, smooth scroll animations, and a clean, professional UI.

🔗 **Live Demo:** [barberpro.ssergey-tlt.workers.dev](https://barberpro.ssergey-tlt.workers.dev/)

---

## Features

### User Experience (UX)

- **Fully Responsive Design:** Mobile-first approach ensuring a flawless experience on all devices, from smartphones to ultra-wide monitors.
- **Smooth Scroll Navigation:** Fixed header with smooth scrolling to sections, complete with a dynamic offset to prevent content overlapping.
- **Interactive Media Gallery:** A clean, uniform image grid featuring a full-screen Lightbox for detailed portfolio viewing.
- **Dynamic Open/Closed Status:** Real-time indicator that automatically updates based on the shop's current operating hours.
- **Interactive Map:** Seamless integration with OpenStreetMap for easy location tracking and directions.

### Visual & Animation

- **Cinematic Hero Section:** Full-screen looping video background with a high-quality image fallback and a premium dark overlay.
- **Scroll-Triggered Animations:** Elegant entrance animations using Framer Motion, triggered as the user scrolls down the page.
- **Fluid Typography & Spacing:** Modern CSS `clamp()` functions for perfectly scaling text and padding across all screen sizes.

---

## 🛠️ Tech Stack

- **Core:** React 18, TypeScript
- **Build Tool:** Vite
- **Styling:** SCSS (CSS Modules), Fluid Typography
- **Animation:** Framer Motion
- **Icons:** React Icons (Feather Icons)
- **Lightbox:** Yet Another React Lightbox
- **Deployment:** Cloudflare Pages

---

## 📁 Project Structure

```text
src/
├── assets/          # Static assets (images, videos, fonts)
├── components/      # Reusable UI components
│   ├── layout/      # Header, Footer, MobileMenu
│   └── sections/    # Hero, About, Services, Gallery, Contacts
├── hooks/           # Custom React hooks
├── pages/           # Page-level components (Home, etc.)
├── styles/          # Global SCSS, variables, and mixins
└── types/           # TypeScript interfaces and types
```

## 🚀 Getting Started

### Prerequisites
Make sure you have the following installed on your local machine:
* Node.js (v18 or higher recommended)
* npm or yarn

### Installation
1.Clone the repository:
```
git clone https://github.com/TasmanianCat/Haircutting-App.git
```

2. Navigate into the project directory:

```
cd haircutting-app
```

3. Install the dependencies:

```
npm install
```

### Development
To start the local development server with Hot Module Replacement (HMR):
```
npm run dev
```
Open your browser and visit http://localhost:5173/.

### Production Build
To compile and minify the project for production:
```
npm run build
```

To preview the production build locally before deploying:
```
npm run preview
```

### This project is deployed on Cloudflare Pages.

🔗 **Live Demo:** [barberpro.ssergey-tlt.workers.dev](https://barberpro.ssergey-tlt.workers.dev/)
