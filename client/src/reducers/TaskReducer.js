import { FETCH_TASKS_SUCCESS, POST_TASK_SUCCESS } from "../actions/types";
import { TASK_FORM_FIELDS } from "../utils/consts";

const INITIAL_STATE = {
	fields: TASK_FORM_FIELDS,
	tasks: []
};

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case FETCH_TASKS_SUCCESS:
			return { ...state, tasks: action.payload };
		case POST_TASK_SUCCESS:
			return state;
		default:
			return state;
	}
}
