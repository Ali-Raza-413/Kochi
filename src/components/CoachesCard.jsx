import React from "react";
import { FaHome, FaStar, FaGamepad } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CoachesCard = ({
  p1,
  p2,
  p3,
  aboutText,
  title,
  coachname,
  coachtype,
}) => {
  const navigate = useNavigate();

  return (
    <div className="px-10 py-10 ">
      <div className=" flex flex-col justify-center lg:flex-row gap-20 items-center  border border-gray-300 bg-white shadow-lg rounded-lg p-8">
        <div className="flex flex-col items-center lg:border-r-2 lg:p-5">
          <img
            src="/n1.png"
            alt="Coach"
            className="rounded-full w-24 h-24 object-cover mb-2"
          />
          <h2
            className="text-2xl font-bold cursor-pointer"
            onClick={() => navigate("/coachprofile")}
          >
            {coachname}
          </h2>
        </div>
        <div className="lg:border-r-2 lg:p-5">
          <h1
            className="mb-5 bg-[#d6e6d4] text-[#006400] p-2 rounded-lg font-semibold cursor-pointer"
            onClick={() => navigate("/coachprofile")}
          >
            {coachtype}
          </h1>
          <div className="flex flex-col  space-y-6  ">
            <div className="flex items-center gap-2">
              <FaHome className="text-md text-[#006400]" />
              <h2 className="text-md text-black">{p1}</h2>
            </div>
            <div className="flex items-center gap-2">
              <FaGamepad className="text-md text-[#006400]" />
              <h2 className="text-md text-black">{p2}</h2>
            </div>
            <div className="flex items-center gap-2">
              <FaStar className="text-md text-[#006400]" />
              <h2 className="text-md text-black">{p3}</h2>
            </div>
          </div>
        </div>
        <div className="lg:border-r-2 lg:p-5">
          <h3 className="text-xl font-semibold mb-2 ">About the Coach</h3>
          <p className="max-w-sm">{aboutText}</p>
        </div>

        <div className="flex flex-col items-center lg:items-start">
          <h4 className="text-xl font-bold mb-2">{title}</h4>
          <div className="flex flex-col  gap-2">
            <button className="px-4 py-2 bg-[#66b932] text-white rounded-md">
              Book Coach
            </button>
            <button className="px-4 py-2 border border-[#66b932]  rounded-md">
              Message Coach
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoachesCard;
