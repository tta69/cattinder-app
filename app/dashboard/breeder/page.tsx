"use client";

export default function BreederDashboard() {
  return (
    <main className="min-h-screen bg-red-50 p-4 flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-red-700">Üdvözlünk, CatTinder Tenyésztő!</h1>

      {/* KENNEL BLOKK */}
      <section className="bg-white p-4 rounded-xl shadow">
        <h2 className="text-xl font-semibold text-red-600 mb-2">Kenneljeim</h2>
        <p className="text-sm text-gray-600 mb-3">Még nincs kennel létrehozva.</p>
        <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">
          Új kennel létrehozása
        </button>
      </section>

      {/* MACSKÁK BLOKK */}
      <section className="bg-white p-4 rounded-xl shadow">
        <h2 className="text-xl font-semibold text-red-600 mb-2">Macskáim</h2>
        <p className="text-sm text-gray-600 mb-3">Még nincs macska feltöltve.</p>
        <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">
          Új macska feltöltése
        </button>
      </section>

      {/* KÉSŐBB: Párosítási rész */}
      <section className="bg-white p-4 rounded-xl shadow">
        <h2 className="text-xl font-semibold text-red-600 mb-2">Párosításaim</h2>
        <p className="text-sm text-gray-600">Ez a szakasz akkor aktiválódik, ha macskáid már részt vesznek párosításban.</p>
      </section>
    </main>
  );
}
