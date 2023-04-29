import React from "react";
import getRandomInt from "../utils/getRandomInt";
import config from "../config.json"
const Main = () => {
    return (
        <div className="container mt-5">
            <h1 className="text-center"> The Fast Company </h1>
            <div className="d-flex justify-content-center flex-wrap">
                <img src={`${config.apiEndpoint}/upload/${getRandomInt(1,4)}.png`} alt="Some face"/>
                <img src={`${config.apiEndpoint}/upload/${getRandomInt(5,8)}.png`} alt="Some face"/>
                <img src={`${config.apiEndpoint}/upload/${getRandomInt(9,12)}.png`} alt="Some face"/>
                <img src={`${config.apiEndpoint}/upload/${getRandomInt(13,15)}.png`} alt="Some face"/>
                {/*<img src={`https://robohash.org/set_set5/bgset_bg2/3.1224${getRandomInt(1,20)}18?size=270x270`} alt="Some face"/>*/}
                {/*<img src={`https://robohash.org/set_set5/bgset_bg2/3.1224${getRandomInt(1,20)}18${getRandomInt(1,20)}?size=270x270`} alt="Some face"/>*/}
                {/*<img src={`https://robohash.org/set_set5/bgset_bg2/3.12${getRandomInt(1,20)}2418${getRandomInt(1,20)}?size=270x270`} alt="Some face"/>*/}
            </div>
        </div>
    );
};

export default Main;
