import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import profileImg from "../assets/profile.jpeg";
function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-5 pt-24">
      <motion.h1 className="text-7xl font-bold mb-4"
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  
>
  <div className="mb-8">
  <img
    src={profileImg}
    alt="Profile"
    className="w-44 h-44 rounded-full object-cover border-4 border-cyan-400 shadow-lg"
  />
</div>
        Hi, I'm
        <span className="text-cyan-400"> Divyanshi</span>
      </motion.h1>

      <TypeAnimation
        sequence={[
           "Frontend Developer",
    2000,
          "Full Stack Developer",
          2000,
          "React Developer",
          2000,
          "MERN Stack Developer",
          2000,
          "MCA Student",
          2000,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        className="text-2xl text-gray-300"
      />


      <p className="mt-6 text-gray-400 max-w-2xl">
        I build modern web applications using React, Node.js,
        Express and MongoDB.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
 <a
  href="#projects"
  className="bg-cyan-400 text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
>
  View Projects
</a>

  <a
  href="#contact"
  className="border border-cyan-400 px-6 py-3 rounded-lg hover:bg-cyan-400 hover:text-black transition"
>
  Contact Me
</a>

  <a
    href="/divyanshi resume.pdf"
    download
    className="border border-green-400 px-6 py-3 rounded-lg hover:bg-green-400 hover:text-black transition"
  >
    Download Resume
  </a>
</div>

    </section>
  );
}

export default Hero;