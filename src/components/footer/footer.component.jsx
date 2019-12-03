import React from "react";
import "./footer.scss";

const Footer = () => (
	<div className="footer">
		<h5>This website was created using React</h5>
		<a
			className="social"
			href="https://www.linkedin.com/in/gethin-thomas-221b10176/"
			target="_blank"
			rel="noopener noreferrer"
		>
			<img
				className="icons"
				src={require("../../assets/socicons/linkedin.png")}
				alt="LINKEDIN"
			/>
		</a>
		<a
			className="social"
			href="https://github.com/Gethric"
			target="_blank"
			rel="noopener noreferrer"
		>
			<img
				className="icons"
				src={require("../../assets/socicons/github.png")}
				alt="GITHUB"
			/>
		</a>
		<a
			className="social"
			href="https://www.facebook.com/gethin.thomas"
			target="_blank"
			rel="noopener noreferrer"
		>
			<img
				className="icons"
				src={require("../../assets/socicons/facebook.png")}
				alt="FACEBOOK"
			/>
		</a>
		<a
			className="social"
			href="https://drive.google.com/open?id=1I6vQu_dON74NSa_ylv-HRJsiQ3HrDqLJ"
			target="_blank"
			rel="noopener noreferrer"
		>
			<img
				className="icons"
				src={require("../../assets/socicons/cv.png")}
				alt="LINKdddd"
			/>
		</a>
	</div>
);

export default Footer;
