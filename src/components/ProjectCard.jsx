import { LuArrowUpRight } from "react-icons/lu";
import Media from "./Media";
import "./ProjectCard.css";

function ProjectCard({ project, onOpen, large = false }) {
  return (
    <article className={`card spotlight project-card ${large ? "project-card--large" : ""}`}>
      <button type="button" className="project-card__hit" onClick={() => onOpen(project)}>
        <span className="visually-hidden">Open details for {project.title}</span>
      </button>
      <Media media={project.media} alt={project.title} className="project-card__media" />
      <div className="project-card__body">
        <p className="project-card__context">{project.context}</p>
        <h3 className="project-card__title">
          {project.title}
          <LuArrowUpRight className="project-card__arrow" aria-hidden="true" />
        </h3>
        <p className="project-card__summary">{project.summary}</p>
        <ul className="tag-list">
          {project.tags.slice(0, large ? 4 : 3).map((tag) => (
            <li key={tag} className="tag">
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ProjectCard;
