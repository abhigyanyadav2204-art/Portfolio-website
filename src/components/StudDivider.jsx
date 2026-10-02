import "./StudDivider.css";

/** A decorative row of studs used as a section/footer rule. */
function StudDivider({ tone = "dim" }) {
  return <div className={`stud-divider stud-divider--${tone}`} aria-hidden="true" />;
}

export default StudDivider;
