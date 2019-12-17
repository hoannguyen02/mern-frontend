import React from 'react';
import { UsersList } from '../components';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Hoan',
      image:
        'https://images.pexels.com/photos/3353994/pexels-photo-3353994.jpeg?cs=srgb&dl=hands-above-water-3353994.jpg&fm=jpg',
      places: 2
    },
    {
      id: 'u1',
      name: 'Thanh',
      image:
        'https://images.pexels.com/photos/3353994/pexels-photo-3353994.jpeg?cs=srgb&dl=hands-above-water-3353994.jpg&fm=jpg',
      places: 2
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
