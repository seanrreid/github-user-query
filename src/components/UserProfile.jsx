import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UserProfile = (props) => {
    const { users } = props;
    const { userName } = useParams();

    const user = users.find((user) => {
        return user.login === userName ? user : null;
    });

    // Get the repos for the username in the params:
    //   const [repoList, setRepos] = useState([]);

    //   useEffect(() => {
    //     (async function () {
    //       const response = await fetch(
    //         `https://api.github.com/users/${userName}/repos`
    //       );
    //       const repoList = await response.json();
    //       setRepos(repoList);
    //     })();
    //   }, [setRepos, userName]);

    return (
        <>
            {!!user ? (
                <>
                    <h2>{user.name}</h2>
                    <h3>{user.company}</h3>
                    <p>{user.bio}</p>
                    <p>Followers: {user.followers}</p>
                    {/* <ul>
                      {!!repoList ??
                          repoList.map((repo) => (
                              <li key={repo.id}>{repo.name}</li>
                          ))}
                    </ul> */}
                </>
            ) : (
                <p>Users array is empty</p>
            )}
        </>
    );
};

export default UserProfile;
