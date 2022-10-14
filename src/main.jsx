import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import App from "./App"
import "./index.css"
import "react-loading-skeleton/dist/skeleton.css"
import { store } from "./store/store"
import { BrowserRouter as Router } from "react-router-dom"

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<Router>
				<App />
			</Router>
		</Provider>
	</React.StrictMode>,
)