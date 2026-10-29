import { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Publications from "./pages/Publications";
import { useSpotlight } from "./hooks/useSpotlight";

const titles = {
  "/": "Lilian Laporte · Robotics Engineer",
  "/projects": "Projects · Lilian Laporte",
  "/resume": "Resume · Lilian Laporte",
  "/publications": "Publications · Lilian Laporte",
};

function App() {
  const { pathname } = useLocation();
  useSpotlight();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    document.title = titles[pathname] ?? titles["/"];
  }, [pathname]);

  return (
    <>
      <Navbar />
      <main key={pathname}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project" element={<Navigate to="/projects" replace />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
