import MetricStamp from "./MetricStamp.jsx";
import "./CaseHero.css";

/** The header of a case-study page: eyebrow, title, intro, meta, metrics. */
function CaseHero({ project }) {
  return (
    <header
      className="case-hero"
      style={{ "--brick": project.brick.color, "--brick-ink": project.brick.ink }}
    >
      <p className="eyebrow">{project.eyebrow}</p>
      <h1 className="case-hero__title display">{project.title}</h1>
      <p className="case-hero__intro">{project.intro}</p>

      <div className="case-hero__meta mono">
        <span>{project.timeline}</span>
        <span>{project.role}</span>
      </div>

      {project.metrics.length > 0 && (
        <div className="case-hero__metrics" aria-label={`${project.title} metrics`}>
          {project.metrics.map((metric) => (
            <MetricStamp key={metric.label} value={metric.value} label={metric.label} />
          ))}
        </div>
      )}
    </header>
  );
}

export default CaseHero;
