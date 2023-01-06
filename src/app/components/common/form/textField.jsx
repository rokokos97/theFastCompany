import React, { useState } from "react";
import PropTypes from "prop-types";
const TextFiled = ({ label, type, name, value, onChange, error }) => {
    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => {
        setShowPassword((prevState) => !prevState);
    };
    const renderClass = () => {
        return "form-control" + (error ? " is-invalid" : "");
    };
    return (
        <>
            <div className={"mb-4"}>
                <label htmlFor={name}>{label}</label>{" "}
                <div className="input-group has-validation">
                    <input
                        type={showPassword ? "text" : type}
                        id={name}
                        placeholder={`Enter your ${name}`}
                        value={value}
                        name={name}
                        onChange={onChange}
                        className={renderClass()}
                    />
                    {(type === "password") && <button
                        className={"btn btn-outline-secondary"}
                        type="button"
                        onClick={toggleShowPassword}
                    >
                        <i className={"bi bi-eye" + (showPassword ? "-slash" : "")}></i>
                    </button>}
                    {error && <div className={"invalid-feedback"}><p>{error}</p></div>}
                </div>
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
