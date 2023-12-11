import { useEffect, useState } from "react";
import { getAboutMeData } from "../../../utils/aboutMeData";
import Loader from "../loader/Loader";
import AboutMeForm from "./AboutMeForm";

const AboutMe = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const data = await getAboutMeData(setLoading);
			setData(data.data);
		};
		getData();
	}, []);

	return loading ? (
		<Loader className='-mt-52 mb-28' />
	) : (
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
					<AboutMeForm
						data={data}
						setData={setData}
						loading={loading}
						setLoading={setLoading}
					/>
				</div>
			</form>
		</div>
	);
};

export default AboutMe;
