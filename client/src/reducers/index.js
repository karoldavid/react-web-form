import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import task from "./TaskReducer";

export default combineReducers({
	form: formReducer,
	task
});
