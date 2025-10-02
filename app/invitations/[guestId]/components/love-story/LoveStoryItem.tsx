import Image from "next/image";
import AnimatedDiv from "../AnimatedDiv";

interface LoveStoryItemProps {
  id: number;
}

const LoveStoryItem = ({ id }: LoveStoryItemProps) => {
  return (
    <AnimatedDiv
      className={`md:flex ${id % 2 === 0 ? "md:flex-row-reverse" : ""} gap-4`}
    >
      <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg overflow-hidden relative bg-black w-full h-1/3 flex-1">
        <Image
          src="/images/love-story-1.jpg"
          alt="Pertemuan Pertama"
          fill
          className="object-cover hover:scale-105 transition-transform duration-300 shadow h-1/3"
          sizes="(max-width: 768px) 100vw, 33vw "
          priority
        />
      </div>
      <div className="bg-card border border-primary/20 shadow-lg rounded-lg w-full flex-1">
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
    </AnimatedDiv>
  );
};

export default LoveStoryItem;
