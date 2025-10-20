"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import CoverUndangan from "./components/CoverUndangan";
import MempelaiSection from "./components/MempelaiSection";
import ProfileSection from "./components/ProfileSection";
import EventDetailSection from "./components/EventDetailSection";
import PhotoGallerySection from "./components/PhotoGallerySection";
import WeddingHeroSlideshow from "./components/SliderPhotoSection";
import Footer from "./components/Footer";
import CommentList from "./components/CommentSection";
import { Countdown } from "./components/Countdown";
import useGetGuest from "@/hooks/useGetGuest";
import ReservasiSection from "./components/ReservasiSection";
import LoveStory from "./components/love-story/LoveStory";

export default function JavaneseWeddingInvitation() {
  const weddingPhotos = [
    "/images/cover-photo-mobile.jpg",
    "/images/slider/kak-hana.jpg",
    "/images/slider/pak-rozi.jpg",
  ];

  const audioElementRef = useRef<HTMLAudioElement>(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const [isInvitationOpen, setIsInvitationOpen] = useState(false);
  const { data } = useGetGuest();

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
        <CoverUndangan guestName={data?.name} openInvitation={openInvitation} />
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
          <div className="min-h-screen bg-background overflow-hidden font-bodoni">
            <WeddingHeroSlideshow images={weddingPhotos} />
            <ProfileSection />
            <MempelaiSection />
            <EventDetailSection />
            <LoveStory />
            <Countdown targetDate="2025-11-08T00:00:00" />
            <PhotoGallerySection />
            <ReservasiSection guestName={data?.name} />
            <CommentList />
            <Footer />
          </div>
        </>
      )}
    </>
  );
}
