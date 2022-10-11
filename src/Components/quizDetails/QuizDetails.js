import React from 'react';
import Options from '../options/Options';

const QuizDetails = ({quiz}) => {
    console.log(quiz);
    const {question,options} = quiz;
    return (
        <div className='mt-8 w-3/4 mx-auto'>
            <h2 className='text-indigo-700 font-bold text-xl mb-8 text-center'>{question}</h2>
           <div className='grid grid-cols-2 border rounded-xl w-1/2 gap-8 p-6 mx-auto shadow-2xl'>
           {
                options.map(option => <Options
               option={option}
                ></Options>)
            }
           </div>
        </div>
    );
};

export default QuizDetails;