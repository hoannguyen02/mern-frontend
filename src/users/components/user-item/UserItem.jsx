import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Avatar, UserCard } from '../../../shared/components';

import './UserItem.css';

const UserItem = props => {
  const { id, image, name, placeCount } = props;

  return (
    <li className="user-item">
      <UserCard className="user-item__content">
        <Link to={`/${id}/places`}>
          <div className="user-item__image">
            <Avatar image={image} alt={name} />
          </div>
          <div className="user-item__info">
            <h2>{name}</h2>
            <h3>
              {placeCount} {placeCount === 1 ? 'Place' : 'Places'}
            </h3>
          </div>
        </Link>
      </UserCard>
    </li>
  );
};

UserItem.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeCount: PropTypes.number.isRequired
};

export default UserItem;
