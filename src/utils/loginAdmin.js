import { useState } from "react";
import { loginAdminApiUrl } from "../apis/APIs";
import useFetch from "../hooks/useFetch";
import { setAdmin } from "../store/adminSlice";
import { useDispatch } from "react-redux";

const useLogin = () => {
	const dispatch = useDispatch();
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
