import { useState } from "react";

interface CopyButtonProps {
  link: string;
  idx: number;
  name: string;
}

const CopyButton = ({ link, name, idx }: CopyButtonProps) => {
  const [isCopied, setIsCopied] = useState(false);

  async function handleCopyClick() {
    try {
      await navigator.clipboard.writeText(`*Dear/Yth, Bapak/Ibu ${name}*

Assalamu'alaikum Warahmatullahi Wabarakatuh,

Dengan memohon Rahmat Allah Subhanahu wa Ta'ala, dan tanpa mengurangi rasa hormat kami. Melalui media sosial ini, kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk hadir di acara pernikahan kami yang Insya Allah akan dilaksanakan pada:

*RESEPSI*
🗓 Sabtu, 8 November 2025
⏰11.00 - 14.00 WIB 
📍Gedung Manterawu Telkom University 

Silahkan klik tautan di bawah ini untuk melihat undangan lengkap dan detil lokasi:

${link}

*Mohon kesediaan untuk mengisi konfirmasi kehadiran pada form RSVP, untuk medapat kode QR sebagai akses masuk.*

Terimakasih kami sampaikan atas perhatiannya. Kami sangat menghargai kerjasama Anda untuk tidak meneruskan pesan undangan ini kepada pihak lain.

Kami yang berbahagia,
*Hana & Rozi*
Beserta Keluarga Dr. H. Erwin Budi Setiawan, S.Si., M.T & H. Toni Surizi, S.T`);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1200);
    } catch (err) {
      const fallbackTextarea = document.createElement("textarea");
      fallbackTextarea.value = link;
      document.body.appendChild(fallbackTextarea);
      fallbackTextarea.select();
      try {
        document.execCommand("copy");
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 1200);
      } catch (err2) {
        console.error("Copy failed:", err2);
        alert("Gagal menyalin ke clipboard");
      }
      document.body.removeChild(fallbackTextarea);
    }
  }

  return (
    <div className="inline-flex items-center gap-3">
      <button
        type="button"
        onClick={handleCopyClick}
        className={`px-4 py-2 rounded-md ${
          idx % 2 === 0 ? "bg-muted/50" : "bg-muted/30"
        } text-white focus:outline-none focus:ring-2 focus:ring-green-400`}
        aria-live="polite"
        aria-pressed={isCopied}
      >
        {isCopied ? "Tersalin ✓" : "Salin"}
      </button>
    </div>
  );
};

export default CopyButton;
