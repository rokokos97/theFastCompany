import React,{useState} from "react";
import api from "../api"
import RenderPhrase from "./renderPhrase";
import User from "./user";

const Users=()=>{
    const [users,setUsers]=useState(api.users.fetchAll())
    console.log(users);

    const handelDelete=(id)=>{
        setUsers(users.filter((filteredUser)=>filteredUser._id!==id))
    }
    const createTable=()=>{
        if(users.length>0){
            return <table className="table">
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
                    <User users={users} onDelete={handelDelete}/>
                </tbody>
            </table>
        }
    }
    return <>
        {<RenderPhrase users={users}/>}
        {createTable()}
    </>
}
export default Users