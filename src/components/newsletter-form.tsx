"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export default function NewsletterForm() {
  return (
    <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
      <input
        type="email"
        placeholder="Enter your email"
        className="flex-1 px-6 py-4 bg-muted/20 border border-border rounded-none focus:outline-none focus:border-brand-primary transition-colors text-sm"
        required
      />
      <button
        type="submit"
        className="px-8 py-4 bg-brand-primary text-white text-sm font-bold uppercase tracking-widest hover:bg-brand-dark transition-colors duration-300 flex items-center justify-center gap-2"
      >
        Subscribe <ArrowRight size={16} />
      </button>
    </form>
  );
}
