export const validate = (values, props) => {
	const requiredFields = props.fields.reduce((previous, field) => {
		if (field.required) {
			return [...previous, field.name];
		}
		return previous;
	}, []);

	return requiredFields.reduce((prev, next) => {
		const index = props.fields.findIndex(field => field.name === next);
		const keys = next.split(".");
		if (keys.length === 1) {
			if (!values[keys[0]]) {
				prev[keys[0]] = `${props.fields[index].label} is required`;
			}
		} else if (
			!values[keys[0]] ||
			(values[keys[0]] && !values[keys[0]][keys[1]])
		) {
			if (!prev[keys[0]]) prev[keys[0]] = {};
			prev[keys[0]][keys[1]] = `${props.fields[index].label} is required`;
		}
		return prev;
	}, {});
};

export const lower = value => value && value.toLowerCase();