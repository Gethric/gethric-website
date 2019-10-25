import React from "react";

import "./portfolio-item.styles.scss";

const PortfolioItem = ({ id, title, subtitle, url, routename }) => (
	<div className="portfolio_item">
		<div className="content">
			<h1 className="title">{title.toUpperCase()}</h1>
			<span className="subtitle">{subtitle}</span>
			<div className="link">
				<a className="url" href={url}>
					link
				</a>
			</div>
		</div>
	</div>
);

export default PortfolioItem;
