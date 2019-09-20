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
					imageUrl: "http://www.gethric.com/IMG_3055.jpg",
					id: 1,
					linkUrl: "about"
				},
				{
					title: "portfolio",
					imageUrl: "http://www.gethric.com/IMG_3059.jpeg",
					id: 2,
					linkUrl: "portfolio"
				},
				{
					title: "contact",
					imageUrl: "http://www.gethric.com/IMG_3060.jpeg",
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
