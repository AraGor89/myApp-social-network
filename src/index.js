import * as serviceWorker from "./serviceWorker";
import store from "./Redux/redux-store";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ReadyApp from "./App";
import "./fonts/montserat/MontserratAlternates-Medium.ttf";

let rerenderEntireTree = () => {
  ReactDOM.render(<ReadyApp />, document.getElementById("root"));
};

rerenderEntireTree();

store.subscribe(() => {
  rerenderEntireTree();
});

serviceWorker.unregister();
