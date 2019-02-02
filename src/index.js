import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import CreateSagaMiddleware from "redux-saga";
import * as serviceWorker from "./serviceWorker";

import "./index.css";
import App from "./App";
import reducers from "./reducers";
import setupSocket from "./sockets";
import handleNewMessage from "./sagas";
import username from "./utils/name";

const createSagaMiddleware = CreateSagaMiddleware();

const store = createStore(reducers, applyMiddleware(createSagaMiddleware));

const socket = setupSocket(store.dispatch, username);

createSagaMiddleware.run(handleNewMessage, { socket, username });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
