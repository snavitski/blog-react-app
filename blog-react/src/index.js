import ReactDOM from "react-dom";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
		<Provider store={store}>
			<App />

		</Provider>
	</BrowserRouter>
	</React.StrictMode>,
	document.querySelector("#root")
);
