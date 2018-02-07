import * as api from "../utils/api";
import { FETCH_TASKS_SUCCESS } from "./types";

export const fetchTasks = () => dispatch => {
	api
		.getAllTasks()
		.then(data => dispatch({ type: FETCH_TASKS_SUCCESS, payload: data }));
};
