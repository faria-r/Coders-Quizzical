import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quizes = () => {
    const quiz= useLoaderData();
    console.log(quiz);
    return (
        <div>
           <h3>all quiz topic</h3> 
        </div>
    );
};

export default Quizes;