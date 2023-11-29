import ProjectGallery from "../components/projects/ProjectGallery";
import ProjectHeader from "../components/projects/ProjectHeader";
import { motion } from "framer-motion";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getProjectById } from "../utils/getProjectById";
import { useDispatch } from "react-redux";
import { setSingleProject } from "../store/singleProjectSlice.js";
import ShimmerEffect from "../admin/components/loader/ShimmerEffect.jsx";
import ProjectInfo from "../components/projects/ProjectInfo.jsx";

const ProjectSingle = () => {
	const [loading, setLoading] = useState(false);
	const { id } = useParams();
	const dispatch = useDispatch();
	useState(() => {
		const getData = async () => {
			let data = await getProjectById(id, setLoading);
			dispatch(setSingleProject(data));
		};

		getData();
	}, [id]);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: "easeInOut",
				duration: 0.6,
				delay: 0.15,
			}}
			className='container mx-auto mt-5 sm:mt-10'
		>
			{loading ? <ShimmerEffect /> : <ProjectHeader />}
			{loading ? <ShimmerEffect /> : <ProjectGallery />}
			{loading ? <ShimmerEffect /> : <ProjectInfo />}

			{/* <ProjectRelatedProjects /> */}
		</motion.div>
	);
};

export default ProjectSingle;
