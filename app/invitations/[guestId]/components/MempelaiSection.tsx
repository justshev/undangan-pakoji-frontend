import { motion } from "framer-motion";
import Image from "next/image";

const MempelaiSection = () => {
  return (
    <section className="relative h-screen w-screen font-title overflow-hidden">
      <Image
        alt="Foto"
        src="/images/gallery-12.jpg"
        fill
        sizes="100vw"
        className="object-cover object-[50%_80%] md:object-[10%_40%] "
        priority
      />

      <div className="absolute inset-0 bg-black/40"></div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        className="absolute bottom-18 right-9 z-10 text-white text-right text-xs font-description md:text-base"
      >
        <h1 className="text-xl md:text-3xl mb-4 font-semibold">
          Fadhil Rozi Hendrawan, <br /> S.Kom., M.Kom.
        </h1>
        <p>Anak Pertama Dari</p>
        <p>Bapak H. Toni Surizi, S.T</p>
        <p>dan</p>
        <p>Ibu Hj. Hefnasari Pane, S.E</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        className="absolute top-26 md:top-18 left-9 z-10 text-white text-xs font-description text-left md:text-base"
      >
        <h1 className="text-xl md:text-3xl mb-4 font-bold">
          Fadhilah Raihanah, S.T., M.Si.
        </h1>
        <p>Anak Pertama Dari</p>
        <p>Bapak Dr. H. Erwin Budi Setiawan, S.Si., M.T</p>
        <p>dan</p>
        <p>Ibu Hj. Rosalina Dewi, S.P</p>
      </motion.div>
    </section>
  );
};

export default MempelaiSection;
