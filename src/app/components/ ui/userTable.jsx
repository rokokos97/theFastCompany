import React from "react";
import PropTypes from "prop-types";
import Bookmark from "../common/bookmark";
import QualitiesList from "./qualities/qualitiesList";
import Table from "../common/table/table";
import TableHeader from "../common/table/tableHeader";
import TableBody from "../common/table/tableBody";
import { Link } from "react-router-dom";

const UserTable = ({ users, onSort, selectedSort, onToggleBookMark, onDelete }) => {
    const columns = {
        name: {
            path: "name",
            name: "Name",
            component: (user) => (
                <Link to={`/users/${user._id}`}>{user.name}</Link>
            )
        },
        qualities: { name: "Qualities", component: (user) => (<QualitiesList qualities={user.qualities}/>) },
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
        <Table selectedSort={selectedSort} onSort={onSort} columns={columns} data={users}>
            <TableHeader selectedSort={selectedSort} onSort={onSort} columns={columns}/>
            <TableBody data={users} columns={columns}/>
        </Table>);
};

UserTable.propTypes = {
    selectedSort: PropTypes.object,
    users: PropTypes.array.isRequired,
    onSort: PropTypes.func.isRequired,
    onToggleBookMark: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired

};
export default UserTable;
