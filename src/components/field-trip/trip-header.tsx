"use client";

interface TripHeaderProps {
  title: string;
  subtitle: string;
}

export function TripHeader({ title, subtitle }: TripHeaderProps) {
  return (
    <header className="relative overflow-hidden py-24 md:py-32 text-primary-foreground shadow-2xl">
       <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/70 to-accent/60"></div>
       <div className="absolute inset-0 bg-black/30 mix-blend-multiply"></div>
      <div className="container relative mx-auto px-4 text-center animate-fade-in-down">
        <h1 className="text-4xl md:text-6xl font-headline font-bold text-shadow-lg drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
          {title}
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-primary-foreground/90 drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]">
          {subtitle}
        </p>
      </div>
    </header>
  );
}

    