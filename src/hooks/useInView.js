import { useEffect, useRef, useState } from "react";
import { observeOnce } from "../lib/observer.js";

/**
 * Reports whether the returned ref's element has entered the viewport,
 * once. Pass `disabled` (e.g. from usePrefersReducedMotion) to skip
 * observation entirely and report "in view" immediately.
 *
 * Returns an object rather than a tuple so call sites read
 * self-documenting: `const { ref, inView } = useInView();`
 */
export function useInView({ threshold, rootMargin, disabled = false } = {}) {
  const ref = useRef(null);
  // Derived directly from `disabled` at mount rather than set from an
  // effect — motion.css's prefers-reduced-motion block independently
  // forces the final state regardless of this value, so this only
  // needs to cover the initial render, not react live to the OS
  // setting changing mid-session.
  const [inView, setInView] = useState(disabled);

  useEffect(() => {
    if (disabled) return undefined;

    const el = ref.current;
    if (!el) return undefined;

    return observeOnce(el, () => setInView(true), { threshold, rootMargin });
  }, [disabled, threshold, rootMargin]);

  return { ref, inView };
}
