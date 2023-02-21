import React, { useEffect, useState } from "react";
import { validator } from "../../../utils/validator";
import TextFiled from "../../common/form/textField";
import SelectedField from "../../common/form/selectedField";
import RadioField from "../../common/form/radioField";
import MultiSelectField from "../../common/form/multiselectField";
// import { useHistory } from "react-router-dom";
import BackHistoryButton from "../../common/backButton";
import { useAuth } from "../../../hooks/useAuth";
import { useQualities } from "../../../hooks/useQualities";
import { useProfessions } from "../../../hooks/useProfessions";
const EditUserPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState();
    const { currentUser } = useAuth();
    const { qualities, isLoading: qualitiesLoading } = useQualities();
    const { professions, isLoading: professionsLoading } = useProfessions();
    const [errors, setErrors] = useState({});
    const qualitiesList = qualities.map((q) => ({ label: q.name, value: q._id }));
    const professionsList = professions.map((p) => ({ label: p.name, value: p._id }));
    useEffect(() => {
        if (!professionsLoading && !qualitiesLoading && currentUser && !data) {
            setData({ ...currentUser });
        }
    }, [professionsLoading, qualitiesLoading, currentUser, data]);
    useEffect(() => {
        validate();
        if (data && isLoading) {
            setIsLoading(false);
        }
    }, [data]);
    // const getProfessionById = (id) => {
    //     for (const prof of professions) {
    //         if (prof.value === id) {
    //             return { _id: prof.value, name: prof.label };
    //         }
    //     }
    // };
    // const getQualities = (elements) => {
    //     const qualitiesArray = [];
    //     for (const elem of elements) {
    //         for (const quality in qualities) {
    //             if (elem.value === qualities[quality].value) {
    //                 qualitiesArray.push({
    //                     _id: qualities[quality].value,
    //                     name: qualities[quality].label,
    //                     color: qualities[quality].color
    //                 });
    //             }
    //         }
    //     }
    //     return qualitiesArray;
    // };
    // const transformData = (data) => {
    //     return data.map((qual) => ({ label: qual.name, value: qual._id }));
    // };
    const handelChange = (target) => {
        setData((prevState) =>
            ({ ...prevState, [target.name]: target.value }));
    };
    const handelSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        console.log(data);
    };
    const validatorConfig = {
        name: { isRequired: { message: "Name is required" } },
        email: {
            isRequired: { message: "Email is required" },
            isEmail: { message: "Email is not correct" }
        },
        qualities: {
            notEmpty: { message: "Qualities is required" }
        }
    };
    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const isValid = Object.keys(errors).length === 0;
    return (<div className="container mt-5">
        <BackHistoryButton/>
        <div className="row">
            {(!isLoading)
                ? <div className="card col-md-6 offset-md-3">
                    <div className="card-body">
                        <form onSubmit={handelSubmit} className={"card-body"}>
                            <TextFiled
                                label={"Name"}
                                name={"name"}
                                value={data.name}
                                onChange={handelChange}
                                error={errors.name}
                            />
                            <TextFiled
                                label={"Email"}
                                name={"email"}
                                value={data.email}
                                onChange={handelChange}
                                error={errors.email}
                            />
                            <TextFiled
                                label={"Rate"}
                                name={"rate"}
                                value={data.rate}
                                onChange={handelChange}
                            />
                            <TextFiled
                                label={"Completed Meetings"}
                                name={"completedMeetings"}
                                value={data.completedMeetings}
                                onChange={handelChange}
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
                            <SelectedField
                                label={"Choose your profession"}
                                name={"profession"}
                                defaultOption={"Choose..."}
                                options={professionsList}
                                onChange={handelChange}
                                value={data.profession}
                            />
                            <MultiSelectField
                                options={qualitiesList}
                                onChange={handelChange}
                                defaultValue={data.qualities}
                                name={"qualities"}
                                label={"Choose your qualities"}
                                error={errors.qualities}
                            />
                            <button
                                type={"submit"}
                                className={"btn btn-success w-100 mx-auto"}
                                disabled={!isValid}
                            >
                                        Save info
                            </button>
                        </form>
                    </div>
                </div>
                : "Loading form..."}
        </div>
    </div>
    );
};
export default EditUserPage;
