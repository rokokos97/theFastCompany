export function validator(data, config) {
    const errors = {};
    function validate(validateMethod, data, config) {
        const emailRegEx = /\S+@\S+\.\S+/g;
        switch (validateMethod) {
            case "isRequired":
                if (data.trim() === "") return config.message;
                break;
            case "isEmail":
                if (!emailRegEx.test(data)) return config.message;
                break;
            default:
                break;
        }
    }
    for (const fieldName in data) {
        for (const validateMethod in config[fieldName]) {
            const error = validate(
                validateMethod,
                data[fieldName],
                config[fieldName][validateMethod]);
            if (error && !errors[fieldName]) {
                errors[fieldName] = error;
                console.log(errors[fieldName]);
            }
        }
    } return errors;
}
