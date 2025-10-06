"use client";

import useGetComments from "@/hooks/useGetComments";

const CommentList = () => {
  const { data, isLoading } = useGetComments();
  const safeData = Array.isArray(data) ? data : [];
  if (safeData.length === 0) {
    return (
      <section className="bg-pink-50 py-12 px-4 text-center font-description">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
          Doa & Pesan
        </h2>
        <p className="text-muted-foreground">
          Belum ada pesan. Jadilah yang pertama memberikan doa ✨
        </p>
      </section>
    );
  }
  return (
    <section className="bg-pink-50 pb-8 px-4 font-description relative">
      <div
        className="
    absolute inset-0 pointer-events-none opacity-20
    bg-[url('/images/bg-batik.jpg')] bg-repeat bg-cover
  "
      />

      <div className="max-w-2xl mx-auto space-y-6">
        {isLoading && <div>Loading...</div>}
        {!isLoading &&
          safeData.map((comment) => (
            <div
              key={comment.id}
              className="bg-white/80 backdrop-blur-sm rounded-lg shadow p-6 text-left border border-pink-100"
            >
              <h3 className="font-semibold text-primary mb-2">
                {comment.name}
              </h3>
              <p className="text-gray-700 leading-relaxed">{comment.message}</p>
            </div>
          ))}
      </div>
    </section>
  );
};

export default CommentList;
