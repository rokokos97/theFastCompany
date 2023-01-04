import React, { useState } from "react";

const Login = () => {
    const [email] = useState();
    const handelChange = (e) => {
        console.log(e.target.value);
    };
    return (
        <>
            <form action="" className={"m-2"}>
                <div className={"m-2"}>
                    <label htmlFor={"email"}>Email</label>{" "}
                    <input
                        type={"text"}
                        id={"email"}
                        placeholder={"Enter your email"}
                        value={email}
                        onChange={handelChange}
                    />
                </div>
                <div className={"m-2"}>
                    <label htmlFor={"password"}>Password</label>{" "}
                    <input type={"password"} id={"password"} placeholder={"Enter your password"}/>
                </div>
            </form>
        </>
    );
};

export default Login;
