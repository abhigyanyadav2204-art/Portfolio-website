import { Link } from "react-router-dom";
import Reveal from "./Reveal.jsx";
import "./BrickCard.css";

/**
 * One project, rendered as a brick in the work stack. The <article>
 * is inert; the only interactive element is the link in the <h3>,
 * stretched over the whole card via ::after — so the hit area is the
 * full brick but a screen reader announces one link ("The Handi Story
 * — read the case study"), not a dozen nested interactive regions.
 *
 * Footprint is driven by `project.brick.tier` (editorial judgment, not
 * a formula off `size`): "standard" is one of two grid columns,
 * "feature"/"open" span both. The feature tier (LaariKhojo) shows its
 * one real teaser photo and a single headline metric — kept concise on
 * purpose, so the extra width reads as space for the strongest piece
 * of evidence, not a denser card. The case-study page carries the
 * full depth for every project.
 */
function BrickCard({ project, index, anchorId }) {
  const { tier } = project.brick;
  const metrics = tier === "feature" ? project.metrics.slice(0, 1) : project.metrics;

  return (
    <Reveal
      as="article"
      variant="snap"
      stagger={index}
      id={anchorId}
      className={`brick-card brick-card--${tier} brick`}
      style={{ "--brick": project.brick.color, "--brick-ink": project.brick.ink }}
    >
      <div className="brick-card__body brick__body">
        <span className="brick-card__studs brick__studs" aria-hidden="true" />

        {project.teaserImage && (
          <img
            src={project.teaserImage.src}
            alt={project.teaserImage.alt}
            className="brick-card__photo"
            loading="lazy"
            decoding="async"
          />
        )}

        <div className="brick-card__face">
          <p className="brick-card__timeline mono">{project.timeline}</p>

          <h3 className="brick-card__title">
            <Link to={`/work/${project.slug}`} className="brick-card__link">
              {project.title}
              <span className="sr-only"> — read the case study</span>
            </Link>
            {anchorId === "now" && (
              <span className="brick-card__now">
                <span className="brick-card__now-dot" aria-hidden="true" />
                Now
              </span>
            )}
          </h3>

          <p className="brick-card__tagline">{project.tagline}</p>

          {metrics.length > 0 && (
            <div className="brick-card__metrics" aria-label={`${project.title} metrics`}>
              {metrics.map((metric) => (
                <p key={metric.label} className="brick-card__metric">
                  <strong>{metric.value}</strong> {metric.label}
                </p>
              ))}
            </div>
          )}

          <p className="brick-card__role mono">{project.role}</p>
        </div>
      </div>
    </Reveal>
  );
}

export default BrickCard;
