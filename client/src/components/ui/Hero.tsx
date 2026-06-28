import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center flex-1 px-6">
      <p className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-4">
        A home for readers
      </p>

      <h1 className="text-5xl md:text-7xl font-bold leading-tight max-w-4xl">
        Books were never meant to be read alone.
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-gray-600 leading-8">
        Discover what others noticed, leave thoughts in the margins, and turn
        every book into a shared conversation.
      </p>

      <div className="mt-10 flex gap-4">
        <Link
          to="/feed"
          className="bg-black text-white px-7 py-3 rounded-full hover:scale-105 transition-all duration-300"
        >
          Explore Marginalia
        </Link>

        <button className="border border-black px-7 py-3 rounded-full hover:bg-black hover:text-white transition-all duration-300">
          How It Works
        </button>
      </div>

      <p className="mt-6 text-sm text-gray-500">
        No ads. No distractions. Just readers.
      </p>
    </section>
  );
}