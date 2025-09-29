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

interface ImageSliderProps {
  stops: Stop[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ stops }) => {
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

  return (
    <div className="slider-container">
      <div className="slide" ref={slideRef}>
        {stops.map((stop, index) => (
          <div
            key={stop.stopNumber}
            className="item"
            style={{
              backgroundImage: `url(https://picsum.photos/seed/${stop.imageUrls[0].id}/800/600)`,
            }}
          >
            <div className="content">
              <div className="name">{stop.title}</div>
              <div className="des">{stop.description}</div>
              <Link href="#">
                <button>See More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="slider-button">
        <button className="prev" onClick={handlePrevClick}>
          ◁
        </button>
        <button className="next" onClick={handleNextClick}>
          ▷
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
