import { useContext } from 'react';
import { ClockIcon, TagIcon } from '../../icons';
import SingleBlogContext from '../../context/SingleBlogContext';

const BlogSingleHeader = () => {
	const { singleBlogData } = useContext(SingleBlogContext);

	return (
		<div>
			<p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
				{singleBlogData.BlogHeader.name}
			</p>
			<div className="flex">
				<div className="flex items-center mr-10">
					<ClockIcon className="text-lg text-ternary-dark dark:text-ternary-light" />
					<span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
						{singleBlogData.BlogHeader.publishDate}
					</span>
				</div>
				<div className="flex items-center">
					<TagIcon className="text-lg text-ternary-dark dark:text-ternary-light" />
					<span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
						{singleBlogData.BlogHeader.tags}
					</span>
				</div>
			</div>
		</div>
	);
};

export default BlogSingleHeader;