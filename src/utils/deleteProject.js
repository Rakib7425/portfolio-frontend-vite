import { deleteProjectByIdApiUrl } from "../apis/APIs";

const deleteProject = async (projectId) => {
	try {
		let headersList = {};

		let response = await fetch(`${deleteProjectByIdApiUrl}id=${projectId}`, {
			method: "DELETE",
			headers: headersList,
		});

		let data = await response.json();
		console.log(data);

		if (data.success) {
			return true;
		} else {
			return false;
		}

		//
	} catch (error) {
		console.log(error);
		return false;
	}
};

export { deleteProject };
