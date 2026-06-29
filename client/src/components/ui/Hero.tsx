import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center flex-1 px-6 py-24">

      <p className="uppercase tracking-[0.35em] text-sm text-gray-500 mb-5">
        A home for readers
      </p>

      <h1 className="font-serif text-5xl md:text-7xl leading-tight max-w-4xl">
        Books were never meant
        <br />
        to be read alone.
      </h1>

      <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-600">
        Discover what others noticed, leave thoughts in the margins,
        and turn every book into a shared conversation.
      </p>

      <div className="mt-12 flex flex-col sm:flex-row gap-4">

        <Link
          to="/feed"
          className="rounded-full bg-black text-white px-8 py-3 hover:scale-105 transition-all duration-300"
        >
          Explore Marginalia
        </Link>

        <button className="rounded-full border border-ink px-8 py-3 hover:bg-black hover:text-white transition-all duration-300">
          How It Works
        </button>

      </div>

      <p className="mt-8 text-sm text-gray-500 italic">
        No ads. No distractions. Just readers.
      </p>

    </section>
  );
}