import React from "react";
import "./userCards.css";
import { useState } from "react";
import { useEffect } from "react";
import UserCard from "../UserCard/UserCard";

const UserCards = () => {
  const [usersList, setUsersList] = useState([]);
  const [isUsersListLoading, setIsUsersListLoading] = useState(false);

  useEffect(() => {
    const fetchUsersList = async () => {
      try {
        setIsUsersListLoading(true);
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        if (data && data.length > 0) setUsersList(data);
      } catch (e) {
        console.error(e);
      } finally {
        setIsUsersListLoading(false);
      }
    };

    fetchUsersList();
  }, []);
  return (
    <div className='user-cards'>
      {usersList.length <= 0 && isUsersListLoading && <h3>Loading...</h3>}
      {usersList.length > 0 &&
        !isUsersListLoading &&
        usersList.map((user) => (
          <UserCard name={user.name} username={user.username} email={user.email} key={user.id} />
        ))}
      {usersList.length <= 0 && !isUsersListLoading && <h3>USERS ARRAY IS EMPTY</h3>}
    </div>
  );
};

export default UserCards;
