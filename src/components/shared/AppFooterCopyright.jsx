import { Link } from "react-router-dom";

function AppFooterCopyright() {
	return (
		<div className='font-general-regular flex justify-center items-center text-center'>
			<div className='text-lg text-ternary-dark dark:text-ternary-light'>
				&copy; {new Date().getFullYear()}
				<Link
					to='https://github.com/Rakib7425'
					target='__blank'
					className='hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500'
				>
					React & Tailwind CSS Portfolio
				</Link>
				.
				<Link
					to='https://www.linkedin.com/in/rakibul-islam-969106259/'
					target='__blank'
					className='text-secondary-dark dark:text-secondary-light font-medium hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500'
				>
					Rakibul Islam
				</Link>
			</div>
		</div>
	);
}

export default AppFooterCopyright;
