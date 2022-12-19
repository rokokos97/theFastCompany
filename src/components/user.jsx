import React from "react";
import Qualities from "./qualities";

const User = ({users,onDelete}) => {
    return <>
        {users.map((userObject)=>
            <tr key={userObject._id}>
                <td>{userObject.name}</td>
                <Qualities userObject = {userObject}/>
                <td>{userObject.profession.name}</td>
                <td>{userObject.completedMeetings}</td>
                <td>{userObject.rate}</td>
                <td><button className="btn bg-danger" onClick={()=>onDelete(userObject._id)}>Delete</button></td>
            </tr>
        )}
    </>
}

export default User
