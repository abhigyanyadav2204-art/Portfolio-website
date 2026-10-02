import { useParams } from "react-router-dom";
import { projects, getProjectNeighbours } from "../data/projects";
import { useDocumentMeta } from "../hooks/useDocumentMeta.js";
import CaseHero from "../components/CaseHero.jsx";
import CaseSection from "../components/CaseSection.jsx";
import CaseNav from "../components/CaseNav.jsx";
import NotFound from "./NotFound.jsx";
import "./ProjectPage.css";

function ProjectPage() {
  const { projectId } = useParams();
  const project = projects[projectId];

  useDocumentMeta(
    project
      ? { title: `${project.title} — Abhigyan Yadav`, description: project.intro }
      : {},
  );

  // Previously rendered an inline "Project not found" stub here instead
  // of routing to the real 404 page.
  if (!project) {
    return <NotFound />;
  }

  const { prev, next } = getProjectNeighbours(projectId);

  return (
    <article className="case-page">
      <CaseHero project={project} />

      {project.sections && (
        <div className="case-page__content">
          {project.sections.map((section, index) => (
            <CaseSection key={index} index={index} {...section} />
          ))}
        </div>
      )}

      <CaseNav prev={prev} next={next} />
    </article>
  );
}

export default ProjectPage;
