import Navbar from "@/components/ui/Navbar";

export default function PassageDetailPage() {
  return (
    <>
      <Navbar />

      <main className="max-w-4xl mx-auto px-8 py-16">

        <p className="text-sm uppercase tracking-widest text-gray-500">
          Jane Austen
        </p>

        <h1 className="text-5xl font-serif mt-3">
          Pride and Prejudice
        </h1>

        <p className="mt-6 text-lg leading-9 text-gray-700">
          "I could easily forgive his pride, if he had not mortified mine."
        </p>

        <div className="mt-12 border-l-4 border-black pl-6">
          <p className="italic text-gray-700">
            One reader wrote:
          </p>

          <p className="mt-4 leading-8">
            Pride is rarely about confidence. It often hides insecurity.
            Austen somehow understood modern relationships two centuries ago.
          </p>
        </div>

        <button className="mt-12 bg-black text-white px-6 py-3 rounded-full hover:scale-105 transition-all duration-300">
          Leave Your Own Note
        </button>

      </main>
    </>
  );
}