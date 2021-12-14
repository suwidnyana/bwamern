import { combineReducers } from "redux";
import checkout from "./checkout";
import page from "./pages"
// import page from "./page";

export default combineReducers({
  checkout,
  page,
});
