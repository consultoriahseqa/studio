
"use client";

import { useStopModal } from "@/hooks/use-stop-modal.tsx";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import { Book, Link as LinkIcon, MapPin, Youtube } from "lucide-react";
import { Button } from "../ui/button";

// Basic markdown to HTML renderer
const MarkdownRenderer = ({ text }: { text: string }) => {
  const html = text
    .split('\n\n')
    .map(paragraph => {
        // Bold
        paragraph = paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        // Italic
        paragraph = paragraph.replace(/\*(.*?)\*/g, '<em>$1</em>');
        return `<p class="mb-4 break-inside-avoid">${paragraph}</p>`;
    })
    .join('');
  
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};


export function FullStopModal() {
  const { isOpen, onClose, stop } = useStopModal();
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  if (!stop) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full h-[90vh] flex flex-col p-0">
        <ScrollArea className="h-full">
          <div className="p-6 md:p-8">
            <DialogHeader className="mb-6 text-left">
              <DialogTitle className="font-headline text-3xl md:text-4xl text-primary mb-2">
                {stop.title}
              </DialogTitle>
              <DialogDescription className="flex items-center gap-2 text-base">
                <MapPin className="h-4 w-4" /> {stop.locationName}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-8">
                <div className="prose prose-stone dark:prose-invert max-w-none text-foreground/90 text-justify md:columns-2 md:gap-8">
                   <MarkdownRenderer text={stop.fullDescription} />
                </div>

                <div className="space-y-8 pt-8 border-t">
                    <Carousel 
                    plugins={[plugin.current]}
                    className="w-full"
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                    >
                    <CarouselContent>
                        {stop.imageUrls.map((img, index) => (
                        <CarouselItem key={index}>
                            <div className="aspect-video relative rounded-lg overflow-hidden border">
                            <Image
                                src={img.id}
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
                                <div className="aspect-video relative rounded-lg overflow-hidden bg-black">
                                    <video
                                        src={stop.videoUrl}
                                        className="w-full h-full object-contain"
                                        controls
                                        playsInline
                                    />
                                </div>
                            </CarouselItem>
                        )}
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
                    <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
                    </Carousel>
                    
                    {stop.bibliography.length > 0 && (
                    <div>
                        <h3 className="font-headline text-xl flex items-center gap-2 mb-3">
                            <Book className="h-5 w-5 text-primary" />
                            Bibliografía y Recursos
                        </h3>
                        <ul className="space-y-2">
                        {stop.bibliography.map((item, index) => (
                            <li key={index}>
                            <Button variant="link" asChild className="p-0 h-auto font-normal text-left">
                                    <Link href={item.url} target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                                        <LinkIcon className="h-4 w-4 mr-2 flex-shrink-0" />
                                        {item.title}
                                    </Link>
                            </Button>
                            </li>
                        ))}
                        </ul>
                    </div>
                    )}
                </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
