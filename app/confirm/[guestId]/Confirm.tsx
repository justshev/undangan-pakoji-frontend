"use client";
import { useState, useEffect } from "react";
import {
  useRouter,
  useParams,
  useSearchParams,
  usePathname,
} from "next/navigation";
import { Card } from "@/components/ui/card";
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
export default function ConfirmPage() {
  const [count, setCount] = useState<null | number>(null);
  const [guestName, setGuestName] = useState<string | null>(null);
  const router = useRouter();
  const params = useParams();
  const qs = useSearchParams();
  const pathname = usePathname();
  const guestIdFromPath = (params?.guestId ?? params?.id) as string | undefined;
  const guestId = guestIdFromPath ?? (qs.get("guestId") || undefined);

  useEffect(() => {
    console.log({
      pathname,
      params,
      guestIdFromPath,
      guestId,
      qs: qs.toString(),
    });
  }, [pathname, params, qs, guestIdFromPath, guestId]);

  const fetchGuestName = async (id: string) => {
    const res = await fetch(`${BACKEND_URL}/api/guests/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const { guest } = await res.json();

    setGuestName(guest?.name);
  };

  fetchGuestName(guestId as string);

  const handleSubmit = async () => {
    if (!guestId) {
      alert("Guest ID tidak ditemukan. Pastikan URL berupa /confirm/<ID>.");
      return;
    }

    if (!count || count > 4) {
      alert("Kehadiran hanya boleh maksimal berjumlah 4 orang.");
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
    <div className="flex items-center justify-center min-h-screen ">
      <Card className="text-center p-6 bg-card/80">
        <h1 className="text-xl font-bold">Konfirmasi Kehadiran</h1>
        <p className="text-sm text-gray-500">
          Guest ID: {guestId ?? "(belum terdeteksi)"}
        </p>
        <p className="text-sm text-gray-500">Atas nama: {guestName}</p>

        <input
          type="number"
          min={1}
          value={count ? count : ""}
          onChange={(e) => setCount(parseInt(e.target.value))}
          placeholder="Masukkan jumlah kehadiran"
          className="border p-2 mt-4"
        />
        <button
          onClick={handleSubmit}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Konfirmasi
        </button>
      </Card>
    </div>
  );
}
