import { updateProjectApiUrl } from "../apis/APIs";

const updateProject = async (projectId, formDataLocal, localImages) => {
	try {
		let headersList = {};

		let bodyContent = new FormData();
		// Append other form data fields
		bodyContent.append("title", formDataLocal.title);
		bodyContent.append("hostedLink", formDataLocal.hostedLink);
		bodyContent.append("gitHubLink", formDataLocal.gitHubLink);
		bodyContent.append("category", formDataLocal.category);
		bodyContent.append("description", formDataLocal.description);
		bodyContent.append("challenges", formDataLocal.challenges);
		bodyContent.append("technologies", formDataLocal.technologies);

		if (localImages) {
			localImages.forEach((img) => {
				bodyContent.append(`images`, img);
			});
		}

		let response = await fetch(`${updateProjectApiUrl}${projectId}`, {
			method: "PATCH",
			body: bodyContent,
			headers: headersList,
		});

		let data = await response.json();
		// console.log(data);

		if (data.success) {
			return data;
		} else {
			return false;
		}
	} catch (error) {
		console.log(error);
		return false;
	}
};

export { updateProject };
