export const validate = (values, props) => {
	const errors = {};

	const requiredFields = props.fields.reduce((previous, field) => {
		if (field.required) {
			return [...previous, field.name];
		}
		return previous;
	}, []);

	requiredFields.forEach(name => {
		const index = props.fields.findIndex(field => field.name === name);
		const keys = name.split(".");
		if (keys.length === 1) {
			if (!values[keys[0]]) {
				errors[keys[0]] = `${props.fields[index].label} is required`;
			}
		} else if (
			!values[keys[0]] ||
			(values[keys[0]] && !values[keys[0]][keys[1]])
		) {
			if (!errors[keys[0]]) errors[keys[0]] = {};
			errors[keys[0]][keys[1]] = `${
				props.fields[index].label
			} is required`;
		}
	});

	return errors;
};

export const lower = value => value && value.toLowerCase();