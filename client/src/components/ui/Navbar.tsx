import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-6">

      <Link
        to="/"
        className="text-2xl md:text-3xl font-serif font-semibold tracking-tight"
      >
        ⋆｡°✩ Marginalia
      </Link>

      <div className="flex items-center gap-4 md:gap-8 text-sm">

        <Link
          to="/feed"
          className="hover:opacity-60 transition"
        >
          Explore
        </Link>

        <button className="border border-ink rounded-full px-5 py-2 hover:bg-black hover:text-white transition-all duration-300">
          Sign In
        </button>

      </div>

    </nav>
  );
}
