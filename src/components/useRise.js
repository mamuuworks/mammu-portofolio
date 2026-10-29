import { useEffect } from "react";

// Adds .risen to [data-rise] elements as they enter the viewport.
export function useRise(deps = []) {
  useEffect(() => {
    const els = document.querySelectorAll("[data-rise]:not(.risen)");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("risen");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.15 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, deps);
}
