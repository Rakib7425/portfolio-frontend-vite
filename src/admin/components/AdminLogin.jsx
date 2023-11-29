import { useDispatch } from "react-redux";
import { setAdmin } from "../../store/adminSlice";
import { reuseInputClassnames } from "../../constants/adminConstants";
import { useState } from "react";
import { loginAdminApiUrl } from "../../apis/APIs";
import { toast } from "react-toastify";
import { Button } from "antd";

const AdminLogin = () => {
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(false);
	const [formData, setFormData] = useState({
		identifier: "",
		password: "",
	});
	// Set the admin

	const handleLogin = async () => {
		setIsLoading(true);
		let headersList = {
			"Content-Type": "application/json",
		};

		let bodyContent = JSON.stringify({
			identifier: formData.identifier,
			password: formData.password,
		});

		let response = await fetch(loginAdminApiUrl, {
			method: "POST",
			body: bodyContent,
			headers: headersList,
		});

		let data = await response.json();

		if (data.statusCode === 200) {
			dispatch(setAdmin(data));
			toast.success(`${data.message}`);
			setIsLoading(false);
		} else {
			dispatch(setAdmin(false));
			toast.error(`${data.message}`);
			setIsLoading(false);
		}
	};

	return (
		<div>
			<div className='w-full lg:w-1/2 mx-auto'>
				<div className='leading-loose'>
					<form
						onSubmit={(e) => {
							e.preventDefault();
						}}
						className='max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left'
					>
						<p className='font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8'>
							Admin Login Form
						</p>
						<div className='my-4.5'>
							<label className='my-2.5 block text-black dark:text-white'>
								Email or username *
							</label>
							<input
								required
								type='text'
								placeholder='Email or username *'
								className={reuseInputClassnames}
								value={formData.identifier}
								onChange={(e) => {
									setFormData((prevFormData) => ({
										...prevFormData,
										identifier: e.target.value,
									}));
								}}
							/>
						</div>
						<div className='my-4.5'>
							<label className='my-2.5 block text-black dark:text-white'>
								Password *
							</label>
							<input
								required
								type='password'
								placeholder='Password *'
								className={reuseInputClassnames}
								value={formData.password}
								onChange={(e) => {
									setFormData((prevFormData) => ({
										...prevFormData,
										password: e.target.value,
									}));
								}}
							/>
						</div>
						<div className='suggestion text-black dark:text-white mt-3'>
							<p>{`Email or username--->admin@admin.com`}</p>
							<p>{`Password----------->admin`}</p>
						</div>
						<div>
							<Button
								type='primary'
								loading={isLoading}
								className='h-12 text-lg font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500 cursor-pointer'
								onClick={handleLogin}
							>
								Login
							</Button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AdminLogin;
