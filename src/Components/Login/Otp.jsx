import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Timer from "./Timer";
function Otp() {
	const { state } = useLocation();
	const { name, email, password, contactNumber } = state;
	const [otp, setOtp] = useState("");
	const [otpTimeout, setotpTimeout] = useState(false);
	const [resentOtp, setresentOtp] = useState(false);
	const navigate = useNavigate();

	const resendOTP = async (e) => {
		e.preventDefault();
		console.log(name, email, password, contactNumber);
		let rep = await fetch("http://localhost:3000/user", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name: name,
				email: email,
				password: password,
				contactNumber: contactNumber,
			}),
		});
		let signupRequestResponse = await rep.json();
		console.log(signupRequestResponse);
		if (signupRequestResponse.response) {
			setotpTimeout(false);
			setresentOtp(true);
		} else {
			alert("Error!");
		}
	};

	const handleSubmit = async (e) => {
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
			console.log(otpVerifyRequest);
			if (otpVerifyRequest.response) {
				localStorage.setItem("token", otpVerifyRequest.token);
				navigate("/");
			} else {
				alert("Incorrect OTP!");
			}
		} else {
			alert("Enter otp!");
		}
	};

	return (
		<div className="w-full max-w-lg sm:px-5 sm:m-auto sm:my-16 shadow-2xl px-5 py-7">
			<div className="text-center text-4xl font-medium my-4">Verify Email</div>
			<div className="text-center text-1xl font-light my-4">
				OTP has been sent to your email : <b>{email}</b>
			</div>
			<div className="my-4">Please enter the OTP below to verify.</div>
			<form className="flex flex-wrap -mx-3 mb-6 space-y-2 md:space-y-0">
				<div className="w-full px-3">
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
						onChange={(e) => setOtp(e.target.value)}
						className="appearance-none block w-full  text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500"
						id="otp"
						name="otp"
						autoComplete="off"
						type="text"
						placeholder="****"
					/>
				</div>
				<button
					onClick={otpTimeout ? resendOTP : handleSubmit}
					type="submit"
					className="mx-3 w-full text-white rounded-sm bg-indigo-500 py-2 font-bold duration-300 hover:bg-indigo-700">
					{otpTimeout ? "Resend OTP" : "Verify"}
				</button>

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
}

export default Otp;
