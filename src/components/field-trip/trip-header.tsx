"use client";

interface TripHeaderProps {
  title: string;
  subtitle: string;
}

export function TripHeader({ title, subtitle }: TripHeaderProps) {
  return (
    <header className="relative h-screen flex items-center justify-center text-center overflow-hidden text-primary-foreground shadow-2xl">
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
      >
        <source
          src="https://assets.codepen.io/3364143/7b55283f-4053-4205-8cf8-76a165381625.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-20 px-4 animate-fade-in-down">
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
