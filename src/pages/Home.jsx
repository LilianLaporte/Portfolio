import { useState } from "react";
import { Link } from "react-router";
import { LuArrowRight, LuArrowUpRight, LuDownload, LuMail, LuMapPin, LuLanguages, LuHeart } from "react-icons/lu";
import { SiGithub } from "react-icons/si";
import { LuLinkedin } from "react-icons/lu";
import RobotScene from "../components/RobotScene";
import Reveal from "../components/Reveal";
import Media from "../components/Media";
import ProjectCard from "../components/ProjectCard";
import ProjectDialog from "../components/ProjectDialog";
import { profile } from "../data/profile";
import { projects } from "../data/projects";
import { publications } from "../data/publications";
import portrait from "../assets/portrait.webp";
import "./Home.css";

const featured = projects.filter((p) => p.featured);
const xplore = projects.find((p) => p.id === "xplore");
const paper = publications[0];

function Hero() {
  return (
    <section className="hero">
      <div className="hero__glow" aria-hidden="true" />
      <RobotScene />
      <div className="container hero__content">
        <Reveal className="pill">
          <span className="live-dot" aria-hidden="true" />
          <span>
            <strong>{profile.role}</strong> · {profile.org}
          </span>
        </Reveal>
        <Reveal as="h1" className="hero__title" delay={80}>
          {profile.name}
        </Reveal>
        <Reveal as="p" className="hero__tagline" delay={160}>
          {profile.tagline}
        </Reveal>
        <Reveal className="hero__actions" delay={240}>
          <Link to="/projects" className="btn btn--primary">
            View projects <LuArrowRight />
          </Link>
          <a href={profile.cv} className="btn btn--ghost" target="_blank" rel="noreferrer">
            <LuDownload /> Download CV
          </a>
          <div className="hero__socials">
            <a className="icon-btn" href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <SiGithub />
            </a>
            <a className="icon-btn" href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LuLinkedin />
            </a>
            <a className="icon-btn" href={`mailto:${profile.email}`} aria-label="Email">
              <LuMail />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Highlights() {
  return (
    <section className="section container" aria-labelledby="highlights-title">
      <Reveal className="section-head">
        <p className="eyebrow">At a glance</p>
        <h2 id="highlights-title" className="heading-lg">
          From microtechnics to robots that learn.
        </h2>
      </Reveal>

      <div className="bento">
        <Reveal className="card spotlight bento__tile bento__now">
          <p className="bento__label">
            <span className="live-dot" aria-hidden="true" /> Currently
          </p>
          <h3 className="bento__heading">
            {profile.role} at the <span className="accent">Robotic Systems Lab</span>, ETH Zurich
          </h3>
          <p className="muted">
            Ladder climbing and perceptive locomotion for quadruped robots — from training in simulation to deployment
            on real hardware.
          </p>
          <p className="bento__location">
            <LuMapPin aria-hidden="true" /> {profile.location}
          </p>
        </Reveal>

        <Reveal className="card spotlight bento__tile bento__media-tile" delay={80}>
          <Media media={xplore.media} alt="EPFL Xplore Mars rover" className="bento__bg" />
          <div className="bento__overlay">
            <p className="bento__number bento__number--light">#3</p>
            <p>European Rover Challenge with EPFL Xplore — in the team's first year.</p>
          </div>
        </Reveal>

        <Reveal className="card spotlight bento__tile bento__industry">
          <p className="bento__label">Industry & research experience</p>
          <ul className="bento__orgs">
            {["ETH Zurich · RSL", "MESH AG", "IBM Research", "TU Delft · AIR Lab", "EPFL Xplore", "Rolex"].map(
              (org) => (
                <li key={org}>{org}</li>
              ),
            )}
          </ul>
          <Link to="/resume" className="bento__more">
            Full resume <LuArrowRight />
          </Link>
        </Reveal>

        <Reveal className="card spotlight bento__tile bento__paper" delay={80}>
          <Link to="/publications" className="bento__paper-link">
            <img src={paper.image} alt="" loading="lazy" className="bento__paper-img" />
            <div>
              <p className="bento__label">Publication · {paper.year}</p>
              <h3 className="bento__heading bento__heading--sm">{paper.title}</h3>
              <span className="bento__more">
                Read more <LuArrowRight />
              </span>
            </div>
          </Link>
        </Reveal>

      </div>
    </section>
  );
}

function SelectedWork() {
  const [open, setOpen] = useState(null);
  const [first, ...rest] = featured;

  return (
    <section className="section container" aria-labelledby="work-title">
      <Reveal className="section-head section-head--row">
        <div className="section-head">
          <p className="eyebrow">Selected work</p>
          <h2 id="work-title" className="heading-lg">
            Things I've built.
          </h2>
        </div>
        <Link to="/projects" className="btn btn--ghost btn--sm">
          All projects <LuArrowRight />
        </Link>
      </Reveal>

      <div className="work-grid">
        <Reveal className="work-grid__large">
          <ProjectCard project={first} onOpen={setOpen} large />
        </Reveal>
        {rest.map((p, i) => (
          <Reveal key={p.id} delay={i * 80}>
            <ProjectCard project={p} onOpen={setOpen} />
          </Reveal>
        ))}
      </div>
      <ProjectDialog project={open} onClose={() => setOpen(null)} />
    </section>
  );
}

function About() {
  return (
    <section className="section container about" aria-labelledby="about-title">
      <Reveal className="about__portrait">
        <img src={portrait} alt={`Portrait of ${profile.name}`} loading="lazy" width="502" height="502" />
      </Reveal>
      <Reveal className="about__text" delay={80}>
        <p className="eyebrow">About</p>
        <h2 id="about-title" className="heading-lg">
          Hi, I'm Lilian.
        </h2>
        {profile.bio.map((p) => (
          <p key={p.slice(0, 24)} className="about__bio">
            {p}
          </p>
        ))}
        <dl className="about__facts">
          <div>
            <dt>
              <LuMapPin /> Based in
            </dt>
            <dd>{profile.location}</dd>
          </div>
          <div>
            <dt>
              <LuLanguages /> Languages
            </dt>
            <dd>{profile.languages.map((l) => `${l.name} (${l.level})`).join(" · ")}</dd>
          </div>
          <div>
            <dt>
              <LuHeart /> Outside work
            </dt>
            <dd>{profile.interests.join(" · ")}</dd>
          </div>
        </dl>
      </Reveal>
    </section>
  );
}

function Contact() {
  return (
    <section className="section container">
      <Reveal className="contact">
        <div className="contact__glow" aria-hidden="true" />
        <p className="eyebrow">Get in touch</p>
        <h2 className="heading-xl contact__title">Let's build robots that move.</h2>
        <p className="lede">Happy to talk about robotics, research, or new opportunities.</p>
        <div className="contact__actions">
          <a className="btn btn--primary" href={`mailto:${profile.email}`}>
            <LuMail /> {profile.email}
          </a>
          <a className="btn btn--ghost" href={profile.links.linkedin} target="_blank" rel="noreferrer">
            <LuLinkedin /> LinkedIn <LuArrowUpRight />
          </a>
        </div>
      </Reveal>
    </section>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <Highlights />
      <SelectedWork />
      <About />
      <Contact />
    </>
  );
}

export default Home;
