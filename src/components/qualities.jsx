import React from 'react';
import PropTypes from 'prop-types';

function Qualities({ userObject }) {
  return (
    <td>
      {
      userObject.qualities.map((userQuality) => (
        <span
          className={`badge m-1 bg-${userQuality.color}`}
          key={userQuality._id}
        >
          {userQuality.name}
        </span>
      ))
}
    </td>
  );
}
Qualities.propTypes = {
  userObject: PropTypes.object.isRequired,
};
export default Qualities;
