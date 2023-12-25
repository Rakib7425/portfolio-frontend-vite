import { FiPhone, FiMapPin, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";

const contacts = [
	{
		id: 1,
		name: " Barpeta, Assam, India,",
		icon: <FiMapPin />,
	},
	{
		id: 2,
		name: "irakibul026@gmail.com",
		icon: <FiMail />,
	},
	{
		id: 3,
		name: "+91 91019-10265",
		icon: <FiPhone />,
	},
];

const ContactDetails = () => {
	return (
		<div className='w-full lg:w-1/2'>
			<div className='text-left max-w-xl px-6'>
				<h2 className='font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8'>
					Contact details
				</h2>
				<ul className='font-general-regular'>
					{contacts.map((contact) => (
						<li className='flex ' key={contact.id}>
							<i className='text-2xl text-gray-500 dark:text-gray-400 mr-4'>
								{contact.icon}
							</i>
							<span className='text-lg mb-4 text-ternary-dark dark:text-ternary-light'>
								{contact.id === 2 ? (
									<Link
										to={`mailto:${contact.name}`}
										className='hover:text-gray-600 duration-200'
									>
										{contact.name}
									</Link>
								) : (
									// <span> {contact.name}</span>
									<Link
										to={`tel:${contact.name}`}
										className='hover:text-gray-600 duration-200'
									>
										{contact.name}
									</Link>
								)}
							</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default ContactDetails;
