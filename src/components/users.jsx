import React,{useState} from "react";
import api from "../api"

const Users=()=>{
    const [users,setUsers]=useState(api.users.fetchAll());
    console.log(users);
    return <>

    </>
}

export default Users