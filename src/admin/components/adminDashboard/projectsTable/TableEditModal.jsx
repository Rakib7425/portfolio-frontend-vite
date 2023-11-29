/* eslint-disable react/prop-types */
import { toggleModalTo } from "../../../../store/configSlice";
import { useState } from "react";
import { Form, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { reuseInputClassnamesModal as reuseClassnames } from "../../../../constants/adminConstants";

const TableEditModal = ({ editingItem, needReRender, setNeedReRender }) => {
	// const [loading, setLoading] = useState(false);
	// const [warning, setWarning] = useState("");

	const isOpen = useSelector((store) => store.config.isEditModalOpen);
	const dispatch = useDispatch();

	const handleCancel = () => {
		dispatch(toggleModalTo(false));
		// setNeedReRender(!needReRender);
	};

	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};

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
		console.log(formData);
		setNeedReRender(!needReRender);
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
					{/* <form
						onSubmit={(e) => {
							e.preventDefault();
							console.log(e.currentTarget.value);
						}}
						action=''
						method='post'
						id='projectFromData'
					> */}
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
								required
								accept='image/*'
								multiple
								max={3}
								maxLength={3}
								type='file'
								placeholder='Images *'
								className={reuseClassnames}
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
									<h2 className='flex justify-center items-center  text-2xl'>
										Image will Preview Here (select Image)
									</h2>
								)}
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

						<button
							className='flex w-full bg-blue-600 hover:bg-blue-500 duration-200 justify-center rounded bg-primary p-3 font-medium text-gray  text-white'
							onClick={handleClick}
						>
							Upload Post
						</button>
					</div>
					{/* </form> */}
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
