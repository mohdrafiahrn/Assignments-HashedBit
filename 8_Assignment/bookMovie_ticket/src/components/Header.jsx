import React from "react";

function Header() {
  return (
    <header className="w-screen text-white py-4 shadow-md">
      <div className="flex items-center justify-between px-5 md:px-10">
        {/* Logo */}
        <span className="text-2xl font-bold">🎬BookToday</span>

        {/* Search Box */}
        <div className="flex-grow mx-10">
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-full md:w-[400px] p-2 rounded-md text-white outline-none"
          />
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="hidden md:flex space-x-6">
            <li><a href="/" className="hover:text-gray-400">Home</a></li>
            <li><a href="#" className="hover:text-gray-400">About</a></li>
            <li><a href="#" className="hover:text-gray-400">Services</a></li>
            <li><a href="#" className="hover:text-gray-400">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
