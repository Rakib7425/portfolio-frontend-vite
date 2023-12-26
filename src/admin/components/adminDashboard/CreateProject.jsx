import { useState } from "react";
import { reuseInputClassnames as reuseClassnames } from "../../../constants/adminConstants";
import { toast } from "react-toastify";
import { addProject } from "../../../utils/addProject";
import { motion } from "framer-motion";

const CreateProject = () => {
	const [formData, setFormData] = useState({
		title: "",
		hostedLink: "",
		gitHubLink: "",
		category: "",
		description: "",
		challenges: "",
		technologies: "",
	});
	const [images, setImages] = useState([]);

	const handleImageChange = (e) => {
		const selectedFiles = e.target.files;

		if (selectedFiles.length + images.length <= 3) {
			setImages((prevImages) => [...prevImages, ...selectedFiles]);
		} else {
			toast.warn("Maximum of 3 images allowed!");
		}
	};

	//
	const handleClick = () => {
		const { title, hostedLink, gitHubLink, category, description, challenges, technologies } =
			formData;

		if (
			!(
				title &&
				hostedLink &&
				gitHubLink &&
				category &&
				description &&
				challenges &&
				technologies
			)
		) {
			return toast.warning(`All fields are required!`);
		} else {
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});
			addProject(formData, images, setFormData, setImages);
		}
	};

	return (
		<div className='right w-[80%] '>
			<motion.div
				className='w-full '
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				transition={{
					ease: "easeInOut",
					duration: 0.7,
					delay: 0.15,
				}}
			>
				<form
					onSubmit={(e) => {
						e.preventDefault();
						console.log(e.currentTarget.value);
					}}
					action=''
					method='post'
					id='projectFromData'
				>
					<div className='p-6.5'>
						<div className='my-4.5'>
							<label className='my-2.5 block text-black dark:text-white'>
								Title *
							</label>
							<input
								required
								type='text'
								placeholder='Title *'
								className={reuseClassnames + "border border-1 border-red-600"}
								value={formData.title}
								onChange={(e) => {
									setFormData((prevFormData) => ({
										...prevFormData,
										title: e.target.value,
									}));
								}}
							/>
						</div>
						<div className='my-4.5'>
							<label className='my-2.5 block text-black dark:text-white'>
								Hosted link *
							</label>
							<input
								required
								type='text'
								placeholder='Hosted link *'
								className={reuseClassnames + "border border-1 border-red-600 "}
								value={formData.hostedLink}
								onChange={(e) => {
									setFormData((prevFormData) => ({
										...prevFormData,
										hostedLink: e.target.value,
									}));
								}}
							/>
						</div>
						<div className='my-4.5'>
							<label className='my-2.5 block text-black dark:text-white'>
								GitHub link *
							</label>
							<input
								required
								type='text'
								placeholder='GitHub link *'
								className={reuseClassnames + "border border-1 border-red-600"}
								value={formData.gitHubLink}
								onChange={(e) => {
									setFormData((prevFormData) => ({
										...prevFormData,
										gitHubLink: e.target.value,
									}));
								}}
							/>
						</div>
						<div className='my-4.5'>
							<label className='my-2.5 block text-black dark:text-white'>
								Technologies * (Comma, separated)
							</label>
							<input
								required
								type='text'
								placeholder='Technologies * (Comma, separated)'
								className={reuseClassnames + "border border-1 border-red-600"}
								value={formData.technologies}
								onChange={(e) => {
									setFormData((prevFormData) => ({
										...prevFormData,
										technologies: e.target.value,
									}));
								}}
							/>
						</div>

						<div className='my-4.5'>
							<label className='my-2.5 block text-black dark:text-white'>
								Images &nbsp;<span> (CTRL+click to select multiple files)</span>
							</label>
							<input
								required
								accept='image/*'
								multiple
								max={3}
								maxLength={3}
								type='file'
								placeholder='Images *'
								className={reuseClassnames + "border border-1 border-red-600"}
								onChange={handleImageChange}
							/>
							<div className='flex' style={{ minHeight: "100px" }}>
								{images &&
									images.map((image, index) => (
										<div
											className='flex justify-center items-center'
											key={index}
										>
											<img
												style={{
													marginTop: "10px",
													maxHeight: "100px",
													margin: "5px",
													textAlign: "center",
												}}
												src={URL.createObjectURL(image)}
												alt={`${index}`}
												className='mx-3'
											/>
										</div>
									))}
								{images.length < 1 && (
									<h2 className='flex justify-center items-center dark:text-white text-2xl'>
										Image will Preview Here (select Image)
									</h2>
								)}
							</div>
						</div>

						<div className='my-4.5'>
							<label className='my-2.5 block text-black dark:text-white'>
								category *<span className='text-meta-1'>*</span>
							</label>
							<div className='relative z-20 bg-transparent dark:bg-form-input'>
								<select
									// defaultValue='UI/UX'
									className={`${reuseClassnames}`}
									value={formData.category}
									onChange={(e) => {
										setFormData((prevFormData) => ({
											...prevFormData,
											category: e.target.value,
										}));
									}}
								>
									<option
										value='not-selected'
										className='opacity-50'
										style={{ cursor: "not-allowed", opacity: "20%" }}
									>
										Select category
									</option>
									<option value='Web Application'>Web Application</option>
									<option value='Mobile Application'>Mobile App</option>
									<option value='Backend (NODE.js)'>{`Backend (NODE.js)`}</option>
									<option value='UI/UX'>UI/UX</option>
									<option value='Branding'>Branding</option>
									<option value='Other'>Other</option>
								</select>
								<span className='absolute top-1/2 right-4 z-30 -translate-y-1/2'>
									{/* 🔽 */}
								</span>
							</div>
						</div>

						<div className='mb-6'>
							<label className='my-2.5 block text-black dark:text-white'>
								Project Description<span className='text-meta-1'>*</span>
							</label>
							<textarea
								rows='6'
								placeholder='Type Project Description'
								className={reuseClassnames + "border border-1 border-red-600"}
								value={formData.description}
								onChange={(e) => {
									setFormData((prevFormData) => ({
										...prevFormData,
										description: e.target.value,
									}));
								}}
							></textarea>
						</div>
						<div className='mb-6'>
							<label className='my-2.5 block text-black dark:text-white'>
								Project Challenges<span className='text-meta-1'>*</span>
							</label>
							<textarea
								rows='6'
								placeholder='Type Project Challenges'
								className={reuseClassnames + "border border-1 border-red-600"}
								value={formData.challenges}
								onChange={(e) => {
									setFormData((prevFormData) => ({
										...prevFormData,
										challenges: e.target.value,
									}));
								}}
							></textarea>
						</div>

						<button
							className='flex w-full bg-blue-600 hover:bg-blue-500 duration-200 justify-center rounded bg-primary p-3 font-medium text-gray  text-white'
							onClick={handleClick}
						>
							Create Now
						</button>
					</div>
				</form>
			</motion.div>
		</div>
	);
};

export default CreateProject;
