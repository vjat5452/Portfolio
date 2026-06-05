import FadeIn from "./FadeIn";

const roles = [
  {
    company: "Sparrow Interactive",
    role: "Full-Stack & AI Engineer",
    period: "Feb 2026 — Present",
    location: "India",
    stack: ["Next.js 16", "React 19", "Python", "Claude API", "Qdrant", "FastAPI"],
    bullets: [
      "Built Sparrow's flagship corporate website (20+ pages) on Next.js 16 / React 19 with GSAP, Framer Motion, Three.js, Lenis, and a custom responsive grid.",
      "Designed an end-to-end RAG chatbot — Claude API + Qdrant embeddings + semantic chunking + reranker + PDF parsing + live web-scrape ingestion.",
      "Shipped a React admin dashboard for conversations, leads, golden QA, WhatsApp, email campaigns, and real-time analytics.",
      "Built Sparrowi AI Experience Centre: a 6-microservice kiosk platform with face recognition (InsightFace), tool-calling LLM (Ollama qwen2.5:14b), and live emotion/pose analytics.",
    ],
  },
  {
    company: "Freelance",
    role: "Freelance Developer",
    period: "2024 — Present",
    location: "Remote",
    stack: ["Next.js", "React", "Node.js", "Python"],
    bullets: [
      "Take on freelance projects on the side — building small web apps, landing pages, and AI-powered tools for independent clients.",
    ],
  },
  {
    company: "Swafinix Technologies",
    role: "Full-Stack Developer Intern",
    period: "Nov 2025 — Feb 2026",
    location: "Kolkata",
    stack: ["Python", "React", "Node.js", "MongoDB"],
    bullets: [
      "Delivered an agentic RAG chatbot that lifted information-retrieval accuracy and user interaction across the platform.",
      "Built production features for 3 client web apps using a modular, class-based architecture with REST APIs.",
    ],
  },
  {
    company: "Zexa Technologies",
    role: "Software Development Intern",
    period: "Jul 2025 — Oct 2025",
    location: "Remote · Jaipur",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Auth.js"],
    bullets: [
      "Contributed reusable modules to the ZexaNext Next.js boilerplate with a focus on scalability and maintainability.",
      "Delivered customer-facing MVPs and product websites with API integrations and UI performance tuning.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 py-28 border-t border-border">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="text-accent text-sm tracking-widest uppercase mb-4">
            02 — Experience
          </p>
          <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight mb-16">
            Where I&apos;ve been shipping.
          </h2>
        </FadeIn>

        <div className="space-y-6">
          {roles.map((r, i) => (
            <FadeIn key={r.company} delay={i * 0.08}>
              <article className="card rounded-2xl p-6 sm:p-8 group">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-5">
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-medium">
                      {r.role}{" "}
                      <span className="text-accent">@ {r.company}</span>
                    </h3>
                    <p className="text-muted text-sm mt-1">{r.location}</p>
                  </div>
                  <span className="text-sm text-muted whitespace-nowrap">
                    {r.period}
                  </span>
                </div>
                <ul className="space-y-2 text-muted leading-relaxed">
                  {r.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="text-accent mt-2 inline-block w-1 h-1 rounded-full bg-accent shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {r.stack.map((s) => (
                    <span
                      key={s}
                      className="text-xs text-muted border border-border rounded-full px-2.5 py-1"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
