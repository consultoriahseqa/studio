
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useStopModal } from "@/hooks/use-stop-modal.tsx";

type ImageInfo = {
  id: string;
  hint: string;
};

export type StopData = {
  stopNumber: number;
  title: string;
  note?: string;
  location: string;
  locationName: string;
  description: string;
  fullDescription: string;
  imageUrls: ImageInfo[];
  videoUrl?: string;
  icon: React.ReactNode;
  bibliography: { title: string; url: string }[];
};

interface ItinerarySectionProps {
  stop: StopData;
  reverse?: boolean;
}

export function ItinerarySection({ stop, reverse = false }: ItinerarySectionProps) {
  const { onOpen } = useStopModal();
  
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  // Helper to check if a string is a full URL
  const isFullUrl = (url: string) => url.startsWith('http');

  return (
    <section id={`stop-${stop.stopNumber}`} className="relative max-w-6xl mx-auto animate-fade-in-up">
      <div className={cn("grid md:grid-cols-2 gap-8 md:gap-12 items-center")}>
        <div className={cn("relative order-1", reverse && "md:order-2")}>
          <Carousel 
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {stop.imageUrls.map((img, index) => (
                <CarouselItem key={index}>
                  <div className="aspect-video relative rounded-lg overflow-hidden shadow-lg border border-border bg-black">
                    <Image
                      src={isFullUrl(img.id) ? img.id : `https://picsum.photos/seed/${img.id}/800/450`}
                      alt={`${stop.title} - imagen ${index + 1}`}
                      fill
                      className="object-contain"
                      data-ai-hint={img.hint}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </CarouselItem>
              ))}
               {stop.videoUrl && (
                <CarouselItem>
                  <div className="aspect-video relative rounded-lg overflow-hidden shadow-lg border border-border bg-black">
                     <video
                        src={stop.videoUrl}
                        className="w-full h-full object-contain"
                        controls
                        playsInline
                        loop
                        autoPlay
                        muted
                      />
                  </div>
                </CarouselItem>
              )}
            </CarouselContent>
            <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
          </Carousel>
        </div>

        <div className={cn("relative order-2", reverse && "md:order-1")}>
          <Card className="bg-card/80 backdrop-blur-sm shadow-xl border-primary/20">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-primary text-primary-foreground rounded-full h-14 w-14 flex items-center justify-center -mt-8 shadow-lg">
                  {React.cloneElement(stop.icon as React.ReactElement, { className: "h-7 w-7" })}
                </div>
                <div className="flex-1">
                  <CardDescription>Parada {stop.stopNumber}</CardDescription>
                  <CardTitle className="font-headline text-2xl mt-1">{stop.title}</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                {stop.description}
              </p>
              {stop.note && (
                <p className="text-sm text-accent-foreground bg-accent/20 p-3 rounded-md mb-4 border border-accent/30">{stop.note}</p>
              )}
              <div className="flex flex-col sm:flex-row gap-2">
                 <Button onClick={() => onOpen(stop)}>
                    Ver Detalles
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" asChild>
                  <Link href={stop.location} target="_blank">
                    <MapPin className="mr-2 h-4 w-4" />
                    Ver en mapa
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

    