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

    window.scrollTo(0, 0);
    document.getElementById("main")?.focus();
  }, [pathname, hash]);

  return null;
}

export default ScrollToTop;
