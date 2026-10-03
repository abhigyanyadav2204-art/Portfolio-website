import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

/**
 * Renders nothing. On every route change: if the new URL carries a
 * hash (nav links are rooted at "/#about" etc. so they work from any
 * page), scrolls that section into view; otherwise scrolls to top and
 * moves focus to <main id="main"> so keyboard/SR users aren't left
 * focused on a header link that no longer makes sense after
 * navigating away.
 *
 * The "skip this on first mount" guard tracks the last-processed
 * location key rather than a plain `hasRun` boolean. A boolean flag
 * flips to true on the very first effect call and stays true — but
 * React 19 StrictMode deliberately invokes effects twice in dev to
 * surface exactly this bug: the *second* call then sees the flag
 * already flipped and runs the "real" branch immediately on load,
 * silently moving focus onto <main> before the user has pressed a
 * key. That corrupts the whole tab sequence — Tab from a fresh page
 * load jumps straight past the skip link, the logo and every nav
 * link, landing wherever <main>'s first focusable child happens to
 * be. Comparing against the last key the effect actually processed
 * is idempotent across repeated calls with unchanged deps, so the
 * StrictMode replay is a no-op while a genuine navigation (deps
 * change) is still handled.
 */
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const lastKey = useRef(null);

  // The browser's own scroll restoration ("auto") fights this component:
  // on a pushState navigation it can still reapply whatever scrollY the
  // previous history entry happened to be at, racing our own
  // window.scrollTo(0, 0) below and sometimes winning (the symptom was
  // exactly this — open a case study, scroll partway down, click to the
  // next one via CaseNav, and it would render already scrolled to that
  // same position instead of the top). Switching to "manual" makes this
  // component the only thing that ever moves scroll position.
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    const key = `${pathname}${hash}`;
    if (lastKey.current === key) return; // unchanged — real nav or a StrictMode replay

    const isInitialRun = lastKey.current === null;
    lastKey.current = key;
    if (isInitialRun) return; // don't fight the browser's own restoration on first load

    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView({ block: "start" });
      return;
    }

    // Explicit `behavior: "instant"` rather than the bare (x, y) form:
    // html has `scroll-behavior: smooth` globally (for anchor links), and
    // that two-number form inherits it, animating the reset. A second
    // quick navigation fired mid-animation could then land wherever the
    // first scroll happened to be interrupted instead of at the top.
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    document.getElementById("main")?.focus();
  }, [pathname, hash]);

  return null;
}

export default ScrollToTop;
