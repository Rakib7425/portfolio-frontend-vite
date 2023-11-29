import { useState } from "react";
import { Link } from "react-router-dom";
import CreateProject from "./CreateProject";
import AboutMe from "./AboutMe";
import ContactQueries from "./ContactQueries";
import MyProjects from "./MyProjects";

const AdminDashboard = () => {
	const [isAddPost, setIsAddPost] = useState(true);
	const [isMyProjects, setIsMyProjects] = useState(false);
	const [isAboutMe, setIsAboutMe] = useState(false);
	const [isContactQueries, setIsContactQueries] = useState(false);

	return (
		<div className='flex gap-8'>
			<div className='left sidebar w-[20%] gap-4'>
				<ul className='flex flex-col text-xl dark:text-white'>
					<Link
						className={`pb-2 border-b-2 mt-2 cursor-pointer hover:opacity-50 duration-200 ${
							isAddPost ? "opacity-50" : ""
						}`}
						onClick={() => {
							setIsAddPost(true);
							setIsAboutMe(false);
							setIsContactQueries(false);
							setIsMyProjects(false);
						}}
					>
						Add Project
					</Link>
					<Link
						className={`pb-2 border-b-2 mt-2 cursor-pointer hover:opacity-50 duration-200 ${
							isMyProjects ? "opacity-50" : ""
						}`}
						onClick={() => {
							setIsAddPost(false);
							setIsMyProjects(true);
							setIsAboutMe(false);
							setIsContactQueries(false);
						}}
					>
						Edit Projects
					</Link>
					<Link
						className={`pb-2 border-b-2 mt-2 cursor-pointer hover:opacity-50 duration-200 ${
							isAboutMe ? "opacity-50" : ""
						}`}
						onClick={() => {
							setIsAddPost(false);
							setIsContactQueries(false);
							setIsAboutMe(true);
							setIsMyProjects(false);
						}}
					>
						Edit About Me
					</Link>
					<Link
						className={`pb-2 border-b-2 mt-2 cursor-pointer hover:opacity-50 duration-200 ${
							isContactQueries ? "opacity-50" : ""
						}`}
						onClick={() => {
							setIsAddPost(false);
							setIsAboutMe(false);
							setIsMyProjects(false);
							setIsContactQueries(true);
						}}
					>
						Contact Queries
					</Link>
					{/* <Link className='pb-2 border-b-2 mt-2 cursor-pointer'>More Option</Link> */}
				</ul>
			</div>

			{isAddPost && <CreateProject />}
			{isAboutMe && <AboutMe />}
			{isContactQueries && <ContactQueries />}
			{isMyProjects && <MyProjects />}
		</div>
	);
};

export default AdminDashboard;
