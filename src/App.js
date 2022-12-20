import React,{useState} from "react";
import Users from "./components/users";
import api from "./api";
import RenderPhrase from "./components/renderPhrase";



const App = () => {
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
    return <>
        <RenderPhrase users={users}/>
        <Users onDelete={handelDelete} users={users} onBookmark={handelBookmark}/>
    </>


}
export default App