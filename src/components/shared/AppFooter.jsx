import { FiGithub, FiTwitter, FiLinkedin, FiSlack, FiInstagram } from "react-icons/fi";
import AppFooterCopyright from "./AppFooterCopyright";
import { Link } from "react-router-dom";

const socialLinks = [
	{
		id: 1,
		icon: <FiGithub />,
		url: "https://github.com/Rakib7425",
	},
	{
		id: 2,
		icon: <FiLinkedin />,
		url: "https://www.linkedin.com/in/rakibul-islam-969106259/",
	},
	{
		id: 3,
		icon: <FiInstagram />,
		url: "https://www.instagram.com/below_z3r0_",
	},
	{
		id: 4,
		icon: <FiTwitter />,
		url: "https://twitter.com/",
	},
	{
		id: 5,
		icon: <FiSlack />,
		url: "https://app.slack.com/client/T04AL25K0JG/D04D13Q3C56?cdn_fallback=2",
	},
];

const AppFooter = () => {
	return (
		<div className='container mx-auto'>
			<div className='pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark'>
				{/* Footer social links */}
				<div className='font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28'>
					<p className='text-3xl sm:text-4xl text-primary-dark dark:text-primary-light mb-5'>
						Follow me
					</p>
					<ul className='flex gap-4 sm:gap-8'>
						{socialLinks.map((link) => (
							<Link
								to={link.url}
								target='__blank'
								key={link.id}
								className='relative group text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300 hover:shadow-2xl overflow-hidden'
							>
								<i className='text-xl sm:text-2xl md:text-3xl relative z-10'>
									{link.icon}
								</i>
								<span className='absolute inset-0 bg-purple-700 opacity-0 group-hover:opacity-20 transition-opacity duration-300'></span>
							</Link>
						))}
					</ul>
				</div>

				<AppFooterCopyright />
			</div>
		</div>
	);
};

export default AppFooter;
