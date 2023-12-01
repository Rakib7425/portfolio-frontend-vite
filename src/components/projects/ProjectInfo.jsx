import { useSelector } from "react-redux";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaWhatsapp } from "react-icons/fa6";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";

import { Link } from "react-router-dom";
import SharePost from "./SharePost";

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
							<Link
								to={singleProjectData?.hostedLink}
								target='_blank'
								className={
									"hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 first-letter:cursor-pointer duration-300 underline"
								}
							>
								{singleProjectData.hostedLink}
							</Link>
						</li>
						<li className='font-general-regular text-ternary-dark dark:text-ternary-light'>
							<span>{`GitHub Link`}: </span>
							<Link
								target='_blank'
								to={singleProjectData?.gitHubLink}
								className={
									"hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 first-letter:cursor-pointer duration-300 underline"
								}
							>
								{singleProjectData?.gitHubLink}
							</Link>
						</li>
					</ul>
				</div>

				{/* Single project objectives */}
				<div className='mb-7'>
					<p className='font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2'>
						Overview
					</p>
					<p className='font-general-regular text-primary-dark dark:text-ternary-light'>
						{singleProjectData.description.slice(0, 300) + ". . . . . ."}
					</p>
				</div>

				{/* Single project technologies */}
				<div className='mb-7'>
					<p className='font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2'>
						Tools & Technologies
					</p>
					<p className='font-general-regular text-primary-dark dark:text-ternary-light '>
						{singleProjectData.technologies.join(",")}
					</p>
				</div>

				{/* Single project social sharing */}
				<div>
					<p className='font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2'>
						{" "}
						Share This
					</p>
					<div className='flex items-center gap-3 mt-5'>
						<SharePost icon={<FaInstagram />} url={window.location} />
						<SharePost icon={<FaXTwitter />} />
						<SharePost icon={<SlSocialLinkedin />} />
						<SharePost icon={<SlSocialFacebook />} />
						<SharePost
							icon={<FaWhatsapp />}
							url={`https://api.whatsapp.com/send?text=${window.location}`}
						/>
					</div>
				</div>
			</div>

			{/*  Single project right section */}
			<div className='w-full sm:w-2/3 text-left mt-10 sm:mt-0'>
				{/* Single project objectives */}
				<p className='font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7'>
					Description -
				</p>

				{/* Rendering the description of a single project. */}
				<p className='font-general-regular text-primary-dark dark:text-ternary-light'>
					{singleProjectData.description && (
						<>
							{singleProjectData.description.split("\n").map((line, index) => (
								<section key={index}>
									{line}
									<br />
								</section>
							))}
						</>
					)}
				</p>

				<p className='font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7 mt-7'>
					Challenges -
				</p>

				{/* Rendering the description of a single project. */}
				<p className='font-general-regular text-primary-dark dark:text-ternary-light'>
					{singleProjectData.challenges && (
						<>
							{singleProjectData.challenges.split("\n").map((line, index) => (
								<section key={index}>
									{line}
									<br />
								</section>
							))}
						</>
					)}
				</p>
			</div>
		</div>
	);
};

export default ProjectInfo;
