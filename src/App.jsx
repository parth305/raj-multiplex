import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import Forgot from "./Components/Login/Forgot";
import Signup from "./Components/Login/Signup";
import Otp from "./Components/Login/Otp";
import Home from "./Components/Home";
import Admin from "./Components/Admin/Admin";
import UpcomingMovies from "./Components/Admin/UpcomingMovies";
import Booking from "./Components/Admin/Booking";
import Carousel from "./Components/Admin/Carousel";
import Adminoutlet from "./Components/Admin/Adminoutlet";
function App() {
	return (
		<>
	
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/Otp" element={<Otp />} />
					<Route exact path="/Login" element={<Login />} />
					<Route exact path="/Forgot" element={<Forgot />} />
					<Route exact path="/Signup" element={<Signup />} />
					<Route exact path="/Admin" element={<Adminoutlet />}>
						<Route exact path="" element={<Admin />} />
						<Route
							exact
							path="UpcomingMovies"
							element={<UpcomingMovies />}
						/>
						<Route exact path="Carousel" element={<Carousel />} />
						<Route exact path="Booking" element={<Booking />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
