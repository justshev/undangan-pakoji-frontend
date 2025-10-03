import Image from "next/image";
import AnimatedDiv from "./AnimatedDiv";

const PhotoGallerySection = () => {
  const imagePoolDesktop = [
    "/images/slider/foto-berdua-merah.jpg",
    "/images/cover-photo-1.JPG",
    "/images/gallery-3.jpg",
    "/images/cover-photo.JPG",
    "/images/gallery-5.JPG",
    "/images/cover-photo-mobile.jpg",
    "/images/cover-photo-7.JPG",
    "/images/gallery-8.jpg",
    "/images/gallery-9.jpg",
    "/images/gallery-10.jpg",
    "/images/gallery-11.jpg",
    "/images/gallery-12.JPG",
  ];

  const imagePoolMobile = [
    "/images/slider/foto-berdua-merah.jpg",
    "/images/cover-photo-1.JPG",
    "/images/cover-photo.JPG",
    "/images/gallery-3.jpg",
    "/images/gallery-8.jpg",
    "/images/gallery-5.JPG",
    "/images/cover-photo-7.JPG",
    "/images/cover-photo-mobile.jpg",
    "/images/gallery-9.jpg",
    "/images/gallery-12.JPG",
    "/images/gallery-10.jpg",
    "/images/gallery-11.jpg",
  ];

  const imagePoolMedium = [
    "/images/slider/foto-berdua-merah.jpg",
    "/images/cover-photo-1.JPG",
    "/images/gallery-3.jpg",
    "/images/cover-photo.JPG",
    "/images/gallery-8.jpg",
    "/images/gallery-5.JPG",
    "/images/cover-photo-mobile.jpg",
    "/images/cover-photo-7.JPG",
    "/images/gallery-9.jpg",
    "/images/gallery-10.jpg",
    "/images/gallery-11.jpg",
    "/images/gallery-12.JPG",
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <AnimatedDiv className="text-center mb-16">
          <h2 className="font-title text-4xl font-bold text-primary mb-4">
            Galeri Foto
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground font-description mt-4">
            Momen-momen indah perjalanan cinta kami
          </p>
        </AnimatedDiv>

        <AnimatedDiv className="lg:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto hidden">
          {imagePoolDesktop.map((item, idx) => (
            <div
              key={idx}
              className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg overflow-hidden group relative"
            >
              <Image
                src={item}
                alt={`Gallery ${idx + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300 cursor-pointer"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
          ))}
        </AnimatedDiv>

        <AnimatedDiv className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto md:hidden">
          {imagePoolMobile.map((item, idx) => (
            <div
              key={idx}
              className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg overflow-hidden group relative"
            >
              <Image
                src={item}
                alt={`Gallery ${idx + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300 cursor-pointer"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
          ))}
        </AnimatedDiv>

        <AnimatedDiv className="md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto lg:hidden hidden">
          {imagePoolMedium.map((item, idx) => (
            <div
              key={idx}
              className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg overflow-hidden group relative"
            >
              <Image
                src={item}
                alt={`Gallery ${idx + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300 cursor-pointer"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
          ))}
        </AnimatedDiv>
      </div>
    </section>
  );
};

export default PhotoGallerySection;
