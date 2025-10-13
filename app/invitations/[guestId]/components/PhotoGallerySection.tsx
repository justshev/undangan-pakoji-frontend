// "use client";

import Image from "next/image";
import AnimatedDiv from "./AnimatedDiv";

// import Image from "next/image";
// import React, { useEffect, useMemo, useRef, useState } from "react";
// import AnimatedDiv from "./AnimatedDiv";

// /* =========================
//    ImageCarousel Component
//    ========================= */
// type CarouselImage = { src: string; alt?: string };

// type ImageCarouselProps = {
//   images: CarouselImage[];
//   autoPlayIntervalMs?: number; // default 3000ms
//   heightClassName?: string; // contoh: "h-[65vh] md:h-[75vh]"
//   className?: string;
// };

// function ImageCarousel({
//   images,
//   autoPlayIntervalMs = 3000,
//   heightClassName = "h-[65vh] md:h-[75vh]",
//   className,
// }: ImageCarouselProps) {
//   const scrollContainerRef = useRef<HTMLDivElement | null>(null);
//   const autoPlayTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
//   const isPointerDownRef = useRef(false);
//   const isHoveringRef = useRef(false);
//   const [activeIndex, setActiveIndex] = useState(0);

//   const slideCount = images.length;
//   const isSingleSlide = slideCount <= 1;

//   const clampIndex = (index: number) =>
//     index < 0 ? slideCount - 1 : index >= slideCount ? 0 : index;

//   const scrollToIndex = (
//     index: number,
//     behavior: ScrollBehavior = "smooth"
//   ) => {
//     const container = scrollContainerRef.current;
//     if (!container) return;
//     const targetX = index * container.clientWidth;
//     container.scrollTo({ left: targetX, behavior });
//     setActiveIndex(index);
//   };

//   const getNearestIndexFromScroll = () => {
//     const container = scrollContainerRef.current;
//     if (!container) return 0;
//     const { scrollLeft, clientWidth } = container;
//     return Math.min(
//       Math.max(Math.round(scrollLeft / clientWidth), 0),
//       slideCount - 1
//     );
//   };

//   const startAutoPlay = () => {
//     if (isSingleSlide || autoPlayTimerRef.current) return;
//     autoPlayTimerRef.current = setInterval(() => {
//       if (isPointerDownRef.current || isHoveringRef.current) return;
//       setActiveIndex((prev) => {
//         const next = clampIndex(prev + 1);
//         requestAnimationFrame(() => scrollToIndex(next));
//         return next;
//       });
//     }, autoPlayIntervalMs);
//   };

//   const stopAutoPlay = () => {
//     if (!autoPlayTimerRef.current) return;
//     clearInterval(autoPlayTimerRef.current);
//     autoPlayTimerRef.current = null;
//   };

//   useEffect(() => {
//     startAutoPlay();
//     return stopAutoPlay;
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [autoPlayIntervalMs, slideCount]);

//   useEffect(() => {
//     const handleResize = () => scrollToIndex(activeIndex, "auto");
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [activeIndex]);

//   useEffect(() => {
//     const container = scrollContainerRef.current;
//     if (!container) return;

//     let debounceId: ReturnType<typeof setTimeout> | null = null;
//     const onScroll = () => {
//       if (debounceId) clearTimeout(debounceId);
//       debounceId = setTimeout(
//         () => setActiveIndex(getNearestIndexFromScroll()),
//         80
//       );
//     };

//     container.addEventListener("scroll", onScroll, { passive: true });
//     return () => {
//       container.removeEventListener("scroll", onScroll);
//       if (debounceId) clearTimeout(debounceId);
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [slideCount]);

//   const goPrev = () => scrollToIndex(clampIndex(activeIndex - 1));
//   const goNext = () => scrollToIndex(clampIndex(activeIndex + 1));

//   const slideItems = useMemo(
//     () =>
//       images.map((item, idx) => (
//         <div
//           key={`${item.src}-${idx}`}
//           className={`snap-center shrink-0 w-full ${heightClassName} relative flex items-center justify-center bg-neutral-900`}
//           aria-label={`Slide ${idx + 1} dari ${slideCount}`}
//           role="group"
//         >
//           <Image
//             src={item.src}
//             alt={item.alt ?? `Slide ${idx + 1}`}
//             fill
//             // Penting: contain agar portrait & gambar besar tetap utuh, tidak crop
//             className="object-contain"
//             sizes="100vw"
//             priority={idx === 0}
//           />
//         </div>
//       )),
//     [images, heightClassName, slideCount]
//   );

