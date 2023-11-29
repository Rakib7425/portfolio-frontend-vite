import "./css/main.css";
import App from "./App.jsx";
import reportWebVitals from "./reportWebVitals.js";

import { createRoot } from "react-dom/client";
import { store } from "./store/store.js";
import { Provider } from "react-redux";
const container = document.getElementById("root");
const root = createRoot(container);
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

root.render(
	<Provider store={store}>
		<ToastContainer theme={"dark"} autoClose={2000} />
		<App />
	</Provider>
);

reportWebVitals();
