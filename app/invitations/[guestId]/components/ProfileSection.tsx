import AnimatedDiv from "./AnimatedDiv";
import { Quote } from "lucide-react";

const ProfileSection = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 text-[#B69F5E]">
        <AnimatedDiv className="text-center mb-42">
          <h2 className="text-7xl font-title">H&R</h2>
          <div className="absolute font-description mx-auto text-center w-full text-sm mt-4 px-2">
            <h1 className="text-2xl mb-2">Assalamualaikum Wr. Wb </h1>
            <p>
              Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta&apos;ala.
              Kami mengundang Bapak/Ibu/Saudara/I, untuk menghadiri Akad/Resepsi
              Pernikahan Kami,
            </p>
          </div>
        </AnimatedDiv>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <AnimatedDiv className="bg-card border border-primary/20 shadow-lg rounded-lg ">
            <div className="p-8 w-full text-center ">
              <Quote className="w-12 h-12 text-[#B69F5E] mx-auto mb-6" />
              <p className="text-lg text-primary  font-medium mb-4 leading-relaxed">
                &ldquo;وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ
                أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً
                وَرَحْمَةً&rdquo;
              </p>
              <p className="mb-4 text-[#B69F5E] leading-relaxed">
                &ldquo;Dan di antara tanda-tanda kekuasaan-Nya ialah Dia
                menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya
                kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya
                diantaramu rasa kasih dan sayang.&rdquo;
              </p>
              <p className="text-sm font-medium text-primary">QS. Ar-Rum: 21</p>
            </div>
          </AnimatedDiv>
          <AnimatedDiv className="bg-card border border-primary/20 shadow-lg rounded-lg ">
            <div className="p-8 w-full h-full text-center ">
              <Quote className="w-12 h-12 text-[#B69F5E] mx-auto mb-6" />
              <p className="text-lg text-primary font-medium mb-4 leading-relaxed">
                &ldquo;وَاللَّهُ جَعَلَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا
                وَجَعَلَ لَكُم مِّنْ أَزْوَاجِكُم بَنِينَ وَحَفَدَةً&rdquo;
              </p>
              <p className="text-[#B69F5E] mb-4 leading-relaxed">
                &ldquo;Allah menjadikan bagi kamu isteri-isteri dari jenis kamu
                sendiri dan menjadikan bagimu dari isteri-isteri kamu itu,
                anak-anak dan cucu-cucu.&rdquo;
              </p>
              <p className="text-sm font-medium text-primary">
                QS. An-Nahl: 72
              </p>
            </div>
          </AnimatedDiv>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
