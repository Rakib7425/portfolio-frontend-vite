import { reuseInputClassnames } from "../../../constants/adminConstants";

const AboutMe = () => {
	return (
		<div className='w-full'>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					console.log(e.currentTarget.value);
				}}
				action=''
				method='post'
				id='aboutMyself'
				className='w-full'
			>
				<div className='mb-6'>
					<label className='my-2.5 block text-black '>
						<span className='text-meta-1 dark:text-white'> About Myself *</span>
					</label>
					<textarea
						rows='6'
						placeholder='Type About Myself'
						className={reuseInputClassnames}
						// value={formData.description}
						// onChange={(e) => {
						// 	setFormData((prevFormData) => ({
						// 		...prevFormData,
						// 		description: e.target.value,
						// 	}));
						// }}
					></textarea>
					<button
						className='flex w-full bg-blue-600 hover:bg-blue-500 duration-200 justify-center rounded bg-primary p-3 font-medium text-gray  text-white'
						// onClick={handleClick}
					>
						Update Now
					</button>
				</div>
			</form>
		</div>
	);
};

export default AboutMe;
