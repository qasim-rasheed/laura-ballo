'use client';

import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/language-provider';
import { cn } from '@/lib/utils';

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="relative w-20 h-9 rounded-full p-1 bg-background/20 backdrop-blur-sm border-white/20 border text-primary-foreground"
    >
      <span className={cn(
        "absolute left-1 top-1 flex h-7 w-7 items-center justify-center rounded-full bg-white text-primary transition-transform duration-300 ease-in-out",
        language === 'fr' && "translate-x-10"
      )}>
        {language.toUpperCase()}
      </span>
      <span className="absolute left-4">EN</span>
      <span className="absolute right-4">FR</span>
    </Button>
  );
}
