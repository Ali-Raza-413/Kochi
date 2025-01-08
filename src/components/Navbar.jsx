/*
  ---------------------------------------
  Project: Kochi Website
  Date: Jan 6, 2025
  Developer: Ali raza
  ---------------------------------------
  Description:Navbar Created successfully.
*/
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LoginModal from "./Modals/LoginModal";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const navigate  = useNavigate();

  const paths = {
    "/findacoach": "Find a Coach",
    "/applytocoach": "Apply a Coach",
    "/ourdifferences": "Our Differences",
  };

  const activePath = paths[location.pathname] || "Find a Coach";

  return (
    <nav className="bg-white p-4">
      <div className="max-w-4xl mx-auto justify-between flex md:justify-between lg:justify-center lg:gap-20 items-center relative">
        <div>
          <img src="/logo.svg" alt="logo" />
        </div>

        {/* Toggle Button for Mobile */}
        <div className="lg:hidden z-20">
          <button onClick={() => setIsOpen(!isOpen)} className="text-black">
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile and Desktop Menu */}
        <div
          className={`absolute top-full left-0 w-full  p-4 bg-white  transition-all duration-300 z-20 ${
            isOpen ? "block" : "hidden"
          } lg:relative lg:flex lg:flex-row lg:items-center lg:space-x-8 lg:bg-transparent lg:p-0 lg:w-auto`}
        >
          <div className="flex flex-col items-center space-y-4 lg:flex-row lg:space-y-0 lg:space-x-8">
            <Link
              to="/findacoach"
              className={`md:text-lg ${
                activePath === "Find a Coach"
                  ? "text-[#66b932] font-bold"
                  : "text-black hover:text-gray-400"
              }`}
            >
              Find a Coach
            </Link>
            <Link
              to="/applytocoach"
              className={`md:text-lg ${
                activePath === "Apply a Coach"
                  ? "text-[#66b932] font-bold"
                  : "text-black hover:text-gray-400"
              }`}
            >
              Apply a Coach
            </Link>
            <Link
              to="/ourdifferences"
              className={`md:text-lg ${
                activePath === "Our Differences"
                  ? "text-[#66b932] font-bold"
                  : "text-black hover:text-gray-400"
              }`}
            >
              Our Differences
            </Link>
          </div>

          <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0 md:justify-center md:mt-4 lg:justify-end lg:mt-0">
            <button   
            className="text-[#66b932] px-10 py-2 border border-black md:px-4 md:py-2 rounded hover:bg-white hover:text-gray-800"
            onClick={() => setModalOpen(true)}
            >
              Log In
            </button>
            <button className="text-white bg-[#66b932] px-10 py-3 md:px-4 md:py-2 rounded"
                     onClick={( )=> navigate("/join") }
             >
              Sign Up
            </button>
          </div>
        </div>
        <LoginModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
      </div>
    </nav>
  );
};

export default Navbar;
