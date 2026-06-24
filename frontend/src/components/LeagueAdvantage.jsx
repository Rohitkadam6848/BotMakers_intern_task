import React from "react";
import { FaMedal, FaGavel, FaBriefcase } from "react-icons/fa";
import { IoFlashOutline } from "react-icons/io5";

const advantages = [
  {
    icon: <FaMedal />,
    title: "NATIONAL RECOGNITION",
    description:
      "Benchmark your skills on India's official robotics leaderboard.",
  },
  {
    icon: <FaGavel />,
    title: "FAIR JUDGING",
    description:
      "Compete with confidence under standardized, expert-led evaluation.",
  },
  {
    icon: <FaBriefcase />,
    title: "CAREER OPS",
    description:
      "Bridge the gap between arena victories and top-tier tech placements.",
  },
  {
    icon: <IoFlashOutline />,
    title: "HIGH - ENERGY ECO",
    description:
      "Join a nationwide community of elite innovators and robotics athletes.",
  },
];

const LeagueAdvantage = () => {
  return (
    <section className="bg-[#1A1919] py-24 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1.4fr_0.8fr] gap-16 items-center">
          {/* Left Side */}
          <div>
            <p
              className="text-[#FF4C4C] text-3xl mb-2"
              style={{ fontFamily: "Orbitron" }}
            >
              WHY REGISTER ?
            </p>

            <h2
              className="text-white text-5xl lg:text-6xl mb-16"
              style={{ fontFamily: "Orbitron" }}
            >
              THE LEAGUE ADVANTAGE
            </h2>

            <div className="space-y-12">
              {advantages.map((item, index) => (
                <div key={index} className="flex gap-6">
                  {/* Icon */}
                  <div className="text-[#FF4C4C] text-5xl shrink-0 mt-1">
                    {item.icon}
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-white text-2xl font-semibold mb-2">
                      {item.title}
                    </h3>

                    <p className="text-gray-400 text-xl leading-relaxed max-w-xl">
                      "{item.description}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeagueAdvantage;
