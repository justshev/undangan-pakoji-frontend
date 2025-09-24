/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { JSX, useEffect, useState } from "react";
import InfoCard from "./components/InfoCard";
import { User, UserCheck, UserX } from "lucide-react";
import AttendanceTable from "./components/AttendanceTable";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export default function AdminPage() {
  const [guests, setGuests] = useState([]);

  useEffect(() => {
    fetch(`${BACKEND_URL}/api/guests`)
      .then((res) => res.json())
      .then(setGuests);
  }, []);

  const arrivalTimeLength = guests?.filter(
    (item: any) => item.arrivalTime
  ).length;

  const amountOfArrived = ((arrivalTimeLength / guests.length) * 100).toFixed();
  const notArrivedLength = guests.length - arrivalTimeLength;
  const amountNotArrived = ((notArrivedLength / guests.length) * 100).toFixed();

  type InfoCardContent = {
    title: string;
    description: string;
    icon: JSX.Element;
    amount: number;
  };

  const infoCardContent: InfoCardContent[] = [
    {
      title: "Sudah Hadir",
      icon: <UserCheck className="w-5 h-5 text-green-600" />,
      description: `${amountOfArrived}% Dari total Tamu`,
      amount: arrivalTimeLength,
    },
    {
      title: "Belum Hadir",
      icon: <UserX className="w-5 h-5 text-neutral-500" />,
      description: `${amountNotArrived}% Dari total Tamu`,
      amount: notArrivedLength,
    },
    {
      title: "Total Tamu",
      icon: <User className="w-5 h-5 text-blue-600" />,
      description: "Terdaftar dalam sistem",
      amount: guests.length,
    },
  ];

  return (
    <div className="p-6 ">
      <header>
        <h1 className="text-2xl font-bold">Daftar Kehadiran</h1>
        <p className="text-sm md:text-base text-muted-foreground text-pretty">
          Pantau konfirmasi dan waktu kedatangan tamu
        </p>
        <div className="grid md:grid-cols-3 grid-cols-2 my-4 gap-4">
          {infoCardContent.map((item: InfoCardContent, idx: number) => (
            <InfoCard {...item} idx={idx} key={idx} />
          ))}
        </div>
      </header>
      <AttendanceTable data={guests} />
      {/* <table className="table-auto w-full mt-6 border">
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
      </table> */}
    </div>
  );
}
