import { useContext } from 'react';
import SingleBlogContext from '../../context/SingleBlogContext';

const BlogRelatedBlogs = () => {
	const { singleBlogData } = useContext(SingleBlogContext);

	return (
		<div className="mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
			<p className="font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left">
				{singleBlogData.RelatedProject.name}
			</p>

			<div className="grid grid-cols-1 sm:grid-cols-4 gap-10">
				{singleBlogData.RelatedBlog.Blogs.map((blog) => {
					return (
						<img
							src={blog.img}
							className="rounded-xl cursor-pointer"
							alt={blog.name}
							key={blog.id}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default BlogRelatedBlogs;