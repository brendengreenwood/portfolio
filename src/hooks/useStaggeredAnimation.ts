import { useEffect, useState } from "react";

export function useStaggeredAnimation(
  isVisible: boolean,
  itemCount: number,
  baseDelay = 0,
  staggerDelay = 0.1
) {
  const [animatedItems, setAnimatedItems] = useState<boolean[]>(
    new Array(itemCount).fill(false)
  );

  useEffect(() => {
    if (isVisible) {
      const timeouts: NodeJS.Timeout[] = [];

      animatedItems.forEach((_, index) => {
        const timeout = setTimeout(() => {
          setAnimatedItems((prev) => {
            const next = [...prev];
            next[index] = true;
            return next;
          });
        }, (baseDelay + index * staggerDelay) * 1000);

        timeouts.push(timeout);
      });

      return () => timeouts.forEach(clearTimeout);
    } else {
      setAnimatedItems(new Array(itemCount).fill(false));
    }
  }, [isVisible, itemCount, baseDelay, staggerDelay, animatedItems]);

  return animatedItems;
}
