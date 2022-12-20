import React from "react";

const Bookmark = ({user,onBookmark}) => {
    return <button className={"btn btn-outline-danger"} onClick={()=>onBookmark(user._id)}>
        <i className={"bi bi-bookmark-heart"+(user.bookmark?"-fill":"")}></i>
    </button>
}
export default Bookmark