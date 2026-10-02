import portrait360 from "../assets/portrait-360.webp";
import portrait180 from "../assets/portrait-180.webp";
import "./SpecPanel.css";

/** The "at a glance" identity card: portrait + key/value spec rows. */
function SpecPanel({ items }) {
  return (
    <aside className="spec-panel plate" aria-label="At a glance">
      <img
        src={portrait360}
        srcSet={`${portrait180} 180w, ${portrait360} 360w`}
        sizes="(min-width: 48rem) 112px, 88px"
        width={360}
        height={360}
        loading="lazy"
        decoding="async"
        alt="Abhigyan Yadav"
        className="spec-panel__portrait"
      />

      <dl className="spec-panel__list">
        {items.map((item) => (
          <div className="spec-panel__row" key={item.k}>
            <dt>{item.k}</dt>
            <dd>{item.v}</dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}

export default SpecPanel;
