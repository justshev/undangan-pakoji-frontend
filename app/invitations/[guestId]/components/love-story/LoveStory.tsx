import AnimatedDiv from "../AnimatedDiv";
import LoveStoryItem from "./LoveStoryItem";

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

        <div className="max-w-4xl mx-auto space-y-4">
          {Array.from({ length: 5 }).map((item, idx) => (
            <LoveStoryItem key={idx} id={idx + 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoveStory;
