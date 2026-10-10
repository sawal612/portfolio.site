# Sawal Pushkarna - Developer Portfolio

A modern, highly interactive web portfolio built to showcase full-stack development skills and creative frontend animations. This project emphasizes performance, dynamic 3D elements, and smooth scroll-linked transitions.

## 🚀 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (React 19)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **3D Graphics**: [Three.js](https://threejs.org/) & [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)
- **Animations**: [GSAP](https://gsap.com/) (GreenSock Animation Platform) & [Framer Motion](https://www.framer.com/motion/)
- **Smooth Scrolling**: [Lenis](https://lenis.studiofreight.com/)

---

## 🎨 Animations & Transitions Deep-Dive

This portfolio heavily relies on complex animation orchestrations to create a premium, immersive user experience.

### GSAP (GreenSock Animation Platform)
GSAP is the primary engine driving the timeline-based and scroll-triggered animations across the application.

- **Preloader Sequence**: A seamless introduction that animates a loading counter from 0 to 100%. Once complete, GSAP smoothly slides the text up and translates the entire preloader container off-screen using `power4.inOut` easing, revealing the hero section underneath.
- **Hero Section Choreography**: Uses `gsap.timeline()` to synchronize the entry of multiple elements perfectly.
  - **3D Text Reveal**: The main heading utilizes a custom `SplitText` utility, breaking the title into individual characters. GSAP animates these characters with staggered 3D rotations (`rotateX: -90`), translating them along the Y-axis into place.
  - **Bouncy Elements**: The hero image scales up with a dramatic `back.out(1.5)` ease, adding a playful, spring-like feel to the composition.
- **ScrollTrigger**: Global scroll animations are managed via GSAP's `ScrollTrigger` plugin (registered globally via a custom `useGSAPPlugin` hook), allowing elements to animate in naturally as they enter the viewport.

### Three.js & React Three Fiber
WebGL is used to add depth and an interactive background layer without overwhelming the DOM.

- **The Hero Scene**: The Hero section features a custom `<HeroScene />` powered by `@react-three/fiber`.
- **Animated 3D Blob**: Implemented an `icosahedronGeometry` rendered as a wireframe using `meshStandardMaterial`. 
- **Continuous Motion**: Using `useFrame`, the blob's rotation and Y-position are updated on every render frame based on the clock's elapsed time. This creates a mesmerizing, slowly rotating, and floating mathematical shape that serves as an ambient backdrop.
- **Lighting**: The scene is illuminated by ambient and point lights, catching the wireframe's emissive purple (`#8b5cf6`) color to match the site's accent theme.

### Lenis Smooth Scrolling
To ensure that GSAP's `ScrollTrigger` animations feel buttery smooth, **Lenis** is implemented. It hijacks the native scroll to provide a momentum-based, fluid scrolling experience, which is crucial for premium parallax and scroll-linked effects.

## 📦 Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
