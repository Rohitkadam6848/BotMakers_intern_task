import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#1A1919] h-[110px] px-8 flex items-center justify-between">
      {/* Logo */}
      <div>
        <img
          src="./4a4db2d9d5f47ddc70c24d51dd29c3b6411ac291.png"
          alt="BotLeague"
          className="h-16 object-contain"
        />
      </div>

      {/* Center Menu */}
      <div
        className="flex items-center gap-16 text-white text-[20px]"
        style={{ fontFamily: "Orbitron" }}
      >
        <a href="#" className="hover:text-[#FF4C4C] transition">
          Events
        </a>

        <a href="#" className="hover:text-[#FF4C4C] transition">
          Programs
        </a>

        <a href="#" className="hover:text-[#FF4C4C] transition">
          Community
        </a>

        <a href="#" className="hover:text-[#FF4C4C] transition">
          Ranks
        </a>
      </div>

      {/* Right Buttons */}
      <div className="flex items-center gap-5">
        <button
          className="
            border
            border-white
            text-white
            px-10
            py-3
            rounded-xl
            font-medium
            hover:bg-white
            hover:text-black
            transition
          "
          style={{ fontFamily: "Roboto" }}
        >
          LOGIN
        </button>

        <button
          className="
            bg-[#FF4C4C]
            text-white
            px-8
            py-3
            rounded-xl
            font-medium
            hover:bg-[#ff3a3a]
            transition
          "
          style={{ fontFamily: "Roboto" }}
        >
          REGISTER NOW
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
