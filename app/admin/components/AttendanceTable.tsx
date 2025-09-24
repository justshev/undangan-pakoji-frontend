import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const AttendanceTable = ({ data }: any) => {
  return (
    <Card>
      <div className="rounded-md border ">
        <Table className="zebra-stripes ">
          <TableHeader>
            <TableRow>
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
            {data.map((item: any, idx: number) => (
              <TableRow key={idx}>
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
                <TableCell className="cursor-pointer">Link</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
};

export default AttendanceTable;
