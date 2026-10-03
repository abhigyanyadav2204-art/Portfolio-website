import SectionHead from "./SectionHead.jsx";
import BrickCard from "./BrickCard.jsx";
import "./BrickStack.css";

/** The homepage work section: every project as a brick in a vertical stack. */
function BrickStack({ projects, id }) {
  return (
    <section className="brick-stack-section section" id={id} aria-labelledby="journey-title">
      <div className="container">
        <SectionHead
          id="journey-title"
          eyebrow="What the work proves"
          title="I didn't start with product. I started by trying to make something work."
          lede="Four ventures. Each one forced the same question: why do people adopt, stall, or leave — and what do you do about it."
        />

        <div className="brick-stack">
          {projects.map((project, index) => (
            <BrickCard
              key={project.slug}
              project={project}
              index={index}
              anchorId={project.slug === "meet-ups" ? "now" : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BrickStack;
