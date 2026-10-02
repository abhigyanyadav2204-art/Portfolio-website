import { useEffect } from "react";

/**
 * Writes the page's scroll progress (0-1) to `--progress` on the root
 * element, rAF-throttled. Deliberately does not hold progress in React
 * state — this fires on every scroll frame, and a custom-property
 * write costs nothing compared to a re-render on every one of them.
 */
export function useScrollProgress() {
  useEffect(() => {
    const root = document.documentElement;
    let ticking = false;

    const write = () => {
      const scrollTop = window.scrollY;
      const max = root.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, Math.max(0, scrollTop / max)) : 0;
      root.style.setProperty("--progress", String(progress));
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(write);
    };

    write();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
}
