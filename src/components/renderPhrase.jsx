import React from 'react';
import PropTypes from 'prop-types';

function RenderPhrase({ users }) {
  const renderBadgeClass = () => (users.length > 0 ? 'primary' : 'danger');
  const phrase = () => (users.length < 1 ? 'No one' : (users.length > 1 ? `${users.length}` : 'Only one person'));
  return <span className={`badge bg-${renderBadgeClass()} m-2`}>{`${phrase()} hang out with you tonight`}</span>;
}
RenderPhrase.propTypes = {
  users: PropTypes.array.isRequired,
};
export default RenderPhrase;
