/*
  ---------------------------------------
  Project: Kochi Website
  Date: Jan 7, 2025
  Developer: Ali raza
  ---------------------------------------
  Description:EThelete Compoenent
*/
import React from "react";
import { FaGraduationCap, FaUsers, FaSmile, FaCheck } from "react-icons/fa"; // Importing the necessary icons

const CreatedAthlete = () => {
  const items = [
    "Connect With a Private Coach",
    "Communicate Your Goals",
    "Book Training Sessions",
    "Manage Your Training Schedule",
    "Track Your Athletic Growth",
  ];
  return (
    <div className="py-10">
      <div className="max-w-3xl mx-auto bg-[#f9fcf9] border p-5">
        <h1 className="text-4xl text-black font-semibold text-center mb-8">
          Created for every Athlete
        </h1>

        {/* Scholarship Seekers Section */}
        <div className="flex items-center flex-col mb-12">
          <div className="flex items-center mb-4">
            <FaGraduationCap className="w-24 h-24 text-[#66b932]" />
          </div>
          <h1 className="text-3xl font-semibold mb-5">Scholarship Seekers</h1>

          <div>
            <p className="text-lg">
              Our coaches have played at the highest levels and want to help
            </p>
            <p className="text-lg text-center">
              rising athletes follow in their footsteps.
            </p>
          </div>
        </div>

        {/* Team Members Section */}
        <div className="flex items-center flex-col mb-12">
          <div className="flex items-center mb-4">
            <FaUsers className="w-24 h-24 text-[#66b932]" />
          </div>
          <h1 className="text-3xl font-semibold mb-5">Team Members</h1>
          <div>
            <p className="text-lg">
              Our coaches will make sure you are ready for next season by
            </p>
            <p className="text-lg text-center">
              tailoring a training plan to your specific needs.{" "}
            </p>
          </div>
        </div>

        {/* Game Learners Section */}
        <div className="flex items-center flex-col mb-12">
          <div className="flex items-center mb-4">
            <FaSmile className="w-24 h-24 text-[#66b932]" />
          </div>
          <h1 className="text-3xl font-semibold mb-5">Game Learners</h1>

          <div>
            <p className="text-lg">
              Our coaches want to work with the next generation of athletes by
            </p>
            <p className="text-lg text-center">
              {" "}
              instilling a baseline skill level and love for the game.
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
              The only platform you need
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
          <button className="md:text-3xl md:px-8 py-4 bg-[#66b932] text-white rounded-md">
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

export default CreatedAthlete;
