import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      {user ? (
        <>
          <img className="user-avatar" src={user.avatar_url} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.bio}</p>
        </>
      ) : (
        <p>No user found.</p>
      )}
    </div>
  );
};

export default UserCard;
