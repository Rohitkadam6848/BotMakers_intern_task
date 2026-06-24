const sponsors = [
  {
    name: "NIT DELHI",
    logo: "./NIT.png",
  },
  {
    name: "INDIAN BIT",
    logo: "./BIT.png",
  },
  {
    name: "NIT SILCHAR",
    logo: "./SILCHAR.png",
  },
  {
    name: "ROBO COMPANY",
    logo: "./ROBO.png",
  },
  {
    name: "IIT BOMBAY",
    logo: "./IIT BOMBAY.png",
  },
  {
    name: "ROBO COMPANY",
    logo: "./GENRALROBO.png",
  },
];

const SponsorsSection = () => {
  return (
    <section className="bg-black py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2
          className="text-white text-3xl md:text-4xl font-bold mb-16 tracking-wider"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          SPONSORS
        </h2>

        {/* Sponsors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-12">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="flex items-center gap-6 justify-center md:justify-start"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="w-24 h-24 object-contain opacity-80"
              />

              <h3
                className="text-gray-400 text-xl md:text-2xl font-semibold uppercase leading-tight"
                style={{ fontFamily: "var(--font-orbitron)" }}
              >
                {sponsor.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
