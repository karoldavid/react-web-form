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
	{ name: "delivery_at", label: "Delivery At", required: true },
	{ name: "recipient.name", label: "Recipient Name", required: true },
	{ name: "recipient.zipcode", label: "Recipient Zip Code", required: true },
	{ name: "recipient.street", label: "Recipient Street", required: true },
	{ name: "recipient.city", label: "Recipient City", required: true },
	{ name: "recipient.state", label: "Recipient State", required: true },
	{ name: "recipient.country", label: "Recipient Country", required: true },
	{ name: "recipient.phone", label: "Recipient Phone", required: true }
];
