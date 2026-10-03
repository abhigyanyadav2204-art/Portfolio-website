import Reveal from "./Reveal.jsx";
import "./CaseSection.css";

/**
 * No width/height attrs: these are real photos at varying native
 * ratios (square, landscape, portrait — see CaseSection.css), so a
 * single hardcoded box would misstate the aspect ratio for most of
 * them and cause the layout-shift it's meant to prevent. They're
 * below the fold and lazy-loaded, not LCP-critical.
 */
function CaseImage({ src, alt, className }) {
  return (
    <img
      src={src}
      alt={alt ?? ""}
      className={className}
      loading="lazy"
      decoding="async"
      onError={(event) => {
        if (import.meta.env.DEV) {
          console.warn("[case image missing]", src);
        }
        event.currentTarget.hidden = true;
      }}
    />
  );
}

/**
 * One section of a case study's long-form body. `index` drives the
 * heading id and (lightly) the reveal stagger; paragraphs are keyed
 * by position, not content — the old code used the paragraph text
 * itself as the React key, which would collide on any duplicate line.
 *
 * `images` (plural) is a deliberate, narrow exception to the usual
 * one-section-one-image rule: a side-by-side pair for a section whose
 * whole point is comparing two things (a street vendor's listing next
 * to a tiffin maker's). It isn't a general-purpose gallery — nothing
 * else in the data uses it.
 */
function CaseSection({ heading, paragraphs, image, imageAlt, images, index }) {
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

      {image && <CaseImage src={image} alt={imageAlt} className="case-section__image" />}

      {images && images.length > 0 && (
        <div className="case-section__image-pair">
          {images.map((img) => (
            <CaseImage
              key={img.src}
              src={img.src}
              alt={img.alt}
              className="case-section__image case-section__image--paired"
            />
          ))}
        </div>
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
