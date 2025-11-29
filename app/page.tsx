"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Gift, TreePine, Heart, Snowflake, Star, Mail, Copy } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { toast } from "sonner";

const teamMembers = [
  { name: "Azmain Morshed", email: "azmainmorshed03@gmail.com" },
  { name: "Lins Karnes", email: "azmainmorshed03@gmail.com" },
  { name: "Hristina Bojkova", email: "azmainmorshed03@gmail.com" },
  { name: "Robin Rabea Wirth", email: "azmainmorshed03@gmail.com" },
  { name: "Kevin Jimenez Vergara", email: "azmainmorshed03@gmail.com" },
];

export default function Home() {
  const handleCopyEmail = (email: string, name: string) => {
    navigator.clipboard.writeText(email);
    toast.success(`Copied ${name}'s email!`, {
      description: email,
    });
  };
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
            
            {/* Logo and Title Side by Side */}
            <div className="mb-6 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
              <Image 
                src="/logo.png" 
                alt="Am I Sustainable Logo" 
                width={160}
                height={120}
                className="h-20 w-auto md:h-24 object-contain animate-fade-in"
                priority
              />
              <h1 className="text-5xl font-bold tracking-tight md:text-7xl bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient-x">
                Am I Sustainable?
              </h1>
            </div>
            
            <p className="mx-auto mb-12 max-w-3xl text-lg text-muted-foreground md:text-xl px-4">
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
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-foreground">
                Sustainable Celebrations
              </h2>
            </div>
            
            <Card className="relative overflow-hidden border-2 border-border/50 hover:border-primary/30 hover:shadow-2xl transition-all duration-300 group">
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Decorative corner elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-secondary/10 to-transparent rounded-tr-full" />
              
              <CardContent className="relative p-8 md:p-12">
                <div className="space-y-6 text-lg leading-relaxed">
                  <p className="text-foreground font-medium first-letter:text-4xl first-letter:font-bold first-letter:text-primary first-letter:mr-1 first-letter:float-left">
                    The holidays. A time of indulgence, kicking back and enjoying family friends and some free time. 
                    A time for partying and perhaps some excessive spending too…?
                  </p>
                  
                  <p className="text-muted-foreground pl-4 border-l-4 border-secondary/30">
                    Caught up in the moment sometimes we forget about how the choices we make or the things we do 
                    can have an effect on the wider planet. That&apos;s why we&apos;ve created this &apos;Micro Sustainability 
                    Impact Guide&apos; (Xmas version) to help guide you to enjoying this time whilst also living sustainably.
                  </p>
                </div>
                
                <div className="mt-10 flex flex-wrap gap-4 justify-center">
                  <div className="group/tag flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 px-5 py-2.5 text-sm font-medium text-primary border border-primary/20 hover:border-primary/40 hover:shadow-md transition-all cursor-default">
                    <TreePine className="size-4 group-hover/tag:scale-110 transition-transform" />
                    <span>Eco-Friendly</span>
                  </div>
                  <div className="group/tag flex items-center gap-2 rounded-full bg-gradient-to-r from-secondary/10 to-secondary/5 px-5 py-2.5 text-sm font-medium text-secondary border border-secondary/20 hover:border-secondary/40 hover:shadow-md transition-all cursor-default">
                    <Gift className="size-4 group-hover/tag:scale-110 transition-transform" />
                    <span>Mindful Giving</span>
                  </div>
                  <div className="group/tag flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 px-5 py-2.5 text-sm font-medium text-primary border border-primary/20 hover:border-primary/40 hover:shadow-md transition-all cursor-default">
                    <Heart className="size-4 group-hover/tag:scale-110 transition-transform" />
                    <span>Sustainable Living</span>
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
            <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl text-foreground">
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
                © 2025 Tomorrow University of Applied Sciences MsC Sustainability, Innovation & Technology Group
              </p>
              <div className="text-sm text-muted-foreground">
                <p className="font-medium mb-2 text-foreground">Created with 💚 by:</p>
                <p className="leading-relaxed">
                  Hristina Bojkova, Robin Rabea Wirth, Azmain Morshed,<br />
                  Lins Karnes, Kevin Jimenez Vergara
                </p>
              </div>
            </div>
            
            {/* Contact Us Button with Hover Card */}
            <div className="flex flex-col items-center gap-2 pt-2">
              <HoverCard openDelay={0} closeDelay={100}>
                <HoverCardTrigger asChild>
                  <Button
                    size="sm"
                    className="group bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-lg hover:shadow-xl transition-all"
                  >
                    <Mail className="mr-2 size-4" />
                    Contact Us
                    <Sparkles className="ml-2 size-3 opacity-70" />
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80" align="center">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 pb-3 border-b">
                      <div className="p-2 rounded-full bg-primary/10">
                        <Mail className="size-4 text-primary" />
                      </div>
                      <h4 className="font-bold text-base">Team Contacts</h4>
                    </div>
                    <div className="space-y-3">
                      {teamMembers.map((member, index) => (
                        <div key={index} className="flex items-center justify-between gap-2 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                          <div className="flex flex-col gap-1 flex-1 min-w-0">
                            <p className="text-sm font-medium text-foreground">
                              {member.name}
                            </p>
                            <a
                              href={`mailto:${member.email}`}
                              className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 truncate"
                            >
                              <Mail className="size-3 flex-shrink-0" />
                              <span className="truncate">{member.email}</span>
                            </a>
                          </div>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-8 w-8 p-0 flex-shrink-0 hover:bg-primary/10 hover:text-primary"
                            onClick={() => handleCopyEmail(member.email, member.name)}
                          >
                            <Copy className="size-3.5" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
              <p className="text-xs text-muted-foreground/60">
                Click to see contact details
              </p>
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
