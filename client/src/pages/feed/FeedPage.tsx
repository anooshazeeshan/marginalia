import Navbar from "@/components/ui/Navbar";
import { Link } from "react-router-dom";

const books = [
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    readers: "1.2k readers",
  },
  {
    title: "The Secret History",
    author: "Donna Tartt",
    readers: "820 readers",
  },
  {
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    readers: "940 readers",
  },
];

export default function FeedPage() {
  return (
    <>
      <Navbar />

      <main className="max-w-6xl mx-auto px-8 py-16">
        <h1 className="text-5xl font-serif mb-3">
          Explore Books
        </h1>

        <p className="text-gray-500 mb-12">
          Discover books readers are discussing right now.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {books.map((book) => (
            <Link
              key={book.title}
              to="/passages/1"
              className="border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 cursor-pointer block"
            >
              <div className="h-56 rounded-xl bg-stone-200 mb-6"></div>

              <h2 className="text-2xl font-semibold">
                {book.title}
              </h2>

              <p className="mt-2 text-gray-500">
                {book.author}
              </p>

              <p className="mt-8 text-sm text-gray-400">
                {book.readers}
              </p>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}