import React from "react";
import PropTypes from "prop-types";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import Bookmark from "./bookmark";

const UserTable = ({ users, onSort, selectedSort, onToggleBookMark, onDelete, ...rest }) => {
    const columns = {
        name: { path: "name", name: "Name" },
        qualities: { name: "Qualities" },
        profession: { path: "profession.name", name: "Profession" },
        completedMeetings: { path: "completedMeetings", name: "Meets" },
        rate: { path: "rate", name: "Rate" },
        bookmark: {
            path: "bookmark",
            name: "Bookmark",
            component: (user) => (
                <Bookmark
                    status={ user.bookmark }
                    onClick={() => onToggleBookMark(user._id)}
                />
            )
        },
        delete: {
            component: (user) => (<button
                className="btn btn-danger"
                onClick={() => onDelete(user._id)}
            >
                Delete
            </button>)
        }
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
    onToggleBookMark: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};
export default UserTable;
