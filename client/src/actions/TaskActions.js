import * as api from "../utils/api";
import { FETCH_TASKS_SUCCESS, POST_TASK_SUCCESS } from "./types";

export const fetchTasks = () => dispatch => {
	api
		.getAllTasks()
		.then(data => dispatch({ type: FETCH_TASKS_SUCCESS, payload: data }));
};

export const saveTask = (task, callback) => dispatch => {
	api.saveTask(task).then(() => {
		callback();
		dispatch({ type: POST_TASK_SUCCESS });
	});
};
