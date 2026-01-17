"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useParams } from "next/navigation";
import Link from "next/link";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const translations = {
  en: {
    title: "Insights & Articles",
    subtitle:
      "Thoughts on leadership, negotiation, and the psychology of business.",
    readMore: "Read Article",
  },
  fr: {
    title: "Idées et Articles",
    subtitle:
      "Réflexions sur le leadership, la négociation et la psychologie des affaires.",
    readMore: "Lire l'article",
  },
};

export default function BlogPage() {
  const params = useParams();
  const lang = (params?.lang as "en" | "fr") || "en";
  const t = translations[lang];

  return (
    <main className="bg-background min-h-screen pt-32 pb-20 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="max-w-3xl mb-20"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-12 bg-brand-primary"></div>
            <span className="text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase">
              Blog
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-medium mb-8 text-foreground">
            {t.title}
          </h1>
          <p className="text-xl text-muted-foreground font-light leading-relaxed">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          {[1, 2, 3, 4].map((i) => (
            <article key={i} className="group cursor-pointer">
              <div className="aspect-video bg-muted/20 mb-8 overflow-hidden relative">
                <div className="absolute inset-0 bg-gray-100 flex items-center justify-center text-muted-foreground">
                  [Article Image {i}]
                </div>
                <div className="absolute inset-0 bg-brand-primary/0 group-hover:bg-brand-primary/10 transition-colors duration-500"></div>
              </div>
              <div className="flex items-center gap-4 mb-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                <span>Leadership</span>
                <span className="w-1 h-1 bg-brand-primary rounded-full"></span>
                <span>5 Min Read</span>
              </div>
              <h2 className="text-3xl font-serif font-medium mb-4 group-hover:text-brand-primary transition-colors">
                Navigating Conflict in High-Stakes Boardrooms
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Practical strategies for maintaining composure and steering
                negotiations towards a win-win outcome even under extreme
                pressure.
              </p>
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-brand-primary">
                {t.readMore}{" "}
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-2 transition-transform"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
