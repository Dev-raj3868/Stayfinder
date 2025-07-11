
import React, { useEffect, useRef, useState } from 'react';

interface CardAnimationProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

const CardAnimation = ({ children, delay = 0, className = '' }: CardAnimationProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className={`fade-in-card ${isVisible ? 'visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export default CardAnimation;
