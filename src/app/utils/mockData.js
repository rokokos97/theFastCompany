import { useState } from "react";
import professions from "../mockData/professions.json";
// import qualities from "../mockData/qualities.json";
// import users from "../mockData/users.json";
import httpService from "../services/httpService";

const useMockData = () => {
    // const statusConsts = {
    //     idle: "Not Started",
    //     pending: "In Progress",
    //     success: "Ready",
    //     error: "Error occurred"
    // };
    const [error, setError] = useState(null);
    // const [status, setStatus] = useState(statusConsts.idle);
    const initialize = async () => {
        try {
            for (const prof of professions) {
                await httpService.put("profession/" + prof._id, prof);
            }
        } catch (error) {
            setError(error);
        }
    };
    return { error, initialize };
};

export default useMockData;
