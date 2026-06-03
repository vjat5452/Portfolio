import FadeIn from "./FadeIn";

const stats = [
  { value: "700+", label: "DSA problems solved" },
  { value: "Top 2%", label: "All-India JEE rank" },
  { value: "Top 5", label: "HackByte finalists" },
  { value: "3+", label: "Years building" },
];

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
