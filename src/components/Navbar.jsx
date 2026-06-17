function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center px-10 py-5 backdrop-blur-md bg-white/10 border-b border-white/10 mb-10">
      <h1 className="text-3xl font-bold text-cyan-400">
        Divyanshi
      </h1>

      <ul className="flex gap-8 text-lg">
        <li className="cursor-pointer hover:text-cyan-400">
          <a href="#about">
    About
  </a>
        </li>

       <li className="cursor-pointer hover:text-cyan-400">
  <a href="#skills">Skills</a>
</li>

       <li className="cursor-pointer hover:text-cyan-400">
  <a href="#projects">Projects</a>
</li>

        <li className="cursor-pointer hover:text-cyan-400">
  <a href="#contact">Contact</a>
</li>
      </ul>
    </nav>
  );
}

export default Navbar;