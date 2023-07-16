import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import catsReducer from "./features/cats/catsSlice";
import { applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools} from "redux-devtools-extension";
import "bootstrap/dist/css/bootstrap.min.css";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const store = createStore(catsReducer, composedEnhancer);

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, 
document.getElementById("root"));
