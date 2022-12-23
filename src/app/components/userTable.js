import React from "react";
import User from "./user";
import PropTypes from "prop-types";

const UserTable = ({ users }, { ...rest }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Qualities</th>
                    <th scope="col">Profession</th>
                    <th scope="col">Meets</th>
                    <th scope="col">Rate</th>
                    <th scope="col">Bookmark</th>
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
    users: PropTypes.array.isRequired
};
export default UserTable;
