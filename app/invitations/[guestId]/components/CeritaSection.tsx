import Image from "next/image";

const CeritaSection = () => {
  return (
    <>
      <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg overflow-hidden relative">
        <Image
          src="/images/cover-photo.jpg"
          alt="Pertemuan Pertama"
          fill
          className="object-cover hover:scale-105 transition-transform duration-300 shadow"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority
        />
      </div>
      <div className="aspect-square bg-gradient-to-br from-secondary/20 to-primary/20 rounded-lg overflow-hidden relative">
        <Image
          src="/images/cover-photo-1.JPG"
          alt="Lamaran"
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg overflow-hidden relative">
        <Image
          src="/images/cover-photo.jpg"
          alt="Prewedding"
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
    </>
  );
};

export default CeritaSection;
