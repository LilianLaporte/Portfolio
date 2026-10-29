import { useEffect, useRef } from "react";
import { LuX, LuArrowUpRight, LuTrophy } from "react-icons/lu";
import { SiGithub } from "react-icons/si";
import Media from "./Media";
import "./ProjectDialog.css";

// Native <dialog> gives us focus trapping, Esc to close and a backdrop for free.
function ProjectDialog({ project, onClose }) {
  const ref = useRef(null);

  useEffect(() => {
    const dialog = ref.current;
    if (project && !dialog.open) dialog.showModal();
    if (!project && dialog.open) dialog.close();
  }, [project]);

  return (
    <dialog
      ref={ref}
      className="project-dialog"
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
      aria-labelledby="project-dialog-title"
    >
      {project && (
        <div className="project-dialog__panel">
          <button type="button" className="icon-btn icon-btn--outlined project-dialog__close" onClick={onClose} aria-label="Close">
            <LuX />
          </button>
          <Media media={project.media} alt={project.title} className="project-dialog__media" />
          <div className="project-dialog__body">
            <p className="eyebrow">{project.context}</p>
            <h2 id="project-dialog-title" className="project-dialog__title">
              {project.title}
            </h2>
            {project.description.map((p) => (
              <p key={p.slice(0, 24)} className="project-dialog__text">
                {p}
              </p>
            ))}
            {project.highlights && (
              <ul className="project-dialog__highlights">
                {project.highlights.map((h) => (
                  <li key={h}>
                    <LuTrophy aria-hidden="true" /> {h}
                  </li>
                ))}
              </ul>
            )}
            <ul className="tag-list">
              {project.tags.map((tag) => (
                <li key={tag} className="tag">
                  {tag}
                </li>
              ))}
            </ul>
            {project.links && (
              <div className="project-dialog__links">
                {project.links.github && (
                  <a className="btn btn--primary btn--sm" href={project.links.github} target="_blank" rel="noreferrer">
                    <SiGithub /> View code
                  </a>
                )}
                {project.links.website && (
                  <a className="btn btn--ghost btn--sm" href={project.links.website} target="_blank" rel="noreferrer">
                    Website <LuArrowUpRight />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </dialog>
  );
}

export default ProjectDialog;
