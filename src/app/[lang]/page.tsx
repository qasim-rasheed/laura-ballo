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

export default function Home() {
  return (
    <main className="bg-white selection:bg-brand-primary selection:text-white">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[95vh] flex items-center pt-20 bg-white">
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
              <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">
                Leadership Organization Platform
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-6xl md:text-7xl lg:text-8xl font-serif font-medium leading-[1.05] mb-8 text-brand-dark tracking-tight"
            >
              Master the Art of <br />
              <span className="italic text-brand-primary">Conflict</span>{" "}
              Resolution.
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-500 mb-12 max-w-xl leading-relaxed font-light"
            >
              Transition from manager to visionary leader. We help organizations
              navigate complexity through emotional intelligence and the
              proprietary{" "}
              <strong className="text-brand-dark font-medium">
                Méthode Résonance©
              </strong>
              .
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-6"
            >
              <button className="group px-8 py-4 bg-brand-primary text-white text-sm font-bold uppercase tracking-widest hover:bg-brand-dark transition-colors duration-300 flex items-center gap-4">
                Start Training
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-2 transition-transform duration-300"
                />
              </button>
              <button
                onClick={() =>
                  document.getElementById("ai-coach-trigger")?.click()
                }
                className="group px-8 py-4 border border-gray-200 text-brand-dark text-sm font-bold uppercase tracking-widest hover:border-brand-dark transition-colors duration-300 flex items-center gap-3"
              >
                <Brain size={16} className="text-brand-secondary" />
                Ask AI Coach
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
            <div className="absolute inset-0 bg-gray-100 overflow-hidden">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-300">
                <span className="font-serif italic text-2xl">
                  [ Portrait: Laura Ballo ]
                </span>
                <span className="text-xs uppercase tracking-widest mt-2">
                  Professional Headshot
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/20 to-transparent"></div>
            </div>

            <div className="absolute bottom-0 left-0 bg-white p-8 max-w-xs border-t border-r border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 bg-brand-secondary rounded-full animate-pulse"></div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  Latest Insight
                </span>
              </div>
              <p className="font-serif text-lg leading-snug text-brand-dark mb-4">
                "Leading Through Uncertainty: The Psychology of Resilience"
              </p>
              <Link
                href="#podcast"
                className="text-xs font-bold uppercase tracking-widest text-brand-primary hover:text-brand-dark transition-colors flex items-center gap-2"
              >
                Listen Episode <Play size={10} className="fill-current" />
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <ChevronDown size={16} className="animate-bounce" />
        </div>
      </section>

      {/* 2. LOGO MARQUEE */}
      <section className="py-20 border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-3">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest leading-relaxed">
              Trusted by
              <br />
              Industry Leaders
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
                className="text-xl font-serif font-bold text-brand-dark cursor-default"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SERVICES GRID */}
      <section id="services" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-12 gap-16 mb-20">
            <div className="md:col-span-4">
              <h2 className="text-4xl font-serif font-medium text-brand-dark mb-6">
                Expertise &<br />
                Methodology
              </h2>
              <div className="w-12 h-1 bg-brand-primary"></div>
            </div>
            <div className="md:col-span-8">
              <p className="text-lg text-gray-500 font-light leading-relaxed max-w-2xl">
                We provide holistic strategies for the modern executive. From
                handling high-stakes conflict to mastering bilingual
                communication in complex corporate structures.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 border-t border-r border-b border-gray-100">
            <ServiceCard
              number="1"
              title="Corporate Training"
              icon={Users}
              desc="Master conflict resolution through our proprietary Méthode Résonance©. Designed for high-stakes environments."
            />
            <ServiceCard
              number="2"
              title="Executive Coaching"
              icon={Brain}
              desc="One-on-one mentorship for leaders. Move from 'Manager' to 'Visionary' with emotional intelligence."
            />
            <ServiceCard
              number="3"
              title="Keynote Speaking"
              icon={Mic}
              desc="Inspiring conferences on 'Assertive Communication' and 'The Art of Resonance'."
            />
          </div>
        </div>
      </section>

      {/* 4. PODCAST SECTION (With Animation) */}
      <PodcastSection />

      {/* 5. FRENCH SECTION */}
      <section className="py-32 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-primary/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center relative z-10">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Star
                size={14}
                className="fill-brand-secondary text-brand-secondary"
              />
              <span className="text-xs font-bold tracking-widest uppercase text-white/40">
                Premium Service
              </span>
            </div>
            <h2 className="text-5xl font-serif font-medium mb-8 leading-tight">
              Private French Coaching <br /> for Executives.
            </h2>
            <p className="text-gray-400 text-lg mb-10 font-light max-w-md leading-relaxed">
              Combine leadership development with linguistic mastery. Bespoke
              sessions tailored for international business environments (A1-C2
              Levels).
            </p>
            <button className="px-10 py-4 bg-white text-brand-dark text-sm font-bold uppercase tracking-widest hover:bg-brand-primary hover:text-white transition-all duration-300">
              View Availability
            </button>
          </div>
          <div className="relative">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 md:p-14 rounded-sm">
              <div className="flex justify-between items-center mb-12 border-b border-white/10 pb-6">
                <h3 className="font-serif text-2xl">Book a Session</h3>
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
                Powered by Calendly Integration
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. AI CHATBOT (Kept as requested) */}
      <div className="fixed bottom-8 right-8 z-40">
        <LeadershipCoach />
      </div>
    </main>
  );
}

