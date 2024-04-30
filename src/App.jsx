import { AnimatePresence } from "framer-motion";
import { Suspense } from "react";

import { Routes, Route } from "react-router-dom";
// import ScrollToTop from "./components/ScrollToTop";
// import UseScrollToTop from "./hooks/useScrollToTop";

import { HomePage, ProjectsPage } from "./routes/Routes.js";
import ProjectDetailsPage from "./pages/ProjectDetailsPage.jsx";

function App() {
  return (
    <AnimatePresence>
      <div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
        {/* <ScrollToTop /> */}
        <Suspense fallback={""}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route
              path="projects/single-project/:id"
              element={<ProjectDetailsPage />}
            />
          </Routes>
        </Suspense>
        {/* <UseScrollToTop /> */}
      </div>
    </AnimatePresence>
  );
}

export default App;
