import React from "react";
import PropTypes from "prop-types";

const TextFiled = ({ label, type, name, value, onChange }) => {
    return (
        <>
            <div className={"m-2"}>
                <label htmlFor={"email"}>{label}</label>{" "}
                <input
                    type={type}
                    id={name}
                    placeholder={`Enter your ${name}`}
                    value={value}
                    name={"email"}
                    onChange={onChange}
                />
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
    onChange: PropTypes.func
};
export default TextFiled;
