import React from "react";

const Footer = () => {
	return (
		<footer className="md:fixed bottom-0 left-0 z-20 p-4 w-full border-t shadow md:flex md:items-center md:justify-between md:p-6 bg-gray-900 border-gray-700">
			<span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
				© 2022{" "}
				<a href="https://flowbite.com/" className="hover:underline">
					Flowbite™
				</a>
				. All Rights Reserved.
			</span>
			<ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
				<li>
					<a href="#" className="mr-4 hover:underline md:mr-6 ">
						About
					</a>
				</li>
				<li>
					<a href="#" className="mr-4 hover:underline md:mr-6">
						Privacy Policy
					</a>
				</li>
				<li>
					<a href="#" className="mr-4 hover:underline md:mr-6">
						Licensing
					</a>
				</li>
				<li>
					<a href="#" className="hover:underline">
						Contact
					</a>
				</li>
			</ul>
		</footer>
	);
};

export default Footer;
