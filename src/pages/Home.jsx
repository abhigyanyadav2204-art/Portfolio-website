import { projectList } from "../data/projects";
import { site } from "../data/site.js";
import Hero from "../components/Hero.jsx";
import SpecPanel from "../components/SpecPanel.jsx";
import BrickStack from "../components/BrickStack.jsx";
import SectionHead from "../components/SectionHead.jsx";
import Button from "../components/Button.jsx";
import ContactPlate from "../components/ContactPlate.jsx";
import "./Home.css";

/**
 * Header/nav/footer previously lived inline here and only here — the
 * other three pages had neither. They now live in <Layout>, so this
 * renders sections only.
 */
function Home() {
  return (
    <>
      <Hero />

      <section className="section about-section" id="about" aria-labelledby="about-title">
        <div className="container about-section__grid">
          <div className="about-section__copy">
            <SectionHead
              id="about-title"
              eyebrow="How I work"
              title="I like being where the problem is."
            />
            <div className="prose">
              <p>
                I've built a business from scratch, worked on a marketplace with street vendors,
                built a personal brand from zero, and worked across growth, operations and sales.
              </p>
              <p>
                I don't usually start with a fixed role. I start with the problem, understand what
                is actually happening, figure out what matters, and then do whatever is needed to
                move it forward.
              </p>
              <p>
                I'm taking that approach further by going deeper into development and AI, so I can
                move more directly from understanding a problem to building the solution.
              </p>
            </div>
          </div>

          <SpecPanel items={site.spec} />
        </div>
      </section>

      <BrickStack projects={projectList} id="work" />

      <section className="section" aria-labelledby="sidequests-title">
        <div className="container">
          <SectionHead
            id="sidequests-title"
            eyebrow="Along the way"
            title="A few other things happened along the way."
            lede="Hackathons, drones, startups, motorcycles and other things I've ended up doing."
          />
          <Button to="/sidequests" variant="outline" iconAfter="→">
            Explore side quests
          </Button>
        </div>
      </section>

      <section className="section contact-section" id="contact" aria-labelledby="contact-title">
        <div className="container">
          <SectionHead
            id="contact-title"
            eyebrow="Connect"
            title={<>Building something?<br />Let's talk.</>}
          />
          <ContactPlate links={site.socials} resume={site.resume} />
        </div>
      </section>
    </>
  );
}

export default Home;
