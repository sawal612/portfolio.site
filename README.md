# Premium Portfolio - Sawal Pushkarna

An award-site-quality developer portfolio built with Next.js, GSAP, Tailwind CSS, and Three.js. 

## Features
- **Immersive 3D Hero**: React Three Fiber driven hero scene.
- **GSAP Scroll Animations**: ScrollTrigger for pinned sections, horizontal scroll, and scrub-linked animations.
- **Premium Design**: Dark theme, noise overlay, magnetic buttons, and glassmorphism UI.
- **Smooth Scrolling**: Integrated with Lenis.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser.

## How to Edit Content

All the data (projects, skills, achievements, personal info) is centralized in a single file to make it extremely easy to update.
- Navigate to `src/data/content.ts`
- Modify the JSON-like object to update your name, role, projects, etc.
- To update images, add them to your `public/` folder and reference them by their absolute path (e.g., `/my-project.jpg`).

## How to Deploy on Vercel

1. Push your code to a GitHub repository.
2. Go to [Vercel](https://vercel.com/) and log in with GitHub.
3. Click **Add New** > **Project** and import your repository.
4. Leave all settings as default (Framework Preset: Next.js).
5. Click **Deploy**. Vercel will automatically build and host your site.

## Technologies Used
- Next.js (App Router)
- Tailwind CSS v4
- GSAP & ScrollTrigger
- Three.js (@react-three/fiber, @react-three/drei)
- Framer Motion
- Lenis (Smooth Scroll)
- React Icons
