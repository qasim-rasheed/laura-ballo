import Link from 'next/link';
import { Logo } from '@/components/icons';
import { content } from '@/lib/content';
import { Twitter, Linkedin, Youtube } from 'lucide-react';

export function Footer() {
  const currentContent = content.en; // Footer content is often not translated, but can be
  
  return (
    <footer className="bg-secondary">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Logo className="h-8 w-8 fill-primary" />
            <span className="font-headline text-2xl font-bold text-primary">Laura Ballo</span>
          </div>
          <div className="flex gap-4">
            <Link href="#" aria-label="Twitter">
              <Twitter className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href="#" aria-label="YouTube">
              <Youtube className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-muted-foreground text-sm">
          <p>{currentContent.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
