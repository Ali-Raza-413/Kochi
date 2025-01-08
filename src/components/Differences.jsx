/*
  ---------------------------------------
  Project: Kochi Website
  Date: Jan 8, 2025
  Developer: Ali raza
  ---------------------------------------
  Description:our differences component Created successfully.
*/
import React from "react";

const Differences = ({ heading, description, imagePath }) => {
  return (
    <>
      <div className="flex flex-col gap-5 md:flex-row items-center justify-center p-8 space-y-8 md:space-y-0 md:space-x-8">
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold mb-4 text-center">{heading}</h1>
          <p className="text-lg text-gray-700 max-w-md">{description}</p>
        </div>
        <div>
          <img
            src={imagePath}
            alt="Difference Illustration"
            className="w-full max-w-md rounded shadow-md"
          />
        </div>
      </div>
      
    </>
  );
};

export default Differences;
