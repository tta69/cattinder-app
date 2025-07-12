export default function HomePage() {
  return (
    <main className="min-h-screen bg-red-50 flex flex-col items-center justify-start p-4">
      <h1 className="text-4xl font-bold text-red-700 my-4">CatTinder</h1>
      <p className="text-lg text-gray-700 mb-6">Find the perfect match for your cat</p>

      <div className="flex gap-4 overflow-x-auto w-full max-w-md pb-4">
        {[1, 2, 3].map((num) => (
          <div
            key={num}
            className="flex-shrink-0 bg-white rounded-xl shadow-md w-64 transform rotate-[${(num % 2 === 0) ? "-3deg" : "3deg"}]"
          >
            <img
              src={`/cat${num}.jpg`}
              alt={`Cat ${num}`}
              className="w-full h-48 object-cover rounded-t-xl"
            />
            <div className="p-3">
              <h2 className="text-xl font-semibold text-red-600">Mittens {num}</h2>
              <p className="text-sm text-gray-500">Persian • Female • 2 yrs</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex gap-4">
        <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition">Login</button>
        <button className="border border-red-600 text-red-600 px-6 py-2 rounded-lg hover:bg-red-50 transition">Register</button>
      </div>
    </main>
  );
}
