import React from "react";
import { Switch, Route } from "react-router-dom";

import "./sass/main.scss";

import Homepage from "./pages/homepage/homepage.page";
import Aboutpage from "./pages/about/about.page";
import Portfolio from "./pages/portfolio/portfolio.page";
import Contact from "./pages/contact/contact.page";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";

function App() {
	return (
		<div className="App">
			<Header />
			<Switch>
				<Route exact path="/" component={Homepage} />
				<Route path="/about" component={Aboutpage} />
				<Route path="/portfolio" component={Portfolio} />
				<Route path="/contact" component={Contact} />
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
