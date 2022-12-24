import React from "react";
import User from "./user";
import PropTypes from "prop-types";

const UserTable = ({ users, onSort, ...rest }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th onClick={() => onSort("name")} scope="col">Name</th>
                    <th scope="col">Qualities</th>
                    <th onClick={() => onSort("profession.name")} scope="col">Profession</th>
                    <th onClick={() => onSort("completedMeetings")} scope="col">Meets</th>
                    <th onClick={() => onSort("rate")} scope="col">Rate</th>
                    <th onClick={() => onSort("bookmark")} scope="col">Bookmark</th>
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
    users: PropTypes.array.isRequired,
    onSort: PropTypes.func
};
export default UserTable;
