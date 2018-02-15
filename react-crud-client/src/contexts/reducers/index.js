import { routerReducer as routing } from "react-router-redux";
import { combineReducers } from "redux";
import postReducer from "./postReducer";

export default combineReducers({
  postState: postReducer,
  routing
});
