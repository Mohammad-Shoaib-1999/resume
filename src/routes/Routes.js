import { lazy } from "react";

const HomePage = lazy(() => import("../pages/HomePage"));
// const ProjectSingle = lazy(() => import("../pages/ProjectSingle"));
const ProjectsPage = lazy(() => import("../pages/ProjectsPage"));

export { HomePage,  ProjectsPage };
