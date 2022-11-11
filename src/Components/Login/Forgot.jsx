import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Timer from "./Timer";

const Forgot = () => {
	const [emailStage, setemailStage] = useState(true);
	const [otpSent, setotpSent] = useState(false);
	const [email, setemail] = useState();
	const [otp, setotp] = useState();
	const [validOtp, setvalidOtp] = useState(false);
	const [password, setpassword] = useState();
	const [confirmPassword, setconfirmPassword] = useState();
	const [userId, setuserId] = useState();
	const [otpTimeout, setotpTimeout] = useState(false);
	const [resentOtp, setresentOtp] = useState(false);
	const navigate = useNavigate();

	const resendOTP = async (e) => {
		console.log("Inside resendOTP");
		e.preventDefault();
		let rep = await fetch("http://localhost:3000/auth/forget", {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email: email,
			}),
		});
		let newOtpRequest = await rep.json();
		console.log(newOtpRequest);
		if (newOtpRequest.response) {
			setotpTimeout(false);
			setresentOtp(true);
		} else {
			alert("Error!");
		}
	};

	const handleEmailSubmit = async () => {
		if (email) {
			let res = await fetch("http://localhost:3000/auth/forget", {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email: email }),
			});
			let otpRequest = await res.json();
			console.log(otpRequest);
			if (otpRequest.response) {
				setemailStage(false);
				setotpSent(true);
			} else {
				alert("Please enter a registered Email Id!");
			}
		} else {
			alert("Please enter a valid Email Id!");
		}
	};

	const handleOtpSubmit = async (e) => {
		e.preventDefault();
		if (otp) {
			let response = await fetch("http://localhost:3000/auth/email", {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email: email, otp: otp }),
			});
			let otpVerifyRequest = await response.json();
			// console.log(otpVerifyRequest);
			if (otpVerifyRequest.response) {
				setuserId(otpVerifyRequest.user._id);
				setotpSent(false);
				setvalidOtp(true);
			} else {
				alert("Invalid OTP!");
			}
		} else {
			alert("Enter valid OTP!");
		}
	};

	const handlePasswordSubmit = async (e) => {
		e.preventDefault();
		if (password && password == confirmPassword) {
			const res = await fetch(`http://localhost:3000/user/reset/${userId}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ password: password }),
			});
			console.log(res);
			const passwordUpdateRequest = await res.json();
			console.log(passwordUpdateRequest);
			if (passwordUpdateRequest.response) {
				alert("Password Updated Successfully!");
				navigate("/Login");
			} else {
				alert("Error");
			}
		}
	};

	return (
		<div className="mx-auto flex my-16 max-w-lg items-center justify-center text-black shadow-2xl py-7">
			<section className="flex w-full flex-col space-y-2 px-5">
				<div className="text-center text-4xl font-medium my-9">
					Change Password
				</div>
				{emailStage && (
					<>
						<div className="w-full px-1">
							<input
								onChange={(e) => setemail(e.target.value)}
								className="appearance-none block w-full  text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500"
								id="email"
								name="email"
								type="email"
								placeholder="Enter Your Email"
							/>
						</div>
						<button
							onClick={handleEmailSubmit}
							className="rounded-sm text-white bg-indigo-500 py-2 font-bold duration-300 hover:bg-indigo-700">
							Get OTP
						</button>
					</>
				)}
				{otpSent && (
					<>
						<div className="w-full px-1">
							<label
								className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
								htmlFor="grid-first-name">
								OTP valid for :{" "}
								<Timer
									resentOtp={resentOtp}
									setresentOtp={setresentOtp}
									setotpTimeout={setotpTimeout}
								/>
							</label>
							<input
								onChange={(e) => setotp(e.target.value)}
								className="appearance-none block w-full  text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500"
								id="email"
								name="email"
								type="email"
								placeholder="Enter OTP"
							/>
						</div>
						<button
							onClick={otpTimeout ? resendOTP : handleOtpSubmit}
							className="rounded-sm text-white bg-indigo-500 py-2 font-bold duration-300 hover:bg-indigo-700">
							{otpTimeout ? "Resend OTP" : "Continue"}
						</button>
					</>
				)}

				{validOtp && (
					<>
						<div className="w-full px-3">
							<label
								className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
								htmlFor="password">
								New Password
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
							onClick={handlePasswordSubmit}
							type="submit"
							className="mx-3 w-full text-white rounded-sm bg-indigo-500 py-2 font-bold duration-300 hover:bg-indigo-700">
							Change Password
						</button>
					</>
				)}

				<section className="flex flex-col space-y-5">
					<p className="text-center text-lg">
						Already have an Account? &nbsp;
						<Link to={"/Login"}>
							<span
								href="#"
								className="font-medium  text-indigo-500 underline-offset-4 hover:underline">
								Login
							</span>
						</Link>
					</p>
				</section>
			</section>
		</div>
	);
};

export default Forgot;
