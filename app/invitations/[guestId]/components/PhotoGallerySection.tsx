import Image from "next/image";
import AnimatedDiv from "./AnimatedDiv";

const PhotoGallerySection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <AnimatedDiv className="text-center mb-16">
          <h2 className="font-heading text-4xl font-bold text-primary mb-4">
            Galeri Foto
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4">
            Momen-momen indah perjalanan cinta kami
          </p>
        </AnimatedDiv>

        <AnimatedDiv className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {Array.from({ length: 12 }).map((_, index) => {
            const imagePool = [
              "/images/cover-photo.jpg",
              "/images/cover-photo-1.JPG",
              "/images/gunungan.webp",
            ];
            const src = imagePool[index % imagePool.length];
            return (
              <div
                key={index}
                className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg overflow-hidden group relative"
              >
                <Image
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300 cursor-pointer"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
            );
          })}
        </AnimatedDiv>
      </div>
    </section>
  );
};

export default PhotoGallerySection;
