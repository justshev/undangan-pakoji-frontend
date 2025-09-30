import { article } from "framer-motion/client";
import Image from "next/image";

const LoveStoryItem = () => {
  return (
    <article>
      <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg overflow-hidden relative">
        <Image
          src="/images/love-story-1.jpg"
          alt="Pertemuan Pertama"
          fill
          className="object-cover hover:scale-105 transition-transform duration-300 shadow"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority
        />
      </div>
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
    </article>
  );
};

export default LoveStoryItem;
