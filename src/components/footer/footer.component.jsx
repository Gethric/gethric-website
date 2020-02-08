import React from "react";
import "./footer.scss";

const Footer = () => (
	<div className="footer">
		<h5>This website was created using React</h5>
		<a
			className="social"
			href="https://www.linkedin.com/in/ric-thomas-221b10176/"
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
	</div>
);

export default Footer;
