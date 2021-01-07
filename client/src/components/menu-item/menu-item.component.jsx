import React from "react";
import { withRouter } from "react-router-dom";

import "./menu-item.styles.scss";

const MenuItem = ({ title, subtitle, history, linkUrl, match }) => (
	<div className="menu-item">
		<div
			className="content"
			onClick={() => history.push(`${match.url}${linkUrl}`)}
		>
			<h1 className="title">{title.toUpperCase()}</h1>
			<span className="subtitle">{subtitle.toUpperCase()}</span>
		</div>
	</div>
);

export default withRouter(MenuItem);
