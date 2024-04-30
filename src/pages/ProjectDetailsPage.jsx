import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { projectsData } from "../data/project";
import ProjectGallery from "../components/projects/ProjectsGallery";
import ProjectHeader from "../components/projects/ProjectHeader";
import ProjectInfo from "../components/projects/ProjectInfo";
import ProjectRelatedProjects from "../components/projects/ProjectRelatedProjects";
// import { SingleProjectProvider } from "../context/SingleProjectContext";
import { motion } from "framer-motion";
import { Footer, Nav } from "../sections";

const ProjectDetailsPage = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  console.log(id);
  useEffect(() => {
    const res = projectsData && projectsData.find((i) => i.id == id);
    setData(res);
  }, [id]);
  console.log(data);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.6,
        delay: 0.15,
      }}
      className="container mx-auto "
    >
      {data && (
        <>
        <Nav/>
          <ProjectHeader data={data} />
          <ProjectGallery data={data} />
          <ProjectInfo data={data} />
          <ProjectRelatedProjects data={data} />
          <Footer/>
        </>
      )}
    </motion.div>
  );
};

export default ProjectDetailsPage;
