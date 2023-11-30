/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import SharePost from "./projects/SharePost";

const Icon = ({ icon, url, dataAction }) => {
	return (
		<SharePost text={"Share"} url={url}>
			<Link
				to={url}
				data-action={dataAction}
				target='_blank'
				rel='noopener noreferrer'
				aria-label='Share Project'
				className='bg-ternary-light  dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500'
			>
				<span className='text-lg lg:text-2xl'>{icon}</span>
			</Link>
		</SharePost>
	);
};

export default Icon;
