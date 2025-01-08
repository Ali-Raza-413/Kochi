/*
  ---------------------------------------
  Project: Kochi Website
  Date: Jan 8, 2025
  Developer: Ali raza
  ---------------------------------------
  Description:Apply To Coach Page Created.
*/
import React from "react";
import Background from "../../components/Background";
import GenericCard from "../../components/GenericCard";
import { FaDollarSign, FaMobile, FaComments } from "react-icons/fa";
import PrivateCoaches from "./PrivateCoaches";
const ApplyToCoach = () => {
  const cardsData = [
    {
      icon: FaDollarSign,
      heading: "Get Paid",
      description:
        "Set your rate and earn what you deserve based on your qualifications and experience.",
    },
    {
      icon: FaComments,
      heading: "Full Support",
      description:
        "Our success is paired with yours, so we will help you along every step of the way.",
    },
    {
      icon: FaMobile,
      heading: "Dynamic Tech",
      description:
        "Find clients, stay organized, and use our video feedback platform to scale your business.",
    },
  ];
  return (
    <>
      <Background
        Text="Scale, or start, your private coaching business"
        InputText="Enter City or Zip"
        ImagePath="/m1.jpg"
        BtText="CONTINUE APPLCATION"
      />
     <h1 className="text-3xl text-black text-center font-bold mt-10">Why become an Kochi coach?
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
    <PrivateCoaches/>
    </>
  );
};

export default ApplyToCoach;
