import React from "react";
import PropTypes from "prop-types";

function RenderPhrase({ usersNumber }) {
    const renderBadgeClass = () => (usersNumber > 0 ? "primary" : "danger");
    const phrase = () => {
        switch (usersNumber) {
            case 0:
                return "No one";
            case 1:
                return "Only one person";
            default:
                return `${usersNumber}`;
        }
    };
    return (
        <span
            className={`badge bg-${renderBadgeClass()} m-2`}
        >{`${phrase()} hang out with you tonight`}</span>
    );
}
RenderPhrase.propTypes = {
    usersNumber: PropTypes.number
};
export default RenderPhrase;
