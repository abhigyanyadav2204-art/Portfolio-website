import { Link } from "react-router-dom";
import "./CaseNav.css";

/**
 * Previous/next case-study links at the bottom of a project page. The
 * last project in order has no `next` — rather than leave that slot
 * blank (a dead end after the final case study), it loops back to the
 * work section instead of just trailing off.
 */
function CaseNav({ prev, next }) {
  return (
    <nav className="case-nav" aria-label="More case studies">
      {prev ? (
        <Link to={`/work/${prev.slug}`} className="case-nav__link case-nav__link--prev">
          <span className="mono">← Previous</span>
          <span className="case-nav__title">{prev.title}</span>
        </Link>
      ) : (
        <span aria-hidden="true" />
      )}

      {next ? (
        <Link to={`/work/${next.slug}`} className="case-nav__link case-nav__link--next">
          <span className="mono">Next →</span>
          <span className="case-nav__title">{next.title}</span>
        </Link>
      ) : (
        <Link to="/#work" className="case-nav__link case-nav__link--next">
          <span className="mono">Next →</span>
          <span className="case-nav__title">Back to all work</span>
        </Link>
      )}
    </nav>
  );
}

export default CaseNav;
