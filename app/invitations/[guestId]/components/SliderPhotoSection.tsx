"use client";

import type React from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";

type WeddingHeroProps = {
  images?: string[];
  intervalMs?: number;
  className?: string;
  /** Maksimum pergeseran parallax (px) ketika seluruh section discroll habis */
  parallaxMaxOffsetPx?: number;
};

export function WeddingHero({
  images,
  intervalMs = 3000,
  className,
  parallaxMaxOffsetPx = 150,
}: WeddingHeroProps) {
  // Default images kalau props kosong (opsional, sesuaikan punyamu)
  const defaultImages = useMemo(() => images ?? [], [images]);
  const slides = defaultImages.length > 0 ? defaultImages : images ?? [];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  // === Parallax hanya untuk section ini ===
  const heroSectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroSectionRef,                // progress scroll relatif terhadap section hero
    offset: ["start start", "end start"],  // 0 saat top hero bertemu top viewport, 1 saat bottom hero bertemu top viewport
  });
  const parallaxTranslateY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, parallaxMaxOffsetPx]               // geser background ke bawah saat discroll (efek parallax)
  );

  // === Slideshow interval ===
  useEffect(() => {
    if (slides.length <= 1) return;

    const runTick = () => {
      setIsTransitioning(true);

      const changeTimeout = setTimeout(() => {
        setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
      }, prefersReducedMotion ? 0 : 300);

      const clearFogTimeout = setTimeout(() => {
        setIsTransitioning(false);
      }, prefersReducedMotion ? 0 : 900);

      return () => {
        clearTimeout(changeTimeout);
        clearTimeout(clearFogTimeout);
      };
    };

    const intervalId = setInterval(() => {
      const cleanup = runTick();
      return cleanup;
    }, intervalMs);

    return () => clearInterval(intervalId);
  }, [slides.length, intervalMs, prefersReducedMotion, slides]);

  const transitionCommon = {
    duration: prefersReducedMotion ? 0 : 0.8,
    ease: "easeInOut" as const,
  };

  return (
    <section
      ref={heroSectionRef}
      className={cn(
        "relative w-full h-screen overflow-hidden", // overflow-hidden penting agar parallax tak bocor
        className
      )}
      aria-label="Hero Pernikahan"
    >
      {/* Layer gambar sebagai background dengan crossfade + PARALLAX */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlideIndex}
            className="absolute inset-0 bg-cover bg-center will-change-transform"
            style={{
              backgroundImage: `url(${slides[currentSlideIndex]})`,
              y: parallaxTranslateY, // <- efek parallax di sini
            }}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.5 }}
            transition={transitionCommon}
            aria-hidden="true"
          />
        </AnimatePresence>
      </div>

      {/* Overlay gelap */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Efek kabut saat transisi */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            key={`fog-${currentSlideIndex}`}
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
            <div className="absolute inset-0 backdrop-blur-sm" />
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
          <div className="text-balance  text-4xl md:text-6xl tracking-tight text-[#B69F5E]">
            <p>Hana</p>
            <p>&</p>
            <p>Rozi</p>
          </div>
          <p className="mt-4 text-lg md:text-2xl text-[#B69F5E]">
            08/11/2025
          </p>
        </div>
      </div>
    </section>
  );
}

export default WeddingHero;
