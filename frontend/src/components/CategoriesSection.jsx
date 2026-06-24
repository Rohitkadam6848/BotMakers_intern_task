import React from "react";
import { FaMedal, FaLightbulb, FaUserCog, FaBitcoin } from "react-icons/fa";

const categories = [
  {
    icon: FaMedal,
    title: "MINI\nMAKERS",
    description: "Where Creativity Meets Logic.",
  },
  {
    icon: FaLightbulb,
    title: "JUNIOR\nINNOVATORS",
    description: "Engineering & Strategy Fundamentals.",
  },
  {
    icon: FaUserCog,
    title: "YOUNG\nENGINEERS",
    description: "Advanced Wireless & Autonomous Control.",
  },
  {
    icon: FaBitcoin,
    title: "ROBO\nMINDS",
    description: "Elite Professional Sports & Robotics.",
  },
];

const CategoriesSection = () => {
  return (
    <section className="bg-[#1A1919] py-20 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2
          className="text-white text-5xl md:text-6xl mb-12"
          style={{ fontFamily: "Orbitron" }}
        >
          CATEGORIES
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {categories.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group relative min-h-[420px] bg-[#2A2A2A] border border-white/20 rounded-3xl p-8 transition-all duration-500 hover:border-[#FFC400] overflow-hidden flex flex-col"
              >
                {/* Yellow Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br from-[#FFC400]/20 via-[#FFC400]/10 to-transparent" />

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <div className="mb-8">
                    <Icon className="text-6xl text-[#FFC400]" />
                  </div>

                  {/* Title */}
                  <h3
                    className="text-white text-3xl leading-tight mb-4 whitespace-pre-line font-bold"
                    style={{ fontFamily: "Orbitron" }}
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-lg leading-relaxed">
                    {item.description}
                  </p>

                  {/* Push button to bottom */}
                  <div className="mt-auto pt-10">
                    <button className="text-[#FF4C4C] font-semibold tracking-wide flex items-center gap-2 uppercase transition-all duration-300 hover:gap-4">
                      LEARN MORE
                      <span>→</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
