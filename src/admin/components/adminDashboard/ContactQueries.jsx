import { useEffect, useState } from "react";
import { getContactQueries } from "../../../utils/getContactQueries";
import Loader from "../loader/Loader";
import { motion } from "framer-motion";

const ContactQueries = () => {
	const [contactQueries, setContactQueries] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	// const [open, setOpen] = useState(false);

	useEffect(() => {
		const getData = async () => {
			const data = await getContactQueries(setIsLoading);
			setContactQueries(data?.data);
		};
		getData();
	}, []);

	const headings = [
		{ key: "fullName", value: "Full Name" },
		{ key: "email", value: "Email" },
		{ key: "subject", value: "subject" },
		{ key: "message", value: "Message" },
	];

	return isLoading ? (
		<Loader className='-mt-52 mb-28' />
	) : (
		<motion.div
			className='antialiased sans-serif w-full'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: "easeInOut",
				duration: 0.7,
				delay: 0.15,
			}}
		>
			<div className='container mx-auto py-6 px-4'>
				<table className='border-collapse table-auto w-full whitespace-no-wrap text-black dark:text-white table-striped relative'>
					<thead>
						<tr className='text-left '>
							{headings.map((heading) => (
								<th
									key={heading?.key}
									className={`dark:bg-gray-500 bg-gray-300 sticky top-0 border-b border-gray-200 px-6 py-3 text-black font-bold tracking-wider uppercase text-xs ${heading?.key}`}
								>
									{heading?.value}
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{contactQueries &&
							contactQueries.map((contact) => (
								<tr key={contact?._id} className='text-white'>
									{headings.map((heading) => (
										<td
											key={heading?.key}
											className={`border-dashed border-t border-gray-200 ${heading?.key}`}
										>
											{heading?.key === "email" ? (
												<a
													href={`mailto:${contact[heading?.key]}`}
													className='dark:text-blue-500 text-blue-600 px-6 py-3 flex items-center'
												>
													{contact[heading?.key]}
												</a>
											) : (
												<span className='dark:text-gray-300 text-black px-6 py-3 flex items-center'>
													{contact[heading?.key]}
												</span>
											)}
										</td>
									))}
								</tr>
							))}
					</tbody>
				</table>
			</div>
		</motion.div>
	);
};

export default ContactQueries;
