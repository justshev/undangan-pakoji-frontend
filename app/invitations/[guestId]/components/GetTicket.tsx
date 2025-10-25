import { useParams } from "next/navigation";
import AnimatedDiv from "./AnimatedDiv";
import Link from "next/link";

const GetTicket = () => {
  const { guestId } = useParams();

  return (
    <div className="text-center">
      <h1 className="font-title text-primary text-3xl pt-8">
        Konfirmasi Kehadiran
      </h1>
      <p className="font-description text-black">
        Silakan konfirmasi kehadiran Anda di bawah ini:
      </p>
      <AnimatedDiv className="max-w-2xl font-description mx-auto bg-white border border-primary/20 shadow-lg rounded-lg mb-12">
        <Link href={`/confirm/${guestId}`}>
          <button className="w-full py-4 text-center text-white bg-primary hover:bg-primary/80 transition">
            Konfirmasi Kehadiran
          </button>
        </Link>
      </AnimatedDiv>
    </div>
  );
};

export default GetTicket;
