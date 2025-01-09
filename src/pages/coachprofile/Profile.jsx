import React from "react";
import { FaCheck, FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaStar,
  FaBasketballBall,
  FaGamepad,
  FaFileContract,
} from "react-icons/fa";

const Profile = () => {
  return (
    <div className="py-10 px-10 lg:px-0">
      <div className="max-w-4xl mx-auto">
        <div className="flex gap-10 flex-col lg:flex-row ">
          <div className="flex flex-col space-y-4  border border-black py-5 items-center">
            <img
              src="/n1.png"
              alt="profile"
              className="w-48 h-48 object-cover rounded-full"
            />
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-xl text-black font-bold ">john Doe</h1>
              <div className="py-5">
                <div className="flex gap-4 items-center px-5 ">
                  <FaCheck className="text-[#66b932] w-5 h-5" />
                  <p>Background Check</p>
                </div>
                <div className="flex gap-4 items-center px-5 ">
                  <FaCheck className="text-[#66b932] w-5 h-5" />
                  <p>Contact Information</p>
                </div>
                <div className="flex gap-4 items-center px-5 ">
                  <FaCheck className="text-[#66b932] w-5 h-5" />
                  <p>Experience Verified</p>
                </div>
                <div className="flex gap-4 items-start px-5 ">
                  <FaClock className="text-[#66b932] w-5 h-5" />
                  <p className="max-w-[180px]">
                    Available: Monday, Tuesday, Wednesday, Thursday, Friday,
                    Saturday, Sunday
                  </p>
                </div>
                <p className="max-w-[300px] text-sm mt-5 px-5">
                  We enforce a strict onboarding process to ensure all AU
                  coaches are qualified and ready to train.
                </p>
              </div>
            </div>
          </div>
          <div className="py-10">
            <h1 className="text-3xl font-bold mb-5">Hi, I'm John Doe</h1>
            <p className="text-lg  mb-5">
              $50 for weekly lessons{" "}
              <Link className="text-[#66b932]">More Pricing Options</Link>
            </p>
            <p className="text-3xl font-bold mb-5">Why Train With Me?</p>
            <p className="text-sm max-w-lg mb-5">
              Hi, My name is Coach Chaves. Nice to meet you all! My main focus
              is the athletes success. Building a foundation brick by brick. I
              strive to target areas of failure so that the athlete can achieve
              goals one percent at a time. I have played at the College Level. I
              am an all around player who has seen and played all positions.
              Don’t be afraid to reach out for any questions!
            </p>
            <div className="flex flex-col space-y-3 mb-5">
              <div className="flex gap-3 items-center">
                <FaHome className="text-[#66b932] text-lg" />
                <h1 className="text-lg ">New York, NY</h1>
              </div>
              <div className="flex gap-3 items-center">
                <FaFileContract className="text-[#66b932] text-lg" />
                <h1 className="text-lg ">Offers Virtual Lessons</h1>
              </div>
              <div className="flex gap-3 items-center">
                <FaGamepad className="text-[#66b932] text-lg" />
                <h1 className="text-lg ">Private softball Coach</h1>
              </div>
              <div className="flex gap-3 items-center">
                <FaBasketballBall className="text-[#66b932] text-lg" />
                <h1 className="text-lg ">Private baseball Coach</h1>
              </div>
              <div className="flex gap-3 items-center">
                <FaStar className="text-[#66b932] text-lg" />
                <h1 className="text-lg ">New to the Kochi Team</h1>
              </div>
            </div>
            <div className="flex gap-5 flex-col lg:flex-row">
              <button className="px-6 py-2 border border-[#66b932] text-[#66b932]">
                MESSAGE
              </button>
              <button className="px-6 py-2 bg-[#66b932] text-white">
                BOOK A LESSON
              </button>
            </div>
          </div>{" "}
        </div>
      </div>
      <div className="max-w-6xl mx-auto py-10">
        <div className="flex flex-col space-y-10">
          <div className="flex flex-col gap-20 lg:flex-row">
            <h1 className="text-xl font-bold max-w-sm">
              Summary of Career and Accomplishments
            </h1>
            <p className="max-w-xl text-md">
              College Athlete Scholar Athlete graduated with 4.0 GPA Player of
              the Year Award- 2019 All Conference- 2020
            </p>
          </div>
          <div className="flex flex-col  gap-20 lg:flex-row ">
            <h1 className="text-xl font-bold max-w-sm">
              Who is the best coach you ever had and why?
            </h1>
            <p className="max-w-xl text-md">
              The best coach I ever had was and still is my father. From
              teaching me how to be an empowering young lady to a beast on the
              field. He’s always been my toughest coach but has brought so much
              joy into everything I do!
            </p>
          </div>
          <div className="flex flex-col  gap-20 lg:flex-row ">
            <h1 className="text-xl font-bold max-w-sm">
              What should athletes and parents know about you?
            </h1>
            <p className="text-md max-w-xl">
              I have not only played softball in college. I have done other
              sports such as basketball, and Jiu-Jitsu. I also volunteer my time
              at hospitals.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto py-10">
        <div className="flex flex-col space-y-10">
          <div className="flex flex-col gap-20 lg:flex-row">
            <h1 className="text-xl font-bold max-w-sm">
              Summary of Career and Accomplishments
            </h1>
            <p className="max-w-xl text-md">
              My main focus for an athlete is to target the most technical
              details of their mechanics as much as possible.
            </p>
          </div>
          <div className="flex flex-col  gap-20 lg:flex-row ">
            <h1 className="text-xl font-bold max-w-sm">
              How can you help someone improve their game?
            </h1>
            <p className="max-w-xl text-md">
              My main focus for an athlete is to target the most technical
              details of their mechanics as much as possible.
            </p>
          </div>
          <div className="flex flex-col  gap-20 lg:flex-row ">
            <h1 className="text-xl font-bold max-w-sm">
              What does a typical training session look like?
            </h1>
            <p className="text-md max-w-xl">
              Each session starts off with agility training followed by with our
              task that we need to focus on that day, ending with conditioning
              and tips.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
