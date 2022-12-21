import React from "react";
import PropTypes from "prop-types";

function RenderPhrase({ users }) {
    const renderBadgeClass = () => (users.length > 0 ? "primary" : "danger");
    const phrase = () => {
        switch (users.length) {
            case 0:
                return "No one";
            case 1:
                return "Only one person";
            default:
                return `${users.length}`;
        }
    };
    return (
        <span
            className={`badge bg-${renderBadgeClass()} m-2`}
        >{`${phrase()} hang out with you tonight`}</span>
    );
}
RenderPhrase.propTypes = {
    users: PropTypes.array.isRequired
};
export default RenderPhrase;
