import React, { useState } from "react";
import TextFiled from "../components/textField";

const Login = () => {
    const [data, setData] = useState({ email: "", password: "" });
    const handelChange = ({ target }) => {
        setData((prevState) =>
            ({ ...prevState, [target.name]: target.value }));
        console.log(target.value);
    };
    return (
        <>
            <form action="" className={"m-2"}>
                <TextFiled
                    label={"Email"}
                    name={"email"}
                    value={data.email}
                    onChange={handelChange}
                />
                <div className={"m-2"}>
                    <TextFiled
                        label={"Password"}
                        type={"password"}
                        name={"password"}
                        value={data.password}
                        onChange={handelChange}
                    />
                </div>
            </form>
        </>
    );
};

export default Login;
