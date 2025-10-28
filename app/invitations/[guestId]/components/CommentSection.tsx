// CommentList.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import useGetComments from "@/hooks/useGetComments";

type Comment = {
  id: string;
  name: string;
  message: string;
};

const INITIAL_VISIBLE_COUNT = 3;
const LOAD_MORE_STEP = 3;

const CommentList = () => {
  const { data, isLoading } = useGetComments<Comment[]>();
  const safeData: Comment[] = Array.isArray(data) ? data : [];

  // Urutkan agar komentar terbaru tampil duluan (misal backend kirim oldest-first)
  const orderedComments = useMemo(() => {
    return [...safeData].reverse();
  }, [safeData]);

  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

  // Reset pagination saat data berubah
  useEffect(() => {
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  }, [orderedComments.length]);

  const visibleComments = orderedComments.slice(0, visibleCount);
  const hasMore = visibleCount < orderedComments.length;

  if (!isLoading && orderedComments.length === 0) {
    return (
      <section className="bg-pink-50 py-12 px-4 text-center font-description">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
          Doa & Pesan
        </h2>
        <p className="text-muted-foreground">
          Belum ada pesan. Jadilah yang pertama memberikan pesan ✨
        </p>
      </section>
    );
  }

  const handleLoadMore = () => {
    setVisibleCount((prev) =>
      Math.min(prev + LOAD_MORE_STEP, orderedComments.length)
    );
  };

  return (
    <section className="bg-pink-50 pb-8 px-4 font-description relative">
      <div
        className="
          absolute inset-0 pointer-events-none opacity-20
          bg-[url('/images/bg-batik.jpg')] bg-repeat bg-contain
        "
      />

      <div className="relative max-w-2xl mx-auto space-y-4">
        {isLoading ? (
          // Skeleton loading
          <>
            {[...Array(3)].map((_, index) => (
              <div
                key={`skeleton-${index}`}
                className="animate-pulse bg-white/80 backdrop-blur-sm rounded-lg shadow p-6 border border-pink-100"
              >
                <div className="h-4 w-32 bg-gray-200 rounded mb-3" />
                <div className="h-3 w-full bg-gray-200 rounded mb-2" />
                <div className="h-3 w-3/4 bg-gray-200 rounded" />
              </div>
            ))}
          </>
        ) : (
          <>
            {visibleComments.map((comment) => (
              <div
                key={comment.id}
                className="bg-white/80 backdrop-blur-sm rounded-lg shadow p-6 text-left border border-pink-100"
              >
                <h3 className="font-semibold text-primary mb-2">
                  {comment.name}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {comment.message}
                </p>
              </div>
            ))}

            {hasMore && (
              <div className="flex justify-center pt-2">
                <button
                  type="button"
                  onClick={handleLoadMore}
                  className="px-4 py-2 rounded-lg border border-pink-200 bg-white/90 hover:bg-white transition font-medium text-primary shadow-sm"
                  aria-label="Tampilkan lebih banyak komentar"
                >
                  Tampilkan lebih banyak
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default CommentList;