//   return (
//     <div
//       className={`relative w-full select-none ${className ?? ""}`}
//       onMouseEnter={() => {
//         isHoveringRef.current = true;
//       }}
//       onMouseLeave={() => {
//         isHoveringRef.current = false;
//       }}
//     >
//       <div
//         ref={scrollContainerRef}
//         className={`w-full overflow-x-auto overflow-y-hidden ${heightClassName} snap-x snap-mandatory scroll-smooth scrollbar-hide rounded-2xl`}
//         style={{ WebkitOverflowScrolling: "touch" }}
//         onPointerDown={() => {
//           isPointerDownRef.current = true;
//           stopAutoPlay();
//         }}
//         onPointerUp={() => {
//           isPointerDownRef.current = false;
//           setTimeout(startAutoPlay, 300);
//         }}
//         onPointerCancel={() => {
//           isPointerDownRef.current = false;
//           setTimeout(startAutoPlay, 300);
//         }}
//       >
//         <div className="flex w-full h-full">{slideItems}</div>
//       </div>

//       {!isSingleSlide && (
//         <>
//           <button
//             aria-label="Sebelumnya"
//             onClick={goPrev}
//             className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 backdrop-blur px-3 py-2 text-white hover:bg-black/70"
//           >
//             ‹
//           </button>
//           <button
//             aria-label="Berikutnya"
//             onClick={goNext}
//             className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 backdrop-blur px-3 py-2 text-white hover:bg-black/70"
//           >
//             ›
//           </button>

//           <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2">
//             {images.map((_, idx) => (
//               <button
//                 key={idx}
//                 aria-label={`Ke slide ${idx + 1}`}
//                 onClick={() => scrollToIndex(idx)}
//                 className={`h-2.5 rounded-full transition-all ${
//                   activeIndex === idx
//                     ? "w-6 bg-white"
//                     : "w-2.5 bg-white/50 hover:bg-white/70"
//                 }`}
//               />
//             ))}
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// /* =========================
//    PhotoGallerySection Page
//    ========================= */

// const PhotoGallerySection = () => {
//   const imagePoolMobile = [
//     "/images/slider/foto-berdua-merah.jpg",
//     "/images/cover-photo-1.jpg", // ganti
//     "/images/cover-photo.jpg", // ganti
//     "/images/gallery-3.jpg",
//     "/images/gallery-8.jpg",
//     "/images/gallery-5.jpg", // ganti
//     "/images/cover-photo-7.jpg", // ganti
//     "/images/cover-photo-mobile.jpg",
//     "/images/gallery-9.jpg",
//     "/images/gallery-12.jpg", // ganti
//     "/images/gallery-10.JPG",
//     "/images/gallery-11.jpg",
//   ];

//   // Sumber untuk carousel: pilih yang portrait-friendly (boleh ganti sesuai kebutuhan)
//   const imageCarouselItems: CarouselImage[] = imagePoolMobile.map(
//     (src, idx) => ({
//       src,
//       alt: `Carousel ${idx + 1}`,
//     })
//   );

//   return (
//     <section className="py-20 bg-muted/30 relative">
//       <div className="absolute inset-0 pointer-events-none opacity-20 bg-[url('/images/bg-batik.jpg')] bg-repeat bg-contain" />

//       <div className="container mx-auto px-4">
//         <AnimatedDiv className="text-center mb-10">
//           <h2 className="font-title text-4xl font-bold text-primary mb-4">
//             Galeri Foto
//           </h2>
//           <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
//           <p className="text-muted-foreground font-description mt-4">
//             Momen-momen indah perjalanan cinta kami
//           </p>
//         </AnimatedDiv>

//         {/* ====== Image Carousel (autoplay 3s, manual, drag) ====== */}
//         <AnimatedDiv className="max-w-6xl mx-auto mb-12">
//           <ImageCarousel
//             images={imageCarouselItems}
//             autoPlayIntervalMs={3000}
//             heightClassName="h-[65vh] md:h-[75vh]" // atur tinggi sesuai desain
//             className="rounded-2xl shadow-lg"
//           />
//         </AnimatedDiv>
//       </div>
//     </section>
//   );
// };

// export default PhotoGallerySection;

const PhotoGallerySection = () => {
  return (
    <div className="container mx-auto px-4 relative">
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[url('/images/bg-batik.jpg')] bg-repeat bg-cover" />

      <AnimatedDiv className="text-center">
        <h2 className="font-title text-4xl font-bold text-primary mb-4">
          Galeri Foto
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        <p className="text-muted-foreground font-description mt-4">
          Momen-momen indah perjalanan cinta kami
        </p>
      </AnimatedDiv>

      <AnimatedDiv className="max-w-6xl mx-auto ">
        <section className="bg-muted/30 relative">
          <div className="md:flex items-center justify-center gap-3 mt-8 block space-y-2">
            <img
              src="/images/cover-photo.jpg"
              alt="Foto 1"
              className="w-128 rounded-lg"
            />
            <img
              src="/images/gallery-3.jpg"
              alt="Foto 2"
              className="w-128 rounded-lg "
            />
          </div>
        </section>
      </AnimatedDiv>
    </div>
  );
};

export default PhotoGallerySection;
