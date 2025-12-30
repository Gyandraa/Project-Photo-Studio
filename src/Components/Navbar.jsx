import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/20 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto  py-4 flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-white font-serif">
          Foto Studio
        </h1>

        <div className="hidden md:flex space-x-8 text-white font-semibold text-lg">
          <Link className="hover:text-teal-400 transition" to="/">
            Home
          </Link>
          <Link className="hover:text-teal-400 transition" to="/review">
            Review
          </Link>
          <Link className="hover:text-teal-400 transition" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
