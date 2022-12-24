import React from "react";
import Qualitie from "./qualitie";
import PropTypes from "prop-types";
import Bookmark from "./bookmark";

const User = ({
    _id,
    name,
    qualities,
    profession,
    completedMeetings,
    rate,
    onDelete,
    bookmark,
    onToggleBookMark
}) => {
    return (
        <tr>
            <td className={"w-25"}>{name}</td>
            <td className={"w-25"}>
                {/* eslint-disable-next-line react/prop-types */}
                {qualities.map((qual) => (
                    <Qualitie key={qual._id} {...qual} />
                ))}
            </td>
            <td>{profession.name}</td>
            <td>{completedMeetings}</td>
            <td>{rate}</td>
            <td>
                <Bookmark
                    status={bookmark}
                    onClick={() => onToggleBookMark(_id)}
                />
            </td>
            <td>
                <button
                    className={"btn btn-danger"}
                    onClick={() => onDelete(_id)}
                >
                    Delete
                </button>
            </td>
        </tr>
    );
};
User.propTypes = {
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    qualities: PropTypes.array,
    profession: PropTypes.object.isRequired,
    completedMeetings: PropTypes.number,
    rate: PropTypes.number.isRequired,
    bookmark: PropTypes.bool,
    onToggleBookMark: PropTypes.func,
    onDelete: PropTypes.func
};
export default User;
