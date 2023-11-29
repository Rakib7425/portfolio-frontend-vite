/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Icon = ({ icon }) => {
	return (
		<Link
			href={"social.url"}
			target='__blank'
			aria-label='Share Project'
			className='bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500'
		>
			<span className='text-lg lg:text-2xl'>{icon}</span>
		</Link>
	);
};

export default Icon;
