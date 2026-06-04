"use client";

import FadeIn from "./FadeIn";
import { FileText, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const stats = [
  { value: "700+", label: "DSA problems solved" },
  { value: "Top 2%", label: "All-India JEE rank" },
  { value: "Top 5", label: "HackByte finalists" },
  { value: "3+", label: "Years building" },
];

const RESUME_URL = "/Resume.pdf";

export default function About() {
  return (
    <section id="about" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="text-accent text-sm tracking-widest uppercase mb-4">
            01 — About
          </p>
        </FadeIn>
        <div className="grid md:grid-cols-5 gap-12">
          <FadeIn className="md:col-span-3">
            <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight leading-tight">
              I build products at the intersection of{" "}
              <span className="gradient-text">web & AI</span>.
            </h2>
            <div className="mt-8 space-y-5 text-muted text-base leading-relaxed max-w-2xl">
              <p>
                I&apos;m a Computer Science engineer from{" "}
                <span className="text-white">IIIT Jabalpur (2025)</span> with a
                strong foundation in DSA, distributed systems, and modern web
                stacks. I love taking an idea from a Figma frame all the way to
                a production deployment on Vercel.
              </p>
              <p>
                Lately I&apos;ve been deep into{" "}
                <span className="text-white">RAG pipelines</span>, vector
                databases, and tool-calling LLM agents — shipping a multi-service
                AI Experience Centre kiosk and a brand-wide chatbot at{" "}
                <span className="text-white">Sparrow Interactive</span>.
              </p>
            </div>

            <div className="mt-8">
              <Dialog>
                <DialogTrigger asChild>
                  <Button>
                    <FileText className="w-4 h-4" />
                    View Resume
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-5xl">
                  <DialogHeader className="flex flex-row items-center justify-between gap-4 pr-12">
                    <div>
                      <DialogTitle>Vijay Saharan — Resume</DialogTitle>
                      <DialogDescription>
                        PDF preview · scroll to read, or open in a new tab
                      </DialogDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button asChild variant="outline" size="sm">
                        <a
                          href={RESUME_URL}
                          target="_blank"
                          rel="noreferrer"
                          aria-label="Open resume in new tab"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          Open
                        </a>
                      </Button>
                      <Button asChild size="sm">
                        <a
                          href={RESUME_URL}
                          download="Vijay-Saharan-Resume.pdf"
                          aria-label="Download resume"
                        >
                          <Download className="w-3.5 h-3.5" />
                          Download
                        </a>
                      </Button>
                    </div>
                  </DialogHeader>
                  <div className="h-[78vh] w-full overflow-hidden rounded-b-2xl bg-[#1a1a1a]">
                    <object
                      data={`${RESUME_URL}#view=FitH&toolbar=0`}
                      type="application/pdf"
                      className="h-full w-full"
                    >
                      <iframe
                        src={`${RESUME_URL}#view=FitH&toolbar=0`}
                        title="Resume PDF"
                        className="h-full w-full border-0"
                      />
                    </object>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </FadeIn>
          <FadeIn delay={0.1} className="md:col-span-2 grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="card rounded-2xl p-5 flex flex-col gap-1"
              >
                <span className="font-display text-2xl sm:text-3xl gradient-text">
                  {s.value}
                </span>
                <span className="text-xs text-muted leading-tight">
                  {s.label}
                </span>
              </div>
            ))}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
