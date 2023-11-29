import { useState, createContext } from "react";
import { useParams } from "react-router-dom";
import { getProjectById } from "../utils/getProjectById";
import { useDispatch } from "react-redux";
import { setSingleProject } from "../store/singleProjectSlice.js";

const SingleProjectContext = createContext();

// eslint-disable-next-line react/prop-types
export const SingleProjectProvider = ({ children }) => {
	const [singleProjectData, setSingleProjectData] = useState([]);
	const [loading, setLoading] = useState(false);
	const { id } = useParams();
	const dispatch = useDispatch();
	useState(() => {
		const getData = async () => {
			let data = await getProjectById(id, setLoading);
			setSingleProjectData(data);
			// console.log(data);
			dispatch(setSingleProject(data));
		};

		getData();
	}, [id]);

	// console.log(loading, singleProjectData);

	return (
		<SingleProjectContext.Provider
			value={{ singleProjectData, setSingleProjectData, loading, setLoading }}
		>
			{children}
		</SingleProjectContext.Provider>
	);
};

export default SingleProjectContext;
