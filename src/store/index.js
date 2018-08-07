import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers";
import axios from "../config/network";
import logger from "redux-logger";
const checkToken = store => next => action => {
	if (store.getState().auth.token) {
		axios.defaults.headers.common["authorization"] = store.getState().auth.token;
	} else {
		axios.defaults.headers.common["authorization"] = localStorage.getItem("token");
	}
	// console.log(store.getState().auth.token);
	return next(action);
};
export const store = createStore(reducers, {}, applyMiddleware(checkToken, thunk, logger));
