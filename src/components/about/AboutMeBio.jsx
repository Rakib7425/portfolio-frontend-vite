import { useContext } from "react";
import AboutMeContext from "../../context/AboutMeContext";
import { motion } from "framer-motion";
import Loader from "../../admin/components/loader/Loader";

const AboutMeBio = () => {
	const { aboutMe, loading } = useContext(AboutMeContext);
	const data = aboutMe.data;

	//
	return loading ? (
		<Loader />
	) : (
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
				<img
					src={data?.profilePhoto}
					className='rounded-lg w-full dark:brightness-90'
					alt='myProfileImage'
				/>
			</motion.div>

			<div className='font-general-regular w-full sm:w-3/4 text-left dark:text-white'>
				{aboutMe &&
					data &&
					data?.description.split("\n").map((line, index) => (
						<section key={index}>
							{line}
							<br />
						</section>
					))}
			</div>
		</div>
	);
};

export default AboutMeBio;
