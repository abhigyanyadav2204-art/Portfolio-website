import { site } from "../data/site.js";
import StudRail from "./StudRail.jsx";
import Button from "./Button.jsx";
import batmanFigure from "../assets/batman-figure.webp";
import "./Hero.css";

/**
 * Replaces the old full-bleed photo hero. That photo (a) wasn't a
 * workspace at all — it was a Himalaya trip photo mislabelled by its
 * own alt text — and (b) was 2.32MB fighting a black/yellow palette
 * with blue sky and snow.
 */
function Hero() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="hero-section__backdrop stud-field stud-field--fade" aria-hidden="true" />

      <div className="container container--wide hero-section__inner">
        <StudRail />

        <div className="hero-section__copy">
          <p className="eyebrow">
            {site.identity.degree} · {site.identity.school} · {site.identity.year}
          </p>
          <h1 id="hero-title" className="hero-section__title display">
            {site.headline}
          </h1>
          <p className="hero-section__tagline">{site.tagline}</p>
          <Button href="#work" variant="solid" size="lg" iconAfter="↓">
            Explore my journey
          </Button>
        </div>

        <div className="hero-section__art-group">
          <img
            src={batmanFigure}
            alt=""
            aria-hidden="true"
            className="hero-section__batman"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
