"use client";

type Comment = {
  id: number;
  fullName: string;
  message: string;
};

type CommentListProps = {
  comments: Comment[];
};

const CommentList = ({ comments }: CommentListProps) => {
  if (comments.length === 0) {
    return (
      <section className="bg-pink-50 py-12 px-4 text-center">
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
    <section className="bg-pink-50 pb-8 px-4">
      <div className="max-w-2xl mx-auto space-y-6">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="bg-white/80 backdrop-blur-sm rounded-lg shadow p-6 text-left border border-pink-100"
          >
            <h3 className="font-semibold text-primary mb-2">
              {comment.fullName}
            </h3>
            <p className="text-gray-700 leading-relaxed">{comment.message}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommentList;
