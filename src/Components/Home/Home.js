import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import SubHeader from '../Sub-Header/SubHeader';

const Home = () => {
    const quizTopics = useLoaderData();
    const allQuizes = quizTopics.data;
    return (
        <div>
            <SubHeader></SubHeader>
            <div className='grid grid-cols-2 mt-8 mx-auto bg-orange-400 rounded-lg mx-8 p-16'>
                {
                    allQuizes.map(quiz => 
                    <Quiz
                    key={quiz.id}
                    quiz={quiz}
                    >
                    </Quiz>)
                }
            </div>
        </div>
    );
};

export default Home;