import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Options = ({option,quiz}) => {
    const {correctAnswer} = quiz;
const [answer,setAnswer] = useState();

    
    const notifyTrue = () => {
        toast("True");
        return;
    };
    const notifyFalse = () => {
        toast("False");
        return;
    };

    // if(answer !== correctAnswer){
    //     notify('false'); 
    // }
    // else{
    //     notify('true'); 
    // }

    return (
        <div className='border rounded-xl p-4'>
            <input type="radio" name="ans" value={option} onClick={e=> setAnswer(e.target.value)} />
            <label  className='ml-2 text-orange-500'>{option}</label>

            {
                answer === correctAnswer ?  notifyTrue() : undefined
            }
            {/* {
                answer !== correctAnswer ?  notifyFalse() : undefined
            } */}
        </div>
        
         
    
    );
};

export default Options;