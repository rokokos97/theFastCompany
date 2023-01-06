import React from "react";
import LoginForm from "../components/ ui/loginForm";
import {useParams} from "react-router-dom";
const Login = () => {
    const { type } = useParams();
    const [ formType, setFormType ] = useState(type === "register" ? type : "login");
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
