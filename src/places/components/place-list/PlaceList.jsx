import React from 'react';
import PropTypes from 'prop-types';
import { UserCard } from '../../../shared/components';
import PlaceItem from '../place-item/PlaceItem';
import './PlaceList.css';

const PlaceList = props => {
  const { items } = props;
  if (items.length === 0) {
    return (
      <div className="place-list center">
        <UserCard>
          <h2>No places found. Maybe create one?</h2>
          <button type="button">Share Place</button>
        </UserCard>
      </div>
    );
  }

  return (
    <ul className="place-list">
      {items.map(place => (
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.imageUrl}
          title={place.title}
          description={place.description}
          address={place.address}
          creatorId={place.creator}
          coordinates={place.location}
        />
      ))}
    </ul>
  );
};

PlaceList.propTypes = {
  items: PropTypes.array
};

PlaceList.defaultProps = {
  items: []
};

export default PlaceList;
