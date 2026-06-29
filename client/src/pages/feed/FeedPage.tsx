import Navbar from "@/components/ui/Navbar";
import { Link } from "react-router-dom";

const books = [
  {
    id: 1,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    color: "bg-stone-200",
    readers: "2.4M Readers",
  },
  {
    id: 2,
    title: "The Secret History",
    author: "Donna Tartt",
    color: "bg-neutral-300",
    readers: "890K Readers",
  },
  {
    id: 3,
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    color: "bg-stone-300",
    readers: "1.3M Readers",
  },
];

export default function FeedPage() {
  return (
    <>
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 md:px-8 py-16">

        <h1 className="font-serif text-5xl">
          Explore Books
        </h1>

        <p className="mt-4 text-gray-500 max-w-xl leading-8">
          Every highlighted sentence begins a conversation.
          Discover books through the thoughts readers left behind.
        </p>

        <div className="grid md:grid-cols-3 gap-10 mt-16">

          {books.map((book) => (

            <Link
              key={book.id}
              to="/passages/1"
              className="group"
            >

              <article
                className={`${book.color} rounded-3xl border border-stone-300 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300`}
              >

                <div className="h-80 flex flex-col justify-end p-8">

                  <p className="uppercase tracking-[0.25em] text-xs text-gray-500">
                    Classic Literature
                  </p>

                  <h2 className="mt-4 font-serif text-3xl leading-tight">
                    {book.title}
                  </h2>

                  <p className="mt-3 text-gray-700">
                    {book.author}
                  </p>

                </div>

                <div className="bg-white/50 border-t border-stone-300 px-8 py-5 flex justify-between items-center text-sm">

                  <span className="text-gray-500">
                    {book.readers}
                  </span>

                  <span className="font-medium group-hover:translate-x-1 transition">
                    Read →
                  </span>

                </div>

              </article>

            </Link>

          ))}

        </div>

      </main>

    </>
  );
}