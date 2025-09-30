"use client";

import type React from "react";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type WeddingHeroProps = {
  images?: string[];
  intervalMs?: number;

  className?: string;
};

export function WeddingHero({
  images,
  intervalMs = 3000,
  className,
}: WeddingHeroProps) {
  const defaultImages = useMemo(() => [images], []);

  const slides = images && images.length > 0 ? images : defaultImages;

  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (slides.length <= 1) return;

    const tick = () => {
      // Mulai efek kabut
      setIsTransitioning(true);

      // Tunggu sedikit agar kabut terlihat, lalu ganti foto
      const changeTimeout = setTimeout(
        () => {
          setIndex((prev) => (prev + 1) % slides.length);
        },
        prefersReducedMotion ? 0 : 300
      );

      // Setelah foto berganti, kabut perlahan hilang
      const clearFogTimeout = setTimeout(
        () => {
          setIsTransitioning(false);
        },
        prefersReducedMotion ? 0 : 900
      );

      return () => {
        clearTimeout(changeTimeout);
        clearTimeout(clearFogTimeout);
      };
    };

    const interval = setInterval(() => {
      const cleanup = tick();
      // bersihkan timeout setiap tick
      return cleanup;
    }, intervalMs);

    return () => clearInterval(interval);
  }, [slides.length, intervalMs, prefersReducedMotion]);

  const transitionCommon = {
    duration: prefersReducedMotion ? 0 : 0.8,
    ease: "easeInOut" as const,
  };

  return (
    <section
      className={cn(
        "relative w-full h-screen md:h-screen overflow-hidden",
        className
      )}
      aria-label="Hero Pernikahan"
    >
      {/* Layer gambar sebagai background dengan crossfade */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="absolute inset-0 bg-cover bg-center will-change-transform"
            style={{
              backgroundImage: `url(${slides[index]})`,
            }}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.5 }}
            transition={transitionCommon}
            aria-hidden="true"
          />
        </AnimatePresence>
      </div>

      {/* Overlay hitam sesuai permintaan */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Efek kabut saat transisi */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            key={`fog-${index}`}
            className="pointer-events-none absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.4,
              ease: "easeInOut",
            }}
            aria-hidden="true"
          >
            {/* Sedikit blur latar untuk kesan kabut */}
            <div className="absolute inset-0 backdrop-blur-sm" />
            {/* Radial gradients terang tipis sebagai kabut */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.25), transparent 40%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.20), transparent 50%), radial-gradient(circle at 50% 50%, rgba(255,255,255,0.18), transparent 45%)",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Konten */}
      <div className="relative z-10 h-full flex items-center justify-center px-6 font-title">
        <div className="text-center max-w-3xl absolute bottom-6 right-18">
          <div className="text-balance text-primary-foreground text-4xl md:text-6xl tracking-tight ">
            <p>Hana</p>
            <p>&</p>
            <p>Rozi</p>
          </div>
          <p className="mt-4 text-primary-foreground/90 text-lg md:text-2xl">
            08/11/2025
          </p>
        </div>
      </div>
    </section>
  );
}

export default WeddingHero;
