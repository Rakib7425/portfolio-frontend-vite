import { useState, createContext, useEffect } from "react";
import { clientsHeading as clientsPageHeading } from "../data/clientsData";
import { clientsData as clientsDataJson } from "../data/clientsData";
import { getAboutMeData } from "../utils/aboutMeData";

const AboutMeContext = createContext();

// eslint-disable-next-line react/prop-types
export const AboutMeProvider = ({ children }) => {
	const [aboutMe, setAboutMe] = useState([]);
	const [loading, setLoading] = useState([]);

	const clientsHeading = clientsPageHeading;

	const [clientsData, setClientsData] = useState(clientsDataJson);

	useEffect(() => {
		const getData = async () => {
			setAboutMe(await getAboutMeData(setLoading));
		};
		getData();
	}, []);

	return (
		<AboutMeContext.Provider
			value={{
				aboutMe,
				setAboutMe,
				clientsHeading,
				clientsData,
				setClientsData,
				loading,
			}}
		>
			{children}
		</AboutMeContext.Provider>
	);
};

export default AboutMeContext;

// export const useAboutMeContext = () => {
// 	return useContext(AboutMeContext);
// };
