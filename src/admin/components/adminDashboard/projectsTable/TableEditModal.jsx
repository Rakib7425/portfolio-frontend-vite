/* eslint-disable react/prop-types */
import { toggleModalTo } from "../../../../store/configSlice";
import { useEffect, useState } from "react";
import { Button, Form, Image, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { reuseInputClassnamesModal as reuseClassnames } from "../../../../constants/adminConstants";
import { updateProject } from "../../../../utils/updateProject";

const TableEditModal = ({ editingItem, setEditingItem, needReRender, setNeedReRender }) => {
	const [loading, setLoading] = useState(false);
	// const [warning, setWarning] = useState("");

	const [formData, setFormData] = useState({
		title: editingItem.title,
		hostedLink: editingItem.hostedLink,
		gitHubLink: editingItem.gitHubLink,
		category: editingItem.category,
		description: editingItem.description,
		challenges: editingItem.challenges,
		technologies: editingItem.technologies,
	});

	const [images, setImages] = useState([]);
	const [localImages, setLocalImages] = useState([]);

	const isOpen = useSelector((store) => store.config.isEditModalOpen);
	const dispatch = useDispatch();

	useEffect(() => {
		const fetchImages = async () => {
			const imagePromises = editingItem.images.map(async (item) => {
				let data = await fetch(item);
				return await data.blob();
			});

			// Wait for all imagePromises to resolve
			const imageBlobs = await Promise.all(imagePromises);

			// Set the images state with the resolved blobs
			setImages(imageBlobs);
		};

		fetchImages();
	}, [editingItem]);

	const handleCancel = () => {
		setLocalImages(images);
		setEditingItem(null);
		dispatch(toggleModalTo(false));
	};

	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};

	const handleImageChange = (e) => {
		const selectedFiles = e.target.files;

		if (selectedFiles.length + localImages.length <= 3) {
			setImages([]);
			setLocalImages((prevImages) => [...prevImages, ...selectedFiles]);
		} else {
			toast.warn("Maximum of 3 images allowed!");
		}
	};

	//
	const handleClick = async () => {
		// console.log(localImages);

		const dbResponse = await updateProject(editingItem._id, setLoading, formData, localImages);
		// console.log(dbResponse);
		if (dbResponse.success) {
			setNeedReRender(!needReRender);
			dispatch(toggleModalTo(false));
			toast.success(`Successfully updated!`);
		}
	};

	return (
		<>
			<Modal
				open={isOpen}
				title={`Editing  (${editingItem.title})`} // ${editingItem._id}
				onCancel={handleCancel}
				// className='w-full'

				style={{ width: "50vw" }}
			>
				<Form
					className='pb-5 '
					onSubmit={(e) => e.preventDefault()}
					name='basic'
					initialValues={{
						remember: true,
					}}
					onFinishFailed={onFinishFailed}
					autoComplete='on'
				>
					<div className='p-6.5'>
						<div className='my-4.5'>
							<label className='my-2.5 block text-black '>Title *</label>
							<input
								required
								type='text'
								placeholder='Title *'
								className={reuseClassnames}
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
							<label className='my-2.5 block text-black '>Hosted link *</label>
							<input
								required
								type='text'
								placeholder='Hosted link *'
								className={reuseClassnames}
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
							<label className='my-2.5 block text-black '>GitHub link *</label>
							<input
								required
								type='text'
								placeholder='GitHub link *'
								className={reuseClassnames}
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
							<label
								className='my-2.5 block text-black 
								'
							>
								Technologies * (Comma, separated)
							</label>
							<input
								required
								type='text'
								placeholder='Technologies * (Comma, separated)'
								className={reuseClassnames}
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
							<label className='my-2.5 block text-black '>
								Images &nbsp;<span> (CTRL+click to select multiple files)</span>
							</label>
							<input
								accept='image/*'
								multiple
								max={3}
								maxLength={3}
								type='file'
								placeholder='Images *'
								className={reuseClassnames}
								onChange={handleImageChange}
							/>
							<div className='flex gap-2' style={{ minHeight: "100px" }}>
								{images && localImages.length < 1
									? images.map((image, index) => (
											<div
												className='flex justify-center items-center'
												key={index}
											>
												<Image
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
											// eslint-disable-next-line no-mixed-spaces-and-tabs
									  ))
									: localImages.map((image, index) => (
											<div
												className='flex justify-center items-center'
												key={index}
											>
												<Image
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
											// eslint-disable-next-line no-mixed-spaces-and-tabs
									  ))}
							</div>
						</div>

						<div className='my-4.5'>
							<label className='my-2.5 block text-black '>
								category<span className='text-meta-1'>*</span>
							</label>
							<div className='relative z-20 bg-transparent dark:bg-form-input'>
								<select
									className={`${reuseClassnames}`}
									value={formData.category}
									onChange={(e) => {
										setFormData((prevFormData) => ({
											...prevFormData,
											category: e.target.value,
										}));
									}}
								>
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
							<label className='my-2.5 block text-black '>
								Project Description<span className='text-meta-1'>*</span>
							</label>
							<textarea
								rows='6'
								placeholder='Type Project Description'
								className={reuseClassnames}
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
							<label className='my-2.5 block text-black '>
								Project Challenges<span className='text-meta-1'>*</span>
							</label>
							<textarea
								rows='6'
								placeholder='Type Project Challenges'
								className={reuseClassnames}
								value={formData.challenges}
								onChange={(e) => {
									setFormData((prevFormData) => ({
										...prevFormData,
										challenges: e.target.value,
									}));
								}}
							></textarea>
						</div>

						<Button
							loading={loading}
							className='flex items-center w-full h-7  bg-blue-600 hover:bg-blue-700 duration-200 justify-center rounded bg-primary py-6 font-medium text-gray  text-white hover:text-base'
							onClick={handleClick}
						>
							Upload Post
						</Button>
					</div>
				</Form>
				{/* 
				{warning && (
					<p className='text-center text-yellow-500 text-lg font-bold pb-2'>{warning}!</p>
				)} */}
			</Modal>
		</>
	);
};

export default TableEditModal;
