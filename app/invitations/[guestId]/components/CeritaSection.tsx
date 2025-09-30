import Image from "next/image";

const CeritaSection = () => {
  return (
    <>
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
      <div className="aspect-square bg-gradient-to-br from-secondary/20 to-primary/20 rounded-lg overflow-hidden relative">
        <Image
          src="/images/love-story-2.jpg"
          alt="Lamaran"
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg overflow-hidden relative">
        <Image
          src="/images/love-story-3.jpg"
          alt="Prewedding"
          fill
          className="object-cover hover:scale-105 transition-transform duration-300 object-[0%]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
    </>
  );
};

export default CeritaSection;
