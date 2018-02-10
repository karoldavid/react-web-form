import {
	FETCH_TASKS_SUCCESS,
	MESSAGE_CLOSE,
	MESSAGE_SHOW
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
		case MESSAGE_SHOW:
			return { ...state, open: true, message: action.payload };
		case MESSAGE_CLOSE:
			return { ...state, open: false, message: "" };
		default:
			return state;
	}
}
