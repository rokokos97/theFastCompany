import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import api from "../../../api";
import QualitiesList from "../../ui/qualities/qualitiesList";
import { useHistory } from "react-router-dom";

const UserPage = ({ userId }) => {
    const history = useHistory();
    const [user, setUser] = useState();
    useEffect(() => {
        api.users.getById(userId).then((data) => setUser(data));
    });
    const handleClick = () => {
        history.push("/users");
    };
    if (user) {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="card text-center col-md-6 offset-md-3">
                            {/* <div className="card-header"> */}
                            {/*    <ul className="nav nav-pills card-header-pills"> */}
                            {/*        <li className="nav-item"> */}
                            {/*            <a className="nav-link active" href="#">Active</a> */}
                            {/*        </li> */}
                            {/*        <li className="nav-item"> */}
                            {/*            <a className="nav-link" href="#">Link</a> */}
                            {/*        </li> */}
                            {/*        <li className="nav-item"> */}
                            {/*            <a className="nav-link disabled">Disabled</a> */}
                            {/*        </li> */}
                            {/*    </ul> */}
                            {/* </div> */}
                            <div className="card-body">
                                <h5 className="card-title">{user.name}</h5>
                                <p className="card-text">Profession: {user.profession.name}</p>
                                <p className="card-text"><QualitiesList qualities={user.qualities} /></p>
                                <p className="card-text">completedMeetings: {user.completedMeetings}</p>
                                <p className="card-text">Rate: {user.rate}</p>
                                <button className={"btn btn-primary w-100 wx-auto"} onClick={handleClick}> All users</button>
                            </div>
                        </div>
                        {/* <div> */}
                        {/*    <h1> {user.name}</h1> */}
                        {/*    <h2>Profession: {user.profession.name}</h2> */}
                        {/*    <QualitiesList qualities={user.qualities} /> */}
                        {/*    <p>completedMeetings: {user.completedMeetings}</p> */}
                        {/*    <h2>Rate: {user.rate}</h2> */}
                        {/*    <button onClick={handleClick}> Все Пользователи</button> */}
                        {/* </div> */}
                    </div>
                </div>
            </>
        );
    } else {
        return <h1>Loading</h1>;
    }
};

UserPage.propTypes = {
    userId: PropTypes.string.isRequired
};

export default UserPage;
