import Reveal from "./Reveal.jsx";
import "./CaseSection.css";

/**
 * One section of a case study's long-form body. `index` drives the
 * heading id and (lightly) the reveal stagger; paragraphs are keyed
 * by position, not content — the old code used the paragraph text
 * itself as the React key, which would collide on any duplicate line.
 */
function CaseSection({ heading, paragraphs, image, imageAlt, index }) {
  return (
    <Reveal
      as="section"
      variant="rise"
      stagger={Math.min(index, 2)}
      className="case-section"
      aria-labelledby={`case-section-heading-${index}`}
    >
      <h2 id={`case-section-heading-${index}`} className="case-section__heading">
        {heading}
      </h2>

      {image && (
        // No width/height attrs: these are real photos at varying native
        // ratios (square, landscape, portrait — see CaseSection.css), so
        // a single hardcoded box would misstate the aspect ratio for
        // most of them and cause the layout-shift it's meant to prevent.
        // They're below the fold and lazy-loaded, not LCP-critical.
        <img
          src={image}
          alt={imageAlt ?? ""}
          className="case-section__image"
          loading="lazy"
          decoding="async"
          onError={(event) => {
            if (import.meta.env.DEV) {
              console.warn("[case image missing]", image);
            }
            event.currentTarget.hidden = true;
          }}
        />
      )}

      <div className="prose">
        {paragraphs.map((paragraph, paragraphIndex) => (
          <p key={paragraphIndex}>{paragraph}</p>
        ))}
      </div>
    </Reveal>
  );
}

export default CaseSection;
