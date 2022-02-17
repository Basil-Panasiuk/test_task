/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';

// eslint-disable-next-line react/prop-types
const Profile = ({ name, email }) => (
  <div>
    <h1>{name}</h1>
    <p>{email}</p>
  </div>
);

export default Profile;
