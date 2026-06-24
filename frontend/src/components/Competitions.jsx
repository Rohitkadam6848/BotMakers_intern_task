import React from "react";

const CompetitionSection = () => {
  const pastResults = [
    {
      title: "Bengaluru Regionals",
      desc: "Lorem Ipsum",
    },
    {
      title: "Bengaluru Regionals",
      desc: "Lorem Ipsum",
    },
    {
      title: "Bengaluru Regionals",
      desc: "Lorem Ipsum",
    },
  ];

  const upcomingEvents = [
    {
      city: "Mumbai",
      date: "11/11/25",
      location: "BKC",
      category: "Lorem",
    },
    {
      city: "Delhi",
      date: "11/11/25",
      location: "BKC",
      category: "Lorem",
    },
  ];

  return (
    <section className="relative min-h-screen bg-[#111111] py-20 px-8 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute left-0 bottom-0 h-[500px] w-[500px] rounded-full bg-red-500/20 blur-[180px]" />
      <div className="absolute right-0 top-20 h-[400px] w-[400px] rounded-full bg-red-500/20 blur-[180px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <h2
          className="text-white text-6xl mb-14"
          style={{ fontFamily: "Orbitron" }}
        >
          COMPETITIONS & EVENTS
        </h2>

        {/* Column Titles */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          <h3
            className="text-[#FF4C4C] text-4xl"
            style={{ fontFamily: "Orbitron" }}
          >
            LIVE NOW
          </h3>

          <h3
            className="text-white text-4xl text-center"
            style={{ fontFamily: "Orbitron" }}
          >
            UPCOMING
          </h3>

          <h3
            className="text-white text-4xl text-center"
            style={{ fontFamily: "Orbitron" }}
          >
            PAST RESULTS
          </h3>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LIVE NOW */}
          <div className="bg-[#181818]/95 border border-white/20 rounded-2xl p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-white text-2xl font-semibold">
                  Bengaluru Regionals
                </h3>

                <p className="text-gray-500 text-xl">Lorem Ipsum</p>
              </div>

              <span className="bg-[#FF4C4C] text-white px-3 py-1 rounded-md text-sm">
                Ongoing
              </span>
            </div>

            <div className="h-px bg-white/20 my-5" />

            {/* Tournament Bracket */}
            <div className="h-[320px] flex items-center justify-center">
              <img
                src="./Events.jpeg"
                alt="Bracket"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* UPCOMING */}
          <div className="space-y-6">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="bg-[#181818]/95 border border-white/20 rounded-2xl p-6"
              >
                <h3 className="text-white text-2xl font-semibold mb-6">
                  Event in {event.city}
                </h3>

                <div className="grid grid-cols-3 gap-4 text-white mb-8">
                  <div>
                    <p className="font-semibold">Date</p>
                    <p>{event.date}</p>
                  </div>

                  <div>
                    <p className="font-semibold">Location</p>
                    <p>{event.location}</p>
                  </div>

                  <div>
                    <p className="font-semibold">Category</p>
                    <p>{event.category}</p>
                  </div>
                </div>

                <button className="w-full bg-[#FF4C4C] hover:bg-red-600 text-white py-3 rounded-md text-xl font-semibold transition">
                  REGISTER
                </button>
              </div>
            ))}
          </div>

          {/* PAST RESULTS */}
          <div className="bg-[#181818]/95 border border-white/20 rounded-2xl p-6">
            {pastResults.map((result, index) => (
              <div key={index}>
                <h3 className="text-white text-2xl font-semibold">
                  {result.title}
                </h3>

                <p className="text-gray-500 text-xl">{result.desc}</p>

                {index !== pastResults.length - 1 && (
                  <div className="h-px bg-white/20 my-5" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetitionSection;
