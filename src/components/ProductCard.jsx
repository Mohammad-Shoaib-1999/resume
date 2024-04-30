
import { Link, } from "react-router-dom";
import { motion } from 'framer-motion';

const ProductCard = ({ id,name, price, imageURL,url }) => {
 

  return (
    <>
    <motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.7,
				delay: 0.15,
			}}
		>
			<Link to={url} aria-label="Single Project">
				<div className="max-w-xl h-full m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
					<div>
						{/* <img
							src={imageURL}
							className="rounded-t-lg border-none"
							alt="Single Project"
						/> */}
					</div>
					<div className=" text-left px-2 py-4">
						<p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
							{name}
						</p>
						{/* <span className="text-lg text-ternary-dark dark:text-ternary-light">
							{price}
						</span> */}
					</div>
				</div>
			</Link>
		</motion.div>
    
    </>
  );
};

export default ProductCard;
