import AnimatedDiv from "../AnimatedDiv";
import LoveStoryItem from "./LoveStoryItem";

const LoveStory = () => {
  const loveStoryContent = [
    {
      id: 1,
      title: "Pertemuan Pertama",
      image: "/images/love-story-1.jpg",
      description:
        "Pada suatu ketika, kami bertemu dalam sebuah sesi refresh materi proyek karbon. Saat itu, Hana tampil memukau sebagai pembicara yang mempresentasikan proyek yang akan dijalankan. Dari sanalah, benih ketertarikan mulai tumbuh di hati Rozi. Tanpa disangka, diam-diam Hana pun merasakan hal yang sama. Namun, keduanya masih menahan diri untuk berkenalan — Rozi melihat Hana sebagai sosok yang tampak jutek, dan Hana pun menganggap Rozi demikian. Siapa sangka, dari “saling jutek” itulah kisah cinta ini perlahan mulai bersemi.",
    },
    {
      id: 2,
      title: "Pertemuan Kedua",
      image: "/images/love-story-2.JPG",
      description:
        " Selang sebulan kemudian, takdir kembali mempertemukan mereka dalam proyek karbon di Banten yang bekerja sama dengan Telkom University Kampus Jakarta. Selama tiga hari dua malam yang tak terasa, kebersamaan di tengah hutan untuk melakukan pengukuran karbon membuat hubungan mereka semakin akrab. Hana kerap meminta bantuan Rozi dalam berbagai urusan proyek, terutama saat di lapangan. Dari sinilah, rasa saling peduli dan ketertarikan di antara keduanya tumbuh semakin kuat.",
    },
    {
      id: 3,
      title: "Pertemuan Ketiga",
      image: "/images/love-story-3.jpg",
      description:
        "Setelah kegiatan proyek berakhir, Rozi kembali diundang ke Bandung untuk menghadiri Focus Group Discussion (FGD) penyusunan laporan akhir proyek karbon bersama Hana. Di sana, Rozi tidak hanya bertemu kembali dengan Hana, tetapi juga dengan kedua orang tuanya. Pertemuan itu menjadi momen hangat, di mana Rozi merasa diterima dengan penuh keakraban oleh keluarga Hana — sebuah awal yang indah dari hubungan yang semakin bermakna.",
    },
    {
      id: 4,
      title: "Pertemuan Keempat",
      image: "/images/love-story-4.jpg",
      description:
        "Sebulan kemudian, Rozi memberanikan diri untuk menghubungi Hana dengan niat yang tulus: menyatakan isi hatinya. Tak disangka, perasaan itu ternyata berbalas. Keduanya sepakat melangkah lebih jauh menuju keseriusan. Dengan penuh keyakinan, Rozi datang untuk meminang Hana di hadapan kedua orang tua dan keluarga besar mereka. Momen khitbah itu menjadi saksi indah atas cinta yang kini bersemi dengan restu keluarga.",
    },
    {
      id: 5,
      title: "Pertemuan Kelima",
      image: "/images/love-story-5.jpg",
      description:
        "Sejak saat itu, kisah cinta Hana dan Rozi menjadi kisah cinta yang penuh berkah — cinta yang direstui keluarga dan diridhai oleh Allah SWT. Mereka berjanji untuk menapaki bahtera kehidupan bersama, saling menguatkan dalam suka dan duka, hingga cinta mereka menjadi saksi abadi atas takdir yang mempertemukan dua hati yang saling mencintai.",
    },
  ];

  return (
    <section className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <AnimatedDiv className="text-center mb-16">
          <h2 className="font-title text-4xl font-bold text-primary mb-4">
            Perjalanan Cerita Kami
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </AnimatedDiv>

        <div
          className="
    absolute inset-0 pointer-events-none opacity-20
    bg-[url('/images/bg-batik.jpg')] bg-repeat bg-contain
  "
        />

        <div className="max-w-4xl mx-auto space-y-16 font-description">
          {loveStoryContent.map((item) => (
            <LoveStoryItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoveStory;
