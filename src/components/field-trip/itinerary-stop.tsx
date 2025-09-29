"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MapPin, Book, ExternalLink, Info } from "lucide-react";

type ImageInfo = {
  id: string;
  hint: string;
};

type Bibliography = {
  title: string;
  url: string;
};

export type StopData = {
  stopNumber: number;
  title: string;
  location: string;
  locationName: string;
  description: string;
  imageUrls: ImageInfo[];
  bibliography: Bibliography[];
  icon: React.ReactNode;
  note?: string;
};

interface ItineraryStopProps {
  data: StopData;
}

export function ItineraryStop({ data }: ItineraryStopProps) {
  const [isLoading, setIsLoading] = useState(true);
  
  return (
    <div className="grid md:grid-cols-12 gap-8 items-start animate-fade-in-up">
      <div className="md:col-span-5 lg:col-span-4">
        <Card className="shadow-lg border-accent/30 sticky top-8">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0">{data.icon}</div>
              <div>
                <p className="text-sm font-bold text-accent">PARADA {data.stopNumber}</p>
                <CardTitle className="font-headline text-3xl">{data.title}</CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">{data.description}</p>
            {data.note && (
                <div className="flex items-start gap-3 rounded-lg border border-primary/20 bg-primary/5 p-3">
                    <Info className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-sm text-primary-foreground/80">{data.note}</p>
                </div>
            )}
            <div>
              <Button asChild variant="outline" size="sm" className="w-full">
                <Link href={data.location} target="_blank">
                  <MapPin className="mr-2 h-4 w-4" />
                  Ver en mapa: {data.locationName}
                </Link>
              </Button>
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="bibliography" className="border-b-0">
                <AccordionTrigger className="text-base font-semibold hover:no-underline">
                  <Book className="mr-2 h-5 w-5 text-accent" />
                  Bibliografía Sugerida
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 pt-2">
                    {data.bibliography.map((item, index) => (
                      <li key={index}>
                        <Button asChild variant="link" className="p-0 h-auto text-left whitespace-normal">
                          <Link href={item.url} target="_blank" className="text-muted-foreground hover:text-accent">
                            {item.title}
                            <ExternalLink className="ml-2 h-3 w-3 flex-shrink-0" />
                          </Link>
                        </Button>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>

      <div className="md:col-span-7 lg:col-span-8">
        <Carousel className="w-full" opts={{ loop: true }}>
          <CarouselContent>
            {data.imageUrls.map((img, index) => (
              <CarouselItem key={index}>
                <div className="aspect-video w-full relative overflow-hidden rounded-lg shadow-xl border-4 border-card">
                  <Image
                    src={`https://picsum.photos/seed/${img.id}/800/450`}
                    alt={`${data.title} - Imagen ${index + 1}`}
                    fill
                    data-ai-hint={img.hint}
                    className={`object-cover transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                    onLoad={() => setIsLoading(false)}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>
    </div>
  );
}