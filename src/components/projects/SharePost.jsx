import { RWebShare } from "react-web-share";

// eslint-disable-next-line react/prop-types
const SharePost = ({ text = "hello", url, icon }) => {
	return (
		<div>
			<RWebShare
				data={{
					text: text,
					url: url || "https://rakib-mern-portfolio.netlify.app/",
					title: "Share a post",
				}}
				onClick={() => {}}
			>
				<button className='bg-ternary-light text-3xl dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500'>
					{icon}
				</button>
			</RWebShare>
		</div>
	);
};

export default SharePost;
