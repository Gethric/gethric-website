import React from "react";

import "./portfolio-item.styles.scss";

const PortfolioItem = ({ id, title, subtitle, url, language, code }) => (
	<div className="portfolio_item">
		<h1 className="title">{title.toUpperCase()}</h1>
		<div className="subtitle">{subtitle}</div>
		<div className="language">{language}</div>
		<div className="links">
			<a className="url" href={url} target="_blank" rel="noopener noreferrer">
				Page
			</a>
			<a className="code" href={code} target="_blank" rel="noopener noreferrer">
				Code
			</a>
		</div>
	</div>
);

export default PortfolioItem;
