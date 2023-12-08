import { getContactQueriesApiUrl } from "../apis/APIs";

export const getContactQueries = async (setIsLoading) => {
	try {
		setIsLoading(true);
		let response = await fetch(getContactQueriesApiUrl, {
			method: "GET",
		});

		let data = await response.json();
		// console.log(data);
		setIsLoading(false);
		return data;

		//
	} catch (error) {
		// console.log(error);
		return error;
	}
};
