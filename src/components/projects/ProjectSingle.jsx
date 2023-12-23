/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ShimmerEffect from "../../admin/components/loader/ShimmerEffect";
import { Button } from "antd";

const ProjectSingle = ({ id, title, category, image, loading, hostedLink, gitHubLink }) => {
	// console.log(hostedLink, gitHubLink);
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: "easeInOut",
				duration: 0.7,
				delay: 0.15,
			}}
		>
			<Link to={`/project/${id}`} aria-label='Single Project'>
				<div className='rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark'>
					<div>
						{loading ? (
							<ShimmerEffect />
						) : (
							<img
								src={image}
								className='rounded-t-xl border-none'
								alt='Single Project'
							/>
						)}
					</div>

					<div className='text-center px-4 py-6 mb-4'>
						<p className='font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2'>
							{title}
						</p>
						<span className='text-lg text-ternary-dark  dark:text-ternary-light'>
							{category}
						</span>
					</div>
				</div>
			</Link>
			<div className='flex justify-around pb-4 md:-mt-8 -mt-14 backdrop-blur-sm'>
				<Link to={gitHubLink} target='_blank' rel='noopener noreferrer'>
					<Button className='shadow-md bg-yellow-300 border-none dark:bg-gray-400 rounded-md hover:text-pink-600 duration-200'>
						Repo link
					</Button>
				</Link>
				<Link to={hostedLink} target='_blank' rel='noopener noreferrer'>
					<Button className='shadow-md bg-yellow-300 border-none dark:bg-gray-400 rounded-md hover:text-red-600 duration-200'>
						Live link
					</Button>
				</Link>
			</div>
		</motion.div>
	);
};

export default ProjectSingle;
