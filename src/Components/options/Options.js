import React from 'react';

const Options = ({option}) => {
    return (
        <div className='border rounded-xl p-8'>
            <input type="radio" name="ans" id="" />
            <span className='ml-2 text-orange-500'>{option}</span>
        </div>
    );
};

export default Options;