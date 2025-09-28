export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-transparent fixed w-full z-10">
      <h1 className="text-xl font-bold text-[#F5DEB3]">Tahani Portfolio</h1>
      <ul className="flex gap-8 text-[#F5DEB3] font-medium">
        <li><a href="#about" className="hover:text-orange-400">About</a></li>
        <li><a href="#experience" className="hover:text-orange-400">Experience</a></li>
        <li><a href="#projects" className="hover:text-orange-400">Projects</a></li>
        <li><a href="#contact" className="hover:text-orange-400">Contact</a></li>
      </ul>
    </nav>
  )
}
