export default function Stats() {
  return (
    <section className="py-20 px-8">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 text-center">

        <div>
          <h2 className="text-5xl font-bold">10K+</h2>
          <p className="mt-3 text-gray-500">Reader Notes</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold">4K+</h2>
          <p className="mt-3 text-gray-500">Books Discussed</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold">25K+</h2>
          <p className="mt-3 text-gray-500">Highlights Shared</p>
        </div>

      </div>
    </section>
  );
}