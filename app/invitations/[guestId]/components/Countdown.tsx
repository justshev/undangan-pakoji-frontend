"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type CountdownProps = {
  targetDate: string; // format: "YYYY-MM-DDTHH:mm:ss"
  className?: string;
};

export function Countdown({ targetDate, className }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    hari: "00",
    jam: "00",
    menit: "00",
    detik: "00",
  });

  useEffect(() => {
    const countdown = setInterval(() => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const distance = target - now;

      if (distance <= 0) {
        clearInterval(countdown);
        setTimeLeft({
          hari: "00",
          jam: "00",
          menit: "00",
          detik: "00",
        });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        hari: days.toString().padStart(2, "0"),
        jam: hours.toString().padStart(2, "0"),
        menit: minutes.toString().padStart(2, "0"),
        detik: seconds.toString().padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, [targetDate]);

  return (
    <section
      className={cn("py-16 text-center bg-background relative px-8", className)}
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold font-title text-primary mb-4"
      >
        Menuju Hari Bahagia
      </motion.h2>
      <p className="text-muted-foreground font-description mb-8">
        Hitung mundur menuju hari pernikahan kami
      </p>
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[url('/images/bg-batik.jpg')] bg-repeat bg-cover" />
        {/* className="bg-white/80 backdrop-blur-sm rounded-lg shadow p-6 text-left border border-pink-100" */}

      {/* Container besar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white backdrop-blur-sm shadow-lg rounded-2xl px-6 md:px-12 py-8 max-w-3xl mx-auto flex justify-between items-center"
      >
        {Object.entries(timeLeft).map(([label, value]) => (
          <div
            key={label}
            className="flex flex-col items-center font-title flex-1"
          >
            <span className="text-3xl md:text-5xl font-bold text-primary">
              {value}
            </span>
            <span className="text-xs md:text-sm mt-6 text-muted-foreground capitalize">
              {label}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
