"use client";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    alert("Bejelentkezés: " + email);
  };

  return (
    <main className="min-h-screen bg-red-50 flex items-center justify-center p-4">
      <div className="bg-white shadow-xl rounded-xl p-6 w-full max-w-sm">
        <h1 className="text-2xl font-bold text-red-600 mb-4 text-center">Bejelentkezés</h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-3 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Jelszó"
          className="w-full p-3 mb-4 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
        >
          Bejelentkezés
        </button>

        <p className="text-sm text-center mt-4">
          Nincs még fiókod?{" "}
          <a href="/register" className="text-red-600 hover:underline">
            Regisztrálj!
          </a>
        </p>
      </div>
    </main>
  );
}
