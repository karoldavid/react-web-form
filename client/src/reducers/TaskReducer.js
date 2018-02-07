import { FETCH_TASKS_SUCCESS } from "../actions/types";

const INITIAL_STATE = {
	tasks: []
};

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case FETCH_TASKS_SUCCESS:
			console.log(action.payload)
			return { ...state, tasks: action.payload };
		default:
			return state;
	}
}
