import React from "react";
import {createRoot} from "react-dom/client";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";
import App from "./components/App";

const store = createStore(reducers, applyMiddleware(thunk));

const root = createRoot(document.getElementById('root'));
root.render(<Provider store={store}><App /></Provider>);
