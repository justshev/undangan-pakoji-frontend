/* eslint-disable @typescript-eslint/no-explicit-any */
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { useState } from "react";

const AttendanceTable = ({ data }: any) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = data.slice(startIndex, startIndex + itemsPerPage);

  const handleNext = () => {
    setCurrentPage((prevState) => prevState + 1);
  };
  const handlePrev = () => {
    setCurrentPage((prevState) => prevState - 1);
  };

  return (
    <Card>
      <div className="rounded-md border">
        <Table className="zebra-stripes ">
          <TableHeader>
            <TableRow className="">
              <TableHead className="font-semibold">ID</TableHead>
              <TableHead className="font-semibold">Nama</TableHead>
              <TableHead className="font-semibold">
                Jumlah Dikonfirmasi
              </TableHead>
              <TableHead className="font-semibold">Status</TableHead>
              <TableHead className="font-semibold">Waktu Datang</TableHead>
              <TableHead className="font-semibold">Link Undangan</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentData.map((item: any, idx: number) => (
              <TableRow key={idx}>
                <TableCell>{idx + 1}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.totalInvited}</TableCell>
                <TableCell>
                  <Badge
                    className={`${
                      item.isArrived
                        ? "text-white bg-green-400"
                        : "text-slate-400 bg-slate-800"
                    }`}
                  >
                    {item.isArrived ? "Hadir" : "Belum Hadir"}
                  </Badge>
                </TableCell>
                <TableCell>
                  {new Date(item.arrivalTime).toLocaleTimeString() ?? "-"}
                </TableCell>
                <TableCell className="cursor-pointer">
                  <Link
                    href={`http://localhost:3000/invitations/${item.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Link
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between px-4 py-3">
        <Button
          variant="outline"
          onClick={handlePrev}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <Button
          variant="outline"
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
    </Card>
  );
};

export default AttendanceTable;
