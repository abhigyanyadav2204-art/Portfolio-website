import { useEffect } from "react";

/**
 * Sets a unique document title + meta description per route. Plain DOM
 * writes rather than a helmet-style library — four routes don't need
 * a dependency for this, and it restores the previous title/description
 * on unmount so navigating away never leaves stale metadata behind.
 */
export function useDocumentMeta({ title, description }) {
  useEffect(() => {
    const previousTitle = document.title;
    const descriptionTag = document.querySelector('meta[name="description"]');
    const previousDescription = descriptionTag?.getAttribute("content") ?? null;

    if (title) document.title = title;
    if (description && descriptionTag) {
      descriptionTag.setAttribute("content", description);
    }

    return () => {
      document.title = previousTitle;
      if (previousDescription !== null && descriptionTag) {
        descriptionTag.setAttribute("content", previousDescription);
      }
    };
  }, [title, description]);
}
