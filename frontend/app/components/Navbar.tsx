import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white font-bold text-xl">
          Propitious Labs
        </Link>
        <div>
          <Link href="/about" className="text-gray-300 hover:text-white mr-4">
            About
          </Link>
          <Link
            href="/projects"
            className="text-gray-300 hover:text-white mr-4"
          >
            Projects
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-white">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
