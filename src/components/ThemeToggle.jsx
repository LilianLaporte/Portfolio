import { LuMoon, LuSun } from "react-icons/lu";
import { useTheme } from "../hooks/useTheme";

function ThemeToggle() {
  const [theme, toggle] = useTheme();
  const next = theme === "dark" ? "light" : "dark";
  return (
    <button type="button" className="icon-btn" onClick={toggle} aria-label={`Switch to ${next} theme`} title={`Switch to ${next} theme`}>
      {theme === "dark" ? <LuSun /> : <LuMoon />}
    </button>
  );
}

export default ThemeToggle;
