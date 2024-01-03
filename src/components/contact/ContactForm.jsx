import { useState } from "react";
import { reuseInputClassnames } from "../../constants/adminConstants";
import { contactMeApiUrl } from "../../apis/APIs";
import { toast } from "react-toastify";
import { Button } from "antd";

const ContactForm = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [formData, setFormData] = useState({
		fullName: "",
		email: "",
		subject: "",
		message: "",
	});

	const handleSubmitForm = async () => {
		const { fullName, email, subject, message } = formData;

		if (!(fullName && email && subject && message)) {
			return toast.warn(`All fields are required!`);
		}
		setIsLoading(true);
		let headersList = {
			"Content-Type": "application/json",
		};

		let bodyContent = JSON.stringify({
			fullName,
			email,
			subject,
			message,
		});

		let response = await fetch(contactMeApiUrl, {
			method: "POST",
			body: bodyContent,
			headers: headersList,
		});

		let data = await response.json();
		if (data.success) {
			toast.success(data.message);
			setIsLoading(false);
			setFormData({
				fullName: "",
				email: "",
				subject: "",
				message: "",
			});
			return;
		}
		setIsLoading(false);
	};

	return (
		<div className='w-full lg:w-2/3'>
			<div className='leading-loose'>
				<form
					onSubmit={(e) => {
						e.preventDefault();
					}}
					className='max-w-2xl m-4 p-2 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left'
				>
					<p className='font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8'>
						Contact Form
					</p>
					<div className='my-4.5'>
						<label className='my-2.5 block text-lg text-black dark:text-white'>
							Full Name *
						</label>
						<input
							required
							type='text'
							placeholder='Full Name *'
							className={reuseInputClassnames}
							value={formData.fullName}
							onChange={(e) => {
								setFormData((prevFormData) => ({
									...prevFormData,
									fullName: e.target.value,
								}));
							}}
						/>
					</div>

					<div className='my-4.5'>
						<label className='my-2.5 block text-lg text-black dark:text-white'>
							Your Email *
						</label>

						<input
							required
							type='email'
							placeholder='Your Email *'
							className={reuseInputClassnames}
							value={formData.email}
							onChange={(e) => {
								setFormData((prevFormData) => ({
									...prevFormData,
									email: e.target.value,
								}));
							}}
						/>
					</div>
					{/*  */}
					<div className='my-4.5'>
						<label className='my-2.5 block text-lg text-black dark:text-white'>
							Subject *
						</label>

						<input
							required
							type='text'
							placeholder='Subject *'
							className={reuseInputClassnames}
							value={formData.subject}
							onChange={(e) => {
								setFormData((prevFormData) => ({
									...prevFormData,
									subject: e.target.value,
								}));
							}}
						/>
					</div>

					<div className='mt-6'>
						<label
							className='block text-lg text-primary-dark dark:text-primary-light mb-2'
							htmlFor='message'
						>
							Message *
						</label>
						<textarea
							className='w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md'
							id='message'
							name='message'
							cols='14'
							rows='6'
							placeholder='Message *'
							aria-label='Message'
							value={formData.message}
							onChange={(e) => {
								setFormData((prevFormData) => ({
									...prevFormData,
									message: e.target.value,
								}));
							}}
						></textarea>
					</div>

					<div className=''>
						<Button
							type='primary'
							loading={isLoading}
							onClick={handleSubmitForm}
							className='font-general-medium w-40 px-4  text-white bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500 py-6 flex items-center justify-center text-lg'
						>
							Submit
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ContactForm;
