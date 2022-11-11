import React, { useState, useEffect, useRef } from "react";

function Timer({ resentOtp, setresentOtp, setotpTimeout }) {
	const [timer, setTimer] = useState("00:00");
	const Ref = useRef(null);
	const getTimeRemaining = (e) => {
		const total = Date.parse(e) - Date.parse(new Date());
		const seconds = Math.floor((total / 1000) % 60);
		const minutes = Math.floor((total / 1000 / 60) % 60);
		if (total == 0) {
			setotpTimeout(true);
		}
		return {
			total,
			minutes,
			seconds,
		};
	};
	const startTimer = (e) => {
		let { total, minutes, seconds } = getTimeRemaining(e);
		if (total >= 0) {
			setTimer(
				(minutes > 9 ? minutes : "0" + minutes) +
					":" +
					(seconds > 9 ? seconds : "0" + seconds)
			);
		}
	};
	const clearTimer = (e) => {
		setTimer("02:00");
		if (Ref.current) clearInterval(Ref.current);
		const id = setInterval(() => {
			startTimer(e);
		}, 1000);
		Ref.current = id;
	};
	const getDeadTime = () => {
		let deadline = new Date();
		deadline.setSeconds(deadline.getSeconds() + 120);
		return deadline;
	};
	useEffect(() => {
		clearTimer(getDeadTime());
		setresentOtp(false);
	}, [resentOtp]);

	return <div>{timer}</div>;
}

export default Timer;
