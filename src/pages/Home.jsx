import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import profileImage from "../../abhigyanpfp.jpg";
import "../App.css";

function ProjectVisual({ project }) {
  const marks = project === "handi" ? 4 : project === "laarikhojo" ? 6 : 5;

  return (
    <div className={`project-visual project-visual--${project}`} aria-hidden="true">
      {Array.from({ length: marks }, (_, index) => (
        <span className={`project-visual-mark project-visual-mark--${index + 1}`} key={index} />
      ))}
    </div>
  );
}

function Home() {
  const heroRef = useRef(null);
  const workProjectRefs = useRef([]);
  const [isHeroAssembled, setIsHeroAssembled] = useState(false);
  const [revealedProjects, setRevealedProjects] = useState([]);

  useEffect(() => {
    const hero = heroRef.current;

    if (!hero || !("IntersectionObserver" in window)) {
      setIsHeroAssembled(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeroAssembled(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const projects = workProjectRefs.current.filter(Boolean);

    if (projects.length === 0) {
      return undefined;
    }

    if (!("IntersectionObserver" in window)) {
      setRevealedProjects(projects.map((project) => project.dataset.projectId));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleProjectIds = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => entry.target.dataset.projectId);

        if (visibleProjectIds.length > 0) {
          setRevealedProjects((currentProjects) => [
            ...new Set([...currentProjects, ...visibleProjectIds]),
          ]);

          entries
            .filter((entry) => entry.isIntersecting)
            .forEach((entry) => observer.unobserve(entry.target));
        }
      },
      { threshold: 0.2 },
    );

    projects.forEach((project) => observer.observe(project));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="site">

      {/* NAVIGATION */}
      <header className="navbar">
        <a href="#" className="logo">
          ABHIGYAN
        </a>

        <nav>
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#now">Now</a>
        </nav>
      </header>


      <main>

        {/* ================= HERO ================= */}

        <section
          className={`hero${isHeroAssembled ? " hero--assembled" : ""}`}
          ref={heroRef}
        >
          <div className="hero-content">

            <p className="eyebrow">
              BUILDER · PRODUCT · GROWTH · TECHNOLOGY
            </p>

            <div className="hero-title-wrap">
              <h1>I build things.</h1>

              <div className="hero-modules" aria-hidden="true">
                <span className="hero-module hero-module--one" />
                <span className="hero-module hero-module--two" />
                <span className="hero-module hero-module--three" />
                <span className="hero-module hero-module--four" />
                <span className="hero-module hero-module--five" />
                <span className="hero-module hero-module--six" />
                <span className="hero-module hero-module--seven" />
              </div>
            </div>

            <p className="hero-text">
              I work at the intersection of product, operations,
              growth and technology. Getting close to problems,
              figuring out what needs to happen, and making it happen.
            </p>

            <div className="hero-links">
              <a href="#work" className="underlined">
                See my work →
              </a>

              <a
                href="https://github.com/abhigyanyadav2204-art"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/abhigyan-yadav-09a4b92a4/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>

          </div>
        </section>


        {/* ================= ABOUT ================= */}

        <section className="section about" id="about">

          <div className="section-label">
            <span>01 / ABOUT</span>
          </div>

          <div className="about-content">

            <h2>
              I like being where
              <br />
              the problem is.
            </h2>

            <p>
              I've built a business from scratch, worked on a
              marketplace with street vendors, built a personal
              brand from zero, and worked across growth, operations
              and sales.
            </p>

            <p>
              I don't usually start with a fixed role. I start with
              the problem, understand what is actually happening,
              figure out what matters, and then do whatever is needed
              to move it forward.
            </p>

            <p>
              I'm taking that approach further by going
              deeper into development and AI, so I can move more
              directly from understanding a problem to building
              the solution.
            </p>

          </div>

          <figure className="about-portrait">
            <img src={profileImage} alt="Abhigyan Yadav holding three puppies outdoors" />
          </figure>

        </section>


        {/* ================= WORK ================= */}

        <section className="section work" id="work">

          <div className="section-heading">

            <div className="section-label">
              <span>02 / WORK</span>
            </div>

            <div>
              <h2>Things I've built<br />and worked on.</h2>
            </div>

          </div>


          {/* HANDI */}

          <article
            className={`project project--handi${revealedProjects.includes("handi") ? " project--revealed" : ""}`}
            data-project-id="handi"
            ref={(project) => {
              workProjectRefs.current[0] = project;
            }}
          >

            <div className="project-top">
              <span>01</span>

              <span>
                ENTREPRENEURSHIP · OPERATIONS
              </span>

              <span>2024 — Present</span>
            </div>

            <div className="project-main">

              <div className="project-info">

                <h3>The Handi Story</h3>

                <p>
                  An authentic Hyderabadi biryani business started by
                  three college students in Imphal, growing from
                  a cloud kitchen into a restaurant.
                </p>

                <Link to="/work/handi-story" className="project-link">
                    View the story →
                </Link>

              </div>

              <div className="metrics">

                <div>
                  <strong>50+</strong>
                  <span>orders / day</span>
                </div>

                <div>
                  <strong>₹3L+</strong>
                  <span>revenue in 3 months</span>
                </div>

              </div>

              <ProjectVisual project="handi" />

            </div>

          </article>


          {/* LAARIKHOJO */}

          <article
            className={`project project--laarikhojo${revealedProjects.includes("laarikhojo") ? " project--revealed" : ""}`}
            data-project-id="laarikhojo"
            ref={(project) => {
              workProjectRefs.current[1] = project;
            }}
          >

            <div className="project-top">
              <span>02</span>

              <span>
                PRODUCT · OPERATIONS · TECHNOLOGY
              </span>

              <span>June 2026 — August 2026</span>
            </div>

            <div className="project-main">

              <div className="project-info">

                <h3>LaariKhojo</h3>

                <p>
                  A discovery platform built around a simple question:
                  If Zomato helps you discover restaurants, how do you
                  discover the street food vendors and tiffin makers around you?
                </p>

                <Link to="/work/laarikhojo" className="project-link">
                  View the project →
                </Link>

              </div>

              <div className="metrics">

                <div>
                  <strong>700+</strong>
                  <span>vendors & tiffin makers onboarded</span>
                </div>

                <div>
                  <strong>Node.js</strong>
                  <span>MongoDB · APIs</span>
                </div>

              </div>

              <ProjectVisual project="laarikhojo" />

            </div>

          </article>


          {/* BENZENE */}

          <article
            className={`project project--benzene${revealedProjects.includes("benzene") ? " project--revealed" : ""}`}
            data-project-id="benzene"
            ref={(project) => {
              workProjectRefs.current[2] = project;
            }}
          >

            <div className="project-top">
              <span>03</span>

              <span>
                PERSONAL BRAND · GROWTH · CONTENT
              </span>

              <span>2024 — PRESENT</span>
            </div>

            <div className="project-main">

              <div className="project-info">

                <h3>Benzene</h3>

                <p>
                  A student-driven personal brand built from
                  scratch through content, storytelling and
                  experimentation with distribution.
                </p>

                <a
                  href="https://www.instagram.com/benzene_co/"
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  See Benzene ↗
                </a>

              </div>

              <div className="metrics">

                <div>
                  <strong>100K+</strong>
                  <span>views</span>
                </div>

                <div>
                  <strong>200K+</strong>
                  <span>monthly interactions</span>
                </div>

              </div>

              <ProjectVisual project="benzene" />

            </div>

          </article>

        </section>


        {/* ================= NOW ================= */}

        <section className="now-section now-section--meetups" id="now">

          <div className="now-inner">

            <div className="section-label">
              <span>03 / NOW</span>
            </div>

            <div className="now-content">

              <div className="now-visual" aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>

              <h2>
                Meet Ups
              </h2>

              <p className="now-question">
                How do you find the right people
                to learn, build and collaborate with
                in college?
              </p>

              <p>
                I started by talking to students and
                running offline sessions to understand
                what actually happens when people with
                different interests are put in the same room.
              </p>

              <p>
                I'm now taking what I've learned from
                those experiments and building a platform
                around it.
              </p>

              <div className="now-details">

                <div>
                  <span>STATUS</span>
                  <strong>BUILDING</strong>
                </div>

                <div>
                  <span>APPROACH</span>
                  <strong>Research → Experiment → Build</strong>
                </div>

              </div>

              <Link to="/work/meet-ups" className="underlined">
                See what I'm building →
              </Link>

            </div>

          </div>

        </section>


        {/* ================= SIDE QUESTS ================= */}

        <section className="sidequests">

          <div>

            <p className="section-label">
              04 / SIDE QUESTS
            </p>

            <p>
              Hackathons, drones, startups,
              motorcycles and other things
              I've ended up doing.
            </p>

          </div>

          <Link to="/sidequests" className="underlined">
            Explore side quests →
          </Link>

        </section>


        {/* ================= CONTACT ================= */}

        <section className="contact">

          <p className="section-label">
            05 / CONTACT
          </p>

          <h2>
            Building something?
            <br />
            Let's talk.
          </h2>

          <div className="contact-links">

            <a
              href="mailto:thebenzene2208@gmail.com"
              className="underlined"
            >
              Email →
            </a>

            <a
              href="https://www.linkedin.com/in/abhigyan-yadav-09a4b92a4/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>

            <a
              href="https://github.com/abhigyanyadav2204-art"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

          </div>

        </section>

      </main>


      {/* FOOTER */}

      <footer>

        <span>© 2026 Abhigyan Yadav</span>

        <a href="#">Back to top ↑</a>

      </footer>

    </div>
  );
}

export default Home;
