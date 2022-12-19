import React from "react";
import Qualities from "./qualities";
import Bookmark from "./bookmark";

const User = ({users,onDelete,onBookmark}) => {
    return <>
        {users.map((userObject)=>
            <tr key={userObject._id}>
                <td>{userObject.name}</td>
                <Qualities userObject = {userObject}/>
                <td>{userObject.profession.name}</td>
                <td>{userObject.completedMeetings}</td>
                <td>{userObject.rate}</td>
                <td><Bookmark bookmark={userObject.bookmark} onBookmark={onBookmark}/></td>
                <td><button className="btn bg-danger" onClick={()=>onDelete(userObject._id)}>Delete</button></td>
            </tr>
        )}
    </>
}

export default User
