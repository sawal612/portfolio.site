export const portfolioData = {
  personal: {
    name: "Sawal Pushkarna", // Using user's name based on directory / email if known, but I'll use placeholders as requested or the name from path.
    role: "Web Developer (Full-Stack, MERN + Next.js)",
    education: "B.Tech in Computer Science & Engineering, Guru Nanak Dev University",
    email: "sawalsharma63@gmail.com",
    github: "https://github.com/sawal612", // using handle from projects
    linkedin: "https://www.linkedin.com/in/sawal-pushkarna-81ab40368/",
    resume: "/resume.pdf"
  },
  skills: [
    { name: "Next.js", category: "Frontend" },
    { name: "React.js", category: "Frontend" },
    { name: "HTML5", category: "Frontend" },
    { name: "CSS3", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "GSAP", category: "Animation" },
    { name: "Framer Motion", category: "Animation" },
    { name: "Node.js", category: "Backend" },
    { name: "Express.js", category: "Backend" },
    { name: "JavaScript", category: "Languages" },
    { name: "C++", category: "Languages" },
    { name: "Git", category: "Tools" },
    { name: "GitHub", category: "Tools" }
  ],
  achievements: [
    {
      title: "Google Developer Group (GDG) Hackathon",
      position: "Winner",
      highlight: true
    },
    {
      title: "PEC Hacks, Panimalar Engineering College",
      position: "Top 10"
    },
    {
      title: "HackOWASP, Thapar Institute of Engineering & Technology",
      position: "Finalist"
    }
  ],
  projects: [
    {
      id: "01",
      title: "ConversoFella",
      description: "A real-time communication platform allowing users to connect instantly. Built with MERN stack and Socket.io for live updates and minimal latency.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Tailwind"],
      live: "https://conversofella.vercel.app",
      github: "https://github.com/sawal612/conversofella",
      image: "/conversoFella.jpeg"
    },
    {
      id: "02",
      title: "MERN Chat App",
      description: "A full-featured chat application supporting group chats, read receipts, and real-time notifications.",
      tech: ["React", "Node.js", "MongoDB", "Chakra UI"],
      live: "https://mern-chat-app-sawal612.vercel.app",
      github: "https://github.com/sawal612/mern-chat-app",
      image: "/mern-chat-app.jpeg"
    },
    {
      id: "03",
      title: "Zoreva",
      description: "A comprehensive e-commerce solution offering seamless checkout, user authentication, and an admin dashboard.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
      live: "https://zoreva.co.in",
      github: "https://github.com/sawal612/zoreva",
      image: "/zoreva.jpeg"
    }
  ],
  moreProjects: [
    {
      title: "Attendance Management Site",
      description: "A robust portal for tracking student attendance, generating reports, and managing class schedules.",
      tech: ["Next.js", "Supabase", "Tailwind CSS"]
    }
  ]
};
