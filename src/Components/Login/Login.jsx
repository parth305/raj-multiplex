import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
	const [email, setemail] = useState();
	const [password, setpassword] = useState();
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const res = await fetch("http://localhost:3000/auth/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ email: email, password: password }),
		});
		const loginRequest = await res.json();
		console.log(loginRequest);
		if (loginRequest.response) {
			localStorage.setItem("token", loginRequest.token);
			navigate("/");
		} else {
			alert("Invalid Credentials!");
		}
	};
	return (
		<div className="mx-5 sm:mx-auto flex my-16 max-w-lg items-center justify-center text-black shadow-2xl py-7">
			<form className="flex w-full flex-col space-y-10 px-5">
				<div className="text-center text-4xl font-medium">Log In</div>

				<div className="w-full px-3">
					<label
						className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						htmlFor="email">
						Email
					</label>
					<input
						onChange={(e) => setemail(e.target.value)}
						className="appearance-none block w-full  text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500"
						id="email"
						name="email"
						type="email"
					/>
				</div>

				<div className="w-full px-3">
					<label
						className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						htmlFor="password">
						password
					</label>
					<input
						onChange={(e) => {
							setpassword(e.target.value);
						}}
						className="appearance-none block w-full  text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500"
						id="password"
						name="password"
						type="password"
					/>
				</div>

				<button
					onClick={handleSubmit}
					className="rounded-sm text-white bg-indigo-500 py-2 font-bold duration-300 hover:bg-indigo-700"
					type="submit">
					LOG IN
				</button>
				<section className="flex w-full flex-col space-y-5 text-center">
					<Link to={"/Forgot"}>
						<span className="transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300">
							FORGOT PASSWORD?
						</span>
					</Link>

					<p className="text-center text-lg">
						No account? &nbsp;
						<Link to={"/Signup"}>
							<span
								href="#"
								className="font-medium  text-indigo-500 underline-offset-4 hover:underline">
								Create One
							</span>
						</Link>
					</p>
				</section>
			</form>
		</div>
	);
};

export default Login;
