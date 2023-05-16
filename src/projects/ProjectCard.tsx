import { Project } from "./Project";

const formatDescription = (description: string): string => {
  return description.substring(0, 60) + "...";
};

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = (props: ProjectCardProps) => {
  const { project } = props;
  return (
    <div className="card">
      <img src={project.imageUrl} alt={project.name} />
      <section className="strong">
        <h5>
          <strong>{project.name}</strong>
        </h5>
        <p>{formatDescription(project.description)}</p>
        <p>Budget : {project.budget.toLocaleString()}</p>
      </section>
    </div>
  );
};

export default ProjectCard;
