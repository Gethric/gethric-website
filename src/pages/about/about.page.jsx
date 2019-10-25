import React from "react";
import PERSONAL_DATA from "./personal";
import AboutMe from "../../components/about-me/about-me.component";
import "./about.styles.scss";

class About extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			about: PERSONAL_DATA
		};
	}

	render() {
		const { about } = this.state;
		return (
			<div className="about">
				{about.map(({ id, ...otherAboutProps }) => (
					<AboutMe key={id} {...otherAboutProps} />
				))}
			</div>
		);
	}
}

export default About;
