import { Link } from "react-router-dom";
import { sideQuests } from "../data/sidequests.js";
import { site } from "../data/site.js";
import SectionHead from "../components/SectionHead.jsx";
import SideQuestCard from "../components/SideQuestCard.jsx";
import ContactPlate from "../components/ContactPlate.jsx";
import "./SideQuests.css";

function SideQuests() {
  return (
    <div className="side-quests-page">
      <section className="section">
        <div className="container">
          <SectionHead
            as="h1"
            eyebrow="Side quests"
            title="Things I've worked on along the way."
            lede="Smaller projects, experiments and experiences that don't belong in the main body of my work, but still shaped how I think and work."
          />

          <div className="side-quests-tray">
            {sideQuests.map((quest, index) => (
              <SideQuestCard key={quest.id} quest={quest} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="section side-quests-contact">
        <div className="container">
          <SectionHead eyebrow="Connect" title={<>Building something?<br />Let's talk.</>} />
          <ContactPlate links={site.socials} resume={site.resume} />
          <Link to="/" className="side-quests-page__back">
            ← Back home
          </Link>
        </div>
      </section>
    </div>
  );
}

export default SideQuests;
