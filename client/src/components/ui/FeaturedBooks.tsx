const books = [
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
  },
  {
    title: "The Secret History",
    author: "Donna Tartt",
  },
  {
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
  },
];

export default function FeaturedBooks() {
  return (
    <section className="px-8 py-20">
      <h2 className="text-3xl font-serif text-center mb-12">
        Featured Books
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        {books.map((book) => (
          <div
            key={book.title}
            className="rounded-2xl border p-8 hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-xl font-semibold">{book.title}</h3>

            <p className="mt-2 text-gray-500">
              {book.author}
            </p>

            <button className="mt-8 text-sm font-medium hover:underline">
              View Passages →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}