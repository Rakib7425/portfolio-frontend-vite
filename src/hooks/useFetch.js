import { useState, useEffect } from "react";

const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		// let options = {
		// 	method: method,
		// };

		// if (!method === "GET") {
		// 	options = {
		// 		method: method,
		// 		body: body,
		// 	};
		// }

		const fetchData = async () => {
			try {
				// const response = await fetch(url, options);
				const response = await fetch(url);
				if (!response.ok) {
					throw new Error("Failed to fetch data");
				}
				const result = await response.json();
				setData(result);
			} catch (error) {
				setError(error.message);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [url]);

	return { data, loading, error };
};

export default useFetch;
