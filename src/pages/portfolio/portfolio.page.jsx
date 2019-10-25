import React from "react";
import PORTFOLIO_DATA from "./portfolio.data";
import PortfolioItem from "../../components/portfolio-item/portfolio-item.component";
import "./portfolio.styles.scss";

class Portfolio extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			portfolio: PORTFOLIO_DATA
		};
	}

	render() {
		const { portfolio } = this.state;
		return (
			<div className="portfolio_list">
				{portfolio.map(({ id, ...otherPortfolioProps }) => (
					<PortfolioItem key={id} {...otherPortfolioProps} />
				))}
			</div>
		);
	}
}

export default Portfolio;
