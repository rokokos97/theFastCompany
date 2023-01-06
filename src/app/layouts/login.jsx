import React from "react";
import LoginForm from "../components/ ui/loginForm";
const Login = () => {
    const [formType, setFormType] = useState("login")
    return (
        <div className={"container mt-5"}>
            <div className="row">
                <div className={"col-md-6 offset-md-3 shadow p-3"}>
                    <LoginForm/>
                </div>
            </div>
        </div>
    );
};
export default Login;
