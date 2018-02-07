import { FETCH_TASKS_SUCCESS } from "../actions/types";
import { TASK_FORM_FIELDS } from "../utils/consts";

const INITIAL_STATE = {
	fields: TASK_FORM_FIELDS,
	tasks: []
};

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case FETCH_TASKS_SUCCESS:
			return { ...state, tasks: action.payload };
		default:
			return state;
	}
}
