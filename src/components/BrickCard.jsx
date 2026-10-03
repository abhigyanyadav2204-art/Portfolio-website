import { Link } from "react-router-dom";
import Reveal from "./Reveal.jsx";
import SizeChip from "./SizeChip.jsx";
import MetricStamp from "./MetricStamp.jsx";
import "./BrickCard.css";

/**
 * One project, rendered as a brick in the work stack. The <article>
 * is inert; the only interactive element is the link in the <h3>,
 * stretched over the whole card via ::after — so the hit area is the
 * full brick but a screen reader announces one link ("The Handi Story
 * — read the case study"), not a dozen nested interactive regions.
 */
function BrickCard({ project, index, anchorId }) {
  return (
    <Reveal
      as="article"
      variant="snap"
      stagger={index}
      id={anchorId}
      className="brick-card brick"
      style={{ "--brick": project.brick.color, "--brick-ink": project.brick.ink }}
    >
      <div className="brick-card__body brick__body">
        <span className="brick-card__studs brick__studs" aria-hidden="true" />

        <div className="brick-card__face">
          <div className="brick-card__top">
            <SizeChip size={project.brick.size} />
            <span className="brick-card__timeline mono">{project.timeline}</span>
          </div>

          <p className="brick-card__eyebrow">{project.eyebrow}</p>

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

          {project.metrics.length > 0 && (
            <div className="brick-card__metrics" aria-label={`${project.title} metrics`}>
              {project.metrics.map((metric) => (
                <MetricStamp key={metric.label} value={metric.value} label={metric.label} />
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
