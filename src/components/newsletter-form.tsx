'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { subscribeToNewsletter } from '@/app/actions';
import { useLanguage } from '@/contexts/language-provider';
import { content } from '@/lib/content';
import { ArrowRight, Loader } from 'lucide-react';

function SubmitButton() {
  const { pending } = useFormStatus();
  const { language } = useLanguage();
  const t = content[language].newsletter.form;
  
  return (
    <Button 
      type="submit" 
      disabled={pending} 
      size="lg"
      className="rounded-r-full rounded-l-none text-base font-bold group bg-accent hover:bg-accent/90 text-accent-foreground"
    >
      {pending ? (
        <Loader className="w-5 h-5 animate-spin" />
      ) : (
        <>
          {t.cta}
          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </>
      )}
    </Button>
  );
}

export function NewsletterForm() {
  const { language } = useLanguage();
  const t = content[language].newsletter.form;
  const { toast } = useToast();
  const [state, formAction] = useFormState(subscribeToNewsletter, {
    message: '',
    success: false,
  });

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? 'Success!' : 'Oops!',
        description: state.message,
        variant: state.success ? 'default' : 'destructive',
      });
    }
  }, [state, toast]);

  return (
    <form action={formAction} className="mt-8 max-w-lg mx-auto flex">
      <Input
        type="email"
        name="email"
        placeholder={t.placeholder}
        required
        className="h-14 flex-grow rounded-l-full rounded-r-none text-base border-r-0 focus:ring-0 text-foreground bg-background"
      />
      <SubmitButton />
    </form>
  );
}
