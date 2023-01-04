import React, { useState } from "react";
import TextFiled from "../components/textField";

const Login = () => {
    const [data, setData] = useState({ email: "", password: "" });
    const handelChange = ({ target }) => {
        setData((prevState) =>
            ({ ...prevState, [target.name]: target.value }));
    };
    const handelSubmit = (e) => {
        e.preventDefault();
        console.log(data);
    };
    return (
        <form onSubmit={handelSubmit} className={"m-2"}>
            <TextFiled
                label={"Email"}
                name={"email"}
                value={data.email}
                onChange={handelChange}
            />
            <TextFiled
                label={"Password"}
                type={"password"}
                name={"password"}
                value={data.password}
                onChange={handelChange}
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
