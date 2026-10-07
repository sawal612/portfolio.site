import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import ReactLenis from 'lenis/react';

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "Sawal Pushkarna | Full-Stack Developer",
  description: "Portfolio of Sawal Pushkarna, Web Developer specializing in MERN and Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-background text-foreground`}>
        <div className="noise-overlay" />
        <ReactLenis root>
          {children}
        </ReactLenis>
      </body>
    </html>
  );
}
