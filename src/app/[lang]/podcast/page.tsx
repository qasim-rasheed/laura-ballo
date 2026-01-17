"use client";

import React, { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { Play } from "lucide-react";
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
    title: "Podcast Expression",
    subtitle:
      "Conversations on intuition, leadership, and the human side of business.",
    listen: "Listen Now",
  },
  fr: {
    title: "Podcast Expression",
    subtitle:
      "Conversations sur l'intuition, le leadership et le côté humain des affaires.",
    listen: "Écouter Maintenant",
  },
};

export default function PodcastPage() {
  const params = useParams();
  const lang = (params?.lang as "en" | "fr") || "en";
  const t = translations[lang];
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);

  return (
    <main className="bg-background min-h-screen pt-32 pb-20 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="grid lg:grid-cols-2 gap-16 mb-24"
        >
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-brand-primary"></div>
              <span className="text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase">
                Original Series
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-medium mb-8 text-foreground">
              {t.title}
            </h1>
            <p className="text-xl text-muted-foreground font-light leading-relaxed mb-8">
              {t.subtitle}
            </p>
            <button className="px-8 py-4 bg-brand-primary text-white text-sm font-bold uppercase tracking-widest hover:bg-brand-dark transition-colors duration-300 flex items-center gap-3">
              <Play size={18} fill="currentColor" /> {t.listen}
            </button>
          </div>

          <div className="relative aspect-square bg-brand-dark flex items-center justify-center overflow-hidden rounded-sm">
            {/* Visual Placeholder for Album Art */}
            <div className="text-white/20 font-serif text-4xl">
              [ Cover Art ]
            </div>
            {/* Sound Wave Animation Overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 flex items-end justify-center gap-1 pb-8 px-8 opacity-30">
              {isMounted &&
                [...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      height: ["20%", `${Math.random() * 80 + 20}%`, "20%"],
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: i * 0.05,
                      ease: "easeInOut",
                    }}
                    className="w-2 bg-white rounded-t-sm"
                  />
                ))}
            </div>
          </div>
        </motion.div>

        {/* Episode List */}
        <div className="border-t border-border pt-16">
          <h2 className="text-2xl font-serif font-medium mb-8">
            Recent Episodes
          </h2>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="group flex flex-col md:flex-row md:items-center gap-6 p-6 border border-border hover:border-brand-primary/50 hover:bg-muted/10 transition-all cursor-pointer rounded-sm"
              >
                <div className="w-12 h-12 bg-brand-primary/10 text-brand-primary flex items-center justify-center rounded-full shrink-0 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                  <Play size={18} fill="currentColor" className="ml-1" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-brand-primary transition-colors">
                    Episode {100 - i}: The Psychology of "No"
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    We explore why setting boundaries is the ultimate act of
                    leadership.
                  </p>
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  24 Mins
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
