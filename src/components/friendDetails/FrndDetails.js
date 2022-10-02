import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FrndDetails = () => {
    const userDetail = useLoaderData();
    return (
        <div>
            <h3>Hello Friend : {userDetail.name}</h3>
            <p>Phone : {userDetail.phone}</p>
            <p>Website : {userDetail.website}</p>
        </div>
    );
};

export default FrndDetails;