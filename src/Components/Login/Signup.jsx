import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
	const [firstName, setfirstName] = useState("");
	const [lastName, setlastName] = useState("");
	const [email, setemail] = useState("");
	const [contact, setcontact] = useState("");
	const [password, setpassword] = useState("");
	const [confirmPassword, setconfirmPassword] = useState("");
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (password == confirmPassword) {
			let name = firstName + " " + lastName;
			let rep = await fetch("http://localhost:3000/user", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					name: name,
					email: email,
					password: password,
					contactNumber: contact,
				}),
			});

			let signupRequestResponse = await rep.json();
			console.log(signupRequestResponse);

			if (signupRequestResponse.response) {
				navigate("/Otp", {
					state: {
						name: name,
						email: email,
						password: password,
						contactNumber: contact,
					},
				});
			} else {
				alert("Error!");
			}
		} else {
			alert("Passwords do not match!");
		}
	};
	return (
		<div className="w-full max-w-lg sm:px-5 sm:m-auto sm:my-16 shadow-2xl px-5 py-7">
			<div className="text-center text-4xl font-medium my-4">Sign Up</div>
			<form className="flex flex-wrap -mx-3 mb-6 space-y-2 md:space-y-0">
				{/* <form action="" method="post" onSubmit={submit}> */}
				<div className="w-full md:w-1/2 px-3 md:mb-0">
					<label
						className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						htmlFor="grid-first-name">
						First Name
					</label>
					<input
						onChange={(e) => setfirstName(e.target.value)}
						className="appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500"
						id="fname"
						name="fname"
						type="text"
					/>
				</div>
				<div className="w-full md:w-1/2 px-3">
					<label
						className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						htmlFor="grid-last-name">
						Last Name
					</label>
					<input
						onChange={(e) => setlastName(e.target.value)}
						className="appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
						id="lname"
						name="lname"
						type="text"
					/>
				</div>
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
						htmlFor="email">
						Contact Number
					</label>
					<input
						onChange={(e) => setcontact(e.target.value)}
						className="appearance-none block w-full  text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500"
						id="contact"
						name="contact"
						type="tel"
					/>
				</div>
				<div className="w-full px-3">
					<label
						className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						htmlFor="password">
						password
					</label>
					<input
						onChange={(e) => setpassword(e.target.value)}
						className="appearance-none block w-full  text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500"
						id="password"
						name="password"
						type="password"
					/>
				</div>
				<div className="w-full px-3">
					<label
						className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						htmlFor="cpassword">
						Confirm passwrod
					</label>
					<input
						onChange={(e) => setconfirmPassword(e.target.value)}
						className="appearance-none block w-full  text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500"
						id="cpassword"
						name="cpassword"
						type="password"
					/>
				</div>
				<button
					onClick={handleSubmit}
					type="submit"
					className="mx-3 w-full text-white rounded-sm bg-indigo-500 py-2 font-bold duration-300 hover:bg-indigo-700">
					Sign up
				</button>
				{/* </form> */}

				<p className="text-center w-full text-base my-2">
					Already have an Account? &nbsp;
					<Link to={"/Login"}>
						<span
							href="#"
							className="font-medium text-indigo-500 underline-offset-4 hover:underline">
							LogIn
						</span>
					</Link>
				</p>
			</form>
		</div>
	);
};

export default Signup;
