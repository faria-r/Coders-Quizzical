import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Options = ({ option, quiz }) => {
  const { correctAnswer } = quiz;
  const [answer, setAnswer] = useState();
  if (answer === correctAnswer) {
    toast("true");
  }

  return (
    <div className="border rounded-xl p-4">
      <input
        type="radio"
        name="ans"
        value={option}
        onChange={(e) => setAnswer(e.target.value)}
      />
      <label className="ml-2 text-orange-500">{option}</label>
    </div>
  );
};

export default Options;
