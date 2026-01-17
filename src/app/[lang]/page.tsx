"use client";

import React, { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import {
  ArrowRight,
  Play,
  Users,
  Brain,
  Mic,
  BookOpen,
  CheckCircle,
  Star,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
// Importing your Chatbot Component
import LeadershipCoach from "@/components/leadership-coach";
import { useParams } from "next/navigation";
import NewsletterForm from "@/components/newsletter-form";

// --- ANIMATION VARIANTS ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// Simple translations map
const translations = {
  en: {
    hero: {
      label: "Leadership Organization Platform",
      titleStart: "Master the Art of",
      titleHighlight: "Conflict",
      titleEnd: "Resolution.",
      desc: "Transition from manager to visionary leader. We help organizations navigate complexity through emotional intelligence and the proprietary Méthode Résonance©.",
      ctaTraining: "Start Training",
      ctaCoach: "Ask AI Coach",
      latestInsight: "Latest Insight",
      insightTitle:
        '"Leading Through Uncertainty: The Psychology of Resilience"',
      listenEp: "Listen Episode",
    },
    nav: {
      training: "Training",
      coaching: "Coaching",
      podcast: "Podcast",
    },
    trustedBy: "Trusted by\nIndustry Leaders",
    services: {
      title: "Expertise &\nMethodology",
      desc: "We provide holistic strategies for the modern executive. From handling high-stakes conflict to mastering bilingual communication in complex corporate structures.",
      card1: {
        title: "Corporate Training",
        desc: "Master conflict resolution through our proprietary Méthode Résonance©. Designed for high-stakes environments.",
      },
      card2: {
        title: "Executive Coaching",
        desc: "One-on-one mentorship for leaders. Move from 'Manager' to 'Visionary' with emotional intelligence.",
      },
      card3: {
        title: "Keynote Speaking",
        desc: "Inspiring conferences on 'Assertive Communication' and 'The Art of Resonance'.",
      },
    },
    podcast: {
      label: "Podcast Expression",
      titleStart: "Expand Your",
      titleHighlight: "Intuitive",
      titleEnd: "Consciousness.",
      desc: "Join Laura as she explores the intersection of leadership, spirituality, and corporate resilience.",
      latestEpLabel: "Latest Episode",
      latestEpTitle: 'The Art of Saying "No"',
      recentEpsLabel: "Recent Episodes",
      updatedWeekly: "Updated Weekly",
    },
    french: {
      label: "Premium Service",
      title: "Private French Coaching \n for Executives.",
      desc: "Combine leadership development with linguistic mastery. Bespoke sessions tailored for international business environments (A1-C2 Levels).",
      cta: "View Availability",
      bookSession: "Book a Session",
      poweredBy: "Powered by Calendly Integration",
    },
  },
  fr: {
    hero: {
      label: "Plateforme d'Organisation du Leadership",
      titleStart: "Maîtrisez l'Art de la",
      titleHighlight: "Résolution",
      titleEnd: "de Conflits.",
      desc: "Passez de gestionnaire à leader visionnaire. Nous aidons les organisations à naviguer dans la complexité grâce à l'intelligence émotionnelle et à la Méthode Résonance© exclusive.",
      ctaTraining: "Commencer la Formation",
      ctaCoach: "Demander au Coach IA",
      latestInsight: "Dernier Aperçu",
      insightTitle:
        '"Diriger dans l\'Incertitude : La Psychologie de la Résilience"',
      listenEp: "Écouter l'Épisode",
    },
    nav: {
      training: "Formation",
      coaching: "Coaching",
      podcast: "Podcast",
    },
    trustedBy: "Reconnu par\nles Leaders de l'Industrie",
    services: {
      title: "Expertise &\nMéthodologie",
      desc: "Nous fournissons des stratégies holistiques pour l'exécutif moderne. De la gestion des conflits à enjeux élevés à la maîtrise de la communication bilingue dans des structures d'entreprise complexes.",
      card1: {
        title: "Formation en Entreprise",
        desc: "Maîtrisez la résolution de conflits grâce à notre Méthode Résonance© exclusive. Conçue pour les environnements à enjeux élevés.",
      },
      card2: {
        title: "Coaching Exécutif",
        desc: "Mentorat individuel pour les dirigeants. Passez de 'Gestionnaire' à 'Visionnaire' avec l'intelligence émotionnelle.",
      },
      card3: {
        title: "Conférences",
        desc: "Conférences inspirantes sur la 'Communication Assertive' et 'L'Art de la Résonance'.",
      },
    },
    podcast: {
      label: "Podcast Expression",
      titleStart: "Développez Votre",
      titleHighlight: "Conscience",
      titleEnd: "Intuitive.",
      desc: "Rejoignez Laura alors qu'elle explore l'intersection du leadership, de la spiritualité et de la résilience d'entreprise.",
      latestEpLabel: "Dernier Épisode",
      latestEpTitle: 'L\'Art de Dire "Non"',
      recentEpsLabel: "Épisodes Récents",
      updatedWeekly: "Mis à jour chaque semaine",
    },
    french: {
      label: "Service Premium",
      title: "Coaching Privé de Français \n pour Cadres.",
      desc: "Combinez le développement du leadership avec la maîtrise linguistique. Séances sur mesure adaptées aux environnements commerciaux internationaux (Niveaux A1-C2).",
      cta: "Voir les Disponibilités",
      bookSession: "Réserver une Séance",
      poweredBy: "Propulsé par l'intégration Calendly",
    },
  },
};

export default function Home() {
  const params = useParams();
  const lang = (params?.lang as "en" | "fr") || "en";
  const t = translations[lang];

  return (
    <main className="bg-background selection:bg-brand-primary selection:text-white transition-colors duration-300">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[95vh] flex items-center pt-20 bg-background transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-8 w-full grid lg:grid-cols-12 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="lg:col-span-7 relative z-10"
          >
            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-4 mb-8"
            >
              <div className="h-px w-12 bg-brand-primary"></div>
              <span className="text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase">
                {t.hero.label}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-6xl md:text-7xl lg:text-8xl font-serif font-medium leading-[1.05] mb-8 text-foreground tracking-tight"
            >
              {t.hero.titleStart} <br />
              <span className="italic text-brand-primary">
                {t.hero.titleHighlight}
              </span>{" "}
              {t.hero.titleEnd}
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-muted-foreground mb-12 max-w-xl leading-relaxed font-light"
            >
              {t.hero.desc}
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-6"
            >
              <button className="group px-8 py-4 bg-brand-primary text-white text-sm font-bold uppercase tracking-widest hover:bg-brand-dark dark:hover:bg-brand-primary/80 transition-colors duration-300 flex items-center gap-4">
                {t.hero.ctaTraining}
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-2 transition-transform duration-300"
                />
              </button>
              <button
                onClick={() =>
                  document.getElementById("ai-coach-trigger")?.click()
                }
                className="group px-8 py-4 border border-input text-foreground text-sm font-bold uppercase tracking-widest hover:border-brand-dark dark:hover:border-brand-primary transition-colors duration-300 flex items-center gap-3"
              >
                <Brain size={16} className="text-brand-secondary" />
                {t.hero.ctaCoach}
              </button>
            </motion.div>
          </motion.div>

          {/* Right: Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="lg:col-span-5 relative h-full min-h-[600px] hidden lg:block"
          >
            <div className="absolute inset-0 bg-muted/20 overflow-hidden dark:bg-muted/10">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground/40">
                <span className="font-serif italic text-2xl">
                  [ Portrait: Laura Ballo ]
                </span>
                <span className="text-xs uppercase tracking-widest mt-2">
                  Professional Headshot
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            </div>

            <div className="absolute bottom-0 left-0 bg-background p-8 max-w-xs border-t border-r border-border shadow-sm dark:border-border/50">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 bg-brand-secondary rounded-full animate-pulse"></div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                  {t.hero.latestInsight}
                </span>
              </div>
              <p className="font-serif text-lg leading-snug text-foreground mb-4">
                {t.hero.insightTitle}
              </p>
              <Link
                href="#podcast"
                className="text-xs font-bold uppercase tracking-widest text-brand-primary hover:text-foreground transition-colors flex items-center gap-2"
              >
                {t.hero.listenEp} <Play size={10} className="fill-current" />
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <span className="text-[10px] uppercase tracking-widest text-foreground">
            Scroll
          </span>
          <ChevronDown size={16} className="animate-bounce text-foreground" />
        </div>
      </section>

      {/* 2. LOGO MARQUEE */}
      <section className="py-20 border-b border-border bg-background transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-3">
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest leading-relaxed whitespace-pre-line">
              {t.trustedBy}
            </p>
          </div>
          <div className="md:col-span-9 flex justify-between items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            {[
              "Valrhona",
              "SNCF",
              "L'Oréal",
              "Orange",
              "Air France",
              "Danone",
            ].map((logo, i) => (
              <span
                key={i}
                className="text-xl font-serif font-bold text-foreground cursor-default"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SERVICES GRID */}
      <section
        id="services"
        className="py-32 bg-background transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-12 gap-16 mb-20">
            <div className="md:col-span-4">
              <h2 className="text-4xl font-serif font-medium text-foreground mb-6 whitespace-pre-line">
                {t.services.title}
              </h2>
              <div className="w-12 h-1 bg-brand-primary"></div>
            </div>
            <div className="md:col-span-8">
              <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-2xl">
                {t.services.desc}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 border-t border-r border-b border-border">
            <ServiceCard
              number="1"
              title={t.services.card1.title}
              icon={Users}
              desc={t.services.card1.desc}
            />
            <ServiceCard
              number="2"
              title={t.services.card2.title}
              icon={Brain}
              desc={t.services.card2.desc}
            />
            <ServiceCard
              number="3"
              title={t.services.card3.title}
              icon={Mic}
              desc={t.services.card3.desc}
            />
          </div>
        </div>
      </section>

      {/* 4. PODCAST SECTION (With Animation) */}
      <PodcastSection t={t.podcast} />

      {/* 5. FRENCH SECTION */}
      <section className="py-32 bg-brand-dark text-white relative overflow-hidden dark:bg-black">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-primary/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center relative z-10">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Star
                size={14}
                className="fill-brand-secondary text-brand-secondary"
              />
              <span className="text-xs font-bold tracking-widest uppercase text-white/40">
                {t.french.label}
              </span>
            </div>
            <h2 className="text-5xl font-serif font-medium mb-8 leading-tight whitespace-pre-line">
              {t.french.title}
            </h2>
            <p className="text-gray-400 text-lg mb-10 font-light max-w-md leading-relaxed">
              {t.french.desc}
            </p>
            <button className="px-10 py-4 bg-white text-brand-dark text-sm font-bold uppercase tracking-widest hover:bg-brand-primary hover:text-white transition-all duration-300 dark:bg-foreground dark:text-background">
              {t.french.cta}
            </button>
          </div>
          <div className="relative">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 md:p-14 rounded-sm">
              <div className="flex justify-between items-center mb-12 border-b border-white/10 pb-6">
                <h3 className="font-serif text-2xl">{t.french.bookSession}</h3>
                <BookOpen size={24} className="text-brand-secondary" />
              </div>
              <div className="space-y-4">
                {[1, 2, 3].map((row) => (
                  <div key={row} className="flex gap-4 group cursor-pointer">
                    <div className="w-14 h-14 bg-white/5 flex items-center justify-center text-sm font-bold text-gray-500 group-hover:text-white transition-colors border border-transparent group-hover:border-white/10">
                      {12 + row}
                    </div>
                    <div className="flex-1 bg-white/5 h-14 flex items-center px-6 text-xs text-gray-500 uppercase tracking-wider group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                      {row === 1 ? "Available - 10:00 AM" : "Booked"}
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-xs text-gray-600 text-center uppercase tracking-widest">
                {t.french.poweredBy}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. NEWSLETTER SECTION - Added as requested */}
      <div className="py-20 border-t border-border bg-background">
        <div className="max-w-2xl mx-auto px-8">
          <h2 className="text-3xl font-serif font-medium text-center mb-4">
            Stay in the Loop
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            Join our newsletter for weekly leadership insights.
          </p>
          <NewsletterForm />
        </div>
      </div>

      {/* 7. AI CHATBOT (Kept as requested) */}
      <div className="fixed bottom-8 right-8 z-40">
        <LeadershipCoach />
      </div>
    </main>
  );
}

// --- SUB-COMPONENTS FOR CLEANER FILE ---

const ServiceCard = ({ number, title, desc, icon: Icon }: any) => (
  <div className="group relative p-12 border-l border-border hover:bg-muted/30 transition-colors duration-500 dark:hover:bg-muted/10">
    <div className="mb-8 flex justify-between items-start">
      <span className="text-xs font-bold text-muted-foreground/40 font-serif text-3xl">
        0{number}
      </span>
      <Icon
        size={24}
        strokeWidth={1}
        className="text-brand-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-y-2 group-hover:translate-y-0"
      />
    </div>
    <h3 className="text-2xl font-serif font-medium text-foreground mb-4 group-hover:translate-x-2 transition-transform duration-300">
      {title}
    </h3>
    <p className="text-muted-foreground text-sm leading-relaxed mb-8 max-w-xs">
      {desc}
    </p>
    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <span className="w-8 h-px bg-brand-primary"></span> Explore
    </div>
  </div>
);

const PodcastSection = ({ t }: { t: any }) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);

  return (
    <section
      id="podcast"
      className="py-32 bg-muted/20 border-t border-border transition-colors duration-300 dark:bg-muted/5"
    >
      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-8 bg-brand-primary"></div>
            <span className="text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase">
              {t.label}
            </span>
          </div>
          <h2 className="text-5xl font-serif font-medium mb-6 text-foreground leading-tight">
            {t.titleStart}{" "}
            <span className="italic text-brand-primary">
              {t.titleHighlight}
            </span>
            <br />
            {t.titleEnd}
          </h2>
          <p className="text-lg text-muted-foreground mb-10 font-light max-w-md leading-relaxed">
            {t.desc}
          </p>
          <div className="flex items-center gap-6">
            <button className="group w-16 h-16 bg-background border border-border rounded-full flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary transition-all duration-300 shadow-sm dark:bg-card">
              <Play
                size={20}
                className="fill-foreground text-foreground ml-1 group-hover:fill-white group-hover:text-white transition-colors"
              />
            </button>
            <div>
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">
                {t.latestEpLabel}
              </p>
              <p className="font-serif text-lg text-foreground">
                {t.latestEpTitle}
              </p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-background rounded-3xl opacity-50 blur-xl dark:bg-card/50"></div>
          <div className="bg-background border border-border rounded-2xl p-8 relative shadow-sm dark:bg-card">
            <div className="flex justify-between items-end mb-8 border-b border-border pb-6">
              <div>
                <h3 className="font-bold text-foreground text-sm uppercase tracking-widest mb-2">
                  {t.recentEpsLabel}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {t.updatedWeekly}
                </p>
              </div>
              <div className="flex items-end gap-1 h-8 opacity-40">
                {isMounted
                  ? [...Array(12)].map((_, i) => (
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
                        className="w-1 bg-brand-primary rounded-t-sm"
                      />
                    ))
                  : [...Array(12)].map((_, i) => (
                      <div
                        key={i}
                        className="w-1 bg-brand-primary h-2 rounded-t-sm"
                      ></div>
                    ))}
              </div>
            </div>
            <div className="space-y-2">
              {[1, 2, 3].map((item, i) => (
                <div
                  key={i}
                  className={`group flex items-center gap-5 p-4 rounded-xl cursor-pointer transition-all duration-300 ${i === 0 ? "bg-muted/40 border border-border" : "hover:bg-muted/20 border border-transparent"}`}
                >
                  <span className="text-xs font-bold text-muted-foreground/40 font-serif text-lg w-6">
                    0{i + 1}
                  </span>
                  <div className="flex-1">
                    <p className="font-medium text-foreground text-sm group-hover:text-brand-primary transition-colors">
                      Episode {28 - i}: Leadership Paradigms
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
