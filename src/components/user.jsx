import React from 'react';
import PropTypes from 'prop-types';
import Qualities from './qualities';
import Bookmark from './bookmark';

function User({ users, onDelete, onBookmark }) {
  return (
    <>
      {users.map((userObject) => (
        <tr key={userObject._id}>
          <td>{userObject.name}</td>
          <Qualities userObject={userObject} />
          <td>{userObject.profession.name}</td>
          <td>{userObject.completedMeetings}</td>
          <td>{userObject.rate}</td>
          <td><Bookmark user={userObject} onBookmark={onBookmark} /></td>
          <td>
            <button
              className="btn bg-danger"
              onClick={() => onDelete(userObject._id)}
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </>
  );
}
User.propTypes = {
  users: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onBookmark: PropTypes.func.isRequired,
};
export default User;
