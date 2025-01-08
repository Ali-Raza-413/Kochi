/*
  ---------------------------------------
  Project: Kochi Website
  Date: Jan 8, 2025
  Developer: Ali raza
  ---------------------------------------
  Description:our differences page Created successfully.
*/
import React from "react";
import Differences from "../../components/Differences";

const TopCoaches = () => {
  const differencesData = [
    {
      heading: "Video Feedback",
      description:
        "Record short videos of your training sessions and post them to your AU account. This can be done by a parent or AU coach. From home, coaches can relay feedback on each video so the athlete knows what to work on in between training sessions.",
      imagePath: "/a1.webp",
    },
    {
      heading: "Communication",
      description:
        "nquire about working with a coach through our user-friendly messaging system. Once your first training session is booked, rely on us for all future communication with your AU coach.",
      imagePath: "/a2.webp",
    },
    {
      heading: "Scheduling",
      description:
        "Use our calendar to manage your entire training schedule. Parents and athletes can reserve sessions through our calendar and will be able to see when their coach is available for training on a weekly basis.",
      imagePath: "/a3.webp",
    },
    {
      heading: "Booking",
      description:
        "Use our calendar to manage your entire training schedule. Parents and athletes can reserve sessions through our calendar and will be able to see when their coach is available for training on a weekly basis.",
      imagePath: "/a4.webp",
    },
    {
      heading: "Vetting",
      description:
        "We know safety is essential. You can trust that our qualified coaches passed their background check and are able to train when you are ready!.",
      imagePath: "/a5.webp",
    },
  ];
  return (
    <>
      <div
        className="relative bg-cover bg-center bg-no-repeat h-screen flex  justify-center"
        style={{
          backgroundImage: "url('m3.jpg')",
        }}
      >
        <h1 className="text-3xl md:text-6xl font-bold text-white mt-5">
          Top coaches, unrivaled tech
        </h1>
      </div>
      <div className="max-w-3xl mx-auto py-20">
        <p className="text-4xl ">
          Our platform fosters strong connections between athletes and private
          coaches. We enable the relationships to last by backing them with
          dynamic technology.
        </p>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col space-y-8">
          {differencesData.map((item, index) => (
            <Differences
              key={index}
              heading={item.heading}
              description={item.description}
              imagePath={item.imagePath}
            />
          ))}
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
    </>
  );
};

export default TopCoaches;
