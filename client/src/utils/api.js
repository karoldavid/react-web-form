const api = 'http://localhost:5000'

const headers = {
	'Accept': 'application/json',
  	'Access-Control-Allow-Origin': '*'
}

export const getAllTasks = () => {
	return fetch(`${api}/tasks`)
		.then(res => res.json())
		.then(data => data)
}