import { useState, createContext } from 'react';
import { postData } from '../data/post';

// Create projects context
export const BlogsContext = createContext();

// Create the projects context provider
export const BlogsProvider = (props) => {
	const [blogs, setBlogs] = useState(postData);
	const [searchBlog, setSearchBlog] = useState('');
	const [selectBlog, setSelectBlog] = useState('');

	// Search projects by project title
	const searchBlogsByName = blogs.filter((item) => {
		const result = item.name
			.toLowerCase()
			.includes(searchBlog.toLowerCase())
			? item
			: searchBlog === ''
			? item
			: '';
		return result;
	});

	// Select projects by project category
	const selectBlogsByCategory = blogs.filter((item) => {
		let category =
			item.category.charAt(0).toUpperCase() + item.category.slice(1);
		return category.includes(selectBlog);
	});

	return (
		<BlogsContext.Provider
			value={{
				blogs,
				setBlogs,
				searchBlog,
				setSearchBlog,
				searchBlogsByName,
				selectBlog,
				setSelectBlog,
				selectBlogsByCategory,
			}}
		>
			{props.children}
		</BlogsContext.Provider>
	);
};