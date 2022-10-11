import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
const Quiz = ({ quiz }) => {
  const { id, name, logo, total } = quiz;
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/topic/${id}`);
  };

  // animation on scroll
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
      className=" m-4 shadow-xl rounded-lg p-4 bg-orange-200"
    >
      <div className="flex justify-around items-center">
        <img className="rounded-full p-2 w-48 h-1/3" src={logo} alt="" />
        <div className="text-xl font-bold ">
          <h1 className="text-amber-700 text-5xl ">{name}</h1>
          <h3 className="mt-4 text-orange-500">Total Quiz:{total}</h3>
          <button
            onClick={handleNavigate}
            className="button bg-amber-700 text-orange-200 mt-8 py-2 px-4 rounded-lg"
          >
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
