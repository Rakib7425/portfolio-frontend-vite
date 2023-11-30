import { Image } from "antd";
import { useSelector } from "react-redux";

const ProjectRelatedProjects = () => {
	const singleProject = useSelector((store) => store.singleProject.singleProject);

	return (
		<div className='grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12 items-center -mb-2'>
			{singleProject.length > 0 &&
				singleProject[0]?.images?.map((item) => {
					return (
						<div className='mb-10 sm:mb-0' key={item}>
							<Image
								src={item}
								className='rounded-xl cursor-pointer shadow-lg sm:shadow-none '
								alt={"alt"}
							/>
						</div>
					);
				})}
		</div>
	);
};

export default ProjectRelatedProjects;
