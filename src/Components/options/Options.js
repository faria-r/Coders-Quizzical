import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Options = ({ option, quiz }) => {
  const { correctAnswer } = quiz;

const handleClick = (option) =>{
    console.log(option);
    if(option === correctAnswer){
        toast('True',
         {
        autoClose: 1000,
        closeOnClick: false,
    })
    }
    else{
        toast('False',{
            autoClose: 1000,
            closeOnClick: false,
        })
    }

}
  return (
    <div className="border rounded-xl p-4">
      <input
        type="radio"
        name="ans"
        value={option} onClick={()=>handleClick(option)}
      />
      <label className="ml-2 text-orange-500">{option}</label>
    </div>
  );
};

export default Options;
