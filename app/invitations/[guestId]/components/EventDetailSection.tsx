import AnimatedDiv from "./AnimatedDiv";
import Link from "next/link";

const EventDetailSection = () => {
  return (
    <section className="py-20 relative bg-background">
      <div className="container mx-auto px-4">
        <AnimatedDiv className="text-center mb-16">
          <h2 className="font-title text-4xl font-bold text-primary mb-4 ">
            Acara Pernikahan
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </AnimatedDiv>
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-[url('/images/bg-batik.jpg')] bg-repeat bg-contain" />

        <div className="grid  gap-8 max-w-4xl mx-auto">
          {/* Akad */}
          <AnimatedDiv className="bg-muted border border-primary/20 shadow-lg rounded-lg font-description">
            <div className="p-8">
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="col-span-3">
                  <header className="flex gap-12 items-center justify-center">
                    <div className="w-full h-[1px] bg-primary" />
                    <h3 className="font-heading text-2xl font-bold text-primary mb-2 ">
                      Akad Nikah
                    </h3>
                    <div className=" w-full h-[1px] bg-primary" />
                  </header>
                  <div className="font-heading  text-black mb-2">
                    <h1 className="">Sabtu, 08 November 2025</h1>
                    <p>08.00 - 10.00 WIB</p>
                    <p>Gedung Manterawu, Telkom University</p>
                    <p className="md:w-3/4 mx-auto text-xs mt-2">
                      Jl. Telekomunikasi No. 1, Bandung Terusan Buahbatu -
                      Bojongsoang, Sukapura, Kec. Dayeuhkolot, Kab. Bandung,
                      Jawa Barat
                    </p>
                  </div>
                </div>

                <div className="col-span-3">
                  <header className="flex gap-12 items-center justify-center">
                    <div className="w-full h-[1px] bg-primary" />
                    <h3 className="font-heading text-2xl font-bold text-primary mb-2 ">
                      Resepsi
                    </h3>
                    <div className=" w-full h-[1px] bg-primary" />
                  </header>

                  <div className="font-heading  text-black mb-2">
                    <h1>Sabtu, 08 November 2025</h1>
                    <p>11.00 - 15.00 WIB</p>
                    <p>Gedung Manterawu, Telkom University</p>
                    <p className="md:w-3/4 mx-auto text-xs mt-2">
                      Jl. Telekomunikasi No. 1, Bandung Terusan Buahbatu -
                      Bojongsoang, Sukapura, Kec. Dayeuhkolot, Kab. Bandung,
                      Jawa Barat
                    </p>
                  </div>
                </div>

                <div className="w-full flex justify-center col-span-3">
                  <Link
                    href={"https://maps.app.goo.gl/2xaeBg4U6ps32D5w7"}
                    className="cursor-pointer px-3 py-2 bg-primary text-white rounded-lg"
                    target="_blank"
                  >
                    <button>Detail Lokasi</button>
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedDiv>
        </div>
      </div>
    </section>
  );
};

export default EventDetailSection;
