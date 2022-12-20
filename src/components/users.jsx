import React,{useState} from "react";
import User from "./user";
import Pagination from "./pagination";

const Users=({users, onDelete, onBookmark})=>{
    const count = users.length
    const pageSize = 4
    const [currentPage, setCurrentPage] = useState(1)
    const handlePageChange=(page)=>{
        setCurrentPage(page)
    }
    const paginate=(items, pageNumber, pageSize)=>{
        const startIndex = (pageNumber-1)*pageSize
        return [...items].splice(startIndex,pageSize)
    }
    const usersCrop = paginate(users,currentPage,pageSize)
    return <>
        {count>0 && <table className="table">
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
                <User users={usersCrop} onDelete={onDelete} onBookmark={onBookmark}/>
            </tbody>
        </table>}
        <Pagination countItem={count} pageSize={pageSize} onPageChange={handlePageChange} currentPage={currentPage}/>
    </>
}
export default Users