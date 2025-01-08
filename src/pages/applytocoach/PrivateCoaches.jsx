/*
  ---------------------------------------
  Project: Kochi Website
  Date: Jan 8, 2025
  Developer: Ali raza
  ---------------------------------------
  Description:it is content compoenent used in apply to coach Page.
*/
import React from "react";
import { FaHeart, FaBriefcase, FaClock, FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const PrivateCoaches = () => {
  const items = [
    "Find Athletes to Train",
    "Communicate with Clients",
    "Manage Your Schedule",
    "Receive Payments",
    "Get Insured",
  ];
  const navigate = useNavigate();
  return (
    <div className="py-10">
      <div className="max-w-3xl mx-auto bg-[#f9fcf9] border p-5">
        <h1 className="text-4xl text-black font-semibold text-center mb-8">
          Built for all private coaches
        </h1>

        {/* Scholarship Seekers Section */}
        <div className="flex items-center flex-col mb-12">
          <div className="flex items-center mb-4">
            <FaClock className="w-24 h-24 text-[#66b932]" />
          </div>
          <h1 className="text-3xl font-semibold mb-5">Full Timers</h1>

          <div>
            <p className="text-lg">
              We offer established private coaches the necessary resources
            </p>
            <p className="text-lg text-center">
              to build or expand their own training business.
            </p>
          </div>
        </div>

        {/* Team Members Section */}
        <div className="flex items-center flex-col mb-12">
          <div className="flex items-center mb-4">
            <FaBriefcase className="w-24 h-24 text-[#66b932]" />
          </div>
          <h1 className="text-3xl font-semibold mb-5">Side Giggers</h1>
          <div>
            <p className="text-lg">
              Kochi coaches are able to stay involved with the game they love
            </p>
            <p className="text-lg text-center">
              while also earning additional income.{" "}
            </p>
          </div>
        </div>

        {/* Game Learners Section */}
        <div className="flex items-center flex-col mb-12">
          <div className="flex items-center mb-4">
            <FaHeart className="w-24 h-24 text-[#66b932]" />
          </div>
          <h1 className="text-3xl font-semibold mb-5">Life Changers</h1>

          <div>
            <p className="text-lg">
              AU coaches mentor young athletes by helping them build
            </p>
            <p className="text-lg text-center">
              {" "}
              confidence on and off the court..
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-3xl mx-auto py-10">
        <h1 className="text-4xl text-black font-semibold text-center mb-8">
          Our promises to you
        </h1>
        <div className="flex flex-col md:flex-row gap-20">
          <div>
            <h1 className="text-xl text-center font-bold mb-5">
              No initiation fees
            </h1>
            <p className="text-center md:text-left">
              Some coaching platforms charge parents a one-time fee to connect
              with their coaches. We don't. You only pay your AU coach for their
              hard work.. like it should be!
            </p>
          </div>
          <div>
            <h1 className="text-xl text-center font-bold mb-5">
              Kocgi Guarantee
            </h1>
            <p className="text-center md:text-left">
              Find the right fit, or it's free. If you do not think your coach
              was the right fit after your first session, we will refund you the
              full payment. This policy covers the first session with a new
              coach
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-3xl mx-auto py-10">
        <div className="flex gap-10 justify-center lg:justify-start">
          <div className="hidden lg:block">
            <img src="/m3.webp" aly="athelete" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold text-center mb-5">
              We got you covered
            </h1>
            <div>
              {items.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-2 items-center justify-center"
                >
                  <div>
                    <FaCheck className="text-[#66b932]" />
                  </div>
                  <div>
                    <p className="text-lg">{item}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-5">
              <button className="border border-[#66b932] text-[#66b932] px-5 py-2">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-3xl mx-auto py-10">
        <h1 className="text-4xl text-center font-semibold mb-8">
          Ready to get started?
        </h1>
        <div className="flex gap-4 md:gap-10 justify-center flex-col md:flex-row p-10 md:p-0">
          <button
            onClick={() => navigate("/findacoach")}
            className="md:text-3xl md:px-8 py-4 bg-[#66b932] text-white rounded-md"
          >
            FIND COACHES
          </button>
          <button className="md:text-3xl md:px-8 py-4 bg-[#66b932] text-white rounded-md">
            APPLY TO COACH
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivateCoaches;
