import React from "react";

import "./about-me.styles.scss";

const AboutMe = ({ text }) => (
	<div className="about_me">
		<div className="me">{text}</div>
	</div>
);

export default AboutMe;
