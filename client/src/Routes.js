import React from "react";
import { Route } from "react-router-dom";
import AdminPage from "./components/AdminPage";
import RedirectPage from "./components/RedirectPage";

export default () => {
	return (
		<div>
			<Route exact path="/" component={AdminPage} />
			<Route path="/redirectpage" component={RedirectPage} />
		</div>
	);
};
