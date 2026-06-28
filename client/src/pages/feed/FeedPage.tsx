import Navbar from "@/components/ui/Navbar";
import { Link } from "react-router-dom";

const books = [
  {
    id: 1,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    color: "bg-rose-100",
  },
  {
    id: 2,
    title: "The Secret History",
    author: "Donna Tartt",
    color: "bg-stone-200",
  },
  {
    id: 3,
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    color: "bg-emerald-100",
  },
];

export default function FeedPage() {
  return (
    <>
      <Navbar />

      <main className="max-w-6xl mx-auto px-8 py-16">
        <h1 className="text-5xl font-serif">
          Explore Books
        </h1>

        <p className="mt-4 text-gray-500">
          Every highlighted sentence begins a conversation.
        </p>

        <div className="grid md:grid-cols-3 gap-10 mt-16">
          {books.map((book) => (
            <Link
              key={book.id}
              to="/passages/1"
              className="group"
            >
              <div
                className={`${book.color} h-80 rounded-3xl shadow-md group-hover:-translate-y-2 transition-all duration-300 flex items-end p-8`}
              >
                <div>
                  <h2 className="text-3xl font-serif">
                    {book.title}
                  </h2>

                  <p className="mt-3">
                    {book.author}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}