/* eslint-disable react/prop-types */
import { useState } from "react";
import { reuseInputClassnames } from "../../../constants/adminConstants";
import { updateAboutMeData } from "../../../utils/updateAboutMeData";
import AddTechStackModal from "./AddTechStackModal";

const AboutMeForm = ({ data, setData, loading, setLoading }) => {
	const [formData, setFormData] = useState({
		name: data.name,
		email: data.email,
		currentAddress: data.currentAddress,
		currentlyLearning: data.currentlyLearning,
		workHistory: data.workHistory,
		techStack: data.techStack,
		description: data.description,
	});
	const [image, setImage] = useState(null);

	const handleUpdate = () => {
		// console.log(formData);
		updateAboutMeData(setLoading, formData, image, setData);
	};

	return (
		<div>
			<label className='my-2.5 block text-black' id='name'>
				<span className='text-meta-1 dark:text-white'> Name *</span>
			</label>
			<input
				type='text'
				className={reuseInputClassnames}
				name='name'
				value={formData.name}
				onChange={(e) => {
					setFormData((prevFormData) => ({
						...prevFormData,
						name: e.target.value,
					}));
				}}
			/>

			<label className='my-2.5 block text-black' id='email'>
				<span className='text-meta-1 dark:text-white'> Email *</span>
			</label>
			<input
				type='email'
				className={reuseInputClassnames}
				name='email'
				value={formData.email}
				onChange={(e) => {
					setFormData((prevFormData) => ({
						...prevFormData,
						email: e.target.value,
					}));
				}}
			/>

			<label className='my-2.5 block text-black' id='currentAddress'>
				<span className='text-meta-1 dark:text-white'> Current Address *</span>
			</label>
			<input
				type='text'
				className={reuseInputClassnames}
				name='currentAddress'
				value={formData.currentAddress}
				onChange={(e) => {
					setFormData((prevFormData) => ({
						...prevFormData,
						currentAddress: e.target.value,
					}));
				}}
			/>

			<label className='my-2.5 block text-black' id='currentlyLearning'>
				<span className='text-meta-1 dark:text-white'> Currently Learning *</span>
			</label>
			<input
				type='text'
				className={reuseInputClassnames}
				name='currentlyLearning'
				value={formData.currentlyLearning}
				onChange={(e) => {
					setFormData((prevFormData) => ({
						...prevFormData,
						currentlyLearning: e.target.value,
					}));
				}}
			/>

			<label className='my-2.5 block text-black' id='workHistory'>
				<span className='text-meta-1 dark:text-white'> Work History *</span>
			</label>
			<input
				type='text'
				className={reuseInputClassnames}
				name='workHistory'
				value={formData.workHistory}
				onChange={(e) => {
					setFormData((prevFormData) => ({
						...prevFormData,
						workHistory: e.target.value,
					}));
				}}
			/>

			<label className='my-2.5 block text-black' id='techStack'>
				<span className='text-meta-1 dark:text-white'> Tech Stack *</span>

				<div className='techStack flex items-center gap-3'>
					{data.techStack &&
						data?.techStack?.map((techImg, indx) =>
							loading ? (
								"loading... "
							) : (
								<img key={indx} src={techImg} alt='' className='w-10 h-10' />
							)
						)}

					{/* Button for add Tech Stack */}
					<AddTechStackModal />
				</div>
			</label>

			<label className='my-2.5 block text-black' id='profilePhoto'>
				<span className='text-meta-1 dark:text-white'> ProfilePhoto*</span>
			</label>
			<div className='profilePhoto flex gap-5 items-center'>
				<img
					src={image ? URL.createObjectURL(image) : data.profilePhoto}
					alt='Profile'
					className='h-20'
					name='profilePhoto'
				/>
				<input
					type='file'
					accept='image/*'
					name='profilePhoto'
					id=''
					onChange={(e) => setImage(e.target.files[0])}
				/>
			</div>

			<label className='my-2.5 block text-black '>
				<span className='text-meta-1 dark:text-white'> About Myself (description)*</span>
			</label>

			<textarea
				rows='7'
				placeholder='About Myself (description)'
				className={reuseInputClassnames}
				value={formData.description}
				onChange={(e) => {
					setFormData((prevFormData) => ({
						...prevFormData,
						description: e.target.value,
					}));
				}}
			></textarea>
			<button
				className='flex w-full bg-blue-600 hover:bg-blue-500 duration-200 justify-center rounded bg-primary p-3 font-medium text-gray  text-white'
				onClick={handleUpdate}
			>
				Update Now
			</button>
		</div>
	);
};

export default AboutMeForm;
