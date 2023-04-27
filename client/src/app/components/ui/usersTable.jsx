import React from "react";
import PropTypes from "prop-types";
import Qualities from "./qualities";
import Table from "../common/table";
import { Link } from "react-router-dom";
import Profession from "./profession";

const  UserTable = ({
    users,
    onSort,
    selectedSort
}) => {
    const columns = {
        name: {
            path: "name",
            name: "Name",
            component: (user) => (
                <Link to={`/users/${user._id}`} >{user.name}</Link>
            )
        },
        qualities: {
            name: "Qualities",
            component: (user) => <Qualities qualities={user.qualities} />
        },
        professions: {
            name: "Profession",
            component: (user) => <Profession id={user.profession} />
        },
        completedMeetings: {
            path: "completedMeetings",
            name: "Completed meetings"
        },
        rate: { path: "rate", name: "Rate" },
    };
    return (
        <Table
            onSort={onSort}
            selectedSort={selectedSort}
            columns={columns}
            data={users}
        />
    );
};

UserTable.propTypes = {
    users: PropTypes.array.isRequired,
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
};

export default UserTable;
