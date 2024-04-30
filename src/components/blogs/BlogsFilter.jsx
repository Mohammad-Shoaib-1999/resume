const selectOptions = [
	'Web Application',
	'Mobile Application',
	'UI/UX Design',
	'Branding',
];

const BlogsFilter = ({ setSelectBlog }) => {
	return (
		<select
			onChange={(e) => {
				setSelectBlog(e.target.value);
			}}
			className="font-general-medium 
                px-4
                sm:px-6
                py-2
                border
				shadow-xl
                dark:border-secondary-dark
                rounded-lg
                text-sm
                sm:text-md
                dark:font-medium
                bg-secondary-light
                dark:bg-ternary-dark
                text-primary-dark
                dark:text-ternary-light
            "
		>
			<option value={setSelectBlog} className="text-sm sm:text-md">
				All Blogs
			</option>

			{selectOptions.map((option) => (
				<option className="text-normal sm:text-md" key={option}>
					{option}
				</option>
			))}
		</select>
	);
};

export default BlogsFilter;