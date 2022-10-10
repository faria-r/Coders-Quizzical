import React from 'react';

const Quiz = ({quiz}) => {
    const {id,name,logo} = quiz;
    return (
        <div className='m-4 shadow-xl rounded-lg p-4 bg-orange-200'>
            <div>
                <img className='rounded-full p-2 w-48 h-1/3' src={logo} alt="" />
            </div>
            <div>
                <h1>{name}</h1>
            </div>
        </div>
    );
};

export default Quiz;