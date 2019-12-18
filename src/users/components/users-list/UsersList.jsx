import React from 'react';
import PropTypes, { object } from 'prop-types';
import { UserItem } from '../user-item';
import './UsersList.css';

const UsersList = props => {
  const { items } = props;

  if (!items) {
    return <h2>No users found</h2>;
  }

  return (
    <ul className="users-list">
      {items.map((user, index) => (
        <UserItem
          key={`${user.id}${index.toString()}`}
          id={user.id}
          image={user.image}
          name={user.name}
          placeCount={user.places}
        />
      ))}
    </ul>
  );
};

UsersList.propTypes = {
  items: PropTypes.arrayOf(object)
};

UsersList.defaultProps = {
  items: []
};

export default UsersList;
