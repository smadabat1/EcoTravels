import { useEffect, useState, useRef } from "react";

export default function useScrollAwareHeader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isSticky, setIsSticky] = useState(false);
  const prevScrollPos = useRef(0);

  useEffect(() => {
    prevScrollPos.current = window.scrollY;

    const handleScroll = () => {
      // Use requestAnimationFrame to smooth out updates
      requestAnimationFrame(() => {
        const currentScrollPos = window.scrollY;

        // Set sticky state based on scroll position
        if (currentScrollPos > 50) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }

        // Calculate scroll direction
        const isScrollingUp = prevScrollPos.current > currentScrollPos;

        // Threshold to reduce sensitivity
        const scrollDifference = Math.abs(prevScrollPos.current - currentScrollPos);

        // Update visibility only for significant scroll changes or at top of page
        if (scrollDifference > 5 || currentScrollPos < 200) {
          setIsVisible(isScrollingUp || currentScrollPos < 200);
        }

        // Save current scroll position for next comparison
        prevScrollPos.current = currentScrollPos;
        //ticking.current = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { isVisible, isSticky };
}
