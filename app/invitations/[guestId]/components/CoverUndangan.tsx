import { Mail } from "lucide-react";

interface CoverUndanganProps {
  guestName: string;
  openInvitation: () => void;
}

const CoverUndangan = ({ guestName, openInvitation }: CoverUndanganProps) => {
  return (
    <section className="relative w-screen h-screen bg-[url('/images/cover-photo-1.JPG')] md:bg-cover bg-center bg-contain font-title bg-no-repeat bg-black overflow-hidden text-white text-center text-xs">
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative flex flex-col space-y-4">
        <div className="mt-6 bottom-6 left-6 z-10  font-semibold w-full">
          <p>The Wedding of</p>
          <h1 className="text-4xl">Hana & Rozi</h1>
          <p>Sabtu, 8 November 2025</p>
        </div>
        <div className="flex justify-center">
          <img
            src="/images/gunungan.webp"
            alt="Gunungan Wayang"
            className="w-20 h-auto animate-bounce-slow opacity-80"
          />
        </div>
        <div className="mt-24">
          <h1>Dear</h1>
          <p className="text-2xl">
            Bapak/Ibu. <br /> {guestName}
          </p>
        </div>
        <button
          onClick={openInvitation}
          className="mt-6 mb-10 flex items-center justify-center gap-2 rounded-lg bg-transparent border py-3 px-6 font-medium  shadow-lg transition mx-auto"
        >
          <Mail className="w-4 h-4" />
          Buka Undangan
        </button>
      </div>
    </section>
  );
};

export default CoverUndangan;
