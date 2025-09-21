"use client";
import { useState } from "react";
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "";
export default function AddGuestPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [totalInvited, setTotalInvited] = useState<string>("1");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch(`${BACKEND_URL}/api/guests`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        totalInvited: Math.max(1, parseInt(totalInvited || "1", 10) || 1),
      }),
    });

    const data = await res.json();
    if (data.success) {
      alert("Guest berhasil ditambahkan ✅");
      setName("");
      setEmail("");
      setTotalInvited("1");
    } else {
      alert("Error: " + data.error);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Tambah Guest Baru</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Nama"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full border p-2"
        />
        <input
          type="email"
          placeholder="Email (opsional)"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-2"
        />
        <input
          type="number"
          min={1}
          placeholder="Total Undangan"
          value={totalInvited}
          onChange={(e) => setTotalInvited(e.target.value)}
          required
          className="w-full border p-2"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          Simpan
        </button>
      </form>
    </div>
  );
}
