import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const SubHeader = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <div data-aos="fade-up"
        data-aos-duration="3000" className='flex justify-around rounded-xl p-4 shadow-lg bg-orange-200 mx-16 mt-12'>
            <div>
                <img className='w-48 rounded-xl' src="https://th.bing.com/th/id/OIP.Nqcg1KgkjTM1TJxe57oH7wHaFj?pid=ImgDet&rs=1" alt="" />
            </div>
            <div className='w-1/3 mt-8'>
                <h3 className='text-xl font-bold text-amber-700'>Coders Quizical is a quiz websites Where You can participate in quizes according To your Choice in particular Area! Lets Go For It!</h3>
            </div>
        </div>
    );
};

export default SubHeader;