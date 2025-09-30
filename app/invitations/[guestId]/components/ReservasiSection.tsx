import AnimatedDiv from "./AnimatedDiv";

const ReservasiSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <AnimatedDiv className="text-center mb-16">
          <h2 className="font-heading text-4xl font-bold text-primary mb-4">
            Konfirmasi Kehadiran
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Mohon konfirmasi kehadiran Anda untuk membantu kami dalam persiapan
            acara
          </p>
        </AnimatedDiv>

        <AnimatedDiv className="max-w-2xl mx-auto bg-card border border-primary/20 shadow-lg rounded-lg">
          <div className="p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  required
                  placeholder="Masukkan nama lengkap Anda"
                  className="w-full p-3 border border-border rounded-lg bg-input focus:ring-2 focus:ring-ring focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Konfirmasi Kehadiran
                </label>
                <select
                  required
                  className="w-full p-3 border border-border rounded-lg bg-input focus:ring-2 focus:ring-ring focus:border-transparent"
                >
                  <option value="">Pilih konfirmasi kehadiran</option>
                  <option value="hadir">Hadir</option>
                  <option value="tidak-hadir">Tidak Hadir</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Pesan & Doa
                </label>
                <textarea
                  placeholder="Tuliskan pesan dan doa untuk mempelai..."
                  rows={4}
                  className="w-full p-3 border border-border rounded-lg bg-input focus:ring-2 focus:ring-ring focus:border-transparent resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Kirim Konfirmasi
              </button>
            </form>
          </div>
        </AnimatedDiv>
      </div>
    </section>
  );
};

export default ReservasiSection;
