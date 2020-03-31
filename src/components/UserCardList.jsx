import React from 'react';
import UserCard from './UserCard';

const UserCardList = props => {
  const { users } = props;
  return (
    <div>
      {users.map(user => {
        <UserCard {...user} />;
      })}
    </div>
  );
};

export default UserCardList;
