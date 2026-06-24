const HeroSection = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('./574ce8aa6f32bf18773a86d774fbc7aacef16b2e.png')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Left Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center px-20">
        <div className="max-w-3xl">
          {/* Heading */}
          <h1
            className="text-white uppercase leading-[0.95] tracking-wider"
            style={{
              fontFamily: "Orbitron",
              fontSize: "88px",
            }}
          >
            INDIA'S ULTIMATE
            <br />
            ROBOTICS ARENA
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-2xl text-2xl font-medium text-gray-300">
            Build. Compete. Rank. The National
            <br />
            Ecosystem for Robotics Arena
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex gap-4">
            <button className="rounded-md bg-[#FF4C4C] px-8 py-4 text-lg font-semibold text-white transition hover:bg-red-600">
              CREATE ACCOUNT
            </button>

            <button className="rounded-md border border-white px-8 py-4 text-lg font-semibold text-white transition hover:bg-white hover:text-black">
              EXPLORE EVENTS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
