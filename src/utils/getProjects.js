import { getProjectsApiUrl } from "../apis/APIs";

export const getProjects = async (setLoading) => {
	try {
		setLoading(true);
		let headersList = {};

		let response = await fetch(getProjectsApiUrl, {
			method: "GET",
			headers: headersList,
		});

		let data = await response.json();
		// console.log(data);
		setLoading(false);
		return data.data;
	} catch (error) {
		console.error(error);
		setLoading(false);
		return null;
	}
};
