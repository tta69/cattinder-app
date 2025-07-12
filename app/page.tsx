"use client";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowCards(true), 100);
  }, []);

  return (
    <main className="min-h-screen bg-red-50 flex flex-col items-center justify-start p-4 transition-all">
      <h1 className="text-4xl font-bold text-red-700 my-4">CatTinder</h1>
      <p className="text-lg text-gray-700 mb-6">Find the perfect match for your cat</p>

      <div className="flex flex-col gap-4 w-full max-w-md">
        {[1, 2, 3].map((num) => (
          <div
            key={num}
            className={`bg-white rounded-xl shadow-md w-full transform transition-all duration-500 ease-in-out ${
              showCards ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            } hover:shadow-lg hover:scale-[1.01]`}
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
        <button className="bg-red-600 text-white px-6 py-2 rounded-lg transition-transform transform hover:scale-105 hover:bg-red-700 shadow">
          Login
        </button>
        <button className="border border-red-600 text-red-600 px-6 py-2 rounded-lg transition-transform transform hover:scale-105 hover:bg-red-100 shadow">
          Register
        </button>
      </div>
    </main>
  );
}
