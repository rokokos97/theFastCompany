import React, { useState } from "react";
import LoginForm from "../components/ ui/loginForm";
import { useParams } from "react-router-dom";
import RegisterForm from "../components/ ui/registerForm";
const Login = () => {
    const { type } = useParams();
    const [formType, setFormType] = useState(type === "register" ? type : "login");
    const toggleFormType = () =>{

    };
    return (
        <div className={"container mt-5"}>
            <div className="row">
                <div className={"col-md-6 offset-md-3 shadow p-3"}>
                    {formType === "register"
                        ? <>
                            <RegisterForm/>
                            <p>Already have an account?
                                <a href="">Sign in</a>
                            </p>
                        </>
                        : <>
                            <LoginForm/>
                            <p>Dont have an account?
                                <a href="">Sign up</a>
                            </p>
                        </>}
                </div>
            </div>
        </div>
    );
};
export default Login;
