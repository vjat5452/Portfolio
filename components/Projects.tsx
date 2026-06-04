"use client";

import FadeIn from "./FadeIn";
import { ArrowUpRight, Star, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Badge } from "@/components/ui/badge";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const projects = [
  {
    title: "Sparrow Interactive Website",
    tag: "Flagship Web Platform",
    year: "2026",
    description:
      "20+ page corporate site on Next.js 16 + React 19, with GSAP, Framer Motion, R3F, Lenis smooth-scroll, custom responsive grid, lazy-loaded media, and a Nodemailer-backed contact pipeline.",
    stack: ["Next.js 16", "React 19", "GSAP", "Three.js", "Tailwind"],
    highlights: ["20+ pages", "R3F scenes", "98 Lighthouse"],
    featured: true,
    liveUrl: "https://sparrowi.com",
    liveLabel: "sparrowi.com",
  },
  {
    title: "Sparrowi AI Experience Centre",
    tag: "Multi-Service AI Kiosk",
    year: "2026",
    description:
      "Kiosk platform with face recognition (InsightFace + SQLite vector search), tool-calling LLM brain (Ollama qwen2.5:14b), real-time emotion/pose analytics, and auto-generated visit reports. 6 microservices over FastAPI + Next.js 14.",
    stack: ["FastAPI", "Ollama", "MediaPipe", "DeepFace", "WebSockets"],
    highlights: ["6 microservices", "Edge inference", "Realtime WS"],
    featured: true,
  },
  {
    title: "Sparrow RAG Chatbot + Admin",
    tag: "Conversational AI",
    year: "2026",
    description:
      "Full RAG pipeline — Claude API, Qdrant vectors, semantic chunking, reranker, PDF parsing, live web-scrape ingestion, lead capture, session mgmt, SQL analytics, and a React control plane.",
    stack: ["Python", "Claude API", "Qdrant", "React", "SQL"],
    highlights: ["Semantic rerank", "PDF + web ingest", "Lead capture"],
    liveUrl: "https://sparrowi.com",
    liveLabel: "sparrowi.com",
  },
  {
    title: "RealDocs",
    tag: "Real-Time Collab Editor",
    year: "2024",
    description:
      "A Google Docs clone — Next.js + TypeScript + Lexical Editor + Liveblocks for live multi-cursor collaboration, with ShadCN UI polish.",
    stack: ["Next.js", "TypeScript", "Lexical", "Liveblocks"],
    highlights: ["Live cursors", "Lexical editor", "Auth + share"],
  },
  {
    title: "Hostel Hub Base",
    tag: "Microservice Platform",
    year: "2023",
    description:
      "Hostel management microservice with 4 roles and 85% active-user rate. One-click + manual allocation flows for admins and caretakers.",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    highlights: ["4 RBAC roles", "85% active users", "One-click alloc"],
  },
  {
    title: "Org Hierarchy System",
    tag: "MERN App",
    year: "2022",
    description:
      "Non-blocking Node.js/Express API with optimised CRUD (-50% response time). Recursive React tree with instant expand/collapse and a 10+ rule client-side validator.",
    stack: ["MERN", "React", "Express", "MongoDB"],
    highlights: ["-50% latency", "Recursive tree", "10+ validators"],
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
              <HoverCard openDelay={200} closeDelay={100}>
                <HoverCardTrigger asChild>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <SpotlightCard className="p-6 sm:p-8 h-full flex flex-col">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <p className="text-xs uppercase tracking-widest text-accent">
                              {p.tag} · {p.year}
                            </p>
                            {p.featured && (
                              <Badge variant="accent" size="sm" className="gap-1">
                                <Star className="w-3 h-3" />
                                Featured
                              </Badge>
                            )}
                            {p.liveUrl && (
                              <a
                                href={p.liveUrl}
                                target="_blank"
                                rel="noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="group/live inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 text-[10px] font-medium text-accent transition-all hover:border-accent hover:bg-accent/20 hover:text-white"
                              >
                                <span className="relative flex h-1.5 w-1.5">
                                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-400" />
                                </span>
                                Live · {p.liveLabel}
                                <ExternalLink className="h-2.5 w-2.5 transition-transform group-hover/live:-translate-y-0.5 group-hover/live:translate-x-0.5" />
                              </a>
                            )}
                          </div>
                          <h3 className="font-display text-xl sm:text-2xl font-medium">
                            {p.title}
                          </h3>
                        </div>
                        <ArrowUpRight className="w-5 h-5 text-muted shrink-0 transition-all duration-300 group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </div>
                      <p className="text-muted leading-relaxed flex-1">
                        {p.description}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {p.stack.map((s) => (
                          <Badge key={s} variant="outline" size="sm">
                            {s}
                          </Badge>
                        ))}
                      </div>
                    </SpotlightCard>
                  </motion.div>
                </HoverCardTrigger>
                <HoverCardContent align="start" className="w-80">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <p className="font-display text-sm font-medium text-white">
                        {p.title}
                      </p>
                      <Badge variant="accent" size="sm">
                        {p.year}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted leading-relaxed">
                      Quick stats
                    </p>
                    <ul className="space-y-1.5">
                      {p.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-center gap-2 text-xs text-white/90"
                        >
                          <span className="h-1 w-1 rounded-full bg-accent" />
                          {h}
                        </li>
                      ))}
                    </ul>
                    {p.liveUrl && (
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-1 inline-flex items-center gap-1.5 text-xs text-accent transition-colors hover:text-white"
                      >
                        Visit {p.liveLabel}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </HoverCardContent>
              </HoverCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
