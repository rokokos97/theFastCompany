import React from "react";

const Qualities= ({userObject}) => {
    return <td>{userObject.qualities.map((userQuality)=><span className={`badge m-1 bg-${userQuality.color}`} key={userQuality._id}>{userQuality.name}</span>)}</td>
}
export default Qualities