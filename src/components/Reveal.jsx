import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion.js";
import { useInView } from "../hooks/useInView.js";

const MAX_STAGGER = 5; // caps the delay so item 12 in a long list isn't left waiting 1s+

/**
 * Scroll-triggered entrance animation. Stamps data-reveal="<variant>"
 * and a --stagger-index custom property; the actual keyframes/
 * transitions live in src/styles/motion.css, driven purely by CSS
 * (no per-element JS timers).
 *
 * Replaces the IntersectionObserver that used to live inline in
 * ProjectPage — that one tracked revealed items in state but its
 * matching CSS had been deleted, so it ran on every scroll for zero
 * visible effect.
 */
function Reveal({
  as: Tag = "div",
  variant = "rise",
  stagger = 0,
  threshold,
  rootMargin,
  className = "",
  style,
  children,
  ...rest
}) {
  const reduced = usePrefersReducedMotion();
  const { ref, inView } = useInView({ threshold, rootMargin, disabled: reduced });
  const shown = inView || reduced;

  return (
    <Tag
      ref={ref}
      data-reveal={variant}
      className={shown ? `is-in ${className}`.trim() : className}
      style={{ "--stagger-index": Math.min(stagger, MAX_STAGGER), ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
