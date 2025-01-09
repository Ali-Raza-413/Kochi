import React from "react";
import CoachesCard from "../../components/CoachesCard";

const Coaches = () => {
  const coachesData = [
    {
      id: 1,
      p1: "New York, NY",
      p2: "Basketball",
      p3: "New to the Kochi Team",
      aboutText:
        "Hi, My name is Coach Chaves. Nice to meet you all! My main focus is the athletes success. Building a foundation brick by brick. I strive to target areas of failure so that the athl...",
      title: "John Doe",
      imageUrl: "/n1.png",
      coachname: "John Doe",
      coachtype: "Virtual Coach",
    },
    {
      id: 2,
      p1: "456 Elm St",
      p2: "Soccer",
      p3: "4.5 Stars",
      aboutText:
        "Hi, My name is Coach Chaves. Nice to meet you all! My main focus is the athletes success. Building a foundation brick by brick. I strive to target areas of failure so that the athl...",
      title: "Jane Smith",
      imageUrl: "/n2.png",
      coachname: "John Doe",
      coachtype: "Virtual Coach",
    },
    {
      id: 3,
      p1: "456 Elm St",
      p2: "Soccer",
      p3: "4.5 Stars",
      aboutText:
        "Hi, My name is Coach Chaves. Nice to meet you all! My main focus is the athletes success. Building a foundation brick by brick. I strive to target areas of failure so that the athl...",
      title: "Jane Smith",
      imageUrl: "/n2.png",
      coachname: "John Doe",
      coachtype: "Virtual Coach",
    },
    {
      id: 4,
      p1: "456 Elm St",
      p2: "Soccer",
      p3: "4.5 Stars",
      aboutText:
        "Hi, My name is Coach Chaves. Nice to meet you all! My main focus is the athletes success. Building a foundation brick by brick. I strive to target areas of failure so that the athl...",
      title: "Jane Smith",
      imageUrl: "/n2.png",
      coachname: "John Doe",
      coachtype: "Virtual Coach",
    },
  ];

  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-4 mb-4 max-w-2xl mx-auto py-10 px-10 lg:px-0 ">
        <select className="px-4 py-2 border border-black rounded w-full lg:w-auto">
          <option value="">Select Sport</option>
          <option value="basketball">Basketball</option>
          <option value="soccer">Soccer</option>
          <option value="tennis">Tennis</option>
        </select>
        <input
          type="text"
          placeholder="Max Distance"
          className="px-4 py-2 border border-black rounded w-full lg:w-auto"
        />
        <input
          type="text"
          placeholder="Enter ZipCode"
          className="px-4 py-2 border border-black rounded w-full lg:w-auto"
        />
        <button className="px-6 py-2 bg-[#66b932] text-white rounded-lg">
          Search
        </button>
      </div>
      <div className="flex flex-col gap-4">
        {coachesData.map((coach) => (
          <CoachesCard
            key={coach.id}
            p1={coach.p1}
            p2={coach.p2}
            p3={coach.p3}
            aboutText={coach.aboutText}
            title={coach.title}
            imageUrl={coach.imageUrl}
            coachname={coach.coachname}
            coachtype={coach.coachtype}
          />
        ))}
      </div>
    </div>
  );
};

export default Coaches;
