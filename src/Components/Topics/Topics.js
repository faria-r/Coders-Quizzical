import React from "react";
import Quiz from "../Quiz/Quiz";
import { useLoaderData } from "react-router-dom";

const Topics = () => {
  const quizTopics = useLoaderData();
  const allQuizes = quizTopics.data;

  return <div>
    <div className="grid lg:grid-cols-2 sm:grid-cols-1 mt-8 mx-auto bg-orange-400 rounded-lg lg:p-16">
        {allQuizes.map((quiz) => (
          <Quiz key={quiz.id} quiz={quiz}></Quiz>
        ))}
      </div>
  </div>;
};

export default Topics;
