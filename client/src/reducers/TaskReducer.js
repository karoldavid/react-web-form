import {
	FETCH_TASKS_SUCCESS,
	POST_TASK_SUCCESS,
	POST_TASK_FAIL,
	MESSAGE_CLOSE
} from "../actions/types";
import { TASK_FORM_FIELDS } from "../utils/consts";

const INITIAL_STATE = {
	fields: TASK_FORM_FIELDS,
	initialValues: {
		delivery_at: new Date()
	},
	tasks: [],
	message: "",
	open: false
};

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case FETCH_TASKS_SUCCESS:
			return { ...state, tasks: action.payload };
		case POST_TASK_SUCCESS:
			return { ...state, open: true, message: action.payload };
		case POST_TASK_FAIL:
			return { ...state, open: true, message: action.payload };
		case MESSAGE_CLOSE:
			return { ...state, open: false, message: "" };
		default:
			return state;
	}
}
