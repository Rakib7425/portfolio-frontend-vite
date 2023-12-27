import useThemeSwitcher from "../../hooks/useThemeSwitcher";
import { FiArrowDownCircle } from "react-icons/fi";
import developerLight from "../../images/developer.svg";
import developerDark from "../../images/developer-dark.svg";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getAboutMeData } from "../../utils/aboutMeData";

const AppBanner = () => {
	const [activeTheme] = useThemeSwitcher();
	const [loading, setLoading] = useState([]);

	const [techStack, setTechStack] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const data = await getAboutMeData(setLoading);
			setTechStack(data.data.techStack);
			// console.log(data);
		};
		getData();
	}, []);

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
			className='flex flex-col sm:justify-between items-center sm:flex-row mt-10 md:mt-2'
		>
			<div className='w-full md:w-1/3 text-left'>
				<motion.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: "easeInOut",
						duration: 0.9,
						delay: 0.1,
					}}
					className='font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light  '
				>
					<span>Hi, I&apos;m Rakibul Islam.</span>
				</motion.h1>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: "easeInOut",
						duration: 0.9,
						delay: 0.2,
					}}
					className='font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200'
				>
					A{" "}
					<span className='bg-gradient-to-br from-purple-500 to-pink-700 bg-clip-text text-transparent font-semibold'>
						MERN
					</span>
					-Stack Developer &&nbsp; UI/UX
					<span className='bg-gradient-to-tr from-yellow-300 to-red-500 bg-clip-text text-transparent font-semibold animate-custom duration-200'>
						{" "}
						Design Enthusiast
					</span>
					<span className='opacity-80 text-yellow-800'>.</span>
				</motion.p>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: "easeInOut",
						duration: 0.9,
						delay: 0.3,
					}}
					className='flex justify-center sm:block'
				>
					<a
						download='Rakibul-Resume.pdf'
						href='/files/Rakibul-Resume.pdf'
						className='font-general-medium flex justify-center items-center w-36 sm:w-48 mt-10 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2 sm:py-3 shadow-lg rounded-lg bg-indigo-500 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-600 hover:text-gray-300 text-white duration-500'
						aria-label='Download Resume'
					>
						<FiArrowDownCircle className='mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100 animate-pulse' />
						<span className='text-sm sm:text-lg font-general-medium duration-100'>
							Download CV
						</span>
					</a>
				</motion.div>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: "easeInOut",
						duration: 0.9,
						delay: 0.3,
					}}
					className='flex justify-center sm:block mt-10  flex-col '
				>
					<h2 className='text-xl font-bold dark:text-white mb-2 border-b-2 border-gray-300'>
						My-Tech Stack : -
					</h2>

					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{
							ease: "circInOut",
							duration: 0.9,
							delay: 0.1,
						}}
						className='logos flex flex-wrap gap-3 justify-start mt-2'
					>
						{techStack &&
							techStack.map((techImg) =>
								loading ? (
									"loading..."
								) : (
									<img
										key={techImg}
										src={techImg}
										alt='techLogo'
										className='w-10 h-10'
									/>
								)
							)}
					</motion.div>
				</motion.div>
			</div>

			<motion.div
				initial={{ opacity: 0, y: -180 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ ease: "easeInOut", duration: 0.7, delay: 0.2 }}
				className='w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0'
			>
				<img
					className='block animate-pulse'
					src={activeTheme === "dark" ? developerLight : developerDark}
					alt='DeveloperSVG'
				/>
			</motion.div>
		</motion.section>
	);
};

export default AppBanner;
