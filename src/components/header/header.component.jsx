import React from "react";
import { Link } from "react-router-dom";

import "./header.styles.scss";

const Header = () => (
	<div className="header">
		<div className="wrapper">
			<Link className="title" to="/">
				Welcome
			</Link>
			<Link className="subtitle" to="/">
				to gethric.com
			</Link>
		</div>
	</div>
);

export default Header;
