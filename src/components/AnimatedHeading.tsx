import React, { useState, useEffect } from 'react';

export default function AnimatedHeading() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasInitialAnimationPlayed, setHasInitialAnimationPlayed] = useState(false);

  useEffect(() => {
    if (!hasInitialAnimationPlayed) {
      setIsAnimating(true);
      setHasInitialAnimationPlayed(true);
      setTimeout(() => setIsAnimating(false), 2000);
    }
  }, [hasInitialAnimationPlayed]);

  const handleClick = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 2000);
    }
  };

  return (
    <h1 
      onClick={handleClick}
      className={`text-6xl font-bold tracking-tight mb-6 text-gray-700 cursor-pointer select-none origin-center
        ${isAnimating ? 'animate-[spin-center_0.5s_ease-in-out,bounce_0.5s_ease-in-out_0.5s_3]' : ''}
      `}
    >
      Yo!
    </h1>
  );
}