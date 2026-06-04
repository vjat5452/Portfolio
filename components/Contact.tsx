import FadeIn from "./FadeIn";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const links = [
  {
    label: "vijaykumarsaharan22@gmail.com",
    href: "mailto:vijaykumarsaharan22@gmail.com",
    icon: Mail,
  },
  { label: "+91 90245 25897", href: "tel:+919024525897", icon: Phone },
  {
    label: "linkedin.com/in/vijay-saharan",
    href: "https://www.linkedin.com/in/vijay-saharan-16015a264",
    icon: Linkedin,
  },
  { label: "github.com/vjat5452", href: "https://github.com/vjat5452", icon: Github },
];

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 py-28 border-t border-border">
      <div className="mx-auto max-w-4xl text-center">
        <FadeIn>
          <p className="text-accent text-sm tracking-widest uppercase mb-4">
            05 — Contact
          </p>
          <h2 className="font-display text-4xl sm:text-6xl font-semibold tracking-tight">
            Let&apos;s build <span className="gradient-text">something</span>.
          </h2>
          <p className="mt-6 text-muted max-w-xl mx-auto leading-relaxed">
            Open to full-time roles and interesting freelance work in web,
            full-stack, and applied AI. Drop a line — I usually reply within a
            day.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg">
              <a href="mailto:vijaykumarsaharan22@gmail.com">
                <Mail className="w-4 h-4" />
                Send me an email
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a
                href="https://www.linkedin.com/in/vijay-saharan-16015a264"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="w-4 h-4" />
                Connect on LinkedIn
              </a>
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <ul className="mt-12 grid sm:grid-cols-2 gap-3 text-left">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="block group"
                >
                  <Card className="px-4 py-3 flex items-center gap-3 text-sm group-hover:border-accent transition-colors">
                    <l.icon className="w-4 h-4 text-accent" />
                    <span className="truncate group-hover:text-accent transition-colors">
                      {l.label}
                    </span>
                  </Card>
                </a>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
