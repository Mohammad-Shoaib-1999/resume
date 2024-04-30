import { useContext } from 'react';
import SingleBlogContext from '../../context/SingleBlogContext';

const BlogGallery = () => {
	const { singleBlogData } = useContext(SingleBlogContext);

	return (
		<div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
			{singleBlogData.BlogImages.map((blog) => {
				return (
					<div className="mb-10 sm:mb-0" key={blog.id}>
						<img
							src={blog.img}
							className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
							alt={blog.name}
							key={blog.id}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default BlogGallery;