import React from 'react';
import UserCard from './UserCard';

const UserCardList = props => {
  const { users } = props;

  return (
    <div>
      {users.map((user, index) => (
        <UserCard user={user} key={index} />
      ))}
    </div>
  );
};

export default UserCardList;
