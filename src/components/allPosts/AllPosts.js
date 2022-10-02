import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../post/Post';
import './allpost.css'

const AllPosts = () => {
    const posts = useLoaderData();
    return (
        <div>
            <h1>All Post Shown Here</h1>
            <div className='all-post'>
                {
                    posts.map(post => <Post key={post.id} post={post}/>)
                }
            </div>
        </div>
    );
};

export default AllPosts;