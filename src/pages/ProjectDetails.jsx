import { useParams } from "react-router-dom";
import Terminal from "../components/Terminal";
import { projects } from "../data/projects";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) return null;

  return (
    <main className="min-h-screen flex justify-center px-4 pt-20">
      <Terminal>
        <h1 className="text-xl mb-4">{project.title}</h1>

        <p className="mb-2">
          <strong>Problem:</strong> {project.problem}
        </p>

        <p className="mb-4">
          <strong>Approach:</strong> {project.approach}
        </p>

        <ul className="list-disc list-inside text-accent">
          {project.impact.map(i => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      </Terminal>
    </main>
  );
}
