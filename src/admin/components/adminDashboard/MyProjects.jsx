import Table from "./projectsTable/Table";
import { motion } from "framer-motion";

const MyProjects = () => {
	return (
		<motion.div
			className=' w-full min-h-64'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: "easeInOut",
				duration: 0.7,
				delay: 0.11,
			}}
		>
			<Table />
		</motion.div>
	);
};

export default MyProjects;
