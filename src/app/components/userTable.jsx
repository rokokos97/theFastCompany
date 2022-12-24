import React from "react";
import User from "./user";
import PropTypes from "prop-types";

const UserTable = ({ users, onSort, currentSort, ...rest }) => {
    const handelSort = (item) => {
        if (currentSort.iter === item) {
            onSort({ ...currentSort, order: currentSort.order === "asc" ? "desc" : "asc" });
        } else {
            onSort({ iter: item, order: "asc" });
        }
    };
    return (
        <table className="table">
            <thead>
                <tr>
                    <th onClick={() => handelSort("name")} scope="col">Name</th>
                    <th scope="col">Qualities</th>
                    <th onClick={() => handelSort("profession.name")} scope="col">Profession</th>
                    <th onClick={() => handelSort("completedMeetings")} scope="col">Meets</th>
                    <th onClick={() => handelSort("rate")} scope="col">Rate</th>
                    <th onClick={() => handelSort("bookmark")} scope="col">Bookmark</th>
                    <th scope="col" />
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <User key={user._id} {...rest} {...user} />
                ))}
            </tbody>
        </table>
    );
};

UserTable.propTypes = {
    currentSort: PropTypes.object,
    users: PropTypes.array.isRequired,
    onSort: PropTypes.func
};
export default UserTable;
