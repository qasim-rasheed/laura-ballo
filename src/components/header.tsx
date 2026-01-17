"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useRouter, useParams } from "next/navigation";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();

  const currentLang = (params?.lang as string) || "en";

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newLang = currentLang === "en" ? "fr" : "en";
    // Replace the language segment in the current path
    const newPath = pathname.replace(`/${currentLang}`, `/${newLang}`);
    router.push(newPath);
  };

  const navLinks = {
    en: {
      about: "About",
      blog: "Blog",
      podcast: "Podcast",
      book: "Book Consultation",
    },
    fr: {
      about: "À Propos",
      blog: "Blog",
      podcast: "Podcast",
      book: "Réserver",
    },
  };

  const t = navLinks[currentLang as keyof typeof navLinks] || navLinks.en;

  const isActive = (path: string) => pathname === `/${currentLang}${path}`;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${scrolled ? "bg-white/95 backdrop-blur-sm border-gray-200 py-4 shadow-sm" : "bg-white border-transparent py-6"}`}
    >
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        <Link
          href={`/${currentLang}`}
          className="font-serif text-2xl font-bold tracking-tight text-brand-dark"
        >
          Laura<span className="text-brand-primary">Ballo</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-xs font-bold tracking-widest uppercase text-gray-500">
          <Link
            href={`/${currentLang}/about`}
            className={`transition-colors hover:text-brand-primary ${isActive("/about") ? "text-brand-primary" : ""}`}
          >
            {t.about}
          </Link>
          <Link
            href={`/${currentLang}/blog`}
            className={`transition-colors hover:text-brand-primary ${isActive("/blog") ? "text-brand-primary" : ""}`}
          >
            {t.blog}
          </Link>
          <Link
            href={`/${currentLang}/podcast`}
            className={`transition-colors hover:text-brand-primary ${isActive("/podcast") ? "text-brand-primary" : ""}`}
          >
            {t.podcast}
          </Link>

          <div className="h-4 w-px bg-gray-300"></div>

          {/* Language Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-2 hover:bg-gray-100 text-xs font-bold uppercase tracking-widest"
          >
            <Globe size={14} />
            {currentLang === "en" ? "FR" : "EN"}
          </Button>
        </div>

        <div className="hidden md:block">
          <button className="px-8 py-3 bg-brand-dark text-white text-xs font-bold uppercase tracking-widest hover:bg-brand-primary transition-colors duration-300">
            {t.book}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
