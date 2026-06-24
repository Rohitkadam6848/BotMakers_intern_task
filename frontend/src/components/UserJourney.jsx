import React from "react";
import { FaTools, FaLandmark, FaAward, FaUsers } from "react-icons/fa";

const steps = [
  {
    id: "STEP 1",
    icon: <FaTools size={40} />,
    title: "BUILD YOUR TEAM",
  },
  {
    id: "STEP 2",
    icon: <FaLandmark size={40} />,
    title: "COMPETE ACROSS INDIA",
  },
  {
    id: "STEP 3",
    icon: <FaAward size={40} />,
    title: "EARN NATIONAL RANKING & VALUE",
  },
  {
    id: "STEP 4",
    icon: <FaUsers size={40} />,
    title: "JOIN THE LEAGUE",
  },
];

const UserJourney = () => {
  return (
    <section className="relative bg-[#111111] py-24 px-8 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute left-0 top-20 h-[400px] w-[400px] rounded-full bg-red-500/10 blur-[180px]" />
      <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-red-500/10 blur-[180px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <p
            className="text-[#FF4C4C] text-xl mb-3"
            style={{ fontFamily: "Roboto" }}
          >
            USER JOURNEY
          </p>

          <h2
            className="text-white text-5xl md:text-6xl mb-4 font-bold"
            style={{ fontFamily: "Orbitron" }}
          >
            YOUR PATH TO THE LEAGUE
          </h2>

          <p className="text-gray-500 text-lg">MADE BY ROHIT KADAM</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop Line */}
          <div className="hidden lg:block absolute top-16 left-[12%] right-[12%] h-[2px] bg-blue-600" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((step) => (
              <div
                key={step.id}
                className="relative flex flex-col items-center text-center"
              >
                {/* Circle */}
                <div className="relative w-32 h-32 flex items-center justify-center rounded-full bg-[#181818] border border-white/20">
                  <div className="absolute inset-3 rounded-full border-2 border-blue-600" />

                  <div className="text-white relative z-10">{step.icon}</div>
                </div>

                {/* Vertical Connector */}
                <div className="w-[2px] h-10 bg-white/30" />

                {/* Content */}
                <div>
                  <p
                    className="text-[#FF4C4C] text-lg mb-3"
                    style={{ fontFamily: "Roboto" }}
                  >
                    {step.id}
                  </p>

                  <h3
                    className="text-white text-2xl leading-tight"
                    style={{ fontFamily: "Roboto" }}
                  >
                    {step.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserJourney;
