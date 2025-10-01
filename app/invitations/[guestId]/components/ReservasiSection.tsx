import { FormEvent, useRef } from "react";
import AnimatedDiv from "./AnimatedDiv";

const ReservasiSection = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const storeData = async (name: string, message: string) => {
    const response = await fetch("http://localhost:3001/api/guests/comment", {
      method: "POST",
      body: JSON.stringify({
        name,
        message,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      return alert("Gagal Mengirim Pesan");
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = nameRef.current?.value as string;
    const message = messageRef.current?.value as string;

    if (name.trim() === "" || message.trim() === "") {
      return alert("Nama atau pesan harus diisi!");
    }

    await storeData(name, message);
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <AnimatedDiv className="text-center mb-16">
          <h2 className="font-heading text-4xl font-bold text-primary mb-4">
            Doa & Pesan
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Doa & Pesan Anda sangatlah membantu kami
          </p>
        </AnimatedDiv>

        <AnimatedDiv className="max-w-2xl mx-auto bg-card border border-primary/20 shadow-lg rounded-lg">
          <div className="p-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Nama Lengkap
                </label>
                <input
                  ref={nameRef}
                  type="text"
                  required
                  placeholder="Masukkan nama lengkap Anda"
                  className="w-full p-3 border border-border rounded-lg bg-input focus:ring-2 focus:ring-ring focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Pesan & Doa
                </label>
                <textarea
                  ref={messageRef}
                  placeholder="Tuliskan pesan dan doa untuk mempelai..."
                  rows={4}
                  className="w-full p-3 border border-border rounded-lg bg-input focus:ring-2 focus:ring-ring focus:border-transparent resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Kirim Pesan
              </button>
            </form>
          </div>
        </AnimatedDiv>
      </div>
    </section>
  );
};

export default ReservasiSection;
