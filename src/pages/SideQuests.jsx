import { Link } from "react-router-dom";

function SideQuests() {
  return (
    <main className="project-page">
      <section className="project-hero">
        <p className="project-eyebrow">SIDE QUESTS</p>

        <h1>Things I've worked on along the way.</h1>

        <p className="project-intro">
          Smaller projects, experiments and experiences that don't belong in
          the main body of my work, but still shaped how I think and work.
        </p>
      </section>

      <section className="project-section">
        <h2>ReGen National Hackathon</h2>
        <p>
          Sponsorship & Marketing Lead for a national hackathon. Managed
          sponsorship outreach and secured ₹1.3L in sponsorships through a
          combination of cash partnerships and brand visibility exchanges.
        </p>
      </section>

      <section className="project-section">
        <h2>NIDAR Drone Challenge</h2>
        <p>
          Worked on a disaster-management drone project, contributing to the
          computer vision side using YOLO.
        </p>
      </section>

      <section className="project-section">
        <h2>Khatakhat</h2>
        <p>
          Worked with an early-stage logistics and commerce venture around its
          social media and content.
        </p>
      </section>

      <section className="project-section">
        <h2>Two wheels, 17,800 ft</h2>
        <p>
          My love for bikes took me to Sikkim, a ride to Lachung, to witness the divine Gurudongmar Lake at
          roughly 17,800 ft.
        </p>
      </section>

      <Link to="/">← Back home</Link>
    </main>
  );
}

export default SideQuests;