// --- SUB-COMPONENTS FOR CLEANER FILE ---

const ServiceCard = ({ number, title, desc, icon: Icon }: any) => (
  <div className="group relative p-12 border-l border-gray-100 hover:bg-gray-50 transition-colors duration-500">
    <div className="mb-8 flex justify-between items-start">
      <span className="text-xs font-bold text-gray-300 font-serif text-3xl">
        0{number}
      </span>
      <Icon
        size={24}
        strokeWidth={1}
        className="text-brand-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-y-2 group-hover:translate-y-0"
      />
    </div>
    <h3 className="text-2xl font-serif font-medium text-brand-dark mb-4 group-hover:translate-x-2 transition-transform duration-300">
      {title}
    </h3>
    <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-xs">
      {desc}
    </p>
    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <span className="w-8 h-px bg-brand-primary"></span> Explore
    </div>
  </div>
);

const PodcastSection = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);

  return (
    <section id="podcast" className="py-32 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-8 bg-brand-primary"></div>
            <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">
              Podcast Expression
            </span>
          </div>
          <h2 className="text-5xl font-serif font-medium mb-6 text-brand-dark leading-tight">
            Expand Your{" "}
            <span className="italic text-brand-primary">Intuitive</span>
            <br />
            Consciousness.
          </h2>
          <p className="text-lg text-gray-500 mb-10 font-light max-w-md leading-relaxed">
            Join Laura as she explores the intersection of leadership,
            spirituality, and corporate resilience.
          </p>
          <div className="flex items-center gap-6">
            <button className="group w-16 h-16 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary transition-all duration-300 shadow-sm">
              <Play
                size={20}
                className="fill-brand-dark text-brand-dark ml-1 group-hover:fill-white group-hover:text-white transition-colors"
              />
            </button>
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                Latest Episode
              </p>
              <p className="font-serif text-lg text-brand-dark">
                The Art of Saying "No"
              </p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-white rounded-3xl opacity-50 blur-xl"></div>
          <div className="bg-white border border-gray-200 rounded-2xl p-8 relative shadow-sm">
            <div className="flex justify-between items-end mb-8 border-b border-gray-100 pb-6">
              <div>
                <h3 className="font-bold text-brand-dark text-sm uppercase tracking-widest mb-2">
                  Recent Episodes
                </h3>
                <p className="text-xs text-gray-400">Updated Weekly</p>
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
                  className={`group flex items-center gap-5 p-4 rounded-xl cursor-pointer transition-all duration-300 ${i === 0 ? "bg-gray-50 border border-gray-100" : "hover:bg-gray-50 border border-transparent"}`}
                >
                  <span className="text-xs font-bold text-gray-300 font-serif text-lg w-6">
                    0{i + 1}
                  </span>
                  <div className="flex-1">
                    <p className="font-medium text-brand-dark text-sm group-hover:text-brand-primary transition-colors">
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
