'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/language-provider';
import { cn } from '@/lib/utils';
import { content } from '@/lib/content';
import { Button } from '@/components/ui/button';
import { LanguageToggle } from '@/components/language-toggle';
import { Logo } from '@/components/icons';
import { Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export function Header() {
  const { language } = useLanguage();
  const navContent = content[language].nav;

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: navContent.about },
    { href: '#lessons', label: navContent.lessons },
    { href: '#podcast', label: navContent.podcast },
    { href: '#newsletter', label: navContent.newsletter },
  ];

  const NavItems = ({ className }: { className?: string }) => (
    <nav className={cn('items-center space-x-6 hidden md:flex', className)}>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="font-medium text-sm transition-colors hover:text-primary"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'bg-background/80 shadow-md backdrop-blur-lg border-b' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-headline text-2xl font-bold group">
          <Logo className={cn('h-8 w-8', isScrolled ? 'fill-primary' : 'fill-primary-foreground')}/>
          <span className={cn(isScrolled ? 'text-primary' : 'text-primary-foreground')}>Laura Ballo</span>
        </Link>

        <div className={cn('hidden md:flex items-center gap-4', isScrolled ? 'text-foreground' : 'text-primary-foreground')}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-medium text-sm transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>
        
        <div className="flex items-center gap-4">
          <div className={cn(isScrolled ? '' : '[&_button]:text-white [&_button]:border-white/50')}>
             <LanguageToggle />
          </div>

          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className={cn(isScrolled ? '' : 'text-white hover:bg-white/10 hover:text-white')}>
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-6 pt-10">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="font-medium text-lg transition-colors hover:text-primary"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
