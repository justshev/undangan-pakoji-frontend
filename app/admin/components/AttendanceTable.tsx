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
import { useEffect, useMemo, useState } from "react";
import CopyButton from "./CopyButton";
import SearchInput from "./SearchInput";

type SortDirection = "asc" | "desc";

type Guest = {
  id: string;
  name: string;
  totalInvited?: number;
  confirmedGuests?: number;
  isArrived?: boolean;
  arrivalTime?: string | Date | null;
};

function useDebouncedValue<T>(value: T, delayMs = 300) {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delayMs);
    return () => clearTimeout(timer);
  }, [value, delayMs]);
  return debouncedValue;
}

const AttendanceTable = ({ data }: { data: Guest[] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [nameSortDirection, setNameSortDirection] =
    useState<SortDirection>("asc");
  const [searchQuery, setSearchQuery] = useState("");

  const debouncedSearchQuery = useDebouncedValue(searchQuery, 300);

  const FRONTEND_URL =
    process.env.NEXT_PUBLIC_FRONTEND_URL ?? "http://localhost:3000";
  const itemsPerPage = 10;

  // 1) Filter by search (name, id, status)
  const filteredGuests = useMemo(() => {
    const source: Guest[] = Array.isArray(data) ? data : [];
    if (!debouncedSearchQuery.trim()) return source;

    const normalizedQuery = debouncedSearchQuery.trim().toLowerCase();
    return source.filter((guest) => {
      const nameText = (guest.name ?? "").toLowerCase();
      const idText = (guest.id ?? "").toLowerCase();
      const statusText = guest.isArrived ? "hadir" : "belum hadir";

      return (
        nameText.includes(normalizedQuery) ||
        idText.includes(normalizedQuery) ||
        statusText.includes(normalizedQuery)
      );
    });
  }, [data, debouncedSearchQuery]);

  // 2) Sort
  const sortedGuests = useMemo(() => {
    const guests = [...filteredGuests];
    guests.sort((a, b) => {
      const nameA = (a?.name ?? "").toString();
      const nameB = (b?.name ?? "").toString();
      const compare = nameA.localeCompare(nameB, "id", { sensitivity: "base" });
      return nameSortDirection === "asc" ? compare : -compare;
    });
    return guests;
  }, [filteredGuests, nameSortDirection]);

  // 3) Pagination
  const totalPages = Math.max(1, Math.ceil(sortedGuests.length / itemsPerPage));
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentPageData = sortedGuests.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Reset ke page 1 saat query berubah
  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedSearchQuery, nameSortDirection]);

  const handleNextPage = () => setCurrentPage((prev) => prev + 1);
  const handlePreviousPage = () => setCurrentPage((prev) => prev - 1);
  const applySortAsc = () => setNameSortDirection("asc");
  const applySortDesc = () => setNameSortDirection("desc");

  return (
    <Card>
      {/* Toolbar: Search + Sort */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-3 p-4">
        <SearchInput
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Cari nama, ID, atau status (hadir / belum hadir)..."
        />
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Urutkan nama:</span>
          <Button
            size="sm"
            variant={nameSortDirection === "asc" ? "default" : "outline"}
            onClick={applySortAsc}
          >
            A–Z
          </Button>
          <Button
            size="sm"
            variant={nameSortDirection === "desc" ? "default" : "outline"}
            onClick={applySortDesc}
          >
            Z–A
          </Button>
        </div>
      </div>

      <div className="rounded-md border">
        <Table className="zebra-stripes">
          <TableHeader>
            <TableRow>
              <TableHead className="font-semibold">No</TableHead>
              <TableHead className="font-semibold">Nama</TableHead>
              <TableHead className="font-semibold">Undangan Awal</TableHead>
              <TableHead>Jumlah Dikonfirmasi</TableHead>
              <TableHead className="font-semibold">Status</TableHead>
              <TableHead className="font-semibold">Waktu Datang</TableHead>
              <TableHead className="font-semibold">Link Undangan</TableHead>
              <TableHead className="font-semibold">Copy Undangan</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {currentPageData.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={8}
                  className="text-center py-8 text-muted-foreground"
                >
                  Tidak ada data yang cocok dengan pencarian.
                </TableCell>
              </TableRow>
            ) : (
              currentPageData.map((guest, indexOnPage) => (
                <TableRow key={guest?.id ?? indexOnPage}>
                  <TableCell>{startIndex + indexOnPage + 1}</TableCell>

                  <TableCell>{guest?.name ?? "-"}</TableCell>

                  <TableCell>{guest?.totalInvited || 0}</TableCell>

                  <TableCell>{guest?.confirmedGuests || 0}</TableCell>

                  <TableCell>
                    <Badge
                      className={
                        guest?.isArrived
                          ? "text-white bg-green-400"
                          : "text-slate-400 bg-slate-800"
                      }
                    >
                      {guest?.isArrived ? "Hadir" : "Belum Hadir"}
                    </Badge>
                  </TableCell>

                  <TableCell>
                    {guest?.arrivalTime
                      ? new Date(guest.arrivalTime).toLocaleTimeString()
                      : "-"}
                  </TableCell>

                  <TableCell className="cursor-pointer">
                    <Link
                      href={`${FRONTEND_URL}/invitations/${guest?.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Link
                    </Link>
                  </TableCell>

                  <TableCell>
                    <CopyButton
                      link={`${FRONTEND_URL}/invitations/${guest?.id}`}
                      idx={startIndex + indexOnPage}
                      name={guest?.name}
                    />
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between px-4 py-3">
        <Button
          variant="outline"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <Button
          variant="outline"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
    </Card>
  );
};

export default AttendanceTable;
