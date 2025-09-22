/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export default function AdminPage() {
  const [guests, setGuests] = useState([]);

  useEffect(() => {
    fetch(`${BACKEND_URL}/api/guests`)
      .then((res) => res.json())
      .then(setGuests);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Daftar Kehadiran</h1>
      <table className="table-auto w-full mt-6 border">
        <thead>
          <tr>
            <th>Nama</th>
            <th>Jumlah Dikonfirmasi</th>
            <th>Status</th>
            <th>Waktu Datang</th>
            <th>Link Invitations</th>
          </tr>
        </thead>
        <tbody>
          {guests.map((g: any) => (
            <tr key={g.id} className="border">
              <td>{g.name}</td>
              <td>{g.confirmedGuests}</td>
              <td>{g.isArrived ? "Hadir" : "Belum Hadir"}</td>
              <td>
                {g.arrivalTime
                  ? new Date(g.arrivalTime).toLocaleTimeString()
                  : "-"}
              </td>
              <td>
                <a
                  href={`${process.env.NEXT_PUBLIC_FRONTEND_URL}/confirm/${g.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Link
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
