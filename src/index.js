import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

import App from "./components/App/App";
import * as serviceWorker from "./serviceWorker";
import { basePath, apiVersion } from "./api/config";
window.$baseUrl = `${basePath}/${apiVersion}`;

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();
