const api = "http://localhost:5000";

const headers = {
	Accept: "application/json",
	"Access-Control-Allow-Origin": "*"
};

export const getAllTasks = () => {
	return fetch(`${api}/tasks`, { ...headers })
		.then(res => res.json())
		.then(data => data);
};

export const saveTask = data => {

	return fetch(`${api}/tasks`, {
		method: "POST",
		headers: {
			...headers,
			"Content-Type": "application/json"
		},
		body: JSON.stringify(data)
	})
		.then(res => res.json())
		.then(data => data);
};
