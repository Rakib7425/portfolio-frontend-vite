import { useEffect, useState } from "react";
import { getContactQueries } from "../../../utils/getContactQueries";
import Loader from "../loader/Loader";
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
		<div className='antialiased sans-serif w-full'>
			<div className='container mx-auto py-6 px-4'>
				<table className='border-collapse table-auto w-full whitespace-no-wrap text-black dark:text-white table-striped relative'>
					<thead>
						<tr className='text-left '>
							{headings.map((heading) => (
								<th
									key={heading?.key}
									className={`bg-gray-200 sticky top-0 border-b border-gray-200 px-6 py-3 text-gray-600 font-bold tracking-wider uppercase text-xs ${heading?.key}`}
								>
									{heading?.value}
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{contactQueries.map((contact) => (
							<tr key={contact?._id} className='text-white'>
								{headings.map((heading) => (
									<td
										key={heading?.key}
										className={`border-dashed border-t border-gray-200 ${heading?.key}`}
									>
										<span className='dark:text-gray-300 text-black px-6 py-3 flex items-center'>
											{contact[heading?.key]}
										</span>
									</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default ContactQueries;
