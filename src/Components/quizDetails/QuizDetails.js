import { faEye, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Options from '../options/Options';
import {  toast, ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const QuizDetails = ({quiz}) => {
    const {question,options,correctAnswer} = quiz;

    // toast for showing correct answer
    const notify = (ans) => {
        toast(ans,{
            autoClose: 2000,
            closeOnClick: false,
        })
        return;
    };

    return (
            <div className='mt-8 w-5/6 mx-auto'>
                       {/* question for quiz  */}

            <h2 className='text-indigo-700 font-bold text-xl mb-8 text-center'>Question:{question}</h2>
            <div>
            <button onClick={() => notify(correctAnswer)} className='button p-2'>
            <FontAwesomeIcon className='text-indigo-500 -mr-96 ' icon={faEye}></FontAwesomeIcon>
            </button>
            <ToastContainer/>
                        {/* options for quizes  */}

           <div className='grid grid-cols-2 border rounded-xl w-1/2 gap-8 p-6 mx-auto shadow-2xl'>
          {
               options.map(option => <Options
               option={option}
               quiz={quiz}
               ></Options>)
           }
            </div>
            </div>
        </div>
    );
};

export default QuizDetails;