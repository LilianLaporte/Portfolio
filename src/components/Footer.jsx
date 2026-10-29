import { Link } from "react-router";
import { SiGithub, SiChessdotcom } from "react-icons/si";
import { LuLinkedin, LuMail } from "react-icons/lu";
import Logo from "./Logo";
import { profile } from "../data/profile";
import "./Footer.css";

export const socials = [
  { href: profile.links.github, label: "GitHub", icon: SiGithub },
  { href: profile.links.linkedin, label: "LinkedIn", icon: LuLinkedin },
  { href: `mailto:${profile.email}`, label: "Email", icon: LuMail },
  { href: profile.links.chess, label: "Chess.com", icon: SiChessdotcom },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Logo size={24} />
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
        </div>
        <nav className="footer__nav" aria-label="Footer">
          <Link to="/projects">Projects</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/publications">Publications</Link>
        </nav>
        <ul className="footer__socials">
          {socials.map(({ href, label, icon: Icon }) => (
            <li key={label}>
              <a className="icon-btn" href={href} target="_blank" rel="noreferrer" aria-label={label} title={label}>
                <Icon />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
