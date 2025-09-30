"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import { Calendar, MapPin, Clock, Users, Gift, Quote } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import AnimatedDiv from "./components/AnimatedDiv";
import CoverUndangan from "./components/CoverUndangan";

export default function JavaneseWeddingInvitation() {
  const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

  const audioElementRef = useRef<HTMLAudioElement>(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const params = useParams();
  const { guestId } = params as { guestId: string };

  const [isInvitationOpen, setIsInvitationOpen] = useState(false);
  const [guestName, setGuestName] = useState("");
  const router = useRouter();

  useEffect(() => {
    const handleCheckGuest = async () => {
      try {
        const response = await fetch(`${BACKEND_URL}/api/guests/${guestId}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          cache: "no-store",
        });

        if (!response.ok) {
          return router.push(`/invitations/${guestId}/not-found`);
        }

        const { guest } = await response.json();
        if (!guest) {
          return router.push(`/invitations/${guestId}/not-found`);
        }

        setGuestName(guest.name);
      } catch {
        router.push(`/invitations/${guestId}/not-found`);
      }
    };

    if (BACKEND_URL && guestId) handleCheckGuest();
  }, [BACKEND_URL, guestId, router]);

  const openInvitation = async () => {
    setIsInvitationOpen(true);

    document
      .getElementById("main-content")
      ?.scrollIntoView({ behavior: "smooth" });
    if (audioElementRef.current) {
      try {
        audioElementRef.current.muted = false;
        await audioElementRef.current.play();
        setIsAudioPlaying(true);
      } catch {
        setIsAudioPlaying(false);
      }
    }
  };

  const handleTogglePlay = async () => {
    if (!audioElementRef.current) return;
    if (isAudioPlaying) {
      audioElementRef.current.pause();
      setIsAudioPlaying(false);
    } else {
      try {
        await audioElementRef.current.play();
        setIsAudioPlaying(true);
      } catch {
        setIsAudioPlaying(false);
      }
    }
  };

  const handleToggleMute = () => {
    if (!audioElementRef.current) return;
    audioElementRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    const onVisibilityChange = () => {
      if (
        document.visibilityState === "visible" &&
        isAudioPlaying &&
        audioElementRef.current
      ) {
        audioElementRef.current.play().catch(() => {});
      }
    };
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", onVisibilityChange);
  }, [isAudioPlaying]);

  return (
    <>
      <audio
        ref={audioElementRef}
        src="/wedding-song.mp3"
        loop
        preload="auto"
      />
      {!isInvitationOpen && (
        <CoverUndangan guestName={guestName} openInvitation={openInvitation} />
      )}
      {isInvitationOpen && (
        <>
          <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2">
            <button
              onClick={handleToggleMute}
              className="px-4 py-2 rounded-full bg-card text-foreground border shadow hover:bg-accent transition"
              aria-label={isMuted ? "Unmute musik" : "Mute musik"}
            >
              {isMuted ? "🔇" : "🔈"}
            </button>
          </div>

          <div className="min-h-screen bg-background overflow-hidden">
            <section className="relative w-screen h-screen bg-[url('/images/cover-photo.jpg')] bg-cover md:bg-[50%_60%] font-title">
              <div className="absolute inset-0 bg-black/40"></div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
                className="absolute bottom-6 left-6 z-10 text-white text-left text-xs font-semibold"
              >
                <h1 className="text-xl text-amber-400 mb-4">
                  Fadhil Rozi Hendrawan, S.Kom., M.Kom.
                </h1>
                <p>Anak Ke-1 Dari 3 Bersaudara</p>
                <p>Bapak H. Toni Surizi, S.T</p>
                <p>dan</p>
                <p>Ibu Hj. Hefnasari Pane, S.E</p>
              </motion.div>

              {/* <div className="absolute z-10 text-white font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl">
                <h1>Hana & Rozi</h1>
              </div> */}

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
                className="absolute top-6 right-6 z-10 text-white text-xs  text-right font-semibold"
              >
                <h1 className="text-xl text-amber-400 mb-4">
                  Fadhilah Raihanah, S.T., M.Si.
                </h1>
                <p>Anak Ke-1 Dari 4 Bersaudara</p>
                <p>Bapak Dr. H. Erwin Budi Setiawan, S.Si., M.T</p>
                <p>dan</p>
                <p>Ibu Hj. Rosalina Dewi, S.P</p>
              </motion.div>
            </section>

            <section className="py-20 bg-primary">
              <div className="container mx-auto px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
                <AnimatedDiv className="text-center mb-16">
                  <h2 className="font-heading text-4xl font-bold text-white mb-4">
                    Ayat Suci Al-Quran
                  </h2>
                  <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
                </AnimatedDiv>

                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                  <AnimatedDiv className="bg-card border border-primary/20 shadow-lg rounded-lg">
                    <div className="p-8 text-center">
                      <Quote className="w-12 h-12 text-secondary mx-auto mb-6" />
                      <p className="text-lg text-primary font-medium mb-4 leading-relaxed">
                        "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ
                        أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم
                        مَّوَدَّةً وَرَحْمَةً"
                      </p>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia
                        menciptakan untukmu isteri-isteri dari jenismu sendiri,
                        supaya kamu cenderung dan merasa tenteram kepadanya, dan
                        dijadikan-Nya diantaramu rasa kasih dan sayang."
                      </p>
                      <p className="text-sm font-medium text-secondary">
                        QS. Ar-Rum: 21
                      </p>
                    </div>
                  </AnimatedDiv>

                  <AnimatedDiv className="bg-card border border-primary/20 shadow-lg rounded-lg">
                    <div className="p-8 text-center">
                      <Quote className="w-12 h-12 text-secondary mx-auto mb-6" />
                      <p className="text-lg text-primary font-medium mb-4 leading-relaxed">
                        "وَاللَّهُ جَعَلَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا
                        وَجَعَلَ لَكُم مِّنْ أَزْوَاجِكُم بَنِينَ وَحَفَدَةً"
                      </p>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        "Allah menjadikan bagi kamu isteri-isteri dari jenis
                        kamu sendiri dan menjadikan bagimu dari isteri-isteri
                        kamu itu, anak-anak dan cucu-cucu."
                      </p>
                      <p className="text-sm font-medium text-secondary">
                        QS. An-Nahl: 72
                      </p>
                    </div>
                  </AnimatedDiv>
                </div>
              </div>
            </section>

            <section className="py-20 bg-muted/30">
              <div className="container mx-auto px-4">
                <AnimatedDiv className="text-center mb-16">
                  <h2 className="font-heading text-4xl font-bold text-primary mb-4">
                    Mempelai
                  </h2>
                  <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
                </AnimatedDiv>

                <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                  <AnimatedDiv className="bg-card border border-primary/20 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
                    <div className="p-8 text-center">
                      <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-6 flex items-center justify-center">
                        <span className="text-4xl font-heading font-bold text-primary-foreground">
                          B
                        </span>
                      </div>
                      <h3 className="font-heading text-2xl font-bold text-primary mb-2">
                        Fadhil Rozi Hendrawan, S.Kom., M.Kom.
                      </h3>
                      <p className="text-muted-foreground mb-4">Putra dari</p>
                      <p className="font-medium">
                        Bapak H. Toni Surizi & Ibu Hj. Hefnasari Pane
                      </p>
                    </div>
                  </AnimatedDiv>

                  <AnimatedDiv className="bg-card border border-primary/20 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
                    <div className="p-8 text-center">
                      <div className="w-32 h-32 bg-gradient-to-br from-secondary to-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                        <span className="text-4xl font-heading font-bold text-primary-foreground">
                          S
                        </span>
                      </div>
                      <h3 className="font-heading text-2xl font-bold text-primary mb-2">
                        Fadhilah Raihanah, ST., M.Si
                      </h3>
                      <p className="text-muted-foreground mb-4">Putri dari</p>
                      <p className="font-medium">
                        Bapak H. Erwin Budi Setiawan & Ibu Hj. Rosalina Dewi
                      </p>
                    </div>
                  </AnimatedDiv>
                </div>
              </div>
            </section>

            <section className="py-20 bg-background">
              <div className="container mx-auto px-4">
                <AnimatedDiv className="text-center mb-16">
                  <h2 className="font-heading text-4xl font-bold text-primary mb-4">
                    Perjalanan Cerita Kami
                  </h2>
                  <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
                </AnimatedDiv>

                <div className="max-w-4xl mx-auto">
                  <AnimatedDiv className="grid md:grid-cols-3 gap-6 mb-12">
                    {/* Tempatkan src fotomu di bawah ini */}
                    <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg overflow-hidden">
                      <img
                        alt="Pertemuan Pertama"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 shadow"
                      />
                    </div>
                    <div className="aspect-square bg-gradient-to-br from-secondary/20 to-primary/20 rounded-lg overflow-hidden">
                      <img
                        alt="Lamaran"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg overflow-hidden">
                      <img
                        alt="Prewedding"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </AnimatedDiv>

                  <AnimatedDiv className="space-y-8">
                    <div className="bg-card border border-primary/20 shadow-lg rounded-lg">
                      <div className="p-8">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold mr-4">
                            1
                          </div>
                          <h3 className="font-heading text-xl font-bold text-primary">
                            Pertemuan Pertama
                          </h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          Kami pertama kali bertemu di kampus pada tahun 2020...
                        </p>
                      </div>
                    </div>

                    <div className="bg-card border border-primary/20 shadow-lg rounded-lg">
                      <div className="p-8">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold mr-4">
                            2
                          </div>
                          <h3 className="font-heading text-xl font-bold text-primary">
                            Menjalin Hubungan
                          </h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          Setelah lulus kuliah, kami tetap menjaga komunikasi...
                        </p>
                      </div>
                    </div>

                    <div className="bg-card border border-primary/20 shadow-lg rounded-lg">
                      <div className="p-8">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold mr-4">
                            3
                          </div>
                          <h3 className="font-heading text-xl font-bold text-primary">
                            Lamaran & Pernikahan
                          </h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          Pada tahun 2024, Budi melamar Sari...
                        </p>
                      </div>
                    </div>
                  </AnimatedDiv>
                </div>
              </div>
            </section>

            {/* Event Details */}
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
                          <span className="font-medium">
                            Sabtu, 8 November 2025
                          </span>
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
                          <span className="font-medium">
                            Sabtu, 15 Juni 2024
                          </span>
                        </div>
                        <div className="flex items-center justify-center space-x-3">
                          <Clock className="w-5 h-5 text-secondary" />
                          <span className="font-medium">11:00 - 15:00 WIB</span>
                        </div>
                        <div className="flex items-start justify-center space-x-3">
                          <MapPin className="w-5 h-5 text-secondary mt-1" />
                          <div className="text-center">
                            <p className="font-medium">
                              Gedung Serbaguna Taman Siswa
                            </p>
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

            {/* Galeri */}
            <section className="py-20 bg-muted/30">
              <div className="container mx-auto px-4">
                <AnimatedDiv className="text-center mb-16">
                  <h2 className="font-heading text-4xl font-bold text-primary mb-4">
                    Galeri Foto
                  </h2>
                  <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
                  <p className="text-muted-foreground mt-4">
                    Momen-momen indah perjalanan cinta kami
                  </p>
                </AnimatedDiv>

                <AnimatedDiv className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                  {Array.from({ length: 12 }).map((_, index) => (
                    <div
                      key={index}
                      className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg overflow-hidden group"
                    >
                      <img
                        alt={`Gallery ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 cursor-pointer"
                      />
                    </div>
                  ))}
                </AnimatedDiv>
              </div>
            </section>

            {/* RSVP */}
            <section className="py-20 bg-muted/30">
              <div className="container mx-auto px-4">
                <AnimatedDiv className="text-center mb-16">
                  <h2 className="font-heading text-4xl font-bold text-primary mb-4">
                    Konfirmasi Kehadiran
                  </h2>
                  <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
                  <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                    Mohon konfirmasi kehadiran Anda untuk membantu kami dalam
                    persiapan acara
                  </p>
                </AnimatedDiv>

                <AnimatedDiv className="max-w-2xl mx-auto bg-card border border-primary/20 shadow-lg rounded-lg">
                  <div className="p-8">
                    <form className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Nama Lengkap
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Masukkan nama lengkap Anda"
                          className="w-full p-3 border border-border rounded-lg bg-input focus:ring-2 focus:ring-ring focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Konfirmasi Kehadiran
                        </label>
                        <select
                          required
                          className="w-full p-3 border border-border rounded-lg bg-input focus:ring-2 focus:ring-ring focus:border-transparent"
                        >
                          <option value="">Pilih konfirmasi kehadiran</option>
                          <option value="hadir">Hadir</option>
                          <option value="tidak-hadir">Tidak Hadir</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Pesan & Doa
                        </label>
                        <textarea
                          placeholder="Tuliskan pesan dan doa untuk mempelai..."
                          rows={4}
                          className="w-full p-3 border border-border rounded-lg bg-input focus:ring-2 focus:ring-ring focus:border-transparent resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        Kirim Konfirmasi
                      </button>
                    </form>
                  </div>
                </AnimatedDiv>
              </div>
            </section>

            <footer className="py-12 bg-primary text-primary-foreground">
              <div className="container mx-auto px-4 text-center">
                <div className="mb-6">
                  <img
                    src="/images/gunungan.webp"
                    alt="Gunungan Wayang"
                    className="w-16 h-auto mx-auto opacity-80"
                  />
                </div>

                <h3 className="font-heading text-2xl font-bold mb-4">
                  Rozi & Hana
                </h3>

                <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
                  "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan
                  untukmu isteri-isteri dari jenismu sendiri, supaya kamu
                  cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya
                  diantaramu rasa kasih dan sayang."
                </p>

                <p className="text-sm text-primary-foreground/60 mb-8">
                  QS. Ar-Rum: 21
                </p>

                <div className="mb-8 p-6 bg-primary-foreground/10 rounded-lg max-w-2xl mx-auto">
                  <p className="text-primary-foreground/90 mb-4 leading-relaxed">
                    Merupakan suatu kehormatan dan kebahagiaan bagi kami,
                    apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan
                    doa restu kepada kami.
                  </p>
                  <p className="text-primary-foreground/80 font-medium">
                    Wassalamualaikum Warahmatullahi Wabarakatuh
                  </p>
                </div>

                <div className="mt-8 pt-8 border-t border-primary-foreground/20">
                  <p className="text-sm text-primary-foreground/60">
                    © 2025 - Created by Nirmalabs for Hana & Rozi
                  </p>
                </div>
              </div>
            </footer>
          </div>
        </>
      )}
    </>
  );
}
