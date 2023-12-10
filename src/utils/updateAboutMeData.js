import { toast } from "react-toastify";
import { updateAboutMeApiUrl } from "../apis/APIs";

const updateAboutMeData = async (setLoading, formDataLocal, image = null) => {
	try {
		setLoading(true);
		let headersList = {};

		let bodyContent = new FormData();

		// Define an array of field names
		const fieldNames = [
			"name",
			"email",
			"currentAddress",
			"currentlyLearning",
			"workHistory",
			"profilePhoto",
			// "techStack",
			"description",
		];

		// Iterate over the field names and append corresponding values
		fieldNames.forEach((fieldName) => {
			bodyContent.append(fieldName, formDataLocal[fieldName]);
		});

		if (image) {
			// image.forEach((img) => {
			bodyContent.append(`profilePhoto`, image);
			// });
		}

		let response = await fetch(`${updateAboutMeApiUrl} `, {
			method: "PATCH",
			body: bodyContent,
			headers: headersList,
		});

		let data = await response.json();
		console.log(data);

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

export { updateAboutMeData };
