import { FaYoutube, FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black px-6 md:px-16 py-12">
      <div className="border-b border-gray-600 m-5"></div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        {/* Quick Links */}
        <div>
          <h2
            className="text-white text-3xl font-semibold mb-8 uppercase"
            style={{ fontFamily: "Roboto" }}
          >
            QUICK LINKS
          </h2>

          <div className="grid grid-cols-2 gap-x-20 gap-y-4">
            {/* Column 1 */}
            <div className="flex flex-col gap-3">
              <a href="#" className="text-gray-500 hover:text-white transition">
                The Arena
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition">
                Episodes
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition">
                National Rankings
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition">
                Programs
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition">
                Rulebooks
              </a>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-3">
              <a href="#" className="text-gray-500 hover:text-white transition">
                Join the Team
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition">
                Sponsorships
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition">
                Help Center
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition">
                Contact Us
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition">
                Legal
              </a>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h2
            className="text-white text-3xl  mb-8 uppercase"
            style={{ fontFamily: "Roboto" }}
          >
            SOCIAL MEDIA
          </h2>

          <div className="flex items-center gap-8">
            <a
              href="#"
              className="text-gray-500 hover:text-white transition text-4xl"
            >
              <FaYoutube />
            </a>

            <a
              href="#"
              className="text-gray-500 hover:text-white transition text-4xl"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="text-gray-500 hover:text-white transition text-4xl"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="text-gray-500 hover:text-white transition text-4xl"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
