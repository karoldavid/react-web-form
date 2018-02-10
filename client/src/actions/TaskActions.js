import * as api from "../utils/api";
import {
	FETCH_TASKS_SUCCESS,
	MESSAGE_CLOSE,
	MESSAGE_SHOW
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
			if (!response.error) {
				dispatch({
					type: MESSAGE_SHOW,
					payload: "Form successfully submitted!"
				});
				callback();
			} else {
				dispatch({
					type: MESSAGE_SHOW,
					payload: "Form sumbission failed."
				});
				console.error(response.error);
			}
		})
		.catch(error => console.error(error));
};

export const closeSnackbar = () => {
	return {
		type: MESSAGE_CLOSE
	};
};
