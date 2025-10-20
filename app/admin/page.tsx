/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { JSX } from "react";
import InfoCard from "./components/InfoCard";
import { User, UserCheck, UserX } from "lucide-react";
import AttendanceTable from "./components/AttendanceTable";
import useGetGuests from "@/hooks/useGetGuests";

export default function AdminPage() {
  const { data, isLoading } = useGetGuests();
  const safeData = Array.isArray(data) ? data : [];

  const arrivalTimeLength = safeData?.filter(
    (item: any) => item.arrivalTime
  ).length;

  const amountOfArrived = (
    (arrivalTimeLength / safeData.length) *
    100
  ).toFixed();
  const notArrivedLength = safeData.length - arrivalTimeLength;
  const amountNotArrived = (
    (notArrivedLength / safeData.length) *
    100
  ).toFixed();

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
      amount: safeData.length,
    },
  ];

  return (
    <div className="p-6">
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
      {isLoading ? <p>Loading...</p> : <AttendanceTable data={safeData} />}
    </div>
  );
}
