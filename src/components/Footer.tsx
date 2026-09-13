import React from "react";

import logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer>
      {/* brand block + 3 link groups will go here */}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-1 px-8 py-12">
        {/* brand block */}

        <div>
          <img src={logo} alt="Footer logo" className="h-8" />

          <p className="text-sm text-gray-500">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>

          <div className="flex gap-4 text-sm text-gray-600 mt-2">
            <a href="#">GitHub</a>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>

        {/* link group block */}

        <div className="flex flex-col gap-2">
          {/* Product Group */}

          <h4 className="font-bold text-gray-900 text-sm">PRODUCT</h4>

          <a href="#" className="text-sm text-gray-500">
            Home
          </a>
          <a href="#" className="text-sm text-gray-500">
            Technologies
          </a>
          <a href="#" className="text-sm text-gray-500">
            Projects
          </a>
        </div>

        <div className="flex flex-col gap-2">
          {/* Company group */}

          <h4 className="font-bold text-gray-900 text-sm">COMPANY</h4>

          <a href="#" className="text-sm text-gray-500">
            About
          </a>
          <a href="#" className="text-sm text-gray-500">
            Contact
          </a>
          <a href="#" className="text-sm text-gray-500">
            Careers
          </a>
        </div>

        <div className="flex flex-col gap-2">
          {/* Legal group */}

          <h4 className="font-bold text-gray-900 text-sm">LEGAL</h4>
          <a href="#" className="text-sm text-gray-500">
            Privacy Policy
          </a>
          <a href="#" className="text-sm text-gray-500">
            Terms of Service
          </a>
        </div>
      </div>

      {/* copyright + bottom links will go here */}

      <div
        className="border-t border-[#f1f5f9] px-8 py-4 
      flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-gray-400"
      >
        <p>© 2026 Dev Stack. All rights reserved.</p>

        <div className="flex gap-4">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
