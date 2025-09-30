import AnimatedDiv from "./AnimatedDiv";

const ProfileSection = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <AnimatedDiv className="text-center mb-16">
          <h2 className="font-heading text-4xl font-bold text-white mb-4">
            Mempelai
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </AnimatedDiv>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <AnimatedDiv className="bg-card border border-primary/20 shadow-lg bg-gradient-to-br from-primary/15 to-secondary/5 hover:shadow-xl transition-shadow duration-300 rounded-lg">
            <div className="p-8 text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl font-heading font-bold text-primary-foreground">
                  B
                </span>
              </div>
              <h3 className="font-heading text-2xl font-bold text-primary mb-2">
                Fadhil Rozi Hendrawan, S.Kom., M.Kom.
              </h3>
              <p className="text-muted-foreground mb-4">Putra dari</p>
              <p className="font-medium">
                Bapak H. Toni Surizi & Ibu Hj. Hefnasari Pane
              </p>
            </div>
          </AnimatedDiv>

          <AnimatedDiv className="bg-card border border-primary/20 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg bg-gradient-to-br from-primary/15 to-secondary/5">
            <div className="p-8 text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-secondary to-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl font-heading font-bold text-primary-foreground">
                  S
                </span>
              </div>
              <h3 className="font-heading text-2xl font-bold text-primary mb-2">
                Fadhilah Raihanah, ST., M.Si
              </h3>
              <p className="text-muted-foreground mb-4">Putri dari</p>
              <p className="font-medium">
                Bapak H. Erwin Budi Setiawan & Ibu Hj. Rosalina Dewi
              </p>
            </div>
          </AnimatedDiv>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
