import React from 'react';
import userResources from './useResources';

const UserList = () => {
    
    const userList = userResources('users');

    return (
        <ul>
            {userList.map((user) => {
            return <li key={user.id}>{user.name}</li>
        })}
        </ul>
    )
}

export default UserList;