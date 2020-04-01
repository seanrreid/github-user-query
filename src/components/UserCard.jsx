import React from 'react';
import { Link } from 'react-router-dom';

const UserCard = props => {
  const { user } = props;
  return (
    <div>
      <Link to={`/user/${user.login}`}>
        <img src={user.avatar_url} alt={user.name} />
      </Link>
    </div>
  );
};

export default UserCard;
