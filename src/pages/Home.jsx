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
                I'm Abhigyan. I like building things from scratch.
              </p>
              <p>
                I've built a food business, grown a content brand, worked on a
                marketplace for street vendors, and I'm now building communities
                around people who want to build.
              </p>
              <p>
                I work across product, growth and operations, getting close to the
                problem, figuring out what matters, and making things happen.
              </p>
            </div>
            <Button
              to="/#contact"
              variant="outline"
              iconAfter="→"
              className="about-section__cta"
            >
              If you're building something interesting, let's talk
            </Button>
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
            title="Not everything fits in a case study."
            lede="A hackathon, a drone build, a vegetable cart, a ride to 17,800 ft. Smaller things that still shaped how I think and work."
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
