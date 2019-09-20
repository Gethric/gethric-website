import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Homepage from "./pages/homepage/homepage.component";
import Aboutpage from "./pages/about/about.component";

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" component={Homepage} />
				<Route path="/about" component={Aboutpage} />
			</Switch>
		</div>
	);
}

export default App;
