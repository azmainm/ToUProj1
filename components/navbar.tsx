"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Sparkles className="size-6 text-primary group-hover:animate-spin transition-transform" />
          <span className="text-xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient-x">
            My Sustainable Christmas
          </span>
        </Link>
        
        {/* Festive indicator */}
        <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground">
          <span className="animate-pulse">🎄</span>
          <span className="font-medium">Christmas Sustainability Guide</span>
        </div>
      </div>
    </nav>
  );
}

