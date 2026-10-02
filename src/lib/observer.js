/**
 * One shared IntersectionObserver per (threshold, rootMargin) config,
 * rather than one observer per revealed element. A homepage with a
 * four-brick stack plus a dozen other reveals would otherwise spin up
 * fifteen-plus observer instances for no benefit — they'd all share
 * the same viewport anyway.
 *
 * Callbacks are kept in a WeakMap so an element removed from the DOM
 * without calling its cleanup function can't leak.
 */

const observers = new Map(); // "threshold|rootMargin" -> IntersectionObserver
const callbacks = new WeakMap(); // Element -> () => void

const DEFAULT_THRESHOLD = 0.18;
const DEFAULT_ROOT_MARGIN = "0px 0px -12% 0px";

export function observeOnce(
  el,
  onEnter,
  { threshold = DEFAULT_THRESHOLD, rootMargin = DEFAULT_ROOT_MARGIN } = {},
) {
  if (!el) return () => {};

  if (typeof IntersectionObserver === "undefined") {
    // No IO support: reveal immediately rather than leaving content hidden.
    onEnter();
    return () => {};
  }

  const key = `${threshold}|${rootMargin}`;
  let io = observers.get(key);

  if (!io) {
    io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const cb = callbacks.get(entry.target);
          io.unobserve(entry.target);
          callbacks.delete(entry.target);
          cb?.();
        }
      },
      { threshold, rootMargin },
    );
    observers.set(key, io);
  }

  callbacks.set(el, onEnter);
  io.observe(el);

  return () => {
    io.unobserve(el);
    callbacks.delete(el);
  };
}
