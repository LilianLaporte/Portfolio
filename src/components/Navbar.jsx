import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { LuMenu, LuX, LuArrowUpRight } from "react-icons/lu";
import { SiGithub } from "react-icons/si";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import { profile } from "../data/profile";
import "./Navbar.css";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/projects", label: "Projects" },
  { to: "/resume", label: "Resume" },
  { to: "/publications", label: "Publications" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`nav ${scrolled || open ? "nav--solid" : ""} ${open ? "nav--open" : ""}`}>
      <div className="container nav__inner">
        <Link to="/" className="nav__brand" aria-label={`${profile.name} — home`}>
          <Logo size={30} />
        </Link>

        <nav className="nav__links" aria-label="Main">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className="nav__link">
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav__actions">
          <a className="icon-btn nav__github" href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <SiGithub />
          </a>
          <ThemeToggle />
          <a className="btn btn--primary btn--sm nav__cta" href={profile.cv} target="_blank" rel="noreferrer">
            CV <LuArrowUpRight />
          </a>
          <button
            type="button"
            className="icon-btn nav__toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <LuX /> : <LuMenu />}
          </button>
        </div>
      </div>

      <nav id="mobile-menu" className="nav__mobile" aria-label="Mobile" hidden={!open}>
        <div className="container">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className="nav__mobile-link">
              {l.label}
            </NavLink>
          ))}
          <a className="nav__mobile-link" href={profile.cv} target="_blank" rel="noreferrer">
            Download CV <LuArrowUpRight />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
