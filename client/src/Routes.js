import React from "react";
import { Route } from "react-router-dom";
import App from "./App";
import RedirectPage from "./components/RedirectPage";

export default () => {
	return (
		<div>
			<Route exact path="/" component={App} />
			<Route path="/redirectpage" component={RedirectPage} />
		</div>
	);
};
