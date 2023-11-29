import { useSelector } from "react-redux";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter, FaWhatsapp } from "react-icons/fa6";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";

import Icon from "../Icon";

const ProjectInfo = () => {
	const singleProjectData = useSelector((store) => store.singleProject.singleProject[0]);
	return (
		<div className='block sm:flex gap-0 sm:gap-10 mt-14'>
			<div className='w-full sm:w-1/3 text-left'>
				{/* Single project client details */}
				<div className='mb-7'>
					<p className='font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2'>
						{/* {singleProjectData.ProjectInfo.ClientHeading} */}About Project
					</p>
					<ul className='leading-loose'>
						<li className='font-general-regular text-ternary-dark dark:text-ternary-light'>
							<span>{`Live Link`}: </span>
							<a
								href={singleProjectData.hostedLink}
								className={
									"hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 first-letter:cursor-pointer duration-300"
								}
							>
								{singleProjectData.hostedLink}
							</a>
						</li>
						<li className='font-general-regular text-ternary-dark dark:text-ternary-light'>
							<span>{`GitHub Link`}: </span>
							<a
								href={singleProjectData.gitHubLink}
								className={
									"hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 first-letter:cursor-pointer duration-300"
								}
							>
								{singleProjectData.hostedLink}
							</a>
						</li>
					</ul>
				</div>

				{/* Single project objectives */}
				<div className='mb-7'>
					<p className='font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2'>
						Description
					</p>
					<p className='font-general-regular text-primary-dark dark:text-ternary-light'>
						{singleProjectData.description}
					</p>
				</div>

				{/* Single project technologies */}
				<div className='mb-7'>
					<p className='font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2'>
						{/* {singleProjectData.ProjectInfo.Technologies[0].title} */} Tools &
						Technologies
					</p>
					<p className='font-general-regular text-primary-dark dark:text-ternary-light'>
						{singleProjectData.technologies.join(", ")}
					</p>
				</div>

				{/* Single project social sharing */}
				<div>
					<p className='font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2'>
						{/* {singleProjectData.ProjectInfo.SocialSharingHeading} */} Share This
					</p>
					<div className='flex items-center gap-3 mt-5'>
						<Icon icon={<FaInstagram />} />
						<Icon icon={<FaTwitter />} />
						<Icon icon={<SlSocialLinkedin />} />
						<Icon icon={<SlSocialFacebook />} />
						<Icon icon={<FaWhatsapp />} />
					</div>
				</div>
			</div>

			{/*  Single project right section */}
			<div className='w-full sm:w-2/3 text-left mt-10 sm:mt-0'>
				<p className='font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7'>
					Challenges
				</p>

				<p className='font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light'>
					{singleProjectData.challenges}
				</p>
			</div>
		</div>
	);
};

export default ProjectInfo;
