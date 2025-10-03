import { Calendar, Clock, Gift, MapPin, Users } from "lucide-react";
import AnimatedDiv from "./AnimatedDiv";

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
              <div className="grid grid-cols-3  gap-2 text-center">
                <div className="">
                  <h3 className="font-heading text-2xl font-bold text-primary mb-2">
                    Akad Nikah
                  </h3>
                  <p>Pukul 08.00 - 10.00 WIB</p>
                </div>
                <div>
                  <div className="font-heading text-2xl font-bold text-primary mb-2">
                    <h1 className="">Sabtu</h1>
                    <p>08 November 2025</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold text-primary mb-2">
                    Resepsi
                  </h3>
                  <p>Pukul 11.00 - 14.00 WIB</p>
                </div>
                <div className="grid col-span-3 md:text-lg text-base  my-6">
                  <h1>Gedung Manterawu</h1>
                  <p className="md:w-1/2 mx-auto">
                    Jl. Telekomunikasi No. 1 Bandung Terusan Buahbatu -
                    Bojongsoang, Sukapura, Kec. Dayeuhkolot, Kab. Bandung, Jawa
                    Barat
                  </p>
                </div>
                <div className="overflow-hidden  col-span-3">
                  <iframe
                    className="mx-auto"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.3171653541294!2d107.62978837499698!3d-6.9718581930288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e9ad9a473177%3A0x75173644e4d27373!2sGedung%20Manterawu!5e0!3m2!1sid!2sid!4v1759499523058!5m2!1sid!2sid"
                    width="600"
                    height="450"
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
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
