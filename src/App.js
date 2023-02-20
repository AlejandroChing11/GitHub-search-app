import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import UserDetails from './components/UserDetails';

function App() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState([]);

  const handleSearch = () => {
    axios.get(`https://api.github.com/search/users?q=${username}`)
      .then(response => {
        setUserData(response.data.items);
      })
      .catch(error => {
        console.log(error);
      });
  }

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handleUserClick = (username) => {
    window.location.href = `/user/${username}`;
  }

  return (
    <Router>
      <div>
        <h1>Github User Search</h1>
        <input type="text" value={username} onChange={handleUsernameChange} />
        <button onClick={handleSearch}>Search</button>
        {userData.length > 0 && (
          <ul>
            {userData.map(user => (
              <li key={user.id} onClick={() => handleUserClick(user.login)}>
                <h2>{user.login}</h2>
                <img src={user.avatar_url} alt="avatar" />
              </li>
            ))}
          </ul>
        )}
      </div>
      <Routes>
        <Route exact path="/" component={App} />
        <Route path="/user/:username" component={UserDetails} />
      </Routes>
    </Router>
  );
}

export default App;
