/* eslint-disable react/jsx-no-duplicate-props */
import { ShimmerPostItem } from "react-shimmer-effects";

const ShimmerEffect = () => {
	return (
		<div>
			<div className='rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark'>
				<div>
					<ShimmerPostItem card />
				</div>
				<div className='text-center px-4 py-6'>
					<p className='font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2'>
						<ShimmerPostItem title />
					</p>
					<span className='text-lg text-ternary-dark dark:text-ternary-light'>
						<ShimmerPostItem cta title />
					</span>
				</div>
			</div>
		</div>
	);
};

export default ShimmerEffect;
