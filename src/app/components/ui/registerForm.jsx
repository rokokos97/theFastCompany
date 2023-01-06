import React, { useEffect, useState } from "react";
import { validator } from "../../utils/validator";
import TextFiled from "../common/form/textField";
import api from "../../api";

const RegisterForm = () => {
    const [professions, setProfessions] = useState(null);
    const [data, setData] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfessions(data));
    }, []);
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
        email: {
            isRequired: { message: "Email is required" },
            isEmail: { message: "Email is not correct" }
        },
        password: {
            isRequired: { message: "Password is required" },
            isContainCapital: { message: "Password must contain capital latter" },
            isContainDigit: { message: "password must contain number" },
            min: { message: "Password must contain at least 8 characters", value: 8 }
        }
    };
    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const isValid = Object.keys(errors).length === 0;
    return (<>
        <form onSubmit={handelSubmit} className={""}>
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
            <div className="mb-4">
                <label
                    htmlFor="validationServer04"
                    className="form-label"
                >
                    State
                </label>
                <select
                    className="form-select is-invalid"
                    id="validationServer04"
                    aria-describedby="validationServer04Feedback"
                    required
                >
                    <option
                        selected
                        disabled
                        value=""
                    >
                        Choose...
                    </option>
                    {professions && professions.map((profession) => <option
                        key={profession._id}
                        value={profession._id}
                    >
                        {profession.name}
                    </option>)};
                </select>
                <div id="validationServer04Feedback" className="invalid-feedback">
                    Please select a valid state.
                </div>
            </div>
            <button
                type={"submit"}
                className={"btn btn-success w-100 mx-auto"}
                disabled={!isValid}
            >
                            Submit
            </button>
        </form>
    </>);
};

export default RegisterForm;
