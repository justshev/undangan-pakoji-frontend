"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import CoverUndangan from "./components/CoverUndangan";
import MempelaiSection from "./components/MempelaiSection";
import QuranSection from "./components/QuranSection";
import ProfileSection from "./components/ProfileSection";
import EventDetailSection from "./components/EventDetailSection";
import PhotoGallerySection from "./components/PhotoGallerySection";
import ReservasiSection from "./components/ReservasiSection";
import WeddingHeroSlideshow from "./components/SliderPhotoSection";
import LoveStory from "./components/love-story/LoveStory";
import CeritaSection from "./components/CeritaSection";
import AnimatedDiv from "./components/AnimatedDiv";

export default function JavaneseWeddingInvitation() {
  const weddingPhotos = [
    "/images/slider/foto-berdua-merah.jpg",
    "/images/slider/kak-hana.jpg",
    "/images/slider/pak-rozi.jpg",
  ];
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

  // Removed unused handleTogglePlay to satisfy linter.

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

          {/* <section className="relative w-screen h-screen bg-[url('/images/cover-photo.jpg')] bg-cover md:bg-[50%_60%] bg-[50%_120%] font-title"> */}
          <div className="min-h-screen bg-background overflow-hidden">
            <WeddingHeroSlideshow
              images={weddingPhotos}
              // coupleNames="Dina & Raka"
              date="12 Desember 2025"
              location="Jakarta"
            />
            <MempelaiSection />
            <EventDetailSection />
            <QuranSection />
            <ProfileSection />
            <LoveStory />
            <PhotoGallerySection />
            <ReservasiSection />
          </div>
        </>
      )}
    </>
  );
}
