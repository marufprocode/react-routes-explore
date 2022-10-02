import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from '../user/User';
import './friends.css'

const Friends = () => {
    const friends = useLoaderData();
    return (
        <div>
            <h1>This Is friends Component: {friends.length}</h1>
            <div className='friends-user'>
                {
                    friends.map(user => <User key={user.id} user={user}/>)
                }
            </div>
        </div>
    );
};

export default Friends;