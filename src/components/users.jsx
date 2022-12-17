import React,{useState} from "react";
import api from "../api"

const Users=()=>{
    const [users,setUsers]=useState(api.users.fetchAll())
    console.log(users);
    const renderPhrase=()=>{
        return <span>Тут будет фраза</span>
    }
    return <>
        {/*{renderPhrase()}*/}
        <table className="table">
            <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Qualities</th>
                <th scope="col">Profession</th>
                <th scope="col">Meets</th>
                <th scope="col">Rate</th>
                <th scope="col"></th>
            </tr>
            </thead>
            <tbody>
                {users.map((userObject)=>
                    <tr key={userObject._id}>
                        <td>{userObject.name}</td>
                        <td>{userObject.qualities.map((userQuality)=><span className={`badge m-1 bg-${userQuality.color}`} key={userQuality._id}>{userQuality.name}</span>)}</td>
                        <td>{userObject.profession.name}</td>
                        <td>{userObject.completedMeetings}</td>
                        <td>{userObject.rate}</td>
                        <td><button className="btn bg-danger">Delete</button></td>
                    </tr>
                )}
            </tbody>
        </table>
    </>
}

export default Users