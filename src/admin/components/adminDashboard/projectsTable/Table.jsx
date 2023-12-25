import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleModalTo } from "../../../../store/configSlice.js";
import TableEditModal from "./TableEditModal.jsx";
import { getProjects } from "../../../../utils/getProjects.js";
import Loader from "../../loader/Loader.jsx";
import { Button, Popconfirm } from "antd";
import { toast } from "react-toastify";
import { deleteProject } from "../../../../utils/deleteProject.js";
import { motion } from "framer-motion";

const Table = () => {
	const isModalOpen = useSelector((store) => store.config.isModalOpen);

	const [loading, setLoading] = useState(false);
	const [data, setData] = useState([]);
	const [editingItem, setEditingItem] = useState(null);
	const [needReRender, setNeedReRender] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		const getData = async () => {
			setData(await getProjects(setLoading));
		};

		getData();
		// console.log(data);
	}, [needReRender]);

	const handleEditClick = (item) => {
		setEditingItem(item);
		dispatch(toggleModalTo(true));
		// console.log(item);
	};

	const handleDeleteClick = (_id) => {
		setData((prevData) => prevData.filter((item) => item._id !== _id));
	};

	const confirmDelete = async (itemId) => {
		toast.success("Deleted with Project Id " + itemId);

		const isSuccess = await deleteProject(itemId);
		console.log(isSuccess);
		if (isSuccess) {
			handleDeleteClick(itemId);
		}
	};

	return loading ? (
		<div className='loaderDiv w-full  h-1/4'>
			<Loader />
		</div>
	) : (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: "easeInOut",
				duration: 0.7,
				delay: 0.15,
			}}
		>
			{editingItem !== null && (
				<div className='modal w-full z-20'>
					<TableEditModal
						editingItem={editingItem}
						setEditingItem={setEditingItem}
						needReRender={needReRender}
						setNeedReRender={setNeedReRender}
					/>
				</div>
			)}

			<table className='w-full dark:text-white text-center border-collapse'>
				<thead className='py-4 mb-2 border-b-2'>
					<tr className='py-2'>
						<th>Sl.No.</th>
						<th>Project Name</th>
						<th>Technologies</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody className='mt-3'>
					{data &&
						data.map((item, index) => (
							<tr key={item._id} className='py-4'>
								<td>{index + 1}</td>
								<td>{item.title}</td>
								<td>{item.technologies}</td>
								<td>
									<div className='flex justify-center items-center gap-2'>
										<button
											type='button'
											className={`py-[5px] px-5 mt-2 rounded-md  ${
												!isModalOpen
													? "bg-blue-600 hover:text-gray-950 hover:bg-blue-700 duration-200"
													: "bg-red-500"
											} `}
											onClick={() => handleEditClick(data[index])}
										>
											Edit
										</button>

										<Popconfirm
											title='Delete the Project'
											description='Are you sure to delete this project?'
											onConfirm={() => confirmDelete(item?._id)}
											okText='Yes'
											placement='bottom'
											cancelText='No'
											okButtonProps={{
												className: "bg-blue-600 hover:bg-blue-800",
											}}
										>
											<Button danger className=' mt-2 hover:text-white'>
												Delete
											</Button>
										</Popconfirm>
									</div>
								</td>
							</tr>
						))}
				</tbody>
			</table>
		</motion.div>
	);
};

export default Table;
