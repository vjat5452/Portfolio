"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const word = {
  hidden: { y: "110%" },
  show: (i: number) => ({
    y: 0,
    transition: { delay: 0.1 + i * 0.08, duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  }),
};

const titleLine1 = ["Full-Stack", "&", "AI"];
const titleLine2 = ["Engineer."];

const socials = [
  { href: "https://github.com/vjat5452", label: "GitHub", Icon: Github },
  {
    href: "https://www.linkedin.com/in/vijay-saharan-16015a264",
    label: "LinkedIn",
    Icon: Linkedin,
  },
  { href: "mailto:vijaykumarsaharan22@gmail.com", label: "Email", Icon: Mail },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 glow pointer-events-none" />
      <div className="mx-auto w-full max-w-6xl relative">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <Badge variant="glow" size="lg" className="gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
            </span>
            Available for opportunities
          </Badge>
        </motion.div>

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
          <Button asChild>
            <a href="#projects">
              View my work
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href="#contact">
              <Sparkles className="w-4 h-4" />
              Let&apos;s collaborate
            </a>
          </Button>

          <div className="flex items-center gap-3">
            {socials.map(({ href, label, Icon }) => (
              <Tooltip key={label}>
                <TooltipTrigger asChild>
                  <Button
                    asChild
                    variant="icon"
                    size="icon"
                    aria-label={label}
                  >
                    <a href={href} target="_blank" rel="noreferrer">
                      <Icon className="w-4 h-4" />
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>{label}</TooltipContent>
              </Tooltip>
            ))}
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
