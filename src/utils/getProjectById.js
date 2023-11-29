import { getProjectByIdApiUrl } from "../apis/APIs";

export const getProjectById = async (projectId, setLoading) => {
	try {
		setLoading(true);
		let headersList = {};

		let response = await fetch(`${getProjectByIdApiUrl}${projectId}`, {
			method: "GET",
			headers: headersList,
		});

		let data = await response.json();
		// console.log(data);
		setLoading(false);
		return data.data;
	} catch (error) {
		console.log(error);
		setLoading(false);
		return error;
	}
};
