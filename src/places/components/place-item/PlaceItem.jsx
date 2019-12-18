import React from 'react';
import PropTypes from 'prop-types';
import { UserCard, Button } from '../../../shared/components';
import './PlaceItem.css';

const PlaceItem = props => {
  const { id, image, title, address, description } = props;

  return (
    <li className="place-item">
      <UserCard className="place-item__content">
        <div className="place-item__image">
          <img src={image} alt={title} />
        </div>
        <div className="place-item__info">
          <h2>{title}</h2>
          <h3>{address}</h3>
          <p>{description}</p>
        </div>
        <div className="place-item__actions">
          <Button inverse>VIEW ON MAP</Button>
          <Button to={`/places/${id}`}>EDIT</Button>
          <Button danger>DELETE</Button>
        </div>
      </UserCard>
    </li>
  );
};

PlaceItem.propTypes = {
  id: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  address: PropTypes.string,
  description: PropTypes.string
};

PlaceItem.defaultProps = {
  id: '',
  image: '',
  title: '',
  address: '',
  description: ''
};

export default PlaceItem;
