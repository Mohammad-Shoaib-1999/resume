import { useContext } from "react";
import { MagnifyingGlassIcon } from "../../icons";
import BlogSingle from "./BlogSingle";
import { BlogsContext } from "../../context/BlogsContext";
import BlogsFilter from "./BlogsFilter";

const BlogsGrid = () => {
  const {
    blogs,
    searchBlog,
    setSearchBlog,
    searchBlogsByName,
    selectBlog,
    setSelectBlog,
    selectBlogsByCategory,
  } = useContext(BlogsContext);

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
                setSearchBlog(e.target.value);
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
              placeholder="Search blogs"
              aria-label="Name"
            />
          </div>

          <BlogsFilter setSelectblog={setSelectBlog} />
        </div>
      </div>
      <div className="mt-16 mb-5  grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 sm:gap-4 gap-14">
        {selectBlog
          ? selectBlogsByCategory.map((blog) => (
              <BlogSingle
                title={blog.title}
                category={blog.category}
                image={blog.img}
                key={blog.id}
              />
            ))
          : searchBlog
          ? searchBlogsByName.map((blog) => (
              <BlogSingle
                title={blog.title}
                category={blog.category}
                image={blog.img}
                key={blog.id}
              />
            ))
          : blogs.map((blog) => (
              <BlogSingle
                title={blog.title}
                category={blog.category}
                image={blog.img}
                key={blog.id}
              />
            ))}
      </div>
    </>
  );
};

export default BlogsGrid;
