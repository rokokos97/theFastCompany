import React,{useState} from "react";
import api from "../api"
import RenderPhrase from "./renderPhrase";
import User from "./user";

const Users=()=>{
    const [users,setUsers]=useState(api.users.fetchAll())
    const handelDelete=(id)=>{
        setUsers(users.filter((filteredUser)=>filteredUser._id!==id))
    }
    const handelBookmark=(id)=>{
        const userIndex = users.findIndex(user=>user._id===id)
        const bookmarkUsers=[...users]
        bookmarkUsers[userIndex].bookmark=!bookmarkUsers[userIndex].bookmark
        setUsers(bookmarkUsers)
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
                    <th scope="col">Bookmark</th>
                    <th scope="col"></th>
                </tr>
                </thead>
                <tbody>
                    <User users={users} onDelete={handelDelete} onBookmark={handelBookmark}/>
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