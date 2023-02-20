import React from 'react';

const UserSuggestions = ({ suggestions, handleUserClick }) => {
  return (
    <div>
      <h2>Suggested Users:</h2>
      <ul>
        {suggestions.map((user) => (
          <li key={user.id} onClick={() => handleUserClick(user.login)}>
            {user.login}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserSuggestions;
