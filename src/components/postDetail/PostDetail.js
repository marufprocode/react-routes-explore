import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetail = () => {
    const postDetail = useLoaderData();
    const navigate = useNavigate();
    const handleGetAuthor = () => {
        navigate(`/friends/${postDetail.userId}`)
    }
    return (
        <div>
            <h2>Details About post: {postDetail.id}</h2>
            <h3>{postDetail.title}</h3>
            <p>{postDetail.body}</p>
            <button onClick={handleGetAuthor}>Get the Author</button>
        </div>
    );
};

export default PostDetail;