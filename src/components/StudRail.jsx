import "./StudRail.css";

/** A vertical column of studs flanking the hero on wide screens. Pure flavour. */
function StudRail({ count = 8 }) {
  return (
    <div className="stud-rail" aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <span key={i} className="stud-rail__dot" />
      ))}
    </div>
  );
}

export default StudRail;
