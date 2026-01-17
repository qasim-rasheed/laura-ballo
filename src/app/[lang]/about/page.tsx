"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { useParams } from "next/navigation";

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
    title: "Meet the Team",
    subtitle: "A collective of experts dedicated to transforming leadership.",
    bio: "Laura Ballo is a seasoned expert in conflict resolution and negotiation...",
  },
  fr: {
    title: "Rencontrez l'Équipe",
    subtitle:
      "Un collectif d'experts dédiés à la transformation du leadership.",
    bio: "Laura Ballo est une experte chevronnée en résolution de conflits et négociation...",
  },
};

export default function AboutPage() {
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
          className="max-w-3xl"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-12 bg-brand-primary"></div>
            <span className="text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase">
              About Us
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-medium mb-8 text-foreground">
            {t.title}
          </h1>
          <p className="text-xl text-muted-foreground font-light leading-relaxed">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Team Grid Placeholder */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mt-20">
          {/* Laura's Card */}
          <div className="group">
            <div className="aspect-[3/4] bg-muted/20 relative overflow-hidden mb-6">
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-muted-foreground">
                [Laura Portrait]
              </div>
            </div>
            <h3 className="text-2xl font-serif font-medium mb-2">
              Laura Ballo
            </h3>
            <p className="text-sm font-bold uppercase tracking-widest text-brand-primary mb-4">
              Founder & Lead Coach
            </p>
            <p className="text-muted-foreground leading-relaxed">{t.bio}</p>
          </div>
          {/* Placeholder Team Member */}
          <div className="group">
            <div className="aspect-[3/4] bg-muted/20 relative overflow-hidden mb-6">
              <div className="absolute inset-0 bg-gray-100 flex items-center justify-center text-muted-foreground">
                [Team Member]
              </div>
            </div>
            <h3 className="text-2xl font-serif font-medium mb-2">Jane Doe</h3>
            <p className="text-sm font-bold uppercase tracking-widest text-brand-primary mb-4">
              Senior Consultant
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Specializing in organizational psychology and team dynamics.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
