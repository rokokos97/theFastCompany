import React from "react";
import useMockData from "../utils/mockData";

const Main = () => {
    const { initialize } = useMockData();
    const handleClick = () => {
        console.log("clicked");
        initialize();
    };
    return (
        <div className="container mt-5">
            <h1>Main page</h1>
            <h3>Initial data in FireBase</h3>
            <button className={"btn btn-primary"} onClick={handleClick}>
                {" "}
                Initial
            </button>
        </div>
    );
};

export default Main;
