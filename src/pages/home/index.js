import React, { useState } from 'react';
import axios from "axios";
import UserCard from '../../components/UserCard';


function Home() {
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



    return (
        <div>
            <h1>Github User Search</h1>
            <input type="text" value={username} onChange={handleUsernameChange} />
            <button onClick={handleSearch}>Search</button>
            {userData.length > 0 && (
                <ul>
                    {userData.map(user => (
                        <li key={user.id}>
                            <UserCard user={user} login={user.login} />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Home;