// src/app/page.tsx
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";
import Head from "next/head";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <Head>
        <title>Samio — Full-Stack Developer | Problem Solver</title>
        <meta
          name="description"
          content="Samio — Full-Stack Developer, final-year CS student at AIUB. Building modern full-stack apps with Next.js, NestJS, PostgreSQL, MongoDB and elegant UI."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <Contact />
    </main>
  );
}
