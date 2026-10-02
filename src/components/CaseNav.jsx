import { Link } from "react-router-dom";
import "./CaseNav.css";

/** Previous/next case-study links at the bottom of a project page. */
function CaseNav({ prev, next }) {
  if (!prev && !next) return null;

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
        <span aria-hidden="true" />
      )}
    </nav>
  );
}

export default CaseNav;
