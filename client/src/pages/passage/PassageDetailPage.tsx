import Navbar from "@/components/ui/Navbar";

const notes = [
  {
    name: "Sophia",
    thought:
      "I love how Austen exposes vulnerability through pride. This line feels timeless.",
  },
  {
    name: "Arjun",
    thought:
      "It's fascinating that the conflict isn't really about ego—it's about wounded dignity.",
  },
  {
    name: "Emma",
    thought:
      "I've reread this chapter five times and still discover something new.",
  },
];

export default function PassageDetailPage() {
  return (
    <>
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 md:px-8 py-16">

        <section className="grid md:grid-cols-[260px_1fr] gap-16 items-center">

          <div className="h-[380px] rounded-3xl bg-stone-200 shadow-lg border border-stone-300 flex items-center justify-center">

            <span className="font-serif text-5xl text-stone-600">
              Marginalia
            </span>

          </div>

          <div>

            <p className="uppercase tracking-[0.35em] text-sm text-gray-500">
              Jane Austen
            </p>

            <h1 className="font-serif text-5xl md:text-6xl mt-4">
              Pride and Prejudice
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-8 max-w-xl">
              One of literature's greatest explorations of love,
              pride, misunderstanding and human nature.
            </p>

            <div className="flex flex-wrap gap-8 mt-8 text-gray-500 text-sm">

              <span>4.8 Rating</span>

              <span>2.4M Readers</span>

              <span>12.5K Notes</span>

            </div>

          </div>

        </section>

        <section className="mt-20 rounded-3xl border border-stone-300 bg-stone-50 p-12">

          <p className="uppercase tracking-[0.3em] text-xs text-gray-400">
            Most Loved Passage
          </p>

          <blockquote className="mt-8 font-serif text-4xl leading-relaxed italic">
            “I could easily forgive his pride,
            if he had not mortified mine.”
          </blockquote>

          <div className="flex flex-wrap gap-4 mt-12">

            <button className="rounded-full bg-black text-white px-6 py-3 hover:scale-105 transition">
              Keep
            </button>

            <button className="rounded-full border border-stone-300 px-6 py-3 hover:bg-black hover:text-white transition">
              Love
            </button>

            <button className="rounded-full border border-stone-300 px-6 py-3 hover:bg-black hover:text-white transition">
              Insightful
            </button>

            <button className="rounded-full border border-stone-300 px-6 py-3 hover:bg-black hover:text-white transition">
              Emotional
            </button>

          </div>

        </section>

        <section className="mt-20">

          <h2 className="font-serif text-4xl">
            In the Margins
          </h2>

          <p className="mt-3 text-gray-500">
            Thoughts readers left beside this passage.
          </p>

          <div className="space-y-6 mt-10">

            {notes.map((note) => (

              <article
                key={note.name}
                className="rounded-2xl border border-stone-300 bg-white/60 p-8 hover:shadow-lg transition-all duration-300"
              >

                <div className="flex justify-between items-center">

                  <h3 className="font-semibold">
                    {note.name}
                  </h3>

                  <button className="text-sm text-gray-400 hover:text-black">
                    Appreciate
                  </button>

                </div>

                <p className="mt-5 leading-8 text-gray-700">
                  {note.thought}
                </p>

              </article>

            ))}

          </div>

        </section>

        <section className="mt-24 rounded-3xl bg-black text-white text-center p-14">

          <h2 className="font-serif text-4xl">
            Leave something in the margins.
          </h2>

          <p className="mt-6 max-w-2xl mx-auto leading-8 text-gray-300">
            Every reader notices something different.
            Join Marginalia and leave your own thoughts beside the books you love.
          </p>

          <button className="mt-10 rounded-full bg-white text-black px-8 py-3 hover:scale-105 transition">
            Join Marginalia
          </button>

        </section>

      </main>
    </>
  );
}