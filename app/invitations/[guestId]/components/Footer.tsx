import Image from "next/image";

const Footer = () => {
  return (
    <footer className="py-12 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-6">
          <div className="w-16 h-16 relative mx-auto opacity-80">
            <Image
              src="/images/gunungan.webp"
              alt="Gunungan Wayang"
              fill
              className="object-contain"
              sizes="64px"
            />
          </div>
        </div>

        <h3 className="font-heading text-2xl font-bold mb-4">Rozi & Hana</h3>

        <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
          &ldquo;Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan
          untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan
          merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan
          sayang.&rdquo;
        </p>

        <p className="text-sm text-primary-foreground/60 mb-8">
          QS. Ar-Rum: 21
        </p>

        <div className="mb-8 p-6 bg-primary-foreground/10 rounded-lg max-w-2xl mx-auto">
          <p className="text-primary-foreground/90 mb-4 leading-relaxed">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila
            Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu kepada
            kami.
          </p>
          <p className="text-primary-foreground/80 font-medium">
            Wassalamualaikum Warahmatullahi Wabarakatuh
          </p>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20">
          <p className="text-sm text-primary-foreground/60">
            © 2025 - Created by Nirmalabs for Hana & Rozi
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
