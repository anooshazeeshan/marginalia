import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6">

      <Link
        to="/"
        className="flex items-center gap-2 text-2xl font-serif font-semibold hover:opacity-80 transition"
      >
        ⋆｡°✩ Marginalia
      </Link>

      <div className="flex items-center gap-10 text-sm">

        <Link
          to="/feed"
          className="hover:opacity-60 transition"
        >
          Explore
        </Link>

        <button className="hover:opacity-60 transition">
          About
        </button>

        <Link
          to="/login"
          className="border rounded-full px-5 py-2 hover:bg-black hover:text-white transition-all duration-300"
        >
          Sign In
        </Link>

      </div>

    </nav>
  );
}