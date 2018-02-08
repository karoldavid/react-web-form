import React from "react";
import { Route } from "react-router-dom";
import App from "./App";
import BlankRedirectPage from "./components/BlankRedirectPage";

export default () => {
	return (
		<div>
			<Route exact path="/" component={App} />
			<Route path="/blankpage" component={BlankRedirectPage} />
		</div>
	);
};
