import React from "react";
import { Link } from "react-router-dom";
function Sidemenu() {
	return (
		<>
			<nav className="bg-white shadow dark:bg-gray-800">
				<div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
					<Link to={"/Admin"}>
						<span className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">
							Current Movies
						</span>
					</Link>
					<Link to={"/Admin/UpcomingMovies"}>
						<span className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">
							Upcoming Moives
						</span>
					</Link>
					<Link to={"/Admin/Carousel"}>
						<span className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">
							Carousel
						</span>
					</Link>
					<Link to={"/Admin/Booking"}>
						<span className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">
							Booking
						</span>
					</Link>
				</div>
			</nav>
		</>
	);
}

export default Sidemenu;
