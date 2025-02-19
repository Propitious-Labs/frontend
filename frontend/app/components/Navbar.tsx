import Link from "next/link";
import Image from "next/image";
import logo from "/public/propitious logo.png";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {" "}
        {/* Vertical on small screens */}
        <Link href="/" className="flex items-center mb-4 md:mb-0">
          {" "}
          {/* Margin adjusted for responsiveness */}
          <Image src={logo} alt="Propitious Labs Logo" width={40} height={40} />
          <span className="text-white font-bold text-xl ml-2">
            Propitious Labs
          </span>
        </Link>
        <div className="flex flex-col md:flex-row">
          {" "}
          {/* Vertical menu on small screens */}
          <Link
            href="/about"
            className="text-gray-300 hover:text-white mr-4 mb-2 md:mb-0"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="text-gray-300 hover:text-white mr-4 mb-2 md:mb-0"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="text-gray-300 hover:text-white mb-2 md:mb-0"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
