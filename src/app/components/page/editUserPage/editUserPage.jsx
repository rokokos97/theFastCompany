import React, { useEffect, useState } from "react";
import { validator } from "../../../utils/validator";
import TextFiled from "../../common/form/textField";
import api from "../../../api";
import SelectedField from "../../common/form/selectedFild";
import RadioField from "../../common/form/radioField";
import MultiSelectField from "../../common/form/multiselectField";
import CheckBoxField from "../../common/form/checkBoxField";

const EditUserPage = () => {
    const [qualities, setQualities] = useState({});
    const [professions, setProfessions] = useState([]);
    const [data, setData] = useState({
        email: "",
        password: "",
        profession: "",
        sex: "male",
        qualities: [{}],
        license: false
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        api.professions.fetchAll().then((data) => {
            const professionList =
                Object.keys(data).map((professionName) => ({
                    label: data[professionName].name,
                    value: data[professionName]._id
                }));
            setProfessions(professionList);
        });
        api.qualities.fetchAll().then((data) => setQualities(data));
    }, []);
    const handelChange = (target) => {
        console.log("target", target.name);
        console.log("data", data);
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
            isContainCapital: { message: "Password must include capital latter" },
            isContainDigit: { message: "password must contain number" },
            min: { message: "Password must contain at least 8 characters", value: 8 }
        },
        profession: {
            isRequired: { message: "Profession is required" }
        },
        qualities: {
            notEmpty: { message: "Qualities is required" }
        },
        license: {
            isRequired: { message: "Confirm license before proceeding." }
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
                name={"profession"}
                defaultOption={"Choose..."}
                options={professions}
                onChange={handelChange}
                value={data.profession}
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
            <MultiSelectField
                options={qualities}
                onChange={handelChange}
                defaultOption={data.qualities}
                name={"qualities"}
                label={"Choose your qualities"}
                error={errors.qualities}
            />
            <CheckBoxField
                value={data.license}
                onChange={handelChange}
                name={"license"}
                error={errors.license}
            >
                Allow the <a href={"#"}>license</a>
            </CheckBoxField>
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

export default EditUserPage;
