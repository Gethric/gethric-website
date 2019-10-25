import React from "react";
import { withRouter } from "react-router-dom";

import "../../sass/components/menu-item.styles.scss";

const MenuItem = ({ title, subtitle, imageUrl, history, linkUrl, match }) => (
	<div
		className="menu-item"
		onClick={() => history.push(`${match.url}${linkUrl}`)}
	>
		<div
			className="background-image"
			style={{
				backgroundImage: `url(${imageUrl})`
			}}
		/>
		<div className="content">
			<h1 className="title">{title.toUpperCase()}</h1>
			<span className="subtitle">{subtitle.toUpperCase()}</span>
		</div>
	</div>
);

export default withRouter(MenuItem);
