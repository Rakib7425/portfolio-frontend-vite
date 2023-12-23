import { useState, createContext, useEffect } from "react";
import { getProjects } from "../utils/getProjects";

// Create projects context
export const ProjectsContext = createContext();

// Create the projects context provider
export const ProjectsProvider = (props) => {
	const [projects, setProjects] = useState([]);
	const [loading, setLoading] = useState(false);

	const [searchProject, setSearchProject] = useState("");
	const [selectProject, setSelectProject] = useState("");

	useEffect(() => {
		const getData = async () => {
			const data = await getProjects(setLoading);
			setProjects(data);
		};
		getData();
	}, []);

	// Search projects by project title
	const searchProjectsByTitle = projects?.filter((item) => {
		const result = item.title.toLowerCase().includes(searchProject.toLowerCase())
			? item
			: searchProject === ""
			? item
			: "";
		return result;
	});

	// Select projects by project category
	const selectProjectsByCategory = projects?.filter((item) => {
		let category = item.category.charAt(0).toUpperCase() + item.category.slice(1);
		return category.includes(selectProject);
	});

	return (
		<ProjectsContext.Provider
			value={{
				projects,
				setProjects,
				searchProject,
				setSearchProject,
				searchProjectsByTitle,
				selectProject,
				setSelectProject,
				selectProjectsByCategory,
				loading,
			}}
		>
			{/* eslint-disable-next-line react/prop-types*/}
			{props.children}
		</ProjectsContext.Provider>
	);
};
