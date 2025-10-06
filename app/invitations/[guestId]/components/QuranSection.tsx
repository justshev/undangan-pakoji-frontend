import AnimatedDiv from "./AnimatedDiv";

const QuranSection = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 ">
        <AnimatedDiv className="text-center mb-16">
          <h2 className="font-heading text-4xl font-bold text-white mb-4">
            Ayat Suci Al-Quran
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </AnimatedDiv>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl  mx-auto">
        </div>
      </div>
    </section>
  );
};

export default QuranSection;
