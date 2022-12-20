import React from 'react'
import _ from "lodash"

const Pagination = ({countItem, pageSize , onPageChange, currentPage}) => {
    const pageCount = Math.ceil(countItem/pageSize)
    if(pageCount===1)return null
    const pages = _.range(1,pageCount+1)
    return <nav>
     <ul className="pagination pagination-lg justify-content-center">
         {pages.map((page)=><li key={"page_"+page} className={"page-item"+(page===currentPage?" active":"")}>
             <button className={"page-link"} onClick={()=>onPageChange(page)}>{page}</button>
         </li>)}
     </ul>
 </nav>
}

export default Pagination;