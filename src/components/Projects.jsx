import hotelImg from "../assets/front page.png";
import auctionImg from "../assets/auction.png";
import mernmartImg from "../assets/mernmart.png";

function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-10 max-w-7xl mx-auto"
    >
      <h2 className="text-4xl font-bold text-cyan-400 text-center mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Hotel Booking */}
        <div className="bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-2 transition duration-300">
          <img
            src={hotelImg}
            alt="Hotel Booking"
            className="w-full h-56 object-cover"
          />

          <div className="p-6">
            <h3 className="text-2xl font-bold mb-4">
              Hotel Booking System
            </h3>

            <p className="text-gray-300 mb-6">
              A full-stack MERN application that allows users to browse hotels,
              book rooms, manage bookings, and authenticate securely using Clerk.
            </p>

            <div className="flex gap-4">
              <a
                href="https://github.com/divyanshidivyanshi/hotelbooking"
                target="_blank"
                rel="noreferrer"
                className="bg-cyan-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-cyan-300 transition"
              >
                GitHub
              </a>

              <a
                href="https://hotelbooking-pink-one.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="border border-cyan-400 px-4 py-2 rounded-lg hover:bg-cyan-400 hover:text-black transition"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>

        {/* Auction Website */}
        <div className="bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-2 transition duration-300">
          <img
            src={auctionImg}
            alt="Auction Website"
            className="w-full h-56 object-cover"
          />

          <div className="p-6">
            <h3 className="text-2xl font-bold mb-4">
              Auction Website
            </h3>

            <p className="text-gray-300 mb-6">
              A responsive React frontend for an online auction platform where
              users can browse products, view bids, and explore auctions.
            </p>

            <div className="flex gap-4">
              <a
                href="https://github.com/divyanshidivyanshi/auction-website"
                target="_blank"
                rel="noreferrer"
                className="bg-cyan-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-cyan-300 transition"
              >
                GitHub
              </a>

              <a
                href="https://auction-website-delta.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="border border-cyan-400 px-4 py-2 rounded-lg hover:bg-cyan-400 hover:text-black transition"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>

        {/* MERNMART */}
        <div className="bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-2 transition duration-300">
          <img
            src={mernmartImg}
            alt="MERNMART"
            className="w-full h-56 object-cover"
          />

          <div className="p-6">
            <h3 className="text-2xl font-bold mb-4">
              MERNMART
            </h3>

            <p className="text-gray-300 mb-6">
              A full-stack MERN e-commerce application featuring user
              authentication, product management, shopping cart, order placement,
              and an admin dashboard.
            </p>

            <div className="flex gap-4">
              <a
                href="https://github.com/divyanshidivyanshi/mernmart"
                target="_blank"
                rel="noreferrer"
                className="bg-cyan-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-cyan-300 transition"
              >
                GitHub
              </a>

              <a
                href="https://mernmart-frontend.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="border border-cyan-400 px-4 py-2 rounded-lg hover:bg-cyan-400 hover:text-black transition"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;