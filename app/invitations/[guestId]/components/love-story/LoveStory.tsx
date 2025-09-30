import AnimatedDiv from "../AnimatedDiv";
import CeritaSection from "../CeritaSection";

const LoveStory = () => {
  return (
            <section className="py-20 bg-background">
              <div className="container mx-auto px-4">
                <AnimatedDiv className="text-center mb-16">
                  <h2 className="font-heading text-4xl font-bold text-primary mb-4">
                    Perjalanan Cerita Kami
                  </h2>
                  <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
                </AnimatedDiv>

                <div className="max-w-4xl mx-auto">
                  <AnimatedDiv className="grid md:grid-cols-3 gap-6 mb-12">
                    <CeritaSection />
                  </AnimatedDiv>

                  <AnimatedDiv className="space-y-8">
                    <div className="bg-card border border-primary/20 shadow-lg rounded-lg">
                      <div className="p-8">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold mr-4">
                            1
                          </div>
                          <h3 className="font-heading text-xl font-bold text-primary">
                            Pertemuan Pertama
                          </h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          Kami pertama kali bertemu di kampus pada tahun 2020...
                        </p>
                      </div>
                    </div>

                    <div className="bg-card border border-primary/20 shadow-lg rounded-lg">
                      <div className="p-8">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold mr-4">
                            2
                          </div>
                          <h3 className="font-heading text-xl font-bold text-primary">
                            Menjalin Hubungan
                          </h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          Setelah lulus kuliah, kami tetap menjaga komunikasi...
                        </p>
                      </div>
                    </div>

                    <div className="bg-card border border-primary/20 shadow-lg rounded-lg">
                      <div className="p-8">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold mr-4">
                            3
                          </div>
                          <h3 className="font-heading text-xl font-bold text-primary">
                            Lamaran & Pernikahan
                          </h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          Pada tahun 2025, Rozi melamar Hana...
                        </p>
                      </div>
                    </div>
                  </AnimatedDiv>
                </div>
              </div>
            </section>

  );
};

export default LoveStory;
