import { Calendar, Clock, Gift, MapPin, Users } from "lucide-react";
import AnimatedDiv from "./AnimatedDiv";

const EventDetailSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedDiv className="text-center mb-16">
          <h2 className="font-heading text-4xl font-bold text-primary mb-4">
            Acara Pernikahan
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </AnimatedDiv>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Akad */}
          <AnimatedDiv className="bg-muted border border-primary/20 shadow-lg rounded-lg">
            <div className="p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-primary mb-2">
                  Akad Nikah
                </h3>
              </div>
              <div className="space-y-4 text-center">
                <div className="flex items-center justify-center space-x-3">
                  <Calendar className="w-5 h-5 text-secondary" />
                  <span className="font-medium">Sabtu, 8 November 2025</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Clock className="w-5 h-5 text-secondary" />
                  <span className="font-medium">08:00 - 10:00 WIB</span>
                </div>
                <div className="flex items-start justify-center space-x-3">
                  <MapPin className="w-5 h-5 text-secondary mt-1" />
                  <div className="text-center">
                    <p className="font-medium">Masjid Al-Ikhlas</p>
                    <p className="text-sm text-muted-foreground">
                      Jl. Merdeka No. 123, Yogyakarta
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedDiv>

          {/* Resepsi */}
          <AnimatedDiv className="bg-muted border border-primary/20 shadow-lg rounded-lg">
            <div className="p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Gift className="w-8 h-8 text-secondary-foreground" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-primary mb-2">
                  Resepsi
                </h3>
              </div>
              <div className="space-y-4 text-center">
                <div className="flex items-center justify-center space-x-3">
                  <Calendar className="w-5 h-5 text-secondary" />
                  <span className="font-medium">Sabtu, 15 Juni 2024</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Clock className="w-5 h-5 text-secondary" />
                  <span className="font-medium">11:00 - 15:00 WIB</span>
                </div>
                <div className="flex items-start justify-center space-x-3">
                  <MapPin className="w-5 h-5 text-secondary mt-1" />
                  <div className="text-center">
                    <p className="font-medium">Gedung Serbaguna Taman Siswa</p>
                    <p className="text-sm text-muted-foreground">
                      Jl. Taman Siswa No. 456, Yogyakarta
                    </p>
                  </div>
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
