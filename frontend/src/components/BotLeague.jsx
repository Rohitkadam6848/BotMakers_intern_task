import React from "react";

const features = [
  {
    number: "1.",
    title: "STRUCTURED EVENTS",
    description: "From one-off events to a year-round competitive season.",
  },
  {
    number: "2.",
    title: "DIGITAL IDENTITY",
    description: "Your professional robotics legacy, tracked and verified.",
  },
  {
    number: "3.",
    title: "NATIONAL RANKING",
    description: "Benchmark your skills against the best engineers in India.",
  },
  {
    number: "4.",
    title: "CAREER PATHWAY",
    description:
      "Turning arena victories into real-world industry opportunities.",
  },
];

const WhatIsBotLeague = () => {
  return (
    <section className="bg-[#1A1919] py-24 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2
          className="text-white text-5xl lg:text-6xl mb-20"
          style={{ fontFamily: "Orbitron" }}
        >
          WHAT IS BOTLEAGUE?
        </h2>

        <div className="grid lg:grid-cols-[1.7fr_0.8fr] gap-16 items-center">
          {/* Left Side Content */}
          <div className="grid md:grid-cols-2 gap-x-20 gap-y-16">
            {features.map((item) => (
              <div key={item.number}>
                <h3 className="text-[#FF4C4C] text-4xl font-bold mb-3">
                  {item.number}
                </h3>

                <h4
                  className="text-white text-2xl mb-3"
                  style={{ fontFamily: "Roboto" }}
                >
                  {item.title}
                </h4>

                <p className="text-gray-400 text-xl leading-relaxed max-w-sm">
                  "{item.description}"
                </p>
              </div>
            ))}
          </div>

          {/* Right Side Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="./99fae981739948683735e92f62f7529a3a16b1f7.png"
              alt="BotLeague Features"
              className="w-full max-w-[380px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsBotLeague;
