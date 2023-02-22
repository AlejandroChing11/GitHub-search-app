import React, { useState } from 'react';
import axios from "axios";
import UserCard from '../../components/UserCard';
import '../../styles/index.css';
import Spinner from 'react-bootstrap/Spinner';


function Home() {
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleSearch = () => {
        setIsLoading(true);
        axios.get(`https://api.github.com/search/users?q=${username}`)
            .then(response => {
                setUserData(response.data.items);
                setIsLoading(false);
            })
            .catch(error => {
                console.log(error);
                setIsLoading(false);
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
            {isLoading &&
                <div className="spinner-container">
                    <Spinner animation="border" variant="primary" />
                </div>
            }
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