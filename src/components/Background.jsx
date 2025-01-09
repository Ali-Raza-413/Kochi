/*
  ---------------------------------------
  Project: Kochi Website
  Date: Jan 7, 2025
  Developer: Ali raza
  ---------------------------------------
  Description:Component for Background image.
*/
import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi"; // Importing React Icons
import { useNavigate } from "react-router-dom";

const Background = ({ Text, InputText, BtText, ImagePath, pathname }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedSport, setSelectedSport] = useState("");
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSelection = (sport) => {
    setSelectedSport(sport);
    setIsDropdownOpen(false);
  };

  return (
    <div className="">
      <div
        className="h-screen bg-cover relative bg-center flex items-center flex-col justify-center text-white"
        style={{ backgroundImage: `url(${ImagePath})` }}
      >
        <div className=" absolute top-10 bg-white text-black p-2 md:px-10 md:py-6 rounded-xl">
          <h1 className="md:text-3xl font-bold ">{Text}</h1>
        </div>
        <div className="absolute md:bottom-28  w-full max-w-lg bg-white text-center p-3 md:p-8 rounded-lg shadow-lg">
          <div className="flex gap-4 items-center mb-8 flex-col md:flex-row ">
            <div className="relative w-1/2">
              <div
                className="border border-gray-300 rounded py-4 px-2 flex items-center justify-between text-black bg-white"
                onClick={toggleDropdown}
              >
                <span className="text-sm text-gray-400">
                  {selectedSport || "Sports"}
                </span>
                {isDropdownOpen ? (
                  <FiChevronUp className="w-4 h-4 text-gray-400" />
                ) : (
                  <FiChevronDown className="w-4 h-4 text-gray-400" />
                )}
              </div>
              {isDropdownOpen && (
                <ul className="absolute top-full left-0 w-full bg-white text-black border border-gray-300 rounded shadow-lg">
                  {["Football", "Basketball", "Tennis", "Baseball"].map(
                    (sport) => (
                      <li
                        key={sport}
                        className="hover:bg-gray-200 cursor-pointer"
                        onClick={() => handleSelection(sport)}
                      >
                        {sport}
                      </li>
                    )
                  )}
                </ul>
              )}
            </div>

            <div className="w-1/2">
              <input
                type="text"
                placeholder={InputText}
                className="py-4 px-2 border border-gray-300 rounded w-full text-black bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
          <div className="w-full">
            <button
              className="bg-[#66b932] text-white text-xl md:text-2xl px-6 py-2 rounded-full w-full hover:bg-green-600"
              onClick={() => navigate({ pathname })}
            >
              {BtText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background;
