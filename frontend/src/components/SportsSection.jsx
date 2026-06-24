import React from "react";

const sports = [
  {
    title: "Robo Race",
    image: "./10e8a897ef4abee14e93aca4d3868315d661882a.jpg.jpeg",
  },
  {
    title: "Line Follower",
    image: "./f9bf39de8df88d4ca075a3271026b53474751745.jpg.jpeg",
  },
  {
    title: "RC Racing",
    image: "./d8e1d46366e62e27ff8cd1809221962f70220abf (1).jpg.jpeg",
  },
  {
    title: "FPV Drone Racing & Aeromodelling",
    image: "./fa9e6a9bfa678a4d714d3810a4e4bae186552134.jpg.jpeg",
  },
  {
    title: "Robo Hockey",
    image: "./5a9c6733ddf8f7ab34e230bea014b19240514e58.jpg.jpeg",
  },
  {
    title: "Robo War",
    image: "./a031d78c4e6a2c1f2db171fc08f7340a6feb1fb1.jpg.jpeg",
  },
];

const SportsSection = () => {
  return (
    <section className="bg-black py-24 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-14">
          <p
            className="text-[#FF4C4C] text-2xl mb-2"
            style={{ fontFamily: "Orbitron" }}
          >
            SPORTS
          </p>

          <h2
            className="text-white text-5xl md:text-6xl"
            style={{ fontFamily: "Orbitron" }}
          >
            COMPETITION DISCIPLINES
          </h2>
        </div>

        {/* Cards */}
        <div className="relative">
          {/* Background Circuit Pattern */}
          <div
            className="absolute right-0 bottom-0 w-[500px] h-[300px] opacity-20 bg-no-repeat bg-contain bg-right-bottom pointer-events-none"
            style={{
              backgroundImage: "url('/circuit-bg.png')",
            }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {sports.map((sport, index) => (
              <div
                key={index}
                className="group bg-[#121212] border border-white/20 rounded-2xl overflow-hidden hover:border-[#FF4C4C] transition-all duration-300"
              >
                {/* Image */}
                <div className="h-48 bg-white flex items-center justify-center">
                  <img
                    src={sport.image}
                    alt={sport.title}
                    className={`max-h-full max-w-full transition-transform duration-500 group-hover:scale-105 ${
                      sport.title === "Line Follower"
                        ? "object-contain"
                        : "object-cover w-full h-full"
                    }`}
                  />
                </div>

                {/* Title */}
                <div className="p-4">
                  <h3
                    className={`text-white leading-tight ${
                      sport.title.length > 20 ? "text-xl" : "text-2xl"
                    }`}
                    style={{ fontFamily: "Orbitron" }}
                  >
                    {sport.title}
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

export default SportsSection;
