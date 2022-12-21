import React, { useState } from 'react';
import PropTypes from 'prop-types';
import User from './user';
import Pagination from './pagination';
import { paginate } from './utils/paginate';

function Users({ users, onDelete, onBookmark }) {
  const count = users.length;
  const pageSize = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const usersCrop = paginate(users, currentPage, pageSize);
  return (
    <>
      {count > 0 && (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Qualities</th>
            <th scope="col">Profession</th>
            <th scope="col">Meets</th>
            <th scope="col">Rate</th>
            <th scope="col">Bookmark</th>
            <th scope="col" />
          </tr>
        </thead>
        <tbody>
          <User users={usersCrop} onDelete={onDelete} onBookmark={onBookmark} />
        </tbody>
      </table>
      )}
      <Pagination
        countItem={count}
        pageSize={pageSize}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
    </>
  );
}
Users.propTypes = {
  users: PropTypes.array.isRequired,
  onDelete: PropTypes.func,
  onBookmark: PropTypes.func,
};
export default Users;
