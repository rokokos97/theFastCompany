import React from "react";
import PropTypes from "prop-types";

const CheckBoxField = ({ name, value, label, onChange, children }) => {
    const handleChange = () => {
        onChange({ name:name, value: !value });
    };
    return <>
        <div className="form-check form-check-inline">
            <input
                className="form-check-input"
                type="checkbox"
                id={name}
                value=""
                onChange={handleChange}
                checked={value}
            />
            <label
                className="form-check-label"
                htmlFor={name}>
                {children}
            </label>
        </div>
    </>;
};
CheckBoxField.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])

};
export default CheckBoxField;
