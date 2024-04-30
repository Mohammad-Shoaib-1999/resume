import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const BlogSingle = ({ name, category, image }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.7,
				delay: 0.15,
			}}
		>
			<Link to="/blogs/single-blog" aria-label="Single Blog">
				<div className="max-w-xl m-3 bg-gray-100 border border-gray-300 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700">
					<div>
						<img
							src={image}
							className="rounded-t-lg border-none"
							alt="Single Blog"
						/>
					</div>
					<div className="text-center px-2 py-4">
						<p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
							{name}
						</p>
						<span className="text-lg text-ternary-dark dark:text-ternary-light">
							{category}
						</span>
					</div>
				</div>
			</Link>
		</motion.div>
	);
};

export default BlogSingle;