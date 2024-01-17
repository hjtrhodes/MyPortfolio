import React from "react";
import Lottie from "react-lottie";

const GreetingLottie = ({ animationPath }) => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		path: animationPath,
	};

	return (
		<div style={{ pointerEvents: 'none' }} >
			<Lottie options={defaultOptions} />
		</div>
	);
};

export default GreetingLottie;
