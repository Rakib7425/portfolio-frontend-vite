import { useCountUp } from "react-countup";
import CounterItem from "./CounterItem";

const AboutCounter = () => {
	// Set date 2022-11-11
	let experience = Math.round((new Date() - 1671975567271) / 1000 / 60 / 60 / 7 / 52 - 1);

	// console.log(experience);

	useCountUp({ ref: "experienceCounter", end: experience, duration: 3 });
	useCountUp({ ref: "githubStarsCounter", end: 890, duration: 3 });
	useCountUp({ ref: "feedbackCounter", end: 92, duration: 3 });
	useCountUp({ ref: "projectsCounter", end: 98, duration: 3 });

	return (
		<div className='mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm'>
			<div className='font-general-medium container mx-auto py-20 block sm:flex sm:justify-between items-center'>
				<CounterItem
					title='Months of experience'
					counter={<span id='experienceCounter' />}
					measurement=''
				/>

				<CounterItem
					title='Stars on GitHub'
					counter={<span id='githubStarsCounter' />}
					measurement='+'
				/>

				<CounterItem
					title='Positive feedback'
					counter={<span id='feedbackCounter' />}
					measurement='%'
				/>

				<CounterItem
					title='Projects completed'
					counter={<span id='projectsCounter' />}
					measurement='%'
				/>
			</div>
		</div>
	);
};

export default AboutCounter;
