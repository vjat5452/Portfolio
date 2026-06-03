"use client";

import FadeIn from "./FadeIn";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Sparrow Interactive Website",
    tag: "Flagship Web Platform",
    year: "2026",
    description:
      "20+ page corporate site on Next.js 16 + React 19, with GSAP, Framer Motion, R3F, Lenis smooth-scroll, custom responsive grid, lazy-loaded media, and a Nodemailer-backed contact pipeline.",
    stack: ["Next.js 16", "React 19", "GSAP", "Three.js", "Tailwind"],
    featured: true,
  },
  {
    title: "Sparrowi AI Experience Centre",
    tag: "Multi-Service AI Kiosk",
    year: "2026",
    description:
      "Kiosk platform with face recognition (InsightFace + SQLite vector search), tool-calling LLM brain (Ollama qwen2.5:14b), real-time emotion/pose analytics, and auto-generated visit reports. 6 microservices over FastAPI + Next.js 14.",
    stack: ["FastAPI", "Ollama", "MediaPipe", "DeepFace", "WebSockets"],
    featured: true,
  },
  {
    title: "Sparrow RAG Chatbot + Admin",
    tag: "Conversational AI",
    year: "2026",
    description:
      "Full RAG pipeline — Claude API, Qdrant vectors, semantic chunking, reranker, PDF parsing, live web-scrape ingestion, lead capture, session mgmt, SQL analytics, and a React control plane.",
    stack: ["Python", "Claude API", "Qdrant", "React", "SQL"],
  },
  {
    title: "RealDocs",
    tag: "Real-Time Collab Editor",
    year: "2024",
    description:
      "A Google Docs clone — Next.js + TypeScript + Lexical Editor + Liveblocks for live multi-cursor collaboration, with ShadCN UI polish.",
    stack: ["Next.js", "TypeScript", "Lexical", "Liveblocks"],
  },
  {
    title: "Hostel Hub Base",
    tag: "Microservice Platform",
    year: "2023",
    description:
      "Hostel management microservice with 4 roles and 85% active-user rate. One-click + manual allocation flows for admins and caretakers.",
    stack: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    title: "Org Hierarchy System",
    tag: "MERN App",
    year: "2022",
    description:
      "Non-blocking Node.js/Express API with optimised CRUD (-50% response time). Recursive React tree with instant expand/collapse and a 10+ rule client-side validator.",
    stack: ["MERN", "React", "Express", "MongoDB"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-28 border-t border-border">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="text-accent text-sm tracking-widest uppercase mb-4">
            03 — Selected Work
          </p>
          <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight mb-16">
            Things I&apos;ve built.
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <FadeIn
              key={p.title}
              delay={i * 0.06}
              className={p.featured ? "md:col-span-2" : ""}
            >
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="card rounded-2xl p-6 sm:p-8 h-full flex flex-col"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-accent mb-2">
                      {p.tag} · {p.year}
                    </p>
                    <h3 className="font-display text-xl sm:text-2xl font-medium">
                      {p.title}
                    </h3>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted group-hover:text-white transition-colors shrink-0" />
                </div>
                <p className="text-muted leading-relaxed flex-1">
                  {p.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="text-xs text-muted border border-border rounded-full px-2.5 py-1"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
