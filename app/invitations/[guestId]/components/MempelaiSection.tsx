import { motion } from "framer-motion";
import Image from "next/image";

const MempelaiSection = () => {
  return (
    <section className="relative h-screen w-screen font-title">
      <Image
        alt="Foto"
        src="/images/cover-photo.jpg"
        fill
        sizes="100vw"
        className="object-cover object-[70%_30%] hidden md:block"
        priority
      />
      <Image
        alt="Foto"
        src="/images/cover-photo-mobile.jpg"
        fill
        sizes="100vw"
        className="object-cover object-[60%_20%] md:hidden "
        priority
      />

      <div className="absolute inset-0 bg-black/40"></div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        className="absolute bottom-18 left-9 z-10 text-white text-left text-xs "
      >
        <h1 className="text-xl md:text-3xl mb-4 font-semibold">
          Fadhil Rozi Hendrawan, S.Kom., M.Kom.
        </h1>
        <p>Anak Ke-1 Dari 3 Bersaudara</p>
        <p>Bapak H. Toni Surizi, S.T</p>
        <p>dan</p>
        <p>Ibu Hj. Hefnasari Pane, S.E</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        className="absolute top-26 md:top-18 right-9 z-10 text-white text-xs  text-right"
      >
        <h1 className="text-xl md:text-3xl mb-4 font-bold">
          Fadhilah Raihanah, S.T., M.Si.
        </h1>
        <p>Anak Ke-1 Dari 4 Bersaudara</p>
        <p>Bapak Dr. H. Erwin Budi Setiawan, S.Si., M.T</p>
        <p>dan</p>
        <p>Ibu Hj. Rosalina Dewi, S.P</p>
      </motion.div>
    </section>
  );
};

export default MempelaiSection;
