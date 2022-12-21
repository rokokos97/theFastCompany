import React from "react";
import PropTypes from "prop-types";

function Bookmark ({ user, onBookmark }) {
    return (
        <button type="button" className="btn btn-outline-danger" onClick={() => onBookmark(user._id)}>
            <i className={`bi bi-bookmark-heart${user.bookmark ? "-fill" : ""}`} />
        </button>
    );
}
Bookmark.propTypes = {
    user: PropTypes.object.isRequired,
    onBookmark: PropTypes.func.isRequired
};
export default Bookmark;
