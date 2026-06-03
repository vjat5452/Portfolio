"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const word = {
  hidden: { y: "110%" },
  show: (i: number) => ({
    y: 0,
    transition: { delay: 0.1 + i * 0.08, duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  }),
};

const titleLine1 = ["Full-Stack", "&", "AI"];
const titleLine2 = ["Engineer."];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 glow pointer-events-none" />
      <div className="mx-auto w-full max-w-6xl relative">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm text-muted mb-6 flex items-center gap-2"
        >
          <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for opportunities
        </motion.p>

        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-semibold leading-[0.95] tracking-tight">
          <span className="block overflow-hidden">
            <span className="flex flex-wrap gap-x-4">
              {titleLine1.map((w, i) => (
                <motion.span
                  key={w}
                  custom={i}
                  variants={word}
                  initial="hidden"
                  animate="show"
                  className="inline-block"
                >
                  {w}
                </motion.span>
              ))}
            </span>
          </span>
          <span className="block overflow-hidden mt-2">
            {titleLine2.map((w, i) => (
              <motion.span
                key={w}
                custom={i + 3}
                variants={word}
                initial="hidden"
                animate="show"
                className="inline-block gradient-text"
              >
                {w}
              </motion.span>
            ))}
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="mt-8 max-w-xl text-muted text-lg leading-relaxed"
        >
          I&apos;m <span className="text-white">Vijay Saharan</span> — a CS grad
          from IIIT Jabalpur, currently building high-performance web platforms
          and RAG-powered conversational AI at{" "}
          <span className="text-white">Sparrow Interactive</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-white text-bg px-5 py-2.5 text-sm font-medium hover:bg-accent hover:text-white transition-colors"
          >
            View my work
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </a>
          <div className="flex items-center gap-3 text-muted">
            <a
              href="https://github.com/vjat5452"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-full border border-border hover:border-accent hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/vijay-saharan-16015a264"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-full border border-border hover:border-accent hover:text-white transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:vijaykumarsaharan22@gmail.com"
              aria-label="Email"
              className="p-2 rounded-full border border-border hover:border-accent hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted text-xs flex flex-col items-center gap-2"
      >
        <span>Scroll</span>
        <span className="block w-px h-8 bg-gradient-to-b from-muted to-transparent" />
      </motion.div>
    </section>
  );
}
