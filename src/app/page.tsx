import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ArrowRight, Mic, Rss, Twitter, Linkedin, Youtube } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { NewsletterForm } from '@/components/newsletter-form';
import LeadershipCoach from '@/components/leadership-coach';
import { InteractiveWrapper } from '@/components/interactive-wrapper';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { content } from '@/lib/content';

// Mock podcast data, in a real app this would be fetched from an RSS feed.
const podcastEpisodes = [
  {
    id: 1,
    title: 'The Art of Resilient Leadership',
    description: 'Explore how to build resilience in yourself and your team to navigate challenges effectively.',
    duration: '45 min',
    image: PlaceHolderImages.find(p => p.id === 'podcast-1'),
  },
  {
    id: 2,
    title: 'Communicating with Impact',
    description: 'Learn the secrets of persuasive communication that inspires action and drives results.',
    duration: '38 min',
    image: PlaceHolderImages.find(p => p.id === 'podcast-2'),
  },
  {
    id: 3,
    title: 'Fostering Innovation in Your Organization',
    description: 'A deep dive into creating a culture where creativity and innovation can flourish.',
    duration: '52 min',
    image: PlaceHolderImages.find(p => p.id === 'podcast-3'),
  },
];

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-1');

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative w-full h-[80vh] min-h-[600px] overflow-hidden">
          <InteractiveWrapper>
            <div className="absolute inset-0">
              {heroImage && (
                <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  fill
                  className="object-cover"
                  priority
                  data-ai-hint={heroImage.imageHint}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
              <h1 className="font-headline text-5xl md:text-7xl font-bold !leading-tight tracking-tight drop-shadow-lg">
                {content.en.hero.title}
              </h1>
              <p className="mt-4 max-w-2xl text-lg md:text-xl text-slate-200 drop-shadow-md">
                {content.en.hero.subtitle}
              </p>
              <Button size="lg" className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full text-base font-bold group">
                {content.en.hero.cta} <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </InteractiveWrapper>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 lg:py-32">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-headline text-4xl font-bold">{content.en.about.title}</h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">{content.en.about.text}</p>
          </div>
        </section>


        {/* Lessons Section */}
        <section id="lessons" className="py-20 lg:py-24 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-headline text-4xl font-bold">{content.en.lessons.title}</h2>
                <p className="mt-4 text-lg text-muted-foreground">{content.en.lessons.description}</p>
                <Button asChild size="lg" className="mt-8 rounded-full font-bold group">
                  <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                    {content.en.lessons.cta} <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>
              <div className="flex justify-center">
                <Card className="glassmorphism w-full max-w-md">
                  <CardHeader>
                    <CardTitle className="font-headline text-2xl">{content.en.lessons.cardTitle}</CardTitle>
                    <CardDescription>{content.en.lessons.cardDescription}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {content.en.lessons.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Podcast Section */}
        <section id="podcast" className="py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-headline text-4xl font-bold">{content.en.podcast.title}</h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">{content.en.podcast.description}</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {podcastEpisodes.map(episode => (
                <Card key={episode.id} className="overflow-hidden flex flex-col group transition-all hover:shadow-2xl hover:-translate-y-2">
                  <div className="relative h-48 w-full">
                    {episode.image && (
                      <Image
                        src={episode.image.imageUrl}
                        alt={episode.image.description}
                        fill
                        className="object-cover"
                        data-ai-hint={episode.image.imageHint}
                      />
                    )}
                  </div>
                  <CardHeader>
                    <CardTitle className="font-headline text-xl">{episode.title}</CardTitle>
                    <CardDescription className="flex items-center gap-2 text-sm pt-2">
                      <Rss className="w-4 h-4" />
                      <span>{episode.duration}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{episode.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="link" className="p-0 font-bold group">
                      Listen Now <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section id="newsletter" className="py-20 lg:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <Mic className="w-12 h-12 mx-auto mb-4" />
            <h2 className="font-headline text-4xl font-bold">{content.en.newsletter.title}</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg opacity-90">{content.en.newsletter.description}</p>
            <NewsletterForm />
          </div>
        </section>
      </main>
      <Footer />
      <LeadershipCoach />
    </div>
  );
}
