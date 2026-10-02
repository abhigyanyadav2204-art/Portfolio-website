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
        <img
          src={image}
          alt={imageAlt ?? ""}
          className="case-section__image"
          width={1200}
          height={800}
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
