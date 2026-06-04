import FadeIn from "./FadeIn";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Marquee } from "@/components/ui/marquee";
import { Separator } from "@/components/ui/separator";

type Skill = { name: string; note: string };

const groups: { title: string; items: Skill[] }[] = [
  {
    title: "Languages",
    items: [
      { name: "TypeScript", note: "Daily driver" },
      { name: "Python", note: "AI / backend / scripts" },
      { name: "C++", note: "DSA & systems" },
      { name: "Java", note: "OOP fundamentals" },
      { name: "JavaScript", note: "ES2024+" },
      { name: "SQL", note: "Postgres, MySQL, SQLite" },
    ],
  },
  {
    title: "Frameworks",
    items: [
      { name: "Next.js", note: "App router, RSC, edge" },
      { name: "React", note: "19 + hooks + Suspense" },
      { name: "Node.js", note: "Streams & workers" },
      { name: "Express", note: "REST APIs" },
      { name: "FastAPI", note: "Async Python services" },
      { name: "Prisma", note: "Type-safe ORM" },
    ],
  },
  {
    title: "AI / ML",
    items: [
      { name: "Claude API", note: "Tool-use, prompt caching" },
      { name: "RAG Pipelines", note: "Chunk → embed → rerank" },
      { name: "Qdrant", note: "Vector search at scale" },
      { name: "Ollama", note: "Local qwen2.5:14b" },
      { name: "InsightFace", note: "Face recognition" },
      { name: "MediaPipe", note: "Pose / landmarks" },
      { name: "DeepFace", note: "Emotion analytics" },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "MongoDB", note: "Document store" },
      { name: "PostgreSQL", note: "Relational + JSONB" },
      { name: "MySQL", note: "OLTP workloads" },
      { name: "SQLite (vector)", note: "Embedded vector store" },
    ],
  },
  {
    title: "Tooling",
    items: [
      { name: "Git", note: "Trunk + feature flow" },
      { name: "Docker", note: "Compose & multi-stage" },
      { name: "Vercel", note: "Edge deploys" },
      { name: "GCP", note: "Cloud Run, Storage" },
      { name: "AWS", note: "EC2, S3, Lambda" },
      { name: "GSAP", note: "Scroll-triggered motion" },
      { name: "Framer Motion", note: "React animation" },
      { name: "Three.js", note: "R3F scenes" },
    ],
  },
];

const marqueeItems = [
  "TypeScript",
  "Python",
  "Next.js",
  "React",
  "FastAPI",
  "Claude API",
  "Qdrant",
  "Ollama",
  "PostgreSQL",
  "Docker",
  "GCP",
  "Three.js",
  "GSAP",
  "Framer Motion",
];

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-28 border-t border-border">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="text-accent text-sm tracking-widest uppercase mb-4">
            04 — Toolkit
          </p>
          <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight mb-16">
            Tech I reach for.
          </h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {groups.map((g, i) => (
            <FadeIn key={g.title} delay={i * 0.06}>
              <Card className="h-full">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm uppercase tracking-widest text-muted font-display">
                    {g.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="flex flex-wrap gap-2">
                    {g.items.map((s) => (
                      <li key={s.name}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Badge
                              variant="default"
                              className="cursor-default"
                            >
                              {s.name}
                            </Badge>
                          </TooltipTrigger>
                          <TooltipContent>{s.note}</TooltipContent>
                        </Tooltip>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div className="mt-16">
            <Separator className="mb-10" />
            <Marquee className="py-2">
              {marqueeItems.map((t) => (
                <Badge
                  key={t}
                  variant="outline"
                  size="lg"
                  className="mx-2 cursor-default"
                >
                  {t}
                </Badge>
              ))}
            </Marquee>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
