import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/adminDashboard/AdminDashboard";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const Admin = () => {
	const admin = useSelector((store) => store.admin.admin);

	return (
		//
		<div className='min-h-[50vh]'>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				transition={{
					ease: "easeInOut",
					duration: 0.6,
					delay: 0.15,
				}}
				className='container mx-auto'
			>
				{admin ? <AdminDashboard /> : <AdminLogin />}
			</motion.div>
		</div>
	);
};

export default Admin;
