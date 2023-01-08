import React from "react";
import PropTypes from "prop-types";

const SelectedField = ({ label, name, value, onChange, defaultOption, options, error }) => {
    const optionsArray = !Array.isArray(options) && typeof options === "object"
        ? Object.keys(options).map(optionName => ({ name: options[optionName].name, value: options[optionName]._id }))
        : options;
    const renderClass = () => {
        return "form-select" + (error ? " is-invalid" : "");
    };
    const handleChange = ({ target }) => {
        onChange({ name: [target.name], value: target.value });
    };
    return (
        <>
            <div className="mb-4">
                <label
                    htmlFor={name}
                    className="form-label"
                >
                    {label}
                </label>
                <select
                    id={name}
                    name={name}
                    value={value}
                    onChange={handleChange}
                    className={renderClass()}
                >
                    <option
                        disabled
                        value=""
                    >
                        {defaultOption}
                    </option>
                    {}
                    {optionsArray && optionsArray.map((option) => <option
                        key={option.value}
                        value={option.value}
                    >{option.name}</option>)
                    }
                </select>
                <div className="invalid-feedback">
                    { error && <p>{ error }</p>}
                </div>
            </div>
        </>
    );
};
SelectedField.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    defaultOption: PropTypes.string,
    options: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    error: PropTypes.string,
    name: PropTypes.string
};
export default SelectedField;
