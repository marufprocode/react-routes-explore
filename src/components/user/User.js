import React from 'react';
import { Link } from 'react-router-dom';
import './user.css'

const User = ({user}) => {
    const {id, name, phone, username} = user;
    return (
        <div className='user'>
            <h3>Name: {name}</h3>
            <p>Phone: {phone}</p>
            <p>User: <Link to ={`/friends/${id}`}>{username}</Link></p>
        </div>
    );
};

export default User;