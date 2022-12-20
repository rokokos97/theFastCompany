import React from "react";
import _ from "lodash";

const Pagination = ({ itemCont, pageSize, onPageChange, currentPage }) => {
  const pageCount = Math.ceil(itemCont / pageSize);
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);
  return (
    <>
      <nav>
        <ul className="pagination justify-content-center">
          {pages.map((page) => (
            <li
              key={"page_" + page}
              className={"page-item" + (page === currentPage ? " active" : "")}
            >
              <button className="page-link" onClick={() => onPageChange(page)}>
                {page}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
