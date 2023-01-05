import React from "react";
import PropTypes from "prop-types";
const TextFiled = ({ label, type, name, value, onChange, error }) => {
    const renderClass = () => {
        return "form-control" + (error ? " is-invalid" : "");
    };
    return (
        <>
            <div className={"mb-4"}>
                <label htmlFor={name}>{label}</label>{" "}
                <input
                    type={type}
                    id={name}
                    placeholder={`Enter your ${name}`}
                    value={value}
                    name={name}
                    onChange={onChange}
                    className={renderClass()}
                />
                {error && <div className={"invalid-feedback"}><p>{error}</p></div>}
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
