import React from "react";
import getRandomInt from "../utils/getRandomInt";
const Main = () => {
    return (
        <div className="container mt-5">
            <h1 className="text-center"> The Fast Company </h1>
            <div className="d-flex justify-content-center flex-wrap">
                <img src={`https://robohash.org/set_set5/bgset_bg2/3.122418${getRandomInt(1,20)}?size=270x270`} alt="Some face"/>
                <img src={`https://robohash.org/set_set5/bgset_bg2/3.1224${getRandomInt(1,20)}18?size=270x270`} alt="Some face"/>
                <img src={`https://robohash.org/set_set5/bgset_bg2/3.1224${getRandomInt(1,20)}18${getRandomInt(1,20)}?size=270x270`} alt="Some face"/>
                <img src={`https://robohash.org/set_set5/bgset_bg2/3.12${getRandomInt(1,20)}2418${getRandomInt(1,20)}?size=270x270`} alt="Some face"/>
            </div>
        </div>
    );
};

export default Main;
