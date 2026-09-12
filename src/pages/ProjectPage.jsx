import { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";

function ProjectDiagram({ projectId, revealed }) {
  return (
    <div
      className={`case-diagram case-diagram--${projectId} project-reveal${revealed ? " is-revealed" : ""}`}
      data-reveal="diagram"
      aria-hidden="true"
    >
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
    </div>
  );
}

function ProjectPage() {
  const { projectId } = useParams();
  const project = projects[projectId];
  const pageRef = useRef(null);
  const [revealedItems, setRevealedItems] = useState([]);

  useEffect(() => {
    const revealItems = pageRef.current?.querySelectorAll("[data-reveal]");

    if (!project || !revealItems?.length) {
      return undefined;
    }

    if (!("IntersectionObserver" in window)) {
      setRevealedItems(Array.from(revealItems, (item) => item.dataset.reveal));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleItems = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => entry.target.dataset.reveal);

        if (visibleItems.length > 0) {
          setRevealedItems((currentItems) => [
            ...new Set([...currentItems, ...visibleItems]),
          ]);

          entries
            .filter((entry) => entry.isIntersecting)
            .forEach((entry) => observer.unobserve(entry.target));
        }
      },
      { threshold: 0.15 },
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [project]);

  const isRevealed = (item) => revealedItems.includes(item);

  if (!project) {
    return (
      <main className="project-page">
        <h1>Project not found</h1>
        <Link to="/">Back home</Link>
      </main>
    );
  }

  return (
    <main className={`project-page project-page--${projectId}`} ref={pageRef}>
        <nav className="project-nav">
        <Link to="/">Abhigyan</Link>
        <Link to="/">← Back home</Link>
        </nav>
      <section
        className={`project-hero project-reveal${isRevealed("hero") ? " is-revealed" : ""}`}
        data-reveal="hero"
      >
        <p className="project-eyebrow">{project.eyebrow}</p>

        <h1>{project.title}</h1>

        <p className="project-intro">{project.intro}</p>

        <div className="project-meta">
          <span>{project.timeline}</span>
          <span>{project.role}</span>
        </div>
      </section>

      {project.metrics.length > 0 && (
        <section
          className={`project-metrics project-reveal${isRevealed("metrics") ? " is-revealed" : ""}`}
          data-reveal="metrics"
        >
          {project.metrics.map((metric) => (
            <div key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </section>
      )}

      <ProjectDiagram projectId={projectId} revealed={isRevealed("diagram")} />

      {project.sections && (
        <div className="project-content">
          {project.sections.map((section, index) => (
            <section
              className={`project-section project-reveal${isRevealed(`section-${index}`) ? " is-revealed" : ""}`}
              data-reveal={`section-${index}`}
              key={section.heading}
            >
              <h2>{section.heading}</h2>

              {section.image && (
                <img
                  src={section.image}
                  alt={section.imageAlt || `Image for ${section.heading}`}
                  className={`project-image project-reveal${isRevealed(`image-${index}`) ? " is-revealed" : ""}`}
                  data-reveal={`image-${index}`}
                />
              )}

              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
        </div>
      )}

      <Link to="/">← Back to work</Link>
    </main>
  );
}

export default ProjectPage;
