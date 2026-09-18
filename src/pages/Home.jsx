import { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import heroWorkspace from "../assets/hero-workspace.png";
import "../App.css";

const journeyProjectIds = ["handi-story", "benzene", "meet-ups", "laarikhojo"];

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
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
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
          <div className="hero-copy">
            <p className="hero-kicker">BUILDER · PRODUCT · GROWTH · TECHNOLOGY</p>
            <h1 id="hero-title">I BUILD THINGS.</h1>
            <p>
              I work at the intersection of product, operations, growth and technology.
              Getting close to problems, figuring out what needs to happen, and making it happen.
            </p>
            <a href="#work" className="hero-cta">Explore my journey ↓</a>
          </div>

          <figure className="hero-scene">
            <img
              src={heroWorkspace}
              alt="A monochrome 3D illustration of a young builder in a workspace."
            />
          </figure>
        </section>

        <section className="section about" id="about">
          <div className="section-label"><span>01 / ABOUT</span></div>

          <div className="about-content">
            <h2>I like being where<br />the problem is.</h2>
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
            <p className="section-label">02 / THE JOURNEY SO FAR</p>
            <h2 id="journey-title">The journey so far.</h2>
            <p>
              A timeline of the businesses, products, communities and experiments I have worked on.
            </p>
          </div>

          <div className="journey-timeline">
            {journeyProjectIds.map((projectId) => {
              const project = projects[projectId];

              return (
                <article
                  className="journey-item"
                  id={projectId === "laarikhojo" ? "now" : undefined}
                  key={projectId}
                >
                  <p className="journey-date">{project.timeline}</p>
                  <div className="journey-entry">
                    <p className="journey-context">{project.eyebrow}</p>
                    <h3>{project.title}</h3>
                    <p>{project.intro}</p>
                    <p className="journey-role">{project.role}</p>
                    <Link to={`/work/${projectId}`} className="journey-link">View project →</Link>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="sidequests">
          <div>
            <p className="section-label">03 / SIDE QUESTS</p>
            <p>Hackathons, drones, startups, motorcycles and other things I've ended up doing.</p>
          </div>
          <Link to="/sidequests" className="underlined">Explore side quests →</Link>
        </section>

        <section className="contact" id="contact">
          <p className="section-label">04 / CONTACT</p>
          <h2>Building something?<br />Let's talk.</h2>
          <div className="contact-links">
            <a href="mailto:thebenzene2208@gmail.com" className="underlined">Email →</a>
            <a href="https://www.linkedin.com/in/abhigyan-yadav-09a4b92a4/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
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
