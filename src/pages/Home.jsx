import { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import heroWorkspace from "../assets/hero-workspace.png";
import "../App.css";

const journeyProjectIds = ["handi-story", "benzene", "laarikhojo", "meet-ups"];

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="site home-page" id="top">
      <header className="navbar">
        <Link to="/" className="logo" onClick={closeMenu}>ABHIGYAN</Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-controls="primary-navigation"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          <span />
          <span />
        </button>

        <nav id="primary-navigation" className={isMenuOpen ? "is-open" : ""} aria-label="Primary navigation">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#now" onClick={closeMenu}>Now</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <figure className="hero-scene">
            <img
              src={heroWorkspace}
              alt="A young builder working in a neutral-toned creative workspace."
            />
          </figure>

          <div className="hero-copy">
            <h1 id="hero-title">I BUILD THINGS.</h1>
            <p>
              I work at the intersection of product, operations, growth and technology.
              Getting close to problems, figuring out what needs to happen, and making it happen.
            </p>
            <a href="#work" className="hero-cta">Explore my journey ↓</a>
          </div>
        </section>

        <section className="about" id="about" aria-labelledby="about-title">
          <div className="about-content">
            <p className="section-eyebrow">How I work</p>
            <h2 id="about-title">I like being where the problem is.</h2>
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
        </section>

        <section className="journey" id="work" aria-labelledby="journey-title">
          <div className="journey-intro">
            <p className="section-eyebrow">The journey so far</p>
            <h2 id="journey-title">I didn't start with product. I started by trying to make something work.</h2>
            <p>That became a series of businesses, experiments and problems worth getting close to.</p>
          </div>

          <div className="journey-timeline">
            {journeyProjectIds.map((projectId) => {
              const project = projects[projectId];

              return (
                <article
                  className="journey-item"
                  id={projectId === "meet-ups" ? "now" : undefined}
                  key={projectId}
                >
                  <p className="journey-date">{project.timeline}</p>
                  <div className="journey-entry">
                    <p className="journey-context">{project.eyebrow}</p>
                    <h3>{project.title}</h3>
                    <p>{project.intro}</p>

                    {project.metrics.length > 0 && (
                      <div className="journey-metrics" aria-label={`${project.title} metrics`}>
                        {project.metrics.map((metric) => (
                          <div key={metric.label}>
                            <strong>{metric.value}</strong>
                            <span>{metric.label}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    <p className="journey-role">{project.role}</p>
                    <Link to={`/work/${projectId}`} className="journey-link">Read the story →</Link>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="sidequests" aria-labelledby="sidequests-title">
          <div>
            <p className="section-eyebrow">Along the way</p>
            <h2 id="sidequests-title">A few other things happened along the way.</h2>
            <p>Hackathons, drones, startups, motorcycles and other things I've ended up doing.</p>
          </div>
          <Link to="/sidequests" className="text-link">Explore side quests →</Link>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <p className="section-eyebrow">Connect</p>
          <h2 id="contact-title">Building something?<br />Let's talk.</h2>
          <div className="contact-links">
            <a href="https://www.instagram.com/benzene_co/" target="_blank" rel="noreferrer">Instagram ↗</a>
            <a href="https://www.linkedin.com/in/abhigyan-yadav-09a4b92a4/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href="mailto:thebenzene2208@gmail.com">Email →</a>
            <a href="https://github.com/abhigyanyadav2204-art" target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 Abhigyan Yadav</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default Home;
