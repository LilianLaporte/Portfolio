import { useState } from "react";
import Reveal from "../components/Reveal";
import ProjectCard from "../components/ProjectCard";
import ProjectDialog from "../components/ProjectDialog";
import { projects, categories } from "../data/projects";
import "./Projects.css";

const filters = ["All", ...categories];

function Projects() {
  const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState(null);
  const visible = filter === "All" ? projects : projects.filter((p) => p.categories.includes(filter));

  return (
    <div className="page container">
      <Reveal className="section-head">
        <p className="eyebrow">Projects</p>
        <h1 className="heading-xl">Work & projects.</h1>
        <p className="lede">
          Research, team and course projects — from learning-based control on legged robots to embedded systems and
          precision mechanisms.
        </p>
      </Reveal>

      <Reveal className="filters" role="group" aria-label="Filter projects by category" delay={80}>
        {filters.map((f) => {
          const count = f === "All" ? projects.length : projects.filter((p) => p.categories.includes(f)).length;
          return (
            <button
              key={f}
              type="button"
              className={`filter ${filter === f ? "is-active" : ""}`}
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
            >
              {f}
              <span className="filter__count">{count}</span>
            </button>
          );
        })}
      </Reveal>

      <div className="projects-grid">
        {visible.map((p, i) => (
          <Reveal key={`${filter}-${p.id}`} delay={(i % 3) * 70}>
            <ProjectCard project={p} onOpen={setOpen} />
          </Reveal>
        ))}
      </div>

      <ProjectDialog project={open} onClose={() => setOpen(null)} />
    </div>
  );
}

export default Projects;
