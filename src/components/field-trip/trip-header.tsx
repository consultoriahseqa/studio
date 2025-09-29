"use client";

import React, { useRef } from 'react';
import Link from 'next/link';

type ImageInfo = {
  id: string;
  hint: string;
};

type Stop = {
  stopNumber: number;
  title: string;
  description: string;
  imageUrls: ImageInfo[];
};

interface TripHeaderProps {
  stops: Stop[];
}

export function TripHeader({ stops }: TripHeaderProps) {
  const slideRef = useRef<HTMLDivElement>(null);

  const handleNextClick = () => {
    const slide = slideRef.current;
    if (slide) {
      const items = slide.querySelectorAll('.item');
      if (items.length > 0) {
        slide.appendChild(items[0]);
      }
    }
  };

  const handlePrevClick = () => {
    const slide = slideRef.current;
    if (slide) {
      const items = slide.querySelectorAll('.item');
      if (items.length > 0) {
        slide.prepend(items[items.length - 1]);
      }
    }
  };

  const sliderStops = stops.slice(0, 4);

  return (
     <header className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background">
        <div className="slider-container">
            <div className="slide" ref={slideRef}>
                {sliderStops.map((stop) => (
                <div
                    key={stop.stopNumber}
                    className="item"
                    style={{
                    backgroundImage: `url(https://picsum.photos/seed/${stop.imageUrls[0].id}/800/600)`,
                    }}
                    data-ai-hint={stop.imageUrls[0].hint}
                >
                    <div className="content">
                    <div className="name">{stop.title}</div>
                    <div className="des">{stop.description}</div>
                     <Link href={`#stop-${stop.stopNumber}`}>
                        <button>Ver Más</button>
                    </Link>
                    </div>
                </div>
                ))}
            </div>
            <div className="slider-button">
                <button className="prev" onClick={handlePrevClick}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                </button>
                <button className="next" onClick={handleNextClick}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </button>
            </div>
        </div>
     </header>
  );
};
