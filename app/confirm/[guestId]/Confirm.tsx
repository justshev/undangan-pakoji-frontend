"use client";
import { useState, useEffect } from "react";
import {
  useRouter,
  useParams,
  useSearchParams,
  usePathname,
} from "next/navigation";
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
export default function ConfirmPage() {
  const [count, setCount] = useState(1);
  const router = useRouter();
  const params = useParams(); // path params
  const qs = useSearchParams(); // query string
  const pathname = usePathname(); // debug
  const guestIdFromPath = (params?.guestId ?? params?.id) as string | undefined;
  const guestId = guestIdFromPath ?? (qs.get("guestId") || undefined); // fallback jika ada rewrite

  useEffect(() => {
    console.log({
      pathname,
      params,
      guestIdFromPath,
      guestId,
      qs: qs.toString(),
    });
  }, [pathname, params, qs, guestIdFromPath, guestId]);

  const handleSubmit = async () => {
    if (!guestId) {
      alert("Guest ID tidak ditemukan. Pastikan URL berupa /confirm/<ID>.");
      return;
    }
    const res = await fetch(`${BACKEND_URL}/api/guests/confirm/${guestId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ confirmedGuests: count }),
    });
    const data = await res.json();
    if (data.qrCodeToken)
      router.push(`/qrcode/${guestId}?token=${data.qrCodeToken}`);
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Konfirmasi Kehadiran</h1>
      <p className="text-sm text-gray-500">
        Guest ID: {guestId ?? "(belum terdeteksi)"}
      </p>
      <input
        type="number"
        min={1}
        value={count}
        onChange={(e) => setCount(parseInt(e.target.value))}
        className="border p-2 mt-4"
      />
      <button
        onClick={handleSubmit}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Konfirmasi
      </button>
    </div>
  );
}
