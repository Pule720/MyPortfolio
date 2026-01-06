import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { initParticlesEngine, Particles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Landing from "./pages/Landing";
import Projects from "./pages/Projects";
// @ts-ignore - JSX file
import ProjectDetail from "./pages/ProjectDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";






import { useParams, useNavigate } from "react-router-dom";
import ProjectDetails from "./pages/ProjectDetails.tsx";
import { PROJECTS_DATA } from "./pages/Projects"; // Make sure PROJECTS_DATA is exported

// Wrapper to pass props dynamically based on slug
function ProjectDetailsWrapper() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const project = PROJECTS_DATA.find(p => p.id === slug);
  if (!project) return <p>Project not found</p>;

  return <ProjectDetails project={project} onBack={() => navigate("/")} />;
}



export default function App() {
  const [init, setInit] = useState(false);

  // Initialize the particle engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-cyan-200 font-mono overflow-x-hidden selection:bg-cyan-500/30">
      {/* INTERACTIVE PARTICLE BACKGROUND */}
      {init && (
        <Particles
          id="tsparticles"
          options={{
            fpsLimit: 60,
            interactivity: {
              events: { onHover: { enable: true, mode: "repulse" } },
              modes: { repulse: { distance: 100, duration: 0.4 } },
            },
            particles: {
              color: { 
                value: [
                  "#00ffff", // neon cyan
                  "#ff00ff", // magenta
                  "#ff0080", // hot pink
                  "#8b00ff", // purple
                  "#00ff00", // neon green
                  "#ffd700", // gold
                  "#00f0ff", // bright cyan
                  "#ff1493", // deep pink
                ],
                animation: {
                  enable: true,
                  speed: 1,
                  sync: false
                }
              },
              links: { 
                color: { 
                  value: [
                    "#00ffff",
                    "#ff00ff",
                    "#ff0080",
                    "#8b00ff",
                  ]
                },
                distance: 150, 
                enable: true, 
                opacity: 0.3, 
                width: 1 
              },
              move: { enable: true, speed: 0.8 },
              number: { value: 80 },
              opacity: { value: 0.6 },
              size: { value: { min: 1, max: 3 } },
            },
          }}
          className="fixed inset-0 z-0"
          style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}
        />
      )}

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetailsWrapper />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </div>
  );
}