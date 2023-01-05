import React from "react";
import PropTypes from "prop-types";
const TextFiled = ({ label, type, name, value, onChange, error }) => {
    return (
        <>
            <div className={"m-2"}>
                <label htmlFor={name}>{label}</label>{" "}
                <input
                    type={type}
                    id={name}
                    placeholder={`Enter your ${name}`}
                    value={value}
                    name={name}
                    onChange={onChange}
                />
                <p>{error}</p>
            </div>
        </>
    );
};
TextFiled.defaultProps = { type: "text" };
TextFiled.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string
};
export default TextFiled;
