import { motion } from "framer-motion";
import { FiX } from "react-icons/fi";
import { contactMeApiUrl } from "../apis/APIs";
import { toast } from "react-toastify";
import { useState } from "react";
import { reuseInputClassnames } from "../constants/adminConstants";
import { Button } from "antd";

const selectOptions = [
	"Select option",
	"Web Application",
	"Mobile Application",
	"UI/UX Design",
	"Branding",
	"Other",
];

// eslint-disable-next-line react/prop-types
const HireMeModal = ({ onClose }) => {
	const [formData, setFormData] = useState({
		fullName: "",
		email: "",
		subject: "",
		message: "",
	});
	const [loading, setLoading] = useState(false);

	const handleSubmitForm = async () => {
		setLoading(true);
		const { fullName, email, subject, message } = formData;

		if (!(fullName && email && subject && message)) {
			setLoading(false);
			return toast.warn(`All fields are required!`);
		}

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

			setFormData({
				fullName: "",
				email: "",
				subject: "",
				message: "",
			});
			setLoading(false);
			onClose();
		} else {
			setLoading(false);
		}
	};

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className='font-general-medium fixed inset-0 z-30 transition-all duration-500'
		>
			{/* Modal Backdrop */}
			<div className='bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20'></div>

			{/* Modal Content */}
			<main className='flex flex-col items-center justify-center h-full w-full'>
				<div className='modal-wrapper flex items-center z-30'>
					<div className='modal max-w-md mx-5 xl:max-w-xl lg:max-w-xl md:max-w-xl bg-secondary-light dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-lg relative'>
						<div className='modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark'>
							<h5 className=' text-primary-dark dark:text-primary-light text-xl'>
								What project are you looking for ?
							</h5>
							<button
								onClick={onClose}
								className='px-4 font-bold text-primary-dark dark:text-primary-light'
							>
								<FiX className='text-3xl' />
							</button>
						</div>

						<div className='w-full p-2'>
							<div className='leading-loose'>
								<form
									onSubmit={(e) => {
										e.preventDefault();
									}}
									className=' w-full p-2 text-left'
								>
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
									<div className='mt-6'>
										<select
											className='w-full px-5 py-4 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light'
											id='subject'
											name='subject'
											type='text'
											required=''
											aria-label='Project Category'
											value={formData.subject}
											onChange={(e) => {
												setFormData((prevFormData) => ({
													...prevFormData,
													subject: e.target.value,
												}));
											}}
										>
											{selectOptions.map((option) => (
												<option
													className='text-normal sm:text-md'
													key={option}
												>
													{option}
												</option>
											))}
										</select>
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
											cols='8'
											rows='3'
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

									<div className='flex max-w-40 px-4 py-2.5 justify-between'>
										<div
											className='font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-red-500 hover:bg-red-400 focus:ring-1 focus:ring-red-900 rounded-lg mt-6 duration-500 cursor-pointer text-lg'
											onClick={onClose}
										>
											<div className='sendMessage'>
												<Button className='outline-none border-none cursor-pointer text-white text-lg'>
													Close
												</Button>
											</div>
										</div>
										<div
											className='font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500  cursor-pointer'
											onClick={handleSubmitForm}
										>
											<div className='sendMessage'>
												<Button
													className='outline-none border-none cursor-pointer text-white text-lg'
													loading={loading}
												>
													Send Message
												</Button>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</main>
		</motion.div>
	);
};

export default HireMeModal;
