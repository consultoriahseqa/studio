// components/BackgroundAudio.tsx
"use client";

import { useEffect, useRef } from 'react';

const BackgroundAudio = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // You can add logic here to play/pause based on user interaction if needed
    // For now, it will just autoplay if the browser allows it.
  }, []);

  return (
    <audio ref={audioRef} autoPlay loop>
      <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
};

export default BackgroundAudio;
