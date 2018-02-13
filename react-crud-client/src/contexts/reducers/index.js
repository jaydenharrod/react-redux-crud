import { routerReducer as routing } from "react-router-redux";
import { combineReducers } from "redux";
import appReducer from "./appReducer";
import postReducer from "./postReducer";

export default combineReducers({
  appState: appReducer,
  postState: postReducer,
  routing
});
