/* eslint-disable react/prop-types */
import "./loader.css";

const Loader = ({ className = "" }) => {
	return (
		<div className={`loaderDiv ${className}`}>
			<span className='loader'></span>
		</div>
	);
};

export default Loader;
