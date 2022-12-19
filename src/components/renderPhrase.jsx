import React from "react";

const RenderPhrase=({users})=> {
    const renderBadgeClass = () => {
        return users.length > 0 ? "primary" : "danger"
    }
    const phrase = () => {
        return users.length < 1 ? "No one" : (users.length > 1 ? `${users.length}` : "Only one person")
    }
    return <span className={`badge bg-${renderBadgeClass()} m-2`}>{`${phrase()} hang out with you tonight`}</span>
}

export default RenderPhrase