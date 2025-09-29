
"use client";

import { create } from 'zustand';

type StopData = {
  stopNumber: number;
  title: string;
  note?: string;
  location: string;
  locationName: string;
  description: string;
  fullDescription: string;
  imageUrls: { id: string; hint: string }[];
  videoUrl?: string;
  icon: React.ReactNode;
  bibliography: { title: string; url: string }[];
};

interface StopModalStore {
  isOpen: boolean;
  stop: StopData | null;
  onOpen: (stop: StopData) => void;
  onClose: () => void;
}

const useStopModalStore = create<StopModalStore>((set) => ({
  isOpen: false,
  stop: null,
  onOpen: (stop) => set({ isOpen: true, stop }),
  onClose: () => set({ isOpen: false, stop: null }),
}));

// This is a provider component and a hook to use in client components
import { useContext, createContext, useState, useEffect } from 'react';

const StopModalContext = createContext<StopModalStore | null>(null);

export const StopModalProvider = ({ children }: { children: React.ReactNode }) => {
  const store = useStopModalStore();
  // Ensure store is ready on the client
  const [isHydrated, setIsHydrated] = useState(false);
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <StopModalContext.Provider value={isHydrated ? store : null}>
      {children}
    </StopModalContext.Provider>
  );
};

export const useStopModal = () => {
  const context = useContext(StopModalContext);
  if (context === null) {
    // This fallback is for server components or components outside the provider
    // It will not have state, but it will prevent crashes.
    return {
      isOpen: false,
      stop: null,
      onOpen: () => console.error("Modal can only be opened on the client side."),
      onClose: () => {},
    };
  }
  return context;
};
