export const task = {
	delivery_at: "2017-01-01",
	recipient: {
		name: "User",
		zipcode: "10249",
		street: "Test 23",
		city: "Berlin",
		state: "Berlin",
		country: "germany",
		phone: "+49 176 22222222"
	}
};

export const TASK_FORM_FIELDS = [
	{ name: "recipient.name", label: "Name", required: true },
	{ name: "recipient.zipcode", label: "Zip Code", required: true },
	{ name: "recipient.street", label: "Street", required: true },
	{ name: "delivery_at", label: "Delivery At", required: true }
];
