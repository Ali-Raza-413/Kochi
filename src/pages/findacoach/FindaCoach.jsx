/*
  ---------------------------------------
  Project: Kochi Website
  Date: Jan 7, 2025
  Developer: Ali raza
  ---------------------------------------
  Description:Find a Coach page Created
*/
import React from "react";
import Background from "../../components/Background";
import GenericCard from "../../components/GenericCard";
import { FaMapMarkerAlt, FaStar, FaArrowRight } from "react-icons/fa";
import CreatedAthlete from "./CreatedAthlete";
const FindaCoach = () => {
  const cardsData = [
    {
      icon: FaMapMarkerAlt,
      heading: "Convenience",
      description:
        "Determine how far you are willing to travel for private training lessons.",
    },
    {
      icon: FaStar,
      heading: "Experience",
      description:
        "Kochi coaches excelled in their own athletic careers and are eager to work with the next generation",
    },
    {
      icon: FaArrowRight,
      heading: "Results",
      description:
        "Relay specific goals to your Kochi Coach and they will work with you to raise the bar.",
    },
  ];
  return (
    <>
      <div>
        <Background
          ImagePath="/m2.jpg"
          Text="Find trusted, local coaches and take your game to the next level"
          InputText="Enter City or Zip"
          BtText="FIND COACHES"
          pathname="/coaches"
        />
      </div>
      <h1 className="text-3xl text-black text-center font-bold mt-10">
        Why Choose an Kochi Coach?
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
        {cardsData.map((card, index) => (
          <GenericCard
            key={index}
            heading={card.heading}
            description={card.description}
            Icon={card.icon}
          />
        ))}
      </div>
      <CreatedAthlete />
    </>
  );
};

export default FindaCoach;
