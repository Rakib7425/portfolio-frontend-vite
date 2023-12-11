import { useState } from "react";
import { Input, Modal } from "antd";
import { reuseInputClassnamesModal } from "../../../constants/adminConstants";
import { updateTechStackApiUrl } from "../../../apis/APIs";
import { toast } from "react-toastify";
import { TbPhotoPlus } from "react-icons/tb";
// eslint-disable-next-line react/prop-types
const AddTechStackModal = ({ setData }) => {
	const [modalOpen, setModalOpen] = useState(false);
	const [loading, setLoading] = useState(false);
	const [imageUrl, setImageUrl] = useState(null);
	const [image, setImage] = useState(null);

	const onOk = async () => {
		setLoading(true);

		if (!imageUrl && !image) {
			toast.warn(`At least one field is required!!`);
			setLoading(false);
			return;
		}

		// Add  formData field
		let bodyContent = new FormData();
		if (image) {
			bodyContent.append(`techPhoto`, image);
		} else {
			bodyContent.append("techStack", imageUrl);
		}

		try {
			const response = await fetch(updateTechStackApiUrl, {
				method: "PUT",
				body: bodyContent,
			});

			const data = await response.json();
			console.log(data);

			if (data.success) {
				setModalOpen(false);
				toast.success(`Successfully added techStack!!`);
				setData(data.data);
			} else {
				toast.error(`Something went wrong during add techStack!!`);
			}
		} catch (error) {
			console.error("Error during the fetch operation:", error);
			toast.error(`An error occurred. Please try again.`);
		} finally {
			setLoading(false);
		}
	};

	const onCancel = () => {
		setModalOpen(false);
	};

	return (
		<>
			<div>
				<button
					className='my-3 dark:bg-blue-700 bg-stone-500 hover:bg-blue-500 dark:hover:bg-blue-500 dark:text-white duration-100 py-2 px-5 rounded-md'
					onClick={() => setModalOpen(true)}
				>
					<span className='flex items-center gap-2'>
						<TbPhotoPlus /> Add Tech Stack
					</span>
				</button>
				<Modal
					title='Add Tech Stack'
					centered
					open={modalOpen}
					onOk={onOk}
					onCancel={onCancel}
					okText='Add'
					okButtonProps={{
						loading: loading,
						style: {
							background: "blue",
						},
					}}
				>
					<label htmlFor='imageUrl' className='text-[16px]'>
						Image URL
					</label>

					<Input
						type='text'
						id='imageUrl'
						placeholder='image URL'
						className={reuseInputClassnamesModal}
						value={imageUrl}
						onChange={(e) => {
							setImageUrl(e.target.value);
						}}
					/>

					<div className='text-2xl flex justify-center my-3'>
						<h2 className=' mx-auto text-red-800'>....OR....</h2>
					</div>

					<label htmlFor='imageFile' className='text-[16px]'>
						Image File
					</label>

					<div>
						<Input
							id='imageFile'
							type='file'
							accept='image/*'
							className={reuseInputClassnamesModal}
							onChange={(e) => setImage(e.target.files[0])}
						/>
						<div className='min-h-32 mt-10'>
							{image && (
								<img
									src={image ? URL.createObjectURL(image) : ""}
									alt='Profile'
									className='h-32 '
									name='techStackImg'
								/>
							)}
						</div>
					</div>
				</Modal>
			</div>
		</>
	);
};

export default AddTechStackModal;
