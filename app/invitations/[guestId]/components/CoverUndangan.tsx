import { Heart, Mail } from "lucide-react";

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
/**
 * <div className="absolute inset-0 opacity-20">
        <div className="absolute top-16 left-16 w-32 h-32 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-16 right-16 w-40 h-40 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-md mx-4 rounded-2xl bg-card/90 backdrop-blur border border-border/40 shadow-xl">
        <div className="p-8 text-center space-y-6">
          <div>
            <p className="text-lg font-semibold text-primary">
              بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Assalamualaikum Warahmatullahi Wabarakatuh
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="/images/gunungan.webp"
              alt="Gunungan Wayang"
              className="w-20 h-auto animate-bounce-slow opacity-80"
            />
          </div>
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              The Wedding of
            </p>
            <h1 className="font-heading text-3xl font-bold text-primary">
              Hana & Rozi
            </h1>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              Kepada Yth. Bapak/Ibu/Saudara/i
            </p>
            <div className="w-full p-3 rounded-lg border bg-background font-medium">
              {guestName}
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            Tanpa mengurangi rasa hormat, kami mengundang Anda untuk hadir dalam
            acara pernikahan kami
          </p>
          <button
            onClick={openInvitation}
            className="w-full flex items-center justify-center gap-2 rounded-lg bg-primary py-3 font-medium text-primary-foreground shadow-lg transition hover:bg-primary/90 hover:shadow-xl"
          >
            <Heart className="w-4 h-4" />
            Buka Undangan
          </button>
        </div>
      </div>
 */
