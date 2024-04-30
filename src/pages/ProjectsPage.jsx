import ProjectsGrid from "../components/projects/ProjectsGrid";
import { ProjectsProvider } from "../context/ProjectsContext";
const ProjectsPage = () => {
  return (
    <ProjectsProvider>
      <div className="container mx-auto">
        <ProjectsGrid />
      </div>
    </ProjectsProvider>
  );
};

export default ProjectsPage;
