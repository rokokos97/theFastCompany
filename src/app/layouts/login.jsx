import React from "react";

const Login = () => {
    return (
        <>
            <form action="" className={"m-2"}>
                <div className={"m-2"}>
                    <label htmlFor={"email"}>Email</label>{" "}
                    <input
                        type={"text"}
                        id={"email"}
                        placeholder={"Enter your email"}/>
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
