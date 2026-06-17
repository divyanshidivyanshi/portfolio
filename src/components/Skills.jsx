import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiMongodb, SiExpress, SiJavascript } from "react-icons/si";

function Skills() {
  const skills = [
    { name: "React", icon: <FaReact size={40} /> },
    { name: "Node.js", icon: <FaNodeJs size={40} /> },
    { name: "MongoDB", icon: <SiMongodb size={40} /> },
    { name: "Express", icon: <SiExpress size={40} /> },
    { name: "JavaScript", icon: <SiJavascript size={40} /> },
    { name: "GitHub", icon: <FaGithub size={40} /> },
  ];

  return (
    <section id="skills" className="py-24 px-10">
      <h2 className="text-4xl font-bold text-cyan-400 text-center mb-12">
        Skills
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-slate-800 p-8 rounded-xl text-center hover:scale-105 transition duration-300"
          >
            <div className="flex justify-center mb-4">
              {skill.icon}
            </div>

            <h3 className="text-xl font-semibold">
              {skill.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;