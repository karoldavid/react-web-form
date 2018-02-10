import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import { MuiThemeProvider } from "material-ui";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import App from "./App";

ReactDOM.render(
	<Provider store={store}>
		<MuiThemeProvider>
			<BrowserRouter>
				<App>
					<Routes />
				</App>
			</BrowserRouter>
		</MuiThemeProvider>
	</Provider>,
	document.getElementById("root")
);
registerServiceWorker();
