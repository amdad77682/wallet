import { combineReducers } from "redux";
import { home } from "../modules/home/reducers";

const appReducers = combineReducers({
  home
});

export default appReducers;
