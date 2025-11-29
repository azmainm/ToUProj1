import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Gift, TreePine, Heart, Snowflake, Star } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/5 to-background py-24 md:py-32">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 animate-bounce-slow">
          <Snowflake className="size-8 text-primary/30" />
        </div>
        <div className="absolute top-40 right-20 animate-bounce-slow animation-delay-200">
          <Star className="size-6 text-secondary/30" />
        </div>
        <div className="absolute bottom-20 left-1/4 animate-bounce-slow animation-delay-400">
          <TreePine className="size-10 text-secondary/20" />
        </div>
        
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Sparkles className="size-4" />
              Christmas Sustainability Guide
            </div>
            
            <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient-x">
              Am I Sustainable?
            </h1>
            
            <p className="mx-auto mb-12 max-w-2xl text-lg text-muted-foreground md:text-xl">
              Celebrate the holidays mindfully and discover how your choices impact our planet
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="group">
                <Link href="/test">
                  Start the Guide
                  <Sparkles className="ml-2 size-4 group-hover:animate-spin" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#about">
                  Learn More
                  <Gift className="ml-2 size-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2 text-sm font-medium text-secondary">
                <Heart className="size-4" />
                About This Guide
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Sustainable Celebrations
              </h2>
            </div>
            
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 md:p-12">
                <div className="space-y-6 text-lg leading-relaxed">
                  <p>
                    The holidays. A time of indulgence, kicking back and enjoying family friends and some free time. 
                    A time for partying and perhaps some excessive spending too…?
                  </p>
                  
                  <p className="text-muted-foreground">
                    Caught up in the moment sometimes we forget about how the choices we make or the things we do 
                    can have an effect on the wider planet. That's why we've created this 'Micro Sustainability 
                    Impact Guide' (Xmas version) to help guide you to enjoying this time whilst also living sustainably.
                  </p>
                </div>
                
                <div className="mt-8 flex flex-wrap gap-4 justify-center">
                  <div className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                    <TreePine className="size-4" />
                    Eco-Friendly
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2 text-sm font-medium text-secondary">
                    <Gift className="size-4" />
                    Mindful Giving
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                    <Heart className="size-4" />
                    Sustainable Living
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-secondary/10 via-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
              Ready to see how sustainable you are?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Take our interactive guide to discover your holiday sustainability score and learn 
              how to make this festive season better for our planet.
            </p>
            <Button asChild size="lg" className="text-lg h-14 px-8 group">
              <Link href="/test">
                Take the Test Now
                <Sparkles className="ml-2 size-5 group-hover:animate-spin" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t bg-gradient-to-br from-card/80 via-secondary/5 to-primary/5 backdrop-blur-sm py-12">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-3">
              <TreePine className="size-6 text-secondary animate-bounce-slow" />
              <Sparkles className="size-5 text-primary animate-pulse" />
              <Gift className="size-6 text-primary animate-bounce-slow animation-delay-200" />
            </div>
            
            <div>
              <p className="text-sm text-muted-foreground mb-2">
                © 2025 ToU MsC SIT Group
              </p>
              <div className="text-sm text-muted-foreground">
                <p className="font-medium mb-2 text-foreground">Created with 💚 by:</p>
                <p className="leading-relaxed">
                  Hristina Bojkova, Robin Rabea Wirth, Azmain Morshed,<br />
                  Lins Karnes, Kevin Jimenez Vergara
                </p>
              </div>
            </div>
            
            <div className="pt-4 border-t border-border/50">
              <p className="text-xs text-muted-foreground italic">
                Making the holidays sustainable, one choice at a time 🌍✨
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
