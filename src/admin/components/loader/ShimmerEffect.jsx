/* eslint-disable react/jsx-no-duplicate-props */

import Loader from "./Loader";

const ShimmerEffect = () => {
	// style={{
	// 	position: "relative",
	// 	width: "400px",
	// 	height: "225px",
	// 	backgroundColor: "#f0f0f0",
	// 	borderRadius: "8px",
	// 	overflow: "hidden",
	// 	boxShadow: " 0 4px 8px rgba(0, 0, 0, 0.1)",
	// }}
	return (
		<div className='-mt-[25%] mb-[20%]'>
			{/* <div className='rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-ternary-dark'>
				<div
					style={{
						background:
							"linear-gradient(to right, #272424 0%, #262525 50%, #1f1d1d 100%)",
					}}
				> */}
			{/* <ShimmerPostItem
				card
				title
				cta
				title
				style={{
					background:
						"linear-gradient(to right, #272424 0%, #262525 50%, #1f1d1d 100%)",
				}}
			/> */}
			<Loader />
		</div>
		// 	</div>
		// </div>
	);
};

export default ShimmerEffect;
