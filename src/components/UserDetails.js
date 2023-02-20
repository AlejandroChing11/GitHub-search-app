import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function UserDetails() {
  const { username } = useParams();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    axios.get(`https://api.github.com/users/${username}`)
      .then(response => {
        setUserData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [username]);

  return (
    <div>
      <h2>{userData.name}</h2>
      <img src={userData.avatar_url} alt="avatar" />
      <p>{userData.bio}</p>
      <p>{userData.location}</p>
      <p>{userData.email}</p>
      <p>{userData.company}</p>
    </div>
  );
}

export default UserDetails;
