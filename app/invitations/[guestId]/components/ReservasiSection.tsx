import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnimatedDiv from "./AnimatedDiv";
import useAddComments from "@/hooks/useAddComments";

const ReservasiSection = ({ guestName }: { guestName: string }) => {
  const { nameRef, messageRef, isPending, storeData } = useAddComments();
  return (
    <section className="py-20 bg-muted/30 relative">
      <div className="container mx-auto px-4">
        <AnimatedDiv className="text-center mb-16">
          <h2 className="font-title text-4xl font-bold text-primary mb-4">
            Doa & Pesan
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
          <p className="text-muted-foreground font-description mt-4 max-w-2xl mx-auto">
            Doa & Pesan Anda sangatlah membantu kami
          </p>
        </AnimatedDiv>

        <div
          className="
    absolute inset-0 pointer-events-none opacity-20
    bg-[url('/images/bg-batik.jpg')] bg-repeat bg-contain
  "
        />

        <AnimatedDiv className="max-w-2xl font-description mx-auto bg-card border border-primary/20 shadow-lg rounded-lg">
          <div className="p-8">
            <form className="space-y-6" onSubmit={storeData}>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Nama Lengkap
                </label>
                <div className="w-full p-3 border border-border rounded-lg bg-input">
                  <p>{guestName}</p>
                </div>

                <div className="mt-6">
                  <h1>Konfirmasi Kehadiran</h1>
                  <select
                    name=""
                    id=""
                    className="w-full p-3 border border-border rounded-lg bg-input"
                  >
                    <option value="">Hadir</option>
                    <option value="">Tidak Hadir</option>
                  </select>
                </div>

                <div className="mt-6">
                  <h1>Jumlah Kehadiran</h1>

                  <Tabs>
                    <TabsList className="w-full">
                      <TabsTrigger value="1">1</TabsTrigger>
                      <TabsTrigger value="2">2</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>

                {/* <input
                  ref={nameRef}
                  type="text"
                  required
                  placeholder="Masukkan nama lengkap Anda"
                  className="w-full p-3 border border-border rounded-lg bg-input focus:ring-2 focus:ring-ring focus:border-transparent"
                /> */}
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
                className={`w-full bg-primary ${
                  isPending ? "bg-primary/30" : ""
                }  text-primary-foreground font-medium py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300`}
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
