import React, { useEffect, useState } from "react";
import TextFiled from "../components/textField";
import { validator } from "../utils/validator";
const Login = () => {
    const [data, setData] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({});
    const handelChange = ({ target }) => {
        setData((prevState) =>
            ({ ...prevState, [target.name]: target.value }));
    };
    const handelSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        console.log(data);
    };
    useEffect(() => { validate(); }, [data]);

    const validatorConfig = {
        email: { isRequired: { message: "Email is required" } },
        password: { isRequired: { message: "Password is required" } }
    };
    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    return (
        <form onSubmit={handelSubmit} className={"m-2"}>
            <TextFiled
                label={"Email"}
                name={"email"}
                value={data.email}
                onChange={handelChange}
                error={errors.email}
            />
            <TextFiled
                label={"Password"}
                type={"password"}
                name={"password"}
                value={data.password}
                onChange={handelChange}
                error={errors.password}
            />
            <button
                type={"submit"}
                className={"btn btn-success"}
            >
                Submit
            </button>
        </form>
    );
};

export default Login;
