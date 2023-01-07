import React, { useEffect, useState } from "react";
import { validator } from "../../utils/validator";
import TextFiled from "../common/form/textField";
import api from "../../api";
import SelectedField from "../common/form/selectedFild";
import RadioField from "../common/form/radioField";

const RegisterForm = () => {
    const [professions, setProfessions] = useState();
    const [data, setData] = useState({ email: "", password: "", profession: "", sex: "male" });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfessions(data));
    }, []);
    useEffect(() => {
        console.log(professions);
    }, [professions]);
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
        },
        profession: {
            isRequired: { message: "Profession is required" }
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
            <SelectedField
                label={"Choose your profession"}
                value={data.profession}
                defaultOption={"Choose..."}
                options={professions}
                onChange={handelChange}
                error={errors.profession}
            />
            <RadioField
                label={"Choose your sex"}
                options={[{ name: "Male", value: "male" },
                    { name: "Female", value: "female" },
                    { name: "Other", value: "other" }]}
                value={data.sex}
                name={"sex"}
                onChange={handelChange}
            />
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
