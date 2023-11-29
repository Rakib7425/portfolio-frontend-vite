import { useSelector } from "react-redux";

const ProjectGallery = () => {
	const singleProject = useSelector((store) => store.singleProject.singleProject);
	console.log(singleProject[0]);
	return (
		<div className='grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12'>
			{singleProject.length > 0 &&
				singleProject[0]?.images?.map((item, index) => {
					return (
						<div className='mb-10 sm:mb-0' key={index}>
							<img
								src={item}
								className='rounded-xl cursor-pointer shadow-lg sm:shadow-none'
								alt={"alt"}
							/>
						</div>
					);
				})}
		</div>
	);
};

export default ProjectGallery;
