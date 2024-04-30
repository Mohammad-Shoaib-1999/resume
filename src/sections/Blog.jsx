import { NewspaperIcon } from "../icons";

import ProductCard from "../components/ProductCard";
import {postData} from "../data/post"
const Blog = () => {
 
  return (
    <>
      <div className="px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <NewspaperIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-black">
            Latest from Tech
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Some of the quality content, I find
          </p>
        </div>

        <div className=" mt-16 mb-5  grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 sm:gap-4 gap-14">
          {postData.map((book) => (
            <ProductCard key={book.id} id={book.id} {...book} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;

// import { CodeBracketIcon } from "../icons";
// import { BlogsProvider } from "../context/BlogsContext";
// import BlogsGrid from "../components/blogs/BlogsGrid";
// import { Link } from "react-router-dom";
// import Button from "../components/reusable/Button";

// export default function Blog() {
//   return (
//     <>
//       <div className="px-5 py-5 mx-auto text-center lg:px-40">
//         <div className="flex flex-col w-full mb-2">
//           <CodeBracketIcon className="mx-auto inline-block w-10 mb-4" />
//           <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-black">
//             Apps I've Built
//           </h1>
//           <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
//             Some of the projects, I worked on
//           </p>
//         </div>
//         <div className="flex flex-wrap justify-center items-center -m-4">
//           <BlogsProvider>
//             <BlogsGrid></BlogsGrid>
//           </BlogsProvider>
//           <div className="mt-4 sm:mt-8 flex justify-center">
//             <Link
//               to="/blogs"
//               className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
//               aria-label="More Blogs"
//             >
//               <Button title="More Blogs" />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


