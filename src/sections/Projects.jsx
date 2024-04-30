import { CodeBracketIcon } from "../icons";
import { ProjectsProvider } from "../context/ProjectsContext";
import ProjectsGrid from "../components/projects/ProjectsGrid";
import { Link } from "react-router-dom";
import Button from "../components/reusable/Button";

export default function Projects() {
  return (
    <>
      <div className="px-5 py-5 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-2">
          <CodeBracketIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-black">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Some of the projects, I worked on
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center -m-4">
          <ProjectsProvider>
            <ProjectsGrid></ProjectsGrid>
          </ProjectsProvider>
          <div className="mt-4 sm:mt-8 flex justify-center">
            <Link
              to="/projects"
              className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
              aria-label="More Projects"
            >
              <Button title="More Projects" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

