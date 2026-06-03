import FadeIn from "./FadeIn";

const groups = [
  {
    title: "Languages",
    items: ["TypeScript", "Python", "C++", "Java", "JavaScript", "SQL"],
  },
  {
    title: "Frameworks",
    items: ["Next.js", "React", "Node.js", "Express", "FastAPI", "Prisma"],
  },
  {
    title: "AI / ML",
    items: [
      "Claude API",
      "RAG Pipelines",
      "Qdrant",
      "Ollama",
      "InsightFace",
      "MediaPipe",
      "DeepFace",
    ],
  },
  {
    title: "Databases",
    items: ["MongoDB", "PostgreSQL", "MySQL", "SQLite (vector)"],
  },
  {
    title: "Tooling",
    items: ["Git", "Docker", "Vercel", "GCP", "AWS", "GSAP", "Framer Motion", "Three.js"],
  },
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
              <div className="card rounded-2xl p-6 h-full">
                <h3 className="font-display text-sm uppercase tracking-widest text-muted mb-4">
                  {g.title}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <li
                      key={s}
                      className="text-sm border border-border rounded-full px-3 py-1 hover:border-accent hover:text-accent transition-colors"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
