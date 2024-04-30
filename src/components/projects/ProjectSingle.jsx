import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProjectSingle = ({ data }) => {
  console.log("data", data);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.7,
        delay: 0.15,
      }}
    >
      {/* <Link to="/projects/single-project" aria-label="Single Project"> */}
      <Link
        to={`/projects/single-project/${data.id}`}
        aria-label="Single Project"
      >
        <div className="max-w-xl m-3 bg-gray-100 border border-gray-300 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700">
          <div>
            <img
              src={data.img}
              className="rounded-t-lg border-none"
              alt="Single Project"
            />
          </div>
          <div className="text-center px-2 py-4">
            <p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
              {data.title}
            </p>
            <span className="text-lg text-ternary-dark dark:text-ternary-light">
              {data.category}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectSingle;
