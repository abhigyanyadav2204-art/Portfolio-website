import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { site } from "../data/site.js";
import { useBodyScrollLock } from "../hooks/useBodyScrollLock.js";
import Button from "./Button.jsx";
import "./SiteHeader.css";

function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPinned, setIsPinned] = useState(false);
  const toggleRef = useRef(null);

  const closeMenu = () => setIsMenuOpen(false);

  useBodyScrollLock(isMenuOpen);

  // A hairline + scrim appears once the page has scrolled past the
  // hero, so the header reads as "docked" rather than floating on
  // every page regardless of content.
  useEffect(() => {
    const onScroll = () => setIsPinned(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Escape closes the mobile menu and returns focus to the toggle —
  // without this, a keyboard user who opens the menu has no way back
  // to the trigger except tabbing through every nav link first.
  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        closeMenu();
        toggleRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen]);

  return (
    <header id="top" className={`site-header${isPinned ? " is-pinned" : ""}`}>
      <div className="site-header__bar container container--wide">
        <Link to="/" className="site-header__logo" onClick={closeMenu}>
          <span className="site-header__logo-stud" aria-hidden="true" />
          {site.wordmark}
        </Link>

        <button
          ref={toggleRef}
          type="button"
          className={`site-header__toggle${isMenuOpen ? " is-open" : ""}`}
          aria-label="Menu"
          aria-controls="primary-navigation"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <nav
          id="primary-navigation"
          className={`site-header__nav${isMenuOpen ? " is-open" : ""}`}
          aria-label="Primary"
        >
          {site.nav.map((item) =>
            item.to ? (
              <Link key={item.label} to={item.to} onClick={closeMenu}>
                {item.label}
              </Link>
            ) : (
              <Link key={item.label} to={item.href} onClick={closeMenu}>
                {item.label}
              </Link>
            ),
          )}

          <Button
            href={site.resume.href}
            pending={!site.resume.ready}
            variant="outline"
            size="md"
            className="site-header__resume"
            onClick={closeMenu}
            target={site.resume.ready ? "_blank" : undefined}
            rel={site.resume.ready ? "noreferrer" : undefined}
          >
            Resume
            {!site.resume.ready && <span className="sr-only"> — coming soon</span>}
          </Button>
        </nav>
      </div>
    </header>
  );
}

export default SiteHeader;
