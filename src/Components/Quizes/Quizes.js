import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizDetails from "../quizDetails/QuizDetails";

const Quizes = () => {
  const quiz = useLoaderData();
  const { name } = quiz.data;
  const questions = quiz.data.questions;
  return (
    <div>
      <h3 className="text-orange-500 text-4xl font-bold mt-4 ">{name}</h3>
      {questions.map((quiz) => (
        <QuizDetails key={quiz.id} quiz={quiz}></QuizDetails>
      ))}
    </div>
  );
};

export default Quizes;
