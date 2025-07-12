"use client";
import { useState } from "react";

export default function NewKennelPage() {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [organization, setOrganization] = useState("");
  const [membershipId, setMembershipId] = useState("");
  const [document, setDocument] = useState<File | null>(null);

  const handleSubmit = () => {
    alert(`Kennel létrehozva: ${name}`);
    // TODO: küldés adatbázisba / API-be
  };

  return (
    <main className="min-h-screen bg-red-50 p-4">
      <div className="bg-white p-6 rounded-xl shadow max-w-md mx-auto">
        <h1 className="text-xl font-bold text-red-600 mb-4">Új kennel létrehozása</h1>

        <label className="block mb-2 text-sm font-medium">Kennel neve</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
          placeholder="Pl. Velvet Whiskers"
        />

        <label className="block mb-2 text-sm font-medium">Ország</label>
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
          placeholder="Magyarország"
        />

        <label className="block mb-2 text-sm font-medium">Weboldal (opcionális)</label>
        <input
          type="url"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
          placeholder="https://example.com"
        />

        <label className="block mb-2 text-sm font-medium">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />

        <label className="block mb-2 text-sm font-medium">Telefonszám</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />

        <label className="block mb-2 text-sm font-medium">Tenyésztő szervezet</label>
        <input
          type="text"
          value={organization}
          onChange={(e) => setOrganization(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
          placeholder="WCF, FIFé, TICA stb."
        />

        <label className="block mb-2 text-sm font-medium">Tagsági szám</label>
        <input
          type="text"
          value={membershipId}
          onChange={(e) => setMembershipId(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />

        <label className="block mb-2 text-sm font-medium">Igazoló dokumentum feltöltése</label>
        <input
          type="file"
          accept=".pdf,.jpg,.png"
          onChange={(e) => setDocument(e.target.files?.[0] || null)}
          className="w-full mb-6"
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
        >
          Kennel mentése
        </button>
      </div>
    </main>
  );
}
