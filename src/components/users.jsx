import React,{useState} from "react";
import api from "../api"
import RenderPhrase from "./renderPhrase";
import User from "./user";

const Users=({users, onDelete, onBookmark})=>{
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
                    <User users={users} onDelete={onDelete} onBookmark={onBookmark}/>
                </tbody>
            </table>
        }
    }
    return <>
        {createTable()}
    </>
}
export default Users