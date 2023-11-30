import profileImage from "../../images/profile.jpeg";
import { useContext } from "react";
import AboutMeContext from "../../context/AboutMeContext";
import { motion } from "framer-motion";

const AboutMeBio = () => {
	const { aboutMe } = useContext(AboutMeContext);

	return (
		<div className='block sm:flex sm:gap-10 mt-10 sm:mt-20'>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				transition={{
					ease: "easeInOut",
					duration: 0.6,
					delay: 0.15,
				}}
				className='w-full sm:w-5/12 mb-7 sm:mb-0'
			>
				<img src={profileImage} className='rounded-lg w-full dark:brightness-90' alt=' ' />
			</motion.div>

			<div className='font-general-regular w-full sm:w-3/4 text-left'>
				{aboutMe.map((bio) => (
					<p
						className='mb-4 text-ternary-dark dark:text-ternary-light text-lg'
						key={bio.id}
					>
						{bio.bio}
					</p>
				))}
			</div>
		</div>
	);
};

export default AboutMeBio;
