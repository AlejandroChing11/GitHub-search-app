import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import './../styles/UserDetailsView.css';


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
        <div className="user-details-extended">
            <h2>{userData.name}</h2>
            <img src={userData.avatar_url} alt="avatar" />
            <p>{userData.bio}</p>
            <p>{userData.location}</p>
            <p>{userData.email}</p>
            <p>{userData.company}</p>
            <div className="user-details-extended__repos">
                <h3>Repositories:</h3>
                <ul>
                    {userRepos.map(repo => (
                        <li key={repo.id}>
                            <div className="repo-item">
                                <a href={repo.html_url} className="repo-item__name">{repo.name}</a>
                                <div className="repo-item__info">
                                    <p>{repo.description}</p>
                                    <p>Language: {repo.language}</p>
                                    <p>Stars: {repo.stargazers_count}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="user-details-extended__orgs">
                <h3>Organizations:</h3>
                <ul>
                    {userOrgs.map(org => (
                        <li key={org.id}>
                            <a href={org.html_url}>{org.login}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default UserDetailsExtended;
