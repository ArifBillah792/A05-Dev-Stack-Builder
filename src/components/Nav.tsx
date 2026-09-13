import { useState } from "react";
import logo from "../assets/logo-text.png";
import hamburgerIcon from "../assets/hamburger.png";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative sticky top-0 z-50 w-full flex items-center justify-between px-8 py-4 bg-white border-b border-[#f1f5f9]">
      <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        <img src={hamburgerIcon} alt="Menu" className="h-6 w-6" />
      </button>

      <img
        src={logo}
        alt="Dev Stack logo"
        className="h-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:static md:left-auto md:top-auto md:translate-x-0 md:translate-y-0"
      />

      <ul className="hidden md:flex gap-4 items-center font-sans text-[15px] font-gray-[300px]">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#technologies">Technologies</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="flex gap-2 items-center font-sans font-bold">
        <button className="btn btn-ghost btn-md hidden md:inline-flex">
          Sign in
        </button>
        <button className="btn btn-active btn-secondary rounded-full">
          Sign Up
        </button>
      </div>

      {menuOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-8 py-4 border-t border-[#f1f5f9] absolute top-full left-0 w-full bg-white">
          <li>
            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#technologies" onClick={() => setMenuOpen(false)}>
              Technologies
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setMenuOpen(false)}>
              Projects
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </li>
          <li>
            <a href="#signin" onClick={() => setMenuOpen(false)}>
              Sign in
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Nav;
