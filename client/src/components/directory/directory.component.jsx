import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

class Directory extends React.Component {
	constructor() {
		super();

		this.state = {
			sections: [
				{
					title: "about",
					subtitle: "who am i?",
					imageUrl: "",
					id: 1,
					linkUrl: "about"
				},
				{
					title: "portfolio",
					subtitle: "see my work",
					imageUrl: "",
					id: 2,
					linkUrl: "portfolio"
				},
				{
					title: "contact",
					subtitle: "get in touch!",
					imageUrl: "",
					id: 3,
					linkUrl: "contact"
				}
			]
		};
	}

	render() {
		return (
			<div className="directory-menu">
				{this.state.sections.map(({ id, ...otherSectionProps }) => (
					<MenuItem key={id} {...otherSectionProps} />
				))}
			</div>
		);
	}
}

export default Directory;
