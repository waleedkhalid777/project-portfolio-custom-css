import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <div>
      <nav className="navbar bg-blue-400 bg-opacity-60 text-white p-4 font-sans backdrop-blur-lg shadow-md">
        <div className="nav-container flex items-center justify-between">
          {/* Logo */}
          <Link href="#" className="logo text-2xl font-bold text-white no-underline">
         
            MyPortfolio
          </Link>

          {/* Mobile menu toggle */}
          <input type="checkbox" id="menu-toggle" className="menu-toggle hidden peer" aria-label="Toggle menu" />
          <label
            htmlFor="menu-toggle"
            className="menu-icon text-2xl text-white cursor-pointer peer-checked:block hidden md:hidden"
            aria-label="Menu icon"
          >
            &#9776; {/* Hamburger icon */}
          </label>

          {/* Menu items */}
          <ul className="nav-links list-none flex gap-16 text-white peer-checked:flex flex-col md:flex-row md:gap-18">
            <li>
              <Link href="#Home" className="text-white no-underline hover:text-gray-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className="text-white no-underline hover:text-gray-400">
                About
              </Link>
            </li>
            <li>
              <Link href="#contact" className="text-white no-underline hover:text-gray-400">
                Contact
              </Link>
            </li>
            <li>
              <Link href="#projects" className="text-white no-underline hover:text-gray-400">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#skills" className="text-white no-underline hover:text-gray-400">
                Skills
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
