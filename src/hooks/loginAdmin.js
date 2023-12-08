/* eslint-disable no-unused-vars */

import { useState } from "react";
const useLogin = () => {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);

	const loginUser = async (formData) => {
		try {
			setLoading(true);
		} catch (error) {
			setError(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { loading, data, error, loginUser };
};

export default useLogin;
