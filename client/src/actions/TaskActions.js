import * as api from "../utils/api";
import {
	FETCH_TASKS_SUCCESS,
	POST_TASK_SUCCESS,
	POST_TASK_FAIL,
	MESSAGE_CLOSE
} from "./types";

export const fetchTasks = () => dispatch => {
	api
		.getAllTasks()
		.then(data => dispatch({ type: FETCH_TASKS_SUCCESS, payload: data }));
};

export const saveTask = (task, callback) => dispatch => {
	api
		.saveTask(task)
		.then(response => {
			console.log(response)
			if (!response.error) {
				dispatch({
					type: POST_TASK_SUCCESS,
					payload: "Form successfully submitted!"
				});
				callback();
			} else {
				dispatch({
					type: POST_TASK_FAIL,
					payload: "Form sumbission failed."
				});
				console.error(response.error);
			}
		})
		.catch(error => console.error(error));
};

export const closeSnackbar = () => {
	return{
		type: MESSAGE_CLOSE
	}
}
