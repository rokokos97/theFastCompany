import React from "react";
import User from "./user";
import PropTypes from "prop-types";
import TableHeader from "./tableHeader";

const UserTable = ({ users, onSort, selectedSort, ...rest }) => {
    const columns = {
        name: { iter: "name", name: "Name" },
        qualities: { name: "Qualities" },
        profession: { iter: "profession.name", name: "Profession" },
        completedMeetings: { iter: "completedMeetings", name: "Meets" },
        rate: { iter: "rate", name: "Rate" },
        bookmark: { iter: "bookmark", name: "Bookmark" },
        delete: {}
    };
    return (
        <table className="table">
            <TableHeader selectedSort={selectedSort} onSort={onSort} columns={columns}/>
            <tbody>
                {users.map((user) => (
                    <User key={user._id} {...rest} {...user} />
                ))}
            </tbody>
        </table>
    );
};

UserTable.propTypes = {
    selectedSort: PropTypes.object,
    users: PropTypes.array.isRequired,
    onSort: PropTypes.func
};
export default UserTable;
