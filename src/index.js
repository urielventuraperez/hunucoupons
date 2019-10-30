import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import configureStore, { history } from "./redux/store";
import { Provider } from "react-redux";
import App from "./pages/app";

const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
