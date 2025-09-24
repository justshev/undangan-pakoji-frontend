"use client";
import { QRCodeCanvas } from "qrcode.react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
const PASSCODE = process.env.NEXT_PUBLIC_QR_PASSCODE || "1234";

export default function QRCodePage() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [input, setInput] = useState("");
  const [authorized, setAuthorized] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (input === PASSCODE) {
      setAuthorized(true);
      setError(null);
    } else {
      setError("Passcode salah");
    }
  };

  if (!authorized) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center p-6">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-sm rounded-lg border p-6 shadow-sm"
        >
          <h1 className="mb-4 text-lg font-semibold">Masukkan Passcode</h1>
          <input
            type="password"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring"
            placeholder="Contoh: 1234"
            required
          />
          {error && (
            <p className="mt-2 text-sm text-red-600" role="alert">
              {error}
            </p>
          )}
          <button
            type="submit"
            className="mt-4 w-full rounded-md bg-black px-4 py-2 text-white hover:opacity-90"
          >
            Lanjutkan
          </button>
        </form>
      </div>
    );
  }

  if (!token) return <p>QR Code tidak ditemukan</p>;

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-xl font-bold mb-4">QR Code Kehadiran</h1>
      <QRCodeCanvas
        value={`${BACKEND_URL}/api/guests/validate/${token}`}
        size={200}
      />
      <p className="mt-4">Tunjukkan QR ini saat check-in</p>
    </div>
  );
}
