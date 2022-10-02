import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css'

const Post = ({post}) => {
    const navigate = useNavigate();
    const handleNavigte = () => {
        navigate(`/allpost/${post.id}`)
    }
    return (
        <div className='posts'>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <Link to={`/allpost/${post.id}`}>{post.id}</Link>
            <Link to={`/allpost/${post.id}`}><button>Show Details</button></Link>
            <button onClick={handleNavigte}>Show Details 2</button>
        </div>
    );
};

export default Post;