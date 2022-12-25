import React from "react";
import PropTypes from "prop-types";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import Bookmark from "./bookmark";

const UserTable = ({ users, onSort, selectedSort, onToggleBookMark }) => {
    const columns = {
        name: { path: "name", name: "Name" },
        qualities: { name: "Qualities" },
        profession: { path: "profession.name", name: "Profession" },
        completedMeetings: { path: "completedMeetings", name: "Meets" },
        rate: { path: "rate", name: "Rate" },
        bookmark: {
            path: "bookmark",
            name: "Bookmark",
            component: <Bookmark
                status={bookmark}
                onClick={() => onToggleBookMark(_id)}
            /> },
        delete: { component: "Delete" }
    };
    return (
        <table className="table">
            <TableHeader selectedSort={selectedSort} onSort={onSort} columns={columns}/>
            <TableBody data={users} columns={columns}/>
        </table>
    );
};

UserTable.propTypes = {
    selectedSort: PropTypes.object,
    users: PropTypes.array.isRequired,
    onSort: PropTypes.func.isRequired,
    onToggleBookMark: PropTypes.func.isRequired
};
export default UserTable;
