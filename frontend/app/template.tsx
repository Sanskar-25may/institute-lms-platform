"use client";

import { useEffect, useState } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const [opacity, setOpacity] = useState(0);
  const [translateY, setTranslateY] = useState(10);

  useEffect(() => {
    // Trigger the animation a split second after the component mounts
    setOpacity(1);
    setTranslateY(0);
  }, []);

  return (
    <div 
      style={{ 
        opacity, 
        transform: `translateY(${translateY}px)`,
        transition: "opacity 0.4s ease-out, transform 0.4s ease-out" 
      }}
    >
      {children}
    </div>
  );
}