import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerFadeIn } from "@/lib/gsap-utils";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (containerRef.current) {
      const elements = containerRef.current.children;
      fadeInUp(containerRef.current);
      staggerFadeIn([...elements], 0.2);
    }
  }, []);

  const handleClick = () => {
    toast({
      title: "Hello!",
      description: "This is a toast notification using Shadcn/ui.",
    });
  };

  return (
    <div ref={containerRef} className="space-y-8 text-center">
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
        Welcome to Your App
      </h1>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        A modern application built with React, Vite, GSAP, and Shadcn/ui.
        Experience smooth animations and beautiful UI components.
      </p>
      <div className="flex justify-center gap-4">
        <Button size="lg" onClick={handleClick}>
          Try Toast
        </Button>
        <Button size="lg" variant="outline">
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default Index;