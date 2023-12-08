import { getAboutMeApiUrl } from "../apis/APIs";

const getAboutMeData = async (setLoading) => {
	try {
		setLoading(true);

		let response = await fetch(getAboutMeApiUrl);

		let data = await response.json();

		// console.log(data);

		setLoading(false);
		return data;

		//
	} catch (error) {
		console.log(error);
		setLoading(false);
		return error;
	}
};

export { getAboutMeData };
