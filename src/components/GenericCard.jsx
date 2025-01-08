/*
  ---------------------------------------
  Project: Kochi Website
  Date: Jan 7, 2025
  Developer: Ali raza
  ---------------------------------------
  Description:Generic card Componenet.
*/
import React from "react";

const GenericCard = ({ heading, description, Icon }) => {
  return (
    <div className="p-10">
    <div className="bg-white text-center">
      <div className="mb-10">
      <h2 className="text-2xl mb-10 text-black">{heading}</h2>
        <Icon className="w-16 h-16 mx-auto text-[#66b932] mb-5" />{" "}
      </div>

      <p className="text-black text-2xl max-w-sm">{description}</p>
    </div>
    </div>
  );
};

export default GenericCard;
