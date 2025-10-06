"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type CarouselProps = {
  images: string[];
  intervalMs?: number;
  className?: string;
};

export function Carousel({
  images,
  intervalMs = 3000,
  className,
}: CarouselProps) {
  const [index, setIndex] = React.useState(0);
  const [isDragging, setIsDragging] = React.useState(false);
  const [dragOffset, setDragOffset] = React.useState(0); // px
  const [isPaused, setIsPaused] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const startXRef = React.useRef(0);
  const widthRef = React.useRef(0);
  const autoplayRef = React.useRef<number | null>(null);

  const count = images.length;

  const goTo = React.useCallback(
    (i: number) => {
      setIndex(() => {
        const next = ((i % count) + count) % count;
        return next;
      });
    },
    [count]
  );

  const next = React.useCallback(() => goTo(index + 1), [index, goTo]);
  const prev = React.useCallback(() => goTo(index - 1), [index, goTo]);

  // Autoplay: advance every intervalMs when not paused/dragging
  React.useEffect(() => {
    if (isPaused || isDragging || count <= 1) return;
    if (autoplayRef.current) {
      window.clearTimeout(autoplayRef.current);
    }
    autoplayRef.current = window.setTimeout(() => {
      next();
    }, intervalMs) as unknown as number;
    return () => {
      if (autoplayRef.current) {
        window.clearTimeout(autoplayRef.current);
      }
    };
  }, [index, isPaused, isDragging, next, intervalMs, count]);

  const onPointerDown = (e: React.PointerEvent) => {
    if (!containerRef.current) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    widthRef.current = containerRef.current.clientWidth;
    startXRef.current = e.clientX;
    setIsDragging(true);
    setIsPaused(true); // pause while interacting
    setDragOffset(0);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const delta = e.clientX - startXRef.current;
    setDragOffset(delta);
  };

  const onPointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const threshold = Math.max(48, widthRef.current * 0.2); // px
    if (dragOffset <= -threshold) {
      next();
    } else if (dragOffset >= threshold) {
      prev();
    }
    // snap back if not beyond threshold
    setDragOffset(0);
    // resume autoplay after a small delay so it doesn't immediately move again
    window.setTimeout(() => setIsPaused(false), 300);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      setIsPaused(true);
      next();
      window.setTimeout(() => setIsPaused(false), 300);
    } else if (e.key === "ArrowLeft") {
      setIsPaused(true);
      prev();
      window.setTimeout(() => setIsPaused(false), 300);
    }
  };

  // Compute translateX
  const width = widthRef.current || 1;
  const offsetPct = isDragging ? (dragOffset / Math.max(1, width)) * 100 : 0;
  const translatePct = -(index * 100) + offsetPct;

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Carousel gambar"
      className={cn("relative w-full select-none", className)}
      onKeyDown={onKeyDown}
    >
      <div
        ref={containerRef}
        className="overflow-hidden rounded-lg border border-border bg-card"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <ul
          className="flex touch-pan-y"
          style={{
            width: `${count * 100}%`,
            transform: `translateX(${translatePct}%)`,
            transition: isDragging ? "none" : "transform 300ms ease",
          }}
        >
          {images.map((img, i) => (
            <li
              key={i}
              className="w-full shrink-0 basis-full"
              aria-roledescription="slide"
              aria-label={`Slide ${i + 1} dari ${count}`}
              aria-current={i === index ? "true" : undefined}
            >
              <img
                src={img || "/placeholder.svg"}
                className="block h-64 w-full object-contain md:h-80 lg:h-96"
                draggable={false}
              />
            </li>
          ))}
        </ul>
      </div>

      {/* Controls */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-between p-2">
        <button
          type="button"
          aria-label="Sebelumnya"
          onClick={() => {
            setIsPaused(true);
            prev();
            window.setTimeout(() => setIsPaused(false), 300);
          }}
          className="pointer-events-auto inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/80 text-primary-foreground hover:bg-primary"
        >
          {/* simple chevron left */}
          <span aria-hidden className="inline-block rotate-180">
            {"›"}
          </span>
        </button>
        <button
          type="button"
          aria-label="Berikutnya"
          onClick={() => {
            setIsPaused(true);
            next();
            window.setTimeout(() => setIsPaused(false), 300);
          }}
          className="pointer-events-auto inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/80 text-primary-foreground hover:bg-primary"
        >
          <span aria-hidden>{"›"}</span>
        </button>
      </div>

      {/* Indicators */}
      <div className="mt-2 flex items-center justify-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            aria-label={`Ke slide ${i + 1}`}
            className={cn(
              "h-2 w-2 rounded-full border border-border",
              i === index ? "bg-primary" : "bg-muted"
            )}
            onClick={() => {
              setIsPaused(true);
              goTo(i);
              window.setTimeout(() => setIsPaused(false), 300);
            }}
          />
        ))}
      </div>
    </section>
  );
}

export default Carousel;
