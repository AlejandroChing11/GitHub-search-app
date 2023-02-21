import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";




function UserDetailsExtended() {
    const { login } = useParams();
    const [userData, setUserData] = useState({});
    const [userRepos, setUserRepos] = useState([]);
    const [userOrgs, setUserOrgs] = useState([]);

    useEffect(() => {
        axios.get(`https://api.github.com/users/${login}`)
            .then(response => {
                setUserData(response.data);
            })
            .catch(error => {
                console.log(error);
            });

        axios.get(`https://api.github.com/users/${login}/repos`)
            .then(response => {
                setUserRepos(response.data);
            })
            .catch(error => {
                console.log(error);
            });

        axios.get(`https://api.github.com/users/${login}/orgs`)
            .then(response => {
                setUserOrgs(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [login]);

    return (
        <div>
            <h2>{userData.name}</h2>
            <img src={userData.avatar_url} alt="avatar" />
            <p>{userData.bio}</p>
            <p>{userData.location}</p>
            <p>{userData.email}</p>
            <p>{userData.company}</p>
            <h3>Repositories:</h3>
            <ul>
                {userRepos.map(repo => (
                    <li key={repo.id}>
                        <a href={repo.html_url}>{repo.name}</a>
                    </li>
                ))}
            </ul>
            <h3>Organizations:</h3>
            <ul>
                {userOrgs.map(org => (
                    <li key={org.id}>
                        <a href={org.html_url}>{org.login}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UserDetailsExtended;