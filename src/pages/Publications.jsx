import { LuArrowUpRight } from "react-icons/lu";
import Reveal from "../components/Reveal";
import { profile } from "../data/profile";
import { publications } from "../data/publications";
import "./Publications.css";

function Authors({ authors }) {
  return (
    <p className="publication__authors">
      {authors.map((a, i) => (
        <span key={a}>
          {a === profile.name ? <strong>{a}</strong> : a}
          {i < authors.length - 1 && ", "}
        </span>
      ))}
    </p>
  );
}

function Publications() {
  return (
    <div className="page container">
      <Reveal className="section-head">
        <p className="eyebrow">Publications</p>
        <h1 className="heading-xl">Research & writing.</h1>
        <p className="lede">Papers and datasets I've contributed to.</p>
      </Reveal>

      <ol className="publications">
        {publications.map((pub) => (
          <Reveal as="li" key={pub.id} className="card spotlight publication">
            <img className="publication__img" src={pub.image} alt="" loading="lazy" />
            <div className="publication__body">
              <p className="publication__meta">
                <span className="tag">{pub.year}</span> {pub.venue}
              </p>
              <h2 className="publication__title">{pub.title}</h2>
              <Authors authors={pub.authors} />
              <details className="publication__abstract">
                <summary>Abstract</summary>
                <p>{pub.abstract}</p>
              </details>
              <div className="publication__links">
                {pub.links.paper && (
                  <a className="btn btn--primary btn--sm" href={pub.links.paper} target="_blank" rel="noreferrer">
                    Read paper <LuArrowUpRight />
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}

export default Publications;
