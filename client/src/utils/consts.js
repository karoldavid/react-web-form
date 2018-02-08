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
	{ name: "delivery_at", label: "Delivery At", type: "dateTime", required: true },
	{ name: "recipient.name", label: "Recipient Name", type: "text", required: true },
	{ name: "recipient.zipcode", label: "Recipient Zip Code", type: "text", required: true },
	{ name: "recipient.street", label: "Recipient Street", type: "text", required: true },
	{ name: "recipient.city", label: "Recipient City", type: "text", required: true },
	{ name: "recipient.state", label: "Recipient State", type: "text", required: true },
	{ name: "recipient.country", label: "Recipient Country", type: "text", required: true },
	{ name: "recipient.phone", label: "Recipient Phone", type: "text", required: true }
];
