import AnimatedDiv from "./AnimatedDiv";
import { Quote } from "lucide-react";

const ProfileSection = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <AnimatedDiv className="text-center mb-16">
          <h2 className="font-heading text-4xl font-bold text-white mb-4">
            <img
              src={"/images/inisial.png"}
              alt="Inisial"
              className="object-cover hover:scale-105 transition-transform duration-300 shadow w-48 h-48 mx-auto "
            />
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </AnimatedDiv>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <AnimatedDiv className="bg-card border border-primary/20 shadow-lg rounded-lg ">
            <div className="p-8 w-full text-center bg-gradient-to-br from-primary/15 to-secondary/5">
              <Quote className="w-12 h-12 text-secondary mx-auto mb-6" />
              <p className="text-lg text-primary font-medium mb-4 leading-relaxed">
                &ldquo;وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ
                أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً
                وَرَحْمَةً&rdquo;
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                &ldquo;Dan di antara tanda-tanda kekuasaan-Nya ialah Dia
                menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya
                kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya
                diantaramu rasa kasih dan sayang.&rdquo;
              </p>
              <p className="text-sm font-medium text-secondary">
                QS. Ar-Rum: 21
              </p>
            </div>
          </AnimatedDiv>
          <AnimatedDiv className="bg-card border border-primary/20 shadow-lg rounded-lg ">
            <div className="p-8 w-full h-full text-center bg-gradient-to-br from-primary/15 to-secondary/5">
              <Quote className="w-12 h-12 text-secondary mx-auto mb-6" />
              <p className="text-lg text-primary font-medium mb-4 leading-relaxed">
                &ldquo;وَاللَّهُ جَعَلَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا
                وَجَعَلَ لَكُم مِّنْ أَزْوَاجِكُم بَنِينَ وَحَفَدَةً&rdquo;
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                &ldquo;Allah menjadikan bagi kamu isteri-isteri dari jenis kamu
                sendiri dan menjadikan bagimu dari isteri-isteri kamu itu,
                anak-anak dan cucu-cucu.&rdquo;
              </p>
              <p className="text-sm font-medium text-secondary">
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
