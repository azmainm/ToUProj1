# Am I Sustainable? 🎄🌱

A beautiful, interactive Christmas-themed sustainability quiz application built with Next.js and React. Help users discover their holiday sustainability impact through an engaging, educational experience.

![Next.js](https://img.shields.io/badge/Next.js-16.0.5-black)
![React](https://img.shields.io/badge/React-19.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8)

## ✨ Features

- **Interactive Quiz**: 10 carefully crafted questions about sustainable holiday practices
- **Card Flip Animation**: Smooth 3D card flips reveal feedback after each answer
- **Progress Tracking**: Visual progress bar showing quiz completion
- **Real-time Feedback**: Toast notifications and detailed explanations for each choice
- **Sustainability Score**: Comprehensive results page with personalized recommendations
- **Christmas Theme**: Beautiful festive design with:
  - Animated snowfall effect
  - Christmas red and green color palette
  - Gradient logo with sparkle animations
  - Festive iconography throughout

## 🚀 Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
cd touproj1
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
touproj1/
├── app/
│   ├── page.tsx           # Landing page
│   ├── test/
│   │   └── page.tsx       # Quiz page
│   ├── layout.tsx         # Root layout with navbar and toaster
│   └── globals.css        # Global styles and animations
├── components/
│   ├── navbar.tsx         # Navigation component
│   ├── snowfall.tsx       # Christmas snowfall effect
│   └── ui/                # shadcn/ui components
├── lib/
│   ├── quiz-data.ts       # Quiz questions and answers
│   └── utils.ts           # Utility functions
└── public/                # Static assets
```

## 🎨 Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Icons**: Lucide React
- **Notifications**: Sonner
- **Fonts**: Geist Sans & Geist Mono

## 🌟 Key Components

### Landing Page
- Hero section with gradient animated title
- About section explaining the sustainability guide
- Call-to-action section
- Footer with team credits

### Quiz Page
- 10 sustainability questions with 3 options each
- Card flip animation revealing impact feedback
- Progress bar tracking completion
- Results page with detailed sustainability score
- Low/Medium/High impact categorization

## 🎯 Quiz Topics

1. Gift wrapping choices
2. Christmas tree selection
3. Holiday lighting
4. Food shopping habits
5. Leftover management
6. Gift giving practices
7. Holiday travel
8. Christmas cards
9. Decorations
10. Post-holiday cleanup

## 👥 Team

Created by the ToU MsC SIT Group:
- Hristina Bojkova
- Robin Rabea Wirth
- Azmain Morshed
- Lins Karnes
- Kevin Jimenez Vergara

## 📝 License

© 2025 ToU MsC SIT Group

## 🔧 Development

### Build for Production

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## 🎄 Christmas Theme Details

The app features a carefully crafted Christmas color palette:
- **Background**: Soft off-white (#FAFAFA) for comfortable viewing
- **Primary**: Festive red for CTAs and important elements
- **Secondary**: Traditional Christmas green for accents
- **Animations**: Snowfall, gradient text, bounce effects

## 🌱 Sustainability Focus

This app educates users about:
- Eco-friendly gift wrapping
- Sustainable tree choices
- Energy-efficient lighting
- Local and seasonal food shopping
- Food waste reduction
- Thoughtful gift giving
- Low-carbon transportation
- Digital communication
- Reusable decorations
- Proper recycling and composting

---

Made with ❤️ and 🌍 for a sustainable holiday season
