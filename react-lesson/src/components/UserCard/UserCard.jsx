import React from "react";
import "./userCard.css";

const UserCard = ({ name, username, email }) => {
  return (
    <div className='user-card'>
      <h3 className='user-card-name'>{name}</h3>
      <p className='user-card-username'>{username}</p>
      <p className='user-card-email'>{email}</p>
    </div>
  );
};

export default UserCard;
