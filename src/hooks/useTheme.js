import { useCallback, useEffect, useState } from "react";

const query = "(prefers-color-scheme: dark)";

function currentTheme() {
  const explicit = document.documentElement.dataset.theme;
  if (explicit === "light" || explicit === "dark") return explicit;
  return window.matchMedia(query).matches ? "dark" : "light";
}

export function useTheme() {
  const [theme, setTheme] = useState(currentTheme);

  // Follow OS changes while the user hasn't picked a theme explicitly.
  useEffect(() => {
    const media = window.matchMedia(query);
    const onChange = () => setTheme(currentTheme());
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const toggle = useCallback(() => {
    const next = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Storage can be unavailable (private mode); the toggle still works for this visit.
    }
    setTheme(next);
  }, []);

  return [theme, toggle];
}
