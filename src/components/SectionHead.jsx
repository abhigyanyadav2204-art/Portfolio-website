import "./SectionHead.css";

/** The eyebrow + title + lede block that opens every major section. */
function SectionHead({ eyebrow, title, lede, id, as: Tag = "h2", className = "" }) {
  return (
    <div className={`section-head ${className}`.trim()}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <Tag id={id} className="section-head__title display">
        {title}
      </Tag>
      {lede && <p className="section-head__lede">{lede}</p>}
    </div>
  );
}

export default SectionHead;
