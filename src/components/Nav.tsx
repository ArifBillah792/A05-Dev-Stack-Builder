import React from "react";

import logo from "../assets/logo-text.png";

const Nav = () => {
  return (
    <nav className=" w-full flex items-center justify-between px-8 py-4 
    bg-white border-b border-[#f1f5f9]">
      
      <div className="container mx-auto flex justify-between">
        <img src={logo} alt="Dev Stack logo" className="h-8" />

        <ul className="flex gap-4 items-center font-sans text-[15px] font-gray-[300px]">
          <li>Home</li>
          <li>Technologies</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <div className="flex gap-2 items-center font-sans font-bold ">
          <button className="btn btn-ghost btn-md">Sign in</button>
          <button className="btn btn-active btn-secondary rounded-full">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

// btn btn-primary btn-sm rounded-full
