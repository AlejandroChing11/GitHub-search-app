import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({ user, login }) => {
  return (
    <div className="user-card">
      {user ? (
        <Link to={`/user/${login}`}>
          <p>@{user.login}</p>
          <img className="user-avatar" src={user.avatar_url} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.bio}</p>
        </Link>
      ) : (
        <p>No user found.</p>
      )}
    </div>
  );
};

export default UserCard;
