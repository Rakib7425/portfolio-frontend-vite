import { toast } from "react-toastify";
import { createProjectApiUrl } from "../apis/APIs";

export const addProject = async (formDataLocal, imagesLocal, setFormData, setImages) => {
	try {
		const loadingId = toast.loading(`Processing Your Request...! `);

		const headersList = {};

		const bodyContent = new FormData();

		// Append each image to the FormData object
		imagesLocal.forEach((img) => {
			bodyContent.append(`images`, img);
		});

		// Append other form data fields
		bodyContent.append("title", formDataLocal.title);
		bodyContent.append("hostedLink", formDataLocal.hostedLink);
		bodyContent.append("gitHubLink", formDataLocal.gitHubLink);
		bodyContent.append("category", formDataLocal.category);
		bodyContent.append("description", formDataLocal.description);
		bodyContent.append("challenges", formDataLocal.challenges);
		bodyContent.append("technologies", formDataLocal.technologies);

		// Make the POST request
		const response = await fetch(createProjectApiUrl, {
			method: "POST",
			body: bodyContent,
			headers: headersList,
		});

		// Parse the response
		const data = await response.json();

		// Log the response data
		// console.log(data);
		if (data.success) {
			toast.update(loadingId, {
				render: "Successfully Added a Project!!",
				type: "success",
				isLoading: false,
			});
			setFormData({
				title: "",
				hostedLink: "",
				gitHubLink: "",
				category: "",
				description: "",
				challenges: "",
				technologies: "",
			});
			setImages([]);
			toast.dismiss();
		} else {
			toast.update(loadingId, {
				render: "Something went wrong , Check backend console",
				type: "success",
				isLoading: false,
			});
			toast.dismiss();
		}
	} catch (error) {
		toast.error(`Something went wrong , Check console`);
		console.error("Error adding project:", error.message);
		toast.dismiss();
	}
};
