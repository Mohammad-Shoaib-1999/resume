import { useContext } from "react";
import { MagnifyingGlassIcon } from "../../icons";
import { ProjectsContext } from "../../context/ProjectsContext";
import ProjectSingle from "./ProjectSingle";
import ProjectsFilter from "./ProjectsFilter";

const ProjectsGrid = () => {
  const {
    projects,
    searchProject,
    setSearchProject,
    searchProjectsByTitle,
    selectProject,
    setSelectProject,
    selectProjectsByCategory,
  } = useContext(ProjectsContext);

  return (
    <>
      <div className="flex justify-center items-center mt-2 sm:mt-4">
        <div
          className="
                        flex
						flex-col
						
                        border-b border-primary-light
                        dark:border-secondary-dark
                        pb-3
				
                        gap-3
                        "
        >
          <div className="flex justify-between gap-2">
            <span
              className="
                                hidden
                                sm:block
                                bg-primary-light
                                dark:bg-ternary-dark
                                p-2.5
                                shadow-xl
                                rounded-xl
                                cursor-pointer
                                "
            >
              <MagnifyingGlassIcon className="text-ternary-dark dark:text-ternary-light w-5 h-5"></MagnifyingGlassIcon>
            </span>
            <input
              onChange={(e) => {
                setSearchProject(e.target.value);
              }}
              className="font-general-medium 
                                pl-3
                                pr-1
                                sm:px-4
                                py-2
                                border 
                            border-gray-400
                                dark:border-secondary-dark
                                rounded-lg
                                shadow-xl
                                text-sm
                                sm:text-md
                                bg-secondary-light
                                dark:bg-ternary-dark
                                text-primary-dark
                                dark:text-ternary-light
                                "
              id="name"
              name="name"
              type="search"
              required=""
              placeholder="Search Projects"
              aria-label="Name"
            />
          </div>

          <ProjectsFilter setSelectProject={setSelectProject} />
        </div>
      </div>
      <div className="mt-16 mb-5  grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 sm:gap-4 gap-14">
        {selectProject
          ? selectProjectsByCategory.map((project) => (
              <ProjectSingle data={project} key={project.id} />
            ))
          : searchProject
          ? searchProjectsByTitle.map((project) => (
              <ProjectSingle data={project} key={project.id} />
            ))
          : projects.map((project) => (
              <ProjectSingle data={project} key={project.id} />
            ))}
      </div>
    </>
  );
};

export default ProjectsGrid;
