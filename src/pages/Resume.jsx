import { LuDownload, LuArrowUpRight, LuBriefcase, LuGraduationCap, LuFlaskConical } from "react-icons/lu";
import Reveal from "../components/Reveal";
import { profile } from "../data/profile";
import { experience, research, education } from "../data/experience";
import { skillGroups } from "../data/skills";
import "./Resume.css";

const levels = { Native: 100, C2: 95, C1: 85, B2: 70, B1: 55, A2: 35, A1: 20 };

function Timeline({ title, icon: Icon, items }) {
  return (
    <section className="timeline-section">
      <Reveal as="h2" className="timeline-section__title">
        <span className="timeline-section__icon">
          <Icon />
        </span>
        {title}
      </Reveal>
      <ol className="timeline">
        {items.map((item) => (
          <Reveal as="li" key={`${item.title}-${item.org}`} className={`timeline__item ${item.current ? "is-current" : ""}`}>
            <p className="timeline__period">{item.period}</p>
            <div className="timeline__content">
              <h3 className="timeline__title">{item.title}</h3>
              <p className="timeline__org">
                {item.org}
                {item.location && <span> · {item.location}</span>}
              </p>
              {item.grade && <p className="tag timeline__grade">{item.grade}</p>}
              {item.points && (
                <ul className="timeline__points">
                  {item.points.map((p) => (
                    <li key={p.slice(0, 24)}>{p}</li>
                  ))}
                </ul>
              )}
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

function Resume() {
  return (
    <div className="page container">
      <Reveal className="section-head section-head--row resume-head">
        <div className="section-head">
          <p className="eyebrow">Resume</p>
          <h1 className="heading-xl">Experience & education.</h1>
        </div>
        <div className="resume-head__actions">
          <a className="btn btn--primary" href={profile.cv} download>
            <LuDownload /> Download CV
          </a>
          <a className="btn btn--ghost" href={profile.cv} target="_blank" rel="noreferrer">
            Open PDF <LuArrowUpRight />
          </a>
        </div>
      </Reveal>

      <div className="resume">
        <div className="resume__main">
          <Timeline title="Experience" icon={LuBriefcase} items={experience} />
          <Timeline title="Research & projects" icon={LuFlaskConical} items={research} />
          <Timeline title="Education" icon={LuGraduationCap} items={education} />
        </div>

        <aside className="resume__aside">
          <Reveal className="card resume__card">
            <h2 className="resume__card-title">Skills</h2>
            {skillGroups.map((g) => (
              <div key={g.title} className="resume__skill-group">
                <p className="resume__label">{g.title}</p>
                <p className="resume__skills">{g.skills.map((s) => s.name).join(", ")}</p>
              </div>
            ))}
          </Reveal>

          <Reveal className="card resume__card" delay={80}>
            <h2 className="resume__card-title">Languages</h2>
            <ul className="languages">
              {profile.languages.map((l) => (
                <li key={l.name}>
                  <div className="languages__row">
                    <span>{l.name}</span>
                    <span className="languages__level">{l.level}</span>
                  </div>
                  <div className="languages__bar" aria-hidden="true">
                    <span style={{ width: `${levels[l.level] ?? 50}%` }} />
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="card resume__card" delay={160}>
            <h2 className="resume__card-title">Interests</h2>
            <ul className="tag-list">
              {profile.interests.map((i) => (
                <li key={i} className="tag">
                  {i}
                </li>
              ))}
            </ul>
          </Reveal>
        </aside>
      </div>
    </div>
  );
}

export default Resume;
