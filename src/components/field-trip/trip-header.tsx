"use client";

interface TripHeaderProps {
  title: string;
  subtitle: string;
}

export function TripHeader({ title, subtitle }: TripHeaderProps) {
  return (
    <header className="py-20 md:py-28 bg-gradient-to-br from-primary/80 to-accent/70 text-primary-foreground shadow-inner">
      <div className="container mx-auto px-4 text-center animate-fade-in-down">
        <h1 className="text-4xl md:text-6xl font-headline font-bold drop-shadow-md">
          {title}
        </h1>
        <p className="mt-4 text-lg md:text-xl opacity-90 drop-shadow">
          {subtitle}
        </p>
      </div>
    </header>
  );
}