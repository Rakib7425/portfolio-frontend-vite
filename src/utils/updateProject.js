import { toast } from "react-toastify";
import { updateProjectApiUrl } from "../apis/APIs";

const updateProject = async (projectId, setLoading, formDataLocal, localImages) => {
	try {
		setLoading(true);
		let headersList = {};

		let bodyContent = new FormData();

		// Define an array of field names
		const fieldNames = [
			"title",
			"hostedLink",
			"gitHubLink",
			"category",
			"description",
			"challenges",
			"technologies",
		];

		// Iterate over the field names and append corresponding values
		fieldNames.forEach((fieldName) => {
			bodyContent.append(fieldName, formDataLocal[fieldName]);
		});

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
			setLoading(false);
			return data;
		} else {
			setLoading(false);
			toast.error(data.message);
			return false;
		}
	} catch (error) {
		setLoading(false);
		console.log(error);
		return false;
	}
};

export { updateProject };
