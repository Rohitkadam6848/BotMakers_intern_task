import React from "react";

const cards = [
  {
    title: "BECOME IN JUDGE",
  },
  {
    title: "VOLUNTEER",
  },
  {
    title: "COMMUNITY MEMBER",
  },
];

const JoinEcosystem = () => {
  return (
    <section className="bg-black py-24 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2
          className="text-white text-5xl md:text-6xl mb-16"
          style={{ fontFamily: "Orbitron" }}
        >
          JOIN THE ECOSYSTEM
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#0B0B0B] border border-white/20 rounded-2xl p-6"
            >
              {/* Title */}
              <h3
                className="text-white text-2xl mb-8"
                style={{ fontFamily: "Orbitron" }}
              >
                {card.title}
              </h3>

              {/* Form */}
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full bg-[#1A1A1A] border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#FF4C4C]"
                />

                <input
                  type="text"
                  placeholder="Location"
                  className="w-full bg-[#1A1A1A] border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#FF4C4C]"
                />

                <input
                  type="text"
                  placeholder="Enroll"
                  className="w-full bg-[#1A1A1A] border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#FF4C4C]"
                />

                <button className="w-full bg-[#FF4C4C] hover:bg-red-600 text-white text-2xl font-semibold py-3 rounded-lg transition-all duration-300 mt-4">
                  SIGN UP
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JoinEcosystem;
