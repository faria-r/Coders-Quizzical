import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Options = ({option,quiz}) => {
    const {correctAnswer} = quiz;

  
    

    const notify = () => toast("Wow so easy!");
    return (
        <div className='border rounded-xl p-8'>
            <input type="radio" name="ans" id={correctAnswer} />
            <span className='ml-2 text-orange-500'>{option}</span>
            {

            }
        </div>
    );
};

export default Options;