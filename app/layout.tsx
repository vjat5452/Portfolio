import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vijay Saharan — Full-Stack & AI Engineer",
  description:
    "Full-Stack & AI Engineer building intelligent web platforms, RAG systems, and conversational AI. IIIT Jabalpur '25.",
  metadataBase: new URL("https://vijaysaharan.dev"),
  openGraph: {
    title: "Vijay Saharan — Full-Stack & AI Engineer",
    description:
      "Building intelligent web platforms, RAG systems, and conversational AI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable}`}>
      <body className="grain font-sans">{children}</body>
    </html>
  );
}
